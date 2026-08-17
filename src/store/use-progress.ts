import { create } from 'zustand'
import { toDayStamp } from '@/lib/date'
import {
  dailyGoalBonus,
  evaluateAchievements,
  levelState,
  practiceXp,
  recordAnswer,
  registerActivity,
  seedConcepts,
} from '@/engine'
import type { ConceptId, ExerciseId, LessonId } from '@/types/content'
import type { DailyGoal, ThemePreference, UserProgress } from '@/types/progress'
import {
  LocalStorageProgressRepository,
  MAX_ANSWER_HISTORY,
  type ProgressRepository,
  createEmptyProgress,
} from './progress-repository'

/**
 * The store is a thin shell: it holds state, delegates every rule to the engine,
 * and persists through the repository. Deliberately no game logic lives here —
 * keeping it in `/engine` is what makes it testable without React or a browser.
 */

let repository: ProgressRepository = new LocalStorageProgressRepository()

/** Test seam. Lets tests swap in an in-memory repository. */
export function setProgressRepository(next: ProgressRepository): void {
  repository = next
}

let saveTimer: ReturnType<typeof setTimeout> | null = null

interface ProgressState {
  progress: UserProgress
  hydrated: boolean
  /** Achievements earned since the last time the toast was dismissed. */
  pendingAchievements: string[]

  hydrate: () => Promise<void>
  persist: () => void

  beginLesson: (conceptIds: ConceptId[]) => void
  completeLesson: (input: CompleteLessonInput) => CompleteLessonResult
  completePractice: (input: CompletePracticeInput) => CompletePracticeResult
  recordExerciseAnswer: (input: RecordAnswerInput) => void

  setTheme: (theme: ThemePreference) => void
  setDailyGoal: (goal: DailyGoal) => void
  setReducedMotion: (value: boolean) => void

  replaceProgress: (progress: UserProgress) => void
  resetProgress: () => Promise<void>
  dismissAchievements: () => void
}

export interface CompleteLessonInput {
  lessonId: LessonId
  conceptIds: ConceptId[]
  xpAward: number
  score: number
  now?: Date
}

export interface CompleteLessonResult {
  xpGained: number
  levelBefore: number
  levelAfter: number
  leveledUp: boolean
}

export interface CompletePracticeInput {
  correctCount: number
  now?: Date
}

export interface CompletePracticeResult {
  xpGained: number
  leveledUp: boolean
}

export interface RecordAnswerInput {
  exerciseId: ExerciseId
  conceptIds: ConceptId[]
  correct: boolean
  now?: Date
}

