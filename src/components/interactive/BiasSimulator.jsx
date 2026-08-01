/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo, useRef } from 'react';
import {
  Cat,
  Scale,
  RotateCcw,
  Play,
  Plus,
  Minus,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  PartyPopper,
  SlidersHorizontal,
  BarChart3,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// The learner picks a training mix (max 30 photos) for a "cat detector".
// A fixed test set of 12 cats then runs through it. Each group's accuracy is
// a simple function of its share of the training data — so the bias the
// learner bakes in is exactly the bias they see in the results.
// ---------------------------------------------------------------------------

const MAX_PHOTOS = 30;
const MIN_PHOTOS = 6;

const GROUPS = [
  {
    key: 'light',
    name: 'Light-furred',
    icon: 'text-amber-500',
    chip: 'bg-amber-50 border-amber-200 text-amber-700',
    cell: 'bg-amber-100 border-amber-300',
    testCount: 6,
  },
  {
    key: 'dark',
    name: 'Dark-furred',
    icon: 'text-gray-700',
    chip: 'bg-gray-100 border-gray-300 text-gray-700',
    cell: 'bg-gray-200 border-gray-400',
    testCount: 4,
  },
  {
    key: 'sphynx',
    name: 'Sphynx (hairless)',
    icon: 'text-rose-500',
    chip: 'bg-rose-50 border-rose-200 text-rose-700',
    cell: 'bg-rose-100 border-rose-300',
    testCount: 2,
  },
];

const TEST_TOTAL = GROUPS.reduce((n, g) => n + g.testCount, 0); // 12

const DEFAULT_MIX = { light: 22, dark: 7, sphynx: 1 }; // a typical web scrape

// Accuracy scales with the group's share of training data: 0 photos = 50%
// (coin flip), and it caps at 98% (no model is perfect).
const accuracyFor = (count, total) => {
  if (!total || count === 0) return 50;
  return Math.min(98, Math.round(50 + (count / total) * 145));
};

const accColor = (acc) =>
  acc >= 90 ? 'bg-green-500' : acc >= 70 ? 'bg-amber-400' : 'bg-red-500';
const accText = (acc) =>
  acc >= 90 ? 'text-green-600' : acc >= 70 ? 'text-amber-600' : 'text-red-600';

const explainGroup = (group, count, total, acc) => {
  const pct = total ? Math.round((count / total) * 100) : 0;
  const lower = group.name.toLowerCase();
  if (count === 0) {
    return `Your model has never seen a ${lower} cat. It is flipping a coin (${acc}%).`;
  }
  if (pct < 15) {
    return `${group.name} cats were only ${pct}% of training, so the model barely learned what they look like — ${acc}% is close to guessing.`;
  }
  if (pct < 28) {
    return `With ${pct}% of the training photos, the model picked up some ${lower} features, but not enough to be reliable (${acc}%).`;
  }
  return `${group.name} cats made up ${pct}% of training — plenty of examples, so the model is near its ceiling (${acc}%).`;
};

export default function BiasSimulator({ onComplete }) {
  const [counts, setCounts] = useState({ ...DEFAULT_MIX });
  const [phase, setPhase] = useState('build'); // build | training | results
  const [trainProgress, setTrainProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [runs, setRuns] = useState([]);
  const [revealCount, setRevealCount] = useState(0);
  const [hasSuccess, setHasSuccess] = useState(false);
  const completedRef = useRef(false);

  const total = counts.light + counts.dark + counts.sphynx;

  const adjust = (key, delta) => {
    setCounts((prev) => {
      const next = Math.max(0, prev[key] + delta);
      const nextTotal = total - prev[key] + next;
      if (nextTotal > MAX_PHOTOS) return prev;
      return { ...prev, [key]: next };
    });
  };

  // Training animation (~1.4s).
  useEffect(() => {
    if (phase !== 'training') return undefined;
    const iv = setInterval(() => {
      setTrainProgress((p) => Math.min(100, p + 4));
    }, 55);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'training' || trainProgress < 100) return undefined;
    const t = setTimeout(() => {
      const accs = {};
      const misses = {};
      GROUPS.forEach((g) => {
        const acc = accuracyFor(counts[g.key], total);
        accs[g.key] = acc;
        misses[g.key] = Math.max(
          0,
          g.testCount - Math.round((acc / 100) * g.testCount)
        );
      });
      const overall = Math.round(
        GROUPS.reduce((sum, g) => sum + accs[g.key] * g.testCount, 0) /
          TEST_TOTAL
      );
      const accList = GROUPS.map((g) => accs[g.key]);
      const gap = Math.max(...accList) - Math.min(...accList);
      const run = { mix: { ...counts }, accs, misses, overall, gap };
      setResults(run);
      setRuns((prev) => [...prev, run]);
      setRevealCount(0);
      setPhase('results');
      if (accList.every((a) => a >= 90)) {
        setHasSuccess(true);
        if (!completedRef.current) {
          completedRef.current = true;
          if (typeof onComplete === 'function') onComplete();
        }
      }
    }, 350);
    return () => clearTimeout(t);
  }, [phase, trainProgress, counts, total, onComplete]);

  // Staggered reveal of the 12 test cats.
  useEffect(() => {
    if (phase !== 'results' || revealCount >= TEST_TOTAL) return undefined;
    const iv = setInterval(() => {
      setRevealCount((c) => Math.min(TEST_TOTAL, c + 1));
    }, 90);
    return () => clearInterval(iv);
  }, [phase, revealCount]);

  const statsVisible = phase === 'results' && revealCount >= TEST_TOTAL;

  const startTraining = () => {
    if (total < MIN_PHOTOS) return;
    setTrainProgress(0);
    setPhase('training');
  };

  const goBuild = (presetCounts) => {
    if (presetCounts) setCounts(presetCounts);
    setResults(null);
    setPhase('build');
  };

  const reset = () => {
    setCounts({ ...DEFAULT_MIX });
    setPhase('build');
    setTrainProgress(0);
    setResults(null);
    setRuns([]);
    setRevealCount(0);
    setHasSuccess(false);
  };

  // 30-slot training photo grid.
  const gridCells = useMemo(() => {
    const cells = [];
    GROUPS.forEach((g) => {
      for (let i = 0; i < counts[g.key]; i += 1) cells.push(g);
    });
    while (cells.length < MAX_PHOTOS) cells.push(null);
    return cells;
  }, [counts]);

  const kicker =
    results && results.overall >= 85 && Math.min(...GROUPS.map((g) => results.accs[g.key])) <= 65;

  const success =
    results && GROUPS.every((g) => results.accs[g.key] >= 90);

  const worstGroup =
    results &&
    GROUPS.reduce((worst, g) =>
      results.accs[g.key] < results.accs[worst.key] ? g : worst
    );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
          <Scale className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            The Unbalanced Dataset
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Choose the training photos for a cat detector, then see which cats
            it fails on.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
            runs.length > 0
              ? 'bg-green-50 border-green-200 text-green-700'
              : 'bg-gray-50 border-gray-200 text-gray-500'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" /> 1. Train a detector
        </span>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
            hasSuccess
              ? 'bg-green-50 border-green-200 text-green-700'
              : 'bg-gray-50 border-gray-200 text-gray-500'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" /> 2. Get every group to 90%+
        </span>
      </div>

      {/* -------- BUILD -------- */}
      {phase === 'build' && (
        <div>
          <div className="space-y-2.5 mb-4">
            {GROUPS.map((g) => (
              <div
                key={g.key}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50"
              >
                <Cat className={`w-6 h-6 flex-shrink-0 ${g.icon}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {g.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {counts[g.key]} photo{counts[g.key] === 1 ? '' : 's'}
                    {total > 0 &&
                      ` · ${Math.round((counts[g.key] / total) * 100)}% of training`}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => adjust(g.key, -1)}
                    disabled={counts[g.key] === 0}
                    aria-label={`Remove a ${g.name} photo`}
                    className="p-2 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-gray-900">
                    {counts[g.key]}
                  </span>
                  <button
                    onClick={() => adjust(g.key, 1)}
                    disabled={total >= MAX_PHOTOS}
                    aria-label={`Add a ${g.name} photo`}
                    className="p-2 rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Photo grid */}
          <div className="p-3 rounded-xl border border-gray-200 mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Training set · {total}/{MAX_PHOTOS} photos
              {counts === DEFAULT_MIX ? '' : ''}
            </p>
            <div className="grid grid-cols-10 gap-1.5">
              {gridCells.map((g, i) =>
                g ? (
                  <div
                    key={i}
                    className={`aspect-square rounded-md border flex items-center justify-center transition-all duration-200 ${g.cell}`}
                  >
                    <Cat className={`w-3.5 h-3.5 ${g.icon}`} />
                  </div>
                ) : (
                  <div
                    key={i}
                    className="aspect-square rounded-md border border-dashed border-gray-200"
                  />
                )
              )}
            </div>
            {counts.light === DEFAULT_MIX.light &&
              counts.dark === DEFAULT_MIX.dark &&
              counts.sphynx === DEFAULT_MIX.sphynx &&
              runs.length === 0 && (
                <p className="text-xs text-gray-400 mt-2">
                  This starting mix mimics photos scraped from the web — mostly
                  light-furred cats. Adjust it, or train as-is and see what
                  happens.
                </p>
              )}
          </div>

          {/* Past runs */}
          {runs.length > 0 && (
            <div className="mb-4 p-3 rounded-xl bg-gray-50 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5" /> Your past runs
              </p>
              {runs.slice(-3).map((r, i) => (
                <p key={i} className="text-xs text-gray-600">
                  Mix {r.mix.light}/{r.mix.dark}/{r.mix.sphynx} → overall{' '}
                  <span className="font-semibold">{r.overall}%</span>, fairness
                  gap{' '}
                  <span
                    className={`font-semibold ${r.gap > 15 ? 'text-red-600' : 'text-green-600'}`}
                  >
                    {r.gap} pts
                  </span>
                </p>
              ))}
            </div>
          )}

          <button
            onClick={startTraining}
            disabled={total < MIN_PHOTOS}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.99] transition-all"
          >
            <Play className="w-4 h-4" /> Train the detector
          </button>
          {total < MIN_PHOTOS && (
            <p className="text-xs text-amber-600 text-center mt-2">
              Add at least {MIN_PHOTOS} photos — a model cannot learn from an
              almost-empty dataset.
            </p>
          )}
        </div>
      )}

      {/* -------- TRAINING -------- */}
      {phase === 'training' && (
        <div className="py-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-4 animate-pulse">
            <Cat className="w-8 h-8" />
          </div>
          <p className="font-semibold text-gray-900 mb-1">
            Training on your {total} photos…
          </p>
          <p className="text-sm text-gray-500 mb-5">
            {trainProgress < 35
              ? `Studying ${counts.light} light-furred cat${counts.light === 1 ? '' : 's'}…`
              : trainProgress < 70
                ? `Studying ${counts.dark} dark-furred cat${counts.dark === 1 ? '' : 's'}…`
                : `Studying ${counts.sphynx} sphynx cat${counts.sphynx === 1 ? '' : 's'}…`}
          </p>
          <div className="w-full max-w-sm mx-auto h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-100"
              style={{ width: `${trainProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* -------- RESULTS -------- */}
      {phase === 'results' && results && (
        <div>
          {/* Test run */}
          <div className="p-3 rounded-xl border border-gray-200 mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Test set: 12 new cats the model has never seen
            </p>
            <div className="space-y-2">
              {GROUPS.map((g, gi) => {
                const offset = GROUPS.slice(0, gi).reduce(
                  (n, gg) => n + gg.testCount,
                  0
                );
                return (
                  <div key={g.key} className="flex items-center gap-2">
                    <span className="w-24 sm:w-28 text-xs text-gray-600 flex-shrink-0 truncate">
                      {g.name}
                    </span>
                    <div className="flex gap-1.5 flex-wrap">
                      {Array.from({ length: g.testCount }).map((_, i) => {
                        const shown = offset + i < revealCount;
                        const missed = i >= g.testCount - results.misses[g.key];
                        return (
                          <div
                            key={i}
                            className={`relative p-1.5 rounded-lg border transition-all duration-300 ${
                              shown
                                ? missed
                                  ? 'bg-red-50 border-red-200 opacity-100 scale-100'
                                  : 'bg-green-50 border-green-200 opacity-100 scale-100'
                                : 'bg-gray-50 border-gray-200 opacity-30 scale-90'
                            }`}
                          >
                            <Cat className={`w-4 h-4 ${g.icon}`} />
                            {shown &&
                              (missed ? (
                                <XCircle className="w-3.5 h-3.5 text-red-500 absolute -top-1.5 -right-1.5 bg-white rounded-full" />
                              ) : (
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 absolute -top-1.5 -right-1.5 bg-white rounded-full" />
                              ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              Like many real benchmarks, the test set has more of the common
              cats — which is exactly how failures stay hidden.
            </p>
          </div>

          {/* Stats */}
          <div
            className={`transition-opacity duration-500 ${statsVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 mb-0.5">Overall accuracy</p>
                <p
                  className={`text-2xl font-bold ${results.overall >= 85 ? 'text-green-600' : accText(results.overall)}`}
                >
                  {results.overall}%
                </p>
                <p className="text-[11px] text-gray-400">the headline number</p>
              </div>
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 mb-0.5">Fairness gap</p>
                <p
                  className={`text-2xl font-bold ${results.gap > 15 ? 'text-red-600' : 'text-green-600'}`}
                >
                  {results.gap} pts
                </p>
                <p className="text-[11px] text-gray-400">
                  best group − worst group
                </p>
              </div>
            </div>

            {/* Per-group bars */}
            <div className="space-y-3 mb-4">
              {GROUPS.map((g) => {
                const acc = results.accs[g.key];
                return (
                  <div key={g.key}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700 flex items-center gap-1.5">
                        <Cat className={`w-3.5 h-3.5 ${g.icon}`} /> {g.name}
                        <span className="text-gray-400">
                          · trained on {results.mix[g.key]} photo
                          {results.mix[g.key] === 1 ? '' : 's'}
                        </span>
                      </span>
                      <span className={`font-bold ${accText(acc)}`}>
                        {acc}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${accColor(acc)}`}
                        style={{ width: statsVisible ? `${acc}%` : '0%' }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {explainGroup(
                        g,
                        results.mix[g.key],
                        results.mix.light +
                          results.mix.dark +
                          results.mix.sphynx,
                        acc
                      )}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* The kicker */}
            {kicker && worstGroup && (
              <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 mb-4">
                <div className="flex gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900">
                    <span className="font-bold">
                      The headline says {results.overall}% — sounds like a
                      press release!
                    </span>{' '}
                    But if you own a {worstGroup.name.toLowerCase()} cat, your
                    detector works {results.accs[worstGroup.key]}% of the time
                    — barely better than a coin flip. Overall accuracy hid who
                    the model fails. Retrain with a more balanced mix and watch
                    the gap close.
                  </p>
                </div>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="p-4 rounded-xl bg-green-50 border-2 border-green-300 mb-4">
                <div className="flex gap-2.5">
                  <PartyPopper className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-900">
                    <p className="font-bold mb-1">
                      Every group scores 90%+ — this detector is fair!
                    </p>
                    <p>
                      <span className="font-bold">
                        What you just learned:
                      </span>{' '}
                      {
                        "AI isn't biased on purpose — it mirrors its training data. A model fails the groups it rarely sees, and the overall accuracy number hides exactly who it fails. Balanced data is a fairness decision."
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => goBuild()}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-blue-200 bg-blue-50 text-blue-700 font-semibold text-sm hover:bg-blue-100 active:scale-[0.99] transition-all"
              >
                <SlidersHorizontal className="w-4 h-4" /> Adjust mix & retrain
              </button>
              {success ? (
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 active:scale-[0.99] transition-all"
                >
                  <RotateCcw className="w-4 h-4" /> Play again
                </button>
              ) : (
                <button
                  onClick={() => goBuild({ light: 10, dark: 10, sphynx: 10 })}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 active:scale-[0.99] transition-all"
                >
                  <Scale className="w-4 h-4" /> Try a balanced mix
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          {runs.length === 0
            ? 'No training runs yet'
            : `${runs.length} training run${runs.length === 1 ? '' : 's'} · best gap: ${Math.min(...runs.map((r) => r.gap))} pts`}
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
    </div>
  );
}
