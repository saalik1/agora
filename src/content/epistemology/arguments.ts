import type { Argument } from '@/types/content'

export const epistemologyArguments: Argument[] = [
  {
    id: 'lucky-guess',
    title: 'The lucky guess',
    form: 'Counterexample to true belief',
    tags: ['epistemology', 'knowledge', 'counterexample'],
    verdict: 'valid',
    premises: [
      { label: 'P1', text: 'Ines believes the coin will land heads, on no evidence at all.' },
      { label: 'P2', text: 'The coin lands heads, so her belief is true.' },
      {
        label: 'P3',
        text: 'Nobody would say Ines knew how the coin would land.',
        support: 'She would have been equally confident had it landed tails.',
        objections: [
          {
            text:
              'Perhaps she did know, and we are simply reluctant to credit lucky guesses ' +
              'because we cannot tell them apart from unlucky ones.',
            responses: [
              'The reluctance is not merely social: had the coin landed tails she would have ' +
              'been wrong, so nothing about her belief tracked the outcome.',
              'Any account on which guessing counts as knowing makes the concept useless for ' +
              'distinguishing reliable believers from fortunate ones.',
            ],
          },
        ],
      },
    ],
    conclusion: 'True belief is not sufficient for knowledge.',
  },
  {
    id: 'jtb-analysis',
    title: 'The classical analysis of knowledge',
    form: 'Definition',
    tags: ['epistemology', 'knowledge', 'definition'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'S believes that P.',
        support: 'You cannot know something you do not even believe.',
      },
      {
        label: 'P2',
        text: 'P is true.',
        support: 'Confident falsehood is not knowledge, however sincerely held.',
      },
      {
        label: 'P3',
        text: 'S is justified in believing that P.',
        support: 'This is what rules out lucky guesses.',
        objections: [
          {
            text:
              'Gettier cases satisfy all three conditions without producing knowledge, so the ' +
              'three are not jointly sufficient.',
            responses: [
              'Add a fourth condition — no false beliefs among the reasons.',
              'Replace justification with reliability, making it externalist.',
              'Treat knowledge as unanalysable and stop looking for conditions.',
            ],
          },
        ],
      },
    ],
    conclusion: 'S knows that P.',
  },
  {
    id: 'gettier-clock',
    title: 'The stopped clock',
    form: 'Gettier case',
    tags: ['epistemology', 'gettier', 'counterexample'],
    verdict: 'valid',
    premises: [
      {
        label: 'P1',
        text: 'Ravi looks at a reliable clock, which reads three o\u2019clock.',
        support: 'The clock has kept perfect time for years, so consulting it is reasonable.',
      },
      {
        label: 'P2',
        text: 'He forms the justified belief that it is three o\u2019clock.',
      },
      {
        label: 'P3',
        text: 'The clock stopped exactly twenty-four hours ago.',
      },
      {
        label: 'P4',
        text: 'It happens to be three o\u2019clock, so his belief is true.',
        objections: [
          {
            text:
              'Perhaps he was not justified after all, since he failed to check the clock was ' +
              'running.',
            responses: [
              'That standard would eliminate almost all ordinary justification — nobody ' +
              'verifies every instrument before trusting it.',
              'The case can be restated with a clock that stopped seconds before he looked, ' +
              'leaving no opportunity to notice.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Ravi has justified true belief without knowledge.',
  },
  {
    id: 'gettier-sheep',
    title: 'The sheep in the field',
    form: 'Gettier case',
    tags: ['epistemology', 'gettier', 'counterexample'],
    verdict: 'valid',
    premises: [
      {
        label: 'P1',
        text: 'Amara sees what looks exactly like a sheep in the field.',
      },
      {
        label: 'P2',
        text: 'She justifiably believes there is a sheep in the field.',
      },
      {
        label: 'P3',
        text: 'What she sees is a shaggy dog.',
      },
      {
        label: 'P4',
        text: 'A real sheep is grazing behind a hill, out of sight.',
        support: 'So her belief is true — but not because of anything she observed.',
        objections: [
          {
            text:
              'Her belief may really be about the dog rather than about the field, in which ' +
              'case it is simply false and no puzzle arises.',
            responses: [
              'The belief as stated is that there is a sheep in the field, which is true. ' +
              'Redescribing it as a belief about that animal changes the case.',
              'The case can be restated so she forms only the general belief, leaving no ' +
              'particular object for it to be about.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Justification and truth can come apart even when both are present.',
  },
  {
    id: 'regress-trilemma',
    title: "Agrippa's trilemma",
    form: 'Constructive dilemma',
    tags: ['epistemology', 'regress', 'justification'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Every justified belief is justified by some further belief.',
        objections: [
          {
            text: 'Foundationalists deny this: some beliefs are justified non-inferentially.',
            responses: [
              'Then explain what confers justification on a basic belief without appealing to ' +
              'another belief.',
              'Experience itself may justify without being a belief — though critics ask how ' +
              'something non-propositional can support a proposition.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'Such a chain must either run forever, loop back, or stop at something unjustified.',
        support: 'The three options are exhaustive: a chain either ends or it does not.',
      },
      {
        label: 'P3',
        text: 'An infinite chain justifies nothing, a loop is circular, and an arbitrary stop is unjustified.',
        objections: [
          {
            text: 'Coherentists argue a large mutually supporting web is not viciously circular.',
            responses: [
              'Critics reply that a coherent set of beliefs could still be entirely detached ' +
              'from how things are.',
            ],
          },
        ],
      },
    ],
    conclusion: 'No belief is justified.',
  },
  {
    id: 'testimony-reduction',
    title: 'Is testimony a basic source?',
    form: 'Dilemma',
    tags: ['epistemology', 'testimony'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Most of what anyone knows was learned from others rather than observed.',
      },
      {
        label: 'P2',
        text: 'Either testimony justifies directly, or it must be backed by inductive evidence of reliability.',
      },
      {
        label: 'P3',
        text: 'Few people have gathered such evidence, and children have none at all.',
        objections: [
          {
            text: 'Perhaps the evidence is implicit rather than consciously assembled.',
            responses: [
              'That concedes the reductionist cannot require conscious inference, which weakens ' +
              'the position considerably.',
              'It also fits externalism better than internalism, since the justification is not ' +
              'accessible to the believer.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Testimony appears to justify without being reducible to induction.',
  },
  {
    id: 'humean-induction',
    title: 'The problem of induction',
    form: 'Dilemma',
    tags: ['epistemology', 'induction', 'scepticism'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Inductive inference assumes the future will resemble the past.',
      },
      {
        label: 'P2',
        text: 'That assumption is not justified deductively — a change is perfectly conceivable.',
        support: 'No contradiction follows from supposing tomorrow differs entirely.',
      },
      {
        label: 'P3',
        text: 'Nor inductively, since arguing that it has always held assumes the very principle at issue.',
        objections: [
          {
            text: 'Perhaps induction needs no justification, being simply how reasoning works.',
            responses: [
              'This concedes Hume\u2019s point while declining to be troubled by it.',
              'Popper went further: science never justifies theories inductively, only ' +
              'eliminates them by falsification.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Induction has no non-circular justification.',
  },
  {
    id: 'cogito',
    title: 'Cogito ergo sum',
    form: 'Self-verifying inference',
    tags: ['epistemology', 'scepticism', 'certainty'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Suppose a deceiver misleads me about everything.',
      },
      {
        label: 'P2',
        text: 'To be deceived, I must exist to be deceived.',
        support: 'The doubt cannot be performed unless something performs it.',
        objections: [
          {
            text:
              'The inference may prove only that thinking is occurring, not that a persisting ' +
              'self does the thinking.',
            responses: [
              'Descartes claims only existence at the moment of thought, not identity over ' +
              'time.',
              'Lichtenberg suggested "there is thinking" would be the safer conclusion.',
            ],
          },
        ],
      },
    ],
    conclusion: 'I exist, whenever I think.',
  },
  {
    id: 'dream-scepticism',
    title: 'The dream argument',
    form: 'Sceptical argument',
    tags: ['epistemology', 'scepticism', 'dream'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Dreams can be subjectively indistinguishable from waking experience.',
        support: 'Recalled dreams frequently seemed entirely real while they lasted.',
      },
      {
        label: 'P2',
        text: 'If I cannot tell whether I am dreaming, I cannot know my experience is veridical.',
        objections: [
          {
            text:
              'Waking life is coherent and continuous in ways dreams are not, which does ' +
              'distinguish them.',
            responses: [
              'Judging coherence requires memory, whose reliability is exactly what is in ' +
              'question.',
              'The reply may still lower the probability of dreaming without ruling it out.',
            ],
          },
        ],
      },
    ],
    conclusion: 'I cannot know that my current experience is of a real world.',
  },
  {
    id: 'biv-argument',
    title: 'The brain in a vat',
    form: 'Modus tollens',
    tags: ['epistemology', 'scepticism', 'closure'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'If I know I have hands, I can know I am not a handless brain in a vat.',
        support: 'By epistemic closure: knowledge transmits across known entailment.',
        objections: [
          {
            text: 'Nozick denied closure, allowing knowledge that does not transmit this way.',
            responses: [
              'Denying closure has costs: it permits knowing P while failing to know an obvious ' +
              'consequence of P.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'I cannot know I am not a brain in a vat.',
        support: 'The scenario is constructed to be indistinguishable from the inside.',
        objections: [
          {
            text:
              'Putnam argued a lifelong envatted brain\u2019s words would refer to simulated things, ' +
              'so its claim "I am a brain in a vat" would be false either way.',
            responses: [
              'The argument may not reach someone recently envatted, whose words still refer to ' +
              'the outside world.',
            ],
          },
        ],
      },
    ],
    conclusion: 'I do not know I have hands.',
  },
  {
    id: 'moorean-response',
    title: "Moore's response",
    form: 'Modus tollens',
    tags: ['epistemology', 'scepticism', 'response'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'If I do not know I have hands, then the sceptical argument is sound.',
        support: 'Taking the sceptic\u2019s own reasoning at face value.',
      },
      {
        label: 'P2',
        text: 'I do know I have hands — here is one, and here is another.',
        support: 'This is more certain than any premise the sceptic can offer.',
        objections: [
          {
            text: 'Simply asserting the denial of the conclusion begs the question.',
            responses: [
              'Moore\u2019s point is comparative: a valid argument gives you a choice, and you ' +
              'should reject whichever claim you are least certain of.',
              'It shifts the burden onto the sceptic to show a premise is more credible than ' +
              'the existence of hands.',
            ],
          },
        ],
      },
    ],
    conclusion: 'One of the sceptic\u2019s premises must be false.',
  },
  {
    id: 'sceptical-argument',
    title: 'The general form of scepticism',
    form: 'Sceptical template',
    tags: ['epistemology', 'scepticism'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'There is a scenario S incompatible with my ordinary beliefs.',
      },
      {
        label: 'P2',
        text: 'S is indistinguishable from my actual situation from the inside.',
      },
      {
        label: 'P3',
        text: 'If I cannot rule out S, I do not know my ordinary beliefs are true.',
        objections: [
          {
            text:
              'Knowledge may not require ruling out every alternative — only the relevant ' +
              'ones, and exotic scenarios may not be relevant.',
            responses: [
              'The sceptic replies that relevance cannot be settled without begging the ' +
              'question, since what counts as relevant is exactly what is in dispute.',
              'Contextualists develop this into a full position: which alternatives are ' +
              'relevant shifts with the conversation.',
            ],
          },
        ],
      },
    ],
    conclusion: 'I do not know my ordinary beliefs are true.',
  },
]
