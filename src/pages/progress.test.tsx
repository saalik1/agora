import { render, screen, waitFor } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { App } from '@/App'
import { subjects } from '@/content'
import { createEmptyProgress, MemoryProgressRepository } from '@/store/progress-repository'
import { setProgressRepository, useProgress } from '@/store/use-progress'
import type { UserProgress } from '@/types/progress'

async function renderProgress(mutate: (p: UserProgress) => void = () => {}) {
  window.location.hash = '#/progress'
  const progress = createEmptyProgress()
  mutate(progress)

  // The repository must be seeded, not just the store: App hydrates on mount
  // and would otherwise overwrite the state under test with a blank profile.
  const repository = new MemoryProgressRepository()
  await repository.save(progress)
  setProgressRepository(repository)
  useProgress.setState({ progress, hydrated: false, pendingAchievements: [] })

  return render(
    <HashRouter>
      <App />
    </HashRouter>,
  )
}

/** Text split across elements (a sentence containing a link) needs this. */
const hasText = (needle: string) => (_: string, el: Element | null) =>
  el?.textContent?.includes(needle) ?? false

describe('Progress page', () => {
  it('breaks progress down by subject', async () => {
    await renderProgress()
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Progress'))

    // Every subject gets its own card, so an untouched subject is visible
    // rather than hidden inside a global average.
    for (const subject of subjects) {
      expect(screen.getByText(subject.title)).toBeInTheDocument()
    }
  })

  it('marks subjects the user has not started', async () => {
    await renderProgress()
    await waitFor(() => screen.getByRole('heading', { level: 1 }))
    // Rendered as 'Not started. Open Learn to begin this subject.' with a link.
    const notStarted = screen.getAllByText(hasText('Not started'))
    expect(notStarted.length).toBeGreaterThanOrEqual(subjects.length)
  })

  it('reports accuracy per subject, not just overall', async () => {
    await renderProgress((p) => {
      p.answers = [
        { exerciseId: 'logic-1-e1', conceptIds: ['argument'], correct: true, at: '2026-08-16T00:00:00.000Z' },
        { exerciseId: 'logic-1-e2', conceptIds: ['conclusion'], correct: false, at: '2026-08-16T00:00:00.000Z' },
        { exerciseId: 'epis-1-e1', conceptIds: ['knowledge'], correct: true, at: '2026-08-16T00:00:00.000Z' },
      ]
      p.mastery = {
        argument: { score: 60, lastReviewed: '2026-08-16', firstSeen: '2026-08-16' },
        conclusion: { score: 15, lastReviewed: '2026-08-16', firstSeen: '2026-08-16' },
        knowledge: { score: 60, lastReviewed: '2026-08-16', firstSeen: '2026-08-16' },
      }
    })

    await waitFor(() => screen.getByRole('heading', { level: 1 }))

    // Logic: 1 of 2 correct. Epistemology: 1 of 1.
    expect(screen.getAllByText(hasText('50% accuracy')).length).toBeGreaterThan(0)
    expect(screen.getAllByText(hasText('100% accuracy')).length).toBeGreaterThan(0)
  })

  it('shows weakest and strongest concepts once there is activity', async () => {
    await renderProgress((p) => {
      p.answers = [
        { exerciseId: 'logic-1-e1', conceptIds: ['argument'], correct: true, at: '2026-08-16T00:00:00.000Z' },
      ]
      p.mastery = {
        argument: { score: 90, lastReviewed: '2026-08-16', firstSeen: '2026-08-16' },
        conclusion: { score: 10, lastReviewed: '2026-08-16', firstSeen: '2026-08-16' },
      }
    })

    await waitFor(() => screen.getByRole('heading', { level: 1 }))
    expect(screen.getByText('Weakest concepts')).toBeInTheDocument()
    expect(screen.getByText('Strongest concepts')).toBeInTheDocument()
  })

  it('shows an empty state for a brand-new user instead of empty lists', async () => {
    await renderProgress()
    await waitFor(() => screen.getByRole('heading', { level: 1 }))
    expect(screen.getByText('No activity yet')).toBeInTheDocument()
    expect(screen.queryByText('Weakest concepts')).not.toBeInTheDocument()
  })
})
