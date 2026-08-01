// Educator Module 5 — Assessment & Integrity in the AI Era
// Evidence base: Liang et al. 2023 (Patterns), Turnitin/GPTZero vendor admissions,
// institutional detector retreat, MLA-CCCC guidance, TeachAI traffic-light scale.
// All URLs verified against research files, Aug 2026.

const unit = {
  id: 'module-5',
  title: 'Assessment & Integrity in the AI Era',
  description: 'Why AI detectors fail (with the receipts), how to redesign assignments so the arms race stops mattering, and how to build classroom AI norms with your students instead of against them.',
  icon: 'Shield',
  lessons: [
    // ────────────────────────────────────────────────────────────────
    // Lesson 1 — Why AI Detectors Fail
    // ────────────────────────────────────────────────────────────────
    {
      id: 'why-ai-detectors-fail',
      title: 'Why AI Detectors Fail',
      duration: '20 min',
      objectives: [
        'Explain why AI-writing detectors produce false positives — and why the risk falls hardest on multilingual and formula-trained writers',
        'State the one rule for what a detector score can and cannot justify',
        'Replace detector scores with process evidence: version history, conferences, and knowing your students’ voices',
      ],
      blocks: [
        {
          type: 'intro',
          text: "In 2023, Stanford researchers took 91 English essays written by real humans — TOEFL test-takers — and ran them through seven commercial AI detectors. The detectors flagged **more than 61%** of them as AI-generated. Essays by native-speaking U.S. eighth graders? Correctly read as human almost every time. Nobody cheated. The non-native writers simply used more predictable vocabulary, and that was enough to trip the alarm. If your school leans on an AI detector — or you've been tempted to paste an essay into one — this may be the most important twenty minutes in this course.",
        },
        { type: 'heading', text: 'How detectors decide — and why that’s the problem' },
        {
          type: 'text',
          text: "Remember from Module 1: ChatGPT writes by predicting likely next words. AI detectors run that logic in reverse — they measure how *predictable* a text's word choices are and bet that predictable means machine-made. But it's a bet, not a fingerprint. Writers with smaller English vocabularies produce predictable text. So do strong students who've been drilled on the five-paragraph formula — which is exactly what we teach them.",
        },
        {
          type: 'text',
          text: "That's the mechanism behind the finding above, published by [Liang et al. in the journal *Patterns*](https://www.sciencedirect.com/science/article/pii/S2666389923001307): seven detectors misclassified over 61% of human-written TOEFL essays as AI, while scoring nearly perfectly on native speakers' eighth-grade essays. The tool isn't detecting cheating. It's detecting constrained vocabulary — and punishing the students who can least afford a false accusation.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: "Do the math on 'rare' errors",
          text: "Vendors themselves admit the uncertainty: Turnitin acknowledges roughly **±15 percentage points** of variance in its AI score, and GPTZero's claimed 0.5% false-positive rate was measured at around **18%** by independent testers ([summary with sources](https://lawlibguides.sandiego.edu/c.php?g=1443311&p=10721367)). Now multiply even a genuinely small error rate by 150 students and dozens of assignments per year. A 'rare' error becomes several wrongly accused students in your building, every semester — concentrated among English learners and your most formula-faithful writers.",
        },
        { type: 'heading', text: 'The institutions are walking away' },
        {
          type: 'list',
          items: [
            "**Universities disabled the tools.** Vanderbilt, Yale, Johns Hopkins, and Northwestern all turned off Turnitin's AI detector; UT Austin barred purchasing detection tools altogether.",
            "**Wrongly accused students have sued** — including a February 2025 case brought by a Yale School of Management student.",
            "**Journalists documented the harm.** [The Markup](https://themarkup.org/machine-learning/2023/08/14/ai-detection-tools-falsely-accuse-international-students-of-cheating) traced how detection tools falsely accused international students of cheating.",
            "**The professional guidance is blunt.** The MLA-CCCC Joint Task Force on Writing and AI says detectors should be used “with caution and discernment or not at all” — and recommends redesigning assignments instead.",
          ],
        },
        {
          type: 'checkpoint',
          question: 'Why do AI detectors disproportionately flag essays by non-native English speakers?',
          options: [
            'They more often use AI translation tools, which detectors then flag as machine text',
            'Their vocabulary tends to be more predictable — the signal detectors read as AI',
            'Detectors are trained mostly on American student writing, so other English looks foreign',
            'They tend to write shorter essays, and detectors are unreliable on short texts',
          ],
          correct: 1,
          explanation: "Detectors flag *predictability*, and constrained vocabulary reads as predictable — that's the Liang et al. finding. The translation-tool option is the tempting one because it blames student behavior, but the flagged TOEFL essays were fully human-written; the bias lives in the detector's method, not in anything the students did.",
        },
        { type: 'heading', text: 'The one rule' },
        {
          type: 'callout',
          variant: 'info',
          title: 'Never accuse a student based on a detector score alone',
          text: "A detector score is a statistical guess, not evidence. If your school uses one at all, treat a flag as — at most — a reason to look at the *process* behind the work. Never as proof, never as grounds for a penalty. An accusation you can't support does more lasting damage than the cheating you suspected: broken trust, formal grievances, and in false-positive cases, real harm to exactly the students who most need you in their corner.",
        },
        {
          type: 'checkpoint',
          question: "A detector flags your strongest writer's essay as '85% AI.' What's your best first move?",
          options: [
            "Apply the syllabus's academic-integrity penalty, since 85% is well above chance",
            'Re-run it through two more detectors and act only if they agree with the first',
            'Open the version history, then talk with the student about their process',
            'Email the family and ask whether they watched the student write the essay',
          ],
          correct: 2,
          explanation: "A score is not evidence — Turnitin's own ±15-point variance means '85%' could be 70. Revision history plus a conversation about how they built the argument is what actually holds up with a student, a parent, or an administrator. Re-running through more detectors feels rigorous but just averages unreliable instruments; agreement between two biased tools proves nothing.",
        },
        { type: 'heading', text: 'What holds up instead' },
        {
          type: 'text',
          text: "Here's the good news: you already own better instruments than any detector. They're the same tools good writing teachers have always used — they just matter more now.",
        },
        {
          type: 'list',
          items: [
            "**Process visibility.** Google Docs version history shows *how* a piece was written — steady growth over three evenings tells a very different story than one 900-word paste at 11:42 pm.",
            '**Writing conferences.** Five minutes of “walk me through how you built this argument” is a near-perfect authorship test. Students who wrote it can; students who didn’t, can’t.',
            "**Baseline voice samples.** Keep short in-class writing from the first week. When something later doesn't sound like a student, you'll have their real voice to compare — and the confidence to ask good questions.",
            "**Drafts as artifacts.** Collecting an outline and a rough draft along the way makes the final essay the *end* of a visible trail, not a mystery box.",
          ],
        },
        { type: 'subheading', text: 'Worked example: the essay that didn’t sound like Jordan' },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Notice, but don't accuse.** Jordan's persuasive essay arrives polished far beyond his baseline. You *don't* run a detector — a score would add noise, not evidence. You pull his week-one in-class sample instead, because a voice comparison is something you can actually stand behind.",
            "**Check the process trail.** His Doc's version history shows the essay assembled in two big pastes. That's *consistent with* AI use — but also with drafting in Notes on his phone. So it justifies a conversation, not a conclusion. Evidence sets the agenda; it doesn't issue the verdict.",
            '**Hold a curiosity-first conference.** “This is stronger than your last piece — walk me through how you built it.” If he wrote it, he’ll narrate choices in detail and you get to celebrate real growth. If he can’t explain his own thesis, the conversation surfaces that gently, without a public accusation.',
            "**Respond to what you learn.** Jordan admits a chatbot wrote most of it. Because your evidence was process-based, the next step is clean: he redoes it with visible drafting and a check-in. No detector, no standoff — and Jordan learns the assignment was about *his* thinking all along.",
          ],
        },
        {
          type: 'interactive',
          component: 'AIOrNot',
          caption: "Your turn: can you tell which passages are AI-written? Play a few rounds and notice the gap between how confident you feel and how often you're right. That gap — in your head and in the software — is exactly why detector scores can't carry an accusation.",
        },
        {
          type: 'checkpoint',
          question: 'Which of these is the strongest evidence in an academic-integrity conversation?',
          options: [
            'A version history showing steady drafting across several sessions',
            'A detector score above 90% from a widely used commercial tool',
            'Two different detectors independently agreeing on the same essay',
            'Prose noticeably more polished than the student’s usual classroom work',
          ],
          correct: 0,
          explanation: "Process evidence — and the authorship conversation it opens — is what you can defend to a student, a parent, and an administrator. Detector agreement is the tempting distractor, but two unreliable instruments agreeing is still unreliable, like two broken scales showing the same wrong weight. Polish alone is a reason to get curious, not evidence of anything.",
        },
        {
          type: 'links',
          title: 'The receipts (bookmark these for your next department meeting)',
          items: [
            {
              label: 'GPT detectors are biased against non-native English writers (Liang et al., Patterns)',
              url: 'https://www.sciencedirect.com/science/article/pii/S2666389923001307',
              description: 'The peer-reviewed study: 61%+ of human TOEFL essays falsely flagged by seven detectors.',
            },
            {
              label: 'AI detection tools falsely accuse international students — The Markup',
              url: 'https://themarkup.org/machine-learning/2023/08/14/ai-detection-tools-falsely-accuse-international-students-of-cheating',
              description: 'What false positives look like from the student side.',
            },
            {
              label: 'MLA-CCCC Joint Task Force: integrity and assignment design',
              url: 'https://aiandwriting.hcommons.org/2023/09/22/academic-integrity-and-assignment-design/',
              description: 'The professional guidance: redesign assignments and co-create policies rather than police with detectors.',
            },
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "Why do detectors fail? Because they measure *predictability*, not authorship — and human writing (especially by English learners and formula-trained students) is often just as predictable as AI's.",
            "How bad is it? 61%+ of human TOEFL essays falsely flagged; Turnitin admits ±15 points of variance; major universities have switched detection off.",
            'What’s the rule? Never accuse on a detector score alone — a flag is, at most, a reason to look at process.',
            'What works instead? Version history, drafts, writing conferences, and knowing your students’ voices — evidence you can actually stand behind.',
          ],
        },
        {
          type: 'text',
          text: "So if policing output is a dead end, what do you do? You change the assignment so the question never comes up. That's the next lesson.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'What did Liang et al. (2023) find when they ran human-written TOEFL essays through seven commercial AI detectors?',
            options: [
              'The detectors caught about 61% of AI-written essays hidden in the sample',
              'The detectors performed equally well on native and non-native writers',
              'More than 61% of the human essays were falsely flagged as AI',
              'The detectors erred only on essays shorter than about 300 words',
            ],
            correct: 2,
            explanation: "The essays were all human-written — over 61% got flagged anyway, while native-speaker eighth-grade essays sailed through. The first option is the classic misreading: the study measured false *positives* on human work, not success at catching AI.",
          },
          {
            question: 'Your top student writes textbook-perfect five-paragraph essays. Why is her work at real risk of being falsely flagged?',
            options: [
              'Detectors flag predictable writing, and formula essays are predictable',
              'Detectors are tuned to treat unusually polished writing as machine-written',
              'Her graded essays are probably in the detector’s training data',
              'Detectors flag work that students draft outside supervised class time',
            ],
            correct: 0,
            explanation: "Detectors bet that predictable word choice means AI — and we literally teach students to write predictably (thesis, three body paragraphs, conclusion). The 'strong writing must be AI' option sounds close but is wrong on mechanism: it's formula, not quality, that trips the flag.",
          },
          {
            question: "A colleague says: 'Our detector is 98% accurate — that's good enough to grade on.' What's the strongest counterargument?",
            options: [
              'Detectors will improve soon, so the fix is to wait for a better version',
              'Even a 2% error rate, across hundreds of essays, means wrongly accused students',
              'Accuracy is beside the point — students will simply learn to evade detection',
              'A 98% accurate tool is fine for grading as long as students can appeal',
            ],
            correct: 1,
            explanation: "Two problems compound: base rates (2% of hundreds of essays is a steady stream of false accusations) and inflated vendor claims — GPTZero advertised a 0.5% false-positive rate that independent testers measured near 18%. The appeal option is tempting but backwards: it puts the burden of proof on wrongly accused students.",
          },
          {
            question: 'An English learner’s essay gets flagged at 92%. Following this lesson, what do you do?',
            options: [
              'Apply a reduced penalty, since the detector score might be partly wrong',
              'Have the student rewrite the essay under supervision to prove authorship',
              'Report it — 92% is well past any threshold your school would set',
              'Set the score aside and look at process evidence instead',
            ],
            correct: 3,
            explanation: "English learners are precisely the students detectors mislabel most (61%+ in Liang et al.), so the score deserves zero weight — not partial weight; version history, drafts, and a conversation about how the essay was built are what can actually settle it. A 'reduced penalty' still punishes on no evidence, and a forced supervised rewrite treats the student as guilty until proven innocent.",
          },
          {
            question: "What did Vanderbilt, Yale, Johns Hopkins, and Northwestern all do about Turnitin's AI detector?",
            options: [
              'Raised the flagging threshold from 20% to 50% before acting',
              'Disabled it for instructors, citing reliability concerns',
              'Replaced it with GPTZero, which claims fewer false positives',
              'Kept it, but required a second detector to confirm each flag',
            ],
            correct: 1,
            explanation: "They switched it off — a striking retreat from institutions with every incentive to catch cheating, and a signal K-12 shouldn't ignore. The GPTZero option is a trap: its claimed 0.5% false-positive rate measured ~18% in independent testing, so 'switching vendors' solves nothing.",
          },
          {
            question: 'Spiral (Module 1): Why is it impossible, in principle, for any tool to prove a normal-looking paragraph came from ChatGPT?',
            options: [
              'AI text carries a hidden watermark that only the vendor’s own tools can read',
              'Detectors can prove it, but only on passages longer than 1,000 words',
              'Fluent humans and language models produce the same probable word sequences',
              'ChatGPT deletes its outputs, so there is nothing left to compare against',
            ],
            correct: 2,
            explanation: "As you saw in Module 1, LLMs predict likely next words — and fluent humans write likely-next-words too, which is why the two overlap statistically. The watermark option encodes a common myth: OpenAI has never shipped watermarking for ChatGPT text, and the schemes that do exist (such as Google's SynthID for Gemini) are vendor-specific and degrade under paraphrasing and editing.",
          },
        ],
      },
    },

    // ────────────────────────────────────────────────────────────────
    // Lesson 2 — Redesign, Not Police
    // ────────────────────────────────────────────────────────────────
    {
      id: 'redesign-not-police',
      title: 'Redesign, Not Police',
      duration: '25 min',
      objectives: [
        'Redesign an assignment with personal, local, in-class, and oral-defense components that make AI use visible or irrelevant',
        'Apply a red-yellow-green AI scale to individual assignments and explain each tier to students',
        'Shift grading weight onto process — drafts, outlines, reflections — using version history and replay tools as evidence',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Here's an uncomfortable experiment: take your favorite assignment — the essay prompt you've polished for years — and paste it into ChatGPT, Gemini, or Claude. If the output would earn a B in your class, you don't have a cheating problem. You have an assignment problem. That's not an insult; it's leverage. You can't out-detect AI (Lesson 1 settled that), but you *can* redesign the task in one prep period so that AI use becomes either visible or beside the point. This lesson is a free version of the assessment-redesign work Georgia Tech's $297 edX certificate for educators leads with.",
        },
        { type: 'heading', text: 'Five moves that make tasks AI-resistant' },
        {
          type: 'text',
          text: "The goal isn't an AI-proof assignment — nothing is AI-proof. The goal is a task where the thinking you want to measure has to happen where you can see it. Five moves, in rough order of power:",
        },
        {
          type: 'list',
          items: [
            "**Anchor in the personal and local.** Tie the task to Tuesday's class discussion, data your class collected, or the student's own experience. A chatbot wasn't in the room, and it shows.",
            "**Move key moments in-class.** A 15-minute drafted paragraph or a timed synthesis done in front of you is a work sample no tool can fake.",
            '**Add an oral defense.** Three questions, five minutes: “Why this evidence? What did you cut? What’s the weakest part of your argument?” Authorship reveals itself instantly.',
            "**Build a process portfolio.** Outline, rough draft, revision notes, final — graded as a set. The artifact stops being the whole grade, so outsourcing the artifact stops paying.",
            "**Assign critique-the-AI tasks.** Have students generate an AI answer, then hunt its errors, gaps, and bias. AI use isn't a loophole here — it's the assignment.",
          ],
        },
        {
          type: 'checkpoint',
          question: "Which revision most increases AI-resistance for 'Write an essay on the causes of World War I'?",
          options: [
            'Raise the required length from 800 words to at least 1,200 words',
            'Require at least four scholarly citations with exact page numbers',
            'Require MLA formatting and a fully annotated bibliography',
            'Connect one cause to the class simulation, then defend it aloud',
          ],
          correct: 3,
          explanation: "The simulation happened in your room and the defense happens face-to-face — AI can't supply either. More words and more citations are the tempting picks because they feel rigorous, but chatbots produce length and citations effortlessly (and sometimes invent the citations, as you saw in Module 1).",
        },
        { type: 'heading', text: "The traffic-light scale: declare AI's role on every assignment" },
        {
          type: 'text',
          text: "The single biggest source of student confusion is that AI rules change invisibly from assignment to assignment — brainstorming with a chatbot is 'resourceful' in one class and 'cheating' in the next. The fix, drawn from [TeachAI's sample school guidance](https://www.teachai.org/toolkit), is a per-assignment traffic light. You declare the tier when you assign the work; students stop guessing.",
        },
        {
          type: 'table',
          headers: ['Tier', 'What it means', 'Example assignment', 'Why this tier'],
          rows: [
            [
              '🔴 Red — no AI at any stage',
              'All thinking and production is the student’s own, usually in class',
              'In-class personal narrative; math skills check; first-week baseline writing sample',
              'The task measures what’s in the student’s head right now — AI assistance would erase the signal you need',
            ],
            [
              '🟡 Yellow — AI for brainstorming and feedback, with disclosure',
              'AI may help generate ideas, outline options, or critique a draft; the drafting is the student’s',
              'Research paper: brainstorm topics with a chatbot, get outline feedback — then write it yourself and disclose what AI did',
              'The process skills (drafting, arguing) are still the target, but idea-generation support is welcome — like a study partner',
            ],
            [
              '🟢 Green — AI use expected and encouraged, still disclosed',
              'Students use AI as a tool and show their judgment about its output',
              'Build a study guide with AI, then annotate it: what did you verify, correct, or cut?',
              'The target skill IS working with AI critically — evaluation and revision are what earn the grade',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Mark every assignment — it takes five seconds',
          text: "An unmarked assignment invites every student to assume whatever tier is convenient. A colored dot on the handout or LMS post ends the guessing. Bonus: when you have to *choose* a tier, you clarify for yourself what each assignment is actually measuring — plenty of teachers discover half their homework belongs in yellow.",
        },
        {
          type: 'checkpoint',
          question: 'Students use a chatbot to generate practice quiz questions, then verify every answer against the textbook and fix the errors they find. Which tier is this — and why?',
          options: [
            'Green — the graded skill is verifying and correcting AI output',
            'Yellow — AI did part of the work, so disclosure makes it acceptable',
            'Red — students should not use AI to generate assessment material',
            'It depends on how many answers the chatbot actually got right',
          ],
          correct: 0,
          explanation: "The learning target is critical evaluation of AI output — that's green by definition. Yellow is the tempting answer, but yellow means AI supports brainstorming or feedback while students produce the core work themselves; here, using and correcting the AI *is* the core work. The last option confuses the tool's accuracy with the assignment's design.",
        },
        { type: 'heading', text: 'Grade the process, not just the artifact' },
        {
          type: 'text',
          text: "Tiers set expectations; grading weight enforces them. If the final essay is 100% of the grade, outsourcing the essay is rational. Move real points onto the trail: say, outline done in class (10%), rough draft (15%), a revision memo — 'what changed between drafts and why' (10%) — then the final piece and a short defense. Now skipping the thinking costs more than it saves.",
        },
        {
          type: 'text',
          text: "Your process evidence mostly collects itself. Google Docs version history is built in and free. [Brisk Teaching's](https://www.briskteaching.com/) Chrome extension — free plan with daily caps, Educator Pro around $100/year, some student-facing features on school plans only — adds Inspect Writing, which replays how a Doc was written (steady typing, pauses, pastes), so you can literally watch a 500-word block appear at once. And for math and science, [Snorkl](https://snorkl.app/) has students voice-record their reasoning over a digital whiteboard, which makes thinking audible instead of just visible.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Evidence, not surveillance',
          text: "Tell students up front that you look at process, and frame it honestly: version history *protects* honest students, because their steady work is visible proof no detector can override. And interpret carefully — a single midnight paste is consistent with AI use, but also with drafting in a Notes app or typing from paper. Replay tools open conversations. They don't close cases.",
        },
        {
          type: 'checkpoint',
          question: "A version history shows an essay appearing as one large paste at 11:42 pm the night before it was due. What does this evidence actually support?",
          options: [
            'Proof of AI use, so the essay can be graded accordingly',
            'Nothing at all — late-night pastes are far too common to mean anything',
            'A conversation — the paste fits AI use, but also drafting elsewhere',
            'Grounds for running the pasted text through a detector to settle it',
          ],
          correct: 2,
          explanation: "Process evidence narrows possibilities; it rarely eliminates them — plenty of students draft in Notes or Word and paste once. 'Proof' overreads it, 'nothing' underreads it, and the detector option re-imports every problem from Lesson 1 into a situation you were handling well without it.",
        },
        { type: 'subheading', text: 'Worked example: one assignment, four moves, one prep period' },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Start with the classic prompt.** 'Write a 1,000-word essay on the causes of World War I.' Every chatbot has seen ten thousand versions of this — the raw prompt is a B+ on demand.",
            "**Move 1 — add a local anchor.** '…and connect one cause to what happened in our alliance simulation on Tuesday.' *Why:* the simulation exists only in your room, so the connective thinking has to be the student's.",
            "**Move 2 — split into process checkpoints.** Outline drafted in class → rough draft Friday → final the next week, with points at each stage. *Why:* thinking becomes visible and gradable, and the final artifact stops being winner-take-all.",
            "**Move 3 — attach a five-minute defense.** Each student defends one paragraph of their choice. *Why:* it's the cheapest authorship check that exists, and rehearsing your own argument is itself learning.",
            "**Move 4 — declare the tier.** Yellow: AI may brainstorm causes or critique the outline, with a disclosure note; drafting is the student's. *Why:* students stop guessing, and honest AI use stops being a gray area.",
          ],
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Four integrity situations, no easy answers. Choose your move, then compare with the reasoning.',
          props: {
            title: 'Integrity Calls: What Do You Do?',
            scenarios: [
              {
                situation: "Maya's essay reads far above her usual writing. She wrote it at home in Word, so there's no version history. You have no detector policy — and after Lesson 1, you wouldn't trust a score anyway. What's your move?",
                options: [
                  {
                    text: 'Invite Maya to a short conference and ask her to walk you through her argument and how she built it.',
                    quality: 'best',
                    feedback: "Compare what you hear with her in-class writing and you have real evidence either way: students who wrote the piece can narrate their choices, and if Maya can't explain her own thesis, you've learned that gently and privately. You're also giving her the chance to reveal genuine growth — sometimes the essay that 'reads too well' is a breakthrough.",
                  },
                  {
                    text: "Say nothing this time, but redesign the next assignment with in-class drafting and process checkpoints.",
                    quality: 'ok',
                    feedback: "The redesign instinct is right, and it will prevent the next ambiguous case. But skipping the conversation leaves this one unresolved — if Maya did outsource the work, she learns it went unnoticed; if she wrote it, she misses deserved praise. Redesign forward AND talk now.",
                  },
                  {
                    text: 'Run the essay through two AI detectors and grade it based on what they both agree on.',
                    quality: 'poor',
                    feedback: "Two unreliable instruments agreeing is still unreliable — and if Maya is an English learner, the detectors are biased against her specifically (Liang et al.: 61%+ false-flag rate on non-native writing). You'd be building a grade on evidence you couldn't defend to her family.",
                  },
                ],
              },
              {
                situation: "Theo turns in a yellow-tier literature analysis and volunteers, unprompted: 'Honestly, I had AI write most of my conclusion — I know that's more than we're allowed.' Your syllabus says unauthorized AI use means a zero. What do you do?",
                options: [
                  {
                    text: 'Thank him for the honesty, have him redo the conclusion with his process visible, and waive the penalty.',
                    quality: 'best',
                    feedback: "Disclosure culture is fragile: the first student punished for honesty is the last student who's honest. A redo-with-visible-process protects the learning goal (he still has to write the conclusion) while making self-reporting clearly safer than getting caught. That asymmetry is the whole engine of your integrity system.",
                  },
                  {
                    text: 'Apply the same redo-plus-penalty you would if you had discovered it yourself — consistency matters.',
                    quality: 'ok',
                    feedback: "Consistency is a real value, but this teaches Theo that honesty bought him nothing — and every student he tells learns the same lesson. Consistency between *disclosed* cases is what matters; disclosed and concealed violations can carry different consequences on purpose.",
                  },
                  {
                    text: 'Give the zero the syllabus specifies — rules only work when they are actually enforced.',
                    quality: 'poor',
                    feedback: "This ends disclosure in your classroom, likely for the year — students will conclude the safe move is silence. You also lose the teaching moment: a zero teaches Theo about penalties, while a visible-process redo would have taught him to write conclusions.",
                  },
                ],
              },
              {
                situation: "A parent emails: 'Your AI policy is absurd. My daughter will use AI her whole career — banning it on essays is holding her back.' How do you respond?",
                options: [
                  {
                    text: 'Explain the tier system — some tasks measure her own thinking, others build AI skills — and share the class agreement.',
                    quality: 'best',
                    feedback: "The parent's premise — that you've 'banned AI' — is usually wrong, and the red/green tiers show it: you're teaching AI use deliberately where it's the target skill, and protecting the measurement of her daughter's own growth where that's the point. Most pushback dissolves when parents see the design. You may gain an ally.",
                  },
                  {
                    text: "Reply that you're following district and school policy, and share the district's guidance link.",
                    quality: 'ok',
                    feedback: "Accurate and safe, but it frames your classroom as rule-following rather than intentional design — which invites the parent to fight the policy instead of understanding your assessment reasoning. Use policy as backup, not as the argument.",
                  },
                  {
                    text: "To keep the peace, quietly allow her daughter to use AI on assignments where other students can't.",
                    quality: 'poor',
                    feedback: "Policy-by-squeakiest-wheel is inequitable on its face — and once one student has a private exception, your tiers mean nothing. It also shortchanges the daughter: red-tier tasks exist to grow and measure *her* capabilities, which is exactly what the parent says they want.",
                  },
                ],
              },
              {
                situation: "During a check-in on a four-person group project, two members tell you the third pasted AI-generated text into the shared slides without telling anyone. The fourth didn't notice. The project is due Friday. What's your move?",
                options: [
                  {
                    text: 'Meet with the student who pasted the text, then give the group a protocol for disclosing AI use in shared work.',
                    quality: 'best',
                    feedback: "The violation was individual — undisclosed use — so apply your class agreement to that student alone, which tells the two reporters their honesty worked. The disclosure protocol fixes the real system gap: group work needs a norm for labeling AI contributions before they land in the shared file, not just after.",
                  },
                  {
                    text: 'Have the whole group redo the affected slides and add disclosure statements to each.',
                    quality: 'ok',
                    feedback: "This repairs the artifact and rehearses disclosure, but it spends three innocent students' time on one student's choice — and quietly punishes the two who came to you. If the redo lands on everyone, speaking up starts to look costly.",
                  },
                  {
                    text: "Dock the project grade for all four — a group is responsible for everything it submits.",
                    quality: 'poor',
                    feedback: "Collective punishment teaches the group to hide problems from you, which is the opposite of what just happened — two members trusted you enough to report. It also confuses the norm: the issue isn't that AI text appeared, it's that it appeared *undisclosed*.",
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
            "What makes a task AI-resistant? Personal and local anchors, in-class components, oral defenses, and process portfolios — moves that put the target thinking where you can see it.",
            'What does the traffic light do? It declares AI’s role per assignment — red (none), yellow (brainstorm/feedback with disclosure), green (expected and evaluated) — so students stop guessing.',
            "Why grade process? Because when drafts and reflections carry points, outsourcing the final artifact stops paying — and version history plus tools like Brisk's Inspect Writing make the trail easy to see.",
            "What is process evidence for? Opening conversations, not closing cases — a paste at midnight is a question, not a verdict.",
          ],
        },
        {
          type: 'text',
          text: "Redesign handles the assignments. But norms live or die in conversation — next, the ten-minute talk that turns your integrity policy into something students actually own.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "Which of these is a yellow-tier AI use under the traffic-light scale?",
            options: [
              'AI writes the first draft and the student rewrites the wording before submitting',
              'A student brainstorms topics with a chatbot, writes the essay, and discloses it',
              'A student builds a study guide with AI and annotates what they verified',
              'No AI at any stage of a timed in-class baseline writing sample',
            ],
            correct: 1,
            explanation: "Yellow means AI supports brainstorming or feedback while the student produces the core work — with disclosure. The AI-drafts-student-revises option is the classic misconception: once AI produces the draft, the student is editing someone else's thinking, which exceeds yellow. The study-guide task is green; the in-class sample is red.",
          },
          {
            question: 'A history teacher wants her end-of-unit assessment to resist AI outsourcing. Which redesign helps most?',
            options: [
              'Requiring every essay to be submitted through the LMS plagiarism checker first',
              'Extending the required essay from three pages to five pages',
              'Replacing part of the take-home essay with in-class work and an oral defense',
              'Requiring students to sign an honor pledge on the essay cover page',
            ],
            correct: 2,
            explanation: "In-class work and oral defense move the measured thinking to where she can see it — the two highest-power moves in the lesson. Plagiarism checkers don't catch AI text (it isn't copied), longer essays are *easier* to outsource, and pledges without design changes rely on the arms race she's trying to exit.",
          },
          {
            question: 'What is the main assessment argument for putting grade weight on outlines, drafts, and revision memos?',
            options: [
              'It gives students several extra chances to raise their grade before the final',
              'It shrinks the teacher’s end-of-unit grading pile considerably',
              'It makes late and missing submissions much easier to track',
              'It puts points on visible thinking, so outsourcing the final buys less',
            ],
            correct: 3,
            explanation: "When the artifact is 100% of the grade, outsourcing it is rational; when process carries real points, the economics flip and the visible trail doubles as authorship evidence. The grade-boosting option describes a side effect, not the design logic — and process grading usually adds grading touchpoints rather than removing them.",
          },
          {
            question: "A student's version history shows steady writing across three evenings, but the prose 'sounds like AI' to you and a detector flags it at 70%. What does the evidence support?",
            options: [
              'Treating the work as the student’s own — the process evidence is strong',
              'A formal integrity referral, since two independent signals agree',
              'Asking the student to rewrite one section under supervision, to be safe',
              'Averaging your instinct, the detector, and the history into a judgment',
            ],
            correct: 0,
            explanation: "Steady multi-session drafting is exactly the authorship evidence Lesson 1 said to trust, and a 70% score from a tool with ±15-point admitted variance can't outweigh it. 'Two signals' is the trap — your instinct and the detector are both predictability-detectors, wrong in the same direction for formula-strong writers.",
          },
          {
            question: "Spiral (Module 2): You ask a chatbot to draft a project rubric and the first output is generic mush. Per the iteration habits from Module 2, what's the best next move?",
            options: [
              'Accept it as a starting point, since AI rubrics are always generic',
              'Rewrite the prompt from scratch in a brand-new chat, since this one is stuck',
              'Add specifics — grade level, assignment sheet, your criteria — and revise',
              'Switch to a different AI tool, because this one clearly can’t do rubrics',
            ],
            correct: 2,
            explanation: "Generic output usually means a generic prompt — iterate by adding context and constraints, exactly the Module 2 loop. Starting a fresh chat throws away useful conversation state, and tool-hopping mistakes a prompting problem for a model problem; all three major chatbots produce strong rubrics when fed specifics.",
          },
          {
            question: 'Why does declaring a tier on every assignment reduce integrity problems, according to this lesson?',
            options: [
              'It creates a paper trail that makes later penalties easier to defend',
              'It deters students by signaling that the teacher is watching for AI use',
              'It lets the teacher forbid AI everywhere without opening a debate',
              'It replaces guessing with a stated norm students can actually follow',
            ],
            correct: 3,
            explanation: "Most 'violations' start as confusion — AI help that was fine last week is suddenly cheating this week — so honest students stop wandering over an invisible line once the tier is stated up front. The deterrence option reflects the policing mindset this module is retiring: tiers are communication, not surveillance.",
          },
        ],
      },
    },

    // ────────────────────────────────────────────────────────────────
    // Lesson 3 — Talking to Students About AI
    // ────────────────────────────────────────────────────────────────
    {
      id: 'talking-to-students-about-ai',
      title: 'Talking to Students About AI',
      duration: '20 min',
      objectives: [
        'Co-create a class AI agreement using a five-section template you can adapt tonight',
        'Install the disclosure-statement habit so honest AI use becomes routine and visible',
        'Run a ten-minute class conversation that turns your integrity policy into shared norms',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Blocking ChatGPT on the school network took your IT department one afternoon. It took students about ninety seconds to route around it — phones, home laptops, a dozen mirror sites. You will not out-engineer teenagers, and after Lessons 1 and 2 you know you can't out-detect them either. What's left is the thing that actually works: norms students help write and therefore defend. This lesson hands you the full agreement template, the disclosure habit that keeps it alive, and a ten-minute launch script — ready for tomorrow's class.",
        },
        { type: 'heading', text: 'From cat-and-mouse to norms' },
        {
          type: 'text',
          text: "Enforcement-only integrity policies put you and your students on opposite teams: you optimize for catching, they optimize for not-getting-caught, and nobody optimizes for learning. Co-created norms flip the geometry. When students help write the rule, they've publicly reasoned about *why* it exists — and peer expectations start doing enforcement work no detector ever could.",
        },
        {
          type: 'text',
          text: "The 'why' has to be said out loud, because it isn't obvious to students: an assignment is a proxy for *your* learning. Having AI write your essay is like paying someone to lift weights for you — work got done, but nothing got built in you. When students genuinely absorb that assessment measures their own growth (not teacher nostalgia for the pre-AI world), the tier system stops feeling like a speed trap and starts feeling like a training plan.",
        },
        {
          type: 'checkpoint',
          question: 'Why does co-creating the AI agreement beat announcing the same rules yourself?',
          options: [
            'It shifts responsibility, so the teacher can’t be blamed for enforcement',
            'Students know the tools better, so they should set the AI rules alone',
            'Students who help write a rule understand it and hold each other to it',
            'It’s faster than drafting a classroom policy from scratch yourself',
          ],
          correct: 2,
          explanation: "Ownership is the mechanism: public reasoning builds buy-in, students surface edge cases you'd never think of, and peer norms scale in a way surveillance can't. The 'students know more' option is the seductive one — they may know the tools better, but the agreement still needs your assessment expertise; co-creation means both, not abdication.",
        },
        { type: 'heading', text: 'The class AI agreement: a five-section template' },
        {
          type: 'text',
          text: "Here's a complete template. Bring it as a *draft* — the conversation below is where your students make it theirs. Adapt the language to your grade level.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**When AI is OK here.** Every assignment carries a tier: red means no AI at any stage, yellow means AI can brainstorm or give feedback (with disclosure) while the work is yours, green means AI use is expected — and your judgment about its output is what's graded. No tier marked? Ask before using AI.",
            "**How we disclose.** On yellow and green work, add two or three sentences at the end: which tool you used, what you used it for, and what you changed. That's it — thirty seconds, no forms.",
            "**What counts as your work.** Your ideas, your structure, your final judgment. Using AI to *test* your thinking — quiz me, critique my draft, explain this differently — is studying. Using AI to *replace* your thinking is outsourcing, and it shows up as a skill you don't have later.",
            "**When the line gets crossed.** First response is a redo with your process visible, plus a conversation — a chance to actually learn the thing, not just lose points. Self-disclosing an overstep is always treated more gently than being found out: honesty is the cheapest it will ever be, right now.",
            "**What your teacher commits to.** I mark a tier on every assignment. I never accuse anyone based on an AI-detector score alone. I ask about your process before I judge your product. And this agreement binds me too.",
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The disclosure habit',
          text: "Make disclosure boring and routine — even on green work, even when the AI contribution was trivial. Example statement: *\"I used Gemini to brainstorm three counterargument options; I picked one and wrote the response myself. It also flagged two comma splices in my final draft.\"* Over a semester, these statements become a record of growing judgment — students drift from 'AI wrote my hook' to 'I asked for five hooks and rejected them all.' That drift is AI literacy, documented.",
        },
        {
          type: 'checkpoint',
          question: "Priya's disclosure statement honestly admits she used AI beyond what the yellow tier allows — she rewrote an AI draft instead of drafting herself. Her final product is strong. Best response?",
          options: [
            'Praise the honesty, then have her redo the drafting with process visible',
            'Grade the product on its merits, since the disclosure already shows integrity',
            'Apply the standard AI-misuse penalty so the yellow tier keeps its meaning',
            'Accept it this once, and warn the class that disclosures will be audited',
          ],
          correct: 0,
          explanation: "Two goals must survive: the learning (she still needs to build drafting skill, so a redo matters) and the disclosure culture (honesty must visibly cost less than hiding). Grading it on merits abandons the first goal; the standard penalty abandons the second — punish honesty once and you'll never see it again.",
        },
        { type: 'subheading', text: 'Worked example: the ten-minute launch conversation' },
        {
          type: 'text',
          text: "You don't need a full period. Here's a minute-by-minute script, with the reason behind each move — because the sequence is the strategy.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Minutes 0–2 — open with a question, not a rule.** \"When is using AI on schoolwork cheating — and when is it just studying? Sixty seconds with a partner.\" *Why:* starting with a question positions students as moral reasoners instead of suspects, and you'll hear their real norms before you impose any.",
            "**Minutes 2–5 — sort three cases together.** Read aloud: (a) AI explains photosynthesis in simpler words; (b) AI writes your conclusion and you tweak two words; (c) AI quizzes you before a test. Thumbs up, down, or sideways on each. *Why:* concrete cases surface the line faster than any definition — and the near-unanimous thumbs-down on (b) hands you class consensus you didn't have to argue for.",
            "**Minutes 5–8 — draft the rule in their words.** \"So what separates (a) and (c) from (b)?\" Capture their phrasing on the board — 'AI can coach, but it can't ghostwrite' will beat anything you'd draft alone. *Why:* their words become their rule; enforcement later starts from shared language, not your language.",
            "**Minutes 8–10 — add your commitments and close.** Show the tier system and your side of the agreement: tier on every assignment, no detector-only accusations, process before judgment. Post the draft; set a date to revisit it in a month. *Why:* reciprocity is what makes it an agreement instead of a decree — and the revisit date signals it's a living document, not laminated law.",
          ],
        },
        {
          type: 'interactive',
          component: 'SequenceBuilder',
          caption: 'Rebuild the launch conversation from memory — the order is the pedagogy.',
          props: {
            title: 'Rebuild the 10-Minute Conversation',
            intro: "You've seen the script. Now reconstruct the sequence — each move sets up the next, so order matters.",
            steps: [
              'Pose the open question: when is AI use cheating, and when is it just studying?',
              'Sort three concrete cases together (explainer, ghostwriter, quiz coach) with thumb votes',
              "Turn the class's case judgments into a draft rule written in their own words",
              'Present your teacher commitments: tiers on everything, no detector-only accusations',
              'Post the draft agreement and set a date to revisit it as a living document',
            ],
          },
        },
        {
          type: 'tryIt',
          title: 'Draft your class agreement tonight',
          intro: 'Fifteen minutes with any chatbot turns the template into a grade-appropriate draft you can bring to the conversation.',
          steps: [
            'Open ChatGPT, Gemini, or Claude and paste the five-section template from this lesson.',
            "Prompt: 'Adapt this classroom AI agreement for [your grade] [your subject]. Keep all five sections, use student-friendly language, and add two example disclosure statements my students would recognize.'",
            "Iterate once, Module 2 style: ask it to simplify the reading level, or make the redo policy firmer, until it sounds like you.",
            "Bring it to class as a **draft** and let the ten-minute conversation revise it — ownership comes from the editing, not the reading.",
          ],
          url: 'https://www.teachai.org/toolkit',
          urlLabel: 'TeachAI toolkit (sample school-level guidance language)',
        },
        {
          type: 'checkpoint',
          question: 'What are the three things a disclosure statement should name?',
          options: [
            'The tool used, the number of prompts sent, and the total time spent',
            'The assignment tier, the AI’s error rate, and a parent signature',
            'A signed, dated promise that no AI was used on the assignment',
            'The tool, what it was used for, and what the student changed',
          ],
          correct: 3,
          explanation: "Tool, purpose, changes — enough for you to see the student's judgment at work, short enough to become routine. Prompt counts and time logs (the first option) turn disclosure into bureaucracy, which kills the habit; and a no-AI promise is an honor pledge, not a disclosure — it documents nothing.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "Why norms over policing? Because enforcement makes students optimize for not-getting-caught, while co-created rules make them defend the line themselves — and surface edge cases you'd miss.",
            'What’s in the agreement? Five sections: when AI is OK (tiers), how we disclose, what counts as your work, what happens when the line is crossed (redo + conversation, honesty treated gently), and what the teacher commits to.',
            "What's the WHY students need to hear? Assessment measures *their* learning — AI writing their essay is like paying someone to lift weights for them.",
            'How do you launch it? A ten-minute conversation: open question → sort concrete cases → draft the rule in their words → add your commitments and a revisit date.',
          ],
        },
        {
          type: 'text',
          text: "Your agreement covers what happens inside your four walls. Module 6 covers everything around them: student privacy law (FERPA and COPPA), age gates, how to run a supervised student AI activity safely — and how your classroom policy fits into your school's.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "In the agreement template, why is the first response to a crossed line a redo-with-visible-process rather than an automatic zero?",
            options: [
              'Because most district grading policies prohibit zeros on major work',
              'Because a redo preserves the learning goal and keeps honesty safe',
              'Because students can formally grieve a zero, but not a required redo',
              'Because AI use is too hard to prove for a zero to survive an appeal',
            ],
            correct: 1,
            explanation: "The consequence is designed as a second attempt at the learning, with the process visible this time, while a zero teaches only that concealment should be more thorough next time. The 'too difficult to prove' option is half-true (Lesson 1) but misses the point: even with perfect proof, the zero would still fail as teaching.",
          },
          {
            question: "Mid-semester, several disclosure statements on yellow-tier work say things like 'AI wrote most of my draft.' What's the best reading of this situation — and the best move?",
            options: [
              'The agreement failed — drop the yellow tier and make those assignments red',
              'Students are testing you — apply the syllabus penalty to every admission',
              'Disclosure is working but the line is blurry — revisit it as a class',
              'Ignore it — the products are fine, so the tier line isn’t worth the friction',
            ],
            correct: 2,
            explanation: "Honest statements that admit overreach are proof the disclosure culture works — students trust you with the truth. The fix is to bring the statements back anonymized and re-sort what 'brainstorming help' means, because this is a norms conversation, not a crackdown. Penalizing the honest statements would teach students to write vaguer disclosures, destroying your visibility.",
          },
          {
            question: 'Which pair of commitments does the *teacher* make in the class agreement?',
            options: [
              'Mark a tier on every assignment, and never accuse on a detector score alone',
              'Allow AI on all homework, and grade only work completed in class',
              'Check every submission’s version history, and report violations to admin',
              'Keep class rules identical to the district policy, and update them each semester',
            ],
            correct: 0,
            explanation: "Reciprocity makes it an agreement: students disclose and respect tiers; you make the tiers visible and judge process before product. The version-history option turns a trust structure back into surveillance — you look at process when questions arise, not as universal screening.",
          },
          {
            question: "A student asks, honestly: 'If AI can write the essay, why do I have to?' What's the strongest answer this module offers?",
            options: [
              'Because colleges and employers check for AI writing, and you’ll be caught',
              'Because the school’s policy requires original work, and rules are rules',
              'Because AI writing is still lower quality than trained human writing',
              'Because the essay builds your thinking — like lifting your own weights',
            ],
            correct: 3,
            explanation: "The gym analogy answers the actual question — what assessment is *for* — and it survives student pushback because it's true regardless of AI quality. The getting-caught answer re-enters the cat-and-mouse frame (and, per Lesson 1, isn't even reliably true), while 'rules are rules' concedes there's no reason.",
          },
          {
            question: "Spiral (Module 4): You want AI's help adapting your agreement's language for a student with an IEP, referencing her reading level and accommodations. What's the rule?",
            options: [
              'Paste the relevant IEP section, since accommodations aren’t grade data',
              'Describe the needs generically, with no name or identifying details',
              'Use the school’s AI account instead of a personal one, then paste freely',
              'Ask the AI to promise confidentiality before sharing any of the details',
            ],
            correct: 1,
            explanation: "Module 4's hard rule: no student personally identifiable information in prompts, ever — say 'a 9th grader who reads at a 5th-grade level and needs chunked text' and you get equally good output with zero exposure. IEP content is protected education-record data (the first option is flatly wrong), a school account doesn't change what you may paste, and an AI's 'promise' has no legal standing.",
          },
          {
            question: "At back-to-school night a parent asks: 'How will I know when my kid used AI on an assignment?' Which answer reflects this module's system?",
            options: [
              "'Our detector flags AI writing, and I email families any flagged work'",
              "'You won’t — but I design assignments so that AI use doesn’t matter'",
              "'Every assignment shows its AI tier, and students disclose any AI help'",
              "'Students sign an honor pledge covering AI use at the start of term'",
            ],
            correct: 2,
            explanation: "Tiers plus disclosure make AI use transparent by design — on every assignment the parent can read both the rule and the student's own short account of what AI did. The detector answer promises what Lesson 1 showed detectors can't deliver, and 'it doesn't matter' undersells your system: redesign reduces misuse, but disclosure is what creates the visibility this parent is asking for.",
          },
        ],
      },
    },
  ],
};

export default unit;
