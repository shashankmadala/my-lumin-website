import { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  RotateCcw,
  ArrowRight,
  Trophy,
  CheckCircle2,
  XCircle,
  Lightbulb,
} from 'lucide-react';

const ROUNDS = [
  {
    prefix: 'The chef put the pizza in the',
    candidates: [
      { word: 'box', prob: 9 },
      { word: 'oven', prob: 82 },
      { word: 'ocean', prob: 1 },
      { word: 'fridge', prob: 6 },
    ],
    note:
      "“Pizza in the oven” appears millions of times in the model's training text, so “oven” towers over everything else. When one continuation is this common, the model is almost never surprised.",
  },
  {
    prefix: 'The opposite of hot is',
    candidates: [
      { word: 'cold', prob: 91 },
      { word: 'spicy', prob: 1 },
      { word: 'warm', prob: 5 },
      { word: 'cool', prob: 3 },
    ],
    note:
      'This is a textbook pattern — “the opposite of hot is cold” shows up constantly in writing. Near-certain predictions like this are why LLMs feel so reliable on common knowledge.',
  },
  {
    prefix: 'She poured milk into her',
    candidates: [
      { word: 'coffee', prob: 31 },
      { word: 'backpack', prob: 2 },
      { word: 'cereal', prob: 44 },
      { word: 'glass', prob: 18 },
    ],
    note:
      'Now the model hesitates: “cereal” and “coffee” both follow “poured milk into” all the time. The prefix alone can’t fully decide — earlier context (breakfast? a café?) would shift these odds.',
  },
  {
    prefix: 'The best thing about school is',
    candidates: [
      { word: 'lunch', prob: 26 },
      { word: 'friends', prob: 34 },
      { word: 'leaving', prob: 11 },
      { word: 'learning', prob: 22 },
    ],
    note:
      'Genuinely ambiguous! Many continuations are plausible, so the probability spreads out. This is exactly why the same prompt can give different answers on different runs — sampling from a spread-out distribution is what the “temperature” setting controls.',
  },
  {
    prefix: 'After the storm, the streets were',
    candidates: [
      { word: 'quiet', prob: 19 },
      { word: 'sparkling', prob: 6 },
      { word: 'flooded', prob: 38 },
      { word: 'empty', prob: 27 },
    ],
    note:
      '“Flooded” edges ahead because storms and flooding co-occur so often in news and stories — but “empty” and “quiet” are real contenders. The model isn’t reasoning about weather; it’s weighing how often each word follows storm descriptions.',
  },
  {
    prefix: 'My favorite season is',
    candidates: [
      { word: 'winter', prob: 22 },
      { word: 'summer', prob: 31 },
      { word: 'spring', prob: 19 },
      { word: 'fall', prob: 28 },
    ],
    note:
      'Almost a four-way tie! When no continuation dominates, the answer depends heavily on sampling randomness (temperature). Ask the same model twice and you may get two different “favorite” seasons — it has no actual favorite.',
  },
];

