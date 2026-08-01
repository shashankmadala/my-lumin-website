import { useEffect, useRef, useState } from 'react';
import {
  Layers,
  Check,
  Repeat,
  Shuffle,
  RotateCcw,
  Trophy,
  Sparkles,
  MousePointerClick,
} from 'lucide-react';

const DEFAULT_CARDS = [
  {
    front: 'Artificial Intelligence (AI)',
    back: 'Technology that lets computers do tasks that normally need human intelligence — like recognizing faces, understanding speech, or suggesting the next word in a sentence.',
  },
  {
    front: 'Machine Learning',
    back: "A way of building AI where the computer learns patterns from examples instead of following hand-written rules. Show it thousands of cat photos, and it figures out what 'cat' looks like on its own.",
  },
  {
    front: 'Neural Network',
    back: "A computer system loosely inspired by the brain: layers of simple 'neurons' pass signals to each other, and together they can learn very complex patterns like language and images.",
  },
  {
    front: 'Training Data',
    back: "The examples an AI learns from. Its quality matters most: if the examples are biased, incomplete, or wrong, the AI's answers will be too — garbage in, garbage out.",
  },
  {
    front: 'Algorithm',
    back: 'A step-by-step set of instructions for solving a problem — like a recipe for the computer to follow. Every AI system runs on algorithms.',
  },
  {
    front: 'Prompt',
    back: 'The instruction or question you give an AI. Clear, specific prompts get much better answers — writing good prompts is a skill you can practice.',
  },
];

function shuffleArray(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const FLIP_MS = 500;

export default function FlashcardDeck({ title = 'Key terms review', cards = DEFAULT_CARDS, onComplete }) {
  const total = (cards || []).length;

  const [queue, setQueue] = useState(() => cards.map((_, i) => i)); // card indices still in play
  const [mastered, setMastered] = useState([]); // card indices marked "Got it"
  const [flipped, setFlipped] = useState(false);
  const [advancing, setAdvancing] = useState(false);
  const [lastAction, setLastAction] = useState(null); // 'got' | 'again' | null
  const completedOnce = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const done = total > 0 && queue.length === 0;
  const currentIdx = queue.length > 0 ? queue[0] : null;
  const currentCard = currentIdx !== null ? cards[currentIdx] : null;

  const flip = () => {
    if (advancing || done) return;
    setFlipped((f) => !f);
    setLastAction(null);
  };

  const handleGotIt = () => {
    if (!flipped || advancing) return;
    const next = queue.slice(1);
    setAdvancing(true);
    setFlipped(false);
    setLastAction('got');
    timerRef.current = setTimeout(() => {
      setQueue(next);
      setMastered((m) => [...m, currentIdx]);
      setAdvancing(false);
      setLastAction(null);
      if (next.length === 0 && !completedOnce.current) {
        completedOnce.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
    }, FLIP_MS * 0.7);
  };

  const handleReviewAgain = () => {
    if (!flipped || advancing) return;
    setAdvancing(true);
    setFlipped(false);
    setLastAction('again');
    timerRef.current = setTimeout(() => {
      setQueue((q) => (q.length > 1 ? [...q.slice(1), q[0]] : q));
      setAdvancing(false);
      setLastAction(null);
    }, FLIP_MS * 0.7);
  };

  const handleShuffle = () => {
    if (advancing || queue.length <= 1) return;
    setFlipped(false);
    setQueue((q) => shuffleArray(q));
    setLastAction(null);
  };

  const reset = () => {
    clearTimeout(timerRef.current);
    setQueue(cards.map((_, i) => i));
    setMastered([]);
    setFlipped(false);
    setAdvancing(false);
    setLastAction(null);
  };

  if (total === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center text-gray-500">
        No cards in this deck yet — pass a cards prop with at least one card.
      </div>
    );
  }

  const pct = Math.round((mastered.length / total) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="bg-blue-50 text-blue-600 rounded-xl p-2.5 shrink-0">
          <Layers className="w-6 h-6" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Tap a card to flip it. Know it? Hit &quot;Got it.&quot; Not yet? It goes back in the deck.
          </p>
        </div>
        {!done && (
          <button
            onClick={handleShuffle}
            disabled={advancing || queue.length <= 1}
            title="Shuffle remaining cards"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-blue-600 disabled:opacity-40 disabled:hover:text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1.5 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
        )}
      </div>

      {done ? (
        /* ---------- All mastered ---------- */
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-4 mb-4 shadow-md">
            <Trophy className="w-8 h-8" />
          </div>
          <p className="text-2xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
            Deck mastered! <Sparkles className="w-5 h-5 text-amber-400" />
          </p>
          <p className="text-gray-600 mt-1 mb-5">
            You got all {total} terms. Here they are one more time — reading them again right now
            helps them stick.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left mb-5">
            {cards.map((c, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-3 bg-gray-50">
                <p className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  {c.front}
                </p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{c.back}</p>
              </div>
            ))}
          </div>

          <div className="text-left bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-5">
            <p className="text-sm font-bold text-indigo-900 mb-1">What you just learned</p>
            <p className="text-sm text-indigo-900/80 leading-relaxed">
              Repeating a card until you can recall it — instead of just re-reading — is called
              active recall, and it&apos;s one of the most effective study techniques there is. You
              just used it to lock in {total} core AI terms.
            </p>
          </div>

          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Play again
          </button>
        </div>
      ) : (
        /* ---------- Card in play ---------- */
        <div>
          <div
            role="button"
            tabIndex={0}
            aria-label={flipped ? 'Card back — press Enter to flip to the front' : 'Card front — press Enter to flip and reveal the definition'}
            onClick={flip}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                flip();
              }
            }}
            className="relative w-full h-56 sm:h-64 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-2xl"
            style={{ perspective: '1200px' }}
          >
            <div
              className="absolute inset-0"
              style={{
                transformStyle: 'preserve-3d',
                transition: `transform ${FLIP_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-6 text-center"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <p className="text-xl sm:text-2xl font-extrabold text-gray-900">
                  {currentCard.front}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-blue-500 font-semibold mt-4">
                  <MousePointerClick className="w-3.5 h-3.5" /> Tap or press Enter to flip
                </p>
              </div>
              {/* Back */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-indigo-300 bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex flex-col items-center justify-center p-6 text-center"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-blue-100 mb-2">
                  {currentCard.front}
                </p>
                <p className="text-sm sm:text-base leading-relaxed">{currentCard.back}</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={handleReviewAgain}
              disabled={!flipped || advancing}
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100 font-semibold px-4 py-2.5 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Repeat className="w-4 h-4" /> Review again
            </button>
            <button
              onClick={handleGotIt}
              disabled={!flipped || advancing}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Check className="w-4 h-4" /> Got it
            </button>
          </div>

          <p className="text-xs text-center mt-3 h-4 text-gray-500 transition-opacity duration-300">
            {lastAction === 'again' && 'No problem — this card goes to the back of the deck so you can try it again.'}
            {lastAction === 'got' && 'Nice — one more term locked in.'}
            {lastAction === null && !flipped && 'Try to recall the definition before you flip — that effort is what makes it stick.'}
            {lastAction === null && flipped && 'Be honest with yourself: could you have said that before flipping?'}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-700">
            {mastered.length} of {total} mastered
            {!done && queue.length > 0 && (
              <span className="text-gray-400 font-normal"> · {queue.length} left in deck</span>
            )}
          </span>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
