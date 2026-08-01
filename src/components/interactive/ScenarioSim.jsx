import { useMemo, useRef, useState } from 'react';
import {
  Scale,
  BookOpen,
  Calculator,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Lightbulb,
  ArrowRight,
  RotateCcw,
  Trophy,
} from 'lucide-react';

const DEFAULT_INTRO =
  "You're a student with an AI assistant one tab away. In each scenario, pick what you'd actually do — the best answer is rarely the obvious one.";

const DEFAULT_SCENARIOS = [
  {
    situation:
      "It's 9pm and your English essay on To Kill a Mockingbird is due tomorrow morning. You've read the book, but you're staring at a blank page with no idea how to start.",
    options: [
      {
        text: 'Ask the AI to help you brainstorm themes from the book, then pick an idea you actually believe and outline it in your own words.',
        quality: 'best',
        feedback:
          "This keeps the thinking yours. Using AI to spark ideas is like talking to a librarian or a friend — it gets you unstuck, but the argument, the outline, and every sentence still come from you. You'll learn the material, and you can defend every word you turn in.",
      },
      {
        text: 'Ask the AI to write one sample introduction so you can see what a strong opening looks like, then close the tab and write your own.',
        quality: 'ok',
        feedback:
          "This is a gray area — and that's the point. Seeing an example can genuinely teach you structure, but it's risky: once you've read the AI's intro, it's very hard not to echo its phrasing. Brainstorming ideas (instead of reading finished text) would have taught you just as much with far less risk.",
      },
      {
        text: 'Ask the AI to write the whole essay, then swap in some of your own vocabulary so it sounds more like you.',
        quality: 'poor',
        feedback:
          "Changing words doesn't change whose thinking it is — this is plagiarism with extra steps. You'd turn in an argument you never made and learn nothing about writing. The blank-page panic is real, but the fix is getting help thinking, not outsourcing the thinking.",
      },
    ],
  },
  {
    situation:
      "You've solved a tough algebra problem three times and keep getting x = 4, but the textbook's answer key says x = 7. You still have ten more problems to go tonight.",
    options: [
      {
        text: 'Paste in your work and ask: "Here are my steps — point to the first place my reasoning goes wrong, but don\'t tell me the answer."',
        quality: 'best',
        feedback:
          'This is exactly what great tutors do: find the misconception, not just the mistake. By asking the AI to locate your first wrong step — and to hold back the answer — you stay the one doing the math. You fix the actual gap in your understanding, which is what the next ten problems are secretly testing.',
      },
      {
        text: "Ask the AI for just the final answer, so you can tell whether it's you or the answer key that's wrong.",
        quality: 'ok',
        feedback:
          "Reasonable — answer keys really do have typos, and checking one data point isn't cheating. But notice what you don't get: if the key turns out to be right, you still have no idea where your reasoning broke, so you'll likely repeat the mistake. Asking the AI to critique your steps would have answered both questions at once.",
      },
      {
        text: 'Ask the AI for the complete worked solution and copy it down, so you can move on to the other ten problems.',
        quality: 'poor',
        feedback:
          "Copying a worked solution feels efficient, but homework isn't a delivery job — it's practice. The misconception that gave you x = 4 is still in your head, and it will show up on the test, where there's no AI. Ten problems done with a broken method is worth less than three done with a fixed one.",
      },
    ],
  },
  {
    situation:
      'Your history teacher assigns a take-home quiz and says nothing about whether AI tools are allowed. Half your class group chat says: "Nothing was said, so it\'s fine."',
    options: [
      {
        text: 'Ask the teacher before the quiz: "Are AI tools okay to use on this, and if so, how?"',
        quality: 'best',
        feedback:
          'Silence is not permission — and this question costs you thirty seconds. Asking protects you from an accidental integrity violation, gets your whole class a clear rule, and shows your teacher you take honest work seriously. When a policy is unclear, the person who wrote the assignment is the right source — not the group chat.',
      },
      {
        text: 'Use AI only to quiz yourself on the material beforehand, then take the quiz completely on your own.',
        quality: 'ok',
        feedback:
          'A safe, honest line to draw — studying with AI beforehand is almost always fine, and taking the quiz solo means your answers are truly yours. The one thing missing: "almost always fine" is not the same as knowing. A quick question to the teacher would have removed all doubt, for you and for everyone else.',
      },
      {
        text: 'Go with the group chat: nothing was said, so using AI during the quiz must be allowed.',
        quality: 'poor',
        feedback:
          '"Nobody said I couldn\'t" is the weakest defense in academic integrity. A quiz measures what you know, so the default assumption should be no outside help unless the teacher says otherwise. If you guess wrong here, "the group chat said so" won\'t protect you. When your integrity record is on the line: verify, don\'t assume.',
      },
    ],
  },
];

