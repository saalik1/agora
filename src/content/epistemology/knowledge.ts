import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Epistemology Unit 1 — What Knowledge Is.
 *
 * The arc is a single argument rather than six topics: true belief is not
 * enough (1), so add justification (2), but Gettier breaks that (3), and the
 * regress problem shows justification itself was never secure (4), forcing a
 * choice between foundationalism and coherentism (5) and between internal and
 * external accounts of what justification even is (6).
 */

export const epistemologyKnowledgeUnit: Unit = {
  id: 'epis-u1',
  subjectId: 'epistemology',
  title: 'What Knowledge Is',
  blurb: 'The classical analysis, the counterexample that broke it, and what justification rests on.',
  lessonIds: ['epis-1', 'epis-2', 'epis-3', 'epis-4', 'epis-5', 'epis-6'],
}

export const epistemologyKnowledgeLessons: Lesson[] = [
  {
    id: 'epis-1',
    unitId: 'epis-u1',
    title: 'Knowing and merely being right',
    summary: 'Why a correct guess is not knowledge.',
    difficulty: 1,
    estimatedMinutes: 6,
    xpReward: 15,
    conceptIds: ['knowledge'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Guessing correctly is not knowing. If you announce the coin will land heads and it ' +
          'does, you had a true belief — and nothing more. You would have been equally ' +
          'confident had it landed tails, which shows nothing connected your belief to the ' +
          'fact. Epistemology starts by asking what that missing connection is.',
      },
      {
        kind: 'argument',
        ref: 'lucky-guess',
        note:
          'This is a counterexample, exactly the tool from Logic lesson 12: one case where ' +
          'true belief is present and knowledge is absent.',
      },
      {
        kind: 'explanation',
        heading: 'Two conditions already',
        body:
          'The coin case shows truth is not sufficient. A separate point shows belief is ' +
          'necessary: you cannot know something you do not even believe. So knowledge requires ' +
          'at least belief and truth — and something further that the guesser lacked.',
      },
      {
        kind: 'misconception',
        claim: 'Knowledge is just very strong confidence.',
        correction:
          'Confidence is neither necessary nor sufficient. People know things they hold ' +
          'tentatively, and hold falsehoods with total conviction. Certainty is a feeling; ' +
          'knowledge is a relation between a belief and the world.',
      },
    ],
    exerciseIds: ['epis-1-e1', 'epis-1-e2', 'epis-1-e3', 'epis-1-e4'],
  },

  {
    id: 'epis-2',
    unitId: 'epis-u1',
    title: 'Justified true belief',
    summary: 'The classical analysis: three conditions, held for two thousand years.',
    difficulty: 2,
    estimatedMinutes: 7,
    xpReward: 20,
    conceptIds: ['justified-true-belief', 'justification', 'knowledge'],
    sections: [
      {
        kind: 'explanation',
        body:
          'The missing ingredient is usually called justification: having good reason. That ' +
          'gives the classical analysis, three conditions claimed to be individually necessary ' +
          'and jointly sufficient.',
      },
      {
        kind: 'argument',
        ref: 'jtb-analysis',
        note:
          'Each condition rules out a distinct failure. Expand any premise to see which one, ' +
          'and expand P3 to see the objection that eventually broke the whole analysis.',
      },
      {
        kind: 'explanation',
        heading: 'Necessary and sufficient, again',
        body:
          'This is the machinery from Logic lesson 6 doing real work. Claiming the three ' +
          'conditions are individually necessary means knowledge fails if any is missing. ' +
          'Claiming they are jointly sufficient means nothing more is needed. A definition can ' +
          'fail either test — and JTB fails the second.',
      },
      {
        kind: 'misconception',
        claim: 'Justification guarantees truth.',
        correction:
          'It does not, and this is the crack Gettier widened. Every good reason available to ' +
          'you can point one way while the facts lie another. Justified false beliefs are ' +
          'ordinary — which is why truth has to be listed separately.',
      },
    ],
    exerciseIds: ['epis-2-e1', 'epis-2-e2', 'epis-2-e3', 'epis-2-e4'],
  },

  {
    id: 'epis-3',
    unitId: 'epis-u1',
    title: 'Gettier problems',
    summary: 'Three pages that undid two thousand years.',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['gettier', 'justified-true-belief', 'counterexample'],
    sections: [
      {
        kind: 'explanation',
        body:
          'In 1963 Edmund Gettier published three pages describing cases where all three JTB ' +
          'conditions hold and nobody would call it knowledge. The belief is true, but true by ' +
          'accident: justification points at one fact while truth arrives from another.',
      },
      {
        kind: 'argument',
        ref: 'gettier-clock',
        note:
          'Ravi believes it is three o\u2019clock, is justified in believing it, and is right. He ' +
          'still does not know — he is looking at a stopped clock.',
      },
      {
        kind: 'explanation',
        heading: 'The recipe',
        body:
          'Every Gettier case works the same way. Give someone excellent justification for a ' +
          'belief, make that justification fail in a way they could not detect, then arrange ' +
          'for the belief to be true anyway by unrelated luck. The result satisfies the ' +
          'definition and misses the phenomenon.',
      },
      {
        kind: 'argument',
        ref: 'gettier-sheep',
        note:
          'The same recipe with different furniture. Amara sees a dog and is right about the ' +
          'sheep by coincidence.',
      },
      {
        kind: 'misconception',
        claim: 'Gettier cases show these people were not really justified.',
        correction:
          'Tempting, but the standard it implies is impossibly high — nobody verifies that ' +
          'every clock is running before reading it. Raising the bar far enough to exclude ' +
          'Gettier cases excludes almost all ordinary knowledge along with them.',
      },
    ],
    exerciseIds: ['epis-3-e1', 'epis-3-e2', 'epis-3-e3', 'epis-3-e4'],
  },

  {
    id: 'epis-4',
    unitId: 'epis-u1',
    title: 'The regress problem',
    summary: 'Every reason needs a reason. Where does it stop?',
    difficulty: 3,
    estimatedMinutes: 9,
    xpReward: 25,
    conceptIds: ['regress-problem', 'infinite-regress', 'justification'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Gettier attacked the sufficiency of JTB. The regress problem attacks something ' +
          'deeper: whether justification was ever available at all. If a belief needs support, ' +
          'that support needs support, and so on. Ask "why?" enough times and something has to ' +
          'give.',
      },
      {
        kind: 'argument',
        ref: 'regress-trilemma',
        note:
          'Three exits, each unattractive. Expand the premises to see how foundationalists ' +
          'and coherentists each try to escape.',
      },
      {
        kind: 'explanation',
        heading: 'Not every regress is vicious',
        body:
          'Some infinite chains are harmless: every number has a successor, and nothing is ' +
          'wrong. A regress is vicious when the chain was supposed to do the explaining, so ' +
          'that postponing the work forever means it never gets done. Justification looks like ' +
          'the vicious kind.',
      },
      {
        kind: 'misconception',
        claim: 'The regress shows scepticism is true.',
        correction:
          'It shows that one of three options must be taken, and each has a cost. Concluding ' +
          'that no belief is justified is the third option, not a neutral summary — and it ' +
          'faces the awkward question of what justifies believing it.',
      },
    ],
    exerciseIds: ['epis-4-e1', 'epis-4-e2', 'epis-4-e3', 'epis-4-e4'],
  },

  {
    id: 'epis-5',
    unitId: 'epis-u1',
    title: 'Foundations or webs',
    summary: 'Two ways out of the regress, and what each costs.',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['foundationalism', 'coherentism', 'regress-problem'],
    sections: [
      {
        kind: 'explanation',
        body:
          'Two of the three exits have serious defenders. Foundationalists stop the regress at ' +
          'beliefs that need no further support. Coherentists deny the chain metaphor ' +
          'altogether and locate justification in how beliefs hang together.',
      },
      {
        kind: 'definition',
        term: 'Foundationalism',
        body:
          'Some beliefs are basic: justified without resting on other beliefs. Everything else ' +
          'is justified by inference from them.',
      },
      {
        kind: 'definition',
        term: 'Coherentism',
        body:
          'No belief is basic. A belief is justified by fitting into a large, mutually ' +
          'supporting system.',
      },
      {
        kind: 'explanation',
        heading: 'Each has one hard question',
        body:
          'For foundationalism: what makes a basic belief justified, if not another belief? ' +
          'Saying "it just is" looks like the arbitrary stop the trilemma warned about. For ' +
          'coherentism: a perfectly coherent set of beliefs could be entirely detached from ' +
          'reality, as a well-constructed fiction is. Neither question has a settled answer.',
      },
      {
        kind: 'misconception',
        claim: 'Coherentism is just circular reasoning with a better name.',
        correction:
          'The coherentist grants the circle and denies it is vicious, arguing that a large ' +
          'web of mutual support differs in kind from a two-step loop. Whether that difference ' +
          'is real is precisely the debate — but it is a position with an argument, not a ' +
          'confusion.',
      },
    ],
    exerciseIds: ['epis-5-e1', 'epis-5-e2', 'epis-5-e3', 'epis-5-e4'],
  },

  {
    id: 'epis-6',
    unitId: 'epis-u1',
    title: 'Internalism and externalism',
    summary: 'Must you be able to tell what justifies your beliefs?',
    difficulty: 3,
    estimatedMinutes: 8,
    xpReward: 25,
    conceptIds: ['internalism', 'externalism', 'justification'],
    sections: [
      {
        kind: 'explanation',
        body:
          'A different question about justification: is it something you have access to, or ' +
          'something that happens to you? Internalists say you could in principle work out ' +
          'what makes your beliefs reasonable. Externalists say what matters is whether the ' +
          'belief was produced reliably, whether or not you can say why.',
      },
      {
        kind: 'example',
        body:
          'Experienced chicken sexers sort day-old chicks with near-perfect accuracy and cannot ' +
          'explain how. They report simply seeing it. Do they know the chick is male?',
        caption: 'The case that pulls hardest against internalism.',
      },
      {
        kind: 'explanation',
        heading: 'What each buys and costs',
        body:
          'Externalism handles the chicken sexer easily, and handles children and animals who ' +
          'plainly know things without being able to justify them. Its cost is that ' +
          'justification becomes something you might have with no way of telling. Internalism ' +
          'keeps justification something you can check, at the cost of denying knowledge to ' +
          'reliable believers who cannot articulate their grounds.',
      },
      {
        kind: 'misconception',
        claim: 'Externalism solves the Gettier problem.',
        correction:
          'It helps, since Gettier cases involve unreliable routes to true belief. But ' +
          'reliability can be spelled out in ways that let new Gettier-style cases through, ' +
          'and forty years of proposed fixes have each attracted fresh counterexamples.',
      },
    ],
    exerciseIds: ['epis-6-e1', 'epis-6-e2', 'epis-6-e3', 'epis-6-e4'],
  },
]

