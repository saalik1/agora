import type { Concept } from '@/types/content'

/**
 * Metaphysics concepts.
 *
 * Two additions beyond the original outline earn their place by being where the
 * cosmological arguments are actually won or lost: actual vs potential infinity,
 * and the A/B theories of time. Philosophy of Religion depends on both.
 */

export const metaphysicsConcepts: Concept[] = [
  /* ------------------------------------------------------- Unit 1: modality */
  {
    id: 'necessity',
    term: 'Necessity',
    short: 'True in every possible situation — could not have been otherwise.',
    body:
      'A necessary truth could not have failed to hold. That two plus two makes four is not a ' +
      'fact that happened to work out; there is no way things could have gone that would make ' +
      'it false. Necessity is the strongest modal status a claim can have.',
    relatedConceptIds: ['possibility', 'contingency', 'possible-worlds'],
    relatedArgumentIds: [],
    lessonIds: ['meta-1'],
  },
  {
    id: 'possibility',
    term: 'Possibility',
    short: 'True in at least one way things could have gone.',
    body:
      'Something is possible if there is no contradiction in supposing it. This is broader ' +
      'than what is physically achievable: travelling faster than light is physically ' +
      'impossible but arguably logically possible, since the supposition entails no ' +
      'contradiction. Which kind of possibility is meant matters enormously in argument.',
    relatedConceptIds: ['necessity', 'contingency', 'possible-worlds'],
    relatedArgumentIds: [],
    lessonIds: ['meta-1'],
  },
  {
    id: 'contingency',
    term: 'Contingency',
    short: 'True, but could have been false.',
    body:
      'A contingent thing exists but need not have. You are contingent; so is the chair, the ' +
      'planet, and arguably the universe. Contingency is the hinge of one whole family of ' +
      'cosmological arguments, which ask what explains why contingent things exist at all.',
    relatedConceptIds: ['necessity', 'possibility', 'psr'],
    relatedArgumentIds: ['contingency-argument'],
    lessonIds: ['meta-2'],
  },
  {
    id: 'possible-worlds',
    term: 'Possible worlds',
    short: 'A device for talking precisely about necessity and possibility.',
    body:
      'A possible world is a complete way things could have been. Necessary means true in all ' +
      'of them, possible means true in at least one, contingent means true in some and false ' +
      'in others. Whether such worlds exist or are merely a useful notation is itself disputed.',
    relatedConceptIds: ['necessity', 'possibility', 'contingency'],
    relatedArgumentIds: [],
    lessonIds: ['meta-2'],
  },
  {
    id: 'psr',
    term: 'Principle of Sufficient Reason',
    short: 'Everything that exists has an explanation of its existence.',
    body:
      'The PSR says there are no brute facts: for anything that exists, there is either a ' +
      'cause or an explanation in its own nature. It is powerful enough to drive contingency ' +
      'arguments to a necessary being, and controversial for exactly that reason. Critics ask ' +
      'what justifies it, and whether it can explain itself.',
    relatedConceptIds: ['contingency', 'causation', 'infinite-regress'],
    relatedArgumentIds: ['contingency-argument', 'psr-defence'],
    lessonIds: ['meta-3'],
  },

  /* ------------------------------------------------------ Unit 2: existence */
  {
    id: 'essence',
    term: 'Essence',
    short: 'What a thing must be in order to be that thing at all.',
    body:
      'An essential property is one a thing cannot lose without ceasing to exist. Being ' +
      'human may be essential to you; your height is not. The distinction is ancient, and ' +
      'its critics argue that what counts as essential depends on how we choose to describe ' +
      'things rather than on the things themselves.',
    relatedConceptIds: ['existence-property', 'identity', 'necessity'],
    relatedArgumentIds: [],
    lessonIds: ['meta-4'],
  },
  {
    id: 'existence-property',
    term: 'Existence',
    short: 'Disputed: is existing a property a thing can have?',
    body:
      'Kant argued existence is not a predicate — saying a thing exists adds nothing to its ' +
      'description, it says the description is instantiated. This matters far beyond ' +
      'metaphysics: the objection is the standard reply to the ontological argument, which ' +
      'treats existence as a perfection a being can possess.',
    relatedConceptIds: ['essence', 'necessity'],
    relatedArgumentIds: [],
    lessonIds: ['meta-4'],
  },
  {
    id: 'universals',
    term: 'Universals',
    short: 'Properties that many particular things can share.',
    body:
      'Two red apples appear to share something: redness. A universal is that shared item, ' +
      'capable of being wholly present in many places at once. Whether universals exist, and ' +
      'in what sense, is one of the oldest disputes in philosophy.',
    relatedConceptIds: ['particulars', 'realism-universals', 'nominalism'],
    relatedArgumentIds: ['one-over-many'],
    lessonIds: ['meta-5'],
  },
  {
    id: 'particulars',
    term: 'Particulars',
    short: 'Individual things, located in one place at a time.',
    body:
      'This apple, that chair, you. Particulars contrast with universals in being ' +
      'unrepeatable: an apple cannot be wholly present in two places, whereas redness ' +
      'apparently can. The distinction sets up the question of how particulars relate to the ' +
      'properties they bear.',
    relatedConceptIds: ['universals', 'realism-universals', 'nominalism'],
    relatedArgumentIds: ['one-over-many'],
    lessonIds: ['meta-5'],
  },
  {
    id: 'realism-universals',
    term: 'Realism about universals',
    short: 'Universals exist in their own right, independently of the things instancing them.',
    body:
      'The realist takes the sharing seriously: two red things share a genuine entity. ' +
      'Platonic versions place universals outside space and time; Aristotelian versions locate ' +
      'them in their instances. The standing challenge is explaining how one thing can be ' +
      'wholly present in many places.',
    relatedConceptIds: ['nominalism', 'universals', 'conceptualism'],
    relatedArgumentIds: ['one-over-many'],
    lessonIds: ['meta-6'],
  },
  {
    id: 'nominalism',
    term: 'Nominalism',
    short: 'Only particulars exist; shared properties are a way of speaking.',
    body:
      'The nominalist denies universals and accepts only individual things. Red objects ' +
      'resemble one another, and that is all there is to it — no further entity is shared. ' +
      'Critics press the question of what resemblance itself consists in without smuggling a ' +
      'universal back in.',
    relatedConceptIds: ['realism-universals', 'universals', 'conceptualism'],
    relatedArgumentIds: ['one-over-many'],
    lessonIds: ['meta-6'],
  },
  {
    id: 'conceptualism',
    term: 'Conceptualism',
    short: 'Universals exist, but only as concepts in minds.',
    body:
      'A middle position: redness is real but mind-dependent, existing as a general concept ' +
      'rather than as a feature of the world. The difficulty is that things seem to resemble ' +
      'one another whether or not anyone is around to notice.',
    relatedConceptIds: ['realism-universals', 'nominalism'],
    relatedArgumentIds: [],
    lessonIds: ['meta-6'],
  },

  /* ------------------------------------------------------- Unit 3: identity */
  {
    id: 'identity',
    term: 'Identity',
    short: 'Being one and the same thing, not merely exactly similar.',
    body:
      'Two new coins can be qualitatively identical — alike in every respect — while being ' +
      'numerically distinct. Numerical identity is the relation each thing bears only to ' +
      'itself. Confusing the two senses produces a great deal of bad philosophy.',
    relatedConceptIds: ['identity-over-time', 'essence', 'indiscernibles'],
    relatedArgumentIds: [],
    lessonIds: ['meta-7'],
  },
  {
    id: 'indiscernibles',
    term: 'Identity of indiscernibles',
    short: 'If two things share every property, they are one thing.',
    body:
      "Leibniz's principle says qualitative indiscernibility entails numerical identity. It " +
      'faces a famous challenge: a universe containing nothing but two identical spheres. ' +
      'They share every property, yet there appear to be two.',
    relatedConceptIds: ['identity', 'particulars'],
    relatedArgumentIds: ['two-spheres'],
    lessonIds: ['meta-7'],
  },
  {
    id: 'identity-over-time',
    term: 'Identity over time',
    short: 'What makes a thing at one time the same thing as at another.',
    body:
      'Everything you are made of has been replaced, yet you count as the same person as the ' +
      'child in the photograph. Something other than material continuity must underwrite ' +
      'persistence — and saying what is remarkably hard.',
    relatedConceptIds: ['ship-of-theseus', 'endurantism', 'perdurantism', 'identity'],
    relatedArgumentIds: ['ship-of-theseus-arg'],
    lessonIds: ['meta-8'],
  },
  {
    id: 'ship-of-theseus',
    term: 'Ship of Theseus',
    short: 'Replace every plank one at a time — is it the same ship?',
    body:
      'The puzzle sharpens when the original planks are reassembled elsewhere: now two ships ' +
      'have a claim, and they cannot both be identical to the original, since they are not ' +
      'identical to each other. The case forces a choice about what persistence consists in.',
    relatedConceptIds: ['identity-over-time', 'endurantism', 'perdurantism'],
    relatedArgumentIds: ['ship-of-theseus-arg'],
    lessonIds: ['meta-8'],
  },
  {
    id: 'endurantism',
    term: 'Endurantism',
    short: 'Objects are wholly present at each moment they exist.',
    body:
      'On this view you are entirely here now, and the very same whole thing was entirely ' +
      'there yesterday. It matches ordinary thought closely. Its difficulty is explaining how ' +
      'one wholly present thing can have incompatible properties at different times.',
    relatedConceptIds: ['perdurantism', 'identity-over-time', 'a-theory'],
    relatedArgumentIds: [],
    lessonIds: ['meta-9'],
  },
  {
    id: 'perdurantism',
    term: 'Perdurantism',
    short: 'Objects are extended through time, with a different part at each moment.',
    body:
      'You are a four-dimensional worm, and what is present now is one temporal part of you. ' +
      'Change becomes unproblematic: different parts simply have different properties. The ' +
      'cost is that no part of you is ever wholly you.',
    relatedConceptIds: ['endurantism', 'identity-over-time', 'b-theory'],
    relatedArgumentIds: [],
    lessonIds: ['meta-9'],
  },

  /* ------------------------------------ Unit 4: causation, time and infinity */
  {
    id: 'causation',
    term: 'Causation',
    short: 'The relation that makes one thing bring about another.',
    body:
      'Causation looks obvious until you try to say what it is. Hume found only regular ' +
      'succession — one thing follows another, and we observe no necessary connection between ' +
      'them. What has to be added to mere regularity to get causation is still open.',
    relatedConceptIds: ['regularity-theory', 'counterfactual-causation', 'psr'],
    relatedArgumentIds: ['humean-causation'],
    lessonIds: ['meta-10'],
  },
  {
    id: 'regularity-theory',
    term: 'Regularity theory',
    short: 'Causation is nothing but constant conjunction.',
    body:
      'On the Humean account, to say A causes B is to say events like A are regularly followed ' +
      'by events like B. Its weakness is well known: night regularly follows day without ' +
      'causing it, and two effects of a common cause march in step without either causing the ' +
      'other.',
    relatedConceptIds: ['causation', 'counterfactual-causation'],
    relatedArgumentIds: ['humean-causation'],
    lessonIds: ['meta-10'],
  },
  {
    id: 'counterfactual-causation',
    term: 'Counterfactual theory',
    short: 'A caused B if, had A not occurred, B would not have.',
    body:
      'This handles the day-and-night problem neatly: had today not happened, night would have ' +
      'come anyway. Its difficulty is overdetermination — two assassins fire simultaneously, ' +
      'and neither shot passes the test, though both plainly caused the death.',
    relatedConceptIds: ['causation', 'regularity-theory'],
    relatedArgumentIds: [],
    lessonIds: ['meta-10'],
  },
  {
    id: 'actual-infinity',
    term: 'Actual infinity',
    short: 'A completed infinite collection, as opposed to one that merely grows without limit.',
    body:
      'A potential infinity is a process that can always continue; an actual infinity is a ' +
      'totality already infinite in number. Whether actual infinities can exist outside ' +
      'mathematics is disputed, and the question is decisive for the Kalam argument, which ' +
      'holds that a beginningless past would be one.',
    relatedConceptIds: ['infinite-regress', 'hilberts-hotel', 'a-theory'],
    relatedArgumentIds: ['hilbert-hotel-arg'],
    lessonIds: ['meta-11'],
  },
  {
    id: 'hilberts-hotel',
    term: "Hilbert's Hotel",
    short: 'A thought experiment exposing the strangeness of completed infinities.',
    body:
      'A hotel with infinitely many occupied rooms can still take new guests: move everyone ' +
      'along and rooms free up without anyone leaving. Defenders of the Kalam treat the ' +
      'absurdity as evidence that actual infinities cannot be instantiated; critics reply that ' +
      'strangeness is not impossibility.',
    relatedConceptIds: ['actual-infinity', 'infinite-regress'],
    relatedArgumentIds: ['hilbert-hotel-arg'],
    lessonIds: ['meta-11'],
  },
  {
    id: 'a-theory',
    term: 'A-theory of time',
    short: 'Temporal becoming is real: the present is objectively privileged.',
    body:
      'On the A-theory, the passage of time is a genuine feature of reality rather than a ' +
      'feature of how we experience it. Things come into being and pass away. This is what a ' +
      'claim like "the universe began to exist" requires in order to mean what it appears to ' +
      'mean.',
    relatedConceptIds: ['b-theory', 'actual-infinity', 'endurantism'],
    relatedArgumentIds: ['ab-theory-dispute'],
    lessonIds: ['meta-12'],
  },
  {
    id: 'b-theory',
    term: 'B-theory of time',
    short: 'All times are equally real; passage is a feature of perspective.',
    body:
      'On the B-theory the universe is a four-dimensional block in which past, present and ' +
      'future are all equally real, and "now" is like "here" — indexical rather than ' +
      'objective. Nothing strictly comes into being, which is why the theory bears directly on ' +
      'arguments about the universe beginning.',
    relatedConceptIds: ['a-theory', 'perdurantism', 'actual-infinity'],
    relatedArgumentIds: ['ab-theory-dispute'],
    lessonIds: ['meta-12'],
  },

  /* ------------------------------------------------------ Unit 5: free will */
  {
    id: 'determinism',
    term: 'Determinism',
    short: 'The past plus the laws of nature fix exactly one future.',
    body:
      'If determinism is true, the state of the world a billion years ago together with the ' +
      'laws entails everything you will do today. It is a claim about entailment rather than ' +
      'about compulsion — nothing forces you, but nothing else could have happened.',
    relatedConceptIds: ['free-will', 'compatibilism', 'hard-determinism', 'causation'],
    relatedArgumentIds: ['consequence-argument'],
    lessonIds: ['meta-13'],
  },
  {
    id: 'free-will',
    term: 'Free will',
    short: 'The control required for an action to be genuinely yours.',
    body:
      'Disputes about free will are often disputes about what it takes. Some require the ' +
      'ability to have done otherwise; others require only that your action flow from your own ' +
      'reasons without external compulsion. Which definition you adopt largely settles whether ' +
      'determinism threatens it.',
    relatedConceptIds: ['determinism', 'compatibilism', 'libertarian-free-will'],
    relatedArgumentIds: ['consequence-argument'],
    lessonIds: ['meta-13'],
  },
  {
    id: 'compatibilism',
    term: 'Compatibilism',
    short: 'Free will and determinism can both be true.',
    body:
      'The compatibilist holds that freedom is about the source of an action, not about ' +
      'alternative possibilities. You act freely when your action flows from your own desires ' +
      'and reasoning without coercion — whether or not the whole chain was determined. Critics ' +
      'call this changing the subject.',
    relatedConceptIds: ['determinism', 'free-will', 'hard-determinism'],
    relatedArgumentIds: ['consequence-argument'],
    lessonIds: ['meta-14'],
  },
  {
    id: 'hard-determinism',
    term: 'Hard determinism',
    short: 'Determinism is true, so nobody has free will.',
    body:
      'The hard determinist accepts the incompatibilist premise and the deterministic one, and ' +
      'follows the argument to its conclusion: free will is an illusion. The interesting ' +
      'consequences are practical, since moral responsibility appears to require the freedom ' +
      'being denied.',
    relatedConceptIds: ['determinism', 'compatibilism', 'libertarian-free-will'],
    relatedArgumentIds: ['consequence-argument'],
    lessonIds: ['meta-14'],
  },
  {
    id: 'libertarian-free-will',
    term: 'Libertarian free will',
    short: 'Free will is real, so determinism is false.',
    body:
      'The libertarian shares the incompatibilist premise but rejects determinism, holding ' +
      'that agents originate actions in a way not fixed by prior states. The standing ' +
      'objection is the luck problem: if an action is not determined by your reasons, it is ' +
      'unclear how its being random makes it more yours.',
    relatedConceptIds: ['free-will', 'determinism', 'compatibilism'],
    relatedArgumentIds: ['consequence-argument'],
    lessonIds: ['meta-14'],
  },
]
