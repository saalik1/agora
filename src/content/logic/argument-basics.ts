import type { Exercise, Lesson, Unit } from '@/types/content'

/**
 * Unit 1 — Argument Basics.
 *
 * Authoring rules that hold across every lesson:
 *  - explanation bodies stay under ~120 words; a longer one is two lessons
 *  - every wrong option names the specific confusion behind it, never just
 *    "incorrect" — the distractors are where the teaching happens
 *  - `conceptIds` on exercises drive mastery and review, so they must be exact
 */

export const argumentBasicsUnit: Unit = {
  id: 'logic-u1',
  subjectId: 'logic',
  title: 'Argument Basics',
  blurb: 'What an argument is, what it is made of, and how to tell one from a bare claim.',
  lessonIds: ['logic-1', 'logic-2', 'logic-3', 'logic-4', 'logic-5', 'logic-6'],
}

export const argumentBasicsLessons: Lesson[] = [
  {
    id: 'logic-1',
    unitId: 'logic-u1',
    title: 'What is an argument?',
    summary: 'Reasons offered in support of a claim — not a disagreement.',
    difficulty: 1,
    estimatedMinutes: 5,
    xpReward: 15,
    conceptIds: ['argument', 'premise', 'conclusion', 'assertion'],
    sections: [
      {
        kind: 'explanation',
        body:
          'In everyday speech an argument is a quarrel. In philosophy it is something quieter ' +
          'and more useful: a set of statements where some are offered as reasons to accept ' +
          'another. No raised voices required. Two people who agree entirely can still examine ' +
          'an argument together, and often that is exactly what philosophy consists of.',
      },
      {
        kind: 'definition',
        term: 'Argument',
        body:
          'One or more premises offered in support of a conclusion. The premises are the ' +
          'reasons; the conclusion is what those reasons are meant to establish.',
      },
      {
        kind: 'argument',
        ref: 'socrates-mortal',
        note:
          'The oldest example in the subject, and still the clearest. Two reasons, one claim ' +
          'they support.',
      },
      {
        kind: 'explanation',
        heading: 'Finding the conclusion',
        body:
          'Words like "therefore", "so" and "it follows that" often mark a conclusion, but they ' +
          'are hints rather than rules — plenty of arguments use none of them, and "so" turns ' +
          'up in sentences that are not arguments at all. The reliable test is direction. Ask ' +
          'of each statement: is this being used to support something else, or is something ' +
          'else being used to support it? Whatever the support points towards is the conclusion.',
      },
      {
        kind: 'example',
        body:
          'The bridge was built in 1940, and no bridge of that age has been inspected this ' +
          'decade. So this bridge has not been inspected this decade.',
        caption: 'Two premises, then a conclusion marked by "so".',
      },
      {
        kind: 'misconception',
        claim: 'A passage counts as an argument if it is about something contentious.',
        correction:
          'Subject matter is irrelevant. A furious paragraph about politics that offers no ' +
          'reasons is not an argument, and a placid one about bridge inspections that does ' +
          'offer reasons is. What makes an argument is structure: the presence of support.',
      },
    ],
    exerciseIds: ['logic-1-e1', 'logic-1-e2', 'logic-1-e3', 'logic-1-e4'],
  },
]

