import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { getConcept } from '@/content'
import { masteryBand } from '@/engine/mastery'
import type { MasteryDelta } from '@/engine/mastery'
import { Button } from '@/components/ui'

/* -------------------------------------------------------------------------- */
/* Proof column                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Lesson progress as a proof under construction rather than a percentage bar.
 * Each completed step is a discharged line; the inference rule sits above the
 * final step, so finishing the lesson literally closes the proof.
 */
export function ProofColumn({
  steps,
  current,
  className,
}: {
  steps: string[]
  current: number
  className?: string
}) {
  return (
    <nav
      aria-label="Lesson progress"
      className={cn('hidden lg:block', className)}
    >
      <ol className="space-y-0">
        {steps.map((step, i) => {
          const done = i < current
          const active = i === current
          const isLast = i === steps.length - 1

          return (
            <li key={i}>
              {isLast && (
                <div
                  className="my-1 ml-[3px] h-px w-8"
                  style={{ backgroundColor: 'var(--c-border-strong)' }}
                  aria-hidden
                />
              )}
              <div
                className="flex items-center gap-2.5 py-1 pl-3"
                style={{
                  borderLeft: `1px solid ${
                    done || active ? 'var(--c-accent)' : 'var(--c-border)'
                  }`,
                }}
              >
                <span
                  aria-hidden
                  className="font-mono text-2xs"
                  style={{
                    color: done
                      ? 'var(--c-accent)'
                      : active
                        ? 'var(--c-text)'
                        : 'var(--c-text-faint)',
                  }}
                >
                  {isLast ? '∴' : done ? '✓' : `${i + 1}`}
                </span>
                <span
                  className={cn(
                    'text-2xs',
                    active ? 'text-ink' : done ? 'text-muted' : 'text-faint',
                  )}
                >
                  {step}
                  {active && <span className="sr-only"> — current step</span>}
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* -------------------------------------------------------------------------- */
/* Completion                                                                 */
/* -------------------------------------------------------------------------- */

export function CompletionScreen({
  title,
  xpGained,
  score,
  leveledUp,
  levelTitle,
  deltas,
  nextLessonId,
}: {
  title: string
  xpGained: number
  score: number
  leveledUp: boolean
  levelTitle: string
  deltas: MasteryDelta[]
  nextLessonId: string | null
}) {
  const percent = Math.round(score * 100)

  return (
    <div className="mx-auto max-w-lg py-6 text-center">
      {/* The proof closes: premises above the rule, the result beneath it. */}
      <p className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">{title}</p>
      <div
        className="mx-auto my-3 h-px w-16"
        style={{ backgroundColor: 'var(--c-accent)' }}
        aria-hidden
      />
      <p className="flex items-baseline justify-center gap-2">
        <span aria-hidden className="font-mono text-lg" style={{ color: 'var(--c-accent)' }}>
          ∴
        </span>
        <span className="text-2xl font-semibold tracking-tight text-ink">Lesson complete</span>
      </p>

      <div className="mt-6 flex justify-center gap-8">
        <div>
          <div className="font-mono text-xl tabular-nums" style={{ color: 'var(--c-accent)' }}>
            {xpGained > 0 ? `+${xpGained}` : '0'}
          </div>
          <div className="mt-0.5 text-xs text-muted">XP earned</div>
        </div>
        <div>
          <div
            className="font-mono text-xl tabular-nums"
            style={{ color: percent === 100 ? 'var(--c-easy)' : 'var(--c-text)' }}
          >
            {percent}%
          </div>
          <div className="mt-0.5 text-xs text-muted">First-try accuracy</div>
        </div>
      </div>

      {xpGained === 0 && (
        <p className="mt-4 text-sm text-muted">
          A repeat run pays no XP, but your mastery still moved.
        </p>
      )}

      {leveledUp && (
        <p
          className="mt-4 rounded-[--radius-card] px-4 py-2.5 text-sm"
          style={{ backgroundColor: 'var(--c-accent-wash)', color: 'var(--c-accent)' }}
        >
          You reached {levelTitle}.
        </p>
      )}

      {deltas.length > 0 && (
        <div className="mt-8 text-left">
          <h2 className="mb-3 font-mono text-2xs uppercase tracking-[0.14em] text-faint">
            Mastery
          </h2>
          <ul className="divide-y rounded-[--radius-card] border">
            {deltas.map((delta) => {
              const concept = getConcept(delta.conceptId)
              const band = masteryBand(delta.after)
              const moved = delta.before === null ? delta.after : delta.after - delta.before

              return (
                <li
                  key={delta.conceptId}
                  className="flex items-baseline justify-between gap-3 px-4 py-2.5"
                >
                  <span className="truncate text-sm text-ink">
                    {concept?.term ?? delta.conceptId}
                  </span>
                  <span className="shrink-0 font-mono text-xs tabular-nums">
                    <span
                      style={{
                        color: moved >= 0 ? 'var(--c-easy)' : 'var(--c-hard)',
                      }}
                    >
                      {moved >= 0 ? '+' : ''}
                      {Math.round(moved)}
                    </span>
                    <span className="ml-2 text-faint">{band.label}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <div className="mt-8 flex justify-center gap-3">
        {nextLessonId ? (
          <Link to={`/learn/lesson/${nextLessonId}`}>
            <Button>Next lesson</Button>
          </Link>
        ) : (
          <Link to="/learn">
            <Button>Back to course</Button>
          </Link>
        )}
        <Link to="/">
          <Button variant="secondary">Home</Button>
        </Link>
      </div>
    </div>
  )
}