export const epistemologyKnowledgeExercises: Exercise[] = [
  /* ----------------------------------------------------------------- epis-1 */
  {
    id: 'epis-1-e1',
    type: 'choice',
    conceptIds: ['knowledge'],
    prompt: 'Why is the lucky guess not knowledge?',
    options: [
      {
        id: 'a',
        text: 'The belief was false.',
        explanation:
          'It was true — the coin did land heads. That is what makes the case interesting ' +
          'rather than trivial.',
      },
      {
        id: 'b',
        text: 'Nothing connected the belief to the fact that made it true.',
        explanation:
          'Correct. She would have been equally confident either way, so the match between ' +
          'belief and world was coincidence.',
      },
      {
        id: 'c',
        text: 'She was not confident enough.',
        explanation:
          'Confidence would not help. A supremely confident guess about a coin is still a ' +
          'guess.',
      },
      {
        id: 'd',
        text: 'Coin flips cannot be known about at all.',
        explanation:
          'They can — someone who saw the result knows it. The problem is this route to the ' +
          'belief, not the subject matter.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-1-e2',
    type: 'choice',
    conceptIds: ['knowledge'],
    prompt: 'Which case is knowledge?',
    options: [
      {
        id: 'a',
        text: 'Tom believes his train is delayed because he feels unlucky today. It is delayed.',
        explanation:
          'True belief on no relevant grounds. The feeling had nothing to do with the ' +
          'timetable.',
      },
      {
        id: 'b',
        text: 'Tom checks the live departure board, which shows a delay. It is delayed.',
        explanation:
          'Correct. The belief is true, and the route to it — consulting a reliable source — ' +
          'is what made it true-tracking rather than lucky.',
      },
      {
        id: 'c',
        text: 'Tom is certain the train is on time. It is delayed.',
        explanation:
          'A false belief, so not knowledge whatever his confidence. Truth is not optional.',
      },
      {
        id: 'd',
        text: 'Tom has no view about the train at all. It is delayed.',
        explanation:
          'You cannot know something you have no belief about. Belief is the first condition.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-1-e3',
    type: 'sort',
    conceptIds: ['knowledge', 'premise', 'conclusion'],
    prompt: 'Label each statement in the lucky-guess argument.',
    statements: [
      { id: 's1', text: 'Ines believes the coin will land heads, on no evidence.', role: 'premise' },
      { id: 's2', text: 'The coin lands heads, so her belief is true.', role: 'premise' },
      { id: 's3', text: 'True belief is not sufficient for knowledge.', role: 'conclusion' },
      { id: 's4', text: 'The coin was minted in 2019.', role: 'irrelevant' },
    ],
    explanation:
      'The two premises together produce a case of true belief without knowledge, which is ' +
      'what establishes the general conclusion. When the coin was minted plays no part.',
  },
  {
    id: 'epis-1-e4',
    type: 'choice',
    conceptIds: ['knowledge'],
    prompt: 'What does the coin case establish?',
    options: [
      {
        id: 'a',
        text: 'Truth is not necessary for knowledge.',
        explanation:
          'The opposite of what it shows. Truth remains necessary — the case concerns whether ' +
          'truth plus belief is enough.',
      },
      {
        id: 'b',
        text: 'True belief is not sufficient for knowledge.',
        explanation:
          'Correct. One case of true belief that is plainly not knowledge settles the ' +
          'sufficiency question.',
      },
      {
        id: 'c',
        text: 'Belief is not necessary for knowledge.',
        explanation:
          'Nothing here bears on that, and Ines did believe. The case targets sufficiency, not ' +
          'the belief condition.',
      },
      {
        id: 'd',
        text: 'Knowledge is impossible.',
        explanation:
          'Far too strong. It shows one proposed account is incomplete, which is a reason to ' +
          'improve the account rather than abandon the concept.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- epis-2 */
  {
    id: 'epis-2-e1',
    type: 'choice',
    conceptIds: ['justified-true-belief'],
    prompt: 'Which JTB condition does this case fail?',
    stimulus:
      'Nadia has read the study carefully and has excellent reasons to think the drug works. ' +
      'She believes it does. Later trials show it does not.',
    options: [
      {
        id: 'a',
        text: 'Belief.',
        explanation: 'She clearly believes it, so the belief condition is satisfied. The failure is elsewhere, ' +
          'and identifying which condition breaks is the whole exercise.',
      },
      {
        id: 'b',
        text: 'Truth.',
        explanation:
          'Correct. Her belief is justified but false, which is an ordinary situation and ' +
          'exactly why truth is listed separately from justification.',
      },
      {
        id: 'c',
        text: 'Justification.',
        explanation:
          'She read the study carefully and had good reasons. Being wrong does not retroactively ' +
          'remove justification.',
      },
      {
        id: 'd',
        text: 'None — this is knowledge.',
        explanation:
          'It cannot be. You cannot know something false, however good your reasons were.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-2-e2',
    type: 'choice',
    conceptIds: ['justified-true-belief', 'necessary-condition'],
    prompt: 'What does it mean to say the three conditions are jointly sufficient?',
    options: [
      {
        id: 'a',
        text: 'Each is required for knowledge.',
        explanation:
          'That is the claim that they are individually *necessary* — a separate claim, and ' +
          'one JTB survives.',
      },
      {
        id: 'b',
        text: 'Anything meeting all three is knowledge, with nothing further required.',
        explanation:
          'Correct — and this is the half Gettier refuted. Cases meeting all three turned out ' +
          'not to be knowledge.',
      },
      {
        id: 'c',
        text: 'Meeting any one of them is enough.',
        explanation:
          'That would make each individually sufficient, which is far stronger and obviously ' +
          'false — mere belief is not knowledge.',
      },
      {
        id: 'd',
        text: 'The conditions never occur together.',
        explanation:
          'They occur together constantly. The question is whether that combination always ' +
          'amounts to knowledge.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-2-e3',
    type: 'choice',
    conceptIds: ['justification'],
    prompt: 'Which of these provides justification?',
    options: [
      {
        id: 'a',
        text: 'Wanting the claim to be true.',
        explanation:
          'Desire is not evidence. Wanting something to be so gives no reason at all to think ' +
          'it is.',
      },
      {
        id: 'b',
        text: 'Having read a careful study by a reputable research group.',
        explanation:
          'Correct. Evidence from a reliable source is a paradigm case, even though it can ' +
          'still turn out to be misleading.',
      },
      {
        id: 'c',
        text: 'Feeling certain about it.',
        explanation:
          'Certainty is a psychological state. People feel certain about falsehoods all the ' +
          'time, so the feeling cannot be what makes a belief reasonable.',
      },
      {
        id: 'd',
        text: 'Nobody having disproved it.',
        explanation:
          'This is the burden-of-proof error from Logic lesson 14. Absence of refutation is ' +
          'not support.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-2-e4',
    type: 'choice',
    conceptIds: ['justified-true-belief', 'knowledge'],
    prompt: 'Why does the analysis list truth separately from justification?',
    options: [
      {
        id: 'a',
        text: 'Because justified beliefs can be false.',
        explanation:
          'Correct. If justification guaranteed truth the condition would be redundant — but ' +
          'good reasons regularly point the wrong way.',
      },
      {
        id: 'b',
        text: 'Because true beliefs are always justified.',
        explanation:
          'They are not — the lucky guess was true and unjustified. That is a separate gap.',
      },
      {
        id: 'c',
        text: 'Because truth is easier to check than justification.',
        explanation:
          'Often the reverse. Ease of checking is not why the conditions are distinct.',
      },
      {
        id: 'd',
        text: 'To make the definition longer.',
        explanation:
          'Each condition rules out a specific failure. Remove truth and confident falsehoods ' +
          'would count as knowledge.',
      },
    ],
    correctId: 'a',
  },

  /* ----------------------------------------------------------------- epis-3 */
  {
    id: 'epis-3-e1',
    type: 'choice',
    conceptIds: ['gettier'],
    prompt: 'What makes the stopped clock a Gettier case?',
    options: [
      {
        id: 'a',
        text: 'Ravi\u2019s belief is false.',
        explanation:
          'It is true — it really is three o\u2019clock. A false belief would be an ordinary error, ' +
          'not a Gettier case.',
      },
      {
        id: 'b',
        text: 'His belief is true, but not because of what justified it.',
        explanation:
          'Correct. The justification came from the clock face; the truth came from ' +
          'coincidence. The two have come apart.',
      },
      {
        id: 'c',
        text: 'He had no reason to believe it.',
        explanation:
          'He had an excellent reason — a clock with years of reliable service. Removing the ' +
          'justification would dissolve the puzzle.',
      },
      {
        id: 'd',
        text: 'He did not really believe it.',
        explanation:
          'He did. All three conditions are satisfied, which is precisely what makes the case ' +
          'a problem.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-3-e2',
    type: 'choice',
    conceptIds: ['gettier', 'counterexample'],
    prompt: 'Why is one Gettier case enough to refute the analysis?',
    options: [
      {
        id: 'a',
        text: 'Because it shows the conditions are not necessary.',
        explanation:
          'It leaves necessity untouched. Each condition is still required — the failure is at ' +
          'the other end.',
      },
      {
        id: 'b',
        text: 'Because it shows the conditions are not jointly sufficient.',
        explanation:
          'Correct. Sufficiency is a universal claim — anything meeting all three is knowledge ' +
          '— so a single counterexample settles it, exactly as in Logic lesson 12.',
      },
      {
        id: 'c',
        text: 'Because Gettier cases are common in real life.',
        explanation:
          'Their frequency is irrelevant. A single possible case refutes a claim about all ' +
          'cases.',
      },
      {
        id: 'd',
        text: 'Because it proves knowledge does not exist.',
        explanation:
          'It shows one definition is incomplete. Plenty of ordinary knowledge is untouched by ' +
          'the problem.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-3-e3',
    type: 'choice',
    conceptIds: ['gettier'],
    prompt: 'Which case is a Gettier case?',
    options: [
      {
        id: 'a',
        text: 'Ali believes the meeting is at noon because he misread the invitation. It is at one.',
        explanation:
          'An ordinary false belief. Gettier cases require the belief to be true.',
      },
      {
        id: 'b',
        text:
          'Ali sees his colleague\u2019s car outside and concludes she is in. The car was sold last ' +
          'week, but she is in, having walked.',
        explanation:
          'Correct. Justified, true, and true for reasons entirely unconnected to the ' +
          'justification.',
      },
      {
        id: 'c',
        text: 'Ali guesses his colleague is in, with no evidence. She is.',
        explanation:
          'True belief without justification — the lucky guess from lesson 1. Gettier cases ' +
          'need the justification to be present.',
      },
      {
        id: 'd',
        text: 'Ali sees his colleague at her desk and concludes she is in. She is.',
        explanation:
          'Straightforward knowledge. Justification and truth line up exactly as they should.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-3-e4',
    type: 'choice',
    conceptIds: ['gettier', 'justified-true-belief'],
    prompt: 'Which response to Gettier faces the objection that it makes justification impossibly demanding?',
    options: [
      {
        id: 'a',
        text: 'Requiring that no false belief plays a role in the justification.',
        explanation:
          'A serious proposal with its own difficulties, but it does not raise the general bar ' +
          'for justification.',
      },
      {
        id: 'b',
        text: 'Insisting the subject was never justified in the first place.',
        explanation:
          'Correct. To exclude Ravi you must demand he verify the clock is running — a standard ' +
          'that would strip justification from almost everything anyone believes.',
      },
      {
        id: 'c',
        text: 'Replacing justification with reliable belief formation.',
        explanation:
          'The externalist route. It faces new counterexamples, but not the charge of setting ' +
          'an impossible standard.',
      },
      {
        id: 'd',
        text: 'Treating knowledge as unanalysable.',
        explanation:
          'A real position, and it avoids the problem by declining to offer conditions at all ' +
          'rather than by demanding more.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- epis-4 */
  {
    id: 'epis-4-e1',
    type: 'choice',
    conceptIds: ['regress-problem'],
    prompt: 'What are the three options in the trilemma?',
    options: [
      {
        id: 'a',
        text: 'Truth, belief, and justification.',
        explanation:
          'Those are the JTB conditions, which the trilemma is not about. It concerns how ' +
          'justification chains terminate.',
      },
      {
        id: 'b',
        text: 'An infinite chain, a circle, or an unjustified stopping point.',
        explanation:
          'Correct. A chain either continues forever, loops back, or stops — and the options ' +
          'are exhaustive, which is what makes it a genuine trilemma.',
      },
      {
        id: 'c',
        text: 'Foundationalism, coherentism, and externalism.',
        explanation:
          'The first two are responses to the trilemma, but externalism answers a different ' +
          'question — whether justification must be accessible.',
      },
      {
        id: 'd',
        text: 'Deduction, induction, and abduction.',
        explanation:
          'Kinds of inference rather than ways a justification chain can end.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-4-e2',
    type: 'choice',
    conceptIds: ['infinite-regress'],
    prompt: 'What makes a regress vicious rather than harmless?',
    options: [
      {
        id: 'a',
        text: 'Being infinite.',
        explanation:
          'Infinity alone is fine. Every number has a successor and nothing has gone wrong.',
      },
      {
        id: 'b',
        text: 'The chain never completing the work it was supposed to do.',
        explanation:
          'Correct. If each link only defers the explaining, then no amount of chain ever ' +
          'explains anything.',
      },
      {
        id: 'c',
        text: 'Being hard to imagine.',
        explanation:
          'Difficulty imagining something is not an argument — the point made about weak ' +
          'reductios in Logic lesson 11.',
      },
      {
        id: 'd',
        text: 'Involving beliefs rather than objects.',
        explanation:
          'Vicious regresses appear in metaphysics too. The subject matter is not what makes ' +
          'the difference.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-4-e3',
    type: 'choice',
    conceptIds: ['regress-problem', 'justification'],
    prompt: 'Which premise of the trilemma do foundationalists reject?',
    options: [
      {
        id: 'a',
        text: 'That every justified belief is justified by a further belief.',
        explanation:
          'Correct. Foundationalists hold that some beliefs are justified non-inferentially, ' +
          'which stops the chain before it starts.',
      },
      {
        id: 'b',
        text: 'That the chain must end, loop, or continue forever.',
        explanation:
          'That premise is exhaustive by construction — there is no fourth possibility to ' +
          'appeal to.',
      },
      {
        id: 'c',
        text: 'That circular justification is unsatisfactory.',
        explanation:
          'This is the coherentist\u2019s target, not the foundationalist\u2019s. Foundationalists ' +
          'generally agree circles are bad.',
      },
      {
        id: 'd',
        text: 'That beliefs can be justified at all.',
        explanation:
          'That is the sceptical conclusion the foundationalist is trying to avoid.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'epis-4-e4',
    type: 'choice',
    conceptIds: ['regress-problem', 'scepticism'],
    prompt: 'What is the awkward question facing someone who accepts the sceptical horn?',
    options: [
      {
        id: 'a',
        text: 'Whether they really believe it.',
        explanation:
          'Sincerity is not the issue. Plenty of philosophers hold views they find hard to ' +
          'live by.',
      },
      {
        id: 'b',
        text: 'What justifies believing that no belief is justified.',
        explanation:
          'Correct. The conclusion appears to undercut itself, since accepting it presumably ' +
          'requires the very thing it denies.',
      },
      {
        id: 'c',
        text: 'Whether the trilemma is valid.',
        explanation:
          'A fair question about the argument, but not the specific difficulty created by ' +
          'accepting its conclusion.',
      },
      {
        id: 'd',
        text: 'Why anyone would want to be a sceptic.',
        explanation:
          'Motivation is irrelevant to whether a position is defensible.',
      },
    ],
    correctId: 'b',
  },

  /* ----------------------------------------------------------------- epis-5 */
  {
    id: 'epis-5-e1',
    type: 'choice',
    conceptIds: ['foundationalism'],
    prompt: 'What is the standing challenge to foundationalism?',
    options: [
      {
        id: 'a',
        text: 'Explaining what justifies a basic belief without appealing to another belief.',
        explanation:
          'Correct. Without an answer, stopping the regress looks like the arbitrary halt the ' +
          'trilemma warned against.',
      },
      {
        id: 'b',
        text: 'Explaining why circles are unacceptable.',
        explanation:
          'Foundationalists and most critics agree circles are bad — that is common ground, ' +
          'not the difficulty.',
      },
      {
        id: 'c',
        text: 'Showing that infinite chains are impossible.',
        explanation:
          'A separate horn of the trilemma, and not the pressure point on foundationalism ' +
          'specifically.',
      },
      {
        id: 'd',
        text: 'Proving that beliefs exist.',
        explanation:
          'Nobody in this debate doubts that beliefs exist. Foundationalists and coherentists ' +
          'disagree about what justifies them, not about whether there are any.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'epis-5-e2',
    type: 'choice',
    conceptIds: ['coherentism'],
    prompt: 'What is the standing objection to coherentism?',
    options: [
      {
        id: 'a',
        text: 'That coherent beliefs are always false.',
        explanation:
          'Far too strong. The objection is about what coherence guarantees, not about what is ' +
          'in fact true.',
      },
      {
        id: 'b',
        text: 'That a perfectly coherent set of beliefs could be entirely detached from reality.',
        explanation:
          'Correct. A well-constructed novel is internally coherent, which suggests coherence ' +
          'alone cannot connect beliefs to how things are.',
      },
      {
        id: 'c',
        text: 'That coherentists cannot explain infinite regress.',
        explanation:
          'Coherentism sidesteps the regress by rejecting the chain picture, so this is not ' +
          'where the pressure lies.',
      },
      {
        id: 'd',
        text: 'That coherence is impossible to achieve.',
        explanation:
          'Achieving it is difficult but not the objection. The worry is what it delivers even ' +
          'when achieved.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-5-e3',
    type: 'choice',
    conceptIds: ['coherentism', 'circular-reasoning'],
    prompt: 'How does the coherentist reply to the charge of circularity?',
    options: [
      {
        id: 'a',
        text: 'By denying that their view involves any circle.',
        explanation:
          'They generally grant the circle. Denying it would misdescribe the position.',
      },
      {
        id: 'b',
        text: 'By arguing a large web of mutual support differs in kind from a tight loop.',
        explanation:
          'Correct. The claim is that vicious circularity is a property of small, ' +
          'question-begging loops rather than of mutual support as such.',
      },
      {
        id: 'c',
        text: 'By accepting that their beliefs are unjustified.',
        explanation:
          'That would concede the sceptical horn rather than defend coherentism.',
      },
      {
        id: 'd',
        text: 'By adopting basic beliefs after all.',
        explanation:
          'That would be foundationalism. Rejecting basic beliefs is what defines the view.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-5-e4',
    type: 'sort',
    conceptIds: ['foundationalism', 'coherentism', 'premise', 'conclusion'],
    prompt: 'Label each statement in this argument for foundationalism.',
    statements: [
      { id: 's1', text: 'A justification chain must end, loop, or run forever.', role: 'premise' },
      { id: 's2', text: 'Infinite chains and circles both fail to justify.', role: 'premise' },
      { id: 's3', text: 'So justification must rest on beliefs that need no further support.', role: 'conclusion' },
      { id: 's4', text: 'Descartes wrote in both French and Latin.', role: 'irrelevant' },
    ],
    explanation:
      'This is elimination: exhaust the options, rule out two, and the third stands. Note that ' +
      'a coherentist attacks the second premise rather than the structure.',
  },

  /* ----------------------------------------------------------------- epis-6 */
  {
    id: 'epis-6-e1',
    type: 'choice',
    conceptIds: ['internalism', 'externalism'],
    prompt: 'What does the chicken sexer case pressure?',
    options: [
      {
        id: 'a',
        text: 'Internalism, because the sexer cannot say what justifies the belief.',
        explanation:
          'Correct. If justification must be accessible by reflection, a reliable believer who ' +
          'cannot explain themselves fails to count as knowing.',
      },
      {
        id: 'b',
        text: 'Externalism, because the belief is unreliable.',
        explanation:
          'The beliefs are highly reliable — that is the whole point of the example, and it ' +
          'is what externalism accommodates easily.',
      },
      {
        id: 'c',
        text: 'The truth condition.',
        explanation:
          'The sexer\u2019s judgements are true. Truth is not what the case puts under strain.',
      },
      {
        id: 'd',
        text: 'The belief condition.',
        explanation:
          'They plainly believe what they report. The pressure is on what justifies it.',
      },
    ],
    correctId: 'a',
  },
  {
    id: 'epis-6-e2',
    type: 'choice',
    conceptIds: ['externalism'],
    prompt: 'What is the cost of externalism?',
    options: [
      {
        id: 'a',
        text: 'It cannot account for children or animals knowing things.',
        explanation:
          'This is one of externalism\u2019s advantages — those are exactly the cases it handles ' +
          'better than internalism.',
      },
      {
        id: 'b',
        text: 'Justification becomes something you might have with no way of telling.',
        explanation:
          'Correct. If reliability is what matters and reliability is not introspectable, you ' +
          'cannot check from the inside whether your beliefs are justified.',
      },
      {
        id: 'c',
        text: 'It requires beliefs to be certain.',
        explanation:
          'Externalists generally require reliability, not certainty — a considerably weaker ' +
          'demand.',
      },
      {
        id: 'd',
        text: 'It denies that truth matters.',
        explanation:
          'Reliability is defined in terms of producing true beliefs, so truth is central ' +
          'rather than sidelined.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-6-e3',
    type: 'choice',
    conceptIds: ['internalism', 'externalism'],
    prompt: 'Which question separates internalism from externalism?',
    options: [
      {
        id: 'a',
        text: 'Is the belief true?',
        explanation:
          'Both sides require truth for knowledge. This is common ground.',
      },
      {
        id: 'b',
        text: 'Must the believer have access to what justifies the belief?',
        explanation:
          'Correct. Internalists say yes, externalists no — and everything else in the dispute ' +
          'follows from that.',
      },
      {
        id: 'c',
        text: 'Does the justification chain terminate?',
        explanation:
          'That is the regress problem from lessons 4 and 5, a different axis of disagreement ' +
          'entirely.',
      },
      {
        id: 'd',
        text: 'Is knowledge valuable?',
        explanation:
          'A real question in epistemology, but not the one that divides these two positions.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'epis-6-e4',
    type: 'choice',
    conceptIds: ['externalism', 'gettier'],
    prompt: 'Does externalism dispose of the Gettier problem?',
    options: [
      {
        id: 'a',
        text: 'Yes, completely — reliability rules out all such cases.',
        explanation:
          'Too confident. Depending on how reliability is specified, fresh Gettier-style cases ' +
          'have been constructed against each proposal.',
      },
      {
        id: 'b',
        text: 'It helps, but reliability can be spelled out in ways that let new cases through.',
        explanation:
          'Correct, and this is the honest state of the field: forty years of proposed fixes, ' +
          'each attracting new counterexamples.',
      },
      {
        id: 'c',
        text: 'No, it is entirely irrelevant to Gettier cases.',
        explanation:
          'Too dismissive. Gettier cases do involve unreliable routes to true belief, so ' +
          'reliability is clearly germane.',
      },
      {
        id: 'd',
        text: 'The question does not arise, since externalists reject the truth condition.',
        explanation:
          'They do not. Externalists keep truth and belief, and reinterpret justification.',
      },
    ],
    correctId: 'b',
  },
]
