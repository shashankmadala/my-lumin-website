// Unit 2 — Machine Learning: Learning from Data (student course "AI Foundations")
// Covers features/labels, train/test splits, hands-on classifier training, the three
// learning paradigms, decision trees, and how bias enters ML pipelines.

const unit = {
  id: 'unit-2',
  title: 'Machine Learning: Learning from Data',
  description: 'Train, test, and deliberately break real machine learning models — and learn how data quality decides whether AI helps or harms.',
  icon: 'Database',
  lessons: [
    // ─────────────────────────────────────────────────────────────
    // Lesson 1: Training and Testing
    // ─────────────────────────────────────────────────────────────
    {
      id: 'training-and-testing',
      title: 'Training, Testing, and the Dataset',
      duration: '20 min',
      objectives: [
        'Identify the features and the label in any dataset',
        'Explain why a model must be evaluated on data it has never seen',
        "Compute an accuracy score and describe what it does — and doesn't — tell you",
      ],
      blocks: [
        {
          type: 'intro',
          text: "Here's a study strategy that sounds smart but fails every time: get a copy of last year's test, memorize every answer, and walk in confident. If the teacher reuses that exact test, you ace it. If they write new questions, you're sunk — you memorized answers instead of learning ideas. Machine learning models can fail in exactly the same way, and in this lesson you'll learn the trick engineers use to catch them: never grade a model on questions it has already seen.",
        },
        { type: 'heading', text: 'Data is the new rulebook' },
        {
          type: 'text',
          text: 'In Unit 1 you saw two ways to build a smart system: write the rules yourself, or let the machine learn them from examples. Machine learning takes the second path. Instead of telling the computer *how* to spot spam, you show it thousands of emails that people already marked as spam or not spam, and it works out the patterns on its own.',
        },
        {
          type: 'text',
          text: "Every example in that pile has two parts. The **features** are the measurable clues — the sender's address, the words in the subject line, how many exclamation marks it uses. The **label** is the right answer for that example: *spam* or *not spam*. Learning means finding a reliable path from features to label.",
        },
        {
          type: 'keyTerms',
          title: 'Words to own',
          terms: [
            { term: 'Feature', definition: 'A measurable clue in an example that the model can use — like the words in an email or the pixels in a photo.' },
            { term: 'Label', definition: 'The correct answer attached to an example — like "spam" or "cat" — that the model learns to predict.' },
            { term: 'Training set', definition: 'The portion of the data the model learns from, answers included.' },
            { term: 'Test set', definition: 'Data held back and hidden from the model during training, used to grade it fairly afterward.' },
            { term: 'Accuracy', definition: 'Correct predictions divided by total predictions.' },
            { term: 'Generalization', definition: 'Performing well on new, unseen examples — the real goal of learning.' },
          ],
        },
        {
          type: 'text',
          text: 'A quick analogy to keep for the rest of the course: the **training set** is the homework — problems the model studies with answers available. The **test set** is the final exam — new problems, answers hidden until grading. A student who only ever re-does homework problems can look brilliant right up until exam day.',
        },
        {
          type: 'checkpoint',
          question: "A music app wants to predict whether a new song will be a hit. Its dataset includes each song's tempo, genre, artist popularity, and whether the song reached the Top 40. Which one is the label?",
          options: [
            "The song's tempo in beats per minute",
            'The genre the song is filed under',
            'Whether the song reached the Top 40 chart',
            "The artist's existing popularity score",
          ],
          correct: 2,
          explanation: 'The label is the answer the model is trying to predict — here, hit or not hit. Tempo, genre, and artist popularity are features: input clues that are known before the outcome is, which is exactly what lets the model predict that outcome.',
        },
        { type: 'heading', text: 'Worked example: a cat vs. dog classifier' },
        {
          type: 'text',
          text: "Let's walk the whole machine learning pipeline for one classic task: deciding whether a photo shows a cat or a dog. Pay attention to *why* each step exists — the order isn't optional.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Collect labeled data.** Gather 1,000 photos, each already labeled *cat* or *dog* by a person. Why: the labels are the answer key the model learns from — no labels, no supervised learning.',
            "**Split the data.** Shuffle the photos, then use about 800 as the **training set** and lock away about 200 as the **test set**. Why: you're saving fresh questions for the final exam before any studying starts.",
            '**Train.** The model looks only at the 800 training photos, guesses each label, checks against the answer, and adjusts itself to do better — maybe learning that pointy ears and whiskers point toward *cat*. Why: repetition against the answer key is how patterns get found.',
            '**Test.** Show the model the 200 photos it has never seen and let it predict, without peeking at the labels. Why: this measures whether it learned *cats and dogs* or just memorized 800 specific photos.',
            '**Score.** Compare predictions to true labels. If 170 of 200 are right, accuracy is 170 ÷ 200 = 85%. Why: one number lets you compare models and decide whether this one is good enough.',
            '**Improve.** Study the mistakes — maybe it fails on puppies that look like kittens — then collect better data and retrain. Why: machine learning is a loop, not a one-shot recipe.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'No peeking',
          text: "If any test photos sneak into training, the test stops measuring real skill — the model has literally seen the answers. Engineers call this **data leakage**, and it's the machine learning version of grading students on a test they were handed in advance.",
        },
        {
          type: 'checkpoint',
          question: 'Why do engineers hide the test set away instead of just testing the model on its training photos?',
          options: [
            'Training photos are usually lower quality than test photos',
            'Only unseen data shows whether the model generalized',
            'A model refuses to answer questions it has already seen',
            'Scoring on fewer photos saves a lot of computing power',
          ],
          correct: 1,
          explanation: "A model can score perfectly on data it memorized while failing on anything new — just like memorizing last year's test — so unseen data is the only honest measure of general patterns. Models happily re-answer questions they have seen, and the split has nothing to do with photo quality or saving computing power.",
        },
        { type: 'heading', text: 'What accuracy tells you — and what it hides' },
        {
          type: 'text',
          text: "**Accuracy** is the fraction of predictions the model gets right: correct predictions divided by total predictions. It's a useful first check, but it can flatter a lazy model. Suppose only 5 in every 100 emails are spam. A 'model' that predicts *not spam* every single time scores 95% accuracy while catching zero spam.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The 95% trap',
          text: "High accuracy means little until you ask: accurate *on what*? Whenever one answer is far more common than the other, compare the model against the boring baseline of always predicting the most common label. You'll meet an even sharper version of this trap in the last lesson of this unit.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          text: "You're already part of this pipeline. Every time you mark an email as spam or tap 'not interested' on a video, you're creating a labeled example for someone's training set. Big systems are retrained on fresh human labels constantly — your clicks are the answer key.",
        },
        {
          type: 'text',
          text: "Time to stop reading and start training. The simulator below hands you a stack of emails: you play the labeling human, the model learns from your calls — and then it faces messages it hasn't seen. Watch how your labeling choices become its behavior.",
        },
        {
          type: 'interactive',
          component: 'TrainingSimulator',
          caption: 'Now train one yourself: label the training emails, then watch the classifier take on unseen messages.',
        },
        {
          type: 'checkpoint',
          question: "You train a classifier and it scores 99% on its training photos but only 61% on the test set. What's the most likely story?",
          options: [
            'The test set was labeled incorrectly by whoever built it',
            'The training set is too large and should be trimmed down',
            'The model learned real patterns and 61% is simply the ceiling',
            'The model memorized instead of learning patterns',
          ],
          correct: 3,
          explanation: 'A big gap between training and test scores is the classic sign of memorization: near-perfect on the photos it studied, weak on anything new. Bad test labels are possible but far less likely than this well-known pattern, and shrinking the training set would make memorizing easier, not harder.',
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What are features and labels? Features are the measurable clues in each example; the label is the answer the model learns to predict.',
            'Why split data into training and test sets? Because a model graded on examples it studied might just be memorizing — only unseen data reveals true learning.',
            'What is accuracy? Correct predictions divided by total predictions — 170 right out of 200 is 85%.',
            'Can accuracy mislead? Yes — when one label dominates, a do-nothing model can score high while being useless, so always check the baseline.',
          ],
        },
        {
          type: 'text',
          text: "Next lesson you leave the simulator behind: you'll train a real image classifier with your own webcam — and then break it on purpose.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "A weather app's dataset has four columns: humidity, wind speed, air pressure, and whether it rained the next day. The model's job is to predict rain. Which columns are the features?",
            options: [
              'Humidity, wind speed, and air pressure',
              'Whether it rained the next day, on its own',
              'Only humidity, since it predicts rain best',
              'All four columns, since the model sees them all',
            ],
            correct: 0,
            explanation: "Features are the input clues; the label is the thing being predicted — here, whether it rained the next day. The label can't also be a feature (that would hand the model the answer), and features aren't limited to the single strongest predictor.",
          },
          {
            question: 'What is the main purpose of a test set?',
            options: [
              'To give the model extra examples to learn from',
              'To measure performance on unseen data',
              'To store backup copies of the training data',
              'To speed up training by shrinking the dataset',
            ],
            correct: 1,
            explanation: "The test set is the held-out final exam: performance on data the model has never seen is what generalization means. If the model learned from it, it would stop being a fair measure — that's exactly why test data must never leak into training, and why it is not just spare fuel for learning.",
          },
          {
            question: 'A classifier makes predictions on 200 test emails and gets 154 right. What is its accuracy?',
            options: ['23%', '77%', '87%', '154%'],
            correct: 1,
            explanation: '154 ÷ 200 = 0.77 = 77%. The tempting 23% is the error rate (the 46 wrong answers), not the accuracy — an easy swap to make under time pressure. Accuracy can never exceed 100%.',
          },
          {
            question: 'Your model scores 98% on its training data but 55% on the test set. What should you do first?',
            options: [
              'Ship it — 98% on the training data is excellent',
              'Report the training score, since that is where it does best',
              'Collect an easier test set until the scores match',
              'Treat it as memorization and fix the training data',
            ],
            correct: 3,
            explanation: 'A large train-test gap signals memorization, so the fix happens on the training side: more and more varied examples, or a simpler model. The 98% is the misleading number — reporting scores from data the model has already seen, or shopping for an easier test, hides the problem instead of fixing it.',
          },
          {
            question: "A disease affects 2 in 100 patients. A startup advertises its screening model as '98% accurate.' Why should a hospital be cautious?",
            options: [
              "Predicting 'healthy' for every patient would also score 98%",
              'No screening model can honestly reach 98% accuracy',
              'Screening models should be scored on their training data',
              'Accuracy only applies when the two classes are balanced',
            ],
            correct: 0,
            explanation: 'With 98 of every 100 patients healthy, that do-nothing baseline scores 98% while missing every sick patient — so the headline number means little until it beats the baseline. Accuracy is perfectly computable on imbalanced data; being computable is exactly what makes it misleading here.',
          },
          {
            question: 'Spiral review from Unit 1: which of these is a *learned* system rather than a rule-based one?',
            options: [
              'A thermostat that turns on heat below exactly 68°F',
              'A calculator that follows the order of operations',
              'A spam filter that improves as users report messages',
              'A traffic light that cycles on a fixed 30-second timer',
            ],
            correct: 2,
            explanation: "The spam filter changes its behavior as labeled examples arrive — the defining trait from Unit 1's rules-vs-learning lesson. The thermostat, calculator, and traffic timer all follow fixed human-written rules and behave identically no matter how much data passes through them.",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────
    // Lesson 2: Classification Lab — Teach a Machine
    // ─────────────────────────────────────────────────────────────
    {
      id: 'teach-a-machine',
      title: 'Classification Lab: Teach a Machine',
      duration: '25 min',
      objectives: [
        'Train and test a real image classifier using your own webcam data',
        'Interpret confidence scores and explain their limits',
        'Demonstrate how data quantity and variety change model performance',
      ],
      blocks: [
        {
          type: 'intro',
          text: "In the last lesson you followed a cat-vs-dog classifier through the pipeline on paper. In the next twenty minutes you'll run that whole pipeline for real: collect data, train an image model with your webcam, test it — and then sabotage it on purpose to find out exactly what makes models fail. No code required.",
        },
        {
          type: 'video',
          videoId: 'R9OHn5ZF4Uo',
          title: 'How Machines Learn (CGP Grey)',
          duration: '9 min',
          note: "Heads up: YouTube now shows this classic under a new title — 'AI Doesn't Know Anything. It Just Passes Tests.' Same video, same ideas. Watch for the 'student bots' and 'teacher bots.'",
        },
        {
          type: 'text',
          text: "The video's big idea: nobody hand-writes the smarts. Builders set up a testing loop, keep the versions that score best, and repeat millions of times. The result is a model that *works* without anyone being able to point to the line of code that 'knows' what a cat is. Keep that in mind while you train your own — you set up the loop, and the model fills in the rest.",
        },
        {
          type: 'checkpoint',
          question: "In CGP Grey's video, how do the 'student bots' get better at their task?",
          options: [
            "Engineers rewrite each bot's code by hand after every mistake",
            'The teacher bot keeps the best scorers and makes variations of them',
            'The bots read a set of instructions humans wrote for the task',
            'The bots copy answers from a database of correct answers',
          ],
          correct: 1,
          explanation: "The video's whole point is that improvement comes from a test-and-keep-the-best loop repeated millions of times, not from humans editing code or bots reading instructions. That's also why the finished bot's inner workings are a mystery even to its builders.",
        },
        { type: 'heading', text: 'Lab part 1: train rock/paper/scissors' },
        {
          type: 'text',
          text: "[Teachable Machine](https://teachablemachine.withgoogle.com/) is a free Google tool that trains a real image classifier right in your browser — nothing to install, and you can keep your project on your own device. You'll define **classes** (the categories you want recognized), feed each one webcam **samples**, and the tool handles the training loop from the video.",
        },
        {
          type: 'tryIt',
          title: 'Train your first image classifier',
          intro: "Work with a partner if you can — you'll want a 'stranger' to test on later.",
          url: 'https://teachablemachine.withgoogle.com/',
          urlLabel: 'Open Teachable Machine',
          steps: [
            'Click **Get Started**, choose **Image Project**, then **Standard image model**.',
            'Rename the classes *Rock*, *Paper*, and *Scissors* (use **Add a class** for the third).',
            'For each class, hold the hand pose in front of your webcam and capture about **20 samples** — vary the angle, distance, and hand position while recording.',
            'Click **Train Model** (it takes under a minute), then try each pose in the Preview panel and watch the output bars.',
            'The real test: have a friend — someone whose hand the model has never seen — try all three poses. Note where the model wobbles.',
          ],
        },
        {
          type: 'text',
          text: "Look closely at the Preview panel: the model never just says 'rock.' It reports something like Rock 92%, Paper 6%, Scissors 2% — a **confidence score** for every class, always adding up to 100%. The model is spreading its belief across the options, and the app simply highlights the biggest share.",
        },
        {
          type: 'text',
          text: 'Confidence is genuinely useful: a self-driving car can be programmed to slow down when its detector is only 60% sure, and a medical tool can send low-confidence scans to a human doctor. Real systems set a **threshold** — act only above some confidence level, otherwise escalate to a person or decline to answer.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Confident ≠ correct',
          text: "A confidence score is not a truth score. Show the model an empty desk and it will still split 100% across rock, paper, and scissors — it has no 'none of the above.' High confidence on garbage input is one of the most common ways people over-trust AI systems.",
        },
        {
          type: 'checkpoint',
          question: "Your model outputs Rock 55%, Scissors 45% for a blurry hand. What's the best reading of that?",
          options: [
            'The hand is 55% of the way to being a rock shape',
            'The model is broken and must be retrained from scratch',
            'The model is genuinely unsure, and rock barely wins',
            'There is a 55% chance the model was trained correctly',
          ],
          correct: 2,
          explanation: "Near-even scores mean the input resembles more than one class the model has seen — real uncertainty, and it would take very little to flip the answer. Confidence doesn't measure how 'rock-like' a hand is physically, and hesitating on a blurry input is expected behavior, not a broken model.",
        },
        { type: 'heading', text: 'Lab part 2: sabotage' },
        {
          type: 'text',
          text: "Great engineers don't just build models — they break them to find the edges. You're going to retrain with deliberately bad data and watch quality collapse in real time.",
        },
        {
          type: 'tryIt',
          title: 'Break your model on purpose',
          intro: 'Keep Rock and Paper exactly as they are. Only Scissors gets sabotaged.',
          url: 'https://teachablemachine.withgoogle.com/',
          urlLabel: 'Back to Teachable Machine',
          steps: [
            'Delete your *Scissors* samples and re-record only **3 samples**, all from one angle, against one plain background.',
            'Leave *Rock* and *Paper* at ~20 varied samples each, then click **Train Model** again.',
            'Show scissors from a new angle or in front of a different background. Watch the confidence bars scramble.',
            'Now show just the plain background — no hand at all. Does the model shout *Scissors*?',
            'Write one sentence: what did the model actually learn about scissors?',
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: diagnosing the failure',
          text: "Reason through the collapse step by step. **Step 1 — three samples is too few:** with so little evidence, the model can't tell which parts of the image matter, so any repeated pattern gets treated as signal. **Step 2 — one background makes the background the signal:** in your training data, that wall appeared in 100% of scissors photos, making it a *perfectly* predictive feature. The model has no way to know you meant the hand. **Step 3 — new scene, no signal:** move your hand somewhere else and the feature the model relied on vanishes, so the prediction falls apart — even though any human sees an obvious scissors.",
        },
        {
          type: 'text',
          text: 'Two dials control how well models like this work: **quantity** (enough examples for real patterns to stand out from coincidences) and **variety** (examples spread across angles, lighting, backgrounds, and people so accidental patterns get ruled out). Your sabotage broke both dials at once.',
        },
        {
          type: 'callout',
          variant: 'realworld',
          text: "Want to see what varied training data looks like at scale? Browse the [Quick, Draw! dataset](https://quickdraw.withgoogle.com/data) — millions of doodles from players worldwide that trained a real recognition model. And hold on to your background-not-the-hand discovery: in the last lesson of this unit you'll meet a famous wolf classifier that made exactly the same mistake.",
        },
        {
          type: 'checkpoint',
          question: "A classmate trained a plant-identifier using photos taken only in her sunny backyard. It works great at home but fails at school. What's the most likely cause?",
          options: [
            "The model learned her backyard's lighting and background instead",
            'The school Wi-Fi is too slow for the model to run properly',
            'Plant classifiers need a million photos to work anywhere',
            'The model forgot its training when it changed buildings',
          ],
          correct: 0,
          explanation: "One consistent environment lets background and lighting become predictive features instead of the plants — exactly like your one-background scissors class. Models don't 'forget' by moving, Wi-Fi affects loading rather than predictions, and useful classifiers are routinely trained on far fewer than a million images.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What does training actually require? Labeled examples with enough quantity and variety that real patterns beat accidental ones.',
            "What is a confidence score? The model's spread of belief across all its classes, always totaling 100% — not a guarantee of being right.",
            'Why did the sabotaged model fail? It latched onto the easiest predictive pattern — the background — which vanished in new scenes.',
            "How do engineers find a model's limits? They stress-test it with new people, new places, and junk input, exactly like you just did.",
          ],
        },
        {
          type: 'text',
          text: 'What you just did — learning from labeled examples — is called supervised learning. Next lesson: the two other ways machines learn, including how a bot can teach itself a game nobody labeled.',
        },
      ],
      quiz: {
        questions: [
          {
            question: "In Teachable Machine, one class was trained with 3 samples against a single background while the others had 20 varied samples each. What's the most likely result?",
            options: [
              'The small class will do best, since rare data gets extra weight',
              'The model will refuse to train until the classes are equal',
              'All three classes will degrade by about the same amount',
              'The small class will fail on new angles and backgrounds',
            ],
            correct: 3,
            explanation: "Few, uniform samples let accidental features like the background dominate that class, so its predictions collapse when the scene changes. Models don't give rare data extra weight or refuse to train — imbalance quietly degrades the starved class while the well-fed ones stay fine.",
          },
          {
            question: 'A model outputs: Cat 97%, Dog 3%. What does the 97% actually mean?',
            options: [
              'The image is physically 97% cat and 3% dog',
              'For this input, the model leans strongly toward cat',
              'The model gets about 97% of its predictions right overall',
              'About 97% of the training photos were labeled cat',
            ],
            correct: 1,
            explanation: "Confidence describes how strongly this one input matches each class the model knows, and the scores always sum to 100%. It isn't the model's overall accuracy or the training mix — and a 97% score can still be wrong, especially on inputs unlike anything in training.",
          },
          {
            question: 'You point your rock/paper/scissors model at a coffee mug. What will it do?',
            options: [
              'Split its confidence across the three classes anyway',
              'Output 0% for all three classes, since none of them match',
              'Show an error message asking you to hold up a hand',
              'Add the mug to its classes as a new fourth category',
            ],
            correct: 0,
            explanation: "The model can only ever divide 100% across the classes it was trained on — it has no 'none of the above' for a mug. It won't error out, zero out, or invent a class, which is exactly why confident output on garbage input is dangerous to over-trust.",
          },
          {
            question: "According to CGP Grey's video, why can't the engineers who build learning machines fully explain how a finished model works?",
            options: [
              'Companies keep the training code secret on purpose',
              'It emerged from millions of test-and-keep cycles',
              'The code is written in a language humans cannot read',
              'The models delete their own code once training ends',
            ],
            correct: 1,
            explanation: "The 'smarts' were never written down by a person — they emerged from an automated loop that kept whatever scored best and varied it again. Secrecy and unreadable languages aren't the issue: even with full access to the code, there's no human-authored logic to point to.",
          },
          {
            question: 'Your Paper class keeps getting confused with Scissors when your friend tests the model. Best first fix?',
            options: [
              'Lower the lighting so the two poses look more distinct',
              'Delete the Scissors class so nothing competes with Paper',
              'Record more varied Paper and Scissors samples',
              'Rename the classes so the model can tell them apart',
            ],
            correct: 2,
            explanation: "Confusion between classes usually means the training data lacked the variety the model needed to find the real difference, so new angles, distances, and other people's hands attack the cause. Renaming changes nothing the model actually sees, and deleting a class removes capability instead of fixing it.",
          },
          {
            question: "Spiral review from Unit 1: Teachable Machine contains no line of code saying 'scissors = two extended fingers.' What does that make it?",
            options: [
              'A rule-based system, since Google engineers wrote its rules',
              'Not real AI, since a human had to supply all the data',
              'A random guesser, since nothing ever defines scissors',
              'A data-driven system that learned from your labels',
            ],
            correct: 3,
            explanation: "That's the Unit 1 distinction in action: nobody wrote the scissors rule — the model derived the pattern from your labeled samples, which makes it data-driven machine learning rather than guessing. Needing human-supplied data doesn't disqualify it from being AI; that's simply how supervised learning works.",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────
    // Lesson 3: Three Ways Machines Learn
    // ─────────────────────────────────────────────────────────────
    {
      id: 'three-ways-machines-learn',
      title: 'Three Ways Machines Learn',
      duration: '20 min',
      objectives: [
        'Distinguish supervised, unsupervised, and reinforcement learning',
        'Match real AI systems to the type of learning they use',
        "Explain what a 'reward' does in reinforcement learning",
      ],
      blocks: [
        {
          type: 'intro',
          text: "Nobody labeled millions of chess positions for the bot that taught itself to beat grandmasters. Nobody told a streaming service what 'types' of viewers exist — it found the groups on its own. And yet your spam filter really did learn from millions of human labels. Three different problems, three different ways machines learn. By the end of this lesson you'll spot which is which in the wild.",
        },
        {
          type: 'video',
          videoId: '0yCJMt9Mx9c',
          title: 'How does artificial intelligence learn? (TED-Ed)',
          duration: '5 min',
          note: 'A five-minute animated tour of all three learning styles. As you watch, note one real-world example of each.',
        },
        {
          type: 'links',
          title: 'Go deeper',
          items: [
            {
              label: 'TED-Ed companion lesson',
              url: 'https://ed.ted.com/lessons/how-does-artificial-intelligence-learn-briana-brownell',
              description: 'A free follow-up quiz and discussion questions for the video you just watched.',
            },
          ],
        },
        {
          type: 'keyTerms',
          title: 'Words to own',
          terms: [
            { term: 'Supervised learning', definition: 'Learning from examples that come with labels — an answer key.' },
            { term: 'Unsupervised learning', definition: 'Finding structure, usually clusters, in data that has no labels.' },
            { term: 'Clustering', definition: 'Grouping similar examples together automatically.' },
            { term: 'Reinforcement learning', definition: 'Learning through trial and error, guided by rewards and penalties.' },
            { term: 'Agent', definition: 'The learner in reinforcement learning — the thing taking actions.' },
            { term: 'Reward signal', definition: 'The score the environment sends back after an action.' },
          ],
        },
        { type: 'heading', text: 'Supervised: learning with an answer key' },
        {
          type: 'text',
          text: "Everything you've done so far in this unit — the spam trainer, rock/paper/scissors — is **supervised learning**: every training example arrives with a human-provided label, and the model learns the path from features to label. It's the workhorse of practical AI: spam filters, medical image screening, price prediction, face unlock.",
        },
        {
          type: 'text',
          text: "Supervised learning's superpower is precision — you define exactly what 'correct' means. Its cost is the answer key itself: someone has to create millions of labels, which is why companies are delighted when you tag photos, rate rides, and report spam for free.",
        },
        { type: 'heading', text: 'Unsupervised: finding structure with no answer key' },
        {
          type: 'text',
          text: "In **unsupervised learning**, the data has no labels at all. The algorithm's job is to find structure already hiding in the data — most often by **clustering** similar examples together. A shopping site can discover that its customers fall into natural groups (late-night bargain hunters, brand loyalists) without anyone defining those groups in advance.",
        },
        {
          type: 'text',
          text: "Notice what changed: there's no right answer to check against. The model isn't predicting a label; it's revealing organization — like your photo app grouping pictures by the faces in them without knowing anyone's name. That's why unsupervised results need human interpretation: the algorithm finds the clusters, and people decide what the clusters mean.",
        },
        { type: 'heading', text: 'Reinforcement: learning by trial and error' },
        {
          type: 'text',
          text: "**Reinforcement learning** starts with no dataset at all. An **agent** takes actions in an environment and receives a **reward** signal — points for good outcomes, penalties for bad ones — and gradually favors actions that lead to more reward. It's how bots master games and robots learn to walk, and it's the closest of the three to how you learned to ride a bike: wobble, fall, adjust, repeat.",
        },
        {
          type: 'text',
          text: 'One warning that will matter later in this course: the agent gets very good at whatever the reward *actually measures* — which is not always what the designer meant. A game bot rewarded for points might discover a scoring glitch and farm it forever instead of finishing the level.',
        },
        {
          type: 'table',
          headers: ['', 'Supervised', 'Unsupervised', 'Reinforcement'],
          rows: [
            ['Starts with', 'Labeled examples', 'Unlabeled examples', 'An environment to act in'],
            ['Feedback from', 'The answer key (labels)', 'None — it finds structure', 'Rewards and penalties'],
            ['Typical question', "'What is this?'", "'What groups exist here?'", "'What should I do next?'"],
            ["Where you've seen it", 'Spam filters, Teachable Machine', 'Customer groups, photo face clusters', 'Game bots, robots learning to walk'],
          ],
        },
        {
          type: 'checkpoint',
          question: 'Your rock/paper/scissors model from last lesson was which type of learning — and why?',
          options: [
            'Reinforcement, because you tested the model repeatedly',
            'Unsupervised, because the tool found the hand shapes itself',
            'Supervised, because you labeled every single example yourself',
            'None — Teachable Machine is rule-based, not learned',
          ],
          correct: 2,
          explanation: "You supplied the answer key: every webcam sample was captured under a class name you chose, making each one a labeled example. Testing afterward isn't a reward signal, and the model never had to discover the classes — you defined them before recording a single frame.",
        },
        { type: 'heading', text: 'Worked example: classifying a mystery system' },
        {
          type: 'text',
          text: "When you meet an unfamiliar AI system, run three questions in order. Let's classify this one together: *a music app that discovers listener 'taste neighborhoods' from listening histories nobody labeled.*",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Did humans provide a correct answer for each example?** No — nobody tagged listeners with taste groups. So it isn't supervised. (Ask this first because an answer key is the most recognizable giveaway.)",
            "**Is something acting and being scored by rewards over time?** No — the system isn't taking actions in an environment and collecting points; it's analyzing a pile of existing data. So it isn't reinforcement.",
            "**Is it finding hidden groups or patterns in unlabeled data?** Yes — 'taste neighborhoods' are clusters the algorithm discovered on its own. Verdict: **unsupervised learning**.",
          ],
        },
        {
          type: 'checkpoint',
          question: 'Run the three questions on this: a delivery robot earns +10 points for each on-time delivery and −5 for bumping obstacles, improving its routes over weeks. Which type is it?',
          options: [
            'Supervised learning from labeled routes',
            'Reinforcement learning from rewards',
            'Unsupervised learning that clusters routes',
            'A rule-based system, not machine learning',
          ],
          correct: 1,
          explanation: "The robot acts in an environment and adjusts based on rewards and penalties over time — the signature of reinforcement learning. Nobody labeled a correct route and nothing is being clustered; and while humans wrote the *reward rules*, the routes themselves are learned, not hand-coded.",
        },
        {
          type: 'text',
          text: 'Your turn — nine real systems, three buckets. Use the three-question routine on every card before you commit.',
        },
        {
          type: 'interactive',
          component: 'SortingGame',
          caption: 'Sort each system into the way it learns. The explanations matter more than the score.',
          props: {
            title: 'Which way does it learn?',
            categories: [
              { id: 'supervised', label: 'Supervised' },
              { id: 'unsupervised', label: 'Unsupervised' },
              { id: 'reinforcement', label: 'Reinforcement' },
            ],
            items: [
              {
                text: "A spam filter trained on 100,000 emails that users marked 'spam' or 'not spam'",
                category: 'supervised',
                explanation: 'User reports are labels — an answer key for every example. Predicting a known label from features is supervised learning.',
              },
              {
                text: 'A streaming service discovers its users fall into taste clusters nobody defined in advance',
                category: 'unsupervised',
                explanation: 'No labels existed — the algorithm found hidden groups in unlabeled viewing data. Discovering unknown structure is unsupervised learning.',
              },
              {
                text: 'A bot learns chess by playing millions of games against itself, using wins and losses as feedback',
                category: 'reinforcement',
                explanation: "Nobody labels 'the correct move.' The bot acts, receives win/loss rewards, and shifts toward higher-reward play — reinforcement learning.",
              },
              {
                text: 'Predicting house prices from past sales where each sale price is known',
                category: 'supervised',
                explanation: 'The known sale price is the label. Learning a path from features (size, location) to a known answer is supervised — even when the answer is a number instead of a category.',
              },
              {
                text: 'A supermarket analyzes receipts and finds shoppers naturally split into groups, like bulk buyers and daily snackers',
                category: 'unsupervised',
                explanation: 'The groups were not defined beforehand — clustering revealed them from unlabeled receipts. Humans then interpret and name the clusters.',
              },
              {
                text: 'A robot vacuum gets a penalty signal each time it bumps furniture and gradually adjusts its route',
                category: 'reinforcement',
                explanation: 'Acting in an environment and adjusting to rewards and penalties over time is reinforcement learning — no labels, no clusters.',
              },
              {
                text: 'Your Teachable Machine rock/paper/scissors classifier',
                category: 'supervised',
                explanation: 'You created labeled examples by recording samples under class names you chose. Your labels were the answer key — supervised learning.',
              },
              {
                text: 'Grouping thousands of news articles by topic when nobody tagged them',
                category: 'unsupervised',
                explanation: 'With no topic labels available, the algorithm clusters similar articles by their content. Finding structure without an answer key is unsupervised.',
              },
              {
                text: 'A video game character improves by maximizing its score across thousands of practice runs',
                category: 'reinforcement',
                explanation: 'The score is a reward signal, and the character learns which actions raise it through trial and error — the definition of reinforcement learning.',
              },
            ],
          },
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Real systems mix styles',
          text: "Big AI products rarely use just one style. A video platform might use supervised learning to tag what's in a clip, unsupervised learning to group similar viewers, and reinforcement-style feedback to tune which recommendations keep people watching. When you analyze a product, classify one function at a time.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What defines supervised learning? Labeled examples — an answer key the model learns to reproduce on new inputs.',
            'What does unsupervised learning do without labels? It finds structure that was already in the data, usually by clustering similar examples.',
            'What replaces labels in reinforcement learning? A reward signal — the agent acts, gets scored, and drifts toward higher-reward behavior.',
            'How do you classify a mystery system? Ask in order: is there an answer key, is there a reward loop, is it hunting for hidden groups?',
          ],
        },
        {
          type: 'text',
          text: 'Next up: a supervised learner you can read like a flowchart — the decision tree.',
        },
      ],
      quiz: {
        questions: [
          {
            question: "A bank has 50,000 past loan applications labeled 'repaid' or 'defaulted' and wants to predict outcomes for new applicants. Which learning type fits?",
            options: [
              'Supervised learning on the labeled outcomes',
              'Unsupervised clustering of the past applications',
              'Reinforcement learning from loan rewards',
              'Hand-written rules — no learning needed',
            ],
            correct: 0,
            explanation: 'Labeled historical outcomes are an answer key, and predicting that label for new applicants is the definition of supervised learning. Clustering would throw away the 50,000 labels the bank already has, and nothing here acts in an environment collecting rewards.',
          },
          {
            question: 'What is the key difference between supervised and unsupervised learning?',
            options: [
              'Supervised runs on computers; unsupervised is done by hand',
              'Supervised learning is always the more accurate of the two',
              'Supervised learns from labels; unsupervised has none',
              'Unsupervised learning needs a reward signal to work',
            ],
            correct: 2,
            explanation: "The presence or absence of labels is the dividing line: supervised reproduces a known answer, unsupervised finds structure nobody labeled. Rewards belong to reinforcement learning, and neither type is inherently more accurate — they answer different questions ('what is this?' versus 'what groups exist here?').",
          },
          {
            question: "A ride-sharing company wants to discover whether its riders fall into natural usage patterns — it doesn't know what the patterns might be. Which approach fits?",
            options: [
              'Supervised learning with rider labels',
              'Reinforcement learning with rewards for each ride',
              'A decision tree trained on labeled ride types',
              'Unsupervised clustering of ride histories',
            ],
            correct: 3,
            explanation: "Nobody knows the groups in advance, so there are no labels to supervise with — clustering exists exactly for discovering unknown structure. Both supervised options require an answer key that doesn't exist yet, and no agent is earning rewards here.",
          },
          {
            question: 'In reinforcement learning, what plays the role that labels play in supervised learning?',
            options: [
              'A larger and more varied training dataset',
              'The clusters the agent discovers on its own',
              'The reward signal coming back from the environment',
              'A programmer correcting each action by hand',
            ],
            correct: 2,
            explanation: "The agent never sees 'correct answers' — it gets rewards and penalties after acting and steers toward more reward. Clusters belong to unsupervised learning, and hand-correcting every action is precisely the kind of labeling reinforcement learning avoids.",
          },
          {
            question: "A game bot improves by playing millions of matches against itself, using wins and losses as feedback. A student says it must be supervised 'because winning is like a label.' What's wrong with that claim?",
            options: [
              'Nothing — a win is a label, so it is supervised',
              'A win rewards a whole sequence, not one move',
              'It is unsupervised, since nobody teaches the bot',
              'Game bots do not really use machine learning',
            ],
            correct: 1,
            explanation: "Supervised learning needs a right answer attached to each example, but the bot never learns 'the correct move' for a position — it gets one delayed reward after dozens of moves. 'Nobody teaches it' notices the missing labels but misses the reward signal that defines reinforcement learning.",
          },
          {
            question: "Spiral review from Unit 1: a fan claims a chess bot 'thinks just like a human grandmaster.' What's the most accurate correction?",
            options: [
              'It does one narrow task well using learned patterns',
              'The fan is right — beating grandmasters proves human thought',
              'Bots cannot really play chess; they follow pre-written scripts',
              'It thinks like a human, but only while a game is running',
            ],
            correct: 0,
            explanation: "Unit 1's core caution: narrow AI can outperform humans at a single task using learned patterns and search, without perceiving or understanding the way people do. Winning is evidence of task performance, not of a humanlike mind — and chess bots genuinely compute their moves rather than replay fixed scripts.",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────
    // Lesson 4: Decision Trees
    // ─────────────────────────────────────────────────────────────
    {
      id: 'decision-trees',
      title: 'Decision Trees: Learning You Can Read',
      duration: '20 min',
      objectives: [
        'Trace how a decision tree classifies an example through feature questions',
        'Explain what makes one feature question a better split than another',
        'Compare interpretable models with black-box models and say when each fits',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Think about how you play 20 Questions. You'd never open with 'Is it a left-handed dentist from Ohio?' You ask 'Is it alive?' — the question that slices the possibilities roughly in half. A **decision tree** is 20 Questions turned into a machine learning model: a stack of feature questions, learned from data, that funnels every example down to a prediction. And unlike most models, you can read its entire mind.",
        },
        { type: 'heading', text: 'Anatomy of a tree' },
        {
          type: 'keyTerms',
          title: 'Words to own',
          terms: [
            { term: 'Node', definition: 'A point in the tree that asks a yes/no question about one feature.' },
            { term: 'Leaf', definition: 'The end of a question path, where the tree makes its prediction.' },
            { term: 'Split', definition: 'How a question divides the examples into two groups.' },
            { term: 'Interpretability', definition: 'Being able to read and explain exactly how a model reached its decision.' },
            { term: 'Black box', definition: 'A model whose internal reasoning cannot be traced or explained step by step.' },
          ],
        },
        {
          type: 'text',
          text: "A decision tree is a flowchart. Each **node** asks a yes/no question about one feature ('Does it have feathers?'). Each branch is an answer path. Each **leaf** — the end of a path — holds a prediction. To classify something, start at the top and answer questions until you land on a leaf.",
        },
        {
          type: 'text',
          text: 'Where do the questions come from? Not from a programmer. A training algorithm tries candidate questions on the labeled training data and keeps the one that best **splits** the examples — sending, say, nearly all the birds one way and nearly all the mammals the other. Then it repeats inside each branch until the groups are pure enough to become leaves.',
        },
        {
          type: 'text',
          text: 'Notice that every question is about a **feature** — the same features-and-labels vocabulary from the start of this unit. Labeled data goes in, a question path comes out: a decision tree is supervised learning you can actually see.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What makes a question good?',
          text: "A good split makes each side *purer* — closer to all-one-label. 'Does it have feathers?' separates birds from mammals almost perfectly. 'Does it have a tail?' barely helps: both sides stay mixed. The training algorithm measures purity mathematically, but your 20 Questions instinct is the same idea.",
        },
        {
          type: 'checkpoint',
          question: "You're building a tree to separate cats from fish using labeled data. Which first question gives the purest split?",
          options: [
            "'Does it live in water?'",
            "'Does it have two eyes?'",
            "'Is it a popular pet?'",
            "'Is it bigger than a shoebox?'",
          ],
          correct: 0,
          explanation: "'Lives in water' sends essentially all fish one way and all cats the other — two nearly pure groups. Two eyes are shared by both classes (no split at all), while popularity and size cut messily through both. Best split = purest sides.",
        },
        { type: 'heading', text: 'Worked example: walk a penguin through the tree' },
        {
          type: 'text',
          text: "Here's a small tree learned from a labeled animal dataset. Let's trace one animal — a penguin — from root to leaf, narrating why each step happens.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Root node: 'Does it have feathers?'** Penguin: yes → take the feathers branch. Why this question is first: on the training data it produced the purest opening split, cleanly separating birds from mammals and fish.",
            "**Next node: 'Can it fly?'** Penguin: no → take the flightless branch. Why this comes second: within the feathered group, flight is the feature that best separates the remaining labels.",
            "**Next node: 'Does it swim?'** Penguin: yes → the path ends at a leaf.",
            "**Leaf: predict penguin.** In training, nearly every feathered, flightless swimmer carried the label *penguin*, so that's this leaf's prediction. Note what the tree never did: it has no concept of 'penguin-ness' — it just followed the question path the data carved.",
          ],
        },
        {
          type: 'checkpoint',
          question: 'A decision tree ends up looking like a flowchart of if-then rules. So is it the same as the rule-based systems from Unit 1?',
          options: [
            'Yes — if-then rules make it rule-based, not machine learning',
            "No — the tree's rules are learned from labeled data",
            'Yes — a programmer writes the questions, data fills the answers',
            'No — decision trees hold probabilities rather than rules',
          ],
          correct: 1,
          explanation: "The output looks like if-then rules, but the *source* is different: the tree's questions and their order were chosen automatically from training data, not authored by an expert. That's Unit 1's dividing line — who writes the logic, a human or the data?",
        },
        {
          type: 'interactive',
          component: 'DecisionTreeGame',
          caption: 'Build your own tree: choose the feature splits and see how cleanly your questions separate the data.',
        },
        {
          type: 'text',
          text: "Decision trees aren't just teaching toys. Doctors use tree-style checklists for triage, banks build them for credit decisions, and modern systems often combine hundreds of small trees into a 'forest' that votes — one of the most-used techniques on spreadsheet-style data today.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Can a tree memorize?',
          text: "Absolutely — and here's Lesson 1 coming back around. Let a tree keep splitting until every leaf holds a single training example and you've built a perfect memorizer: 100% on training data, lousy on the test set. That's why builders limit a tree's depth and always check performance on held-out data. Deeper isn't smarter; it's often just better memorization.",
        },
        { type: 'heading', text: 'Glass box vs. black box' },
        {
          type: 'text',
          text: 'Trees have a rare talent: **interpretability**. You can trace any single prediction, print the entire tree, and explain a decision in plain sentences. Compare that with a large neural network, where a prediction emerges from millions of learned numbers with no readable path — a **black box**.',
        },
        {
          type: 'text',
          text: "That difference matters most when decisions carry consequences. If a model denies someone a loan, laws in many places require an explanation, and 'the black box said no' doesn't qualify. A tree can answer precisely: *income below this level plus missed payments above that level*. This is why banks and hospitals often accept a somewhat less powerful model in exchange for one they can read and audit.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'The trade-off in practice',
          text: 'Interpretability often costs accuracy on messy data like photos and speech, where deep networks shine. Real teams choose per problem: readable trees for credit and triage decisions, black-box networks for recognizing faces in photos — and sometimes both, with the simple model double-checking the powerful one.',
        },
        {
          type: 'checkpoint',
          question: 'A hospital must be able to explain every automated triage recommendation to doctors and patients. Which choice fits best?',
          options: [
            'The most accurate model available, whatever its type',
            'No model at all — hospitals should not use machine learning',
            'A decision tree, whose question path is the explanation',
            'A neural network, since black boxes protect patient privacy',
          ],
          correct: 2,
          explanation: "When every recommendation must be explained, interpretability is a requirement rather than a nice-to-have — the tree's question path can be read aloud to a patient. A slightly more accurate black box fails that requirement, and 'black box' refers to unexplainability, not privacy protection.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'How does a tree classify? It routes each example through learned yes/no feature questions until a leaf makes the prediction.',
            'What makes a split good? It leaves each side purer — closer to all-one-label — than before the question was asked.',
            'Is a tree the same as hand-written rules? No: the rules are learned from labeled data, which keeps it firmly in machine learning.',
            'When do interpretable models win? Whenever a decision must be explained or audited — even at some cost in raw accuracy.',
          ],
        },
        {
          type: 'text',
          text: 'One question remains before this unit closes: what happens when the data itself is skewed? That answer is the most important lesson in the unit.',
        },
      ],
      quiz: {
        questions: [
          {
            question: 'In a decision tree, what is a leaf?',
            options: [
              'The first question the tree asks, at the very top',
              'A feature the tree decided to ignore entirely',
              'The end of a path, where a prediction is made',
              'The labeled dataset used to train the tree',
            ],
            correct: 2,
            explanation: 'Leaves are where paths end and predictions live; the internal nodes hold the feature questions. The first question is the root — the opposite end of the tree — and the training data is what the tree was built from, not a part of the tree itself.',
          },
          {
            question: "You're separating emails into spam and not-spam. Which question would make the best root split?",
            options: [
              "'Was the email sent on a weekday morning?'",
              "'Does the email say \"you have won\"?'",
              "'Is the email longer than 100 words?'",
              "'Does the email contain the letter e?'",
            ],
            correct: 1,
            explanation: "A good split makes each branch purer — 'you have won' appears overwhelmingly in spam, so one side becomes almost entirely spam. Send time, length, and the letter 'e' occur about equally in both classes, so each branch stays as mixed as the pile you started with.",
          },
          {
            question: "Using the lesson's tree (feathers? → can fly? → swims?), what happens when you trace an eagle?",
            options: [
              'Feathers: yes → flies: yes → away from the penguin leaf',
              'Feathers: no → it lands in the non-bird branch instead',
              'It stops early, since the tree never saw an eagle in training',
              'It reaches the penguin leaf, since both are birds',
            ],
            correct: 0,
            explanation: 'An eagle answers yes to feathers and yes to flight, so it follows the flying-bird branch and never reaches the penguin leaf. Classifying animals it never saw in training is the whole point — the tree applies its learned questions to brand-new examples.',
          },
          {
            question: 'A loan model must explain every rejection to the applicant. Why might a bank pick a decision tree over a more accurate neural network?',
            options: [
              'Trees always beat neural networks on accuracy anyway',
              'Trees are cheaper to run, and cost decides every choice',
              'Neural networks are illegal for lending decisions',
              'Every tree decision traces through readable feature questions',
            ],
            correct: 3,
            explanation: "The tree's question path doubles as the required explanation — 'income below this, missed payments above that' — while a black box can't produce that trace even when it scores higher. Neural networks aren't banned and trees don't systematically win on accuracy; this is a deliberate trade of some power for interpretability.",
          },
          {
            question: "You train a decision tree and want an honest estimate of how it will perform on next month's new customers. Which data should you measure it on?",
            options: [
              'The training examples, since the tree knows them best',
              'A test set the tree never saw during training',
              'Only the examples the tree classified most confidently',
              'Whichever dataset gives the highest score you can report',
            ],
            correct: 1,
            explanation: 'Same rule as Lesson 1 — trees can memorize training data too, so only held-out data estimates real-world performance. Score-shopping and confident-only subsets both inflate the number without saying anything about next month.',
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────
    // Lesson 5: Bias In, Bias Out
    // ─────────────────────────────────────────────────────────────
    {
      id: 'bias-in-bias-out',
      title: 'Bias In, Bias Out',
      duration: '25 min',
      objectives: [
        'Identify the three main doors bias enters an ML pipeline: sampling, labels, and history',
        'Show how a model can score high overall accuracy while failing badly for one group',
        'Propose concrete dataset fixes and a deployment safeguard for a biased model',
      ],
      blocks: [
        {
          type: 'intro',
          text: "In a now-famous 2016 experiment, researchers deliberately trained a wolf-vs-husky classifier on photos where the wolves stood in snow and the huskies didn't — then asked people whether they trusted it. It looked convincing. But it wasn't studying the animals at all: it had learned to detect **snow**. The model was a snow detector wearing a wolf costume, and this lesson is about how mistakes like that get into real models — and how they quietly hurt real people when nobody checks.",
        },
        { type: 'heading', text: 'Shortcut learning: the husky problem' },
        {
          type: 'text',
          text: "The wolf-husky demonstration — from a 2016 paper by Ribeiro, Singh, and Guestrin on explaining model predictions — became famous because the failure is so understandable. The researchers hand-picked the training photos so that snow sat behind the wolves and not the huskies, making 'snowy background' a nearly perfect predictor and far easier to detect than the subtle differences between two similar-looking animals. When they highlighted which pixels drove each prediction, the highlights lit up the background, not the animal — and most of the people who had trusted the classifier stopped trusting it on the spot.",
        },
        {
          type: 'text',
          text: "Sound familiar? It should — it's your sabotaged scissors class from Lesson 2, at research scale. A model has no idea which patterns you *meant* it to learn. It learns whatever most reliably separates the labels in its training data, meaningful or not. That habit is called **shortcut learning**, and it's the engine behind many AI bias stories.",
        },
        {
          type: 'checkpoint',
          question: 'What did the wolf-vs-husky model actually learn to detect?',
          options: [
            'Fur texture differences between the two breeds',
            'The shape of the ears, eyes, and snout',
            'Snow in the background of the photos',
            'Which photographer took each picture',
          ],
          correct: 2,
          explanation: "The snowy background separated the training labels far more easily than the animals' actual features did, so the model keyed on snow. That's shortcut learning: the model optimizes for whatever predicts the label in *this* dataset, not for what you meant it to notice.",
        },
        { type: 'heading', text: 'Three doors bias walks through' },
        {
          type: 'text',
          text: "Bias doesn't need a biased programmer. It usually enters through the data, through one of three doors.",
        },
        {
          type: 'list',
          items: [
            "**Sampling bias — who's in the data.** If a face dataset is mostly light-skinned faces, the model gets rich practice on some faces and almost none on others. Your one-background scissors class was sampling bias in miniature.",
            "**Label bias — who wrote the answer key.** Labels come from people, and people disagree and err. If labelers tag certain dialects as 'unprofessional,' the model learns that judgment as if it were fact.",
            '**Historical bias — the world recorded in the data.** Even perfectly accurate data can encode an unfair past. Train a hiring model on decades of hires from a company that mostly promoted men, and it learns to prefer applicants who resemble the past.',
          ],
        },
        {
          type: 'keyTerms',
          title: 'Words to own',
          terms: [
            { term: 'Shortcut learning', definition: 'When a model keys on an accidental pattern (like snow) that separates the training labels instead of the meaningful one.' },
            { term: 'Sampling bias', definition: 'The training data underrepresents some of the people or situations the model will face.' },
            { term: 'Label bias', definition: 'Human judgment errors or prejudices baked into the answer key itself.' },
            { term: 'Historical bias', definition: 'Accurate data about an unfair past that teaches the model to repeat it.' },
            { term: 'Per-group accuracy', definition: 'The same accuracy test, reported separately for each group the system serves.' },
          ],
        },
        {
          type: 'checkpoint',
          question: "A company trains a resume-screening model on 10 years of its own hiring decisions, and the model starts downgrading resumes from women's colleges. Which door did bias walk through?",
          options: [
            'Sampling bias — too few resumes were collected',
            'Historical bias — past hiring decisions favored men',
            'Label bias — the hiring labels were entered with typos',
            'No bias — the model reports objective facts about applicants',
          ],
          correct: 1,
          explanation: "The training labels were real past decisions, and those decisions carried the company's old preferences — so the model faithfully learned an unfair pattern. The data wasn't mis-collected or mistyped; it was accurate data about a biased history, which is exactly what makes historical bias sneaky.",
        },
        {
          type: 'video',
          videoId: 'UG_X_7g63rY',
          title: "How I'm fighting bias in algorithms (Joy Buolamwini, TED)",
          duration: '9 min',
          note: 'Buolamwini, the MIT researcher behind the Gender Shades study, describes face-tracking software that could not detect her face — until she covered it with a white mask. Watch for where each of the three doors shows up.',
        },
        {
          type: 'text',
          text: "Buolamwini's findings landed because she didn't just report overall accuracy — she measured it separately for different groups. In the 2018 *Gender Shades* study she published with Timnit Gebru, three commercial gender-classification tools misread lighter-skinned men at most 0.8% of the time, while darker-skinned women were misclassified in up to 34.7% of cases. That measurement move is one you can do with middle-school math. Let's do it right now.",
        },
        { type: 'heading', text: 'Worked example: how 91.5% accurate can still be unfair' },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Set the scene.** A face-recognition system is tested on 1,000 people: 900 from Group A and 100 from Group B. (A skewed test sample — door number one is already open.)',
            '**Score each group separately.** It gets 95% of Group A right: 0.95 × 900 = 855 correct. It gets only 60% of Group B right: 0.60 × 100 = 60 correct.',
            '**Compute overall accuracy.** (855 + 60) ÷ 1,000 = 91.5%. On a sales dashboard, that looks like a strong system.',
            "**See the trick.** The majority group dominates the average, so Group B's 4-in-10 failure rate is nearly invisible. Overall accuracy is a weighted average — and the weights are the group sizes.",
            '**Draw the rule.** Never accept one overall number for a system used on many groups. Demand **per-group accuracy**: the same test, reported separately for every group.',
          ],
        },
        {
          type: 'text',
          text: 'Now flip from auditor to builder. In the simulator below, you choose the training data mix yourself — then watch how your choice shows up in who the model serves well and who it fails.',
        },
        {
          type: 'interactive',
          component: 'BiasSimulator',
          caption: 'Pick the training mix, then check the predictions: the skew you feed in is the skew you get out.',
        },
        {
          type: 'checkpoint',
          question: "A city is buying face recognition for its train stations. The vendor's brochure says '96% accurate.' What's the single most important follow-up question?",
          options: [
            "'How fast does it run during rush hour crowds?'",
            "'What is the accuracy for each group, measured separately?'",
            "'Was it trained on more than a million faces?'",
            "'Does it use a decision tree or a neural network?'",
          ],
          correct: 1,
          explanation: "One overall number can hide a large failure rate for smaller groups, as the worked example just showed, so demographic breakdowns are the number to demand. Dataset size and model type don't answer the fairness question, and speed is irrelevant to it — a huge training set can still be badly skewed.",
        },
        { type: 'heading', text: 'Fixing it: two dataset repairs and one safety net' },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Dataset fix 1 — rebalance the sample.** Deliberately collect more varied examples from underrepresented groups until every group has enough data for the model to learn real patterns instead of shortcuts.',
            '**Dataset fix 2 — audit the labels.** Check who labeled the data and under what instructions; re-label with clear guidelines and multiple, diverse labelers wherever a judgment call could differ.',
            '**Deployment safeguard — test per group and keep a human in the loop.** Publish per-group accuracy before launch, keep monitoring after launch, and route high-stakes decisions — arrests, hiring, medical calls — through a human who can overrule the model.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Bias is an engineering property',
          text: "Notice that every fix above is a concrete engineering step, not a vague plea to 'be less biased.' Because bias enters through data and evaluation choices, it can be measured, reduced, and monitored through those same choices. That's why this lesson lives in a machine learning unit — though a whole ethics unit is coming later in this course.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What is shortcut learning? The model latches onto whatever most easily separates the training labels — like snow behind wolves — whether or not it's what you meant.",
            "Where does bias enter? Through sampling (who's in the data), labels (who wrote the answer key), and history (the unfair world the data records).",
            'Can high accuracy hide unfairness? Yes — 91.5% overall can coexist with a 60% score for a smaller group, because overall accuracy is dominated by the majority.',
            "What's the fix? Rebalance the data, audit the labels, and demand per-group accuracy with a human in the loop for high-stakes calls.",
          ],
        },
        {
          type: 'text',
          text: 'That closes Unit 2: you can now train, test, classify, and audit a model. Unit 3 opens the black box itself — the neural network.',
        },
      ],
      quiz: {
        questions: [
          {
            question: "In the wolf-vs-husky study, why did the model rely on snow instead of the animals' features?",
            options: [
              'Snow separated the labels more easily than fur did',
              'Wolves are impossible for image models to recognize',
              'The researchers programmed it to check the background',
              'The model preferred landscape photos to animal photos',
            ],
            correct: 0,
            explanation: 'Models optimize for whatever separates the labels most easily, and in that curated training set snow did the job better than subtle fur and face differences. The researchers rigged the *data*, not the model — nobody programmed a background rule, and models have no preferences.',
          },
          {
            question: 'A voice assistant is trained mostly on adult voices recorded in quiet studios, and it performs poorly for kids and in noisy kitchens. Which door did bias enter through?',
            options: [
              'Label bias — the training transcripts contained errors',
              "Historical bias — children's voices have long been ignored",
              'Sampling bias — the data missed those users and settings entirely',
              'No bias — kids simply need to speak more clearly to it',
            ],
            correct: 2,
            explanation: "The gap between who's in the data (adult voices, quiet studios) and who uses the product (kids, noisy kitchens) is sampling bias. Nothing here points to wrong labels, and while historical bias is real elsewhere, this failure traces directly to the unrepresentative sample.",
          },
          {
            question: 'A system is 95% accurate for 900 Group A members and 60% accurate for 100 Group B members. What is its overall accuracy, and why is that number misleading?',
            options: [
              "91.5% — the majority group hides Group B's failures",
              '77.5% — the simple average of 95% and 60%',
              '95% — the score for the group most users are in',
              '60% — a system is only as accurate as its worst group',
            ],
            correct: 0,
            explanation: "(855 + 60) ÷ 1,000 = 91.5%, a weighted average dominated by the 900-person group, so Group B's 40% failure rate barely moves it. Averaging 95 and 60 ignores group sizes, and while 'only as strong as your worst group' is a good fairness instinct, it isn't how overall accuracy is computed — which is exactly why the single number misleads.",
          },
          {
            question: 'A school district is adopting a face-recognition attendance system. Which safeguard most directly addresses the risks from this lesson?',
            options: [
              'Buy whichever model advertises the highest accuracy',
              'Require per-group accuracy plus human review',
              'Run the system only in the morning when lighting is best',
              'Keep the vendor contract confidential to prevent tampering',
            ],
            correct: 1,
            explanation: "Per-group testing exposes failures a single number hides, and a human review step catches the model's mistakes before any student is marked absent — the two deployment safeguards from this lesson. Shopping for the highest advertised overall accuracy is precisely the move that conceals the problem.",
          },
          {
            question: "Two teams tag customer messages as 'angry' or 'calm' for a support bot's training data. One team labels certain slang as 'angry' far more often. What's the risk?",
            options: [
              'No risk — labels record objective facts about tone',
              'The dataset will grow too large to train on',
              'The model will run more slowly on slang words',
              'The model will learn to flag users of that slang as angry',
            ],
            correct: 3,
            explanation: "Labels encode human judgment calls, and the model treats them as ground truth — so that team's skew becomes the model's skew against everyone who uses the slang. That's label bias; it doesn't affect dataset size or speed, and 'labels are objective' is the very assumption this lesson breaks.",
          },
          {
            question: 'Spiral review from Unit 1: a biased hiring model is following its programming perfectly. Based on Units 1 and 2, where did its unfair behavior come from?',
            options: [
              'A programmer secretly wrote unfair rules into it',
              'The model developed its own opinions about applicants',
              'Computers are naturally biased against certain people',
              'It learned the patterns in biased training data',
            ],
            correct: 3,
            explanation: "Unit 1's rules-vs-learning distinction is the key: in a learned system the behavior comes from the data, so biased data produces biased behavior with no villainous programmer required. Models don't form opinions and computers have no built-in prejudice — they reproduce patterns, which is why fixing the data fixes the model.",
          },
        ],
      },
    },
  ],
};

export default unit;
