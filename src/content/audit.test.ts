import { describe, expect, it } from 'vitest'
import { argumentCards, concepts, exercises, lessons } from '@/content'

/**
 * Content quality floor. These thresholds were derived from a one-off audit and
 * are now enforced permanently, because thin content is the failure mode that
 * makes a learning app feel cheap and no compiler can detect it.
 *
 * Failures report the offending id so they are actionable rather than merely
 * discouraging.
 */

/** Argument cards that are deliberately clean illustrations of a form. */
const ILLUSTRATIVE_ARGUMENTS = new Set([
  'socrates-mortal',
  'library-closed',
  'cats-mammals',
  'passport-travel',
  'medicine-ponens',
  'swans-white',
])

function collect<T>(items: T[], test: (item: T) => string | null): string[] {
  return items.map(test).filter((row): row is string => row !== null)
}

describe('content quality floor', () => {
  it('gives every choice option an explanation that teaches', () => {
    const thin = exercises.flatMap((exercise) =>
      exercise.type !== 'choice'
        ? []
        : exercise.options
            .filter((option) => option.explanation.length < 60)
            .map((option) => `${exercise.id}/${option.id} (${option.explanation.length} chars)`),
    )
    expect(thin).toEqual([])
  })

  it('gives every choice exercise four options', () => {
    const few = collect(exercises, (exercise) =>
      exercise.type === 'choice' && exercise.options.length < 4
        ? `${exercise.id} has ${exercise.options.length}`
        : null,
    )
    expect(few).toEqual([])
  })

  it('explains every sort exercise properly', () => {
    const thin = collect(exercises, (exercise) =>
      exercise.type === 'sort' && exercise.explanation.length < 80
        ? `${exercise.id} (${exercise.explanation.length} chars)`
        : null,
    )
    expect(thin).toEqual([])
  })

  it('gives every concept a substantive body and a real gloss', () => {
    const thin = collect(concepts, (concept) =>
      concept.body.length < 150 || concept.short.length < 25 ? concept.id : null,
    )
    expect(thin).toEqual([])
  })

  it('gives every lesson at least four sections and a misconception', () => {
    const problems = lessons.flatMap((lesson) => {
      const rows: string[] = []
      if (lesson.sections.length < 4) rows.push(`${lesson.id}: ${lesson.sections.length} sections`)
      if (lesson.summary.length < 25) rows.push(`${lesson.id}: summary too short`)
      if (!lesson.sections.some((s) => s.kind === 'misconception')) {
        rows.push(`${lesson.id}: no misconception section`)
      }
      return rows
    })
    expect(problems).toEqual([])
  })

  it('gives every substantive argument card an objection tree', () => {
    const bare = collect(argumentCards, (argument) => {
      if (ILLUSTRATIVE_ARGUMENTS.has(argument.id)) return null
      const objections = argument.premises.reduce(
        (total, premise) => total + (premise.objections?.length ?? 0),
        0,
      )
      return objections === 0 ? argument.id : null
    })
    // Presenting objections and responses is the whole point of the format.
    expect(bare).toEqual([])
  })

  it('gives every objection at least one response', () => {
    const unanswered = argumentCards.flatMap((argument) =>
      argument.premises.flatMap((premise) =>
        (premise.objections ?? [])
          .filter((objection) => (objection.responses?.length ?? 0) === 0)
          .map(() => `${argument.id}/${premise.label}`),
      ),
    )
    expect(unanswered).toEqual([])
  })
})
