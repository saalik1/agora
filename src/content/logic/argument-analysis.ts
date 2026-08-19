import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Unit 3 — Argument Analysis.
 *
 * The fallacy material is split by *why* the reasoning fails rather than into a
 * list of names to memorise: attacking the wrong target (15), smuggling the
 * conclusion in (16), and forcing a false structure (17). Grouping by mechanism
 * is what lets an exercise ask "why does this fail?" instead of "what is this
 * called?".
 */

export const argumentAnalysisUnit: Unit = {
  id: 'logic-u3',
  subjectId: 'logic',
  title: 'Argument Analysis',
  blurb: 'Testing arguments in the wild: what is missing, what is assumed, and how reasoning fails.',
  lessonIds: ['logic-12', 'logic-13', 'logic-14', 'logic-15', 'logic-16', 'logic-17'],
}

export const argumentAnalysisLessons: Lesson[] = [
  {
    id: 'logic-12',
    unitId: 'logic-u3',
    title: 'Counterexamples',
    summary: 'One case that fits the premises and breaks the conclusion.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['counterexample', 'validity', 'induction'],
    sections: [
      {
        kind: 'explanation',
        body:
          'A counterexample is the sharpest tool in argument analysis. To refute a universal ' +
          'claim you need exactly one case that breaks it. To show a form invalid you need one ' +
          'possible situation where the premises hold and the conclusion fails. In both cases ' +
          'a single example does what no amount of general objection can.',
      },
      {
        kind: 'definition',
        term: 'Counterexample',
        body:
          'A case that satisfies everything the argument assumes while contradicting what it ' +
          'concludes. It need only be possible, not actual.',
      },
      {
        kind: 'argument',
        ref: 'swans-white',
        note:
          'One black swan in Western Australia undid centuries of confirming observation. ' +
          'Universal claims are far riskier to assert than they look.',
      },
      {
        kind: 'explanation',
        heading: 'Two things it must do',
        body:
          'A counterexample must make every premise true and the conclusion false. Miss either ' +
          'and it fails: a case that falsifies a premise attacks the argument\u2019s truth rather ' +
          'than its form, and a case with a true conclusion shows nothing at all. This is the ' +
          'most common mistake people make when constructing one.',
      },
      {
        kind: 'misconception',
        claim: 'A counterexample has to be realistic.',
        correction:
          'Only possible. Philosophers routinely use outlandish cases — teleporters, swapped ' +
          'brains, talking donkeys — because validity concerns what could happen, not what ' +
          'does. If the scenario is coherent, it counts.',
      },
    ],
    exerciseIds: ['logic-12-e1', 'logic-12-e2', 'logic-12-e3', 'logic-12-e4'],
  },

  {
    id: 'logic-13',
    unitId: 'logic-u3',
    title: 'Hidden premises',
    summary: 'What an argument needs but never says.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['hidden-premise', 'premise', 'validity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Nobody states every assumption. "Socrates is human, so he is mortal" leaves out the ' +
          'general claim that humans are mortal, because it goes without saying. Arguments ' +
          'like this are called enthymemes, and finding what has been left out is central to ' +
          'analysing them.',
      },
      {
        kind: 'explanation',
        heading: 'How to find one',
        body:
          'Ask what would have to be true for the stated premises to deliver the conclusion. ' +
          'The answer is the hidden premise. Then ask whether it is actually true — because ' +
          'people omit precisely the assumptions they have never examined, the buried premise ' +
          'is often the weakest thing in the argument.',
      },
      {
        kind: 'argument',
        ref: 'imported-cheese',
        note:
          'Nothing said aloud is false. The argument still fails, because the unstated premise ' +
          'it depends on is not true.',
      },
      {
        kind: 'misconception',
        claim: 'Finding a hidden premise means the arguer was being dishonest.',
        correction:
          'Almost never. Omitting the obvious is how ordinary speech works — spelling out ' +
          'every assumption would make conversation impossible. Surfacing a hidden premise is ' +
          'a way of understanding an argument properly, not an accusation.',
      },
    ],
    exerciseIds: ['logic-13-e1', 'logic-13-e2', 'logic-13-e3', 'logic-13-e4'],
  },

  {
    id: 'logic-14',
    unitId: 'logic-u3',
    title: 'Charity and burden of proof',
    summary: 'Two rules that decide whether a disagreement goes anywhere.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['charity', 'burden-of-proof', 'assertion'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Before attacking a position, work out which version of it you are attacking. The ' +
          'principle of charity says: take the strongest reasonable reading. This is not ' +
          'good manners so much as self-interest — beating a weak version leaves the real ' +
          'position untouched and teaches you nothing.',
      },
      {
        kind: 'definition',
        term: 'Principle of charity',
        body:
          'Where a position admits several readings, address the strongest one its holder ' +
          'would accept.',
      },
      {
        kind: 'explanation',
        heading: 'Its limits',
        body:
          'Charity does not mean inventing a better argument than anyone made, or pretending a ' +
          'bad argument is good. If the strongest reading is still weak, say so. The duty is ' +
          'to avoid attacking a version nobody holds, not to supply your opponent with ' +
          'material.',
      },
      {
        kind: 'definition',
        term: 'Burden of proof',
        body:
          'Whoever asserts a claim owes support for it. Doubt costs nothing; assertion costs ' +
          'evidence.',
      },
      {
        kind: 'misconception',
        claim: 'If nobody can disprove a claim, it stands.',
        correction:
          'Inability to disprove is not support. Otherwise every unfalsifiable claim would be ' +
          'established at once, including all the ones that contradict each other. The burden ' +
          'stays with whoever made the assertion.',
      },
    ],
    exerciseIds: ['logic-14-e1', 'logic-14-e2', 'logic-14-e3', 'logic-14-e4'],
  },

  {
    id: 'logic-15',
    unitId: 'logic-u3',
    title: 'Attacking the wrong target',
    summary: 'Straw man and ad hominem: refuting something other than the argument.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['straw-man', 'ad-hominem', 'charity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Two failures share a shape: both refute something that is not the argument. The ' +
          'straw man swaps the position for a weaker lookalike. The ad hominem swaps it for ' +
          'the person holding it. In each case the real reasoning is left standing.',
      },
      {
        kind: 'definition',
        term: 'Straw man',
        body:
          'Restating a position in a weaker form, defeating that, and claiming to have ' +
          'defeated the original.',
      },
      {
        kind: 'definition',
        term: 'Ad hominem',
        body:
          'Treating a fact about the arguer as a reason their argument fails.',
      },
      {
        kind: 'explanation',
        heading: 'When the person is relevant',
        body:
          'Not every remark about a person is fallacious. If someone is testifying rather than ' +
          'arguing, their honesty and expertise matter — that is assessing testimony, not ' +
          'dodging an argument. A funder\u2019s interest is a reason to scrutinise a study, though ' +
          'never a reason to conclude its findings are false. The fallacy is offering the ' +
          'personal fact *instead of* engaging with the reasoning.',
      },
      {
        kind: 'misconception',
        claim: 'A straw man means the person is arguing in bad faith.',
        correction:
          'Usually it is careless paraphrase, not deception — it is genuinely hard to restate ' +
          'a view you disagree with. The useful test is simply whether its holder would ' +
          'recognise their position in your description.',
      },
    ],
    exerciseIds: ['logic-15-e1', 'logic-15-e2', 'logic-15-e3', 'logic-15-e4'],
  },

  {
    id: 'logic-16',
    unitId: 'logic-u3',
    title: 'Smuggling the conclusion in',
    summary: 'Circular reasoning and equivocation: arguments that only look like they connect.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['circular-reasoning', 'equivocation', 'validity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'These two failures are harder to spot than the last pair, because both produce ' +
          'arguments that look impeccable. In each case the conclusion is already inside the ' +
          'premises — either openly restated, or hidden behind a word that changes meaning ' +
          'partway through.',
      },
      {
        kind: 'argument',
        ref: 'reliable-witness',
        note:
          'Each premise supports the other and neither touches the world. Circular arguments ' +
          'are valid, which is precisely why validity alone is never enough.',
      },
      {
        kind: 'explanation',
        heading: 'Equivocation',
        body:
          'Here a single word does two jobs. "Every law has a lawgiver; the laws of physics ' +
          'are laws; so physics has a lawgiver" works only while "law" means both a command ' +
          'and a regularity. Write the two senses out separately and the connection ' +
          'evaporates. Words like "natural", "free" and "right" invite the same trick.',
      },
      {
        kind: 'argument',
        ref: 'law-equivocation',
        note:
          'Expand P2 to see the shift. A defender must argue that the two senses really are ' +
          'one — which is a substantive claim, not something a shared word can supply.',
      },
      {
        kind: 'misconception',
        claim: 'Circular arguments are invalid.',
        correction:
          'They are valid, trivially — if the conclusion is among the premises, true premises ' +
          'guarantee it. The failure is not structural but evidential: the argument gives no ' +
          'reason to accept the premises unless you already accept the conclusion.',
      },
    ],
    exerciseIds: ['logic-16-e1', 'logic-16-e2', 'logic-16-e3', 'logic-16-e4'],
  },

  {
    id: 'logic-17',
    unitId: 'logic-u3',
    title: 'Forcing a false structure',
    summary: 'False dilemmas, and confusing what is true of parts with what is true of wholes.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['false-dilemma', 'composition-division', 'counterexample'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The last pair of failures impose a shape the subject matter does not have. One ' +
          'narrows the options to two when more exist. The other assumes properties must pass ' +
          'between a whole and its parts.',
      },
      {
        kind: 'definition',
        term: 'False dilemma',
        body:
          'Presenting two alternatives as exhaustive when the list is incomplete.',
      },
      {
        kind: 'explanation',
        heading: 'Real dilemmas exist',
        body:
          'Some choices genuinely have two options: a number is either prime or it is not. So ' +
          'the question is never whether a list is short but whether it is complete. Ask ' +
          'directly: is there a third option, or a way of taking both?',
      },
      {
        kind: 'definition',
        term: 'Composition and division',
        body:
          'Composition infers from parts to whole; division from whole to parts. Both fail ' +
          'wherever the property does not transfer.',
      },
      {
        kind: 'explanation',
        heading: 'Why these ones are subtle',
        body:
          'Some properties really do transfer. If every brick is red, the wall is red. But if ' +
          'every brick is light, the wall need not be — and a heavy wall does not imply heavy ' +
          'bricks. The fallacy is not the inference itself but making it without asking ' +
          'whether this particular property carries across.',
      },
      {
        kind: 'misconception',
        claim: 'A team of excellent players must be an excellent team.',
        correction:
          'Composition at its most tempting. Team quality depends on how players combine, ' +
          'which is a property of the whole and not of any part. Sport supplies a new ' +
          'counterexample most seasons.',
      },
    ],
    exerciseIds: ['logic-17-e1', 'logic-17-e2', 'logic-17-e3', 'logic-17-e4'],
  },
]

