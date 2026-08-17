import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { exercisesOfLesson, getLesson, orderedLessonIds } from '@/content'
import { lessonScore, masteryDeltas } from '@/engine/mastery'
import { levelState } from '@/engine/levels'
import { lessonXp } from '@/engine/xp'
import { useProgress } from '@/store/use-progress'
import { ChoiceExerciseView, SortExerciseView } from '@/components/exercise/ExerciseView'
import { CompletionScreen, ProofColumn } from '@/components/lesson/ProofColumn'
import { SectionRenderer } from '@/components/lesson/SectionRenderer'
import { Button } from '@/components/ui'
import type { MasteryDelta } from '@/engine/mastery'

type Stage = 'reading' | 'exercises' | 'complete'

export function LessonPage() {
  const { lessonId = '' } = useParams()
  const navigate = useNavigate()

  const lesson = getLesson(lessonId)
  const exercises = useMemo(() => exercisesOfLesson(lessonId), [lessonId])

  const beginLesson = useProgress((s) => s.beginLesson)
  const recordExerciseAnswer = useProgress((s) => s.recordExerciseAnswer)
  const completeLesson = useProgress((s) => s.completeLesson)
  const alreadyCompleted = useProgress((s) => lessonId in s.progress.lessons)

  const [stage, setStage] = useState<Stage>('reading')
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [firstAttempts, setFirstAttempts] = useState<boolean[]>([])
  const [result, setResult] = useState<{
    xpGained: number
    leveledUp: boolean
    levelTitle: string
    deltas: MasteryDelta[]
  } | null>(null)

  // Mastery before the run, so the completion screen can show real movement.
  const masteryAtStart = useRef(useProgress.getState().progress.mastery)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lesson) return
    masteryAtStart.current = useProgress.getState().progress.mastery
    beginLesson(lesson.conceptIds)
  }, [lesson, beginLesson])

  // Move focus to the top of each new step so keyboard and screen reader users
  // are not left at the bottom of the previous one.
  useEffect(() => {
    headingRef.current?.focus()
  }, [stage, exerciseIndex])

  if (!lesson) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-xl font-semibold text-ink">That lesson does not exist</h1>
        <Link to="/learn" className="mt-4 inline-block text-sm text-accent underline">
          Back to the course
        </Link>
      </div>
    )
  }

  const steps = [...lesson.sections.map((_, i) => `Section ${i + 1}`), 'Exercises']
  const currentStep = stage === 'reading' ? lesson.sections.length : steps.length - 1

  function handleAnswer(correct: boolean) {
    const exercise = exercises[exerciseIndex]
    if (!exercise) return
    recordExerciseAnswer({
      exerciseId: exercise.id,
      conceptIds: exercise.conceptIds,
      correct,
    })
    setFirstAttempts((prev) => [...prev, correct])
  }

  function handleNext() {
    if (!lesson) return

    if (exerciseIndex < exercises.length - 1) {
      setExerciseIndex((i) => i + 1)
      return
    }

    const score = lessonScore({ firstAttempts })
    const xpAward = lessonXp({
      lessonReward: lesson.xpReward,
      score,
      alreadyCompleted,
    })

    const outcome = completeLesson({
      lessonId: lesson.id,
      conceptIds: lesson.conceptIds,
      xpAward,
      score,
    })

    const after = useProgress.getState().progress.mastery
    setResult({
      xpGained: outcome.xpGained,
      leveledUp: outcome.leveledUp,
      levelTitle: levelState(useProgress.getState().progress.xp).title,
      deltas: masteryDeltas(masteryAtStart.current, after, lesson.conceptIds),
    })
    setStage('complete')
  }

  if (stage === 'complete' && result) {
    const order = orderedLessonIds()
    const position = order.indexOf(lesson.id)
    const nextLessonId = position >= 0 ? (order[position + 1] ?? null) : null

    return (
      <CompletionScreen
        title={lesson.title}
        xpGained={result.xpGained}
        score={lessonScore({ firstAttempts })}
        leveledUp={result.leveledUp}
        levelTitle={result.levelTitle}
        deltas={result.deltas}
        nextLessonId={nextLessonId}
      />
    )
  }

  const exercise = exercises[exerciseIndex]

  return (
    <div className="lg:flex lg:gap-10">
      <ProofColumn steps={steps} current={currentStep} className="sticky top-10 w-40 shrink-0" />

      <div className="min-w-0 flex-1">
        <div ref={headingRef} tabIndex={-1} className="mb-6 outline-none">
          <button
            onClick={() => navigate('/learn')}
            className="font-mono text-2xs uppercase tracking-wider text-faint hover:text-muted"
          >
            ← Course
          </button>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{lesson.title}</h1>
          {stage === 'exercises' && (
            <p className="mt-1 font-mono text-2xs uppercase tracking-wider text-faint">
              Question {exerciseIndex + 1} of {exercises.length}
            </p>
          )}
        </div>

        {stage === 'reading' ? (
          <>
            <div className="space-y-6">
              {lesson.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}
            </div>
            <div className="mt-8 border-t pt-6">
              <Button onClick={() => setStage('exercises')}>
                Start exercises ({exercises.length})
              </Button>
            </div>
          </>
        ) : exercise ? (
          exercise.type === 'choice' ? (
            <ChoiceExerciseView
              key={exercise.id}
              exercise={exercise}
              onAnswered={({ correct }) => handleAnswer(correct)}
              onNext={handleNext}
              isLast={exerciseIndex === exercises.length - 1}
            />
          ) : (
            <SortExerciseView
              key={exercise.id}
              exercise={exercise}
              onAnswered={({ correct }) => handleAnswer(correct)}
              onNext={handleNext}
              isLast={exerciseIndex === exercises.length - 1}
            />
          )
        ) : null}
      </div>
    </div>
  )
}
