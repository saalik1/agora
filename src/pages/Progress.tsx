import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getConcept, subjects } from '@/content'
import { ACHIEVEMENTS } from '@/engine/achievements'
import { aggregateMastery, masteryBand, strongestConcepts, weakestConcepts } from '@/engine/mastery'
import { currentStreak } from '@/engine/streak'
import { toDayStamp } from '@/lib/date'
import { unitProgress } from '@/lib/curriculum'
import { useLevel, useProgress } from '@/store/use-progress'
import { Card, EmptyState, MasteryBar, MasteryDot, PageHeader } from '@/components/ui'

/** Accuracy over the answers Agora still has recorded. */
function accuracyOf(answers: { correct: boolean }[]): number | null {
  if (answers.length === 0) return null
  return Math.round((answers.filter((a) => a.correct).length / answers.length) * 100)
}

function ConceptRow({ conceptId, score }: { conceptId: string; score: number }) {
  const band = masteryBand(score)
  return (
    <Link
      to={`/library/concept/${conceptId}`}
      className="flex items-baseline gap-3 px-4 py-2.5 transition-colors hover:bg-raised"
    >
      <span className="shrink-0">
        <MasteryDot score={score} />
      </span>
      <span className="min-w-0 flex-1 truncate text-sm text-ink">
        {getConcept(conceptId)?.term ?? conceptId}
      </span>
      <span className="shrink-0 font-mono text-2xs text-faint">{band.label}</span>
    </Link>
  )
}

export function ProgressPage() {
  const today = toDayStamp(new Date())
  const progress = useProgress((s) => s.progress)
  const level = useLevel()

  const answered = progress.answers.length
  const accuracy = accuracyOf(progress.answers)
  const weakest = weakestConcepts(progress.mastery, 5)
  const strongest = strongestConcepts(progress.mastery, 5)

  /**
   * Per-subject breakdown. Global totals stopped being useful once there were
   * four subjects — knowing your overall mastery is 40% says nothing about
   * whether that is even coverage or one strong subject and three untouched.
   */
  const bySubject = useMemo(
    () =>
      subjects.map((subject) => {
        const units = unitProgress(progress.lessons, subject.id)
        const lessons = units.flatMap((u) => u.lessons)
        const conceptIds = [...new Set(units.flatMap((u) => u.conceptIds))]
        const subjectAnswers = progress.answers.filter((answer) =>
          answer.conceptIds.some((id) => conceptIds.includes(id)),
        )

        return {
          subject,
          units,
          completed: units.reduce((total, u) => total + u.completedCount, 0),
          total: lessons.length,
          mastery: aggregateMastery(progress.mastery, conceptIds),
          answered: subjectAnswers.length,
          accuracy: accuracyOf(subjectAnswers),
        }
      }),
    [progress.lessons, progress.mastery, progress.answers],
  )

  const overallRows: Array<[string, string]> = [
    ['Level', `${level.level} — ${level.title}`],
    ['Total XP', progress.xp.toLocaleString()],
    ['Current streak', `${currentStreak(progress.streak, today)} days`],
    ['Longest streak', `${progress.streak.longest} days`],
    ['Lessons completed', String(Object.keys(progress.lessons).length)],
    ['Questions answered', String(answered)],
    ['Accuracy', accuracy === null ? '—' : `${accuracy}%`],
  ]

  const hasActivity = answered > 0 || Object.keys(progress.lessons).length > 0

  return (
    <div>
      <PageHeader eyebrow="Statistics" title="Progress" />

      <Card className="mb-8 divide-y">
        {overallRows.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between px-4 py-3">
            <span className="text-sm text-muted">{label}</span>
            <span className="font-mono text-sm tabular-nums text-ink">{value}</span>
          </div>
        ))}
      </Card>

      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-ink">By subject</h2>
        <div className="space-y-3">
          {bySubject.map((row) => (
            <Card key={row.subject.id} className="px-4 py-4">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-ink">{row.subject.title}</span>
                <span className="font-mono text-2xs text-faint">
                  {row.completed} / {row.total} lessons
                  {row.accuracy !== null && ` · ${row.accuracy}% accuracy`}
                </span>
              </div>

              <MasteryBar score={row.mastery} label="Overall mastery" />

              <div className="mt-4 space-y-3 border-t pt-3">
                {row.units.map((unit) => (
                  <MasteryBar
                    key={unit.unit.id}
                    score={aggregateMastery(progress.mastery, unit.conceptIds)}
                    label={unit.unit.title}
                  />
                ))}
              </div>

              {row.answered === 0 && (
                <p className="mt-3 text-xs text-faint">
                  Not started.{' '}
                  <Link to="/learn" className="underline underline-offset-2 hover:text-muted">
                    Open Learn
                  </Link>{' '}
                  to begin this subject.
                </p>
              )}
            </Card>
          ))}
        </div>
      </section>

      {hasActivity ? (
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <section>
            <h2 className="mb-3 text-sm font-medium text-ink">Weakest concepts</h2>
            <Card className="divide-y">
              {weakest.map((c) => (
                <ConceptRow key={c.conceptId} conceptId={c.conceptId} score={c.score} />
              ))}
            </Card>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-medium text-ink">Strongest concepts</h2>
            <Card className="divide-y">
              {strongest.map((c) => (
                <ConceptRow key={c.conceptId} conceptId={c.conceptId} score={c.score} />
              ))}
            </Card>
          </section>
        </div>
      ) : (
        <div className="mb-8">
          <EmptyState
            title="No activity yet"
            body="Your mastery will build as you work through lessons."
            action={{ label: 'Open Learn', to: '/learn' }}
          />
        </div>
      )}

      <section>
        <h2 className="mb-3 text-sm font-medium text-ink">Achievements</h2>
        <Card className="divide-y">
          {ACHIEVEMENTS.map((achievement) => {
            const earned = achievement.id in progress.achievements
            return (
              <div key={achievement.id} className="flex items-start gap-3 px-4 py-3">
                <span
                  aria-hidden
                  className="mt-0.5 font-mono text-sm"
                  style={{ color: earned ? 'var(--c-easy)' : 'var(--c-text-faint)' }}
                >
                  {earned ? '✓' : '·'}
                </span>
                <div>
                  <p className={earned ? 'text-sm text-ink' : 'text-sm text-muted'}>
                    {achievement.title}
                    {!earned && <span className="sr-only"> — not yet earned</span>}
                  </p>
                  <p className="text-xs text-faint">{achievement.description}</p>
                </div>
              </div>
            )
          })}
        </Card>
      </section>

      <p className="mt-8 text-xs text-faint">
        Accuracy is calculated over your most recent 500 answers.
      </p>
    </div>
  )
}