export const argumentAnalysisExercises: Exercise[] = [
  /* --------------------------------------------------------------- logic-12 */
  {
    id: 'logic-12-e1',
    type: 'choice',
    conceptIds: ['counterexample'],
    prompt: 'Which counterexample refutes the claim "all birds can fly"?',
    options: [
      {
        id: 'a',
        text: 'A bat, which flies but is not a bird.',
        explanation:
          'This is a flying non-bird, which the claim never denied. A counterexample must be a ' +
          'bird that cannot fly.',
      },
      {
        id: 'b',
        text: 'A penguin, which is a bird and cannot fly.',
        explanation:
          'Correct. It satisfies the subject of the claim and contradicts what is asserted of ' +
          'it, which is exactly what a counterexample must do.',
      },
      {
        id: 'c',
        text: 'An eagle, which is a bird and flies well.',
        explanation:
          'A confirming instance. Examples that fit the claim can never refute it, however ' +
          'many you gather.',
      },
      {
        id: 'd',
        text: 'A chicken, which usually stays on the ground.',
        explanation:
          'Weaker than it looks: chickens can fly short distances. A counterexample needs a ' +
          'clear case, not a marginal one.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-12-e2',
    type: 'choice',
    conceptIds: ['counterexample', 'validity'],
    prompt: 'What must a counterexample to an argument form show?',
    options: [
      {
        id: 'a',
        text: 'That at least one premise is false.',
        explanation:
          'That attacks soundness, not validity. A form can be invalid while every premise is ' +
          'true — indeed that is what a counterexample demonstrates.',
      },
      {
        id: 'b',
        text: 'That all premises could be true while the conclusion is false.',
        explanation:
          'Correct. That combination is exactly what validity forbids, so exhibiting it ' +
          'settles the matter.',
      },
      {
        id: 'c',
        text: 'That the conclusion is false.',
        explanation:
          'A false conclusion alone proves nothing — it may follow validly from false ' +
          'premises. The premises must be true in the same case.',
      },
      {
        id: 'd',
        text: 'That the argument has actually occurred.',
        explanation:
          'Counterexamples need only be possible. Imaginary cases test validity perfectly ' +
          'well, since validity is about what could happen.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-12-e3',
    type: 'choice',
    conceptIds: ['counterexample', 'induction'],
    prompt: 'Why is one counterexample enough against a universal claim but not against a statistical one?',
    options: [
      {
        id: 'a',
        text: 'Statistical claims cannot be tested.',
        explanation:
          'They can, and routinely are — with samples and further data rather than single ' +
          'cases.',
      },
      {
        id: 'b',
        text: 'A universal claim covers every case, so one exception falsifies it outright.',
        explanation:
          'Correct. "All swans are white" excludes every black swan, so one destroys it. "Most ' +
          'swans are white" already allows exceptions and survives them.',
      },
      {
        id: 'c',
        text: 'Universal claims are always false.',
        explanation:
          'Many are true — all squares have four sides. They are simply riskier, since each ' +
          'has infinitely many chances to fail.',
      },
      {
        id: 'd',
        text: 'Statistical claims are stronger.',
        explanation:
          'The reverse. Weaker claims are harder to refute precisely because they assert less.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-12-e4',
    type: 'choice',
    conceptIds: ['counterexample', 'validity'],
    prompt: 'Which is a genuine counterexample to this argument?',
    stimulus: 'Everyone who works hard succeeds. Nadia works hard. So Nadia will succeed.',
    options: [
      {
        id: 'a',
        text: 'Nadia works hard and succeeds.',
        explanation:
          'The conclusion is true here, so nothing is challenged. This is a confirming case.',
      },
      {
        id: 'b',
        text: 'Nadia does not work hard and fails.',
        explanation:
          'This makes the second premise false, so it cannot test whether the premises force ' +
          'the conclusion.',
      },
      {
        id: 'c',
        text: 'Someone else works hard and fails.',
        explanation:
          'Correct in spirit and the best available answer: it falsifies P1, showing the ' +
          'argument unsound. Strictly it targets truth rather than form, since this form is ' +
          'valid.',
      },
      {
        id: 'd',
        text: 'Nadia succeeds without working hard.',
        explanation:
          'Consistent with the conclusion being true, so it challenges nothing the argument ' +
          'claims.',
      },
    ],
    correctId: 'c',
  },

  /* --------------------------------------------------------------- logic-13 */
  {
    id: 'logic-13-e1',
    type: 'choice',
    conceptIds: ['hidden-premise'],
    prompt: 'What hidden premise does this argument need?',
    stimulus: 'This mushroom is brightly coloured, so it must be poisonous.',
    options: [
      {
        id: 'a',
        text: 'Some poisonous mushrooms are brightly coloured.',
        explanation:
          'Too weak to deliver the conclusion. "Some" leaves open that this particular ' +
          'colourful mushroom is harmless.',
      },
      {
        id: 'b',
        text: 'All brightly coloured mushrooms are poisonous.',
        explanation:
          'Correct — and stating it makes clear how doubtful it is. Several bright species are ' +
          'edible, which is exactly why the assumption was left unsaid.',
      },
      {
        id: 'c',
        text: 'This mushroom grows in woodland.',
        explanation:
          'Irrelevant to the inference. Adding it does nothing to connect colour with ' +
          'toxicity.',
      },
      {
        id: 'd',
        text: 'Poisonous mushrooms should be avoided.',
        explanation:
          'Sound advice, and a claim about what to do rather than about what is true. It ' +
          'cannot bridge colour to poison.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-13-e2',
    type: 'choice',
    conceptIds: ['hidden-premise', 'premise'],
    prompt: 'Why is the hidden premise so often the weakest part of an argument?',
    options: [
      {
        id: 'a',
        text: 'Because hidden premises are usually false.',
        explanation:
          'Most are true — that is why nobody bothers stating them. The problem is narrower ' +
          'than that.',
      },
      {
        id: 'b',
        text: 'Because assumptions left unstated are usually assumptions never examined.',
        explanation:
          'Correct. What goes without saying goes without checking, so the buried premise is ' +
          'the one least likely to have been tested.',
      },
      {
        id: 'c',
        text: 'Because arguers hide their weakest premises deliberately.',
        explanation:
          'Occasionally, but rarely. Ordinary speech omits the obvious as a matter of course, ' +
          'with no intent to conceal.',
      },
      {
        id: 'd',
        text: 'Because hidden premises make an argument invalid.',
        explanation:
          'They do the opposite — supplying the missing premise is usually what makes the ' +
          'argument valid.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-13-e3',
    type: 'sort',
    conceptIds: ['hidden-premise', 'premise', 'conclusion'],
    prompt: 'Label each statement, including the unstated assumption.',
    statements: [
      { id: 's1', text: 'Every book in this room is out of copyright.', role: 'premise' },
      { id: 's2', text: '[Unstated] This volume is a book in this room.', role: 'premise' },
      { id: 's3', text: 'This volume is out of copyright.', role: 'conclusion' },
      { id: 's4', text: 'The room was redecorated last spring.', role: 'irrelevant' },
    ],
    explanation:
      'The unstated assumption is a premise like any other — it just was not said aloud. ' +
      'Without it, the general claim about the room never reaches this particular volume.',
  },
  {
    id: 'logic-13-e4',
    type: 'choice',
    conceptIds: ['hidden-premise'],
    prompt: 'What must be assumed for the cheese argument to work?',
    stimulus: 'This cheese is made from unpasteurised milk, so it is imported.',
    options: [
      {
        id: 'a',
        text: 'All imported cheese is unpasteurised.',
        explanation:
          'This runs the wrong way. It would let you infer from imported to unpasteurised, not ' +
          'the reverse — a version of affirming the consequent.',
      },
      {
        id: 'b',
        text: 'All unpasteurised cheese sold here is imported.',
        explanation:
          'Correct, and once stated it is clearly disputable: several domestic dairies produce ' +
          'unpasteurised cheese legally.',
      },
      {
        id: 'c',
        text: 'Unpasteurised cheese is better.',
        explanation:
          'A value judgement with no bearing on where the cheese came from.',
      },
      {
        id: 'd',
        text: 'Some imported cheese is unpasteurised.',
        explanation:
          'True but far too weak. "Some" cannot carry a conclusion about this particular ' +
          'cheese.',
      },
    ],
    correctId: 'b',
  },

  /* --------------------------------------------------------------- logic-14 */
  {
    id: 'logic-14-e1',
    type: 'choice',
    conceptIds: ['charity'],
    prompt: 'Which response applies the principle of charity?',
    stimulus:
      'Someone argues: "We should reduce speed limits near schools, because children are less ' +
      'able to judge traffic."',
    options: [
      {
        id: 'a',
        text: 'So you think nobody should ever be allowed to drive?',
        explanation:
          'A straw man. It replaces a narrow proposal about school zones with an extreme one ' +
          'nobody made.',
      },
      {
        id: 'b',
        text: 'Does the evidence show lower limits reduce accidents in school zones specifically?',
        explanation:
          'Correct. It engages the actual claim at its strongest and asks precisely the ' +
          'question the argument turns on.',
      },
      {
        id: 'c',
        text: 'You only say that because you do not own a car.',
        explanation:
          'Ad hominem. Car ownership has no bearing on whether children misjudge traffic.',
      },
      {
        id: 'd',
        text: 'Speed limits are always arbitrary, so this one is too.',
        explanation:
          'Dismisses the whole category rather than engaging with the reasoning offered for ' +
          'this case.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-14-e2',
    type: 'choice',
    conceptIds: ['burden-of-proof'],
    prompt: 'Who bears the burden of proof?',
    stimulus: '"There is an undiscovered species of large primate in these woods. Prove there isn\u2019t."',
    options: [
      {
        id: 'a',
        text: 'The doubter, since they are making a negative claim.',
        explanation:
          'Doubt is not a claim. Withholding belief asserts nothing and so incurs no ' +
          'obligation to support anything.',
      },
      {
        id: 'b',
        text: 'The person asserting the primate exists.',
        explanation:
          'Correct. The burden sits with whoever makes the claim, and "prove there isn\u2019t" is ' +
          'an attempt to shift it rather than discharge it.',
      },
      {
        id: 'c',
        text: 'Both equally, since neither can be certain.',
        explanation:
          'Symmetry sounds fair but is not: one party is asserting something and the other ' +
          'merely declining to accept it.',
      },
      {
        id: 'd',
        text: 'Nobody, since the claim cannot be tested.',
        explanation:
          'Untestability weakens a claim rather than excusing it from support. If it cannot be ' +
          'supported, that is a reason not to accept it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-14-e3',
    type: 'choice',
    conceptIds: ['charity'],
    prompt: 'What does charity NOT require?',
    options: [
      {
        id: 'a',
        text: 'Choosing the strongest of several possible readings.',
        explanation:
          'This is the core of the principle rather than a limit on it. Choosing the strongest ' +
          'reading is precisely what charity asks you to do.',
      },
      {
        id: 'b',
        text: 'Constructing a better argument than the person actually gave.',
        explanation:
          'Correct. Charity means not attacking a version nobody holds. It does not oblige you ' +
          'to do your opponent\u2019s work, and a weak argument can be called weak.',
      },
      {
        id: 'c',
        text: 'Checking whether the person would recognise your summary.',
        explanation:
          'A good practical test of whether you have been charitable, so this is required ' +
          'rather than excluded.',
      },
      {
        id: 'd',
        text: 'Addressing the argument rather than the arguer.',
        explanation:
          'Also part of arguing well, and closely connected to charity.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-14-e4',
    type: 'choice',
    conceptIds: ['burden-of-proof', 'assertion'],
    prompt: 'Why is "you cannot disprove it" not support for a claim?',
    options: [
      {
        id: 'a',
        text: 'Because everything can be disproved eventually.',
        explanation:
          'Not so — plenty of claims are permanently beyond testing. That is what makes them ' +
          'unsupported rather than proven.',
      },
      {
        id: 'b',
        text: 'Because it would establish every unfalsifiable claim at once, including contradictory ones.',
        explanation:
          'Correct. The same move would license an invisible dragon and its absence with equal ' +
          'force, which shows it establishes nothing.',
      },
      {
        id: 'c',
        text: 'Because negative claims are always false.',
        explanation:
          'Negative claims are often true — there is no largest prime. Their truth has nothing ' +
          'to do with it.',
      },
      {
        id: 'd',
        text: 'Because only scientific claims can be supported.',
        explanation:
          'Mathematical and philosophical claims are supported all the time. The problem is ' +
          'this particular move, not the domain.',
      },
    ],
    correctId: 'b',
  },

  /* --------------------------------------------------------------- logic-15 */
  {
    id: 'logic-15-e1',
    type: 'choice',
    conceptIds: ['straw-man'],
    prompt: 'Which reply is a straw man?',
    stimulus: '"I think we should spend more on rail before building new roads."',
    options: [
      {
        id: 'a',
        text: 'Rail investment has a poor record of delivering on time in this country.',
        explanation:
          'A direct objection to the proposal, and a relevant one. Nothing has been distorted.',
      },
      {
        id: 'b',
        text: 'So you want to ban cars and force everyone onto trains.',
        explanation:
          'Correct. "More rail before new roads" becomes "ban cars" — a position far easier to ' +
          'attack and one the speaker never took.',
      },
      {
        id: 'c',
        text: 'What would you cut to pay for it?',
        explanation:
          'A fair challenge that engages the proposal as stated rather than replacing it.',
      },
      {
        id: 'd',
        text: 'Road freight capacity is already at its limit, which rail cannot absorb.',
        explanation:
          'Substantive disagreement with evidence behind it. This is what engaging looks like.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-15-e2',
    type: 'choice',
    conceptIds: ['ad-hominem'],
    prompt: 'Which of these is NOT an ad hominem fallacy?',
    options: [
      {
        id: 'a',
        text: 'Her argument fails because she has no formal training in the subject.',
        explanation:
          'Fallacious. An untrained person can still give a valid argument, and training is ' +
          'not what makes reasoning good.',
      },
      {
        id: 'b',
        text: 'The study was funded by the industry it evaluates, so it warrants closer scrutiny.',
        explanation:
          'Correct, and the distinction that matters. A conflict of interest is a reason to ' +
          'check the work carefully — not a reason to conclude the findings are false.',
      },
      {
        id: 'c',
        text: 'He is wrong about the climate data because he is unpleasant in meetings.',
        explanation:
          'Plainly fallacious. Personal manner has no bearing whatever on whether data is ' +
          'accurate.',
      },
      {
        id: 'd',
        text: 'You cannot trust his reasoning; he changed his mind on this five years ago.',
        explanation:
          'Fallacious, and revising a view in light of evidence is generally a virtue rather ' +
          'than a mark against someone.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-15-e3',
    type: 'choice',
    conceptIds: ['straw-man', 'charity'],
    prompt: 'What is the best test for whether you have straw-manned someone?',
    options: [
      {
        id: 'a',
        text: 'Whether your version is easier to refute.',
        explanation:
          'A useful warning sign, but not decisive — sometimes a position really is weak and ' +
          'easy to refute.',
      },
      {
        id: 'b',
        text: 'Whether they would recognise their position in your description.',
        explanation:
          'Correct. It is simple, applicable on the spot, and goes straight to whether you are ' +
          'attacking their view or a substitute.',
      },
      {
        id: 'c',
        text: 'Whether your version is shorter than theirs.',
        explanation:
          'Length is irrelevant. A faithful summary can be brief and a distortion can be long.',
      },
      {
        id: 'd',
        text: 'Whether you disagree with the position.',
        explanation:
          'Disagreement is the normal reason to examine an argument at all. It says nothing ' +
          'about whether you have represented it fairly.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-15-e4',
    type: 'choice',
    conceptIds: ['ad-hominem', 'straw-man'],
    prompt: 'What do these two failures have in common?',
    options: [
      {
        id: 'a',
        text: 'Both involve false premises.',
        explanation:
          'Neither necessarily does. The distorted claim or personal remark may be perfectly ' +
          'true and still miss the argument.',
      },
      {
        id: 'b',
        text: 'Both refute something other than the argument on the table.',
        explanation:
          'Correct. One substitutes a weaker position, the other substitutes the person. In ' +
          'both cases the original reasoning is untouched.',
      },
      {
        id: 'c',
        text: 'Both are deliberate deceptions.',
        explanation:
          'Often they are careless rather than dishonest, particularly the straw man.',
      },
      {
        id: 'd',
        text: 'Both make the argument invalid.',
        explanation:
          'These are failures of the critic\u2019s response, not defects in the original ' +
          'argument\u2019s structure.',
      },
    ],
    correctId: 'b',
  },

  /* --------------------------------------------------------------- logic-16 */
  {
    id: 'logic-16-e1',
    type: 'choice',
    conceptIds: ['circular-reasoning'],
    prompt: 'Why does circular reasoning fail, given that it is valid?',
    options: [
      {
        id: 'a',
        text: 'Because the premises are false.',
        explanation:
          'They may be perfectly true. Circularity is a problem even when everything asserted ' +
          'is correct.',
      },
      {
        id: 'b',
        text: 'Because it gives no reason to accept the premises unless you already accept the conclusion.',
        explanation:
          'Correct. The failure is evidential rather than structural — the argument cannot ' +
          'move anyone who does not already agree.',
      },
      {
        id: 'c',
        text: 'Because the conclusion is false.',
        explanation:
          'It may well be true. A circular argument simply fails to establish it.',
      },
      {
        id: 'd',
        text: 'Because it has too few premises.',
        explanation:
          'Number is not the issue. A one-premise argument can be excellent, and a circular ' +
          'one can have many.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-16-e2',
    type: 'choice',
    conceptIds: ['equivocation'],
    prompt: 'Which word is used in two senses?',
    stimulus:
      'Only man is rational. No woman is a man. Therefore no woman is rational.',
    options: [
      {
        id: 'a',
        text: '"rational"',
        explanation:
          'This word holds steady throughout. The shift is elsewhere, which is what makes the ' +
          'argument look valid.',
      },
      {
        id: 'b',
        text: '"man"',
        explanation:
          'Correct. In the first premise it means humankind; in the second, an adult male. ' +
          'Separate the senses and the two premises stop connecting.',
      },
      {
        id: 'c',
        text: '"woman"',
        explanation:
          'Used consistently in both occurrences. It is the other term that carries two ' +
          'meanings.',
      },
      {
        id: 'd',
        text: 'None — the argument is valid.',
        explanation:
          'It appears valid only while "man" is read one way in each premise. Write both ' +
          'senses out and the inference disappears.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-16-e3',
    type: 'choice',
    conceptIds: ['circular-reasoning', 'equivocation'],
    prompt: 'What do circular reasoning and equivocation have in common?',
    options: [
      {
        id: 'a',
        text: 'Both produce arguments that appear to connect but do not.',
        explanation:
          'Correct. One restates the conclusion as a premise; the other links premises through ' +
          'a word that has changed meaning. In each case the apparent support is illusory.',
      },
      {
        id: 'b',
        text: 'Both attack the person rather than the argument.',
        explanation:
          'That describes ad hominem. These two failures concern the argument\u2019s own internal ' +
          'workings.',
      },
      {
        id: 'c',
        text: 'Both require false premises.',
        explanation:
          'Neither does. Both can be built entirely from true statements, which is precisely ' +
          'what makes them hard to spot.',
      },
      {
        id: 'd',
        text: 'Both present too few options.',
        explanation:
          'That is the false dilemma, a different failure covered in the next lesson.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-16-e4',
    type: 'choice',
    conceptIds: ['circular-reasoning'],
    prompt: 'Which argument is circular?',
    options: [
      {
        id: 'a',
        text: 'The tests are accurate because independent labs reproduced the results.',
        explanation:
          'Support from outside the claim. Reproduction by others is exactly the kind of ' +
          'independent evidence circularity lacks.',
      },
      {
        id: 'b',
        text: 'The document is authentic because it says so, and documents that say so are authentic.',
        explanation:
          'Correct. The second premise exists only to license the first, and neither reaches ' +
          'any evidence outside the document itself.',
      },
      {
        id: 'c',
        text: 'The bridge is safe because it passed an inspection last month.',
        explanation:
          'The inspection is independent of the safety claim, so this is ordinary evidential ' +
          'support.',
      },
      {
        id: 'd',
        text: 'She was at home, because three neighbours saw her there.',
        explanation:
          'Testimony from outside the claim. It might be mistaken, but it is not circular.',
      },
    ],
    correctId: 'b',
  },

  /* --------------------------------------------------------------- logic-17 */
  {
    id: 'logic-17-e1',
    type: 'choice',
    conceptIds: ['false-dilemma'],
    prompt: 'Which is a false dilemma?',
    options: [
      {
        id: 'a',
        text: 'Either this number is prime or it is not.',
        explanation:
          'A genuine dichotomy. There is no third option, so presenting two is accurate rather ' +
          'than restrictive.',
      },
      {
        id: 'b',
        text: 'Either we cut the budget entirely or we accept unlimited spending.',
        explanation:
          'Correct. Every intermediate level of funding has been silently removed, and those ' +
          'are the realistic options.',
      },
      {
        id: 'c',
        text: 'Either the switch is on or it is off.',
        explanation:
          'True of a standard two-position switch. Where the options really are exhaustive, ' +
          'the dilemma is real.',
      },
      {
        id: 'd',
        text: 'Either she attended or she did not.',
        explanation:
          'Genuinely exhaustive. A claim and its denial cover every possibility between them, so ' +
          'presenting exactly two options is accurate here rather than restrictive.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-17-e2',
    type: 'choice',
    conceptIds: ['composition-division'],
    prompt: 'Which argument commits the fallacy of composition?',
    options: [
      {
        id: 'a',
        text: 'Every brick in the wall is red, so the wall is red.',
        explanation:
          'Colour does transfer from parts to whole in this way, so this inference is fine. ' +
          'The fallacy is not the form itself.',
      },
      {
        id: 'b',
        text: 'Every player is the best in their position, so this is the best team.',
        explanation:
          'Correct. Team quality depends on how players combine — a property of the whole that ' +
          'no individual possesses.',
      },
      {
        id: 'c',
        text: 'Every page is numbered, so the book has numbered pages.',
        explanation:
          'A property that transfers straightforwardly, since having numbered pages just is ' +
          'each page being numbered.',
      },
      {
        id: 'd',
        text: 'Every part is made of steel, so the machine is made of steel.',
        explanation:
          'Material composition does transfer. If every component is steel, the assembly is ' +
          'steel throughout.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-17-e3',
    type: 'choice',
    conceptIds: ['composition-division'],
    prompt: 'Which argument commits the fallacy of division?',
    options: [
      {
        id: 'a',
        text: 'The orchestra is world-famous, so each musician is world-famous.',
        explanation:
          'Correct. Fame belongs to the ensemble; most of its members are unknown ' +
          'individually.',
      },
      {
        id: 'b',
        text: 'The wall is made of brick, so each part of the wall is brick.',
        explanation:
          'Material generally does divide down to parts, so this inference holds.',
      },
      {
        id: 'c',
        text: 'The team is excellent, so it wins most matches.',
        explanation:
          'An inference about the same whole rather than from whole to parts, so division ' +
          'does not arise.',
      },
      {
        id: 'd',
        text: 'The book is long, so reading it takes time.',
        explanation:
          'Again a claim about the whole, with no step down to its parts.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-17-e4',
    type: 'choice',
    conceptIds: ['false-dilemma', 'counterexample'],
    prompt: 'What single question exposes a false dilemma?',
    options: [
      {
        id: 'a',
        text: 'Is either option desirable?',
        explanation:
          'Both options may be unpleasant and the dilemma still genuine. Desirability is a ' +
          'separate question from completeness.',
      },
      {
        id: 'b',
        text: 'Is there a third option, or a way of taking both?',
        explanation:
          'Correct. The fallacy consists entirely in the list being incomplete, so testing ' +
          'completeness settles it.',
      },
      {
        id: 'c',
        text: 'Are the options equally likely?',
        explanation:
          'Probability has no bearing. A dichotomy can be wildly lopsided and still exhaust ' +
          'the possibilities.',
      },
      {
        id: 'd',
        text: 'Who is presenting the dilemma?',
        explanation:
          'That question leads towards ad hominem. A false dilemma is false regardless of who ' +
          'offers it.',
      },
    ],
    correctId: 'b',
  },
]
