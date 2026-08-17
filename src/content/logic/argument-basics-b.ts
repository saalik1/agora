import type { Exercise, Lesson } from '@/types/content'

/**
 * Unit 1, lessons 2–6. Split from `argument-basics.ts` purely to keep files
 * readable; both are registered together in `content/index.ts`.
 */

export const argumentBasicsLessonsB: Lesson[] = [
  {
    id: 'logic-2',
    unitId: 'logic-u1',
    title: 'Premises and conclusions',
    summary: 'Telling the parts apart when nothing is labelled.',
    difficulty: 1,
    estimatedMinutes: 6,
    xpReward: 15,
    conceptIds: ['premise', 'conclusion', 'argument'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Real arguments do not arrive labelled. Premises and conclusions appear in any order, ' +
          'sometimes interleaved with background detail that supports nothing at all. The skill ' +
          'is separating the load-bearing statements from the scenery.',
      },
      {
        kind: 'explanation',
        heading: 'The "because" test',
        body:
          'Take two statements and try inserting "because" between them. If "A because B" reads ' +
          'as the intended reasoning, then B is a premise and A is the conclusion. If only ' +
          '"B because A" makes sense, you have them the wrong way round. This works even when ' +
          'no indicator words appear, because it tests the direction of support directly.',
      },
      {
        kind: 'example',
        body:
          'The recipe calls for buttermilk. We have none, and the shop shut an hour ago. We ' +
          'will have to substitute yoghurt.',
        caption: 'Conclusion last, no indicator word at all.',
      },
      {
        kind: 'explanation',
        heading: 'Conclusions can come first',
        body:
          'Writers often state their conclusion up front and then support it — the opposite of ' +
          'the textbook order. "We should leave now. The traffic builds after four, and the ' +
          'table is booked for six." The first sentence is the conclusion, despite appearing ' +
          'first and carrying no marker.',
      },
      {
        kind: 'misconception',
        claim: 'The last sentence of a passage is the conclusion.',
        correction:
          'Position is a weak clue at best. Conclusions open paragraphs as often as they close ' +
          'them, and the final sentence is frequently a qualification or an aside. Only the ' +
          'direction of support settles it.',
      },
    ],
    exerciseIds: ['logic-2-e1', 'logic-2-e2', 'logic-2-e3', 'logic-2-e4'],
  },

  {
    id: 'logic-3',
    unitId: 'logic-u1',
    title: 'Deductive and inductive',
    summary: 'Two different things an argument can be trying to do.',
    difficulty: 1,
    estimatedMinutes: 7,
    xpReward: 15,
    conceptIds: ['deduction', 'induction', 'argument'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Arguments aim at different standards. A deductive argument claims its premises make ' +
          'the conclusion certain — if they hold, it cannot fail. An inductive argument claims ' +
          'only that its premises make the conclusion likely. Judging an inductive argument by ' +
          'deductive standards makes it look broken when it is working exactly as intended.',
      },
      {
        kind: 'definition',
        term: 'Deductive',
        body:
          'The premises, if true, guarantee the conclusion. There is no gap for luck to fill.',
      },
      {
        kind: 'definition',
        term: 'Inductive',
        body:
          'The premises, if true, make the conclusion more likely — but leave room for it to ' +
          'be false.',
      },
      {
        kind: 'argument',
        ref: 'swans-white',
        note:
          'Centuries of white swans made this conclusion overwhelmingly reasonable. It was ' +
          'still false. That gap is not a flaw in induction; it is what induction is.',
      },
      {
        kind: 'explanation',
        heading: 'Telling them apart',
        body:
          'Ask what the arguer is claiming about the link. Words like "must", "certainly" and ' +
          '"it follows that" signal a deductive intent; "probably", "most likely" and "tends ' +
          'to" signal an inductive one. Where the wording is silent, ask whether a ' +
          'counterexample would show the arguer had made a mistake — or merely been unlucky.',
      },
      {
        kind: 'misconception',
        claim: 'Deduction goes from general to specific and induction from specific to general.',
        correction:
          'A common textbook slogan that does not survive contact with real arguments. Plenty ' +
          'of deductive arguments run specific to specific, and some inductive ones run general ' +
          'to specific. The real difference is the strength of the claimed link, not the ' +
          'direction of generality.',
      },
    ],
    exerciseIds: ['logic-3-e1', 'logic-3-e2', 'logic-3-e3', 'logic-3-e4'],
  },

  {
    id: 'logic-4',
    unitId: 'logic-u1',
    title: 'Validity',
    summary: 'A property of form, and nothing to do with whether the premises are true.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['validity', 'counterexample', 'deduction'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Validity is the most misunderstood word in logic, because everyday English uses it ' +
          'to mean "reasonable" or "true". In logic it means something narrower and stranger: ' +
          'an argument is valid when its form makes it impossible for the premises to be true ' +
          'and the conclusion false at the same time.',
      },
      {
        kind: 'definition',
        term: 'Valid',
        body:
          'If the premises were all true, the conclusion would have to be true. Validity says ' +
          'nothing whatsoever about whether the premises actually are true.',
      },
      {
        kind: 'argument',
        ref: 'cats-mammals',
        note:
          'P1 is false and the conclusion is false, yet the argument is perfectly valid. IF ' +
          'all mammals were cats, Whiskers would have to be one. Validity is about the link, ' +
          'not the contents.',
      },
      {
        kind: 'explanation',
        heading: 'Testing for validity',
        body:
          'To show an argument invalid, describe a possible situation where every premise is ' +
          'true and the conclusion is false. That situation is a counterexample, and it need ' +
          'only be possible, not actual. If you cannot construct one no matter how you try, ' +
          'that is evidence the form is valid.',
      },
      {
        kind: 'misconception',
        claim: 'A valid argument has a true conclusion.',
        correction:
          'Only if the premises are also true. Validity is a conditional promise: true ' +
          'premises would yield a true conclusion. Feed a valid form false premises and it ' +
          'will produce falsehoods just as reliably.',
      },
    ],
    exerciseIds: ['logic-4-e1', 'logic-4-e2', 'logic-4-e3', 'logic-4-e4'],
  },

  {
    id: 'logic-5',
    unitId: 'logic-u1',
    title: 'Soundness',
    summary: 'Validity plus true premises — two checks, not one.',
    difficulty: 2,
    estimatedMinutes: 6,
    xpReward: 20,
    conceptIds: ['soundness', 'validity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Validity alone cannot tell you whether to believe a conclusion, because a valid ' +
          'argument built on false premises proves nothing. Soundness adds the missing check.',
      },
      {
        kind: 'definition',
        term: 'Sound',
        body: 'Valid, and all premises are actually true. A sound argument has a true conclusion.',
      },
      {
        kind: 'explanation',
        heading: 'Two independent failures',
        body:
          'An argument can be unsound in two quite different ways: the form may not hold, or a ' +
          'premise may be false. Calling something unsound therefore does not say where it ' +
          'broke. In practice, disagreements about arguments are usually disagreements about ' +
          'premises, since validity is often easy to check and truth rarely is.',
      },
      {
        kind: 'argument',
        ref: 'socrates-mortal',
        note: 'Valid form, and both premises are true. That combination makes it sound.',
      },
      {
        kind: 'misconception',
        claim: 'If an argument is unsound, its conclusion is false.',
        correction:
          'A bad argument can still have a true conclusion — it simply fails to establish it. ' +
          '"All fish are birds; all birds swim; so some fish swim" is unsound, yet the ' +
          'conclusion happens to be true. Attacking an argument is not the same as refuting ' +
          'its conclusion.',
      },
    ],
    exerciseIds: ['logic-5-e1', 'logic-5-e2', 'logic-5-e3', 'logic-5-e4'],
  },

  {
    id: 'logic-6',
    unitId: 'logic-u1',
    title: 'Necessary and sufficient',
    summary: 'Two ways a condition can relate to a claim, constantly confused.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['necessary-condition', 'sufficient-condition', 'conditional'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Conditions come in two flavours, and mixing them up produces some of the most ' +
          'common reasoning errors there are. A necessary condition must be present. A ' +
          'sufficient condition is enough on its own. They are independent: a condition can be ' +
          'one, the other, both, or neither.',
      },
      {
        kind: 'definition',
        term: 'Necessary',
        body: 'Without it, the claim fails. Oxygen is necessary for fire.',
      },
      {
        kind: 'definition',
        term: 'Sufficient',
        body: 'With it, the claim holds. Being a square is sufficient for being a rectangle.',
      },
      {
        kind: 'argument',
        ref: 'passport-travel',
        note:
          'A passport is necessary but nowhere near sufficient — you also need a ticket, a ' +
          'visa in many cases, and to actually be at the airport.',
      },
      {
        kind: 'explanation',
        heading: 'Reading them out of conditionals',
        body:
          '"If P, then Q" makes P sufficient for Q, and Q necessary for P. That second half is ' +
          'the one people miss. From "if it is a dog, it is an animal", being an animal is ' +
          'necessary for being a dog — so anything that is not an animal is not a dog, though ' +
          'plenty of animals are not dogs.',
      },
      {
        kind: 'misconception',
        claim: 'If A is necessary for B, then A gets you B.',
        correction:
          'That swaps the two. Necessary conditions rule out; they do not rule in. Having a ' +
          'ticket is necessary for boarding, but a ticket alone will not get you through the ' +
          'gate without identification and a boarding pass.',
      },
    ],
    exerciseIds: ['logic-6-e1', 'logic-6-e2', 'logic-6-e3', 'logic-6-e4'],
  },
]

