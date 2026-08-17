# Agora — Project Specification (V1)

## 1. What this is

A local-first web app that teaches philosophy through argument structure. V1 ships one
course: **Logic & Argumentation**. No accounts, no backend, no LLM, no paid services.
Progress lives in the browser and can be exported to a file.

The thesis: philosophy is learned by reconstructing arguments, finding hidden premises,
and locating exactly where an objection bites — not by memorising which -ism says what.

Every piece of content must pass one test: **can it be turned into an exercise with a
determinate answer?** "Is compatibilism true?" fails. "Which premise does this objection
attack?" passes. Argument structure is testable; doctrine is not.

## 2. Non-goals

Not in V1, and not to be added speculatively: authentication, any server, social features,
leaderboards, chat, LLM or AI features of any kind, subscriptions, cloud sync, admin tools,
native apps. Also deferred: Epistemology, Metaphysics, Philosophy of Mind, Philosophy of
Religion. These are roadmap, not scope.

## 3. Curriculum (V1)

**Logic & Argumentation** — 15 lessons in 3 units.

**Unit 1 — Argument Basics**
1. What is an argument?
2. Premises and conclusions
3. Deductive vs inductive
4. Validity
5. Soundness
6. Necessary vs sufficient conditions

**Unit 2 — Argument Forms**
7. Modus ponens
8. Modus tollens
9. Affirming the consequent
10. Denying the antecedent
11. Reductio ad absurdum

**Unit 3 — Argument Analysis**
12. Counterexamples
13. Hidden premises
14. Charity and burden of proof
15. Fallacies — straw man, ad hominem, equivocation, circular reasoning, false dilemma,
    composition/division. One lesson, six worked cases.

Targets: 4–5 exercises per lesson (~65 total), 10 argument cards, 12 library concepts.

Lessons unlock in order within a unit. A unit unlocks when the previous unit is complete.

### Roadmap (not V1)

Epistemology → Metaphysics → Philosophy of Religion, in that order. Metaphysics carries
modality, identity, causation, free will, infinite regress and the Principle of Sufficient
Reason; Religion then reuses that machinery rather than reteaching it. Philosophy of Mind
is a leaf — nothing depends on it — so it returns whenever convenient. All of this is
additive: new content files, no engine changes.

## 4. Content model

Content is data. **No philosophical prose may appear in `/components` or `/pages`.** If you
are typing a sentence about arguments into a `.tsx` file, it belongs in `/content`.

```ts
type SubjectId = string
type UnitId    = string
type LessonId  = string
type ConceptId = string
type ArgumentId = string

interface Subject {
  id: SubjectId
  title: string          // "Logic & Argumentation"
  blurb: string
  units: UnitId[]
}

interface Unit {
  id: UnitId
  subjectId: SubjectId
  title: string
  blurb: string
  lessons: LessonId[]
}

interface Lesson {
  id: LessonId
  unitId: UnitId
  title: string
  summary: string           // one line, shown on cards
  difficulty: 1 | 2 | 3
  estimatedMinutes: number
  xpReward: number
  conceptIds: ConceptId[]   // what this lesson trains
  sections: Section[]
  exerciseIds: ExerciseId[]
}

type Section =
  | { kind: 'explanation';   body: string }
  | { kind: 'example';       body: string; caption?: string }
  | { kind: 'argument';      ref: ArgumentId; note?: string }
  | { kind: 'definition';    term: string; body: string }
  | { kind: 'misconception'; claim: string; correction: string }
```

Explanation bodies stay under ~120 words. A lesson needing more is two lessons.

### Arguments

```ts
interface Argument {
  id: ArgumentId
  title: string
  form?: string                 // "Modus ponens"
  tags: string[]                // 'deductive' | 'valid' | 'fallacy' | ...
  premises: Premise[]
  conclusion: string
  verdict?: 'valid' | 'invalid' | 'sound' | 'unsound' | 'contested'
}

interface Premise {
  label: string                 // "P1"
  text: string
  support?: string
  objections?: Objection[]
}

interface Objection {
  text: string
  responses?: string[]
}
```

The nesting here (premise → objection → response) is what the UI renders as the argument
map. There is no separate graph view.

### Exercises

Two renderers. Every question type in the original brief is `choice` with different data.

```ts
interface ChoiceExercise {
  id: ExerciseId
  type: 'choice'
  conceptIds: ConceptId[]
  prompt: string
  stimulus?: string             // the argument or passage being examined
  options: { id: string; text: string; explanation: string }[]
  correctId: string
}

interface SortExercise {
  id: ExerciseId
  type: 'sort'
  conceptIds: ConceptId[]
  prompt: string
  statements: { id: string; text: string; role: 'premise' | 'conclusion' | 'irrelevant' }[]
}
```

`sort` is argument reconstruction in its cheap form: label shuffled statements as premise,
conclusion, or neither. Two or three of these total, all in Unit 1.

**Every option carries its own explanation.** Wrong answers must teach. "Incorrect" alone
is a failure of the product.

