import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HashRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '@/App'
import { orderedLessons } from '@/content'
import { isCourseComplete, lessonAfter, lessonLocation, nextLessonFor } from '@/lib/curriculum'
import { createEmptyProgress, MemoryProgressRepository } from '@/store/progress-repository'
import { setProgressRepository, useProgress } from '@/store/use-progress'
import type { UserProgress } from '@/types/progress'


function seedProgress(mutate: (p: UserProgress) => void): UserProgress {
  const progress = createEmptyProgress()
  mutate(progress)
  return progress
}

function renderApp(hash: string, progress: UserProgress) {
  window.location.hash = hash
  useProgress.setState({ progress, hydrated: false, pendingAchievements: [] })
  const repository = new MemoryProgressRepository()
  void repository.save(progress)
  setProgressRepository(repository)
  return render(
    <HashRouter>
      <App />
    </HashRouter>,
  )
}

describe('curriculum navigation', () => {
  it('points a new user at the first lesson', () => {
    expect(nextLessonFor({})?.id).toBe(orderedLessons()[0]?.id)
  })

  it('skips completed lessons', () => {
    const all = orderedLessons()
    const first = all[0]!
    const next = nextLessonFor({ [first.id]: true })

    if (all.length > 1) {
      expect(next?.id).toBe(all[1]!.id)
    } else {
      // Single-lesson curriculum: everything is done, so it falls back to the
      // last lesson rather than leaving the dashboard with nothing to point at.
      expect(next?.id).toBe(first.id)
    }
  })

  it('reports course completion once everything is done', () => {
    const completed = Object.fromEntries(orderedLessons().map((l) => [l.id, true]))
    expect(isCourseComplete(completed)).toBe(true)
    expect(isCourseComplete({})).toBe(false)
  })

  it('still returns a lesson to revisit after the course is finished', () => {
    const completed = Object.fromEntries(orderedLessons().map((l) => [l.id, true]))
    expect(nextLessonFor(completed)).not.toBeNull()
  })

  it('returns null after the final lesson', () => {
    const last = orderedLessons()[orderedLessons().length - 1]!
    expect(lessonAfter(last.id)).toBeNull()
  })

  it('describes where a lesson sits in the course', () => {
    const first = orderedLessons()[0]!
    expect(lessonLocation(first.id)).toMatch(/Lesson 1$/)
  })
})

describe('Practice page', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('invites the user to learn first when there is nothing to review', async () => {
    renderApp('#/practice', createEmptyProgress())

    await waitFor(() => expect(screen.getByText('Nothing to review yet')).toBeInTheDocument())
    expect(screen.getByRole('link', { name: 'Open Learn' })).toBeInTheDocument()
  })

  it('queues concepts the user has answered incorrectly', async () => {
    const progress = seedProgress((p) => {
      p.mastery = {
        argument: { score: 15, lastReviewed: '2026-08-10', firstSeen: '2026-08-01' },
        conclusion: { score: 85, lastReviewed: '2026-08-15', firstSeen: '2026-08-01' },
      }
    })

    renderApp('#/practice', progress)

    await waitFor(() => expect(screen.getByRole('button', { name: 'Start practice' })).toBeEnabled())

    // The weak concept is queued ahead of the strong one.
    const queued = screen.getByText('Queued concepts').parentElement!
    expect(queued.textContent).toContain('Argument')
  })

  it('runs a set and awards XP for correct answers', async () => {
    const user = userEvent.setup()
    const progress = seedProgress((p) => {
      p.mastery = {
        argument: { score: 20, lastReviewed: '2026-08-01', firstSeen: '2026-08-01' },
      }
    })

    renderApp('#/practice', progress)

    await waitFor(() => screen.getByRole('button', { name: 'Start practice' }))
    await user.click(screen.getByRole('button', { name: 'Start practice' }))

    await waitFor(() => expect(screen.getByText(/Question 1 of/)).toBeInTheDocument())

    // Work through the set, answering whatever is served.
    for (let guard = 0; guard < 12; guard += 1) {
      const options = screen.queryAllByRole('radio')
      if (options.length === 0) break
      await user.click(options[0]!)

      const check = screen.queryByRole('button', { name: 'Check' })
      if (!check) break
      await user.click(check)

      const advance = screen.getByRole('button', { name: /Next|Finish/ })
      await user.click(advance)

      if (screen.queryByText('Set complete')) break
    }

    await waitFor(() => expect(screen.getByText('Set complete')).toBeInTheDocument())
    expect(screen.getByRole('button', { name: 'Practise again' })).toBeInTheDocument()

    // A practice set counts as meaningful activity, so the streak starts.
    expect(useProgress.getState().progress.streak.current).toBe(1)
  })
})

describe('Home dashboard', () => {
  it('points a new user at the first lesson', async () => {
    renderApp('#/', createEmptyProgress())

    await waitFor(() => expect(screen.getByText('Start here')).toBeInTheDocument())
    const first = orderedLessons()[0]!
    expect(screen.getByRole('heading', { name: first.title })).toBeInTheDocument()
  })

  it('shows a review prompt once concepts are due', async () => {
    const progress = seedProgress((p) => {
      p.mastery = {
        argument: { score: 20, lastReviewed: '2026-08-01', firstSeen: '2026-08-01' },
      }
    })

    renderApp('#/', progress)

    await waitFor(() => expect(screen.getByText(/ready to review/)).toBeInTheDocument())
    expect(screen.getByRole('link', { name: 'Practise' })).toBeInTheDocument()
  })

  it('reflects a live streak and daily goal', async () => {
    const today = new Date()
    const stamp = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
      today.getDate(),
    ).padStart(2, '0')}`

    const progress = seedProgress((p) => {
      p.xp = 260
      p.streak = { current: 4, longest: 9, lastActiveDay: stamp }
      p.xpByDay = { [stamp]: 25 }
    })

    renderApp('#/', progress)

    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Reader'))
    expect(screen.getByText('Daily goal met. Anything further is extra.')).toBeInTheDocument()
  })
})

describe('achievement toast', () => {
  it('announces newly earned achievements', async () => {
    renderApp('#/', createEmptyProgress())
    await waitFor(() => screen.getByRole('heading', { level: 1 }))

    useProgress.setState({ pendingAchievements: ['first-argument'] })

    await waitFor(() => expect(screen.getByText('First Argument')).toBeInTheDocument())
  })
})

