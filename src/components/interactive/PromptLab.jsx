/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import {
  Wand2,
  Play,
  Star,
  RotateCcw,
  Sparkles,
  MessageSquare,
  Lightbulb,
  PartyPopper,
  User,
  Target,
  Info,
  LayoutList,
} from 'lucide-react';

// "Prompt Power-Up" — teaches prompt specificity by letting students assemble
// a prompt from Role + Task + Context + Format pieces and seeing how the
// simulated AI answer improves as the prompt gets more specific.

const ROLE_OPTIONS = [
  { label: '(none)', value: '' },
  { label: 'Friendly science tutor', value: 'You are a friendly science tutor.' },
  { label: 'Study coach for teens', value: 'You are a study coach for teens.' },
];

const TASK_OPTIONS = [
  { label: 'Help me with photosynthesis', value: 'Help me with photosynthesis.', specific: false },
  { label: 'Explain photosynthesis step by step', value: 'Explain photosynthesis step by step.', specific: true },
  { label: 'Quiz me on photosynthesis', value: 'Quiz me on photosynthesis.', specific: true },
];

const CONTEXT_OPTIONS = [
  { label: '(none)', value: '' },
  {
    label: '8th grader, confused by the chemistry',
    value: "I'm in 8th grade and get confused about the chemistry part.",
    key: 'grade',
  },
  {
    label: 'I learn best with sports analogies',
    value: 'I learn best with sports analogies.',
    key: 'sports',
  },
];

const FORMAT_OPTIONS = [
  { label: '(none)', value: '' },
  { label: 'Use a numbered list', value: 'Use a numbered list.', key: 'list' },
  { label: 'Under 150 words + an example', value: 'Keep it under 150 words and include an example.', key: 'short' },
];

// ---- Simulated AI responses -------------------------------------------------

const VAGUE_RESPONSE = {
  tier: 'vague',
  title: 'The AI had to guess…',
  text:
    'Photosynthesis is the process by which plants make food. It is very important for life on Earth. Plants use sunlight, water, and carbon dioxide. It happens in the leaves. Let me know if you want more information about photosynthesis or any other topic!',
  note: 'Generic, textbook-ish, and not aimed at you. The AI had almost nothing to work with.',
};

function buildDecentResponse(taskLabel) {
  const isQuiz = taskLabel.startsWith('Quiz');
  if (isQuiz) {
    return {
      tier: 'decent',
      title: 'Better — the AI knows WHAT to do',
      text:
        'Sure, here are some questions on photosynthesis:\n1. What gas do plants take in from the air?\n2. What is the green pigment in leaves called?\n3. Name the two main products of photosynthesis.\nAnswers: 1) Carbon dioxide, 2) Chlorophyll, 3) Glucose and oxygen. Want harder questions?',
      note: 'A real quiz appears, but the difficulty is a guess — it might be too easy or too hard for you.',
    };
  }
  return {
    tier: 'decent',
    title: 'Better — the AI knows WHAT to do',
    text:
      'Here is photosynthesis step by step:\n1. Sunlight hits the chlorophyll in the leaves.\n2. Roots pull up water; leaves take in carbon dioxide.\n3. Light energy splits water and powers reactions.\n4. The plant builds glucose (sugar) for energy.\n5. Oxygen is released as a by-product.\nEach step depends on the one before it.',
    note: "The steps are clear, but the AI still doesn't know who YOU are — the level and style are one-size-fits-all.",
  };
}

function buildExcellentResponse(taskLabel, contextKey, formatKey) {
  const isQuiz = taskLabel.startsWith('Quiz');
  const sports = contextKey === 'sports';

  let text;
  if (isQuiz && sports) {
    text =
      "Game on! Think of this quiz like practice drills — short reps that build skill:\n1. Warm-up: Which 'player' captures sunlight for the plant? (Hint: it makes leaves green.)\n2. Passing drill: Water and CO2 are the 'passes' coming in — what 'goal' (sugar) does the plant score with them?\n3. Championship round: Why is oxygen like the crowd's cheer — produced by the play, but not the goal itself?\nAnswers: 1) Chlorophyll, 2) Glucose, 3) Oxygen is a by-product, not the purpose. You went 3-for-3? That's a hat trick!";
  } else if (isQuiz) {
    text =
      'Since the chemistry part trips you up, this quiz zooms in on it — at an 8th-grade level:\n1. In the equation 6CO2 + 6H2O -> C6H12O6 + 6O2, which molecule is the sugar?\n2. Where does the oxygen released by the plant actually come from — the CO2 or the H2O?\n3. Why does the plant need light energy to make this reaction happen?\nAnswers: 1) C6H12O6 (glucose), 2) The water — that surprises most students!, 3) Building sugar stores energy, and that energy has to come from somewhere: the Sun.';
  } else if (sports) {
    text =
      "Think of a leaf as a team running one perfectly practiced play:\n1. Kickoff: Sunlight is the starting whistle — chlorophyll 'catches' it like a receiver.\n2. The assists: Roots pass water up; leaves pull in CO2 from the air. Two assists, one play.\n3. The play: Light energy powers the leaf to snap those molecules apart and rebuild them.\n4. The goal: Glucose — the energy 'points' the plant banks to grow.\n5. The celebration: Oxygen is released, like high-fives after the score.\nExample: on a sunny game day a maple leaf runs this play millions of times an hour.";
  } else {
    text =
      "Here's photosynthesis for an 8th grader, with extra care on the chemistry part:\n1. Sunlight lands on chlorophyll — this is just energy arriving, no chemistry yet.\n2. Inputs: 6 CO2 (from air) + 6 H2O (from roots). Don't panic at the formula — it's just 'six carbon dioxides and six waters'.\n3. The chemistry: light energy breaks the water apart. Chemistry here only means rearranging atoms, like LEGO bricks.\n4. The atoms rebuild into ONE glucose (C6H12O6) — the plant's food.\n5. Leftover oxygen (6 O2) exits the leaf — that's what you breathe.\nExample: a single oak leaf reruns this rearrangement trillions of times on a sunny day.";
  }

  let note;
  if (sports) {
    note = 'See how the whole answer became a sports play? That happened ONLY because you told the AI how you learn.';
  } else {
    note = 'The answer slowed down exactly where you said you get confused — because you told it your grade and sticking point.';
  }
  if (formatKey === 'list') {
    note += ' And the numbered list you asked for makes it easy to review step by step.';
  } else if (formatKey === 'short') {
    note += ' It also stayed short and packed in a concrete example, exactly as you requested.';
  }

  return { tier: 'excellent', title: 'Excellent — this answer was built FOR you', text, note };
}