const DEFAULT_TAKEAWAY =
  'Good AI use in school comes down to one question: is the AI helping you think, or thinking for you? Get help with ideas, feedback, and understanding — but make sure the work you turn in reflects your own thinking. And when the rules are unclear, ask.';

const QUALITY_META = {
  best: {
    points: 2,
    label: 'Best call',
    Icon: CheckCircle2,
    btn: 'border-green-500 bg-green-50 text-green-900 ring-2 ring-green-200',
    panel: 'border-green-200 bg-green-50',
    accent: 'text-green-700',
    badge: 'bg-green-100 text-green-700',
  },
  ok: {
    points: 1,
    label: 'Decent instinct',
    Icon: AlertTriangle,
    btn: 'border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-200',
    panel: 'border-amber-200 bg-amber-50',
    accent: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
  },
  poor: {
    points: 0,
    label: 'Risky move',
    Icon: XCircle,
    btn: 'border-red-500 bg-red-50 text-red-900 ring-2 ring-red-200',
    panel: 'border-red-200 bg-red-50',
    accent: 'text-red-700',
    badge: 'bg-red-100 text-red-700',
  },
};

const SCENE_ICONS = [BookOpen, Calculator, GraduationCap];

function shuffleArray(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function ScenarioSim({
  title = 'What would you do?',
  intro = DEFAULT_INTRO,
  scenarios = DEFAULT_SCENARIOS,
  onComplete,
}) {
  const [resetKey, setResetKey] = useState(0);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null); // index into the shuffled options
  const [history, setHistory] = useState([]); // { quality, points, optionText }
  const [finished, setFinished] = useState(false);
  const completedOnce = useRef(false);

  // Re-shuffle option order each playthrough so the best answer isn't always in one slot.
  // resetKey is read here so a reset triggers a fresh shuffle.
  const deck = useMemo(() => {
    void resetKey;
    return (scenarios || []).map((s) => ({
      ...s,
      options: shuffleArray(s.options || []),
    }));
  }, [scenarios, resetKey]);

  const total = deck.length;
  const maxPoints = total * 2;
  const points = history.reduce((sum, h) => sum + h.points, 0);

  const reset = () => {
    setResetKey((k) => k + 1);
    setIndex(0);
    setPicked(null);
    setHistory([]);
    setFinished(false);
  };

  if (total === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center text-gray-500">
        No scenarios to play yet — pass a scenarios prop with at least one scenario.
      </div>
    );
  }

  const scenario = deck[Math.min(index, total - 1)];
  const SceneIcon = SCENE_ICONS[index % SCENE_ICONS.length];
  const chosen = picked !== null ? scenario.options[picked] : null;
  const chosenMeta = chosen ? QUALITY_META[chosen.quality] || QUALITY_META.ok : null;
  const bestOption = scenario.options.find((o) => o.quality === 'best') || scenario.options[0];

  const handlePick = (i) => {
    if (picked !== null) return;
    const opt = scenario.options[i];
    const meta = QUALITY_META[opt.quality] || QUALITY_META.ok;
    setPicked(i);
    setHistory((h) => [...h, { quality: opt.quality, points: meta.points, optionText: opt.text }]);
  };

  const handleNext = () => {
    if (picked === null) return;
    if (index < total - 1) {
      setIndex((i) => i + 1);
      setPicked(null);
    } else {
      setFinished(true);
      if (!completedOnce.current) {
        completedOnce.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
    }
  };

  const ratio = maxPoints === 0 ? 0 : points / maxPoints;
  let scoreLabel = 'Tough round — these were genuinely hard calls. Read the recap and try again.';
  if (ratio >= 0.85) scoreLabel = 'Sharp judgment — you weighed the trade-offs like a pro.';
  else if (ratio >= 0.5) scoreLabel = "Solid instincts — a couple of gray areas got you, and that's normal.";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="bg-blue-50 text-blue-600 rounded-xl p-2.5 shrink-0">
          <Scale className="w-6 h-6" />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{intro}</p>
        </div>
      </div>

      {finished ? (
        /* ---------- End screen ---------- */
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-4 mb-4 shadow-md">
            <Trophy className="w-8 h-8" />
          </div>
          <p className="text-3xl font-extrabold text-gray-900">
            {points}
            <span className="text-gray-400 text-xl font-semibold"> / {maxPoints} judgment points</span>
          </p>
          <p className="text-gray-600 mt-1 mb-5">{scoreLabel}</p>

          <div className="text-left space-y-2 mb-5">
            {history.map((h, i) => {
              const meta = QUALITY_META[h.quality] || QUALITY_META.ok;
              const MetaIcon = meta.Icon;
              const situation = deck[i] ? deck[i].situation : '';
              const short = situation.length > 90 ? `${situation.slice(0, 90).trim()}…` : situation;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 border border-gray-200 rounded-xl p-3 bg-gray-50"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-700 leading-snug">{short}</p>
                    <span
                      className={`inline-flex items-center gap-1 mt-1.5 text-xs font-semibold px-2 py-0.5 rounded-full ${meta.badge}`}
                    >
                      <MetaIcon className="w-3 h-3" />
                      {meta.label} · +{h.points} pt{h.points === 1 ? '' : 's'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-left bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-5">
            <p className="text-sm font-bold text-indigo-900 mb-1 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" /> What you just learned
            </p>
            <p className="text-sm text-indigo-900/80 leading-relaxed">{DEFAULT_TAKEAWAY}</p>
          </div>

          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Play again
          </button>
        </div>
      ) : (
        /* ---------- Scenario card ---------- */
        <div key={`${resetKey}-${index}`}>
          <div className="border border-gray-200 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-white mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                Scenario {index + 1} of {total}
              </span>
              <SceneIcon className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-gray-800 leading-relaxed">{scenario.situation}</p>
          </div>

          <div className="space-y-2.5 mb-4">
            {scenario.options.map((opt, i) => {
              const meta = QUALITY_META[opt.quality] || QUALITY_META.ok;
              const isChosen = picked === i;
              const revealBest = picked !== null && picked !== i && opt.quality === 'best';
              let cls =
                'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/60 cursor-pointer';
              if (picked !== null) {
                if (isChosen) cls = meta.btn;
                else if (revealBest)
                  cls = 'border-green-300 border-dashed bg-green-50/50 text-gray-700';
                else cls = 'border-gray-200 bg-white opacity-50';
              }
              return (
                <button
                  key={i}
                  onClick={() => handlePick(i)}
                  disabled={picked !== null}
                  className={`w-full text-left flex items-start gap-3 border rounded-xl p-3.5 transition-all duration-300 ${cls} ${
                    picked !== null ? 'cursor-default' : ''
                  }`}
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center mt-0.5">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm sm:text-[15px] leading-relaxed flex-1">{opt.text}</span>
                  {revealBest && (
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-green-700 bg-green-100 rounded-full px-2 py-0.5 mt-0.5">
                      Best
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {chosen && chosenMeta && (
            <div
              className={`border rounded-xl p-4 mb-4 transition-all duration-300 ${chosenMeta.panel}`}
            >
              <p className={`flex items-center gap-1.5 text-sm font-bold mb-1 ${chosenMeta.accent}`}>
                <chosenMeta.Icon className="w-4 h-4" />
                {chosenMeta.label} · +{chosenMeta.points} judgment point
                {chosenMeta.points === 1 ? '' : 's'}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{chosen.feedback}</p>
              {chosen.quality !== 'best' && bestOption && (
                <div className="mt-3 bg-white/70 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-700 flex items-center gap-1 mb-1">
                    <Lightbulb className="w-3.5 h-3.5" /> The best call was
                  </p>
                  <p className="text-sm text-gray-700 leading-snug">{bestOption.text}</p>
                </div>
              )}
            </div>
          )}

          {picked !== null && (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              {index < total - 1 ? 'Next scenario' : 'See my results'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="font-semibold text-gray-700">
            {points} / {maxPoints} pts
          </span>
          <div className="hidden sm:flex items-center gap-1">
            {deck.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i < history.length ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
    </div>
  );
}
