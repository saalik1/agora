# Agora — Implementation Plan

Six milestones. Each one ends in a working app, not a half-built layer. Do them in order.

Rules that hold for every milestone: inspect existing code before editing it, don't
duplicate logic that already exists in `/engine`, keep TypeScript strict with no `any`,
run `npm run lint && npm run test && npm run build` before calling a milestone done, and
finish by listing changed files and how to test the milestone by hand.

---

## Milestone 1 — Shell

**Goal:** the app runs, routes work, the design system exists, progress persists.

Build:
- Vite + React + TS (strict) + Tailwind + React Router + Zustand + Vitest
- Tailwind theme carrying the tokens from PROJECT_SPEC §7 as CSS variables, light and dark
- Fonts: Newsreader, IBM Plex Sans, IBM Plex Mono, self-hosted via `@fontsource`
- `/types/content.ts` and `/types/progress.ts` — every interface from the spec, nothing more
- `progress-repository.ts`: interface plus localStorage implementation, versioned blob,
  safe defaults when storage is empty or corrupt
- `use-progress.ts`: zustand store, hydrates on mount, persists on change (debounced 300ms)
- Layout shell: desktop sidebar with the level/XP/streak footer, mobile bottom nav
- Six routes rendering honest empty states — no lorem, no placeholder boxes

**Done when:** app loads at `/`, all routes navigate, theme toggle persists across refresh,
a manually written XP value in the store survives a reload.

**Test by hand:** open, navigate every route, toggle theme, refresh, confirm theme held.

---

## Milestone 2 — Engine

**Goal:** every rule of the game exists as a tested pure function before any UI depends on it.

Build `xp.ts`, `levels.ts`, `mastery.ts`, `streak.ts`, `review.ts`, `achievements.ts`.

No React imports. No `Date.now()` — take `now: Date` or a `now()` function as a parameter
so tests can fake time. All functions take state and return new state; none mutate.

Write the tests from PROJECT_SPEC §10 alongside. This milestone is finished when the tests
pass, not when the code compiles.

**Done when:** `npm run test` is green with meaningful assertions on all six modules,
including the streak boundary cases.

**Test by hand:** `npm run test`. Read the streak tests and confirm they cover a same-day
repeat, consecutive days, a one-day gap, and a month boundary.

---

## Milestone 3 — Lesson flow (the proof-of-life milestone)

**Goal:** one real lesson, end to end, with the signature UI working.

Build:
- `SectionRenderer` — dispatches on `Section.kind`, one component per kind
- `ProofColumn` — the left-margin vertical rule and inference line; sections mark as
  discharged when scrolled past. This is the signature element; get it right here.
- `ChoiceExercise` — fieldset of real radio inputs, Check → per-option feedback → Next
- `SortExercise` — assign shuffled statements to premise / conclusion / neither
- `Feedback` — icon plus label plus the chosen option's explanation, `aria-live="polite"`
- `CompletionScreen` — XP earned, mastery deltas, the inference line resolving
- Wire completion into the engine: XP, mastery, streak, achievements, persistence

Author **lesson 1 only** ("What is an argument?") with 4 exercises, plus the 2–3 concepts
and 1 argument card it references.

**Done when:** you can finish lesson 1, see per-option feedback, land on the completion
screen, watch XP and mastery change, refresh, and find it still completed.

**Test by hand:** complete lesson 1 twice — the second run awards no XP but still updates
mastery. Answer one question wrong deliberately and confirm the feedback explains the
error rather than just marking it. Tab through the whole flow without a mouse.

---

## Milestone 4 — Content

**Goal:** the remaining 14 lessons and ~60 exercises.

This is the long one. No new components should be needed — if a lesson seems to require
one, either the content model is wrong or the lesson is trying to be special. Push back
before adding a component.

Order: Unit 1 (lessons 2–6) → Unit 2 (7–11) → Unit 3 (12–15). Ship unit by unit; the app
is usable and testable after each.

Per lesson: sections under 120 words each, 4–5 exercises, correct `conceptIds` on both the
lesson and every exercise (mastery depends entirely on these being right), and a genuine
explanation on every wrong option.

Add a dev-time integrity check in `content/index.ts`: every referenced id resolves, every
exercise has exactly one correct option, no orphan concepts. Fail loudly in dev.

**Done when:** all 15 lessons play through, unlock gating works, the integrity check passes.

**Test by hand:** complete Unit 1 and confirm Unit 2 unlocks. Spot-check five wrong answers
across different lessons and read whether the explanation actually teaches.

---

## Milestone 5 — Practice and Home

**Goal:** the loop closes — weak concepts come back automatically.

Build:
- Practice generator using `review.ts`: top 10 concepts, one exercise each, no repeats
  within a session where avoidable
- Practice results screen: XP, what moved, what's still weak
- Home: level and title, XP toward next level, streak, daily goal ring, continue CTA
  pointing at the correct next lesson, mastery bars per unit, recent achievements
- Achievement toast — quiet, dismissible, no confetti
- Honest empty states for a brand-new user

**Done when:** a user who got specific questions wrong sees those concepts resurface in
practice, and Home's continue button always points at the right next lesson.

**Test by hand:** deliberately fail two concepts, open Practice, confirm both appear near
the top. Complete a practice set and watch the daily goal fill.

---

## Milestone 6 — Library, transfer, polish

**Goal:** ship it.

Build:
- Library: concepts and arguments in one searchable list, filterable by tag
- `ArgumentCard` with nested premise → objection → response indentation (the argument map)
- Concept pages: definition, related concepts, related arguments, related lessons
- Local search across lesson titles, concepts, and arguments — simple substring plus token
  match, no dependency
- Export and import progress, with a clear confirmation before import overwrites
- Settings: theme, daily goal, reduced motion, reset progress (confirm twice)
- Accessibility pass: focus order, labels, contrast, `prefers-reduced-motion`
- Responsive pass down to 360px
- README with screenshots

**Done when:** everything in PROJECT_SPEC §11 is true.

**Test by hand:** export progress, clear the browser, import it back, confirm XP, streak,
mastery and completed lessons all return intact.

---

## Deployment

`npm run build` produces static files in `/dist`. Set Vite's `base` if hosting under a
subpath (GitHub Pages project sites need it; Cloudflare Pages and Netlify don't).

Cloudflare Pages: connect the repo, build command `npm run build`, output `dist`. Free,
unlimited bandwidth, no card. GitHub Pages via Actions works equally well and is free
forever. Nothing here can incur cost — there is no server and no database.

---

## Things that will go wrong

**Content is 60% of the work.** The engine is a day; fifteen lessons of correct philosophy
with plausible distractors is not. Don't let the architecture expand to fill the time that
authoring needs.

**Concept ids drift.** Mastery, review, and the library all key off `conceptIds`. A typo
silently breaks the review loop with no error. The integrity check in Milestone 4 is not
optional.

**Distractors are the hard part.** A wrong option must be genuinely tempting and its
explanation must name the specific confusion. Options like "None of the above" or an
obviously silly answer teach nothing and make the app feel cheap.

**Streaks and timezones.** Store `YYYY-MM-DD` local strings only. Never compare timestamps.
Never call `Date.now()` inside the engine.

**Scope creep dressed as polish.** Charts, animations, a graph editor, more subjects — all
of it can wait. The indentation *is* the argument map. Ship Logic first.
