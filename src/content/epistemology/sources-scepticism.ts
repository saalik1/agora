import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Epistemology Units 2 and 3.
 *
 * Unit 2 asks where knowledge comes from and ends at the problem of induction,
 * which pays off Logic lesson 3 directly: you were told inductive arguments
 * leave a gap, and this is the lesson about whether the gap can ever be closed.
 *
 * Unit 3 is scepticism, structured so the sceptical argument is examined as an
 * argument — premises, objections, responses — rather than as a mood.
 */

export const epistemologySourcesUnit: Unit = {
  id: 'epis-u2',
  subjectId: 'epistemology',
  title: 'Sources of Knowledge',
  blurb: 'Reason, experience, other people — and the assumption underlying all prediction.',
  lessonIds: ['epis-7', 'epis-8', 'epis-9', 'epis-10'],
}

export const epistemologyScepticismUnit: Unit = {
  id: 'epis-u3',
  subjectId: 'epistemology',
  title: 'Scepticism',
  blurb: 'Scenarios you cannot rule out, and what answering them requires.',
  lessonIds: ['epis-11', 'epis-12', 'epis-13', 'epis-14'],
}

export const epistemologySourcesLessons: Lesson[] = [
  {
    id: 'epis-7',
    unitId: 'epis-u2',
    title: 'A priori and a posteriori',
    summary: 'Two routes to justification: reflection and observation.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['a-priori', 'a-posteriori'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Some claims can be established without looking: that all triangles have three ' +
          'sides, that no bachelor is married. Others cannot be established any other way: ' +
          'that water boils at 100°C, that Paris is in France. The distinction concerns how a ' +
          'claim is justified, not how anyone happened to learn it.',
      },
      {
        kind: 'definition',
        term: 'A priori',
        body: 'Justifiable independently of experience.',
      },
      {
        kind: 'definition',
        term: 'A posteriori',
        body: 'Justifiable only through experience.',
      },
      {
        kind: 'explanation',
        heading: 'A common confusion',
        body:
          'You need experience to acquire the concept of a triangle — nobody is born with it. ' +
          'That does not make geometry a posteriori. The question is what justifies the claim ' +
          'once you have the concepts, not what was required to grasp them in the first place.',
      },
      {
        kind: 'misconception',
        claim: 'A priori means innate.',
        correction:
          'Different notions entirely. Innateness is about how a belief was acquired; a priori ' +
          'status is about what justifies it. A theorem you learned in school and verified by ' +
          'proof is a priori and plainly not innate.',
      },
    ],
    exerciseIds: ['epis-7-e1', 'epis-7-e2', 'epis-7-e3', 'epis-7-e4'],
  },

  {
    id: 'epis-8',
    unitId: 'epis-u2',
    title: 'Rationalism and empiricism',
    summary: 'How far does reason alone reach into the world?',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['rationalism', 'empiricism', 'a-priori'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Everyone agrees some a priori knowledge exists — nobody runs experiments on ' +
          'bachelors. The dispute is whether reason reaches beyond definitions to substantive ' +
          'truths about reality.',
      },
      {
        kind: 'explanation',
        heading: 'The dispute stated precisely',
        body:
          'Rationalists hold that some substantive claims about the world are knowable a ' +
          'priori. Empiricists allow a priori knowledge of logic and definitions but deny it ' +
          'tells you anything about how things actually are. Put this way the question is ' +
          'testable: point to a claim and ask which side it falls on.',
      },
      {
        kind: 'example',
        body:
          'Mathematics is the hard case. It is established by proof rather than observation, ' +
          'yet it describes the world well enough to build bridges with. Either reason reaches ' +
          'reality, or mathematics is less substantive than it looks.',
        caption: 'The example both sides must account for.',
      },
      {
        kind: 'misconception',
        claim: 'Empiricists deny that a priori knowledge exists.',
        correction:
          'Almost none do. The empiricist claim is narrower: a priori knowledge is confined to ' +
          'relations between concepts and cannot deliver substantive information about the ' +
          'world. Reason tells you bachelors are unmarried; only experience tells you any ' +
          'exist.',
      },
    ],
    exerciseIds: ['epis-8-e1', 'epis-8-e2', 'epis-8-e3', 'epis-8-e4'],
  },

  {
    id: 'epis-9',
    unitId: 'epis-u2',
    title: 'Testimony',
    summary: 'Nearly everything you know, you were told.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['testimony', 'justification'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Your date of birth, the existence of Antarctica, every historical fact you hold — ' +
          'none of it was observed by you. Strip out what you learned from others and very ' +
          'little remains. Yet testimony is the least examined source of knowledge there is.',
      },
      {
        kind: 'argument',
        ref: 'testimony-reduction',
        note:
          'The dilemma: either testimony justifies in its own right, or it must be underwritten ' +
          'by evidence that speakers are generally reliable. Expand P3 to see the problem with ' +
          'the second option.',
      },
      {
        kind: 'explanation',
        heading: 'The problem with reduction',
        body:
          'If testimony works only because you have inductive evidence that people tell the ' +
          'truth, you would need to have gathered that evidence. Almost nobody has, and ' +
          'children have none at all — yet children plainly learn things by being told. That ' +
          'pushes towards treating testimony as basic.',
      },
      {
        kind: 'misconception',
        claim: 'Relying on testimony means believing whatever you are told.',
        correction:
          'Nobody defends that. Testimony can be assessed for competence, honesty and ' +
          'incentive, exactly as Logic lesson 15 described. The question is whether that ' +
          'assessment is what generates the justification, or merely a filter on a source that ' +
          'justifies by itself.',
      },
    ],
    exerciseIds: ['epis-9-e1', 'epis-9-e2', 'epis-9-e3', 'epis-9-e4'],
  },

  {
    id: 'epis-10',
    unitId: 'epis-u2',
    title: 'The problem of induction',
    summary: 'What justifies expecting the future to resemble the past?',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['problem-of-induction', 'induction', 'empiricism'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Logic lesson 3 established that inductive arguments leave a gap between premises and ' +
          'conclusion. Hume asked the harder question: what justifies crossing that gap at ' +
          'all? Every prediction assumes the future will resemble the past. What supports that ' +
          'assumption?',
      },
      {
        kind: 'argument',
        ref: 'humean-induction',
        note:
          'Both routes are closed. Deduction cannot deliver it, and using induction to defend ' +
          'induction is the circular reasoning from Logic lesson 16.',
      },
      {
        kind: 'explanation',
        heading: 'Why this is not merely academic',
        body:
          'The argument does not say induction fails — it says induction has no non-circular ' +
          'defence. Since all empirical science runs on induction, the most successful ' +
          'knowledge-gathering enterprise in history rests on a principle nobody can justify ' +
          'without assuming it.',
      },
      {
        kind: 'misconception',
        claim: 'Induction has worked reliably, which shows it is justified.',
        correction:
          'This is the circular move stated aloud. "Induction has worked before, so it will ' +
          'keep working" is itself an inductive inference, so it assumes exactly what was in ' +
          'question. Hume anticipated this reply and it is the heart of the problem.',
      },
    ],
    exerciseIds: ['epis-10-e1', 'epis-10-e2', 'epis-10-e3', 'epis-10-e4'],
  },
]

