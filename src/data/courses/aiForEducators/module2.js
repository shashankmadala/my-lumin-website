// Educator Module 2 — The Prompting Playbook
// Role-Task-Context-Format, iteration moves, and a copy-ready prompt library.
// Tool-agnostic: every technique works in ChatGPT, Gemini, and Claude.

const unit = {
  id: 'module-2',
  title: 'The Prompting Playbook',
  description: 'Turn vague requests into precise briefs, master the follow-up moves that fix weak drafts, and walk away with a library of copy-ready prompts that work in ChatGPT, Gemini, and Claude.',
  icon: 'PenTool',
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1: Anatomy of a Great Prompt
    // ------------------------------------------------------------------
    {
      id: 'anatomy-of-a-great-prompt',
      title: 'Anatomy of a Great Prompt',
      duration: '20 min',
      objectives: [
        'Break any AI request into Role, Task, Context, and Format',
        'Upgrade a vague prompt into a specific five-part prompt and predict how the output improves',
        'Explain why the same prompting pattern works in ChatGPT, Gemini, and Claude',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Two teachers sit down during the same planning period and ask an AI for a fractions worksheet. One gets ten generic problems that look like they fell out of a 1995 workbook. The other gets a three-section, differentiated worksheet with an answer key and a word problem about concession-stand pizza — ready to print. Same tool. Same topic. Same five minutes. The entire difference was about forty words of typing, and by the end of this lesson you'll know exactly which forty.",
        },
        { type: 'heading', text: 'The intern rule' },
        {
          type: 'text',
          text: "Here's the mental model that fixes most weak prompts before you type a word: **you are the expert, and the AI is an intern with unlimited energy and zero context.** It has never met your students. It doesn't know your grade level, your standards, what you taught yesterday, or that third period melts down after lunch. It will work tirelessly on whatever you ask — but it can only work with what you tell it.",
        },
        {
          type: 'text',
          text: "You already know from Module 1 that these models generate the most statistically likely response to your input. Give a vague input and you get the statistical average — a worksheet for no one in particular. Give a specific briefing and you steer the output toward the version *your* class needs. Prompting isn't a magic incantation. It's a briefing.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The one-sentence version',
          text: "Write the briefing you'd give a smart student teacher on their first morning. If you'd never tell a human intern \"make a worksheet on fractions\" and walk away, don't tell an AI that either.",
        },
        { type: 'heading', text: 'The four parts: Role, Task, Context, Format' },
        {
          type: 'keyTerms',
          title: 'The RTCF pattern',
          terms: [
            { term: 'Role', definition: "Who the AI should act as ('You are an experienced 5th-grade math teacher'). Sets vocabulary, tone, and difficulty defaults." },
            { term: 'Task', definition: "The specific thing to produce, with a verb and a number ('Create a 12-question practice worksheet'). Counts and concrete verbs are specifications the model builds toward." },
            { term: 'Context', definition: "The facts it can't guess: grade level, what students just learned, the misconception you're targeting. Usually the highest-value sentence in the prompt." },
            { term: 'Format', definition: 'What the output should look like: sections, a table, a length limit, an answer key at the end.' },
            { term: 'Constraints', definition: "The optional fifth part — what to require or avoid ('denominators of 12 or less, no negative numbers')." },
          ],
        },
        {
          type: 'table',
          headers: ['Part', 'Question it answers', 'Example phrase'],
          rows: [
            ['Role', 'Who is writing this?', "'You are an experienced 5th-grade math teacher.'"],
            ['Task', 'What exactly am I getting?', "'Create a 12-question practice worksheet.'"],
            ['Context', "What can't the AI guess?", "'My students just learned equivalent fractions and often add the denominators by mistake.'"],
            ['Format', 'What should it look like?', "'Three sections — fluency, word problems, challenge — with an answer key at the end.'"],
            ['Constraints', 'What are the guardrails?', "'Denominators of 12 or less; use food and sports contexts.'"],
          ],
        },
        {
          type: 'checkpoint',
          question: "A teacher types: 'Act as a 6th-grade science teacher. Write a 10-question quiz on the water cycle.' Which parts of the pattern are still missing?",
          options: [
            'Role and Task — neither of those appears anywhere in the prompt',
            'Nothing — naming the grade and the topic makes this prompt complete',
            'Context and Format — prior learning, and how the quiz should look',
            'Only Constraints — the other four parts are all clearly present here',
          ],
          correct: 2,
          explanation: "The role and task are there, but the AI still can't guess what these students covered, which misconception to target, or whether you want multiple choice with an answer key — so Context and Format are both missing. Naming a grade feels like context, which is why 'this prompt is complete' is tempting, but grade level alone says nothing about *your* class.",
        },
        { type: 'heading', text: 'Worked example: from 5 words to 5 parts' },
        {
          type: 'text',
          text: "Let's rebuild the worksheet prompt from the intro, one part at a time, and track what each addition buys you. Start with the five-word version: **'make a worksheet on fractions.'** The model has to guess the grade (it hedges toward middle school), the operation (it mixes everything), and the format (a wall of bare problems, no key).",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Add a Role:** 'You are an experienced 5th-grade math teacher.' *What it buys you:* the model's defaults for vocabulary, tone, and difficulty snap to 5th grade before you've said anything else.",
            "**Sharpen the Task:** 'Create a 12-question practice worksheet on adding fractions with unlike denominators.' *What it buys you:* a verb, a count, and a specific skill. No more guessing which operation — and you get 12 questions, not 'some.'",
            "**Add Context:** 'My students just learned equivalent fractions. Their most common error is adding the denominators.' *What it buys you:* this is the highest-value sentence in the whole prompt. Now problems can be designed to expose and correct that exact error.",
            "**Add Format:** 'Organize it into three sections — fluency practice, word problems, and one challenge question — with an answer key at the end.' *What it buys you:* you stop re-formatting output by hand. The structure arrives ready to print.",
            "**Add Constraints:** 'Use denominators of 12 or less, no negative numbers, and put word problems in food or sports contexts my students recognize.' *What it buys you:* output that's usable tomorrow, not theoretically correct but practically wrong for 10-year-olds.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'The full prompt, assembled',
          text: "\"You are an experienced 5th-grade math teacher. Create a 12-question practice worksheet on adding fractions with unlike denominators. My students just learned equivalent fractions, and their most common error is adding the denominators. Organize it into three sections — fluency practice, word problems, and one challenge question — with an answer key at the end. Use denominators of 12 or less, no negative numbers, and put word problems in food or sports contexts.\" That's about forty words more than 'make a worksheet on fractions.'",
        },
        {
          type: 'text',
          text: "The difference in output is not subtle. The five-word prompt returns a short list of bare equations at whatever difficulty the model guesses — often above the grade you had in mind — with no key and no structure, so you rebuild most of it before you can use it. The five-part prompt returns three labeled sections, problems built around the adding-the-denominators error, contexts your students recognize, and an answer key. You'll still edit it — but you're editing two things, not twenty.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'A great prompt does not equal a correct output',
          text: "Remember Module 1: models generate *plausible* text, and a clean layout is not evidence of accuracy. Check the answer key yourself before you photocopy — a confident, beautifully formatted worksheet can still contain a hallucinated wrong answer.",
        },
        {
          type: 'checkpoint',
          question: 'You asked for a lab-safety quiz and the questions came back far too advanced for your 7th graders. Which single addition to your prompt most directly fixes this?',
          options: [
            "A friendlier opening line so the model 'relaxes' the difficulty",
            'Context: the grade level and what your students have already covered',
            'Running the identical prompt again until the difficulty drops',
            'A longer role description packed with more impressive adjectives',
          ],
          correct: 1,
          explanation: "Difficulty miscalibration is almost always a missing-context problem — the model guessed an audience because you didn't name one, so naming the grade and their prior learning fixes it directly. Re-running the identical prompt is the tempting non-fix: without new information, you'll mostly get the same guess again.",
        },
        { type: 'heading', text: 'Same skill, any tool' },
        {
          type: 'text',
          text: "Everything in this lesson works identically in [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/), and [Claude](https://claude.ai/), because all three are large language models steering on the text you give them. Learn the pattern, not the product — the pattern survives every model update and every district tool change.",
        },
        {
          type: 'text',
          text: "Worth knowing as you pick a practice tool: [ChatGPT for Teachers](https://chatgpt.com/plans/k12-teachers/) is free for verified US K-12 educators through June 2027, [Claude for Teachers](https://claude.com/solutions/teachers) gives verified US K-12 educators a free year of premium access (sign up by June 30, 2027), and Gemini is included in [Google Workspace for Education](https://edu.google.com/intl/ALL_us/ai/gemini-for-education/) if your district runs Google. Use whichever your district supports — the prompts in this module don't care.",
        },
        {
          type: 'interactive',
          component: 'EducatorPromptLab',
          caption: 'Build a prompt part by part — pick a grade, subject, and task, then watch the quality feedback change as you add Role, Task, Context, and Format.',
        },
        {
          type: 'checkpoint',
          question: "A colleague says: 'I learned prompting in ChatGPT, but our district just switched to Gemini, so I'm back to square one.' What's the most accurate response?",
          options: [
            "They're right — each chatbot has its own prompt syntax to relearn",
            'Gemini ignores role instructions, so the RTCF pattern only half applies',
            'Only the role line transfers; context and format must be rewritten per tool',
            'The RTCF pattern transfers — all three respond to a specific briefing',
          ],
          correct: 3,
          explanation: "Role, Task, Context, and Format all work in any major chatbot because each one conditions its output on the text you give it — there's no tool-specific syntax to relearn. The 'only the role transfers' half-truth is the tempting one: every part of the briefing carries over, which is why the skill is portable rather than product-specific.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "Why do vague prompts fail? Because the AI is an intern with zero context — it fills every gap you leave with a statistical guess.",
            'What are the four parts of a great prompt? Role, Task, Context, and Format — plus Constraints when the details matter.',
            "Which part is usually most valuable? Context — the facts the model can't guess, especially what your students know and the errors they make.",
            'Does a great prompt guarantee a correct output? No — plausible is not the same as accurate, so verify before you print.',
            'Do prompts transfer between ChatGPT, Gemini, and Claude? Yes — the pattern is the skill, not the product.',
          ],
        },
        {
          type: 'text',
          text: "Even a five-part prompt usually gives you a strong *first draft*, not a finished product. The next lesson covers what the pros do next.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "What does the 'intern rule' from this lesson actually claim?",
            options: [
              "AI is an unreliable intern, so teachers shouldn't delegate anything that matters",
              'You hold the context the AI lacks, so your briefing sets the quality ceiling',
              'AI now knows enough about teaching to replace interns and student teachers',
              'Only give AI the tasks you would hand to a first-year teacher, nothing harder',
            ],
            correct: 1,
            explanation: "The rule is about who holds the context: you're the expert, the AI is a tireless assistant with none of your background, and the quality of your briefing determines the quality of its work. It isn't a claim that AI is unreliable or a replacement for people — vague delegation fails with any assistant, human or machine.",
          },
          {
            question: "You prompt 'Write a quiz about photosynthesis' and get college-level questions. Based on this lesson, what's the best single fix?",
            options: [
              'Switch to a different chatbot, since this one clearly skews advanced',
              'Shorten the prompt so there is less for the model to misread',
              'Add context: your grade level and what the class has covered',
              'Add polite phrasing — courteous prompts get simpler, gentler answers',
            ],
            correct: 2,
            explanation: "The model guessed an audience because you never named one — that's a context gap, and it will follow you to any tool you switch to. Shortening the prompt removes the very information a guessing model needs, and politeness changes tone, not reading level.",
          },
          {
            question: "Consider this prompt: 'You are an experienced kindergarten teacher. Create a 5-day sight-word practice plan, formatted as a table with one row per day.' Which part of the RTCF pattern is missing?",
            options: [
              'Role — the prompt never establishes who the AI should be',
              'Task — there is no clear deliverable named in the prompt',
              'Format — the prompt never says how the output should be structured',
              'Context — which sight words, and what students already know',
            ],
            correct: 3,
            explanation: "Role ('kindergarten teacher'), task ('5-day practice plan'), and format ('table, one row per day') are all present — what's missing is everything the model can't guess about your class. Without the word list and a sense of student level, you'll get a plan for a generic kindergarten, not yours.",
          },
          {
            question: "Why does a task line like 'Create a 12-question worksheet with three sections' beat 'make me a worksheet'?",
            options: [
              'Longer prompts are always more factually accurate than short ones',
              'Numbers and concrete verbs are specifications the model actually builds toward',
              'Specific requests cost the model less compute, so it returns better work',
              'A specific task line prevents the model from inventing details',
            ],
            correct: 1,
            explanation: "Counts, verbs, and structure are levers — the model builds toward them instead of guessing, so the output arrives closer to what you actually need. Note the tempting distractor: specificity improves *fit*, not factual accuracy, so a well-specified prompt can still hallucinate, which is why you verify.",
          },
          {
            question: 'Your five-part prompt produced a beautifully formatted worksheet with a complete answer key. What still has to happen before you photocopy it?',
            options: [
              'Nothing — a detailed prompt and clean formatting mean the content is reliable',
              'Run it through an AI detector to confirm the content is original',
              'Regenerate it once and keep whatever the two versions agree on',
              'Work the problems yourself and confirm the answer key is right',
            ],
            correct: 3,
            explanation: "This is the Module 1 rule that never goes away: models generate plausible text, polish is not proof of accuracy, and an answer key can be confidently wrong. Regenerating feels like double-checking, but a model can repeat the same error twice — verification means *you* work the problems.",
          },
          {
            question: 'Your district uses Gemini, but the prompting course you took used ChatGPT examples. According to this lesson, what should you expect?',
            options: [
              'The same briefing pattern steers Gemini — roles, tasks, and context transfer',
              "You'll need to relearn prompting from scratch, since prompt skills are tool-specific",
              "Gemini needs special formatting symbols that ChatGPT prompts don't include",
              'Prompts written for one tool return errors when pasted into another',
            ],
            correct: 0,
            explanation: "All three major chatbots — ChatGPT, Gemini, and Claude — condition their output on your text the same fundamental way, so the briefing pattern is fully portable. Outputs will differ in style between tools, but that's variation, not a broken prompt.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 2: Iterate Like a Pro
    // ------------------------------------------------------------------
    {
      id: 'iterate-like-a-pro',
      title: 'Iterate Like a Pro',
      duration: '20 min',
      objectives: [
        'Choose the right follow-up move — refine, regenerate with constraints, or ask-me-first — for a weak first draft',
        'Run a multi-turn iteration that turns a generic rubric into one that fits your actual assignment',
        "Use 'ask me 3 clarifying questions' to surface context you didn't know you were withholding",
      ],
      blocks: [
        {
          type: 'intro',
          text: "Watch a teacher who's good at this work: their first prompt takes thirty seconds, the reply is mediocre — and they don't care. Two short follow-up messages later, they have exactly what they wanted. Meanwhile, a frustrated colleague reads one mediocre first draft, declares \"AI is useless,\" and closes the tab. The difference isn't talent or a secret prompt. Pros treat the first output as a draft from the intern — never the final product — and they know three specific moves for what to do next.",
        },
        {
          type: 'text',
          text: "One thing makes iteration cheap: within a single conversation, the model can see everything you've both said so far — right up until a very long chat starts crowding out the earliest messages. You don't restate the whole briefing — you steer. 'Shorter.' 'Add an example.' 'More like the second one.' Each message is a nudge on top of everything that came before.",
        },
        { type: 'heading', text: 'Move 1: Refine — keep the draft, name the gap' },
        {
          type: 'text',
          text: "When a draft is *mostly* right, don't start over. Name what's wrong in plain teacher language: **'Make it shorter.' 'Rewrite at an 8th-grade reading level.' 'Add one worked example.' 'Warmer tone.'** You can stack several in one message. This is the move for detail-level problems — length, level, tone, one missing piece.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: "Name the gap, not the vibe",
          text: "'Make it better' forces the model to guess *which dimension* of better you mean — and it will guess wrong. 'Shorter, 8th-grade level, add an example' gives it three concrete edits. Vague dissatisfaction in, vague revision out.",
        },
        { type: 'heading', text: 'Move 2: Regenerate with constraints' },
        {
          type: 'text',
          text: "Sometimes the draft isn't rough — it's the wrong *shape*. A 20-question packet when you needed a 3-minute exit ticket. A lab that assumes equipment you don't own. Don't sand a wrong-shaped draft; re-ask with the missing constraint built in: **'Rewrite this from scratch, but this time use only the materials on this list.'** A useful variant: ask for options — 'Give me three different versions of the opening' — because choosing between drafts is faster than fixing one.",
        },
        { type: 'heading', text: 'Move 3: Make it interview you (the move almost nobody uses)' },
        {
          type: 'text',
          text: "Here's the highest-leverage sentence in this entire module: **'Before you answer, ask me 3 clarifying questions.'** It flips the direction of the conversation. Instead of guessing at your context, the model asks for it — what grade, what's the goal, what constraints matter — and you'll often discover context you didn't know you were withholding. Use it whenever the task is high-stakes or you're not fully sure what you want yet.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Why the interview move works',
          text: "The model's three questions are literally a diagnosis of what your prompt failed to specify. You get a better output *and* a lesson in what context to include next time — for the cost of one sentence.",
        },
        {
          type: 'checkpoint',
          question: "Your first draft of a parent newsletter is factually accurate but reads like a legal notice. What's the best next move?",
          options: [
            "Refine: reply 'Rewrite this in a warmer, more conversational tone'",
            'Regenerate from scratch in a brand-new chat with a longer prompt',
            'Accept it — accuracy matters more than tone in family communication',
            "Ask the model three clarifying questions about your school's tone",
          ],
          correct: 0,
          explanation: "The content is right and only the tone is off — a classic detail-level gap, which is exactly what refine is for, so name it and add a length cap if you want one. Starting a new chat throws away a 90%-correct draft and your conversation context; and note the reversed distractor — *you* don't ask the model clarifying questions, you invite it to ask *you*.",
          },
        { type: 'heading', text: 'Worked example: a rubric in three turns' },
        {
          type: 'text',
          text: "Here's a real iteration, turn by turn. The goal: a rubric for a 7th-grade persuasive essay. Watch what each turn accomplishes and why.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Turn 1 — the opening brief.** 'You are a 7th-grade ELA teacher. Create a rubric for a persuasive essay assignment.' *What comes back:* a competent, generic 6-criteria rubric with vague descriptors like 'good use of evidence.' *Why you're not done:* it fits any persuasive essay ever assigned — which means it fits yours only loosely.",
            "**Turn 2 — the interview.** 'Before we go further, ask me 3 clarifying questions that would most change how you build this rubric.' *What comes back:* it asks whether criteria should be weighted, whether the language should be student-facing, and what 'evidence' means at this level — direct quotes or paraphrase? *Why this matters:* you answer in two sentences, and two of those three things had never crossed your mind to mention.",
            "**Turn 3 — the targeted refine.** 'Four criteria only, student-friendly \"I can\" statements, a 4-point scale, and add a row for addressing the counterclaim — that's our focus standard this quarter.' *What comes back:* a rubric that matches your actual assignment. You edit two phrases and paste it into your doc.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'The sentence to steal',
          text: "\"Before you write anything, ask me 3 clarifying questions that would most change how you build this.\" Works for rubrics, unit plans, parent letters, IEP scaffolds — anything where you'd rather answer three good questions than debug a generic draft.",
        },
        {
          type: 'text',
          text: "Total time: about four minutes. Notice that no single turn was clever — each one was just a decision. That's the pattern behind every impressive AI result you've seen a colleague get: not one perfect prompt, but a short conversation steered by someone who knows what good looks like. That's your expertise doing the steering.",
        },
        {
          type: 'checkpoint',
          question: "You asked for discussion questions on a novel and got ten that are fine — but all recall-level, and you realize you never said you wanted analysis. Best next move?",
          options: [
            'Open a brand-new chat and retype the original prompt from memory',
            'Switch to a different AI tool that defaults to deeper questions',
            "Refine: 'Rewrite these as analysis questions that require text evidence'",
            'Accept the recall questions and write the analysis ones yourself later',
          ],
          correct: 2,
          explanation: "You've just discovered the gap, so name it — the model has the whole conversation in view and will revise directly. A new chat throws that context away for nothing, and no tool defaults to *your* unstated goals; depth was missing from the prompt, not from the product.",
        },
        {
          type: 'checkpoint',
          question: "You asked for a lab activity, and the draft assumes a full set of microscopes you don't have — the assumption runs through every step. Best move?",
          options: [
            'Refine each of the twelve steps one at a time to remove the microscope references',
            "Regenerate with constraints: 'Rewrite using only the materials I list'",
            'Ask the model to confirm whether your school really lacks microscopes',
            'Shorten the activity so fewer steps mention the missing equipment',
          ],
          correct: 1,
          explanation: "When a wrong assumption is baked into the whole structure, the draft is the wrong shape — re-asking with the constraint produces a design built around your real materials. Editing twelve steps one at a time is slower and usually leaves residue of the original assumption; and the model has no knowledge of your supply closet to be 'sure' about.",
        },
        {
          type: 'text',
          text: "One more pro habit: know when to stop. Iteration has diminishing returns, and the goal is never a perfect AI draft — it's a draft that's faster to finish by hand than to keep steering. Two or three turns usually gets you to 90%. When you catch yourself writing a fourth follow-up to fix one sentence, just fix the sentence. You're the editor with the red pen, and the red pen is often quicker than the chat box.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Three first drafts, three decisions — pick the next move a pro would make.',
          props: {
            title: 'Pick the next move',
            scenarios: [
              {
                situation: "You asked for a 6th-grade reading passage on ecosystems. The draft is accurate and well organized — but the vocabulary is clearly high-school level.",
                options: [
                  {
                    text: "Refine: 'Rewrite this at a 6th-grade reading level and bold 5 key vocabulary words.'",
                    quality: 'best',
                    feedback: "Right — the shape is fine and one dimension is off. Name the gap, keep everything that already works, and you're done in one turn.",
                  },
                  {
                    text: "Start a new chat and rewrite the original prompt with '6th-grade reading level' added.",
                    quality: 'ok',
                    feedback: "This works, but it throws away a draft that was 90% right and the conversation context with it. Save the fresh start for drafts that are the wrong shape, not the wrong level.",
                  },
                  {
                    text: "Conclude the tool can't write for middle schoolers and draft the passage yourself.",
                    quality: 'poor',
                    feedback: "One default-level draft doesn't reveal the ceiling — it reveals a missing instruction. Reading level is among the easiest things to fix with a single refine line.",
                  },
                ],
              },
              {
                situation: "You're about to plan a two-week project-based unit. It's high-stakes, and honestly you're not sure yet what the final product should even be.",
                options: [
                  {
                    text: "Type 'make me a 2-week PBL unit on ecosystems' and plan to fix whatever comes back.",
                    quality: 'poor',
                    feedback: "With this little context, the draft will be generic, and iterating it into shape will take far longer than a short interview would have.",
                  },
                  {
                    text: "Give the role and task, then add: 'Before you create anything, ask me 3 clarifying questions.'",
                    quality: 'best',
                    feedback: "Right — when the task is fuzzy or high-stakes, let the model interview you first. Its questions will surface decisions you didn't know you hadn't made yet.",
                  },
                  {
                    text: 'Spend 15 minutes writing one enormous prompt that covers every possible detail.',
                    quality: 'ok',
                    feedback: "Better than a vague prompt — but you'll still miss the things you haven't decided yet, and those are exactly what the interview move finds in one turn.",
                  },
                ],
              },
              {
                situation: "You asked for an exit ticket, but the draft is a 20-question worksheet — the whole structure is wrong for a 3-minute lesson closer.",
                options: [
                  {
                    text: "Refine: 'Delete 17 of these questions.'",
                    quality: 'ok',
                    feedback: "You'd end up with something usable, but you're doing surgery on a wrong-shape draft — put the 3-minute constraint in the prompt so the whole design targets it.",
                  },
                  {
                    text: 'Accept it and assign it as a homework packet instead.',
                    quality: 'poor',
                    feedback: "Now the tool is deciding your lesson design instead of you. You're the expert — make the output fit the plan, never the reverse.",
                  },
                  {
                    text: "Regenerate with constraints: 'Rewrite from scratch — maximum 3 questions, completable in under 3 minutes.'",
                    quality: 'best',
                    feedback: "Right — when the fundamental shape is wrong, re-asking with the missing constraint beats line-by-line repair every time.",
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'tryIt',
          title: 'Run the interview move on a real upcoming lesson',
          intro: "Five minutes, one real lesson from your plan book. Use [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/), or [Claude](https://claude.ai/) — the move is identical in all three.",
          steps: [
            'Pick something you actually need this week: a worksheet, a rubric, a station activity, a review game.',
            "Type a role and task, then the magic sentence: 'You are my co-planner, an experienced [GRADE] [SUBJECT] teacher. I need [THE THING] for a lesson on [TOPIC]. Before you create anything, ask me 3 clarifying questions that would most improve it.'",
            'Answer all three questions honestly in a single message — two or three sentences is plenty.',
            "Let it generate, then make exactly one refine request: 'shorter,' 'add a worked example,' or 'rewrite at [GRADE]-level reading.'",
            "Before you close the tab, note which clarifying question surprised you. That question is context your first prompts have been missing — put it in your opening brief next time.",
          ],
          url: 'https://chatgpt.com/',
          urlLabel: 'Open ChatGPT (or use Gemini / Claude)',
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What is a first draft for? Steering — pros expect it to be mediocre and spend their effort on the follow-up moves.',
            "When do you refine? When the draft is mostly right — name the specific gap: 'shorter, 8th-grade level, add an example.'",
            'When do you regenerate with constraints? When the draft is the wrong *shape* — re-ask with the missing constraint built in.',
            "When do you use 'ask me 3 clarifying questions'? Before generating anything high-stakes or fuzzy — the model's questions reveal the context you forgot to give.",
            'Why does iteration work inside one chat? The model keeps the whole conversation in view, so each message only needs to steer.',
          ],
        },
        {
          type: 'text',
          text: "You now have the pattern and the moves. The last lesson in this module saves you from ever building a prompt from a blank box again: a library of nine, ready to copy.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "When is 'Before you answer, ask me 3 clarifying questions' the most valuable move?",
            options: [
              'After the final draft is done, as a last quality-assurance check',
              'Before you generate anything high-stakes or still fuzzy in your own mind',
              'Only after the model has produced something clearly wrong',
              'Only in ChatGPT — Gemini and Claude ignore requests to ask you questions',
            ],
            correct: 1,
            explanation: "The interview move front-loads the context-gathering: the model's questions surface requirements you hadn't articulated yet, *before* anyone wastes a draft. Saving it for after an error means you've already paid the cost the move exists to prevent — and it is plain instruction, not a feature, so it works in every major chatbot.",
          },
          {
            question: 'Your draft rubric is solid but written in teacher jargon your 7th graders won\'t understand. Best move?',
            options: [
              'Open a fresh chat and retype the entire original prompt with more detail',
              'Accept it — students will get used to the academic language eventually',
              "Refine: 'Rewrite these descriptors as \"I can\" statements'",
              'Regenerate three completely new rubrics and pick the clearest one',
            ],
            correct: 2,
            explanation: "One dimension — audience language — is off, so name that gap in student-friendly terms and keep the criteria and structure that already work. A fresh chat or a full regeneration discards a mostly-right draft and your conversation context to fix a sentence-level problem.",
          },
          {
            question: "You asked for a persuasive-essay unit, but you actually teach science and need argumentative lab conclusions — the draft's whole premise is wrong. Best move?",
            options: [
              'Regenerate with constraints: rebrief the task around lab conclusions',
              "Refine: ask it to swap 'essay' for 'lab report' throughout the unit",
              'Keep the essay unit — persuasive skills transfer to science writing anyway',
              'Refine one activity at a time until the unit gradually becomes scientific',
            ],
            correct: 0,
            explanation: "A wrong premise runs through every activity, so this is a wrong-shape draft — rebuild it from a corrected brief that names lab conclusions and scientific evidence. Find-and-replace refinement is the tempting trap: swapping the words leaves a structure designed for the wrong genre.",
          },
          {
            question: "Mid-conversation you type just the word 'shorter' and the model correctly condenses your worksheet. Why does that work?",
            options: [
              'The model remembers everything you have ever typed across all chats and tools',
              'Models are trained to infer full instructions from any single word',
              "It doesn't actually work — one-word follow-ups produce random results",
              'Within one conversation, the model keeps the whole exchange in view',
            ],
            correct: 3,
            explanation: "Context within a single chat is what makes iteration cheap — 'shorter' inherits the entire worksheet because each message is a nudge on top of everything already said. The first option is the tempting one: some tools offer cross-chat memory features, but nothing carries your working context across different products, and a fresh chat starts without the draft you were steering.",
          },
          {
            question: "While iterating on a lesson, the model confidently cites 'a 2019 NCTM study' you can't find anywhere. What's the right call?",
            options: [
              'Trust it — a specific organization and year signal a real source',
              "Ask the model if it's certain, and keep the citation if it says yes",
              'Treat it as a likely hallucination until you verify it yourself',
              'Regenerate the response; if the citation appears again, it must be real',
            ],
            correct: 2,
            explanation: "Module 1's rule applies at every turn of an iteration: models produce plausible-looking citations that may not exist, and specificity is not evidence. Asking the model to confirm is the tempting trap — it can confidently double down on an invented source, and repetition across regenerations proves nothing.",
          },
          {
            question: "A colleague says: 'I tried AI once, the output was generic, and that proves the hype is empty.' Based on this module, what's the fairest response?",
            options: [
              "Agree — a tool that needs a second instruction isn't worth a teacher's time",
              'Suggest they upgrade to a paid model, which produces perfect first drafts',
              'Tell them generic first drafts mean their district chose the wrong chatbot',
              'First outputs are drafts — the quality shows up in the follow-up moves',
            ],
            correct: 3,
            explanation: "Judging AI on its first response is like judging an intern on their first hour: the follow-up moves — refine, regenerate with constraints, or the clarifying-questions interview — are where the quality actually appears. No model or price tier eliminates iteration, because the model can never start with the context that lives in your head.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 3: Your Prompt Library
    // ------------------------------------------------------------------
    {
      id: 'your-prompt-library',
      title: 'Your Prompt Library',
      duration: '25 min',
      objectives: [
        'Build a personal prompt library organized by task, so you never start from a blank chat box',
        "Adapt copy-ready templates by filling placeholders with your class's specifics",
        'Apply the no-PII rule when prompting about student support needs',
      ],
      blocks: [
        {
          type: 'intro',
          text: "In a 2025 Gallup survey for the Walton Family Foundation, US teachers who used AI at least weekly reported saving about six hours a week — roughly six school weeks a year. The ones getting that back aren't better typists; they've simply stopped starting from scratch. They keep a doc with a dozen battle-tested prompts, paste one, swap three placeholders, and are editing a usable draft while everyone else is still staring at an empty chat box. This lesson hands you that starter doc: nine prompts you can copy today, each built on the Role-Task-Context-Format pattern from Lesson 1.",
        },
        {
          type: 'text',
          text: "How to use these: every template below has **[PLACEHOLDERS]** — swap in your grade, topic, and specifics before sending. Each works as-is in [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/), and [Claude](https://claude.ai/). And after any prompt delivers a great result, save the *prompt* (not just the output) — that's how a library grows.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Where to keep your library',
          text: "A plain doc with a heading per task type beats anything fancy: it's searchable, shareable with your team, and portable when your district switches tools. Chatbots offer saved-prompt features, but a doc survives every platform change.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: '1. Lesson hook generator',
          text: "\"You are a creative [SUBJECT] teacher known for openings that hook even reluctant students. Give me 5 different hooks for a [GRADE] lesson on [TOPIC]: a surprising fact, a provocative question, a 60-second story, a quick demonstration or visual, and a real-world connection to students' lives. Keep each under 60 words and flag any that need prep materials.\" *When to use it:* the first five minutes of planning any new lesson — pick one hook or splice two together.",
        },
        {
          type: 'callout',
          variant: 'example',
          text: "\"You are a literacy specialist. Rewrite the following passage at three reading levels — [GRADE MINUS 2], [GRADE], and [GRADE PLUS 2] — keeping the same key facts and the vocabulary words [WORD 1], [WORD 2], [WORD 3] in every version. Keep each version under [LENGTH] words, and add 3 comprehension questions per version: one literal, two inferential. Passage: [PASTE PASSAGE].\" *When to use it:* one text, mixed-ability class — every student discusses the same content at an accessible level.",
          title: '2. Differentiated reading passages',
        },
        {
          type: 'callout',
          variant: 'example',
          title: '3. Misconception-anticipating quiz',
          text: "\"You are an experienced [GRADE] [SUBJECT] teacher. First, list the 4 most common student misconceptions about [TOPIC]. Then write a [N]-question multiple-choice quiz where each wrong answer maps to one of those misconceptions — so I can tell what a student misunderstood from which option they picked. End with an answer key that names the misconception behind each distractor.\" *When to use it:* before a unit test — the wrong-answer report becomes your reteach list.",
        },
        {
          type: 'checkpoint',
          question: 'The misconception-anticipating quiz prompt asks the AI to list misconceptions BEFORE writing any questions. What does that ordering buy you?',
          options: [
            'It makes the quiz harder, and harder quizzes raise rigor automatically',
            'Each wrong answer becomes diagnostic of a specific student misunderstanding',
            'It guarantees the questions and answer key are factually accurate',
            'It lets the AI grade the finished quiz for you afterward',
          ],
          correct: 1,
          explanation: "Distractors built from real misconceptions turn every wrong answer into information about student thinking — the option a student picks tells you what to reteach — instead of random filler. The accuracy option is the trap: no prompt structure guarantees correctness, which is why you still review the quiz and key yourself.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: '4. Feedback comment bank',
          text: "\"You are a [GRADE] [SUBJECT] teacher who writes feedback students actually read. Create a comment bank for [ASSIGNMENT]: 6 strength comments and 6 growth comments tied to these rubric criteria: [CRITERIA]. Encouraging, specific voice, 1-2 sentences each — and leave a [DETAIL] slot in every comment where I'll insert something specific from the student's work.\" *When to use it:* a stack of essays and one prep period; the [DETAIL] slot keeps every comment personal.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: '5. Parent email drafter',
          text: "\"Draft a warm, professional email to families about [SITUATION]. Under 150 words, positive in tone, crystal clear about any action needed by [DATE], and include a subject line. Do not invent any details — if you need information I haven't given you, ask me before writing.\" *When to use it:* any family communication — note the built-in guard against invented dates and details.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: '6. IEP-goal-aligned scaffold (no student PII)',
          text: "\"You are a special education co-teacher. A [GRADE] student — no name or identifying details needed — has an IEP goal of [GOAL, e.g., answering inferential questions using text evidence]. For my lesson on [TOPIC], suggest 3 scaffolds aligned to that goal — one for before, one during, one after the lesson — plus one quick way to collect evidence of progress. Refer to the student only by learning need.\" *When to use it:* accommodation planning — describe the need, never the student.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The no-PII rule',
          text: "Never put a student's name, initials, ID number, diagnosis, or any identifying detail into a chatbot — that includes pasting an IEP document. Describe the learning need generically ('a 4th grader working on decoding multisyllabic words') and the output is just as useful. Module 6 covers the FERPA specifics; the habit starts now.",
        },
        {
          type: 'checkpoint',
          question: 'Which of these is the SAFE way to prompt for IEP-aligned support ideas?',
          options: [
            "Paste the student's IEP PDF so the AI has complete, accurate context",
            "Use the student's initials and school name instead of the full name",
            "'Suggest reading scaffolds for a 5th grader working on reading fluency'",
            "Include the student's first name only, since last names are what FERPA protects",
          ],
          correct: 2,
          explanation: "A generic description of the learning need — grade plus skill, and you can safely add the target, like 110 words per minute — gets you equally useful scaffolds with zero student data exposed. Initials-plus-school is the tempting middle ground, but a small-context combination can still identify a child, and an IEP is a protected education record, so pasting it is the worst option rather than the most helpful one.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: '7. Exit tickets',
          text: "\"Create 3 exit-ticket options for today's [GRADE] lesson on [TOPIC]. The objective was: [OBJECTIVE]. Make one a 2-question quick check, one a one-sentence-summary prompt, and one an 'explain it to a friend who was absent' scenario. Each must be completable in under 3 minutes and reveal whether students met the objective — not just whether they paid attention.\" *When to use it:* 3 p.m., tomorrow's lesson needs a closer, and you want a choice rather than a blank page.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: '8. Emergency sub plans',
          text: "\"You are helping a [GRADE] [SUBJECT] teacher prepare emergency substitute plans. Create a self-contained [N]-minute plan on [TOPIC WE'RE CURRENTLY STUDYING] that needs no technology and no subject expertise from the sub: a 5-minute warm-up, an independent reading or practice task with written questions, and a reflection students turn in. Include a short script the sub can read aloud to launch each part.\" *When to use it:* before the flu finds you — generate two now and drop them in your sub folder.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: '9. Critique-my-draft (AI as editor)',
          text: "\"Act as a critical friend and instructional coach. Here is my draft [ARTIFACT: quiz / rubric / project sheet]: [PASTE DRAFT]. Do not rewrite it. First tell me: (1) where students are likely to get confused, (2) anything misaligned with my objective, which is [OBJECTIVE], and (3) one thing I should cut. Wait for my go-ahead before suggesting revisions.\" *When to use it:* when the draft is *yours* and you want it stress-tested, not replaced — the reverse of every other prompt here.",
        },
        {
          type: 'text',
          text: "Treat all nine as starting points to adapt, not scripts to obey. Swap in your state's standards language, add a line about your students' interests, tighten the constraints that matter in your room. The pattern underneath — Role, Task, Context, Format — is doing the heavy lifting; the placeholders are where your expertise goes.",
        },
        {
          type: 'interactive',
          component: 'FlashcardDeck',
          caption: 'Ten patterns from this module — can you recall what each one does before you flip?',
          props: {
            title: 'Prompt-pattern review',
            cards: [
              { front: 'Role line', back: "Tells the AI who to be — 'You are a literacy specialist.' Sets vocabulary, tone, and difficulty defaults before you ask for anything." },
              { front: 'Task line', back: "A verb plus a number: 'Create a 12-question worksheet.' Counts and concrete verbs are specifications the model builds toward." },
              { front: 'Context line', back: "The facts the model can't guess: grade, what students just learned, the error they keep making. Usually the highest-value sentence in the prompt." },
              { front: 'Format line', back: 'Describes what the output should look like — sections, a table, a length cap, an answer key — so you stop reformatting by hand.' },
              { front: 'Constraints', back: "Guardrails that keep output usable tomorrow: 'denominators of 12 or less,' 'no technology,' 'under 150 words.'" },
              { front: "'Ask me first'", back: "'Before you answer, ask me 3 clarifying questions.' Makes the model interview you and surfaces context you forgot to give. Best for high-stakes or fuzzy tasks." },
              { front: 'Refine', back: "Keep the draft, name the gap: 'shorter, 8th-grade level, add a worked example.' The move for detail-level fixes." },
              { front: 'Regenerate with constraints', back: "Re-ask from scratch with the missing requirement built in — the move when a draft is the wrong *shape*, not just rough." },
              { front: 'Misconception-first', back: 'Ask for common student misconceptions before the quiz gets written, so every wrong answer diagnoses real student thinking.' },
              { front: 'No-PII rule', back: 'Describe the learning need, never the student. No names, initials, ID numbers, IEP documents, or identifying details in any prompt — ever.' },
            ],
          },
        },
        {
          type: 'checkpoint',
          question: "A prompt you improvised yesterday produced a fantastic differentiated warm-up. What's the highest-leverage 20-second habit right now?",
          options: [
            'Screenshot the output so you can recreate something similar later',
            'Memorize the prompt so it stays top of mind for next time',
            'Rely on chat history — the conversation will still be there next month',
            'Paste the prompt into your library doc with a one-line note',
          ],
          correct: 3,
          explanation: "The reusable asset is the prompt, not the output — saved with a note, it becomes a template you'll use forty more times. Screenshots capture the result but lose the recipe, and chat histories get long, unsearchable, and stuck inside one tool.",
        },
        {
          type: 'links',
          title: 'Grow your library',
          items: [
            {
              label: 'AI for Education — prompt library and free course',
              url: 'https://www.aiforeducation.io/',
              description: 'A large, free, educator-built prompt library plus a hands-on 2-hour course — the closest thing to this module in the wild.',
            },
            {
              label: 'TeachAI',
              url: 'https://www.teachai.org/',
              description: 'The Code.org / ETS / ISTE / Khan Academy coalition — AI guidance, a literacy framework, and policy resources your district may already use.',
            },
            {
              label: 'ChatGPT for Teachers',
              url: 'https://chatgpt.com/plans/k12-teachers/',
              description: 'Free for verified US K-12 educators through June 2027 — a teacher workspace whose data is not used for model training by default.',
            },
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'Why keep a prompt library? Because the prompt is the reusable asset — save it once, swap placeholders forever, never face a blank chat box.',
            'What do the [PLACEHOLDERS] mark? The context slots only you can fill — grade, topic, objective, and constraints are where your expertise enters the template.',
            "What's the rule for student information? Describe the learning need, never the student — no names, initials, IDs, or pasted IEP documents.",
            'Why generate misconceptions before quiz questions? So each wrong answer diagnoses real student thinking instead of being filler.',
            'Do these templates lock you into one tool? No — they run unchanged in ChatGPT, Gemini, and Claude.',
          ],
        },
        {
          type: 'text',
          text: "Your library is stocked. Module 3 puts it to work on the tasks that eat your evenings: planning, materials, and communication.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'You have 10 minutes before a faculty meeting and need to email families about a field-trip time change. Best workflow?',
            options: [
              'Fill in your parent-email template, verify every detail, and send it yourself',
              "Paste your class roster into the chatbot so it can personalize each family's email",
              'Skip the AI — family communication should never involve a draft from a machine',
              'Ask the AI to send the email directly to the families on your class list',
            ],
            correct: 0,
            explanation: "The template gets you a solid draft in a minute, and you stay the sender and the final editor — checking that every date and detail is real before it goes out. Pasting a roster hands student PII to a chatbot, which breaks the no-PII rule no matter how convenient the personalization sounds.",
          },
          {
            question: 'Why do the library templates use [PLACEHOLDERS] instead of fully written-out prompts?',
            options: [
              'Square brackets are special syntax that chatbots require for variables',
              'Placeholders keep prompts short enough to avoid confusing the model',
              'They mark the context slots only you can fill for your own class',
              'They automatically hide sensitive student information from the AI',
            ],
            correct: 2,
            explanation: "A placeholder is a reminder that context is your job: the RTCF skeleton is reusable, but grade, topic, and objective have to be yours and change every time. The brackets themselves are just a visual convention — there's no special syntax any chatbot requires, and they don't shield anything you type from the model.",
          },
          {
            question: 'Which of these four prompt requests needs to be reworded before you send it?',
            options: [
              "'Suggest 3 scaffolds for a 4th grader decoding multisyllabic words'",
              "'Draft station-rotation ideas for my 28-student inclusion class'",
              "'Write math warm-ups for a group still mastering regrouping'",
              "'Create a behavior-plan outline for Jayden M., my 3rd grader with ADHD'",
            ],
            correct: 3,
            explanation: "A name plus a diagnosis is exactly the identifying student information that must never enter a chatbot — describe the need ('a 3rd grader who benefits from movement breaks and short task chunks') and you get the same quality of ideas. The other three describe needs and groups generically, which is the safe pattern.",
          },
          {
            question: 'When is the critique-my-draft prompt the right tool?',
            options: [
              'When you want the AI to score student work against your own rubric',
              'When you have your own draft and want it stress-tested, not replaced',
              'When you need brand-new material generated quickly from scratch',
              'Never — pasting your own work into a chatbot always violates privacy rules',
            ],
            correct: 1,
            explanation: "It reverses the usual direction: your draft goes in, and the AI plays critical friend — flagging confusion points and misalignment without rewriting. Your own teacher-created materials contain no student data, so pasting them is fine; it's *student* information that stays out.",
          },
          {
            question: "The parent-email drafter produced a polished email that confidently includes 'May 12' — a date you never provided. What happened, and what do you do?",
            options: [
              'The model checked your school calendar; keep the date if it looks right',
              "The date carried over from another teacher's chat; report a privacy breach",
              "Nothing happened — a model can't produce a date you never typed",
              'It filled a gap with invented text — replace it with the real date',
            ],
            correct: 3,
            explanation: "That's a hallucination doing what Module 1 warned about — filling missing information with something plausible. The chatbot has no access to your school calendar or other teachers' chats; the guard line in the template ('ask me before inventing details') helps, but your final read-through is what actually protects families from wrong information.",
          },
          {
            question: 'A colleague copies your hook-generator prompt but complains it produces bland, generic hooks. What should you check first?',
            options: [
              'Which chatbot they used — the template only works in the one you wrote it in',
              'Whether they filled the placeholders — an unfilled [TOPIC] or [GRADE] leaves it guessing',
              'Whether they typed it politely — models reward courteous phrasing with creativity',
              'The time of day — models produce weaker output during peak usage hours',
            ],
            correct: 1,
            explanation: "Bland output is the signature of missing context, and an unfilled [TOPIC] or [GRADE] is the most common way context goes missing — Lesson 1's intern rule, revisited, since guesses are generic by definition. The tool-swap explanation is the tempting one, but the RTCF pattern transfers across ChatGPT, Gemini, and Claude; specifics, not brand, drive quality.",
          },
        ],
      },
    },
  ],
};

export default unit;
