import { useMemo, useRef, useState } from 'react';
import {
  Shapes,
  Check,
  RotateCcw,
  PartyPopper,
  Lightbulb,
  MousePointerClick,
  Inbox,
} from 'lucide-react';

const DEFAULT_CATEGORIES = [
  { id: 'supervised', label: 'Supervised learning' },
  { id: 'unsupervised', label: 'Unsupervised learning' },
];

const DEFAULT_ITEMS = [
  {
    text: 'Predicting house prices from past sales',
    category: 'supervised',
    explanation:
      'Each past sale comes with the "right answer" — the price it sold for. Learning from labeled examples like this is supervised learning.',
  },
  {
    text: 'A spam filter trained on emails marked "spam" or "not spam"',
    category: 'supervised',
    explanation:
      'People already labeled every training email as spam or not spam. The model learns to copy those labels, which makes it supervised.',
  },
  {
    text: 'Grouping customers into segments with no predefined labels',
    category: 'unsupervised',
    explanation:
      'Nobody told the model what the groups should be — it discovers the segments on its own. Finding structure without labels is unsupervised learning.',
  },
  {
    text: 'Recognizing handwritten digits using labeled examples',
    category: 'supervised',
    explanation:
      'Every training image is tagged with the digit it shows (0-9). The model learns from those answer keys, so it is supervised.',
  },
  {
    text: 'Spotting unusual network traffic without any labels',
    category: 'unsupervised',
    explanation:
      'There is no list of "normal" vs "attack" examples — the model learns what typical traffic looks like and flags whatever does not fit. That is unsupervised anomaly detection.',
  },
  {
    text: 'Discovering hidden themes across thousands of articles',
    category: 'unsupervised',
    explanation:
      'The themes are not known ahead of time; the algorithm surfaces them by itself. No labels means unsupervised (this one is called topic modeling).',
  },
  {
    text: 'Diagnosing disease from scans labeled by doctors',
    category: 'supervised',
    explanation:
      'Doctors provided the diagnosis for each training scan. Those expert labels are exactly what makes this supervised learning.',
  },
  {
    text: 'Automatically organizing photos into similar-looking groups',
    category: 'unsupervised',
    explanation:
      'The app was never told which photos belong together — it clusters them by visual similarity on its own, which is unsupervised learning.',
  },
];

const DEFAULT_TAKEAWAY =
  'Supervised learning learns from labeled examples (data plus the right answers), while unsupervised learning finds hidden structure in data that has no labels.';

