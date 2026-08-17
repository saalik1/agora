/**
 * Content types. Every piece of philosophical prose in Agora is data shaped by
 * these interfaces and lives under `src/content` — never inside a component.
 */

export type SubjectId = string
export type UnitId = string
export type LessonId = string
export type ConceptId = string
export type ArgumentId = string
export type ExerciseId = string

export type Difficulty = 1 | 2 | 3

export interface Subject {
  id: SubjectId
  title: string
  blurb: string
  unitIds: UnitId[]
}

export interface Unit {
  id: UnitId
  subjectId: SubjectId
  title: string
  blurb: string
  lessonIds: LessonId[]
}

/* -------------------------------------------------------------------------- */
/* Lesson sections                                                            */
/* -------------------------------------------------------------------------- */

export interface ExplanationSection {
  kind: 'explanation'
  heading?: string
  body: string
}

export interface ExampleSection {
  kind: 'example'
  body: string
  caption?: string
}

export interface ArgumentSection {
  kind: 'argument'
  ref: ArgumentId
  note?: string
}

export interface DefinitionSection {
  kind: 'definition'
  term: string
  body: string
}

export interface MisconceptionSection {
  kind: 'misconception'
  claim: string
  correction: string
}

export type Section =
  | ExplanationSection
  | ExampleSection
  | ArgumentSection
  | DefinitionSection
  | MisconceptionSection

export type SectionKind = Section['kind']

/* -------------------------------------------------------------------------- */
/* Lessons                                                                    */
/* -------------------------------------------------------------------------- */

export interface Lesson {
  id: LessonId
  unitId: UnitId
  title: string
  summary: string
  difficulty: Difficulty
  estimatedMinutes: number
  xpReward: number
  /** Concepts this lesson trains. Mastery and spaced review key off these. */
  conceptIds: ConceptId[]
  sections: Section[]
  exerciseIds: ExerciseId[]
}

/* -------------------------------------------------------------------------- */
/* Arguments                                                                  */
/* -------------------------------------------------------------------------- */

export type Verdict = 'valid' | 'invalid' | 'sound' | 'unsound' | 'contested'

export interface Objection {
  text: string
  responses?: string[]
}

export interface Premise {
  /** Display label used in the proof column, e.g. "P1". */
  label: string
  text: string
  support?: string
  objections?: Objection[]
}

export interface Argument {
  id: ArgumentId
  title: string
  /** Named form, e.g. "Modus ponens". Absent for informal arguments. */
  form?: string
  tags: string[]
  premises: Premise[]
  conclusion: string
  verdict?: Verdict
}

/* -------------------------------------------------------------------------- */
/* Exercises                                                                  */
/* -------------------------------------------------------------------------- */

export interface ChoiceOption {
  id: string
  text: string
  /** Shown after answering. Must name the specific confusion, not just "wrong". */
  explanation: string
}

export interface ChoiceExercise {
  id: ExerciseId
  type: 'choice'
  conceptIds: ConceptId[]
  prompt: string
  /** The argument or passage under examination. */
  stimulus?: string
  options: ChoiceOption[]
  correctId: string
}

export type StatementRole = 'premise' | 'conclusion' | 'irrelevant'

export interface SortStatement {
  id: string
  text: string
  role: StatementRole
}

/** Argument reconstruction: label shuffled statements by the role they play. */
export interface SortExercise {
  id: ExerciseId
  type: 'sort'
  conceptIds: ConceptId[]
  prompt: string
  statements: SortStatement[]
  explanation: string
}

export type Exercise = ChoiceExercise | SortExercise
export type ExerciseType = Exercise['type']

/* -------------------------------------------------------------------------- */
/* Concepts                                                                   */
/* -------------------------------------------------------------------------- */

export interface Concept {
  id: ConceptId
  term: string
  /** One-sentence gloss, used in tooltips and search results. */
  short: string
  body: string
  relatedConceptIds: ConceptId[]
  relatedArgumentIds: ArgumentId[]
  lessonIds: LessonId[]
}
