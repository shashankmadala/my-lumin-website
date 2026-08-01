import { useState, useRef } from 'react';
import { Search, Flame, RotateCcw, ArrowRight, Trophy, Check, X, Sparkles } from 'lucide-react';

// "Pattern Detective" — 8 mixed-type pattern rounds that teach the core idea
// behind machine learning: finding the hidden rule in examples.

const ROUNDS = [
  {
    type: 'emoji',
    difficulty: 'Easy',
    prompt: 'What comes next?',
    sequence: ['🔵', '🔺', '🔵', '🔺', '🔵', '?'],
    options: ['🔵', '🔺', '🟢', '🟦'],
    answer: 1,
    rule: 'The shapes alternate: circle, triangle, circle, triangle — so a triangle comes next.',
  },
  {
    type: 'number',
    difficulty: 'Easy',
    prompt: 'What comes next?',
    sequence: ['2', '4', '6', '8', '?'],
    options: ['9', '10', '12', '16'],
    answer: 1,
    rule: 'Each number goes up by 2 — the rule is "add 2," so 8 + 2 = 10.',
  },
  {
    type: 'number',
    difficulty: 'Medium',
    prompt: 'What comes next?',
    sequence: ['2', '4', '8', '16', '?'],
    options: ['20', '24', '32', '64'],
    answer: 2,
    rule: 'This one multiplies instead of adds: each number doubles, so 16 × 2 = 32.',
  },
  {
    type: 'letters',
    difficulty: 'Medium',
    prompt: 'What comes next?',
    sequence: ['AZ', 'BY', 'CX', '?'],
    options: ['DW', 'DV', 'EW', 'CW'],
    answer: 0,
    rule: 'Two patterns at once: the first letter walks forward (A, B, C, D) while the second walks backward (Z, Y, X, W).',
  },
  {
    type: 'emoji',
    difficulty: 'Medium',
    prompt: 'What comes next?',
    sequence: ['🔴', '🔴', '🟡', '🔴', '🔴', '🟡', '🔴', '🔴', '?'],
    options: ['🔴', '🟡', '🟢', '🔵'],
    answer: 1,
    rule: 'The repeating block is red-red-yellow. Two reds just went by, so yellow finishes the block.',
  },
  {
    type: 'oddone',
    difficulty: 'Hard',
    prompt: 'Which one does NOT belong?',
    sequence: [],
    options: ['2', '6', '15', '8'],
    answer: 2,
    rule: '2, 6, and 8 are all even — 15 is the only odd number. Spotting what the others share IS the pattern.',
  },
  {
    type: 'number',
    difficulty: 'Hard',
    prompt: 'What comes next?',
    sequence: ['1', '1', '2', '3', '5', '8', '?'],
    options: ['10', '11', '13', '16'],
    answer: 2,
    rule: 'The Fibonacci rule: each number is the sum of the two before it, so 5 + 8 = 13.',
  },
  {
    type: 'number',
    difficulty: 'Hard',
    prompt: 'What comes next?',
    sequence: ['3', '6', '5', '10', '9', '18', '?'],
    options: ['17', '36', '20', '15'],
    answer: 0,
    rule: 'TWO rules alternate: double it, then subtract 1. After 18 comes the subtract step: 18 − 1 = 17.',
  },
];

const RANKS = [
  { min: 8, title: 'Pattern Detective', blurb: 'A perfect case file. Nothing gets past you.' },
  { min: 6, title: 'Pattern Sleuth', blurb: 'Sharp eyes — you cracked almost every rule.' },
  { min: 4, title: 'Pattern Spotter', blurb: 'Solid instincts. The tricky rules need one more look.' },
  { min: 0, title: 'Pattern Rookie', blurb: 'Every detective starts somewhere — replay and study the rules.' },
];

const DIFFICULTY_STYLES = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-red-100 text-red-700',
};

