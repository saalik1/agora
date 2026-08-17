import { getArgument } from '@/content'
import { ArgumentCard } from '@/components/argument/ArgumentCard'
import type { Section } from '@/types/content'

/**
 * Renders a lesson section by kind. One component per kind, dispatched here —
 * adding a section type means adding a case, not touching any lesson.
 */
export function SectionRenderer({ section }: { section: Section }) {
  switch (section.kind) {
    case 'explanation':
      return (
        <section>
          {section.heading && (
            <h2 className="mb-2 text-lg font-medium tracking-tight text-ink">{section.heading}</h2>
          )}
          <p className="text-base leading-relaxed text-ink">{section.body}</p>
        </section>
      )

    case 'definition':
      return (
        <section
          className="rounded-[--radius-card] px-4 py-3.5"
          style={{ backgroundColor: 'var(--c-accent-wash)' }}
        >
          <p className="font-mono text-2xs uppercase tracking-[0.14em]" style={{ color: 'var(--c-accent)' }}>
            Definition
          </p>
          <p className="mt-1.5 text-base text-ink">
            <strong className="font-medium">{section.term}</strong> — {section.body}
          </p>
        </section>
      )

    case 'example':
      return (
        <figure className="proof-rule pl-4">
          <p className="text-base leading-relaxed text-ink">{section.body}</p>
          {section.caption && (
            <figcaption className="mt-1.5 font-mono text-2xs uppercase tracking-wider text-faint">
              {section.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'argument':
      return <ArgumentCard argument={getArgument(section.ref)!} note={section.note} />

    case 'misconception':
      return (
        <section
          className="rounded-[--radius-card] px-4 py-3.5"
          style={{ backgroundColor: 'var(--c-medium-wash)' }}
        >
          <p
            className="font-mono text-2xs uppercase tracking-[0.14em]"
            style={{ color: 'var(--c-medium)' }}
          >
            Common mistake
          </p>
          <p className="mt-1.5 text-base text-muted line-through decoration-1">{section.claim}</p>
          <p className="mt-1.5 text-base leading-relaxed text-ink">{section.correction}</p>
        </section>
      )
  }
}
