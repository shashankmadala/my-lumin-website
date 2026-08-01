/* eslint-disable react/prop-types */
import { useState, useMemo, useEffect, useRef } from 'react';
import {
  GraduationCap,
  ClipboardCopy,
  Check,
  RotateCcw,
  Sparkles,
  Lightbulb,
  PartyPopper,
  BookOpen,
  Layers,
  HelpCircle,
  Gauge,
} from 'lucide-react';

// "Teacher Prompt Studio" — builds REAL, copy-paste-ready prompts for teachers.
// The learner picks grade band / subject / task, then layers on prompt-engineering
// "ingredients" and watches the prompt (and its quality meter) level up.

const GRADE_BANDS = ['K-2', '3-5', '6-8', '9-12'];

const SUBJECTS = ['ELA', 'Math', 'Science', 'Social Studies', 'World Language', 'Other'];

const TASKS = [
  { id: 'lesson', label: 'Lesson plan' },
  { id: 'differentiate', label: 'Differentiated text' },
  { id: 'rubric', label: 'Rubric' },
  { id: 'quiz', label: 'Quiz questions' },
  { id: 'parent', label: 'Parent email' },
  { id: 'iep', label: 'IEP-friendly scaffolds' },
  { id: 'exit', label: 'Exit tickets' },
];

// Core task templates. {CLASS} is replaced with e.g. "6-8 Science" at build time.
// Bracketed [PLACEHOLDERS] are intentionally left for the teacher to fill in.
const TASK_TEMPLATES = {
  lesson:
    'Create a complete lesson plan on [TOPIC] for my {CLASS} class. Include: a clear learning objective, a 5-minute warm-up or hook, direct instruction notes, a guided practice activity, an independent practice task, and a closing check for understanding — with rough timings that fit a [45]-minute period.',
  differentiate:
    'I will paste a text below. Rewrite it at three reading levels for my {CLASS} class: one below grade level, one on grade level, and one above grade level. Keep every version factually identical, preserve the key academic vocabulary (add a mini-glossary to the below-level version), and label each version clearly.\n\nText to differentiate:\n[PASTE TEXT HERE]',
  rubric:
    'Create a scoring rubric for [ASSIGNMENT NAME] in my {CLASS} class. Use 4 performance levels (Beginning, Developing, Proficient, Exemplary) and 4-5 criteria rows. Write each descriptor in specific, observable, student-friendly language — a student should be able to read a cell and know exactly what to do to move up one level.',
  quiz:
    'Write [10] quiz questions on [TOPIC] for my {CLASS} class. Mix the types: mostly multiple choice (make the wrong answers plausible — base each distractor on a real student misconception), plus 2 short-answer and 1 extended-response question. Include an answer key with a one-sentence explanation of WHY each answer is correct.',
  parent:
    'Draft an email to the parent/guardian of a student in my {CLASS} class about [SITUATION — e.g., missing assignments, a great week, a behavior concern]. Tone: warm, professional, and partnership-focused. Open with something specific and positive about the student, describe the situation factually and without judgment, and close with one concrete next step plus an invitation to talk. Do not use educational jargon.',
  iep:
    'I teach a {CLASS} class that includes students with IEPs. For the assignment I describe below, suggest concrete scaffolds and accommodations: chunked directions, sentence starters/frames, a simple graphic organizer (describe it so I can recreate it), key-vocabulary support, and a reduced-length option. Important: keep the rigor of the learning goal itself — scaffold the access, not the thinking.\n\nAssignment:\n[DESCRIBE THE ASSIGNMENT]',
  exit:
    "Write 5 exit-ticket questions for today's {CLASS} lesson on [TOPIC]: 2 quick recall questions, 2 application questions that require using the idea in a new situation, and 1 self-assessment question (e.g., \"One thing I'm still unsure about is…\"). Every question must be answerable in under 2 minutes.",
};

