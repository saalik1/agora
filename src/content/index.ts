import type {
  Argument,
  ArgumentId,
  Concept,
  ConceptId,
  Exercise,
  ExerciseId,
  Lesson,
  LessonId,
  Subject,
  Unit,
  UnitId,
} from '@/types/content'
import { argumentCards } from './arguments'
import { concepts } from './concepts'
import {
  argumentBasicsExercises,
  argumentBasicsLessons,
  argumentBasicsUnit,
} from './logic/argument-basics'
import {
  argumentBasicsExercisesB,
  argumentBasicsLessonsB,
} from './logic/argument-basics-b'
import {
  argumentAnalysisExercises,
  argumentAnalysisLessons,
  argumentAnalysisUnit,
} from './logic/argument-analysis'
import {
  argumentFormsExercises,
  argumentFormsLessons,
  argumentFormsUnit,
} from './logic/argument-forms'

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

export const subjects: Subject[] = [
  {
    id: 'logic',
    title: 'Logic & Argumentation',
    blurb:
      'How arguments are built, which forms preserve truth, and how reasoning goes wrong. ' +
      'Everything else in philosophy depends on this.',
    unitIds: [argumentBasicsUnit.id, argumentFormsUnit.id, argumentAnalysisUnit.id],
  },
]

export const units: Unit[] = [argumentBasicsUnit, argumentFormsUnit, argumentAnalysisUnit]
export const lessons: Lesson[] = [...argumentBasicsLessons, ...argumentBasicsLessonsB, ...argumentFormsLessons, ...argumentAnalysisLessons]
export const exercises: Exercise[] = [...argumentBasicsExercises, ...argumentBasicsExercisesB, ...argumentFormsExercises, ...argumentAnalysisExercises]

export { argumentCards, concepts }

const index = <T extends { id: string }>(items: T[]): Map<string, T> =>
  new Map(items.map((item) => [item.id, item]))

const subjectIndex = index(subjects)
const unitIndex = index(units)
const lessonIndex = index(lessons)
const exerciseIndex = index(exercises)
const conceptIndex = index(concepts)
const argumentIndex = index(argumentCards)

export const getSubject = (id: SubjectIdLike): Subject | undefined => subjectIndex.get(id)
export const getUnit = (id: UnitId): Unit | undefined => unitIndex.get(id)
export const getLesson = (id: LessonId): Lesson | undefined => lessonIndex.get(id)
export const getExercise = (id: ExerciseId): Exercise | undefined => exerciseIndex.get(id)
export const getConcept = (id: ConceptId): Concept | undefined => conceptIndex.get(id)
export const getArgument = (id: ArgumentId): Argument | undefined => argumentIndex.get(id)

type SubjectIdLike = string

/** Lessons of a unit, in curriculum order, skipping any unresolved id. */
export function lessonsOfUnit(unitId: UnitId): Lesson[] {
  const unit = unitIndex.get(unitId)
  if (!unit) return []
  return unit.lessonIds.map((id) => lessonIndex.get(id)).filter((l): l is Lesson => Boolean(l))
}

export function unitsOfSubject(subjectId: string): Unit[] {
  const subject = subjectIndex.get(subjectId)
  if (!subject) return []
  return subject.unitIds.map((id) => unitIndex.get(id)).filter((u): u is Unit => Boolean(u))
}

export function exercisesOfLesson(lessonId: LessonId): Exercise[] {
  const lesson = lessonIndex.get(lessonId)
  if (!lesson) return []
  return lesson.exerciseIds
    .map((id) => exerciseIndex.get(id))
    .filter((e): e is Exercise => Boolean(e))
}

/** Every lesson across every subject, in curriculum order. */
export function orderedLessons(): Lesson[] {
  return subjects.flatMap((subject) =>
    unitsOfSubject(subject.id).flatMap((unit) => lessonsOfUnit(unit.id)),
  )
}

export function orderedLessonIds(): LessonId[] {
  return orderedLessons().map((lesson) => lesson.id)
}

/** Concept ids appearing anywhere in the curriculum. */
export function allConceptIds(): ConceptId[] {
  return concepts.map((concept) => concept.id)
}

/** Exercise pool shaped for the review scheduler. */
export function reviewPool(): Array<{ exerciseId: ExerciseId; conceptIds: ConceptId[] }> {
  return exercises.map((exercise) => ({
    exerciseId: exercise.id,
    conceptIds: exercise.conceptIds,
  }))
}

