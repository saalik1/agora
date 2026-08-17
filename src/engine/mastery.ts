import type { ConceptId, LessonId } from '@/types/content'
import type { DayStamp, MasteryRecord } from '@/types/progress'

/**
 * Mastery is an exponential moving average, not a percentage correct. A concept
 * you understood last month but just got wrong should not stay green because of
 * old successes, so recent answers dominate.
 */
export const MASTERY_WEIGHT_PREVIOUS = 0.7
export const MASTERY_WEIGHT_LATEST = 0.3

/** Where a first answer lands, since there is no previous score to blend with. */
export const MASTERY_SEED_CORRECT = 60
export const MASTERY_SEED_INCORRECT = 15

export type MasteryBand = 'new' | 'learning' | 'developing' | 'proficient' | 'mastered'

export interface BandInfo {
  band: MasteryBand
  label: string
  /** Which token in the difficulty triad renders this band. */
  tone: 'faint' | 'hard' | 'medium' | 'accent' | 'easy'
}

export function masteryBand(score: number): BandInfo {
  if (score < 20) return { band: 'new', label: 'New', tone: 'faint' }
  if (score < 40) return { band: 'learning', label: 'Learning', tone: 'hard' }
  if (score < 60) return { band: 'developing', label: 'Developing', tone: 'medium' }
  if (score < 80) return { band: 'proficient', label: 'Proficient', tone: 'accent' }
  return { band: 'mastered', label: 'Mastered', tone: 'easy' }
}

export function nextMastery(previous: number | null, correct: boolean): number {
  if (previous === null) {
    return correct ? MASTERY_SEED_CORRECT : MASTERY_SEED_INCORRECT
  }
  const latest = correct ? 100 : 0
  const blended = MASTERY_WEIGHT_PREVIOUS * previous + MASTERY_WEIGHT_LATEST * latest
  return clamp(round1(blended))
}

export interface RecordAnswerInput {
  mastery: Record<ConceptId, MasteryRecord>
  conceptIds: ConceptId[]
  correct: boolean
  today: DayStamp
}

/** Returns a new mastery map. Never mutates the input. */
export function recordAnswer({
  mastery,
  conceptIds,
  correct,
  today,
}: RecordAnswerInput): Record<ConceptId, MasteryRecord> {
  if (conceptIds.length === 0) return mastery
  const next = { ...mastery }

  for (const id of conceptIds) {
    const existing = next[id]
    next[id] = {
      score: nextMastery(existing ? existing.score : null, correct),
      lastReviewed: today,
      firstSeen: existing ? existing.firstSeen : today,
    }
  }

  return next
}

/**
 * Marks concepts as encountered without scoring them. Called when a lesson is
 * opened so that a concept can be "seen but never practised" — a state the
 * review scheduler treats as urgent rather than invisible.
 */
export function seedConcepts(
  mastery: Record<ConceptId, MasteryRecord>,
  conceptIds: ConceptId[],
  today: DayStamp,
): Record<ConceptId, MasteryRecord> {
  const next = { ...mastery }
  for (const id of conceptIds) {
    if (!next[id]) {
      next[id] = { score: 0, lastReviewed: today, firstSeen: today }
    }
  }
  return next
}

/** Mean mastery across a set of concepts. Untouched concepts count as zero. */
export function aggregateMastery(
  mastery: Record<ConceptId, MasteryRecord>,
  conceptIds: ConceptId[],
): number {
  if (conceptIds.length === 0) return 0
  const total = conceptIds.reduce((sum, id) => sum + (mastery[id]?.score ?? 0), 0)
  return round1(total / conceptIds.length)
}

export interface MasteryDelta {
  conceptId: ConceptId
  before: number | null
  after: number
}

export function masteryDeltas(
  before: Record<ConceptId, MasteryRecord>,
  after: Record<ConceptId, MasteryRecord>,
  conceptIds: ConceptId[],
): MasteryDelta[] {
  return conceptIds.map((conceptId) => ({
    conceptId,
    before: before[conceptId]?.score ?? null,
    after: after[conceptId]?.score ?? 0,
  }))
}

/** Concepts sorted weakest first, for the progress page. */
export function weakestConcepts(
  mastery: Record<ConceptId, MasteryRecord>,
  limit = 5,
): Array<{ conceptId: ConceptId; score: number }> {
  return Object.entries(mastery)
    .map(([conceptId, record]) => ({ conceptId, score: record.score }))
    .sort((a, b) => a.score - b.score || a.conceptId.localeCompare(b.conceptId))
    .slice(0, limit)
}

export function strongestConcepts(
  mastery: Record<ConceptId, MasteryRecord>,
  limit = 5,
): Array<{ conceptId: ConceptId; score: number }> {
  return Object.entries(mastery)
    .map(([conceptId, record]) => ({ conceptId, score: record.score }))
    .sort((a, b) => b.score - a.score || a.conceptId.localeCompare(b.conceptId))
    .slice(0, limit)
}

export interface LessonScoreInput {
  /** One entry per exercise: was it right on the first attempt? */
  firstAttempts: boolean[]
}

export function lessonScore({ firstAttempts }: LessonScoreInput): number {
  if (firstAttempts.length === 0) return 0
  const correct = firstAttempts.filter(Boolean).length
  return correct / firstAttempts.length
}

export function isLessonUnlocked(
  lessonId: LessonId,
  orderedLessonIds: readonly LessonId[],
  completed: Record<LessonId, unknown>,
): boolean {
  const index = orderedLessonIds.indexOf(lessonId)
  if (index <= 0) return true
  const previous = orderedLessonIds[index - 1]
  return previous !== undefined && previous in completed
}

function clamp(value: number): number {
  return Math.min(100, Math.max(0, value))
}

function round1(value: number): number {
  return Math.round(value * 10) / 10
}
