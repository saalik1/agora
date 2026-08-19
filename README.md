# Agora

Learn philosophy by taking arguments apart.

Agora teaches reasoning the way it's actually done — reconstructing arguments, finding the
premise doing the hidden work, and locating exactly where an objection bites. Not by
memorising which school of thought says what.

**53 lessons · 214 exercises · 93 concepts · 44 argument cards · 4 subjects**

It runs entirely in your browser. No account, no server, no subscription, nothing to pay
for. Your progress stays on your device and you can export it to a file whenever you want.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL. That's the whole setup — there's nothing to configure.

```bash
npm run test     # 183 tests
npm run lint
npm run build    # static output in /dist
```

## The curriculum

Subjects build on one another. Logic supplies the tools, Epistemology and Metaphysics
supply the machinery, and Philosophy of Religion applies both.

**Logic & Argumentation** (17 lessons)
Argument basics · the four conditional forms and reductio · counterexamples, hidden
premises, charity and burden of proof, and six fallacies grouped by *why* the reasoning
fails.

**Epistemology** (14 lessons)
What knowledge is: JTB, Gettier, the regress problem, foundationalism and coherentism,
internalism and externalism · sources: a priori and a posteriori, rationalism and
empiricism, testimony, the problem of induction · scepticism: Cartesian doubt, the dream
argument, brain in a vat, and the four standard responses.

**Metaphysics** (14 lessons)
Modality and the Principle of Sufficient Reason · essence, existence and universals ·
identity, the Ship of Theseus, endurantism and perdurantism · causation, actual infinity
and the theories of time · determinism and free will.

**Philosophy of Religion** (8 lessons)
The Kalam and contingency arguments, fine-tuning, the ontological argument · omnipotence
and omniscience, both problems of evil, theodicies and defences, divine hiddenness.

Arguments are presented as arguments — premises, support, objections, responses, and
counter-responses. Agora does not tell you which side wins, and a test enforces that every
argument card in Philosophy of Religion is marked contested.

## How it works

**Lessons** are short: an explanation, a worked example, an argument laid out as a proof, a
common mistake, then four or five exercises. Every wrong answer explains the specific
confusion behind it rather than just marking you down.

**Mastery** is tracked per concept as an exponential moving average, weighted towards
recent performance — so a concept you understood last week but just got wrong will drop,
and come back. Because mastery keys off concepts rather than lessons, later subjects move
the same scores as earlier ones.

**Practice** picks its own questions, prioritising concepts you answered incorrectly,
concepts you haven't seen in a while, and concepts you've met in a lesson but never
practised.

**The library** holds every concept and argument, searchable, with mastery indicators
showing what you've reviewed at a glance.

## Design

The visual language comes from proof notation rather than from Ancient Greece. Arguments
render as Fitch-style proofs: numbered premises in mono, a horizontal inference rule, the
conclusion under a turnstile. Expanding a premise indents one level and grows its own
vertical rule, so objections nest inside the premise they attack and responses inside the
objection. **That indentation is the argument map** — no separate graph view is needed.

Colour is functional. One saturated triad carries lesson difficulty, argument verdict and
mastery band, so green, amber and red always mean the same thing wherever they appear.

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
    logic/  epistemology/  metaphysics/  religion/
  engine/     XP, levels, mastery, streaks, spaced review — pure functions, no React
  store/      repository interface + localStorage implementation + Zustand
  components/ layout, lesson, exercise, argument, ui
  pages/      Home, Learn, Lesson, Practice, Library, Progress, Settings
```

Four rules hold the thing together:

1. **No philosophical prose in components.** All content is typed data under `content/`.
2. **All game rules live in `engine/` as pure functions** that take the current date as a
   parameter — which is what makes streak and review logic testable without waiting for
   tomorrow.
3. **All persistence goes through `ProgressRepository`.** Swapping localStorage for
   IndexedDB or a real backend means writing one file.
4. **Lesson gating is scoped per subject.** Order is enforced within a subject; any
   subject can be started immediately.

Two test suites guard the content. An integrity check validates every id reference, since a
mistyped `conceptId` would otherwise silently drop a concept out of the review rotation. A
quality floor enforces that every distractor explains itself, every lesson has a
misconception section, and every substantive argument card carries an objection tree — the
failure modes no compiler can detect.

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
