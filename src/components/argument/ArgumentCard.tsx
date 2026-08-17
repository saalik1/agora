import { useState } from 'react'
import { cn } from '@/lib/cn'
import type { Argument, Objection, Premise, Verdict } from '@/types/content'

/**
 * The signature element. Arguments render as Fitch-style proofs: premises on
 * numbered mono lines, a horizontal inference rule, then the conclusion under a
 * turnstile. Expanding a premise indents one level and grows its own vertical
 * rule, so objections nest inside the premise they attack and responses nest
 * inside the objection.
 *
 * That indentation *is* the argument map. There is no separate graph view
 * because the notation already encodes the structure a graph would draw.
 */

const VERDICT: Record<Verdict, { label: string; color: string; wash: string }> = {
  valid: { label: 'Valid', color: 'var(--c-easy)', wash: 'var(--c-easy-wash)' },
  sound: { label: 'Sound', color: 'var(--c-easy)', wash: 'var(--c-easy-wash)' },
  contested: { label: 'Contested', color: 'var(--c-medium)', wash: 'var(--c-medium-wash)' },
  invalid: { label: 'Invalid', color: 'var(--c-hard)', wash: 'var(--c-hard-wash)' },
  unsound: { label: 'Unsound', color: 'var(--c-hard)', wash: 'var(--c-hard-wash)' },
}

function ResponseLine({ text }: { text: string }) {
  return (
    <div className="proof-rule pl-3">
      <p className="py-1 text-sm text-muted">
        <span className="mr-2 font-mono text-2xs uppercase tracking-wider text-faint">Reply</span>
        {text}
      </p>
    </div>
  )
}

function ObjectionBlock({ objection }: { objection: Objection }) {
  return (
    <div className="pl-3" style={{ borderLeft: '1px solid var(--c-hard)' }}>
      <p className="py-1 text-sm text-ink">
        <span
          className="mr-2 font-mono text-2xs uppercase tracking-wider"
          style={{ color: 'var(--c-hard)' }}
        >
          Objection
        </span>
        {objection.text}
      </p>
      {objection.responses?.map((response, i) => <ResponseLine key={i} text={response} />)}
    </div>
  )
}

function PremiseLine({ premise }: { premise: Premise }) {
  const [open, setOpen] = useState(false)
  const hasDetail = Boolean(premise.support || premise.objections?.length)
  const objectionCount = premise.objections?.length ?? 0

  return (
    <li>
      <div className="flex gap-3 py-1.5">
        <span className="shrink-0 select-none pt-0.5 font-mono text-xs text-faint">
          {premise.label}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-ink">{premise.text}</p>

          {hasDetail && (
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="mt-1 font-mono text-2xs uppercase tracking-wider text-faint transition-colors hover:text-accent"
            >
              {open ? '− Hide' : '+ Examine'}
              {objectionCount > 0 && !open && (
                <span style={{ color: 'var(--c-hard)' }}>
                  {' '}
                  · {objectionCount} objection{objectionCount === 1 ? '' : 's'}
                </span>
              )}
            </button>
          )}

          {open && hasDetail && (
            <div className="mt-2 space-y-2">
              {premise.support && (
                <div className="proof-rule pl-3">
                  <p className="py-1 text-sm text-muted">
                    <span className="mr-2 font-mono text-2xs uppercase tracking-wider text-faint">
                      Support
                    </span>
                    {premise.support}
                  </p>
                </div>
              )}
              {premise.objections?.map((objection, i) => (
                <ObjectionBlock key={i} objection={objection} />
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export function ArgumentCard({
  argument,
  note,
  className,
}: {
  argument: Argument
  note?: string
  className?: string
}) {
  const verdict = argument.verdict ? VERDICT[argument.verdict] : null

  return (
    <figure className={cn('rounded-[--radius-card] border bg-surface p-4 sm:p-5', className)}>
      <figcaption className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-sm font-medium text-ink">{argument.title}</span>
        {argument.form && (
          <span className="font-mono text-2xs uppercase tracking-wider text-faint">
            {argument.form}
          </span>
        )}
        {verdict && (
          <span
            className="rounded px-1.5 py-0.5 font-mono text-2xs uppercase tracking-wider"
            style={{ color: verdict.color, backgroundColor: verdict.wash }}
          >
            {verdict.label}
          </span>
        )}
      </figcaption>

      <ol className="text-base leading-relaxed">
        {argument.premises.map((premise) => (
          <PremiseLine key={premise.label} premise={premise} />
        ))}
      </ol>

      {/* The inference line. Everything above supports everything below. */}
      <div className="my-2 h-px" style={{ backgroundColor: 'var(--c-border-strong)' }} />

      <div className="flex gap-3 py-1.5">
        <span
          aria-hidden
          className="shrink-0 select-none pt-0.5 font-mono text-xs"
          style={{ color: 'var(--c-accent)' }}
        >
          ∴
        </span>
        <p className="font-medium text-ink">
          <span className="sr-only">Conclusion: </span>
          {argument.conclusion}
        </p>
      </div>

      {note && <p className="mt-3 border-t pt-3 text-sm text-muted">{note}</p>}
    </figure>
  )
}
