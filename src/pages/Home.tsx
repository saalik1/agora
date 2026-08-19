import { Link } from 'react-router-dom'
import { achievementById } from '@/engine/achievements'
import { aggregateMastery } from '@/engine/mastery'
import { selectReviewConcepts } from '@/engine/review'
import { currentStreak, isStreakAtRisk } from '@/engine/streak'
import { dailyGoalState } from '@/engine/xp'
import { buildReviewSet } from '@/engine/review'
import { reviewPool } from '@/content'
import { isCourseComplete, lessonLocation, nextLessonFor, unitProgress } from '@/lib/curriculum'
import { subjects } from '@/content'
import { toDayStamp } from '@/lib/date'
import { useLevel, useProgress } from '@/store/use-progress'
import { Button, Card, DifficultyPill, MasteryBar } from '@/components/ui'

function Stat({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="px-4 py-3.5">
      <div className="font-mono text-xl tabular-nums" style={tone ? { color: tone } : undefined}>
        {value}
      </div>
      <div className="mt-0.5 text-xs text-muted">{label}</div>
    </div>
  )
}

export function Home() {
  const today = toDayStamp(new Date())
  const level = useLevel()
  const progress = useProgress((s) => s.progress)

  const streak = currentStreak(progress.streak, today)
  const atRisk = isStreakAtRisk(progress.streak, today)
  const goal = dailyGoalState(progress.xpByDay, today, progress.settings.dailyGoal)
  const lessonsDone = Object.keys(progress.lessons).length

  const nextLesson = nextLessonFor(progress.lessons)
  const finished = isCourseComplete(progress.lessons)
  // Every subject, not just the first — otherwise a second subject's mastery
  // silently never appears on the dashboard.
  const subjectSections = subjects
    .map((subject) => ({ subject, units: unitProgress(progress.lessons, subject.id) }))
    .filter((section) => section.units.length > 0)

  const reviewReady = buildReviewSet(
    selectReviewConcepts(progress.mastery, today, 10),
    reviewPool(),
    progress.answers.slice(-20).map((a) => a.exerciseId),
    10,
  ).length

  const earned = Object.entries(progress.achievements)
    .sort(([, a], [, b]) => b.localeCompare(a))
    .slice(0, 3)

  return (
    <div>
      <header className="mb-8">
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">
          Level {level.level}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">{level.title}</h1>
        <p className="mt-2 font-mono text-sm text-muted">
          {progress.xp.toLocaleString()} XP
          {level.xpToNext !== null && (
            <span className="text-faint">
              {' '}
              · {level.xpToNext} to level {level.level + 1}
            </span>
          )}
        </p>
      </header>

      {/* Continue: the single most important control on the page. */}
      <Card className="mb-6 overflow-hidden">
        <div className="px-4 py-4">
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">
            {finished ? 'Revisit' : lessonsDone === 0 ? 'Start here' : 'Continue'}
          </p>

          {nextLesson ? (
            <>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h2 className="text-lg font-medium tracking-tight text-ink">
                  {nextLesson.title}
                </h2>
                <DifficultyPill level={nextLesson.difficulty} />
              </div>
              <p className="mt-1 text-sm text-muted">{nextLesson.summary}</p>
              <p className="mt-1 font-mono text-2xs text-faint">
                {lessonLocation(nextLesson.id)} · {nextLesson.estimatedMinutes} min ·{' '}
                {nextLesson.xpReward} XP
              </p>
              <div className="mt-4">
                <Link to={`/learn/lesson/${nextLesson.id}`}>
                  <Button>{finished ? 'Revisit lesson' : 'Continue'}</Button>
                </Link>
              </div>
            </>
          ) : (
            <p className="mt-2 text-sm text-muted">No lessons available.</p>
          )}
        </div>
      </Card>

      {/* Daily goal, read as a proof line: work accumulates towards a threshold. */}
      <Card className="mb-6">
        <div className="flex items-baseline justify-between px-4 pt-4">
          <span className="text-sm text-ink">Today</span>
          <span className="font-mono text-xs text-muted">
            {goal.earned} / {goal.goal} XP
          </span>
        </div>
        <div className="px-4 pb-4 pt-3">
          <div className="h-1 overflow-hidden rounded-full bg-raised">
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{
                width: `${Math.max(2, goal.progress * 100)}%`,
                backgroundColor: goal.met ? 'var(--c-easy)' : 'var(--c-accent)',
              }}
            />
          </div>
          <p className="mt-2.5 text-xs text-muted">
            {goal.met
              ? 'Daily goal met. Anything further is extra.'
              : atRisk
                ? 'Your streak lapses at midnight unless you finish a lesson or a practice set.'
                : 'Finish a lesson or a practice set to count today.'}
          </p>
        </div>
      </Card>

      <Card className="mb-8 grid grid-cols-2 divide-x divide-y sm:grid-cols-4 sm:divide-y-0">
        <Stat
          label="Day streak"
          value={String(streak)}
          tone={streak > 0 ? 'var(--c-medium)' : undefined}
        />
        <Stat label="Lessons done" value={String(lessonsDone)} />
        <Stat label="Questions answered" value={String(progress.answers.length)} />
        <Stat label="Longest streak" value={String(progress.streak.longest)} />
      </Card>

      {reviewReady > 0 && (
        <Card className="mb-8 flex flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div>
            <p className="text-ink">
              {reviewReady} question{reviewReady === 1 ? '' : 's'} ready to review
            </p>
            <p className="mt-0.5 text-sm text-muted">
              Weighted towards what you got wrong and what you have not seen recently.
            </p>
          </div>
          <Link to="/practice">
            <Button variant="secondary">Practise</Button>
          </Link>
        </Card>
      )}

      {subjectSections.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-ink">Mastery</h2>
          <div className="space-y-4">
            {subjectSections.map(({ subject, units }) => (
              <Card key={subject.id} className="px-4 py-4">
                <p className="mb-3 font-mono text-2xs uppercase tracking-[0.14em] text-faint">
                  {subject.title}
                </p>
                <div className="space-y-4">
                  {units.map(({ unit, lessons, completedCount, conceptIds }) => (
                    <div key={unit.id}>
                      <MasteryBar
                        score={aggregateMastery(progress.mastery, conceptIds)}
                        label={unit.title}
                      />
                      <p className="mt-1 font-mono text-2xs text-faint">
                        {completedCount} of {lessons.length} lessons
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {earned.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-ink">Recently earned</h2>
          <Card className="divide-y">
            {earned.map(([id]) => {
              const achievement = achievementById(id)
              if (!achievement) return null
              return (
                <div key={id} className="flex items-start gap-3 px-4 py-3">
                  <span
                    aria-hidden
                    className="mt-0.5 font-mono text-sm"
                    style={{ color: 'var(--c-easy)' }}
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm text-ink">{achievement.title}</p>
                    <p className="text-xs text-faint">{achievement.description}</p>
                  </div>
                </div>
              )
            })}
          </Card>
        </section>
      )}

      <p className="text-xs text-faint">
        Progress is stored in this browser only.{' '}
        <Link to="/settings" className="underline underline-offset-2 hover:text-muted">
          Export it
        </Link>{' '}
        to move to another device.
      </p>
    </div>
  )
}
