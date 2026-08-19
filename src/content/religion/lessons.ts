import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Philosophy of Religion.
 *
 * The subject reuses machinery rather than rebuilding it: PSR, contingency,
 * actual infinity and the A/B theory come from Metaphysics; testimony and
 * induction from Epistemology; every argument form from Logic.
 *
 * Every exercise here is structural — which premise does this attack, what must
 * be true for this to work, which response concedes what. No exercise asks
 * whether an argument succeeds, because that has no determinate answer and the
 * app has no business supplying one.
 */

export const relArgumentsUnit: Unit = {
  id: 'rel-u1',
  subjectId: 'religion',
  title: 'Arguments for God',
  blurb: 'Cosmological, teleological and ontological arguments, with their objections and replies.',
  lessonIds: ['rel-1', 'rel-2', 'rel-3', 'rel-4'],
}

export const relProblemsUnit: Unit = {
  id: 'rel-u2',
  subjectId: 'religion',
  title: 'Attributes and Problems',
  blurb: 'What the divine attributes commit you to, and the strongest arguments against theism.',
  lessonIds: ['rel-5', 'rel-6', 'rel-7', 'rel-8'],
}

export const religionLessons: Lesson[] = [
  {
    id: 'rel-1',
    unitId: 'rel-u1',
    title: 'What is being argued about?',
    summary: 'Classical theism, and why the target has to be specified first.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['classical-theism', 'necessary-being'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Before assessing any argument, establish what it aims to prove. Classical theism is ' +
          'a specific package: a necessary, immaterial being with maximal knowledge, power and ' +
          'goodness. Different arguments reach different parts of it, and none reaches all of ' +
          'it at once.',
      },
      {
        kind: 'definition',
        term: 'Necessary being',
        body:
          'A being that exists in every possible world. This is what cosmological arguments ' +
          'aim at, since a contingent explanation would raise the same question again.',
      },
      {
        kind: 'explanation',
        heading: 'Why specifying matters',
        body:
          'A critic who attacks a conception nobody holds has straw-manned the position, and a ' +
          'defender who slides from "a first cause" to "the God of a particular tradition" has ' +
          'overclaimed. Both errors are common, and both are avoidable by stating the target ' +
          'precisely at the outset.',
      },
      {
        kind: 'explanation',
        heading: 'What the arguments actually deliver',
        body:
          'The cosmological arguments reach a necessary or first cause. Fine-tuning reaches a ' +
          'designer. The ontological argument reaches a maximally great being. Getting from ' +
          'any of these to a specific religious tradition requires further argument that these ' +
          'arguments do not supply.',
      },
      {
        kind: 'misconception',
        claim: 'A successful theistic argument establishes a particular religion.',
        correction:
          'None of them does, and careful defenders say so. Craig treats the Kalam as reaching ' +
          'a personal creator and argues separately for anything beyond that. Conflating the ' +
          'two is overclaiming, and it invites objections the argument never needed to face.',
      },
    ],
    exerciseIds: ['rel-1-e1', 'rel-1-e2', 'rel-1-e3', 'rel-1-e4'],
  },

  {
    id: 'rel-2',
    unitId: 'rel-u1',
    title: 'The Kalam cosmological argument',
    summary: 'Two premises, and everything turns on both.',
    difficulty: 3,
    estimatedMinutes: 10,
    xpReward: 25,
    conceptIds: ['kalam', 'actual-infinity', 'a-theory', 'causation'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Developed by medieval Islamic philosophers, al-Ghazali chief among them, and revived ' +
          'in the twentieth century by William Lane Craig. The structure is as simple as an ' +
          'argument gets. Everything difficult is in defending the two premises.',
      },
      {
        kind: 'argument',
        ref: 'kalam',
        note:
          'Expand both premises. P1 faces the objection that our causal experience concerns ' +
          'rearrangement rather than creation; P2 faces the B-theory objection you met in ' +
          'Metaphysics lesson 12.',
      },
      {
        kind: 'explanation',
        heading: 'Where Metaphysics did the groundwork',
        body:
          'P2 is argued two ways. Philosophically: an infinite past would be an actual ' +
          'infinite, and Hilbert\u2019s Hotel is offered to show these cannot be instantiated. ' +
          'Scientifically: from cosmic expansion. Both routes were set up in Metaphysics Unit ' +
          '4, and both are contested there rather than here.',
      },
      {
        kind: 'argument',
        ref: 'kalam-personal-cause',
        note:
          'A separate argument, often run after the first. Note that it needs libertarian ' +
          'agency, which Metaphysics lesson 14 showed is not free of difficulties.',
      },
      {
        kind: 'misconception',
        claim: 'The Kalam says everything has a cause, so God needs one too.',
        correction:
          'The premise is restricted to things that begin to exist, precisely to avoid this. ' +
          'Whether the restriction is principled or convenient is a fair question — but ' +
          'attacking the unrestricted version attacks something no defender asserts.',
      },
    ],
    exerciseIds: ['rel-2-e1', 'rel-2-e2', 'rel-2-e3', 'rel-2-e4', 'rel-2-e5'],
  },

  {
    id: 'rel-3',
    unitId: 'rel-u1',
    title: 'Fine-tuning',
    summary: 'An inference to the best explanation, not a deduction.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['fine-tuning', 'multiverse-objection', 'anthropic-principle'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Several physical constants appear to permit life only within very narrow limits. ' +
          'Alter the cosmological constant slightly and no stable structures form. The ' +
          'argument holds that design explains this better than chance does.',
      },
      {
        kind: 'argument',
        ref: 'fine-tuning-arg',
        note:
          'Expand P2 for the two main objections: the multiverse, and the charge that design ' +
          'gains no explanatory economy.',
      },
      {
        kind: 'explanation',
        heading: 'Why the argument form matters',
        body:
          'This is abduction, not deduction. It cannot be refuted by a counterexample, and it ' +
          'cannot be established with certainty — it is assessed by comparing explanations. ' +
          'That is why the multiverse reply is powerful: it does not deny the data, it offers ' +
          'a rival explanation of it.',
      },
      {
        kind: 'explanation',
        heading: 'The anthropic reply and its limits',
        body:
          'We could only ever observe a life-permitting universe, so finding ours to be one is ' +
          'unsurprising. Critics of this reply say it explains why we observe such conditions ' +
          'but not why any obtain — the firing squad analogy: surviving is unsurprising given ' +
          'that you are around to notice, but still demands explanation.',
      },
      {
        kind: 'misconception',
        claim: 'Fine-tuning is refuted by pointing out that any specific outcome is improbable.',
        correction:
          'Improbability alone is not the claim. Every deal of cards is improbable, but a deal ' +
          'giving each player a perfect suit is improbable *and* specifiable in advance. ' +
          'Whether life-permitting constants are relevantly specifiable is the real dispute.',
      },
    ],
    exerciseIds: ['rel-3-e1', 'rel-3-e2', 'rel-3-e3', 'rel-3-e4'],
  },

  {
    id: 'rel-4',
    unitId: 'rel-u1',
    title: 'The ontological argument',
    summary: 'From a concept alone — which is either brilliant or a trick.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['ontological-argument', 'existence-property', 'necessity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Uniquely among theistic arguments, this one uses no observation at all. Anselm ' +
          'argued that a being than which none greater can be conceived must exist, since ' +
          'existing is greater than not existing. Modal versions replace this with a claim ' +
          'about possibility.',
      },
      {
        kind: 'argument',
        ref: 'ontological-arg',
        note:
          'Expand P1 for the parody objection and P2 for Kant\u2019s, which you met in Metaphysics ' +
          'lesson 4.',
      },
      {
        kind: 'explanation',
        heading: 'The parody problem',
        body:
          'Gaunilo replied to Anselm by describing a greatest conceivable island, which the ' +
          'same reasoning would prove to exist. The modal version faces a sharper parody: if a ' +
          'maximally great being is possibly non-existent, the same modal logic yields its ' +
          'necessary non-existence. Both possibility claims look equally intuitive, which is ' +
          'the difficulty.',
      },
      {
        kind: 'explanation',
        heading: 'What the argument does establish',
        body:
          'The modal version is valid. So anyone who grants that a maximally great being is ' +
          'possible is committed to its existence. That is a real result — it shows the two ' +
          'claims stand or fall together — even if it persuades nobody who does not already ' +
          'grant the premise.',
      },
      {
        kind: 'misconception',
        claim: 'The argument obviously fails, since you cannot define things into existence.',
        correction:
          'A fair instinct, but it needs an argument, and Kant supplied one. Saying so without ' +
          'it is assertion rather than refutation. The modal version also complicates the ' +
          'charge, since it ascribes necessary existence — a modal status — rather than bare ' +
          'existence.',
      },
    ],
    exerciseIds: ['rel-4-e1', 'rel-4-e2', 'rel-4-e3', 'rel-4-e4'],
  },

  {
    id: 'rel-5',
    unitId: 'rel-u2',
    title: 'Omnipotence and omniscience',
    summary: 'Two attributes, two puzzles.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['omnipotence', 'omniscience'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The divine attributes are not merely honorific: each generates puzzles that have to ' +
          'be answered. Two are standard, and each has a well-developed literature.',
      },
      {
        kind: 'argument',
        ref: 'stone-paradox',
        note:
          'Expand P3 for the standard reply. Note it requires accepting that omnipotence ' +
          'covers only the logically possible.',
      },
      {
        kind: 'explanation',
        heading: 'Why the stone paradox is the easier one',
        body:
          'Almost everyone, theist and critic alike, accepts that a contradiction describes no ' +
          'task at all — so failing to perform it is no limitation. The interesting question ' +
          'is whether that restriction is principled, and most philosophers think it is: ' +
          '"a round square" names nothing to be created.',
      },
      {
        kind: 'argument',
        ref: 'foreknowledge-arg',
        note:
          'The harder puzzle. Expand P3 for the Ockhamist "soft fact" reply and the timeless ' +
          'response.',
      },
      {
        kind: 'misconception',
        claim: 'Divine foreknowledge would cause your actions.',
        correction:
          'The argument does not claim causation, and defenders who answer it that way have ' +
          'missed the point. The worry is that a fixed past truth removes alternatives, which ' +
          'is the same structure as the consequence argument from Metaphysics lesson 13.',
      },
    ],
    exerciseIds: ['rel-5-e1', 'rel-5-e2', 'rel-5-e3', 'rel-5-e4'],
  },

  {
    id: 'rel-6',
    unitId: 'rel-u2',
    title: 'The problem of evil',
    summary: 'Two versions, and a defence against one is not a defence against the other.',
    difficulty: 3,
    estimatedMinutes: 10,
    xpReward: 25,
    conceptIds: ['problem-of-evil', 'gratuitous-evil'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The strongest argument against classical theism comes in two forms, and confusing ' +
          'them wastes a great deal of effort. The logical version claims outright ' +
          'inconsistency. The evidential version claims suffering makes theism less probable.',
      },
      {
        kind: 'argument',
        ref: 'logical-evil',
        note:
          'The inconsistency claim. Expand P3 for the free will defence, which most ' +
          'philosophers now regard as answering this version.',
      },
      {
        kind: 'argument',
        ref: 'evidential-evil',
        note:
          'The harder version. Expand P1 for sceptical theism, the main reply, and the costs ' +
          'it carries.',
      },
      {
        kind: 'explanation',
        heading: 'Why the distinction is decisive',
        body:
          'A defence needs only to show a scenario is possible, which suffices against a claim ' +
          'of strict inconsistency. But possibility does nothing against a probabilistic ' +
          'claim: showing that God *might* have a reason does not show it *likely* that every ' +
          'instance of suffering has one. A reply adequate to the first version can be quite ' +
          'inadequate to the second.',
      },
      {
        kind: 'misconception',
        claim: 'The free will defence answers the problem of evil.',
        correction:
          'It answers the logical version, and does so well. It leaves the evidential version ' +
          'largely untouched, and it does not obviously cover natural evil — earthquakes and ' +
          'disease, which no agent chooses.',
      },
    ],
    exerciseIds: ['rel-6-e1', 'rel-6-e2', 'rel-6-e3', 'rel-6-e4', 'rel-6-e5'],
  },

  {
    id: 'rel-7',
    unitId: 'rel-u2',
    title: 'Theodicies and defences',
    summary: 'Offering reasons, versus offering possible reasons.',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['theodicy', 'free-will-defence', 'problem-of-evil'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Two different projects get run together. A theodicy claims to give God\u2019s actual ' +
          'reasons for permitting suffering. A defence claims only that some reason is ' +
          'possible. The second is far easier and far weaker, and knowing which is on offer ' +
          'tells you what it can accomplish.',
      },
      {
        kind: 'definition',
        term: 'Defence',
        body:
          'An account of how God and evil could both obtain. Possibility is enough, which is ' +
          'why it defeats the logical problem.',
      },
      {
        kind: 'definition',
        term: 'Theodicy',
        body:
          'An account of why God actually permits suffering. Much more ambitious, and ' +
          'correspondingly harder to defend.',
      },
      {
        kind: 'explanation',
        heading: 'Soul-making and its critics',
        body:
          'Hick argued that a world with genuine stakes develops character in ways a painless ' +
          'world could not. Critics point at the distribution: suffering falls heavily on ' +
          'those least able to grow from it, including infants and animals, which fits poorly ' +
          'with a developmental purpose.',
      },
      {
        kind: 'misconception',
        claim: 'A defence is weaker than a theodicy, so it achieves less.',
        correction:
          'It achieves less against the evidential problem but exactly enough against the ' +
          'logical one — and being weaker makes it much harder to refute. Matching the ' +
          'strength of a reply to the strength of the objection is the skill here.',
      },
    ],
    exerciseIds: ['rel-7-e1', 'rel-7-e2', 'rel-7-e3', 'rel-7-e4'],
  },

  {
    id: 'rel-8',
    unitId: 'rel-u2',
    title: 'Divine hiddenness',
    summary: 'If God wanted relationship, why is belief so hard for some?',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['divine-hiddenness', 'problem-of-evil'],
    sections: [
      {
        kind: 'explanation',
        body:
          "Schellenberg's argument is the most discussed addition to philosophy of religion in " +
          'recent decades. It does not appeal to suffering at all, which makes it independent ' +
          'of the problem of evil and immune to the replies developed against it.',
      },
      {
        kind: 'argument',
        ref: 'hiddenness-arg',
        note:
          'Expand P3 for both main replies: that all non-belief involves resistance, and that ' +
          'hiddenness serves a purpose.',
      },
      {
        kind: 'explanation',
        heading: 'The load-bearing premise',
        body:
          'Everything turns on whether non-resistant non-believers exist. Defenders of theism ' +
          'who deny it must attribute hidden resistance to sincere enquirers, which is hard to ' +
          'establish and easy to make unfalsifiable. Those who grant it must explain the ' +
          'hiddenness some other way.',
      },
      {
        kind: 'misconception',
        claim: 'Hiddenness is just the problem of evil again.',
        correction:
          'They are structurally similar but independent. Hiddenness makes no appeal to ' +
          'suffering, so a theodicy addressing pain leaves it untouched. That independence is ' +
          'precisely why the argument was a significant addition rather than a restatement.',
      },
    ],
    exerciseIds: ['rel-8-e1', 'rel-8-e2', 'rel-8-e3', 'rel-8-e4'],
  },
]

