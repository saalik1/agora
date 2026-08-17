import { describe, expect, it } from 'vitest'
import {
  LocalStorageProgressRepository,
  MAX_ANSWER_HISTORY,
  createEmptyProgress,
  normaliseProgress,
} from './progress-repository'
import { parseImport, serialiseExport } from './transfer'

function populatedProgress() {
  const progress = createEmptyProgress('2026-08-01')
  progress.xp = 340
  progress.streak = { current: 5, longest: 9, lastActiveDay: '2026-08-16' }
  progress.lessons = { 'logic-1': { completedAt: '2026-08-16', bestScore: 1, attempts: 2 } }
  progress.mastery = {
    validity: { score: 72.5, lastReviewed: '2026-08-16', firstSeen: '2026-08-01' },
  }
  progress.achievements = { 'first-argument': '2026-08-16T09:00:00.000Z' }
  progress.xpByDay = { '2026-08-16': 40 }
  progress.settings = { theme: 'light', reducedMotion: true, dailyGoal: 50 }
  return progress
}

describe('export and import', () => {
  it('round-trips a populated state without loss', () => {
    const original = populatedProgress()
    const result = parseImport(serialiseExport(original))
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.progress).toEqual(original)
  })

  it('rejects a file from another application', () => {
    const result = parseImport(JSON.stringify({ app: 'something-else', progress: {} }))
    expect(result.ok).toBe(false)
  })

  it('rejects a file from a newer version', () => {
    const result = parseImport(
      JSON.stringify({ app: 'agora', version: 99, progress: createEmptyProgress() }),
    )
    expect(result.ok).toBe(false)
  })

  it('rejects text that is not JSON', () => {
    expect(parseImport('not json at all').ok).toBe(false)
  })

  it('explains the problem rather than failing silently', () => {
    const result = parseImport('{]')
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error.length).toBeGreaterThan(10)
  })
})

describe('normaliseProgress', () => {
  it('returns an empty state for junk input', () => {
    expect(normaliseProgress(null).xp).toBe(0)
    expect(normaliseProgress('nonsense').xp).toBe(0)
    expect(normaliseProgress(42).lessons).toEqual({})
  })

  it('clamps values that are out of range', () => {
    const result = normaliseProgress({
      xp: -100,
      mastery: { a: { score: 500, lastReviewed: 'bad', firstSeen: 'bad' } },
    })
    expect(result.xp).toBe(0)
    expect(result.mastery['a']!.score).toBe(100)
  })

  it('discards an invalid day stamp rather than trusting it', () => {
    const result = normaliseProgress({ streak: { current: 3, lastActiveDay: '16/08/2026' } })
    expect(result.streak.lastActiveDay).toBeNull()
  })

  it('falls back to defaults for unknown settings', () => {
    const result = normaliseProgress({ settings: { theme: 'neon', dailyGoal: 999 } })
    expect(result.settings.theme).toBe('dark')
    expect(result.settings.dailyGoal).toBe(25)
  })

  it('caps answer history', () => {
    const answers = Array.from({ length: 800 }, (_, i) => ({
      exerciseId: `e${i}`,
      conceptIds: ['x'],
      correct: true,
      at: '2026-08-16T00:00:00.000Z',
    }))
    expect(normaliseProgress({ answers }).answers).toHaveLength(MAX_ANSWER_HISTORY)
  })
})

describe('LocalStorageProgressRepository', () => {
  it('returns an empty state when storage is empty', async () => {
    localStorage.clear()
    const repo = new LocalStorageProgressRepository('agora.test.empty')
    expect((await repo.load()).xp).toBe(0)
  })

  it('persists and reloads progress', async () => {
    const repo = new LocalStorageProgressRepository('agora.test.persist')
    await repo.save(populatedProgress())
    const loaded = await repo.load()
    expect(loaded.xp).toBe(340)
    expect(loaded.streak.longest).toBe(9)
    expect(loaded.mastery['validity']!.score).toBe(72.5)
  })

  it('recovers from a corrupt stored value', async () => {
    localStorage.setItem('agora.test.corrupt', '{not json')
    const repo = new LocalStorageProgressRepository('agora.test.corrupt')
    expect((await repo.load()).xp).toBe(0)
  })

  it('clears stored progress', async () => {
    const repo = new LocalStorageProgressRepository('agora.test.clear')
    await repo.save(populatedProgress())
    await repo.clear()
    expect((await repo.load()).xp).toBe(0)
  })
})
