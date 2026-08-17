import { isValidDayStamp, toDayStamp } from '@/lib/date'
import type { DailyGoal, Settings, ThemePreference, UserProgress } from '@/types/progress'

/**
 * All persistence goes through this interface. Nothing else in the app is
 * allowed to touch `localStorage` directly — swapping in IndexedDB or a real
 * backend later means writing one new implementation, not chasing storage calls
 * through components.
 */
export interface ProgressRepository {
  load(): Promise<UserProgress>
  save(progress: UserProgress): Promise<void>
  clear(): Promise<void>
}

export const PROGRESS_VERSION = 1
export const STORAGE_KEY = 'agora.progress.v1'

/** Answer history is capped so a long-running local store cannot grow forever. */
export const MAX_ANSWER_HISTORY = 500

export const DEFAULT_SETTINGS: Settings = {
  theme: 'dark',
  reducedMotion: false,
  dailyGoal: 25,
}

export function createEmptyProgress(today = toDayStamp(new Date())): UserProgress {
  return {
    version: PROGRESS_VERSION,
    createdAt: today,
    xp: 0,
    streak: { current: 0, longest: 0, lastActiveDay: null },
    lessons: {},
    mastery: {},
    answers: [],
    achievements: {},
    xpByDay: {},
    settings: { ...DEFAULT_SETTINGS },
  }
}

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

const VALID_GOALS: DailyGoal[] = [10, 25, 50]
const VALID_THEMES: ThemePreference[] = ['dark', 'light', 'system']

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function num(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

/**
 * Coerces unknown input into a valid `UserProgress`. Used for both stored data
 * and imported files, so a corrupt blob or a hand-edited export degrades to
 * sensible defaults instead of crashing the app on load.
 */
export function normaliseProgress(input: unknown, today = toDayStamp(new Date())): UserProgress {
  const empty = createEmptyProgress(today)
  if (!isRecord(input)) return empty

  const settings = isRecord(input.settings) ? input.settings : {}
  const theme = VALID_THEMES.includes(settings.theme as ThemePreference)
    ? (settings.theme as ThemePreference)
    : DEFAULT_SETTINGS.theme
  const dailyGoal = VALID_GOALS.includes(settings.dailyGoal as DailyGoal)
    ? (settings.dailyGoal as DailyGoal)
    : DEFAULT_SETTINGS.dailyGoal

  const streakInput = isRecord(input.streak) ? input.streak : {}
  const lastActiveDay = isValidDayStamp(streakInput.lastActiveDay)
    ? streakInput.lastActiveDay
    : null

  const lessons: UserProgress['lessons'] = {}
  if (isRecord(input.lessons)) {
    for (const [id, value] of Object.entries(input.lessons)) {
      if (!isRecord(value)) continue
      lessons[id] = {
        completedAt: typeof value.completedAt === 'string' ? value.completedAt : today,
        bestScore: Math.min(1, Math.max(0, num(value.bestScore, 0))),
        attempts: Math.max(1, Math.floor(num(value.attempts, 1))),
      }
    }
  }

  const mastery: UserProgress['mastery'] = {}
  if (isRecord(input.mastery)) {
    for (const [id, value] of Object.entries(input.mastery)) {
      if (!isRecord(value)) continue
      mastery[id] = {
        score: Math.min(100, Math.max(0, num(value.score, 0))),
        lastReviewed: isValidDayStamp(value.lastReviewed) ? value.lastReviewed : today,
        firstSeen: isValidDayStamp(value.firstSeen) ? value.firstSeen : today,
      }
    }
  }

  const answers: UserProgress['answers'] = Array.isArray(input.answers)
    ? input.answers
        .filter(isRecord)
        .filter((a) => typeof a.exerciseId === 'string')
        .map((a) => ({
          exerciseId: a.exerciseId as string,
          conceptIds: Array.isArray(a.conceptIds)
            ? a.conceptIds.filter((c): c is string => typeof c === 'string')
            : [],
          correct: a.correct === true,
          at: typeof a.at === 'string' ? a.at : new Date().toISOString(),
        }))
        .slice(-MAX_ANSWER_HISTORY)
    : []

  const achievements: UserProgress['achievements'] = {}
  if (isRecord(input.achievements)) {
    for (const [id, value] of Object.entries(input.achievements)) {
      if (typeof value === 'string') achievements[id] = value
    }
  }

  const xpByDay: UserProgress['xpByDay'] = {}
  if (isRecord(input.xpByDay)) {
    for (const [day, value] of Object.entries(input.xpByDay)) {
      if (isValidDayStamp(day)) xpByDay[day] = Math.max(0, num(value, 0))
    }
  }

  return {
    version: PROGRESS_VERSION,
    createdAt: isValidDayStamp(input.createdAt) ? input.createdAt : today,
    xp: Math.max(0, num(input.xp, 0)),
    streak: {
      current: Math.max(0, Math.floor(num(streakInput.current, 0))),
      longest: Math.max(0, Math.floor(num(streakInput.longest, 0))),
      lastActiveDay,
    },
    lessons,
    mastery,
    answers,
    achievements,
    xpByDay,
    settings: {
      theme,
      dailyGoal,
      reducedMotion: settings.reducedMotion === true,
    },
  }
}

/* -------------------------------------------------------------------------- */
/* localStorage implementation                                                */
/* -------------------------------------------------------------------------- */

export class LocalStorageProgressRepository implements ProgressRepository {
  constructor(private readonly key: string = STORAGE_KEY) {}

  async load(): Promise<UserProgress> {
    if (typeof localStorage === 'undefined') return createEmptyProgress()
    try {
      const raw = localStorage.getItem(this.key)
      if (!raw) return createEmptyProgress()
      return normaliseProgress(JSON.parse(raw))
    } catch {
      // Corrupt or unreadable storage should not brick the app.
      return createEmptyProgress()
    }
  }

  async save(progress: UserProgress): Promise<void> {
    if (typeof localStorage === 'undefined') return
    try {
      const trimmed: UserProgress = {
        ...progress,
        answers: progress.answers.slice(-MAX_ANSWER_HISTORY),
      }
      localStorage.setItem(this.key, JSON.stringify(trimmed))
    } catch {
      // Private browsing or a full quota. Progress stays in memory this session.
    }
  }

  async clear(): Promise<void> {
    if (typeof localStorage === 'undefined') return
    try {
      localStorage.removeItem(this.key)
    } catch {
      // Nothing to do — the caller resets in-memory state regardless.
    }
  }
}

/** In-memory implementation, used by tests. */
export class MemoryProgressRepository implements ProgressRepository {
  private data: UserProgress | null = null

  async load(): Promise<UserProgress> {
    return this.data ? normaliseProgress(this.data) : createEmptyProgress()
  }

  async save(progress: UserProgress): Promise<void> {
    this.data = progress
  }

  async clear(): Promise<void> {
    this.data = null
  }
}
