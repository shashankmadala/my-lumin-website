// Educator Module 3 — Reclaim Your Time: AI workflows for planning, materials, and communication.
const unit = {
  id: 'module-3',
  title: 'Reclaim Your Time',
  description: 'Lesson planning, materials, and family communication are the three biggest time sinks in teaching. This module gives each one a verify-first AI workflow you can use tomorrow.',
  icon: 'Zap',
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1: Lesson Planning with AI
    // ------------------------------------------------------------------
    {
      id: 'lesson-planning-with-ai',
      title: 'Lesson Planning with AI',
      duration: '25 min',
      objectives: [
        'Split planning work between you and AI: you bring objectives and knowledge of your students, AI drafts structure and materials',
        'Run the curate → verify → revise routine on every AI draft before it touches your classroom',
        'Plan a complete 45-minute lesson in about four prompt turns',
      ],
      blocks: [
        {
          type: 'intro',
          text: "It's Sunday, 9:40 p.m. Tomorrow's lesson on photosynthesis currently exists as three bullet points and a cup of cold coffee. You'll get it done — you always do — but it'll cost another hour you don't have. In Gallup and the Walton Family Foundation's June 2025 teacher survey, the roughly one-third of teachers who used AI at least weekly reported saving an average of 5.9 hours per week, and Google reports that 83% of teachers finishing [its AI course for educators](https://grow.google/ai-for-educators/) expect to save two or more hours a week. Those are self-reported averages, not promises — your mileage depends on your workflow. This lesson teaches the workflow.",
        },
        { type: 'heading', text: 'The co-planner workflow: you drive, AI drafts' },
        {
          type: 'text',
          text: "The single biggest mistake teachers make with AI planning is asking for a finished lesson and accepting whatever comes back. The model has never met your students. It doesn't know that 6th period needs movement after lunch, that half your class reads below grade level, or that you covered cellular respiration last week. Those facts are your contribution, and they're what make a plan actually work.",
        },
        {
          type: 'text',
          text: "What the model *is* good at: producing a timed structure in seconds, generating five activity options where you'd have thought of two, and drafting handouts, discussion questions, and exit tickets so you can edit instead of staring at a blank page. Think of it as a fast, tireless student teacher with zero knowledge of your classroom — useful, but only under your direction.",
        },
        {
          type: 'table',
          headers: ['You bring', 'AI drafts'],
          rows: [
            ['The learning objective and where this lesson sits in your unit', 'A timed lesson structure built around that objective'],
            ['Knowledge of your students — levels, needs, energy, what flopped last time', 'Activity options, differentiated versions, alternatives on demand'],
            ['Constraints: time, room, materials, tech access', 'Handouts, question sets, exit tickets, slide outlines'],
            ['Final judgment on accuracy and fit', 'A first draft of almost anything, in seconds'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never outsource the objective',
          text: "A chatbot will happily invent an objective if you don't give one — and it'll sound polished. But it doesn't know your standards' exact wording, your pacing guide, or what your students mastered last week. Remember Module 1: the model predicts plausible text; it doesn't know facts about your classroom. Objectives are yours, always.",
        },
        {
          type: 'checkpoint',
          question: "You're co-planning tomorrow's lesson with a chatbot. Which input can only come from you?",
          options: [
            'A timed 45-minute structure built around the objective',
            'Three warm-up options you can choose between',
            'That 6th period needs movement built in after lunch',
            'A draft handout with three discussion questions',
          ],
          correct: 2,
          explanation: "Right — the model has never met your students, so anything about who they are and what they need is your job. Structures, warm-ups, and handouts are exactly the drafting work AI does well under your direction.",
        },
        { type: 'heading', text: 'Curate → verify → revise' },
        {
          type: 'text',
          text: "Every AI draft goes through the same three-step routine before it reaches students. It takes minutes, and it's the difference between AI saving you time and AI embarrassing you in front of 28 seventh graders.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Curate.** You're the editor, not the reader. Keep what fits your class, delete the rest without guilt. If more than half the draft is unusable, don't fix it by hand — rewrite the prompt with better context (Module 2's iteration rule) and regenerate.",
            "**Verify.** Check every factual claim against a source you trust, add up the timings, and read student-facing text aloud to test the reading level. Models state wrong facts with total confidence — you knew this from Module 1, and lesson plans are not the place to forget it.",
            "**Revise.** Rewrite in your voice, swap in examples your students will actually connect with, and adjust for the class in front of you. This is where a generic plan becomes *your* plan.",
          ],
        },
        {
          type: 'keyTerms',
          title: 'Terms to keep',
          terms: [
            { term: 'Co-planning', definition: 'A division of labor where you supply objectives, constraints, and student knowledge, and AI supplies drafts — never the reverse.' },
            { term: 'Curate → verify → revise', definition: 'The three-step quality-control routine every AI draft passes through before it reaches students.' },
            { term: 'Prompt turn', definition: 'One message in an ongoing conversation with the model. Good planning happens across several turns, not one giant prompt.' },
          ],
        },
        {
          type: 'checkpoint',
          question: 'An AI draft claims photosynthesis happens in the mitochondria. Which step of the routine catches this, and how?',
          options: [
            'Curate — drop any section that makes a science claim',
            'Verify — check the claim against a trusted source',
            'Revise — reword the claim in friendlier student language',
            'Verify — ask the model whether its own claim is correct',
          ],
          correct: 1,
          explanation: "Verify is the fact-checking step, and it only works against a source outside the model — your textbook puts photosynthesis in the chloroplast, not the mitochondria. Asking the chatbot to confirm its own claim is circular (it can repeat the error just as confidently), curating is about fit rather than accuracy, and rewriting a wrong fact in friendlier language only makes the error friendlier.",
        },
        { type: 'heading', text: 'Worked example: a 45-minute lesson in four turns' },
        {
          type: 'text',
          text: "Here's the whole workflow on a real task: a 7th-grade science teacher planning an intro lesson on photosynthesis. Her constraints: 45 minutes, no lab stations, mixed reading levels, and the class meets right after lunch. Watch what each turn does and *why*.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Turn 1 — the brief.** *\"You're an experienced 7th-grade science teacher. Draft a 45-minute lesson introducing photosynthesis. Context: no lab stations, mixed reading levels, and the class meets right after lunch so students need to move. Give me a timed outline: warm-up, two main segments, exit ticket.\"* **Why:** this is the role–task–context–format pattern from Module 2. Constraints go in turn one so the first draft already fits your room instead of an imaginary lab.",
            "**Turn 2 — curate and redirect.** *\"The warm-up and exit ticket work. Replace segment two — the mini-lecture — with a hands-on modeling activity using paper cutouts, 15 minutes max.\"* **Why:** she names what to keep and gives one precise instruction. Telling the model what works protects it in later drafts; vague feedback like \"make it better\" protects nothing.",
            "**Turn 3 — materials.** *\"Write the student handout for the modeling activity: numbered instructions at a 6th-grade reading level, then three discussion questions that push toward the objective.\"* **Why:** materials come *after* the structure settles, so she never wastes a turn generating handouts for an activity she was about to cut.",
            "**Turn 4 — assessment and self-check.** *\"Write a 3-question exit ticket aligned to the objective, with an answer key. Then list anything in this lesson that's scientifically oversimplified or worth double-checking.\"* **Why:** asking the model to flag its own weak spots is a fast lead generator for her verify pass — a lead, not a verdict. Module 1 still applies: it can be confidently wrong about its own output.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'The verify pass (4 minutes)',
          text: "She added the timings: 47 minutes, so she trimmed the warm-up by two. She read the handout aloud — one sentence ran 34 words, so she split it. She checked the science against her textbook and caught the model saying plants \"breathe in\" carbon dioxide — an anthropomorphism she rewrote as \"take in.\" And she worked the exit-ticket key herself. Total planning time, all four turns plus verification: about 20 minutes instead of her usual hour.",
        },
        {
          type: 'checkpoint',
          question: 'Turn 1 comes back suggesting a microscope station — but you have no microscopes. What is the best next move?',
          options: [
            'Start over in a different chatbot and hope for a better draft',
            'Keep the microscope station and try to borrow a class set',
            'Hand-write a replacement activity and keep the rest as-is',
            'Name the constraint and ask it to swap in a paper-based activity',
          ],
          correct: 3,
          explanation: "Feeding the constraint back — \"no microscopes; replace that station with a paper-based modeling activity\" — is Module 2's iteration move: one precise correction fixes the draft while preserving everything good in it. Starting over throws away usable work, and hand-writing the fix yourself gives up the time savings that made this worth doing.",
        },
        {
          type: 'interactive',
          component: 'LessonPlanBuilder',
          caption: 'Your turn: build an AI-assisted plan for a real upcoming lesson. Bring an actual objective and your actual constraints — the output is only as good as the context you feed it.',
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'Try tomorrow',
          text: "Pick the thinnest lesson in your week — the one that's currently a bullet point — and run the four turns on it tonight. Time yourself. Then run the curate → verify → revise routine before you print anything.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "Why can't AI plan a lesson alone? Because it has never met your students — objectives, constraints, and knowledge of your class are inputs only you can supply.",
            'What happens to every draft? Curate (keep what fits), verify (check facts, timings, reading level), revise (make it yours) — before any student sees it.',
            'How do you plan a lesson in four turns? Brief with full context, curate and redirect, generate materials, then ask for assessment plus a self-check you verify yourself.',
            "Are the time savings guaranteed? No — six hours a week is a reported average from teachers using AI weekly, not a promise. The verify-first workflow is what makes savings real and safe.",
          ],
        },
        {
          type: 'text',
          text: "A plan is only half the prep. Next: generating the readings, practice sets, and rubrics that go with it — and the quality control that keeps AI's mistakes out of your gradebook.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'In the co-planner workflow, which job should stay with you rather than the AI?',
            options: [
              'Drafting three alternative warm-up activities',
              'Choosing the objective and judging student fit',
              'Formatting the student handout and answer key',
              'Generating exit-ticket questions from the objective',
            ],
            correct: 1,
            explanation: "Objectives and fit are yours because the model knows nothing about your standards, your pacing guide, or the kids in the room. The other three are drafting tasks — exactly where AI saves you time under your direction.",
          },
          {
            question: "An AI draft for your 45-minute period has activities totaling about 60 minutes, and it cites a statistic you're not sure about. What's the best next move?",
            options: [
              'Trim the activities by hand and assume the statistic is fine',
              'Regenerate from scratch with the same prompt until the timing fits',
              'Give it the timing constraint, then verify the statistic in a source',
              'Ask the model to confirm the statistic and accept its answer',
            ],
            correct: 2,
            explanation: "One precise correction restructures the lesson faster than hand-editing, and facts get checked against a real source — never against the model itself, which can confirm its own errors with total confidence (Module 1). Regenerating with the same prompt just replays the same problem.",
          },
          {
            question: 'In curate → verify → revise, what does "curate" mean?',
            options: [
              'Keep what fits your class and cut the rest',
              'Check every factual claim against a trusted source',
              'Rewrite the draft in your own teaching voice',
              'Merge drafts from several chatbots into one plan',
            ],
            correct: 0,
            explanation: "Curating is the editorial cut — what stays, what goes — and you make it as the editor, not the reader. Fact-checking is the verify step and voice is the revise step; keeping them separate is what makes the routine fast, while merging several chatbots' drafts just multiplies the text you have to check.",
          },
          {
            question: 'Your AI-drafted handout states a specific date for a historical event. Why check it before printing?',
            options: [
              'Date errors only affect events from before about 1900',
              'Models look dates up in a verified reference database before answering',
              'Dates only come out wrong when the prompt was too short',
              'It predicts plausible text and states wrong dates just as confidently',
            ],
            correct: 3,
            explanation: "This is Module 1's core lesson: the model predicts likely-sounding text, so a wrong date reads exactly as confidently as a right one. There's no verified database behind the answer and no era that is automatically safe — only checking a trusted source changes the odds.",
          },
          {
            question: 'Which opening prompt will get you the most usable first draft of a lesson plan?',
            options: [
              '"Write me a really good, detailed lesson plan on equivalent fractions for my elementary class."',
              '"4th-grade teacher: draft a 45-minute equivalent-fractions lesson, mixed levels, paper only, as a timed outline."',
              '"Write ten different equivalent-fractions lesson plans for 4th grade so I can compare them and pick the best."',
              '"What are equivalent fractions, and how do teachers usually explain them to 4th graders?"',
            ],
            correct: 1,
            explanation: "Role, task, context, and format — Module 2's anatomy — front-loads everything the model needs to fit your room on the first try. \"Really good and detailed\" is praise, not a constraint; ten generic plans give you ten drafts to fix instead of one good one; and an explainer answers a question you didn't need answered.",
          },
          {
            question: 'The worked example ended by asking the model to list anything oversimplified or worth double-checking. Why?',
            options: [
              'The self-check is reliable enough to stand in for your own verification pass',
              'Asking it to self-check makes it regenerate the lesson more carefully',
              'It surfaces likely weak spots for you to verify — a lead, not a verdict',
              'It stops the model from hallucinating in later turns of the chat',
            ],
            correct: 2,
            explanation: "The self-check is a cheap way to know where to aim your verify pass — but the model can be wrong about its own output, so you still check against a trusted source. Treating the self-check as sufficient is the misconception that gets errors onto handouts.",
          },
        ],
      },
    },
    // ------------------------------------------------------------------
    // Lesson 2: Materials, Quizzes, and Rubrics
    // ------------------------------------------------------------------
    {
      id: 'materials-quizzes-and-rubrics',
      title: 'Materials, Quizzes, and Rubrics',
      duration: '25 min',
      objectives: [
        'Generate differentiated readings, practice sets, rubrics, and slide outlines — and know what to check in each',
        'Verify every answer key yourself before it reaches students',
        'Choose between a general chatbot and teacher-specific tools like MagicSchool, Diffit, and Eduaide',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Period 2, problem 7. Your AI-generated practice set asks students to add 2/3 + 1/6, and the answer key says 1/3. A student raises her hand: \"I got 5/6, and I checked it twice.\" She's right. The key is wrong — the model made the classic add-the-numerators error, and it typed it just as confidently as every correct answer. Materials generation is where AI saves teachers the most hours, and answer keys are where it burns them. This lesson covers both.",
        },
        { type: 'heading', text: 'What AI drafts well — and what to watch' },
        {
          type: 'text',
          text: "Four material types cover most of what teachers generate: leveled readings, practice sets with answer keys, rubrics, and slide outlines. Each one has a known failure mode, and knowing it in advance turns quality control from paranoia into a 3-minute habit.",
        },
        {
          type: 'table',
          headers: ['Material', 'Ask for', 'Watch out for'],
          rows: [
            ['Differentiated readings', 'The same passage at 2–3 reading levels, key vocabulary kept at every level', '**Level drift** — the "grade 4" version reads like grade 7. Test by reading it aloud.'],
            ['Practice sets + answer keys', 'Problems at a difficulty spread, with a key and one-line explanations', "**Math and logic errors in the key.** Models predict text; they don't compute."],
            ['Rubrics', 'Criteria rows with level descriptors, built from YOUR criteria', '**Generic criteria** that sound professional but miss what you actually grade.'],
            ['Slide outlines', 'A slide-by-slide outline with talking points, built in your slide tool afterward', '**Padding** — decorative slides that add minutes without adding learning.'],
          ],
        },
        {
          type: 'text',
          text: "Differentiated readings deserve a closer look, because they're the workhorse. The move that makes them genuinely equitable: ask for the *same content* at different access points. Try: *\"Rewrite this passage at three levels — grade 4, grade 6, grade 8. Keep the key terms 'photosynthesis' and 'chlorophyll' at every level, and keep the core facts identical.\"* Identical content, different access means every student can join the same class discussion — that's differentiation, not a dumbed-down side quest for your striving readers.",
        },
        {
          type: 'text',
          text: "For rubrics, always hand the model *your* criteria rather than asking it to invent some — then have it draft level descriptors around them. For slide outlines, ask for an outline with talking points and build the actual slides in your own tool; asking a chatbot for finished slides usually costs more cleanup time than it saves.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Verify the answer key — every time',
          text: "A language model produces likely-looking text token by token. Unless it explicitly runs a calculator or writes and executes code — which some chatbots do and some don't, and which you'd have to check each time — it isn't computing anything. That's why a wrong answer arrives with the same fluent confidence as a right one (Module 1 again). The rule is absolute: work every problem yourself before the set reaches students. If working the key takes longer than making it did, you still come out ahead — one wrong key costs you a class period and a little bit of credibility.",
        },
        {
          type: 'checkpoint',
          question: 'Why can a chatbot produce a wrong answer in a math answer key while sounding completely sure?',
          options: [
            'It computes correctly but hides its uncertainty to sound helpful',
            'It predicts likely text rather than working the arithmetic',
            'Free tiers introduce errors deliberately to push you to upgrade',
            'It errs only on fractions and decimals, its known weak spots',
          ],
          correct: 1,
          explanation: "Fluency and accuracy are separate things: unless the model is explicitly running a calculator or code tool, it is generating plausible text, so a wrong answer arrives as smoothly as a right one — Module 1's hallucination lesson applied to arithmetic. No tier of any chatbot errs on purpose, and no problem type is automatically safe, which is why you work the key yourself.",
        },
        { type: 'heading', text: 'General chatbot or teacher-specific tool?' },
        {
          type: 'text',
          text: "You have two lanes. General chatbots — [ChatGPT](https://chatgpt.com/plans/k12-teachers/), [Gemini](https://edu.google.com/intl/ALL_us/ai/gemini-for-education/), [Claude](https://claude.com/solutions/teachers) — give you maximum flexibility: you shape anything through conversation, iterate freely, and handle unusual, multi-step requests. The cost is that you do the formatting, the exporting, and the privacy thinking yourself.",
        },
        {
          type: 'text',
          text: "Teacher-specific tools trade flexibility for speed on common tasks: purpose-built templates, one-click exports to Google Docs or Forms, and privacy postures designed for K-12. For a standard job — level this article, generate this rubric — they're often faster than prompting from scratch. Three are worth knowing by name.",
        },
        {
          type: 'links',
          title: 'Three teacher tools worth a look (free tiers, mid-2026)',
          items: [
            {
              label: 'MagicSchool AI',
              url: 'https://www.magicschool.ai/',
              description: 'The biggest K-12 platform: 80+ teacher tools free (lesson plans, rubrics, text leveling, IEP drafting). FERPA/COPPA-compliant, SOC 2, and a 95% Common Sense privacy rating.',
            },
            {
              label: 'Diffit',
              url: 'https://web.diffit.me/',
              description: 'Paste any article, video, or topic — get leveled versions (roughly grades 2–11) with vocabulary and questions, exportable to Google Docs, Slides, and Forms. The free Basic tier is genuinely usable.',
            },
            {
              label: 'Eduaide.Ai',
              url: 'https://www.eduaide.ai/',
              description: '100+ resource generators (lesson seeds, graphic organizers, games, assessments) from one objective. Free tier: 15 generations/month; Pro is $5.99/mo. Zero student data collected; 93% Common Sense privacy rating.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'Even "good" tools carry real risk',
          text: "Common Sense Media's August 2025 [assessment of AI teacher assistants](https://www.chalkbeat.org/2025/08/06/ai-teacher-assistants-promote-racial-bias-study-finds/) rated the category *moderate risk* overall — but flagged the tools that draft IEPs and behavior intervention plans as *high risk*, because they suggested more-punitive plans for hypothetical students with Black-coded names and more supportive ones for students read as white. The takeaway isn't \"don't use them.\" It's: review every output for bias before use, especially anything touching behavior, grading, or IEPs.",
        },
        {
          type: 'checkpoint',
          question: 'You need one science article at three reading levels, with vocabulary and questions, exported to Google Docs before your prep period ends. Best first stop?',
          options: [
            'Diffit — paste the article and export the leveled set',
            'A general chatbot, formatting each level into Docs by hand',
            "Eduaide's generators, one run per reading level per section",
            'Rewriting the article yourself at three levels by hand',
          ],
          correct: 0,
          explanation: "This is exactly the pipeline Diffit was built for: leveled versions plus vocabulary and questions, straight to Docs. A general chatbot can do it, but you'd spend your prep period on formatting — the teacher-tool lane wins when the task is standard and the clock is running.",
        },
        { type: 'heading', text: 'Your verification checklist' },
        {
          type: 'text',
          text: "Whatever tool made it, the material passes this checklist before students see it. Five checks, about three minutes for a typical worksheet — less time than one classroom correction costs you, and it becomes automatic within a week of doing it.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Work the answer key yourself.** Every problem, every time — no exceptions for "easy" sets.',
            '**Read the lowest-level passage aloud.** If you stumble or the sentences run long, the level label is wrong regardless of what the tool claims.',
            '**Check the rubric against real work.** Would it have fairly scored the last strong and weak pieces you actually graded? If not, the criteria are generic.',
            '**Check alignment.** Does every item and activity actually serve the objective, or did plausible filler creep in?',
            '**Scan for bias.** Names, examples, and scenarios should reflect your students — and anything behavior- or grading-adjacent gets a second look.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A fast extra layer: the second-opinion check',
          text: "For long problem sets, paste the problems — without the key — into a fresh chat and ask it to solve them, then compare its answers to your key. Wherever the two disagree, check that item first. One caution: two AI answers agreeing is still not proof, because both can make the same plausible-looking mistake. The second opinion tells you where to look; your own worked check is still the final word.",
        },
        {
          type: 'tryIt',
          title: 'Generate — then verify — a quiz for your next topic',
          intro: "Do this with real content you'll actually use this week. The verification step is the point, not the fine print.",
          steps: [
            'Pick the topic of your next quiz or exit ticket and open your preferred tool — a general chatbot or a teacher tool like [MagicSchool](https://www.magicschool.ai/).',
            'Prompt with a full spec: grade level, topic, number and type of questions, a difficulty spread, and an answer key with a one-sentence explanation per item. Example: *"Create a 6-question quiz on plate tectonics for 8th grade: 4 multiple choice, 2 short answer, ranging from recall to application. Include an answer key with a one-sentence explanation for each."*',
            '**Run the verification checklist:** work every item yourself and check it against the key; flag any question that is ambiguous, misaligned with what you taught, or has an implausible distractor set.',
            'For each flawed item, tell the model exactly what is wrong ("question 3\'s answer key is incorrect — the answer is X because Y; regenerate just that item") rather than regenerating the whole quiz.',
            'Export or format the final version — and save the prompt that worked in the prompt library you started in Module 2.',
          ],
          url: 'https://www.magicschool.ai/',
          urlLabel: 'Open MagicSchool (free tier)',
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Three quality-control moments teachers actually hit. Pick your response, then compare against the reasoning.',
          props: {
            title: 'Quality control: you make the call',
            scenarios: [
              {
                situation: "Mid-class, a student announces that the answer key for problem 7 on your AI-generated practice set is wrong. You check — she's right: the key says 1/3, the answer is 5/6.",
                options: [
                  {
                    text: 'Thank her, fix it on the board, and turn it into a 2-minute lesson on verifying AI output. After school, work the rest of the key yourself and tighten your routine: no set goes out unworked again.',
                    quality: 'best',
                    feedback: 'This handles all three layers: the live moment (credit the student, model intellectual honesty), the immediate risk (other errors may be lurking in the same key), and the root cause (the set went out unverified). Bonus: your students just watched you treat AI output critically — which is the exact habit you want them to build.',
                  },
                  {
                    text: 'Correct problem 7, apologize briefly, and move on with the lesson. Check the rest of the key after class.',
                    quality: 'ok',
                    feedback: "Fixing the error and checking the rest later covers the essentials, and sometimes pacing demands it. But you passed up a free teachable moment about verifying AI — and if problem 12 is also wrong, students will find it before you do.",
                  },
                  {
                    text: 'Fix problem 7 and assume the rest of the key is fine — only one error surfaced, so the others must have been right.',
                    quality: 'poor',
                    feedback: 'One surfaced error tells you nothing about the rest — students only flagged the one they happened to catch. An unverified key stays unverified until YOU work it. This is exactly how the same set burns you again in period 5.',
                  },
                ],
              },
              {
                situation: 'You asked for a reading passage at a 4th-grade level for your striving readers. The output is labeled "Grade 4" — but when you read it aloud, the sentences run 25+ words with vocabulary your 7th graders would find hard.',
                options: [
                  {
                    text: "Re-prompt with explicit, checkable constraints: \"Rewrite at a true 4th-grade level: sentences under 12 words, everyday vocabulary, but KEEP the key terms 'erosion' and 'sediment.'\" Then read the new version aloud before printing.",
                    quality: 'best',
                    feedback: "Labels aren't measurements — concrete constraints are. Sentence length and vocabulary limits give the model something checkable, keeping the key terms protects the lesson's academic content, and the read-aloud test verifies the result instead of trusting a new label.",
                  },
                  {
                    text: 'Hand-edit the worst sentences yourself until it feels about right.',
                    quality: 'ok',
                    feedback: "This gets a usable passage for today, but you're doing the model's job by hand — and next time you'll start from zero again. A precise re-prompt takes the same five minutes and leaves you with a reusable technique (and a reusable prompt).",
                  },
                  {
                    text: 'Trust the "Grade 4" label and distribute it — the tool is designed for leveling, so it must be calibrated.',
                    quality: 'poor',
                    feedback: 'The label is generated text, not a measurement — level drift is the single most common failure in AI leveling, even in purpose-built tools. Your striving readers will hit a wall in the first paragraph, and the differentiation you planned becomes frustration you caused.',
                  },
                ],
              },
              {
                situation: "You generated a lab-report rubric. It looks polished — neat rows, professional language — but it's missing claim-evidence-reasoning, which is the main thing you actually grade lab reports on.",
                options: [
                  {
                    text: 'Feed the model your real criteria plus an anonymized description of what strong and weak reports look like in your class, and have it rebuild the rubric around those.',
                    quality: 'best',
                    feedback: 'A rubric is only as good as the criteria behind it, and those are yours. Giving the model your actual criteria plus concrete descriptions of real work (no student names) produces a rubric that matches how you grade — polish is worthless if the substance is generic.',
                  },
                  {
                    text: 'Add a claim-evidence-reasoning row by hand and keep the rest.',
                    quality: 'ok',
                    feedback: 'Workable — the rubric now covers what matters. But bolting one row onto a generic frame often leaves the point weights and descriptors misaligned with how you actually score. Worth a pass to check the whole rubric agrees with your grading, not just the new row.',
                  },
                  {
                    text: 'Use it as-is — it looks professional, and you can mentally adjust points for claim-evidence-reasoning while grading.',
                    quality: 'poor',
                    feedback: "A rubric you silently override isn't a rubric — students will study the paper version, aim at the wrong target, and then be graded on criteria they never saw. Looking professional is the trap: generic-but-polished is the known failure mode of AI rubrics.",
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'keyTerms',
          terms: [
            { term: 'Level drift', definition: 'When AI-generated "leveled" text misses its target reading level — usually landing harder than labeled. Caught by reading aloud, not by trusting the label.' },
            { term: 'Answer-key verification', definition: 'Working every problem yourself before a set reaches students. Non-negotiable, because models generate plausible text instead of computing.' },
            { term: 'Teacher-specific tool', definition: 'A K-12 platform (MagicSchool, Diffit, Eduaide) with templates, exports, and privacy postures built for schools — faster than a chatbot for standard tasks, less flexible for unusual ones.' },
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'Why verify every answer key? Because models predict text instead of computing, so wrong answers arrive exactly as confident as right ones.',
            'How do you catch level drift? Read the passage aloud — the label is generated text, not a measurement.',
            'Chatbot or teacher tool? Chatbots win on flexible, unusual, conversational tasks; MagicSchool, Diffit, and Eduaide win on standard tasks with templates, exports, and K-12 privacy postures.',
            'What did Common Sense Media find? Even well-regarded teacher assistants showed bias — review outputs yourself, especially anything touching behavior, grading, or IEPs.',
          ],
        },
        {
          type: 'text',
          text: "Plans and materials handled, one time sink remains — the one that follows you home: email. Next lesson, the communication workflow, and the hard privacy rule that goes with it.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Why must you work an AI-generated answer key yourself before students see it?',
            options: [
              'It predicts plausible text instead of working the math',
              'AI answer keys are wrong more often than they are right',
              'Answer keys are reliable only when a paid tool made them',
              'FERPA requires teachers to work every key before class use',
            ],
            correct: 0,
            explanation: "It's not that keys are usually wrong — most items check out — it's that a wrong answer is undetectable by tone, because fluent text is all the model produces (Module 1). Payment tier doesn't change the underlying mechanism, and FERPA governs student records, not answer keys.",
          },
          {
            question: 'The "grade 4" passage a tool produced actually reads at a 7th-grade level. What is the best fix?',
            options: [
              'Distribute it anyway — leveling tools are calibrated to the label',
              'Re-prompt with checkable constraints, then read it aloud',
              'Ask the model to confirm the level and trust its answer',
              'Cut the hard key vocabulary until the passage reads easier',
            ],
            correct: 1,
            explanation: "Concrete, checkable constraints — sentences under 12 words, everyday vocabulary, key terms kept — beat any level label, and the read-aloud test verifies the result. Asking the model to confirm its own output is circular (it can confidently agree with its own error), and cutting the key vocabulary makes the text easier by gutting the content you're teaching.",
          },
          {
            question: 'A colleague wants one article turned into three reading levels with vocabulary and comprehension questions, exported to Google Docs, free, in ten minutes. What do you recommend?',
            options: [
              'Eduaide — its generators can produce each piece separately',
              'A general chatbot with careful follow-up prompts for each level',
              'Building each level manually in a document editor',
              'Diffit — that exact pipeline is what it is built for',
            ],
            correct: 3,
            explanation: "Diffit's whole product is leveled versions with vocabulary and questions, exported straight to Docs — free tier included. A chatbot or Eduaide could assemble the pieces, but not in ten minutes with formatting done; matching the tool to the task is the skill here.",
          },
          {
            question: "Common Sense Media's 2025 assessment flagged AI tools that draft IEPs and behavior intervention plans as high risk. What is the right takeaway for your practice?",
            options: [
              'Ban these tools district-wide until the risk rating improves',
              'Treat any vetted tool as safe to use without further review',
              'Review every output for bias before use — behavior plans and IEPs first',
              'Apply the caution to student-facing tools, not teacher-facing ones',
            ],
            correct: 2,
            explanation: "The assessment found real bias — more-punitive behavior-plan suggestions for hypothetical students with Black-coded names — which argues for human review, not for blanket bans or blind trust. The tools tested were teacher-facing, so 'teacher-facing means safe' is exactly the wrong lesson.",
          },
          {
            question: "Your first rubric draft is generic — professional-sounding rows that miss what you actually grade. What's the best next prompt?",
            options: [
              'Give it your real criteria and rebuild the rubric around them',
              'Tell it to make the rubric better and much more specific',
              'Send the same prompt again and hope for a stronger draft',
              'Accept it — rubrics are generic by nature and students skim them',
            ],
            correct: 0,
            explanation: "Iteration means giving the model what it was missing — your criteria plus an anonymized description of strong versus weak work (Module 2). 'Make it better' gives it nothing to work with, resending the same prompt reproduces the same gap, and a generic rubric teaches students to aim at the wrong target.",
          },
          {
            question: 'When is a general chatbot the better choice than a teacher-specific tool?',
            options: [
              'When you want FERPA compliance handled for you by the tool',
              'When you want a ready-made template with a one-click export to Docs',
              'When the task is unusual and you want to shape it through conversation',
              'Whenever you are on a free plan, since chatbots have no usage caps',
            ],
            correct: 2,
            explanation: "Flexibility is the chatbot's edge: odd requests, custom formats, and iterative shaping across many turns. Templates, exports, and school-ready privacy postures are exactly what the teacher tools are for — and free chatbot plans have their own usage caps, so that's no tiebreaker.",
          },
        ],
      },
    },
    // ------------------------------------------------------------------
    // Lesson 3: Communication Without the Burnout
    // ------------------------------------------------------------------
    {
      id: 'communication-without-the-burnout',
      title: 'Communication Without the Burnout',
      duration: '20 min',
      objectives: [
        'Draft parent emails that are warm, specific, and blame-free in minutes instead of an evening',
        'Use AI for newsletters, report-card comments, and translations — and know which messages need human verification',
        'Keep student names and identifying details out of consumer chatbots, every single time',
      ],
      blocks: [
        {
          type: 'intro',
          text: "It's 7:15 p.m. and you're on your fourth rewrite of one email. The student's grade slipped from a B to a D, four assignments are missing, and the parent has already emailed once this year — angrily — about the homework load. Every version you write sounds either too soft or too much like an accusation. This is exactly the kind of task AI drafts brilliantly: high emotional stakes, standard structure. But it's also where the privacy stakes are highest, so we start with the rule that protects you.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The hard rule: no student names, no PII — ever',
          text: "Never put a student's full name, or any combination of details that could identify them, into a consumer chatbot. Describe the situation generically: \"a 7th grader whose grades dropped over three weeks, with four missing assignments\" — not a name, not initials plus your school, not a gradebook screenshot. FERPA-supportive educator workspaces exist — [ChatGPT for Teachers](https://chatgpt.com/plans/k12-teachers/) is built to support FERPA compliance and doesn't train on your data by default, and [Claude for Teachers](https://claude.com/solutions/teachers) is covered by a K-12 data processing addendum — and they change the compliance picture — but generic-by-default is the habit that protects you in every tool, on every device, forever.",
        },
        {
          type: 'text',
          text: "Here's why the habit costs you nothing: the model doesn't need the name. A generic description produces exactly the same quality draft, and you paste the real name in later, inside your email client. Meanwhile, a consumer chat session isn't covered by your district's student-data agreements — so the name in the prompt is a privacy incident, not a convenience.",
        },
        {
          type: 'checkpoint',
          question: 'Which version of this situation is safe to paste into a consumer chatbot?',
          options: [
            '"Maria Gonzalez in my 2nd period is failing — help me email her mom."',
            '"M.G., a 7th grader at Lincoln Middle School, is failing my class."',
            '"A 7th grader has four missing assignments and seems withdrawn."',
            'A gradebook screenshot with the last names cropped out of the image',
          ],
          correct: 2,
          explanation: "The generic description carries everything the model needs and nothing that identifies the student — you paste the real name into your email client afterward. Initials plus a school and grade can single a student out just as surely as a name, because identification comes from the *combination* of details, and cropped screenshots routinely leak more than you think.",
        },
        { type: 'heading', text: 'Parent emails: warm, specific, blame-free' },
        {
          type: 'text',
          text: "The three qualities of an email that gets a partner instead of an adversary: **warm** (the parent hears that you care about their child), **specific** (facts and observations, not judgments — \"four assignments haven't come in\" rather than \"he refuses to work\"), and **blame-free** (the problem is a situation you and the parent will solve together, not a defect in the child or the parenting).",
        },
        {
          type: 'list',
          items: [
            '**Open with genuine care or a true positive** — not generic praise, something you actually observed.',
            '**Name the concern with facts** — numbers, dates, observable behavior. No character verdicts.',
            '**Invite partnership** — "figure this out together" beats "please address this at home."',
            '**End with one concrete next step** — a question to answer or two meeting times to pick from.',
          ],
        },
        { type: 'heading', text: 'Worked example: the tricky email in two turns' },
        {
          type: 'text',
          text: "Back to the 7:15 p.m. email. Here's the whole exchange, annotated — notice that the teacher's knowledge of the family's history shapes the prompt, and her knowledge of the student fixes the draft.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Turn 1 — the brief, and what came back',
          text: "Prompt: *\"Help me write a parent email. Situation: a 7th grader's grade dropped from a B to a D over three weeks, with four missing assignments. The parent previously emailed frustrated about homework load, so the tone must be warm, specific, and completely blame-free — no 'your child failed to' phrasing. Under 150 words, end by offering two meeting times.\"* The draft came back structurally solid but with two problems worth catching: it opened with generic praise (\"a joy to have in class\") that this parent would read as boilerplate, and it slipped into blame anyway with \"she has not been turning in her work\" — a *she-did-this* framing, aimed at the child.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Turn 2 — precise revision, and the keeper',
          text: "Prompt: *\"Rewrite: cut the generic praise and instead mention — truthfully — that she contributes strong ideas in class discussions. Change 'she has not been turning in her work' to neutral, shared-problem framing. Make the closing feel like partnership, not a summons.\"* The final draft: \"*I wanted to share something I've been keeping an eye on. Over the past three weeks, four assignments haven't come in, and her quiz average has slipped. In class, she's still contributing strong ideas during discussions — which tells me the understanding is there. I'd love to figure out together what would help. Could we talk for 15 minutes this week? I'm free Tuesday at 3:30 or Thursday at 7:45 a.m.*\" Ten minutes, not an evening — and the name gets added in the email client, never in the chatbot.",
        },
        {
          type: 'checkpoint',
          question: 'What actually made the second draft better than the first?',
          options: [
            'The model tried harder once it saw the first draft rejected',
            'The second draft was longer, and longer reads as warmer',
            'The teacher asked for warmer wording and more exclamation points',
            'The teacher supplied a true, specific detail and precise tone feedback',
          ],
          correct: 3,
          explanation: "The model doesn't know this student contributes strong discussion ideas, and it can't know which phrasings this particular parent will hear as blame — the teacher supplied both, which is the co-planning division of labor from lesson one applied to email. Models don't 'try harder'; they respond to better input, and warmth comes from true specifics rather than punctuation or length.",
        },
        { type: 'heading', text: 'Comments, newsletters, and translations' },
        {
          type: 'text',
          text: '**Report-card comments** batch beautifully: give the model two or three of your past comments as style models, then a no-name descriptor per student — "strong in discussion, growth area: written organization, big win: multiplication fluency" — and personalize each draft with one specific, true detail before it ships. A comment that could describe anyone helps no one.',
        },
        {
          type: 'text',
          text: "**Newsletters** are the easiest win of all: your bullet points in, a formatted, friendly newsletter out. One trap, straight from Module 1: the model will happily fill gaps with invented-but-plausible specifics — a \"reminder\" about a picture day you never mentioned, a made-up early-dismissal time. Never let AI supply a fact you didn't give it, and proofread every date and time against your actual calendar.",
        },
        { type: 'subheading', text: 'Translation: the equity win — and the caution' },
        {
          type: 'text',
          text: "This might be the highest-impact five minutes in the whole module: families who've never received a school message in their home language can now get your newsletter in Spanish, Vietnamese, or Arabic in one prompt. That's a genuine equity win — families can't partner with you in a language they can't read. The caution: translation quality varies by language, and you usually can't check it yourself. For routine messages, AI translation plus a quick sanity check is fine. For high-stakes messages, a human who speaks the language verifies before anything goes home.",
        },
        {
          type: 'table',
          headers: ['Stakes', 'Examples', 'AI role'],
          rows: [
            ['Low stakes', 'Newsletters, event reminders, spirit-week announcements, positive notes home', 'AI translates; you spot-check names, dates, and times'],
            ['High stakes', 'IEP or 504 meeting notices, discipline letters, safety information, anything with legal weight', 'AI may draft the English version — a human interpreter or district translation service verifies the translation before it goes home'],
          ],
        },
        {
          type: 'checkpoint',
          question: 'A newsletter blurb and an IEP meeting notice both need to go home in Vietnamese this week. What is the right split?',
          options: [
            'AI-translate both — a translation is a translation',
            'AI-translate the newsletter; send the IEP notice to a human',
            'Human-translate both — AI translation is never safe for families',
            'Send both in English only and avoid translation risk entirely',
          ],
          correct: 1,
          explanation: "Stakes decide the workflow: a newsletter error is a small embarrassment, but an IEP notice carries legal weight and shapes decisions about a child's services, so a district interpreter or verified translator checks it first. Refusing AI translation entirely throws away the equity win on the dozens of low-stakes messages families would otherwise never receive in their language.",
        },
        {
          type: 'interactive',
          component: 'TimeSavedCalculator',
          caption: "Tally your own weekly minutes on planning, materials, and communication, and see what this module's routines could hand back. Treat the result as a hypothesis to test over the next month — reported averages like six hours a week are other teachers' numbers, not a guarantee of yours.",
        },
        {
          type: 'keyTerms',
          terms: [
            { term: 'PII (personally identifiable information)', definition: 'Any detail — or combination of details — that could identify a student: name, initials plus school, ID numbers, gradebook screenshots. None of it goes in a consumer chatbot.' },
            { term: 'Blame-free framing', definition: 'Describing a concern as observable facts in a shared problem ("four assignments haven\'t come in") instead of a verdict on the child ("he refuses to work").' },
            { term: 'High-stakes communication', definition: 'Messages with legal or safety weight — IEP notices, discipline letters, safety information — where AI translations must be verified by a human before going home.' },
          ],
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'Try tomorrow',
          text: "Take the next email that makes you sigh when it lands. Describe the situation generically — no names — set the tone constraints, and run the two-turn workflow. If it takes more than ten minutes, your first prompt needed more context, not more rewrites.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What never goes in a consumer chatbot? Student names or any identifying combination of details — describe situations generically and add the name later in your email client.',
            'What makes a parent email land? Warm, specific, and blame-free: genuine opening, facts instead of judgments, partnership framing, one concrete next step.',
            "Why proofread AI newsletters extra carefully? Because the model fills gaps with invented-but-plausible specifics — never let it supply a fact you didn't give it.",
            'When does a translation need a human? When stakes are high — IEP notices, discipline, safety — while routine messages are where AI translation delivers a real equity win.',
          ],
        },
        {
          type: 'text',
          text: "You've reclaimed hours from planning, materials, and communication. Module 4 turns the same workflows outward — differentiating for every learner in your room, including the students whose IEPs and language needs demand the most careful (and most private) handling.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'You need an email about a student whose grades are slipping, and the parent is anxious. Which prompt is the right way to start?',
            options: [
              "Paste the student's name and gradebook history for maximum accuracy",
              "Use the parent's surname and the student's initials to personalize it",
              'Use initials plus your school name and class period — anonymous enough',
              'Describe a 7th grader with four missing assignments, no name given',
            ],
            correct: 3,
            explanation: "The generic description gives the model everything it needs — tone, facts, stakes — with zero identifying information, and the name gets added later in your email client. Initials combined with a school, class period, or parent surname can identify a student just as surely as a full name.",
          },
          {
            question: 'Which sentence belongs in a warm, specific, blame-free parent email?',
            options: [
              '"Your son refuses to do his work and does not seem to care at all."',
              '"Four assignments haven\'t come in — can we figure out together what would help?"',
              '"Per my records, the student is deficient in multiple graded categories."',
              '"He is an absolute joy to have in class, truly a pleasure!"',
            ],
            correct: 1,
            explanation: "It states observable facts (four assignments) and frames the problem as shared. \"Refuses\" is a character verdict, the records-speak version is cold enough to read as hostile, and generic praise with no substance is the boilerplate parents skim past — warm requires true and specific.",
          },
          {
            question: 'FERPA-supportive teacher workspaces exist for ChatGPT and Claude. Why keep the no-names habit anyway?',
            options: [
              'Because student names trigger content filters that block the response',
              'Because FERPA bars teachers from typing student names into any software',
              'Because consumer chats are not covered by district data agreements',
              'Because models permanently memorize every name they see in a prompt',
            ],
            correct: 2,
            explanation: "The habit is the protection: you'll move between tools, devices, and accounts for years, and generic-by-default means you never have to remember which one has a data agreement. FERPA doesn't ban names in all software (your gradebook is full of them), and a single prompt isn't 'memorized' — but neither technicality makes consumer chat a covered place for student data.",
          },
          {
            question: 'Which message most needs a human-verified translation rather than AI-only?',
            options: [
              'An IEP meeting notice where service changes will be discussed',
              'The weekly newsletter item announcing spirit-week dress-up themes',
              'A field-trip packing list with the departure time',
              'A quick positive note home about a great week in class',
            ],
            correct: 0,
            explanation: "IEP communications carry legal weight and shape decisions about a child's services — a mistranslation there has real consequences, so a human interpreter or district service verifies it. The other three are low-stakes messages where AI translation plus your spot-check of names, dates, and times is the win, not the risk.",
          },
          {
            question: 'What is the right AI workflow for report-card comments?',
            options: [
              'Paste your gradebook export, names included, so comments come out accurate',
              'Give it your comment style and a no-name descriptor per student',
              'Let the model invent plausible strengths to save yourself drafting time',
              'Write one strong comment and reuse it for every student in the class',
            ],
            correct: 1,
            explanation: "Style models plus generic descriptors get you fast drafts with zero PII exposure, and the one specific, true detail you add afterward is what makes each comment honest and recognizable. A gradebook export is a privacy incident, and invented strengths are fabrications on an official record — the comment must describe the actual child.",
          },
          {
            question: 'Your AI newsletter draft "reminds families that picture day is October 12" — but you never mentioned picture day. What happened, and what should you do?',
            options: [
              'It read your school calendar — verify the date and keep the reminder',
              'A lucky coincidence — keep it if the date sounds plausible enough',
              'A one-time glitch — regenerating the newsletter will prevent it',
              'It invented a plausible detail to fill the gap — cut the line',
            ],
            correct: 3,
            explanation: "This is hallucination from Module 1 wearing a newsletter costume: the model had a gap where newsletters usually carry reminders, so it generated a plausible one, and the rule is never to let AI supply a fact you didn't give it. It has no access to your school calendar unless you hand it one, and regenerating doesn't change the underlying behavior — proofreading every date and time against your real calendar does.",
          },
        ],
      },
    },
  ],
};

export default unit;
