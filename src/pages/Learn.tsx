import { Link } from 'react-router-dom'
import { lessonsOfUnit, subjects, unitsOfSubject } from '@/content'
import { aggregateMastery, isLessonUnlocked } from '@/engine/mastery'
import { lessonIdsOfSubject } from '@/lib/curriculum'
import { useProgress } from '@/store/use-progress'
import { Card, DifficultyPill, MasteryBar, PageHeader } from '@/components/ui'

export function Learn() {
  const lessons = useProgress((s) => s.progress.lessons)
  const mastery = useProgress((s) => s.progress.mastery)

  return (
    <div>
      <PageHeader
        eyebrow="Curriculum"
        title="Learn"
        description="Subjects run in order — each builds on the one before it — but you can start any of them whenever you like."
      />

      <div className="space-y-12">
        {subjects.map((subject) => {
          const order = lessonIdsOfSubject(subject.id)
          const subjectUnits = unitsOfSubject(subject.id)
          const allLessons = subjectUnits.flatMap((unit) => lessonsOfUnit(unit.id))
          const doneCount = allLessons.filter((lesson) => lesson.id in lessons).length

          return (
            <section key={subject.id}>
              <header className="mb-5 border-b pb-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold tracking-tight text-ink">
                    {subject.title}
                  </h2>
                  <span className="font-mono text-2xs text-faint">
                    {doneCount} / {allLessons.length} lessons
                  </span>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-muted">{subject.blurb}</p>
              </header>

              <div className="space-y-8">
                {subjectUnits.map((unit) => {
                  const unitLessons = lessonsOfUnit(unit.id)
                  const conceptIds = [...new Set(unitLessons.flatMap((l) => l.conceptIds))]
                  const done = unitLessons.filter((l) => l.id in lessons).length

                  return (
                    <div key={unit.id}>
                      <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-medium tracking-tight text-ink">
                            {unit.title}
                          </h3>
                          <p className="mt-0.5 text-sm text-muted">{unit.blurb}</p>
                        </div>
                        <span className="font-mono text-2xs text-faint">
                          {done} / {unitLessons.length} done
                        </span>
                      </header>

                      <Card className="mb-3 px-4 py-3.5">
                        <MasteryBar
                          score={aggregateMastery(mastery, conceptIds)}
                          label="Unit mastery"
                        />
                      </Card>

                      <ul className="space-y-2">
                        {unitLessons.map((lesson, i) => {
                          const unlocked = isLessonUnlocked(lesson.id, order, lessons)
                          const completed = lesson.id in lessons

                          const inner = (
                            <div className="flex items-start gap-3.5 px-4 py-3.5">
                              <span
                                aria-hidden
                                className="mt-0.5 w-5 shrink-0 text-center font-mono text-xs"
                                style={{
                                  color: completed
                                    ? 'var(--c-easy)'
                                    : unlocked
                                      ? 'var(--c-accent)'
                                      : 'var(--c-text-faint)',
                                }}
                              >
                                {completed ? '✓' : unlocked ? i + 1 : '·'}
                              </span>

                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                  <span className={unlocked ? 'text-ink' : 'text-faint'}>
                                    {lesson.title}
                                  </span>
                                  <DifficultyPill level={lesson.difficulty} />
                                </div>
                                <p className="mt-0.5 text-sm text-muted">{lesson.summary}</p>
                              </div>

                              <span className="shrink-0 font-mono text-2xs text-faint">
                                {lesson.estimatedMinutes} min
                              </span>
                            </div>
                          )

                          return (
                            <li key={lesson.id}>
                              {unlocked ? (
                                <Link
                                  to={`/learn/lesson/${lesson.id}`}
                                  className="block rounded-[--radius-card] border bg-surface transition-colors duration-150 hover:border-strong"
                                >
                                  {inner}
                                </Link>
                              ) : (
                                <div
                                  className="rounded-[--radius-card] border border-dashed opacity-60"
                                  aria-disabled="true"
                                >
                                  {inner}
                                  <p className="px-4 pb-3 text-xs text-faint">
                                    Finish the previous lesson to unlock this one.
                                  </p>
                                </div>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      <p className="mt-12 text-sm text-muted">
        Subjects build on one another: Logic supplies the tools, Metaphysics and Epistemology
        supply the machinery, and Philosophy of Religion applies both.
      </p>
    </div>
  )
}