export const useProgress = create<ProgressState>((set, get) => ({
  progress: createEmptyProgress(),
  hydrated: false,
  pendingAchievements: [],

  hydrate: async () => {
    const progress = await repository.load()
    set({ progress, hydrated: true })
  },

  /**
   * Writes are debounced because a lesson can update state several times in a
   * few seconds, and serialising the whole blob on every keystroke-scale change
   * is wasted work.
   */
  persist: () => {
    if (saveTimer) clearTimeout(saveTimer)
    saveTimer = setTimeout(() => {
      void repository.save(get().progress)
      saveTimer = null
    }, 300)
  },

  beginLesson: (conceptIds) => {
    const today = toDayStamp(new Date())
    set((state) => ({
      progress: {
        ...state.progress,
        mastery: seedConcepts(state.progress.mastery, conceptIds, today),
      },
    }))
    get().persist()
  },

  recordExerciseAnswer: ({ exerciseId, conceptIds, correct, now = new Date() }) => {
    const today = toDayStamp(now)
    set((state) => {
      const answers = [
        ...state.progress.answers,
        { exerciseId, conceptIds, correct, at: now.toISOString() },
      ].slice(-MAX_ANSWER_HISTORY)

      return {
        progress: {
          ...state.progress,
          answers,
          mastery: recordAnswer({
            mastery: state.progress.mastery,
            conceptIds,
            correct,
            today,
          }),
        },
      }
    })
    get().persist()
  },

  completeLesson: ({ lessonId, conceptIds, xpAward, score, now = new Date() }) => {
    const today = toDayStamp(now)
    const before = get().progress
    const levelBefore = levelState(before.xp).level

    const bonus = dailyGoalBonus(
      before.xpByDay[today] ?? 0,
      xpAward,
      before.settings.dailyGoal,
    )
    const xpGained = xpAward + bonus

    const existing = before.lessons[lessonId]
    const next: UserProgress = {
      ...before,
      xp: before.xp + xpGained,
      xpByDay: { ...before.xpByDay, [today]: (before.xpByDay[today] ?? 0) + xpGained },
      streak: xpGained > 0 || !existing ? registerActivity(before.streak, today) : before.streak,
      lessons: {
        ...before.lessons,
        [lessonId]: {
          completedAt: now.toISOString(),
          bestScore: Math.max(existing?.bestScore ?? 0, score),
          attempts: (existing?.attempts ?? 0) + 1,
        },
      },
      mastery: seedConcepts(before.mastery, conceptIds, today),
    }

    const earned = evaluateAchievements({ progress: next, justCompletedScore: score })
    for (const id of earned) next.achievements[id] = now.toISOString()

    set((state) => ({
      progress: next,
      pendingAchievements: [...state.pendingAchievements, ...earned],
    }))
    get().persist()

    const levelAfter = levelState(next.xp).level
    return { xpGained, levelBefore, levelAfter, leveledUp: levelAfter > levelBefore }
  },

  completePractice: ({ correctCount, now = new Date() }) => {
    const today = toDayStamp(now)
    const before = get().progress
    const levelBefore = levelState(before.xp).level

    const base = practiceXp(correctCount)
    const bonus = dailyGoalBonus(before.xpByDay[today] ?? 0, base, before.settings.dailyGoal)
    const xpGained = base + bonus

    const next: UserProgress = {
      ...before,
      xp: before.xp + xpGained,
      xpByDay: { ...before.xpByDay, [today]: (before.xpByDay[today] ?? 0) + xpGained },
      streak: registerActivity(before.streak, today),
    }

    const earned = evaluateAchievements({ progress: next })
    for (const id of earned) next.achievements[id] = now.toISOString()

    set((state) => ({
      progress: next,
      pendingAchievements: [...state.pendingAchievements, ...earned],
    }))
    get().persist()

    return { xpGained, leveledUp: levelState(next.xp).level > levelBefore }
  },

  setTheme: (theme) => {
    set((state) => ({
      progress: { ...state.progress, settings: { ...state.progress.settings, theme } },
    }))
    get().persist()
  },

  setDailyGoal: (dailyGoal) => {
    set((state) => ({
      progress: { ...state.progress, settings: { ...state.progress.settings, dailyGoal } },
    }))
    get().persist()
  },

  setReducedMotion: (reducedMotion) => {
    set((state) => ({
      progress: { ...state.progress, settings: { ...state.progress.settings, reducedMotion } },
    }))
    get().persist()
  },

  replaceProgress: (progress) => {
    set({ progress })
    void repository.save(progress)
  },

  resetProgress: async () => {
    const fresh = createEmptyProgress()
    set({ progress: fresh, pendingAchievements: [] })
    await repository.clear()
  },

  dismissAchievements: () => set({ pendingAchievements: [] }),
}))

/* -------------------------------------------------------------------------- */
/* Selectors                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Level is derived, not selected. A selector returning `levelState(...)` would
 * build a new object on every call, and Zustand's reference check would then
 * re-render forever. Select the primitive and compute outside the store.
 */
export function useLevel() {
  return levelState(useProgress((state) => state.progress.xp))
}

export const selectXp = (state: ProgressState) => state.progress.xp
export const selectSettings = (state: ProgressState) => state.progress.settings
export const selectMastery = (state: ProgressState) => state.progress.mastery
export const selectCompletedLessons = (state: ProgressState) => state.progress.lessons
