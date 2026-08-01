// Module 6 — Students, Safety, and Your AI Policy (AI for Educators capstone module)
// FERPA/COPPA in plain language, supervised student AI patterns, and a one-page classroom policy.
const unit = {
  id: 'module-6',
  title: 'Students, Safety, and Your AI Policy',
  description: 'Privacy rules in plain English, safe patterns for student AI use, and the one-page classroom policy that ties the whole course together.',
  icon: 'Lock',
  lessons: [
    {
      id: 'privacy-ferpa-and-coppa',
      title: 'Privacy, FERPA, and COPPA (Without the Legalese)',
      duration: '18 min',
      objectives: [
        'Explain what FERPA protects and why pasting student work into a consumer chatbot can violate it',
        "Apply COPPA's under-13 rules and each major tool's age gate when choosing student-facing AI",
        'Vet any AI tool with a five-question privacy checklist before it touches your classroom',
      ],
      blocks: [
        {
          type: 'intro',
          text: "It's Sunday night. You have 32 essays to grade, and a free chatbot could draft feedback on all of them by Monday. So you paste the first one in — name at the top, class period in the header. In about four seconds, you may have handed an education record to a company with no contract with your district, no obligation to delete it, and every right to keep it. Nobody trained you on this, and the rules live in two laws written in 1974 and 1998. This lesson translates them into plain English and gives you a five-question checklist that makes the safe call automatic.",
        },
        { type: 'heading', text: 'FERPA in plain language' },
        {
          type: 'text',
          text: "**FERPA** — the Family Educational Rights and Privacy Act of 1974 — protects **education records**: records directly related to a student and maintained by the school. That's much broader than report cards. A graded essay with a name on it, an IEP, a behavior log, attendance data, your gradebook comments — all education records.",
        },
        {
          type: 'text',
          text: "Here's the part that matters for AI: schools may share education records without parental consent with **school officials** who have a legitimate educational interest. You qualify. A vendor can qualify too — but only when the district has an agreement that keeps the data under school control and bans the vendor from reusing it. The free chatbot account you created with a personal email? Not a school official. No contract, no control, no FERPA cover.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The one-line rule',
          text: "Student names, ID numbers, or anything that identifies a student never goes into a tool your district hasn't signed a **data-privacy agreement (DPA)** with. Strip identifying details, or switch to a covered tool. When in doubt, do both.",
        },
        {
          type: 'keyTerms',
          title: 'Privacy vocabulary',
          terms: [
            { term: 'FERPA', definition: 'Federal law (1974) protecting education records; allows sharing with school officials, which vetted vendors can be — under a district agreement.' },
            { term: 'Education record', definition: 'Any record directly related to a student and maintained by the school — essays, IEPs, grades, behavior notes.' },
            { term: 'PII', definition: 'Personally identifiable information: names, ID numbers, or details that make a student recognizable.' },
            { term: 'DPA', definition: 'Data-privacy agreement — the district-vendor contract that puts a tool under school control.' },
            { term: 'COPPA', definition: 'Federal law (1998) requiring verifiable parental consent before online services collect personal info from children under 13.' },
            { term: 'Age gate', definition: "A tool's minimum-age rule — and they differ: ChatGPT 13+, consumer Claude 18+, Gemini admin-controlled." },
          ],
        },
        {
          type: 'checkpoint',
          question: "A teacher pastes a student's essay — name included — into a personal free chatbot account to get feedback. Which statement is most accurate?",
          options: [
            "It's fine — under FERPA the teacher counts as a school official",
            'It likely violates FERPA, because the vendor has no district agreement',
            "It's fine, as long as the teacher deletes the chat right afterward",
            "It violates COPPA, because the student's personal data went to an online service",
          ],
          correct: 1,
          explanation: "Without a district agreement the vendor isn't under school control, so no FERPA exception covers the disclosure — and the school-official exception covers you, not the tools you paste into. Deleting your chat doesn't erase the vendor's copy, and COPPA governs data collection from under-13s specifically, not every student disclosure.",
        },
        { type: 'heading', text: 'COPPA and the under-13 line' },
        {
          type: 'text',
          text: "**COPPA** — the Children's Online Privacy Protection Act — kicks in when an online service collects personal information from children **under 13**: it requires verifiable parental consent first. The school nuance is worth knowing: schools may consent on parents' behalf, but only for an educational purpose, never a commercial one. And the FTC tightened the rule in 2025, with stricter limits on data retention and third-party sharing.",
        },
        {
          type: 'text',
          text: 'This is why the big consumer chatbots draw hard age lines — and why the lines differ from tool to tool:',
        },
        {
          type: 'table',
          headers: ['Tool', 'Who can use it', 'What that means for your class'],
          rows: [
            ['ChatGPT (consumer)', '13+; ages 13-17 need parental consent', 'Never put under-13 students on it; teens need documented consent'],
            ['Claude (consumer)', '18+ only', 'A teacher tool, not a student tool — [Claude for Teachers](https://claude.com/solutions/teachers) is educator-only'],
            ['Gemini for Education', 'Admin-controlled age settings', "Under-18 students get a restricted experience only if your district's admin enables it"],
            ['K-12 platforms (MagicSchool, SchoolAI, Khanmigo)', 'Built for school use', 'Designed for school consent, monitoring, and district agreements'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Why K-12 wrappers exist',
          text: "Platforms like [MagicSchool](https://www.magicschool.ai/), [SchoolAI](https://schoolai.com/), and [Khanmigo](https://www.khanmigo.ai/teachers) exist precisely to solve this problem: they give younger students AI access under school consent, with monitoring dashboards and signed district agreements — the things consumer chatbots don't offer.",
        },
        {
          type: 'checkpoint',
          question: 'Your school wants 11-year-olds to use an AI tool for a research unit. Given COPPA and the age gates, which setup works?',
          options: [
            'Students create free ChatGPT accounts using school email addresses',
            "Students share the teacher's Claude account under close supervision",
            'A district-approved K-12 platform, with the school consenting',
            'Any tool works once parents sign the start-of-year technology form',
          ],
          correct: 2,
          explanation: "K-12 platforms are built so schools can consent on parents' behalf for educational use under COPPA. ChatGPT's own gate is 13+ regardless of email domain; consumer Claude is 18+ even supervised on your account; and a generic tech form isn't the verifiable, tool-specific consent COPPA anticipates.",
        },
        { type: 'heading', text: 'The five-question vetting checklist' },
        {
          type: 'text',
          text: "You can't memorize every vendor's terms of service — and you don't need to. Before any tool touches your classroom, run five questions. Two minutes, tops.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Teacher-facing or student-facing?** Tools only you touch ([Diffit](https://web.diffit.me/), [Eduaide](https://www.eduaide.ai/), Padlet TA) are the lowest-risk category. Anything students log into needs a district DPA.',
            "**Does the vendor publish FERPA, COPPA, and SOC 2 commitments — plus a zero-retention or no-training-on-your-data statement?** If you can't find it in five minutes, that's your answer.",
            '**Does the age gate match your students?** 13+ with consent for ChatGPT; 18+ for consumer Claude; admin-controlled for Gemini.',
            '**Is there a monitoring surface** — a dashboard where you can see what students are actually doing?',
            '**Has your district approved it, and how does [Common Sense](https://www.commonsense.org/education/) rate its privacy?** Common Sense privacy ratings are the closest thing edtech has to a nutrition label.',
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: vetting MagicSchool',
          text: "Run the checklist and watch each question do its job. **(1) Facing?** Both — teacher tools plus student rooms, so a district agreement matters. **(2) Privacy posture?** [Its privacy page](https://www.magicschool.ai/privacy) states FERPA and COPPA compliance plus SOC 2, and OpenAI and Anthropic have certified zero data retention — prompts aren't stored by the model providers or used for training. **(3) Age gate?** Built for K-12 under school consent. **(4) Monitoring?** Student rooms are teacher-launched and observable. **(5) Ratings and approval?** It holds a 95% Common Sense privacy rating — but the final step, district sign-off, is still yours to confirm. Verdict: a strong candidate that still needs your district's yes.",
        },
        {
          type: 'text',
          text: "That pattern holds across the district-friendly shortlist: MagicSchool and SchoolAI lead with compliance certifications, Khanmigo pairs its Socratic tutor with teacher dashboards and district plans, and teacher-facing generators like Diffit and Eduaide carry the least risk because students never touch them. Notice what the checklist quietly rules out: consumer chatbots, on their own, for students.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: "Even 'good' tools need your judgment",
          text: 'In August 2025, Common Sense Media assessed AI teacher assistants — rating the category moderate risk overall, but flagging the tools that generate IEPs and behavior intervention plans as [high risk](https://www.chalkbeat.org/2025/08/06/ai-teacher-assistants-promote-racial-bias-study-finds/). Testing tools including Gemini in Google Classroom, Khanmigo, Curipod, and MagicSchool, it found more-punitive behavior-plan suggestions for hypothetical students with Black-coded names. Compliance paperwork protects data; it does not guarantee fair outputs. Review anything touching behavior plans, grading, or IEPs before it reaches a student.',
        },
        {
          type: 'checkpoint',
          question: "A colleague raves about a brand-new free AI grading site she found on social media. What's your first move?",
          options: [
            'Run the five-question vetting checklist before you touch it',
            'Test it on one real student essay to judge whether it is worth vetting',
            'Trust it — the site looks professional and shows teacher testimonials',
            'Wait a year, since brand-new AI tools are always unsafe at launch',
          ],
          correct: 0,
          explanation: "Vet before use, every time — question two alone (published privacy commitments) screens out most risky tools in minutes. Testing with a real essay is itself the disclosure you're trying to avoid, testimonials aren't a privacy posture, and age isn't the issue: plenty of new tools pass the checklist and plenty of old ones fail it.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Four real situations. Pick a response, then read the rule behind the feedback.',
          props: {
            title: 'Privacy calls: what would you do?',
            scenarios: [
              {
                situation: "It's Sunday night and you have 32 essays to grade. A free chatbot could draft feedback fast. The essays have student names and your class period on them.",
                options: [
                  {
                    text: 'Remove all names and identifying details, then use a district-approved tool to draft feedback',
                    quality: 'best',
                    feedback: "Best call. FERPA protects identifiable education records — strip the identity and use a covered tool and you've solved both the record problem and the vendor problem. You still review every comment before it reaches a student.",
                  },
                  {
                    text: 'Skip AI entirely and grade by hand like always',
                    quality: 'ok',
                    feedback: "Safe, but you're leaving legitimate time savings on the table. The rule isn't 'no AI' — it's 'no identifiable student work in uncovered tools.' De-identified drafts in an approved tool are fine.",
                  },
                  {
                    text: "Paste the essays as-is into your personal chatbot account — you'll delete the chats after",
                    quality: 'poor',
                    feedback: "This is the classic FERPA trap. A consumer chatbot with no district DPA isn't a school official, and deleting your side of the chat doesn't delete the vendor's copy or undo the disclosure.",
                  },
                ],
              },
              {
                situation: 'Your 5th graders (ages 10-11) are excited about AI. Several ask if they can use ChatGPT for their research projects.',
                options: [
                  {
                    text: 'Let them sign up for free accounts — they use tablets all the time anyway',
                    quality: 'poor',
                    feedback: "Two rules broken at once: ChatGPT's own terms require users to be 13+, and COPPA requires verifiable parental consent before an online service collects personal info from under-13s — which a casual sign-up never provides.",
                  },
                  {
                    text: 'Run the AI parts teacher-projected, or use a district-approved K-12 platform built for school consent',
                    quality: 'best',
                    feedback: "Right. Teacher-projected use gives any age group AI exposure with zero student data risk, and K-12 platforms like SchoolAI or MagicSchool are designed to operate under COPPA's school-consent provision for educational use.",
                  },
                  {
                    text: 'Tell them AI is off-limits until middle school',
                    quality: 'ok',
                    feedback: 'Compliant, but it wastes the teachable moment. Under-13 students can learn AI discernment through the projector without ever touching an account — the next lesson shows you exactly how.',
                  },
                ],
              },
              {
                situation: 'You want AI help brainstorming accommodations for a student with a reading disability. You have the IEP open in the next tab.',
                options: [
                  {
                    text: 'Paste the relevant IEP pages into a consumer chatbot — it needs full context to be useful',
                    quality: 'poor',
                    feedback: "An IEP is one of the most sensitive education records FERPA covers. Pasting it into an uncovered consumer tool is a serious disclosure — 'it gives better answers with context' never outweighs that.",
                  },
                  {
                    text: "Describe the need generically — 'a 7th grader reading three grades below level' — in a district-approved tool, with nothing that identifies the student",
                    quality: 'best',
                    feedback: 'Exactly. A generic description gets you the brainstorming value with nothing identifiable disclosed, and an approved tool adds a second layer of protection. You remain the professional who decides what actually fits this student.',
                  },
                  {
                    text: 'Ask the special education team instead of using AI at all',
                    quality: 'ok',
                    feedback: "Never a bad move — colleagues know the student. But it dodges the tool question rather than answering it: with de-identification plus an approved tool, AI brainstorming is both compliant and useful alongside your team's expertise.",
                  },
                ],
              },
              {
                situation: "A vendor emails you a free trial of an AI tutoring site: 'Just upload your class roster to get started!'",
                options: [
                  {
                    text: 'Ask around on social media whether other teachers have tried it',
                    quality: 'ok',
                    feedback: "Reviews help, but they can't answer the legal questions. Another teacher's good experience is not a district DPA, a COPPA-compliant consent flow, or a published privacy policy.",
                  },
                  {
                    text: 'Run the vetting checklist: its privacy page, its Common Sense rating, and whether your district will sign a DPA',
                    quality: 'best',
                    feedback: "Right — and 'upload your roster to get started' is the tell. A vendor that leads with student data collection before any agreement exists has already failed question two of your checklist.",
                  },
                  {
                    text: "Upload the roster — it's just names and reading levels, nothing sensitive",
                    quality: 'poor',
                    feedback: "Names plus reading levels are exactly the identifiable education-record data FERPA protects, and if any student is under 13, the vendor now holds children's data with no COPPA consent. Roster uploads are a district decision, never a trial-account one.",
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
            'What does FERPA protect? Education records — anything identifiable about a student that the school maintains. The school-official exception covers you, not the consumer tools you paste into.',
            "When does COPPA apply? When an online service collects personal info from under-13s. Schools can consent on parents' behalf, but only for educational — not commercial — use.",
            'What are the age gates? ChatGPT 13+ (parental consent through 17), consumer Claude 18+, Gemini controlled by the district admin. K-12 platforms exist to serve younger students legally.',
            'How do you vet a tool? Five questions: who faces it, what privacy posture it publishes, whether the age gate fits, whether you can monitor it, and what your district and Common Sense say.',
          ],
        },
        {
          type: 'text',
          text: 'Next up: what safe student AI use actually looks like in a live classroom — including a complete activity you can run this week with nothing but a projector.',
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Which of these is an education record under FERPA?',
            options: [
              'A lesson plan you drafted with AI help, saved to your drive',
              "A graded essay with the student's name on it",
              'An anonymous class average you calculated for a newsletter',
              'A worksheet template you downloaded from a curriculum site',
            ],
            correct: 1,
            explanation: "Education records are directly related to an identifiable student and maintained by the school — a named, graded essay sitting in your class folder is a textbook case. Your lesson plans and templates aren't about any student, and a truly anonymous aggregate identifies no one.",
          },
          {
            question: 'You want AI feedback on student lab reports. Which workflow keeps you on the right side of FERPA?',
            options: [
              'Use your personal chatbot account, then delete each conversation',
              'Paste reports only for students whose parents signed the technology form',
              'De-identify the reports, then use a district-approved tool',
              'Paste them anywhere — lab reports are not official records',
            ],
            correct: 2,
            explanation: "Two protections stack: stripping names removes the record problem, and a vendor under a district agreement removes the control problem. Deleting your chat doesn't remove the vendor's data, a generic tech form isn't consent for a specific uncovered disclosure, and FERPA covers far more than report cards.",
          },
          {
            question: "Under COPPA, when can a school consent to an AI tool on parents' behalf for students under 13?",
            options: [
              'For an educational purpose, never a commercial one',
              'Whenever the vendor offers the tool free to schools',
              'Never — only a parent can consent for an under-13 student',
              'When students accept the terms of service themselves',
            ],
            correct: 0,
            explanation: "The school-consent provision is real but limited to educational use — and the FTC's 2025 amendments tightened retention and sharing rules on top of it. Free isn't the test (free tools still collect data), and under-13 students cannot legally self-consent.",
          },
          {
            question: 'A high school junior (age 16) wants to use a general-purpose chatbot for a project. Which statement is accurate?',
            options: [
              'Consumer Claude is fine for her, since she is over 13',
              'ChatGPT bars anyone under 18 from creating an account',
              'Every major consumer chatbot uses the same 13+ minimum age',
              'ChatGPT allows ages 13-17 with parental consent; Claude is 18+',
            ],
            correct: 3,
            explanation: "The gates genuinely differ — that's why the checklist asks about them. Consumer Claude is 18+ (Claude for Teachers is educator-only), while ChatGPT allows 13+ with parental consent through 17. Assuming one rule covers every tool is the misconception that gets classes in trouble.",
          },
          {
            question: 'Module 1 flashback: you ask a chatbot for the exact wording of a FERPA clause, and it produces a confident, official-sounding quote. What should you assume?',
            options: [
              "It's accurate — legal text is certainly in the training data",
              'It may be fabricated — check it against the actual statute',
              "It's accurate, because the model cited a specific section number",
              'Chatbots refuse to quote statutes, so this cannot happen',
            ],
            correct: 1,
            explanation: 'Fluent is not the same as true: language models generate likely-sounding text and will happily fabricate quotes — and the section numbers attached to them. Training data containing a statute is no guarantee the model reproduces it verbatim, so for anything with legal weight, check the primary source.',
          },
          {
            question: 'Your grade-level team is choosing a student-facing AI platform. Which evidence should carry the MOST weight?',
            options: [
              'Its homepage says a million teachers already trust the platform',
              'It offers more features on its free tier than any competitor does',
              "Published FERPA/COPPA/SOC 2 commitments plus your district's approval",
              'It launched most recently, so it runs the newest AI model',
            ],
            correct: 2,
            explanation: 'For student-facing tools, the compliance stack — published commitments, a zero-retention statement, a Common Sense privacy rating, and your district signing off — is the deciding evidence, because it is what makes the tool legal to use rather than merely pleasant. Popularity claims and feature counts say nothing about data handling, and model recency is irrelevant to privacy.',
          },
        ],
      },
    },
    {
      id: 'running-student-ai-activities',
      title: 'Running Student AI Activities (Safely)',
      duration: '17 min',
      objectives: [
        'Choose the right supervision pattern — projected, monitored, or direct — for any student AI activity',
        "Run a complete 30-minute AI literacy lesson ('Fact-check the bot') with just a projector",
        'Teach students to interrogate AI outputs instead of trusting or fearing them',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Half your class is under 13, your district hasn't approved a single chatbot, and you'd still like students to learn what AI gets wrong before they trust it with their homework. Good news: you don't need a device cart, student accounts, or a permission slip to start. The safest AI device in your building is the projector — and one of the best AI literacy lessons you can run takes 30 minutes and zero new tools.",
        },
        { type: 'heading', text: 'Three supervision patterns' },
        {
          type: 'text',
          text: "**Teacher-projected** is the universal pattern: you drive the AI from your account while the class watches and directs. It works at every grade level because no student touches an account — no student data, no age gate, no consent question. Don't mistake it for the training-wheels option: some of the highest-value AI lessons are projected on purpose, because the thinking happens in the room, not in the chat.",
        },
        {
          type: 'text',
          text: "**Monitored spaces** put students in direct conversation with AI inside walls you built. In [SchoolAI](https://schoolai.com/) you design a Space — a bounded chat with content limits and behavior rules — and watch every conversation live from Mission Control, which flags students who need help. [Khanmigo's](https://www.khanmigo.ai/teachers) district plans work similarly: a deliberately Socratic tutor that won't just hand over answers, with teacher dashboards. These platforms carry the compliance load from last lesson — school consent, monitoring, district agreements.",
        },
        {
          type: 'text',
          text: "**Direct use** means students on general-purpose tools like ChatGPT or Gemini. That requires all three keys from last lesson at once: the age gate (13+), parental consent for minors, and district approval. It's the right pattern for older students practicing real-world AI skills — and the wrong first step for almost everyone else.",
        },
        {
          type: 'table',
          headers: ['Pattern', 'Ages', 'What it requires', 'Example'],
          rows: [
            ['Teacher-projected', 'All ages', 'Just you and a screen', 'The class fact-checks an AI summary you project'],
            ['Monitored space', 'All ages, with school consent', 'District-approved K-12 platform', 'Students interview a historical figure in a SchoolAI Space while you watch Mission Control'],
            ['Direct use', '13+, parental consent for minors', 'Age gate + consent + district approval', 'Juniors compare ChatGPT and Gemini answers on managed accounts'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The 13+ anchor',
          text: "UNESCO's 2023 [guidance on generative AI in education](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research) recommends a minimum age of 13 for classroom use of generative AI — a useful anchor when someone asks why your 4th graders aren't chatting with a bot directly.",
        },
        {
          type: 'checkpoint',
          question: 'A 7th-grade teacher wants every student to practice questioning an AI tutor individually. Which route fits the rules?',
          options: [
            'Personal ChatGPT accounts — most 7th graders turn 13 by spring',
            "Pass the teacher's own account around the room, one student at a time",
            'A district-approved monitored platform, like a SchoolAI Space',
            'Individual AI practice is not really possible before high school',
          ],
          correct: 2,
          explanation: "Monitored platforms exist for exactly this: individual practice with school consent and live oversight. 'Most are 13' leaves the youngest students out and skips parental consent, a shared account violates consumer terms and gives you no per-student visibility, and 'impossible' ignores the pattern purpose-built for it.",
        },
        {
          type: 'interactive',
          component: 'SortingGame',
          caption: 'Classify each activity by its supervision pattern — or flag it as not OK as described.',
          props: {
            title: 'Which pattern is this?',
            categories: [
              { id: 'projected', label: 'Teacher-projected' },
              { id: 'monitored', label: 'Monitored space' },
              { id: 'direct', label: 'Direct use (13+)' },
              { id: 'notok', label: 'Not OK as described' },
            ],
            items: [
              {
                text: 'Your 3rd graders shout out fact-checks while you query a chatbot on the projector',
                category: 'projected',
                explanation: 'You hold the account, students hold the thinking — projected use works at any age with zero student data.',
              },
              {
                text: '8th graders interview a historical figure inside a SchoolAI Space while Mission Control shows you every chat',
                category: 'monitored',
                explanation: 'A bounded environment with live oversight under school consent — the monitored pattern working as designed.',
              },
              {
                text: 'Juniors with signed parental consent compare ChatGPT and Gemini outputs on district-managed accounts',
                category: 'direct',
                explanation: 'All three keys are present: 13+, parental consent, and district approval. This is what compliant direct use looks like.',
              },
              {
                text: 'Your 6th graders create personal ChatGPT accounts for homework help',
                category: 'notok',
                explanation: "Most 6th graders are under 13 — below ChatGPT's own age gate — and there's no parental consent or district approval in sight.",
              },
              {
                text: 'Students query a view-only NotebookLM notebook you loaded with the class readings',
                category: 'monitored',
                explanation: "Teacher-curated and source-grounded: it answers only from documents you chose, and students get view-only access. The walls here are the sources rather than a live dashboard, so pair it with the classroom oversight you already do.",
              },
              {
                text: 'Freshmen draft essays on your personal Claude account after school',
                category: 'notok',
                explanation: "Consumer Claude is 18+ — a teacher tool. Sharing your account doesn't transfer your eligibility to students.",
              },
              {
                text: "10th graders work a review set with Khanmigo's district tutor while you scan conversation summaries",
                category: 'monitored',
                explanation: 'A Socratic tutor plus a teacher dashboard under a district plan — monitoring is the whole point of the product.',
              },
              {
                text: 'You project an AI-written summary and the class hunts for its errors together',
                category: 'projected',
                explanation: "No student accounts, full AI literacy value — this is the pattern behind the 30-minute activity below.",
              },
            ],
          },
        },
        { type: 'heading', text: "Ready to run: 'Fact-check the bot' (30 minutes)" },
        {
          type: 'text',
          text: "Here's a complete AI literacy lesson you can run this week — grades 5-12, any subject, projector only. It flips the usual worry on its head: instead of asking whether students will trust AI too much, it trains them to interrogate it. Each step notes *why* it's there, so this doubles as a worked example of designing with the projected pattern.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Prep (5 min, before class):** Ask any chatbot for a one-page summary of the topic your class just finished studying. Copy it onto a slide exactly as generated — do not fix its errors. *Why a just-studied topic: students can only catch errors where they have knowledge, and hunting for them doubles as retrieval practice.*',
            '**Minutes 0-5:** Project the summary. Have the class rate its trustworthiness from 1 to 5 — hands or a quick poll — and record the average. *Why: the pre-rating creates a before-and-after moment. The shift is the lesson.*',
            '**Minutes 5-15:** In pairs, students hunt: facts to verify, claims with no source, missing context, statements that merely sound right. Every pair must check at least one claim against their notes or the textbook. *Why pairs and a required check: it forces actual verification behavior, not just skepticism vibes.*',
            "**Minutes 15-22:** Build a class error list on the board in three columns: Wrong, Unverifiable, Missing. *Why three columns: students learn that 'not exactly false' is its own category — often the most dangerous one.*",
            "**Minutes 22-27:** Re-vote the trust rating and discuss the change. Ask: 'What would you check before using an AI answer in your own work?' *Why: this turns a one-off gotcha into a transferable habit.*",
            "**Minutes 27-30:** Exit ticket — each student writes one personal rule for using AI responsibly. *Why: you'll harvest these into your class AI norms in the next lesson, which makes your policy feel co-created instead of imposed.*",
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'If the summary comes out clean',
          text: "Sometimes the bot nails it. Great — pivot the hunt to what's unsourced or missing (there's always something), and name the deeper lesson: being right this time is not the same as being reliable. Want richer errors? Pick a niche or local topic — models stumble hardest where their training data is thin, exactly as you saw in Module 1.",
        },
        {
          type: 'checkpoint',
          question: "Why does 'Fact-check the bot' use a topic the class just finished studying, rather than something new?",
          options: [
            'Students can only catch errors where they already have knowledge',
            'Familiar topics make the model far less likely to hallucinate',
            'It saves the teacher from having to build an entirely new slide deck',
            'Most classroom policies bar AI use on topics not yet taught',
          ],
          correct: 0,
          explanation: "That's the core design principle: error-hunting requires domain knowledge, and reviewing just-learned material strengthens memory at the same time. The AI hallucinates regardless of what your class knows — familiarity changes what students can catch, not what the model produces.",
        },
        { type: 'heading', text: 'Teach discernment, not just caution' },
        {
          type: 'text',
          text: "The goal isn't students who fear AI — it's students who interrogate it. Teach three reflex questions for any AI output: *What would I check before repeating this? What is it not telling me? Who benefits if I take it at face value?* Warnings expire; that habit transfers to every tool your students will ever meet.",
        },
        {
          type: 'links',
          title: 'Free AI literacy curricula to borrow from',
          items: [
            {
              label: 'Common Sense: AI Literacy Lessons for Grades 6-12',
              url: 'https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12',
              description: 'Free, classroom-ready lessons on AI basics, bias, and responsible use',
            },
            {
              label: 'MIT Day of AI',
              url: 'https://dayofai.org/',
              description: 'Free K-12 AI curriculum and teacher resources from MIT',
            },
            {
              label: 'Experience AI',
              url: 'https://experience-ai.org/en/',
              description: 'Free AI lessons and resources for schools',
            },
          ],
        },
        {
          type: 'text',
          text: "And when you want a full course rather than a single lesson: Lumin AI's own [AI Foundations](/learn/ai-foundations) is free, self-paced, and written for students — how AI actually works, where it fails, and how to use it responsibly, with interactive practice throughout. Assign it as homework across a few weeks, run it as an enrichment track, or point your AI club at it. You're finishing the teacher course; that one is theirs.",
        },
        {
          type: 'checkpoint',
          question: "A student shrugs: 'The AI said it, and it's usually right, so I just used it.' Which response builds discernment?",
          options: [
            'Ban that student from using AI for the rest of the term',
            'Agree — modern models are accurate enough for most schoolwork',
            'Have them cite the AI, which makes the answer trustworthy',
            "Ask 'What could you check to find out?' and then grade the check",
          ],
          correct: 3,
          explanation: "Discernment is a practiced skill, so hand the verification job back to the student. A ban teaches avoidance rather than judgment, 'usually right' is exactly the assumption that fails silently, and disclosure — while good practice — tells you AI was used; it doesn't make the output true.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'Which pattern works at every age? Teacher-projected — no accounts, no student data, full AI literacy value.',
            'How do younger students talk to AI directly? Through monitored, district-approved spaces (SchoolAI, Khanmigo) that carry the consent and oversight load for you.',
            'When is direct use OK? At 13+, with parental consent for minors, plus district approval — all three keys, not any one.',
            "What makes 'Fact-check the bot' work? A just-studied topic, a before-and-after trust vote, and a required verification step.",
          ],
        },
        {
          type: 'text',
          text: 'One lesson left: turning your class norms, tool choices, and privacy rules into a one-page policy you can hand to a parent, a principal, or a substitute — and the certificate to go with it.',
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Which supervision pattern carries zero student-data risk and works at any grade level?',
            options: [
              'Teacher-projected use, where only you touch the account',
              'Direct use, as long as the tool is free for students',
              'Monitored spaces, because monitoring removes all other requirements',
              'Any pattern, once parents sign a general technology form',
            ],
            correct: 0,
            explanation: 'When only your account is involved, there is no student data, no age gate, and no consent question — which is why projected use fits every grade. Monitored spaces still require a district-approved platform, free tools still collect data, and a generic tech form is not tool-specific consent.',
          },
          {
            question: 'Your 6th graders (mostly ages 11-12) would benefit from individual practice with an AI tutor. Best route?',
            options: [
              'Personal ChatGPT accounts, since the purpose is clearly educational',
              "Wait until they all turn 13 — there's no compliant option before then",
              'A district-approved monitored platform like SchoolAI or Khanmigo',
              'Your own Claude account, passed around under close supervision',
            ],
            correct: 2,
            explanation: "K-12 monitored platforms were built for exactly this age group: school consent under COPPA, plus live teacher oversight. An educational purpose doesn't waive ChatGPT's 13+ gate, consumer Claude is 18+ no matter who supervises, and 'wait' ignores that a compliant option already exists.",
          },
          {
            question: "In 'Fact-check the bot,' why does the class vote on trustworthiness both BEFORE and AFTER the error hunt?",
            options: [
              'To generate participation scores for the class gradebook',
              'Because the first vote is usually accurate and the second confirms it',
              'To identify which individual students trusted the AI the most',
              'The shift between the two votes is what students learn from',
            ],
            correct: 3,
            explanation: 'The before-and-after delta makes the lesson concrete: students watch their own calibration change, seeing in one number how much their trust moved once they verified claims. The votes are anonymous class data, not individual grades — and if the first vote were reliably accurate, the activity would have nothing to teach.',
          },
          {
            question: "Spiral to Module 1: during the activity, the chatbot's summary includes a convincing but invented statistic. What's the root cause?",
            options: [
              'The model pulled the number from the wrong reference database',
              'The model predicts plausible text rather than retrieving real facts',
              'A student phrased the request badly, so the model guessed',
              'The topic was too controversial for the model to answer honestly',
            ],
            correct: 1,
            explanation: "Language models predict likely next words from patterns, so fluent fabrication is a built-in failure mode, not a malfunction. They aren't looking numbers up in a database, so there's no wrong database to blame — and neither phrasing nor topic sensitivity explains a confidently invented statistic.",
          },
          {
            question: 'Mid-activity, a student finds the AI summary is completely accurate and asks what the point was. Best response?',
            options: [
              "Shift the hunt to what's unsourced or missing in the summary",
              'Admit the activity failed and move on to the regular lesson',
              'Tell the class that an accurate summary proves AI can be trusted',
              'Secretly edit the summary to add errors so students find some',
            ],
            correct: 0,
            explanation: "An accurate summary still has gaps and unsourced claims, and naming the difference — right this time is not the same as reliable — is arguably the deeper lesson. Declaring AI trustworthy from one sample teaches the exact overgeneralization the activity targets, and covertly planting errors models dishonesty about how AI actually behaved.",
          },
          {
            question: 'UNESCO recommends what minimum age for classroom use of generative AI?',
            options: [
              'Age 8, so elementary students can start early',
              'Age 11, the typical middle school entry point',
              'Age 13, the common teen account threshold',
              'Age 18, restricting it to legal adults only',
            ],
            correct: 2,
            explanation: "UNESCO's 2023 guidance on generative AI in education recommends a minimum age of 13 for classroom use, which happens to align with ChatGPT's consumer age gate. Eighteen is consumer Claude's line, not UNESCO's — and remember that under-13 students can still learn about AI through projected activities.",
          },
        ],
      },
    },
    {
      id: 'your-classroom-ai-policy',
      title: 'Your One-Page Classroom AI Policy',
      duration: '20 min',
      objectives: [
        'Find and read your state and district AI guidance — and act sensibly when none exists',
        'Draft a one-page classroom AI policy with tiered permissions, disclosure, and privacy commitments',
        'Launch it with a parent letter and a 4-week implementation sprint',
      ],
      blocks: [
        {
          type: 'intro',
          text: "More than thirty states — plus Puerto Rico — have published official K-12 AI guidance. Most teachers have never read theirs. Meanwhile, every classroom already has an AI policy: if you haven't written one, it's whatever your students currently assume they can get away with. This capstone lesson replaces the invisible policy with a visible one — a single page you can hand to a student, a parent, a principal, or a substitute — plus a four-week plan to launch it.",
        },
        { type: 'heading', text: 'Read what already exists (20 minutes, once)' },
        {
          type: 'text',
          text: "Your classroom policy sits at the bottom of a stack: state guidance, then district policy, then your page. Start at the top. AI for Education's [state AI guidance tracker](https://www.aiforeducation.io/ai-resources/state-ai-guidance) shows whether your state has issued guidance and links every document — the tracker listed 34 states plus Puerto Rico in 2026, and a 2026 legislative wave means [several states now require districts to adopt AI policies](https://www.k12dive.com/news/4-more-states-require-districts-to-adopt-ai-policies/824749/), including Idaho, Maryland, Oklahoma, and Virginia.",
        },
        {
          type: 'text',
          text: "Then check your district: an acceptable-use policy, a tool-approval list, or a full AI policy. Read for four things — which tools are approved, what students may do at which ages, what disclosure is expected, and what the data-privacy rules are. Your classroom policy can be stricter than the district's. It can't be looser.",
        },
        {
          type: 'checkpoint',
          question: 'Your district has published nothing about AI. Which statement is true?',
          options: [
            'No policy means no rules — you and your students can use any tool',
            'You must ban AI entirely until your district publishes something',
            'FERPA and COPPA still apply, and you can adapt the TeachAI sample policy',
            'Writing classroom AI rules without district permission could get you disciplined',
          ],
          correct: 2,
          explanation: "District silence doesn't suspend federal privacy law, and your state has likely already spoken — check the guidance tracker. The TeachAI toolkit exists precisely for this gap, and sharing your draft with admin in writing protects you rather than exposing you. A total ban ignores that students are already using AI; waiting just leaves the invisible policy in charge.",
        },
        { type: 'heading', text: 'When no policy exists: the TeachAI route' },
        {
          type: 'text',
          text: 'The [TeachAI toolkit](https://www.teachai.org/toolkit) — built by a coalition including Code.org, ETS, ISTE, and Khan Academy — is the de facto standard for school AI guidance, with editable sample policy language plus parent, staff, and student communication templates. Here is how to turn it into action in about a week:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Download and highlight (30 min).** Pull the sample guidance from the toolkit and mark what fits your context. Adapt, don't adopt — a 2nd-grade classroom and an AP seminar need different lines.",
            '**Draft your one-pager (45 min).** Use the five-section template below; everything useful in the toolkit maps onto it.',
            "**Send it up in writing (10 min).** Email the draft to your principal or department chair: here is what I plan to do with AI this term — please flag concerns by a stated date. A paper trail turns a solo experiment into a sanctioned practice.",
            "**Bring it to your team (one meeting).** Students shouldn't face different AI rules in every room of the same hallway. Offer your draft as a starting point, not a mandate — it may become the seed of the school-wide policy.",
          ],
        },
        { type: 'heading', text: 'The one-page policy: five sections' },
        {
          type: 'text',
          text: 'Keep it to one page — a policy nobody reads is the invisible policy all over again. Five sections:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Purpose (2-3 sentences).** Why AI rules exist here. For example: in this class, AI is a tool for thinking, never a replacement for it; these rules exist so everyone knows what fair use looks like.',
            '**Allowed uses, by tier.** The traffic-light system from the TeachAI sample guidance: **Red** — no AI (in-class writing, quizzes, tests). **Yellow** — AI for brainstorming, outlining, or feedback, with disclosure. **Green** — AI-assisted work encouraged. Every assignment gets a declared color.',
            '**Disclosure.** The AI acknowledgment: on yellow and green work, students note what tool they used, what they asked it, and what they changed. Normalizing disclosure beats policing concealment — Module 5 showed you why detectors cannot referee this.',
            '**Privacy commitments.** Your promises: no student work into unapproved tools, no personal information in prompts, and the short list of tools this class actually uses — straight from your Lesson 1 vetting.',
            "**Revision date.** Version 1.0, reviewed on a stated month and year. AI changes fast; a policy with a revision date signals professional judgment, not stone tablets.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Parent letter (copy it, then make it yours)',
          text: "Dear families — This year our class will use AI tools in limited, supervised ways. I use vetted, district-approved tools to help prepare materials, and students use AI only on clearly labeled assignments, with disclosure of how they used it. I never enter student names or personal information into AI tools. Our one-page class AI policy is attached; it explains which uses are allowed and when. Questions or concerns? I'd genuinely like to hear them — reach me at [email]. — [Your name]",
        },
        {
          type: 'checkpoint',
          question: 'A student used a chatbot to outline their essay on a yellow-tier assignment. Under the template policy, what happens next?',
          options: [
            'Nothing happens — yellow tier means AI use is unrestricted',
            'The essay is rejected, because the AI outline shaped the final product',
            'You run the essay through an AI detector to check their account',
            'They add an AI acknowledgment naming the tool, the prompt, and the changes',
          ],
          correct: 3,
          explanation: "Yellow explicitly permits brainstorming and outlining with disclosure, so the acknowledgment completes the deal and the work is fully legitimate. Unrestricted use is green's territory, rejecting disclosed use punishes honesty and kills your disclosure culture, and Module 5 covered why a detector score can't referee this conversation.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Three conversations your policy will eventually meet. Choose your move.',
          props: {
            title: 'Policy in the wild',
            scenarios: [
              {
                situation: "A colleague tells you she's been pasting student essays — names and all — into a free chatbot to speed up grading, and offers to show you how.",
                options: [
                  {
                    text: 'Decline for yourself, but stay out of her workflow',
                    quality: 'ok',
                    feedback: "This protects you, not students — their essays are still flowing to an uncovered vendor. You don't have to report a colleague to help her fix a fixable problem.",
                  },
                  {
                    text: 'Share what you learned: strip names, switch to a district-approved tool, and mention that identifiable essays in an uncovered chatbot is a FERPA problem',
                    quality: 'best',
                    feedback: "Best. You offer her the same time savings legally — de-identified drafts in a covered tool — and frame it as protecting her, not policing her. That's how better practice actually spreads through a building.",
                  },
                  {
                    text: 'Join in — if the whole department does it, the district will have to approve something eventually',
                    quality: 'poor',
                    feedback: "Normalizing a FERPA violation isn't advocacy; it's liability — hers, and now yours. The pressure route is asking your district to approve a covered tool, not creating facts on the ground with student data.",
                  },
                ],
              },
              {
                situation: 'Your principal hears you finished an AI course and asks you to lead a 45-minute staff PD session next month.',
                options: [
                  {
                    text: "Decline — one course doesn't make you the AI expert",
                    quality: 'poor',
                    feedback: 'You know more than you think: privacy rules, supervision patterns, a vetting checklist, a policy template. Staff PD needs a colleague one step ahead, not a researcher — and declining often hands the slot to vendor marketing, or to nobody.',
                  },
                  {
                    text: 'Accept, and spend the session demoing your favorite AI tools',
                    quality: 'ok',
                    feedback: 'Workable, but tool demos age in months and skip what colleagues most need: the privacy rules and policy scaffolding that make any tool usable. Lead with the boring-but-durable material.',
                  },
                  {
                    text: "Accept with a scoped plan: one privacy rule, one live activity like 'Fact-check the bot,' and the TeachAI toolkit plus your one-page policy as takeaways",
                    quality: 'best',
                    feedback: 'Best. A narrow, artifact-based session mirrors what worked in this course — everyone leaves with something usable tomorrow — and the TeachAI templates cut your prep time dramatically.',
                  },
                ],
              },
              {
                situation: "A parent emails: 'I've read about AI making things up and collecting kids' data. I don't want my child using AI in your class.'",
                options: [
                  {
                    text: "Reassure them that all students use AI now — it's the future of work",
                    quality: 'poor',
                    feedback: 'This dismisses a legitimate concern with the exact hype that created it. A parent citing hallucination and data collection is paying attention — they deserve specifics, not slogans.',
                  },
                  {
                    text: 'Send the one-page policy, explain the tiers and your no-PII commitment, and note that much of the class AI work is teacher-projected — no student account involved',
                    quality: 'best',
                    feedback: 'Best. Specific, verifiable commitments answer specific fears, and pointing out that projected activities involve zero student data usually resolves the core worry. Offer a conversation — and an alternative for direct-use activities if they still want one.',
                  },
                  {
                    text: 'Promise their child will never encounter AI in any form in your class',
                    quality: 'ok',
                    feedback: "Well-meant, but it over-promises — AI is embedded in tools the whole class uses — and it removes the AI literacy their child arguably needs most. Offer supervised, account-free participation instead of total exemption.",
                  },
                ],
              },
            ],
          },
        },
        { type: 'heading', text: 'Your 4-week implementation sprint' },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Week 1 — Verify and vet.** Look up your state on the guidance tracker, re-read your district AUP, and run the Lesson 1 checklist on every AI tool you currently touch. Output: your approved-tool shortlist.',
            '**Week 2 — Draft and send.** Write your one-page policy, email it to your admin with a respond-by date, and send the parent letter home. Output: a policy with a paper trail.',
            "**Week 3 — Teach it.** Run 'Fact-check the bot,' harvest the exit tickets into class AI norms, and post the traffic-light tiers where students can see them. Output: students who helped write the rules they follow.",
            '**Week 4 — Label and reflect.** Add a red, yellow, or green label to every assignment you post, assign [AI Foundations](/learn/ai-foundations) if it fits your class, and note what needs revising. Output: version 1.1 scheduled — sprint done.',
          ],
        },
        {
          type: 'callout',
          variant: 'teacher',
          title: 'Claim your certificate',
          text: "That's the course. The certification assessment draws scenario-based questions from all six modules — privacy calls, prompt fixes, detector claims, differentiation moves — and you can retake it until you pass. Everything you built along the way (prompt library, policy, parent letter, activity plan) is yours regardless. Go get it.",
        },
        {
          type: 'checkpoint',
          question: 'Your classroom policy allows yellow-tier AI on homework, but your district bans student AI use entirely. What wins?',
          options: [
            'The district policy — your rules can be stricter, never looser',
            'Your classroom policy, because you know your own students best',
            'Whichever of the two policies was written most recently',
            'State guidance overrides both, so follow your state tracker document',
          ],
          correct: 0,
          explanation: 'The stack runs state guidance, then district policy, then your page — and each layer can only tighten the one above. Knowing your students shapes how you implement rules, not whether they apply; recency is not authority; and most state documents are guidance, while district policy is the binding layer.',
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'Where does your policy sit? At the bottom of a stack — state guidance, district policy, then your page — where each layer can be stricter than the one above, never looser.',
            'What if no policy exists? FERPA and COPPA still apply. Adapt the TeachAI sample guidance, send your draft up in writing, and align your team.',
            "What's on the one page? Purpose, traffic-light tiers, disclosure, privacy commitments, and a revision date.",
            'How do parents come along? A short letter with specific commitments — approved tools, no PII, labeled assignments — beats vague reassurance every time.',
            'What happens over the next month? Vet, draft, teach, label — one week each. Then the certification assessment.',
          ],
        },
      ],
      quiz: {
        questions: [
          {
            question: "You've just moved states and know nothing about your new state's AI stance. What's the fastest reliable way to find out?",
            options: [
              'Search social media for what teachers in your state say',
              'Email the state department of education and wait for a reply',
              'Check the AI for Education state guidance tracker',
              'Assume none exists, since states rarely address classroom AI',
            ],
            correct: 2,
            explanation: "The tracker collects and links every state's official guidance in one place — over 30 states plus Puerto Rico had published K-12 AI guidance by 2026 — which beats both crowdsourcing and waiting on an inbox. The last option is backwards: most states have now spoken, and several legislatures now require districts to adopt AI policies.",
          },
          {
            question: 'A teammate wants to copy your one-page policy, but her district already has a detailed AI policy. What should she do?',
            options: [
              'Nest her page inside the district policy, adding classroom-level specifics',
              'Skip a classroom policy entirely, since the district version covers it',
              'Use your page as-is — classroom policies outrank district ones',
              'Wait for the state to reconcile her district policy with yours',
            ],
            correct: 0,
            explanation: "District policy is the binding frame, so her page adopts those rules and adds only classroom-level specifics that are equal or stricter — per-assignment tiers, a disclosure format, class norms. Skipping it leaves the student-facing layer invisible, and classroom rules never override district policy.",
          },
          {
            question: "A colleague proposes adding 'all suspected AI writing will be verified by a detector' to your shared policy. Drawing on Module 5, what's the strongest objection?",
            options: [
              'Detectors cost more than most school budgets can absorb',
              'Detectors are unreliable and biased against non-native writers',
              'Detectors only work on essays longer than about five pages',
              'Detection is fine, but only administrators should run the reports',
            ],
            correct: 1,
            explanation: 'The research is stark: in a 2023 Patterns study, seven commercial detectors misclassified over 61% of human-written TOEFL essays as AI-generated, and vendors themselves acknowledge wide error bars. The dependable alternatives are process visibility, disclosure norms, and assignment design — cost and essay length were never the issue.',
          },
          {
            question: 'Spiral to Module 2: you ask a chatbot to draft your parent letter. Which prompt gets the best first draft?',
            options: [
              'Write a friendly letter to parents explaining that our class will be using AI tools in some assignments this year.',
              'You are an expert educator. Write something reassuring about AI policy that families at our school will understand.',
              'Draft a parent letter about our new AI policy. Keep it warm, professional, and reasonably short overall.',
              "You're a 7th-grade teacher. Write a warm 150-word letter to families covering our AI tiers and disclosure rule.",
            ],
            correct: 3,
            explanation: 'Role, task, context, and format — the anatomy from Module 2 — give the model everything it needs: audience, length, tone, and the specific commitments to cover. The others name a topic but leave grade level, length, and content to chance. And per this module: the commitments come from your policy; the AI only drafts the wording.',
          },
          {
            question: 'After your letter goes home, a parent replies that they want their child to avoid AI entirely. Which response best serves the student AND respects the parent?',
            options: [
              'Explain that district policy requires every student in class to use AI',
              'Grant a blanket exemption from anything AI-related for the whole year',
              'Walk them through the policy and offer alternatives for the labeled work',
              'Forward the email to your principal instead of replying yourself',
            ],
            correct: 2,
            explanation: "Specifics defuse fear: most class AI work is teacher-projected with no student accounts, direct-use activities are labeled, and offering alternatives for those honors the parent's call without cutting the student off from AI literacy. Claiming a district mandate is usually false and needlessly adversarial, a blanket exemption over-promises, and forwarding without engaging abandons the relationship.",
          },
          {
            question: 'What is the revision date on your one-page policy actually for?',
            options: [
              'It makes the policy legally binding on students and families',
              'It marks the policy as a living document and books the revisit',
              'Districts require annual revision dates on all classroom documents',
              'It tells students the date on which the rules stop applying',
            ],
            correct: 1,
            explanation: 'AI tools and rules shift fast enough that a static policy quietly goes stale; a visible revision date signals professional judgment and schedules a moment when you actually revisit it. A classroom policy is a practice agreement, not a legal instrument, and no general rule requires the date — which is exactly why adding it stands out.',
          },
        ],
      },
    },
  ],
};

export default unit;
