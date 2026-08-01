// Educator Module 4 — Reach Every Learner: differentiation at scale, IEP/504 support with hard privacy rules, and the honest AI tool guide.
const unit = {
  id: 'module-4',
  title: 'Reach Every Learner',
  description: "Turn one text into three, support IEPs without risking student privacy, and build a small toolbox of AI tools that actually earn their place.",
  icon: 'Users',
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1: Differentiation at scale
    // ------------------------------------------------------------------
    {
      id: 'differentiation-at-scale',
      title: 'Differentiation at Scale',
      duration: '25 min',
      objectives: [
        'Turn one text into three reading levels and verify the results in minutes',
        'Generate scaffolds — sentence starters, glossaries, chunked directions — for any assignment',
        'Support multilingual learners and families without waiting weeks for translation',
        'Adapt every workflow for elementary classrooms',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Fourth period. Twenty-eight students. Four of them read two grade levels ahead, six read at least two below, and three joined your school in the last eighteen months speaking little English. The article you planned to teach is written for exactly one of those groups. Differentiation is the advice every PD session gives you — and no PD session gives you time for. This lesson changes the math: with AI, one text becomes three texts, plus scaffolds and translations, in about the time it takes to make copies.",
        },
        {
          type: 'text',
          text: "First, a definition worth being precise about. Differentiating a text means changing the **access point**, not the learning goal. Every student still grapples with the same concept and answers the same essential question. What changes is vocabulary load, sentence complexity, and how much background knowledge the text assumes. If a rewrite quietly deletes the concept, it isn't differentiation — it's a different (and lesser) lesson.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Same goal, different ladder',
          text: "A good leveled rewrite changes the vocabulary, sentence length, and density of a text — never the core concept. If your grade-3 version no longer teaches photosynthesis, the rewrite failed. That's the single test to apply to everything AI hands you in this lesson.",
        },
        { type: 'heading', text: 'One text, three levels: a worked example' },
        {
          type: 'text',
          text: "Here's a grade-8 science paragraph run through that test. Read down the table and notice what changes at each level — and what stubbornly stays the same. This is the quality bar you'll hold AI to.",
        },
        {
          type: 'table',
          headers: ['Level', 'The text', 'What changed'],
          rows: [
            [
              'Original (~grade 8)',
              "During photosynthesis, plants convert light energy into chemical energy. Chloroplasts absorb sunlight and use it to transform carbon dioxide and water into glucose, releasing oxygen as a byproduct. This process sustains nearly every food chain on Earth.",
              "Baseline: academic verbs ('convert', 'transform'), dense clauses, terms like 'byproduct' left undefined.",
            ],
            [
              '~Grade 5',
              "Plants make their own food using sunlight. Inside their leaves, tiny parts called chloroplasts use sunlight, water from the roots, and a gas called carbon dioxide. The plant turns these into sugar for energy and releases oxygen into the air. Almost every food chain on Earth depends on this process.",
              "Key terms kept but defined inside the sentence ('a gas called carbon dioxide'); shorter sentences; 'byproduct' dropped.",
            ],
            [
              '~Grade 2',
              "Plants use sunlight to make their own food. Their leaves take in air. Their roots take in water. The plant makes sugar to grow. It also gives off oxygen. Oxygen is part of the air we need to breathe.",
              "One idea per sentence; everyday vocabulary. The concept survives fully: sunlight in, food made, oxygen out.",
            ],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Paste your original text.** It's the anchor — the AI levels *your* content instead of inventing new content, which keeps every fact checkable against a source you trust.",
            "**Name the audience and protect the concept.** 'Rewrite for students reading at a 4th-grade level. Keep the concept of photosynthesis fully intact.' Naming what must survive is the step most teachers skip — and the reason concepts get silently deleted.",
            "**Ask for a change log.** Add 'list what you changed.' Now you can verify the rewrite in seconds instead of re-reading both versions line by line.",
            "**Verify the facts.** Rewrites drift. You saw in Module 1 how confidently AI produces plausible-but-wrong text — that risk doesn't disappear just because it started from your material. Check the leveled version against the original before it touches a copier.",
            "**Spot-check the level.** Read one sentence aloud. If a struggling reader in your room would stumble on it, iterate: 'Shorter sentences. Define carbon dioxide inside the sentence.'",
          ],
        },
        {
          type: 'checkpoint',
          question: 'You ask AI to rewrite a grade-8 text on plate tectonics for struggling readers. Which change in the output should make you reject the draft?',
          options: [
            'Sentences are shorter and transition words are simpler',
            'The convection-currents paragraph is gone entirely',
            'Key terms are now defined right inside the sentences',
            'The text is roughly half as long as the original',
          ],
          correct: 1,
          explanation: "Leveling changes the ladder, never the goal — deleting the convection-currents concept means students get a lesser lesson, not an accessible one. Shorter sentences, in-sentence definitions, and reduced length are exactly what a good rewrite *should* do.",
        },
        { type: 'heading', text: 'Scaffolds: support without rewriting' },
        {
          type: 'text',
          text: "Sometimes the text is fine and the task is the barrier. Scaffolds are temporary supports that let students do grade-level work — and AI drafts them in seconds. Three workhorses cover most classrooms: sentence starters, glossaries, and chunking.",
        },
        {
          type: 'list',
          items: [
            "**Sentence starters and frames:** 'Write five sentence starters for an argument paragraph about school uniforms, at three levels of support.' Students who can think but can't start now have a ramp.",
            "**Tiered glossaries:** 'From this article, pull the 8 hardest words. For each, give a kid-friendly definition and an example sentence from everyday life.' Front-loading vocabulary is often all a below-level reader needs.",
            "**Chunked directions:** 'Break this lab procedure into numbered steps, one action per step, with a checkbox line after each.' Executive-function support that quietly helps far more students than it's 'for.'",
            "**Graphic organizer skeletons:** ask for a compare-contrast or cause-effect outline students fill in — a pre-drawn map of the thinking you want.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'A prompt worth stealing',
          text: "Notice the Module 2 anatomy — role, task, context, format — doing the work: 'You're a 5th-grade science teacher. Create a glossary of the 8 most difficult words in the article below. Context: my class includes several English learners, and many students read below grade level. Format: a table with the word, a kid-friendly definition of 10 words or fewer, and one example sentence about everyday life — not science.' The specific format request is what makes the output usable without rework.",
        },
        {
          type: 'checkpoint',
          question: 'A student understood yesterday’s class discussion completely but freezes when asked to write about it. Which scaffold targets that exact barrier?',
          options: [
            'Sentence starters for each paragraph',
            'A leveled rewrite of the original reading',
            'A translated glossary of the key terms',
            'A shorter reading assignment for tonight',
          ],
          correct: 0,
          explanation: "Her barrier is production, not comprehension — she has the ideas and can't start the writing, and sentence starters give her a ramp into each paragraph. A leveled rewrite or shorter reading targets comprehension barriers she doesn't have, and a glossary targets vocabulary she already showed she understands.",
        },
        { type: 'heading', text: 'Multilingual learners and families' },
        {
          type: 'text',
          text: "AI translation has gotten good enough to be genuinely useful — and it's still no substitute for a qualified human when stakes are high. The sweet spot: classroom materials and family-communication drafts. Generate a Spanish version of your newsletter, a parallel English/Portuguese glossary, or a leveled English text a newcomer can read alongside a home-language version. For legal or IEP documents, use your district's official translation channel. No exceptions.",
        },
        {
          type: 'list',
          items: [
            "**Parallel texts:** the same paragraph in English and the home language, side by side — so students build English instead of bypassing it.",
            "**Bilingual glossaries:** key terms with home-language equivalents. Ask AI to flag cognates ('photosynthesis / fotosíntesis') — they're free wins for Spanish speakers.",
            "**Family communication:** draft the message in English, translate it, then ask for a back-translation to English to sanity-check the tone before you hit send.",
          ],
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'The elementary corner',
          text: "Most AI PD examples assume middle or high school — Google's flagship educator course is explicitly framed for older grades, leaving elementary teachers to translate everything. You don't need translation; you need different format specs. Ask for decodable-style sentences for early readers ('short sentences, mostly one-syllable words, no irregular spellings beyond common sight words'), a read-aloud script with pause-and-ask questions for a picture book, or center directions with one verb per line and a spot for a picture cue. The workflow is identical — only the format request changes.",
        },
        {
          type: 'checkpoint',
          question: 'A newcomer student speaks Ukrainian and reads very little English. Which support keeps her building English while still accessing today’s science content?',
          options: [
            'Translate all of her science materials into Ukrainian only',
            'Give her the grade-2 English version of the text by itself',
            'Parallel English–Ukrainian text plus a bilingual glossary',
            'Excuse her from the reading until her English improves',
          ],
          correct: 2,
          explanation: "Parallel text gives her the science through her strong language while the side-by-side English builds her new one — support without bypass. Ukrainian-only removes English exposure entirely, the grade-2 English version alone may still be inaccessible, and excusing her from content is the outcome differentiation exists to prevent.",
        },
        {
          type: 'tryIt',
          title: 'Adapt one real resource in Diffit',
          intro: "Diffit is a teacher-facing tool built for exactly this lesson: one resource in, leveled versions out. The free Basic tier is genuinely usable — do this with something you're actually teaching in the next two weeks.",
          url: 'https://www.diffit.me/',
          urlLabel: 'Open Diffit',
          steps: [
            "Open [Diffit](https://www.diffit.me/) and create a free account — the Basic tier costs nothing.",
            "Choose to adapt an existing resource and paste in an article, a passage from your textbook, or even a YouTube link from an upcoming unit.",
            "Generate the resource at your grade level, then re-level the same text twice more — one level lower, one higher. (Diffit levels from roughly grades 2–11.)",
            "Run the worked-example test on each version: is the core concept fully intact? Read one sentence of each aloud to sanity-check the level.",
            "Skim the auto-generated vocabulary list and comprehension questions. Delete anything you wouldn't actually use — you're the editor, not the audience.",
            "Export your best set to Google Docs, Slides, or Forms. That's tomorrow's differentiated text. Total time: about ten minutes.",
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What changes in a leveled text? Vocabulary, sentence length, and density — never the core concept. That's the test for every draft.",
            "What's the fastest quality check? Ask for a change log, verify facts against your original, and read one sentence aloud.",
            "When the text isn't the barrier? Reach for scaffolds: sentence starters for production, glossaries for vocabulary, chunking for executive function.",
            "Where does AI translation belong? Classroom materials and family-communication drafts — never legal or IEP documents.",
            "What do elementary teachers change? The format request, not the workflow: decodable sentences, read-aloud scripts, one-verb-per-line directions.",
          ],
        },
        {
          type: 'text',
          text: "One caveat has been hovering over this whole lesson: several of these workflows involve describing real students to an AI. The moment those students have IEPs, that gets legally serious. Next lesson: how to get AI's help with special education without ever putting a student at risk.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'You level a grade-8 article on cell division down to grade 4. Which outcome tells you the differentiation actually worked?',
            options: [
              'The text is much shorter, so students finish faster',
              'The hardest concepts were cut, so nobody gets confused',
              'Struggling readers can now explain mitosis in their own words',
              'The quiz average rises because the questions got easier',
            ],
            correct: 2,
            explanation: "Differentiation succeeds when every student accesses the *same* concept — struggling readers explaining mitosis, the very idea the grade-8 text taught, is that success made visible. Cutting the hardest concepts is the classic failure mode: it feels kind but delivers a lesser lesson, and shorter text or easier questions measure convenience, not access.",
          },
          {
            question: 'Module 1 flashback: before you photocopy an AI-leveled science text, why must you check it against the original?',
            options: [
              'Rewrites can introduce confident-sounding factual errors',
              'The model looks each fact up online again and may pull in newer claims',
              'Copyright rules require comparing every AI rewrite to its source',
              'Simplifying vocabulary always drops the text a full grade too low',
            ],
            correct: 0,
            explanation: "Starting from your text doesn't switch off hallucination — the model regenerates the passage from patterns and can smoothly alter a fact along the way, exactly the confident-error pattern from Module 1. It isn't looking anything up while it writes, and copyright isn't what's at stake here; drift is.",
          },
          {
            question: 'A student can read the lab procedure fine but keeps losing his place halfway through and skipping steps. Best-fit scaffold?',
            options: [
              'Sentence starters to structure his lab write-up',
              'A tiered glossary defining the lab’s key terms',
              'A leveled rewrite of the procedure at grade 4',
              'Numbered steps, one action each, with a checkbox line',
            ],
            correct: 3,
            explanation: "His barrier is executive function — tracking where he is in a multi-step task — which chunking into one-action steps with checkboxes directly supports. A leveled rewrite or glossary treats this as a comprehension problem, but he reads the procedure fine; matching the scaffold to the actual barrier is the skill.",
          },
          {
            question: "Your district translator is booked for two weeks, and tomorrow's materials need to be accessible to a Spanish-speaking newcomer. What's the best move?",
            options: [
              'Wait for the translator — AI translation is never appropriate in schools',
              'Use AI for a parallel English–Spanish version of tomorrow’s text',
              'Have her rely on a phone translation app during the unit test instead',
              'Give her the lowest-level English version and skip translation entirely',
            ],
            correct: 1,
            explanation: "Classroom materials are AI translation's sweet spot: low-stakes, immediate, and reviewable — while IEP and legal documents still go through your district's official channels. 'Never appropriate' throws away real access for two weeks, and the other options either shift the burden to the student mid-test or remove language support altogether.",
          },
          {
            question: 'Module 2 flashback: which prompt will produce the most usable glossary on the first try?',
            options: [
              "'You are a helpful, experienced teacher. Please make the article below a lot easier for my struggling students to read.'",
              "'Make a glossary from the article below. My students are smart, but they struggle with vocabulary sometimes.'",
              "'Pull the hard words out of the article below and define them so that sixth graders will understand.'",
              "'6th-grade teacher: from the article below, table the 8 hardest words with kid-friendly definitions and examples.'",
            ],
            correct: 3,
            explanation: "Only the last prompt carries the full Module 2 anatomy — role, task, and an exact output format — so the table arrives usable on the first try. The third is closer than it looks, but it never says how many words or what shape the output should take, which is why glossaries like that come back needing rework.",
          },
          {
            question: 'A kindergarten teacher wants AI-drafted directions for a math center. Which format request fits her students?',
            options: [
              'One short step per line, with a spot for a picture cue',
              'A numbered list of full paragraphs explaining each station',
              'The same directions written at three different reading levels',
              'A 300-word narrative walkthrough of the whole center',
            ],
            correct: 0,
            explanation: "Kindergartners need directions they can follow before they can really read: one action per line, minimal words, picture support — so the format request has to say exactly that. Paragraphs and narratives assume fluent readers, and three reading levels solves a middle-school problem, not a pre-reader one.",
          },
        ],
      },
    },
    // ------------------------------------------------------------------
    // Lesson 2: Supporting IEPs and 504s
    // ------------------------------------------------------------------
    {
      id: 'supporting-ieps-and-504s',
      title: 'Supporting IEPs and 504s',
      duration: '25 min',
      objectives: [
        'Use AI to brainstorm accommodation ideas while every decision stays with the IEP team',
        'Draft social stories, chunked assignments, and goal-aligned scaffolds in minutes',
        'Apply the hard privacy rule: describe students generically, never identifiably',
        'Judge what is safe to paste into a chatbot — and what never is',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Twelve students with IEPs across five class periods, each plan twenty-plus pages, and a progress-report deadline on Friday. The temptation is obvious: paste the IEP into a chatbot and ask for a summary. Don't. That one paste can put a student's federally protected records on a company's servers — and put you on the wrong side of FERPA. Here's the good news: you can get almost all of the same help with zero risk. This lesson shows you exactly where the line is, and how to work brilliantly on the safe side of it.",
        },
        { type: 'heading', text: 'Ideation, never decisions' },
        {
          type: 'text',
          text: "Start with the boundary that keeps everyone safe. Under IDEA, accommodation and service decisions belong to the IEP team — the people who know the student, including the family. AI never makes those calls. What AI is genuinely great at is **ideation**: generating options, drafts, and starting points that you and the team then judge. Think of it as the world's fastest brainstorming partner — one who has read a great deal about scaffolding and knows nothing about your student. That second part is a feature, not a bug.",
        },
        {
          type: 'list',
          items: [
            "**Brainstorm scaffolds aligned to a goal:** 'List 10 classroom scaffolds for a middle schooler working on a reading-fluency goal.' You pick the two that fit; the team decides.",
            "**Draft a social story:** a short, first-person narrative that previews a routine or transition — AI drafts, you personalize offline.",
            "**Chunk an assignment:** turn a two-week project into checkpointed steps with built-in check-ins.",
            "**Generate alternative ways to show mastery:** oral responses, labeled diagrams, demonstrations — options to bring to the team, not impose.",
            "**Translate an accommodation into concrete moves:** 'What does *preferential seating* actually look like in a lab classroom? Give me 6 options.'",
          ],
        },
        {
          type: 'text',
          text: "Social stories deserve special mention because they're so tedious to write from scratch. A social story previews a situation — a fire drill, a substitute, a schedule change — in short, first-person, present-tense sentences. AI drafts one in seconds from a fully generic request: 'Write a social story for a young student who gets anxious about loud, unexpected noises, previewing a fire drill. First person, present tense, one short sentence per line, reassuring but honest.' You then personalize it offline: the name, the photos, your school's actual routine.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: chunking with a goal in mind',
          text: "Here's a full ideation prompt, built the safe way: 'A 7th grader who reads at a 4th-grade level and loves basketball needs to complete a 5-paragraph essay over two weeks. His plan calls for assignments broken into smaller steps with frequent check-ins. Draft a chunked version: 6–8 steps, one clear action each, a check-in point after every second step, and an example sentence starter for each writing step.' Notice what's in it — grade, reading level, an interest to hook examples, the accommodation *paraphrased in your own words* — and what isn't: no name, no school, no diagnosis, no quoted IEP text. That's the template for every request in this lesson.",
        },
        {
          type: 'checkpoint',
          question: 'Which request keeps AI in its ideation lane?',
          options: [
            "'Which accommodations should we put in this student's IEP this year?'",
            "'Does this student qualify for extended time on state assessments?'",
            "'Give me 8 scaffolds for a 10th grader who struggles with sequencing.'",
            "'Write this student's IEP goals for next year, aligned to our state standards.'",
          ],
          correct: 2,
          explanation: "Requesting scaffold *options* for a generic learner profile is ideation — humans still choose and decide. The other three ask AI to make or draft determinations that IDEA reserves for the IEP team: qualification, accommodations, and goals are decisions, not brainstorms.",
        },
        { type: 'heading', text: 'The hard privacy rule' },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never put student-identifiable information into a consumer chatbot',
          text: "No names. No initials plus your school. No diagnoses. No birthdates. No pasted IEP or 504 text. No behavior-incident reports. FERPA protects education records, and a consumer chatbot — ChatGPT, Gemini, or Claude on a personal account — is not covered by a district data agreement. Once pasted, that information sits on servers outside your school's control, and you cannot un-paste it. The rule that makes everything else in this lesson possible: **describe the student generically.** 'A 7th grader who reads at a 4th-grade level and loves basketball' gives AI everything it needs — and identifies no one.",
        },
        {
          type: 'text',
          text: "Here's why generic descriptions cost you nothing: the model never uses *who* the student is — only the profile. Grade, the relevant skill levels, the accommodation in your own words, one interest for motivation. That's the entire recipe. Strip the name, keep the need, and the output is identical.",
        },
        {
          type: 'table',
          headers: ['Instead of pasting this…', 'Describe it like this'],
          rows: [
            [
              "'Marcus D., 7th grade, dyslexia, reads at 4th-grade level' (from his IEP)",
              "'A 7th grader who reads at a 4th-grade level and loves basketball'",
            ],
            [
              "The IEP's accommodations page, photographed and pasted",
              "The accommodation paraphrased: 'assignments broken into smaller steps with frequent check-ins'",
            ],
            [
              "'Jayden shoved Marcus during passing period…' (incident report)",
              "Nothing. Records with names stay in district systems — get a generic template from AI, add specifics offline.",
            ],
          ],
        },
        {
          type: 'checkpoint',
          question: "A colleague says: 'It's fine — I only pasted an excerpt of the IEP into ChatGPT, not the whole document.' What's wrong with that reasoning?",
          options: [
            'An excerpt of an education record is still a protected education record',
            'Nothing — short excerpts are legally different from full documents',
            'The only real risk is that ChatGPT gives her inaccurate advice',
            'It would have been fine if she deleted the chat immediately afterward',
          ],
          correct: 0,
          explanation: "FERPA protects the information, not the page count — an identifiable excerpt carries the same legal weight as the full plan. Deleting the chat doesn't recall data already sent to external servers, and accuracy is a separate issue entirely; the violation happened at paste time.",
        },
        {
          type: 'text',
          text: "What about education-specific tools with real privacy postures — MagicSchool's certified zero-retention setup, for instance? Genuinely better. But two rules survive: using student data still requires your *district's* signed data-privacy agreement, not just a vendor's promise, and minimal data remains the professional norm. Keep the generic-description habit everywhere — it's free, and it always works.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'Review everything that touches behavior or IEPs',
          text: "Common Sense Media's August 2025 assessment rated AI teacher assistants a 'moderate risk' category overall — but flagged the tools that generate IEPs and behavior-intervention plans as **high risk**, after finding that some drafted **more punitive behavior-plan suggestions for students with Black-coded names** ([read the reporting](https://www.chalkbeat.org/2025/08/06/ai-teacher-assistants-promote-racial-bias-study-finds/)). Treat every AI draft touching behavior, discipline, or special education as a first draft with possible bias baked in. You review, you revise, you decide.",
        },
        {
          type: 'keyTerms',
          title: 'Terms that keep you safe',
          terms: [
            { term: 'Ideation', definition: 'Generating options and drafts for humans to judge — the only role AI plays in special education.' },
            { term: 'Education record', definition: 'Any record a school maintains about a student — IEPs, 504 plans, incident reports, grades. Protected by FERPA.' },
            { term: 'PII', definition: 'Personally identifiable information: names, birthdates, ID numbers — anything that could identify a specific student, alone or in combination.' },
            { term: 'Data-privacy agreement (DPA)', definition: "A signed contract between a district and a vendor governing student data. Vendor marketing doesn't replace it." },
            { term: 'Social story', definition: 'A short, first-person narrative that previews a routine or situation for a student who benefits from rehearsal.' },
          ],
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Four real moments, one question each time: can you paste that?',
          props: {
            title: 'Can You Paste That? The Privacy Call',
            scenarios: [
              {
                situation: "You want a quick summary of a student's 22-page IEP before parent conferences tonight. The PDF is open on your screen, and so is ChatGPT.",
                options: [
                  {
                    text: "Paste the IEP's key pages into ChatGPT and ask for bullet points",
                    quality: 'poor',
                    feedback: "This is the clearest 'no' in the lesson. An IEP is an education record under FERPA, and a consumer chatbot isn't covered by your district's data agreement — pasting puts protected records on external servers you can't recall. Convenience never outweighs this.",
                  },
                  {
                    text: 'Ask the case manager for the accommodations-at-a-glance summary, then read it yourself',
                    quality: 'ok',
                    feedback: "Safe and legal — case managers maintain exactly this kind of summary. It just doesn't use AI at all, which is fine: some jobs don't need it. You gave up speed, not safety.",
                  },
                  {
                    text: "Read the IEP yourself, then ask AI a generic question: 'What does extended time plus chunked assignments look like in daily practice for a middle schooler?'",
                    quality: 'best',
                    feedback: "You did the record-reading (your job), then asked AI a generic implementation question containing zero identifying details. FERPA-clean, and you still got the AI leverage — this is the pattern to reuse everywhere.",
                  },
                ],
              },
              {
                situation: "You teach 7th-grade science. You type: 'Rewrite this textbook passage for a student who reads at a 4th-grade level.' No name, no other details.",
                options: [
                  {
                    text: 'Send it — this is safe',
                    quality: 'best',
                    feedback: "Correct. A grade plus a reading level is a generic profile that could describe thousands of students, so no education record was shared and FERPA isn't implicated. This is the describe-generically rule working exactly as designed.",
                  },
                  {
                    text: "Add the student's first name so the AI can personalize its examples",
                    quality: 'poor',
                    feedback: "The name adds nothing the model can use — AI personalizes with interests, not identities — and it converts a safe generic request into shared student data. Want personalization? Add 'who loves soccer' instead.",
                  },
                  {
                    text: 'Avoid AI entirely for anything connected to a real student',
                    quality: 'ok',
                    feedback: "Safe, but stricter than the law or good practice requires. Generic descriptions exist precisely so you can get AI's help without touching protected data — over-caution here costs you the tool's entire value for the students who need it most.",
                  },
                ],
              },
              {
                situation: 'Two students had a shoving incident during passing period. You need to email both families tonight and want help with the wording.',
                options: [
                  {
                    text: 'Paste the incident report — names and all — and ask for two parent emails',
                    quality: 'poor',
                    feedback: "A behavior incident report naming two children is a student record exposing *both* of them. Under FERPA logic this is a bright line: records with names stay inside district systems, full stop.",
                  },
                  {
                    text: "Ask generically: 'Draft a calm, factual parent-email template about a minor physical incident between students — respectful, no blame, clear next steps.' Then add names and specifics offline in your own mail client",
                    quality: 'best',
                    feedback: "You used AI for what it's actually good at — tone and structure — and kept every identifying detail inside district systems. Template from AI, facts from you, in that order. Total added time: about ninety seconds.",
                  },
                  {
                    text: 'Skip the drafting and just forward the incident report to both families',
                    quality: 'poor',
                    feedback: "Now you've disclosed one student's record to another student's family — a FERPA problem with no AI involved at all. Each family may only receive information about their own child. The privacy rules predate chatbots; AI just adds new ways to break them.",
                  },
                ],
              },
              {
                situation: "You type: 'Create sentence starters for an argumentative essay at three support levels, for 8th graders who struggle with writing.'",
                options: [
                  {
                    text: 'Send it — this is safe',
                    quality: 'best',
                    feedback: "Completely safe. '8th graders who struggle with writing' describes a category, not a person — no student is identifiable, so FERPA isn't in play. Generic scaffold requests like this are the everyday, zero-risk core of AI-assisted differentiation.",
                  },
                  {
                    text: 'Check with the special-ed case manager first, since some of those 8th graders have IEPs',
                    quality: 'ok',
                    feedback: "Talking to the case manager is never wrong — but it isn't a privacy requirement here, because no student data is being shared. Save the consultations for choosing which scaffold to use, and don't let over-caution slow down clearly safe requests.",
                  },
                  {
                    text: 'Rephrase it to name which specific students will receive which support level',
                    quality: 'poor',
                    feedback: "That converts a safe generic request into a list of named students linked to skill deficits — student data with zero benefit, since the AI writes the exact same starters either way. When in doubt, ask: does the model need this detail? Names: never.",
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'checkpoint',
          question: "An education-specific AI tool advertises FERPA compliance and zero data retention. Your district hasn't signed an agreement with it. Can you use it with student data?",
          options: [
            "Yes — a published FERPA-compliance statement is what governs legally",
            'Yes, but only for students who have no IEP or 504 plan',
            'No — vendor FERPA claims are marketing, never anything real',
            "Not with student data — that needs your district's signed DPA",
          ],
          correct: 3,
          explanation: "The district's signed data-privacy agreement is what actually governs student data — a vendor's self-description, however sincere, isn't a contract with your school. That doesn't make the claims empty marketing (good postures are real), and it doesn't block generic, non-identifying use, which never involves student data in the first place.",
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'Try tomorrow',
          text: "Pick one accommodation you're implementing this week. Tonight, describe the student generically and ask your chatbot for six concrete classroom moves that deliver it. Bring the two best to your co-teacher or case manager. That conversation is the IEP team working as designed — with AI in the back seat, where it belongs.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What's AI's role in special education? Ideation only — options and drafts. Decisions belong to the IEP team under IDEA.",
            "What's the hard privacy rule? Never paste names, diagnoses, IEP text, or incident reports into a consumer chatbot.",
            "How do you get the help without the risk? Describe generically: grade, skill profile, paraphrased accommodation, one interest.",
            "Do education-specific tools change the rule? They improve the posture, but district DPAs and minimal data still apply.",
            "Why review AI drafts extra carefully here? Documented bias in behavior-plan suggestions — you are the safeguard.",
          ],
        },
        {
          type: 'text',
          text: "You now have the workflows. Next you need the tools — and an honest way to choose them. The final lesson is the buyer's guide nobody's selling: ten teacher AI tools, what their free tiers really include, and the one rule that keeps your toolbox small.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Which of these is safe to type into a consumer chatbot?',
            options: [
              "'Summarize the attached IEP for Marcus D. before conferences.'",
              "'Suggest 8 scaffolds for a 4th grader stuck on two-digit multiplication.'",
              "'Draft a behavior contract for Jayden R. based on this incident report.'",
              "'Here's my class roster with reading levels — sort my students into groups.'",
            ],
            correct: 1,
            explanation: "A generic profile — grade plus skill focus, and an interest if you want one — identifies no one, so it's fully safe. The other three each share protected student data: an IEP is an education record, a named incident report is too, and a roster ties real names to skill levels, which is exactly the combination FERPA exists to protect.",
          },
          {
            question: 'A student on the autism spectrum panics during fire drills, and his team asked you to help him rehearse the routine. How do you get AI’s help drafting a social story?',
            options: [
              'Paste the IEP section on his sensory needs so the story matches his plan',
              'Include his first name and diagnosis so the tone fits him exactly',
              'Describe the need generically, then personalize the draft offline',
              'Skip AI — social stories may only be written by credentialed specialists',
            ],
            correct: 2,
            explanation: "The model needs the *need*, not the child: 'a young student anxious about loud, unexpected noises' produces the same draft, and personalization (name, photos, your school's routine) happens safely offline. Pasting IEP text or a diagnosis shares protected data for zero gain, and the specialist-only claim is simply not true — teachers draft and teams review.",
          },
          {
            question: "Why can't AI make accommodation decisions?",
            options: [
              'IDEA reserves those decisions for the student’s own IEP team',
              'AI output about accommodations is always factually wrong',
              'Federal law prohibits any use of AI in special education',
              'Accommodations are too individualized for AI to brainstorm',
            ],
            correct: 0,
            explanation: "It's a question of authority, not capability: IDEA vests those decisions in the team that knows the student and includes the family, and AI only supplies options to consider. AI isn't 'always wrong' and isn't banned from special education — ideation is fine — but even a brilliant suggestion is still just an option until the team adopts it.",
          },
          {
            question: "Module 1 flashback: a chatbot recommends a scaffolding strategy 'supported by a 2019 Vanderbilt study' that you can't find anywhere. What's happening, and what should you do?",
            options: [
              "The study is probably paywalled — cite it in your notes anyway",
              'The tool searched a private research database, so you can trust it',
              "You've hit a usage limit — regenerate the response and compare",
              'Likely a hallucinated citation — verify it before you cite it',
            ],
            correct: 3,
            explanation: "Invented-but-plausible citations are a signature hallucination from Module 1, and special education raises the stakes: an IEP team acting on evidence that doesn't exist is a serious professional failure. Consumer chatbots don't search private research databases, and regenerating just rolls the dice again — verification before it reaches a meeting is the only fix.",
          },
          {
            question: "An education AI tool drafts a behavior-intervention plan for you. Given Common Sense Media's 2025 findings, what's the essential step before using any of it?",
            options: [
              'Run the draft through a second AI tool as a cross-check',
              'Review it yourself for punitive or biased suggestions',
              'Use it as written, since the tool is FERPA-compliant',
              "Send the AI draft to the student's family for approval first",
            ],
            correct: 1,
            explanation: "The documented risk is biased content — the 2025 assessment found measurably more punitive behavior-plan suggestions for students with Black-coded names — and the safeguard is your professional review. FERPA compliance governs data, not fairness; a second AI can share the same biases; and families should see *your* plan, not a raw machine draft.",
          },
          {
            question: 'Module 2 flashback: your first social-story draft comes back with long sentences and third-person narration. Best next move?',
            options: [
              'Start over from scratch in a different chatbot app',
              "Accept the draft — students adapt to whatever format they get",
              "Iterate in the same chat: 'first person, one short line each'",
              "Write it yourself — AI can't reliably hold a format this specific",
            ],
            correct: 2,
            explanation: "Module 2's core habit: a weak first draft is a prompt problem, and one specific iteration — first person, present tense, one short sentence per line — usually fixes it while the model still has your context. Switching chatbots throws that context away, accepting a wrong-format social story defeats its purpose, and giving up after one try wastes the tool.",
          },
        ],
      },
    },
    // ------------------------------------------------------------------
    // Lesson 3: The teacher AI toolbox
    // ------------------------------------------------------------------
    {
      id: 'the-teacher-ai-toolbox',
      title: 'The Teacher AI Toolbox',
      duration: '25 min',
      objectives: [
        'Apply the one-chatbot rule: when a specialist tool earns a login and when it doesn’t',
        'Match common teaching jobs to the best free tool for each',
        'Read a tool’s free tier and privacy posture in under a minute',
        'Build a defensible two-or-three-tool starter kit',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Open any teacher social feed and count the AI tools being pitched at you — you'll pass a hundred before lunch. Most are the same thing underneath: a general chatbot wearing a form on top, sold as a subscription. You don't need fifteen logins. You need one general chatbot you know deeply, plus a small set of specialists that genuinely beat it at specific jobs. This lesson is the honest version of the toolbox: what each tool actually does, what the free tier really includes, and the privacy note nobody prints on the pricing page.",
        },
        { type: 'heading', text: 'The one-chatbot rule' },
        {
          type: 'text',
          text: "Master one general chatbot — ChatGPT, Gemini, or Claude — and it will handle most of your Module 2 and 3 workflows: drafting, leveling, rubrics, emails, quiz questions. Add a specialist tool only when it clearly beats the chatbot at a job, and be able to say *why*: built-in Google Docs export, live student monitoring, source-grounded answers, voice capture. The test before any new signup: could my chatbot do this with one good prompt? If yes, skip the login.",
        },
        {
          type: 'text',
          text: "All three general chatbots now have education offers worth claiming. [ChatGPT for Teachers](https://chatgpt.com/plans/k12-teachers/) is free for verified US K-12 educators through June 2027, in a workspace that doesn't train on your data. [Claude for Teachers](https://claude.com/solutions/teachers) gives verified US K-12 educators a year of free premium access (sign up by June 30, 2027) with a FERPA data-processing addendum. [Gemini](https://edu.google.com/intl/ALL_us/ai/gemini-for-education/) comes bundled with Google Workspace for Education, under your admin's controls. Whichever you pick, claim the education tier — the privacy posture beats a personal account.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Why one chatbot first',
          text: "Skill transfers; subscriptions don't. Every prompting move from Module 2 works in any general chatbot, forever. A specialist's value can vanish with a pricing change — the free-tier notes below are accurate as of mid-2026, and edtech pricing changes quarterly, so spot-check at signup.",
        },
        { type: 'heading', text: 'The toolbox, by job' },
        {
          type: 'text',
          text: "Ten tools below, grouped by the job they're hired for. Each entry answers the only two questions that matter: what does it beat your chatbot at, and who touches it — you or your students? That second question decides the privacy stakes.",
        },
        { type: 'subheading', text: 'Job 1: Level and adapt texts' },
        {
          type: 'links',
          items: [
            {
              label: 'Diffit',
              url: 'https://www.diffit.me/',
              description: "Paste an article, topic, or YouTube link; get leveled versions (roughly grades 2–11) with vocabulary and questions, exportable to Docs, Slides, and Forms. Free Basic tier is genuinely usable. Teacher-facing, so student-data risk is low.",
            },
            {
              label: 'MagicSchool AI',
              url: 'https://www.magicschool.ai/',
              description: "The biggest K-12 platform: 80+ free teacher tools (text leveler, rubrics, plan drafting) plus student tools teachers can roll out. FERPA/COPPA and SOC 2; OpenAI and Anthropic have certified zero data retention; 95% Common Sense privacy rating.",
            },
          ],
        },
        { type: 'subheading', text: 'Job 2: Generate materials, slides, and feedback' },
        {
          type: 'links',
          items: [
            {
              label: 'Eduaide.Ai',
              url: 'https://www.eduaide.ai/',
              description: "100+ generators built from a learning objective — lesson seeds, organizers, games, assessments. Free tier: 15 generations/month; Pro is $5.99/mo or $49.99/yr, among the cheapest in edtech. Teacher-facing, zero student data collected, 93% Common Sense privacy rating.",
            },
            {
              label: 'Brisk Teaching',
              url: 'https://www.briskteaching.com/',
              description: "A Chrome extension living inside Google Docs, Slides, and YouTube: rubric-aligned feedback written onto student Docs, one-click quizzes from videos. Free plan has 20+ tools with daily caps; Pro $99.99/yr; student-facing features require school plans.",
            },
            {
              label: 'Curipod',
              url: 'https://curipod.com/',
              description: "AI-generated interactive slide lessons with polls, word clouds, and drawing prompts that students join live. Free tier with caps; ~$7.50/mo for individuals. The classroom-response model limits student PII exposure.",
            },
            {
              label: 'Canva for Education',
              url: 'https://www.canva.com/education/',
              description: "100% free for verified K-12 teachers *and* students, including Magic Studio AI with student-safe versions and thousands of classroom templates. Districts can manage rollout centrally.",
            },
          ],
        },
        { type: 'subheading', text: 'Job 3: Student-facing AI, monitored' },
        {
          type: 'text',
          text: "This is the category where the stakes change. The moment students touch a tool, a district data-privacy agreement, parental notice, and a monitoring surface stop being nice-to-haves. These three exist precisely to make student AI use supervisable.",
        },
        {
          type: 'links',
          items: [
            {
              label: 'SchoolAI',
              url: 'https://schoolai.com/',
              description: "Build bounded chat 'Spaces' with your rules; Mission Control shows every student conversation live and flags who's stuck. Free teacher tier includes about 5 Spaces with full monitoring. FERPA, COPPA, and SOC 2 certifications cited — but student-facing means your district's DPA comes first.",
            },
            {
              label: 'Khanmigo for Teachers',
              url: 'https://www.khanmigo.ai/teachers',
              description: "Khan Academy's assistant — 100% free for verified US K-12 teachers (planning, rubrics, co-teacher reports tied to Khan content). The student-facing Socratic tutor is a separate district plan, roughly $10–15 per student per year.",
            },
            {
              label: 'Snorkl',
              url: 'https://www.snorkl.app/',
              description: "Students explain their thinking on a digital whiteboard with voice recording; AI gives first-pass feedback and you get a class-wide misconception view. Free: 20 activities, unlimited classes, co-teacher support. Vendor states COPPA and FERPA compliance; student-facing, so district sign-off applies.",
            },
          ],
        },
        { type: 'subheading', text: 'Job 4: Source-grounded study aids' },
        {
          type: 'links',
          items: [
            {
              label: 'NotebookLM',
              url: 'https://notebooklm.google.com/',
              description: "Google's grounded notebook: it answers only from the documents you load — a structural answer to hallucination. Free tier; Audio Overviews turn readings into a 3–8 minute podcast-style discussion in 80+ languages. Personal notebooks are 18+; share view-only with younger students.",
            },
          ],
        },
        {
          type: 'checkpoint',
          question: 'What is the test before adding any new specialist tool to your toolbox?',
          options: [
            'Is the free tier generous enough to last a whole semester?',
            'Could my chatbot already do this with one good prompt?',
            'Are other teachers at my school already using it daily?',
            'Does it advertise more features than the alternatives?',
          ],
          correct: 1,
          explanation: "The one-chatbot rule filters signups by asking what the specialist adds *beyond* a good prompt — export, monitoring, grounding, workflow — and if the answer is nothing, you skip the login. A generous free tier and a colleague's recommendation are how toolboxes bloat to fifteen accounts: plenty of free tools duplicate what your chatbot already does.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: to specialist or not?',
          text: "The job: 30 essays in Google Docs need rubric-aligned comments by Friday. Walk the test. Step 1 — could my chatbot do it? Technically: paste each essay, paste the rubric, copy comments back. Thirty times. Step 2 — what would a specialist add? Brisk writes the feedback *inside each Doc* from a Chrome extension, against your rubric, with no copy-paste loop. Step 3 — verdict: the specialist wins on workflow, not intelligence. Same underlying AI, radically less friction. That's the shape of every good specialist adoption: it removes steps, not thinking.",
        },
        {
          type: 'table',
          headers: ['The task', 'Best free option', 'Watch out for'],
          rows: [
            ['Same article at three reading levels, exported to Docs', '[Diffit](https://www.diffit.me/)', 'Verify the leveled facts — rewrites can drift (Module 1)'],
            ['Rubric-aligned feedback on 30 Google Docs essays', '[Brisk](https://www.briskteaching.com/)', 'Daily caps on the free plan; student features need a school plan'],
            ['A monitored AI chat activity for students', '[SchoolAI](https://schoolai.com/)', 'Free tier is ~5 Spaces; student-facing = district DPA first'],
            ['Study help that cites only class materials', '[NotebookLM](https://notebooklm.google.com/)', 'Personal notebooks are 18+; share view-only with students'],
            ['Show-your-reasoning feedback in math', '[Snorkl](https://www.snorkl.app/)', 'Free tier covers 20 activities; upgrades are school/district only'],
            ['Many quick generators on a personal budget', '[Eduaide](https://www.eduaide.ai/)', 'Free tier caps at 15 generations per month'],
            ['Design projects with student-safe creative AI', '[Canva for Education](https://www.canva.com/education/)', 'Requires K-12 verification; coordinate student rollout with your school'],
            ['A drop-in interactive lesson with live polls', '[Curipod](https://curipod.com/)', 'Free tier has usage caps; school licenses are a district conversation'],
          ],
        },
        {
          type: 'text',
          text: "Before any signup, run the sixty-second privacy screen. Question one: is it **teacher-facing or student-facing**? Teacher-facing tools like Diffit and Eduaide are low-risk because students never touch them; student-facing tools like SchoolAI, Khanmigo's tutor, and Snorkl require the district DPA, parental notice, and monitoring. Question two: does the vendor publish FERPA/COPPA and SOC 2 commitments with a zero-retention statement? MagicSchool and Eduaide model what good looks like — 95% and 93% Common Sense privacy ratings, respectively.",
        },
        {
          type: 'text',
          text: "Question three is the one most teachers skip: has someone already done this vetting for you? Many districts publish approved-tool lists, and 35 states plus Puerto Rico now have official K-12 AI guidance — [AI for Education keeps a live tracker](https://www.aiforeducation.io/ai-resources/state-ai-guidance). If a tool is on your district's approved list, your review is mostly done. If it's excluded, no free tier is generous enough to matter.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Compliant ≠ approved (or accurate)',
          text: "A vendor's compliance page is a starting point, not permission — student-facing tools go through your district. And Module 1 still applies inside every wrapper: an education-specific tool generates text with the same failure modes as the chatbot underneath. Common Sense Media's 2025 assessment rated the whole AI-teacher-assistant category 'moderate risk' — even the good ones. Verify before use, always.",
        },
        {
          type: 'checkpoint',
          question: 'Which tool could you adopt tomorrow with the least privacy review — and why?',
          options: [
            'SchoolAI, because it lists the most compliance certifications',
            "Khanmigo's student tutor, because Khan Academy is a nonprofit",
            "Canva's student accounts, because the education plan is free",
            'Diffit, because it’s teacher-facing — no student accounts at all',
          ],
          correct: 3,
          explanation: "Who touches the tool decides the review burden: students never open Diffit, so there are no student accounts and no student data to review. Certifications, nonprofit status, and free pricing are all good signs — but every student-facing option still routes through a district DPA and parental notice first.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Four jobs walk into your inbox. Pick the right tool for each.',
          props: {
            title: 'Match the Tool to the Job',
            scenarios: [
              {
                situation: "Test review is Thursday. You want every student talking with an AI tutor about quadratics — and you want to see every conversation as it happens.",
                options: [
                  {
                    text: "A SchoolAI Space with rules ('never give the answer; stay on quadratics') and Mission Control open on your screen",
                    quality: 'best',
                    feedback: "This is exactly SchoolAI's job: bounded, monitored, student-facing chat — the free teacher tier covers about 5 Spaces. One prerequisite before launch day: student-facing means district DPA and parental notice come first.",
                  },
                  {
                    text: 'Have students open ChatGPT on their personal accounts',
                    quality: 'poor',
                    feedback: "Consumer ChatGPT is 13+, and 13–17-year-olds need parental consent; it also offers you no monitoring surface and puts student chats outside any school agreement. This is precisely the scenario monitored platforms were built to replace.",
                  },
                  {
                    text: 'Set the class up in Diffit',
                    quality: 'poor',
                    feedback: "Wrong category: Diffit levels texts *for teachers* — there's no student chat in it at all. Tool matching starts with the two toolbox questions: what's the job (live tutoring), and who touches it (students)?",
                  },
                ],
              },
              {
                situation: "One dense primary source needs to become three reading levels with vocabulary and comprehension questions, exported to Google Docs — and you have your ten-minute break to do it.",
                options: [
                  {
                    text: 'Diffit',
                    quality: 'best',
                    feedback: "Purpose-built: paste the source, pick levels (roughly grades 2–11), get vocabulary and questions, export straight to Docs or Forms. The specialist beats the chatbot on export and speed — exactly the bar a specialist must clear to earn a login.",
                  },
                  {
                    text: 'Your general chatbot',
                    quality: 'ok',
                    feedback: "It can absolutely do the leveling with a good Module 2 prompt — but you'll handle formatting and export by hand and generate the questions separately. Fine once in a while; slower every single week. This is where a specialist earns its place.",
                  },
                  {
                    text: 'Snorkl',
                    quality: 'poor',
                    feedback: "Snorkl captures student reasoning by whiteboard and voice — it doesn't level texts. Knowing each tool's one job is the entire point of a small toolbox: no tool is 'the AI one,' every tool is 'the ___ one.'",
                  },
                ],
              },
              {
                situation: "You want students to get study help that answers only from the unit's actual readings — no invented facts from the open internet.",
                options: [
                  {
                    text: 'Load the readings into NotebookLM and share the notebook view-only',
                    quality: 'best',
                    feedback: "Source-grounding is NotebookLM's defining feature: it answers only from the documents you load and cites them, which structurally limits hallucination. View-only sharing keeps it appropriate for K-12, since personal notebooks are 18+.",
                  },
                  {
                    text: 'Tell students to ask a general chatbot and to be careful about accuracy',
                    quality: 'poor',
                    feedback: "A general chatbot draws on everything it learned — invented citations included, as Module 1 demonstrated. 'Be careful' is advice; grounding is a control. When the requirement is 'only from our sources,' pick the tool built to enforce it.",
                  },
                  {
                    text: 'Build it as a Curipod lesson',
                    quality: 'poor',
                    feedback: "Curipod runs live, in-class interactive lessons — polls, drawings, warm-ups. It isn't a grounded study aid students use on their own time. Right family of tool, wrong job.",
                  },
                ],
              },
              {
                situation: "You need next week's parent newsletter drafted in your voice, in fifteen minutes.",
                options: [
                  {
                    text: 'Your general chatbot, with a Module 2 prompt plus a pasted example of a past newsletter',
                    quality: 'best',
                    feedback: "No specialist beats the chatbot here — this is the one-chatbot rule in action. Voice-matching from an example plus quick iteration is a core general-chatbot strength, and a subscription would add exactly nothing.",
                  },
                  {
                    text: 'Sign up for the newsletter-specific AI tool a colleague mentioned',
                    quality: 'poor',
                    feedback: "That's a form on top of the same underlying model — the exact signup the toolbox test filters out. Ask it out loud: could my chatbot do this with one good prompt? Here the answer is yes, easily.",
                  },
                  {
                    text: "MagicSchool's communication tools",
                    quality: 'ok',
                    feedback: "Workable — MagicSchool's free tier includes solid communication generators. But you gain nothing over the chatbot you already know, and toolbox discipline says don't add logins that don't add value.",
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'text',
          text: "One last discipline: tools leave the toolbox, too. If a specialist goes a month unused, or its free tier shrinks below your real need, retire it. The login you don't have is one less privacy surface, one less password, and one less interface to re-learn. Your chatbot skills are the permanent asset; treat every specialist as a contractor on a renewable contract.",
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'Your starter kit',
          text: "Three moves, one prep period: (1) pick your one general chatbot and claim its education tier; (2) add [Diffit](https://www.diffit.me/) — leveling-with-export is the specialist job that most clearly beats the chatbot; (3) pick at most one more from the table that matches your biggest weekly pain. Then stop signing up for things. Depth in three tools beats accounts in fifteen.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "How do you keep the toolbox small? One general chatbot mastered deeply; specialists only when they clearly beat it at a job.",
            "What's the signup test? 'Could my chatbot do this with one good prompt?' If yes, skip the login.",
            "What's the sixty-second privacy screen? Teacher-facing = low risk; student-facing = district DPA, parental notice, and monitoring.",
            "Does a compliance page equal permission? No — districts approve student-facing tools, and every wrapper still hallucinates like the model underneath.",
            "What's the best first specialist? Diffit for leveling-with-export, then one more tool matched to your single biggest weekly pain.",
          ],
        },
        {
          type: 'text',
          text: "Your toolbox is set. Module 5 turns to the question these tools raise the moment students find their own: what happens to assessment and integrity when everyone has AI — and why the detector your district bought isn't the answer.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'When does a specialist tool earn a place in your toolbox?',
            options: [
              "When it's free and popular with teachers on social media",
              'When it runs on a newer AI model than the chatbot you use',
              'When it clearly beats your general chatbot at a specific job',
              'Whenever it’s education-specific, since those are safer by default',
            ],
            correct: 2,
            explanation: "Specialists earn logins by removing steps a chatbot can't — Docs export, live monitoring, source grounding, workflow — not by being newer or more popular. And 'education-specific' isn't automatically safer: Common Sense Media rated AI teacher assistants a moderate-risk category, so the job-fit test still applies.",
          },
          {
            question: 'Your principal asks you to run a supervised AI review session where you can watch student conversations live. Best fit?',
            options: [
              'SchoolAI — bounded Spaces with the Mission Control live view',
              'Personal ChatGPT accounts, with a reminder to keep it appropriate',
              'Diffit, since it carries the lowest privacy risk in the module',
              'A personal NotebookLM notebook created for each student',
            ],
            correct: 0,
            explanation: "'Supervised' is the requirement, and a live monitoring surface is SchoolAI's defining feature — with the district DPA and parental notice handled before launch day. Personal ChatGPT accounts give you no oversight and sit outside school agreements; Diffit is low-risk precisely because students never use it, which also makes it useless here; and NotebookLM personal notebooks are 18+.",
          },
          {
            question: "Students keep citing facts that aren't in the unit readings. Which tool most directly fixes this, and why?",
            options: [
              'Curipod, because live polls will surface the errors in class',
              'NotebookLM — it answers only from the documents you load',
              'Brisk, because Inspect Writing replays how the work was written',
              'Eduaide, because its generators start from learning objectives',
            ],
            correct: 1,
            explanation: "The problem is ungrounded answers, and NotebookLM's source-grounding is the structural fix: it can only respond from the readings you loaded, so study help stays inside your sources. Curipod and Brisk are real tools for other jobs — live lessons and writing feedback — and catching errors after the fact isn't the same as preventing them at the source.",
          },
          {
            question: 'Which free-tier statement is accurate as of mid-2026?',
            options: [
              "Snorkl's free plan includes unlimited student activities",
              "SchoolAI's free teacher tier includes unlimited monitored Spaces",
              "Eduaide's free tier includes unlimited teacher generations",
              "Khanmigo's teacher tools are free for verified US K-12 teachers",
            ],
            correct: 3,
            explanation: "Khanmigo's teacher side is genuinely free for verified US K-12 teachers — the student tutor is what costs districts money. The others overstate: Snorkl's free plan covers 20 activities, SchoolAI's free tier is about 5 Spaces, and Eduaide caps at 15 generations a month. Knowing the real caps is what makes a recommendation honest.",
          },
          {
            question: "Module 1 flashback: a colleague says, 'MagicSchool is FERPA-compliant, so I don't need to fact-check its quiz questions.' What's the flaw?",
            options: [
              "MagicSchool doesn't actually hold the privacy certifications it claims",
              'Compliance covers data handling, not accuracy — the text can still be wrong',
              'AI tools cannot generate usable quiz questions in any subject',
              "Nothing — certified education tools verify outputs before showing them",
            ],
            correct: 1,
            explanation: "Privacy certifications and output accuracy are unrelated guarantees: MagicSchool's FERPA/COPPA posture is real and strong, but the wrapper still generates text with the same hallucination risk Module 1 demonstrated. No certification process fact-checks generations — that review is, and remains, your job.",
          },
          {
            question: 'You need a rubric for a lab report tonight. Under the one-chatbot rule, what’s the move?',
            options: [
              'Your general chatbot with a role-task-context-format prompt',
              'Sign up for the rubric-specific AI subscription you saw advertised',
              'Wait until your district formally approves a rubric-generation tool',
              'Ask AI for a completed, graded example lab report instead',
            ],
            correct: 0,
            explanation: "Rubric drafting is squarely a one-prompt chatbot job — you practiced it in Module 3 — so a specialist subscription adds nothing and fails the signup test. No district approval is needed for a teacher-facing task with no student data, and a graded example is a different artifact that doesn't give you criteria to grade thirty reports against.",
          },
        ],
      },
    },
  ],
};

export default unit;
