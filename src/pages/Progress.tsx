import { ACHIEVEMENTS } from '@/engine/achievements'
import { weakestConcepts } from '@/engine/mastery'
import { currentStreak } from '@/engine/streak'
import { toDayStamp } from '@/lib/date'
import { useLevel, useProgress } from '@/store/use-progress'
import { Card, EmptyState, MasteryBar, PageHeader } from '@/components/ui'

export function ProgressPage() {
  const today = toDayStamp(new Date())
  const progress = useProgress((s) => s.progress)
  const level = useLevel()

  const answered = progress.answers.length
  const correct = progress.answers.filter((a) => a.correct).length
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : null
  const weakest = weakestConcepts(progress.mastery, 5)

  const rows: Array<[string, string]> = [
    ['Level', `${level.level} — ${level.title}`],
    ['Total XP', progress.xp.toLocaleString()],
    ['Current streak', `${currentStreak(progress.streak, today)} days`],
    ['Longest streak', `${progress.streak.longest} days`],
    ['Lessons completed', String(Object.keys(progress.lessons).length)],
    ['Questions answered', String(answered)],
    ['Accuracy', accuracy === null ? '—' : `${accuracy}%`],
  ]

  return (
    <div>
      <PageHeader eyebrow="Statistics" title="Progress" />

      <Card className="mb-8 divide-y">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between px-4 py-3">
            <span className="text-sm text-muted">{label}</span>
            <span className="font-mono text-sm tabular-nums text-ink">{value}</span>
          </div>
        ))}
      </Card>

      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-ink">Weakest concepts</h2>
        {weakest.length === 0 ? (
          <EmptyState
            title="No activity yet"
            body="Your mastery will build as you work through lessons."
          />
        ) : (
          <Card className="space-y-4 px-4 py-4">
            {weakest.map((concept) => (
              <MasteryBar key={concept.conceptId} score={concept.score} label={concept.conceptId} />
            ))}
          </Card>
        )}
      </section>

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
    </div>
  )
}