export default function PatternGame({ onComplete }) {
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const completedRef = useRef(false);

  const current = ROUNDS[round];
  const answered = selected !== null;
  const isEmoji = current && current.type === 'emoji';

  const choose = (i) => {
    if (answered || finished) return;
    setSelected(i);
    if (i === current.answer) {
      setScore((s) => s + 1);
      setStreak((st) => {
        const next = st + 1;
        setBestStreak((prev) => Math.max(prev, next));
        return next;
      });
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    if (round + 1 >= ROUNDS.length) {
      setFinished(true);
      if (!completedRef.current) {
        completedRef.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
    } else {
      setRound((r) => r + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setRound(0);
    setSelected(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setFinished(false);
  };

  const rank = RANKS.find((r) => score >= r.min) || RANKS[RANKS.length - 1];

  const optionClasses = (i) => {
    const base =
      'rounded-xl border-2 font-semibold transition-all duration-200 px-3 py-3 sm:py-4 text-center';
    const size = isEmoji ? ' text-3xl' : ' text-lg';
    if (!answered) {
      return (
        base +
        size +
        ' border-gray-200 bg-white text-gray-800 hover:border-blue-400 hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
      );
    }
    if (i === current.answer) {
      return base + size + ' border-green-500 bg-green-50 text-green-800 scale-[1.02]';
    }
    if (i === selected) {
      return base + size + ' border-red-400 bg-red-50 text-red-700';
    }
    return base + size + ' border-gray-100 bg-gray-50 text-gray-300';
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6 max-w-xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-indigo-100 rounded-xl shrink-0">
          <Search className="w-6 h-6 text-indigo-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">Pattern Detective</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Crack the hidden rule in each of 8 rounds — this is exactly what machine learning does.
          </p>
        </div>
        {streak >= 2 && !finished && (
          <div className="flex items-center gap-1 px-2.5 py-1 bg-orange-100 rounded-full shrink-0 animate-pulse">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-bold text-orange-600">{streak}</span>
          </div>
        )}
      </div>

      {finished ? (
        /* ---------- Results screen ---------- */
        <div className="text-center py-4">
          <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-3">
            <Trophy className="w-10 h-10 text-indigo-600" />
          </div>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Your rank</p>
          <h4 className="text-2xl font-bold text-gray-900 mt-1">{rank.title}</h4>
          <p className="text-gray-600 mt-1">{rank.blurb}</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div>
              <p className="text-2xl font-bold text-blue-600">
                {score}/{ROUNDS.length}
              </p>
              <p className="text-gray-500">correct</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">{bestStreak}</p>
              <p className="text-gray-500">best streak</p>
            </div>
          </div>
          <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-200 text-left">
            <p className="text-sm text-indigo-900">
              <span className="font-semibold">What you just learned:</span> you just did what ML models
              do — looked at examples, guessed the hidden rule, and used it to predict what comes next.
              The difference? Models scan millions of examples and find patterns far too subtle for
              humans to spot.
            </p>
          </div>
          <button
            onClick={reset}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Play again
          </button>
        </div>
      ) : (
        /* ---------- Active round ---------- */
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Round {round + 1} of {ROUNDS.length}
            </span>
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${DIFFICULTY_STYLES[current.difficulty]}`}
            >
              {current.difficulty}
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-100 text-center mb-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">{current.prompt}</p>
            {current.sequence.length > 0 && (
              <p
                className={`font-bold text-gray-900 tracking-wide break-words ${
                  isEmoji ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl font-mono'
                }`}
              >
                {current.sequence.join('  ')}
              </p>
            )}
            {current.type === 'oddone' && (
              <p className="text-xs text-gray-400 mt-1">Three share a rule. One breaks it.</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {current.options.map((opt, i) => (
              <button key={i} onClick={() => choose(i)} disabled={answered} className={optionClasses(i)}>
                {opt}
              </button>
            ))}
          </div>

          {/* Feedback */}
          {answered && (
            <div
              className={`mt-4 p-3.5 rounded-xl border text-sm transition-all duration-300 ${
                selected === current.answer
                  ? 'bg-green-50 border-green-200 text-green-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold mb-1">
                {selected === current.answer ? (
                  <>
                    <Check className="w-4 h-4" /> Correct!
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4" /> Not quite — it was {current.options[current.answer]}
                  </>
                )}
              </div>
              <p>{current.rule}</p>
              <button
                onClick={next}
                className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {round + 1 >= ROUNDS.length ? 'See my rank' : 'Next round'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">
            Score: {score}/{ROUNDS.length}
          </span>
          <div className="w-24 sm:w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{
                width: `${((finished ? ROUNDS.length : round + (answered ? 1 : 0)) / ROUNDS.length) * 100}%`,
              }}
            />
          </div>
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
