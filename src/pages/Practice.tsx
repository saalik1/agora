import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConcept, getExercise, reviewPool } from '@/content'
import { buildReviewSet, selectReviewConcepts } from '@/engine/review'
import { masteryBand, masteryDeltas } from '@/engine/mastery'
import { toDayStamp } from '@/lib/date'
import { useProgress } from '@/store/use-progress'
import { ChoiceExerciseView, SortExerciseView } from '@/components/exercise/ExerciseView'
import { Button, Card, EmptyState, MasteryBar, PageHeader } from '@/components/ui'
import type { Exercise } from '@/types/content'
import type { MasteryDelta } from '@/engine/mastery'

type Stage = 'ready' | 'running' | 'results'

const SET_SIZE = 10

export function Practice() {
  const today = toDayStamp(new Date())
  const mastery = useProgress((s) => s.progress.mastery)
  const answers = useProgress((s) => s.progress.answers)
  const recordExerciseAnswer = useProgress((s) => s.recordExerciseAnswer)
  const completePractice = useProgress((s) => s.completePractice)

  const [stage, setStage] = useState<Stage>('ready')
  const [queue, setQueue] = useState<Exercise[]>([])
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [results, setResults] = useState<{
    xpGained: number
    deltas: MasteryDelta[]
    total: number
    correct: number
  } | null>(null)

  const masteryAtStart = useRef(mastery)

  /** Concepts the scheduler would serve right now, for the preview list. */
  const candidates = useMemo(
    () => selectReviewConcepts(mastery, today, SET_SIZE),
    [mastery, today],
  )

  const recentExerciseIds = useMemo(
    () => answers.slice(-20).map((answer) => answer.exerciseId),
    [answers],
  )

  function start() {
    const ids = buildReviewSet(candidates, reviewPool(), recentExerciseIds, SET_SIZE)
    const exercises = ids
      .map((id) => getExercise(id))
      .filter((e): e is Exercise => Boolean(e))

    if (exercises.length === 0) return

    masteryAtStart.current = useProgress.getState().progress.mastery
    setQueue(exercises)
    setIndex(0)
    setCorrectCount(0)
    setStage('running')
  }

  function handleAnswer(correct: boolean) {
    const exercise = queue[index]
    if (!exercise) return
    recordExerciseAnswer({
      exerciseId: exercise.id,
      conceptIds: exercise.conceptIds,
      correct,
    })
    if (correct) setCorrectCount((n) => n + 1)
  }

  function handleNext() {
    if (index < queue.length - 1) {
      setIndex((i) => i + 1)
      return
    }

    const outcome = completePractice({ correctCount })
    const after = useProgress.getState().progress.mastery
    const touched = [...new Set(queue.flatMap((exercise) => exercise.conceptIds))]

    setResults({
      xpGained: outcome.xpGained,
      deltas: masteryDeltas(masteryAtStart.current, after, touched),
      total: queue.length,
      correct: correctCount,
    })
    setStage('results')
  }

  /* ---------------------------------------------------------------------- */

  if (stage === 'results' && results) {
    const stillWeak = results.deltas
      .filter((delta) => delta.after < 60)
      .sort((a, b) => a.after - b.after)

    return (
      <div className="mx-auto max-w-lg py-4">
        <div className="text-center">
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">Practice</p>
          <div
            className="mx-auto my-3 h-px w-16"
            style={{ backgroundColor: 'var(--c-accent)' }}
            aria-hidden
          />
          <h1 className="text-2xl font-semibold tracking-tight text-ink">Set complete</h1>

          <div className="mt-6 flex justify-center gap-8">
            <div>
              <div className="font-mono text-xl tabular-nums" style={{ color: 'var(--c-accent)' }}>
                +{results.xpGained}
              </div>
              <div className="mt-0.5 text-xs text-muted">XP earned</div>
            </div>
            <div>
              <div className="font-mono text-xl tabular-nums text-ink">
                {results.correct}/{results.total}
              </div>
              <div className="mt-0.5 text-xs text-muted">Correct</div>
            </div>
          </div>
        </div>

        {stillWeak.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 font-mono text-2xs uppercase tracking-[0.14em] text-faint">
              Still worth revisiting
            </h2>
            <Card className="space-y-4 px-4 py-4">
              {stillWeak.map((delta) => (
                <MasteryBar
                  key={delta.conceptId}
                  score={delta.after}
                  label={getConcept(delta.conceptId)?.term ?? delta.conceptId}
                />
              ))}
            </Card>
            <p className="mt-2 text-xs text-faint">
              These will come back in your next set until they hold.
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <Button
            onClick={() => {
              setStage('ready')
              setResults(null)
            }}
          >
            Practise again
          </Button>
          <Link to="/">
            <Button variant="secondary">Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (stage === 'running') {
    const exercise = queue[index]
    if (!exercise) return null

    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <button
            onClick={() => setStage('ready')}
            className="font-mono text-2xs uppercase tracking-wider text-faint hover:text-muted"
          >
            ← Leave practice
          </button>
          <p className="mt-2 font-mono text-2xs uppercase tracking-wider text-faint">
            Question {index + 1} of {queue.length}
          </p>
          <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-raised">
            <div
              className="h-full rounded-full transition-[width] duration-300"
              style={{
                width: `${((index + 1) / queue.length) * 100}%`,
                backgroundColor: 'var(--c-accent)',
              }}
            />
          </div>
        </div>

        {exercise.type === 'choice' ? (
          <ChoiceExerciseView
            key={exercise.id}
            exercise={exercise}
            onAnswered={({ correct }) => handleAnswer(correct)}
            onNext={handleNext}
            isLast={index === queue.length - 1}
          />
        ) : (
          <SortExerciseView
            key={exercise.id}
            exercise={exercise}
            onAnswered={({ correct }) => handleAnswer(correct)}
            onNext={handleNext}
            isLast={index === queue.length - 1}
          />
        )}
      </div>
    )
  }

  /* ---------------------------------------------------------------------- */

  const available = buildReviewSet(candidates, reviewPool(), recentExerciseIds, SET_SIZE).length

  return (
    <div>
      <PageHeader
        eyebrow="Review"
        title="Practice"
        description="Questions are chosen for you, weighted towards what you got wrong and what you have not seen for a while."
      />

      {available === 0 ? (
        <EmptyState
          title="Nothing to review yet"
          body="Finish a lesson and questions will start appearing here."
          action={{ label: 'Open Learn', to: '/learn' }}
        />
      ) : (
        <>
          <Card className="mb-6 px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-ink">
                  {available} question{available === 1 ? '' : 's'} ready
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  Drawn from your weakest and least recently reviewed concepts.
                </p>
              </div>
              <Button onClick={start}>Start practice</Button>
            </div>
          </Card>

          <h2 className="mb-3 text-sm font-medium text-ink">Queued concepts</h2>
          <Card className="divide-y">
            {candidates.slice(0, available).map((candidate) => {
              const band = masteryBand(candidate.mastery)
              return (
                <div
                  key={candidate.conceptId}
                  className="flex items-baseline justify-between gap-3 px-4 py-3"
                >
                  <span className="truncate text-sm text-ink">
                    {getConcept(candidate.conceptId)?.term ?? candidate.conceptId}
                  </span>
                  <span className="shrink-0 font-mono text-2xs text-faint">
                    {candidate.neverPractised
                      ? 'Not yet practised'
                      : candidate.daysSinceReview === 0
                        ? `${band.label} · today`
                        : `${band.label} · ${candidate.daysSinceReview}d ago`}
                  </span>
                </div>
              )
            })}
          </Card>
        </>
      )}
    </div>
  )
}
