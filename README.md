# Agora

Learn philosophy by taking arguments apart.

Agora teaches reasoning the way it's actually done — reconstructing arguments, finding the
premise doing the hidden work, and locating exactly where an objection bites. Not by
memorising which school of thought says what.

**V1 covers Logic & Argumentation: 17 lessons, 68 exercises, 27 concepts, 14 argument cards.**

It runs entirely in your browser. No account, no server, no subscription, nothing to pay
for. Your progress stays on your device and you can export it to a file whenever you want.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL. That's the whole setup — there's nothing to configure.

```bash
npm run test     # 145 tests
npm run lint
npm run build    # static output in /dist
```

## The course

**Unit 1 — Argument Basics**
What an argument is · premises and conclusions · deductive vs inductive · validity ·
soundness · necessary and sufficient conditions

**Unit 2 — Argument Forms**
Modus ponens · modus tollens · affirming the consequent · denying the antecedent ·
reductio ad absurdum

The two invalid forms sit directly beside the valid ones they imitate, because that
adjacency is the only thing that makes the difference visible.

**Unit 3 — Argument Analysis**
Counterexamples · hidden premises · charity and burden of proof · then three fallacy
lessons grouped by *why* the reasoning fails: attacking the wrong target, smuggling the
conclusion in, and forcing a false structure.

## How it works

**Lessons** are short: an explanation, a worked example, an argument laid out as a proof, a
common mistake, then four or five exercises. Every wrong answer explains the specific
confusion behind it rather than just marking you down.

**Mastery** is tracked per concept as an exponential moving average, weighted towards
recent performance — so a concept you understood last week but just got wrong will drop,
and come back. Because mastery keys off concepts rather than lessons, later units move the
same scores as earlier ones.

**Practice** picks its own questions, prioritising concepts you answered incorrectly,
concepts you haven't seen in a while, and concepts you've met in a lesson but never
practised.

**The library** holds every argument, laid out with its premises, the support for each, the
objections that target them, and the responses to those objections. Arguments are presented
as arguments — Agora doesn't tell you which side wins.

## Design

The visual language comes from proof notation rather than from Ancient Greece. Arguments
render as Fitch-style proofs: numbered premises in mono, a horizontal inference rule, the
conclusion under a turnstile. Expanding a premise indents one level and grows its own
vertical rule, so objections nest inside the premise they attack and responses inside the
objection. **That indentation is the argument map** — no separate graph view is needed.

Colour is functional. One saturated triad carries both lesson difficulty and argument
verdict, so green, amber and red always mean the same thing wherever they appear.

## Progress and privacy

Everything lives in your browser's local storage. Nothing is sent anywhere, because there's
nowhere to send it. No analytics, no accounts, no personal data of any kind.

Since there are no accounts, moving between devices is manual: **Export progress**
downloads a JSON file, **Import progress** loads it back. Clearing your browser data will
erase your progress, so export if you care about it.

## Architecture

```
src/
  content/    typed lesson, concept and argument data — no prose lives in components
  engine/     XP, levels, mastery, streaks, spaced review — pure functions, no React
  store/      repository interface + localStorage implementation + Zustand
  components/ layout, lesson, exercise, argument, ui
  pages/      Home, Learn, Lesson, Practice, Library, Progress, Settings
```

Three rules hold the thing together:

1. **No philosophical prose in components.** All content is typed data under `content/`.
2. **All game rules live in `engine/` as pure functions** that take the current date as a
   parameter — which is what makes streak and review logic testable without waiting for
   tomorrow.
3. **All persistence goes through `ProgressRepository`.** Swapping localStorage for
   IndexedDB or a real backend means writing one file.

A dev-time integrity check validates every id reference at startup, because a mistyped
`conceptId` would otherwise silently drop a concept out of the review rotation with no
error anywhere.

Adding subjects — Epistemology, Metaphysics, Philosophy of Religion — means writing content
files, not touching the UI.

## Deploy

Static build, zero running cost.

```bash
npm run build   # → dist/
```

Host on Cloudflare Pages, GitHub Pages or Netlify. Routing uses hashes, so deep links work
on any static host without rewrite rules, and `base` is relative so subpath deploys work
unchanged.

## Stack

Vite · React · TypeScript (strict) · Tailwind · Zustand · Vitest. No backend, no database,
no paid APIs, no LLM.