export const argumentBasicsExercises: Exercise[] = [
  {
    id: 'logic-1-e1',
    type: 'choice',
    conceptIds: ['argument', 'assertion'],
    prompt: 'Which passage is an argument?',
    options: [
      {
        id: 'a',
        text: 'The museum is closed on Mondays. It opens at ten on other days and shuts at six.',
        explanation:
          'Two claims, but neither supports the other — this is a description. Information ' +
          'stacked side by side is not yet an argument.',
      },
      {
        id: 'b',
        text: 'The museum is closed on Mondays, and today is Monday, so we cannot go today.',
        explanation:
          'Correct. Two statements are offered as reasons, and "so" marks what they support. ' +
          'That supporting relationship is what makes it an argument.',
      },
      {
        id: 'c',
        text: 'The museum is far too expensive and the new wing is an eyesore.',
        explanation:
          'Two strong opinions, but no reason is given for either. Forceful language is not ' +
          'support — this is assertion, not argument.',
      },
      {
        id: 'd',
        text: 'Is the museum closed on Mondays, or was that the gallery?',
        explanation:
          'A question asserts nothing, so there is nothing here to support or be supported.',
      },
    ],
    correctId: 'b',
  },
  {
    id: 'logic-1-e2',
    type: 'choice',
    conceptIds: ['conclusion'],
    prompt: 'Which statement is the conclusion?',
    stimulus:
      'Anyone who trains daily improves. Priya trains daily. She is therefore improving, ' +
      'even if she cannot feel it yet.',
    options: [
      {
        id: 'a',
        text: 'Anyone who trains daily improves.',
        explanation:
          'This is a premise. It is a general rule being used to support a claim about Priya, ' +
          'not the point the passage is arguing for.',
      },
      {
        id: 'b',
        text: 'Priya trains daily.',
        explanation:
          'This is a premise — the particular fact that brings Priya under the general rule.',
      },
      {
        id: 'c',
        text: 'Priya is improving.',
        explanation:
          'Correct. Both other statements are offered in support of this one, and "therefore" ' +
          'confirms the direction of support.',
      },
      {
        id: 'd',
        text: 'Priya cannot feel that she is improving.',
        explanation:
          'A concession attached to the conclusion, not the conclusion itself. Nothing in the ' +
          'passage is offered as a reason to believe it.',
      },
    ],
    correctId: 'c',
  },
  {
    id: 'logic-1-e3',
    type: 'sort',
    conceptIds: ['premise', 'conclusion', 'argument'],
    prompt: 'Label each statement by the role it plays in this argument.',
    statements: [
      {
        id: 's1',
        text: 'Every member of the committee voted in favour.',
        role: 'premise',
      },
      {
        id: 's2',
        text: 'Naledi is a member of the committee.',
        role: 'premise',
      },
      {
        id: 's3',
        text: 'Naledi voted in favour.',
        role: 'conclusion',
      },
      {
        id: 's4',
        text: 'The committee meets on the first Tuesday of each month.',
        role: 'irrelevant',
      },
    ],
    explanation:
      'The first two statements work together: a general claim about every member, and the ' +
      'fact that Naledi is one. Together they support the third. The meeting schedule is true ' +
      'but idle — it supports nothing here, and nothing here supports it.',
  },
  {
    id: 'logic-1-e4',
    type: 'choice',
    conceptIds: ['argument', 'conclusion'],
    prompt: 'Why is this passage not an argument?',
    stimulus:
      'The trial lasted nine weeks. The jury deliberated for four days. So many people ' +
      'attended that the court opened an overflow room.',
    options: [
      {
        id: 'a',
        text: 'It contains the word "so", which only appears in genuine arguments.',
        explanation:
          'The reverse of the real problem. "So" appears here as an intensifier meaning "such ' +
          'a large number", not as a conclusion marker — which is exactly why indicator words ' +
          'cannot be trusted on their own.',
      },
      {
        id: 'b',
        text: 'No statement is offered as a reason to accept any other.',
        explanation:
          'Correct. Three facts about the same trial, none supporting another. Without a ' +
          'supporting relationship there is no argument, however much information is present.',
      },
      {
        id: 'c',
        text: 'The statements might be false.',
        explanation:
          'Truth is a separate question. An argument built entirely from false premises is ' +
          'still an argument — a bad one, but structurally intact.',
      },
      {
        id: 'd',
        text: 'It reports events rather than expressing an opinion.',
        explanation:
          'Arguments can be entirely factual, and opinions can be asserted with no argument at ' +
          'all. The distinction is support, not subject matter.',
      },
    ],
    correctId: 'b',
  },
]
