// Final Assessment — AI Foundations (student course)
// 20 questions drawn from all six units (U1: 3, U2: 4, U3: 3, U4: 4, U5: 3, U6: 3).
// Correct-answer positions balanced 5/5/5/5 across indices 0-3.

export default {
  title: 'Final Assessment',
  description:
    'Twenty questions drawn from all six units of AI Foundations. Score 75% or higher (15 of 20) to pass and earn your certificate. You have unlimited retakes, and the questions shuffle on every attempt — so understanding the ideas beats memorizing an answer order. If a topic feels shaky, revisit that unit\'s key takeaways first.',
  passingScore: 75,
  questions: [
    // ------------------------------------------------------------------
    // Unit 1 — What Is AI, Really? (3 questions)
    // ------------------------------------------------------------------
    {
      question:
        "Your school installs two new systems: a door that unlocks when it recognizes a student's face, and a bell that rings at exactly 8:00 every morning. Which one is AI, and why?",
      options: [
        'Both — any automated computer system counts as AI once it runs on its own',
        'The bell — keeping precise time on a fixed schedule takes machine smarts',
        'The face-unlock door — it learned from example faces and predicts on new ones',
        'Neither — nothing is real AI until a system matches human general intelligence',
      ],
      correct: 2,
      explanation:
        "Face recognition perceives messy real-world input and predicts from patterns learned from example faces — it can even be wrong, the telltale sign of a learned system. The bell is like a vending machine or a basic thermostat: one fixed rule, one output, no learning. 'Both are automated' is the classic conflation of automation with intelligence — fixed-rule automation has never counted as AI, no matter how precise it is.",
    },
    {
      question:
        "A startup pitches investors: 'Human-level general AI in 18 months — guaranteed.' Based on the history of AI booms and winters, what is the wisest response?",
      options: [
        'Ask what new compute, data, or algorithms would make that leap possible',
        'Invest immediately — AI progress has only ever accelerated, never stalled',
        'Dismiss it — AI hype has always collapsed before delivering anything real',
        'Assume it is true, since narrow AI already beats humans at chess and Go',
      ],
      correct: 0,
      explanation:
        'Every boom and bust in AI history tracks three ingredients: compute, data, and algorithms, and overpromising beyond what those ingredients could deliver is exactly how the AI winters started. Blind faith and blanket cynicism both miss the actual historical pattern — genuine breakthroughs alternating with busted hype. Narrow-AI wins at chess and Go say nothing about general AI, which still does not exist.',
    },
    {
      question:
        'A city needs two pieces of software: (A) one that computes exact bus fares from the published fare table, and (B) one that catches fare-evasion tricks that scammers keep changing. Which approach fits each?',
      options: [
        'Machine learning for both — learned models beat hand-written rules anywhere',
        'Rules for A, whose logic is fully known; learning for B, whose tricks vary',
        'Rules for both, because any system that touches money must be hand-written',
        'Learning for A, to catch fare edge cases; rules for B, one per known scam',
      ],
      correct: 1,
      explanation:
        "The question is never which approach is smarter — it's which fits the problem. A fare table is known, finite logic where a wrong answer is unacceptable, so rules win and a learned model would only replace a guaranteed-correct lookup with a statistical guess. Detecting evolving scams is the signature case for learning, because retraining absorbs new tactics without hand-patching rules forever — 'newer is always better' is the misconception Unit 1 exists to kill.",
    },

    // ------------------------------------------------------------------
    // Unit 2 — Machine Learning: Learning from Data (4 questions)
    // ------------------------------------------------------------------
    {
      question:
        'A sleep-tracking app records each user\'s bedtime, screen time, and caffeine intake, plus whether that user reported feeling rested the next day. It trains a model to predict restedness for new users. Which part of the data is the label?',
      options: [
        'Bedtime, since it is the input that most strongly affects sleep quality',
        'Screen time and caffeine intake, the two habits a user can actually change',
        'All four columns, since the model learns from every one of them together',
        'Whether the user reported feeling rested the following day',
      ],
      correct: 3,
      explanation:
        'The label is the answer the model learns to predict — here, rested or not — and the other three columns are features, the measurable input clues. Features and the label play different roles: feeding the label back in as a feature would hand the model the very thing it is supposed to figure out. And no single feature is "the" input either — models combine many clues, not just the strongest one.',
    },
    {
      question:
        'Your image classifier scores 99% on its training photos but only 58% on photos it has never seen. What is the most likely diagnosis, and the right fix?',
      options: [
        'It memorized the training photos — train it on more varied examples',
        'The test photos must be mislabeled — swap in a cleaner, easier test set',
        'Nothing is wrong — report the 99%, its best measured score',
        'It has too much data to memorize — cut the training set down',
      ],
      correct: 0,
      explanation:
        "A large train-test gap is the classic signature of memorization: brilliant on seen examples, weak on new ones — like acing last year's exact test but failing new questions. Only unseen data measures real learning, so the fix happens on the training side — more varied examples, and judge the model only on held-out data. Reporting the 99% or shopping for an easier test hides the problem instead of solving it, and shrinking the training set makes generalization worse, not better.",
    },
    {
      question:
        "A rare condition affects 3 in 100 students. A vendor advertises its screening model as '97% accurate.' Why should the school nurse be skeptical of that headline number?",
      options: [
        '97% accuracy is impossibly high for any real medical screening model',
        'A 3-in-100 condition is too rare for any model to learn to detect',
        "Always guessing 'healthy' would score about 97% and catch zero cases",
        'Accuracy applies only to text tasks like spam filtering, not to health',
      ],
      correct: 2,
      explanation:
        "When one label dominates, accuracy flatters lazy models: with 97 of 100 students healthy, the do-nothing baseline matches the vendor's headline while missing every case that matters. High accuracy means little until you ask 'accurate on what?' and compare it against that boring always-predict-the-majority baseline. The other options invent limits that don't exist — 97% is easy to reach on an imbalanced problem, rare conditions are learnable when you measure the right thing, and accuracy is defined for any classifier.",
    },
    {
      question:
        "A city is considering face-recognition software that a vendor advertises as '96% accurate overall.' Based on the bias lesson, what is the single most important follow-up question?",
      options: [
        'How many millions of faces was it trained on before release?',
        'What is its accuracy for each demographic group separately?',
        'Does it use a decision tree, a neural network, or something else?',
        'How quickly does it process a crowded station at rush hour?',
      ],
      correct: 1,
      explanation:
        "Overall accuracy is a weighted average dominated by the majority group — the worked example showed 91.5% overall coexisting with a 60% score for a smaller group, a 4-in-10 failure rate rendered nearly invisible. Per-group accuracy is the number that reveals who the system fails, which is exactly what the Gender Shades research exposed. Dataset size and model type don't answer the fairness question, and speed is irrelevant to it.",
    },

    // ------------------------------------------------------------------
    // Unit 3 — Neural Networks: How Deep Learning Works (3 questions)
    // ------------------------------------------------------------------
    {
      question:
        'An artificial neuron has weights 3 and 5, a bias of −6, and outputs 1 only when its total is greater than 0. Both inputs are 1. What does it output?',
      options: [
        '0 — a negative bias means the neuron can never fire at all',
        '2 — a neuron outputs the raw total it just computed',
        '0 — two inputs of 1 cannot outweigh a bias of −6',
        '1 — the total is 3 + 5 − 6 = 2, which is greater than 0',
      ],
      correct: 3,
      explanation:
        "Run the four steps: multiply inputs by weights (3 and 5), add them (8), add the bias (8 − 6 = 2), then apply the activation rule — 2 is greater than 0, so the output is 1. The '2' option is the classic trap: a neuron outputs the activation of its total, never the raw total itself. And a negative bias doesn't forbid firing — it just raises the bar of evidence the weighted inputs must clear.",
    },
    {
      question:
        "In the walking-downhill-in-fog picture of gradient descent, what do 'your altitude' and 'one step' correspond to?",
      options: [
        'Altitude is the loss, and a step adjusts every weight slightly',
        'Altitude is the network depth, and a step adds another layer to it',
        'Altitude is the dataset size, and a step drops one bad example',
        'Altitude is the accuracy, and a step files away one training photo',
      ],
      correct: 0,
      explanation:
        'Your position on the hill is the current setting of all the weights, your altitude is the loss — how wrong the network currently is — and each step nudges every weight slightly in the direction that lowers it, repeated millions of times. During this walk the architecture and the dataset stay fixed: gradient descent changes weights and nothing else. The storage option is the memorization misconception — a trained network keeps tuned weights, not a photo album of its training data.',
    },
    {
      question:
        'A clinic in a region with no reliable internet wants an app that flags one specific skin condition from photos, and patient images must never leave the phone. What should the engineers build?',
      options: [
        'A frontier-scale model in the cloud, since bigger is always more accurate',
        'Hand-written rules covering every appearance the condition can take',
        'A small vision model trained for that one condition, run on the phone',
        'A frontier model downloaded and run locally on each clinic phone',
      ],
      correct: 2,
      explanation:
        "A narrow task, offline operation, and on-device privacy form the exact sweet spot for a small specialized model trained on labeled photos — pick the smallest model that meets the accuracy target. The cloud option breaks both constraints at once (no reliable internet, and images would leave the phone), and a frontier model cannot simply be downloaded because it does not fit on a phone. Hand-written rules fail for Unit 1's reason: nobody can enumerate the visual variety of a skin condition.",
    },

    // ------------------------------------------------------------------
    // Unit 4 — Generative AI: How ChatGPT Actually Works (4 questions)
    // ------------------------------------------------------------------
    {
      question:
        "A classmate says: 'ChatGPT is basically a search engine — it looks up answers in its database.' What actually happens when a chatbot answers your question?",
      options: [
        'It searches a stored copy of the internet and pastes the closest match',
        'It predicts one token at a time from patterns stored in its weights',
        'It browses the live web and summarizes whatever the top results say',
        'It plans the whole answer internally, then renders that plan as English',
      ],
      correct: 1,
      explanation:
        "Every answer is the next-token game in a loop: score the possible next tokens by likelihood, pick one, append it, repeat — often hundreds of times, with nothing looked up. The training text was compressed into billions of weights, so no database is left to search, and those weights froze when training ended — which is why the model has a knowledge cutoff. The 'stored copy' option is the most common misconception about chatbots, and it matters because it wrongly implies answers were retrieved and therefore checked.",
    },
    {
      question:
        "You search a shopping site for 'cheap sneakers' and it correctly surfaces a page titled 'affordable running shoes' — even though the two phrases share no words. Which mechanism best explains this?",
      options: [
        'The site relies on a synonym dictionary that human editors wrote by hand',
        'The site matched the two phrases by how similarly they are spelled',
        'A human employee tagged both phrases under the same product category',
        'Embeddings put both phrases close together in a learned meaning-space',
      ],
      correct: 3,
      explanation:
        "Words and phrases used in similar contexts get pushed to nearby coordinates in embedding space, so a small distance signals similar meaning — the same geometry behind the famous king − man + woman ≈ queen result. Nobody programs this in; it emerges from training on how words behave across billions of sentences. Hand-written synonym lists can't cover every phrasing, and spelling similarity fails outright here — 'cheap' and 'affordable' share almost no letters.",
    },
    {
      question:
        "You write a flawless four-part prompt — role, task, context, format — asking for statistics on an obscure topic, and add 'only use verified, real sources.' What can this prompt still NOT guarantee?",
      options: [
        'That the statistics and the sources it cites are real',
        'That the output follows the four-part format you requested',
        'That the tone matches the expert role you assigned it',
        'That the answer sits at the reading level you specified',
      ],
      correct: 0,
      explanation:
        "Prompting controls the shape of the answer — format, tone, persona, reading level — because those are exactly what text continuation does well. Truth sits outside the mechanism: no wording adds a fact-check to next-token prediction, so 'only use real sources' is a wish rather than a switch, and it can even make fabricated numbers sound more verified. An obscure topic raises the risk further, because hallucination is worst where training data runs thin — verifying substance stays your job.",
    },
    {
      question:
        "A shocking video of a famous singer 'admitting to a crime' was posted an hour ago by one unfamiliar account, and your friend wants to repost it. What is the best first move?",
      options: [
        'Zoom in on the face for visual glitches, and repost if none show up',
        "Repost it captioned 'real or fake?' so followers can decide for themselves",
        'Check whether established news outlets are independently reporting it',
        'Trust it — video this realistic is still far too hard to fake convincingly',
      ],
      correct: 2,
      explanation:
        "A single dramatic clip from one anonymous account is the classic synthetic-media signature; an event that big would leave traces at several unrelated outlets within the hour. Artifact-hunting is the tempting move, but every visual tell has an expiration date — newer generators fix the flaws detection relies on — so context verification is the check that keeps working. And sharing 'with a question mark' still spreads the fake; doubt in the caption doesn't slow the video down.",
    },

    // ------------------------------------------------------------------
    // Unit 5 — AI, Ethics, and Society (3 questions)
    // ------------------------------------------------------------------
    {
      question:
        "A lending model is never given applicants' race as an input, yet its approval rates still differ sharply by race. What best explains this?",
      options: [
        'Someone must have secretly re-added race to the training dataset',
        'The model learned proxies like zip code that correlate with race',
        'It is random noise that a larger training dataset would wash out',
        'The gap proves the applicants really did differ in creditworthiness',
      ],
      correct: 1,
      explanation:
        "A proxy variable carries a protected trait's information under another name: decades of segregated housing make zip code correlate strongly with race, so a 'race-blind' model still acts on racial patterns it was never explicitly given. That's why deleting the sensitive column alone never fixes bias. 'More data will wash it out' is the tempting distractor — more data drawn from the same biased history deepens the pattern, and it can even feed a loop where denials manufacture the future data that seems to justify them.",
    },
    {
      question:
        "A video app's data shows that outrage-provoking videos get watched twice as long as calm ones. What will its recommendation model do over time, and why?",
      options: [
        'Suppress the outrage videos to protect the wellbeing of its users',
        'Balance calm and outrage content equally so the feed stays fair',
        'Nothing — recommendation models do not react to watch-time data',
        'Amplify the outrage videos, because watch time is its objective',
      ],
      correct: 3,
      explanation:
        "A recommendation system does exactly what its goal metric says and nothing the metric doesn't measure — it isn't evil, it's indifferent. If anger holds attention, anger gets amplified, no villain required, because user wellbeing was never part of the objective. 'Suppress to protect users' is the revealing wrong answer: it assumes a wellbeing goal the system simply doesn't have, and that gap between the engagement metric and your wellbeing is the entire lesson.",
    },
    {
      question:
        "An AI detector flags an essay as '94% AI-written.' The author, who learned English two years ago, denies using AI. How should the school treat the detector score?",
      options: [
        'As near-proof, since any score above 90% is highly reliable',
        'As a result to confirm by running the same detector three more times',
        'As weak evidence that cannot support an accusation on its own',
        'As grounds to make the student rewrite the essay from memory',
      ],
      correct: 2,
      explanation:
        "Detectors don't witness who wrote a text — they estimate how statistically predictable it looks, so they miss edited AI text and falsely flag real human writing. The careful, conventional phrasing common in second-language writers reads as 'AI-like': in a 2023 study of seven commercial detectors, over 60% of human-written TOEFL essays were misclassified as AI-generated. Re-running the same flawed instrument adds confidence without adding evidence; version history, drafts, and talking with the student about their work are far stronger.",
    },

    // ------------------------------------------------------------------
    // Unit 6 — AI and Your Future (3 questions)
    // ------------------------------------------------------------------
    {
      question:
        'AlphaFold predicts the 3D structure of a protein no lab has ever studied. Before scientists design a medicine around that shape, what must happen?',
      options: [
        'Lab experiments confirm the predicted structure is right',
        'Nothing — a model prediction beats slow lab work on reliability',
        'A second AI model checks the shape, which counts as verification',
        'They wait for the model to reach 100% accuracy on all proteins',
      ],
      correct: 0,
      explanation:
        "A prediction is a fast, educated guess — real lab experiments confirm whether it's right before anyone's health depends on it. That's the division of labor in every AI-for-good story: the model finds patterns fast, humans supply judgment and take responsibility. A second model is not independent verification, because models trained on similar data share the same blind spots — the same reason asking another chatbot doesn't count as fact-checking — and demanding perfection first would discard real value no tool can offer.",
    },
    {
      question:
        "Your uncle, an accountant, reads a headline claiming 'AI will replace accountants.' Using the tasks-not-jobs lens from the careers lesson, what is the most accurate picture?",
      options: [
        'The headline is right — AI replaces whole professions in one sweep',
        'Accounting is too heavily regulated for AI to change the work at all',
        'He should retrain as a programmer, the one career AI cannot touch',
        'Routine tasks get automated while judgment and oversight grow',
      ],
      correct: 3,
      explanation:
        "AI automates tasks, not jobs: every job is a bundle of tasks with different automation exposure, so routine work like data entry and standard forms shrinks while judgment, client trust, and supervising the AI's output take up more of his day. Both extremes miss this — 'whole professions vanish' is the headline version the lens replaces, and 'too regulated to change' pretends the shift isn't happening. The qualification becoming valuable is understanding the AI in your job well enough to use it wisely and catch its mistakes.",
    },
    {
      question:
        'While testing your capstone recycling classifier, you discover it mislabels shiny plastic bags as metal. What does a professional-quality model card do with this finding?',
      options: [
        'Leaves it out, since documented failures make the project look unfinished',
        'Names it in the limitations section so users know when not to trust it',
        'Reframes it in the intended-use section as a deliberate design choice',
        'Replaces it with overall accuracy, which already reflects every failure',
      ],
      correct: 1,
      explanation:
        "The limitations section exists precisely to record specific, tested failure modes — 'misreads shiny plastic as metal' tells a user exactly when to check, while vague honesty like 'sometimes makes mistakes' protects nobody. Hiding failures is how real-world AI harms happen, and one overall accuracy number can conceal exactly this kind of systematic error. The best capstone isn't the one with zero failures; it's the one whose failures are all known, written down, and explained.",
    },
  ],
};