export const epistemologyScepticismLessons: Lesson[] = [
  {
    id: 'epis-11',
    unitId: 'epis-u3',
    title: 'Cartesian doubt',
    summary: 'Reject anything that could conceivably be false, and see what survives.',
    difficulty: 2,
    estimatedMinutes: 8,
    xpReward: 20,
    conceptIds: ['scepticism', 'cartesian-doubt'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Philosophical scepticism is not casual doubt. It is an argument: here is a scenario ' +
          'you cannot rule out, and it is incompatible with your knowing. Descartes turned ' +
          'this into a method, discarding anything admitting of the slightest doubt to see ' +
          'what remained.',
      },
      {
        kind: 'argument',
        ref: 'sceptical-argument',
        note:
          'The general template. Every sceptical argument you will meet is this shape with a ' +
          'different scenario slotted into S.',
      },
      {
        kind: 'argument',
        ref: 'cogito',
        note:
          'What survived. The doubt cannot be performed unless something performs it — expand ' +
          'P2 for the objection that it proves less than Descartes wanted.',
      },
      {
        kind: 'misconception',
        claim: 'Sceptics believe nothing.',
        correction:
          'Almost no philosophical sceptic lives their scepticism, and most do not claim to. ' +
          'The interest is not in whether anyone believes the conclusion but in which premise ' +
          'to reject — because until you identify one, a valid argument stands.',
      },
    ],
    exerciseIds: ['epis-11-e1', 'epis-11-e2', 'epis-11-e3', 'epis-11-e4'],
  },

  {
    id: 'epis-12',
    unitId: 'epis-u3',
    title: 'The dream argument',
    summary: 'Nothing inside experience marks it as waking.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['dream-argument', 'scepticism'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Dreams routinely seem entirely real while they last. If no feature of experience ' +
          'reliably distinguishes dreaming from waking, then no experience can establish that ' +
          'you are awake — and every belief resting on current experience inherits the doubt.',
      },
      {
        kind: 'argument',
        ref: 'dream-scepticism',
        note:
          'Expand P2 for the standard reply about coherence, and the counter-reply that ' +
          'assessing coherence requires trusting memory.',
      },
      {
        kind: 'explanation',
        heading: 'Why the obvious reply struggles',
        body:
          'It is tempting to say waking life is more coherent and continuous. But judging ' +
          'coherence means comparing now against remembered experience, and the reliability of ' +
          'memory is exactly what is in question. The reply may lower the probability of ' +
          'dreaming without ruling it out — and the argument needs only that it cannot be ' +
          'ruled out.',
      },
      {
        kind: 'misconception',
        claim: 'You can always tell you are awake by trying to do something impossible.',
        correction:
          'Lucid dreamers use reality checks, and they sometimes fail — dreams can supply ' +
          'convincing results. More fundamentally, interpreting the check requires the ' +
          'faculties whose reliability the argument questions.',
      },
    ],
    exerciseIds: ['epis-12-e1', 'epis-12-e2', 'epis-12-e3', 'epis-12-e4'],
  },

  {
    id: 'epis-13',
    unitId: 'epis-u3',
    title: 'Brain in a vat',
    summary: 'The modern sceptical scenario, and the principle that gives it force.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['brain-in-a-vat', 'closure-principle', 'scepticism'],
    sections: [
      {
        kind: 'explanation',
        body:
          'A brain in a vat, fed stimulation indistinguishable from ordinary experience, would ' +
          'have exactly your evidence while nearly all its beliefs were false. By construction ' +
          'no observation rules it out — anything you might check is part of what would be ' +
          'simulated.',
      },
      {
        kind: 'argument',
        ref: 'biv-argument',
        note:
          'This is modus tollens from Logic lesson 8, with a sceptical scenario in the ' +
          'consequent. Expand both premises to see where each is attacked.',
      },
      {
        kind: 'definition',
        term: 'Epistemic closure',
        body:
          'If you know P, and know that P entails Q, you are in a position to know Q. ' +
          'Knowledge transmits across known entailment.',
      },
      {
        kind: 'explanation',
        heading: 'Where the force comes from',
        body:
          'Closure is what makes the argument bite. Having hands entails not being a handless ' +
          'brain in a vat, and you know it does — so if you cannot know the second, closure ' +
          'says you cannot know the first. Nozick\u2019s response was to deny closure, at the cost ' +
          'of permitting knowledge that fails to transmit to obvious consequences.',
      },
      {
        kind: 'misconception',
        claim: 'The scenario is too far-fetched to take seriously.',
        correction:
          'Probability is not the issue. The argument needs only that the scenario is possible ' +
          'and indistinguishable from the inside. A counterexample need only be coherent, as ' +
          'Logic lesson 12 established.',
      },
    ],
    exerciseIds: ['epis-13-e1', 'epis-13-e2', 'epis-13-e3', 'epis-13-e4'],
  },

  {
    id: 'epis-14',
    unitId: 'epis-u3',
    title: 'Answering the sceptic',
    summary: 'Four responses, and what each concedes.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['moorean-response', 'scepticism', 'closure-principle'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The sceptical argument is valid. So answering it means rejecting a premise, and the ' +
          'interesting question is which — because every available choice costs something.',
      },
      {
        kind: 'argument',
        ref: 'moorean-response',
        note:
          'Moore ran the argument backwards. Same valid form, opposite direction — modus ' +
          'tollens applied to the sceptic\u2019s own reasoning.',
      },
      {
        kind: 'explanation',
        heading: 'The four routes',
        body:
          'Moore rejects the conclusion and works back to a false premise. Nozick denies ' +
          'closure. Putnam argues an envatted brain\u2019s words would refer to simulated things, ' +
          'making its sceptical hypothesis self-defeating. Contextualists hold that "know" ' +
          'means something stricter in the seminar room than in ordinary life, so both the ' +
          'sceptic and the ordinary speaker say something true.',
      },
      {
        kind: 'misconception',
        claim: 'Moore simply asserts the opposite of the conclusion, which begs the question.',
        correction:
          'Moore\u2019s move is comparative rather than dogmatic. A valid argument presents a ' +
          'choice: accept the conclusion or reject a premise. He argues you should reject ' +
          'whichever claim you are least certain of — and he is more certain of his hands than ' +
          'of any premise about closure.',
      },
    ],
    exerciseIds: ['epis-14-e1', 'epis-14-e2', 'epis-14-e3', 'epis-14-e4'],
  },
]

