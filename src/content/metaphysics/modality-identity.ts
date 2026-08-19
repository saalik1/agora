import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Metaphysics Units 1–3.
 *
 * Unit 1 builds the modal vocabulary the cosmological arguments run on. Unit 2
 * covers existence and universals. Unit 3 handles identity and persistence.
 */

export const metaModalityUnit: Unit = {
  id: 'meta-u1',
  subjectId: 'metaphysics',
  title: 'Modality',
  blurb: 'Necessity, possibility and contingency — and the principle that everything has an explanation.',
  lessonIds: ['meta-1', 'meta-2', 'meta-3'],
}

export const metaExistenceUnit: Unit = {
  id: 'meta-u2',
  subjectId: 'metaphysics',
  title: 'Existence and Universals',
  blurb: 'What it takes to be a thing, and whether shared properties are things in their own right.',
  lessonIds: ['meta-4', 'meta-5', 'meta-6'],
}

export const metaIdentityUnit: Unit = {
  id: 'meta-u3',
  subjectId: 'metaphysics',
  title: 'Identity and Persistence',
  blurb: 'Sameness, and what makes a thing now the same thing as before.',
  lessonIds: ['meta-7', 'meta-8', 'meta-9'],
}

export const metaLessonsA: Lesson[] = [
  {
    id: 'meta-1',
    unitId: 'meta-u1',
    title: 'Necessary, possible, impossible',
    summary: 'Three modal statuses, and why the kind of possibility matters.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['necessity', 'possibility'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Some claims are not merely true but could not have been false. Others are false but ' +
          'might have been true. Metaphysics needs vocabulary for this, because a great many ' +
          'arguments turn on it — including every version of the cosmological argument.',
      },
      {
        kind: 'definition',
        term: 'Necessary',
        body: 'True however things could have gone. Its denial entails a contradiction.',
      },
      {
        kind: 'definition',
        term: 'Possible',
        body: 'True in at least one way things could have gone. Its supposition entails no contradiction.',
      },
      {
        kind: 'explanation',
        heading: 'Which possibility?',
        body:
          'Travelling faster than light is physically impossible but arguably logically ' +
          'possible: supposing it involves no contradiction, only a violation of actual laws. ' +
          'Arguments equivocate between these senses constantly, which is the fallacy from ' +
          'Logic lesson 16 operating on a technical term.',
      },
      {
        kind: 'misconception',
        claim: 'If we cannot imagine it, it is impossible.',
        correction:
          'Imagination is a poor guide. Nobody can visualise a chiliagon distinctly, yet ' +
          'thousand-sided figures are perfectly possible. Conversely, plenty of imaginable ' +
          'scenarios turn out to be incoherent on inspection.',
      },
    ],
    exerciseIds: ['meta-1-e1', 'meta-1-e2', 'meta-1-e3', 'meta-1-e4'],
  },
  {
    id: 'meta-2',
    unitId: 'meta-u1',
    title: 'Contingency and possible worlds',
    summary: 'Things that exist but need not have — and a device for reasoning about them.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['contingency', 'possible-worlds', 'necessity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'You exist, but you might not have. So might the chair, the planet, and — the ' +
          'interesting question — the universe. A contingent thing is one whose non-existence ' +
          'involves no contradiction.',
      },
      {
        kind: 'definition',
        term: 'Possible world',
        body:
          'A complete way things could have been. Necessary means true in all of them; ' +
          'contingent means true in some and false in others.',
      },
      {
        kind: 'explanation',
        heading: 'Why the device helps',
        body:
          'Possible worlds turn modal claims into quantified ones, which makes them easier to ' +
          'reason about precisely. Whether such worlds genuinely exist, or are merely a useful ' +
          'notation, is a live dispute — but the notation is usable either way.',
      },
      {
        kind: 'misconception',
        claim: 'A necessary being is one that exists in our world very robustly.',
        correction:
          'Necessity is not durability. A being that existed for all eternity in this world ' +
          'but was absent from some other possible world would still be contingent. Necessary ' +
          'existence means existing in every possible world.',
      },
    ],
    exerciseIds: ['meta-2-e1', 'meta-2-e2', 'meta-2-e3', 'meta-2-e4'],
  },
  {
    id: 'meta-3',
    unitId: 'meta-u1',
    title: 'The Principle of Sufficient Reason',
    summary: 'Everything has an explanation — and what follows if it does.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['psr', 'contingency', 'infinite-regress'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The PSR says there are no brute facts: whatever exists has either a cause or an ' +
          'explanation in its own nature. It is one of the most consequential principles in ' +
          'philosophy, because accepting it drives you towards a necessary being.',
      },
      {
        kind: 'argument',
        ref: 'contingency-argument',
        note:
          'The PSR doing its work. Expand each premise to see where the argument is attacked — ' +
          'P2 in particular faces the composition fallacy from Logic lesson 17.',
      },
      {
        kind: 'argument',
        ref: 'psr-defence',
        note: 'The awkward question: what explains the PSR itself?',
      },
      {
        kind: 'misconception',
        claim: 'The PSR is obviously true, since we always look for explanations.',
        correction:
          'That we seek explanations shows the principle is useful, not that it holds ' +
          'universally. Quantum mechanics is sometimes read as supplying genuinely ' +
          'unexplained events, and in any case a methodological habit is weak evidence for a ' +
          'metaphysical claim.',
      },
    ],
    exerciseIds: ['meta-3-e1', 'meta-3-e2', 'meta-3-e3', 'meta-3-e4'],
  },

  {
    id: 'meta-4',
    unitId: 'meta-u2',
    title: 'Essence and existence',
    summary: 'What a thing must be, and whether existing is a property at all.',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['essence', 'existence-property'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Some properties a thing could lose and survive; others it could not. Your height is ' +
          'accidental; being human is plausibly essential. The distinction is ancient and ' +
          'still contested — critics argue essence depends on how we choose to describe things.',
      },
      {
        kind: 'definition',
        term: 'Essential property',
        body: 'One a thing cannot lose without ceasing to exist.',
      },
      {
        kind: 'explanation',
        heading: 'Is existence a property?',
        body:
          'Kant argued it is not. Saying a thing exists adds nothing to its description; it ' +
          'says the description is instantiated. A hundred real coins contain no more in their ' +
          'concept than a hundred imagined ones. This objection is the standard reply to the ' +
          'ontological argument, which treats existence as a perfection.',
      },
      {
        kind: 'misconception',
        claim: 'Essential properties are just the important ones.',
        correction:
          'Importance is about us; essence is about the thing. Your name matters enormously ' +
          'and is plainly accidental — you would survive changing it. The test is survival, ' +
          'not significance.',
      },
    ],
    exerciseIds: ['meta-4-e1', 'meta-4-e2', 'meta-4-e3', 'meta-4-e4'],
  },
  {
    id: 'meta-5',
    unitId: 'meta-u2',
    title: 'Universals and particulars',
    summary: 'Two red apples share something. What?',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['universals', 'particulars'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Two red apples appear to have something in common, and the resemblance holds ' +
          'whether or not anyone notices. But what is this shared item? It cannot be an ' +
          'ordinary object, since ordinary objects occupy one place at a time.',
      },
      {
        kind: 'argument',
        ref: 'one-over-many',
        note:
          'The classical argument for universals. Expand P2 for the nominalist reply and the ' +
          'regress it invites.',
      },
      {
        kind: 'explanation',
        heading: 'The puzzling feature',
        body:
          'If redness is a genuine entity, it is wholly present in every red thing at once — a ' +
          'property no particular has. That multiple location is either the distinctive nature ' +
          'of universals or a reason to doubt they exist, depending on which side you take.',
      },
      {
        kind: 'misconception',
        claim: 'Universals are just words we use for groups of things.',
        correction:
          'That is nominalism, a substantive position with arguments behind it — not an ' +
          'obvious truth. The realist points out that the apples resembled one another before ' +
          'anyone had a word for red, and that the resemblance needs accounting for.',
      },
    ],
    exerciseIds: ['meta-5-e1', 'meta-5-e2', 'meta-5-e3', 'meta-5-e4'],
  },
  {
    id: 'meta-6',
    unitId: 'meta-u2',
    title: 'Realism, nominalism, conceptualism',
    summary: 'Three answers, and what each struggles to explain.',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['realism-universals', 'nominalism', 'conceptualism'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Three positions on what shared properties amount to. Each handles part of the ' +
          'problem well and leaves a hard question unanswered — which is why the dispute has ' +
          'run for two and a half thousand years.',
      },
      {
        kind: 'definition',
        term: 'Realism',
        body: 'Universals exist independently. Platonic versions place them outside space and time.',
      },
      {
        kind: 'definition',
        term: 'Nominalism',
        body: 'Only particulars exist. Resemblance is primitive, not a shared entity.',
      },
      {
        kind: 'definition',
        term: 'Conceptualism',
        body: 'Universals exist as concepts in minds rather than as features of the world.',
      },
      {
        kind: 'explanation',
        heading: 'One hard question each',
        body:
          'Realism: how can one entity be wholly present in many places? Nominalism: what is ' +
          'resemblance, if not itself something shared by many pairs? Conceptualism: things ' +
          'resembled one another before minds existed — what accounted for it then?',
      },
      {
        kind: 'misconception',
        claim: 'Nominalism is the simple, common-sense view.',
        correction:
          'It is ontologically simpler, admitting fewer kinds of thing. But it takes on a ' +
          'harder explanatory burden, since resemblance must be accepted as unanalysable ' +
          'rather than explained. Simplicity in one dimension is bought with complexity in ' +
          'another.',
      },
    ],
    exerciseIds: ['meta-6-e1', 'meta-6-e2', 'meta-6-e3', 'meta-6-e4'],
  },

  {
    id: 'meta-7',
    unitId: 'meta-u3',
    title: 'Identity',
    summary: 'Two senses of "same", and the principle connecting them.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['identity', 'indiscernibles'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Two coins off the same press can be exactly alike while remaining two coins. That ' +
          'is qualitative identity. Numerical identity is the relation each thing bears only ' +
          'to itself. Confusing them produces a great deal of bad philosophy.',
      },
      {
        kind: 'definition',
        term: 'Identity of indiscernibles',
        body: 'If two things share every property, they are numerically one thing.',
      },
      {
        kind: 'argument',
        ref: 'two-spheres',
        note:
          'The standard counterexample. Expand P2 for the attempted rescue via relational ' +
          'properties, and why it struggles.',
      },
      {
        kind: 'misconception',
        claim: 'Identical twins are a counterexample to the identity of indiscernibles.',
        correction:
          'They differ in countless properties — position, history, fingerprints. The ' +
          'principle needs a case of genuinely complete sharing, which is why the argument ' +
          'requires an artificial universe rather than an everyday example.',
      },
    ],
    exerciseIds: ['meta-7-e1', 'meta-7-e2', 'meta-7-e3', 'meta-7-e4'],
  },
  {
    id: 'meta-8',
    unitId: 'meta-u3',
    title: 'The Ship of Theseus',
    summary: 'Replace every plank. Then rebuild the originals.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['ship-of-theseus', 'identity-over-time', 'identity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Everything you are made of has been replaced since childhood, yet you count as the ' +
          'same person. Material continuity cannot be what persistence consists in. The Ship ' +
          'of Theseus makes the difficulty vivid.',
      },
      {
        kind: 'argument',
        ref: 'ship-of-theseus-arg',
        note:
          'The reassembly is what turns a puzzle into a paradox: two ships now have a claim, ' +
          'and they cannot both be the original, since they are not identical to each other.',
      },
      {
        kind: 'explanation',
        heading: 'Why "it depends what you mean" is not enough',
        body:
          'It is tempting to say the question is merely verbal. But identity is transitive — ' +
          'if each ship is the original, they are each other, which they plainly are not. The ' +
          'puzzle forces a substantive choice rather than a terminological one.',
      },
      {
        kind: 'misconception',
        claim: 'The repaired ship is obviously the original, since it never stopped existing.',
        correction:
          'It has the better claim on continuity of function and location. But the reassembled ' +
          'ship has the better claim on original material — and picking a winner requires ' +
          'defending a criterion, not just an intuition.',
      },
    ],
    exerciseIds: ['meta-8-e1', 'meta-8-e2', 'meta-8-e3', 'meta-8-e4'],
  },
  {
    id: 'meta-9',
    unitId: 'meta-u3',
    title: 'Enduring and perduring',
    summary: 'Are you wholly here now, or spread across time?',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['endurantism', 'perdurantism', 'identity-over-time'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Two accounts of how objects exist through time. On one, you are entirely present at ' +
          'each moment. On the other, you extend through time as you extend through space, ' +
          'with a different part at each moment.',
      },
      {
        kind: 'definition',
        term: 'Endurantism',
        body: 'Objects are wholly present at every moment they exist.',
      },
      {
        kind: 'definition',
        term: 'Perdurantism',
        body: 'Objects have temporal parts. What is present now is one slice of a longer whole.',
      },
      {
        kind: 'explanation',
        heading: 'The problem of change',
        body:
          'You were bent yesterday and are straight today. If you are wholly present at each ' +
          'moment, one thing has incompatible properties. Perdurantism dissolves this — ' +
          'different temporal parts differ, as different spatial parts do. The cost is that no ' +
          'part of you is ever wholly you.',
      },
      {
        kind: 'misconception',
        claim: 'Perdurantism means you are a different person each moment.',
        correction:
          'It means each moment contains a temporal part of one extended person, much as your ' +
          'hand is a spatial part of one body. The whole is a single individual — it is simply ' +
          'four-dimensional rather than three.',
      },
    ],
    exerciseIds: ['meta-9-e1', 'meta-9-e2', 'meta-9-e3', 'meta-9-e4'],
  },
]

