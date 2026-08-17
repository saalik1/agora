import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HashRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from '@/App'
import { argumentCards, concepts, lessons } from '@/content'
import { SEARCH_CORPUS_SIZE, search } from '@/lib/search'
import { createEmptyProgress, MemoryProgressRepository } from '@/store/progress-repository'
import { setProgressRepository, useProgress } from '@/store/use-progress'

function renderAt(hash: string) {
  window.location.hash = hash
  useProgress.setState({
    progress: createEmptyProgress(),
    hydrated: false,
    pendingAchievements: [],
  })
  setProgressRepository(new MemoryProgressRepository())
  return render(
    <HashRouter>
      <App />
    </HashRouter>,
  )
}

describe('search', () => {
  it('indexes every lesson, concept and argument', () => {
    expect(SEARCH_CORPUS_SIZE).toBe(lessons.length + concepts.length + argumentCards.length)
  })

  it('returns nothing for an empty query', () => {
    expect(search('')).toEqual([])
    expect(search('   ')).toEqual([])
  })

  it('ranks a title match above a body match', () => {
    const results = search('validity')
    expect(results.length).toBeGreaterThan(1)
    expect(results[0]?.title.toLowerCase()).toContain('validity')
  })

  it('is case insensitive', () => {
    expect(search('MODUS PONENS').length).toBe(search('modus ponens').length)
  })

  it('narrows rather than widens as tokens are added', () => {
    const broad = search('argument').length
    const narrow = search('argument forms').length
    expect(narrow).toBeLessThanOrEqual(broad)
  })

  it('finds content in argument premises, not just titles', () => {
    const results = search('fingerprints')
    expect(results.some((r) => r.kind === 'argument')).toBe(true)
  })

  it('returns nothing for a term absent from the corpus', () => {
    expect(search('quantum chromodynamics')).toEqual([])
  })

  it('gives every result a usable link', () => {
    for (const result of search('premise')) {
      expect(result.href.startsWith('/')).toBe(true)
    }
  })
})

describe('Library', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('lists concepts by default', async () => {
    renderAt('#/library')
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Library'))
    expect(screen.getByRole('link', { name: /Validity/ })).toBeInTheDocument()
  })

  it('switches to arguments', async () => {
    const user = userEvent.setup()
    renderAt('#/library')
    await waitFor(() => screen.getByRole('tab', { name: /arguments/i }))

    await user.click(screen.getByRole('tab', { name: /arguments/i }))
    expect(screen.getByRole('link', { name: /Socrates is mortal/ })).toBeInTheDocument()
  })

  it('filters results as the user types', async () => {
    const user = userEvent.setup()
    renderAt('#/library')
    await waitFor(() => screen.getByLabelText('Search the library'))

    await user.type(screen.getByLabelText('Search the library'), 'soundness')
    await waitFor(() => expect(screen.getByText(/result/)).toBeInTheDocument())
    expect(screen.getAllByText(/Soundness/i).length).toBeGreaterThan(0)
  })

  it('explains an empty result set instead of showing a blank page', async () => {
    const user = userEvent.setup()
    renderAt('#/library')
    await waitFor(() => screen.getByLabelText('Search the library'))

    await user.type(screen.getByLabelText('Search the library'), 'zzzznothing')
    await waitFor(() => expect(screen.getByText('Nothing matched that')).toBeInTheDocument())
  })
})

describe('concept and argument pages', () => {
  it('renders a concept with its related links', async () => {
    renderAt('#/library/concept/validity')
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Validity'),
    )
    expect(screen.getByText('Related concepts')).toBeInTheDocument()
    expect(screen.getByText('Where it is taught')).toBeInTheDocument()
  })

  it('renders an argument as a proof with its conclusion', async () => {
    renderAt('#/library/argument/wet-grass-invalid')
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The sprinkler ran'),
    )
    expect(screen.getByText('Invalid')).toBeInTheDocument()
  })

  it('exposes objections behind an expandable control', async () => {
    const user = userEvent.setup()
    renderAt('#/library/argument/wet-grass-invalid')
    await waitFor(() => screen.getByRole('heading', { level: 1 }))

    const examine = screen.getByRole('button', { name: /Examine/ })
    expect(examine).toHaveAttribute('aria-expanded', 'false')

    await user.click(examine)
    expect(screen.getByText(/Rain, a burst pipe or dew/)).toBeInTheDocument()
  })

  it('handles an unknown id without crashing', async () => {
    renderAt('#/library/concept/does-not-exist')
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('does not exist'),
    )
  })
})
