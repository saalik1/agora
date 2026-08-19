import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Metaphysics Units 4–5.
 *
 * Unit 4 is where the Kalam argument is actually won or lost. Actual infinity
 * supplies its second premise; the A/B theory dispute determines whether
 * "began to exist" means what the argument needs it to mean. Both are here for
 * that reason rather than as general-interest topics.
 */

export const metaCausationUnit: Unit = {
  id: 'meta-u4',
  subjectId: 'metaphysics',
  title: 'Causation, Time and Infinity',
  blurb: 'What causing amounts to, whether time passes, and whether a completed infinity can exist.',
  lessonIds: ['meta-10', 'meta-11', 'meta-12'],
}

export const metaFreeWillUnit: Unit = {
  id: 'meta-u5',
  subjectId: 'metaphysics',
  title: 'Free Will',
  blurb: 'If the past and the laws fix the future, what becomes of choosing?',
  lessonIds: ['meta-13', 'meta-14'],
}

export const metaLessonsB: Lesson[] = [
  {
    id: 'meta-10',
    unitId: 'meta-u4',
    title: 'Causation',
    summary: 'Hume looked for the necessary connection and could not find it.',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['causation', 'regularity-theory', 'counterfactual-causation'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Causation looks obvious until you try to say what it is. Watch one ball strike ' +
          'another as often as you like: you see contact, then motion. You never see the ' +
          'connection that supposedly makes the second follow from the first.',
      },
      {
        kind: 'argument',
        ref: 'humean-causation',
        note:
          'Hume\u2019s conclusion is about the origin of our idea, not a denial that causation ' +
          'occurs. Expand P2 for the appeal to agency and his reply.',
      },
      {
        kind: 'explanation',
        heading: 'Two attempts to say what is missing',
        body:
          'The regularity theory says causation just is constant conjunction — but night ' +
          'reliably follows day without causing it. The counterfactual theory says A caused B ' +
          'if B would not have occurred without A, which handles that case neatly but fails on ' +
          'overdetermination: two assassins fire together, and neither shot passes the test.',
      },
      {
        kind: 'misconception',
        claim: 'Hume denied that causation exists.',
        correction:
          'He denied that we observe necessary connection, and located our idea of it in ' +
          'habit. That is a claim about the origin of the concept, not about whether one thing ' +
          'brings about another.',
      },
    ],
    exerciseIds: ['meta-10-e1', 'meta-10-e2', 'meta-10-e3', 'meta-10-e4'],
  },
  {
    id: 'meta-11',
    unitId: 'meta-u4',
    title: 'Actual and potential infinity',
    summary: 'A hotel that is full but always has room.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['actual-infinity', 'hilberts-hotel', 'infinite-regress'],
    sections: [
      {
        kind: 'explanation',
        body:
          'A potential infinity is a process that can always continue: keep counting and you ' +
          'never run out. An actual infinity is a completed totality already infinite in ' +
          'number. Mathematics handles both. Whether the second can exist in reality is ' +
          'another matter entirely.',
      },
      {
        kind: 'argument',
        ref: 'hilbert-hotel-arg',
        note:
          'Expand P3 for the central dispute: are these results merely counterintuitive, or ' +
          'genuinely incoherent?',
      },
      {
        kind: 'explanation',
        heading: 'Why this matters beyond mathematics',
        body:
          'If actual infinities cannot exist, a beginningless past cannot exist either, since ' +
          'it would be an actually infinite collection of past events. That is precisely the ' +
          'route by which the Kalam argument reaches its second premise — so the dispute here ' +
          'settles a great deal downstream.',
      },
      {
        kind: 'misconception',
        claim: "Hilbert's Hotel shows infinity is a contradiction.",
        correction:
          'It shows infinite sets behave unlike finite ones — that a proper subset can be the ' +
          'same size as the whole. That is strange but consistent, and it is standard ' +
          'mathematics. The disputed step is moving from "strange" to "cannot be instantiated ' +
          'in reality".',
      },
    ],
    exerciseIds: ['meta-11-e1', 'meta-11-e2', 'meta-11-e3', 'meta-11-e4'],
  },
  {
    id: 'meta-12',
    unitId: 'meta-u4',
    title: 'Does time pass?',
    summary: 'A-theory and B-theory, and why "began to exist" depends on the answer.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['a-theory', 'b-theory', 'actual-infinity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Nothing seems more obvious than that time passes. But there are two accounts of ' +
          'what that amounts to, and the difference between them is not decorative — it ' +
          'determines whether anything can be said to come into being at all.',
      },
      {
        kind: 'definition',
        term: 'A-theory',
        body: 'The present is objectively privileged. Things genuinely come into and go out of existence.',
      },
      {
        kind: 'definition',
        term: 'B-theory',
        body:
          'All times are equally real. "Now" is indexical, like "here" — true of wherever the ' +
          'speaker is.',
      },
      {
        kind: 'argument',
        ref: 'ab-theory-dispute',
        note:
          'Expand P1 for the relativity objection, which is the strongest pressure on the ' +
          'A-theory, and the neo-Lorentzian reply.',
      },
      {
        kind: 'explanation',
        heading: 'The consequence for cosmological arguments',
        body:
          'On the A-theory, the universe beginning means there was a time when it was not and ' +
          'then it came to be. On the B-theory, it means only that the four-dimensional block ' +
          'has a first temporal boundary — as a ruler has a first inch without anything ' +
          'bringing that inch into being. Craig defends the A-theory at length precisely ' +
          'because the Kalam requires it.',
      },
      {
        kind: 'misconception',
        claim: 'The B-theory says time is an illusion.',
        correction:
          'It says the passage of time is perspectival, not that time is unreal. Temporal ' +
          'order, duration and direction all remain — what goes is an objectively moving ' +
          'present.',
      },
    ],
    exerciseIds: ['meta-12-e1', 'meta-12-e2', 'meta-12-e3', 'meta-12-e4'],
  },

  {
    id: 'meta-13',
    unitId: 'meta-u5',
    title: 'Determinism',
    summary: 'If the past and the laws fix one future, what is left of choice?',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['determinism', 'free-will'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Determinism says the state of the world at any moment, together with the laws of ' +
          'nature, entails exactly one future. It is a claim about entailment, not compulsion: ' +
          'nothing forces you, but nothing else could have happened.',
      },
      {
        kind: 'argument',
        ref: 'consequence-argument',
        note:
          'The cleanest statement of the threat. Expand P3 for the compatibilist reply and the ' +
          'exchange that follows.',
      },
      {
        kind: 'explanation',
        heading: 'The definition does the work',
        body:
          'Whether determinism threatens free will depends almost entirely on what free will ' +
          'requires. If it requires the ability to have done otherwise, determinism looks ' +
          'fatal. If it requires only that your action flow from your own reasons without ' +
          'coercion, determinism is no threat at all. Most of the debate is about which ' +
          'definition is right.',
      },
      {
        kind: 'misconception',
        claim: 'Determinism means your choices do not matter.',
        correction:
          'Your deliberation is part of the causal chain, not a bystander to it. On a ' +
          'deterministic picture your choosing is exactly what brings the outcome about — ' +
          'which is why fatalism, the view that the outcome arrives regardless, is a different ' +
          'and much less defensible position.',
      },
    ],
    exerciseIds: ['meta-13-e1', 'meta-13-e2', 'meta-13-e3', 'meta-13-e4'],
  },
  {
    id: 'meta-14',
    unitId: 'meta-u5',
    title: 'Three responses',
    summary: 'Compatibilism, hard determinism, libertarianism — and what each gives up.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['compatibilism', 'hard-determinism', 'libertarian-free-will'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The consequence argument is valid, so answering it means rejecting a premise. Three ' +
          'positions do so in different places, and each pays a price.',
      },
      {
        kind: 'definition',
        term: 'Compatibilism',
        body: 'Rejects the incompatibilist premise. Freedom is about the source of an action, not alternatives.',
      },
      {
        kind: 'definition',
        term: 'Hard determinism',
        body: 'Accepts every premise and the conclusion. Free will is an illusion.',
      },
      {
        kind: 'definition',
        term: 'Libertarianism',
        body: 'Accepts incompatibilism but denies determinism. Agents originate actions.',
      },
      {
        kind: 'explanation',
        heading: 'What each gives up',
        body:
          'Compatibilism is accused of changing the subject — of redefining freedom into ' +
          'something nobody was worried about losing. Hard determinism must explain moral ' +
          'responsibility without the freedom it denies. Libertarianism faces the luck ' +
          'problem: if your action is not determined by your reasons, it is unclear how being ' +
          'random makes it more yours.',
      },
      {
        kind: 'misconception',
        claim: 'Quantum indeterminacy rescues free will.',
        correction:
          'Randomness at the microphysical level does not obviously deliver control. An action ' +
          'produced by a quantum fluctuation is not determined by your reasons — which is the ' +
          'luck problem, not a solution to it. Libertarians who appeal to physics still owe an ' +
          'account of how indeterminacy becomes agency.',
      },
    ],
    exerciseIds: ['meta-14-e1', 'meta-14-e2', 'meta-14-e3', 'meta-14-e4'],
  },
]