// ---- Component --------------------------------------------------------------

export default function PromptLab({ onComplete }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [taskIdx, setTaskIdx] = useState(0);
  const [contextIdx, setContextIdx] = useState(0);
  const [formatIdx, setFormatIdx] = useState(0);
  const [response, setResponse] = useState(null);
  const [runs, setRuns] = useState(0);
  const [bestStars, setBestStars] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  const role = ROLE_OPTIONS[roleIdx];
  const task = TASK_OPTIONS[taskIdx];
  const context = CONTEXT_OPTIONS[contextIdx];
  const format = FORMAT_OPTIONS[formatIdx];

  const promptText = useMemo(() => {
    return [role.value, task.value, context.value, format.value].filter(Boolean).join(' ');
  }, [role, task, context, format]);

  // Score: 1 star base + 1 per specific ingredient (role, specific task, context, format)
  const stars = useMemo(() => {
    let s = 1;
    if (role.value) s += 1;
    if (task.specific) s += 1;
    if (context.value) s += 1;
    if (format.value) s += 1;
    return s;
  }, [role, task, context, format]);

  const feedbackChips = useMemo(() => {
    const chips = [];
    if (role.value) {
      chips.push({ good: true, text: 'Giving the AI a role sets a helpful, age-appropriate tone.' });
    } else {
      chips.push({ good: false, text: 'No role yet — the AI defaults to a bland, generic voice.' });
    }
    if (task.specific) {
      chips.push({ good: true, text: `"${task.label}" is a clear, doable task — no guessing needed.` });
    } else {
      chips.push({ good: false, text: '"Help me with…" is fuzzy. Help how? Explain? Quiz? Summarize?' });
    }
    if (context.key === 'grade') {
      chips.push({ good: true, text: 'Adding your grade level and sticking point made the answer age-appropriate and targeted.' });
    } else if (context.key === 'sports') {
      chips.push({ good: true, text: 'Sharing how you learn lets the AI translate the science into your language.' });
    } else {
      chips.push({ good: false, text: 'No context — the AI has no idea who it is talking to.' });
    }
    if (format.key === 'list') {
      chips.push({ good: true, text: 'Asking for a numbered list makes the answer scannable and study-ready.' });
    } else if (format.key === 'short') {
      chips.push({ good: true, text: 'A length limit plus an example keeps the answer tight and concrete.' });
    } else {
      chips.push({ good: false, text: 'No format request — you get whatever shape the AI feels like.' });
    }
    return chips;
  }, [role, task, context, format]);

  const handleRun = () => {
    let resp;
    if (stars <= 2) {
      resp = VAGUE_RESPONSE;
    } else if (stars <= 3) {
      resp = buildDecentResponse(task.label);
    } else {
      resp = buildExcellentResponse(task.label, context.key, format.key);
    }
    setResponse(resp);
    setRuns((r) => r + 1);
    if (stars > bestStars) setBestStars(stars);
    if (stars === 5 && !completed) {
      setCompleted(true);
      setCelebrating(true);
      if (typeof onComplete === 'function') onComplete();
    } else if (stars === 5) {
      setCelebrating(true);
    }
  };

  const handleReset = () => {
    setRoleIdx(0);
    setTaskIdx(0);
    setContextIdx(0);
    setFormatIdx(0);
    setResponse(null);
    setRuns(0);
    setBestStars(0);
    setCelebrating(false);
    // `completed` stays true so onComplete never fires twice
  };

  const tierStyles = {
    vague: 'border-gray-300 bg-gray-50',
    decent: 'border-amber-300 bg-amber-50',
    excellent: 'border-emerald-300 bg-emerald-50',
  };
  const tierBadge = {
    vague: 'bg-gray-200 text-gray-700',
    decent: 'bg-amber-200 text-amber-800',
    excellent: 'bg-emerald-200 text-emerald-800',
  };

  const pickerGroups = [
    { name: 'Role', icon: User, options: ROLE_OPTIONS, idx: roleIdx, set: setRoleIdx, hint: 'Who should the AI be?' },
    { name: 'Task', icon: Target, options: TASK_OPTIONS, idx: taskIdx, set: setTaskIdx, hint: 'What exactly do you want?' },
    { name: 'Context', icon: Info, options: CONTEXT_OPTIONS, idx: contextIdx, set: setContextIdx, hint: 'What should it know about you?' },
    { name: 'Format', icon: LayoutList, options: FORMAT_OPTIONS, idx: formatIdx, set: setFormatIdx, hint: 'What shape should the answer take?' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0">
          <Wand2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Prompt Power-Up</h3>
          <p className="text-sm text-gray-500">
            Build a prompt piece by piece, run it, and watch the AI&apos;s answer improve as you get more specific.
          </p>
        </div>
      </div>

      {celebrating ? (
        /* ---- Celebration state ---- */
        <div className="text-center py-8 px-4">
          <div className="inline-flex p-4 rounded-full bg-emerald-100 text-emerald-600 mb-4">
            <PartyPopper className="w-10 h-10" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">5-star prompt! You cracked the code.</h4>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left flex gap-3">
            <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-900">
              <span className="font-semibold">What you just learned:</span> Vague in, vague out. Specific prompts with
              role, context, and format get 10x better answers.
            </p>
          </div>
          <button
            onClick={() => setCelebrating(false)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Play again
          </button>
        </div>
      ) : (
        <>
          {/* Pickers */}
          <div className="grid gap-4 sm:grid-cols-2 mb-5">
            {pickerGroups.map((g) => (
              <div key={g.name} className="border border-gray-200 rounded-xl p-3.5">
                <div className="flex items-center gap-2 mb-1">
                  <g.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">{g.name}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2.5">{g.hint}</p>
                <div className="flex flex-col gap-1.5">
                  {g.options.map((opt, i) => (
                    <button
                      key={opt.label}
                      onClick={() => {
                        g.set(i);
                        setResponse(null);
                      }}
                      className={`text-left text-sm px-3 py-2 rounded-lg border transition-all duration-150 ${
                        g.idx === i
                          ? 'border-blue-500 bg-blue-50 text-blue-800 font-medium shadow-sm'
                          : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Live prompt preview */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" /> Your prompt
              </span>
              <div className="flex items-center gap-0.5" aria-label={`Prompt quality: ${stars} of 5 stars`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-colors duration-200 ${
                      i <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-xl p-4 text-sm font-mono leading-relaxed min-h-[3.5rem] transition-all">
              {promptText || <span className="text-gray-500 italic">Pick some pieces above to build your prompt…</span>}
            </div>
          </div>

          {/* Feedback chips */}
          <div className="flex flex-col gap-1.5 mb-5">
            {feedbackChips.map((c, i) => (
              <div
                key={i}
                className={`text-xs px-3 py-1.5 rounded-lg flex items-start gap-2 transition-colors ${
                  c.good ? 'bg-emerald-50 text-emerald-800' : 'bg-gray-50 text-gray-500'
                }`}
              >
                <span className="mt-0.5 shrink-0">{c.good ? '✓' : '○'}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>

          {/* Run button */}
          <button
            onClick={handleRun}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-[0.99] transition-all mb-5"
          >
            <Play className="w-4 h-4" />
            Run prompt
          </button>

          {/* Simulated response */}
          {response && (
            <div className={`border rounded-xl p-4 mb-5 transition-all duration-300 ${tierStyles[response.tier]}`}>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${tierBadge[response.tier]}`}>
                  {response.tier}
                </span>
                <span className="text-sm font-semibold text-gray-800">{response.title}</span>
              </div>
              <div className="bg-white/70 rounded-lg p-3 mb-3 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {response.text}
              </div>
              <p className="text-xs text-gray-600 flex items-start gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-600" />
                <span>{response.note}</span>
              </p>
              {response.tier !== 'excellent' && (
                <p className="text-xs font-medium text-blue-700 mt-2">
                  Try adding {!role.value ? 'a role, ' : ''}
                  {!task.specific ? 'a more specific task, ' : ''}
                  {!context.value ? 'some context about you, ' : ''}
                  {!format.value ? 'a format request, ' : ''}
                  then run it again — watch the stars climb.
                </p>
              )}
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          Runs: <span className="font-semibold text-gray-700">{runs}</span>
          {bestStars > 0 && (
            <>
              {' '}· Best: <span className="font-semibold text-gray-700">{bestStars}/5 stars</span>
            </>
          )}
        </span>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>
    </div>
  );
}