export const epistemologySourcesExercises: Exercise[] = [
  /* ----------------------------------------------------------------- epis-7 */
  {
    id: 'epis-7-e1',
    type: 'choice',
    conceptIds: ['a-priori', 'a-posteriori'],
    prompt: 'Which claim is a priori?',
    options: [
      {
        id: 'a',
        text: 'Water boils at 100°C at sea level.',
        explanation:
          'A posteriori. No amount of reflection on the concept of water yields its boiling ' +
          'point — you have to measure.',
      },
      {
        id: 'b',
        text: 'Every prime greater than two is odd.',
        explanation:
          'Correct. This follows from what "prime" and "even" mean, and is established by ' +
          'proof rather than by surveying numbers.',
      },
      {
        id: 'c',
        text: 'There are more than a billion people in India.',
        explanation:
          'A posteriori — a fact about the world knowable only by counting.',
      },
      {
        id: 'd',
        text: 'Most swans are white.',
        explanation:
          'A posteriori, and inductive besides. Observation is the only route to it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-7-e2',
    type: 'choice',
    conceptIds: ['a-priori'],
    prompt: 'Does needing experience to learn the word "triangle" make geometry a posteriori?',
    options: [
      {
        id: 'a',
        text: 'Yes, since experience was required.',
        explanation:
          'This conflates acquiring a concept with justifying a claim. Experience supplied the ' +
          'vocabulary, not the evidence.',
      },
      {
        id: 'b',
        text: 'No, because the distinction concerns what justifies the claim, not how the concepts were acquired.',
        explanation:
          'Correct. Once you have the concepts, the claim is settled by reasoning rather than ' +
          'by measuring triangles.',
      },
      {
        id: 'c',
        text: 'Yes, because all knowledge begins in experience.',
        explanation:
          'Even granting that concepts begin in experience, the question is what justifies the ' +
          'claim — and a proof does that without observation.',
      },
      {
        id: 'd',
        text: 'No, because geometry is innate.',
        explanation:
          'Right answer, wrong reason. A priori does not mean innate — most people learn ' +
          'geometry at school and verify it by proof.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-7-e3',
    type: 'choice',
    conceptIds: ['a-posteriori'],
    prompt: 'Which claim could only be established a posteriori?',
    options: [
      {
        id: 'a',
        text: 'No bachelor is married.',
        explanation:
          'True by definition. Reflection on the concept settles it with no observation ' +
          'required.',
      },
      {
        id: 'b',
        text: 'Some bachelors live in Romford.',
        explanation:
          'Correct. Whether anyone at all is a bachelor, let alone where they live, is a fact ' +
          'about the world that reason alone cannot supply.',
      },
      {
        id: 'c',
        text: 'Either it is raining or it is not.',
        explanation:
          'A logical truth, holding whatever the weather. No observation needed.',
      },
      {
        id: 'd',
        text: 'All squares have four sides.',
        explanation:
          'A priori, since it follows from the definition of a square. No measuring is required, so ' +
          'experience plays no justifying role.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-7-e4',
    type: 'sort',
    conceptIds: ['a-priori', 'a-posteriori', 'premise', 'conclusion'],
    prompt: 'Label each statement in this argument.',
    statements: [
      { id: 's1', text: 'Any claim knowable by proof alone is a priori.', role: 'premise' },
      { id: 's2', text: 'The Pythagorean theorem is knowable by proof alone.', role: 'premise' },
      { id: 's3', text: 'The Pythagorean theorem is a priori.', role: 'conclusion' },
      { id: 's4', text: 'Pythagoras founded a religious community.', role: 'irrelevant' },
    ],
    explanation:
      'A general principle and a particular case give the conclusion — modus ponens in ' +
      'disguise. The biographical detail supports nothing.',
  },

  /* ----------------------------------------------------------------- epis-8 */
  {
    id: 'epis-8-e1',
    type: 'choice',
    conceptIds: ['empiricism', 'rationalism'],
    prompt: 'What exactly do empiricists deny?',
    options: [
      {
        id: 'a',
        text: 'That any a priori knowledge exists.',
        explanation:
          'Almost no empiricist says this. Logic and definitions are conceded freely.',
      },
      {
        id: 'b',
        text: 'That a priori reasoning can deliver substantive truths about the world.',
        explanation:
          'Correct. Reason handles relations between concepts; only experience reaches how ' +
          'things actually are.',
      },
      {
        id: 'c',
        text: 'That experience is reliable.',
        explanation:
          'That would be scepticism about perception, roughly the opposite of the empiricist ' +
          'position.',
      },
      {
        id: 'd',
        text: 'That concepts can be innate.',
        explanation:
          'A related historical dispute, but not the core of the empiricist claim about ' +
          'justification.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-8-e2',
    type: 'choice',
    conceptIds: ['rationalism', 'empiricism'],
    prompt: 'Why is mathematics the hard case for empiricism?',
    options: [
      {
        id: 'a',
        text: 'Because mathematics is difficult.',
        explanation:
          'Difficulty is beside the point. The problem is philosophical, not pedagogical.',
      },
      {
        id: 'b',
        text: 'It is established by proof yet describes the world well enough to build with.',
        explanation:
          'Correct. Either reason reaches reality after all, or mathematics is less ' +
          'substantive than it appears — and neither option is comfortable for the empiricist.',
      },
      {
        id: 'c',
        text: 'Because mathematicians disagree about foundations.',
        explanation:
          'True but irrelevant. The difficulty would remain even with complete agreement.',
      },
      {
        id: 'd',
        text: 'Because mathematics is a posteriori.',
        explanation:
          'Very few hold this. Mathematical claims are not established by observation.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-8-e3',
    type: 'choice',
    conceptIds: ['rationalism'],
    prompt: 'What would a rationalist need to show?',
    options: [
      {
        id: 'a',
        text: 'That some substantive claim about reality is knowable without observation.',
        explanation:
          'Correct. A single clear example would settle it, which is why the debate turns on ' +
          'candidate cases like mathematics.',
      },
      {
        id: 'b',
        text: 'That experience is unreliable.',
        explanation:
          'Rationalists need not disparage experience. The claim is that reason reaches ' +
          'further, not that observation fails.',
      },
      {
        id: 'c',
        text: 'That all knowledge is a priori.',
        explanation:
          'Far stronger than the position requires. No rationalist denies that you must look ' +
          'to learn what is in the next room.',
      },
      {
        id: 'd',
        text: 'That definitions are true.',
        explanation:
          'Both sides accept a priori knowledge of definitions. It is common ground, so ' +
          'establishing it wins nothing.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'epis-8-e4',
    type: 'choice',
    conceptIds: ['empiricism', 'a-priori'],
    prompt: 'On the empiricist view, what does "no bachelor is married" tell you?',
    options: [
      {
        id: 'a',
        text: 'That bachelors exist.',
        explanation:
          'It tells you nothing about existence. Whether any bachelors are out there is an ' +
          'empirical question entirely.',
      },
      {
        id: 'b',
        text: 'Only how the words relate — nothing about what the world contains.',
        explanation:
          'Correct. It unpacks a definition. Reason tells you what "bachelor" means; only ' +
          'observation tells you whether any exist.',
      },
      {
        id: 'c',
        text: 'That marriage is undesirable.',
        explanation:
          'A value judgement with no connection to the definitional claim.',
      },
      {
        id: 'd',
        text: 'Nothing at all — it is meaningless.',
        explanation:
          'Empiricists take such claims to be true and knowable, just uninformative about the ' +
          'world.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- epis-9 */
  {
    id: 'epis-9-e1',
    type: 'choice',
    conceptIds: ['testimony'],
    prompt: 'What is the problem with reducing testimony to induction?',
    options: [
      {
        id: 'a',
        text: 'Testimony is usually unreliable.',
        explanation:
          'Testimony is broadly reliable, which is why it works. Reliability is not the ' +
          'difficulty.',
      },
      {
        id: 'b',
        text: 'Almost nobody has gathered the evidence, and children have none at all.',
        explanation:
          'Correct. If testimony worked only via inductive evidence of reliability, children ' +
          'could learn nothing by being told — yet they plainly do.',
      },
      {
        id: 'c',
        text: 'Induction is invalid.',
        explanation:
          'Induction is not meant to be valid in the deductive sense, as Logic lesson 3 ' +
          'established. That is not the issue here.',
      },
      {
        id: 'd',
        text: 'Testimony is always about the past.',
        explanation:
          'People testify to present and future matters constantly. Not the difficulty.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-9-e2',
    type: 'choice',
    conceptIds: ['testimony', 'ad-hominem'],
    prompt: 'Which consideration legitimately bears on accepting testimony?',
    options: [
      {
        id: 'a',
        text: 'The speaker holds unpopular political views.',
        explanation:
          'Irrelevant to whether they are reporting accurately — the ad hominem error from ' +
          'Logic lesson 15.',
      },
      {
        id: 'b',
        text: 'The speaker stands to gain financially from being believed.',
        explanation:
          'Correct. Incentive bears on reliability of testimony, which is assessing a source ' +
          'rather than dodging an argument.',
      },
      {
        id: 'c',
        text: 'The speaker has an unpleasant manner.',
        explanation:
          'Manner has no bearing on accuracy. Disagreeable people report facts correctly all ' +
          'the time.',
      },
      {
        id: 'd',
        text: 'The speaker once changed their mind about something else.',
        explanation:
          'Revising views on evidence is usually a mark of good judgement rather than against ' +
          'it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-9-e3',
    type: 'choice',
    conceptIds: ['testimony', 'externalism'],
    prompt: 'Why does treating testimony as basic fit externalism better?',
    options: [
      {
        id: 'a',
        text: 'Because externalists reject the truth condition.',
        explanation:
          'They do not. Externalists retain truth and belief, and reinterpret justification.',
      },
      {
        id: 'b',
        text: 'Because the justification need not be something the hearer can articulate.',
        explanation:
          'Correct. A child justified in believing what they are told, without any ability to ' +
          'explain why, is exactly the externalist picture.',
      },
      {
        id: 'c',
        text: 'Because externalists distrust other people.',
        explanation:
          'Nothing in externalism concerns trust in others. It is a claim about what ' +
          'justification consists in.',
      },
      {
        id: 'd',
        text: 'Because testimony is always reliable.',
        explanation:
          'It is not, and no one claims so. The point concerns accessibility of justification, ' +
          'not guaranteed reliability.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-9-e4',
    type: 'choice',
    conceptIds: ['testimony'],
    prompt: 'What would you have to give up if testimony provided no justification?',
    options: [
      {
        id: 'a',
        text: 'Only beliefs about distant history.',
        explanation:
          'Far too narrow. Your own date of birth came from testimony, as did almost ' +
          'everything you know.',
      },
      {
        id: 'b',
        text: 'Nearly everything you believe about the world beyond your own experience.',
        explanation:
          'Correct. Strip out what you were told and very little survives — which is why ' +
          'testimony being basic matters so much.',
      },
      {
        id: 'c',
        text: 'Nothing important.',
        explanation:
          'The reverse. Testimony carries the overwhelming majority of anyone\u2019s beliefs.',
      },
      {
        id: 'd',
        text: 'Only scientific knowledge.',
        explanation:
          'Science would go, but so would history, geography, and the names of your own ' +
          'relatives.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- epis-10 */
  {
    id: 'epis-10-e1',
    type: 'choice',
    conceptIds: ['problem-of-induction'],
    prompt: 'Why can induction not be justified inductively?',
    options: [
      {
        id: 'a',
        text: 'Because induction has often failed.',
        explanation:
          'Its track record is excellent. The problem is not empirical failure but the ' +
          'structure of the defence.',
      },
      {
        id: 'b',
        text: 'Because arguing that it has always worked assumes the future will resemble the past.',
        explanation:
          'Correct. The defence uses the very principle in question, making it circular — the ' +
          'failure from Logic lesson 16.',
      },
      {
        id: 'c',
        text: 'Because induction is a deductive form.',
        explanation:
          'It is not, and that is precisely why the gap exists in the first place.',
      },
      {
        id: 'd',
        text: 'Because Hume said so.',
        explanation:
          'Appeal to authority. The argument stands or falls on its own reasoning.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-10-e2',
    type: 'choice',
    conceptIds: ['problem-of-induction'],
    prompt: 'What exactly does the problem of induction show?',
    options: [
      {
        id: 'a',
        text: 'That induction is unreliable.',
        explanation:
          'It says nothing about reliability. Induction may work perfectly well — the issue is ' +
          'whether that can be shown without circularity.',
      },
      {
        id: 'b',
        text: 'That induction has no non-circular justification.',
        explanation:
          'Correct, and the precision matters. This is a claim about justification, not about ' +
          'whether induction succeeds.',
      },
      {
        id: 'c',
        text: 'That science is false.',
        explanation:
          'Nothing so dramatic follows. Scientific results are untouched by the question of ' +
          'what justifies the method.',
      },
      {
        id: 'd',
        text: 'That the future will differ from the past.',
        explanation:
          'The argument makes no prediction either way. It concerns what could be established, ' +
          'not what will happen.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-10-e3',
    type: 'choice',
    conceptIds: ['problem-of-induction', 'deduction'],
    prompt: 'Why can the uniformity assumption not be established deductively?',
    options: [
      {
        id: 'a',
        text: 'Because deduction is unreliable.',
        explanation:
          'Deduction is the most secure form of inference there is. Reliability is not the ' +
          'obstacle.',
      },
      {
        id: 'b',
        text: 'Because no contradiction follows from supposing the future differs.',
        explanation:
          'Correct. A world that changes tomorrow is perfectly conceivable, so its denial ' +
          'cannot be proved by reason alone.',
      },
      {
        id: 'c',
        text: 'Because deduction only concerns mathematics.',
        explanation:
          'Deduction applies everywhere. Its scope is not the limitation here.',
      },
      {
        id: 'd',
        text: 'Because the future has not happened yet.',
        explanation:
          'True but not the reason. Deduction handles claims about the future fine when they ' +
          'follow from premises.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-10-e4',
    type: 'choice',
    conceptIds: ['problem-of-induction', 'empiricism'],
    prompt: 'Why is this problem especially awkward for empiricism?',
    options: [
      {
        id: 'a',
        text: 'Because empiricists deny that induction exists.',
        explanation:
          'They rely on it heavily — that is exactly what creates the difficulty.',
      },
      {
        id: 'b',
        text: 'Because empiricism grounds knowledge in experience, and generalising from experience requires induction.',
        explanation:
          'Correct. The empiricist\u2019s only permitted route to general knowledge turns out to ' +
          'rest on a principle their own standards cannot justify.',
      },
      {
        id: 'c',
        text: 'Because empiricists cannot use deduction.',
        explanation:
          'They can and do. Deduction is available to everyone; it simply cannot deliver the ' +
          'uniformity principle.',
      },
      {
        id: 'd',
        text: 'Because Hume was a rationalist.',
        explanation:
          'Hume was an empiricist, and the problem arises from pressing his own commitments ' +
          'consistently.',
      },
    ],
    correctId: 'b',
  },
]

export const epistemologyScepticismExercises: Exercise[] = [
  /* ---------------------------------------------------------------- epis-11 */
  {
    id: 'epis-11-e1',
    type: 'choice',
    conceptIds: ['scepticism'],
    prompt: 'What is the general form of a sceptical argument?',
    options: [
      {
        id: 'a',
        text: 'Everything you believe is probably false.',
        explanation:
          'Sceptical arguments rarely claim your beliefs are false — only that you cannot know ' +
          'they are true. A weaker but harder claim to answer.',
      },
      {
        id: 'b',
        text: 'There is a scenario you cannot rule out that is incompatible with your knowing.',
        explanation:
          'Correct. Every sceptical argument fills the same template with a different ' +
          'unfalsifiable scenario.',
      },
      {
        id: 'c',
        text: 'Nobody can be certain of anything.',
        explanation:
          'A slogan rather than an argument, and it invites the obvious retort about itself.',
      },
      {
        id: 'd',
        text: 'Our senses sometimes deceive us.',
        explanation:
          'True but far weaker. Occasional error is compatible with plenty of knowledge — the ' +
          'sceptic needs a scenario that cannot be excluded at all.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-11-e2',
    type: 'choice',
    conceptIds: ['cartesian-doubt'],
    prompt: 'What survives Cartesian doubt, and why?',
    options: [
      {
        id: 'a',
        text: 'Mathematical truths, since they cannot be doubted.',
        explanation:
          'Descartes doubted these too — a sufficiently powerful deceiver could mislead you ' +
          'about arithmetic.',
      },
      {
        id: 'b',
        text: 'That thinking is occurring, since doubting is itself a form of thinking.',
        explanation:
          'Correct. The doubt cannot be performed unless something performs it, which is why ' +
          'the cogito is self-verifying.',
      },
      {
        id: 'c',
        text: 'Perceptions of the external world, since they are vivid.',
        explanation:
          'Vividness is exactly what the dream argument targets. Dreams are vivid too.',
      },
      {
        id: 'd',
        text: 'Nothing at all.',
        explanation:
          'That was the outcome Descartes designed the method to escape, and the cogito is his ' +
          'claim to have escaped it.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-11-e3',
    type: 'choice',
    conceptIds: ['cartesian-doubt'],
    prompt: 'What is Lichtenberg\u2019s objection to the cogito?',
    options: [
      {
        id: 'a',
        text: 'That thinking does not occur.',
        explanation:
          'Nobody denies this, and denying it would be self-defeating in the same way.',
      },
      {
        id: 'b',
        text: 'That it establishes thinking is happening, not that a persisting self does it.',
        explanation:
          'Correct. "There is thinking" is warranted; "I think" smuggles in a thinker the ' +
          'argument has not earned.',
      },
      {
        id: 'c',
        text: 'That Descartes should have doubted more.',
        explanation:
          'The objection is about what the conclusion licenses, not about the thoroughness of ' +
          'the doubt.',
      },
      {
        id: 'd',
        text: 'That the argument is invalid.',
        explanation:
          'The objection concerns how much the conclusion contains, not whether it follows.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-11-e4',
    type: 'choice',
    conceptIds: ['scepticism'],
    prompt: 'Why is "no sceptic actually lives that way" a weak reply?',
    options: [
      {
        id: 'a',
        text: 'Because some sceptics do live that way.',
        explanation:
          'Almost none do, and most freely admit it. The reply fails for a different reason.',
      },
      {
        id: 'b',
        text: 'Because how someone lives has no bearing on whether their argument is sound.',
        explanation:
          'Correct — and this is close to an ad hominem. A valid argument must be answered by ' +
          'rejecting a premise, not by noting the arguer\u2019s habits.',
      },
      {
        id: 'c',
        text: 'Because scepticism is obviously true.',
        explanation:
          'Very few philosophers accept the sceptical conclusion. That is not why the reply ' +
          'fails.',
      },
      {
        id: 'd',
        text: 'Because sceptics do not make arguments.',
        explanation:
          'Sceptics make careful arguments, which is exactly why they are hard to dismiss. If they ' +
          'offered none there would be nothing to answer.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- epis-12 */
  {
    id: 'epis-12-e1',
    type: 'choice',
    conceptIds: ['dream-argument'],
    prompt: 'Why does the coherence reply struggle?',
    options: [
      {
        id: 'a',
        text: 'Because dreams are actually more coherent than waking life.',
        explanation:
          'They are typically less coherent. The problem lies with how you would check.',
      },
      {
        id: 'b',
        text: 'Because judging coherence requires memory, whose reliability is what is in question.',
        explanation:
          'Correct. Comparing now against remembered experience presupposes exactly the ' +
          'faculty the argument has put in doubt.',
      },
      {
        id: 'c',
        text: 'Because coherence cannot be measured.',
        explanation:
          'Precision is not the issue — you could grant rough judgements and the circularity ' +
          'would remain.',
      },
      {
        id: 'd',
        text: 'Because the reply is circular in the same way as induction.',
        explanation:
          'Close, but not quite the same structure. The problem is the reliance on memory, ' +
          'not an inductive assumption about uniformity.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-12-e2',
    type: 'choice',
    conceptIds: ['dream-argument', 'scepticism'],
    prompt: 'What does the dream argument need in order to work?',
    options: [
      {
        id: 'a',
        text: 'That you are probably dreaming right now.',
        explanation:
          'Far stronger than required, and no one defends it. Possibility suffices.',
      },
      {
        id: 'b',
        text: 'Only that dreaming cannot be ruled out from inside experience.',
        explanation:
          'Correct. The argument needs the possibility to be un-excludable, not likely.',
      },
      {
        id: 'c',
        text: 'That dreams are always realistic.',
        explanation:
          'Many are not. It is enough that some are indistinguishable while they last.',
      },
      {
        id: 'd',
        text: 'That you cannot remember your dreams.',
        explanation:
          'Recalling dreams actually supports the argument, since it is how you know they ' +
          'seemed real at the time.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-12-e3',
    type: 'choice',
    conceptIds: ['dream-argument'],
    prompt: 'Why do reality checks not settle the matter?',
    options: [
      {
        id: 'a',
        text: 'Because they always fail.',
        explanation:
          'They often work — lucid dreamers use them successfully. The problem is that they do ' +
          'not always work.',
      },
      {
        id: 'b',
        text: 'Because interpreting the result requires the faculties under question.',
        explanation:
          'Correct. A dream can supply a convincing result, and evaluating it uses exactly the ' +
          'perception and reasoning the argument targets.',
      },
      {
        id: 'c',
        text: 'Because dreams cannot contain text or clocks.',
        explanation:
          'They can, which is precisely why such checks are unreliable rather than impossible.',
      },
      {
        id: 'd',
        text: 'Because reality checks are a modern invention.',
        explanation:
          'Their history has no bearing on whether they answer the argument.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-12-e4',
    type: 'sort',
    conceptIds: ['dream-argument', 'premise', 'conclusion'],
    prompt: 'Label each statement in the dream argument.',
    statements: [
      { id: 's1', text: 'Dreams can be indistinguishable from waking experience.', role: 'premise' },
      { id: 's2', text: 'If I cannot tell I am awake, I cannot know my experience is veridical.', role: 'premise' },
      { id: 's3', text: 'I cannot know my current experience is of a real world.', role: 'conclusion' },
      { id: 's4', text: 'Most people dream several times a night.', role: 'irrelevant' },
    ],
    explanation:
      'The two premises deliver the conclusion. How often people dream is a fact about sleep ' +
      'science and does nothing for the inference.',
  },

  /* ---------------------------------------------------------------- epis-13 */
  {
    id: 'epis-13-e1',
    type: 'choice',
    conceptIds: ['closure-principle'],
    prompt: 'What does epistemic closure say?',
    options: [
      {
        id: 'a',
        text: 'Knowledge is limited to what you can perceive.',
        explanation:
          'A different claim about the sources of knowledge, not about how knowledge ' +
          'transmits.',
      },
      {
        id: 'b',
        text: 'If you know P and know P entails Q, you are in a position to know Q.',
        explanation:
          'Correct — and it looks near-undeniable, which is exactly what gives the sceptical ' +
          'argument its force.',
      },
      {
        id: 'c',
        text: 'Every question has a definite answer.',
        explanation:
          'A metaphysical claim with no connection to how knowledge transmits across ' +
          'entailment.',
      },
      {
        id: 'd',
        text: 'Beliefs must form a closed, coherent system.',
        explanation:
          'That is closer to coherentism from lesson 5, and a different idea entirely.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-13-e2',
    type: 'choice',
    conceptIds: ['brain-in-a-vat', 'counterexample'],
    prompt: 'Why does the far-fetchedness of the scenario not defeat the argument?',
    options: [
      {
        id: 'a',
        text: 'Because it is actually quite likely.',
        explanation:
          'Nobody claims it is likely, and the argument does not need it to be.',
      },
      {
        id: 'b',
        text: 'Because the argument needs only that it is possible and indistinguishable from the inside.',
        explanation:
          'Correct. As with counterexamples in Logic lesson 12, coherence is the requirement, ' +
          'not plausibility.',
      },
      {
        id: 'c',
        text: 'Because technology will eventually make it possible.',
        explanation:
          'Irrelevant. The argument works on mere possibility, with no dependence on future ' +
          'engineering.',
      },
      {
        id: 'd',
        text: 'Because far-fetched scenarios are always philosophically important.',
        explanation:
          'They are not. What matters here is that this one cannot be excluded by any ' +
          'available evidence.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-13-e3',
    type: 'choice',
    conceptIds: ['closure-principle', 'brain-in-a-vat'],
    prompt: 'What does Nozick\u2019s response cost?',
    options: [
      {
        id: 'a',
        text: 'It requires denying that you have hands.',
        explanation:
          'The reverse — his response is designed to preserve ordinary knowledge, including ' +
          'about hands.',
      },
      {
        id: 'b',
        text: 'It permits knowing P while failing to know an obvious consequence of P.',
        explanation:
          'Correct. Denying closure blocks the sceptical argument but produces cases where ' +
          'knowledge does not transmit across entailment you recognise.',
      },
      {
        id: 'c',
        text: 'It requires accepting the sceptical conclusion.',
        explanation:
          'Denying closure is a route to avoiding the sceptical conclusion, not to accepting it. ' +
          'Nozick blocks the argument rather than conceding it.',
      },
      {
        id: 'd',
        text: 'Nothing — it is cost-free.',
        explanation:
          'Every response to the sceptic concedes something. This one concedes a principle ' +
          'most people find close to undeniable.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-13-e4',
    type: 'choice',
    conceptIds: ['brain-in-a-vat', 'modus-tollens'],
    prompt: 'Which form does the brain-in-a-vat argument take?',
    options: [
      {
        id: 'a',
        text: 'Modus ponens.',
        explanation:
          'It denies rather than affirms. P2 rules out the consequent, which is the other ' +
          'valid form.',
      },
      {
        id: 'b',
        text: 'Modus tollens.',
        explanation:
          'Correct. If I know I have hands, I can know I am not envatted; I cannot know the ' +
          'latter; so I do not know the former.',
      },
      {
        id: 'c',
        text: 'Affirming the consequent.',
        explanation:
          'That is invalid, and the sceptical argument is valid — which is why it must be ' +
          'answered by rejecting a premise.',
      },
      {
        id: 'd',
        text: 'Reductio ad absurdum.',
        explanation:
          'No contradiction is derived. It runs straight from premises to conclusion.',
      },
    ],
    correctId: 'b',
  },

  /* ---------------------------------------------------------------- epis-14 */
  {
    id: 'epis-14-e1',
    type: 'choice',
    conceptIds: ['moorean-response'],
    prompt: 'What is the structure of Moore\u2019s response?',
    options: [
      {
        id: 'a',
        text: 'He shows the sceptical argument is invalid.',
        explanation:
          'He grants its validity. That concession is what makes the response interesting.',
      },
      {
        id: 'b',
        text: 'He accepts the form, denies the conclusion, and infers that a premise is false.',
        explanation:
          'Correct. Same valid argument, run backwards — modus tollens applied to the ' +
          'sceptic\u2019s own reasoning.',
      },
      {
        id: 'c',
        text: 'He argues the sceptic is being unreasonable.',
        explanation:
          'That would be an appeal to attitude rather than an argument, and Moore offers an ' +
          'argument.',
      },
      {
        id: 'd',
        text: 'He denies that knowledge exists.',
        explanation:
          'The opposite of his position. He insists on ordinary knowledge.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-14-e2',
    type: 'choice',
    conceptIds: ['moorean-response', 'burden-of-proof'],
    prompt: 'Why is Moore\u2019s move not simply begging the question?',
    options: [
      {
        id: 'a',
        text: 'Because he proves he has hands independently.',
        explanation:
          'He offers no independent proof — holding up his hands is not an argument the ' +
          'sceptic would accept.',
      },
      {
        id: 'b',
        text: 'Because a valid argument offers a choice, and he argues you should reject whichever claim you are least certain of.',
        explanation:
          'Correct. The move is comparative rather than dogmatic: it weighs the credibility of ' +
          'the premises against that of the conclusion.',
      },
      {
        id: 'c',
        text: 'Because scepticism is incoherent.',
        explanation:
          'Moore does not claim this, and it would be a much stronger charge requiring its own ' +
          'defence.',
      },
      {
        id: 'd',
        text: 'It is begging the question — that is the standard verdict.',
        explanation:
          'Many find it unsatisfying, but the comparative reading gives it a genuine argument ' +
          'rather than a bare assertion.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-14-e3',
    type: 'choice',
    conceptIds: ['scepticism'],
    prompt: 'What does the contextualist response claim?',
    options: [
      {
        id: 'a',
        text: 'That the sceptic is simply wrong.',
        explanation:
          'Contextualism grants the sceptic says something true in their context, which is ' +
          'what distinguishes it from a flat denial.',
      },
      {
        id: 'b',
        text: 'That "know" demands stricter standards in philosophical contexts than in ordinary ones.',
        explanation:
          'Correct. Both parties then speak truly: you know where your car is parked, and in ' +
          'the seminar room you do not.',
      },
      {
        id: 'c',
        text: 'That knowledge depends on who is speaking.',
        explanation:
          'The view is about the standards a context sets, not about the identity of the ' +
          'speaker.',
      },
      {
        id: 'd',
        text: 'That closure is false.',
        explanation:
          'That is Nozick\u2019s route. Contextualists typically keep closure and let standards ' +
          'shift instead.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-14-e4',
    type: 'choice',
    conceptIds: ['scepticism', 'closure-principle'],
    prompt: 'What do all four responses have in common?',
    options: [
      {
        id: 'a',
        text: 'They each reject a premise or reinterpret a term rather than dispute the form.',
        explanation:
          'Correct. The argument is valid, so every route runs through a premise or the ' +
          'meaning of "know" — nobody attacks the structure.',
      },
      {
        id: 'b',
        text: 'They each show the argument is invalid.',
        explanation:
          'None does. The validity of the sceptical argument is common ground.',
      },
      {
        id: 'c',
        text: 'They each accept that we know nothing.',
        explanation:
          'All four responses exist precisely to resist that conclusion. Accepting it would be ' +
          'agreeing with the sceptic rather than answering them.',
      },
      {
        id: 'd',
        text: 'They each rely on empirical evidence.',
        explanation:
          'Evidence is what the sceptic has already neutralised, so none of the responses can ' +
          'lean on it.',
      },
    ],
    correctId: 'a',
  },
]