const INGREDIENTS = [
  {
    id: 'standard',
    label: 'Align to a standard',
    sub: 'Adds a [STANDARD] placeholder',
    clause:
      'Align everything to this standard and reference it explicitly in the output: [STANDARD — e.g., CCSS.ELA-LITERACY.RI.6.2 or NGSS MS-LS1-6].',
    tip: 'Anchoring to a standard stops the AI from producing generically "nice" content that does not match what you are actually accountable for teaching.',
  },
  {
    id: 'classContext',
    label: 'Specify class context',
    sub: 'Class size, time, student needs',
    clause:
      'My class context: [NUMBER] students, [PERIOD LENGTH]-minute periods, and these notable needs: [e.g., 4 multilingual learners, a wide range of reading levels, limited device access]. Tailor everything to this context.',
    tip: 'Class size, period length, and student needs are what turn a generic answer into one that actually fits YOUR room.',
  },
  {
    id: 'format',
    label: 'Set output format',
    sub: 'Table, sections, outline…',
    clause:
      'Format the output as [e.g., a table / numbered sections with bold headers / a bulleted outline] so I can paste it directly into my planning document without reformatting.',
    tip: 'Telling the AI the exact shape you need (table, outline, sections) saves you the tedious reformatting step afterward.',
  },
  {
    id: 'threeOptions',
    label: 'Request 3 options',
    sub: 'Choices with tradeoffs',
    clause:
      'Give me 3 distinctly different options, and after each one add a one-line note on its tradeoffs, so I can pick the best fit rather than settle for your first idea.',
    tip: 'Asking for three options with tradeoffs turns the AI into a brainstorming partner instead of a single-answer vending machine.',
  },
  {
    id: 'clarifying',
    label: 'Ask ME clarifying questions first',
    sub: 'The pro move',
    clause:
      'IMPORTANT: Before you produce anything, ask me up to 5 clarifying questions about my students, constraints, and goals. Wait for my answers, then create the final version based on what I tell you.',
    tip: 'The single biggest upgrade: the AI interviews you first, so the final output is built on your real constraints instead of its guesses.',
    star: true,
  },
  {
    id: 'length',
    label: 'Set length / reading level',
    sub: 'Prevents walls of text',
    clause:
      'Keep the total output under [e.g., 400 words], and write any student-facing text at a [e.g., 4th-grade] reading level.',
    tip: 'Length caps and reading-level targets prevent walls of text and keep student-facing material genuinely accessible.',
  },
];

const METER_LABELS = ['Bare-bones', 'Getting there', 'Good', 'Strong', 'Very strong', 'Pro-level', 'Pro-level'];

