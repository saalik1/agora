import { daysBetween } from '@/lib/date'
import type { DayStamp, StreakState } from '@/types/progress'

/**
 * Streaks count consecutive local calendar days containing real work — a
 * completed lesson or a finished practice set. Opening the app does not count.
 *
 * Every comparison here runs on `YYYY-MM-DD` strings rather than timestamps, so
 * the day boundary is the user's midnight and daylight saving transitions are
 * invisible.
 */

export const EMPTY_STREAK: StreakState = {
  current: 0,
  longest: 0,
  lastActiveDay: null,
}

/** Records meaningful activity on `today`. Idempotent within a single day. */
export function registerActivity(streak: StreakState, today: DayStamp): StreakState {
  const { lastActiveDay } = streak

  if (lastActiveDay === null) {
    return { current: 1, longest: Math.max(1, streak.longest), lastActiveDay: today }
  }

  const gap = daysBetween(lastActiveDay, today)

  // Same day: already counted. Nothing changes, including the timestamp.
  if (gap === 0) return streak

  // A clock moved backwards, or imported progress from a device ahead of this
  // one. Leave the streak untouched rather than corrupting it.
  if (gap < 0) return streak

  const current = gap === 1 ? streak.current + 1 : 1

  return {
    current,
    longest: Math.max(streak.longest, current),
    lastActiveDay: today,
  }
}

/**
 * The streak as it stands *today*, without recording activity. A streak whose
 * last active day was two or more days ago has already lapsed, so the dashboard
 * must show 0 rather than the stored figure.
 */
export function currentStreak(streak: StreakState, today: DayStamp): number {
  if (streak.lastActiveDay === null) return 0
  const gap = daysBetween(streak.lastActiveDay, today)
  if (gap < 0) return streak.current
  return gap <= 1 ? streak.current : 0
}

/** True when the streak will lapse unless the user works today. */
export function isStreakAtRisk(streak: StreakState, today: DayStamp): boolean {
  if (streak.lastActiveDay === null || streak.current === 0) return false
  return daysBetween(streak.lastActiveDay, today) === 1
}

export function hasStudiedToday(streak: StreakState, today: DayStamp): boolean {
  return streak.lastActiveDay === today
}
