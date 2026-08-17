import type { ConceptId, ExerciseId, LessonId } from './content'

/** Local calendar day, `YYYY-MM-DD`. Never a timestamp — see `lib/date.ts`. */
export type DayStamp = string

export type DailyGoal = 10 | 25 | 50
export type ThemePreference = 'dark' | 'light' | 'system'

export interface StreakState {
  current: number
  longest: number
  lastActiveDay: DayStamp | null
}

export interface LessonRecord {
  completedAt: string
  /** Best proportion correct on first attempt at each exercise, 0–1. */
  bestScore: number
  attempts: number
}

export interface MasteryRecord {
  /** 0–100. Weighted towards recent performance. */
  score: number
  lastReviewed: DayStamp
  firstSeen: DayStamp
}

export interface AnswerRecord {
  exerciseId: ExerciseId
  conceptIds: ConceptId[]
  correct: boolean
  at: string
}

export interface Settings {
  theme: ThemePreference
  reducedMotion: boolean
  dailyGoal: DailyGoal
}

export interface UserProgress {
  version: number
  createdAt: string
  xp: number
  streak: StreakState
  lessons: Record<LessonId, LessonRecord>
  mastery: Record<ConceptId, MasteryRecord>
  /** Most recent answers, capped. Powers accuracy stats and review recency. */
  answers: AnswerRecord[]
  /** Achievement id -> ISO timestamp earned. */
  achievements: Record<string, string>
  /** XP earned per day, for the daily goal and the activity view. */
  xpByDay: Record<DayStamp, number>
  settings: Settings
}
