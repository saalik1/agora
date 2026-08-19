# Agora — Project Specification

Describes the application as built. For build history and what to do when extending it, see
`IMPLEMENTATION_PLAN.md`.

## 1. What this is

A local-first web app that teaches philosophy through argument structure. Four subjects,
53 lessons, no accounts, no backend, no LLM, no paid services. Progress lives in the
browser and can be exported to a file.

The thesis: philosophy is learned by reconstructing arguments, finding hidden premises, and
locating exactly where an objection bites — not by memorising which -ism says what.

Every piece of content passes one test: **can it be turned into an exercise with a
determinate answer?** "Is compatibilism true?" fails. "Which premise does this objection
attack?" passes. Argument structure is testable; doctrine is not. This is why Philosophy of
Religion works at all — every exercise there is structural, and no argument card declares a
winner.

## 2. Non-goals

Not built, and not to be added speculatively: authentication, any server, social features,
leaderboards, chat, LLM or AI features of any kind, subscriptions, cloud sync, admin tools,
native apps.

Deferred by choice: Philosophy of Mind. It is a leaf — nothing else depends on it — so it
can be added whenever without disturbing the dependency chain below.

## 3. Curriculum

Subjects are ordered by dependency. Logic supplies the tools; Epistemology and Metaphysics
supply the machinery; Philosophy of Religion applies both.

| Subject | Units | Lessons |
|---|---|---|
| Logic & Argumentation | 3 | 17 |
| Epistemology | 3 | 14 |
| Metaphysics | 5 | 14 |
| Philosophy of Religion | 2 | 8 |

**Logic** — Argument Basics (6), Argument Forms (5), Argument Analysis (6). The two invalid
conditional forms sit beside the valid ones they imitate, because that adjacency is what
makes the difference visible. Fallacies are grouped by *why* the reasoning fails, not
alphabetically.

**Epistemology** — What Knowledge Is (6), Sources of Knowledge (4), Scepticism (4). Unit 1
is a single argument: true belief is not enough → add justification → Gettier breaks it →
the regress shows justification was never secure → so choose.

**Metaphysics** — Modality (3), Existence and Universals (3), Identity and Persistence (3),
Causation Time and Infinity (3), Free Will (2). Unit 4 exists because actual infinity and
the A/B theory dispute are where the cosmological arguments are won or lost.

**Religion** — Arguments for God (4), Attributes and Problems (4). Deduplicated: PSR,
contingency, necessity, actual infinity and the theories of time all come from Metaphysics
rather than being retaught.

Content lives in `src/content/<subject>/`. Adding a subject means writing data files and
one entry in the registry.

## 4. Content model

**No philosophical prose may appear in `/components` or `/pages`.** If you are typing a
sentence about arguments into a `.tsx` file, it belongs in `/content`.

Types are defined in `src/types/content.ts`: `Subject`, `Unit`, `Lesson`, `Section`,
`Argument`, `Premise`, `Objection`, `Exercise`, `Concept`. The shapes there are
authoritative; this document does not duplicate them.

Two points that are not obvious from the types:

**Sections** are a discriminated union on `kind` — explanation, example, argument,
definition, misconception. `SectionRenderer` dispatches on it. Adding a kind means adding a
case, not touching any lesson.

**Exercises** have two renderers, not nine. Every question type is `choice` with different
data: identify the conclusion, valid/invalid, spot the fallacy, which premise does this
objection attack. `sort` is argument reconstruction — label shuffled statements by role.

## 5. Engine

Pure functions in `src/engine`. No React, no storage, no clock access except through an
injected date. This is what makes streak and review logic testable without waiting for
tomorrow.

- **XP** — 15–25 per lesson (declared per lesson), 2 per correct practice answer, 10
  daily-goal bonus, 5 perfect-lesson bonus. Nothing for navigation. Repeating a completed
  lesson pays nothing but still updates mastery.
- **Levels** — ten tiers from Curious Mind to Scholar, thresholds in `levels.ts`.
- **Streak** — increments on the first completed lesson or practice set of a day. Dates are
  local `YYYY-MM-DD` strings, never timestamps.
- **Mastery** — per concept, `0.7 × prev + 0.3 × latest`. Bands: New, Learning, Developing,
  Proficient, Mastered. Because mastery keys off concepts rather than lessons, later
  subjects move the same scores as earlier ones.
