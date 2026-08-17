import type { Argument } from '@/types/content'

/**
 * Arguments are stored structurally rather than as prose, which is what lets the
 * same data render as a proof column, an expandable objection tree, and a
 * library entry without being rewritten for each.
 */

export const argumentCards: Argument[] = [
  {
    id: 'socrates-mortal',
    title: 'Socrates is mortal',
    form: 'Categorical syllogism',
    tags: ['deductive', 'valid', 'logic'],
    verdict: 'sound',
    premises: [
      {
        label: 'P1',
        text: 'All humans are mortal.',
        support:
          'A generalisation supported by every observed case, and built into what we mean by ' +
          'a biological organism.',
      },
      {
        label: 'P2',
        text: 'Socrates is a human.',
        support: 'A historical claim about a particular person.',
      },
    ],
    conclusion: 'Socrates is mortal.',
  },
  {
    id: 'library-closed',
    title: 'The library is closed',
    form: 'Modus ponens',
    tags: ['deductive', 'valid', 'logic'],
    verdict: 'valid',
    premises: [
      { label: 'P1', text: 'If it is Sunday, the library is closed.' },
      { label: 'P2', text: 'It is Sunday.' },
    ],
    conclusion: 'The library is closed.',
  },
  {
    id: 'rain-street',
    title: 'It rained last night',
    form: 'Inference to the best explanation',
    tags: ['inductive', 'abduction'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'The street is wet this morning.',
        support: 'Direct observation.',
        objections: [
          {
            text:
              'A street cleaner, a burst pipe or a neighbour washing a car would produce the ' +
              'same observation.',
            responses: [
              'Rain remains the most common cause, so the inference is reasonable even though ' +
              'it is not guaranteed.',
              'Checking whether nearby rooftops are also wet would discriminate between the ' +
              'competing explanations.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'Rain would explain a wet street.',
      },
    ],
    conclusion: 'It rained last night.',
  },
  {
    id: 'cats-mammals',
    title: 'All cats are mammals',
    form: 'Categorical syllogism',
    tags: ['deductive', 'valid', 'logic'],
    verdict: 'unsound',
    premises: [
      {
        label: 'P1',
        text: 'All mammals are cats.',
        support: 'Plainly false — dogs, whales and humans are all mammals and none are cats.',
      },
      { label: 'P2', text: 'Whiskers is a mammal.' },
    ],
    conclusion: 'Whiskers is a cat.',
  },
  {
    id: 'swans-white',
    title: 'All swans are white',
    form: 'Enumerative induction',
    tags: ['inductive', 'counterexample'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Every swan observed in Europe before 1697 was white.',
        support: 'Thousands of independent sightings across centuries.',
        objections: [
          {
            text:
              'Black swans were found in Western Australia in 1697, so the sample was ' +
              'regional rather than representative.',
            responses: [
              'The inference was reasonable given the evidence available — inductive ' +
              'strength is not undone by later discovery.',
              'It does show that no amount of confirming instances makes a universal ' +
              'claim safe, which is the lasting lesson.',
            ],
          },
        ],
      },
    ],
    conclusion: 'All swans are white.',
  },
  {
    id: 'wet-grass-invalid',
    title: 'The sprinkler ran',
    form: 'Affirming the consequent',
    tags: ['deductive', 'invalid', 'fallacy'],
    verdict: 'invalid',
    premises: [
      { label: 'P1', text: 'If the sprinkler ran, the grass is wet.' },
      {
        label: 'P2',
        text: 'The grass is wet.',
        objections: [
          {
            text:
              'Rain, a burst pipe or dew would also leave the grass wet, so wetness does not ' +
              'single out the sprinkler.',
            responses: [
              'This is exactly the point: the form is invalid because the consequent has ' +
              'other possible causes.',
            ],
          },
        ],
      },
    ],
    conclusion: 'The sprinkler ran.',
  },
  {
    id: 'passport-travel',
    title: 'A passport is not enough',
    form: 'Necessary but not sufficient',
    tags: ['conditions', 'logic'],
    verdict: 'invalid',
    premises: [
      { label: 'P1', text: 'You cannot board an international flight without a passport.' },
      { label: 'P2', text: 'Dara has a passport.' },
    ],
    conclusion: 'Dara can board an international flight.',
  },
  {
    id: 'fingerprints-tollens',
    title: 'Not the burglar',
    form: 'Modus tollens',
    tags: ['deductive', 'valid', 'logic'],
    verdict: 'valid',
    premises: [
      {
        label: 'P1',
        text: 'If Reeves broke the window, his fingerprints would be on the frame.',
        support: 'Anyone forcing that window must grip the frame; the surface holds prints well.',
      },
      {
        label: 'P2',
        text: 'His fingerprints are not on the frame.',
        support: 'The frame was dusted within the hour and only the owner\u2019s prints were found.',
        objections: [
          {
            text: 'He could have worn gloves, which would leave the conditional untouched.',
            responses: [
              'That attacks P1 rather than the form: if gloves were possible, breaking the ' +
              'window no longer guarantees prints.',
              'The argument survives only if P1 is stated carefully enough to exclude gloves.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Reeves did not break the window.',
  },
  {
    id: 'degree-denying',
    title: 'No degree, no job',
    form: 'Denying the antecedent',
    tags: ['deductive', 'invalid', 'fallacy'],
    verdict: 'invalid',
    premises: [
      { label: 'P1', text: 'If Mei has a law degree, she can practise law.' },
      {
        label: 'P2',
        text: 'Mei does not have a law degree.',
        objections: [
          {
            text:
              'Several jurisdictions still admit lawyers through apprenticeship or bar study ' +
              'without a degree, so the degree is not the only route.',
            responses: [
              'Precisely the point: the conditional makes the degree sufficient, not ' +
              'necessary, so denying it settles nothing.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Mei cannot practise law.',
  },
  {
    id: 'largest-prime',
    title: 'There is no largest prime',
    form: 'Reductio ad absurdum',
    tags: ['deductive', 'valid', 'reductio', 'mathematics'],
    verdict: 'sound',
    premises: [
      {
        label: 'P1',
        text: 'Assume, for contradiction, that there is a largest prime number.',
        support: 'Granted only to be destroyed \u2014 the assumption is the target, not a commitment.',
      },
      {
        label: 'P2',
        text: 'Multiply every prime together and add one. Call the result N.',
        support: 'A finite list of primes can always be multiplied, so N is well defined.',
      },
      {
        label: 'P3',
        text: 'N leaves remainder one when divided by every prime, so no prime divides it.',
      },
      {
        label: 'P4',
        text: 'So N is either prime itself or has a prime factor larger than any on the list.',
        objections: [
          {
            text: 'Does N have to be prime? The proof is sometimes stated as though it must be.',
            responses: [
              'It need not be. Either N is prime, or it has a prime factor not on the list. ' +
              'Both outcomes contradict the assumption equally.',
            ],
          },
        ],
      },
    ],
    conclusion: 'The assumption fails: there is no largest prime.',
  },
  {
    id: 'medicine-ponens',
    title: 'Take the antibiotics',
    form: 'Modus ponens',
    tags: ['deductive', 'valid', 'logic'],
    verdict: 'valid',
    premises: [
      { label: 'P1', text: 'If the infection is bacterial, antibiotics will help.' },
      {
        label: 'P2',
        text: 'The infection is bacterial.',
        support: 'Confirmed by culture rather than inferred from symptoms.',
      },
    ],
    conclusion: 'Antibiotics will help.',
  },
  {
    id: 'imported-cheese',
    title: 'The cheese is imported',
    form: 'Enthymeme',
    tags: ['hidden-premise', 'logic'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'This cheese is made from unpasteurised milk.',
        support: 'Stated on the label.',
      },
      {
        label: 'P2',
        text: '[Unstated] All unpasteurised cheese sold here is imported.',
        support: 'The hidden premise the argument needs \u2014 and the one worth challenging.',
        objections: [
          {
            text: 'Several domestic dairies produce unpasteurised cheese legally.',
            responses: [
              'Then the hidden premise is false and the argument collapses, even though ' +
              'nothing stated aloud was wrong.',
            ],
          },
        ],
      },
    ],
    conclusion: 'This cheese is imported.',
  },
  {
    id: 'reliable-witness',
    title: 'The witness is reliable',
    form: 'Circular reasoning',
    tags: ['fallacy', 'circular'],
    verdict: 'invalid',
    premises: [
      {
        label: 'P1',
        text: 'The witness is reliable, because everything she says is true.',
      },
      {
        label: 'P2',
        text: 'We know everything she says is true because she is a reliable witness.',
        objections: [
          {
            text:
              'Each premise is offered as support for the other, so the pair floats free of ' +
              'any independent evidence.',
            responses: [
              'Breaking the circle requires evidence from outside it \u2014 corroboration, ' +
              'physical records, or a verified past account.',
            ],
          },
        ],
      },
    ],
    conclusion: 'The witness is reliable.',
  },
  {
    id: 'law-equivocation',
    title: 'Laws need a lawgiver',
    form: 'Equivocation',
    tags: ['fallacy', 'equivocation'],
    verdict: 'invalid',
    premises: [
      {
        label: 'P1',
        text: 'Every law has a lawgiver.',
        support: 'True of legal statutes, which are enacted by legislatures.',
      },
      {
        label: 'P2',
        text: 'The laws of physics are laws.',
        support: 'True only in a different sense \u2014 descriptive regularities, not commands.',
        objections: [
          {
            text:
              '"Law" shifts meaning between the premises: prescriptive in P1, descriptive in ' +
              'P2. Write both senses out and the connection disappears.',
            responses: [
              'A defender must show the two senses really are one, which is a substantive ' +
              'claim requiring its own argument rather than a play on a shared word.',
            ],
          },
        ],
      },
    ],
    conclusion: 'The laws of physics have a lawgiver.',
  },
]
