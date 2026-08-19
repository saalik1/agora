import { render, screen, waitFor } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { App } from '@/App'
import {
  argumentCards,
  checkContentIntegrity,
  concepts,
  exercises,
  getLesson,
  lessons,
  lessonsOfUnit,
  subjects,
  units,
  unitsOfSubject,
} from '@/content'
import { isLessonUnlocked } from '@/engine/mastery'
import { lessonIdsOfSubject, unitProgress, unlockOrderFor } from '@/lib/curriculum'
import { createEmptyProgress, MemoryProgressRepository } from '@/store/progress-repository'
import { setProgressRepository, useProgress } from '@/store/use-progress'

describe('curriculum structure', () => {
  it('passes the integrity check across every subject', () => {
    expect(checkContentIntegrity()).toEqual([])
  })

  it('carries every subject in dependency order', () => {
    // Logic feeds everything; Metaphysics supplies the machinery Religion needs.
    expect(subjects.map((s) => s.id)).toEqual([
      'logic',
      'epistemology',
      'metaphysics',
      'religion',
    ])
  })

  it('gives every unit a subject that exists', () => {
    const ids = new Set(subjects.map((s) => s.id))
    for (const unit of units) {
      expect(ids.has(unit.subjectId)).toBe(true)
    }
  })

  it('leaves no lesson orphaned from its subject', () => {
    const reachable = new Set(
      subjects.flatMap((subject) => lessonIdsOfSubject(subject.id)),
    )
    for (const lesson of lessons) {
      expect(reachable.has(lesson.id)).toBe(true)
    }
  })

  it('has no duplicate ids anywhere', () => {
    const check = (label: string, ids: string[]) => {
      const seen = new Set<string>()
      const dupes = ids.filter((id) => (seen.has(id) ? true : (seen.add(id), false)))
      expect({ label, dupes }).toEqual({ label, dupes: [] })
    }
    check('lessons', lessons.map((l) => l.id))
    check('exercises', exercises.map((e) => e.id))
    check('concepts', concepts.map((c) => c.id))
    check('arguments', argumentCards.map((a) => a.id))
    check('units', units.map((u) => u.id))
  })

  it('trains every concept in at least one exercise', () => {
    const trained = new Set(exercises.flatMap((exercise) => exercise.conceptIds))
    const untrained = concepts.filter((concept) => !trained.has(concept.id)).map((c) => c.id)
    // An untrained concept can never enter the review rotation.
    expect(untrained).toEqual([])
  })

  it('reaches every argument card from a lesson or a concept', () => {
    const referenced = new Set([
      ...lessons.flatMap((lesson) =>
        lesson.sections.flatMap((section) => (section.kind === 'argument' ? [section.ref] : [])),
      ),
      ...concepts.flatMap((concept) => concept.relatedArgumentIds),
    ])
    const orphans = argumentCards.filter((a) => !referenced.has(a.id)).map((a) => a.id)
    expect(orphans).toEqual([])
  })

  it('keeps every explanation section short enough to read', () => {
    for (const lesson of lessons) {
      for (const section of lesson.sections) {
        if (section.kind !== 'explanation') continue
        const words = section.body.split(/\s+/).length
        expect({ lesson: lesson.id, words }).toEqual({
          lesson: lesson.id,
          words: Math.min(words, 130),
        })
      }
    }
  })

  it('gives every choice option a substantive explanation', () => {
    for (const exercise of exercises) {
      if (exercise.type !== 'choice') continue
      for (const option of exercise.options) {
        expect({ id: exercise.id, long: option.explanation.length > 30 }).toEqual({
          id: exercise.id,
          long: true,
        })
      }
    }
  })
})

describe('subject-scoped gating', () => {
  it('does not lock a new subject behind the previous one', () => {
    const firstEpistemology = lessonIdsOfSubject('epistemology')[0]!
    // Nothing completed at all — the first lesson of each subject must open.
    expect(isLessonUnlocked(firstEpistemology, unlockOrderFor(firstEpistemology), {})).toBe(true)
    expect(isLessonUnlocked('logic-1', unlockOrderFor('logic-1'), {})).toBe(true)
  })

  it('still enforces order within a subject', () => {
    const order = lessonIdsOfSubject('epistemology')
    const second = order[1]!
    expect(isLessonUnlocked(second, order, {})).toBe(false)
    expect(isLessonUnlocked(second, order, { [order[0]!]: true })).toBe(true)
  })

  it('scopes the unlock order to the lesson\u2019s own subject', () => {
    expect(unlockOrderFor('logic-1')).toEqual(lessonIdsOfSubject('logic'))
    expect(unlockOrderFor('epis-1')).toEqual(lessonIdsOfSubject('epistemology'))
  })

  it('does not spill from the last lesson of one subject into the next', () => {
    const logicOrder = lessonIdsOfSubject('logic')
    const lastLogic = logicOrder[logicOrder.length - 1]!
    const order = unlockOrderFor(lastLogic)
    expect(order[order.length - 1]).toBe(lastLogic)
  })
})

describe('per-subject progress', () => {
  it('reports units for whichever subject is asked for', () => {
    const logic = unitProgress({}, 'logic')
    const epistemology = unitProgress({}, 'epistemology')
    expect(logic).toHaveLength(3)
    expect(epistemology).toHaveLength(3)
    expect(logic[0]?.unit.title).toBe('Argument Basics')
    expect(epistemology[0]?.unit.title).toBe('What Knowledge Is')
  })

  it('counts completed lessons per unit', () => {
    const firstUnit = unitsOfSubject('epistemology')[0]!
    const firstLesson = lessonsOfUnit(firstUnit.id)[0]!
    const progress = unitProgress({ [firstLesson.id]: true }, 'epistemology')
    expect(progress[0]?.completedCount).toBe(1)
  })
})

