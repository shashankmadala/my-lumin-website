/* eslint-disable react/prop-types */
import { Fragment, useState, useMemo, useRef } from 'react';
import {
  ClipboardList,
  Lightbulb,
  BookOpen,
  MessagesSquare,
  Calculator,
  DoorOpen,
  ClipboardCheck,
  ShieldCheck,
  Megaphone,
  Lock,
  ChevronLeft,
  ChevronRight,
  Check,
  Copy,
  RotateCcw,
  Sparkles,
  Target,
  PartyPopper,
} from 'lucide-react';

const STEPS = ['Basics', 'Goal', 'AI help', 'Guardrails', 'Your plan'];

const DURATIONS = [30, 45, 60, 90];

const AI_HELPS = [
  {
    id: 'hook',
    icon: Lightbulb,
    title: 'Hook / do-now generator',
    desc: 'Three ready-to-run openers that spark curiosity in the first five minutes.',
  },
  {
    id: 'readings',
    icon: BookOpen,
    title: 'Differentiated readings (3 levels)',
    desc: 'The same passage at below-, on-, and above-grade reading levels so everyone can join the discussion.',
  },
  {
    id: 'discussion',
    icon: MessagesSquare,
    title: 'Discussion questions',
    desc: 'Questions laddered from recall to evaluation, with sample answers and follow-up probes.',
  },
  {
    id: 'practice',
    icon: Calculator,
    title: 'Practice problems + answer key',
    desc: 'A guided-to-independent problem set with full solutions and the most common student mistakes.',
  },
  {
    id: 'exit',
    icon: DoorOpen,
    title: 'Exit ticket',
    desc: 'A three-question check with a scoring guide you can sort in under five minutes.',
  },
  {
    id: 'rubric',
    icon: ClipboardCheck,
    title: 'Rubric',
    desc: 'A four-level rubric written in student-friendly "I can..." language.',
  },
];

const GUARDRAILS = [
  {
    id: 'verify',
    icon: ShieldCheck,
    title: 'I will verify all AI content before class',
    why: 'AI can be confidently wrong. A two-minute read-through catches factual slips before your students ever see them.',
    checklist:
      'Read and verify every AI-generated fact, example, and answer key before class',
  },
  {
    id: 'cite',
    icon: Megaphone,
    title: 'I will tell students where AI was used',
    why: 'Being transparent about your own AI use models academic honesty better than any lecture about it.',
    checklist: 'Tell students which parts of these materials were AI-drafted',
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'No student personal data goes into prompts',
    why: 'Student names, grades, and IEP details never belong in a prompt. This protects privacy and keeps you on the right side of FERPA-style rules.',
    checklist:
      'Keep student names, grades, and personal details out of every prompt',
  },
];

function buildPrompt(helpId, ctx) {
  const topic = ctx.topic.trim() || '[YOUR TOPIC]';
  const grade = ctx.grade.trim() || '[GRADE LEVEL]';
  const goal = ctx.goal.trim() || '[YOUR LEARNING GOAL]';
  const duration = ctx.duration;

  switch (helpId) {
    case 'hook':
      return `You are a creative ${grade} teacher. Write 3 possible 5-minute hook / do-now activities to open a ${duration}-minute lesson on ${topic}. The learning goal is: "${goal}". For each hook give: (1) a catchy title, (2) step-by-step teacher directions, (3) one open question to spark discussion, and (4) materials needed (assume only a whiteboard and projector). Keep the language appropriate for ${grade}, and make sure no hook requires prior knowledge of ${topic}.`;
    case 'readings':
      return `Write three versions of a short informational passage (about 250 words each) on ${topic} for a ${grade} class. Version A: below grade level - shorter sentences, key vocabulary bolded and defined in parentheses. Version B: at grade level. Version C: above grade level - richer vocabulary plus one extension paragraph. All three versions must cover the same core facts so students reading different versions can discuss together, and each must end with the SAME two comprehension questions. The learning goal is: "${goal}".`;
    case 'discussion':
      return `Generate 6 discussion questions on ${topic} for ${grade} students, ordered from recall, to application, to analysis, to evaluation. For each question include: (1) its thinking level, (2) one strong sample answer, and (3) one follow-up probe I can use if the class stalls. Every question should move students toward this goal: "${goal}". Avoid yes/no questions.`;
    case 'practice':
      return `Create a practice set on ${topic} for ${grade}: 8 problems that progress from guided to independent - 2 worked examples with every step shown, 4 standard problems, and 2 challenge problems. Then provide a SEPARATE answer key with full solutions and, for each problem, the single most likely student mistake and how I might address it. Align everything to this goal: "${goal}".`;
    case 'exit':
      return `Write a 3-question exit ticket for a ${duration}-minute ${grade} lesson on ${topic} with the goal: "${goal}". Question 1: a one-sentence recall question. Question 2: apply the idea to a brand-new example. Question 3: the sentence starter "One thing I'm still not sure about is...". Then add a quick scoring guide describing what a "got it" answer vs. a "needs reteach" answer looks like, so I can sort tickets in under 5 minutes.`;
    case 'rubric':
      return `Build a 4-level rubric (Beginning / Developing / Proficient / Advanced) for assessing ${grade} student work on ${topic}, aligned to this goal: "${goal}". Use 3-4 criteria rows, write descriptors in student-friendly "I can..." language, and add one sentence of ready-to-use feedback language for each level of each criterion.`;
    default:
      return '';
  }
}