export default function TokenPredictor({ onComplete }) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [barsGrown, setBarsGrown] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const completedRef = useRef(false);

  const round = ROUNDS[roundIndex];
  const revealed = picked !== null;
  const topWord = round.candidates.reduce((a, b) => (b.prob > a.prob ? b : a))
    .word;
  const gotIt = revealed && picked === topWord;

  // Grow the probability bars a beat after reveal so their width animates.
  useEffect(() => {
    if (!revealed) return undefined;
    const t = setTimeout(() => setBarsGrown(true), 60);
    return () => clearTimeout(t);
  }, [revealed]);

  // Fire onComplete once, the first time the final screen appears.
  useEffect(() => {
    if (finished && !completedRef.current) {
      completedRef.current = true;
      if (typeof onComplete === 'function') onComplete();
    }
  }, [finished, onComplete]);

  const handlePick = (word) => {
    if (revealed) return;
    setPicked(word);
    if (word === topWord) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (roundIndex + 1 >= ROUNDS.length) {
      setFinished(true);
    } else {
      setRoundIndex((i) => i + 1);
      setPicked(null);
      setBarsGrown(false);
    }
  };

  const handleReset = () => {
    setRoundIndex(0);
    setPicked(null);
    setBarsGrown(false);
    setScore(0);
    setFinished(false);
  };

  const sortedCandidates = revealed
    ? [...round.candidates].sort((a, b) => b.prob - a.prob)
    : round.candidates;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2.5 bg-blue-100 rounded-xl shrink-0">
          <Sparkles className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            Guess the Next Word
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Pick the word you think a language model would rank #1 as the next
            word.
          </p>
        </div>
      </div>

      {finished ? (
        /* ---------- Final screen ---------- */
        <div className="text-center py-6">
          <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4">
            <Trophy className="w-9 h-9 text-indigo-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {score} / {ROUNDS.length} matched the model
          </p>
          <p className="text-sm text-gray-500 mb-5">
            {score >= 5
              ? 'You think like a language model — impressive pattern instincts!'
              : score >= 3
              ? 'Nice work — you spotted most of the strong patterns.'
              : 'Tricky, right? Predicting like a model takes practice.'}
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-left mb-5">
            <p className="text-sm font-semibold text-indigo-800 mb-1.5 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 shrink-0" />
              What you just learned
            </p>
            <p className="text-sm text-indigo-900 leading-relaxed">
              LLMs don&apos;t look up facts &mdash; they predict likely next
              words based on patterns in their training data. That makes them
              brilliant autocomplete, which is also why they can confidently
              make things up (hallucinate): a fluent-sounding next word
              isn&apos;t always a true one.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Play again
          </button>
        </div>
      ) : (
        /* ---------- Round view ---------- */
        <div>
          {/* Prompt */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
              The prompt so far
            </p>
            <p className="text-lg sm:text-xl font-medium text-gray-800">
              {round.prefix}{' '}
              <span className="inline-block align-baseline border-b-2 border-dashed border-blue-400 text-blue-600 font-bold px-1">
                {revealed ? picked : '____'}
              </span>
            </p>
          </div>

          {!revealed ? (
            <div className="grid grid-cols-2 gap-2.5">
              {round.candidates.map((c) => (
                <button
                  key={c.word}
                  onClick={() => handlePick(c.word)}
                  className="px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-semibold text-sm sm:text-base hover:border-blue-400 hover:bg-blue-50 active:scale-95 transition-all"
                >
                  {c.word}
                </button>
              ))}
            </div>
          ) : (
            <div>
              {/* Result banner */}
              <div
                className={`flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm font-medium transition-all ${
                  gotIt
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-amber-50 border border-amber-200 text-amber-800'
                }`}
              >
                {gotIt ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 text-amber-600" />
                )}
                <span>
                  {gotIt
                    ? `Yes! “${topWord}” is the model's top pick. +1 point`
                    : `The model's #1 was “${topWord}” — you picked “${picked}” (${
                        round.candidates.find((c) => c.word === picked).prob
                      }% likely).`}
                </span>
              </div>

              {/* Probability bars */}
              <div className="space-y-2.5 mb-4">
                {sortedCandidates.map((c) => {
                  const isTop = c.word === topWord;
                  const isPick = c.word === picked;
                  return (
                    <div key={c.word}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span
                          className={`font-semibold ${
                            isTop ? 'text-blue-700' : 'text-gray-600'
                          }`}
                        >
                          {c.word}
                          {isTop && (
                            <span className="ml-1.5 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wide">
                              model&apos;s #1
                            </span>
                          )}
                          {isPick && !isTop && (
                            <span className="ml-1.5 px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wide">
                              your pick
                            </span>
                          )}
                        </span>
                        <span className="font-mono text-gray-500">
                          {c.prob}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${
                            isTop
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                              : 'bg-gray-300'
                          }`}
                          style={{ width: barsGrown ? `${c.prob}%` : '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Micro-explanation */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 mb-4 flex gap-2.5">
                <Lightbulb className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <p className="text-sm text-indigo-900 leading-relaxed">
                  {round.note}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
              >
                {roundIndex + 1 >= ROUNDS.length ? 'See results' : 'Next round'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      {!finished && (
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {ROUNDS.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < roundIndex || (i === roundIndex && revealed)
                      ? 'bg-blue-600'
                      : i === roundIndex
                      ? 'bg-blue-300'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Round {roundIndex + 1} of {ROUNDS.length} &middot; Score {score}
            </span>
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
