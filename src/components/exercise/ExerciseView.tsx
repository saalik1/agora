import { useMemo, useState } from 'react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui'
import type { ChoiceExercise, SortExercise, StatementRole } from '@/types/content'

/* -------------------------------------------------------------------------- */
/* Feedback                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Feedback names the specific confusion rather than announcing a verdict. It is
 * also announced to screen readers, and never signals correctness by colour
 * alone — the icon and label carry the same information.
 */
function Feedback({ correct, children }: { correct: boolean; children: React.ReactNode }) {
  const color = correct ? 'var(--c-easy)' : 'var(--c-hard)'
  const wash = correct ? 'var(--c-easy-wash)' : 'var(--c-hard-wash)'

  return (
    <div
      role="status"
      aria-live="polite"
      className="mt-4 rounded-[--radius-card] px-4 py-3"
      style={{ backgroundColor: wash }}
    >
      <p className="font-mono text-2xs uppercase tracking-[0.14em]" style={{ color }}>
        <span aria-hidden className="mr-1.5">
          {correct ? '✓' : '✕'}
        </span>
        {correct ? 'Correct' : 'Not quite'}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-ink">{children}</div>
    </div>
  )
}

export interface ExerciseResult {
  correct: boolean
}

/* -------------------------------------------------------------------------- */
/* Choice                                                                     */
/* -------------------------------------------------------------------------- */

export function ChoiceExerciseView({
  exercise,
  onAnswered,
  onNext,
  isLast,
}: {
  exercise: ChoiceExercise
  onAnswered: (result: ExerciseResult) => void
  onNext: () => void
  isLast: boolean
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)

  const chosen = exercise.options.find((option) => option.id === selected)
  const correct = selected === exercise.correctId

  function check() {
    if (!selected) return
    setChecked(true)
    onAnswered({ correct: selected === exercise.correctId })
  }

  return (
    <div>
      <fieldset disabled={checked}>
        <legend className="mb-3 text-lg leading-snug text-ink">{exercise.prompt}</legend>

        {exercise.stimulus && (
          <blockquote className="proof-rule mb-4 pl-4 text-base leading-relaxed text-ink">
            {exercise.stimulus}
          </blockquote>
        )}

        <div className="space-y-2">
          {exercise.options.map((option) => {
            const isSelected = selected === option.id
            const isAnswer = option.id === exercise.correctId
            const showAsAnswer = checked && isAnswer
            const showAsWrong = checked && isSelected && !isAnswer

            return (
              <label
                key={option.id}
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-[--radius-card] border px-4 py-3',
                  'transition-colors duration-150',
                  !checked && 'hover:border-strong',
                  !checked && isSelected && 'bg-raised',
                )}
                style={
                  showAsAnswer
                    ? { borderColor: 'var(--c-easy)', backgroundColor: 'var(--c-easy-wash)' }
                    : showAsWrong
                      ? { borderColor: 'var(--c-hard)', backgroundColor: 'var(--c-hard-wash)' }
                      : isSelected && !checked
                        ? { borderColor: 'var(--c-accent)' }
                        : undefined
                }
              >
                <input
                  type="radio"
                  name={exercise.id}
                  value={option.id}
                  checked={isSelected}
                  onChange={() => setSelected(option.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0 font-mono text-xs"
                  style={{
                    color: showAsAnswer
                      ? 'var(--c-easy)'
                      : showAsWrong
                        ? 'var(--c-hard)'
                        : isSelected
                          ? 'var(--c-accent)'
                          : 'var(--c-text-faint)',
                  }}
                >
                  {showAsAnswer ? '✓' : showAsWrong ? '✕' : isSelected ? '●' : '○'}
                </span>
                <span className="text-base leading-relaxed text-ink">{option.text}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {checked && chosen && (
        <Feedback correct={correct}>
          <p>{chosen.explanation}</p>
          {!correct && (
            <p className="mt-2 text-muted">
              {exercise.options.find((o) => o.id === exercise.correctId)?.explanation}
            </p>
          )}
        </Feedback>
      )}

      <div className="mt-5">
        {checked ? (
          <Button onClick={onNext}>{isLast ? 'Finish lesson' : 'Next'}</Button>
        ) : (
          <Button onClick={check} disabled={!selected}>
            Check
          </Button>
        )}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Sort — argument reconstruction                                             */
/* -------------------------------------------------------------------------- */

const ROLES: Array<{ value: StatementRole; label: string }> = [
  { value: 'premise', label: 'Premise' },
  { value: 'conclusion', label: 'Conclusion' },
  { value: 'irrelevant', label: 'Neither' },
]

export function SortExerciseView({
  exercise,
  onAnswered,
  onNext,
  isLast,
}: {
  exercise: SortExercise
  onAnswered: (result: ExerciseResult) => void
  onNext: () => void
  isLast: boolean
}) {
  const [assignments, setAssignments] = useState<Record<string, StatementRole>>({})
  const [checked, setChecked] = useState(false)

  // Shuffled once per mount so the ordering does not give the answer away.
  const statements = useMemo(
    () => [...exercise.statements].sort(() => Math.random() - 0.5),
    [exercise.statements],
  )

  const allAssigned = statements.every((s) => assignments[s.id])
  const correct = statements.every((s) => assignments[s.id] === s.role)

  function check() {
    if (!allAssigned) return
    setChecked(true)
    onAnswered({ correct })
  }

  return (
    <div>
      <p className="mb-4 text-lg leading-snug text-ink">{exercise.prompt}</p>

      <ul className="space-y-3">
        {statements.map((statement) => {
          const assigned = assignments[statement.id]
          const wasRight = checked && assigned === statement.role

          return (
            <li
              key={statement.id}
              className="rounded-[--radius-card] border px-4 py-3"
              style={
                checked
                  ? {
                      borderColor: wasRight ? 'var(--c-easy)' : 'var(--c-hard)',
                      backgroundColor: wasRight ? 'var(--c-easy-wash)' : 'var(--c-hard-wash)',
                    }
                  : undefined
              }
            >
              <p className="text-base leading-relaxed text-ink">{statement.text}</p>

              <div
                role="radiogroup"
                aria-label={`Role of: ${statement.text}`}
                className="mt-2.5 flex flex-wrap gap-1.5"
              >
                {ROLES.map((role) => {
                  const active = assigned === role.value
                  const isTruth = checked && statement.role === role.value

                  return (
                    <button
                      key={role.value}
                      role="radio"
                      aria-checked={active}
                      disabled={checked}
                      onClick={() =>
                        setAssignments((prev) => ({ ...prev, [statement.id]: role.value }))
                      }
                      className={cn(
                        'rounded border px-2.5 py-1 font-mono text-2xs uppercase tracking-wider',
                        'transition-colors duration-150 disabled:cursor-default',
                        active ? 'text-ink' : 'text-faint hover:text-muted',
                      )}
                      style={
                        isTruth
                          ? { borderColor: 'var(--c-easy)', color: 'var(--c-easy)' }
                          : active
                            ? { borderColor: 'var(--c-accent)', color: 'var(--c-accent)' }
                            : undefined
                      }
                    >
                      {role.label}
                      {isTruth && !active && <span className="sr-only"> — correct answer</span>}
                    </button>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>

      {checked && (
        <Feedback correct={correct}>
          <p>{exercise.explanation}</p>
        </Feedback>
      )}

      <div className="mt-5">
        {checked ? (
          <Button onClick={onNext}>{isLast ? 'Finish lesson' : 'Next'}</Button>
        ) : (
          <Button onClick={check} disabled={!allAssigned}>
            Check
          </Button>
        )}
      </div>
    </div>
  )
}
