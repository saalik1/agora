import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Unit 2 — Argument Forms.
 *
 * The unit is built around two pairs. Modus ponens (7) and affirming the
 * consequent (9) look nearly identical on the page; so do modus tollens (8) and
 * denying the antecedent (10). One of each pair is watertight and the other is
 * the most common formal error there is. Teaching them adjacent is what makes
 * the difference visible — taught separately they are just four rules to learn.
 */

export const argumentFormsUnit: Unit = {
  id: 'logic-u2',
  subjectId: 'logic',
  title: 'Argument Forms',
  blurb: 'Four conditional patterns — two valid, two that only look it — plus proof by absurdity.',
  lessonIds: ['logic-7', 'logic-8', 'logic-9', 'logic-10', 'logic-11'],
}

export const argumentFormsLessons: Lesson[] = [
  {
    id: 'logic-7',
    unitId: 'logic-u2',
    title: 'Modus ponens',
    summary: 'If P then Q; P; therefore Q. The workhorse of valid reasoning.',
    difficulty: 1,
    estimatedMinutes: 6,
    xpReward: 15,
    conceptIds: ['modus-ponens', 'conditional', 'validity'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Almost every piece of reasoning that feels like "applying a rule to a case" is this ' +
          'form. You have a conditional, you have its antecedent, and the consequent follows. ' +
          'It is so natural that people use it constantly without noticing — which is exactly ' +
          'why its invalid twin catches so many out.',
      },
      {
        kind: 'definition',
        term: 'Modus ponens',
        body: 'If P then Q. P. Therefore Q. Valid in every instance, whatever P and Q stand for.',
      },
      {
        kind: 'argument',
        ref: 'medicine-ponens',
        note:
          'Note what P2 does: it affirms the antecedent, the "if" half. That is the move that ' +
          'makes this valid.',
      },
      {
        kind: 'explanation',
        heading: 'Why it holds',
        body:
          'The conditional rules out exactly one situation: P true and Q false. So once P is ' +
          'established, the only surviving possibility has Q true as well. Nothing about the ' +
          'subject matter matters — the guarantee comes entirely from the shape.',
      },
      {
        kind: 'misconception',
        claim: 'Modus ponens proves the conclusion is true.',
        correction:
          'It proves the conclusion follows. If the conditional is false, or the antecedent ' +
          'is not really established, a valid form will carry you straight to a false ' +
          'conclusion. Validity and soundness stay separate here as everywhere.',
      },
    ],
    exerciseIds: ['logic-7-e1', 'logic-7-e2', 'logic-7-e3', 'logic-7-e4'],
  },

  {
    id: 'logic-8',
    unitId: 'logic-u2',
    title: 'Modus tollens',
    summary: 'If P then Q; not Q; therefore not P. Reasoning backwards from a failure.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['modus-tollens', 'conditional', 'necessary-condition'],
    sections: [
      {
        kind: 'explanation',
        body:
          'If a claim predicts something and that something is missing, the claim is in ' +
          'trouble. That is modus tollens, and it is the engine of testing: work out what an ' +
          'idea requires, go looking, and if it is absent the idea falls.',
      },
      {
        kind: 'definition',
        term: 'Modus tollens',
        body: 'If P then Q. Not Q. Therefore not P. Valid.',
      },
      {
        kind: 'argument',
        ref: 'fingerprints-tollens',
        note:
          'Expand P2 to see the standard objection. Notice it attacks a premise, not the ' +
          'form — the reasoning is airtight, so any dispute must be about whether P1 is true.',
      },
      {
        kind: 'explanation',
        heading: 'The necessary-condition view',
        body:
          '"If P then Q" makes Q necessary for P. Necessary conditions rule out: without Q, no ' +
          'P. So modus tollens is just that fact put to work. If you found lesson 6 clear, ' +
          'this form should feel like something you already knew.',
      },
      {
        kind: 'misconception',
        claim: 'Modus tollens shows the conditional was wrong.',
        correction:
          'It shows the antecedent was wrong, taking the conditional as given. Of course you ' +
          'may instead choose to reject the conditional — but then you are making a different ' +
          'argument, not running this one.',
      },
    ],
    exerciseIds: ['logic-8-e1', 'logic-8-e2', 'logic-8-e3', 'logic-8-e4'],
  },

  {
    id: 'logic-9',
    unitId: 'logic-u2',
    title: 'Affirming the consequent',
    summary: 'The invalid twin of modus ponens, and the error people make most.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['affirming-consequent', 'modus-ponens', 'counterexample'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Here the conditional is affirmed at the wrong end. Instead of establishing P and ' +
          'concluding Q, the argument establishes Q and concludes P. It reads almost exactly ' +
          'like modus ponens, and it is invalid.',
      },
      {
        kind: 'definition',
        term: 'Affirming the consequent',
        body: 'If P then Q. Q. Therefore P. Invalid — Q may have other causes entirely.',
      },
      {
        kind: 'argument',
        ref: 'wet-grass-invalid',
        note:
          'Both premises can be perfectly true while the conclusion is false: rain would wet ' +
          'the grass just as well. That is a counterexample, and it settles the matter.',
      },
      {
        kind: 'explanation',
        heading: 'Where it hides',
        body:
          'This form is the shape of most bad diagnostic reasoning. "If the theory is right we ' +
          'would see X; we see X; so the theory is right." Confirming a prediction raises ' +
          'confidence, but it never proves the theory, because rival theories may predict X ' +
          'too. Treating confirmation as proof is this fallacy wearing a lab coat.',
      },
      {
        kind: 'misconception',
        claim: 'If the conclusion turns out true, the argument was fine after all.',
        correction:
          'The sprinkler may well have run. The argument still fails, because it gave no ' +
          'reason to prefer that explanation over rain. An invalid argument with a true ' +
          'conclusion is still invalid — you were lucky, not right.',
      },
    ],
    exerciseIds: ['logic-9-e1', 'logic-9-e2', 'logic-9-e3', 'logic-9-e4'],
  },

  {
    id: 'logic-10',
    unitId: 'logic-u2',
    title: 'Denying the antecedent',
    summary: 'The invalid twin of modus tollens. If not P, Q may still hold.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['denying-antecedent', 'modus-tollens', 'sufficient-condition'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The fourth pattern denies the wrong half. From "if P then Q" and "not P", it ' +
          'concludes "not Q". But the conditional never said P was the only route to Q, so ' +
          'ruling out P leaves the others untouched.',
      },
      {
        kind: 'definition',
        term: 'Denying the antecedent',
        body: 'If P then Q. Not P. Therefore not Q. Invalid — other routes to Q may remain.',
      },
      {
        kind: 'argument',
        ref: 'degree-denying',
        note:
          'Expand P2. Several jurisdictions admit lawyers without a degree, so the absence of ' +
          'one settles nothing.',
      },
      {
        kind: 'explanation',
        heading: 'The one question that catches it',
        body:
          'Ask: could the consequent happen some other way? If yes, denying the antecedent is ' +
          'invalid. The fallacy is only ever tempting when you have quietly assumed the ' +
          'conditional runs both ways — that P is necessary as well as sufficient.',
      },
      {
        kind: 'misconception',
        claim: 'These two invalid forms are rare once you know about them.',
        correction:
          'They are everywhere, because ordinary speech often uses "if" to mean "if and only ' +
          'if". "If you finish your work, you can go out" is usually meant to imply you cannot ' +
          'go out otherwise. Reading strict conditionals loosely is the habit that produces ' +
          'both fallacies.',
      },
    ],
    exerciseIds: ['logic-10-e1', 'logic-10-e2', 'logic-10-e3', 'logic-10-e4'],
  },

  {
    id: 'logic-11',
    unitId: 'logic-u2',
    title: 'Reductio ad absurdum',
    summary: 'Grant a claim, derive a contradiction, and let it destroy itself.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['reductio', 'contradiction', 'modus-tollens'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Instead of arguing against a claim, you accept it and follow it until it produces ' +
          'something impossible. Since a contradiction cannot be true, and the reasoning was ' +
          'valid, the assumption must go. The method is powerful because it borrows only your ' +
          'opponent\u2019s commitments — nothing they can refuse.',
      },
      {
        kind: 'definition',
        term: 'Contradiction',
        body:
          'A claim and its denial together: "P and not P". False under every possible ' +
          'circumstance, which is what gives reductio its force.',
      },
      {
        kind: 'argument',
        ref: 'largest-prime',
        note:
          'Euclid\u2019s proof, and still the cleanest example there is. The assumption in P1 is ' +
          'granted purely so it can be destroyed.',
      },
      {
        kind: 'explanation',
        heading: 'It is modus tollens underneath',
        body:
          'Reductio has the shape: if P then a contradiction; contradictions are false; ' +
          'therefore not P. That is modus tollens with a contradiction in the consequent slot. ' +
          'Recognising this matters, because it shows the method inherits the same ' +
          'requirement: every step from the assumption must be valid, or the contradiction ' +
          'proves nothing about P.',
      },
      {
        kind: 'misconception',
        claim: 'A reductio works by showing the assumption leads somewhere strange.',
        correction:
          'Strange is not enough. Reality is full of surprising truths, and dismissing a claim ' +
          'for being counterintuitive is a different move altogether. A genuine reductio needs ' +
          'a real contradiction or a plainly false consequence — not merely something ' +
          'uncomfortable.',
      },
    ],
    exerciseIds: ['logic-11-e1', 'logic-11-e2', 'logic-11-e3', 'logic-11-e4'],
  },
]

