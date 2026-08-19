import type { Argument } from '@/types/content'

/**
 * Religion argument cards.
 *
 * Every card gives premises, support, objections and responses — and where a
 * response has a well-known counter-response, that is included too. No card
 * declares a winner; the verdict field is 'contested' throughout, which is
 * accurate rather than diplomatic.
 */

export const religionArguments: Argument[] = [
  {
    id: 'kalam',
    title: 'The Kalam cosmological argument',
    form: 'Cosmological argument',
    tags: ['religion', 'cosmological', 'causation', 'infinity'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Whatever begins to exist has a cause.',
        support:
          'Defended as a metaphysical intuition rather than an empirical generalisation: ' +
          'something coming from nothing, uncaused, is held to be inconceivable.',
        objections: [
          {
            text:
              'Our causal experience concerns rearrangement of existing material within the ' +
              'universe, not things coming into being from nothing. Extending it to the ' +
              'universe itself is an unsupported leap.',
            responses: [
              'Defenders reply that the principle is grasped a priori rather than by ' +
              'induction, so the narrowness of our sample is beside the point.',
              'Critics answer that intuitions about what can begin uncaused are exactly what ' +
              'we should distrust in unfamiliar territory.',
            ],
          },
          {
            text:
              'Quantum events such as radioactive decay appear to occur without determining ' +
              'causes.',
            responses: [
              'Such events occur within an existing quantum vacuum with definite structure, ' +
              'which is not nothing.',
              'Whether they are genuinely uncaused depends on the interpretation of quantum ' +
              'mechanics, which is unsettled.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'The universe began to exist.',
        support:
          'Argued philosophically from the impossibility of an actual infinite, and ' +
          'scientifically from Big Bang cosmology and the expansion of space.',
        objections: [
          {
            text:
              'On the B-theory of time, nothing comes into being: a first temporal boundary ' +
              'is like a ruler\u2019s first inch, not an event.',
            responses: [
              'Craig defends the A-theory at length precisely because the argument requires ' +
              'it, treating the dispute as central rather than peripheral.',
              'Critics regard the argument\u2019s dependence on a contested theory of time as a ' +
              'significant cost.',
            ],
          },
          {
            text:
              'Big Bang cosmology describes the expansion of the observable universe, not ' +
              'necessarily an absolute beginning; several models posit a prior state.',
            responses: [
              'The Borde-Guth-Vilenkin theorem constrains such models, since any universe on ' +
              'average expanding has a past boundary.',
              'That theorem assumes classical spacetime and may not apply where a quantum ' +
              'theory of gravity is needed.',
            ],
          },
        ],
      },
    ],
    conclusion: 'The universe has a cause.',
  },
  {
    id: 'kalam-personal-cause',
    title: 'Why the cause would be personal',
    form: 'Conceptual analysis',
    tags: ['religion', 'cosmological'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'The cause of the universe is beyond space, time and matter.',
        support: 'It cannot be part of what it explains.',
      },
      {
        label: 'P2',
        text: 'A timeless cause with sufficient conditions eternally present would produce an eternal effect.',
        support: 'Sufficient conditions that always obtain yield an effect that always obtains.',
      },
      {
        label: 'P3',
        text: 'Only an agent can produce a temporally finite effect from a timeless state, by freely choosing.',
        objections: [
          {
            text:
              'This assumes libertarian agency, and it is unclear how a timeless being could ' +
              'perform an act of will, since deciding appears to take time.',
            responses: [
              'Defenders describe the choice as timelessly willing that the universe begin, ' +
              'rather than as a deliberation occurring at a moment.',
              'Critics find this hard to distinguish from the eternal sufficient conditions ' +
              'already ruled out in P2.',
            ],
          },
        ],
      },
    ],
    conclusion: 'The cause of the universe is personal.',
  },
  {
    id: 'fine-tuning-arg',
    title: 'The fine-tuning argument',
    form: 'Inference to the best explanation',
    tags: ['religion', 'teleological', 'probability'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Several physical constants permit life only within extremely narrow ranges.',
        support:
          'Small changes to the cosmological constant or the strength of the nuclear forces ' +
          'would produce a universe with no stable structures.',
        objections: [
          {
            text:
              'We do not know the space of possible constants, so calling the life-permitting ' +
              'range narrow may have no determinate meaning.',
            responses: [
              'Physicists routinely reason about such ranges within established models.',
              'Critics reply that a probability requires a well-defined measure, and none has ' +
              'been established for the constants.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'This is better explained by design than by chance.',
        objections: [
          {
            text:
              'A multiverse with varying constants makes a life-permitting universe ' +
              'unsurprising, and observers necessarily find themselves in such a universe.',
            responses: [
              'A multiverse-generating mechanism would itself require specific conditions, ' +
              'relocating the question rather than answering it.',
              'Multiverse models are motivated independently by inflationary cosmology, so ' +
              'they are not merely ad hoc.',
            ],
          },
          {
            text:
              'Design is not obviously a better explanation: it posits an unexplained ' +
              'designer, so explanatory economy is not clearly gained.',
            responses: [
              'A necessary being would require no further explanation, unlike a contingent ' +
              'multiverse.',
              'That reply relies on the coherence of necessary concrete existence, which is ' +
              'itself disputed.',
            ],
          },
        ],
      },
    ],
    conclusion: 'The fine-tuning of the constants is evidence for design.',
  },
  {
    id: 'ontological-arg',
    title: 'The modal ontological argument',
    form: 'Modal deduction',
    tags: ['religion', 'ontological', 'modality'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'It is possible that a maximally great being exists.',
        support: 'The concept appears coherent, and coherence is evidence of possibility.',
        objections: [
          {
            text:
              'A parallel argument from the possibility of a maximally great being\u2019s ' +
              'non-existence yields the opposite conclusion with equal force.',
            responses: [
              'Defenders argue the concept of maximal greatness is more clearly coherent than ' +
              'its negation.',
              'Critics reply that this simply restates the disagreement rather than settling ' +
              'it, leaving the argument unable to persuade anyone not already convinced.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'A maximally great being would exist necessarily, so exists in every possible world if in any.',
        support: 'Necessary existence is taken to be a great-making property.',
        objections: [
          {
            text:
              'Kant\u2019s objection: existence is not a predicate, so it cannot be among a ' +
              'being\u2019s perfections.',
            responses: [
              'Modal versions ascribe necessary existence, a modal status, rather than bare ' +
              'existence, which may escape the objection.',
              'Critics answer that necessary existence inherits the same difficulty, since it ' +
              'still treats existing as something added to a description.',
            ],
          },
        ],
      },
    ],
    conclusion: 'A maximally great being exists.',
  },
  {
    id: 'stone-paradox',
    title: 'The paradox of the stone',
    form: 'Dilemma',
    tags: ['religion', 'omnipotence', 'logic'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Either God can create a stone too heavy for God to lift, or God cannot.',
      },
      {
        label: 'P2',
        text: 'If God cannot create it, there is something God cannot do.',
      },
      {
        label: 'P3',
        text: 'If God can create it, there is something God cannot lift.',
        objections: [
          {
            text:
              'The task described is incoherent — an unliftable object for an omnipotent ' +
              'being — so it is no task at all, and failing to perform a non-task is no ' +
              'limitation.',
            responses: [
              'This is the standard reply, and it requires accepting that omnipotence covers ' +
              'only the logically possible.',
              'Critics ask whether that restriction is principled or merely convenient, though ' +
              'most philosophers on both sides accept it.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Omnipotence, unrestricted, is incoherent.',
  },
  {
    id: 'foreknowledge-arg',
    title: 'Foreknowledge and freedom',
    form: 'Argument for incompatibility',
    tags: ['religion', 'omniscience', 'free-will'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'God knew a thousand years ago that you would act as you will tomorrow.',
        support: 'Omniscience includes knowledge of future free actions.',
      },
      {
        label: 'P2',
        text: 'The past is fixed and beyond anyone\u2019s power to change.',
      },
      {
        label: 'P3',
        text: 'So you cannot act otherwise than as God foreknew.',
        objections: [
          {
            text:
              'Knowing that something will happen does not cause it. Foreknowledge tracks the ' +
              'action rather than constraining it.',
            responses: [
              'The argument does not claim causation, only that the past truth is now fixed, ' +
              'which is enough to remove alternatives.',
              'Ockhamists reply that God\u2019s past belief is a "soft fact" about the past, ' +
              'dependent on the future, and so not fixed in the relevant sense.',
            ],
          },
          {
            text:
              'God may be timeless, in which case there is no past divine belief to be fixed.',
            responses: [
              'This dissolves the problem but sits awkwardly with a God who acts in history.',
              'It also fits more naturally with a B-theory of time, which creates tension with ' +
              'the Kalam argument\u2019s requirements.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Divine foreknowledge is incompatible with human freedom.',
  },
  {
    id: 'logical-evil',
    title: 'The logical problem of evil',
    form: 'Argument from inconsistency',
    tags: ['religion', 'evil'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'An omnipotent being could prevent all evil.',
      },
      {
        label: 'P2',
        text: 'An omniscient being would know of all evil.',
      },
      {
        label: 'P3',
        text: 'A perfectly good being would want to prevent all evil.',
        objections: [
          {
            text:
              'A good being might permit evil for the sake of a greater good it could not ' +
              'otherwise secure — for instance, genuine freedom.',
            responses: [
              "Plantinga's free will defence argues it is at least possible that God could not " +
              'create free creatures guaranteed to choose well, which is enough to defeat a ' +
              'claim of strict inconsistency.',
              'Critics accept this against the logical version while maintaining the ' +
              'evidential version untouched, and note that natural evil is not obviously ' +
              'covered by freedom.',
            ],
          },
        ],
      },
      {
        label: 'P4',
        text: 'Evil exists.',
        support: 'Granted by essentially everyone, including theists.',
      },
    ],
    conclusion: 'An omnipotent, omniscient, perfectly good being does not exist.',
  },
  {
    id: 'evidential-evil',
    title: 'The evidential problem of evil',
    form: 'Probabilistic argument',
    tags: ['religion', 'evil', 'probability'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'There exist instances of intense suffering an omnipotent being could have prevented without losing a greater good.',
        support:
          "Rowe's example: a fawn dying slowly in a forest fire, unobserved, serving no " +
          'apparent purpose.',
        objections: [
          {
            text:
              'Sceptical theism: we are in no position to judge which goods require which ' +
              'evils, so our failure to see a reason is weak evidence there is none.',
            responses: [
              'The reply generalises uncomfortably: the same reasoning would undercut any ' +
              'inference from apparent to actual moral facts.',
              'It may also imply that we cannot trust divine promises, since our grasp of ' +
              'divine reasons is admitted to be poor.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'A perfectly good being would prevent such suffering unless doing so cost a greater good.',
      },
    ],
    conclusion: 'The existence of such suffering is evidence against theism.',
  },
  {
    id: 'hiddenness-arg',
    title: 'The argument from divine hiddenness',
    form: 'Argument from incompatibility',
    tags: ['religion', 'hiddenness'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'A perfectly loving God would always be open to relationship with those willing.',
        support: 'Love, at minimum, does not conceal itself from those seeking it.',
      },
      {
        label: 'P2',
        text: 'Relationship requires belief that the other exists.',
      },
      {
        label: 'P3',
        text: 'There are people who do not believe and are not resisting belief.',
        objections: [
          {
            text:
              'Perhaps all non-belief involves some resistance, conscious or otherwise.',
            responses: [
              'This is difficult to establish and appears to attribute hidden motives to ' +
              'sincere enquirers.',
              'Defenders reply that resistance may be structural rather than deliberate, ' +
              'though critics find this unfalsifiable.',
            ],
          },
          {
            text:
              'Hiddenness may serve a purpose: overwhelming evidence could coerce assent and ' +
              'preclude a free response.',
            responses: [
              'It is unclear why clear evidence would coerce, since people routinely resist ' +
              'what they know to be true.',
              'The reply also sits awkwardly with traditions reporting direct revelation to ' +
              'some individuals but not others.',
            ],
          },
        ],
      },
    ],
    conclusion: 'A perfectly loving God does not exist.',
  },
]
