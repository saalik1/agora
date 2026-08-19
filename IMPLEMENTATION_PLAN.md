# Agora — Implementation Notes

The original build plan is complete. This document now records how the thing was built and
what to do when extending it. For what the application *is*, see `PROJECT_SPEC.md`.

## Build history

| Milestone | Delivered |
|---|---|
| 1 — Shell | Vite scaffold, design tokens, routes, repository, Zustand store |
| 2 — Engine | XP, levels, mastery, streak, review, achievements — pure and tested |
| 3 — Lesson flow | Section renderer, both exercise types, proof column, completion |
| 4 — Content | 53 lessons across four subjects |
| 5 — Practice + Home | Review generator, dashboard, achievement toast |
| 6 — Library + polish | Concept and argument pages, search, export/import, a11y |

Order mattered: the engine was finished and tested before any UI depended on it, and one
complete lesson existed before the other 52 were authored. Content turned out to be roughly
60% of the total work, as expected.

## Adding a subject

Entirely additive — no engine or component changes required.

1. Create `src/content/<subject>/` with `concepts.ts`, `arguments.ts`, and one or more
   lesson files.
2. Export a `Subject`, its `Unit`s, `Lesson[]` and `Exercise[]`.
3. Register all of it in `src/content/index.ts`: add to `subjects`, `units`, `lessons`,
   `exercises`, `concepts`, `argumentCards`.
4. Run `npm run test`. The integrity check and quality floor will name anything wrong by id.

Place the subject after its dependencies in the `subjects` array — Learn and Progress render
in that order, and it is the order a new user meets them in.

## Authoring rules

These are enforced by `src/content/audit.test.ts`, so violating them fails the build rather
than merely lowering quality.

- Explanation sections stay under ~130 words. A longer one is two lessons.
- Every lesson has at least four sections and a misconception section.
- Every choice exercise has exactly four options, each with an explanation of 60+
  characters that names the specific confusion. "Incorrect" is a failure of the product.
- Every substantive argument card has an objection tree, and every objection has at least
  one response. Cards that are deliberately clean illustrations of a form are whitelisted
  by id in the audit.
- Every concept is trained by at least one exercise. An untrained concept can never enter
  the review rotation.

One rule is not machine-checkable and matters most: **exercises must have determinate
answers.** Ask which premise an objection attacks, not whether the argument succeeds.

## Things that went wrong, so they do not go wrong again

**Object-returning selectors cause infinite renders.** `selectLevel` returned
`levelState(xp)`, a fresh object each call, so Zustand's reference check re-rendered
forever. Select primitives and derive outside the store — hence `useLevel()`.

**React Router reuses components across param changes.** Navigating lesson 1 → lesson 2 kept
the previous lesson's state, landing the user on a stale completion screen. Fixed by keying
`LessonPage` on `lessonId`. A `useEffect` reset would also work but breaks silently the
moment someone adds a fifth piece of state.

**Hardcoding `subjects[0]`.** Three places assumed one subject, so Epistemology was
invisible when added. Grep for it before assuming subject-awareness anywhere.

**Global lesson ordering.** `orderedLessonIds()` spanned all subjects, so a new subject was
locked behind the previous one's 17 lessons, and "next lesson" spilled across the boundary.
Use `unlockOrderFor`.

**Tests must seed the repository, not just the store.** `App` hydrates on mount and will
overwrite store state set directly in a test. Save to a `MemoryProgressRepository` first.

**`pendingAchievements` leaks between tests.** The toast is global and shares `role="status"`
with exercise feedback, so a leaked achievement collides with an unrelated assertion. Reset
it in `beforeEach`.

**Verify that guard tests fail.** Both content suites were checked by injecting a broken
concept id and a three-character explanation, confirming each failed and named the
offender. A structural test that passes vacuously is worse than none.

## Verification

```bash
npm run test      # 188 tests
npm run lint      # zero warnings tolerated
npm run build
```

All three must pass before committing. `npm run typecheck` runs independently if useful.

## Next steps, in rough priority order

1. **Human review of the philosophy.** Tests verify structure exhaustively and content not
   at all. Read a unit at a time as a user.
2. **Route-level code splitting.** All 53 lessons load on first paint; the bundle warning is
   already firing at ~190 kB gzipped.
3. **Subject filter on Practice.** Currently a set can jump between Gettier cases and modus
   tollens with no way to drill one subject.
4. **Philosophy of Mind.** The only remaining subject from the original roadmap. A leaf —
   nothing depends on it — so it slots in whenever.
