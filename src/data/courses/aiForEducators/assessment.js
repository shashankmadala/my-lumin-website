// AI for Educators — Certification Assessment
// 20 scenario-heavy questions drawn from all six modules (3-4 per module).
// Coverage map: Q1-Q4 Module 1, Q5-Q7 Module 2, Q8-Q10 Module 3,
// Q11-Q13 Module 4, Q14-Q17 Module 5, Q18-Q20 Module 6.

export default {
  title: 'Certification Assessment',
  description:
    'Twenty scenario-based questions drawn from all six modules — privacy calls, prompt fixes, detector claims, differentiation moves, and integrity decisions. Score 80% or higher to pass. You can retake the assessment as many times as you need, and passing earns your AI for Educators certificate.',
  passingScore: 80,
  questions: [
    // ── Module 1: How AI Actually Works — and When It Fails ──────────
    {
      question:
        'During a department meeting, two teachers run the exact same lesson-plan prompt in the same chatbot and get noticeably different drafts. One concludes the tool is broken. What actually explains the difference — and what habit should follow from it?',
      options: [
        'The model was trained on each teacher’s past lessons, so it tailored the draft to its author',
        'One teacher received an older version of the model, so only the newer output should be trusted',
        'Sampling — the model picks among likely next tokens, so each run is just another draft',
        'One output is the correct one, and better prompt wording will make the model repeat it',
      ],
      correct: 2,
      explanation:
        'Variation between runs is designed-in randomness, not a malfunction: the model samples among likely tokens, and small early differences compound into different drafts. The habit that follows is to regenerate, compare, and keep the best parts — no run is more "official" than another. The training option is tempting because chatbots feel personal, but ordinary chats don’t retrain the model, and no prompt wording makes a sampling model fully deterministic.',
    },
    {
      question:
        'You ask a chatbot for three peer-reviewed sources to support a proposal to your curriculum committee. It returns three beautifully formatted citations, complete with DOIs. What must happen before the proposal leaves your laptop?',
      options: [
        'Search each exact title and independently confirm every citation exists',
        'Nothing — a DOI is a registration number, so its presence proves the citation is real',
        'Ask the same chatbot to double-check its own citations and keep the ones it confirms',
        'Keep the two citations from journals you recognize and drop the third',
      ],
      correct: 0,
      explanation:
        'A fabricated citation is assembled from the same statistical patterns as a real one — surname, year, plausible journal, tidy DOI — so perfect formatting is evidence of nothing, and every element has to be independently verified by searching the exact title. Asking the model to check itself is the tempting shortcut, but that’s prediction all the way down: it can confidently confirm its own invention. A recognizable journal attached to a nonexistent article is a classic partial hallucination, so familiarity doesn’t clear a citation either.',
    },
    {
      question:
        'An administrator asks you to draft a behavior-intervention plan for a specific student by Friday. A colleague suggests: "Just have ChatGPT write it — takes two minutes." Which use of AI fits both the course’s decision framework and the documented bias evidence?',
      options: [
        'Describe the student — name, background, behaviors — so the plan is properly tailored',
        'Have one AI write the plan and a second AI check it for bias before you submit it',
        'Use a district-approved tool freely, since approved vendors have already screened out bias',
        'Ask AI only for general strategies for the behavior pattern, then build the plan out',
      ],
      correct: 3,
      explanation:
        'Keep AI to generic, evidence-based ideation with no student details, then let your own judgment build the plan for the actual child — you get the brainstorming value without importing documented bias. A behavior plan is a high-stakes judgment about an individual, exactly where Common Sense Media’s August 2025 assessment of AI teacher assistants found more punitive suggestions for students with Black-coded names. Describing the student is the tempting option, but it feeds identifying details into the tool and puts biased output one light edit from a child’s file; no tool is certified bias-free, and AI-checking-AI stacks the same failure mode twice.',
    },
    {
      question:
        'In the staff room, a colleague says teachers who resist AI "are just afraid of technology." Based on the survey data in this course, what is the most accurate response?',
      options: [
        'Surveys show most teachers enthusiastically support classroom AI, so resisters are outliers',
        'Skepticism is mainstream — only 6% of teachers told Pew genAI does more good than harm',
        'The data show a generational split — older teachers resist, younger ones embrace it',
        'Research confirms resistance tracks unfamiliarity, which training alone tends to resolve',
      ],
      correct: 1,
      explanation:
        'The skeptics are the majority, and their position is reasoned: just 6% told Pew genAI does more good than harm, 47% of educators expect AI to make teaching worse over five years, and 42% of teachers have received no training at all. Their stated concerns — deskilling, workload-shifting, equity, environmental cost — are substantive professional caution, not technophobia. The generational-split claim is the tempting stereotype, but it appears nowhere in this data, and "most teachers are enthusiastic" is the opposite of what the survey found.',
    },

    // ── Module 2: The Prompting Playbook ─────────────────────────────
    {
      question:
        'You prompt "Act as a 7th-grade science teacher. Write a 10-question lab-safety quiz," and the questions come back far too advanced for your students. What is the highest-value single fix?',
      options: [
        'Re-run the identical prompt a few times and keep whichever draft comes back easiest',
        'Add context: what your students have already covered and the level they work at',
        'Switch to a different chatbot, since this one is clearly tuned for advanced readers',
        'Make the role line longer and more detailed, with extra adjectives about the teacher',
      ],
      correct: 1,
      explanation:
        'Difficulty miscalibration is almost always a missing-context problem: naming a grade in the role line isn’t the same as telling the model what these students already know, so it filled the gap with a statistical guess about the audience you never described. Re-running the identical prompt is the tempting non-fix — without new information the model mostly repeats the same guess — and switching tools carries the same context gap to a new product, because all major chatbots steer on the text you give them.',
    },
    {
      question:
        'You asked for a 3-minute exit ticket, but the draft is a 20-question worksheet — the entire structure is wrong for a lesson closer. Which follow-up move does this call for?',
      options: [
        'Refine it: reply "delete 17 of these questions" and trim what is left by hand',
        'Accept it and repurpose the long worksheet as a homework packet instead',
        'Open a fresh chat and retype the original prompt so the context resets',
        'Regenerate with constraints: "Start over — max 3 questions, under 3 minutes"',
      ],
      correct: 3,
      explanation:
        'When a wrong assumption runs through the whole draft, the draft is the wrong shape — re-asking with the missing constraint built in produces a design that targets your real requirement, instead of surgery on a structure built for a different task. Deleting 17 questions is the tempting patch, but you’d be sanding a wrong-shape draft and usually leave residue of the original design; and accepting it as homework lets the tool decide your lesson design instead of you. Refine is for drafts that are mostly right; this one isn’t.',
    },
    {
      question:
        'You want scaffold ideas for a student with a reading-fluency IEP goal. Which prompt keeps you on the safe side of the no-PII rule?',
      options: [
        '"Suggest reading scaffolds for a 5th grader with a 110-words-per-minute fluency goal"',
        'Paste the student’s full IEP PDF so the AI has complete and accurate context to work from',
        'Use the student’s initials and school name instead of the full name to anonymize it',
        'Include only the student’s first name, since FERPA protects surnames and ID numbers',
      ],
      correct: 0,
      explanation:
        'A generic description of the learning need — grade, skill, goal — carries no identifying details, gives the model everything it actually uses, and so produces just as good an output with zero exposure. Initials-plus-school is the tempting middle ground, but identification comes from the combination of details, and a small-context combination can single a child out as surely as a name. An IEP is a protected education record, so pasting the PDF is the worst option, not the most helpful one — and FERPA protects identifiability, not just last names.',
    },

    // ── Module 3: Reclaim Your Time ──────────────────────────────────
    {
      question:
        'Mid-class, a student proves the answer key on your AI-generated practice set is wrong: the key says 1/3 where the answer is 5/6. Why did the model produce a wrong answer while sounding completely confident?',
      options: [
        'It computes the answer correctly but hides its uncertainty to sound more helpful',
        'Free tiers introduce occasional deliberate errors to nudge teachers toward paid plans',
        'It predicts likely-looking text token by token instead of actually computing',
        'It errs mainly on fractions, a known weak spot you can plan around',
      ],
      correct: 2,
      explanation:
        'A plain language model isn’t running the arithmetic — it generates plausible text token by token, so a wrong answer comes out exactly as fluently as a right one. That’s why the rule is absolute: work every answer key yourself before it reaches students. The "hides its uncertainty" option is tempting because it matches how the output feels, but there’s no computation being concealed — fluency is a style, not a signal, and no problem type is automatically safe.',
    },
    {
      question:
        'A leveling tool labels a passage "Grade 4," but when you read it aloud, the sentences run 25+ words with vocabulary your 7th graders would find hard. What is the best fix?',
      options: [
        'Trust the label — a purpose-built leveling tool is calibrated against real readability data',
        'Cut the difficult academic vocabulary until the passage reads at a grade 4 level',
        'Ask the model to confirm the passage is really grade 4 and keep it if it says yes',
        'Re-prompt with explicit sentence-length and vocabulary limits, then read it aloud',
      ],
      correct: 3,
      explanation:
        'The level label is generated text, not a measurement — level drift is a routine failure in AI leveling, even inside purpose-built tools. Concrete, checkable constraints (sentence-length caps, everyday vocabulary, keep the key terms) give the model something to hit, and the read-aloud test verifies the result before printing instead of trusting a new label. Asking the model to confirm its own output is the tempting circular move — it can confidently agree with its own error — and cutting the key vocabulary makes the text easier by gutting exactly the content you’re teaching.',
    },
    {
      question:
        'Your AI-drafted newsletter "reminds families that picture day is October 12" — but you never mentioned picture day. What happened, and what should you do?',
      options: [
        'The model checked your school calendar; verify the date looks right and keep the reminder',
        'The model filled a gap with an invented but plausible detail — cut it from the draft',
        'It is likely a coincidence from a common school-calendar pattern; keep it if plausible',
        'It is a one-time glitch; regenerating the newsletter will prevent it from happening again',
      ],
      correct: 1,
      explanation:
        'This is hallucination wearing a newsletter costume: the model had a gap where newsletters usually contain reminders, so it generated a plausible one — cut it, and never let AI supply a fact you didn’t give it. It has no access to your school calendar; that option is tempting precisely because the detail sounds so specific, but specificity is what hallucination looks like. Regenerating doesn’t change the underlying behavior; your proofread of every date and time against your real calendar is the actual fix.',
    },

    // ── Module 4: Reach Every Learner ────────────────────────────────
    {
      question:
        'You ask AI to rewrite a grade-8 plate-tectonics article for striving readers. In the draft, sentences are shorter, key terms are defined inside the sentences — and the paragraph explaining convection currents is gone entirely. What is your call?',
      options: [
        'Reject the draft — leveling changes the access point, but never the core concept',
        'Accept it — shorter and simpler is the whole point of leveling for struggling readers',
        'Accept it, but write easier quiz questions so the assessment matches the reduced content',
        'Reject it because leveled texts should define terms in a glossary, not inside sentences',
      ],
      correct: 0,
      explanation:
        'Differentiation means same goal, different ladder: leveling may change vocabulary, sentence length, and density, but a rewrite that quietly deletes convection currents isn’t differentiation — it’s a different, lesser lesson, which is why the prompt should name what must survive and ask for a change log. "Shorter and simpler is the point" is the tempting reading, but shorter sentences and in-sentence definitions are what a good rewrite should do; the deletion is the failure. Easing the quiz just cements the lowered expectation, and in-sentence definitions are a feature, not a flaw.',
    },
    {
      question:
        'A colleague says: "It’s fine — I only pasted an excerpt of the IEP into ChatGPT, not the whole document." What is wrong with that reasoning?',
      options: [
        'Nothing is wrong — a short excerpt is legally different from the full document',
        'The only real problem is that ChatGPT might give inaccurate advice about the excerpt',
        'An identifiable excerpt of an education record is still an education record',
        'It would have been fine on a school-owned computer, since that is district equipment',
      ],
      correct: 2,
      explanation:
        'FERPA protects the information, not the page count: there is no "small pieces" exception, an identifiable excerpt carries the same weight as the full plan, and the disclosure happens at paste time — data sent to external servers can’t be un-pasted, so deleting the chat changes nothing. Accuracy is a separate issue entirely. The school-computer option is the tempting technicality, but the device never mattered; what matters is whether the tool is covered by a district data-privacy agreement, and a consumer chatbot account isn’t.',
    },
    {
      question:
        'Students keep citing "facts" that aren’t in the unit readings. You want them to have study help that answers only from your actual sources. Which tool most directly fixes this, and why?',
      options: [
        'Curipod — its live polls and word clouds will surface the errors during class',
        'NotebookLM — it answers only from the documents you load, and you share it view-only',
        'A general chatbot, with the instruction "only use my class readings" added to every prompt',
        'Any major chatbot — modern versions cite a real source for every factual claim',
      ],
      correct: 1,
      explanation:
        'The problem is ungrounded answers, and source-grounding is the structural fix: NotebookLM can only respond from the readings you loaded, which limits hallucination by design, and because personal notebooks are 18+, view-only sharing is what keeps it appropriate for K-12. The prompt-instruction option is the tempting one, but an instruction is advice while grounding is a control — a general chatbot can still free-associate from training patterns no matter what you tell it. Chatbots don’t cite real sources by default (they generate citation-shaped text), and Curipod runs live interactive lessons, not independent study help.',
    },

    // ── Module 5: Assessment & Integrity in the AI Era ───────────────
    {
      question:
        'A detector flags an English learner’s essay as "92% AI." Following this course, what do you do?',
      options: [
        'Apply a reduced penalty, since the detector score might be only partly wrong',
        'Report it for academic dishonesty — 92% is past any reasonable threshold',
        'Re-run the essay through two other detectors and act only if at least one agrees',
        'Set the score aside and look at process evidence: version history and drafts',
      ],
      correct: 3,
      explanation:
        'English learners are precisely the students detectors mislabel most — Liang et al. found seven commercial detectors falsely flagged more than 61% of human-written TOEFL essays — and Turnitin itself acknowledges roughly ±15 points of variance, so the score deserves zero weight, not partial weight. Set it aside and look at drafts, version history, and a low-stakes conversation about how the essay was written. Re-running through more detectors feels rigorous but just averages unreliable instruments, and a "reduced penalty" still punishes a student on no evidence.',
    },
    {
      question:
        'Your strongest writer produces textbook-perfect five-paragraph essays. Why is her honest work at genuine risk of a false AI flag?',
      options: [
        'Detectors are tuned to assume that unusually strong student writing is AI-assisted',
        'Her earlier essays are probably sitting in the detector’s training data',
        'Detectors measure text predictability, and formula writing is highly predictable',
        'Detectors weight essays written outside class time as higher-risk submissions',
      ],
      correct: 2,
      explanation:
        'Detectors score how statistically predictable a text is and bet that predictable word choice means machine-made. But we literally teach students to write predictably — thesis, three body paragraphs, conclusion — so formula-faithful writers trip the same statistical alarm that mislabeled 61%+ of human TOEFL essays. "Strong writing must be AI" is the tempting near-miss, but it’s wrong on mechanism: it’s formula, not quality, that reads as predictable — which is also why there’s no reliable fingerprint separating fluent humans from machines.',
    },
    {
      question:
        'Students use a chatbot to generate practice quiz questions, then verify every answer against the textbook and fix the errors they find. Under the traffic-light scale, which tier is this assignment — and why?',
      options: [
        'Green — AI use is expected, and verifying its output is the graded skill',
        'Yellow — AI did part of the work, so disclosure is what makes it acceptable',
        'Red — students should never use AI to generate their own assessment material',
        'It depends on how many of the chatbot’s answers were correct',
      ],
      correct: 0,
      explanation:
        'When working with AI critically is itself the learning target — evaluate, verify, correct — the assignment is green by definition, and here the graded skill is catching and fixing the bot’s errors. Yellow is the tempting answer because AI clearly "helped," but yellow means AI supports brainstorming or feedback while students produce the core work themselves; here, interrogating the AI’s output IS the core work. The last option confuses the tool’s accuracy with the assignment’s design: the tier describes the task’s intent, not the bot’s performance on a given day.',
    },
    {
      question:
        'Theo turns in a yellow-tier analysis and volunteers, unprompted: "Honestly, AI wrote most of my conclusion — I know that’s more than we’re allowed." Your syllabus says unauthorized AI use means a zero. What is the best response?',
      options: [
        'Give the zero the syllabus specifies, since a rule only works if it is enforced',
        'Have him redo the conclusion with his process visible, with little or no penalty',
        'Apply the same penalty you would if you had caught it yourself, since consistency matters',
        'Grade the product on its merits — the disclosure itself already shows integrity',
      ],
      correct: 1,
      explanation:
        'Two goals have to survive: the learning (he still needs to build the skill, so a visible-process redo matters) and the disclosure culture (thank him, because self-disclosure must stay visibly safer than concealment — the first student punished for honesty is the last student who is honest). The consistency option is the tempting one, but consistency matters between disclosed cases; disclosed and concealed violations can carry different consequences on purpose, because that asymmetry is the engine of the whole integrity system. Grading it on merits abandons the learning goal; the zero ends disclosure in your classroom, likely for the year.',
    },

    // ── Module 6: Students, Safety, and Your AI Policy ───────────────
    {
      question:
        'It’s Sunday night and a teacher has 32 essays to grade. She pastes the first one — student name at the top — into a free chatbot on her personal account, planning to delete the chat afterward. Which statement is most accurate?',
      options: [
        'It’s fine, because teachers count as school officials under FERPA',
        'It’s fine as long as she deletes the conversation right afterward',
        'It violates COPPA, because the student whose work she pasted is a minor',
        'It likely violates FERPA — the vendor has no district data agreement',
      ],
      correct: 3,
      explanation:
        'A named, graded essay is an education record, and FERPA’s school-official exception covers the teacher herself — it doesn’t transfer to an uncovered tool she pastes into, since a consumer chatbot with no district data-privacy agreement isn’t under school control and her deletion doesn’t erase the vendor’s copy. The COPPA option is the tempting mix-up: COPPA governs online services collecting data from under-13 users, not a teacher sharing records — that’s FERPA territory. The safe workflow is to strip identifying details and use a district-covered tool.',
    },
    {
      question:
        'Your school wants 11-year-olds using AI during a research unit. Given COPPA and each tool’s age gate, which setup works?',
      options: [
        'A district-approved K-12 platform that runs under school-provided consent',
        'Free ChatGPT accounts created for students with school email addresses',
        'Closely supervised whole-class use of the teacher’s consumer Claude account',
        'Any tool works once parents sign the generic start-of-year technology form',
      ],
      correct: 0,
      explanation:
        'COPPA lets schools consent on parents’ behalf only for an educational purpose, and K-12 platforms like SchoolAI and MagicSchool are built to operate under exactly that provision — a teacher-projected activity with no student accounts sidesteps the question entirely. School email addresses are the tempting workaround, but ChatGPT’s consumer gate is 13+ regardless of email domain, and consumer Claude is 18+ even supervised on your account. A generic technology form isn’t the verifiable, tool-specific consent COPPA anticipates.',
    },
    {
      question:
        'Your one-page classroom policy allows yellow-tier AI on homework, but your district bans student AI use entirely. What wins, and why?',
      options: [
        'Your classroom policy, since you know your students and context best',
        'Whichever policy was adopted most recently, since it supersedes the older one',
        'The district policy — classroom rules may be stricter, but never looser',
        'State guidance overrides both, so follow the state tracker document exactly',
      ],
      correct: 2,
      explanation:
        'Your policy sits at the bottom of a stack — state guidance, then district policy, then your page — and each layer may only tighten the one above it. A district ban therefore beats your yellow tier, no matter how sound your reasoning. "You know your students best" is the tempting appeal, but knowing your students shapes how you implement rules, not whether they apply; recency isn’t authority; and most state documents are guidance, while district policy is the binding layer for your classroom.',
    },
  ],
};
