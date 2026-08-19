import type { Concept } from '@/types/content'

/**
 * Epistemology concepts. Kept in their own file rather than appended to the
 * logic concepts so each subject stays independently readable — the registry
 * merges them.
 */

export const epistemologyConcepts: Concept[] = [
  /* ------------------------------------------------- Unit 1: what knowledge is */
  {
    id: 'knowledge',
    term: 'Knowledge',
    short: 'More than true belief — a true belief held for the right reasons.',
    body:
      'Guessing correctly is not knowing. If you believe the coin will land heads and it does, ' +
      'you had a true belief but no knowledge, because nothing connected your belief to the ' +
      'fact. Epistemology begins with the question of what that missing connection is.',
    relatedConceptIds: ['justified-true-belief', 'justification', 'gettier'],
    relatedArgumentIds: ['lucky-guess'],
    lessonIds: ['epis-1'],
  },
  {
    id: 'justified-true-belief',
    term: 'Justified true belief',
    short: 'The classical analysis: knowledge is belief that is both true and justified.',
    body:
      'The JTB analysis states three conditions, each claimed to be necessary and jointly ' +
      'sufficient: you believe it, it is true, and you have good reason. Each condition rules ' +
      'out a distinct failure — believing without evidence, being confidently wrong, and being ' +
      'right by luck. It held for two thousand years before Gettier.',
    relatedConceptIds: ['knowledge', 'justification', 'gettier', 'necessary-condition'],
    relatedArgumentIds: ['jtb-analysis'],
    lessonIds: ['epis-2'],
  },
  {
    id: 'justification',
    term: 'Justification',
    short: 'Whatever makes a belief reasonable to hold.',
    body:
      'Justification is the third condition of JTB and the hardest to pin down. Evidence, ' +
      'reliable perception, sound reasoning and credible testimony all count. Crucially, ' +
      'justification does not guarantee truth — a belief can be perfectly justified and still ' +
      'false, which is what makes Gettier cases possible.',
    relatedConceptIds: ['justified-true-belief', 'gettier', 'internalism', 'externalism'],
    relatedArgumentIds: [],
    lessonIds: ['epis-2'],
  },
  {
    id: 'gettier',
    term: 'Gettier problem',
    short: 'A case with justified true belief that is not knowledge.',
    body:
      'Gettier constructed cases where all three JTB conditions hold yet nobody would call it ' +
      'knowledge, because the belief is true by accident. The justification points at one fact ' +
      'while the truth comes from another. These are counterexamples to a definition, and one ' +
      'is enough to show the analysis incomplete.',
    relatedConceptIds: ['justified-true-belief', 'knowledge', 'counterexample'],
    relatedArgumentIds: ['gettier-clock', 'gettier-sheep'],
    lessonIds: ['epis-3'],
  },
  {
    id: 'regress-problem',
    term: 'Regress problem',
    short: 'Every justification needs justifying, apparently without end.',
    body:
      'If a belief needs support, that support needs support too. Three exits present ' +
      'themselves: the chain runs forever, it loops back on itself, or it stops somewhere. ' +
      'Each exit is a theory of justification, and the regress argument is what forces the ' +
      'choice between them.',
    relatedConceptIds: ['foundationalism', 'coherentism', 'justification', 'infinite-regress'],
    relatedArgumentIds: ['regress-trilemma'],
    lessonIds: ['epis-4'],
  },
  {
    id: 'foundationalism',
    term: 'Foundationalism',
    short: 'Some beliefs are justified without resting on further beliefs.',
    body:
      'The regress stops at basic beliefs that need no support from anything else — for ' +
      'classical foundationalists, immediate experience and self-evident truths. The standing ' +
      'challenge is explaining what makes a basic belief justified without appeal to other ' +
      'beliefs, without simply declaring the problem solved.',
    relatedConceptIds: ['coherentism', 'regress-problem', 'justification'],
    relatedArgumentIds: ['regress-trilemma'],
    lessonIds: ['epis-5'],
  },
  {
    id: 'coherentism',
    term: 'Coherentism',
    short: 'Beliefs are justified by fitting together, not by resting on foundations.',
    body:
      'Justification is a property of the whole web rather than a chain with an end. The ' +
      'circle is embraced rather than avoided, on the grounds that it is large and mutually ' +
      'supporting rather than viciously tight. The standing objection is that a coherent set ' +
      'can be entirely detached from reality.',
    relatedConceptIds: ['foundationalism', 'regress-problem', 'circular-reasoning'],
    relatedArgumentIds: ['regress-trilemma'],
    lessonIds: ['epis-5'],
  },
  {
    id: 'internalism',
    term: 'Internalism',
    short: 'What justifies a belief must be accessible to the believer.',
    body:
      'On an internalist view you can tell, by reflection, what makes your beliefs reasonable. ' +
      'Justification is something you have access to rather than something that happens to ' +
      'you. The cost is that reliably produced beliefs may fail to count as knowledge when ' +
      'the believer cannot articulate why they hold.',
    relatedConceptIds: ['externalism', 'justification'],
    relatedArgumentIds: [],
    lessonIds: ['epis-6'],
  },
  {
    id: 'externalism',
    term: 'Externalism',
    short: 'A belief can be justified by facts the believer has no access to.',
    body:
      'What matters is whether the belief was produced reliably, not whether the believer can ' +
      'explain it. A chicken sexer who sorts accurately without knowing how counts as knowing. ' +
      'The cost is that justification becomes something you might have without any way of ' +
      'telling that you do.',
    relatedConceptIds: ['internalism', 'justification', 'testimony'],
    relatedArgumentIds: [],
    lessonIds: ['epis-6'],
  },

  /* -------------------------------------------- Unit 2: where knowledge comes from */
  {
    id: 'a-priori',
    term: 'A priori',
    short: 'Knowable independently of experience.',
    body:
      'Mathematical and logical truths are the standard examples: you need not measure ' +
      'triangles to know they have three sides. Experience may be needed to acquire the ' +
      'concepts, but not to see that the claim holds. The label concerns how a claim is ' +
      'justified, not how it was first learned.',
    relatedConceptIds: ['a-posteriori', 'rationalism', 'deduction'],
    relatedArgumentIds: [],
    lessonIds: ['epis-7'],
  },
  {
    id: 'a-posteriori',
    term: 'A posteriori',
    short: 'Knowable only through experience.',
    body:
      'Almost everything known about the world is a posteriori: that water boils at 100°C, ' +
      'that Paris is in France. No amount of reflection settles these — you have to look. The ' +
      'interesting disputes concern claims that seem to sit between the two categories.',
    relatedConceptIds: ['a-priori', 'empiricism', 'induction'],
    relatedArgumentIds: [],
    lessonIds: ['epis-7'],
  },
  {
    id: 'rationalism',
    term: 'Rationalism',
    short: 'Substantial knowledge of the world is available a priori.',
    body:
      'Rationalists hold that reason alone delivers more than definitions — that some ' +
      'substantive truths about reality can be established without observation. The strongest ' +
      'case is mathematics, which appears to describe the world while being established ' +
      'entirely by proof.',
    relatedConceptIds: ['empiricism', 'a-priori'],
    relatedArgumentIds: [],
    lessonIds: ['epis-8'],
  },
  {
    id: 'empiricism',
    term: 'Empiricism',
    short: 'All substantial knowledge of the world comes through experience.',
    body:
      'Empiricists allow a priori knowledge of definitions and logic but deny it reaches the ' +
      'world. Reason can tell you bachelors are unmarried; only observation tells you any ' +
      'exist. The standing difficulty is accounting for mathematics without either denying it ' +
      'is substantive or admitting a priori knowledge of reality.',
    relatedConceptIds: ['rationalism', 'a-posteriori', 'problem-of-induction'],
    relatedArgumentIds: [],
    lessonIds: ['epis-8'],
  },
  {
    id: 'testimony',
    term: 'Testimony',
    short: 'Knowledge acquired by being told, rather than by looking.',
    body:
      'Most of what anyone knows came from someone else — your date of birth, the existence ' +
      'of Antarctica, every historical fact. The question is whether testimony is a basic ' +
      'source of knowledge in its own right, or whether it must be underwritten by inductive ' +
      'evidence that speakers are generally reliable.',
    relatedConceptIds: ['justification', 'externalism', 'burden-of-proof'],
    relatedArgumentIds: ['testimony-reduction'],
    lessonIds: ['epis-9'],
  },
  {
    id: 'problem-of-induction',
    term: 'Problem of induction',
    short: 'Past regularities cannot be shown to support future predictions without circularity.',
    body:
      'Hume asked what justifies expecting the future to resemble the past. Not deduction, ' +
      'since a change is conceivable. Not experience, since that argument would assume the ' +
      'very principle at issue. The result is that the reasoning underlying all of science ' +
      'has no non-circular defence.',
    relatedConceptIds: ['induction', 'circular-reasoning', 'empiricism'],
    relatedArgumentIds: ['humean-induction'],
    lessonIds: ['epis-10'],
  },

  /* --------------------------------------------------------- Unit 3: scepticism */
  {
    id: 'scepticism',
    term: 'Scepticism',
    short: 'The claim that knowledge of some domain is unattainable.',
    body:
      'Philosophical scepticism is not casual doubt but an argument: here is a possibility you ' +
      'cannot rule out, and it is incompatible with your knowing. Its value lies less in ' +
      'whether anyone believes it than in what answering it requires.',
    relatedConceptIds: ['cartesian-doubt', 'dream-argument', 'brain-in-a-vat', 'knowledge'],
    relatedArgumentIds: ['sceptical-argument'],
    lessonIds: ['epis-11'],
  },
  {
    id: 'cartesian-doubt',
    term: 'Cartesian doubt',
    short: 'Systematically rejecting anything that admits of any doubt.',
    body:
      'Descartes set out to doubt everything that could conceivably be false, hoping to find ' +
      'something that survived. The method is deliberately extreme: a belief fails the test ' +
      'if there is any possible scenario, however unlikely, in which it is false.',
    relatedConceptIds: ['scepticism', 'dream-argument', 'foundationalism'],
    relatedArgumentIds: ['cogito'],
    lessonIds: ['epis-11'],
  },
  {
    id: 'dream-argument',
    term: 'Dream argument',
    short: 'Nothing in experience distinguishes waking from dreaming.',
    body:
      'Dreams can be indistinguishable from waking life while they happen. If no internal mark ' +
      'separates them, no experience can establish that you are awake — and if you cannot ' +
      'establish that, beliefs based on current experience are in trouble.',
    relatedConceptIds: ['cartesian-doubt', 'scepticism', 'brain-in-a-vat'],
    relatedArgumentIds: ['dream-scepticism'],
    lessonIds: ['epis-12'],
  },
  {
    id: 'brain-in-a-vat',
    term: 'Brain in a vat',
    short: 'The modern form: your experience could be artificially generated.',
    body:
      'A brain fed stimulation identical to ordinary experience would have exactly your ' +
      'evidence while nearly all its beliefs were false. Since the scenario is by construction ' +
      'indistinguishable from the inside, no observation can rule it out.',
    relatedConceptIds: ['dream-argument', 'scepticism', 'closure-principle'],
    relatedArgumentIds: ['biv-argument'],
    lessonIds: ['epis-13'],
  },
  {
    id: 'closure-principle',
    term: 'Epistemic closure',
    short: 'If you know P, and know P entails Q, you are in a position to know Q.',
    body:
      'Closure looks undeniable and is what gives sceptical arguments their bite: you know ' +
      'having hands entails not being a handless brain in a vat, so if you cannot rule that ' +
      'out you cannot know you have hands. Denying closure is one response, at the cost of ' +
      'accepting that knowledge does not always transmit across known entailment.',
    relatedConceptIds: ['brain-in-a-vat', 'scepticism', 'modus-tollens'],
    relatedArgumentIds: ['biv-argument', 'moorean-response'],
    lessonIds: ['epis-13'],
  },
  {
    id: 'moorean-response',
    term: 'Moorean response',
    short: 'Run the sceptical argument backwards: the conclusion is less certain than its denial.',
    body:
      'Moore agreed the sceptical argument was valid and turned it around. Since he was more ' +
      'certain he had hands than of any sceptical premise, the argument gives better reason to ' +
      'reject a premise than to accept the conclusion. This is modus tollens applied to the ' +
      'sceptic\\u2019s own reasoning.',
    relatedConceptIds: ['scepticism', 'closure-principle', 'modus-tollens', 'burden-of-proof'],
    relatedArgumentIds: ['moorean-response'],
    lessonIds: ['epis-14'],
  },
  {
    id: 'infinite-regress',
    term: 'Infinite regress',
    short: 'A chain of dependence with no end, offered as a reason to reject its starting point.',
    body:
      'Some regresses are harmless — every number has a successor. A regress is vicious when ' +
      'the chain is what was supposed to do the explaining, so that nothing gets explained at ' +
      'any stage. Distinguishing the two is what the regress problem in epistemology turns on.',
    relatedConceptIds: ['regress-problem', 'foundationalism', 'reductio'],
    relatedArgumentIds: ['regress-trilemma'],
    lessonIds: ['epis-4'],
  },
]