### Concepts

```ts
interface Concept {
  id: ConceptId
  term: string
  short: string                 // one-sentence gloss, used in tooltips
  body: string
  relatedConceptIds: ConceptId[]
  relatedArgumentIds: ArgumentId[]
  lessonIds: LessonId[]
}
```

Concepts are the unit of mastery. Written last, largely lifted from lesson sections.

## 5. Engine

Pure functions in `/engine`. No React, no storage, no clock access except through an
injected `now()`. This is the only part with real test coverage.

**XP** — 15 per lesson completed, 2 per correct practice answer, 10 daily-goal bonus.
Nothing for navigation. Repeating a completed lesson awards no XP but still updates mastery.

**Levels** — cumulative thresholds `0, 100, 250, 500, 850, 1300, 1900, 2600, 3400, 4300`,
titled: Curious Mind, Student, Reader, Reasoner, Analyst, Dialectician, Philosopher.

**Streak** — increments on the first completed lesson or practice set of a day. Dates stored
as local `YYYY-MM-DD` strings, never timestamps. A gap of one full day resets to 1.

**Mastery** — per concept, `next = 0.7 × prev + 0.3 × latest`, where `latest` is 100 for a
correct answer and 0 for incorrect. Unseen concepts have no score (not zero). Buckets:
0–19 New, 20–39 Learning, 40–59 Developing, 60–79 Proficient, 80–100 Mastered. Subject
mastery is the mean over concepts touched.

**Review** — `priority = daysSinceReview × (1 − mastery / 100)`. Concepts seen but never
reviewed get `daysSinceReview` from first exposure. Concepts from completed lessons that
have never been practised get a floor priority so they surface. Practice serves the top 10.

**Daily goal** — Light 10 XP, Regular 25, Serious 50. Default Regular.

**Achievements** — three: First Argument (finish lesson 1), Perfect Lesson (all exercises
right first try), Seven-Day Streak.

## 6. Persistence

Single JSON blob in `localStorage` behind a repository interface:

```ts
interface ProgressRepository {
  load(): Promise<UserProgress>
  save(p: UserProgress): Promise<void>
  clear(): Promise<void>
}
```

Nothing outside `/store` touches `localStorage` directly. Swapping in IndexedDB or a real
backend later is one file.

```ts
interface UserProgress {
  version: number
  createdAt: string
  xp: number
  dailyGoal: 10 | 25 | 50
  streak: { current: number; longest: number; lastActiveDay: string | null }
  lessons: Record<LessonId, { completedAt: string; bestScore: number; attempts: number }>
  mastery: Record<ConceptId, { score: number; lastReviewed: string; seenAt: string }>
  answers: { exerciseId: string; correct: boolean; at: string }[]   // capped, most recent 500
  achievements: Record<string, string>   // id -> earnedAt
  settings: { theme: 'light' | 'dark' | 'system'; reducedMotion: boolean }
}
```

`version` exists for migrations. Export downloads this blob as `agora-progress.json`;
import validates shape and version, then replaces. No personal data is ever stored.

## 7. Design direction

The trap for this brief is parchment: cream background, high-contrast serif, terracotta
accent, a Greek column somewhere. That is the default answer for "philosophy app" and it
reads as costume. Agora is not about Ancient Greece. It is about **the shape of an
argument**, so the visual language comes from proof notation — the vernacular of the
subject itself.

### Signature: the proof column

Natural deduction marks assumptions with a vertical rule down the left and draws a
horizontal inference line above a conclusion. Agora uses this as its layout grammar, not
as decoration:

```
  │ P1  Everything that begins to exist has a cause.
  │ P2  The universe began to exist.
  ├───────────────────────────────────────────────
  │ ∴   The universe has a cause.
  │
  │   │ Objection — P2 assumes a first moment.
  │   │   │ Response — Finitism is defended on
  │   │   │            independent grounds.
```

Expanding a premise indents one level and grows its own vertical rule. Objections nest
deeper, responses deeper still. **The indentation is the argument map** — this is why no
separate graph view is needed. Lesson progress renders as a proof column in the left
margin rather than a horizontal bar: each completed section is a discharged line.

Spend the boldness here. Everything else stays quiet.

### Colour

Cool paper, ink, and oxidised bronze — classical by material rather than by iconography.
No parchment, no gradients, no terracotta.

| Token | Light | Dark | Use |
|---|---|---|---|
| `paper` | `#F6F7F5` | `#12151A` | page background |
| `surface` | `#FFFFFF` | `#191D24` | cards, raised areas |
| `ink` | `#161A20` | `#E8EAE6` | primary text |
| `ink-muted` | `#5A626D` | `#98A0AC` | secondary text, labels |
| `rule` | `#D6DAD5` | `#2A303A` | inference lines, borders, proof bars |
| `verdigris` | `#1F6F6B` | `#4FA69F` | primary accent, links, active nav |
| `holds` | `#2C6E52` | `#5FA982` | valid / correct |
| `breaks` | `#A6383A` | `#D2706F` | invalid / fallacious / incorrect |
| `ochre` | `#9A6B1E` | `#C99B49` | misconception callouts, streak |