export const religionExercises: Exercise[] = [
  /* ------------------------------------------------------------------ rel-1 */
  {
    id: 'rel-1-e1',
    type: 'choice',
    conceptIds: ['classical-theism'],
    prompt: 'Why does specifying the conception of God matter before assessing arguments?',
    options: [
      {
        id: 'a',
        text: 'Because arguments are easier to evaluate when they are shorter.',
        explanation:
          'Length is irrelevant. The issue is that an unspecified target lets both sides talk ' +
          'past one another without noticing.',
      },
      {
        id: 'b',
        text: 'Because a critic attacking a conception nobody holds has straw-manned the position.',
        explanation:
          'Correct, and the reverse error is equally common: a defender sliding from "a first ' +
          'cause" to a specific tradition has overclaimed. Both are avoided by stating the ' +
          'target precisely.',
      },
      {
        id: 'c',
        text: 'Because classical theism is the only defensible view.',
        explanation:
          'The lesson takes no position on which conception is correct. Specifying the target ' +
          'is a procedural requirement, not an endorsement.',
      },
      {
        id: 'd',
        text: 'Because arguments only work against believers.',
        explanation:
          'Arguments are assessed on their premises and form regardless of who holds them, as ' +
          'Logic lesson 15 established about the arguer being irrelevant.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-1-e2',
    type: 'choice',
    conceptIds: ['necessary-being'],
    prompt: 'Why do cosmological arguments aim at a necessary being rather than a very powerful one?',
    options: [
      {
        id: 'a',
        text: 'Because a powerful being would be harder to argue for.',
        explanation:
          'Difficulty of defence is not the reason. The requirement comes from the structure ' +
          'of the explanation being sought.',
      },
      {
        id: 'b',
        text: 'Because a contingent explanation would itself need explaining, restarting the regress.',
        explanation:
          'Correct. Only something that could not have failed to exist terminates the chain, ' +
          'which is why necessity rather than power is the target.',
      },
      {
        id: 'c',
        text: 'Because necessary beings are easier to conceive.',
        explanation:
          'They are arguably harder — whether concrete necessary existence is even coherent is ' +
          'disputed.',
      },
      {
        id: 'd',
        text: 'Because power is not a divine attribute.',
        explanation:
          'It certainly is, and classical theism includes it. But power alone does not stop a ' +
          'regress of explanations.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-1-e3',
    type: 'choice',
    conceptIds: ['classical-theism'],
    prompt: 'What does a successful cosmological argument establish?',
    options: [
      {
        id: 'a',
        text: 'The truth of a particular religious tradition.',
        explanation:
          'It does not, and careful defenders say so explicitly. Getting from a first cause to ' +
          'any specific tradition requires substantial further argument.',
      },
      {
        id: 'b',
        text: 'A necessary or first cause — with anything further requiring separate argument.',
        explanation:
          'Correct. Recognising what an argument does and does not deliver is what stops both ' +
          'overclaiming and misdirected criticism.',
      },
      {
        id: 'c',
        text: 'That the universe is finite in size.',
        explanation:
          'Spatial extent is not at issue. The arguments concern causal or explanatory ' +
          'dependence, and in Kalam\u2019s case the finitude of the past.',
      },
      {
        id: 'd',
        text: 'Nothing at all, since such arguments always fail.',
        explanation:
          'They are contested, not settled. Treating a live philosophical dispute as closed in ' +
          'either direction is not an assessment but a dismissal.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-1-e4',
    type: 'sort',
    conceptIds: ['necessary-being', 'premise', 'conclusion'],
    prompt: 'Label each statement in this argument about explanatory regress.',
    statements: [
      { id: 's1', text: 'A contingent explanation would itself require explanation.', role: 'premise' },
      { id: 's2', text: 'An adequate ultimate explanation must not require further explanation.', role: 'premise' },
      { id: 's3', text: 'An ultimate explanation must be a necessary being.', role: 'conclusion' },
      { id: 's4', text: 'Aquinas wrote in the thirteenth century.', role: 'irrelevant' },
    ],
    explanation:
      'The two premises jointly rule out a contingent terminus, leaving necessity. When the ' +
      'argument was first written down does no work in establishing it.',
  },

  /* ------------------------------------------------------------------ rel-2 */
  {
    id: 'rel-2-e1',
    type: 'choice',
    conceptIds: ['kalam'],
    prompt: 'Why is the first premise restricted to things that "begin to exist"?',
    options: [
      {
        id: 'a',
        text: 'To make the argument sound more scientific.',
        explanation:
          'The restriction is philosophical, not presentational, and it predates modern ' +
          'cosmology by centuries.',
      },
      {
        id: 'b',
        text: 'So that a being which never began is not itself required to have a cause.',
        explanation:
          'Correct. Without the restriction the argument would demand a cause of its own ' +
          'conclusion — though whether the restriction is principled or convenient is a fair ' +
          'thing to press.',
      },
      {
        id: 'c',
        text: 'Because some things have no cause.',
        explanation:
          'The premise asserts the opposite for everything in its scope. It restricts the ' +
          'scope rather than admitting uncaused beginnings.',
      },
      {
        id: 'd',
        text: 'Because the universe did not begin.',
        explanation:
          'That would contradict the second premise. The restriction concerns P1\u2019s scope, not ' +
          'whether the universe began.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-2-e2',
    type: 'choice',
    conceptIds: ['kalam', 'actual-infinity'],
    prompt: 'Which premise does the impossibility of an actual infinite support?',
    options: [
      {
        id: 'a',
        text: 'That whatever begins to exist has a cause.',
        explanation:
          'That premise rests on causal principles. Infinity plays no part in defending it.',
      },
      {
        id: 'b',
        text: 'That the universe began to exist.',
        explanation:
          'Correct. A beginningless past would be an actually infinite collection of events, ' +
          'so ruling out actual infinities makes the past finite.',
      },
      {
        id: 'c',
        text: 'That the cause is personal.',
        explanation:
          'That comes from a separate argument about producing a temporal effect from a ' +
          'timeless state.',
      },
      {
        id: 'd',
        text: 'The conclusion.',
        explanation:
          'The conclusion follows from the premises rather than being supported directly by ' +
          'considerations about infinity.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-2-e3',
    type: 'choice',
    conceptIds: ['kalam', 'a-theory'],
    prompt: 'Why does the B-theory objection threaten the argument?',
    options: [
      {
        id: 'a',
        text: 'Because the B-theory denies that the universe is finite.',
        explanation:
          'A B-theoretic universe can have a finite past. The problem is what "beginning" ' +
          'amounts to, not how much past there is.',
      },
      {
        id: 'b',
        text: 'Because on the B-theory nothing comes into being — a first moment is like a ruler\u2019s first inch.',
        explanation:
          'Correct. "Began to exist" would then mean only that the block has a boundary, which ' +
          'is not the coming-into-being P1 requires.',
      },
      {
        id: 'c',
        text: 'Because the B-theory denies causation.',
        explanation:
          'B-theorists accept causal relations. The difficulty concerns coming into being ' +
          'specifically.',
      },
      {
        id: 'd',
        text: 'Because the B-theory is proven by relativity.',
        explanation:
          'Relativity puts pressure on the A-theory but does not settle the dispute, and ' +
          'neo-Lorentzian interpretations remain available.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-2-e4',
    type: 'choice',
    conceptIds: ['kalam', 'causation'],
    prompt: 'What is the strongest form of the objection to the causal premise?',
    options: [
      {
        id: 'a',
        text: 'That some things obviously come from nothing.',
        explanation:
          'Nobody claims this, and asserting it would need at least as much defence as the ' +
          'premise it opposes.',
      },
      {
        id: 'b',
        text: 'That our causal experience concerns rearranging existing material, not things beginning from nothing.',
        explanation:
          'Correct. It grants everything we observe while questioning whether the principle ' +
          'extends to the origin of everything — a much harder objection to dismiss.',
      },
      {
        id: 'c',
        text: 'That causation is unobservable.',
        explanation:
          'Hume\u2019s point from Metaphysics lesson 10, and a real difficulty — but it applies to ' +
          'causation generally rather than targeting this premise.',
      },
      {
        id: 'd',
        text: 'That the premise is unfalsifiable.',
        explanation:
          'Falsifiability is a criterion for scientific hypotheses. Metaphysical principles ' +
          'are not usually assessed this way.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-2-e5',
    type: 'choice',
    conceptIds: ['kalam', 'free-will'],
    prompt: 'What does the argument for a personal cause assume?',
    options: [
      {
        id: 'a',
        text: 'That the universe is infinitely old.',
        explanation:
          'It assumes the opposite — the argument only arises once a finite past is granted.',
      },
      {
        id: 'b',
        text: 'That an agent can produce a temporally finite effect from a timeless state by freely choosing.',
        explanation:
          'Correct, and it inherits the difficulties of libertarian agency from Metaphysics ' +
          'lesson 14, plus the question of how a timeless being performs an act of will.',
      },
      {
        id: 'c',
        text: 'That causes must precede effects in time.',
        explanation:
          'The argument concerns a cause outside time, so it cannot assume temporal ' +
          'precedence.',
      },
      {
        id: 'd',
        text: 'That the cause is material.',
        explanation:
          'It argues the cause is beyond space, time and matter, so materiality is ruled out ' +
          'rather than assumed.',
      },
    ],
    correctId: 'b',
  },

  /* ------------------------------------------------------------------ rel-3 */
  {
    id: 'rel-3-e1',
    type: 'choice',
    conceptIds: ['fine-tuning'],
    prompt: 'What kind of argument is fine-tuning?',
    options: [
      {
        id: 'a',
        text: 'A deductive argument, valid if its premises hold.',
        explanation:
          'It does not claim its premises guarantee the conclusion. Treating it as deductive ' +
          'invites the wrong criticisms entirely.',
      },
      {
        id: 'b',
        text: 'An inference to the best explanation, assessed by comparison with rivals.',
        explanation:
          'Correct, and this is why the multiverse reply is powerful: it does not deny the ' +
          'data, it offers a competing explanation of it.',
      },
      {
        id: 'c',
        text: 'An a priori argument from the concept of a designer.',
        explanation:
          'That describes the ontological argument. Fine-tuning rests on empirical claims ' +
          'about physical constants.',
      },
      {
        id: 'd',
        text: 'A reductio ad absurdum.',
        explanation:
          'No contradiction is derived from a supposition. The argument compares explanations ' +
          'rather than eliminating one by absurdity.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-3-e2',
    type: 'choice',
    conceptIds: ['multiverse-objection'],
    prompt: 'What is the standard reply to the multiverse objection?',
    options: [
      {
        id: 'a',
        text: 'That multiverses are unscientific.',
        explanation:
          'Multiverse models arise independently from inflationary cosmology, so dismissing ' +
          'them as unscientific is too quick.',
      },
      {
        id: 'b',
        text: 'That a multiverse-generating mechanism would itself need specific conditions.',
        explanation:
          'Correct. The reply relocates the question rather than answering it — though critics ' +
          'note the same move could be made against any explanation.',
      },
      {
        id: 'c',
        text: 'That there is only one universe.',
        explanation:
          'Asserting this begs the question against the objection rather than replying to it.',
      },
      {
        id: 'd',
        text: 'That the constants are not really fine-tuned.',
        explanation:
          'That would abandon the argument\u2019s own first premise, so no defender would offer ' +
          'it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-3-e3',
    type: 'choice',
    conceptIds: ['anthropic-principle'],
    prompt: 'What do critics say the anthropic principle fails to explain?',
    options: [
      {
        id: 'a',
        text: 'Why we exist.',
        explanation:
          'The principle addresses this directly — we exist in conditions permitting us.',
      },
      {
        id: 'b',
        text: 'Why any life-permitting conditions obtain at all, as opposed to why we observe them.',
        explanation:
          'Correct. The firing squad analogy makes it vivid: surviving is unsurprising given ' +
          'that you are around to notice, but still calls for explanation.',
      },
      {
        id: 'c',
        text: 'How observation works.',
        explanation:
          'Not what is at issue. The principle concerns a selection effect, not perception.',
      },
      {
        id: 'd',
        text: 'Why the universe is large.',
        explanation:
          'Size is not what the fine-tuning argument concerns — the constants are.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-3-e4',
    type: 'choice',
    conceptIds: ['fine-tuning'],
    prompt: 'Why is "every specific outcome is improbable" an inadequate objection?',
    options: [
      {
        id: 'a',
        text: 'Because improbable things never happen.',
        explanation:
          'Improbable things happen constantly. That is precisely why bare improbability ' +
          'cannot be the whole claim.',
      },
      {
        id: 'b',
        text: 'Because the argument appeals to a specifiable outcome, not merely an improbable one.',
        explanation:
          'Correct. Every card deal is improbable, but a deal giving each player a perfect ' +
          'suit is improbable *and* specifiable — and whether life-permitting constants are ' +
          'relevantly specifiable is the real dispute.',
      },
      {
        id: 'c',
        text: 'Because probability does not apply to universes.',
        explanation:
          'That is closer to a different objection — that no well-defined measure exists over ' +
          'the constants — and it cuts against the argument rather than for it.',
      },
      {
        id: 'd',
        text: 'Because the constants are necessary.',
        explanation:
          'If they were necessary the argument would collapse, so no defender asserts this.',
      },
    ],
    correctId: 'b',
  },

  /* ------------------------------------------------------------------ rel-4 */
  {
    id: 'rel-4-e1',
    type: 'choice',
    conceptIds: ['ontological-argument'],
    prompt: 'What makes the ontological argument unusual?',
    options: [
      {
        id: 'a',
        text: 'It is the only valid theistic argument.',
        explanation:
          'Several theistic arguments are valid. Validity is not what sets this one apart.',
      },
      {
        id: 'b',
        text: 'It is entirely a priori, using no observation at all.',
        explanation:
          'Correct. Every other argument here appeals to something observed — the universe, ' +
          'the constants, suffering. This one runs from a concept.',
      },
      {
        id: 'c',
        text: 'It was never taken seriously.',
        explanation:
          'It has occupied first-rate philosophers for nine hundred years, including Gödel and ' +
          'Plantinga in the modern era.',
      },
      {
        id: 'd',
        text: 'It concerns only the God of a particular tradition.',
        explanation:
          'It concerns a maximally great being, defined abstractly rather than by any ' +
          'tradition.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-4-e2',
    type: 'choice',
    conceptIds: ['ontological-argument', 'necessity'],
    prompt: 'What is the parody objection to the modal version?',
    options: [
      {
        id: 'a',
        text: 'That a greatest conceivable island would also exist.',
        explanation:
          'Gaunilo\u2019s objection to Anselm, and defenders reply that islands have no intrinsic ' +
          'maximum. The modal version faces a sharper parody.',
      },
      {
        id: 'b',
        text: 'That the possibility of the being\u2019s non-existence yields its necessary non-existence.',
        explanation:
          'Correct. The same modal logic runs both ways, and both possibility claims look ' +
          'equally intuitive — which is the difficulty.',
      },
      {
        id: 'c',
        text: 'That existence is not a predicate.',
        explanation:
          'Kant\u2019s objection, and a real one, but distinct from the parody strategy.',
      },
      {
        id: 'd',
        text: 'That the argument is invalid.',
        explanation:
          'The modal version is valid. The dispute is entirely about the possibility premise.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-4-e3',
    type: 'choice',
    conceptIds: ['existence-property'],
    prompt: 'How do modal versions attempt to escape Kant\u2019s objection?',
    options: [
      {
        id: 'a',
        text: 'By denying that God exists.',
        explanation:
          'That would abandon the very conclusion the argument exists to establish, so no defender ' +
          'would offer it as a reply to Kant.',
      },
      {
        id: 'b',
        text: 'By ascribing necessary existence, a modal status, rather than bare existence.',
        explanation:
          'Correct, though critics answer that necessary existence inherits the same problem, ' +
          'since it still treats existing as something added to a description.',
      },
      {
        id: 'c',
        text: 'By appealing to observation.',
        explanation:
          'That would forfeit the argument\u2019s a priori character, which is its distinguishing ' +
          'feature.',
      },
      {
        id: 'd',
        text: 'By redefining greatness.',
        explanation:
          'Modal versions keep the notion of maximal greatness. The change is in what the ' +
          'argument ascribes.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-4-e4',
    type: 'choice',
    conceptIds: ['ontological-argument'],
    prompt: 'What does the modal argument establish even if it persuades nobody?',
    options: [
      {
        id: 'a',
        text: 'Nothing whatever.',
        explanation:
          'A valid argument always establishes a conditional relationship between its premise ' +
          'and its conclusion, whether or not anyone grants the premise.',
      },
      {
        id: 'b',
        text: 'That anyone granting the being\u2019s possibility is committed to its existence.',
        explanation:
          'Correct. The two claims stand or fall together, which is a genuine result even ' +
          'though the premise is where all the disagreement lives.',
      },
      {
        id: 'c',
        text: 'That God exists necessarily.',
        explanation:
          'Only if the possibility premise is granted, and that is exactly what critics ' +
          'refuse.',
      },
      {
        id: 'd',
        text: 'That existence is a predicate.',
        explanation:
          'That is disputed and would be an assumption of the argument rather than a result of ' +
          'it.',
      },
    ],
    correctId: 'b',
  },

  /* ------------------------------------------------------------------ rel-5 */
  {
    id: 'rel-5-e1',
    type: 'choice',
    conceptIds: ['omnipotence'],
    prompt: 'What is the standard reply to the stone paradox?',
    options: [
      {
        id: 'a',
        text: 'That God could lift any stone regardless of weight.',
        explanation:
          'This concedes God cannot create the stone, which the paradox treats as a limitation.',
      },
      {
        id: 'b',
        text: 'That the task described is incoherent, so failing to perform it is no limitation.',
        explanation:
          'Correct. A contradiction describes no task at all, much as "a round square" names ' +
          'nothing to be created.',
      },
      {
        id: 'c',
        text: 'That omnipotence is a metaphor.',
        explanation:
          'Classical theists take it literally. Weakening it to metaphor would abandon the ' +
          'attribute rather than defend it.',
      },
      {
        id: 'd',
        text: 'That the paradox is unanswerable.',
        explanation:
          'Most philosophers on both sides regard the logical-possibility restriction as ' +
          'adequate here. The foreknowledge puzzle is the harder one.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-5-e2',
    type: 'choice',
    conceptIds: ['omniscience', 'free-will'],
    prompt: 'What is the actual worry in the foreknowledge argument?',
    options: [
      {
        id: 'a',
        text: 'That God\u2019s knowledge causes your actions.',
        explanation:
          'A common misreading, and defenders who answer it that way have missed the argument. ' +
          'Causation is not claimed.',
      },
      {
        id: 'b',
        text: 'That a fixed past truth removes alternative possibilities.',
        explanation:
          'Correct, and it is the same structure as the consequence argument from Metaphysics ' +
          'lesson 13: what follows from what you cannot change, you cannot change.',
      },
      {
        id: 'c',
        text: 'That God might be mistaken.',
        explanation:
          'Omniscience rules that out by definition, so it cannot be the difficulty.',
      },
      {
        id: 'd',
        text: 'That the future does not exist.',
        explanation:
          'That is a question about the theory of time, which bears on the puzzle but is not ' +
          'the worry itself.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-5-e3',
    type: 'choice',
    conceptIds: ['omniscience'],
    prompt: 'What is the Ockhamist reply to the foreknowledge argument?',
    options: [
      {
        id: 'a',
        text: 'That God does not know the future.',
        explanation:
          'That is open theism, which restricts omniscience. Ockhamism keeps full ' +
          'foreknowledge.',
      },
      {
        id: 'b',
        text: 'That God\u2019s past belief is a "soft fact" dependent on the future, so not fixed in the relevant sense.',
        explanation:
          'Correct. It targets the premise that the past is entirely beyond our power, by ' +
          'distinguishing facts genuinely about the past from those that merely appear to be.',
      },
      {
        id: 'c',
        text: 'That free will is an illusion.',
        explanation:
          'That would concede the argument\u2019s conclusion rather than reply to it.',
      },
      {
        id: 'd',
        text: 'That God is timeless.',
        explanation:
          'A different reply, and one with its own costs — it sits awkwardly with a God who ' +
          'acts in history.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-5-e4',
    type: 'choice',
    conceptIds: ['omniscience', 'b-theory'],
    prompt: 'Why does the timeless reply create tension with the Kalam argument?',
    options: [
      {
        id: 'a',
        text: 'Because timelessness implies the universe is eternal.',
        explanation:
          'A timeless God is compatible with a temporally finite universe. That is not the ' +
          'tension.',
      },
      {
        id: 'b',
        text: 'Because it fits more naturally with a B-theory of time, which the Kalam needs to reject.',
        explanation:
          'Correct. A defender leaning on timelessness here and on the A-theory there owes an ' +
          'account of how both fit together.',
      },
      {
        id: 'c',
        text: 'Because the Kalam denies omniscience.',
        explanation:
          'It says nothing about omniscience — it argues only to a cause of the universe.',
      },
      {
        id: 'd',
        text: 'Because timelessness is incoherent.',
        explanation:
          'It is contested but widely defended. The tension identified here is one of fit ' +
          'between commitments, not incoherence.',
      },
    ],
    correctId: 'b',
  },

  /* ------------------------------------------------------------------ rel-6 */
  {
    id: 'rel-6-e1',
    type: 'choice',
    conceptIds: ['problem-of-evil'],
    prompt: 'What distinguishes the logical from the evidential problem of evil?',
    options: [
      {
        id: 'a',
        text: 'The logical version concerns more suffering.',
        explanation:
          'Quantity is not the difference. The logical version can run on a single instance.',
      },
      {
        id: 'b',
        text: 'The logical version claims strict inconsistency; the evidential claims suffering lowers the probability.',
        explanation:
          'Correct, and the distinction is decisive: a reply adequate against one may be quite ' +
          'inadequate against the other.',
      },
      {
        id: 'c',
        text: 'The evidential version is about natural evil only.',
        explanation:
          'Both versions can appeal to either kind. The difference is the strength of claim.',
      },
      {
        id: 'd',
        text: 'The logical version is newer.',
        explanation:
          'The reverse — the logical version is the older formulation, and Rowe\u2019s evidential ' +
          'version dates from 1979.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-6-e2',
    type: 'choice',
    conceptIds: ['problem-of-evil', 'free-will-defence'],
    prompt: 'Why does the free will defence succeed against the logical version?',
    options: [
      {
        id: 'a',
        text: 'Because it proves God has a reason for suffering.',
        explanation:
          'It proves no such thing. It shows only that a reason is possible, which is exactly ' +
          'why it is called a defence rather than a theodicy.',
      },
      {
        id: 'b',
        text: 'Because a claim of strict inconsistency is defeated by showing the combination is possible.',
        explanation:
          'Correct. Inconsistency means no possible situation contains both, so one coherent ' +
          'scenario refutes it.',
      },
      {
        id: 'c',
        text: 'Because free will is more valuable than avoiding suffering.',
        explanation:
          'The defence does not need this claim — it needs only that it *might* be true.',
      },
      {
        id: 'd',
        text: 'Because evil does not exist.',
        explanation:
          'Essentially everyone, theists included, grants that it does.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-6-e3',
    type: 'choice',
    conceptIds: ['gratuitous-evil'],
    prompt: 'What does the evidential argument turn on?',
    options: [
      {
        id: 'a',
        text: 'Whether God exists.',
        explanation:
          'That is the conclusion at issue, so it cannot also be what the argument turns on.',
      },
      {
        id: 'b',
        text: 'Whether our failure to see a justifying reason is good evidence there is none.',
        explanation:
          'Correct, and this is precisely where sceptical theism intervenes — by denying we ' +
          'are positioned to judge.',
      },
      {
        id: 'c',
        text: 'Whether suffering is unpleasant.',
        explanation:
          'Not in dispute, and it would not distinguish the two versions of the problem.',
      },
      {
        id: 'd',
        text: 'Whether free will exists.',
        explanation:
          'Relevant to the logical version via the free will defence, but the evidential ' +
          'version can run even granting free will.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-6-e4',
    type: 'choice',
    conceptIds: ['problem-of-evil'],
    prompt: 'What cost does sceptical theism carry?',
    options: [
      {
        id: 'a',
        text: 'It concedes that God does not exist.',
        explanation:
          'Sceptical theism is a defence of theism, not a concession against it. The cost lies ' +
          'elsewhere \u2014 in what else the same reasoning would undercut.',
      },
      {
        id: 'b',
        text: 'The same reasoning may undercut other inferences, including trust in divine promises.',
        explanation:
          'Correct. If our grasp of divine reasons is poor enough to block the inference from ' +
          'apparent to actual pointlessness, it may be poor elsewhere too.',
      },
      {
        id: 'c',
        text: 'It requires denying that suffering occurs.',
        explanation:
          'It grants suffering fully. The claim concerns our ability to judge its purpose.',
      },
      {
        id: 'd',
        text: 'It only works against the logical version.',
        explanation:
          'It is aimed specifically at the evidential version — the free will defence handles ' +
          'the logical one.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-6-e5',
    type: 'sort',
    conceptIds: ['problem-of-evil', 'premise', 'conclusion'],
    prompt: 'Label each statement in the logical problem of evil.',
    statements: [
      { id: 's1', text: 'An omnipotent being could prevent all evil.', role: 'premise' },
      { id: 's2', text: 'A perfectly good being would want to prevent all evil.', role: 'premise' },
      { id: 's3', text: 'An omnipotent, perfectly good being does not exist.', role: 'conclusion' },
      { id: 's4', text: 'Epicurus lived in the fourth century BC.', role: 'irrelevant' },
    ],
    explanation:
      'The premises about power and goodness, together with the fact of evil, generate the ' +
      'inconsistency. Note the free will defence attacks the second premise by arguing a good ' +
      'being might permit evil for a greater good.',
  },

  /* ------------------------------------------------------------------ rel-7 */
  {
    id: 'rel-7-e1',
    type: 'choice',
    conceptIds: ['theodicy', 'free-will-defence'],
    prompt: 'What is the difference between a theodicy and a defence?',
    options: [
      {
        id: 'a',
        text: 'A theodicy is shorter.',
        explanation:
          'Length is irrelevant. The difference is in what each claims to establish.',
      },
      {
        id: 'b',
        text: 'A theodicy gives God\u2019s actual reasons; a defence shows only that some reason is possible.',
        explanation:
          'Correct, and knowing which is on offer tells you exactly what it can accomplish ' +
          'against which version of the problem.',
      },
      {
        id: 'c',
        text: 'A defence is offered only by atheists.',
        explanation:
          'Defences are offered by theists — Plantinga\u2019s is the best known.',
      },
      {
        id: 'd',
        text: 'A theodicy concerns natural evil only.',
        explanation:
          'Theodicies address both kinds, and natural evil is in fact where they struggle most.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-7-e2',
    type: 'choice',
    conceptIds: ['theodicy'],
    prompt: 'What is the main objection to soul-making theodicy?',
    options: [
      {
        id: 'a',
        text: 'That character development is worthless.',
        explanation:
          'Few would claim character development is worthless, and the objection does not require ' +
          'it. The difficulty concerns who suffers rather than whether growth has value.',
      },
      {
        id: 'b',
        text: 'That suffering falls heavily on those least able to grow from it, including infants and animals.',
        explanation:
          'Correct. The distribution fits poorly with a developmental purpose, which is a ' +
          'problem about the pattern rather than the principle.',
      },
      {
        id: 'c',
        text: 'That suffering never builds character.',
        explanation:
          'Too strong, and the objection is more precise: it concerns who suffers rather than ' +
          'whether suffering can ever be formative.',
      },
      {
        id: 'd',
        text: 'That Hick was not a theist.',
        explanation:
          'He was, and an author\u2019s beliefs bear on nothing — the ad hominem point from Logic ' +
          'lesson 15.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-7-e3',
    type: 'choice',
    conceptIds: ['free-will-defence'],
    prompt: 'What does the free will defence struggle to accommodate?',
    options: [
      {
        id: 'a',
        text: 'Suffering caused by human choices.',
        explanation:
          'That is exactly what it handles best — freely chosen wrongdoing is its central case.',
      },
      {
        id: 'b',
        text: 'Natural evil, such as earthquakes and disease, which no agent chooses.',
        explanation:
          'Correct. Extending the defence there requires further moves, such as appealing to ' +
          'non-human agency or to the value of law-governed regularity.',
      },
      {
        id: 'c',
        text: 'The logical problem of evil.',
        explanation:
          'It answers the logical problem well — that is its principal achievement.',
      },
      {
        id: 'd',
        text: 'The existence of free will.',
        explanation:
          'The defence assumes free will as a premise rather than needing to account for it, so ' +
          'this is not something it struggles with.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-7-e4',
    type: 'choice',
    conceptIds: ['theodicy', 'problem-of-evil'],
    prompt: 'Why is a weaker reply sometimes the better one?',
    options: [
      {
        id: 'a',
        text: 'Because weaker claims are more likely to be true.',
        explanation:
          'Weaker claims are easier to defend, which is related but not the point about ' +
          'matching a reply to an objection.',
      },
      {
        id: 'b',
        text: 'Because a claim of strict inconsistency needs only a possible scenario to defeat it.',
        explanation:
          'Correct. Matching the strength of the reply to the strength of the objection is the ' +
          'skill — a defence suffices where a theodicy would be doing unnecessary work.',
      },
      {
        id: 'c',
        text: 'Because strong claims are always false.',
        explanation:
          'Plainly not. Strength affects how much support is required, not truth.',
      },
      {
        id: 'd',
        text: 'Because the evidential problem is easier.',
        explanation:
          'The reverse — it is generally regarded as the harder of the two to answer.',
      },
    ],
    correctId: 'b',
  },

  /* ------------------------------------------------------------------ rel-8 */
  {
    id: 'rel-8-e1',
    type: 'choice',
    conceptIds: ['divine-hiddenness'],
    prompt: 'Why is hiddenness independent of the problem of evil?',
    options: [
      {
        id: 'a',
        text: 'Because it concerns only atheists.',
        explanation:
          'It concerns non-resistant non-believers, and it is aimed at theism generally rather ' +
          'than at any group.',
      },
      {
        id: 'b',
        text: 'Because it makes no appeal to suffering, so theodicies about pain leave it untouched.',
        explanation:
          'Correct, and that independence is precisely why it counted as a significant ' +
          'addition rather than a restatement.',
      },
      {
        id: 'c',
        text: 'Because it is a deductive argument.',
        explanation:
          'Both are usually presented deductively. Argument form is not the difference.',
      },
      {
        id: 'd',
        text: 'Because it is more recent.',
        explanation:
          'Being recent does not make it independent. The independence comes from what it ' +
          'appeals to.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-8-e2',
    type: 'choice',
    conceptIds: ['divine-hiddenness'],
    prompt: 'Which premise carries the weight of the argument?',
    options: [
      {
        id: 'a',
        text: 'That relationship requires belief.',
        explanation:
          'Widely granted and rarely disputed — it is close to analytic.',
      },
      {
        id: 'b',
        text: 'That non-resistant non-believers exist.',
        explanation:
          'Correct. Denying it means attributing hidden resistance to sincere enquirers, which ' +
          'is hard to establish and easy to make unfalsifiable.',
      },
      {
        id: 'c',
        text: 'That God is perfectly loving.',
        explanation:
          'This is granted by the theist being addressed, so it is common ground rather than ' +
          'the contested step.',
      },
      {
        id: 'd',
        text: 'The conclusion.',
        explanation:
          'A conclusion is what the premises support; it does not carry weight of its own.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-8-e3',
    type: 'choice',
    conceptIds: ['divine-hiddenness'],
    prompt: 'What is the difficulty with the "hiddenness preserves free response" reply?',
    options: [
      {
        id: 'a',
        text: 'That free will does not exist.',
        explanation:
          'The reply could be assessed either way on that question — the difficulty is more ' +
          'specific.',
      },
      {
        id: 'b',
        text: 'It is unclear why clear evidence would coerce, since people routinely resist what they know.',
        explanation:
          'Correct. Knowledge and compliance come apart constantly, so evidence need not ' +
          'compel assent of the relevant kind.',
      },
      {
        id: 'c',
        text: 'That God is not hidden.',
        explanation:
          'That would deny the phenomenon rather than explain it, and it is a different reply ' +
          'altogether.',
      },
      {
        id: 'd',
        text: 'That belief is involuntary.',
        explanation:
          'An interesting complication that would arguably strengthen the reply rather than ' +
          'undermine it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'rel-8-e4',
    type: 'choice',
    conceptIds: ['divine-hiddenness', 'burden-of-proof'],
    prompt: 'Why is "all non-belief involves hidden resistance" a problematic reply?',
    options: [
      {
        id: 'a',
        text: 'Because it is offensive.',
        explanation:
          'Offensiveness is not a philosophical objection. The problem is evidential.',
      },
      {
        id: 'b',
        text: 'Because it risks being unfalsifiable, attributing motives no evidence could disconfirm.',
        explanation:
          'Correct. A claim compatible with every possible observation offers no support, ' +
          'which connects to the burden-of-proof point from Logic lesson 14.',
      },
      {
        id: 'c',
        text: 'Because resistance is impossible.',
        explanation:
          'Resistance plainly occurs in some cases. The question is whether it occurs in all ' +
          'of them.',
      },
      {
        id: 'd',
        text: 'Because it concedes the argument.',
        explanation:
          'It denies the third premise, so it resists the argument rather than conceding it.',
      },
    ],
    correctId: 'b',
  },
]