export default function EducatorPromptLab({ onComplete }) {
  const [gradeBand, setGradeBand] = useState('6-8');
  const [subject, setSubject] = useState('Science');
  const [taskId, setTaskId] = useState('lesson');
  const [enabled, setEnabled] = useState({});
  const [lastToggled, setLastToggled] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [copies, setCopies] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const activeCount = useMemo(
    () => INGREDIENTS.filter((ing) => enabled[ing.id]).length,
    [enabled]
  );

  const promptText = useMemo(() => {
    const classPhrase =
      subject === 'Other' ? `${gradeBand} [SUBJECT]` : `${gradeBand} ${subject}`;
    const role = `You are an experienced ${classPhrase} teacher and instructional coach.`;
    const body = TASK_TEMPLATES[taskId].replaceAll('{CLASS}', classPhrase);
    const clauses = INGREDIENTS.filter((ing) => enabled[ing.id] && ing.id !== 'clarifying').map(
      (ing) => ing.clause
    );
    // The clarifying-questions instruction always goes LAST so the model sees it as the immediate next step.
    const closing = enabled.clarifying
      ? INGREDIENTS.find((ing) => ing.id === 'clarifying').clause
      : '';
    return [role, '', body, ...(clauses.length ? ['', ...clauses] : []), ...(closing ? ['', closing] : [])].join('\n');
  }, [gradeBand, subject, taskId, enabled]);

  const toggleIngredient = (id) => {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
    setLastToggled(id);
    setCopied(false);
    setCopyError(false);
  };

  const handleCopy = async () => {
    let ok = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(promptText);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      setCopyError(true);
      return;
    }
    setCopyError(false);
    setCopied(true);
    setCopies((c) => c + 1);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
    if (activeCount >= 4) {
      setCelebrating(true);
      if (!completed) {
        setCompleted(true);
        if (typeof onComplete === 'function') onComplete();
      }
    }
  };

  const handleReset = () => {
    setGradeBand('6-8');
    setSubject('Science');
    setTaskId('lesson');
    setEnabled({});
    setLastToggled(null);
    setCopied(false);
    setCopyError(false);
    setCopies(0);
    setCelebrating(false);
    // `completed` stays true so onComplete never fires twice
  };

  const meterPct = Math.min(100, Math.round((activeCount / 6) * 100));
  const activeTip = lastToggled && enabled[lastToggled] ? INGREDIENTS.find((i) => i.id === lastToggled) : null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-violet-100 text-violet-600 shrink-0">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Teacher Prompt Studio</h3>
          <p className="text-sm text-gray-500">
            Build a genuinely great AI prompt for a real teaching task — then copy it straight into ChatGPT, Claude, or Gemini.
          </p>
        </div>
      </div>

      {celebrating ? (
        /* ---- Celebration state ---- */
        <div className="text-center py-8 px-4">
          <div className="inline-flex p-4 rounded-full bg-violet-100 text-violet-600 mb-4">
            <PartyPopper className="w-10 h-10" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Copied — that is a pro-level prompt.</h4>
          <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
            You stacked {activeCount} ingredients onto a solid task template. Paste it into your AI tool, fill the
            [BRACKETS], and see the difference.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left flex gap-3">
            <Lightbulb className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
            <p className="text-sm text-violet-900">
              <span className="font-semibold">What you just learned:</span> The &quot;ask me clarifying questions
              first&quot; move is the single biggest upgrade most teachers never use.
            </p>
          </div>
          <button
            onClick={() => setCelebrating(false)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Build another prompt
          </button>
        </div>
      ) : (
        <>
          {/* Grade band + Subject */}
          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2 block">Grade band</span>
              <div className="flex flex-wrap gap-1.5">
                {GRADE_BANDS.map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      setGradeBand(g);
                      setCopied(false);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-sm border transition-all duration-150 ${
                      gradeBand === g
                        ? 'border-violet-500 bg-violet-50 text-violet-800 font-semibold shadow-sm'
                        : 'border-gray-200 text-gray-600 hover:border-violet-300 hover:bg-violet-50/50'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2 block">Subject</span>
              <div className="flex flex-wrap gap-1.5">
                {SUBJECTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSubject(s);
                      setCopied(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-150 ${
                      subject === s
                        ? 'border-violet-500 bg-violet-50 text-violet-800 font-semibold shadow-sm'
                        : 'border-gray-200 text-gray-600 hover:border-violet-300 hover:bg-violet-50/50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Task */}
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> What do you need?
            </span>
            <div className="flex flex-wrap gap-1.5">
              {TASKS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTaskId(t.id);
                    setCopied(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-150 ${
                    taskId === t.id
                      ? 'border-violet-500 bg-violet-600 text-white font-semibold shadow-sm'
                      : 'border-gray-200 text-gray-600 hover:border-violet-300 hover:bg-violet-50/50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredient toggles */}
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Power-up ingredients — each one upgrades the prompt
            </span>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {INGREDIENTS.map((ing) => {
                const on = !!enabled[ing.id];
                return (
                  <button
                    key={ing.id}
                    onClick={() => toggleIngredient(ing.id)}
                    className={`text-left px-3 py-2.5 rounded-xl border flex items-start gap-2.5 transition-all duration-150 ${
                      on
                        ? 'border-violet-500 bg-violet-50 shadow-sm'
                        : 'border-gray-200 hover:border-violet-300 hover:bg-violet-50/40'
                    }`}
                    aria-pressed={on}
                  >
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                        on ? 'bg-violet-600 border-violet-600 text-white' : 'border-gray-300 bg-white text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>
                      <span className={`text-sm font-medium block ${on ? 'text-violet-900' : 'text-gray-700'}`}>
                        {ing.label}
                        {ing.star && (
                          <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wide text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full align-middle">
                            Pro move
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-gray-400">{ing.sub}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Teaching tip for the last-toggled ingredient */}
            {activeTip && (
              <div className="mt-2.5 bg-violet-50 border border-violet-200 rounded-xl px-3.5 py-2.5 flex items-start gap-2 transition-all">
                <HelpCircle className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                <p className="text-xs text-violet-900">
                  <span className="font-semibold">Why &quot;{activeTip.label}&quot; works:</span> {activeTip.tip}
                </p>
              </div>
            )}
          </div>

          {/* Quality meter */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5" /> Prompt strength
              </span>
              <span className="text-xs font-semibold text-violet-700">
                {METER_LABELS[activeCount]} · {activeCount}/6
              </span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-400 to-violet-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.max(meterPct, 6)}%` }}
              />
            </div>
            {activeCount < 4 && (
              <p className="text-[11px] text-gray-400 mt-1">
                Add {4 - activeCount} more ingredient{4 - activeCount === 1 ? '' : 's'} to reach copy-worthy pro strength.
              </p>
            )}
          </div>

          {/* Live prompt preview */}
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2 block">
              Your prompt — [BRACKETS] are the blanks you fill in
            </span>
            <div className="bg-gray-900 text-gray-100 rounded-xl p-4 text-[13px] font-mono leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto transition-all">
              {promptText}
            </div>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all active:scale-[0.99] ${
              copied ? 'bg-emerald-600 text-white' : 'bg-violet-600 text-white hover:bg-violet-700'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <ClipboardCopy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy prompt'}
          </button>
          {copyError && (
            <p className="text-xs text-red-600 mt-2 text-center">
              Your browser blocked automatic copying — select the prompt text above and copy it manually (Ctrl/Cmd+C).
            </p>
          )}
        </>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 mt-5 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          Ingredients: <span className="font-semibold text-gray-700">{activeCount}/6</span> · Copies:{' '}
          <span className="font-semibold text-gray-700">{copies}</span>
        </span>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-violet-600 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>
    </div>
  );
}
