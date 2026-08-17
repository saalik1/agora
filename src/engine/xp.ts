import type { DailyGoal, DayStamp } from '@/types/progress'

/**
 * XP rewards effort that involves reasoning. Navigating the app earns nothing —
 * if XP could be farmed by clicking through screens, the number would stop
 * meaning anything and so would the streak that depends on it.
 */
export const XP = {
  /** Fallback when a lesson does not declare its own reward. */
  LESSON_DEFAULT: 15,
  /** Per correct answer in a practice set. */
  PRACTICE_CORRECT: 2,
  /** One-off bonus the first time a day's goal is met. */
  DAILY_GOAL_BONUS: 10,
  /** Every exercise in a lesson answered correctly at the first attempt. */
  PERFECT_LESSON_BONUS: 5,
} as const

export interface LessonXpInput {
  lessonReward: number
  /** Proportion of exercises answered correctly first time, 0–1. */
  score: number
  /** Repeat runs update mastery but do not pay out again. */
  alreadyCompleted: boolean
}

export function lessonXp({ lessonReward, score, alreadyCompleted }: LessonXpInput): number {
  if (alreadyCompleted) return 0
  const base = lessonReward > 0 ? lessonReward : XP.LESSON_DEFAULT
  const perfect = score >= 1 ? XP.PERFECT_LESSON_BONUS : 0
  return base + perfect
}

export function practiceXp(correctCount: number): number {
  return Math.max(0, Math.floor(correctCount)) * XP.PRACTICE_CORRECT
}

/**
 * The daily goal bonus pays once per day, and only on the transition across the
 * threshold — so it cannot be re-earned by continuing to study after hitting it.
 */
export function dailyGoalBonus(
  xpBeforeToday: number,
  xpGained: number,
  goal: DailyGoal,
): number {
  const before = Math.max(0, xpBeforeToday)
  const after = before + Math.max(0, xpGained)
  return before < goal && after >= goal ? XP.DAILY_GOAL_BONUS : 0
}

export interface DailyGoalState {
  earned: number
  goal: DailyGoal
  progress: number
  met: boolean
}

export function dailyGoalState(
  xpByDay: Record<DayStamp, number>,
  today: DayStamp,
  goal: DailyGoal,
): DailyGoalState {
  const earned = xpByDay[today] ?? 0
  return {
    earned,
    goal,
    progress: Math.min(1, earned / goal),
    met: earned >= goal,
  }
}
