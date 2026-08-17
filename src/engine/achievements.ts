import type { UserProgress } from '@/types/progress'

export interface Achievement {
  id: string
  title: string
  description: string
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: 'first-argument',
    title: 'First Argument',
    description: 'Finish your first lesson.',
  },
  {
    id: 'perfect-lesson',
    title: 'Perfect Lesson',
    description: 'Answer every exercise in a lesson correctly at the first attempt.',
  },
  {
    id: 'seven-day-streak',
    title: 'Seven-Day Streak',
    description: 'Study on seven consecutive days.',
  },
] as const

export interface AchievementContext {
  progress: UserProgress
  /** Score of the run that just finished, 0–1. Absent outside lesson completion. */
  justCompletedScore?: number
}

/** Returns ids newly earned by this state. Already-held achievements are skipped. */
export function evaluateAchievements({
  progress,
  justCompletedScore,
}: AchievementContext): string[] {
  const earned: string[] = []
  const has = (id: string) => id in progress.achievements

  if (!has('first-argument') && Object.keys(progress.lessons).length >= 1) {
    earned.push('first-argument')
  }

  if (!has('perfect-lesson') && justCompletedScore !== undefined && justCompletedScore >= 1) {
    earned.push('perfect-lesson')
  }

  if (!has('seven-day-streak') && progress.streak.current >= 7) {
    earned.push('seven-day-streak')
  }

  return earned
}

export function achievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find((a) => a.id === id)
}
