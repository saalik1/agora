import type { Concept } from '@/types/content'

/**
 * Concepts are the unit of mastery. Every exercise declares the concepts it
 * trains, and the review scheduler keys off those ids — so an id typo here
 * silently breaks the review loop. The integrity check in `content/index.ts`
 * exists to catch exactly that.
 */

export const concepts: Concept[] = [
  {
    id: 'argument',
    term: 'Argument',
    short: 'A set of statements where some are offered as reasons to accept another.',
    body:
      'An argument has two parts: premises, which are offered as reasons, and a conclusion, ' +
      'which those reasons are meant to support. What makes something an argument is not its ' +
      'tone or its subject but its structure — the presence of support. A calm paragraph with ' +
      'no reasons in it is not an argument; a heated one that gives reasons is.',
    relatedConceptIds: ['premise', 'conclusion', 'assertion'],
    relatedArgumentIds: ['socrates-mortal'],
    lessonIds: ['logic-1'],
  },
  {
    id: 'premise',
    term: 'Premise',
    short: 'A statement offered as a reason to accept the conclusion.',
    body:
      'Premises do the supporting work in an argument. A premise need not be true, and calling ' +
      'a statement a premise says nothing about whether it should be believed — only about the ' +
      'role it plays. The same sentence can be a premise in one argument and a conclusion in ' +
      'another.',
    relatedConceptIds: ['argument', 'conclusion'],
    relatedArgumentIds: ['socrates-mortal'],
    lessonIds: ['logic-1'],
  },
  {
    id: 'conclusion',
    term: 'Conclusion',
    short: 'The statement an argument is trying to establish.',
    body:
      'The conclusion is what the premises are for. It is often signalled by words like ' +
      '"therefore", "so", "hence" or "it follows that" — but not always, and those words can ' +
      'appear elsewhere. The reliable test is not vocabulary but direction: ask which statement ' +
      'the others are being used to support.',
    relatedConceptIds: ['argument', 'premise'],
    relatedArgumentIds: ['socrates-mortal'],
    lessonIds: ['logic-1'],
  },
  {
    id: 'assertion',
    term: 'Assertion',
    short: 'A claim put forward without any supporting reason.',
    body:
      'An assertion states something; an argument states something and gives grounds for it. ' +
      'Assertions are not defective — most of what anyone says is assertion, and that is fine. ' +
      'The distinction matters because an assertion cannot be evaluated for validity or ' +
      'soundness. There is no reasoning there to assess, only a claim to accept or reject.',
    relatedConceptIds: ['argument', 'premise'],
    relatedArgumentIds: [],
    lessonIds: ['logic-1'],
  },
  {
    id: 'deduction',
    term: 'Deductive reasoning',
    short: 'Reasoning where the premises, if true, guarantee the conclusion.',
    body:
      'A deductive argument aims at certainty. If its form is good and its premises are true, ' +
      'the conclusion cannot be false — there is no gap left for luck to fill. Deduction never ' +
      'tells you anything the premises did not already contain; its value is in making that ' +
      'content explicit and inescapable.',
    relatedConceptIds: ['induction', 'validity', 'soundness'],
    relatedArgumentIds: ['socrates-mortal', 'library-closed'],
    lessonIds: ['logic-3'],
  },
  {
    id: 'induction',
    term: 'Inductive reasoning',
    short: 'Reasoning where the premises make the conclusion likely without guaranteeing it.',
    body:
      'Inductive arguments go beyond their premises: from many observed cases to a general ' +
      'rule, or from past patterns to a future one. That leap is what makes induction useful ' +
      'and what makes it fallible. A strong inductive argument can still have true premises ' +
      'and a false conclusion — which is not a defect in the reasoning, but its nature.',
    relatedConceptIds: ['deduction', 'counterexample'],
    relatedArgumentIds: ['rain-street', 'swans-white'],
    lessonIds: ['logic-3'],
  },
  {
    id: 'validity',
    term: 'Validity',
    short: 'A property of form: true premises could not yield a false conclusion.',
    body:
      'Validity is about structure, not truth. An argument is valid when its form makes it ' +
      'impossible for the premises to be true while the conclusion is false. A valid argument ' +
      'can have wildly false premises and a false conclusion — validity says only that IF the ' +
      'premises held, the conclusion would have to follow. This is the single most ' +
      'misunderstood term in logic.',
    relatedConceptIds: ['soundness', 'deduction', 'counterexample'],
    relatedArgumentIds: ['socrates-mortal', 'library-closed', 'cats-mammals'],
    lessonIds: ['logic-4'],
  },
  {
    id: 'soundness',
    term: 'Soundness',
    short: 'A valid argument whose premises are actually true.',
    body:
      'Soundness combines two separate checks: is the form valid, and are the premises true? ' +
      'Both must hold. An unsound argument may fail either test, so calling an argument ' +
      'unsound does not say which part broke. A sound argument has a true conclusion ' +
      'guaranteed — which is precisely why soundness is hard to establish.',
    relatedConceptIds: ['validity', 'deduction'],
    relatedArgumentIds: ['socrates-mortal', 'cats-mammals'],
    lessonIds: ['logic-5'],
  },
  {
    id: 'necessary-condition',
    term: 'Necessary condition',
    short: 'Something that must hold for a claim to be true — without it, no.',
    body:
      'A is necessary for B when B cannot happen without A. Oxygen is necessary for fire. ' +
      'Necessary conditions rule things out: their absence settles the matter, but their ' +
      'presence guarantees nothing. Most bad reasoning about conditions comes from treating a ' +
      'necessary condition as though it were sufficient.',
    relatedConceptIds: ['sufficient-condition', 'conditional'],
    relatedArgumentIds: [],
    lessonIds: ['logic-6'],
  },
  {
    id: 'sufficient-condition',
    term: 'Sufficient condition',
    short: 'Something that, on its own, settles that a claim is true.',
    body:
      'A is sufficient for B when A guarantees B. Being a square is sufficient for being a ' +
      'rectangle. Sufficient conditions rule things in: their presence settles the matter, but ' +
      'their absence proves nothing, since some other route to B may exist.',
    relatedConceptIds: ['necessary-condition', 'conditional'],
    relatedArgumentIds: [],
    lessonIds: ['logic-6'],
  },
  {
    id: 'conditional',
    term: 'Conditional',
    short: 'An if-then statement linking an antecedent to a consequent.',
    body:
      '"If P, then Q" asserts a link, not either part. The antecedent P is the condition; the ' +
      'consequent Q is what follows. Asserting a conditional commits you to neither P nor Q on ' +
      'its own — only to the connection. Reading a conditional as though it also asserted its ' +
      'antecedent is the root of several formal fallacies.',
    relatedConceptIds: ['necessary-condition', 'sufficient-condition'],
    relatedArgumentIds: ['library-closed'],
    lessonIds: ['logic-6'],
  },
  {
    id: 'counterexample',
    term: 'Counterexample',
    short: 'A case that fits the premises but breaks the conclusion.',
    body:
      'To show an argument form invalid, describe a possible situation where the premises are ' +
      'true and the conclusion false. The case need not be actual — only possible. Against a ' +
      'universal claim, a single genuine counterexample is decisive, which is why universal ' +
      'claims are so much riskier to assert than they look.',
    relatedConceptIds: ['validity', 'induction'],
    relatedArgumentIds: ['cats-mammals', 'swans-white'],
    lessonIds: ['logic-4'],
  },
  {
    id: 'modus-ponens',
    term: 'Modus ponens',
    short: 'If P then Q; P; therefore Q. Valid.',
    body:
      'The most basic valid conditional form. Given a conditional and its antecedent, the ' +
      'consequent follows with certainty. Almost all everyday reasoning that feels like ' +
      '"applying a rule to a case" is modus ponens underneath.',
    relatedConceptIds: ['conditional', 'modus-tollens', 'affirming-consequent', 'validity'],
    relatedArgumentIds: ['library-closed'],
    lessonIds: ['logic-7'],
  },
  {
    id: 'modus-tollens',
    term: 'Modus tollens',
    short: 'If P then Q; not Q; therefore not P. Valid.',
    body:
      'Reasoning backwards from a failed consequent. Because the conditional makes Q necessary ' +
      'for P, the absence of Q rules P out. This is the form behind every test that works by ' +
      'looking for what an idea predicts and finding it missing.',
    relatedConceptIds: ['conditional', 'modus-ponens', 'denying-antecedent', 'necessary-condition'],
    relatedArgumentIds: ['fingerprints-tollens'],
    lessonIds: ['logic-8'],
  },
  {
    id: 'affirming-consequent',
    term: 'Affirming the consequent',
    short: 'If P then Q; Q; therefore P. Invalid.',
    body:
      'A formal fallacy that mimics modus ponens. Because a conditional leaves open that Q has ' +
      'other causes, finding Q does not establish P. The error is so easy to miss because the ' +
      'conclusion is often true anyway — just not established by this reasoning.',
    relatedConceptIds: ['modus-ponens', 'conditional', 'counterexample', 'sufficient-condition'],
    relatedArgumentIds: ['wet-grass-invalid'],
    lessonIds: ['logic-9'],
  },
  {
    id: 'denying-antecedent',
    term: 'Denying the antecedent',
    short: 'If P then Q; not P; therefore not Q. Invalid.',
    body:
      'A formal fallacy that mimics modus tollens. The conditional makes P sufficient for Q but ' +
      'not necessary, so P failing leaves other routes to Q open. Recognising it usually means ' +
      'asking: could Q happen some other way?',
    relatedConceptIds: ['modus-tollens', 'conditional', 'counterexample', 'necessary-condition'],
    relatedArgumentIds: ['degree-denying'],
    lessonIds: ['logic-10'],
  },
  {
    id: 'contradiction',
    term: 'Contradiction',
    short: 'A claim and its denial asserted together — necessarily false.',
    body:
      'A contradiction has the form "P and not P". It cannot be true under any circumstances, ' +
      'which makes it the most powerful thing to find in an opponent\u2019s position: deriving one ' +
      'shows something in the assumptions must go.',
    relatedConceptIds: ['reductio', 'validity'],
    relatedArgumentIds: ['largest-prime'],
    lessonIds: ['logic-11'],
  },
  {
    id: 'reductio',
    term: 'Reductio ad absurdum',
    short: 'Assume a claim, derive a contradiction, conclude the claim is false.',
    body:
      'Rather than arguing against a claim directly, you grant it and show it destroys itself. ' +
      'If assuming P leads validly to a contradiction, P cannot be true. The strength of the ' +
      'method is that it requires no premises your opponent rejects \u2014 you use their own.',
    relatedConceptIds: ['contradiction', 'modus-tollens', 'validity'],
    relatedArgumentIds: ['largest-prime'],
    lessonIds: ['logic-11'],
  },
  {
    id: 'hidden-premise',
    term: 'Hidden premise',
    short: 'An unstated assumption the argument needs in order to work.',
    body:
      'Most real arguments leave something out, usually because it seems too obvious to say. ' +
      'Surfacing it matters because the hidden premise is often the weakest part \u2014 people ' +
      'omit exactly the assumptions they have not examined.',
    relatedConceptIds: ['premise', 'charity', 'validity'],
    relatedArgumentIds: ['imported-cheese'],
    lessonIds: ['logic-13'],
  },
  {
    id: 'charity',
    term: 'Principle of charity',
    short: 'Interpret an argument in its strongest reasonable form before criticising it.',
    body:
      'When a position admits several readings, address the best one. This is not politeness ' +
      'but self-interest: defeating a weak version teaches you nothing and leaves the real ' +
      'position standing. Charity has limits \u2014 it does not require inventing a better argument ' +
      'than anyone actually made.',
    relatedConceptIds: ['straw-man', 'hidden-premise', 'burden-of-proof'],
    relatedArgumentIds: [],
    lessonIds: ['logic-14'],
  },
  {
    id: 'burden-of-proof',
    term: 'Burden of proof',
    short: 'The obligation to support a claim rests on whoever asserts it.',
    body:
      'Making a claim incurs a duty to back it. The burden does not shift merely because ' +
      'someone doubts you, and "you cannot disprove it" is not support. Where the burden sits ' +
      'is often the real disagreement in a dispute \u2014 both sides claiming to hold the default.',
    relatedConceptIds: ['charity', 'assertion', 'argument'],
    relatedArgumentIds: [],
    lessonIds: ['logic-14'],
  },
  {
    id: 'straw-man',
    term: 'Straw man',
    short: 'Refuting a distorted version of a position instead of the real one.',
    body:
      'The straw man replaces a position with a weaker lookalike, defeats that, and claims ' +
      'victory. It often happens honestly, through careless paraphrase rather than bad faith. ' +
      'The test is whether the person would recognise their view in your description.',
    relatedConceptIds: ['charity', 'ad-hominem'],
    relatedArgumentIds: [],
    lessonIds: ['logic-15'],
  },
  {
    id: 'ad-hominem',
    term: 'Ad hominem',
    short: 'Attacking the arguer rather than the argument.',
    body:
      'A claim stands or falls on its support, not on who makes it. Not every remark about a ' +
      'person is fallacious \u2014 relevant expertise, conflicts of interest and track records bear ' +
      'on how much to trust testimony. It becomes a fallacy when the personal point is offered ' +
      'as a reason the argument fails.',
    relatedConceptIds: ['straw-man', 'argument'],
    relatedArgumentIds: [],
    lessonIds: ['logic-15'],
  },
  {
    id: 'circular-reasoning',
    term: 'Circular reasoning',
    short: 'Assuming the conclusion among the premises.',
    body:
      'Also called begging the question. The argument is valid \u2014 trivially so, since the ' +
      'conclusion is already inside the premises \u2014 but it gives no reason to accept anything. ' +
      'Circularity is often disguised by restating the conclusion in different words.',
    relatedConceptIds: ['equivocation', 'premise', 'validity'],
    relatedArgumentIds: ['reliable-witness'],
    lessonIds: ['logic-16'],
  },
  {
    id: 'equivocation',
    term: 'Equivocation',
    short: 'Using one word in two senses so an argument only appears to connect.',
    body:
      'The argument looks valid because the same word appears twice, but the word has shifted ' +
      'meaning between premises. Once each sense is written out separately, the link vanishes. ' +
      'Words like "natural", "free" and "law" are frequent culprits.',
    relatedConceptIds: ['circular-reasoning', 'validity'],
    relatedArgumentIds: ['law-equivocation'],
    lessonIds: ['logic-16'],
  },
  {
    id: 'false-dilemma',
    term: 'False dilemma',
    short: 'Presenting two options as exhaustive when others exist.',
    body:
      'The argument forces a choice between alternatives that do not cover the ground. Real ' +
      'dilemmas exist \u2014 sometimes there genuinely are only two options \u2014 so the question is ' +
      'always whether the list is complete, not whether it is short.',
    relatedConceptIds: ['composition-division', 'counterexample'],
    relatedArgumentIds: [],
    lessonIds: ['logic-17'],
  },
  {
    id: 'composition-division',
    term: 'Composition and division',
    short: 'Assuming parts and wholes must share their properties.',
    body:
      'Composition infers from parts to whole: every player is excellent, so the team is. ' +
      'Division runs the other way. Both fail because some properties do not transfer \u2014 a ' +
      'wall can be heavy though each brick is light. Some properties do transfer, so neither ' +
      'inference is always wrong.',
    relatedConceptIds: ['false-dilemma', 'counterexample'],
    relatedArgumentIds: [],
    lessonIds: ['logic-17'],
  },
]