export const argumentBasicsExercisesB: Exercise[] = [
  /* ---------------------------------------------------------------- logic-2 */
  {
    id: 'logic-2-e1',
    type: 'choice',
    conceptIds: ['conclusion', 'premise'],
    prompt: 'Which statement is the conclusion?',
    stimulus:
      'We should leave now. The traffic builds after four, and the table is booked for six.',
    options: [
      {
        id: 'a',
        text: 'We should leave now.',
        explanation:
          'Correct. It appears first and carries no indicator word, but the other two ' +
          'statements are the reasons offered for it.',
      },
      {
        id: 'b',
        text: 'The traffic builds after four.',
        explanation:
          'A premise. Try the test: "We should leave now because the traffic builds after ' +
          'four" reads correctly; the reverse does not.',
      },
      {
        id: 'c',
        text: 'The table is booked for six.',
        explanation:
          'A second premise, working alongside the traffic claim to support the recommendation.',
      },
      {
        id: 'd',
        text: 'There is no conclusion — this is just a list of facts.',
        explanation:
          'The first statement is a recommendation supported by the other two. That supporting ' +
          'relationship is exactly what makes it an argument.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-2-e2',
    type: 'sort',
    conceptIds: ['premise', 'conclusion'],
    prompt: 'Label each statement by the role it plays.',
    statements: [
      { id: 's1', text: 'The library closes at eight on weekdays.', role: 'premise' },
      { id: 's2', text: 'It is now half past eight on a Tuesday.', role: 'premise' },
      { id: 's3', text: 'The library is closed.', role: 'conclusion' },
      { id: 's4', text: 'The library was renovated three years ago.', role: 'irrelevant' },
    ],
    explanation:
      'The closing time and the current time work together to establish that the library is ' +
      'shut. The renovation is true but idle — remove it and the argument is untouched.',
  },
  {
    id: 'logic-2-e3',
    type: 'choice',
    conceptIds: ['premise', 'argument'],
    prompt: 'Which statement is doing no work in this argument?',
    stimulus:
      'Ravi has run a marathon every year since 2015. Marathon runners train consistently. ' +
      'His brother plays the cello. So Ravi trains consistently.',
    options: [
      {
        id: 'a',
        text: 'Ravi has run a marathon every year since 2015.',
        explanation:
          'This establishes that Ravi is a marathon runner, which the general claim then ' +
          'applies to. It is load-bearing.',
      },
      {
        id: 'b',
        text: 'Marathon runners train consistently.',
        explanation:
          'The general rule that connects the specific fact about Ravi to the conclusion. ' +
          'Remove it and the argument collapses.',
      },
      {
        id: 'c',
        text: 'His brother plays the cello.',
        explanation:
          'Correct. True, perhaps, but it supports nothing and nothing supports it. Delete it ' +
          'and the reasoning is entirely unaffected.',
      },
      {
        id: 'd',
        text: 'Ravi trains consistently.',
        explanation:
          'This is the conclusion — the thing the argument is for, not a spare part.',
      },
    ],
    correctId: 'c',
  },
  {
    id: 'logic-2-e4',
    type: 'choice',
    conceptIds: ['conclusion'],
    prompt: 'Which statement is the conclusion?',
    stimulus:
      'Since the fuse has blown and the spare box is empty, we cannot restore power tonight, ' +
      'though the shop opens at nine tomorrow.',
    options: [
      {
        id: 'a',
        text: 'The fuse has blown.',
        explanation:
          'A premise, flagged by "since" — a word that marks reasons, never conclusions.',
      },
      {
        id: 'b',
        text: 'The spare box is empty.',
        explanation:
          'A second premise, also governed by "since". Together with the blown fuse it rules ' +
          'out a repair tonight.',
      },
      {
        id: 'c',
        text: 'We cannot restore power tonight.',
        explanation:
          'Correct. Both "since" clauses are offered as reasons for precisely this claim.',
      },
      {
        id: 'd',
        text: 'The shop opens at nine tomorrow.',
        explanation:
          'A consolation tacked on at the end. Being last does not make it the conclusion — ' +
          'nothing here is offered in support of it.',
      },
    ],
    correctId: 'c',
  },

  /* ---------------------------------------------------------------- logic-3 */
  {
    id: 'logic-3-e1',
    type: 'choice',
    conceptIds: ['deduction', 'induction'],
    prompt: 'Which argument is deductive?',
    options: [
      {
        id: 'a',
        text: 'Every train this week has been late, so tomorrow\u2019s will be late too.',
        explanation:
          'Inductive. A run of past cases makes the prediction likely, but tomorrow\u2019s train ' +
          'could easily arrive on time without anyone having reasoned badly.',
      },
      {
        id: 'b',
        text: 'All squares have four sides. This shape is a square. So it has four sides.',
        explanation:
          'Correct. If both premises hold, the conclusion cannot fail — the premises guarantee ' +
          'it rather than merely supporting it.',
      },
      {
        id: 'c',
        text: 'The sky is darkening and the birds have gone quiet, so a storm is coming.',
        explanation:
          'Inductive. These are good signs of a storm, but signs can mislead — the link is ' +
          'probabilistic, not guaranteed.',
      },
      {
        id: 'd',
        text: 'Most students who attend every seminar pass, so Aisha will probably pass.',
        explanation:
          'Inductive, and it says so: "most" and "probably" both signal that the conclusion ' +
          'is likely rather than certain.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-3-e2',
    type: 'choice',
    conceptIds: ['induction'],
    prompt: 'What does the black swan discovery show about the argument from white swans?',
    options: [
      {
        id: 'a',
        text: 'The reasoning was faulty all along.',
        explanation:
          'Too harsh. Given the evidence available in 1600, the inference was reasonable. ' +
          'Inductive arguments are judged by how well they fit the evidence, not by whether ' +
          'they turn out right.',
      },
      {
        id: 'b',
        text: 'Confirming instances, however many, cannot make a universal claim safe.',
        explanation:
          'Correct. Thousands of white swans raised the probability but never closed the gap, ' +
          'because a single unobserved region could overturn the whole claim.',
      },
      {
        id: 'c',
        text: 'Induction should be avoided in favour of deduction.',
        explanation:
          'Not an option in practice. Almost everything known about the world beyond ' +
          'definitions rests on induction — including every scientific result.',
      },
      {
        id: 'd',
        text: 'The premise about European swans was false.',
        explanation:
          'The premise was true: every swan observed in Europe really was white. The ' +
          'conclusion overreached the premise, which is the characteristic risk of induction.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-3-e3',
    type: 'choice',
    conceptIds: ['deduction', 'induction'],
    prompt: 'Why is it a mistake to call this argument invalid?',
    stimulus:
      'Nine out of ten patients given this drug recovered within a week. Priya has been given ' +
      'the drug, so she will probably recover within a week.',
    options: [
      {
        id: 'a',
        text: 'It is valid — the premises guarantee the conclusion.',
        explanation:
          'They do not. Priya could be the tenth patient. The conclusion is likely, not ' +
          'guaranteed.',
      },
      {
        id: 'b',
        text: 'It is inductive, so validity is the wrong standard to apply.',
        explanation:
          'Correct. Validity is a deductive notion. This argument claims only probability, and ' +
          'should be judged on inductive strength — which here is high.',
      },
      {
        id: 'c',
        text: 'The premises are true, so the argument cannot be invalid.',
        explanation:
          'True premises never establish validity. Validity is about the link between premises ' +
          'and conclusion, entirely separate from whether the premises hold.',
      },
      {
        id: 'd',
        text: 'The sample size is too small to judge.',
        explanation:
          'Sample size affects how strong the induction is, not whether validity is the right ' +
          'yardstick. Even a million patients would leave this argument non-deductive.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-3-e4',
    type: 'choice',
    conceptIds: ['induction', 'deduction'],
    prompt: 'Which of these is the strongest inductive argument?',
    options: [
      {
        id: 'a',
        text: 'Two of my colleagues dislike the new software, so nobody likes it.',
        explanation:
          'Very weak. Two cases cannot support a claim about everyone, and colleagues who ' +
          'complain are more audible than those who do not.',
      },
      {
        id: 'b',
        text:
          'A randomised survey of 4,000 users across six countries found 78% report faster ' +
          'workflows, so most users find it faster.',
        explanation:
          'Correct. A large, randomised, geographically varied sample supports a conclusion ' +
          'that stays carefully within what the data shows.',
      },
      {
        id: 'c',
        text: 'The software was expensive to develop, so it must be good.',
        explanation:
          'Cost and quality come apart routinely. This offers almost no evidential support for ' +
          'the conclusion at all.',
      },
      {
        id: 'd',
        text: 'I have used it once and it crashed, so it is unreliable.',
        explanation:
          'A single instance. It is weak evidence rather than none, but nowhere near enough to ' +
          'support a general claim about reliability.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- logic-4 */
  {
    id: 'logic-4-e1',
    type: 'choice',
    conceptIds: ['validity'],
    prompt: 'Is this argument valid?',
    stimulus: 'All fish can fly. Salmon are fish. Therefore salmon can fly.',
    options: [
      {
        id: 'a',
        text: 'Yes — if the premises were true, the conclusion would have to follow.',
        explanation:
          'Correct. The first premise is absurd and the conclusion is false, but validity asks ' +
          'only whether the form preserves truth. This one does.',
      },
      {
        id: 'b',
        text: 'No — the first premise is false.',
        explanation:
          'A false premise makes an argument unsound, never invalid. Validity is entirely ' +
          'independent of whether the premises are true.',
      },
      {
        id: 'c',
        text: 'No — the conclusion is false.',
        explanation:
          'A valid argument with false premises will produce a false conclusion. That is the ' +
          'form working correctly on bad inputs, not a failure of validity.',
      },
      {
        id: 'd',
        text: 'It cannot be assessed without knowing whether salmon can fly.',
        explanation:
          'Validity can be assessed from the form alone, without checking any facts about ' +
          'salmon. That independence is precisely what makes it useful.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-4-e2',
    type: 'choice',
    conceptIds: ['validity', 'counterexample'],
    prompt: 'Which counterexample shows this argument invalid?',
    stimulus: 'All doctors have degrees. Sam has a degree. Therefore Sam is a doctor.',
    options: [
      {
        id: 'a',
        text: 'A doctor who has no degree.',
        explanation:
          'This attacks the first premise rather than the link. A counterexample must make the ' +
          'premises true and the conclusion false, not falsify a premise.',
      },
      {
        id: 'b',
        text: 'Sam is an architect with an architecture degree.',
        explanation:
          'Correct. Both premises hold — doctors do have degrees, and Sam has one — yet the ' +
          'conclusion is false. That combination is exactly what invalidity means.',
      },
      {
        id: 'c',
        text: 'Sam has no degree at all.',
        explanation:
          'This makes the second premise false, so the situation is not one where all premises ' +
          'are true. It cannot test the form.',
      },
      {
        id: 'd',
        text: 'Sam is a doctor without a licence.',
        explanation:
          'Here the conclusion is true, so nothing has gone wrong. A counterexample needs a ' +
          'false conclusion alongside true premises.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-4-e3',
    type: 'choice',
    conceptIds: ['validity'],
    prompt: 'Which combination is impossible?',
    options: [
      {
        id: 'a',
        text: 'A valid argument with false premises and a false conclusion.',
        explanation:
          'Perfectly possible, and common. The cats-and-mammals argument is exactly this.',
      },
      {
        id: 'b',
        text: 'A valid argument with false premises and a true conclusion.',
        explanation:
          'Possible. "All birds are fish; all fish are animals; so all birds are animals" has ' +
          'false premises, a true conclusion, and a valid form.',
      },
      {
        id: 'c',
        text: 'A valid argument with true premises and a false conclusion.',
        explanation:
          'Correct — this is the one case ruled out. It is the definition of validity: true ' +
          'premises cannot yield a false conclusion.',
      },
      {
        id: 'd',
        text: 'An invalid argument with true premises and a true conclusion.',
        explanation:
          'Possible. The conclusion may be true for reasons the premises do not supply, which ' +
          'is why a true conclusion never establishes that reasoning was good.',
      },
    ],
    correctId: 'c',
  },
  {
    id: 'logic-4-e4',
    type: 'sort',
    conceptIds: ['validity', 'premise', 'conclusion'],
    prompt: 'Label each statement in this valid argument.',
    statements: [
      { id: 's1', text: 'Everyone on the list received an invitation.', role: 'premise' },
      { id: 's2', text: 'Tomás is on the list.', role: 'premise' },
      { id: 's3', text: 'Tomás received an invitation.', role: 'conclusion' },
      { id: 's4', text: 'The invitations were printed on card.', role: 'irrelevant' },
    ],
    explanation:
      'The general claim about the list plus Tomás\u2019s membership guarantee the conclusion. ' +
      'How the invitations were printed changes nothing about whether the inference holds.',
  },

  /* ---------------------------------------------------------------- logic-5 */
  {
    id: 'logic-5-e1',
    type: 'choice',
    conceptIds: ['soundness', 'validity'],
    prompt: 'Which argument is sound?',
    options: [
      {
        id: 'a',
        text: 'All mammals are cats. Whiskers is a mammal. So Whiskers is a cat.',
        explanation:
          'Valid but unsound: the first premise is false. Soundness requires the form to hold ' +
          'and the premises to be true.',
      },
      {
        id: 'b',
        text: 'All squares are rectangles. This shape is a square. So it is a rectangle.',
        explanation:
          'Correct. The form is valid and both premises are true, which is exactly what ' +
          'soundness requires.',
      },
      {
        id: 'c',
        text: 'All rectangles are squares. This shape is a rectangle. So it is a square.',
        explanation:
          'Valid in form, but the first premise is false — plenty of rectangles are not ' +
          'squares. Unsound.',
      },
      {
        id: 'd',
        text: 'Some squares are rectangles. This shape is a rectangle. So it is a square.',
        explanation:
          'Both premises are true, but the form is invalid: "some" does not license the ' +
          'inference. An invalid argument cannot be sound however true its premises.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-5-e2',
    type: 'choice',
    conceptIds: ['soundness'],
    prompt: 'What follows if an argument is unsound?',
    options: [
      {
        id: 'a',
        text: 'Its conclusion is false.',
        explanation:
          'Not at all. A bad argument can reach a true conclusion by luck or by a route it ' +
          'failed to establish. Refuting an argument is not refuting its conclusion.',
      },
      {
        id: 'b',
        text: 'Either its form is invalid or at least one premise is false.',
        explanation:
          'Correct. Unsoundness is the failure of one of the two checks, and the label alone ' +
          'does not tell you which one broke.',
      },
      {
        id: 'c',
        text: 'Its premises are all false.',
        explanation:
          'One false premise is enough for unsoundness, and an argument with entirely true ' +
          'premises can still be unsound if the form is invalid.',
      },
      {
        id: 'd',
        text: 'It is also invalid.',
        explanation:
          'Not necessarily. Most unsound arguments are perfectly valid and simply rest on a ' +
          'false premise — that is the ordinary case.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-5-e3',
    type: 'choice',
    conceptIds: ['soundness', 'validity'],
    prompt: 'Which premise makes this argument unsound?',
    stimulus:
      'Every European capital lies on a river. Madrid is a European capital. Therefore Madrid ' +
      'lies on a river.',
    options: [
      {
        id: 'a',
        text: 'Every European capital lies on a river.',
        explanation:
          'Correct. Madrid sits on the Manzanares, but Valletta and Nicosia have no ' +
          'significant river, so the universal claim is false — and one false premise is ' +
          'enough to make an argument unsound.',
      },
      {
        id: 'b',
        text: 'Madrid is a European capital.',
        explanation: 'True, so it cannot be the source of the unsoundness.',
      },
      {
        id: 'c',
        text: 'Neither — the argument is sound.',
        explanation:
          'The form is valid, but soundness also demands true premises, and the universal ' +
          'claim about capitals does not hold.',
      },
      {
        id: 'd',
        text: 'Neither — the argument is invalid.',
        explanation:
          'The form is impeccable. If every capital did lie on a river, Madrid would have to. ' +
          'The problem is the truth of a premise, not the link.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-5-e4',
    type: 'choice',
    conceptIds: ['soundness', 'validity'],
    prompt: 'Someone says: "Your argument is unsound, so you are wrong." What is the error?',
    options: [
      {
        id: 'a',
        text: 'Unsoundness cannot be established without checking every premise.',
        explanation:
          'Establishing unsoundness needs only one false premise or an invalid form, so this ' +
          'is not the problem with the reply.',
      },
      {
        id: 'b',
        text: 'Showing an argument fails does not show its conclusion is false.',
        explanation:
          'Correct. The conclusion may still be true and provable by some better argument. ' +
          'Defeating a defence of a claim is not the same as defeating the claim.',
      },
      {
        id: 'c',
        text: 'Only invalid arguments can be called unsound.',
        explanation:
          'Backwards — a valid argument with a false premise is the most common kind of ' +
          'unsound argument there is.',
      },
      {
        id: 'd',
        text: 'There is no error; unsound arguments have false conclusions.',
        explanation:
          'They do not. "All fish are birds; all birds swim; so some fish swim" is unsound and ' +
          'its conclusion is true.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- logic-6 */
  {
    id: 'logic-6-e1',
    type: 'choice',
    conceptIds: ['necessary-condition', 'sufficient-condition'],
    prompt: 'Being a square is which kind of condition for being a rectangle?',
    options: [
      {
        id: 'a',
        text: 'Necessary but not sufficient.',
        explanation:
          'Reversed. Plenty of rectangles are not squares, so squareness is not required for ' +
          'being a rectangle.',
      },
      {
        id: 'b',
        text: 'Sufficient but not necessary.',
        explanation:
          'Correct. Every square is a rectangle, so squareness settles it — but rectangles ' +
          'need not be square, so it is not required.',
      },
      {
        id: 'c',
        text: 'Both necessary and sufficient.',
        explanation:
          'That would mean the two were equivalent. A 3×5 rectangle is a counterexample: a ' +
          'rectangle that is not a square.',
      },
      {
        id: 'd',
        text: 'Neither.',
        explanation:
          'It is at least sufficient — knowing a shape is a square settles that it is a ' +
          'rectangle with no further information needed.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-6-e2',
    type: 'choice',
    conceptIds: ['conditional', 'necessary-condition'],
    prompt: 'From "If it is raining, the pavement is wet", what follows?',
    options: [
      {
        id: 'a',
        text: 'A wet pavement means it is raining.',
        explanation:
          'This treats wetness as sufficient for rain, but the conditional only makes rain ' +
          'sufficient for wetness. A burst pipe would wet the pavement without any rain.',
      },
      {
        id: 'b',
        text: 'A dry pavement means it is not raining.',
        explanation:
          'Correct. Wetness is necessary for rain, so its absence rules rain out. This is the ' +
          'contrapositive, and it always holds.',
      },
      {
        id: 'c',
        text: 'It is raining.',
        explanation:
          'A conditional asserts only a link, never its antecedent. It tells you nothing about ' +
          'whether it is actually raining.',
      },
      {
        id: 'd',
        text: 'The pavement is wet.',
        explanation:
          'Likewise, the conditional does not assert its consequent — only that wetness would ' +
          'follow if it rained.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-6-e3',
    type: 'choice',
    conceptIds: ['necessary-condition', 'sufficient-condition'],
    prompt: 'What is wrong with the passport argument?',
    stimulus:
      'You cannot board an international flight without a passport. Dara has a passport. ' +
      'Therefore Dara can board an international flight.',
    options: [
      {
        id: 'a',
        text: 'It treats a necessary condition as though it were sufficient.',
        explanation:
          'Correct. The premise says a passport is required, not that it is enough. Dara also ' +
          'needs a ticket, possibly a visa, and to be at the airport on time.',
      },
      {
        id: 'b',
        text: 'The first premise is false.',
        explanation:
          'It is true — international travel does require a passport. The error is in what the ' +
          'argument does with that premise.',
      },
      {
        id: 'c',
        text: 'It treats a sufficient condition as though it were necessary.',
        explanation:
          'The right error, reversed. The premise states a requirement (necessary), and the ' +
          'argument misuses it as a guarantee (sufficient).',
      },
      {
        id: 'd',
        text: 'Nothing — the argument is valid.',
        explanation:
          'A counterexample settles it: Dara has a passport but no ticket. Both premises true, ' +
          'conclusion false.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-6-e4',
    type: 'choice',
    conceptIds: ['necessary-condition', 'sufficient-condition'],
    prompt: 'Which pair is both necessary and sufficient?',
    options: [
      {
        id: 'a',
        text: 'Being over 18 / being allowed to vote in the UK.',
        explanation:
          'Necessary but not sufficient — citizenship and registration are also required, so ' +
          'age alone does not settle it.',
      },
      {
        id: 'b',
        text: 'Being a triangle / having exactly three sides.',
        explanation:
          'Correct. Each guarantees the other: every triangle has three sides, and every ' +
          'three-sided polygon is a triangle. The two conditions are equivalent.',
      },
      {
        id: 'c',
        text: 'Studying hard / passing an exam.',
        explanation:
          'Neither, strictly. Some people pass without studying, and studying hard is no ' +
          'guarantee of passing.',
      },
      {
        id: 'd',
        text: 'Owning a car / holding a driving licence.',
        explanation:
          'Neither. Plenty of licence-holders own no car, and you can own a car without ever ' +
          'having held a licence.',
      },
    ],
    correctId: 'b',
  },
]
