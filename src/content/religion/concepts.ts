import type { Concept } from '@/types/content'

/**
 * Philosophy of Religion concepts.
 *
 * This subject deliberately reuses machinery rather than rebuilding it: PSR,
 * contingency, necessity, actual infinity and the A/B theory all come from
 * Metaphysics; testimony and the problem of induction from Epistemology.
 *
 * Every entry here is written to present arguments as arguments. Where a
 * position is contested, the body says so and names what the other side holds,
 * rather than settling the question on the reader's behalf.
 */

export const religionConcepts: Concept[] = [
  {
    id: 'classical-theism',
    term: 'Classical theism',
    short: 'God as a necessary, immaterial being with maximal knowledge, power and goodness.',
    body:
      'Classical theism is not any belief in a god but a specific package: a being that exists ' +
      'necessarily, is not made of parts, and possesses knowledge, power and goodness without ' +
      'limit. The package matters because arguments defend and objections attack particular ' +
      'items in it, and a critic who targets a different conception is arguing past the ' +
      'position.',
    relatedConceptIds: ['omnipotence', 'omniscience', 'necessary-being'],
    relatedArgumentIds: [],
    lessonIds: ['rel-1'],
  },
  {
    id: 'necessary-being',
    term: 'Necessary being',
    short: 'A being that exists in every possible situation, not merely in this one.',
    body:
      'A necessary being could not have failed to exist. This is the terminus every ' +
      'cosmological argument aims at, since a contingent explanation would raise the same ' +
      'question again. Critics ask whether the notion is coherent for a concrete being, or ' +
      'whether necessity belongs only to abstract truths.',
    relatedConceptIds: ['necessity', 'contingency', 'psr', 'classical-theism'],
    relatedArgumentIds: ['contingency-argument', 'kalam'],
    lessonIds: ['rel-1'],
  },
  {
    id: 'kalam',
    term: 'Kalam cosmological argument',
    short: 'Whatever begins to exist has a cause; the universe began; so it has a cause.',
    body:
      'Developed by medieval Islamic philosophers, notably al-Ghazali, and revived by William ' +
      'Lane Craig. Its structure is simple and its premises are where all the work happens: ' +
      'the causal principle in P1, and the claim that the past is finite in P2. Both are ' +
      'defended and contested at length.',
    relatedConceptIds: ['actual-infinity', 'a-theory', 'causation', 'necessary-being'],
    relatedArgumentIds: ['kalam'],
    lessonIds: ['rel-2'],
  },
  {
    id: 'fine-tuning',
    term: 'Fine-tuning argument',
    short: 'The constants permitting life fall in a narrow range, which design would explain.',
    body:
      'Several physical constants appear to permit life only within very narrow limits. The ' +
      'argument holds that design explains this better than chance. It is an inference to the ' +
      'best explanation rather than a deduction, so it is assessed on comparative explanatory ' +
      'power — which is also where the multiverse reply operates.',
    relatedConceptIds: ['multiverse-objection', 'anthropic-principle', 'induction'],
    relatedArgumentIds: ['fine-tuning-arg'],
    lessonIds: ['rel-3'],
  },
  {
    id: 'anthropic-principle',
    term: 'Anthropic principle',
    short: 'We could only observe a universe compatible with observers.',
    body:
      'Any universe we find ourselves in must permit our existence, so discovering that ours ' +
      'does is unsurprising. Whether this dissolves the fine-tuning argument is disputed: ' +
      'critics of the reply say it explains why we observe life-permitting conditions but not ' +
      'why any obtain.',
    relatedConceptIds: ['fine-tuning', 'multiverse-objection'],
    relatedArgumentIds: ['fine-tuning-arg'],
    lessonIds: ['rel-3'],
  },
  {
    id: 'multiverse-objection',
    term: 'Multiverse objection',
    short: 'With enough universes, a life-permitting one is unsurprising.',
    body:
      'If vastly many universes exist with varying constants, some will permit life by chance, ' +
      'and observers necessarily find themselves in those. Defenders of fine-tuning reply that ' +
      'a multiverse generator would itself need fine-tuning, and that the reply risks ' +
      'explaining any improbability whatever.',
    relatedConceptIds: ['fine-tuning', 'anthropic-principle'],
    relatedArgumentIds: ['fine-tuning-arg'],
    lessonIds: ['rel-3'],
  },
  {
    id: 'ontological-argument',
    term: 'Ontological argument',
    short: 'An attempt to derive God\u2019s existence from the concept of God alone.',
    body:
      'Anselm argued that a being than which none greater can be conceived must exist, since ' +
      'existing is greater than not existing. Modal versions replace this with the claim that ' +
      'a necessary being is possible, and derive actuality from possibility. Uniquely among ' +
      'theistic arguments, it is entirely a priori.',
    relatedConceptIds: ['existence-property', 'necessity', 'a-priori'],
    relatedArgumentIds: ['ontological-arg'],
    lessonIds: ['rel-4'],
  },
  {
    id: 'omnipotence',
    term: 'Omnipotence',
    short: 'Maximal power — though what that includes is disputed.',
    body:
      'Few defenders take omnipotence to include doing the logically impossible, since a ' +
      'contradiction describes no task at all. The standard formulation is the power to bring ' +
      'about any logically possible state of affairs, which is what the stone paradox is ' +
      'designed to test.',
    relatedConceptIds: ['omniscience', 'classical-theism', 'contradiction'],
    relatedArgumentIds: ['stone-paradox'],
    lessonIds: ['rel-5'],
  },
  {
    id: 'omniscience',
    term: 'Omniscience',
    short: 'Knowing every truth — which raises problems about the future.',
    body:
      'If God knows today what you will do tomorrow, it appears you cannot do otherwise, ' +
      'threatening free will. Responses include denying that foreknowledge causes anything, ' +
      'placing God outside time altogether, or restricting omniscience to what is knowable.',
    relatedConceptIds: ['omnipotence', 'free-will', 'determinism', 'b-theory'],
    relatedArgumentIds: ['foreknowledge-arg'],
    lessonIds: ['rel-5'],
  },
  {
    id: 'problem-of-evil',
    term: 'Problem of evil',
    short: 'Suffering seems inconsistent with, or evidence against, a perfect God.',
    body:
      'The logical version claims outright inconsistency between God and any evil; the ' +
      'evidential version claims suffering makes theism less probable. The distinction ' +
      'matters, because a defence sufficient against the first is not sufficient against the ' +
      'second.',
    relatedConceptIds: ['theodicy', 'free-will-defence', 'gratuitous-evil'],
    relatedArgumentIds: ['logical-evil', 'evidential-evil'],
    lessonIds: ['rel-6'],
  },
  {
    id: 'gratuitous-evil',
    term: 'Gratuitous evil',
    short: 'Suffering that serves no greater purpose.',
    body:
      'The evidential argument turns on whether any suffering is genuinely pointless. Since ' +
      'proving a negative is hard, the dispute concerns how much weight to place on our ' +
      'failure to find a justifying reason — which is a question about the limits of human ' +
      'insight as much as about suffering.',
    relatedConceptIds: ['problem-of-evil', 'theodicy', 'burden-of-proof'],
    relatedArgumentIds: ['evidential-evil'],
    lessonIds: ['rel-6'],
  },
  {
    id: 'theodicy',
    term: 'Theodicy',
    short: 'An attempt to explain why God permits suffering.',
    body:
      'A theodicy offers actual reasons; a defence offers only possible ones, which suffices ' +
      'against the logical problem. Soul-making theodicies hold that a world with genuine ' +
      'stakes develops character. Critics reply that the distribution of suffering fits ' +
      'poorly with any developmental purpose.',
    relatedConceptIds: ['problem-of-evil', 'free-will-defence', 'gratuitous-evil'],
    relatedArgumentIds: ['logical-evil'],
    lessonIds: ['rel-7'],
  },
  {
    id: 'free-will-defence',
    term: 'Free will defence',
    short: 'Genuine freedom entails the possibility of its misuse.',
    body:
      "Plantinga's defence argues it is possible that significant freedom is worth its costs " +
      'and that God could not guarantee free creatures always choose well. It answers the ' +
      'logical problem, since possibility is all that is needed there. Natural evil, which no ' +
      'agent chooses, remains harder to accommodate.',
    relatedConceptIds: ['problem-of-evil', 'theodicy', 'free-will'],
    relatedArgumentIds: ['logical-evil'],
    lessonIds: ['rel-7'],
  },
  {
    id: 'divine-hiddenness',
    term: 'Divine hiddenness',
    short: 'A loving God would not remain hidden from those open to belief.',
    body:
      "Schellenberg's argument holds that non-resistant non-belief is incompatible with " +
      'perfect love, since love seeks relationship. Responses argue that hiddenness serves ' +
      'purposes — preserving free response, or developing faith — or dispute that ' +
      'non-resistant non-believers exist in the relevant sense.',
    relatedConceptIds: ['problem-of-evil', 'classical-theism'],
    relatedArgumentIds: ['hiddenness-arg'],
    lessonIds: ['rel-8'],
  },
]