export const argumentFormsExercises: Exercise[] = [
  /* ---------------------------------------------------------------- logic-7 */
  {
    id: 'logic-7-e1',
    type: 'choice',
    conceptIds: ['modus-ponens'],
    prompt: 'Which argument is modus ponens?',
    options: [
      {
        id: 'a',
        text: 'If the tap is open, water flows. Water is flowing. So the tap is open.',
        explanation:
          'This affirms the consequent, not the antecedent. Water might flow from a leak, so ' +
          'the form is invalid.',
      },
      {
        id: 'b',
        text: 'If the tap is open, water flows. The tap is open. So water is flowing.',
        explanation:
          'Correct. The conditional plus its antecedent gives the consequent — the valid form.',
      },
      {
        id: 'c',
        text: 'If the tap is open, water flows. The tap is closed. So no water is flowing.',
        explanation:
          'Denying the antecedent. A closed tap does not rule out water arriving some other ' +
          'way, so this is invalid.',
      },
      {
        id: 'd',
        text: 'If the tap is open, water flows. No water is flowing. So the tap is closed.',
        explanation:
          'This is modus tollens — also valid, but a different form. It denies the consequent ' +
          'rather than affirming the antecedent.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-7-e2',
    type: 'choice',
    conceptIds: ['modus-ponens', 'conditional'],
    prompt: 'What is the missing premise?',
    stimulus: 'If the meeting is cancelled, Ana will be at her desk. Therefore Ana is at her desk.',
    options: [
      {
        id: 'a',
        text: 'The meeting is cancelled.',
        explanation:
          'Correct. Affirming the antecedent completes modus ponens and delivers the ' +
          'conclusion validly.',
      },
      {
        id: 'b',
        text: 'Ana is not at her desk.',
        explanation:
          'This contradicts the stated conclusion. A premise cannot deny what the argument is ' +
          'trying to establish.',
      },
      {
        id: 'c',
        text: 'The meeting is not cancelled.',
        explanation:
          'Denying the antecedent, which licenses nothing about Ana — and certainly not the ' +
          'positive conclusion given here.',
      },
      {
        id: 'd',
        text: 'Ana is always at her desk.',
        explanation:
          'This would give the conclusion, but it makes the conditional redundant. The missing ' +
          'premise should be the one the conditional was waiting for.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-7-e3',
    type: 'sort',
    conceptIds: ['modus-ponens', 'premise', 'conclusion'],
    prompt: 'Label each statement in this modus ponens argument.',
    statements: [
      { id: 's1', text: 'If the alloy contains iron, a magnet will attract it.', role: 'premise' },
      { id: 's2', text: 'The alloy contains iron.', role: 'premise' },
      { id: 's3', text: 'A magnet will attract the alloy.', role: 'conclusion' },
      { id: 's4', text: 'The alloy was cast in Sheffield.', role: 'irrelevant' },
    ],
    explanation:
      'The conditional and its antecedent do all the work. Where the alloy was cast is ' +
      'background colour — it plays no part in the inference.',
  },
  {
    id: 'logic-7-e4',
    type: 'choice',
    conceptIds: ['modus-ponens', 'soundness'],
    prompt: 'This argument is valid. Why might it still fail to establish its conclusion?',
    stimulus:
      'If a food is natural, it is safe to eat. Deadly nightshade is natural. So deadly ' +
      'nightshade is safe to eat.',
    options: [
      {
        id: 'a',
        text: 'The form is not really modus ponens.',
        explanation:
          'It is exactly modus ponens: conditional, antecedent, consequent. The form is not ' +
          'the problem.',
      },
      {
        id: 'b',
        text: 'The conditional premise is false.',
        explanation:
          'Correct. Plenty of natural things are lethal, so P1 fails. A valid form applied to ' +
          'a false premise carries you straight to a false conclusion.',
      },
      {
        id: 'c',
        text: 'Deadly nightshade is not natural.',
        explanation:
          'It certainly is — a wild plant. The second premise is true; the first is where this ' +
          'breaks.',
      },
      {
        id: 'd',
        text: 'Valid arguments cannot have false conclusions.',
        explanation:
          'They can, whenever a premise is false. Validity only promises that TRUE premises ' +
          'would yield a true conclusion.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- logic-8 */
  {
    id: 'logic-8-e1',
    type: 'choice',
    conceptIds: ['modus-tollens'],
    prompt: 'Which conclusion follows validly?',
    stimulus: 'If the parcel was posted on Monday, it would have arrived by Thursday. It has not arrived.',
    options: [
      {
        id: 'a',
        text: 'The parcel was not posted on Monday.',
        explanation:
          'Correct. Arrival was necessary for Monday posting, so its absence rules Monday out. ' +
          'This is modus tollens.',
      },
      {
        id: 'b',
        text: 'The parcel was posted on Monday.',
        explanation:
          'The opposite of what follows. If it had been posted Monday, it would have arrived — ' +
          'and it has not.',
      },
      {
        id: 'c',
        text: 'The parcel was lost.',
        explanation:
          'A possible explanation, but nothing in the premises supports it over any other. The ' +
          'argument establishes only that Monday posting is ruled out.',
      },
      {
        id: 'd',
        text: 'The parcel will never arrive.',
        explanation:
          'Far stronger than the premises allow. A parcel posted on Wednesday could still ' +
          'arrive next week.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-8-e2',
    type: 'choice',
    conceptIds: ['modus-tollens', 'modus-ponens'],
    prompt: 'Which form is this?',
    stimulus:
      'If the vaccine works, infection rates fall in vaccinated groups. Infection rates have ' +
      'not fallen. So the vaccine does not work.',
    options: [
      {
        id: 'a',
        text: 'Modus ponens.',
        explanation:
          'Modus ponens affirms the antecedent. Here the argument denies the consequent, which ' +
          'is a different move.',
      },
      {
        id: 'b',
        text: 'Modus tollens.',
        explanation:
          'Correct. The consequent is denied and the antecedent falls with it — valid, though ' +
          'whether P1 is true is a separate scientific question.',
      },
      {
        id: 'c',
        text: 'Affirming the consequent.',
        explanation:
          'That would run the other way: rates fell, therefore the vaccine works. This ' +
          'argument denies rather than affirms.',
      },
      {
        id: 'd',
        text: 'Denying the antecedent.',
        explanation:
          'That would deny "the vaccine works" and conclude something about rates. Here the ' +
          'denial lands on the consequent instead.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-8-e3',
    type: 'choice',
    conceptIds: ['modus-tollens', 'necessary-condition'],
    prompt: 'Why does the fingerprint argument depend so heavily on its first premise?',
    options: [
      {
        id: 'a',
        text: 'Because the form is invalid without it.',
        explanation:
          'The form is valid. The dependence is about truth, not structure — modus tollens ' +
          'holds regardless of what P and Q stand for.',
      },
      {
        id: 'b',
        text: 'Because gloves would make prints unnecessary for breaking the window.',
        explanation:
          'Correct. The argument works only if prints really are necessary. Allow gloves and ' +
          'P1 fails, so the absence of prints stops ruling anything out.',
      },
      {
        id: 'c',
        text: 'Because fingerprints can be forged.',
        explanation:
          'That would threaten the reliability of a positive match, not the inference from ' +
          'their absence, which is what this argument runs on.',
      },
      {
        id: 'd',
        text: 'Because Reeves might have an alibi.',
        explanation:
          'An alibi would be separate evidence for the same conclusion. It has no bearing on ' +
          'whether this argument works.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-8-e4',
    type: 'choice',
    conceptIds: ['modus-tollens', 'counterexample'],
    prompt: 'Which situation would show a modus tollens argument had a false premise?',
    stimulus: 'If Kofi studied, he passed. Kofi did not pass. So Kofi did not study.',
    options: [
      {
        id: 'a',
        text: 'Kofi studied hard but failed anyway because the exam was unfair.',
        explanation:
          'Correct. This makes P1 false — studying did not guarantee passing — which is the ' +
          'only way to resist a valid argument.',
      },
      {
        id: 'b',
        text: 'Kofi did not study and did not pass.',
        explanation:
          'This is consistent with everything the argument says, so it challenges nothing. It ' +
          'is the expected outcome.',
      },
      {
        id: 'c',
        text: 'Kofi passed without studying.',
        explanation:
          'This contradicts P2 rather than P1, so it does not test the conditional. It also ' +
          'leaves the form untouched.',
      },
      {
        id: 'd',
        text: 'Kofi studied and passed.',
        explanation:
          'Consistent with P1 and contradicts P2. Again it changes the inputs rather than ' +
          'showing anything wrong with the conditional.',
      },
    ],
    correctId: 'a',
  },

  /* ---------------------------------------------------------------- logic-9 */
  {
    id: 'logic-9-e1',
    type: 'choice',
    conceptIds: ['affirming-consequent'],
    prompt: 'What is wrong with this argument?',
    stimulus: 'If Sara has flu, she has a fever. Sara has a fever. So Sara has flu.',
    options: [
      {
        id: 'a',
        text: 'Nothing — it is modus ponens.',
        explanation:
          'Modus ponens affirms the antecedent ("Sara has flu"). This affirms the consequent ' +
          'instead, which is the invalid pattern.',
      },
      {
        id: 'b',
        text: 'It affirms the consequent — fever has many other causes.',
        explanation:
          'Correct. The conditional makes fever necessary for flu, not sufficient. Any other ' +
          'infection would produce the same fever.',
      },
      {
        id: 'c',
        text: 'The first premise is false.',
        explanation:
          'P1 is a reasonable clinical claim. The problem is the direction the argument runs ' +
          'it, not its truth.',
      },
      {
        id: 'd',
        text: 'It denies the antecedent.',
        explanation:
          'Nothing is denied here. Both premises are positive assertions — the error is which ' +
          'half gets affirmed.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-9-e2',
    type: 'choice',
    conceptIds: ['affirming-consequent', 'counterexample'],
    prompt: 'Which counterexample best shows this form fails?',
    stimulus: 'If the shop is shut, the lights are off. The lights are off. So the shop is shut.',
    options: [
      {
        id: 'a',
        text: 'The shop is shut and the lights are on for cleaning.',
        explanation:
          'This attacks P1 rather than the form. A counterexample needs both premises true and ' +
          'the conclusion false.',
      },
      {
        id: 'b',
        text: 'The shop is open but the lights have failed in a power cut.',
        explanation:
          'Correct. Both premises hold — a shut shop would be dark, and the lights are off — ' +
          'yet the shop is open. That is exactly the combination validity forbids.',
      },
      {
        id: 'c',
        text: 'The shop is shut and the lights are off.',
        explanation:
          'Here the conclusion is true, so nothing has gone wrong. Confirming instances never ' +
          'show a form invalid.',
      },
      {
        id: 'd',
        text: 'The shop has no lights at all.',
        explanation:
          'This makes the conditional hard to apply rather than producing the true-premises, ' +
          'false-conclusion combination that a counterexample requires.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-9-e3',
    type: 'choice',
    conceptIds: ['affirming-consequent'],
    prompt: 'Which of these commits the same error?',
    options: [
      {
        id: 'a',
        text: 'If it snowed, school is closed. It snowed. So school is closed.',
        explanation:
          'Valid modus ponens. The antecedent is affirmed, which is the legitimate move.',
      },
      {
        id: 'b',
        text: 'If the theory is right, we would observe X. We observe X. So the theory is right.',
        explanation:
          'Correct, and this is the form\u2019s most consequential disguise. A rival theory ' +
          'predicting X would explain the observation equally well.',
      },
      {
        id: 'c',
        text: 'If it snowed, school is closed. School is open. So it did not snow.',
        explanation:
          'Valid modus tollens — the consequent is denied, and the antecedent falls with it.',
      },
      {
        id: 'd',
        text: 'If the theory is right, we would observe X. We do not observe X. So it is wrong.',
        explanation:
          'Modus tollens again, and valid. Whether P1 is true is a separate matter, but the ' +
          'form is sound.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-9-e4',
    type: 'choice',
    conceptIds: ['affirming-consequent', 'validity'],
    prompt: 'The sprinkler really did run last night. Does that rescue the argument?',
    options: [
      {
        id: 'a',
        text: 'Yes — a true conclusion means the reasoning worked.',
        explanation:
          'A true conclusion can be reached by terrible reasoning. Validity is about whether ' +
          'the premises force the conclusion, not whether it happens to be true.',
      },
      {
        id: 'b',
        text: 'No — the argument gave no reason to prefer the sprinkler over rain.',
        explanation:
          'Correct. The conclusion is true and the argument is still invalid. You were lucky, ' +
          'not right.',
      },
      {
        id: 'c',
        text: 'Yes — the premises are all true, so the argument is sound.',
        explanation:
          'Soundness requires validity as well as true premises. An invalid argument cannot be ' +
          'sound however true its parts.',
      },
      {
        id: 'd',
        text: 'It depends on how likely rain was that night.',
        explanation:
          'Probability could make this a decent inductive argument, but it cannot make an ' +
          'invalid deductive form valid.',
      },
    ],
    correctId: 'b',
  },

  /* --------------------------------------------------------------- logic-10 */
  {
    id: 'logic-10-e1',
    type: 'choice',
    conceptIds: ['denying-antecedent'],
    prompt: 'What is wrong with this argument?',
    stimulus: 'If Yusuf trained, he finished the race. Yusuf did not train. So he did not finish.',
    options: [
      {
        id: 'a',
        text: 'It denies the antecedent — he might have finished anyway.',
        explanation:
          'Correct. Training was sufficient for finishing, not necessary. An untrained but ' +
          'determined runner could still cross the line.',
      },
      {
        id: 'b',
        text: 'It affirms the consequent.',
        explanation:
          'That would start from "he finished". Here the argument starts by denying that he ' +
          'trained, which is the other invalid pattern.',
      },
      {
        id: 'c',
        text: 'Nothing — it is modus tollens.',
        explanation:
          'Modus tollens denies the consequent ("he did not finish"). This denies the ' +
          'antecedent, and the difference is the whole point.',
      },
      {
        id: 'd',
        text: 'The conditional is false.',
        explanation:
          'P1 may well be true. The error is structural, and would remain even with a ' +
          'perfectly true conditional.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'logic-10-e2',
    type: 'choice',
    conceptIds: ['denying-antecedent', 'modus-tollens'],
    prompt: 'Which pair are the two valid forms?',
    options: [
      {
        id: 'a',
        text: 'Affirming the antecedent and affirming the consequent.',
        explanation:
          'Only the first is valid. Affirming the consequent is the fallacy that mimics ' +
          'modus ponens.',
      },
      {
        id: 'b',
        text: 'Affirming the antecedent and denying the consequent.',
        explanation:
          'Correct — modus ponens and modus tollens. The valid moves affirm the "if" half or ' +
          'deny the "then" half.',
      },
      {
        id: 'c',
        text: 'Denying the antecedent and denying the consequent.',
        explanation:
          'Only the second is valid. Denying the antecedent leaves other routes to the ' +
          'consequent open.',
      },
      {
        id: 'd',
        text: 'Affirming the consequent and denying the antecedent.',
        explanation:
          'These are precisely the two invalid forms — the pair this unit exists to separate ' +
          'from their valid lookalikes.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-10-e3',
    type: 'choice',
    conceptIds: ['denying-antecedent', 'sufficient-condition'],
    prompt: 'Which question exposes this fallacy fastest?',
    options: [
      {
        id: 'a',
        text: 'Is the conditional true?',
        explanation:
          'Worth asking of any argument, but it does not target this error. The fallacy ' +
          'remains even when the conditional is impeccable.',
      },
      {
        id: 'b',
        text: 'Could the consequent still happen some other way?',
        explanation:
          'Correct. If yes, denying the antecedent settles nothing — and the answer is yes ' +
          'unless the antecedent is necessary as well as sufficient.',
      },
      {
        id: 'c',
        text: 'Are the premises relevant to the conclusion?',
        explanation:
          'They are relevant here; that is what makes the fallacy tempting. Relevance is not ' +
          'the failing.',
      },
      {
        id: 'd',
        text: 'Is the argument deductive or inductive?',
        explanation:
          'A reasonable general question, but it does not isolate this error — the argument is ' +
          'plainly deductive and plainly invalid.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-10-e4',
    type: 'sort',
    conceptIds: ['denying-antecedent', 'premise', 'conclusion'],
    prompt: 'Label each statement in this invalid argument.',
    statements: [
      { id: 's1', text: 'If the bridge is open, traffic flows freely.', role: 'premise' },
      { id: 's2', text: 'The bridge is not open.', role: 'premise' },
      { id: 's3', text: 'Traffic is not flowing freely.', role: 'conclusion' },
      { id: 's4', text: 'The bridge was built in 1962.', role: 'irrelevant' },
    ],
    explanation:
      'The structure is clear even though the reasoning fails: a conditional, a denial of its ' +
      'antecedent, and a conclusion that does not follow. Traffic might flow freely via a ' +
      'diversion. Identifying parts and judging validity are separate skills.',
  },

  /* --------------------------------------------------------------- logic-11 */
  {
    id: 'logic-11-e1',
    type: 'choice',
    conceptIds: ['reductio'],
    prompt: 'What makes a reductio succeed?',
    options: [
      {
        id: 'a',
        text: 'The assumption leads to a surprising result.',
        explanation:
          'Surprise is not enough. Many true claims are deeply counterintuitive, and ' +
          'rejecting them for oddness is a different and much weaker move.',
      },
      {
        id: 'b',
        text: 'The assumption leads validly to a contradiction.',
        explanation:
          'Correct. Both halves matter: the derivation must be valid, and the endpoint must be ' +
          'genuinely impossible rather than merely uncomfortable.',
      },
      {
        id: 'c',
        text: 'The assumption is one the opponent rejects.',
        explanation:
          'Backwards. A reductio grants exactly what the opponent accepts — that is the source ' +
          'of its force.',
      },
      {
        id: 'd',
        text: 'The conclusion is independently known to be true.',
        explanation:
          'That would make the argument redundant. A reductio establishes the conclusion ' +
          'rather than assuming it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-11-e2',
    type: 'choice',
    conceptIds: ['reductio', 'contradiction'],
    prompt: 'In the largest-prime proof, what role does the assumption play?',
    options: [
      {
        id: 'a',
        text: 'It is a premise the argument is committed to.',
        explanation:
          'The opposite. It is granted temporarily precisely so it can be destroyed — the ' +
          'argument concludes it is false.',
      },
      {
        id: 'b',
        text: 'It is granted temporarily so its consequences can be examined.',
        explanation:
          'Correct. Everything downstream is derived from it, and the contradiction that ' +
          'results is what discharges it.',
      },
      {
        id: 'c',
        text: 'It is the conclusion being established.',
        explanation:
          'The conclusion is its denial: there is no largest prime. The assumption is the ' +
          'target, not the result.',
      },
      {
        id: 'd',
        text: 'It is an irrelevant statement that could be removed.',
        explanation:
          'Remove it and there is no proof at all. The whole derivation depends on having ' +
          'something to contradict.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-11-e3',
    type: 'choice',
    conceptIds: ['reductio', 'modus-tollens'],
    prompt: 'Reductio is a special case of which valid form?',
    options: [
      {
        id: 'a',
        text: 'Modus ponens.',
        explanation:
          'Modus ponens moves forward to a conclusion. Reductio works backwards from an ' +
          'impossible consequence to reject its source.',
      },
      {
        id: 'b',
        text: 'Modus tollens.',
        explanation:
          'Correct. If P then a contradiction; contradictions are false; therefore not P. The ' +
          'contradiction simply occupies the consequent slot.',
      },
      {
        id: 'c',
        text: 'Affirming the consequent.',
        explanation:
          'That form is invalid, so nothing valid could be a special case of it.',
      },
      {
        id: 'd',
        text: 'Denying the antecedent.',
        explanation:
          'Also invalid. Reductio denies a consequent, not an antecedent — the same ' +
          'distinction lessons 8 and 10 turned on.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-11-e4',
    type: 'choice',
    conceptIds: ['reductio', 'contradiction'],
    prompt: 'Which of these is a genuine reductio?',
    options: [
      {
        id: 'a',
        text:
          'Suppose the set of all sets contains itself. Then it both does and does not belong ' +
          'to itself. So no such set exists.',
        explanation:
          'Correct. The assumption yields an outright contradiction — a thing both belonging ' +
          'and not belonging — so it cannot stand.',
      },
      {
        id: 'b',
        text: 'Suppose time had a beginning. That is very hard to imagine. So it did not.',
        explanation:
          'Difficulty imagining something is not a contradiction. This rejects a claim for ' +
          'being strange, which reality is under no obligation to avoid.',
      },
      {
        id: 'c',
        text: 'Suppose the defendant is innocent. Then the jury wasted its time. So he is guilty.',
        explanation:
          'A wasted afternoon is inconvenient, not impossible. Nothing here cannot be true.',
      },
      {
        id: 'd',
        text: 'Suppose the theory is right. Then my rival was correct. So the theory is wrong.',
        explanation:
          'An unwelcome consequence, not a contradiction. This is motivated reasoning wearing ' +
          'the shape of a proof.',
      },
    ],
    correctId: 'a',
  },
]
