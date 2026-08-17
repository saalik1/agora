import {
  getLesson,
  lessonsOfUnit,
  orderedLessons,
  subjects,
  unitsOfSubject,
} from '@/content'
import type { Lesson, LessonId, Unit } from '@/types/content'

/**
 * Curriculum navigation. Kept out of `/content` so the content registry stays a
 * pure data layer with no knowledge of progress, and out of `/engine` so the
 * engine stays free of content imports.
 */

/**
 * The lesson the user should do next: the first incomplete one in curriculum
 * order. Falls back to the last lesson once everything is finished, so the
 * dashboard always has something to point at.
 */
export function nextLessonFor(completed: Record<LessonId, unknown>): Lesson | null {
  const all = orderedLessons()
  const pending = all.find((lesson) => !(lesson.id in completed))
  if (pending) return pending
  return all[all.length - 1] ?? null
}

/** True once every lesson in the curriculum has been completed at least once. */
export function isCourseComplete(completed: Record<LessonId, unknown>): boolean {
  const all = orderedLessons()
  return all.length > 0 && all.every((lesson) => lesson.id in completed)
}

/** The lesson after this one, or null at the end of the curriculum. */
export function lessonAfter(lessonId: LessonId): Lesson | null {
  const all = orderedLessons()
  const index = all.findIndex((lesson) => lesson.id === lessonId)
  if (index < 0) return null
  return all[index + 1] ?? null
}

export interface UnitProgress {
  unit: Unit
  lessons: Lesson[]
  completedCount: number
  conceptIds: string[]
}

/** Per-unit progress for the current subject, for dashboard mastery bars. */
export function unitProgress(completed: Record<LessonId, unknown>): UnitProgress[] {
  const subject = subjects[0]
  if (!subject) return []

  return unitsOfSubject(subject.id).map((unit) => {
    const unitLessons = lessonsOfUnit(unit.id)
    return {
      unit,
      lessons: unitLessons,
      completedCount: unitLessons.filter((lesson) => lesson.id in completed).length,
      conceptIds: [...new Set(unitLessons.flatMap((lesson) => lesson.conceptIds))],
    }
  })
}

/** Human-readable location of a lesson, e.g. "Argument Basics · Lesson 2". */
export function lessonLocation(lessonId: LessonId): string | null {
  const lesson = getLesson(lessonId)
  if (!lesson) return null
  const siblings = lessonsOfUnit(lesson.unitId)
  const position = siblings.findIndex((l) => l.id === lessonId)
  const unit = unitsOfSubject(subjects[0]?.id ?? '').find((u) => u.id === lesson.unitId)
  if (!unit || position < 0) return null
  return `${unit.title} · Lesson ${position + 1}`
}