export default function SortingGame({
  title = 'Sort it out',
  instructions,
  categories = DEFAULT_CATEGORIES,
  items = DEFAULT_ITEMS,
  takeaway = DEFAULT_TAKEAWAY,
  onComplete,
}) {
  const [placed, setPlaced] = useState({}); // itemIndex -> categoryId
  const [locked, setLocked] = useState([]); // itemIndexes confirmed correct
  const [selected, setSelected] = useState(null); // itemIndex tapped in pool
  const [shaking, setShaking] = useState([]); // itemIndexes animating wrong
  const [feedback, setFeedback] = useState([]); // [{index, text, explanation}]
  const [missed, setMissed] = useState([]); // itemIndexes ever wrong (for score)
  const [attempts, setAttempts] = useState(0);
  const [complete, setComplete] = useState(false);
  const completedRef = useRef(false);

  const total = items.length;
  const poolIndexes = useMemo(
    () => items.map((_, i) => i).filter((i) => placed[i] === undefined),
    [items, placed]
  );
  const placedCount = total - poolIndexes.length;
  const allPlaced = poolIndexes.length === 0 && total > 0;
  const checking = shaking.length > 0;

  const gridClass =
    categories.length <= 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : categories.length === 3
        ? 'grid-cols-1 sm:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  const effectiveInstructions =
    instructions ||
    'Tap an item to pick it up, then tap the category it belongs in. Sort everything, then check your answers.';

  const placeItem = (itemIndex, categoryId) => {
    if (complete || checking || locked.includes(itemIndex)) return;
    setPlaced((prev) => ({ ...prev, [itemIndex]: categoryId }));
    setSelected(null);
  };

  const returnToPool = (itemIndex) => {
    if (complete || checking || locked.includes(itemIndex)) return;
    setPlaced((prev) => {
      const next = { ...prev };
      delete next[itemIndex];
      return next;
    });
  };

  const handleBucketTap = (categoryId) => {
    if (selected !== null) placeItem(selected, categoryId);
  };

  const handleCheck = () => {
    if (!allPlaced || complete || checking) return;
    setAttempts((a) => a + 1);
    const wrong = [];
    const newlyCorrect = [];
    items.forEach((item, i) => {
      if (locked.includes(i)) return;
      if (placed[i] === item.category) newlyCorrect.push(i);
      else wrong.push(i);
    });

    setLocked((prev) => [...prev, ...newlyCorrect]);

    if (wrong.length === 0) {
      setFeedback([]);
      setComplete(true);
      if (!completedRef.current) {
        completedRef.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
      return;
    }

    setMissed((prev) => [...new Set([...prev, ...wrong])]);
    setFeedback(
      wrong.map((i) => ({
        index: i,
        text: items[i].text,
        explanation: items[i].explanation,
      }))
    );
    setShaking(wrong);
    setTimeout(() => {
      setPlaced((prev) => {
        const next = { ...prev };
        wrong.forEach((i) => delete next[i]);
        return next;
      });
      setShaking([]);
    }, 650);
  };

  const handleReset = () => {
    setPlaced({});
    setLocked([]);
    setSelected(null);
    setShaking([]);
    setFeedback([]);
    setMissed([]);
    setAttempts(0);
    setComplete(false);
  };

  const firstTryScore = total - missed.length;

  const onDragStart = (e, itemIndex) => {
    e.dataTransfer.setData('text/plain', String(itemIndex));
    e.dataTransfer.effectAllowed = 'move';
    setSelected(itemIndex);
  };

  const onDrop = (e, categoryId) => {
    e.preventDefault();
    const idx = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (!Number.isNaN(idx)) placeItem(idx, categoryId);
  };

  if (total === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center text-gray-500">
        No items to sort yet.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7">
      <style>{`
        @keyframes sg-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .sg-shake { animation: sg-shake 0.5s ease-in-out; }
      `}</style>

      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
          <Shapes className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{effectiveInstructions}</p>
        </div>
      </div>

      {complete ? (
        /* Celebration */
        <div className="text-center py-6 px-2">
          <div className="mx-auto w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <PartyPopper className="w-7 h-7" />
          </div>
          <p className="text-xl font-bold text-gray-900 mb-1">All sorted!</p>
          <p className="text-sm text-gray-600 mb-4">
            You got {firstTryScore} of {total} right on the first try
            {attempts > 1 ? ` (${attempts} checks total)` : ''}.
          </p>
          <div className="max-w-xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-4 text-left flex gap-3 mb-5">
            <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-900">
              <span className="font-semibold">What you just learned: </span>
              {takeaway}
            </p>
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Play again
          </button>
        </div>
      ) : (
        <>
          {/* Pool */}
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2 flex items-center gap-1.5">
              <Inbox className="w-3.5 h-3.5" /> Items to sort
            </p>
            {poolIndexes.length === 0 ? (
              <p className="text-sm text-gray-400 italic py-2">
                Everything is placed — hit &ldquo;Check answers&rdquo; below.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {poolIndexes.map((i) => (
                  <button
                    key={i}
                    draggable
                    onDragStart={(e) => onDragStart(e, i)}
                    onClick={() => setSelected(selected === i ? null : i)}
                    className={`px-3 py-2 rounded-xl border text-sm text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                      selected === i
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md scale-[1.03]'
                        : 'bg-white border-gray-300 text-gray-800 hover:border-blue-400 hover:shadow-sm'
                    }`}
                  >
                    {items[i].text}
                  </button>
                ))}
              </div>
            )}
            {selected !== null && (
              <p className="mt-2 text-xs text-blue-600 flex items-center gap-1 animate-pulse">
                <MousePointerClick className="w-3.5 h-3.5" /> Now tap the
                category where it belongs
              </p>
            )}
          </div>

          {/* Buckets */}
          <div className={`grid ${gridClass} gap-3 mb-5`}>
            {categories.map((cat) => {
              const chipIndexes = items
                .map((_, i) => i)
                .filter((i) => placed[i] === cat.id);
              return (
                <div
                  key={cat.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleBucketTap(cat.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleBucketTap(cat.id);
                    }
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => onDrop(e, cat.id)}
                  className={`rounded-xl border-2 p-3 min-h-[7rem] transition-all duration-200 ${
                    selected !== null
                      ? 'border-blue-400 border-dashed bg-blue-50/60 cursor-pointer'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center justify-between">
                    <span>{cat.label}</span>
                    <span className="text-xs font-normal text-gray-400">
                      {chipIndexes.length}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {chipIndexes.map((i) => {
                      const isLocked = locked.includes(i);
                      const isShaking = shaking.includes(i);
                      return (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            returnToPool(i);
                          }}
                          disabled={isLocked || isShaking}
                          title={
                            isLocked
                              ? 'Correct!'
                              : 'Tap to send back to the pool'
                          }
                          className={`px-2.5 py-1.5 rounded-lg border text-xs inline-flex items-center gap-1 text-left transition-all duration-200 ${
                            isLocked
                              ? 'bg-green-50 border-green-300 text-green-800 cursor-default'
                              : isShaking
                                ? 'sg-shake bg-red-50 border-red-300 text-red-700'
                                : 'bg-white border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-600'
                          }`}
                        >
                          {isLocked && <Check className="w-3 h-3 shrink-0" />}
                          {items[i].text}
                        </button>
                      );
                    })}
                    {chipIndexes.length === 0 && (
                      <span className="text-xs text-gray-400 italic">
                        {selected !== null ? 'Tap here to place it' : 'Empty'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback after a wrong check */}
          {feedback.length > 0 && (
            <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> Almost! These went back to the
                pool — here is why:
              </p>
              <ul className="space-y-2">
                {feedback.map((f) => (
                  <li key={f.index} className="text-sm text-amber-900">
                    <span className="font-semibold">&ldquo;{f.text}&rdquo;</span> —{' '}
                    {f.explanation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Check button */}
          <button
            onClick={handleCheck}
            disabled={!allPlaced || checking}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              allPlaced && !checking
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {checking
              ? 'Checking…'
              : allPlaced
                ? 'Check answers'
                : `Place ${poolIndexes.length} more to check`}
          </button>
        </>
      )}

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>
            {placedCount}/{total} placed
          </span>
          <span className="w-24 sm:w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <span
              className="block h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(locked.length / total) * 100}%` }}
            />
          </span>
          <span>{locked.length} correct</span>
          {attempts > 0 && <span>· Attempt {attempts}</span>}
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
    </div>
  );
}
