import type { Argument } from '@/types/content'

export const metaphysicsArguments: Argument[] = [
  {
    id: 'contingency-argument',
    title: 'The argument from contingency',
    form: 'Cosmological argument',
    tags: ['metaphysics', 'contingency', 'psr', 'religion'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Everything that exists contingently has an explanation of its existence.',
        support: 'An application of the Principle of Sufficient Reason.',
        objections: [
          {
            text: 'The PSR is not self-evident, and denying it entails no contradiction.',
            responses: [
              'It is presupposed throughout science and ordinary reasoning, which is some ' +
              'evidence for it.',
              'A weaker version restricted to contingent things may suffice for the argument ' +
              'while being easier to defend.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'The totality of contingent things exists contingently.',
        objections: [
          {
            text:
              'This may commit the fallacy of composition: each part being contingent does not ' +
              'make the whole contingent.',
            responses: [
              'Contingency plausibly does transfer, unlike weight — a collection of things ' +
              'that each might not have existed might itself not have existed.',
              'Critics reply that the whole may be necessary even if no part is, as a set can ' +
              'have properties its members lack.',
            ],
          },
        ],
      },
      {
        label: 'P3',
        text: 'That explanation cannot itself be contingent, on pain of regress.',
        support: 'Explaining contingent things by further contingent things defers the question.',
      },
    ],
    conclusion: 'There exists a necessary being that explains the contingent world.',
  },
  {
    id: 'psr-defence',
    title: 'Is the PSR defensible?',
    form: 'Dilemma',
    tags: ['metaphysics', 'psr'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Either the PSR is itself explained, or it is a brute fact.',
      },
      {
        label: 'P2',
        text: 'If it is a brute fact, it refutes itself by being unexplained.',
        objections: [
          {
            text: 'Necessary truths may be self-explanatory rather than brute.',
            responses: [
              'That requires showing the PSR is necessary, which is precisely what is in ' +
              'dispute.',
            ],
          },
        ],
      },
      {
        label: 'P3',
        text: 'If it is explained, the explanation appears to presuppose it.',
      },
    ],
    conclusion: 'The PSR resists non-circular defence.',
  },
  {
    id: 'one-over-many',
    title: 'The One Over Many',
    form: 'Argument for universals',
    tags: ['metaphysics', 'universals'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Two red apples genuinely have something in common.',
        support: 'The resemblance is not invented by us; it holds whether or not anyone looks.',
      },
      {
        label: 'P2',
        text: 'What they have in common cannot be a particular, since particulars are not shared.',
        objections: [
          {
            text:
              'Nominalists reply that resemblance is primitive: the apples simply resemble ' +
              'each other, with no shared entity involved.',
            responses: [
              'Then resemblance itself looks like a universal, since many pairs share it.',
              'Nominalists answer that this regress is harmless, or bite the bullet and treat ' +
              'resemblance as unanalysable.',
            ],
          },
        ],
      },
    ],
    conclusion: 'There exist universals, shared by many particulars.',
  },
  {
    id: 'two-spheres',
    title: 'The two spheres',
    form: 'Counterexample',
    tags: ['metaphysics', 'identity', 'counterexample'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Imagine a universe containing nothing but two exactly similar iron spheres.',
      },
      {
        label: 'P2',
        text: 'They share every qualitative property.',
        objections: [
          {
            text:
              'They differ in relational properties: each is two miles from a sphere, and each ' +
              'is not identical to the other.',
            responses: [
              'Distance from a sphere is shared by both, so it fails to distinguish them.',
              'Appealing to "not identical to that one" presupposes the distinctness it was ' +
              'meant to establish.',
            ],
          },
        ],
      },
      {
        label: 'P3',
        text: 'Nevertheless there are two of them, not one.',
      },
    ],
    conclusion: 'The identity of indiscernibles is false.',
  },
  {
    id: 'ship-of-theseus-arg',
    title: 'The Ship of Theseus',
    form: 'Paradox',
    tags: ['metaphysics', 'identity', 'persistence'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Replacing one plank leaves the same ship.',
        support: 'Otherwise every repair would destroy the object, which is absurd.',
      },
      {
        label: 'P2',
        text: 'Repeating that step eventually replaces every plank.',
      },
      {
        label: 'P3',
        text: 'The removed planks are reassembled into a complete ship.',
      },
      {
        label: 'P4',
        text: 'Both resulting ships have a claim to be the original.',
        objections: [
          {
            text: 'Perhaps identity is settled by continuity of function and location.',
            responses: [
              'That favours the repaired ship, but looks like a decision about how to use the ' +
              'word rather than a discovery about the object.',
              'Perdurantists dissolve the puzzle by treating each ship as a distinct ' +
              'four-dimensional object sharing earlier temporal parts.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Identity over time cannot consist in material continuity alone.',
  },
  {
    id: 'humean-causation',
    title: 'Hume on necessary connection',
    form: 'Sceptical argument',
    tags: ['metaphysics', 'causation', 'empiricism'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'All we observe is one event following another.',
        support: 'No amount of watching a collision reveals a connection over and above the sequence.',
      },
      {
        label: 'P2',
        text: 'We never observe the necessity said to link cause and effect.',
        objections: [
          {
            text: 'We do experience causal power directly, in our own agency.',
            responses: [
              'Hume replies that introspection reveals only that movement follows volition, ' +
              'not how or why.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Our idea of necessary connection comes from habit, not observation.',
  },
  {
    id: 'hilbert-hotel-arg',
    title: "Hilbert's Hotel",
    form: 'Reductio',
    tags: ['metaphysics', 'infinity', 'religion'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'Suppose a hotel with infinitely many rooms, all occupied.',
      },
      {
        label: 'P2',
        text: 'A new guest can be accommodated by moving each occupant along one room.',
        support: 'The hotel was full, yet a room opens without anyone leaving.',
      },
      {
        label: 'P3',
        text: 'Infinitely many new guests can be accommodated by moving everyone to double their room number.',
        objections: [
          {
            text: 'These results are counterintuitive but not contradictory, so they show nothing impossible.',
            responses: [
              'Defenders reply that the operations yield genuinely inconsistent arithmetic: ' +
              'subtracting infinity from infinity gives no determinate answer.',
              'Critics answer that this reflects the limits of subtraction on transfinite ' +
              'cardinals, not an impossibility in the world.',
            ],
          },
        ],
      },
    ],
    conclusion: 'An actual infinite cannot exist in reality.',
  },
  {
    id: 'ab-theory-dispute',
    title: 'Does time really pass?',
    form: 'Dispute',
    tags: ['metaphysics', 'time', 'religion'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'On the A-theory, the present is objectively privileged and things come into being.',
        support: 'This matches experience, in which passage seems undeniable.',
        objections: [
          {
            text:
              'Special relativity denies an absolute present: simultaneity depends on the ' +
              'observer\u2019s frame.',
            responses: [
              'A-theorists may adopt a neo-Lorentzian interpretation preserving absolute ' +
              'simultaneity while matching the empirical results.',
              'Critics regard that as paying a heavy theoretical price to save an intuition.',
            ],
          },
        ],
      },
      {
        label: 'P2',
        text: 'On the B-theory, all times are equally real and passage is perspectival.',
        objections: [
          {
            text: 'This makes the experience of passage systematically illusory.',
            responses: [
              'B-theorists reply that the experience is explained rather than denied: each ' +
              'moment contains memories of earlier ones.',
            ],
          },
        ],
      },
    ],
    conclusion: 'Whether anything can "begin to exist" depends on which theory is correct.',
  },
  {
    id: 'consequence-argument',
    title: 'The consequence argument',
    form: 'Argument for incompatibilism',
    tags: ['metaphysics', 'free-will', 'determinism'],
    verdict: 'contested',
    premises: [
      {
        label: 'P1',
        text: 'If determinism is true, my acts follow from the distant past plus the laws.',
      },
      {
        label: 'P2',
        text: 'I have no power over the distant past or over the laws of nature.',
        support: 'Neither was up to me, and neither can now be altered.',
      },
      {
        label: 'P3',
        text: 'What follows necessarily from what I cannot change, I cannot change.',
        objections: [
          {
            text:
              'Compatibilists deny that freedom requires the power to do otherwise — it ' +
              'requires acting from your own reasons without compulsion.',
            responses: [
              'Incompatibilists call this changing the subject, since the ability to do ' +
              'otherwise is what most people mean.',
              'Compatibilists reply that the ordinary notion is conditional: you could have ' +
              'done otherwise had you chosen to, which determinism permits.',
            ],
          },
        ],
      },
    ],
    conclusion: 'If determinism is true, nobody has the power to do otherwise.',
  },
]
