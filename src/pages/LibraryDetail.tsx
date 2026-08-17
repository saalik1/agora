import { Link, useParams } from 'react-router-dom'
import { argumentCards, getArgument, getConcept, getLesson } from '@/content'
import { masteryBand } from '@/engine/mastery'
import { useProgress } from '@/store/use-progress'
import { ArgumentCard } from '@/components/argument/ArgumentCard'
import { Card, MasteryBar } from '@/components/ui'

function NotFound({ what }: { what: string }) {
  return (
    <div className="py-16 text-center">
      <h1 className="text-xl font-semibold text-ink">That {what} does not exist</h1>
      <Link to="/library" className="mt-4 inline-block text-sm text-accent underline">
        Back to the library
      </Link>
    </div>
  )
}

function BackLink() {
  return (
    <Link
      to="/library"
      className="font-mono text-2xs uppercase tracking-wider text-faint hover:text-muted"
    >
      ← Library
    </Link>
  )
}

function RelatedList({
  heading,
  items,
}: {
  heading: string
  items: Array<{ to: string; label: string; sub?: string }>
}) {
  if (items.length === 0) return null

  return (
    <section className="mt-8">
      <h2 className="mb-3 font-mono text-2xs uppercase tracking-[0.14em] text-faint">{heading}</h2>
      <Card className="divide-y">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-4 py-3 transition-colors hover:bg-raised"
          >
            <span className="text-sm text-ink">{item.label}</span>
            {item.sub && <p className="mt-0.5 text-sm text-muted">{item.sub}</p>}
          </Link>
        ))}
      </Card>
    </section>
  )
}

/* -------------------------------------------------------------------------- */

export function ConceptPage() {
  const { conceptId = '' } = useParams()
  const concept = getConcept(conceptId)
  const record = useProgress((s) => s.progress.mastery[conceptId])

  if (!concept) return <NotFound what="concept" />

  return (
    <article className="max-w-2xl">
      <BackLink />
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{concept.term}</h1>
      <p className="mt-2 text-base text-muted">{concept.short}</p>

      {record && (
        <Card className="mt-5 px-4 py-3.5">
          <MasteryBar score={record.score} label="Your mastery" />
          <p className="mt-2 font-mono text-2xs text-faint">
            {masteryBand(record.score).label} · last reviewed {record.lastReviewed}
          </p>
        </Card>
      )}

      <div className="mt-6 border-t pt-6">
        <p className="text-base leading-relaxed text-ink">{concept.body}</p>
      </div>

      <RelatedList
        heading="Related concepts"
        items={concept.relatedConceptIds
          .map((id) => getConcept(id))
          .filter((c): c is NonNullable<typeof c> => Boolean(c))
          .map((c) => ({ to: `/library/concept/${c.id}`, label: c.term, sub: c.short }))}
      />

      <RelatedList
        heading="Arguments using it"
        items={concept.relatedArgumentIds
          .map((id) => getArgument(id))
          .filter((a): a is NonNullable<typeof a> => Boolean(a))
          .map((a) => ({ to: `/library/argument/${a.id}`, label: a.title, sub: a.form }))}
      />

      <RelatedList
        heading="Where it is taught"
        items={concept.lessonIds
          .map((id) => getLesson(id))
          .filter((l): l is NonNullable<typeof l> => Boolean(l))
          .map((l) => ({ to: `/learn/lesson/${l.id}`, label: l.title, sub: l.summary }))}
      />
    </article>
  )
}

/* -------------------------------------------------------------------------- */

export function ArgumentPage() {
  const { argumentId = '' } = useParams()
  const argument = getArgument(argumentId)

  if (!argument) return <NotFound what="argument" />

  const related = argumentCards.filter(
    (other) =>
      other.id !== argument.id && other.tags.some((tag) => argument.tags.includes(tag)),
  )

  const objectionCount = argument.premises.reduce(
    (total, premise) => total + (premise.objections?.length ?? 0),
    0,
  )

  return (
    <article className="max-w-2xl">
      <BackLink />
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{argument.title}</h1>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {argument.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border px-2 py-0.5 font-mono text-2xs uppercase tracking-wider text-faint"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <ArgumentCard argument={argument} />
      </div>

      <p className="mt-3 text-sm text-muted">
        {objectionCount > 0
          ? `Expand any premise to see its support, the ${objectionCount} objection${
              objectionCount === 1 ? '' : 's'
            } raised against it, and the responses to those objections.`
          : 'Expand a premise to see the support offered for it.'}
      </p>

      <RelatedList
        heading="Related arguments"
        items={related.map((other) => ({
          to: `/library/argument/${other.id}`,
          label: other.title,
          sub: other.form,
        }))}
      />
    </article>
  )
}
