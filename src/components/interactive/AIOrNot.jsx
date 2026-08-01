import { Fragment, useState, useEffect, useRef } from 'react';
import {
  Bot,
  User,
  RotateCcw,
  ArrowRight,
  Trophy,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ShieldAlert,
} from 'lucide-react';

const AVG_HUMAN = 57; // % correct for an average human guesser on tasks like this

const ROUNDS = [
  {
    genre: 'Student essay intro',
    isAI: true,
    text:
      "Education is a cornerstone of modern society, shaping individuals and communities alike. In today's rapidly evolving world, it is more important than ever to delve into the ways technology impacts learning. While there are both advantages and disadvantages, it is clear that a balanced approach is essential. This essay will explore both sides of this important issue.",
    tells: [
      {
        phrase: 'delve into',
        note: '“Delve” is a famous AI favorite — its usage spiked in published text after ChatGPT launched.',
      },
      {
        phrase: "In today's rapidly evolving world",
        note: 'A stock opener that sounds grand but says nothing — classic filler.',
      },
      {
        phrase: 'both advantages and disadvantages',
        note: 'Perfectly balanced hedging with no actual opinion anywhere.',
      },
    ],
    explanation:
      'AI-written. Every sentence is smooth, generic, and committed to nothing. A real student intro usually has at least one specific claim, an awkward edge, or an actual opinion — this has the shape of an essay with none of the content.',
  },
  {
    genre: 'Text message',
    isAI: false,
    text:
      'omg the bus broke down AGAIN and the driver just sighed like it was tuesday. anyway i left my charger in bio so if i stop replying im not dead im just at 2%. also mrs keller wore the frog earrings today. iconic.',
    tells: [
      {
        phrase: 'sighed like it was tuesday',
        note: 'An oddly specific, unforced observation — AI rarely invents details this casually weird.',
      },
      {
        phrase: 'im not dead im just at 2%',
        note: 'Dropped apostrophes and run-on logic: real texting fingers, not a model being “casual.”',
      },
      {
        phrase: 'the frog earrings',
        note: 'An inside reference with zero explanation — the writer assumes shared context.',
      },
    ],
    explanation:
      'Human-written. The typos are inconsistent (some caps, some not), the details are hyper-specific, and the frog earrings joke only works if you already know Mrs. Keller. When AI imitates texting it tends to be uniformly lowercase and suspiciously coherent.',
  },
  {
    genre: 'Recipe intro',
    isAI: false,
    text:
      'My grandmother never measured anything, so this dal recipe is my best guess after years of standing in her kitchen getting my hand slapped for sneaking spoonfuls. The trick is letting the garlic burn just a little — I know, every chef says never do that, but trust me. It should smell like her house on a Sunday.',
    tells: [
      {
        phrase: 'getting my hand slapped',
        note: 'A small, physical, personal memory — lived experience, not pattern-matching.',
      },
      {
        phrase: 'letting the garlic burn just a little',
        note: 'A genuinely contrarian tip that contradicts standard advice. AI text almost never risks being “wrong.”',
      },
      {
        phrase: 'smell like her house on a Sunday',
        note: 'Sensory and particular — it anchors the recipe to one real place and time.',
      },
    ],
    explanation:
      'Human-written. The giveaway is the willingness to be wrong: “burn the garlic” contradicts every cooking guide, and models trained to be agreeable rarely take stands like that. The sensory memory does the persuading, not adjectives.',
  },
  {
    genre: 'Product review',
    isAI: true,
    text:
      'I recently purchased this blender and I am very impressed with its overall performance. The design is sleek and modern, and it blends smoothly and efficiently. Whether you are making smoothies, soups, or sauces, this product delivers excellent results every time. Overall, I would highly recommend this blender to anyone seeking a reliable kitchen appliance.',
    tells: [
      {
        phrase: 'impressed with its overall performance',
        note: 'Positive but contentless — what did it actually do well?',
      },
      {
        phrase: 'Whether you are making smoothies, soups, or sauces',
        note: 'The tidy rule-of-three list is an AI signature; real reviewers mention the one thing THEY made.',
      },
      {
        phrase: 'highly recommend this blender to anyone',
        note: 'Generic closing formula. No price, no gripe, no comparison — real reviews almost always have one.',
      },
    ],
    explanation:
      'AI-written. Real reviews contain friction: the lid that sticks, the noise at 7am, what it replaced. This one is frictionless praise assembled from review clichés — every sentence could describe any blender ever made.',
  },
  {
    genre: 'Forum comment',
    isAI: true,
    text:
      'Great question! There are several factors to consider when choosing a laptop for college. Firstly, battery life is crucial for long days on campus. Secondly, weight matters if you plan to carry it between classes. Ultimately, the best choice depends on your individual needs and budget. Hope this helps!',
    tells: [
      {
        phrase: 'Great question!',
        note: 'The assistant-style warm-up. Forum regulars skip pleasantries and just answer.',
      },
      {
        phrase: 'There are several factors to consider',
        note: 'Announces a structured list instead of giving an opinion — “Firstly… Secondly…” seals it.',
      },
      {
        phrase: 'depends on your individual needs and budget',
        note: 'The ultimate non-answer. A human regular would just say “get a used ThinkPad.”',
      },
    ],
    explanation:
      'AI-written. It has perfect essay structure in a place where nobody writes essays. Real forum answers are opinionated, abbreviated, and usually recommend one specific thing — often with an argument in the replies.',
  },
  {
    genre: 'Poem',
    isAI: false,
    text:
      "my brother's skates hang in the garage,\nlaces stiff with old rain.\ndad keeps saying he'll drive them to goodwill.\nit's been three years.\nthe car still smells like the rink.",
    tells: [
      {
        phrase: 'laces stiff with old rain',
        note: 'A concrete, imperfect image — AI poems reach for “echoes of memory,” not stiff laces.',
      },
      {
        phrase: "it's been three years.",
        note: 'Four flat words carrying all the weight. AI tends to explain grief; this just states it.',
      },
      {
        phrase: 'still smells like the rink',
        note: 'The poem ends on a smell, unresolved. AI endings almost always tie the bow: “and yet, hope remains.”',
      },
    ],
    explanation:
      'Human-written. Nothing is resolved and nothing is explained — the loss is never even named. AI-generated poems overwhelmingly end with comfort or a neat moral; this one trusts you to sit with the garage and the smell.',
  },
];

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function HighlightedText({ text, phrases, markClass }) {
  const re = new RegExp(`(${phrases.map(escapeRegExp).join('|')})`, 'g');
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, i) =>
        phrases.includes(part) ? (
          <mark key={i} className={`rounded px-0.5 ${markClass}`}>
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default function AIOrNot({ onComplete }) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [vote, setVote] = useState(null); // true = voted AI, false = voted human
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const completedRef = useRef(false);

  const round = ROUNDS[roundIndex];
  const revealed = vote !== null;
  const correct = revealed && vote === round.isAI;
  const answered = roundIndex + (revealed ? 1 : 0);
  const pct = answered > 0 ? Math.round((score / answered) * 100) : 0;
  const finalPct = Math.round((score / ROUNDS.length) * 100);

  useEffect(() => {
    if (finished && !completedRef.current) {
      completedRef.current = true;
      if (typeof onComplete === 'function') onComplete();
    }
  }, [finished, onComplete]);

  const handleVote = (votedAI) => {
    if (revealed) return;
    setVote(votedAI);
    if (votedAI === round.isAI) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (roundIndex + 1 >= ROUNDS.length) {
      setFinished(true);
    } else {
      setRoundIndex((i) => i + 1);
      setVote(null);
    }
  };

  const handleReset = () => {
    setRoundIndex(0);
    setVote(null);
    setScore(0);
    setFinished(false);
  };

  const markClass = round.isAI
    ? 'bg-amber-200/70 text-amber-900'
    : 'bg-emerald-200/60 text-emerald-900';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2.5 bg-indigo-100 rounded-xl shrink-0">
          <Bot className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            AI or Human?
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Read each snippet and vote: was it written by AI or by a person?
          </p>
        </div>
      </div>

      {finished ? (
        /* ---------- Final screen ---------- */
        <div className="py-4">
          <div className="text-center mb-5">
            <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4">
              <Trophy className="w-9 h-9 text-indigo-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              You scored {score} / {ROUNDS.length} ({finalPct}%)
            </p>
            <p className="text-sm text-gray-500">
              Average human guesser: ~{AVG_HUMAN}%.{' '}
              {finalPct > AVG_HUMAN
                ? 'You beat the average — nice eye for tells!'
                : finalPct === AVG_HUMAN
                ? 'You matched the average human exactly.'
                : 'Below average this time — and that is exactly the point.'}
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-amber-800 mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              Why this matters
            </p>
            <ul className="text-sm text-amber-900 leading-relaxed space-y-2 list-disc pl-4">
              <li>
                In studies, even trained teachers score barely above chance
                when judging whether student writing is AI-generated.
              </li>
              <li>
                Automated AI detectors are unreliable too, with documented
                false positives — and they flag non-native English writers
                disproportionately, because careful, formal prose looks
                &ldquo;AI-like&rdquo; to them.
              </li>
              <li>
                So the answer isn&apos;t detector-policing — it&apos;s better
                assignment design: drafts, in-class writing, oral defenses, and
                tasks that make the thinking visible.
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-5">
            <p className="text-sm font-semibold text-indigo-800 mb-1.5 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 shrink-0" />
              What you just learned
            </p>
            <p className="text-sm text-indigo-900 leading-relaxed">
              AI text has real tells &mdash; hedging, tidy lists, generic
              positivity, zero lived detail &mdash; but they&apos;re unreliable
              signals, and neither humans nor detector tools can judge
              authorship consistently enough to accuse anyone.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Play again
            </button>
          </div>
        </div>
      ) : (
        /* ---------- Round view ---------- */
        <div>
          {/* Snippet card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
              {round.genre}
            </p>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed whitespace-pre-line">
              {revealed ? (
                <HighlightedText
                  text={round.text}
                  phrases={round.tells.map((t) => t.phrase)}
                  markClass={markClass}
                />
              ) : (
                round.text
              )}
            </p>
          </div>

          {!revealed ? (
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => handleVote(true)}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-semibold text-sm sm:text-base hover:border-indigo-400 hover:bg-indigo-50 active:scale-95 transition-all"
              >
                <Bot className="w-5 h-5 text-indigo-500" />
                AI-written
              </button>
              <button
                onClick={() => handleVote(false)}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-semibold text-sm sm:text-base hover:border-emerald-400 hover:bg-emerald-50 active:scale-95 transition-all"
              >
                <User className="w-5 h-5 text-emerald-500" />
                Human-written
              </button>
            </div>
          ) : (
            <div>
              {/* Result banner */}
              <div
                className={`flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm font-medium transition-all ${
                  correct
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-rose-50 border border-rose-200 text-rose-800'
                }`}
              >
                {correct ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 text-rose-600" />
                )}
                <span>
                  {correct ? 'Correct — ' : 'Not this time — '}this one was{' '}
                  <strong>
                    {round.isAI ? 'AI-written' : 'human-written'}
                  </strong>
                  .
                </span>
              </div>

              {/* Tells */}
              <div className="space-y-2 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  The tells (highlighted above)
                </p>
                {round.tells.map((t) => (
                  <div
                    key={t.phrase}
                    className="flex gap-2.5 bg-white border border-gray-200 rounded-lg p-3"
                  >
                    <span
                      className={`shrink-0 mt-1 w-2 h-2 rounded-full ${
                        round.isAI ? 'bg-amber-400' : 'bg-emerald-400'
                      }`}
                    />
                    <p className="text-sm text-gray-700 leading-snug">
                      <span className="font-semibold text-gray-900">
                        &ldquo;{t.phrase}&rdquo;
                      </span>{' '}
                      &mdash; {t.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Explanation */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 mb-4 flex gap-2.5">
                <Lightbulb className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <p className="text-sm text-indigo-900 leading-relaxed">
                  {round.explanation}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
              >
                {roundIndex + 1 >= ROUNDS.length ? 'See results' : 'Next snippet'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      {!finished && (
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex gap-1 shrink-0">
              {ROUNDS.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < roundIndex || (i === roundIndex && revealed)
                      ? 'bg-indigo-600'
                      : i === roundIndex
                      ? 'bg-indigo-300'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium truncate">
              {answered > 0
                ? `You: ${score}/${answered} (${pct}%) · Avg human: ~${AVG_HUMAN}%`
                : `Snippet 1 of ${ROUNDS.length} · Avg human: ~${AVG_HUMAN}%`}
            </span>
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
