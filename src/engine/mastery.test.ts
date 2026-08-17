import { describe, expect, it } from 'vitest'
import type { MasteryRecord } from '@/types/progress'
import {
  MASTERY_SEED_CORRECT,
  MASTERY_SEED_INCORRECT,
  aggregateMastery,
  isLessonUnlocked,
  lessonScore,
  masteryBand,
  nextMastery,
  recordAnswer,
  seedConcepts,
  weakestConcepts,
} from './mastery'

const TODAY = '2026-08-16'

describe('nextMastery', () => {
  it('seeds a first correct answer below full mastery', () => {
    expect(nextMastery(null, true)).toBe(MASTERY_SEED_CORRECT)
  })

  it('seeds a first incorrect answer low but not at zero', () => {
    expect(nextMastery(null, false)).toBe(MASTERY_SEED_INCORRECT)
  })

  it('blends towards 100 on a correct answer', () => {
    // 0.7 * 50 + 0.3 * 100 = 65
    expect(nextMastery(50, true)).toBe(65)
  })

  it('blends towards 0 on an incorrect answer', () => {
    // 0.7 * 50 + 0.3 * 0 = 35
    expect(nextMastery(50, false)).toBe(35)
  })

  it('approaches 100 without exceeding it', () => {
    let score = 0
    for (let i = 0; i < 200; i += 1) score = nextMastery(score, true)
    expect(score).toBeLessThanOrEqual(100)
    expect(score).toBeGreaterThan(99)
  })

  it('approaches 0 without going below it', () => {
    let score = 100
    for (let i = 0; i < 200; i += 1) score = nextMastery(score, false)
    expect(score).toBeGreaterThanOrEqual(0)
    expect(score).toBeLessThan(1)
  })

  it('drops a well-known concept substantially after one wrong answer', () => {
    // The whole point of weighting recency: 90 must not stay in the green band.
    const dropped = nextMastery(90, false)
    expect(dropped).toBe(63)
    expect(masteryBand(dropped).band).toBe('proficient')
  })
})

describe('masteryBand', () => {
  it('maps each band to its boundary', () => {
    expect(masteryBand(0).band).toBe('new')
    expect(masteryBand(19.9).band).toBe('new')
    expect(masteryBand(20).band).toBe('learning')
    expect(masteryBand(40).band).toBe('developing')
    expect(masteryBand(60).band).toBe('proficient')
    expect(masteryBand(80).band).toBe('mastered')
    expect(masteryBand(100).band).toBe('mastered')
  })
})

describe('recordAnswer', () => {
  it('does not mutate the map it is given', () => {
    const before: Record<string, MasteryRecord> = {
      validity: { score: 50, lastReviewed: '2026-08-10', firstSeen: '2026-08-01' },
    }
    const after = recordAnswer({
      mastery: before,
      conceptIds: ['validity'],
      correct: true,
      today: TODAY,
    })
    expect(before['validity']!.score).toBe(50)
    expect(after['validity']!.score).toBe(65)
    expect(after).not.toBe(before)
  })

  it('updates every concept an exercise trains', () => {
    const after = recordAnswer({
      mastery: {},
      conceptIds: ['validity', 'soundness'],
      correct: true,
      today: TODAY,
    })
    expect(after['validity']!.score).toBe(MASTERY_SEED_CORRECT)
    expect(after['soundness']!.score).toBe(MASTERY_SEED_CORRECT)
  })

  it('preserves the original first-seen date', () => {
    const before: Record<string, MasteryRecord> = {
      validity: { score: 40, lastReviewed: '2026-08-01', firstSeen: '2026-07-20' },
    }
    const after = recordAnswer({
      mastery: before,
      conceptIds: ['validity'],
      correct: false,
      today: TODAY,
    })
    expect(after['validity']!.firstSeen).toBe('2026-07-20')
    expect(after['validity']!.lastReviewed).toBe(TODAY)
  })

  it('is a no-op when an exercise trains no concepts', () => {
    const before = {}
    expect(recordAnswer({ mastery: before, conceptIds: [], correct: true, today: TODAY })).toBe(
      before,
    )
  })
})

describe('seedConcepts', () => {
  it('marks unseen concepts without scoring them', () => {
    const after = seedConcepts({}, ['validity'], TODAY)
    expect(after['validity']!.score).toBe(0)
    expect(after['validity']!.firstSeen).toBe(TODAY)
  })

  it('leaves an already-practised concept alone', () => {
    const before: Record<string, MasteryRecord> = {
      validity: { score: 70, lastReviewed: '2026-08-01', firstSeen: '2026-07-01' },
    }
    const after = seedConcepts(before, ['validity'], TODAY)
    expect(after['validity']!.score).toBe(70)
    expect(after['validity']!.lastReviewed).toBe('2026-08-01')
  })
})

describe('aggregateMastery', () => {
  it('averages across the concepts asked for', () => {
    const mastery: Record<string, MasteryRecord> = {
      a: { score: 80, lastReviewed: TODAY, firstSeen: TODAY },
      b: { score: 40, lastReviewed: TODAY, firstSeen: TODAY },
    }
    expect(aggregateMastery(mastery, ['a', 'b'])).toBe(60)
  })

  it('counts untouched concepts as zero so a unit is not flattered', () => {
    const mastery: Record<string, MasteryRecord> = {
      a: { score: 90, lastReviewed: TODAY, firstSeen: TODAY },
    }
    expect(aggregateMastery(mastery, ['a', 'b'])).toBe(45)
  })

  it('returns zero for an empty concept list', () => {
    expect(aggregateMastery({}, [])).toBe(0)
  })
})

describe('weakestConcepts', () => {
  it('sorts weakest first with a stable tiebreak', () => {
    const mastery: Record<string, MasteryRecord> = {
      zeta: { score: 30, lastReviewed: TODAY, firstSeen: TODAY },
      alpha: { score: 30, lastReviewed: TODAY, firstSeen: TODAY },
      beta: { score: 10, lastReviewed: TODAY, firstSeen: TODAY },
    }
    expect(weakestConcepts(mastery).map((c) => c.conceptId)).toEqual(['beta', 'alpha', 'zeta'])
  })
})

describe('lessonScore', () => {
  it('scores by first attempts only', () => {
    expect(lessonScore({ firstAttempts: [true, true, false, true] })).toBe(0.75)
  })

  it('returns zero for a lesson with no exercises', () => {
    expect(lessonScore({ firstAttempts: [] })).toBe(0)
  })
})

describe('isLessonUnlocked', () => {
  const order = ['l1', 'l2', 'l3']

  it('always unlocks the first lesson', () => {
    expect(isLessonUnlocked('l1', order, {})).toBe(true)
  })

  it('locks a lesson whose predecessor is unfinished', () => {
    expect(isLessonUnlocked('l2', order, {})).toBe(false)
  })

  it('unlocks once the predecessor is complete', () => {
    expect(isLessonUnlocked('l2', order, { l1: true })).toBe(true)
  })

  it('unlocks an unknown lesson rather than trapping the user', () => {
    expect(isLessonUnlocked('missing', order, {})).toBe(true)
  })
})
