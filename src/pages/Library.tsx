import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { argumentCards, concepts } from '@/content'
import { masteryBand } from '@/engine/mastery'
import { cn } from '@/lib/cn'
import { search } from '@/lib/search'
import { useProgress } from '@/store/use-progress'
import { Card, MasteryDot, PageHeader } from '@/components/ui'

type Tab = 'concepts' | 'arguments'

const KIND_LABEL: Record<string, string> = {
  lesson: 'Lesson',
  concept: 'Concept',
  argument: 'Argument',
}

export function Library() {
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<Tab>('concepts')
  const [tag, setTag] = useState<string | null>(null)
  const mastery = useProgress((s) => s.progress.mastery)

  const results = useMemo(() => search(query), [query])

  const tags = useMemo(
    () => [...new Set(argumentCards.flatMap((argument) => argument.tags))].sort(),
    [],
  )

  const visibleArguments = tag
    ? argumentCards.filter((argument) => argument.tags.includes(tag))
    : argumentCards

  const sortedConcepts = [...concepts].sort((a, b) => a.term.localeCompare(b.term))

  return (
    <div>
      <PageHeader
        eyebrow="Reference"
        title="Library"
        description="Every concept and argument in the course, with premises, objections and responses laid out in full."
      />

      <div className="mb-6">
        <label htmlFor="library-search" className="sr-only">
          Search the library
        </label>
        <input
          id="library-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search concepts, arguments and lessons"
          className="w-full rounded-[--radius-card] border bg-surface px-4 py-2.5 text-base text-ink placeholder:text-faint"
        />
      </div>

      {query.trim().length > 0 ? (
        <section aria-live="polite">
          <p className="mb-3 font-mono text-2xs uppercase tracking-[0.14em] text-faint">
            {results.length} result{results.length === 1 ? '' : 's'}
          </p>

          {results.length === 0 ? (
            <div className="rounded-[--radius-card] border border-dashed px-6 py-10 text-center">
              <p className="text-base text-ink">Nothing matched that</p>
              <p className="mt-1.5 text-sm text-muted">
                Try a single word — searching matches whole terms, not partial ones.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {results.map((result) => (
                <li key={`${result.kind}-${result.id}`}>
                  <Link
                    to={result.href}
                    className="block rounded-[--radius-card] border bg-surface px-4 py-3 transition-colors duration-150 hover:border-strong"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="truncate text-ink">{result.title}</span>
                      <span className="shrink-0 font-mono text-2xs uppercase tracking-wider text-faint">
                        {KIND_LABEL[result.kind]}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted">{result.subtitle}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <>
          <div role="tablist" aria-label="Library sections" className="mb-4 flex gap-1">
            {(['concepts', 'arguments'] as Tab[]).map((value) => (
              <button
                key={value}
                role="tab"
                aria-selected={tab === value}
                onClick={() => setTab(value)}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm capitalize transition-colors',
                  tab === value ? 'bg-raised text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {value}
                <span className="ml-1.5 font-mono text-2xs text-faint">
                  {value === 'concepts' ? concepts.length : argumentCards.length}
                </span>
              </button>
            ))}
          </div>

          {tab === 'concepts' ? (
            <>
              <p className="mb-2 font-mono text-2xs text-faint">
                <span aria-hidden>○</span> not started ·{' '}
                <span aria-hidden style={{ color: 'var(--c-hard)' }}>●</span> learning ·{' '}
                <span aria-hidden style={{ color: 'var(--c-medium)' }}>●</span> developing ·{' '}
                <span aria-hidden style={{ color: 'var(--c-accent)' }}>●</span> proficient ·{' '}
                <span aria-hidden style={{ color: 'var(--c-easy)' }}>✓</span> mastered
              </p>
              <Card className="divide-y">
              {sortedConcepts.map((concept) => {
                const record = mastery[concept.id]
                const band = record ? masteryBand(record.score) : null

                return (
                  <Link
                    key={concept.id}
                    to={`/library/concept/${concept.id}`}
                    className="block px-4 py-3 transition-colors hover:bg-raised"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="shrink-0">
                        <MasteryDot score={record ? record.score : null} />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-ink">{concept.term}</span>
                      <span className="shrink-0 font-mono text-2xs text-faint">
                        {band ? band.label : 'Not started'}
                      </span>
                    </div>
                    <p className="mt-0.5 pl-7 text-sm text-muted">{concept.short}</p>
                  </Link>
                )
              })}
              </Card>
            </>
          ) : (
            <>
              <div className="mb-3 flex flex-wrap gap-1.5">
                <button
                  onClick={() => setTag(null)}
                  className={cn(
                    'rounded border px-2 py-0.5 font-mono text-2xs uppercase tracking-wider transition-colors',
                    tag === null ? 'text-ink' : 'text-faint hover:text-muted',
                  )}
                  style={tag === null ? { borderColor: 'var(--c-accent)' } : undefined}
                >
                  All
                </button>
                {tags.map((value) => (
                  <button
                    key={value}
                    onClick={() => setTag(value === tag ? null : value)}
                    className={cn(
                      'rounded border px-2 py-0.5 font-mono text-2xs uppercase tracking-wider transition-colors',
                      tag === value ? 'text-ink' : 'text-faint hover:text-muted',
                    )}
                    style={tag === value ? { borderColor: 'var(--c-accent)' } : undefined}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <Card className="divide-y">
                {visibleArguments.map((argument) => (
                  <Link
                    key={argument.id}
                    to={`/library/argument/${argument.id}`}
                    className="block px-4 py-3 transition-colors hover:bg-raised"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="truncate text-ink">{argument.title}</span>
                      {argument.form && (
                        <span className="shrink-0 font-mono text-2xs text-faint">
                          {argument.form}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 font-mono text-sm text-muted">
                      <span aria-hidden>∴ </span>
                      {argument.conclusion}
                    </p>
                  </Link>
                ))}
              </Card>
            </>
          )}
        </>
      )}
    </div>
  )
}
