import { useMemo, useRef, useState } from 'react';
import {
  ListOrdered,
  Check,
  X,
  RotateCcw,
  PartyPopper,
  Lightbulb,
  ArrowUp,
  ArrowDown,
  Plus,
  Flag,
} from 'lucide-react';

const DEFAULT_STEPS = [
  'Collect data',
  'Clean and label the data',
  'Train the model',
  'Test the model',
  'Deploy and monitor',
];

const DEFAULT_INTRO =
  'Every machine learning project follows a pipeline. Tap the steps in the order they happen.';

const DEFAULT_TAKEAWAY =
  'Machine learning is a pipeline: you need good, clean data before you can train, you must test before you trust, and the work continues after deployment with monitoring.';

function shuffledOrder(n) {
  const arr = Array.from({ length: n }, (_, i) => i);
  if (n < 2) return arr;
  let guard = 0;
  do {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    guard += 1;
  } while (arr.every((v, i) => v === i) && guard < 20);
  if (arr.every((v, i) => v === i)) {
    // Extremely unlucky: force a swap so it never starts solved.
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }
  return arr;
}

export default function SequenceBuilder({
  title = 'Put it in order',
  intro = DEFAULT_INTRO,
  steps = DEFAULT_STEPS,
  takeaway = DEFAULT_TAKEAWAY,
  onComplete,
}) {
  const total = steps.length;
  const [order, setOrder] = useState(() => shuffledOrder(total));
  const [slots, setSlots] = useState(() => Array(total).fill(null));
  const [lockedPositions, setLockedPositions] = useState([]);
  const [wrongPositions, setWrongPositions] = useState([]); // transient shake
  const [hints, setHints] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [complete, setComplete] = useState(false);
  const completedRef = useRef(false);

  const poolSteps = useMemo(
    () => order.filter((i) => !slots.includes(i)),
    [order, slots]
  );
  const filledCount = slots.filter((s) => s !== null).length;
  const allFilled = filledCount === total && total > 0;
  const checking = wrongPositions.length > 0;

  const addStep = (stepIndex) => {
    if (complete || checking) return;
    setSlots((prev) => {
      const firstEmpty = prev.indexOf(null);
      if (firstEmpty === -1) return prev;
      const next = [...prev];
      next[firstEmpty] = stepIndex;
      return next;
    });
  };

  const removeStep = (position) => {
    if (complete || checking || lockedPositions.includes(position)) return;
    setSlots((prev) => {
      const next = [...prev];
      next[position] = null;
      return next;
    });
  };

  const moveStep = (position, direction) => {
    if (complete || checking) return;
    const target = position + direction;
    if (target < 0 || target >= total) return;
    if (
      lockedPositions.includes(position) ||
      lockedPositions.includes(target)
    )
      return;
    setSlots((prev) => {
      const next = [...prev];
      [next[position], next[target]] = [next[target], next[position]];
      return next;
    });
  };

  const handleCheck = () => {
    if (!allFilled || complete || checking) return;
    setAttempts((a) => a + 1);

    const wrong = [];
    const newLocked = [];
    slots.forEach((stepIndex, p) => {
      if (stepIndex === p) newLocked.push(p);
      else wrong.push(p);
    });

    setLockedPositions(newLocked);

    if (wrong.length === 0) {
      setHints([]);
      setComplete(true);
      if (!completedRef.current) {
        completedRef.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
      return;
    }

    // Build teaching hints: 'X must come before Y'.
    const hintSet = [];
    wrong.forEach((p) => {
      const s = slots[p];
      const earlier = s > p ? steps[p] : steps[s];
      const later = s > p ? steps[s] : steps[p];
      const hint = `"${earlier}" must come before "${later}".`;
      if (!hintSet.includes(hint)) hintSet.push(hint);
    });
    setHints(hintSet.slice(0, 3));

    setWrongPositions(wrong);
    setTimeout(() => {
      setSlots((prev) => {
        const next = [...prev];
        wrong.forEach((p) => {
          next[p] = null;
        });
        return next;
      });
      setWrongPositions([]);
    }, 700);
  };

  const handleReset = () => {
    setOrder(shuffledOrder(total));
    setSlots(Array(total).fill(null));
    setLockedPositions([]);
    setWrongPositions([]);
    setHints([]);
    setAttempts(0);
    setComplete(false);
  };

  if (total === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center text-gray-500">
        No steps to order yet.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7">
      <style>{`
        @keyframes sqb-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .sqb-shake { animation: sqb-shake 0.55s ease-in-out; }
      `}</style>

      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
          <ListOrdered className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{intro}</p>
        </div>
      </div>

      {complete ? (
        /* Celebration with the correct sequence as a timeline */
        <div className="py-4">
          <div className="text-center mb-6">
            <div className="mx-auto w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
              <PartyPopper className="w-7 h-7" />
            </div>
            <p className="text-xl font-bold text-gray-900 mb-1">
              Perfect order!
            </p>
            <p className="text-sm text-gray-600">
              You nailed the sequence in {attempts}{' '}
              {attempts === 1 ? 'check' : 'checks'}.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  {i < total - 1 && (
                    <div className="w-0.5 flex-1 bg-green-200 my-1" />
                  )}
                </div>
                <div className="pb-5 pt-1">
                  <p className="text-sm font-semibold text-gray-900">{step}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 text-green-700 text-sm font-medium pl-1">
              <Flag className="w-4 h-4" /> Pipeline complete
            </div>
          </div>

          <div className="max-w-xl mx-auto bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-left flex gap-3 mb-5">
            <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <p className="text-sm text-indigo-900">
              <span className="font-semibold">What you just learned: </span>
              {takeaway}
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Play again
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Numbered sequence slots */}
          <div className="space-y-2 mb-5">
            {slots.map((stepIndex, p) => {
              const isLocked = lockedPositions.includes(p);
              const isWrong = wrongPositions.includes(p);
              const isEmpty = stepIndex === null;
              const nextEmpty = slots.indexOf(null) === p;
              return (
                <div
                  key={p}
                  className={`flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 transition-all duration-200 ${
                    isLocked
                      ? 'border-green-300 bg-green-50'
                      : isWrong
                        ? 'sqb-shake border-red-300 bg-red-50'
                        : isEmpty
                          ? `border-dashed ${
                              nextEmpty
                                ? 'border-indigo-300 bg-indigo-50/50'
                                : 'border-gray-200 bg-gray-50/50'
                            }`
                          : 'border-gray-200 bg-white'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                      isLocked
                        ? 'bg-green-600 text-white'
                        : isWrong
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {p + 1}
                  </span>

                  {isEmpty ? (
                    <span className="text-sm text-gray-400 italic flex items-center gap-1.5">
                      <Plus className="w-3.5 h-3.5" />
                      {nextEmpty
                        ? 'Tap a step below to place it here'
                        : 'Empty'}
                    </span>
                  ) : (
                    <>
                      <button
                        onClick={() => removeStep(p)}
                        disabled={isLocked || checking}
                        title={
                          isLocked
                            ? 'Correct — locked in!'
                            : 'Tap to send back to the pool'
                        }
                        className={`flex-1 text-left text-sm font-medium transition-colors ${
                          isLocked
                            ? 'text-green-800 cursor-default'
                            : isWrong
                              ? 'text-red-700'
                              : 'text-gray-800 hover:text-red-600'
                        }`}
                      >
                        {steps[stepIndex]}
                      </button>
                      {isLocked && (
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                      )}
                      {isWrong && <X className="w-4 h-4 text-red-500 shrink-0" />}
                      {!isLocked && !isWrong && (
                        <span className="flex gap-1 shrink-0">
                          <button
                            onClick={() => moveStep(p, -1)}
                            disabled={
                              p === 0 ||
                              lockedPositions.includes(p - 1) ||
                              checking
                            }
                            aria-label="Move step up"
                            className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => moveStep(p, 1)}
                            disabled={
                              p === total - 1 ||
                              lockedPositions.includes(p + 1) ||
                              checking
                            }
                            aria-label="Move step down"
                            className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pool of remaining steps */}
          {poolSteps.length > 0 && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                Steps to place
              </p>
              <div className="flex flex-wrap gap-2">
                {poolSteps.map((stepIndex) => (
                  <button
                    key={stepIndex}
                    onClick={() => addStep(stepIndex)}
                    disabled={checking}
                    className="px-3 py-2 rounded-xl border border-gray-300 bg-white text-sm text-gray-800 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-sm active:scale-95 transition-all duration-200 disabled:opacity-50"
                  >
                    {steps[stepIndex]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Hints after a wrong check */}
          {hints.length > 0 && (
            <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> Not quite — the misplaced
                steps went back to the pool. Some hints:
              </p>
              <ul className="space-y-1.5">
                {hints.map((hint, i) => (
                  <li key={i} className="text-sm text-amber-900">
                    {hint}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-amber-700 mt-2">
                The green steps are locked in — you only need to fix the rest.
              </p>
            </div>
          )}

          {/* Check button */}
          <button
            onClick={handleCheck}
            disabled={!allFilled || checking}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              allFilled && !checking
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {checking
              ? 'Checking…'
              : allFilled
                ? 'Check order'
                : `Place ${total - filledCount} more to check`}
          </button>
        </>
      )}

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>
            {complete ? total : filledCount}/{total} placed
          </span>
          <span className="w-24 sm:w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <span
              className="block h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{
                width: `${((complete ? total : lockedPositions.length) / total) * 100}%`,
              }}
            />
          </span>
          <span>
            {complete ? total : lockedPositions.length} correct
          </span>
          {attempts > 0 && <span>· Attempt {attempts}</span>}
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
    </div>
  );
}
