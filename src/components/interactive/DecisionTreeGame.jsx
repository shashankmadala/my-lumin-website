/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useMemo } from 'react';
import {
  GitBranch,
  RotateCcw,
  Undo2,
  Check,
  Trophy,
  Lightbulb,
  Sparkles,
  PartyPopper,
  Feather,
  Wind,
  Droplets,
  Footprints,
  Egg,
  Thermometer,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Build a Decision Tree — sort 8 animals into their own leaves by asking
// yes/no questions about features, the exact way a tree model classifies.
// ---------------------------------------------------------------------------

const ANIMALS = [
  { id: 'penguin', name: 'Penguin', emoji: '🐧', features: { hasFeathers: true, canFly: false, livesInWater: true, hasLegs: true, laysEggs: true, isWarmBlooded: true } },
  { id: 'eagle', name: 'Eagle', emoji: '🦅', features: { hasFeathers: true, canFly: true, livesInWater: false, hasLegs: true, laysEggs: true, isWarmBlooded: true } },
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', features: { hasFeathers: false, canFly: false, livesInWater: true, hasLegs: false, laysEggs: false, isWarmBlooded: true } },
  { id: 'fish', name: 'Fish', emoji: '🐠', features: { hasFeathers: false, canFly: false, livesInWater: true, hasLegs: false, laysEggs: true, isWarmBlooded: false } },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', features: { hasFeathers: false, canFly: false, livesInWater: false, hasLegs: true, laysEggs: false, isWarmBlooded: true } },
  { id: 'bat', name: 'Bat', emoji: '🦇', features: { hasFeathers: false, canFly: true, livesInWater: false, hasLegs: true, laysEggs: false, isWarmBlooded: true } },
  { id: 'snake', name: 'Snake', emoji: '🐍', features: { hasFeathers: false, canFly: false, livesInWater: false, hasLegs: false, laysEggs: true, isWarmBlooded: false } },
  { id: 'frog', name: 'Frog', emoji: '🐸', features: { hasFeathers: false, canFly: false, livesInWater: true, hasLegs: true, laysEggs: true, isWarmBlooded: false } },
];

const ANIMAL_MAP = Object.fromEntries(ANIMALS.map((a) => [a.id, a]));

const FEATURES = [
  { key: 'hasFeathers', label: 'Does it have feathers?', icon: Feather },
  { key: 'canFly', label: 'Can it fly?', icon: Wind },
  { key: 'livesInWater', label: 'Does it live in water?', icon: Droplets },
  { key: 'hasLegs', label: 'Does it have legs?', icon: Footprints },
  { key: 'laysEggs', label: 'Does it lay eggs?', icon: Egg },
  { key: 'isWarmBlooded', label: 'Is it warm-blooded?', icon: Thermometer },
];

const FEATURE_MAP = Object.fromEntries(FEATURES.map((f) => [f.key, f]));

// Every animal is its own species, so a node's entropy is log2(count).
const log2 = (n) => (n <= 1 ? 0 : Math.log2(n));
const splitGain = (total, yesCount, noCount) =>
  log2(total) - ((yesCount / total) * log2(yesCount) + (noCount / total) * log2(noCount));

const isPure = (animalIds) => {
  if (animalIds.length <= 1) return true;
  const first = ANIMAL_MAP[animalIds[0]].features;
  return animalIds.every((id) =>
    FEATURES.every((f) => ANIMAL_MAP[id].features[f.key] === first[f.key])
  );
};

const featureCounts = (animalIds, featureKey) => {
  const yes = animalIds.filter((id) => ANIMAL_MAP[id].features[featureKey]).length;
  return { yes, no: animalIds.length - yes };
};

const bestFeatureFor = (animalIds) => {
  let best = null;
  FEATURES.forEach((f) => {
    const { yes, no } = featureCounts(animalIds, f.key);
    if (yes === 0 || no === 0) return; // useless question — zero information gain
    const gain = splitGain(animalIds.length, yes, no);
    if (!best || gain > best.gain + 1e-9) best = { key: f.key, gain, yes, no };
  });
  return best;
};

const emojisOf = (animalIds) => animalIds.map((id) => ANIMAL_MAP[id].emoji).join(' ');

const makeRootNodes = () => ({
  n0: { id: 'n0', animals: ANIMALS.map((a) => a.id), question: null, yes: null, no: null },
});

// Small helper: new nodes mount with a gentle fade/slide so splits feel alive.
function FadeIn({ children, className = '' }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`transition-all duration-300 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function DecisionTreeGame({ onComplete }) {
  const [nodes, setNodes] = useState(makeRootNodes);
  const [nextId, setNextId] = useState(1);
  const [history, setHistory] = useState([]); // [{ nodeId, feature, yesId, noId }]
  const [selectedId, setSelectedId] = useState('n0');
  const [feedback, setFeedback] = useState(null);
  const [hint, setHint] = useState(null); // { nodeId, feature, yes, no }
  const [completed, setCompleted] = useState(false);
  const completeFired = useRef(false);

  const questionsUsed = history.length;

  const sortedCount = useMemo(
    () =>
      Object.values(nodes)
        .filter((n) => !n.question && isPure(n.animals))
        .reduce((sum, n) => sum + n.animals.length, 0),
    [nodes]
  );

  const maxDepth = useMemo(() => {
    const walk = (id, d) => {
      const n = nodes[id];
      if (!n || !n.question) return d;
      return Math.max(walk(n.yes, d + 1), walk(n.no, d + 1));
    };
    return walk('n0', 0);
  }, [nodes]);

  // ----- completion check -----
  useEffect(() => {
    if (completed || history.length === 0) return;
    const stillOpen = Object.values(nodes).some((n) => !n.question && !isPure(n.animals));
    if (!stillOpen) {
      setCompleted(true);
      setSelectedId(null);
      setHint(null);
      if (!completeFired.current) {
        completeFired.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
    }
  }, [nodes, history, completed, onComplete]);

  // ----- idle hint: after 20s with no action, suggest a high-gain question -----
  useEffect(() => {
    if (completed) return undefined;
    const timer = setTimeout(() => {
      const open = Object.values(nodes).filter((n) => !n.question && !isPure(n.animals));
      if (open.length === 0) return;
      const target =
        open.find((n) => n.id === selectedId) ||
        open.reduce((a, b) => (b.animals.length > a.animals.length ? b : a));
      const best = bestFeatureFor(target.animals);
      if (best) setHint({ nodeId: target.id, feature: best.key, yes: best.yes, no: best.no });
    }, 20000);
    return () => clearTimeout(timer);
  }, [nodes, selectedId, completed]);

  // ----- actions -----
  const handleSelect = (nodeId) => {
    if (completed) return;
    setSelectedId((cur) => (cur === nodeId ? null : nodeId));
  };

  const handleSplit = (nodeId, featureKey) => {
    const node = nodes[nodeId];
    if (!node || node.question || completed) return;
    const yesA = node.animals.filter((id) => ANIMAL_MAP[id].features[featureKey]);
    const noA = node.animals.filter((id) => !ANIMAL_MAP[id].features[featureKey]);
    if (yesA.length === 0 || noA.length === 0) return; // guarded in UI too

    const yesId = `n${nextId}`;
    const noId = `n${nextId + 1}`;
    const newNodes = {
      ...nodes,
      [nodeId]: { ...node, question: featureKey, yes: yesId, no: noId },
      [yesId]: { id: yesId, animals: yesA, question: null, yes: null, no: null },
      [noId]: { id: noId, animals: noA, question: null, yes: null, no: null },
    };
    setNodes(newNodes);
    setNextId(nextId + 2);
    setHistory((h) => [...h, { nodeId, feature: featureKey, yesId, noId }]);
    setHint(null);

    // Build teaching feedback
    const feature = FEATURE_MAP[featureKey];
    const total = node.animals.length;
    const chosenGain = splitGain(total, yesA.length, noA.length);
    const best = bestFeatureFor(node.animals);
    const wasBest = best && chosenGain >= best.gain - 1e-9;
    const lines = [];
    lines.push(
      `${emojisOf(yesA)} answered YES · ${emojisOf(noA)} answered NO — a ${yesA.length}-${noA.length} split.`
    );
    if (wasBest) {
      lines.push(
        'That was the highest-information question available for that group. Real tree algorithms score every question by how cleanly it purifies the group (information gain) — and they would have picked the same one.'
      );
    } else {
      lines.push(
        `That works! But "${FEATURE_MAP[best.key].label}" would have split this group ${best.yes}-${best.no} — more evenly. Algorithms measure this as information gain and always ask the top-scoring question first.`
      );
    }
    [yesA, noA].forEach((group) => {
      if (group.length === 1) {
        const a = ANIMAL_MAP[group[0]];
        lines.push(`${a.emoji} ${a.name} is now alone — that branch becomes a finished leaf.`);
      }
    });
    setFeedback({ question: `You asked: "${feature.label}"`, lines });

    // Auto-focus the next group that still needs work
    const open = Object.values(newNodes).filter((n) => !n.question && !isPure(n.animals));
    const nextSel = open.find((n) => n.id === yesId) || open.find((n) => n.id === noId) || open[0];
    setSelectedId(nextSel ? nextSel.id : null);
  };

  const handleUndo = () => {
    if (history.length === 0 || completed) return;
    const last = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setNodes((prev) => {
      const next = { ...prev };
      delete next[last.yesId];
      delete next[last.noId];
      next[last.nodeId] = { ...next[last.nodeId], question: null, yes: null, no: null };
      return next;
    });
    setSelectedId(last.nodeId);
    setFeedback({
      question: 'Split undone',
      lines: [
        `"${FEATURE_MAP[last.feature].label}" was rolled back — that group is waiting for a new question.`,
      ],
    });
    setHint(null);
  };

  const handleReset = () => {
    setNodes(makeRootNodes());
    setNextId(1);
    setHistory([]);
    setSelectedId('n0');
    setFeedback(null);
    setHint(null);
    setCompleted(false);
  };

  // ----- score vs par (par = deepest path of 4-5 questions; perfect tree = 3) -----
  const scoreInfo = useMemo(() => {
    if (maxDepth <= 3) {
      return {
        title: 'Under par — a perfect tree!',
        detail:
          'Your longest path asks only 3 questions before reaching an answer — the theoretical best for telling 8 animals apart.',
      };
    }
    if (maxDepth <= 5) {
      return {
        title: 'Right on par!',
        detail: `Your longest path asks ${maxDepth} questions. Par is 4-5 — and a perfect tree identifies every animal in just 3. Starting with even splits keeps trees short.`,
      };
    }
    return {
      title: 'Complete — but a bit lanky!',
      detail: `Your longest path asks ${maxDepth} questions (par is 4-5, perfect is 3). Next time, open with a question that splits the group evenly — "Does it live in water?" cuts the 8 animals into 4 and 4.`,
    };
  }, [maxDepth]);

  // ----- renderers -----
  const renderPicker = (node) => {
    const nodeHint = hint && hint.nodeId === node.id ? hint : null;
    return (
      <div className="mt-3 border-t border-blue-100 pt-3">
        <p className="text-xs font-medium text-gray-500 mb-2">
          Pick a question — the more even the split, the more it tells you:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {FEATURES.map((f) => {
            const { yes, no } = featureCounts(node.animals, f.key);
            const useless = yes === 0 || no === 0;
            const hinted = nodeHint && nodeHint.feature === f.key;
            const Icon = f.icon;
            return (
              <button
                key={f.key}
                type="button"
                disabled={useless}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSplit(node.id, f.key);
                }}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition-all duration-200 ${
                  useless
                    ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                    : hinted
                      ? 'border-amber-300 bg-amber-50 text-gray-800 ring-2 ring-amber-200 hover:bg-amber-100'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50 active:scale-[0.98]'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    useless ? 'text-gray-300' : hinted ? 'text-amber-500' : 'text-blue-600'
                  }`}
                />
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium leading-tight">{f.label}</span>
                  <span className={`block text-xs ${useless ? 'text-gray-300' : 'text-gray-400'}`}>
                    {useless ? 'everyone answers the same — zero gain' : `${yes} yes · ${no} no`}
                  </span>
                </span>
                {hinted && <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderNode = (id, branchLabel) => {
    const node = nodes[id];
    if (!node) return null;
    const pure = isPure(node.animals);
    const split = Boolean(node.question);
    const selected = selectedId === id;
    const hinted = hint && hint.nodeId === id;

    const branchBadge = branchLabel ? (
      <span
        className={`inline-block text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full mb-1 ${
          branchLabel === 'YES' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
        }`}
      >
        {branchLabel}
      </span>
    ) : null;

    // Finished leaf
    if (!split && pure) {
      const names = node.animals.map((aid) => ANIMAL_MAP[aid].name).join(' + ');
      return (
        <FadeIn>
          {branchBadge}
          <div className="rounded-xl border border-green-200 bg-green-50 px-3 py-2 flex items-center gap-2 transition-all duration-300">
            <span className="text-2xl leading-none">{emojisOf(node.animals)}</span>
            <span className="text-sm font-semibold text-green-800 flex-1 min-w-0">{names}</span>
            <span className="flex items-center gap-1 text-xs font-medium text-green-700 shrink-0">
              <Check className="w-4 h-4" /> Leaf
            </span>
          </div>
        </FadeIn>
      );
    }

    // Split node: question header + nested YES/NO children
    if (split) {
      const f = FEATURE_MAP[node.question];
      const Icon = f.icon;
      return (
        <FadeIn>
          {branchBadge}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 px-3 py-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="text-sm font-semibold text-indigo-800">{f.label}</span>
            </div>
            <div className="mt-2 space-y-2 border-l-2 border-indigo-200 pl-2 sm:pl-3">
              <div>{renderNode(node.yes, 'YES')}</div>
              <div>{renderNode(node.no, 'NO')}</div>
            </div>
          </div>
        </FadeIn>
      );
    }

    // Open (unsplit, impure) node — tap to choose a question
    return (
      <FadeIn>
        {branchBadge}
        <div
          className={`rounded-xl border-2 border-dashed px-3 py-2 transition-all duration-300 ${
            selected
              ? 'border-blue-400 bg-blue-50/70'
              : hinted
                ? 'border-amber-300 bg-amber-50/60'
                : 'border-gray-300 bg-white hover:border-blue-300'
          }`}
        >
          <button
            type="button"
            onClick={() => handleSelect(id)}
            className="w-full text-left flex items-center gap-2"
          >
            <span className="text-2xl leading-none flex-1 min-w-0 break-words">
              {emojisOf(node.animals)}
            </span>
            <span
              className={`text-xs font-medium shrink-0 transition-colors ${
                selected ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              {selected ? 'Choose below' : 'Tap to ask a question'}
            </span>
          </button>
          {selected && renderPicker(node)}
        </div>
      </FadeIn>
    );
  };

  // ----- layout -----
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-blue-100 rounded-xl p-2 shrink-0">
          <GitBranch className="w-5 h-5 text-blue-600" />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900">Build a Decision Tree</h3>
          <p className="text-sm text-gray-500">
            Tap a group of animals and ask yes/no questions until every animal stands alone. Par:
            keep every path to 4-5 questions — a perfect tree needs just 3.
          </p>
        </div>
      </div>

      {/* Celebration */}
      {completed && (
        <FadeIn className="mb-4">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
              <h4 className="font-bold text-gray-900">{scoreInfo.title}</h4>
              <PartyPopper className="w-5 h-5 text-indigo-500 shrink-0" />
            </div>
            <p className="text-sm text-gray-700 mb-2">
              All 8 animals sorted using {questionsUsed} questions — your deepest path asks{' '}
              {maxDepth}.
            </p>
            <p className="text-sm text-gray-600 mb-3">{scoreInfo.detail}</p>
            <div className="rounded-xl bg-white/70 border border-indigo-100 p-3 mb-3">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-indigo-700">What you just learned: </span>A
                decision tree classifies by asking yes/no questions about features, splitting the
                data cleaner at every branch. You just built the exact model a computer builds —
                real algorithms measure which question best purifies each group (information gain)
                and pick it automatically. A random forest = hundreds of these trees voting.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
            >
              <RotateCcw className="w-4 h-4" /> Play again
            </button>
          </div>
        </FadeIn>
      )}

      {/* Hint bar */}
      {!completed && hint && (
        <FadeIn className="mb-3">
          <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
            <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800">
              Stuck? Try &ldquo;{FEATURE_MAP[hint.feature].label}&rdquo; on the highlighted group — it splits{' '}
              {hint.yes} / {hint.no}, the most even (highest-gain) split available there.
            </p>
          </div>
        </FadeIn>
      )}

      {/* Tree */}
      <div className="space-y-2">{renderNode('n0', null)}</div>

      {/* Teaching feedback */}
      {feedback && !completed && (
        <FadeIn className="mt-3">
          <div className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2">
            <p className="text-xs font-semibold text-blue-800 mb-1">{feedback.question}</p>
            {feedback.lines.map((line, i) => (
              <p key={i} className="text-xs text-blue-900/80 mb-1 last:mb-0">
                {line}
              </p>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2">
        <p className="text-xs text-gray-500 flex-1 min-w-[10rem]">
          <span className="font-semibold text-gray-700">{sortedCount}/8</span> animals in leaves ·{' '}
          <span className="font-semibold text-gray-700">{questionsUsed}</span> questions
          {questionsUsed > 0 && (
            <>
              {' '}
              · deepest path <span className="font-semibold text-gray-700">{maxDepth}</span>
            </>
          )}
        </p>
        <button
          type="button"
          onClick={handleUndo}
          disabled={history.length === 0 || completed}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
            history.length === 0 || completed
              ? 'border-gray-100 text-gray-300 cursor-not-allowed'
              : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 active:scale-[0.97]'
          }`}
        >
          <Undo2 className="w-3.5 h-3.5" /> Undo split
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={history.length === 0 && !completed}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
            history.length === 0 && !completed
              ? 'border-gray-100 text-gray-300 cursor-not-allowed'
              : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 active:scale-[0.97]'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
    </div>
  );
}