- **Review** — `priority = daysSinceReview × (1 − mastery/100)`, with a same-day floor so a
  concept just failed still surfaces, and a boost for concepts met in a lesson but never
  practised.
- **Achievements** — three: First Argument, Perfect Lesson, Seven-Day Streak.

## 6. Persistence

Single JSON blob in `localStorage` behind `ProgressRepository`. Nothing outside `/store`
touches storage directly, so swapping in IndexedDB or a backend is one file.

`normaliseProgress` coerces unknown input into a valid state, so corrupt storage or a
hand-edited export degrades to sensible defaults rather than crashing on load. Answer
history is capped at 500 entries. Export writes an envelope with an app tag and version;
import validates both, then replaces rather than merges.

## 7. Gating and navigation

Lesson order is enforced **within a subject**, via `unlockOrderFor` in `lib/curriculum.ts`.
Any subject can be started immediately — locking Epistemology behind all 17 Logic lessons
would be hostile, and "next lesson" must not spill from the end of one subject into the
start of another.

`LessonPage` is keyed on `lessonId` in the route so React remounts it on navigation.
Without the key, React Router reuses the component and the previous lesson's completion
state persists.

## 8. Design

The trap for this brief is parchment: cream background, high-contrast serif, terracotta
accent. That is the default answer for "philosophy app" and it reads as costume. Agora's
visual language comes from proof notation instead — the vernacular of the subject.

**Signature.** Arguments render as Fitch-style proofs: numbered premises in mono, a
horizontal inference rule, the conclusion under `∴`. Expanding a premise indents one level
and grows its own vertical rule; objections nest inside the premise they attack, responses
inside the objection. **That indentation is the argument map** — no graph view is needed.
Lesson progress renders as a proof column in the left margin.

**Colour.** Dark-first. Tokens are defined in `src/index.css`; do not hardcode hex values in
components. One saturated triad does triple duty — lesson difficulty, argument verdict, and
mastery band — so green, amber and red always mean the same thing.

**Type.** Geist for everything, JetBrains Mono for notation. No serif anywhere. The mono is
load-bearing: premise lines must align like real proofs. `-webkit-font-smoothing:
antialiased` is deliberately absent, since it thins strokes on macOS.

**Copy.** Buttons say what happens — **Check**, then **Next**, never "Submit". No emoji, no
exclamation marks. A wrong answer names the error rather than the verdict.

**Accessibility.** Exercise options are real radio inputs in a fieldset. Feedback is
announced via `aria-live`. Correctness never depends on colour alone — the mastery dot
changes glyph as well as hue, and every dot is paired with a text label. `MasteryDot` is
`aria-hidden` for that reason: giving it its own screen-reader text would announce the state
twice.

## 9. Stack

Vite, React 19, TypeScript (strict), Tailwind 4, React Router (hash), Zustand, Vitest.

Deliberately not used: Next.js (nothing needs SSR, and static output ships free anywhere),
IndexedDB (the blob is a few KB; the repository interface provides the future-proofing, not
the storage engine), Framer Motion, Recharts, any component library.

## 10. Testing

188 tests across 13 files. Three layers:

**Engine** — XP, levels, mastery decay, streak across month/year/leap/DST boundaries,
review ordering and stability. Pure functions, thorough coverage.

**Integration** — the lesson flow end to end, practice set generation, library search,
navigation between lessons, per-subject progress.

**Content** — two suites that guard what no compiler can see. `checkContentIntegrity`
validates every id reference, because a mistyped `conceptId` silently drops a concept out
of the review rotation with no error anywhere. The quality floor enforces that every
distractor explains itself (60+ chars), every choice exercise has four options, every
lesson has a misconception section, and every substantive argument card carries an
objection tree with responses.

Both content suites were verified to fail when problems are injected. A structural test
that passes vacuously is worse than none.

## 11. Known limitations

- **Bundle size.** ~190 kB gzipped, and all content loads on first paint. Route-level lazy
  loading of content modules is the fix when it matters.
- **Practice spans all subjects.** Correct for spaced repetition, but there is no way to
  drill one subject.
- **Content is unreviewed by a human.** Tests verify structure exhaustively and philosophy
  not at all. The Kalam premises and the two problems of evil are where an error would be
  most consequential.

## 12. Deployment

Static build, zero running cost. `npm run build` emits `/dist`. Hash routing means deep
links work on any static host without rewrite rules; `base` is relative so subpath deploys
work unchanged.