Verdigris carries the accent load: oxidised bronze, the colour of instruments and old
statuary, subtly classical without costume. `holds` and `breaks` are semantic only —
they mean valid/invalid, never decoration.

### Type

Three faces, three jobs.

- **Newsreader** — lesson prose and headings. Editorial serif with real character and
  optical sizing; not the Playfair/Cormorant high-contrast default.
- **IBM Plex Sans** — all UI chrome, buttons, navigation, labels. Neutral, engineered.
- **IBM Plex Mono** — proof notation. Premise labels, `∴`, operators, XP figures, dates.
  Argument lines must be monospaced so they align like real notation. This is load-bearing.

Scale: `12 / 14 / 16 / 18 / 21 / 28 / 38`. Lesson measure caps at 62ch. Premise labels are
mono, uppercase, `ink-muted`, tabular figures.

### Motion

Restrained and orchestrated in one place: on lesson completion, the proof column in the
margin draws its inference line and the conclusion resolves. Elsewhere, 120–160ms opacity
and 2px translate on state change, nothing more. All motion behind
`prefers-reduced-motion`, which must be honoured properly rather than merely declared.

### Copy

Plain, active, sentence case. The button says what happens: **Check**, then **Next**.
Never "Submit". Never exclamation marks, never emoji, never "Great job!".

A wrong answer names the error rather than the verdict: *"This is the antecedent, not the
conclusion — it's the condition being assumed, not what follows from it."*

Empty practice: *"Nothing to review yet. Finish a lesson and questions will start
appearing here."*

Empty progress: *"No activity yet. Your mastery will build as you work through lessons."*

### Quality floor

Responsive to 360px. Visible keyboard focus on every interactive element (2px verdigris
outline, 2px offset). Semantic HTML — exercise options are real radio inputs in a
fieldset, not divs. Answer feedback announced via `aria-live`. Contrast ≥ 4.5:1 for text.
Never signal correctness by colour alone: correct and incorrect carry an icon and a label.

## 8. Stack

Vite + React 18 + TypeScript (strict), Tailwind, React Router, Zustand, Vitest.

Deliberately not used: Next.js (nothing needs SSR or server routes, and static output ships
free anywhere), Dexie/IndexedDB (the blob is a few KB; the repository interface provides the
future-proofing, not the storage engine), Framer Motion, Recharts, shadcn/ui.

## 9. Directory structure

```
/src
  /content
    /logic
      argument-basics.ts        # Unit 1: lessons + exercises
      argument-forms.ts         # Unit 2
      argument-analysis.ts      # Unit 3
    arguments.ts
    concepts.ts
    index.ts                    # registry, id resolution, dev-time integrity check
  /engine                       # pure, tested, no React
    xp.ts  levels.ts  mastery.ts  streak.ts  review.ts  achievements.ts
    index.ts
  /store
    progress-repository.ts      # interface + localStorage implementation
    use-progress.ts             # zustand store
    transfer.ts                 # export / import
  /components
    /layout                     # Sidebar, MobileNav, Shell
    /lesson                     # SectionRenderer, ProofColumn, CompletionScreen
    /exercise                   # ChoiceExercise, SortExercise, Feedback
    /argument                   # ArgumentCard, PremiseLine, ObjectionTree
    /ui                         # Button, Card, Badge, MasteryBar, SearchInput
  /pages
    Home.tsx  Learn.tsx  Unit.tsx  LessonPage.tsx
    Practice.tsx  Library.tsx  ConceptPage.tsx  ArgumentPage.tsx  Settings.tsx
  /types
    content.ts  progress.ts
  /lib
    search.ts  date.ts  cn.ts
```

## 10. Testing

Real coverage on `/engine` only:

- XP awards and level thresholds, including boundary values
- Mastery decay: repeated correct approaches but never exceeds 100 from below; a wrong
  answer after a streak of right ones drops the score by the expected amount
- Streak: same-day repeat does not increment; consecutive days increment; a one-day gap
  resets; month and year boundaries; DST days
- Review ordering: never-practised concepts surface; high mastery sinks; ties are stable

Plus: one smoke test that a lesson renders its sections, and one that
`import(export(state))` round-trips to an identical blob. No e2e.

## 11. Definition of done

A user can open the app with no account, start Logic & Argumentation, work through a
lesson, answer both exercise types with per-option feedback, earn XP, level up, set and
hit a daily goal, build a streak, see mastery move per concept, get a practice set drawn
from their weak concepts, browse argument cards with nested objections, search the
library, refresh the browser and lose nothing, and export and reimport their progress.

## 12. Deployment

Static build, zero running cost. `npm run build` emits `/dist`; host on Cloudflare Pages,
GitHub Pages, or Netlify. No server, no database, no card on file, nothing to scale.
