import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HashRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '@/App'
import {
  checkContentIntegrity,
  exercises,
  exercisesOfLesson,
  getLesson,
  lessons,
  orderedLessonIds,
} from '@/content'
import { createEmptyProgress, MemoryProgressRepository } from '@/store/progress-repository'
import { setProgressRepository, useProgress } from '@/store/use-progress'

describe('content integrity', () => {
  it('has no unresolved ids anywhere in the curriculum', () => {
    expect(checkContentIntegrity()).toEqual([])
  })

  it('gives every choice option a real explanation', () => {
    for (const exercise of exercises) {
      if (exercise.type !== 'choice') continue
      for (const option of exercise.options) {
        // Distractors are where the teaching happens, so a stub is a content bug.
        expect(option.explanation.length).toBeGreaterThan(30)
      }
    }
  })

  it('keeps explanation sections short enough to read', () => {
    for (const lesson of lessons) {
      for (const section of lesson.sections) {
        if (section.kind !== 'explanation') continue
        expect(section.body.split(/\s+/).length).toBeLessThanOrEqual(130)
      }
    }
  })

  it('orders lessons deterministically and without duplicates', () => {
    const ids = orderedLessonIds()
    expect(ids[0]).toBe('logic-1')
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids).toEqual(orderedLessonIds())
  })

  it('gives every lesson at least three exercises', () => {
    for (const lesson of lessons) {
      expect(lesson.exerciseIds.length).toBeGreaterThanOrEqual(3)
    }
  })
})

describe('lesson flow', () => {
  beforeEach(() => {
    window.location.hash = '#/learn/lesson/logic-1'
    // pendingAchievements must be reset too, or a toast from the previous test
    // leaks in and collides with the exercise feedback's status role.
    useProgress.setState({
      progress: createEmptyProgress(),
      hydrated: false,
      pendingAchievements: [],
    })
    setProgressRepository(new MemoryProgressRepository())
  })

  it('renders every section of the lesson', async () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('What is an argument?'),
    )

    // The argument card renders as a proof, conclusion included.
    expect(screen.getByText('Socrates is mortal.')).toBeInTheDocument()
    expect(screen.getByText(/Common mistake/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Start exercises/ })).toBeInTheDocument()
  })

  it('awards XP, moves mastery and sets a streak on completion', async () => {
    const user = userEvent.setup()
    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    await waitFor(() => screen.getByRole('button', { name: /Start exercises/ }))
    await user.click(screen.getByRole('button', { name: /Start exercises/ }))

    const lesson = getLesson('logic-1')!
    const lessonExercises = exercisesOfLesson('logic-1')

    // Answer every exercise correctly, whatever its type.
    for (const exercise of lessonExercises) {
      if (exercise.type === 'choice') {
        const answer = exercise.options.find((o) => o.id === exercise.correctId)!
        await user.click(screen.getByText(answer.text))
      } else {
        for (const statement of exercise.statements) {
          const group = screen.getByRole('radiogroup', { name: `Role of: ${statement.text}` })
          const label =
            statement.role === 'premise'
              ? 'Premise'
              : statement.role === 'conclusion'
                ? 'Conclusion'
                : 'Neither'
          await user.click(within(group).getByRole('radio', { name: label }))
        }
      }

      await user.click(screen.getByRole('button', { name: 'Check' }))
      await user.click(screen.getByRole('button', { name: /Next|Finish lesson/ }))
    }

    await waitFor(() => expect(screen.getByText('Lesson complete')).toBeInTheDocument())

    const progress = useProgress.getState().progress

    // 15 base + 5 perfect bonus. No daily-goal bonus: 20 XP falls short of the
    // 25 XP Regular goal, so one lesson a day is not a full day's work.
    expect(progress.xp).toBe(lesson.xpReward + 5)
    expect(progress.lessons['logic-1']?.bestScore).toBe(1)
    expect(progress.streak.current).toBe(1)
    expect(progress.achievements['first-argument']).toBeDefined()
    expect(progress.achievements['perfect-lesson']).toBeDefined()

    for (const conceptId of lesson.conceptIds) {
      expect(progress.mastery[conceptId]!.score).toBeGreaterThan(0)
    }
  })

  it('explains a wrong answer rather than only marking it', async () => {
    const user = userEvent.setup()
    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    await waitFor(() => screen.getByRole('button', { name: /Start exercises/ }))
    await user.click(screen.getByRole('button', { name: /Start exercises/ }))

    const first = exercisesOfLesson('logic-1')[0]!
    if (first.type !== 'choice') throw new Error('Expected a choice exercise first')

    const wrong = first.options.find((o) => o.id !== first.correctId)!
    await user.click(screen.getByText(wrong.text))
    await user.click(screen.getByRole('button', { name: 'Check' }))

    expect(screen.getByRole('status')).toHaveTextContent('Not quite')
    expect(screen.getByText(wrong.explanation)).toBeInTheDocument()

    // Mastery drops rather than staying untouched.
    const mastery = useProgress.getState().progress.mastery
    expect(mastery[first.conceptIds[0]!]!.score).toBeLessThan(60)
  })
})

describe('lesson navigation', () => {
  beforeEach(() => {
    useProgress.setState({
      progress: createEmptyProgress(),
      hydrated: false,
      pendingAchievements: [],
    })
    setProgressRepository(new MemoryProgressRepository())
  })

  it('starts a new lesson fresh rather than showing the previous completion screen', async () => {
    const user = userEvent.setup()
    window.location.hash = '#/learn/lesson/logic-1'
    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    await waitFor(() => screen.getByRole('button', { name: /Start exercises/ }))
    await user.click(screen.getByRole('button', { name: /Start exercises/ }))

    for (const exercise of exercisesOfLesson('logic-1')) {
      if (exercise.type === 'choice') {
        await user.click(screen.getByText(exercise.options.find((o) => o.id === exercise.correctId)!.text))
      } else {
        for (const statement of exercise.statements) {
          const group = screen.getByRole('radiogroup', { name: `Role of: ${statement.text}` })
          const label =
            statement.role === 'premise'
              ? 'Premise'
              : statement.role === 'conclusion'
                ? 'Conclusion'
                : 'Neither'
          await user.click(within(group).getByRole('radio', { name: label }))
        }
      }
      await user.click(screen.getByRole('button', { name: 'Check' }))
      await user.click(screen.getByRole('button', { name: /Next|Finish lesson/ }))
    }

    await waitFor(() => expect(screen.getByText('Lesson complete')).toBeInTheDocument())

    // Navigating to the next lesson must reset the flow, not carry state over.
    await user.click(screen.getByRole('link', { name: 'Next lesson' }))

    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Premises and conclusions',
      ),
    )
    expect(screen.queryByText('Lesson complete')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Start exercises/ })).toBeInTheDocument()
  })
})
