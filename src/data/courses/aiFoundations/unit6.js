// Unit 6 — AI and Your Future: real-world AI for good, careers, a hands-on capstone, and where to keep learning.
const unit = {
  id: 'unit-6',
  title: 'AI and Your Future',
  description: "See AI doing real good in medicine, science, and accessibility, explore careers on every side of the field, then build and document your own AI project.",
  icon: 'Rocket',
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1: AI in the Real World
    // ------------------------------------------------------------------
    {
      id: 'ai-in-the-real-world',
      title: 'AI in the Real World',
      duration: '18 min',
      objectives: [
        'Describe what AI models actually do in medicine, science, climate, and accessibility',
        'Identify what data each system learned from and what humans still do',
        'Explain the common pattern: AI finds patterns fast, humans supply judgment and responsibility',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Somewhere right now, a radiologist is working through a stack of chest X-rays. Hidden in one of them is a shadow the size of a grain of rice — early-stage disease that's easy to miss at the end of a long shift. An AI model has already flagged that scan and drawn a box around the spot. The radiologist looks closer, orders a follow-up, and a patient gets treatment months earlier. You've spent five units learning how AI works. This lesson is about what all that machinery is *for* — and why the human in the loop still matters in every single story.",
        },
        { type: 'heading', text: 'Reading medical scans' },
        {
          type: 'text',
          text: "A scan-reading model is a computer vision system — the same kind you met in Unit 3. It's trained on thousands of X-rays, MRIs, or skin photos that expert doctors have already labeled: *this one shows a tumor, this one is healthy*. The network learns to connect pixel patterns to those labels, layer by layer, edges to shapes to suspicious regions.",
        },
        {
          type: 'text',
          text: "What it does well: it never gets tired, it processes scans fast, and it can flag subtle patterns spread across thousands of pixels. What it doesn't do: make the diagnosis. Doctors review every flagged case, weigh the patient's history and symptoms, order more tests, and take responsibility for the decision. The model is a second pair of eyes — not a replacement for the first pair.",
        },
        {
          type: 'checkpoint',
          question: 'A scan-reading model was trained on thousands of X-rays labeled by radiologists. In Unit 2 terms, what kind of learning is that?',
          options: [
            'Unsupervised learning, because no one guided the model',
            'Rule-based programming, because doctors wrote the rules',
            'Supervised learning, because the model learned from labeled examples',
            'Reinforcement learning, because the model was rewarded for correct guesses',
          ],
          correct: 2,
          explanation: "Labeled examples (scan + expert diagnosis) are the signature of supervised learning. It's not rule-based — no one wrote 'if pixels look like X, flag it'; the model learned that mapping from the data itself.",
        },
        { type: 'heading', text: 'Solving a 50-year science puzzle: protein folding' },
        {
          type: 'text',
          text: "Proteins are the tiny machines that run every living cell, and each one is a chain of building blocks that folds into a 3D shape. The shape determines what the protein does — and for decades, predicting that shape from the chain alone was one of biology's hardest open problems. Scientists could solve one protein's structure in the lab, but it took months or years of painstaking work.",
        },
        {
          type: 'text',
          text: "Then came **AlphaFold**, a deep-learning system that trained on the database of protein structures scientists had already solved by hand. It learned the patterns connecting a protein's chain to its folded shape — and started predicting structures for proteins nobody had ever solved. Notice the recipe: it's the same supervised-learning story as the X-ray model, just with proteins instead of pixels. Humans still do the crucial parts: verifying predictions in real experiments, deciding which diseases to target, and designing the actual medicines.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'The pattern behind the pattern',
          text: "Every example in this lesson follows one recipe you already know: gather lots of examples humans have labeled or measured, train a model to find the patterns, then use it to make fast predictions on new cases — with humans checking the ones that matter. If you can spot that recipe, you can understand almost any 'AI breakthrough' headline you'll ever read.",
        },
        {
          type: 'checkpoint',
          question: 'AlphaFold predicts a shape for a brand-new protein no lab has studied. What should happen before scientists build a medicine based on that shape?',
          options: [
            'Nothing — model predictions are more reliable than experiments',
            'Verify the prediction with real lab experiments first',
            'Ask a different AI model to confirm the shape',
            'Wait for the model to become 100% accurate on all proteins',
          ],
          correct: 1,
          explanation: "A prediction is a fast, educated guess — the lab work confirms whether it's right before anyone's health depends on it. Asking another model doesn't help, because two models can share the same blind spots from similar training data.",
        },
        { type: 'heading', text: 'Weather, climate, and captions' },
        {
          type: 'text',
          text: "Weather and climate models learn from decades of recorded observations — temperature, pressure, rainfall, satellite images. AI models trained on that history can spot patterns that help forecast storms and study how ice and oceans are changing. [MIT's Day of AI](https://dayofai.org/curriculum-resources) even has classroom units — like *Climate Stories with Data* and an ice-melt modeling project — where students work with real climate data themselves. But the model outputs probabilities, not decisions: meteorologists interpret forecasts, and city officials decide when to warn people or close schools.",
        },
        {
          type: 'text',
          text: "Accessibility might be AI's quietest win. Live captions turn speech into text in real time using models trained on huge amounts of audio paired with human-written transcripts. For deaf and hard-of-hearing users, that means following a class discussion, a video, or a phone call without waiting for someone to transcribe it. Humans still matter here too: captions garble names and technical terms, so knowing when to double-check is part of using them well. The same pattern-recognition machinery also powers image descriptions for blind users and voice control for people who can't use a keyboard — quiet tools that change daily life more than any flashy demo.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: decoding an AI-for-good headline',
          text: "Headline: 'AI system detects crop disease from drone photos.' Step 1 — ask what the model actually does: it classifies leaf images as healthy or diseased, nothing more. Step 2 — ask what it learned from: thousands of leaf photos that agricultural experts labeled, so its skill is bounded by their labels. Step 3 — ask what humans still do: farmers decide which fields to inspect, whether to treat, and whether the model's flag makes sense given the weather and the season. Three questions, and the headline turns from magic into engineering. Run every AI story you read through this same filter.",
        },
        { type: 'heading', text: 'The division of labor' },
        {
          type: 'text',
          text: "Lay the four domains side by side and the division of labor jumps out: in every row, the AI column is some version of 'find patterns fast in data humans prepared,' and the human column is some version of 'decide what matters and own the outcome.' That split isn't a temporary limitation waiting for better models — it's how responsible deployment is designed on purpose.",
        },
        {
          type: 'table',
          headers: ['Domain', 'What the AI does', 'What humans still do'],
          rows: [
            ['Medical imaging', 'Flags suspicious patterns in scans, fast and tirelessly', 'Diagnose, weigh patient history, choose treatment, take responsibility'],
            ['Protein folding', 'Predicts 3D structures from protein chains', 'Verify in the lab, pick disease targets, design actual medicines'],
            ['Weather & climate', 'Finds patterns in decades of observations; forecasts probabilities', 'Interpret forecasts, decide warnings, plan emergency responses'],
            ['Accessibility (live captions)', 'Converts speech to text in real time', 'Catch errors on names and jargon, design tools people actually need'],
          ],
        },
        {
          type: 'checkpoint',
          question: 'A weather model says there is a 70% chance of severe storms Saturday. Who should decide whether to cancel the outdoor graduation ceremony?',
          options: [
            'The model — it has the most data and no emotions',
            'Nobody — 70% is too uncertain to base a decision on',
            'The vendor who built the model, since they know it best',
            'School officials, using the forecast as one input',
          ],
          correct: 3,
          explanation: "The model supplies a probability; school officials weigh what's at stake — safety, cost, backup plans — and own the call. 'Too uncertain to decide' gets it backwards: acting under uncertainty is exactly what human judgment is for.",
        },
        {
          type: 'interactive',
          component: 'SequenceBuilder',
          caption: 'Put the steps of building a real medical-imaging AI in order — notice how much of the pipeline is human work.',
          props: {
            title: 'From idea to hospital: building a scan-reading AI',
            intro: 'Order the steps a real team would follow to build and deploy an X-ray-flagging model responsibly.',
            steps: [
              'Pick a narrow, well-defined problem: flag possible pneumonia in chest X-rays',
              'Collect thousands of scans, each labeled by expert radiologists',
              'Train the model to connect pixel patterns to those labels',
              'Test it on scans it has never seen, including rare and tricky cases',
              'Deploy it as a flagging assistant, with a doctor reviewing every flagged scan',
              'Monitor real-world performance and retrain when it starts missing cases',
            ],
          },
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What does AI actually do in medicine? It flags patterns in scans for doctors to review — it doesn't diagnose or decide treatment.",
            'What did AlphaFold learn from? The database of protein structures scientists had already solved — supervised learning on solved examples.',
            'Why do humans stay in the loop everywhere? Because models output predictions and probabilities; humans supply context, judgment, and accountability.',
            "What's the one recipe behind all these breakthroughs? Labeled examples in, learned patterns out, human oversight on the decisions that matter.",
          ],
        },
        {
          type: 'text',
          text: "Every system in this lesson was built by a team — and not everyone on that team writes code. Next up: the surprising range of careers behind AI, and which ones might fit you.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'A hospital is adopting an AI model that flags possible tumors in scans. Which setup best matches how these systems are responsibly deployed?',
            options: [
              'The model makes final diagnoses so radiologists can skip routine review',
              'The model flags suspicious scans and a radiologist makes every diagnosis',
              'The model replaces the radiology department, cutting costs and wait times',
              'The model runs only after doctors finish diagnosing, to file the paperwork',
            ],
            correct: 1,
            explanation: "Real deployments keep the doctor in the loop: the model is a fast second reader, and the radiologist reviews every flagged case and owns the diagnosis. 'Skip routine review' is the tempting trap — it's exactly the setup that turns one model error into patient harm.",
          },
          {
            question: 'What did AlphaFold-style protein models primarily learn from?',
            options: [
              'A database of protein structures scientists had solved',
              'The laws of physics, hand-coded into it as folding rules',
              'Trial-and-error experiments the model ran in a robotic lab',
              'Medical records from patients with protein-related diseases',
            ],
            correct: 0,
            explanation: "AlphaFold learned patterns from solved structures — the classic supervised recipe. 'Laws of physics as rules' describes the older rule-based approach from Unit 1 that this data-driven method famously outperformed.",
          },
          {
            question: 'Spiral (Unit 2): Why must a scan-reading model be evaluated on scans it never saw during training?',
            options: [
              'Because a bigger total dataset always makes a model more accurate',
              'Because radiologists use the second set to double-check their labels',
              'Because unseen scans reveal real learning, not memorization',
              'Because the model needs fresh scans to keep learning after launch',
            ],
            correct: 2,
            explanation: "A model can score perfectly on data it memorized and still fail on new patients — that's overfitting from Unit 2, and held-out scans are how you catch it before deployment. The test set isn't there to audit labels or to keep training the model; its only job is to measure how well the model generalizes.",
          },
          {
            question: 'A coastal city wants better flood preparation. What role should an AI weather model play?',
            options: [
              'Automatically order evacuations when it predicts flooding',
              'Replace the meteorology team, since the model has more data',
              'None — weather is too chaotic for any model to forecast usefully',
              'Produce forecasts for meteorologists and officials to act on',
            ],
            correct: 3,
            explanation: "The model forecasts probabilities; trained meteorologists interpret them and accountable officials decide on warnings. Auto-evacuation sounds efficient but hands a high-stakes judgment call to a system that can't weigh costs, context, or consequences.",
          },
          {
            question: 'Live captions for a deaf student are generated by a model trained on what?',
            options: [
              'A complete dictionary of every word in English',
              'Recorded audio paired with human transcripts',
              'Grammar rules written out by professional linguists',
              "Recordings of the student's own earlier conversations",
            ],
            correct: 1,
            explanation: "Speech recognition learns from audio-plus-transcript pairs — labeled examples again. A dictionary or grammar rules can't teach a model how real speech sounds across accents, speeds, and noisy rooms.",
          },
          {
            question: "Across medicine, protein science, climate, and accessibility, what's the common thread in what humans still do?",
            options: [
              'Humans re-check the arithmetic happening inside the model',
              'Humans hand-label every single output the model produces',
              'Humans set the goals and own the decisions',
              'Humans only keep the servers and software running',
            ],
            correct: 2,
            explanation: "AI supplies fast pattern-finding; humans set the purpose, judge the hard cases, and carry the accountability. Hand-labeling every output would defeat the point of automation — humans spend their attention on the flagged, high-stakes cases instead.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 2: Careers in AI
    // ------------------------------------------------------------------
    {
      id: 'careers-in-ai',
      title: 'Careers in AI',
      duration: '15 min',
      objectives: [
        'Distinguish technical and non-technical AI career paths and what each actually does day to day',
        "Apply the 'tasks, not jobs' lens to how AI changes careers",
        'Identify what you can study now — including the non-coding skills — to prepare for an AI-shaped future',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Quick: picture someone who 'works in AI.' If you imagined a programmer typing code in a dark room, you got maybe a third of the picture. The teams behind the scan-readers and caption models from last lesson also include designers who make the tools usable, policy writers who decide the rules, ethicists who audit for bias, and communicators who explain it all to the public. Some of the most important people in AI rarely write a line of code — and some of the most AI-shaped careers of your future don't have 'AI' in the title at all.",
        },
        { type: 'heading', text: 'The technical builders' },
        {
          type: 'text',
          text: "**Machine learning engineers** build and tune the models themselves — choosing architectures, running training, squeezing out errors. **Data scientists** live one step earlier in the pipeline: finding data, cleaning it, and figuring out whether it's trustworthy enough to learn from (remember from Unit 2 — bias in, bias out, so this job carries huge responsibility). **Robotics engineers** connect models to the physical world, where a wrong prediction can knock over a shelf instead of just mislabeling a photo.",
        },
        { type: 'heading', text: 'The essential non-coders' },
        {
          type: 'text',
          text: "**AI product managers** decide what gets built and why — which feature helps users most, what's feasible, what ships first. **UX designers** figure out how humans actually experience an AI tool: where the confidence score goes, how errors are shown, why people ignore a chatbot's hints. **Policy analysts** write the rules — for governments, school districts, and companies — about where AI can and can't be used. **AI ethics specialists** audit systems for bias and harm before and after launch. And **teachers and communicators** translate all of it for everyone else — arguably the job this course exists to prove matters.",
        },
        {
          type: 'checkpoint',
          question: 'A company is about to launch a hiring-screening model. Which professional would audit its training data for representation gaps before launch?',
          options: [
            'An AI ethics specialist',
            'A robotics hardware engineer',
            'A user experience designer',
            'A social media manager',
          ],
          correct: 0,
          explanation: "Auditing for bias and harm is the ethics specialist's core job — applying exactly the 'bias in, bias out' analysis you learned in Unit 2. A user experience designer shapes how people interact with the tool, not whether its training data is fair.",
        },
        { type: 'heading', text: 'Tasks, not jobs' },
        {
          type: 'text',
          text: "Here's the most useful lens for thinking about AI and work: AI automates **tasks**, not whole **jobs**. A nurse's job includes charting paperwork (automatable), spotting when a patient looks 'off' (barely automatable), and comforting a scared family (not automatable at all). When AI takes over some tasks, the job doesn't vanish — it shifts toward the human parts, and often adds a new task: supervising the AI.",
        },
        {
          type: 'text',
          text: "That's why 'every career becomes AI-adjacent' isn't hype. Farmers already use crop-disease detection models. Journalists verify synthetic media. Lawyers check AI-drafted documents for hallucinated citations — a Unit 4 skill, in a courtroom. The question for your future isn't 'will my job involve AI?' It's 'will I understand the AI in my job well enough to use it wisely and catch its mistakes?' That understanding — the thing you've been building for six units — is itself becoming a job qualification, the way basic computer skills did a generation ago.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: one career, task by task',
          text: "Take a sports journalist. Step 1 — list the tasks: gathering game stats, writing recaps, interviewing players, investigating stories, building trust with sources. Step 2 — mark automation exposure: stats gathering is largely automated already; routine recaps can be AI-drafted; interviews, investigation, and trust are deeply human. Step 3 — spot the *new* tasks: fact-checking AI drafts, detecting fake game footage. Conclusion: the job survives, but the skill mix shifts toward judgment, verification, and human connection. Try these three steps on any career you're curious about — that's the whole method.",
        },
        {
          type: 'interactive',
          component: 'SortingGame',
          caption: 'Eight real days-in-the-life. Sort each one into the career category it belongs to.',
          props: {
            title: 'Whose job is this?',
            categories: [
              { id: 'build', label: 'Build the models' },
              { id: 'shape', label: 'Shape the product' },
              { id: 'rules', label: 'Set the rules' },
              { id: 'teach', label: 'Teach and translate' },
            ],
            items: [
              {
                text: 'You spend the day tuning a neural network so it recognizes crop diseases from drone photos',
                category: 'build',
                explanation: "Training and tuning models is the machine learning engineer's core work — a 'build' role.",
              },
              {
                text: "You dig through a hospital's messy records to decide which data is clean and representative enough to train on",
                category: 'build',
                explanation: 'Data scientists do this — technical detective work that determines whether the model inherits bias. Build-side, even though it involves little glamorous coding.',
              },
              {
                text: "You interview students about why they ignore the AI tutor's hints, then redesign the hint screen",
                category: 'shape',
                explanation: "That's UX design: studying how humans actually use an AI product and reshaping it around them.",
              },
              {
                text: 'You decide which of three proposed AI features ships first, weighing user needs against cost and risk',
                category: 'shape',
                explanation: "Prioritizing what gets built and why is the AI product manager's job — shaping the product, not coding it.",
              },
              {
                text: 'You audit a resume-screening model for bias against certain groups before the company is allowed to use it',
                category: 'rules',
                explanation: 'AI ethics auditing — checking systems for harm and fairness — sits on the rules-and-accountability side of the field.',
              },
              {
                text: "You help draft a school district's policy on when students may use chatbots for assignments",
                category: 'rules',
                explanation: 'Policy work: writing the rules institutions follow. It needs AI literacy and strong writing more than programming.',
              },
              {
                text: 'You run workshops helping teachers spot AI-generated misinformation',
                category: 'teach',
                explanation: 'Education and training — translating AI literacy for people who need it. Districts have been adding AI training for teachers quickly, so this kind of work keeps growing.',
              },
              {
                text: 'You write plain-language explanations of how a medical AI works, so patients understand what it can and cannot do',
                category: 'teach',
                explanation: 'Science communication: turning technical reality into honest, clear language. Writing skill is the core qualification.',
              },
            ],
          },
        },
        { type: 'heading', text: 'What to study now' },
        {
          type: 'text',
          text: "Here's the good news: nobody expects you to pick a career at fourteen. What you can do now is build the raw materials every one of these paths draws on. And one more thing matters as much as any class — evidence you can *do* something. The capstone you'll build next lesson is exactly that: a project you can show, explain, and defend. A folder of small, finished projects beats a list of intentions in every field this lesson covered.",
        },
        {
          type: 'list',
          items: [
            '**Math** — statistics and algebra are the language of models; Units 2 and 3 were built on them.',
            "**Computer science** — Python is the field's default language; even non-coders benefit from reading it.",
            '**Writing** — policy memos, model cards, documentation, explanations: half the jobs above are writing jobs.',
            '**Ethics and civics** — someone has to argue well about fairness, privacy, and power. Unit 5 was your head start.',
            '**Your own interests** — AI plus biology, art, law, sports, or music beats AI alone. Domain knowledge is what makes AI useful.',
          ],
        },
        {
          type: 'checkpoint',
          question: "Your aunt, a nurse, worries AI will take her job. Using the task lens, what's the most accurate response?",
          options: [
            "She's right — hospitals will fully automate nursing within a few years",
            'Some tasks like charting may be automated; the job shifts',
            "AI can't touch healthcare jobs, because medicine is too regulated",
            'She should retrain as a programmer before nursing is automated',
          ],
          correct: 1,
          explanation: "The task lens says jobs are bundles of tasks with different automation exposure: routine charting is exposed, while judgment and patient care shift toward her — and supervising the AI becomes a new task. Both extremes ('fully automated' and 'can't affect healthcare') ignore that jobs shift rather than simply vanish or stay frozen.",
        },
        {
          type: 'text',
          text: "One last reframe before the takeaways: paths into AI are rarely straight lines. Plenty of ethics specialists started in philosophy or journalism; plenty of ML engineers started as biologists who needed a model for their own research question. The pattern that repeats is curiosity plus one real project — which is exactly where you're headed next.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'Who works in AI? Model builders and data scientists — but equally product managers, designers, policy writers, ethicists, and teachers.',
            'Does AI take jobs? It automates tasks, not jobs — work shifts toward judgment, care, and supervising the AI.',
            'What should you study now? Math and CS for technical paths, but writing, ethics, and your own passions count just as much.',
            "What makes a career 'AI-adjacent'? Almost everything — the differentiator is understanding AI well enough to use it wisely and catch its mistakes.",
          ],
        },
        {
          type: 'text',
          text: "Reading about careers is one thing. Doing the work is another. In the next lesson, you'll build and document an AI project of your own — the same steps, at student scale, that the professionals in this lesson do for a living.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Maya loves debate and persuasive writing but has no interest in daily coding. Which AI career path fits her best?',
            options: [
              'Machine learning engineer, because AI careers require coding',
              'Robotics engineer, because debate skills transfer to hardware',
              'AI policy analyst, writing rules for how AI may be used',
              'She has no path into AI without learning to program first',
            ],
            correct: 2,
            explanation: "Policy work runs on exactly her strengths — drafting rules, arguing for them, and reading AI systems well enough to regulate them — not daily programming. The 'no path without programming' option is the misconception this whole lesson exists to correct.",
          },
          {
            question: "What does 'AI automates tasks, not jobs' mean?",
            options: [
              'AI only automates jobs that nobody actually wants to do',
              'Jobs mix automatable and human tasks, so work shifts',
              'AI automates whole professions at once, easiest ones first',
              'Only repetitive manual-labor tasks can ever be automated',
            ],
            correct: 1,
            explanation: "Every job mixes automatable tasks (routine, pattern-based) with human ones (judgment, care, trust), so AI reshapes jobs rather than erasing them whole. 'Entire professions at once' is the headline version this lens is designed to replace.",
          },
          {
            question: 'Dev loves math and Python and wants to build models someday. Which combination should he prioritize now?',
            options: [
              'Statistics, algebra, and computer science',
              'Only art electives, since AI will write all future code',
              'Memorizing the names of famous AI companies',
              'Waiting until college, since nothing before that counts',
            ],
            correct: 0,
            explanation: 'Stats and algebra are the math under every model you met in Units 2 and 3, and CS is how you build with them. Waiting until college wastes years — the foundations are exactly what middle and high school math already teaches.',
          },
          {
            question: 'Spiral (Unit 4): An AI communications specialist explains a new chatbot to the public. Which Unit 4 concept is most important for them to convey honestly?',
            options: [
              'That the chatbot stores every fact in a giant verified database',
              'That the chatbot understands language exactly like a human does',
              'That chatbots are too complicated for the public to reason about',
              'That fluent, confident text can still be factually wrong',
            ],
            correct: 3,
            explanation: "Hallucination follows straight from the mechanism: the model predicts likely next words rather than retrieving verified facts, so fluency is no guarantee of accuracy. The 'verified database' option is the exact misconception, from Unit 4, that causes people to over-trust AI output.",
          },
          {
            question: 'Which of these is primarily a technical, model-building role?',
            options: [
              'AI policy analyst at an agency',
              'Machine learning engineer',
              'Science communicator at a museum',
              'AI product manager at a startup',
            ],
            correct: 1,
            explanation: 'ML engineers design, train, and tune the models themselves. Product managers, policy analysts, and communicators all need AI literacy, but their daily work is deciding, writing, and explaining — not building.',
          },
          {
            question: "Spiral (Units 2 & 5): A new AI ethics auditor's first assignment is a hiring model. Based on earlier units, what should they examine first?",
            options: [
              'The layout and color scheme of the results dashboard',
              'How fast the model returns a decision per applicant',
              'The training data, for bias and representation gaps',
              'Whether the model runs on up-to-date server hardware',
            ],
            correct: 2,
            explanation: "Bias in, bias out: a hiring model trained on biased historical decisions will reproduce them, so auditing the data for historical bias and representation gaps comes first. Speed and hardware affect cost, not fairness — the tempting 'technical' answers miss where the harm actually enters.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 3: Capstone — Build Your Own AI
    // ------------------------------------------------------------------
    {
      id: 'capstone-build-your-own-ai',
      title: 'Capstone: Build Your Own AI',
      duration: '30 min',
      objectives: [
        'Choose a well-scoped problem and design an AI project around it',
        'Train and test a classifier with balanced data and honest edge-case testing',
        'Write a model card documenting intended use, performance, limitations, and ethics',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Every AI system you've studied — the scan reader, the caption model, AlphaFold — started the same way: someone picked a problem, gathered data, trained a model, tested it honestly, and wrote down what it could and couldn't do. Today you run that entire pipeline yourself. By the end of this lesson you'll have a working (or fully designed) AI project *and* the document professionals use to keep AI honest: a model card. This is the capstone — everything from Units 1 through 5 shows up here.",
        },
        { type: 'heading', text: 'What makes a good capstone problem?' },
        {
          type: 'text',
          text: "The number one mistake in student AI projects isn't bad training — it's picking a problem AI can't realistically solve, or one you can't get data for. A good problem is **narrow** (classify three things, not thirty), **visual or textual** (so a browser tool can handle it), **data-gatherable** (you can collect examples yourself, ethically), and **meaningful to you** (you'll test it harder if you care).",
        },
        {
          type: 'checkpoint',
          question: 'Which problem is the best fit for a Teachable Machine capstone?',
          options: [
            "Predicting next week's lottery numbers from past draws",
            'Diagnosing diseases from real patient scans you found online',
            'Sorting photos of recycling into paper, plastic, and metal',
            "Detecting your cat's emotions from its meows",
          ],
          correct: 2,
          explanation: 'Recycling sorting is narrow, visual, and you can gather balanced photos yourself. Lottery draws have no learnable pattern, patient scans raise serious privacy and consent problems, and cat emotions have no reliable labels to train on — three classic project traps.',
        },
        { type: 'heading', text: 'Choose your build' },
        {
          type: 'list',
          items: [
            '**Path A — Image classifier (recommended):** train a [Teachable Machine](https://teachablemachine.withgoogle.com/) model on a problem you care about — recycling sorter, hand-gesture recognizer, plant-vs-weed spotter. No account needed to train — you only sign in if you want to save the project to Google Drive. Full steps below.',
            "**Path B — Sentiment project:** on [Machine Learning for Kids](https://machinelearningforkids.co.uk/) (free, though your class may need a teacher-managed account), train a text model on kind vs. mean phrases (the ready-made 'Make me happy' project) and wire it into a Scratch character that reacts to what you type.",
            '**Path C — Design-only model card:** no code at all. Fully design an AI you wish existed — define its purpose, its training data, its risks — and write its complete model card. All the judgment, none of the webcam.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Data ethics starts with your data',
          text: "If your project involves photos of people, get their permission first, explain what you're using the images for, and delete them when asked. If it involves text from real people, remove names. You spent Unit 5 studying privacy and consent — your own dataset is where you prove you meant it.",
        },
        {
          type: 'text',
          text: "All three paths run the same five-stage arc — define, gather, train, test, document — because that arc *is* the project, whatever the tool. Path A gives you the fullest hands-on loop, Path B adds text data and a playable result, and Path C trades the build for deeper design thinking. Pick the one that fits your setup and your interests, not the one that sounds most impressive.",
        },
        {
          type: 'tryIt',
          title: 'Path A: Train, break, and document a classifier',
          intro: "About 25 minutes. You'll need a laptop with a webcam (or a folder of images). Paths B and C: follow the same arc — define, gather, train, test, document — inside your tool of choice.",
          url: 'https://teachablemachine.withgoogle.com/',
          urlLabel: 'Open Teachable Machine',
          steps: [
            "**Define your classes.** Pick 2-3 categories your model will tell apart — for a recycling sorter: *paper*, *plastic*, *metal*. Write one sentence on who would use this and why. That sentence becomes your model card's 'intended use.'",
            "**Gather balanced data.** Create an Image Project and collect at least 20 samples per class — and keep the counts roughly equal. Vary the background, lighting, and angle on purpose. (Remember Unit 2: a model trained only on shiny cans photographed on your desk learns 'my desk,' not 'metal.')",
            '**Train.** Click Train Model. With a few dozen samples per class it usually finishes in well under a minute — the model is learning which pixel patterns separate your classes, exactly like the scan reader in Lesson 1, just smaller.',
            '**Test on easy cases first.** Show it clear examples of each class and watch the confidence scores. High confidence on obvious cases is your baseline — not your final answer.',
            '**Now try to break it.** Test edge cases: a crumpled item, weird lighting, an object from a class it never saw, a friend holding the item instead of you. Write down every failure — each one is a line in your model card, not an embarrassment.',
            '**Fix one weakness and retrain.** Add 10 more varied samples to your weakest class, retrain, and re-run the same edge cases. Did the failures change? This loop — test, diagnose, add data, retrain — is the real daily work of machine learning.',
            '**Write your model card** using the template below. This is the deliverable: a working demo without documentation is a toy; a documented model is a project.',
          ],
        },
        {
          type: 'text',
          text: "Notice what step five asks of you: to attack your own work. Professionals call this red-teaming, and it flips the emotional script of a school project. You're not hoping the model succeeds in the demo — you're hunting for the conditions where it fails, because found failures become documentation and unfound ones become surprises for users. The best capstone in the class isn't the one with zero failures; it's the one whose failures are all known, written down, and explained.",
        },
        { type: 'heading', text: 'The model card: your honest label' },
        {
          type: 'text',
          text: "Professionals publish model cards so users know what a model is for and where it fails — you saw the idea in Unit 4 with LLMs, and programs like [Experience AI](https://experience-ai.org/en/) have students write one to evaluate the model they trained. Copy this template and fill in every section with specifics:",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Model name and intended use.** What it does, who it's for, and what it should NOT be used for. ('Sorts photos of clean, single recycling items for a school recycling station. Not for food-contaminated items or mixed piles.')",
            "**Training data.** What you collected, how many samples per class, how you gathered them, and known gaps. ('60 photos: 20 per class, one phone camera, mostly indoor lighting. No crushed or dirty items.')",
            "**Performance.** How you tested it and what you saw — including confidence scores on easy cases AND edge cases. Be specific: 'confident and correct on clean items; unreliable on crumpled paper.'",
            '**Limitations.** The failure list from your edge-case testing. Every honest limitation makes your project stronger, not weaker.',
            '**Ethical considerations.** Who could be harmed if this model is wrong or misused? What did you do about consent and privacy in your data? What would you want a user to know before trusting it?',
            "**Human role.** What should a person still check or decide when using this model? (Even your recycling sorter needs one: 'a human makes the final call on anything under 80% confidence.')",
          ],
        },
        {
          type: 'checkpoint',
          question: "Your classifier works great on your own photos but fails whenever your friend tests it. What's the most likely cause?",
          options: [
            'Your friend is holding the items wrong on purpose',
            'Your training data was too narrow — all gathered by you',
            'Teachable Machine models only work for the person who trained them',
            'The model needs longer training, not different data',
          ],
          correct: 1,
          explanation: "Every sample came from you, in your setting, so the model learned whatever consistently separated your classes — including your lighting, background, and hands. That's the narrow-data trap from Unit 2, and more training time on the same narrow data just memorizes the narrowness harder.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: a strong limitations section',
          text: "Weak: 'The model sometimes makes mistakes.' Strong: 'Fails on crumpled paper (reads as plastic, ~60% confidence), on metal in dim light, and on any item held by someone whose hands weren't in the training photos. Never tested on glass — do not use for glass.' Why the strong one wins: it names *specific* failure conditions a user can actually check before trusting the model. Vague honesty protects nobody; specific honesty is what makes a model card useful.",
        },
        {
          type: 'checkpoint',
          question: 'During testing you discover the model mislabels shiny plastic bags as metal. Where does this belong in your model card?',
          options: [
            'Nowhere — reporting failures makes the project look bad',
            'In the intended-use section, listed as a feature',
            'In the training-data section, where all data issues belong',
            'In the limitations section, described specifically',
          ],
          correct: 3,
          explanation: 'Limitations exist precisely to record specific, tested failure modes so users know when not to trust the model. Hiding failures is how real-world AI harms happen — and while the root cause may be your training data, the user-facing warning belongs in limitations where people will actually read it.',
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What makes a good AI project problem? Narrow scope, gatherable data, ethical collection, and a reason to care.',
            'Why balance and vary your training data? Because the model learns whatever consistently separates the classes — including your background and lighting if you let it.',
            "Why hunt for your own model's failures? Because every failure you find and document is one a user won't be surprised by.",
            'What turns a demo into a real project? The model card — intended use, data, performance, limitations, ethics, and the human role, all in specifics.',
          ],
        },
        {
          type: 'text',
          text: "You've now done, at small scale, what every AI team on Earth does: framed a problem, trained on data, tested honestly, and documented the truth. One lesson left — where you've been, and where you can go next.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Your classifier hits 95% confidence on your training photos but fails badly on brand-new photos. What should you do first?',
            options: [
              'Ship it — 95% on the training photos proves it works',
              'Gather more varied data and re-test on new photos',
              'Delete the failing test photos so results look consistent',
              'Rename the classes so the wrong answers count as correct',
            ],
            correct: 1,
            explanation: "High training confidence with poor performance on new data is overfitting to narrow data — the fix is more varied examples plus honest testing on photos the model has never seen (Unit 2). 'Ship it' is the tempting trap: training-data performance tells you almost nothing about the real world.",
          },
          {
            question: 'Before training, your dataset has 40 photos of paper, 38 of plastic, and 5 of metal. What is the best move?',
            options: [
              'Collect more metal photos until the classes balance',
              'Train anyway — the model will figure out the imbalance',
              'Delete paper and plastic photos until every class has 5',
              'Merge metal into plastic, since both can look shiny',
            ],
            correct: 0,
            explanation: "With only 5 metal examples the model barely learns that class and will default to guessing the bigger ones — so you add data, not delete it. Cutting everything to 5 'balances' the dataset by making the whole model data-starved.",
          },
          {
            question: 'Which intended-use statement belongs on a model card?',
            options: [
              "'Uses cutting-edge AI to revolutionize recycling at your school.'",
              "'Highly accurate, and works reliably in every lighting condition.'",
              "'Sorts clean single items at a school station, not mixed piles.'",
              "'For all audiences and all recycling purposes, worldwide.'",
            ],
            correct: 2,
            explanation: "A real intended-use statement names the setting, the inputs it expects, and the cases it excludes — what the model is for AND what it's not for. The other three are marketing language: impressive-sounding, unverifiable, and useless to someone deciding whether to trust the model.",
          },
          {
            question: "A classmate suggests testing your model only on its own training photos 'so the accuracy looks higher for the presentation.' Why is this a bad idea?",
            options: [
              "It isn't — presentations should show the best possible numbers",
              'Training photos take longer to re-test than brand-new photos',
              'Teachable Machine blocks you from re-testing training photos',
              'It reports memorization, not learning on new data',
            ],
            correct: 3,
            explanation: "Testing on training data is like grading yourself on questions you already saw with the answer key — the score is real but says nothing about how the model handles anything new (Unit 2's core rule). It's also dishonest documentation, the exact opposite of what a model card is for.",
          },
          {
            question: 'Jae chose Path C: a design-only model card for an AI that flags heat-stressed street trees, with no working code. What makes this a legitimate capstone?',
            options: [
              "Nothing — a capstone without code doesn't count",
              'It forces the same design decisions a real build would',
              'Model cards are only real when a company publishes them',
              'It counts only if Jae promises to code it later',
            ],
            correct: 1,
            explanation: "Path C still requires defining the data needed, the intended use, the failure risks, and the ethics — the design work most real-world AI failures trace back to. Code makes a project runnable; that design judgment is what makes it responsible.",
          },
          {
            question: "Spiral (Unit 5): Your gesture recognizer would work better with photos of classmates' hands. What is the right way to get them?",
            options: [
              "Photograph classmates during lunch — hands aren't private",
              "Scrape hand photos from classmates' social media profiles",
              'Skip consent, since the model never leaves your laptop',
              'Ask permission, explain the use, and delete on request',
            ],
            correct: 3,
            explanation: "Consent means people know exactly what they're contributing to and can say no or withdraw later — the Unit 5 standard, applied to your own dataset. 'It stays on my laptop' is the tempting rationalization: consent is about respecting people, not about where the file lives.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 4: Your AI Journey
    // ------------------------------------------------------------------
    {
      id: 'your-ai-journey',
      title: 'Your AI Journey',
      duration: '15 min',
      objectives: [
        'Connect the six units of this course into one coherent story of how AI works and why it matters',
        'Choose your next learning step from a set of vetted free resources',
        'Demonstrate readiness for the final assessment',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Back in Unit 1, you argued about whether a thermostat counts as AI. It seems like a small question now — but look at what it started. Since then you've trained classifiers, computed a neuron's output, played the next-word game that explains ChatGPT, caught hallucinations in the act, audited datasets for bias, and written a model card for your own project. Before the final assessment, let's replay the whole journey — because the six units were never six separate topics. They were one story.",
        },
        { type: 'heading', text: 'The story you now know' },
        {
          type: 'text',
          text: '**It started with a definition** (Unit 1): AI is a moving target, and the deepest divide in the field is rules versus learning — systems that follow instructions humans wrote versus systems that find patterns in data. That one distinction unlocked everything after it.',
        },
        {
          type: 'text',
          text: '**Then you learned how machines learn** (Unit 2): features, labels, training and testing on separate data, decision trees — and the rule that haunts every AI system since: bias in, bias out. **Unit 3** went under the hood: neurons with weights, networks that learn by adjusting those weights to shrink error, vision models building edges into shapes into objects, and the staggering scale of modern models.',
        },
        {
          type: 'text',
          text: '**Unit 4** applied all of it to the AI you actually use: language models as next-word predictors at scale, prompting as a skill, hallucination as a consequence of the mechanism — fluency without guaranteed truth — and synthetic media you now know how to question. **Unit 5** asked the human questions: whose bias, whose data, whose rules? And **Unit 6** — this unit — turned it forward: AI doing real good, careers on every side of it, and a project with your name on it.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The five questions you now ask automatically',
          text: "Each unit handed you a *question*, not just facts. Unit 1: is this system following rules or patterns? Unit 2: what data did it learn from, and what's missing? Unit 3: what is it actually optimizing? Unit 4: is this fluent output actually true? Unit 5: who benefits, who's harmed, and who decided? Those five questions are the course, compressed — and they'll still work on AI systems that haven't been invented yet.",
        },
        {
          type: 'checkpoint',
          question: "A friend asks: 'Why did the chatbot invent a book that doesn't exist?' Which idea from your journey explains it?",
          options: [
            'The chatbot was hacked to spread misinformation',
            'It predicts likely next words, not verified facts',
            'The book exists but is too obscure to show up online',
            'Chatbots invent things only when users ask trick questions',
          ],
          correct: 1,
          explanation: "That's hallucination (Unit 4), and it falls straight out of the mechanism (Units 3-4): the model generates fluent, plausible continuations that were never checked against facts. No hack or trick question required — a made-up title can simply be a very probable-sounding sequence of words.",
        },
        {
          type: 'video',
          videoId: 'hJP5GqnTrNo',
          title: 'How AI Could Save (Not Destroy) Education — Sal Khan (TED)',
          duration: '15 min',
          note: "You've spent this course learning about AI. Sal Khan's talk flips it: what AI could do for learning itself. Watch with your Unit 4 and 5 skills switched on — where do you agree, and where would you push back?",
        },
        { type: 'heading', text: 'Where to go next' },
        {
          type: 'text',
          text: "This course made you AI-literate. What comes next depends on which thread you want to pull — more rigor, more code, more teaching, or more building. Every resource below is free, and you're genuinely ready for all of them.",
        },
        {
          type: 'links',
          title: 'Your next courses — all free',
          items: [
            {
              label: 'Elements of AI',
              url: 'https://www.elementsofai.com/',
              description: 'The University of Helsinki and MinnaLearn course — the ideas you know, with more math and depth. The natural next step for rigor.',
            },
            {
              label: "CS50's Introduction to AI with Python",
              url: 'https://cs50.harvard.edu/ai/',
              description: "Harvard's course: build search, learning, and neural networks in real Python. Free to take online (only the optional verified certificate costs money); best after some programming experience.",
            },
            {
              label: 'Code.org AI hub',
              url: 'https://code.org/ai',
              description: "Videos, full curricula, and the AI Chat Lab inside Code.org's Exploring Generative AI, where you build and interrogate your own chatbot.",
            },
            {
              label: 'Kaggle Learn',
              url: 'https://www.kaggle.com/learn',
              description: 'Short, hands-on coding tutorials on real datasets — the on-ramp to practical machine learning.',
            },
            {
              label: 'MIT Day of AI',
              url: 'https://dayofai.org/',
              description: "MIT's K-12 AI curriculum — free, but you register for access — including data-science and climate-modeling units for grades 9-12.",
            },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Which one first?',
          text: "Want deeper concepts without code? **Elements of AI.** Ready to program models? **Kaggle Learn**, then **CS50 AI** when you're comfortable in Python. Want to build chatbots and share AI with others? **Code.org's AI hub.** There's no wrong door — the skills compound no matter where you start.",
        },
        {
          type: 'text',
          text: "And don't learn alone if you can help it. A coding club, a science-fair team, or one friend doing Elements of AI alongside you doubles your odds of finishing — someone to explain ideas to is the best retrieval practice there is. If your school has no AI club, you're now literally qualified to start one: you have a course's worth of material and a capstone to demo at the first meeting.",
        },
        {
          type: 'text',
          text: "Before the deck below: a study tip straight from learning science. Testing yourself — trying to produce the answer before you see it — builds far stronger memory than re-reading notes. So don't flip these cards early. Say your answer out loud, *then* flip. The cards you get wrong are gifts: they tell you exactly which unit to skim before the final.",
        },
        {
          type: 'interactive',
          component: 'FlashcardDeck',
          caption: "Ten terms, six units, one deck. If you can explain each card in your own words before flipping, you're ready for the final.",
          props: {
            title: 'Whole-course review deck',
            cards: [
              { front: 'Rule-based system vs. learned model', back: 'Rule-based: humans write the instructions (if X then Y). Learned: the system finds patterns in data. The core distinction from Unit 1 that defines modern AI.' },
              { front: 'Training data', back: 'The examples a model learns from. Its quality, variety, and balance set the ceiling on everything the model can do — bias in, bias out.' },
              { front: 'Supervised learning', back: 'Learning from labeled examples (input + correct answer), like scans labeled by radiologists. The recipe behind most AI you met in this course.' },
              { front: 'Training vs. test data', back: 'Train on one set, evaluate on unseen data. Performance on new data reveals real learning; performance on training data can be mere memorization.' },
              { front: 'Overfitting', back: 'When a model memorizes its training examples (including their quirks) instead of learning general patterns — great training scores, poor real-world results.' },
              { front: 'Neural network weights', back: 'The adjustable numbers connecting neurons. Learning IS adjusting weights to reduce error, step by step. No rules are written — numbers are tuned.' },
              { front: 'Token', back: "The chunks of text a language model actually processes. LLMs predict the next token over and over — that's the whole trick behind the chatbot." },
              { front: 'Hallucination', back: "Fluent, confident output that's false. A side effect of next-word prediction: the model generates what's likely, not what's verified. Always fact-check." },
              { front: 'Algorithmic bias', back: 'Unfair model behavior inherited from skewed training data or design choices — facial recognition failing on some faces, hiring models repeating past discrimination.' },
              { front: 'Model card', back: 'The honest label for an AI system: intended use, training data, performance, limitations, ethical considerations, and the human role. You wrote one in the capstone.' },
            ],
          },
        },
        {
          type: 'checkpoint',
          question: "Spiral (Unit 2): A model predicts a house's sale price from its size and location. Is that classification or regression?",
          options: [
            'Classification, because houses fall into categories',
            'Neither — price prediction requires a language model',
            'Regression, because the output is a continuous number',
            'Classification, because the model was trained on labeled data',
          ],
          correct: 2,
          explanation: "Predicting a number on a continuous scale is regression; sorting into categories is classification. 'Trained on labeled data' is the distractor to notice — both classification and regression can be supervised, so labels don't decide which one it is.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'AI literacy is a habit, not a certificate',
          text: "The field will keep moving — new models, new capabilities, new headlines — and no course can inoculate you against all of it. What lasts is the habit: when you meet a new AI system, ask the five questions from this lesson before you trust it, share it, or build on it. Keep your capstone model card somewhere you can find it; in a year, rereading it will show you exactly how much you knew and how much you've grown.",
        },
        { type: 'heading', text: 'The final assessment and your certificate' },
        {
          type: 'text',
          text: "One step remains: the final assessment. It draws questions from all six units — definitions, machine learning, neural networks, generative AI, ethics, and this unit — because that's what mastery means: the ideas still work when they're mixed together. Pass it and you earn your AI Foundations certificate. If a section feels shaky, revisit that unit's key takeaways and retake the lesson quiz first; the flashcard deck above is a fast diagnostic. You've trained on good data. Time to test on the real thing.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What was the one story of this course? From rules vs. learning, to learning from data, to networks, to generative AI, to ethics, to your own build — each unit was built on the last.',
            "What's the single most transferable habit you learned? Ask what a system was trained on, test it on what it hasn't seen, and never mistake fluency for truth.",
            'Where do you go next? Elements of AI or Code.org for concepts, Kaggle Learn then CS50 AI for code, Day of AI for projects — all free.',
            'What earns the certificate? Passing the final assessment, which mixes all six units — review with the flashcards, then go show what you know.',
          ],
        },
      ],
      quiz: {
        questions: [
          {
            question: "Spiral (Unit 1): A spam filter built entirely from hand-written rules like 'if the subject contains FREE, mark as spam' is which kind of system?",
            options: [
              'A rule-based system, because humans wrote its logic',
              'A learned model, because it processes real email data',
              'A neural network, because spam filtering is a hard problem',
              'Generative AI, because it generates the spam labels',
            ],
            correct: 0,
            explanation: "Humans wrote the instructions explicitly, so it's rule-based — no training data, no learning. 'It processes data' is the trap: what makes a system learned is that its behavior came from data, not that data flows through it.",
          },
          {
            question: "Spiral (Unit 2): What does 'bias in, bias out' mean?",
            options: [
              'Models are programmed to be biased by careless engineers',
              'A model trained on skewed data reproduces those skews',
              'All AI systems become biased over time no matter what',
              'Bias only affects models that work with images of faces',
            ],
            correct: 1,
            explanation: "A model learns whatever patterns its data contains — including unfair ones — with no one needing to program bias deliberately. 'Careless engineers' misses the point: even well-intentioned teams inherit bias when the data itself is skewed.",
          },
          {
            question: 'Spiral (Unit 3): How does a neural network actually learn?',
            options: [
              'It stores every training example in a searchable database',
              'Engineers write new rules into it after each mistake',
              'It adjusts its weights to reduce error, step by step',
              'It copies answers from other networks already trained',
            ],
            correct: 2,
            explanation: "Learning is weight adjustment: nudge the numbers, shrink the error on the training examples, repeat millions of times. The 'database' option is the classic misconception — networks don't store and look up examples, they compress patterns into weights.",
          },
          {
            question: 'Spiral (Unit 4): Why can a language model state a false "fact" with total confidence?',
            options: [
              'Because its fact database contains errors nobody fixed',
              'Because users trick it with deliberately confusing questions',
              'Because it picks up falsehoods only from social media text',
              'Because it generates likely words, not verified facts',
            ],
            correct: 3,
            explanation: "Confidence is a property of the text style, not of verified truth: the model generates the most likely next words, and a plausible-sounding falsehood can be highly likely. The 'database with errors' option misdescribes how LLMs work at all — there is no fact database to fix.",
          },
          {
            question: 'Spiral (Unit 5): A shocking AI-generated image of a politician is going viral an hour before you see it. Best first move?',
            options: [
              'Share it quickly so your friends can judge for themselves',
              'Check whether credible sources confirm the event',
              "Assume it's real — images that detailed can't be faked",
              "Assume it's fake — all political images online are AI now",
            ],
            correct: 1,
            explanation: "Verification before amplification: cross-check with sources you trust before sharing or believing it, exactly the Unit 4-5 workflow. Both 'assume real' and 'assume fake' skip the actual skill — synthetic media means you check, not that you pick a default belief.",
          },
          {
            question: 'Your school asks you — the AI-literate student — to propose one rule for AI use on schoolwork. Which proposal best reflects what you learned in this course?',
            options: [
              'Ban all AI tools, since they mostly enable cheating',
              'Allow unlimited undisclosed AI use, since AI is the future',
              'Let each student privately decide what counts as fair use',
              'Allow AI as a disclosed aid, with the student accountable',
            ],
            correct: 3,
            explanation: 'Disclosure plus human responsibility mirrors everything from Units 4-6: AI can help with brainstorming and feedback, but the student does the final work and the fact-checking. Total bans and total freedom both dodge the real skill — using AI well and honestly.',
          },
        ],
      },
    },
  ],
};

export default unit;