describe('Learn page with two subjects', () => {
  it('renders both subjects and their units', async () => {
    window.location.hash = '#/learn'
    useProgress.setState({
      progress: createEmptyProgress(),
      hydrated: false,
      pendingAchievements: [],
    })
    setProgressRepository(new MemoryProgressRepository())

    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Learn'))

    expect(screen.getByRole('heading', { name: 'Logic & Argumentation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Epistemology' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Knowledge Is' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Scepticism' })).toBeInTheDocument()

    // Both subjects open at their first lesson.
    expect(screen.getByRole('link', { name: /What is an argument\?/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Knowing and merely being right/ })).toBeInTheDocument()
  })
})

describe('epistemology content', () => {
  it('builds on logic concepts rather than restating them', () => {
    // Gettier is taught as a counterexample, the tool from Logic lesson 12.
    const gettier = getLesson('epis-3')!
    expect(gettier.conceptIds).toContain('counterexample')

    // The brain-in-a-vat argument is modus tollens from Logic lesson 8.
    const biv = getLesson('epis-13')!
    expect(biv.conceptIds).toContain('closure-principle')
  })

  it('gives every epistemology lesson at least four exercises', () => {
    const epistemologyLessons = lessonIdsOfSubject('epistemology').map((id) => getLesson(id)!)
    expect(epistemologyLessons).toHaveLength(14)
    for (const lesson of epistemologyLessons) {
      expect({ id: lesson.id, count: lesson.exerciseIds.length }).toEqual({
        id: lesson.id,
        count: Math.max(4, lesson.exerciseIds.length),
      })
    }
  })
})

describe('metaphysics content', () => {
  it('covers all five units', () => {
    const units = unitsOfSubject('metaphysics')
    expect(units.map((u) => u.title)).toEqual([
      'Modality',
      'Existence and Universals',
      'Identity and Persistence',
      'Causation, Time and Infinity',
      'Free Will',
    ])
  })

  it('keeps universals and particulars, which were nearly cut', () => {
    const ids = lessonIdsOfSubject('metaphysics')
    const concepts = ids.flatMap((id) => getLesson(id)!.conceptIds)
    expect(concepts).toContain('universals')
    expect(concepts).toContain('realism-universals')
    expect(concepts).toContain('nominalism')
  })

  it('supplies the machinery the Kalam argument depends on', () => {
    const concepts = lessonIdsOfSubject('metaphysics').flatMap(
      (id) => getLesson(id)!.conceptIds,
    )
    // Each of these is load-bearing for a premise of the cosmological arguments.
    for (const required of ['actual-infinity', 'a-theory', 'b-theory', 'psr', 'contingency']) {
      expect({ required, present: concepts.includes(required) }).toEqual({
        required,
        present: true,
      })
    }
  })

  it('gives every metaphysics lesson at least four exercises', () => {
    const metaLessons = lessonIdsOfSubject('metaphysics').map((id) => getLesson(id)!)
    expect(metaLessons).toHaveLength(14)
    for (const lesson of metaLessons) {
      expect({ id: lesson.id, count: lesson.exerciseIds.length }).toEqual({
        id: lesson.id,
        count: Math.max(4, lesson.exerciseIds.length),
      })
    }
  })

  it('builds on logic rather than restating it', () => {
    // The composition objection to the contingency argument is Logic lesson 17.
    expect(getLesson('meta-3')!.conceptIds).toContain('psr')
    const exercise = exercises.find((e) => e.id === 'meta-3-e2')!
    expect(exercise.conceptIds).toContain('composition-division')
  })
})


describe('philosophy of religion', () => {
  it('covers both units', () => {
    expect(unitsOfSubject('religion').map((u) => u.title)).toEqual([
      'Arguments for God',
      'Attributes and Problems',
    ])
  })

  it('reuses machinery from earlier subjects rather than rebuilding it', () => {
    // The Kalam lesson draws on Metaphysics for infinity, time and causation.
    expect(getLesson('rel-2')!.conceptIds).toEqual(
      expect.arrayContaining(['actual-infinity', 'a-theory', 'causation']),
    )
    // The ontological lesson draws on the existence-as-predicate material.
    expect(getLesson('rel-4')!.conceptIds).toContain('existence-property')
  })

  it('presents every argument as contested rather than settled', () => {
    const religionCards = argumentCards.filter((a) => a.tags.includes('religion'))
    expect(religionCards.length).toBeGreaterThanOrEqual(8)
    for (const card of religionCards) {
      // No card may declare a winner in either direction.
      expect({ id: card.id, verdict: card.verdict }).toEqual({
        id: card.id,
        verdict: 'contested',
      })
    }
  })

  it('gives arguments both for and against theism', () => {
    const ids = argumentCards.filter((a) => a.tags.includes('religion')).map((a) => a.id)
    for (const forTheism of ['kalam', 'fine-tuning-arg', 'ontological-arg']) {
      expect(ids).toContain(forTheism)
    }
    for (const against of ['logical-evil', 'evidential-evil', 'hiddenness-arg']) {
      expect(ids).toContain(against)
    }
  })

  it('gives every religion lesson at least four exercises', () => {
    const relLessons = lessonIdsOfSubject('religion').map((id) => getLesson(id)!)
    expect(relLessons).toHaveLength(8)
    for (const lesson of relLessons) {
      expect({ id: lesson.id, count: lesson.exerciseIds.length }).toEqual({
        id: lesson.id,
        count: Math.max(4, lesson.exerciseIds.length),
      })
    }
  })
})