/* -------------------------------------------------------------------------- */
/* Integrity check                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Mastery, review and the library all key off ids that are only ever written by
 * hand. A mistyped `conceptId` produces no error anywhere — the concept simply
 * never enters the review rotation, silently. This check turns that class of
 * bug into a loud failure at startup.
 */
export function checkContentIntegrity(): string[] {
  const problems: string[] = []

  for (const subject of subjects) {
    for (const unitId of subject.unitIds) {
      if (!unitIndex.has(unitId)) {
        problems.push(`Subject "${subject.id}" lists unknown unit "${unitId}".`)
      }
    }
  }

  for (const unit of units) {
    if (!subjectIndex.has(unit.subjectId)) {
      problems.push(`Unit "${unit.id}" belongs to unknown subject "${unit.subjectId}".`)
    }
    for (const lessonId of unit.lessonIds) {
      if (!lessonIndex.has(lessonId)) {
        problems.push(`Unit "${unit.id}" lists unknown lesson "${lessonId}".`)
      }
    }
  }

  for (const lesson of lessons) {
    if (!unitIndex.has(lesson.unitId)) {
      problems.push(`Lesson "${lesson.id}" belongs to unknown unit "${lesson.unitId}".`)
    }

    for (const conceptId of lesson.conceptIds) {
      if (!conceptIndex.has(conceptId)) {
        problems.push(`Lesson "${lesson.id}" trains unknown concept "${conceptId}".`)
      }
    }

    for (const exerciseId of lesson.exerciseIds) {
      if (!exerciseIndex.has(exerciseId)) {
        problems.push(`Lesson "${lesson.id}" lists unknown exercise "${exerciseId}".`)
      }
    }

    if (lesson.exerciseIds.length === 0) {
      problems.push(`Lesson "${lesson.id}" has no exercises.`)
    }

    for (const section of lesson.sections) {
      if (section.kind === 'argument' && !argumentIndex.has(section.ref)) {
        problems.push(`Lesson "${lesson.id}" references unknown argument "${section.ref}".`)
      }
    }
  }

  for (const exercise of exercises) {
    if (exercise.conceptIds.length === 0) {
      problems.push(`Exercise "${exercise.id}" trains no concepts, so it can never be reviewed.`)
    }

    for (const conceptId of exercise.conceptIds) {
      if (!conceptIndex.has(conceptId)) {
        problems.push(`Exercise "${exercise.id}" trains unknown concept "${conceptId}".`)
      }
    }

    if (exercise.type === 'choice') {
      if (exercise.options.length < 2) {
        problems.push(`Exercise "${exercise.id}" needs at least two options.`)
      }
      if (!exercise.options.some((option) => option.id === exercise.correctId)) {
        problems.push(`Exercise "${exercise.id}" has no option matching its correct id.`)
      }
      const ids = new Set(exercise.options.map((option) => option.id))
      if (ids.size !== exercise.options.length) {
        problems.push(`Exercise "${exercise.id}" has duplicate option ids.`)
      }
      for (const option of exercise.options) {
        if (option.explanation.trim().length === 0) {
          problems.push(
            `Exercise "${exercise.id}" option "${option.id}" has no explanation. ` +
              'Every wrong answer must teach.',
          )
        }
      }
    }

    if (exercise.type === 'sort') {
      if (!exercise.statements.some((s) => s.role === 'conclusion')) {
        problems.push(`Exercise "${exercise.id}" has no conclusion to find.`)
      }
      if (!exercise.statements.some((s) => s.role === 'premise')) {
        problems.push(`Exercise "${exercise.id}" has no premises.`)
      }
    }
  }

  for (const concept of concepts) {
    for (const related of concept.relatedConceptIds) {
      if (!conceptIndex.has(related)) {
        problems.push(`Concept "${concept.id}" links to unknown concept "${related}".`)
      }
    }
    for (const argumentId of concept.relatedArgumentIds) {
      if (!argumentIndex.has(argumentId)) {
        problems.push(`Concept "${concept.id}" links to unknown argument "${argumentId}".`)
      }
    }
    for (const lessonId of concept.lessonIds) {
      if (!lessonIndex.has(lessonId)) {
        problems.push(`Concept "${concept.id}" links to unknown lesson "${lessonId}".`)
      }
    }
  }

  return problems
}

if (import.meta.env?.DEV) {
  const problems = checkContentIntegrity()
  if (problems.length > 0) {
    console.error(`Agora content integrity: ${problems.length} problem(s)\n` + problems.join('\n'))
  }
}