export default function LessonPlanBuilder({ onComplete }) {
  const [step, setStep] = useState(0);
  const [topic, setTopic] = useState('');
  const [grade, setGrade] = useState('');
  const [duration, setDuration] = useState(45);
  const [goal, setGoal] = useState('');
  const [helps, setHelps] = useState([]);
  const [guardrails, setGuardrails] = useState(GUARDRAILS.map((g) => g.id));
  const [triedNext, setTriedNext] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [finished, setFinished] = useState(false);
  const completedRef = useRef(false);

  const planText = useMemo(() => {
    const t = topic.trim() || '[YOUR TOPIC]';
    const g = grade.trim() || '[GRADE LEVEL]';
    const lg = goal.trim() || '[YOUR LEARNING GOAL]';
    const chosen = AI_HELPS.filter((h) => helps.includes(h.id));
    const rails = GUARDRAILS.filter((r) => guardrails.includes(r.id));

    const lines = [];
    lines.push('==============================================');
    lines.push(`LESSON PLAN - ${t.toUpperCase()}`);
    lines.push(`Grade: ${g}  |  Duration: ${duration} min`);
    lines.push(`Learning goal: ${lg}`);
    lines.push('==============================================');
    lines.push('');
    lines.push('HOW TO USE THIS PLAN');
    lines.push('Paste each prompt below into your AI assistant, then review');
    lines.push('and edit the draft before class. You direct - AI drafts.');
    lines.push('');
    chosen.forEach((h, i) => {
      lines.push(`----- ${i + 1}. ${h.title.toUpperCase()} -----`);
      lines.push('Prompt to paste:');
      lines.push(buildPrompt(h.id, { topic, grade, duration, goal }));
      lines.push('');
      lines.push('Teacher notes / edits:');
      lines.push('_________________________________________');
      lines.push('');
    });
    if (chosen.length === 0) {
      lines.push('(No AI-help areas selected - go back to step 3 to pick some.)');
      lines.push('');
    }
    if (rails.length > 0) {
      lines.push('----- TEACHER CHECKLIST (before class) -----');
      rails.forEach((r) => lines.push(`[ ] ${r.checklist}`));
      lines.push('');
    }
    lines.push('Built with the Lumin AI Lesson Plan Builder');
    return lines.join('\n');
  }, [topic, grade, duration, goal, helps, guardrails]);

  const canAdvance = () => {
    if (step === 0) return topic.trim().length > 0;
    if (step === 2) return helps.length > 0;
    return true;
  };

  const goNext = () => {
    if (!canAdvance()) {
      setTriedNext(true);
      return;
    }
    setTriedNext(false);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setTriedNext(false);
    setStep((s) => Math.max(s - 1, 0));
  };

  const toggleHelp = (id) => {
    setHelps((prev) =>
      prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id]
    );
  };

  const toggleGuardrail = (id) => {
    setGuardrails((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const fireComplete = () => {
    if (!completedRef.current) {
      completedRef.current = true;
      if (typeof onComplete === 'function') onComplete();
    }
  };

  const handleCopy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(planText);
      ok = true;
    } catch {
      try {
        const ta = document.createElement('textarea');
        ta.value = planText;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand('copy');
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      setCopyFailed(false);
      setFinished(true);
      fireComplete();
      setTimeout(() => setCopied(false), 2500);
    } else {
      setCopyFailed(true);
    }
  };

  const reset = () => {
    setStep(0);
    setTopic('');
    setGrade('');
    setDuration(45);
    setGoal('');
    setHelps([]);
    setGuardrails(GUARDRAILS.map((g) => g.id));
    setTriedNext(false);
    setCopied(false);
    setCopyFailed(false);
    setFinished(false);
  };

  const inputClass =
    'w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 transition-colors';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="bg-violet-100 rounded-xl p-2.5 shrink-0">
          <ClipboardList className="w-6 h-6 text-violet-600" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            AI-Integrated Lesson Plan Builder
          </h2>
          <p className="text-sm text-gray-500">
            Answer five quick steps and walk away with a real, copy-ready plan
            plus expert prompts.
          </p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center mb-7 overflow-x-auto pb-1">
        {STEPS.map((label, i) => (
          <Fragment key={label}>
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  i < step
                    ? 'bg-violet-600 text-white'
                    : i === step
                      ? 'bg-violet-600 text-white ring-4 ring-violet-200'
                      : 'bg-gray-100 text-gray-400'
                }`}
              >
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span
                className={`mt-1.5 text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                  i <= step ? 'text-violet-700' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-1.5 sm:mx-2 mb-5 min-w-[16px] rounded transition-colors duration-300 ${
                  i < step ? 'bg-violet-500' : 'bg-gray-200'
                }`}
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Body */}
      <div className="min-h-[260px]">
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                What are you teaching? <span className="text-violet-600">*</span>
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder='e.g. "Photosynthesis" or "Two-step equations"'
                className={inputClass}
              />
              {triedNext && topic.trim().length === 0 && (
                <p className="mt-1.5 text-xs text-rose-600">
                  Add a topic first - everything in your plan is built around
                  it.
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Grade level
              </label>
              <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder='e.g. "7th grade" or "HS Biology"'
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                Lesson duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className={inputClass}
              >
                {DURATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d} minutes
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xs text-gray-500 bg-violet-50 rounded-xl px-4 py-3">
              Why this matters: specific inputs make specific prompts. An AI
              given &quot;7th grade, 45 minutes&quot; writes far more usable
              material than one given nothing.
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-violet-700 font-semibold text-sm">
              <Target className="w-4 h-4" /> One clear learning goal
            </div>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder='e.g. "Students can explain the inputs and outputs of photosynthesis"'
              className={inputClass}
            />
            <div className="text-xs text-gray-500 bg-violet-50 rounded-xl px-4 py-3 space-y-1">
              <p className="font-semibold text-violet-700">
                Tip: start with &quot;Students can...&quot;
              </p>
              <p>
                A goal like &quot;Students can solve two-step equations and
                check their answer&quot; gives the AI a target to aim every
                hook, question, and problem at. Vague goal in, vague materials
                out. (You can leave this blank - the plan will hold a
                placeholder for you.)
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Where should AI draft for you? Pick as many as you like - each one
              becomes a ready-to-paste prompt in your plan.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {AI_HELPS.map((h) => {
                const Icon = h.icon;
                const selected = helps.includes(h.id);
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => toggleHelp(h.id)}
                    className={`text-left rounded-xl border-2 p-4 transition-all duration-200 ${
                      selected
                        ? 'border-violet-500 bg-violet-50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-violet-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`rounded-lg p-2 shrink-0 transition-colors ${
                          selected ? 'bg-violet-600' : 'bg-gray-100'
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            selected ? 'text-white' : 'text-gray-500'
                          }`}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-gray-900">
                            {h.title}
                          </span>
                          {selected && (
                            <Check className="w-3.5 h-3.5 text-violet-600" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{h.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            {triedNext && helps.length === 0 && (
              <p className="text-xs text-rose-600">
                Pick at least one area - otherwise your plan would have no
                prompts in it.
              </p>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              These three commitments keep you in charge. They are pre-checked
              because they belong in every AI-assisted lesson.
            </p>
            {GUARDRAILS.map((r) => {
              const Icon = r.icon;
              const checked = guardrails.includes(r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => toggleGuardrail(r.id)}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all duration-200 ${
                    checked
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-gray-200 bg-white hover:border-violet-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 mt-0.5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        checked
                          ? 'bg-violet-600 border-violet-600'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {checked && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-violet-600" />
                        <span className="text-sm font-semibold text-gray-900">
                          {r.title}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{r.why}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            {finished && (
              <div className="rounded-xl bg-violet-50 border border-violet-200 p-4 flex items-start gap-3 transition-all duration-300">
                <PartyPopper className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-violet-800">
                    Plan copied - it is ready to use today.
                  </p>
                  <p className="text-xs text-violet-700 mt-1">
                    What you just learned: you stay the teacher - AI drafts, you
                    direct and verify. Every prompt in your plan asks for a
                    draft you will review, not a finished product.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-2 text-xs font-semibold text-violet-700 underline underline-offset-2 hover:text-violet-900"
                  >
                    Play again - build another plan
                  </button>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <Sparkles className="w-4 h-4 text-violet-600" />
                Your lesson-plan scaffold ({helps.length} prompt
                {helps.length === 1 ? '' : 's'})
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-violet-600 text-white hover:bg-violet-700 active:scale-95'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy full plan
                  </>
                )}
              </button>
            </div>
            {copyFailed && (
              <p className="text-xs text-rose-600">
                Your browser blocked automatic copying - select the text below
                and copy it manually (Ctrl/Cmd&nbsp;+&nbsp;C).
              </p>
            )}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 max-h-80 overflow-y-auto">
              <pre className="text-[11px] sm:text-xs leading-relaxed text-gray-800 whitespace-pre-wrap font-mono">
                {planText}
              </pre>
            </div>
            <p className="text-xs text-gray-500">
              Each prompt already includes your topic, grade, duration, and
              goal. Anything you left blank shows as a [PLACEHOLDER] to fill in
              later.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-gray-500">
            Step {step + 1} of {STEPS.length}
          </span>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-violet-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="inline-flex items-center gap-1 rounded-xl border border-gray-300 px-3.5 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-violet-400 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          {step < STEPS.length - 1 && (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-1 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-700 active:scale-95"
            >
              {step === STEPS.length - 2 ? 'Build my plan' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
