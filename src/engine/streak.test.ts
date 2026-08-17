import { describe, expect, it } from 'vitest'
import { addDays, daysBetween, toDayStamp } from '@/lib/date'
import type { StreakState } from '@/types/progress'
import {
  EMPTY_STREAK,
  currentStreak,
  hasStudiedToday,
  isStreakAtRisk,
  registerActivity,
} from './streak'

const streak = (current: number, longest: number, lastActiveDay: string | null): StreakState => ({
  current,
  longest,
  lastActiveDay,
})

describe('registerActivity', () => {
  it('starts a streak on the first day of activity', () => {
    const result = registerActivity(EMPTY_STREAK, '2026-08-16')
    expect(result.current).toBe(1)
    expect(result.longest).toBe(1)
    expect(result.lastActiveDay).toBe('2026-08-16')
  })

  it('does not increment twice in the same day', () => {
    const day1 = registerActivity(EMPTY_STREAK, '2026-08-16')
    const again = registerActivity(day1, '2026-08-16')
    expect(again.current).toBe(1)
    expect(again).toBe(day1)
  })

  it('increments across consecutive days', () => {
    let state = registerActivity(EMPTY_STREAK, '2026-08-14')
    state = registerActivity(state, '2026-08-15')
    state = registerActivity(state, '2026-08-16')
    expect(state.current).toBe(3)
    expect(state.longest).toBe(3)
  })

  it('resets to 1 after a missed day', () => {
    const state = registerActivity(streak(5, 5, '2026-08-14'), '2026-08-16')
    expect(state.current).toBe(1)
  })

  it('remembers the longest streak after a reset', () => {
    const state = registerActivity(streak(9, 9, '2026-08-01'), '2026-08-16')
    expect(state.current).toBe(1)
    expect(state.longest).toBe(9)
  })

  it('carries across a month boundary', () => {
    const state = registerActivity(streak(3, 3, '2026-07-31'), '2026-08-01')
    expect(state.current).toBe(4)
  })

  it('carries across a year boundary', () => {
    const state = registerActivity(streak(2, 2, '2026-12-31'), '2027-01-01')
    expect(state.current).toBe(3)
  })

  it('carries across a leap day', () => {
    const state = registerActivity(streak(1, 1, '2028-02-28'), '2028-02-29')
    expect(state.current).toBe(2)
    expect(registerActivity(state, '2028-03-01').current).toBe(3)
  })

  it('ignores a day earlier than the last recorded one', () => {
    const before = streak(4, 4, '2026-08-16')
    expect(registerActivity(before, '2026-08-10')).toBe(before)
  })
})

describe('currentStreak', () => {
  it('shows the stored figure on the day it was earned', () => {
    expect(currentStreak(streak(6, 6, '2026-08-16'), '2026-08-16')).toBe(6)
  })

  it('still shows the streak the day after, since it can still be saved', () => {
    expect(currentStreak(streak(6, 6, '2026-08-15'), '2026-08-16')).toBe(6)
  })

  it('shows zero once a full day has been missed', () => {
    expect(currentStreak(streak(6, 6, '2026-08-14'), '2026-08-16')).toBe(0)
  })

  it('shows zero for a user who has never studied', () => {
    expect(currentStreak(EMPTY_STREAK, '2026-08-16')).toBe(0)
  })
})

describe('isStreakAtRisk', () => {
  it('is true the day after the last activity', () => {
    expect(isStreakAtRisk(streak(3, 3, '2026-08-15'), '2026-08-16')).toBe(true)
  })

  it('is false once the user has studied today', () => {
    expect(isStreakAtRisk(streak(3, 3, '2026-08-16'), '2026-08-16')).toBe(false)
  })

  it('is false when the streak has already lapsed', () => {
    expect(isStreakAtRisk(streak(3, 3, '2026-08-01'), '2026-08-16')).toBe(false)
  })
})

describe('hasStudiedToday', () => {
  it('reflects the stored day only', () => {
    expect(hasStudiedToday(streak(1, 1, '2026-08-16'), '2026-08-16')).toBe(true)
    expect(hasStudiedToday(streak(1, 1, '2026-08-15'), '2026-08-16')).toBe(false)
  })
})

describe('day arithmetic', () => {
  it('counts a daylight saving day as exactly one day', () => {
    // 29 March 2026 is a 23-hour day in the UK; 25 October 2026 is 25 hours.
    expect(daysBetween('2026-03-28', '2026-03-29')).toBe(1)
    expect(daysBetween('2026-10-24', '2026-10-25')).toBe(1)
  })

  it('builds a stamp from local date parts, not UTC', () => {
    // 23:30 local on the 16th must be the 16th even west of Greenwich.
    const lateEvening = new Date(2026, 7, 16, 23, 30, 0)
    expect(toDayStamp(lateEvening)).toBe('2026-08-16')
  })

  it('round-trips through addDays', () => {
    expect(addDays('2026-08-16', 1)).toBe('2026-08-17')
    expect(addDays('2026-08-16', -1)).toBe('2026-08-15')
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
  })

  it('reports a negative gap when days run backwards', () => {
    expect(daysBetween('2026-08-16', '2026-08-14')).toBe(-2)
  })
})
