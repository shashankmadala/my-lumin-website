// Educator Module 1 — How AI Actually Works (and When It Fails)
// Plain-language, non-anthropomorphic LLM foundations for K-12 teachers:
// next-token prediction, hallucination and bias as inherited failures, and an
// honest framework for when NOT to use AI. Facts and URLs sourced from the
// August 2026 research files (educator-courses, teacher-tools, interactive-tools).

const unit = {
  id: 'module-1',
  title: 'How AI Actually Works — and When It Fails',
  description: 'What large language models actually do, why they fail the way they do, and an honest, evidence-based framework for deciding when — and when not — to use them.',
  icon: 'Cpu',
  lessons: [
    // ---------------------------------------------------------------
    // Lesson 1 — What ChatGPT Actually Does
    // ---------------------------------------------------------------
    {
      id: 'what-chatgpt-actually-does',
      title: 'What ChatGPT Actually Does',
      duration: '25 min',
      objectives: [
        "Explain next-token prediction in plain language, without saying the model \"knows\" or \"thinks\"",
        'Describe how training data shapes what a model produces reliably — and where it gets shaky',
        'Explain why the same prompt gives different answers, and what that means for how you use these tools',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Start typing \"the mitochondria is the\" on your phone and watch the keyboard rush to finish the phrase for you. Now imagine that autocomplete trained on a huge slice of the internet, scaled up to billions of adjustable numbers, and given the patience to continue not just your sentence but a whole essay, worksheet, or parent email. That's not a loose metaphor — at the level that matters for your classroom, it's what ChatGPT, Gemini, and Claude actually do. This one mechanism explains almost everything else you'll meet in this course: the fluency, the confident wrong answers, and why the same prompt never produces the same output twice.",
        },
        { type: 'heading', text: "The world's most expensive autocomplete" },
        {
          type: 'text',
          text: "A **large language model (LLM)** is a program trained to do one job: given a sequence of text, predict which **token** comes next. A token is a chunk of text — usually a word or a piece of a word. The model predicts one token, appends it to the sequence, and predicts again, thousands of times per response. There's no outline, no inner monologue, and no fact-checking step bolted onto the end. Prediction is the whole show.",
        },
        {
          type: 'text',
          text: "Notice the verb: the model *predicts*. It doesn't *know* the capital of France, *believe* your rubric is fair, or *understand* your students. Those words smuggle in a mind that isn't there — and they cause real mistakes, like trusting a confident tone or delegating judgment calls. Getting the language right now is what protects you from misplaced trust later.",
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'Say it like this in class',
          text: "When a student says \"the AI knows everything,\" hand back one sentence: \"The model predicts the most likely next word, based on patterns in the text it was trained on.\" That reframe is arguably the single most useful piece of AI literacy you can give a class — and it's the language this whole course uses.",
        },
        {
          type: 'keyTerms',
          title: 'Vocabulary that keeps you honest',
          terms: [
            { term: 'Token', definition: 'A chunk of text — a word or word-piece — that the model reads and produces. Models process tokens, never individual letters.' },
            { term: 'Large language model (LLM)', definition: 'A program trained on massive amounts of text to predict the next token in a sequence. ChatGPT, Gemini, and Claude are all built on LLMs.' },
            { term: 'Training data', definition: 'The text a model learned patterns from. What was common there is reliable; what was rare, recent, or absent is where output gets shaky.' },
            { term: 'Next-token prediction', definition: 'The core mechanism: compute how likely every possible next token is, pick one, append it, repeat.' },
            { term: 'Sampling', definition: 'The controlled randomness in picking among likely tokens — the reason identical prompts produce different responses.' },
          ],
        },
        {
          type: 'video',
          videoId: 'LPZh9BOjkQs',
          title: 'Large Language Models explained briefly (3Blue1Brown)',
          duration: '8 min',
          note: 'The best sub-10-minute visual explanation of next-token prediction. Everything in this lesson gets a picture here.',
        },
        {
          type: 'checkpoint',
          question: "A colleague says, \"I asked ChatGPT and it looked the answer up for me.\" What actually happened?",
          options: [
            'The model searched a built-in database of verified facts',
            'The model quietly ran a web search and summarized the top results',
            'The model generated a statistically likely sequence of tokens',
            'The model retrieved an exact answer it had memorized from one webpage',
          ],
          correct: 2,
          explanation: "A plain LLM has no fact database and no lookup step — it generates likely text, token by token, which is why the answer still needs checking. Some tools do bolt a web search on top, but even then the wording you read is produced by prediction.",
        },
        { type: 'heading', text: "Where the \"knowledge\" comes from" },
        {
          type: 'text',
          text: "During training, the model processes an enormous amount of text and adjusts billions of internal numbers until its next-token guesses get good. What's left afterward isn't a library — it's compressed statistical patterns. When a fact appears thousands of times in training text (*Paris is the capital of France*), the pattern is strong and the model's output is dependable. When a fact is rare, recent, or absent, the predictions get unreliable — but the fluent style stays exactly the same.",
        },
        { type: 'subheading', text: 'Worked example: one prediction at a time' },
        {
          type: 'list',
          ordered: true,
          items: [
            "You type **\"The capital of France is\"**. The model converts your words into tokens — numbered chunks it can do math on. *Why this matters:* the model never sees letters, only tokens, which is why it can fumble spelling tasks and mangle unusual names.",
            "The model computes a probability for every possible next token. *Paris* scores overwhelmingly high, because that exact pattern saturates its training text. *Why this matters:* strong pattern, reliable output. This is the model at its best.",
            "Now change the prompt to **\"The capital of West Dakota is\"**. No such state exists — but there's no built-in \"no answer\" state either. The model may fluently name a plausible city, or it may object that West Dakota isn't real; whichever continuation its training patterns score higher is the one you get. *Why this matters:* this is the seed of every fabricated fact you'll ever see from these tools.",
            "The chosen token is appended and the whole cycle repeats — hundreds or thousands of times per response. *Why this matters:* each prediction builds on the ones before it, so one early wobble can snowball into a confidently wrong paragraph.",
          ],
        },
        {
          type: 'interactive',
          component: 'TokenPredictor',
          caption: 'Play the model: predict the next token yourself, then compare your guesses to the statistics.',
        },
        {
          type: 'checkpoint',
          question: "Why does an LLM produce an answer even to a nonsense question like \"What year did Shakespeare invent the telephone?\"",
          options: [
            'It always predicts some continuation; refusing is just rarer text',
            'It is programmed to never admit uncertainty about any question',
            'It has Shakespeare and Alexander Graham Bell confused in its database',
            'It assumes the user must be right and deliberately plays along with them',
          ],
          correct: 0,
          explanation: "The prediction machinery always yields a next token, so a correction like \"Shakespeare didn't invent the telephone\" surfaces only when that is the statistically likely continuation. The last option imagines a deliberate choice to please you — but there's no chooser inside, only probabilities.",
        },
        { type: 'heading', text: 'Why the same prompt gives different answers' },
        {
          type: 'text',
          text: "When generating, the model doesn't always take the single top-scoring token — it **samples** among the likely ones, with a controlled dose of randomness. Pick a slightly different second word and every prediction after it shifts, so two runs of the same prompt can diverge into noticeably different responses. That's not a malfunction; it's a design choice that makes output varied and natural instead of robotically repetitive.",
        },
        {
          type: 'list',
          items: [
            '**Regenerate is a feature.** Same prompt, fresh draft. If the first rubric misses the mark, rerun before you rewrite.',
            "**Outputs aren't citable.** \"ChatGPT said so\" is not a stable source — tomorrow it may say otherwise. Anything factual needs a real source behind it.",
            '**Treat every output as a draft** from a fast, well-read, unreliable assistant — raw material for your professional judgment, never a finished product.',
          ],
        },
        {
          type: 'tryIt',
          title: 'Optional: see tokens with your own eyes',
          intro: 'Ten minutes with a tokenizer makes everything in this lesson concrete.',
          url: 'https://tiktokenizer.vercel.app/',
          urlLabel: 'Open Tiktokenizer',
          steps: [
            'Open [Tiktokenizer](https://tiktokenizer.vercel.app/) and paste a sentence from your subject area. Watch it split into colored token chunks.',
            'Try your full name, an emoji, and a long technical term from your discipline. Count how many tokens each becomes — and notice which ones shatter into odd pieces.',
            'Paste a sentence in another language your students speak. It often takes far more tokens than the English equivalent — one reason models handle some languages worse than others.',
            "Want a second opinion? Compare with [OpenAI's tokenizer](https://platform.openai.com/tokenizer).",
          ],
        },
        {
          type: 'checkpoint',
          question: 'You run the same lesson-plan prompt twice and get two different drafts. Which classroom habit follows from the reason why?',
          options: [
            'Report the inconsistency to the vendor so it can be fixed',
            'Regenerate, compare drafts, and keep the best parts of each',
            'Trust only the first response, since later ones drift from the original',
            'Rewrite your prompt until the model gives the same answer every time',
          ],
          correct: 1,
          explanation: "Sampling means variation is built in, so the productive habit is to exploit it: generate several drafts and harvest the best. It isn't a bug, no run is more \"official\" than another, and no prompt wording can make a sampling model perfectly deterministic.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What does an LLM actually do? It predicts the next token, over and over, using patterns learned from massive amounts of training text.',
            "Why say \"the model predicts\" instead of \"the AI knows\"? Because there's no fact database or understanding inside — only statistics — and the wrong verb invites the wrong level of trust.",
            'Why do identical prompts give different answers? Sampling: the model picks among likely tokens with some randomness, and early differences snowball.',
            "What's the practical rule? Treat every output as a fast first draft to verify and revise — never as a finished, factual product.",
          ],
        },
        {
          type: 'text',
          text: "Next: what happens when prediction produces confident fiction — and why that's not a bug the vendors can simply patch out.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'What is a large language model doing when it generates a response?',
            options: [
              'Searching a curated database of verified facts and quoting the best match',
              'Predicting the next token repeatedly, using patterns from its training text',
              'Reasoning about the meaning of your question and consulting original sources',
              'Retrieving sentences it stored verbatim from webpages and stitching them together',
            ],
            correct: 1,
            explanation: "Generation is next-token prediction, repeated thousands of times, with no database or source-consulting step anywhere in the loop — which is exactly why fluent output can be confidently wrong. It also composes fresh token sequences rather than pasting stored sentences.",
          },
          {
            question: 'Two teachers run an identical prompt in Gemini during a department meeting and get different outputs. One concludes the tool is broken. What actually explains it?',
            options: [
              'The model tailored each response to what it remembered about each teacher',
              'One teacher was quietly served an older version of the model',
              'Sampling: the model picks among likely tokens with some randomness',
              "One output is the model's real answer and the other is a processing error",
            ],
            correct: 2,
            explanation: "Variation between runs is designed-in randomness, and small early differences compound across the rest of the response. Neither output is the \"real\" one — both are samples — and the personalization option imagines a memory and intent the model doesn't have.",
          },
          {
            question: "Why is the sentence \"the model knows the capital of France\" misleading?",
            options: [
              'It stores statistical patterns between tokens, not facts that it looks up',
              'Models get straightforward geography questions wrong more often than right',
              'Its information stops at the end of training, so nothing it says is current',
              'The capital of France appears too rarely in training text to be learned',
            ],
            correct: 0,
            explanation: "The problem is the mechanism, not the accuracy — a fact repeated this often usually comes out right. Calling it \"knowing\" implies a lookup step that doesn't exist, which is why reliability collapses on rare or recent facts while the confident tone never changes.",
          },
          {
            question: 'Which classroom observation is best explained by tokenization?',
            options: [
              'It gives a different answer each time you rerun the same prompt',
              'It miscounts letters in words and mangles unusual student names',
              'It declines to discuss certain sensitive classroom topics',
              'It writes confidently about topics missing from its training data',
            ],
            correct: 1,
            explanation: "The model reads and writes chunks (tokens), never individual letters, so letter-level tasks like counting the r's in \"strawberry\" fail and rare names shatter into odd pieces. Rerunning for a different answer is real too, but that comes from sampling — a separate mechanism.",
          },
          {
            question: 'Based on how LLMs work, which task should you trust the model to handle most reliably?',
            options: [
              "Reporting the exact percentage of your state's students who passed algebra last year",
              'Reformatting the class notes you paste in into a fill-in-the-blank worksheet',
              'Producing the definitive research citation that supports a teaching strategy',
              'Recalling the rubric it generated for you in a different chat last month',
            ],
            correct: 1,
            explanation: "Transforming text you supply is pure pattern work — the model's home turf — and you can verify the result at a glance. Exact statistics and citations depend on facts you can't confirm are in its patterns, and chats don't share memory by default.",
          },
          {
            question: 'A model writes fluent, confident text about a topic that barely appears in its training data. What should you expect?',
            options: [
              'The confident tone signals that it found the topic in a reliable source',
              "It will refuse to answer questions about topics it wasn't trained on",
              'The fluent style will stay, but factual reliability drops sharply',
              'It will search the web automatically to fill in what it lacks',
            ],
            correct: 2,
            explanation: "Style is learned across all training text, so fluency never wavers — but weak patterns mean unreliable content. Tone doesn't signal sourcing, refusal is rare because prediction always produces something, and web search only exists as an explicit add-on.",
          },
        ],
      },
    },

    // ---------------------------------------------------------------
    // Lesson 2 — Hallucinations and Failure Modes
    // ---------------------------------------------------------------
    {
      id: 'hallucinations-and-failure-modes',
      title: 'Hallucinations and Failure Modes',
      duration: '20 min',
      objectives: [
        'Explain why hallucination is a direct consequence of next-token prediction, not a bug awaiting a patch',
        'Run a verification routine (curate → verify → revise) on anything student-facing',
        'Identify where training-data bias shows up in teacher workflows, and when human review is non-negotiable',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Ask a chatbot for three peer-reviewed sources on a niche topic in your subject — say, teaching fractions with number lines in multilingual classrooms — and you'll likely get three beautifully formatted citations: real-sounding authors, plausible journal names, tidy page numbers, even DOIs. Now try to find them. Often, at least one doesn't exist. Nobody programmed the model to deceive you. It did exactly what it always does — and that's the problem this lesson unpacks.",
        },
        { type: 'heading', text: 'Hallucination is the system working as designed' },
        {
          type: 'text',
          text: "Lesson 1's mechanism explains it. The model predicts the most plausible next tokens — and a fabricated citation is assembled from exactly the same statistical patterns as a real one: surname, initial, year, plausible title, journal that publishes that kind of thing. There's no bibliography being consulted as it writes, because there is no bibliography. **Plausible** and **true** are different properties, and the machinery only optimizes for the first.",
        },
        {
          type: 'text',
          text: "This is why hallucination isn't a bug that the next update will fix. Vendors can reduce it — with better training, web-search add-ons, and grounding — but generating likely text is the whole engine. Remove the possibility of confident fiction and you've removed the product. So build your workflow around the failure, not around the hope that the next version won't have it.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Fluency is not accuracy',
          text: "The model's confident, polished tone is a *style* learned from training text — it's identical whether the content is correct or invented. You cannot judge truth by how sure the output sounds. This is the single most common way smart adults get burned.",
        },
        {
          type: 'checkpoint',
          question: 'Why do fabricated citations look so convincing?',
          options: [
            'The model deliberately disguises fake sources so they pass inspection',
            "They're built from the same statistical patterns as real citations",
            "They're real citations with only the page numbers altered",
            'The model copies real papers and swaps in different author names',
          ],
          correct: 1,
          explanation: "Citation format is what the model learned best — thousands of real examples taught it exactly what one looks like, so a flawless format is simply the most plausible token sequence. There's no deliberate disguise because there's no intent at all.",
        },
        {
          type: 'tryIt',
          title: 'The hallucination hunt',
          intro: 'Do this once before you trust any model with anything factual. Most teachers who try it find at least one fabrication — and that firsthand experience will protect you better than any warning.',
          steps: [
            "Open whichever chatbot you use — ChatGPT, Gemini, or Claude — and ask: \"Give me 3 scholarly citations about [an obscure topic in your subject].\" The more niche the topic, the better the hunt.",
            'For each citation, search the exact title (in quotation marks) in your library database or a scholarly search engine. A real paper surfaces; a fabricated one returns nothing, or a different paper.',
            'For any you do find, check the details: right authors? right journal? right year? Partial hallucinations — real paper, wrong details — count too.',
            'Tally your results and save them. That tally is your personal evidence base for the conversations in Lesson 3 — and later, with students.',
          ],
        },
        { type: 'subheading', text: 'Worked example: verifying one citation' },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Read it like a skeptic.** *Nguyen, T. (2019). Number lines and fraction sense in multilingual classrooms. Journal of Mathematics Education Research.* Nothing looks wrong — which is exactly why looks are worthless as evidence.",
            '**Search the exact title in quotation marks.** *Why:* fabricated titles typically return zero matches, or a similar-sounding but different paper. Zero matches on an exact title is a giant red flag.',
            '**Verify the container.** Does that journal exist, and did it publish in 2019? *Why:* partial hallucinations attach a real author to a fake venue, or a real venue to a fake article — the pieces are real even when the combination is fiction.',
            '**Apply the rule: no independent confirmation, no use.** *Why:* the burden of proof sits on the output. You never have to prove a citation is fake; it has to prove itself real.',
          ],
        },
        {
          type: 'checkpoint',
          question: "During your hallucination hunt, one citation's exact title returns zero results in every database you try. What's the most likely explanation?",
          options: [
            'The paper is too new to have been indexed anywhere yet',
            'The databases you searched all happen to exclude that journal',
            "The model assembled a citation that doesn't actually exist",
            'The paper was retracted and scrubbed from the internet',
          ],
          correct: 2,
          explanation: "Total disappearance of an exact title is the signature of fabrication. Genuinely new papers still surface on a publisher page or preprint server, one missing journal wouldn't erase a title from every index, and retracted papers leave a visible retraction notice behind.",
        },
        { type: 'heading', text: "Bias: the failure you can't catch by fact-checking" },
        {
          type: 'text',
          text: "Hallucination at least leaves fingerprints you can search for. The second inherited failure is quieter. Training data is a snapshot of human text — including its stereotypes and skews — so the model reproduces those patterns at scale, in fluent, professional-sounding prose. No individual sentence looks wrong. The pattern across outputs is what's wrong.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'The evidence, from teacher tools specifically',
          text: "In August 2025, [Common Sense Media assessed AI teacher assistants](https://www.chalkbeat.org/2025/08/06/ai-teacher-assistants-promote-racial-bias-study-finds/) — including Gemini in Classroom, Khanmigo, Curipod, and MagicSchool. It rated the category **moderate risk** overall, but flagged the tools that generate IEPs and behavior intervention plans as **high risk**. The standout finding: the tools suggested **more punitive behavior plans for students with Black-coded names**, with otherwise identical descriptions. The takeaway isn't \"never use these tools.\" It's a hard rule: **human review is mandatory for anything about an individual student** — behavior plans, IEP language, grading, notes home.",
        },
        {
          type: 'interactive',
          component: 'AIOrNot',
          caption: 'Sharpen the reflex: can you even tell AI-written text from human? Most people are worse at this than they expect — which is exactly why verification beats vibes.',
        },
        { type: 'heading', text: 'The routine: curate → verify → revise' },
        {
          type: 'text',
          text: "You don't need to distrust everything forever — you need a repeatable ninety-second habit. Anything a student, parent, or administrator will see goes through three passes:",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Curate.** You choose the source material, constraints, and framing before the model writes a word. Feed it your notes, your standards, your reading list — the model transforms, you supply the substance.',
            "**Verify.** Check every fact, name, number, citation, and reading level against a source you trust. Focus on the checkable things — don't just re-read for vibes, because fluent wrongness passes the vibe check.",
            '**Revise.** Rewrite it in your voice, for your actual students. This pass catches what fact-checking misses: tone, assumptions, and bias.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Shrink the problem with grounding',
          text: "Source-grounded tools like [NotebookLM](https://notebooklm.google.com/) answer only from documents you load, which sharply cuts hallucination — the model transforms your sources instead of free-associating from training patterns. It reduces the risk. It does not eliminate the review.",
        },
        {
          type: 'checkpoint',
          question: 'According to this lesson, which output absolutely requires full human review before any use?',
          options: [
            'A word search generated from your own vocabulary list',
            "Three alternative hooks for tomorrow's opening",
            'A draft behavior plan for a specific student of yours',
            'A rhyming mnemonic for remembering the order of operations',
          ],
          correct: 2,
          explanation: "Anything about an individual student sits at the intersection of high stakes and documented bias — the Common Sense Media finding was specifically about behavior plans. The other three are low-stakes pattern tasks whose errors you can spot at a glance.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'Why do models fabricate? Because they generate the most plausible next tokens, and plausible is not the same as true — fabrication is the mechanism itself meeting a gap in its data.',
            'How do you catch hallucinations? Verify the checkable things — exact titles, names, numbers — against sources you trust; never judge by confidence or formatting.',
            'Where does bias come from? From patterns in the training data, reproduced fluently — which is why human review of anything about an individual student is non-negotiable.',
            "What's the routine? Curate your sources, verify every checkable claim, revise into your own voice — for anything student-facing, every time.",
          ],
        },
        {
          type: 'text',
          text: 'You now know how the machine works and how it fails. The last lesson of this module asks the harder question: given all that, when is using it the right call — and when should you just close the tab?',
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Why do experts describe hallucination as a feature of how LLMs work rather than a bug to be patched?',
            options: [
              "Because vendors have decided that fixing it isn't commercially worthwhile",
              'Because hallucinations only happen when users write vague prompts',
              'Because models hallucinate deliberately to seem more creative',
              'Because producing plausible text is the engine itself, not an add-on',
            ],
            correct: 3,
            explanation: "Plausible-but-false output is the generating mechanism hitting a gap in its data, so confident fiction can be reduced with grounding and web search but never engineered away. Better prompts lower the odds without closing the gap — asked about something absent from its patterns, the model still predicts something plausible.",
          },
          {
            question: 'A chatbot gives you three perfectly formatted citations, complete with DOIs, for a curriculum-committee proposal. What should you do?',
            options: [
              'Search each exact title and confirm every source really exists',
              'Use them as-is — a DOI is proof that a citation is real',
              'Ask the same chatbot to double-check its own citations for accuracy',
              'Keep the two from journals you recognize and drop the third',
            ],
            correct: 0,
            explanation: "Every element of a citation, DOI included, is just a plausible token pattern until you confirm it independently — do that before the proposal leaves your laptop. Asking the model to check itself is prediction all the way down, and a recognizable journal attached to a nonexistent article is a classic partial hallucination.",
          },
          {
            question: 'Why does the August 2025 Common Sense Media assessment of AI teacher assistants matter to your daily practice?',
            options: [
              'It found AI teacher assistants too unreliable for any classroom use at all',
              'It found bias only in the tools without district-level contracts',
              'The tools suggested more punitive behavior plans for Black-coded names',
              'It found bias in AI image generation but not in generated text',
            ],
            correct: 2,
            explanation: "That finding shows bias landing precisely where stakes are highest for kids, which is why the assessment flagged IEP and behavior-plan generation as high risk and why human review of anything about an individual student is mandatory. \"Never use\" overstates it — the category overall was rated moderate risk — and \"use without review\" ignores it.",
          },
          {
            question: "In the curate → verify → revise routine, what does \"verify\" specifically mean?",
            options: [
              'Re-reading the whole output carefully to check whether it sounds right',
              'Checking facts, names, numbers, and citations against trusted sources',
              'Running the output through an AI-detection tool before using it',
              'Asking the model to rate its own confidence in what it wrote',
            ],
            correct: 1,
            explanation: "Verification means checking the checkable things — facts, names, numbers, citations, reading level — against independent sources. \"Sounds right\" is exactly the trap, since fluency is a style rather than a signal, and detectors and self-ratings are unreliable outputs of the same kind of system you're trying to check.",
          },
          {
            question: "You want students to query a chatbot that answers only from this unit's readings. Which approach best fits that goal?",
            options: [
              'Load the readings into a source-grounded tool like NotebookLM and share it view-only',
              "Instruct a general chatbot to \"only use my readings\" — the instruction guarantees grounding",
              'Use any major chatbot, since they automatically cite a source for every claim',
              'Give up on the idea — restricting an AI to specific sources is impossible',
            ],
            correct: 0,
            explanation: "Source-grounded tools constrain generation to the documents you load, which is the closest fit to \"answers only from the readings.\" A prompt instruction helps but guarantees nothing, and general chatbots don't cite real sources by default — they generate citation-shaped text.",
          },
          {
            question: 'Where does bias in model output come from?',
            options: [
              'Engineers deliberately encode their own political views into these models',
              'Models develop their own prejudices as they grow more capable',
              'Training data carries human stereotypes, and the model reproduces them',
              'Bias appears only when the user writes a biased or leading prompt',
            ],
            correct: 2,
            explanation: "Models inherit the statistical patterns of their training text, stereotypes included — no intent required, which is what makes it easy to miss. \"Models develop prejudices\" anthropomorphizes, and neutral prompts still surface biased patterns, as the behavior-plan finding showed.",
          },
        ],
      },
    },

    // ---------------------------------------------------------------
    // Lesson 3 — The Honest Conversation
    // ---------------------------------------------------------------
    {
      id: 'the-honest-conversation',
      title: 'The Honest Conversation',
      duration: '20 min',
      objectives: [
        'Weigh the documented case against classroom AI — not just the sales pitch — using real survey data',
        'Apply a three-question framework to decide, task by task, when not to use AI',
        "Explain the narrow, honest case for AI use that survives the skeptics' objections",
      ],
      blocks: [
        {
          type: 'intro',
          text: "Here's a number the ads won't show you: in a Pew Research Center survey, only **6% of K-12 teachers** said AI tools do more good than harm in K-12 education — and in EdWeek Research Center polling, 47% of educators expect AI to make teaching and learning worse over the next five years. If you're skeptical, you're not behind the curve; you're the majority. This lesson won't try to talk you out of it. It puts the real case against on the table next to the real case for, and hands you a framework for deciding, task by task, when the right answer is \"don't.\"",
        },
        {
          type: 'text',
          text: "The training picture explains a lot of the mood. [Teacher AI training is rising fast](https://www.edweek.org/technology/teacher-ai-training-is-rising-fast-but-still-has-a-long-way-to-go/2025/11) — EdWeek Research Center tracking puts it at 58% of teachers by winter 2026, up from 40% in fall 2024 — but that still leaves 42% with none at all, and roughly a third of the trained group got a single one-off session ([EdWeek, May 2026](https://www.edweek.org/technology/more-schools-are-providing-ai-training-for-teachers-is-it-any-good/2026/05)). Most teachers have been handed powerful tools with, at best, an hour of instructions. Skepticism under those conditions isn't a character flaw — it's professional caution.",
        },
        { type: 'heading', text: "The case against — and it's not irrational" },
        {
          type: 'list',
          items: [
            "**Deskilling.** Lesson planning and feedback aren't just products; they're how you think through your teaching. Outsource them wholesale and the craft can atrophy — the same worry every profession is wrestling with right now.",
            '**Workload-shifting.** If AI saves you three hours, who captures them? Efficiency gains have a history of becoming raised expectations — more sections, more documentation — rather than breathing room. Saved time only counts if you keep it.',
            '**Equity.** Well-resourced schools get vetted tools, training, and paid tiers; under-resourced schools get free tiers and no PD — and the bias findings from Lesson 2 land hardest on students with the least protection.',
            '**Environmental cost.** Training and running large models consumes real energy and water — a fair factor when weighing whether a trivial use is worth it.',
            "**The passive-recipient problem.** [One sharp critique](https://mail.cyberneticforests.com/how-does-openai-imagine-k-12-education/) of vendor-built teacher training argues it treats teachers as recipients being prepared for a product, not professionals critically choosing tools. Fair point — it's why this course showed you the mechanism first and lets you decide.",
          ],
        },
        {
          type: 'quote',
          text: "We can't stop with efficiencies.",
          attribution: 'Jessica Garner, ISTE+ASCD',
        },
        {
          type: 'text',
          text: "Notice who's saying that: an advocate for AI in education. Even the people building teacher PD concede that time-saving alone is too small a vision — and too small an argument to settle whether AI belongs anywhere near your classroom.",
        },
        {
          type: 'checkpoint',
          question: "A colleague says, \"Teachers who resist AI are just afraid of technology.\" Based on the data in this lesson, what's the most accurate response?",
          options: [
            'Research does show that resistance mostly comes from unfamiliarity with tech',
            'Skepticism is the mainstream and evidence-based position among teachers',
            'Surveys actually show most teachers enthusiastically support classroom AI',
            'The data shows older teachers resist while younger teachers embrace it',
          ],
          correct: 1,
          explanation: "Only 6% of K-12 teachers told Pew that AI tools do more good than harm, and 42% still report zero training — so skeptics are the majority, and their stated concerns about bias, workload, and equity are substantive rather than technophobia. The age-split claim is a stereotype that appears nowhere in this data.",
        },
        { type: 'heading', text: 'The case for — also real' },
        {
          type: 'text',
          text: "The honest case for isn't \"AI will transform education.\" It's narrower: certain time-consuming, verifiable, low-stakes tasks — first drafts, reformatting, leveling texts — are pattern work, which is precisely what the machine is good at. Google reports that 83% of teachers completing its AI course expect to save two or more hours a week. That's a company-reported figure, so salt it accordingly — but the category of task it describes is real, and you'll test it against your own week in Module 3.",
        },
        {
          type: 'text',
          text: "Two more entries are harder to dismiss. **Differentiation at scale:** producing one reading at three levels used to cost an evening; it's now minutes plus your verification pass. **Accessibility:** translated family communication, chunked texts, and audio versions materially help real students, today. The skeptic's question isn't whether these are useful — it's whether they're worth the trade-offs above. That's a judgment call, and it's yours to make.",
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'The stance this course takes',
          text: "AI is a drafting assistant for tasks you can verify — never a substitute for your judgment about students. If a use doesn't leave you with time saved *after* the verification pass, or touches something only a human should touch, skip it. Skipping it is a professional decision, not a failure to keep up.",
        },
        { type: 'heading', text: 'A framework for when NOT to use AI' },
        {
          type: 'text',
          text: "Before putting AI on any task, ask three questions. **One: is this a relationship moment?** Condolences, apologies, celebrating a breakthrough, rebuilding trust with a parent — the value is that it came from you. **Two: is this a high-stakes judgment about a person?** Grades, behavior plans, IEP decisions, references — accountability can't be delegated, and Lesson 2's bias findings live exactly here. **Three: can I verify the output?** If you can't check it — unfamiliar content, no time, no source — you're not using a tool; you're gambling with your name on the result. A \"yes\" to one or two, or a \"no\" to three, means don't use AI — or use it only for structure while every ounce of substance stays yours.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: running the framework',
          text: "**Task: drafting your back-to-school newsletter.** Q1 — relationship moment? It's warm but routine; families expect information, not intimacy. Pass. Q2 — high-stakes judgment about a person? No individual students involved. Pass. Q3 — verifiable? Every date, time, and policy checks against your own calendar in two minutes. Pass. **Verdict: strong AI task** — draft with AI, verify the details, revise into your voice. Now swap in a condolence note: it fails Q1 instantly, and no amount of editing fixes that — because the failure isn't in the text, it's in who wrote it.",
        },
        {
          type: 'table',
          headers: ['Task', 'AI-appropriate?', 'Why'],
          rows: [
            ['First draft of a quiz on content you know well', 'Yes', 'Pattern work you can verify at a glance — your expertise is the safety net'],
            ['Leveling one article for three reading groups', 'Yes — then verify', 'High payoff, checkable output; confirm the easiest version keeps the key ideas'],
            ['Brainstorming hooks for a hard-to-teach topic', 'Yes', 'Low stakes, nothing to fabricate; you pick the winner'],
            ['Condolence or congratulations note to a family', 'No', 'Relationship moment — the value is that you wrote it'],
            ['Behavior plan or IEP language for a specific student', 'Not the student-specific parts', 'High-stakes judgment plus documented bias risk; generic strategy brainstorming only, never student details'],
            ['Deciding a final grade', 'No', "Professional judgment you're accountable for — and the model can't see the student, only text"],
          ],
        },
        {
          type: 'checkpoint',
          question: "Which task fails the framework's \"can I verify the output?\" question?",
          options: [
            'Generating a crossword puzzle from your own vocabulary list',
            'Reformatting your own lecture notes into a student study guide',
            "Summarizing research on a topic you don't know, with no time to check",
            "Drafting three versions of instructions for a lab you've run for years",
          ],
          correct: 2,
          explanation: "Unfamiliar content plus no checking time means any hallucination sails straight through — that's the gambling scenario the framework exists to catch. In the other three, your own materials or your own expertise make errors visible at a glance.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Three real situations. Sometimes the best move is not using AI at all — see if you agree where the lines fall.',
          props: {
            title: 'Should you use AI here?',
            scenarios: [
              {
                situation: "It's 9 p.m. and you owe a reply to a parent who sent an angry email disputing their child's essay grade. You're exhausted and tempted to let a chatbot handle the whole thing.",
                options: [
                  {
                    text: "Paste the parent's email — student name and all — into a chatbot and send its polished reply.",
                    quality: 'poor',
                    feedback: "Two problems at once: you've shared a student's name and grade details with a consumer tool, and a parent disputing a grade is owed your professional judgment, not a template. Never paste identifying details, and never outsource a charged relationship moment wholesale.",
                  },
                  {
                    text: 'Write your key points yourself, then ask a chatbot — with all names and identifying details removed — to help you make the tone calm and professional. Edit before sending.',
                    quality: 'best',
                    feedback: 'You own the substance and the relationship; the model only polishes tone. Stripping identifying details keeps student data out of the tool, and your final edit keeps the voice — and the accountability — yours.',
                  },
                  {
                    text: 'Skip AI entirely and write the whole reply yourself tonight.',
                    quality: 'ok',
                    feedback: 'Completely legitimate — AI is never mandatory. Just know the middle path exists: keeping the substance and judgment human while using the model as a de-escalating tone editor is also a defensible professional choice, and it might get you to bed earlier.',
                  },
                ],
              },
              {
                situation: "An administrator asks you to draft a behavior-intervention plan for a specific student by Friday. A colleague suggests: \"Just have MagicSchool or ChatGPT write it — takes two minutes.\"",
                options: [
                  {
                    text: 'Describe the student — name, background, behaviors — to an AI tool and use its plan with light edits.',
                    quality: 'poor',
                    feedback: "An August 2025 Common Sense Media assessment found AI teacher assistants suggested more punitive behavior plans when student names read as Black. Feeding a real student's details into a tool and lightly editing its output imports that documented bias into a high-stakes document with a child's name on it.",
                  },
                  {
                    text: 'Ask AI for general, evidence-based intervention strategies for that behavior pattern — no student details — then build the plan yourself using what you know about the student.',
                    quality: 'best',
                    feedback: 'This keeps AI on the low-risk side of the line: generic pattern knowledge in, your professional judgment applied to the actual child. No student data leaves your hands, and every consequential decision stays with you and your team.',
                  },
                  {
                    text: 'Refuse to involve AI at any stage and start from a blank page.',
                    quality: 'ok',
                    feedback: 'Defensible — this is exactly the high-stakes territory where opting out is reasonable. But a detail-free strategy brainstorm is genuinely low-risk and can widen your options; the hard rule is that decisions about the actual student stay entirely human.',
                  },
                ],
              },
              {
                situation: 'A student in your homeroom lost a grandparent over the weekend. You want to send the family a short note.',
                options: [
                  {
                    text: 'Ask a chatbot to write a heartfelt condolence message and send it as-is.',
                    quality: 'poor',
                    feedback: 'This is precisely the relationship moment the decision framework rules out. If the family ever sensed the note was machine-written — and generic AI phrasing is easy to sense — it would damage trust far more than an imperfect note ever could. The value of a condolence note is who wrote it.',
                  },
                  {
                    text: 'Write two honest sentences yourself, even if they feel plain.',
                    quality: 'best',
                    feedback: "Plain and real beats polished and hollow in every relationship moment. Two sincere sentences from their child's actual teacher will be remembered; elegance was never the assignment.",
                  },
                  {
                    text: 'Find a condolence-message template online and adapt it.',
                    quality: 'ok',
                    feedback: "A template is at least a human starting point, and adapting it adds your voice. But notice you don't need the scaffold — two plain sentences you actually mean will land better than any polished template, because authenticity is the entire point here.",
                  },
                ],
              },
            ],
          },
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'Is teacher skepticism justified? Largely, yes — only 6% told Pew that AI tools do more good than harm, 42% still have zero training, and the concerns (deskilling, workload-shifting, equity, environment) are substantive.',
            "What's the honest case for? Verified time savings on pattern tasks, differentiation at scale, and accessibility — much narrower than the hype, but real.",
            "When should you not use AI? Relationship moments, high-stakes judgments about individual people, and anything you can't verify.",
            'Who decides? You do — AI use is a task-by-task professional judgment, not an identity or a loyalty test.',
          ],
        },
        {
          type: 'text',
          text: 'Module 2 assumes a task has passed your framework — and teaches you how to get output actually worth your verification time. First stop: the anatomy of a great prompt.',
        },
      ],
      quiz: {
        questions: [
          {
            question: 'In the Pew Research Center survey cited in this module, what share of K-12 teachers said AI tools do more good than harm in K-12 education?',
            options: ['Roughly half of teachers', 'Roughly a quarter of teachers', 'Roughly 6% of teachers', 'Roughly 83% of teachers'],
            correct: 2,
            explanation: "Just 6% — skepticism is the mainstream teacher position, which is why this course engages it instead of dismissing it. Roughly a quarter is the share who said the opposite (more harm than good), and 83% is Google's company-reported claim about its own course graduates.",
          },
          {
            question: "A student's family suffers a loss, and a colleague suggests using ChatGPT to write the condolence note \"so it sounds perfect.\" What's the best call?",
            options: [
              'Write it yourself — the whole value is that it came from you',
              'Use AI for the draft, then change a few words so it sounds like you',
              'Use AI — a polished note shows more respect than an awkward one',
              'Send no note, since anything you write risks the wrong tone',
            ],
            correct: 0,
            explanation: "Relationship moments fail the framework's first question no matter how good the output is, because the meaning lives in who wrote it. Light edits don't change authorship, and \"polished\" was never what a grieving family needed from their child's teacher.",
          },
          {
            question: "You're asked to draft a behavior plan for a specific student. Which use of AI fits both this lesson's framework and the bias evidence from Lesson 2?",
            options: [
              'Describe the student in detail so the plan is tailored, then edit it carefully',
              'Ask for general strategies for that behavior, with no student details',
              'Have one AI write the plan and a second AI check its output for bias',
              'Use AI freely, since district-approved tools have had their bias removed',
            ],
            correct: 1,
            explanation: 'Generic strategies in, your own judgment applied to the real child — that keeps the documented bias from the Common Sense Media behavior-plan finding away from a high-stakes document. No tool is certified bias-free, and AI checking AI stacks the same failure mode twice.',
          },
          {
            question: "What does the \"workload-shifting\" concern predict about AI time savings for teachers?",
            options: [
              'Teachers will refuse to use the extra time that AI saves them',
              'AI will turn out not to save real time on any classroom task',
              'The hours saved will make teaching itself feel less meaningful to teachers',
              'Saved hours get absorbed by raised expectations unless you guard them',
            ],
            correct: 3,
            explanation: "The concern isn't that the savings are fake — it's about who captures them, since efficiency gains have a history of becoming higher expectations like more sections and more documentation. That's an argument for going in clear-eyed and guarding your reclaimed time, not proof the tasks save nothing.",
          },
          {
            question: "In a staff debate, a colleague cites \"what ChatGPT said\" as evidence for a policy position. Drawing on Lesson 1, why is that shaky ground?",
            options: [
              'Chatbots are programmed to agree with whoever is asking them',
              'Outputs vary run to run, and none of it is a checkable source',
              "ChatGPT's answers are only reliable for math and science topics",
              'It would be fine, as long as the colleague used the paid version',
            ],
            correct: 1,
            explanation: "Sampling means a rerun changes the answer, and either way it's generated token predictions rather than a source anyone else can verify. Models aren't programmed to agree (though phrasing can nudge them), and no subscription tier turns predictions into citations.",
          },
          {
            question: 'Which task passes all three questions of the decision framework?',
            options: [
              "Generating a first-draft quiz on a unit you've taught for five years",
              "Having AI compose the note home about a specific student's playground fight",
              'Asking AI which of your students most needs a reading intervention',
              'Using AI to summarize a special-education legal document you have no way to check',
            ],
            correct: 0,
            explanation: 'A quiz draft on familiar content is low-stakes, involves no individual student, and your expertise makes it instantly verifiable. The others fail in turn: a relationship-heavy note about one student, a high-stakes judgment about individual kids, and an unverifiable output with legal consequences.',
          },
        ],
      },
    },
  ],
};

export default unit;
