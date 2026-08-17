import { daysBetween } from '@/lib/date'
import type { ConceptId } from '@/types/content'
import type { DayStamp, MasteryRecord } from '@/types/progress'

/**
 * Spaced review. Priority rises with time since last review and falls with
 * mastery:
 *
 *     priority = daysSinceReview × (1 − mastery / 100)
 *
 * Two adjustments stop that formula from hiding concepts that need work most:
 *
 * 1. A concept reviewed today scores zero days, which would rank a freshly
 *    failed concept below a well-known one from last week. Days are floored at
 *    `SAME_DAY_WEIGHT` so weak concepts still surface immediately.
 * 2. A concept met in a lesson but never practised has no evidence behind it.
 *    It gets `UNPRACTISED_BOOST` so it enters the rotation rather than waiting
 *    for enough days to accumulate.
 */

export const SAME_DAY_WEIGHT = 0.5
export const UNPRACTISED_BOOST = 3
export const DEFAULT_REVIEW_SIZE = 10

export interface ReviewCandidate {
  conceptId: ConceptId
  priority: number
  mastery: number
  daysSinceReview: number
  neverPractised: boolean
}

export function conceptPriority(
  record: MasteryRecord,
  today: DayStamp,
): { priority: number; daysSinceReview: number; neverPractised: boolean } {
  const rawDays = daysBetween(record.lastReviewed, today)
  const daysSinceReview = Math.max(0, rawDays)
  const weightedDays = Math.max(SAME_DAY_WEIGHT, daysSinceReview)
  const gap = 1 - record.score / 100

  // score === 0 marks a concept seeded by opening a lesson but never answered.
  const neverPractised = record.score === 0
  const boost = neverPractised ? UNPRACTISED_BOOST : 1

  return {
    priority: round2(weightedDays * gap * boost),
    daysSinceReview,
    neverPractised,
  }
}

export function rankConcepts(
  mastery: Record<ConceptId, MasteryRecord>,
  today: DayStamp,
): ReviewCandidate[] {
  return Object.entries(mastery)
    .map(([conceptId, record]) => {
      const { priority, daysSinceReview, neverPractised } = conceptPriority(record, today)
      return {
        conceptId,
        priority,
        mastery: record.score,
        daysSinceReview,
        neverPractised,
      }
    })
    .sort(
      (a, b) =>
        b.priority - a.priority ||
        a.mastery - b.mastery ||
        // Stable tiebreak so the same state always yields the same set.
        a.conceptId.localeCompare(b.conceptId),
    )
}

export function selectReviewConcepts(
  mastery: Record<ConceptId, MasteryRecord>,
  today: DayStamp,
  limit = DEFAULT_REVIEW_SIZE,
): ReviewCandidate[] {
  return rankConcepts(mastery, today).slice(0, limit)
}

export interface ReviewPoolItem {
  exerciseId: string
  conceptIds: ConceptId[]
}

/**
 * Picks one exercise per prioritised concept, preferring exercises not answered
 * recently and never repeating an exercise within a set.
 */
export function buildReviewSet(
  candidates: ReviewCandidate[],
  pool: ReviewPoolItem[],
  recentExerciseIds: readonly string[] = [],
  limit = DEFAULT_REVIEW_SIZE,
): string[] {
  const recent = new Set(recentExerciseIds)
  const used = new Set<string>()
  const chosen: string[] = []

  const pickFor = (conceptId: ConceptId, avoidRecent: boolean): string | null => {
    const match = pool.find(
      (item) =>
        !used.has(item.exerciseId) &&
        item.conceptIds.includes(conceptId) &&
        (!avoidRecent || !recent.has(item.exerciseId)),
    )
    return match ? match.exerciseId : null
  }

  for (const candidate of candidates) {
    if (chosen.length >= limit) break
    const exerciseId =
      pickFor(candidate.conceptId, true) ?? pickFor(candidate.conceptId, false)
    if (exerciseId) {
      used.add(exerciseId)
      chosen.push(exerciseId)
    }
  }

  return chosen
}

function round2(value: number): number {
  return Math.round(value * 100) / 100
}
