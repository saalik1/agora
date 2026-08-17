import type { DayStamp } from '@/types/progress'

/**
 * Streaks are counted in local calendar days, so every comparison in the engine
 * runs on `YYYY-MM-DD` strings built from local date parts. Using timestamps or
 * `toISOString()` here would silently shift a user's day boundary by their UTC
 * offset — someone studying at 11pm in London would get credit for tomorrow.
 */
export function toDayStamp(date: Date): DayStamp {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/** Parses a day stamp into a Date at local midnight. */
export function fromDayStamp(stamp: DayStamp): Date {
  const [year, month, day] = stamp.split('-').map(Number)
  return new Date(year ?? 1970, (month ?? 1) - 1, day ?? 1)
}

/**
 * Whole calendar days between two stamps. Computed from local midnights so that
 * daylight saving transitions — days that are 23 or 25 hours long — still count
 * as exactly one day apart.
 */
export function daysBetween(from: DayStamp, to: DayStamp): number {
  const a = fromDayStamp(from)
  const b = fromDayStamp(to)
  const MS_PER_DAY = 86_400_000
  return Math.round((b.getTime() - a.getTime()) / MS_PER_DAY)
}

export function addDays(stamp: DayStamp, days: number): DayStamp {
  const date = fromDayStamp(stamp)
  date.setDate(date.getDate() + days)
  return toDayStamp(date)
}

export function isValidDayStamp(value: unknown): value is DayStamp {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
}
