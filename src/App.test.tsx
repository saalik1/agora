import { render, screen, waitFor } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { MemoryProgressRepository, createEmptyProgress } from './store/progress-repository'
import { setProgressRepository, useProgress } from './store/use-progress'

function renderApp() {
  return render(
    <HashRouter>
      <App />
    </HashRouter>,
  )
}

describe('App shell', () => {
  beforeEach(() => {
    window.location.hash = ''
    useProgress.setState({ progress: createEmptyProgress(), hydrated: false })
  })

  it('renders the dashboard for a new user', async () => {
    setProgressRepository(new MemoryProgressRepository())
    renderApp()

    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument())
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Curious Mind')
  })

  it('exposes both navigation landmarks and a skip link', async () => {
    setProgressRepository(new MemoryProgressRepository())
    renderApp()

    await waitFor(() => expect(screen.getAllByRole('navigation')).toHaveLength(2))
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('shows stored progress rather than a fresh state on load', async () => {
    const repository = new MemoryProgressRepository()
    const stored = createEmptyProgress()
    stored.xp = 1900
    await repository.save(stored)
    setProgressRepository(repository)

    renderApp()

    // 1,900 XP is the Philosopher threshold — proof that hydration ran before paint.
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Philosopher'),
    )
  })
})
