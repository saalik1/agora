import { describe, expect, it } from 'vitest'
import type { MasteryRecord } from '@/types/progress'
import {
  buildReviewSet,
  conceptPriority,
  rankConcepts,
  selectReviewConcepts,
} from './review'

const TODAY = '2026-08-16'

const record = (score: number, lastReviewed: string): MasteryRecord => ({
  score,
  lastReviewed,
  firstSeen: '2026-07-01',
})

describe('conceptPriority', () => {
  it('rises with time since review', () => {
    const recent = conceptPriority(record(50, '2026-08-15'), TODAY).priority
    const stale = conceptPriority(record(50, '2026-08-06'), TODAY).priority
    expect(stale).toBeGreaterThan(recent)
  })

  it('falls as mastery rises', () => {
    const weak = conceptPriority(record(20, '2026-08-09'), TODAY).priority
    const strong = conceptPriority(record(90, '2026-08-09'), TODAY).priority
    expect(weak).toBeGreaterThan(strong)
  })

  it('gives a fully mastered concept no priority at all', () => {
    expect(conceptPriority(record(100, '2026-01-01'), TODAY).priority).toBe(0)
  })

  it('still surfaces a concept failed earlier today', () => {
    // Zero elapsed days would otherwise zero out the score entirely.
    const sameDay = conceptPriority(record(15, TODAY), TODAY)
    expect(sameDay.daysSinceReview).toBe(0)
    expect(sameDay.priority).toBeGreaterThan(0)
  })

  it('boosts a concept seen in a lesson but never practised', () => {
    const unpractised = conceptPriority(record(0, TODAY), TODAY)
    expect(unpractised.neverPractised).toBe(true)
    // Beats a weak-but-attempted concept reviewed the same day.
    expect(unpractised.priority).toBeGreaterThan(
      conceptPriority(record(15, TODAY), TODAY).priority,
    )
  })

  it('treats a future review date as zero elapsed days', () => {
    const result = conceptPriority(record(50, '2026-08-20'), TODAY)
    expect(result.daysSinceReview).toBe(0)
  })
})

describe('rankConcepts', () => {
  it('puts the weakest and stalest first', () => {
    const mastery: Record<string, MasteryRecord> = {
      mastered: record(95, '2026-08-15'),
      shaky: record(25, '2026-08-06'),
      middling: record(60, '2026-08-13'),
    }
    expect(rankConcepts(mastery, TODAY).map((c) => c.conceptId)).toEqual([
      'shaky',
      'middling',
      'mastered',
    ])
  })

  it('breaks ties deterministically', () => {
    const mastery: Record<string, MasteryRecord> = {
      zeta: record(40, '2026-08-14'),
      alpha: record(40, '2026-08-14'),
    }
    const first = rankConcepts(mastery, TODAY).map((c) => c.conceptId)
    const second = rankConcepts(mastery, TODAY).map((c) => c.conceptId)
    expect(first).toEqual(['alpha', 'zeta'])
    expect(first).toEqual(second)
  })

  it('returns nothing for a user with no history', () => {
    expect(rankConcepts({}, TODAY)).toEqual([])
  })
})

describe('selectReviewConcepts', () => {
  it('caps the set at the requested size', () => {
    const mastery: Record<string, MasteryRecord> = {}
    for (let i = 0; i < 25; i += 1) {
      mastery[`c${i}`] = record(30, '2026-08-10')
    }
    expect(selectReviewConcepts(mastery, TODAY, 10)).toHaveLength(10)
  })
})

describe('buildReviewSet', () => {
  const pool = [
    { exerciseId: 'e-validity-1', conceptIds: ['validity'] },
    { exerciseId: 'e-validity-2', conceptIds: ['validity'] },
    { exerciseId: 'e-soundness-1', conceptIds: ['soundness'] },
  ]

  const candidates = [
    { conceptId: 'validity', priority: 9, mastery: 20, daysSinceReview: 4, neverPractised: false },
    { conceptId: 'soundness', priority: 5, mastery: 50, daysSinceReview: 2, neverPractised: false },
  ]

  it('picks one exercise per concept in priority order', () => {
    expect(buildReviewSet(candidates, pool)).toEqual(['e-validity-1', 'e-soundness-1'])
  })

  it('avoids exercises answered recently when an alternative exists', () => {
    const set = buildReviewSet(candidates, pool, ['e-validity-1'])
    expect(set[0]).toBe('e-validity-2')
  })

  it('reuses a recent exercise rather than skipping a weak concept', () => {
    const set = buildReviewSet(candidates, pool, ['e-soundness-1'])
    expect(set).toContain('e-soundness-1')
  })

  it('never repeats an exercise within one set', () => {
    const set = buildReviewSet(
      [...candidates, { conceptId: 'validity', priority: 1, mastery: 20, daysSinceReview: 1, neverPractised: false }],
      pool,
    )
    expect(new Set(set).size).toBe(set.length)
  })

  it('skips concepts with no exercise available', () => {
    const set = buildReviewSet(
      [{ conceptId: 'orphan', priority: 99, mastery: 0, daysSinceReview: 9, neverPractised: true }],
      pool,
    )
    expect(set).toEqual([])
  })

  it('respects the limit', () => {
    expect(buildReviewSet(candidates, pool, [], 1)).toHaveLength(1)
  })
})
