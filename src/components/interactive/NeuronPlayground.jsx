import { useState, useMemo, useEffect, useRef } from 'react';
import { Brain, RotateCcw, Sparkles, Trophy, Target } from 'lucide-react';

// "Tune a Neuron" — an interactive playground that teaches weights, bias,
// and decision boundaries by letting the learner hand-tune a single neuron
// until it classifies all 10 students correctly.

const STUDENTS = [
  // x = hours studied, y = hours slept, pass = did they pass the test?
  { id: 1, x: 8, y: 7, pass: true },
  { id: 2, x: 6, y: 8, pass: true },
  { id: 3, x: 9, y: 4, pass: true },
  { id: 4, x: 5, y: 7, pass: true },
  { id: 5, x: 7, y: 5, pass: true },
  { id: 6, x: 2, y: 3, pass: false },
  { id: 7, x: 3, y: 6, pass: false },
  { id: 8, x: 5, y: 4, pass: false },
  { id: 9, x: 1, y: 8, pass: false },
  { id: 10, x: 6, y: 2, pass: false },
];

const DEFAULTS = { w1: 1, w2: -0.5, b: 0 };

// SVG geometry
const SIZE = 320;
const PAD = 34;
const PLOT = SIZE - 2 * PAD;

function toPx(x) {
  return PAD + (x / 10) * PLOT;
}
function toPy(y) {
  return SIZE - PAD - (y / 10) * PLOT;
}

// Clip the [0,10]x[0,10] data square against the half-plane w1*x + w2*y + b > 0
// (Sutherland–Hodgman). Returns polygon vertices in data space.
function clipPassRegion(w1, w2, b) {
  const square = [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10],
  ];
  const f = (p) => w1 * p[0] + w2 * p[1] + b;
  const out = [];
  for (let i = 0; i < square.length; i++) {
    const cur = square[i];
    const nxt = square[(i + 1) % square.length];
    const fc = f(cur);
    const fn = f(nxt);
    if (fc > 0) out.push(cur);
    if (fc > 0 !== fn > 0) {
      const t = fc / (fc - fn);
      out.push([cur[0] + t * (nxt[0] - cur[0]), cur[1] + t * (nxt[1] - cur[1])]);
    }
  }
  return out;
}

// Endpoints of the line w1*x + w2*y + b = 0 clipped to the data square.
// Handles vertical (w2 = 0) and horizontal (w1 = 0) lines.
function lineEndpoints(w1, w2, b) {
  const EPS = 1e-9;
  const candidates = [];
  const push = (x, y) => {
    if (x >= -EPS && x <= 10 + EPS && y >= -EPS && y <= 10 + EPS) {
      candidates.push([Math.min(10, Math.max(0, x)), Math.min(10, Math.max(0, y))]);
    }
  };
  if (Math.abs(w2) > EPS) {
    push(0, -b / w2); // left edge
    push(10, (-b - 10 * w1) / w2); // right edge
  }
  if (Math.abs(w1) > EPS) {
    push(-b / w1, 0); // bottom edge
    push((-b - 10 * w2) / w1, 10); // top edge
  }
  const uniq = [];
  for (const p of candidates) {
    if (!uniq.some((q) => Math.abs(q[0] - p[0]) < 1e-6 && Math.abs(q[1] - p[1]) < 1e-6)) {
      uniq.push(p);
    }
  }
  if (uniq.length < 2) return null;
  return [uniq[0], uniq[uniq.length - 1]];
}