export const metaExercisesA: Exercise[] = [
  /* ----------------------------------------------------------------- meta-1 */
  {
    id: 'meta-1-e1',
    type: 'choice',
    conceptIds: ['necessity', 'possibility'],
    prompt: 'Which claim is necessarily true?',
    options: [
      {
        id: 'a',
        text: 'Water is composed of H₂O.',
        explanation:
          'Many philosophers argue this is necessary, but it took empirical discovery to ' +
          'establish — so it is at best a necessary a posteriori truth, not the clean case here.',
      },
      {
        id: 'b',
        text: 'Every bachelor is unmarried.',
        explanation:
          'Correct. Its denial is contradictory, so there is no possible way things could have ' +
          'gone that makes it false.',
      },
      {
        id: 'c',
        text: 'The Earth orbits the Sun.',
        explanation:
          'True, but contingent. A differently arranged solar system involves no ' +
          'contradiction.',
      },
      {
        id: 'd',
        text: 'Nothing travels faster than light.',
        explanation:
          'A law of nature, so physically necessary — but its denial entails no contradiction, ' +
          'making it contingent in the logical sense.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-1-e2',
    type: 'choice',
    conceptIds: ['possibility'],
    prompt: 'Why does the kind of possibility matter?',
    options: [
      {
        id: 'a',
        text: 'Because logical possibility is easier to establish.',
        explanation:
          'Often true, but not what makes the distinction important. Ease of establishing something ' +
          'is a practical matter; equivocating between senses is a logical error.',
      },
      {
        id: 'b',
        text: 'Because an argument can equivocate, using one sense in one premise and another elsewhere.',
        explanation:
          'Correct. This is the equivocation fallacy from Logic lesson 16 operating on a ' +
          'technical term, and it is easy to miss.',
      },
      {
        id: 'c',
        text: 'Because physical possibility is not real possibility.',
        explanation:
          'Both are genuine notions. The point is keeping them apart, not ranking them.',
      },
      {
        id: 'd',
        text: 'Because scientists and philosophers disagree.',
        explanation:
          'Sociology rather than logic. The distinction would matter even with total ' +
          'agreement.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-1-e3',
    type: 'choice',
    conceptIds: ['possibility'],
    prompt: 'Why is imaginability a poor test of possibility?',
    options: [
      {
        id: 'a',
        text: 'Because nothing can really be imagined.',
        explanation:
          'Too strong, and false. Imagination works — it is simply not a reliable guide to ' +
          'modal facts.',
      },
      {
        id: 'b',
        text: 'Because some possible things resist imagining, and some imaginable things are incoherent.',
        explanation:
          'Correct. A thousand-sided figure is possible but not distinctly imaginable, while ' +
          'plenty of vividly imaginable scenarios turn out contradictory on inspection.',
      },
      {
        id: 'c',
        text: 'Because imagination varies between people.',
        explanation:
          'True but secondary. Even a uniform imagination would still be an unreliable guide.',
      },
      {
        id: 'd',
        text: 'Because possibility is a scientific question.',
        explanation:
          'Logical possibility is not settled by science. Science bears on physical ' +
          'possibility only.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-1-e4',
    type: 'sort',
    conceptIds: ['necessity', 'possibility', 'premise', 'conclusion'],
    prompt: 'Label each statement in this modal argument.',
    statements: [
      { id: 's1', text: 'Anything whose denial is contradictory is necessary.', role: 'premise' },
      { id: 's2', text: 'The denial of "all squares have four sides" is contradictory.', role: 'premise' },
      { id: 's3', text: '"All squares have four sides" is necessary.', role: 'conclusion' },
      { id: 's4', text: 'Euclid worked in Alexandria.', role: 'irrelevant' },
    ],
    explanation:
      'A general criterion plus a particular case — modus ponens again. The biographical note ' +
      'supports nothing.',
  },

  /* ----------------------------------------------------------------- meta-2 */
  {
    id: 'meta-2-e1',
    type: 'choice',
    conceptIds: ['contingency'],
    prompt: 'What makes something contingent?',
    options: [
      {
        id: 'a',
        text: 'That it will eventually cease to exist.',
        explanation:
          'Duration is irrelevant. Something could last forever and still be contingent, if ' +
          'its non-existence involves no contradiction.',
      },
      {
        id: 'b',
        text: 'That it exists but its non-existence involves no contradiction.',
        explanation:
          'Correct. Contingency is a modal status, not a claim about lifespan or fragility.',
      },
      {
        id: 'c',
        text: 'That it was caused by something else.',
        explanation:
          'Having a cause and being contingent usually go together, but the definition is ' +
          'about possibility rather than causal history.',
      },
      {
        id: 'd',
        text: 'That it is physical.',
        explanation:
          'Abstract objects may be contingent or necessary, and the question is independent of ' +
          'whether a thing is material.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-2-e2',
    type: 'choice',
    conceptIds: ['possible-worlds', 'necessity'],
    prompt: 'In possible-worlds language, what does "necessary" mean?',
    options: [
      {
        id: 'a',
        text: 'True in this world with certainty.',
        explanation:
          'That is certainty, an epistemic notion. Necessity concerns how things could have ' +
          'been, not how confident anyone is.',
      },
      {
        id: 'b',
        text: 'True in every possible world.',
        explanation:
          'Correct. Possible in at least one, contingent in some but not all, necessary in ' +
          'all.',
      },
      {
        id: 'c',
        text: 'True in most possible worlds.',
        explanation:
          'That would make necessity a matter of degree. Something true in most worlds but not ' +
          'all is contingent.',
      },
      {
        id: 'd',
        text: 'True in the actual world at all times.',
        explanation:
          'That is everlasting existence, not necessity. A being could exist at all times in ' +
          'this world and be absent from another.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-2-e3',
    type: 'choice',
    conceptIds: ['contingency', 'necessity'],
    prompt: 'Why is a necessary being not simply a very long-lasting one?',
    options: [
      {
        id: 'a',
        text: 'Because necessity concerns every possible world, not duration in this one.',
        explanation:
          'Correct. An eternal being that fails to exist in some possible world is contingent, ' +
          'however long it lasts here.',
      },
      {
        id: 'b',
        text: 'Because nothing lasts forever.',
        explanation:
          'An empirical guess, and beside the point. Even if something did last forever, that ' +
          'would not make it necessary.',
      },
      {
        id: 'c',
        text: 'Because necessary beings are immaterial.',
        explanation:
          'Immateriality is a separate claim. Necessity is defined modally, not by what a ' +
          'thing is made of.',
      },
      {
        id: 'd',
        text: 'Because duration cannot be measured.',
        explanation:
          'It can be. Measurability has nothing to do with the distinction.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'meta-2-e4',
    type: 'choice',
    conceptIds: ['possible-worlds'],
    prompt: 'What is the point of talking about possible worlds?',
    options: [
      {
        id: 'a',
        text: 'To assert that other universes exist.',
        explanation:
          'Some philosophers do hold that, but the device is usable while remaining neutral on ' +
          'whether such worlds are real.',
      },
      {
        id: 'b',
        text: 'To turn modal claims into quantified ones that can be reasoned about precisely.',
        explanation:
          'Correct. "Necessarily P" becomes "P in all worlds", which is far easier to handle ' +
          'in argument.',
      },
      {
        id: 'c',
        text: 'To show that anything is possible.',
        explanation:
          'The framework is neutral on what is possible. Impossible claims hold in no world at ' +
          'all.',
      },
      {
        id: 'd',
        text: 'To replace logic with imagination.',
        explanation:
          'The reverse — the device exists to make modal reasoning more rigorous than appeals ' +
          'to what one can picture.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- meta-3 */
  {
    id: 'meta-3-e1',
    type: 'choice',
    conceptIds: ['psr'],
    prompt: 'What does the Principle of Sufficient Reason claim?',
    options: [
      {
        id: 'a',
        text: 'Everything has a cause.',
        explanation:
          'Close but not exact. The PSR allows explanation in a thing\u2019s own nature, which is ' +
          'not a cause — and that distinction is what lets a necessary being be ' +
          'self-explanatory.',
      },
      {
        id: 'b',
        text: 'Everything that exists has an explanation, either in a cause or in its own nature.',
        explanation:
          'Correct, and the second disjunct matters: without it, the principle would demand a ' +
          'cause even of a necessary being.',
      },
      {
        id: 'c',
        text: 'Every event is determined.',
        explanation:
          'That is determinism, a related but distinct claim about how the future follows from ' +
          'the past.',
      },
      {
        id: 'd',
        text: 'Every question has an answer we can find.',
        explanation:
          'The PSR is about explanations existing, not about our capacity to discover them.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-3-e2',
    type: 'choice',
    conceptIds: ['psr', 'composition-division'],
    prompt: 'Which premise of the contingency argument faces the composition objection?',
    options: [
      {
        id: 'a',
        text: 'That everything contingent has an explanation.',
        explanation:
          'This is the PSR itself. It faces objections, but not the part-to-whole one.',
      },
      {
        id: 'b',
        text: 'That the totality of contingent things is itself contingent.',
        explanation:
          'Correct. Inferring from each part being contingent to the whole being contingent is ' +
          'exactly the pattern from Logic lesson 17.',
      },
      {
        id: 'c',
        text: 'That the explanation cannot itself be contingent.',
        explanation:
          'This appeals to regress rather than to any part-whole inference.',
      },
      {
        id: 'd',
        text: 'The conclusion.',
        explanation:
          'A conclusion cannot commit a fallacy on its own. Fallacies live in the inferences.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-3-e3',
    type: 'choice',
    conceptIds: ['psr', 'composition-division'],
    prompt: 'How might a defender answer the composition objection?',
    options: [
      {
        id: 'a',
        text: 'By noting that composition is always fallacious.',
        explanation:
          'It is not. Logic lesson 17 established that some properties transfer perfectly ' +
          'well — the question is always whether this one does.',
      },
      {
        id: 'b',
        text: 'By arguing contingency is a property that does transfer, unlike weight.',
        explanation:
          'Correct. If each member might not have existed, arguably the collection might not ' +
          'have either — though critics deny this and the dispute is live.',
      },
      {
        id: 'c',
        text: 'By denying the whole exists.',
        explanation:
          'That would undercut the argument, which needs the totality to have an explanation.',
      },
      {
        id: 'd',
        text: 'By appealing to the PSR again.',
        explanation:
          'Circular. The PSR is what the premise is meant to be applied to, not what defends ' +
          'its scope.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-3-e4',
    type: 'choice',
    conceptIds: ['psr'],
    prompt: 'What is the self-referential problem for the PSR?',
    options: [
      {
        id: 'a',
        text: 'That it cannot be stated coherently.',
        explanation:
          'It states perfectly clearly. The difficulty concerns its justification, not its ' +
          'coherence.',
      },
      {
        id: 'b',
        text: 'If it is brute it refutes itself, and if it is explained the explanation seems to presuppose it.',
        explanation:
          'Correct — a dilemma with an uncomfortable horn either way, though defenders reply ' +
          'that necessary truths may be self-explanatory.',
      },
      {
        id: 'c',
        text: 'That it contradicts the laws of physics.',
        explanation:
          'Some read quantum mechanics as pressure on the PSR, but that is an empirical ' +
          'challenge, not the self-referential one.',
      },
      {
        id: 'd',
        text: 'That nobody believes it.',
        explanation:
          'Many philosophers accept the PSR, and in any case how many believe something has no ' +
          'bearing on whether it can be defended without circularity.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- meta-4 */
  {
    id: 'meta-4-e1',
    type: 'choice',
    conceptIds: ['essence'],
    prompt: 'Which property is plausibly essential to a triangle?',
    options: [
      {
        id: 'a',
        text: 'Being drawn in black ink.',
        explanation:
          'Plainly accidental — it survives being drawn in any colour, or not drawn at all.',
      },
      {
        id: 'b',
        text: 'Having three sides.',
        explanation:
          'Correct. Lose that and it is no longer a triangle, which is exactly the test for ' +
          'essence.',
      },
      {
        id: 'c',
        text: 'Being on a page.',
        explanation:
          'Accidental. Triangles exist in three dimensions, in software, and as abstract ' +
          'objects.',
      },
      {
        id: 'd',
        text: 'Being studied in school.',
        explanation:
          'A fact about us rather than about triangles, and it would leave the shape unchanged ' +
          'if it stopped being true.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-4-e2',
    type: 'choice',
    conceptIds: ['existence-property'],
    prompt: "What is Kant's objection to treating existence as a property?",
    options: [
      {
        id: 'a',
        text: 'That existence cannot be observed.',
        explanation:
          'An epistemological point, and not his. The objection concerns what "exists" ' +
          'contributes to a description.',
      },
      {
        id: 'b',
        text: 'That saying a thing exists adds nothing to its description — it says the description is instantiated.',
        explanation:
          'Correct. A hundred real coins contain nothing more in their concept than a hundred ' +
          'imagined ones.',
      },
      {
        id: 'c',
        text: 'That only physical things exist.',
        explanation:
          'A different claim entirely, and not Kant\u2019s. His objection concerns what the word ' +
          '"exists" contributes to a description, not what kinds of thing there are.',
      },
      {
        id: 'd',
        text: 'That existence is a matter of degree.',
        explanation:
          'Kant does not say this, and the objection does not require it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-4-e3',
    type: 'choice',
    conceptIds: ['existence-property'],
    prompt: 'Which argument does the Kantian objection target most directly?',
    options: [
      {
        id: 'a',
        text: 'The contingency argument.',
        explanation:
          'That argument turns on explanation and modality, not on existence being a ' +
          'perfection.',
      },
      {
        id: 'b',
        text: 'The ontological argument.',
        explanation:
          'Correct. It defines a greatest conceivable being and treats existing as a ' +
          'perfection such a being must possess — exactly what Kant denies is available.',
      },
      {
        id: 'c',
        text: 'The Ship of Theseus.',
        explanation:
          'A puzzle about persistence, with no bearing on whether existence is a predicate.',
      },
      {
        id: 'd',
        text: 'The consequence argument.',
        explanation:
          'That argument concerns free will and determinism. It makes no use of existence as a ' +
          'property, so the Kantian objection has no purchase on it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-4-e4',
    type: 'choice',
    conceptIds: ['essence'],
    prompt: 'Why is "essential" not the same as "important"?',
    options: [
      {
        id: 'a',
        text: 'Because importance is about us, while essence is about whether the thing survives losing it.',
        explanation:
          'Correct. Your name matters enormously and is plainly accidental — you would survive ' +
          'changing it.',
      },
      {
        id: 'b',
        text: 'Because nothing is really important.',
        explanation:
          'A value claim with no bearing on the metaphysical distinction.',
      },
      {
        id: 'c',
        text: 'Because essential properties are always hidden.',
        explanation:
          'Many essential properties are entirely obvious \u2014 having three sides is not hidden in any ' +
          'way. Essence is about survival under change, not about being difficult to detect.',
      },
      {
        id: 'd',
        text: 'Because importance can be measured.',
        explanation:
          'Measurability is irrelevant. The test for essence is survival.',
      },
    ],
    correctId: 'a',
  },

  /* ----------------------------------------------------------------- meta-5 */
  {
    id: 'meta-5-e1',
    type: 'choice',
    conceptIds: ['universals', 'particulars'],
    prompt: 'What distinguishes a universal from a particular?',
    options: [
      {
        id: 'a',
        text: 'Universals are abstract and particulars are concrete.',
        explanation:
          'A common gloss, but Aristotelian realists locate universals in their concrete ' +
          'instances, so this is not the defining difference.',
      },
      {
        id: 'b',
        text: 'A universal can be wholly present in many places at once; a particular cannot.',
        explanation:
          'Correct, and it is the feature that makes universals both useful and puzzling.',
      },
      {
        id: 'c',
        text: 'Universals are words and particulars are things.',
        explanation:
          'That is nominalism stated as a definition, which begs the question against realism.',
      },
      {
        id: 'd',
        text: 'Universals are mental and particulars are physical.',
        explanation:
          'That is conceptualism, one position among three rather than the general ' +
          'distinction.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-5-e2',
    type: 'choice',
    conceptIds: ['universals'],
    prompt: 'What is the One Over Many argument trying to establish?',
    options: [
      {
        id: 'a',
        text: 'That there are many red things.',
        explanation:
          'Not in dispute. The argument starts from that and asks what it involves.',
      },
      {
        id: 'b',
        text: 'That what many things share cannot itself be a particular.',
        explanation:
          'Correct. Since particulars cannot be shared, the shared item must be something ' +
          'else — a universal.',
      },
      {
        id: 'c',
        text: 'That redness is a word.',
        explanation:
          'That is the nominalist conclusion the argument is aimed against.',
      },
      {
        id: 'd',
        text: 'That resemblance is an illusion.',
        explanation:
          'The argument takes resemblance to be perfectly genuine — that is its starting ' +
          'point.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-5-e3',
    type: 'choice',
    conceptIds: ['universals', 'nominalism'],
    prompt: 'What regress threatens the nominalist reply?',
    options: [
      {
        id: 'a',
        text: 'That each red thing needs a further red thing to explain it.',
        explanation:
          'Not the shape of the problem. The regress concerns resemblance, not further ' +
          'instances.',
      },
      {
        id: 'b',
        text: 'That resemblance is shared by many pairs, so it looks like a universal itself.',
        explanation:
          'Correct. Replacing a shared property with a shared relation appears to reintroduce ' +
          'exactly what was denied.',
      },
      {
        id: 'c',
        text: 'That particulars need particulars to exist.',
        explanation:
          'Neither side claims this. Nominalists are perfectly happy for particulars to exist ' +
          'independently — their difficulty is with what grounds resemblance between them.',
      },
      {
        id: 'd',
        text: 'That words need definitions.',
        explanation:
          'A point about language rather than about what grounds resemblance.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-5-e4',
    type: 'sort',
    conceptIds: ['universals', 'premise', 'conclusion'],
    prompt: 'Label each statement in the One Over Many argument.',
    statements: [
      { id: 's1', text: 'Two red apples genuinely have something in common.', role: 'premise' },
      { id: 's2', text: 'What is shared cannot be a particular, since particulars are not shared.', role: 'premise' },
      { id: 's3', text: 'There exist universals.', role: 'conclusion' },
      { id: 's4', text: 'Apples are grown commercially in Kent.', role: 'irrelevant' },
    ],
    explanation:
      'The two premises together force the conclusion by elimination. Where apples are grown ' +
      'plays no part in the inference.',
  },

  /* ----------------------------------------------------------------- meta-6 */
  {
    id: 'meta-6-e1',
    type: 'choice',
    conceptIds: ['realism-universals'],
    prompt: 'What is the hard question for realism about universals?',
    options: [
      {
        id: 'a',
        text: 'How one entity can be wholly present in many places at once.',
        explanation:
          'Correct. Nothing else behaves this way, so the realist owes an account of a very ' +
          'unusual mode of existence.',
      },
      {
        id: 'b',
        text: 'Why things resemble one another.',
        explanation:
          'Realism answers this comfortably — shared universals explain resemblance. It is the ' +
          'nominalist who struggles here.',
      },
      {
        id: 'c',
        text: 'Whether words have meanings.',
        explanation:
          'A question in philosophy of language, and one that arises whichever position you take. ' +
          'It is not the specific pressure point on realism.',
      },
      {
        id: 'd',
        text: 'How minds grasp concepts.',
        explanation:
          'An epistemological question that arises for every position equally.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'meta-6-e2',
    type: 'choice',
    conceptIds: ['nominalism'],
    prompt: 'What is the hard question for nominalism?',
    options: [
      {
        id: 'a',
        text: 'Why there are so many things.',
        explanation:
          'Not a difficulty for the position, and not something it is required to explain.',
      },
      {
        id: 'b',
        text: 'What resemblance consists in, without smuggling a universal back in.',
        explanation:
          'Correct. Denying shared properties leaves resemblance itself needing an account, ' +
          'and it looks shared across many pairs.',
      },
      {
        id: 'c',
        text: 'How universals can be in many places.',
        explanation:
          'That is realism\u2019s problem. The nominalist avoids it by denying universals exist.',
      },
      {
        id: 'd',
        text: 'Whether particulars exist.',
        explanation:
          'Nominalists affirm particulars — they are the only things admitted.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-6-e3',
    type: 'choice',
    conceptIds: ['conceptualism'],
    prompt: 'What is the hard question for conceptualism?',
    options: [
      {
        id: 'a',
        text: 'Whether concepts exist.',
        explanation:
          'Not in dispute — everyone accepts concepts. The issue is what they explain.',
      },
      {
        id: 'b',
        text: 'What accounted for resemblance before any minds existed.',
        explanation:
          'Correct. Things appear to have resembled one another for billions of years without ' +
          'anyone to conceptualise them.',
      },
      {
        id: 'c',
        text: 'How words acquire meaning.',
        explanation:
          'A question in philosophy of language, and not the pressure point on this position.',
      },
      {
        id: 'd',
        text: 'Whether minds are physical.',
        explanation:
          'A philosophy of mind question, independent of the universals debate.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-6-e4',
    type: 'choice',
    conceptIds: ['nominalism', 'realism-universals'],
    prompt: 'In what sense is nominalism simpler?',
    options: [
      {
        id: 'a',
        text: 'It is easier to understand.',
        explanation:
          'Comprehensibility is not the relevant kind of simplicity, and the arguments are ' +
          'demanding either way.',
      },
      {
        id: 'b',
        text: 'It admits fewer kinds of entity — but takes on a heavier explanatory burden.',
        explanation:
          'Correct, and the trade-off is the point. Ontological economy is bought with ' +
          'explanatory debt.',
      },
      {
        id: 'c',
        text: 'It requires no arguments.',
        explanation:
          'It requires a great many arguments, particularly about what resemblance consists in once ' +
          'shared properties have been denied.',
      },
      {
        id: 'd',
        text: 'It is the historical consensus.',
        explanation:
          'There is no consensus. The dispute has run for two and a half thousand years.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- meta-7 */
  {
    id: 'meta-7-e1',
    type: 'choice',
    conceptIds: ['identity'],
    prompt: 'Two coins off the same press are alike in every visible respect. Are they identical?',
    options: [
      {
        id: 'a',
        text: 'Yes, since they share all their properties.',
        explanation:
          'They share their qualitative properties but not their location or history, and ' +
          'there are plainly two of them.',
      },
      {
        id: 'b',
        text: 'Qualitatively yes, numerically no.',
        explanation:
          'Correct. Exact similarity is one relation; being one and the same thing is another.',
      },
      {
        id: 'c',
        text: 'No, since no two things are ever alike.',
        explanation:
          'Too strong. Exact qualitative similarity is possible; it simply does not entail ' +
          'numerical identity.',
      },
      {
        id: 'd',
        text: 'The question is meaningless.',
        explanation:
          'It has a clear answer once the two senses of "same" are distinguished.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-7-e2',
    type: 'choice',
    conceptIds: ['indiscernibles'],
    prompt: 'What does the two-spheres case aim to show?',
    options: [
      {
        id: 'a',
        text: 'That spheres cannot exist alone.',
        explanation:
          'Nothing in the case concerns whether such a universe is physically realistic.',
      },
      {
        id: 'b',
        text: 'That two things can share every property and still be two.',
        explanation:
          'Correct, which would refute the identity of indiscernibles — and it is a ' +
          'counterexample in exactly the sense of Logic lesson 12.',
      },
      {
        id: 'c',
        text: 'That identity is relative.',
        explanation:
          'A different and more radical thesis, not what this case is designed to establish.',
      },
      {
        id: 'd',
        text: 'That space is infinite.',
        explanation:
          'The thought experiment says nothing about how far space extends. It concerns whether two ' +
          'things can share every property and still be two.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-7-e3',
    type: 'choice',
    conceptIds: ['indiscernibles'],
    prompt: 'Why does appealing to relational properties struggle to rescue the principle?',
    options: [
      {
        id: 'a',
        text: 'Because relations are not properties.',
        explanation:
          'Many philosophers treat them as properties. That is not where the reply fails.',
      },
      {
        id: 'b',
        text: 'Because "two miles from a sphere" is shared, and "not identical to that one" presupposes distinctness.',
        explanation:
          'Correct. The first fails to distinguish them and the second assumes exactly what it ' +
          'was meant to establish.',
      },
      {
        id: 'c',
        text: 'Because the spheres are not really identical.',
        explanation:
          'They are stipulated to be qualitatively identical, which is what makes the case a ' +
          'test.',
      },
      {
        id: 'd',
        text: 'Because relations cannot be measured in an empty universe.',
        explanation:
          'Measurement is not required — the case concerns what properties hold, not who could ' +
          'check.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-7-e4',
    type: 'choice',
    conceptIds: ['identity'],
    prompt: 'Why are identical twins not a counterexample to the identity of indiscernibles?',
    options: [
      {
        id: 'a',
        text: 'Because they are not really identical.',
        explanation:
          'Right conclusion, but too vague — the point is which properties they fail to share.',
      },
      {
        id: 'b',
        text: 'Because they differ in position, history and countless other properties.',
        explanation:
          'Correct. The principle needs genuinely complete sharing, which is why the argument ' +
          'requires an artificial universe.',
      },
      {
        id: 'c',
        text: 'Because they are the same person.',
        explanation:
          'They are plainly two people, which is why they seem like a candidate ' +
          'counterexample.',
      },
      {
        id: 'd',
        text: 'Because the principle applies only to objects.',
        explanation:
          'The principle is fully general and applies to people as much as to objects. Twins fail as ' +
          'a counterexample because they differ in many properties, not because they are human.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- meta-8 */
  {
    id: 'meta-8-e1',
    type: 'choice',
    conceptIds: ['ship-of-theseus', 'identity'],
    prompt: 'Why does the reassembly turn a puzzle into a paradox?',
    options: [
      {
        id: 'a',
        text: 'Because the original planks are older.',
        explanation:
          'Age alone creates no contradiction. The problem is structural.',
      },
      {
        id: 'b',
        text: 'Because two ships now have a claim, and identity is transitive.',
        explanation:
          'Correct. If both are identical to the original they are identical to each other, ' +
          'which they plainly are not.',
      },
      {
        id: 'c',
        text: 'Because ships cannot be rebuilt.',
        explanation:
          'They can, and the thought experiment only requires that it be possible.',
      },
      {
        id: 'd',
        text: 'Because the planks have rotted.',
        explanation:
          'Nothing in the puzzle depends on the state of the timber. The paradox would arise just as ' +
          'sharply with planks in perfect condition.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-8-e2',
    type: 'choice',
    conceptIds: ['identity-over-time'],
    prompt: 'What does the puzzle show about material continuity?',
    options: [
      {
        id: 'a',
        text: 'That it is impossible.',
        explanation:
          'Material continuity plainly occurs. The question is whether it constitutes ' +
          'identity.',
      },
      {
        id: 'b',
        text: 'That it cannot be what identity over time consists in.',
        explanation:
          'Correct. Every atom in you has been replaced, yet you persist — so something else ' +
          'must underwrite persistence.',
      },
      {
        id: 'c',
        text: 'That objects do not persist at all.',
        explanation:
          'A radical option some take, but far stronger than the puzzle establishes.',
      },
      {
        id: 'd',
        text: 'That ships are special cases.',
        explanation:
          'The same problem arises for organisms, institutions and people. Ships are just ' +
          'convenient.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-8-e3',
    type: 'choice',
    conceptIds: ['ship-of-theseus'],
    prompt: 'Why is "it is just a verbal dispute" an inadequate response?',
    options: [
      {
        id: 'a',
        text: 'Because philosophy is never about words.',
        explanation:
          'Plenty of philosophy is about words. The objection here is more specific.',
      },
      {
        id: 'b',
        text: 'Because identity is transitive, so declaring both the original produces a contradiction.',
        explanation:
          'Correct. A merely verbal issue would not generate an inconsistency, and this one ' +
          'does.',
      },
      {
        id: 'c',
        text: 'Because there is an obvious right answer.',
        explanation:
          'There is no consensus — which is exactly why a criterion has to be defended.',
      },
      {
        id: 'd',
        text: 'Because ships have legal owners.',
        explanation:
          'Legal identity is a separate matter, settled by convention rather than metaphysics.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-8-e4',
    type: 'choice',
    conceptIds: ['ship-of-theseus', 'perdurantism'],
    prompt: 'How does perdurantism dissolve the paradox?',
    options: [
      {
        id: 'a',
        text: 'By denying that either ship exists.',
        explanation:
          'It affirms both, which is what allows it to dissolve rather than deny the puzzle.',
      },
      {
        id: 'b',
        text: 'By treating them as distinct four-dimensional objects sharing earlier temporal parts.',
        explanation:
          'Correct. Two overlapping space-time worms, with no need to declare a single winner.',
      },
      {
        id: 'c',
        text: 'By showing the planks were never replaced.',
        explanation:
          'The replacement is stipulated in the case and cannot be denied.',
      },
      {
        id: 'd',
        text: 'By appealing to legal ownership.',
        explanation:
          'Convention rather than metaphysics, and no part of the perdurantist answer.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- meta-9 */
  {
    id: 'meta-9-e1',
    type: 'choice',
    conceptIds: ['endurantism', 'perdurantism'],
    prompt: 'What is the problem of change for endurantism?',
    options: [
      {
        id: 'a',
        text: 'That objects cannot change at all.',
        explanation:
          'Endurantists affirm change. The difficulty is explaining how it is consistent.',
      },
      {
        id: 'b',
        text: 'That one wholly present thing appears to have incompatible properties at different times.',
        explanation:
          'Correct. If you are wholly present at each moment, the same whole thing is both ' +
          'bent and straight.',
      },
      {
        id: 'c',
        text: 'That change requires temporal parts.',
        explanation:
          'That is the perdurantist solution rather than the statement of the problem.',
      },
      {
        id: 'd',
        text: 'That objects have no properties.',
        explanation:
          'Nobody holds this, and the puzzle depends on their having properties.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-9-e2',
    type: 'choice',
    conceptIds: ['perdurantism'],
    prompt: 'What is the cost of perdurantism?',
    options: [
      {
        id: 'a',
        text: 'It cannot explain change.',
        explanation:
          'Change is what it handles most gracefully — different temporal parts simply differ.',
      },
      {
        id: 'b',
        text: 'No part of you present at any moment is ever wholly you.',
        explanation:
          'Correct. What is here now is a slice, which sits awkwardly with how people ordinarily ' +
          'think of themselves.',
      },
      {
        id: 'c',
        text: 'It requires objects to be immaterial.',
        explanation:
          'Temporal parts are as material as spatial ones. A slice of a physical object through time ' +
          'is no less physical than a slice through space.',
      },
      {
        id: 'd',
        text: 'It denies that time exists.',
        explanation:
          'It takes time very seriously — seriously enough to treat objects as extended ' +
          'through it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-9-e3',
    type: 'choice',
    conceptIds: ['perdurantism'],
    prompt: 'Does perdurantism mean you are a different person each moment?',
    options: [
      {
        id: 'a',
        text: 'Yes, each moment contains a numerically distinct person.',
        explanation:
          'A common misreading. The temporal parts are parts of one person, not separate ' +
          'people.',
      },
      {
        id: 'b',
        text: 'No — each moment contains a temporal part of one extended person.',
        explanation:
          'Correct, and the spatial analogy makes it clearer: your hand is a part of you, not ' +
          'a separate person.',
      },
      {
        id: 'c',
        text: 'Yes, because identity over time is impossible.',
        explanation:
          'Perdurantism is an account of how identity over time works, not a denial of it.',
      },
      {
        id: 'd',
        text: 'No, because temporal parts do not exist.',
        explanation:
          'Temporal parts are exactly what perdurantism posits, so denying them would abandon the ' +
          'view rather than defend it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'meta-9-e4',
    type: 'sort',
    conceptIds: ['endurantism', 'perdurantism', 'premise', 'conclusion'],
    prompt: 'Label each statement in this argument for temporal parts.',
    statements: [
      { id: 's1', text: 'The same object is bent yesterday and straight today.', role: 'premise' },
      { id: 's2', text: 'Nothing wholly present can have incompatible properties at once.', role: 'premise' },
      { id: 's3', text: 'Objects must have distinct temporal parts.', role: 'conclusion' },
      { id: 's4', text: 'The object is made of copper.', role: 'irrelevant' },
    ],
    explanation:
      'An observed fact about change plus a principle about property-bearing yields temporal ' +
      'parts. The material is incidental — the argument works for any substance.',
  },
]