export const metaExercisesB: Exercise[] = [
  /* ---------------------------------------------------------------- meta-10 */
  {
    id: 'meta-10-e1',
    type: 'choice',
    conceptIds: ['causation', 'regularity-theory'],
    prompt: 'What is the standard objection to the regularity theory?',
    options: [
      {
        id: 'a',
        text: 'That regularities are hard to observe.',
        explanation:
          'They are observed constantly. Difficulty of observation is not the problem.',
      },
      {
        id: 'b',
        text: 'Night regularly follows day without causing it.',
        explanation:
          'Correct. Constant conjunction occurs without causation, so conjunction cannot be ' +
          'all there is to it.',
      },
      {
        id: 'c',
        text: 'That causes must precede effects.',
        explanation:
          'The regularity theory accommodates temporal order easily. This is not where it ' +
          'breaks.',
      },
      {
        id: 'd',
        text: 'That Hume was an empiricist.',
        explanation:
          'A biographical fact about Hume rather than an objection to the theory. Where a view comes ' +
          'from says nothing about whether it survives scrutiny.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-10-e2',
    type: 'choice',
    conceptIds: ['counterfactual-causation'],
    prompt: 'What is overdetermination, and why is it a problem?',
    options: [
      {
        id: 'a',
        text: 'When a cause has many effects, so the theory cannot pick one.',
        explanation:
          'Multiple effects raise no difficulty for the counterfactual test.',
      },
      {
        id: 'b',
        text: 'Two assassins fire simultaneously — neither shot passes the "would not have happened" test.',
        explanation:
          'Correct. Remove either shot and the death still occurs, so the counterfactual ' +
          'analysis wrongly says neither caused it.',
      },
      {
        id: 'c',
        text: 'When an effect has no cause at all.',
        explanation:
          'That would be a case of uncaused events, which raises separate questions. ' +
          'Overdetermination involves too many causes rather than none.',
      },
      {
        id: 'd',
        text: 'When we cannot determine which cause operated.',
        explanation:
          'An epistemic difficulty about knowing, not a metaphysical one about what caused ' +
          'what.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-10-e3',
    type: 'choice',
    conceptIds: ['causation'],
    prompt: 'What exactly did Hume conclude?',
    options: [
      {
        id: 'a',
        text: 'That nothing causes anything.',
        explanation:
          'A common misreading. Hume did not deny that one thing brings about another \u2014 he asked ' +
          'where our idea of the connection between them comes from.',
      },
      {
        id: 'b',
        text: 'That our idea of necessary connection comes from habit rather than observation.',
        explanation:
          'Correct. The claim is about the origin of the concept, not about whether the ' +
          'relation obtains.',
      },
      {
        id: 'c',
        text: 'That causation is a physical force.',
        explanation:
          'The opposite of his position — no such observable force is available.',
      },
      {
        id: 'd',
        text: 'That effects can precede causes.',
        explanation:
          'Nothing in the argument suggests backwards causation. Hume takes the temporal order of ' +
          'cause and effect for granted throughout.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-10-e4',
    type: 'choice',
    conceptIds: ['causation', 'psr'],
    prompt: 'Why does the analysis of causation matter for cosmological arguments?',
    options: [
      {
        id: 'a',
        text: 'Because they claim everything has a cause.',
        explanation:
          'Careful versions do not — they restrict the claim to things that begin to exist, or ' +
          'to contingent things, precisely to avoid the obvious objection.',
      },
      {
        id: 'b',
        text: 'Because their first premise assumes a causal principle that needs defending.',
        explanation:
          'Correct. If causation is merely observed regularity within the universe, extending ' +
          'it to the origin of the universe requires an argument.',
      },
      {
        id: 'c',
        text: 'Because Hume disproved them.',
        explanation:
          'He raised difficulties; the arguments have defenders who answer them. "Disproved" ' +
          'overstates it considerably.',
      },
      {
        id: 'd',
        text: 'Because causation is irrelevant to them.',
        explanation:
          'It is central — the first premise of every cosmological argument is a causal or ' +
          'explanatory principle.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- meta-11 */
  {
    id: 'meta-11-e1',
    type: 'choice',
    conceptIds: ['actual-infinity'],
    prompt: 'What distinguishes an actual from a potential infinity?',
    options: [
      {
        id: 'a',
        text: 'Actual infinities are larger.',
        explanation:
          'Size is not the distinction. A potential infinity has no size at all — it is a ' +
          'process, not a totality.',
      },
      {
        id: 'b',
        text: 'A potential infinity always grows without limit; an actual one is already complete.',
        explanation:
          'Correct. Counting forever is potential; a completed infinite collection is actual.',
      },
      {
        id: 'c',
        text: 'Actual infinities exist and potential ones do not.',
        explanation:
          'That prejudges the question. Whether actual infinities can exist is exactly what is ' +
          'disputed.',
      },
      {
        id: 'd',
        text: 'Potential infinities are mathematical and actual ones are physical.',
        explanation:
          'Both notions are mathematical. The dispute is whether the actual kind can be ' +
          'instantiated in reality.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-11-e2',
    type: 'choice',
    conceptIds: ['hilberts-hotel'],
    prompt: "What does Hilbert's Hotel actually demonstrate?",
    options: [
      {
        id: 'a',
        text: 'That infinity is self-contradictory.',
        explanation:
          'Too strong. The results are consistent standard mathematics — the disputed step is ' +
          'moving from strangeness to impossibility.',
      },
      {
        id: 'b',
        text: 'That a proper subset of an infinite set can be the same size as the whole.',
        explanation:
          'Correct. That is the defining property of infinite sets, and it is what makes the ' +
          'hotel behave so oddly.',
      },
      {
        id: 'c',
        text: 'That hotels cannot be infinite.',
        explanation:
          'That is the conclusion the argument wants, not what the thought experiment itself ' +
          'shows.',
      },
      {
        id: 'd',
        text: 'That mathematics is unreliable.',
        explanation:
          'The mathematics is entirely sound. The question is what it implies about reality.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-11-e3',
    type: 'choice',
    conceptIds: ['actual-infinity'],
    prompt: 'Which premise of the Kalam argument does this material support?',
    options: [
      {
        id: 'a',
        text: 'That everything that begins to exist has a cause.',
        explanation:
          'That premise rests on causal principles, not on the impossibility of infinities.',
      },
      {
        id: 'b',
        text: 'That the universe began to exist.',
        explanation:
          'Correct. If an actual infinite cannot exist, a beginningless past cannot either — ' +
          'so the past must be finite.',
      },
      {
        id: 'c',
        text: 'That the cause is personal.',
        explanation:
          'That comes later, from a separate argument about how a timeless cause could produce ' +
          'a temporal effect.',
      },
      {
        id: 'd',
        text: 'That the universe has a cause.',
        explanation:
          'That is the conclusion, which follows from the two premises rather than being ' +
          'supported directly.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-11-e4',
    type: 'choice',
    conceptIds: ['hilberts-hotel', 'reductio'],
    prompt: 'Which reply best challenges the reductio?',
    options: [
      {
        id: 'a',
        text: 'Hotels of that kind cannot be built.',
        explanation:
          'Physical buildability is irrelevant — the argument concerns metaphysical ' +
          'possibility, as Logic lesson 12 established for counterexamples generally.',
      },
      {
        id: 'b',
        text: 'The results are counterintuitive but not contradictory, and a reductio needs a contradiction.',
        explanation:
          'Correct, and it applies the standard from Logic lesson 11 exactly: strangeness is ' +
          'not absurdity.',
      },
      {
        id: 'c',
        text: 'Infinity is not a number.',
        explanation:
          'True of the transfinite in some senses, but it does not address whether the ' +
          'collection could be instantiated.',
      },
      {
        id: 'd',
        text: 'Cantor proved infinities exist.',
        explanation:
          'Cantor established the mathematics of infinite sets, which nobody disputes. The ' +
          'question is about instantiation in reality.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- meta-12 */
  {
    id: 'meta-12-e1',
    type: 'choice',
    conceptIds: ['a-theory', 'b-theory'],
    prompt: 'What does the B-theory claim about the present?',
    options: [
      {
        id: 'a',
        text: 'That the present does not exist.',
        explanation:
          'It exists — it is simply not objectively privileged over other times.',
      },
      {
        id: 'b',
        text: 'That "now" is indexical, like "here", rather than marking an objective moment.',
        explanation:
          'Correct. Every moment is "now" from its own vantage, as every place is "here" from ' +
          'its own.',
      },
      {
        id: 'c',
        text: 'That time does not exist.',
        explanation:
          'Temporal order, duration and direction all survive on the B-theory. What goes is ' +
          'objective passage.',
      },
      {
        id: 'd',
        text: 'That the future is unreal.',
        explanation:
          'That is closer to the A-theory in its growing-block form. B-theorists hold all ' +
          'times equally real.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-12-e2',
    type: 'choice',
    conceptIds: ['a-theory', 'b-theory'],
    prompt: 'Why does the Kalam argument require the A-theory?',
    options: [
      {
        id: 'a',
        text: 'Because the B-theory denies causation.',
        explanation:
          'B-theorists accept causal relations. That is not the difficulty.',
      },
      {
        id: 'b',
        text: 'Because on the B-theory nothing strictly comes into being — a first moment is like a first inch.',
        explanation:
          'Correct. "Began to exist" would then mean only that the block has a boundary, which ' +
          'is not the coming-into-being the argument needs.',
      },
      {
        id: 'c',
        text: 'Because the B-theory implies the universe is eternal.',
        explanation:
          'A B-theoretic universe can have a finite past. The issue is what "beginning" ' +
          'amounts to, not how long it lasts.',
      },
      {
        id: 'd',
        text: 'Because relativity is false.',
        explanation:
          'Relativity is evidence *against* the A-theory, which is why defenders must respond ' +
          'to it rather than rely on it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-12-e3',
    type: 'choice',
    conceptIds: ['a-theory'],
    prompt: 'What is the strongest objection to the A-theory?',
    options: [
      {
        id: 'a',
        text: 'That passage cannot be experienced.',
        explanation:
          'The experience of passage is the A-theory\u2019s best evidence, not an objection to it.',
      },
      {
        id: 'b',
        text: 'That special relativity denies an absolute present, since simultaneity is frame-dependent.',
        explanation:
          'Correct. If there is no observer-independent "now", an objectively privileged ' +
          'present is difficult to sustain.',
      },
      {
        id: 'c',
        text: 'That it is a minority view.',
        explanation:
          'Numbers do not settle it, and the split among philosophers is closer than the ' +
          'objection assumes.',
      },
      {
        id: 'd',
        text: 'That it is incompatible with causation.',
        explanation:
          'The A-theory sits comfortably with causation. Relativity is where the pressure ' +
          'comes from.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-12-e4',
    type: 'sort',
    conceptIds: ['a-theory', 'b-theory', 'premise', 'conclusion'],
    prompt: 'Label each statement in this argument about beginnings.',
    statements: [
      { id: 's1', text: 'On the B-theory, all times are equally real.', role: 'premise' },
      { id: 's2', text: 'If all times are equally real, nothing comes into being.', role: 'premise' },
      { id: 's3', text: 'On the B-theory, nothing comes into being.', role: 'conclusion' },
      { id: 's4', text: 'Einstein published on relativity in 1905.', role: 'irrelevant' },
    ],
    explanation:
      'A conditional and its antecedent give the conclusion — modus ponens. The publication ' +
      'date is background, not a reason for anything.',
  },

  /* ---------------------------------------------------------------- meta-13 */
  {
    id: 'meta-13-e1',
    type: 'choice',
    conceptIds: ['determinism'],
    prompt: 'What does determinism claim?',
    options: [
      {
        id: 'a',
        text: 'That we are forced to act against our will.',
        explanation:
          'That is compulsion, which determinism does not assert. It is a claim about ' +
          'entailment, not coercion.',
      },
      {
        id: 'b',
        text: 'That the past plus the laws of nature entail exactly one future.',
        explanation:
          'Correct. Nothing forces you — but given the prior state and the laws, nothing else ' +
          'could have happened.',
      },
      {
        id: 'c',
        text: 'That the future is predictable in practice.',
        explanation:
          'Predictability is epistemic. A deterministic system can be entirely unpredictable ' +
          'to us.',
      },
      {
        id: 'd',
        text: 'That events happen regardless of what we do.',
        explanation:
          'That is fatalism, a distinct and much weaker position — determinism has your ' +
          'deliberation inside the causal chain.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-13-e2',
    type: 'choice',
    conceptIds: ['determinism', 'free-will'],
    prompt: 'Which premise of the consequence argument do compatibilists reject?',
    options: [
      {
        id: 'a',
        text: 'That acts follow from the past plus the laws.',
        explanation:
          'Compatibilists typically grant this — most are determinists.',
      },
      {
        id: 'b',
        text: 'That freedom requires the power to do otherwise.',
        explanation:
          'Correct. They hold freedom is about the source of an action rather than about ' +
          'available alternatives.',
      },
      {
        id: 'c',
        text: 'That we have no power over the past.',
        explanation:
          'Nobody in the debate disputes that the past is fixed and beyond our control. It is common ' +
          'ground, so rejecting it is not an option any position takes.',
      },
      {
        id: 'd',
        text: 'That determinism is true.',
        explanation:
          'Denying determinism is the libertarian route, not the compatibilist one.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-13-e3',
    type: 'choice',
    conceptIds: ['determinism'],
    prompt: 'What distinguishes determinism from fatalism?',
    options: [
      {
        id: 'a',
        text: 'Nothing — they are the same view.',
        explanation:
          'They differ sharply, and conflating them produces the standard misunderstanding of ' +
          'determinism.',
      },
      {
        id: 'b',
        text: 'Determinism has your deliberation inside the causal chain; fatalism says the outcome arrives regardless.',
        explanation:
          'Correct. On determinism your choosing is exactly what brings the outcome about.',
      },
      {
        id: 'c',
        text: 'Fatalism is scientific and determinism is not.',
        explanation:
          'The reverse, if anything. Fatalism has no scientific standing whatever.',
      },
      {
        id: 'd',
        text: 'Determinism applies only to physics.',
        explanation:
          'It is a fully general thesis about how states of the world follow one another.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-13-e4',
    type: 'choice',
    conceptIds: ['free-will'],
    prompt: 'Why do disputes about free will often turn on definitions?',
    options: [
      {
        id: 'a',
        text: 'Because philosophers enjoy defining things.',
        explanation:
          'Flippant, and it misses that the definitional question here does real work.',
      },
      {
        id: 'b',
        text: 'Because whether determinism threatens freedom depends on what freedom is taken to require.',
        explanation:
          'Correct. Require alternative possibilities and determinism is fatal; require only ' +
          'uncoerced action from your own reasons and it is not.',
      },
      {
        id: 'c',
        text: 'Because free will cannot be defined.',
        explanation:
          'Several precise definitions are on offer. Choosing between them is the hard part.',
      },
      {
        id: 'd',
        text: 'Because determinism is undefined.',
        explanation:
          'Determinism is defined quite precisely, which is why the dispute concentrates on ' +
          'the other term.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- meta-14 */
  {
    id: 'meta-14-e1',
    type: 'choice',
    conceptIds: ['compatibilism'],
    prompt: 'What is the standard objection to compatibilism?',
    options: [
      {
        id: 'a',
        text: 'That it denies determinism.',
        explanation:
          'It accepts determinism. That acceptance is what makes it compatibilism.',
      },
      {
        id: 'b',
        text: 'That it changes the subject by redefining freedom into something less demanding.',
        explanation:
          'Correct. Critics say the ability to do otherwise is what people were worried about ' +
          'losing, and compatibilism sets it aside.',
      },
      {
        id: 'c',
        text: 'That it requires quantum indeterminacy.',
        explanation:
          'It requires nothing of the sort — that is a libertarian move.',
      },
      {
        id: 'd',
        text: 'That it makes moral responsibility impossible.',
        explanation:
          'Preserving moral responsibility is one of its main motivations.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-14-e2',
    type: 'choice',
    conceptIds: ['libertarian-free-will'],
    prompt: 'What is the luck problem for libertarianism?',
    options: [
      {
        id: 'a',
        text: 'That free actions are unlikely.',
        explanation:
          'How often free actions occur is beside the point. The luck problem concerns whether an ' +
          'undetermined action is under the agent\u2019s control at all.',
      },
      {
        id: 'b',
        text: 'If an action is not determined by your reasons, its being random does not make it more yours.',
        explanation:
          'Correct. Undetermined actions look arbitrary rather than free, which is a problem ' +
          'for a view that requires indeterminism.',
      },
      {
        id: 'c',
        text: 'That libertarians must deny the laws of nature.',
        explanation:
          'They deny only that the laws are deterministic, which is compatible with there ' +
          'being laws.',
      },
      {
        id: 'd',
        text: 'That luck cannot be defined.',
        explanation:
          'The problem is substantive rather than terminological. Even with luck precisely defined, ' +
          'an undetermined action still looks arbitrary rather than free.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-14-e3',
    type: 'choice',
    conceptIds: ['hard-determinism'],
    prompt: 'What must the hard determinist explain?',
    options: [
      {
        id: 'a',
        text: 'Why determinism is true.',
        explanation:
          'A shared burden — everyone taking a view on determinism owes an argument.',
      },
      {
        id: 'b',
        text: 'How moral responsibility works without the freedom being denied.',
        explanation:
          'Correct. Praise, blame and punishment all appear to presuppose exactly what the ' +
          'position rejects.',
      },
      {
        id: 'c',
        text: 'How quantum mechanics restores freedom.',
        explanation:
          'Hard determinists are not trying to restore freedom, so this is no part of their ' +
          'burden.',
      },
      {
        id: 'd',
        text: 'Why compatibilism is popular.',
        explanation:
          'A sociological question rather than a philosophical obligation.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-14-e4',
    type: 'choice',
    conceptIds: ['libertarian-free-will', 'determinism'],
    prompt: 'Does quantum indeterminacy solve the free will problem?',
    options: [
      {
        id: 'a',
        text: 'Yes — indeterminacy is exactly what free will requires.',
        explanation:
          'Indeterminism may be necessary for libertarian freedom, but it is nowhere near ' +
          'sufficient. Randomness is not control.',
      },
      {
        id: 'b',
        text: 'No — randomness is not control, so it faces the luck problem rather than solving it.',
        explanation:
          'Correct. An action produced by a quantum fluctuation is not determined by your ' +
          'reasons, which makes it arbitrary rather than free.',
      },
      {
        id: 'c',
        text: 'Yes, because it refutes determinism.',
        explanation:
          'Even granting that, refuting determinism only clears space for freedom — it does ' +
          'not supply an account of agency.',
      },
      {
        id: 'd',
        text: 'No, because quantum mechanics is deterministic.',
        explanation:
          'Interpretations differ on this, and the objection does not depend on settling it.',
      },
    ],
    correctId: 'b',
  },
]