export default function NeuronPlayground({ onComplete }) {
  const [w1, setW1] = useState(DEFAULTS.w1);
  const [w2, setW2] = useState(DEFAULTS.w2);
  const [b, setB] = useState(DEFAULTS.b);
  const [celebrating, setCelebrating] = useState(false);
  const [solvedOnce, setSolvedOnce] = useState(false);
  const completedRef = useRef(false);

  const results = useMemo(() => {
    return STUDENTS.map((s) => {
      const predictedPass = w1 * s.x + w2 * s.y + b > 0;
      return { ...s, predictedPass, correct: predictedPass === s.pass };
    });
  }, [w1, w2, b]);

  const correctCount = results.filter((r) => r.correct).length;
  const bothZero = w1 === 0 && w2 === 0;

  const passRegion = useMemo(() => clipPassRegion(w1, w2, b), [w1, w2, b]);
  const line = useMemo(() => lineEndpoints(w1, w2, b), [w1, w2, b]);

  useEffect(() => {
    if (correctCount === 10) {
      setCelebrating(true);
      setSolvedOnce(true);
      if (!completedRef.current) {
        completedRef.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
    } else {
      setCelebrating(false);
    }
  }, [correctCount, onComplete]);

  const reset = () => {
    setW1(DEFAULTS.w1);
    setW2(DEFAULTS.w2);
    setB(DEFAULTS.b);
    setCelebrating(false);
  };

  // A live coaching hint that explains WHY the current settings behave this way.
  const coachMessage = useMemo(() => {
    if (correctCount === 10) {
      return 'Perfect separation! Your line puts every green point on the "pass" side and every red point on the "fail" side.';
    }
    if (bothZero) {
      return 'Both weights are 0, so the neuron ignores studying AND sleep completely — only the bias speaks, and it says the same thing for every student.';
    }
    if (w1 < 0) {
      return 'Your study weight (w1) is negative, which tells the neuron "more studying makes failing MORE likely." That is backwards for this data — try a positive w1.';
    }
    if (w2 < 0) {
      return 'Your sleep weight (w2) is negative, so the neuron treats sleep as harmful. But the students who passed also slept well — try a positive w2.';
    }
    const wrong = 10 - correctCount;
    if (wrong <= 2) {
      return `So close — ${wrong} point${wrong === 1 ? ' is' : 's are'} on the wrong side (see the pulsing rings). Weights ROTATE the line; the bias SLIDES it without rotating. A small bias nudge may finish the job.`;
    }
    return `${wrong} points are misclassified (pulsing rings). Both weights are positive, so now adjust the bias: making it more negative demands MORE combined study + sleep before the neuron predicts "pass."`;
  }, [correctCount, bothZero, w1, w2]);

  const fmt = (v) => (v >= 0 ? v.toFixed(1) : `(${v.toFixed(1)})`);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-xl shrink-0">
          <Brain className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">Tune a Neuron</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Drag the three sliders until your neuron correctly predicts pass/fail for all 10 students.
          </p>
        </div>
      </div>

      {/* Celebration */}
      {celebrating && (
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-200 transition-all duration-300">
          <div className="flex items-center gap-2 font-bold text-indigo-800">
            <Trophy className="w-5 h-5 text-amber-500" />
            10/10 — you trained a neuron by hand!
          </div>
          <p className="text-sm text-indigo-900 mt-2">
            <span className="font-semibold">What you just learned:</span> a neuron is just numbers — two
            weights and a bias that draw a decision line. &quot;Training&quot; means an algorithm
            automatically nudges those numbers (like you just did by hand) until the line fits the data.
            A neural network stacks thousands of neurons like this one to draw far more complex boundaries.
          </p>
          <button
            onClick={reset}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Play again
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-5">
        {/* Scatter plot */}
        <div className="md:flex-1 min-w-0">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="w-full h-auto rounded-xl border border-gray-100 bg-gray-50"
            role="img"
            aria-label="Scatter plot of students by hours studied and hours slept, with a live decision line"
          >
            {/* Pass-side shading */}
            {passRegion.length >= 3 && (
              <polygon
                points={passRegion.map((p) => `${toPx(p[0])},${toPy(p[1])}`).join(' ')}
                fill="rgba(34,197,94,0.09)"
                className="transition-all duration-150"
              />
            )}

            {/* Grid */}
            {[0, 2, 4, 6, 8, 10].map((t) => (
              <g key={t}>
                <line x1={toPx(t)} y1={toPy(0)} x2={toPx(t)} y2={toPy(10)} stroke="#e5e7eb" strokeWidth="1" />
                <line x1={toPx(0)} y1={toPy(t)} x2={toPx(10)} y2={toPy(t)} stroke="#e5e7eb" strokeWidth="1" />
                <text x={toPx(t)} y={SIZE - PAD + 16} textAnchor="middle" fontSize="10" fill="#9ca3af">
                  {t}
                </text>
                <text x={PAD - 8} y={toPy(t) + 3} textAnchor="end" fontSize="10" fill="#9ca3af">
                  {t}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={PAD} y1={SIZE - PAD} x2={SIZE - PAD} y2={SIZE - PAD} stroke="#9ca3af" strokeWidth="1.5" />
            <line x1={PAD} y1={PAD} x2={PAD} y2={SIZE - PAD} stroke="#9ca3af" strokeWidth="1.5" />
            <text x={SIZE / 2} y={SIZE - 4} textAnchor="middle" fontSize="11" fill="#6b7280" fontWeight="600">
              Hours studied →
            </text>
            <text
              x={10}
              y={SIZE / 2}
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              fontWeight="600"
              transform={`rotate(-90 10 ${SIZE / 2})`}
            >
              Hours slept →
            </text>

            {/* Decision line */}
            {line && (
              <line
                x1={toPx(line[0][0])}
                y1={toPy(line[0][1])}
                x2={toPx(line[1][0])}
                y2={toPy(line[1][1])}
                stroke="#2563eb"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            )}

            {/* Data points */}
            {results.map((s) => (
              <g key={s.id}>
                {!s.correct && (
                  <circle
                    cx={toPx(s.x)}
                    cy={toPy(s.y)}
                    r="12"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                )}
                <circle
                  cx={toPx(s.x)}
                  cy={toPy(s.y)}
                  r="7"
                  fill={s.pass ? '#22c55e' : '#ef4444'}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="transition-all duration-150"
                />
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> Passed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" /> Failed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border-2 border-amber-500 inline-block" /> Misclassified
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-0 border-t-2 border-dashed border-blue-600 inline-block" /> Your decision line
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="md:w-64 shrink-0 space-y-4">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <label htmlFor="neuron-w1" className="text-sm font-semibold text-gray-700">
                Weight: studying (w1)
              </label>
              <span className="text-sm font-mono text-blue-600 font-bold">{w1.toFixed(1)}</span>
            </div>
            <input
              id="neuron-w1"
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={w1}
              onChange={(e) => setW1(parseFloat(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <p className="text-xs text-gray-400 mt-0.5">How much each study hour counts</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <label htmlFor="neuron-w2" className="text-sm font-semibold text-gray-700">
                Weight: sleep (w2)
              </label>
              <span className="text-sm font-mono text-blue-600 font-bold">{w2.toFixed(1)}</span>
            </div>
            <input
              id="neuron-w2"
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={w2}
              onChange={(e) => setW2(parseFloat(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <p className="text-xs text-gray-400 mt-0.5">How much each hour of sleep counts</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <label htmlFor="neuron-b" className="text-sm font-semibold text-gray-700">
                Bias (b)
              </label>
              <span className="text-sm font-mono text-blue-600 font-bold">{b.toFixed(1)}</span>
            </div>
            <input
              id="neuron-b"
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <p className="text-xs text-gray-400 mt-0.5">Slides the line without rotating it</p>
          </div>

          {/* Neuron equation */}
          <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-1">
              Your neuron&apos;s rule
            </p>
            <p className="text-xs font-mono text-gray-700 leading-relaxed">
              {fmt(w1)}×study + {fmt(w2)}×sleep + {fmt(b)} &gt; 0<br />
              <span className="text-green-600 font-semibold">→ predict PASS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Coach feedback */}
      <div
        className={`mt-4 p-3 rounded-xl text-sm transition-colors duration-300 ${
          correctCount === 10
            ? 'bg-green-50 border border-green-200 text-green-800'
            : 'bg-blue-50 border border-blue-100 text-blue-900'
        }`}
      >
        {coachMessage}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Target className={`w-5 h-5 ${correctCount === 10 ? 'text-green-500' : 'text-gray-400'}`} />
          <span className="text-sm font-semibold text-gray-700">
            {correctCount}/10 classified correctly
          </span>
          {solvedOnce && correctCount !== 10 && (
            <span className="text-xs text-gray-400 hidden sm:inline">(solved once already!)</span>
          )}
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  );
}
