/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo, useRef } from 'react';
import {
  Mail,
  ShieldAlert,
  Inbox,
  Brain,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  PartyPopper,
  ArrowRight,
  Tag,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Data: 10 training emails + 5 test emails. Each email carries a `keywords`
// array — the tiny model only ever sees these words, which keeps the math
// honest and easy to explain to the learner.
// ---------------------------------------------------------------------------

const TRAIN_EMAILS = [
  {
    id: 'e1',
    from: 'prize-center@lucky-draw.biz',
    subject: 'Congratulations — you are a WINNER!',
    snippet: 'Claim your free prize now. Click before it expires!',
    truth: 'spam',
    keywords: ['winner', 'free', 'prize', 'click'],
  },
  {
    id: 'e2',
    from: 'maya@yourcompany.com',
    subject: 'Team meeting moved to 3pm',
    snippet: 'Can everyone check the shared schedule before we meet?',
    truth: 'ham',
    keywords: ['meeting', 'team', 'schedule'],
  },
  {
    id: 'e3',
    from: 'security@account-verify.net',
    subject: 'URGENT: verify your account now',
    snippet: 'Click this link within 24 hours or lose access forever.',
    truth: 'spam',
    keywords: ['urgent', 'click', 'account'],
  },
  {
    id: 'e6',
    from: 'alex@yourcompany.com',
    subject: 'Lunch on Thursday?',
    snippet: 'Want to grab lunch with the team after standup?',
    truth: 'ham',
    keywords: ['lunch', 'team'],
  },
  {
    id: 'e5',
    from: 'deals@shopblast.io',
    subject: 'Limited-time offer: 90% OFF everything',
    snippet: 'This exclusive offer ends tonight — act fast!',
    truth: 'spam',
    keywords: ['offer', 'limited', 'deal'],
  },
  {
    id: 'e4',
    from: 'sam@yourcompany.com',
    subject: 'Draft of the project report',
    snippet: 'Feedback welcome before the Friday deadline.',
    truth: 'ham',
    keywords: ['report', 'project', 'deadline'],
  },
  {
    id: 'e9',
    from: 'office@yourcompany.com',
    subject: 'FREE pizza in the cafeteria today!',
    snippet: 'We hit our quarterly goal — free pizza at noon for the whole team!',
    truth: 'ham',
    ambiguous: true,
    keywords: ['free', 'pizza', 'team'],
  },
  {
    id: 'e7',
    from: 'claims@cash-reward-center.com',
    subject: 'You have been selected for a cash reward',
    snippet: 'Guaranteed cash prize — just confirm your details.',
    truth: 'spam',
    keywords: ['cash', 'guarantee', 'prize'],
  },
  {
    id: 'e8',
    from: 'maya@yourcompany.com',
    subject: 'Notes from this morning',
    snippet: 'Action items and the updated schedule from our meeting are inside.',
    truth: 'ham',
    keywords: ['meeting', 'schedule', 'notes'],
  },
  {
    id: 'e10',
    from: 'events@growthguru.marketing',
    subject: 'Webinar tomorrow: 10x your productivity',
    snippet: 'Join our exclusive webinar — limited seats, register now!',
    truth: 'spam',
    ambiguous: true,
    keywords: ['webinar', 'limited', 'register'],
  },
];

const TEST_EMAILS = [
  {
    id: 't1',
    from: 'rewards@mega-prizes.net',
    subject: 'Claim your FREE reward now',
    snippet: 'Click here — your prize is waiting!',
    truth: 'spam',
    keywords: ['click', 'free', 'prize'],
  },
  {
    id: 't2',
    from: 'priya@yourcompany.com',
    subject: 'Rescheduling our team meeting',
    snippet: 'Does 10am work for everyone? I will update the schedule.',
    truth: 'ham',
    keywords: ['meeting', 'team', 'schedule'],
  },
  {
    id: 't3',
    from: 'winner-alert@cash4u.biz',
    subject: 'Exclusive cash offer inside',
    snippet: 'Guaranteed winnings — limited spots left!',
    truth: 'spam',
    keywords: ['cash', 'offer', 'limited', 'guarantee'],
  },
  {
    id: 't4',
    from: 'dev-lead@yourcompany.com',
    subject: 'Project deadline reminder',
    snippet: 'Final push, team — the report is due Friday.',
    truth: 'ham',
    keywords: ['project', 'deadline', 'report', 'team'],
  },
  {
    id: 't5',
    from: 'office@yourcompany.com',
    subject: 'Free coffee for the design team',
    snippet: 'To celebrate the launch — free coffee in the kitchen all day!',
    truth: 'ham',
    keywords: ['free', 'team'],
  },
];

// Build word stats {word: {spam: n, ham: n}} from any set of labels.
const buildStats = (labels) => {
  const stats = {};
  TRAIN_EMAILS.forEach((e) => {
    const label = labels[e.id];
    if (!label) return;
    e.keywords.forEach((w) => {
      if (!stats[w]) stats[w] = { spam: 0, ham: 0 };
      stats[w][label] += 1;
    });
  });
  return stats;
};

const predictFor = (email, stats) => {
  let spamScore = 0;
  let hamScore = 0;
  const words = email.keywords.map((w) => {
    const s = stats[w] || { spam: 0, ham: 0 };
    spamScore += s.spam;
    hamScore += s.ham;
    const lean = s.spam > s.ham ? 'spam' : s.ham > s.spam ? 'ham' : 'neutral';
    return { word: w, spam: s.spam, ham: s.ham, lean };
  });
  // A tie (or no signal at all) defaults to "not spam", like real filters do.
  const predicted = spamScore > hamScore ? 'spam' : 'ham';
  return { words, spamScore, hamScore, predicted };
};

// A "perfect labeler" baseline, computed once from the true labels.
const PERFECT_STATS = buildStats(
  Object.fromEntries(TRAIN_EMAILS.map((e) => [e.id, e.truth]))
);
const PERFECT_CORRECT = TEST_EMAILS.filter(
  (e) => predictFor(e, PERFECT_STATS).predicted === e.truth
).length;

const FIT_MESSAGES = [
  { at: 0, text: 'Sorting the 10 emails into your two piles…' },
  { at: 30, text: 'Counting how often each word appears in each pile…' },
  { at: 60, text: 'Marking words that lean spammy vs. safe…' },
  { at: 92, text: 'Done! Your model is ready to be tested.' },
];

const WordChip = ({ word, spam, ham, lean }) => {
  const styles =
    lean === 'spam'
      ? 'bg-red-50 border-red-200 text-red-700'
      : lean === 'ham'
        ? 'bg-green-50 border-green-200 text-green-700'
        : 'bg-gray-50 border-gray-200 text-gray-600';
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium ${styles}`}
    >
      <Tag className="w-3 h-3" />
      {word}
      <span className="opacity-70">
        ({spam}× spam / {ham}× safe)
      </span>
    </span>
  );
};

export default function TrainingSimulator({ onComplete }) {
  const [phase, setPhase] = useState('train'); // train | fitting | test | done
  const [trainIndex, setTrainIndex] = useState(0);
  const [labels, setLabels] = useState({});
  const [justLabeled, setJustLabeled] = useState(null);
  const [fitProgress, setFitProgress] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const timerRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  // Fitting animation (~1.5s).
  useEffect(() => {
    if (phase !== 'fitting') return undefined;
    const iv = setInterval(() => {
      setFitProgress((p) => Math.min(100, p + 3));
    }, 45);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase === 'fitting' && fitProgress >= 100) {
      const t = setTimeout(() => setPhase('test'), 500);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [phase, fitProgress]);

  const stats = useMemo(() => buildStats(labels), [labels]);

  const spamSignals = useMemo(
    () =>
      Object.entries(stats)
        .filter(([, s]) => s.spam > s.ham)
        .sort((a, b) => b[1].spam - a[1].spam),
    [stats]
  );
  const safeSignals = useMemo(
    () =>
      Object.entries(stats)
        .filter(([, s]) => s.ham > s.spam)
        .sort((a, b) => b[1].ham - a[1].ham),
    [stats]
  );

  const mislabels = useMemo(
    () => TRAIN_EMAILS.filter((e) => labels[e.id] && labels[e.id] !== e.truth),
    [labels]
  );

  const spamPile = Object.values(labels).filter((l) => l === 'spam').length;
  const hamPile = Object.values(labels).filter((l) => l === 'ham').length;

  const handleLabel = (label) => {
    if (justLabeled) return;
    const email = TRAIN_EMAILS[trainIndex];
    setLabels((prev) => ({ ...prev, [email.id]: label }));
    setJustLabeled(label);
    timerRef.current = setTimeout(() => {
      setJustLabeled(null);
      if (trainIndex + 1 < TRAIN_EMAILS.length) {
        setTrainIndex((i) => i + 1);
      } else {
        setFitProgress(0);
        setPhase('fitting');
      }
    }, 1500);
  };

  const currentTest = TEST_EMAILS[testIndex];
  const currentPrediction = useMemo(
    () => (currentTest ? predictFor(currentTest, stats) : null),
    [currentTest, stats]
  );

  const handleReveal = () => {
    if (revealed || !currentPrediction) return;
    setTestResults((prev) => [
      ...prev,
      {
        emailId: currentTest.id,
        predicted: currentPrediction.predicted,
        correct: currentPrediction.predicted === currentTest.truth,
      },
    ]);
    setRevealed(true);
  };

  const handleNextTest = () => {
    if (testIndex + 1 < TEST_EMAILS.length) {
      setTestIndex((i) => i + 1);
      setRevealed(false);
    } else {
      setPhase('done');
      if (!completedRef.current) {
        completedRef.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
    }
  };

  const reset = () => {
    clearTimeout(timerRef.current);
    setPhase('train');
    setTrainIndex(0);
    setLabels({});
    setJustLabeled(null);
    setFitProgress(0);
    setTestIndex(0);
    setRevealed(false);
    setTestResults([]);
  };

  const correctCount = testResults.filter((r) => r.correct).length;

  // Blame trail: mislabeled training emails sharing a keyword with this email.
  const culpritsFor = (email) =>
    mislabels.filter((m) => m.keywords.some((k) => email.keywords.includes(k)));

  const fitMessage = FIT_MESSAGES.reduce(
    (msg, m) => (fitProgress >= m.at ? m.text : msg),
    FIT_MESSAGES[0].text
  );

  const renderEmailCard = (email, dimmed) => (
    <div
      className={`bg-gray-50 rounded-xl border border-gray-200 p-4 text-left transition-opacity duration-300 ${
        dimmed ? 'opacity-60' : 'opacity-100'
      }`}
    >
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
        <Mail className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="truncate">{email.from}</span>
      </div>
      <p className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
        {email.subject}
      </p>
      <p className="text-sm text-gray-600 mt-1">{email.snippet}</p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            Train a Spam Filter
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Label 10 emails, train a model on YOUR labels, then watch it judge 5
            brand-new emails.
          </p>
        </div>
      </div>

      {/* -------- Phase 1: TRAIN -------- */}
      {phase === 'train' && (
        <div>
          <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-2">
            <span>
              Email {trainIndex + 1} of {TRAIN_EMAILS.length}
            </span>
            <span className="flex items-center gap-3">
              <span className="text-red-500">Spam pile: {spamPile}</span>
              <span className="text-green-600">Inbox pile: {hamPile}</span>
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{
                width: `${(Object.keys(labels).length / TRAIN_EMAILS.length) * 100}%`,
              }}
            />
          </div>

          {renderEmailCard(TRAIN_EMAILS[trainIndex], !!justLabeled)}

          {!justLabeled ? (
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => handleLabel('spam')}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-200 bg-red-50 text-red-700 font-semibold text-sm hover:bg-red-100 hover:border-red-300 active:scale-[0.98] transition-all"
              >
                <XCircle className="w-4 h-4" /> Spam
              </button>
              <button
                onClick={() => handleLabel('ham')}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-green-200 bg-green-50 text-green-700 font-semibold text-sm hover:bg-green-100 hover:border-green-300 active:scale-[0.98] transition-all"
              >
                <Inbox className="w-4 h-4" /> Not Spam
              </button>
            </div>
          ) : (
            <div className="mt-4 p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 transition-all duration-300">
              <p className="text-sm text-indigo-800 font-medium mb-2">
                {justLabeled === 'spam'
                  ? 'Filed under Spam. Your model will now count these words as more spammy:'
                  : 'Filed under Not Spam. Your model will now count these words as more safe:'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TRAIN_EMAILS[trainIndex].keywords.map((w) => (
                  <span
                    key={w}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      justLabeled === 'spam'
                        ? 'bg-red-50 border-red-200 text-red-700'
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <p className="text-xs text-indigo-500 mt-2">
                {"There's no answer key here — the model trusts you completely."}
              </p>
            </div>
          )}
        </div>
      )}

      {/* -------- Phase 2: TRAINING ANIMATION -------- */}
      {phase === 'fitting' && (
        <div className="py-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-4 animate-pulse">
            <Brain className="w-8 h-8" />
          </div>
          <p className="font-semibold text-gray-900 mb-1">
            Training your model…
          </p>
          <p className="text-sm text-gray-500 mb-5 min-h-[1.25rem] transition-all">
            {fitMessage}
          </p>
          <div className="w-full max-w-sm mx-auto h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-100"
              style={{ width: `${fitProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* -------- Phase 3: TEST -------- */}
      {phase === 'test' && currentTest && (
        <div>
          {/* Model memory */}
          <div className="mb-4 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 flex items-center gap-1">
              <Brain className="w-3.5 h-3.5" /> What your model learned
            </p>
            <div className="flex flex-wrap gap-1.5">
              {spamSignals.slice(0, 5).map(([w, s]) => (
                <span
                  key={w}
                  className="px-2 py-0.5 rounded-full text-xs bg-red-50 border border-red-200 text-red-700"
                >
                  {w} = spammy ({s.spam}×)
                </span>
              ))}
              {safeSignals.slice(0, 5).map(([w, s]) => (
                <span
                  key={w}
                  className="px-2 py-0.5 rounded-full text-xs bg-green-50 border border-green-200 text-green-700"
                >
                  {w} = safe ({s.ham}×)
                </span>
              ))}
              {spamSignals.length === 0 && safeSignals.length === 0 && (
                <span className="text-xs text-gray-500">
                  Every word ended up neutral — your model has no signal to work
                  with!
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-2">
            <span>
              New email {testIndex + 1} of {TEST_EMAILS.length}
            </span>
            <span>
              Correct so far: {correctCount}/{testResults.length}
            </span>
          </div>

          {renderEmailCard(currentTest, false)}

          {!revealed ? (
            <button
              onClick={handleReveal}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 active:scale-[0.99] transition-all"
            >
              <Sparkles className="w-4 h-4" /> Ask your model
            </button>
          ) : (
            <div className="mt-4 space-y-3">
              {/* Word evidence */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  The model checked each word against your piles
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {currentPrediction.words.map((w) => (
                    <WordChip key={w.word} {...w} />
                  ))}
                </div>
                <p className="text-sm text-gray-700">
                  Spam score{' '}
                  <span className="font-bold text-red-600">
                    {currentPrediction.spamScore}
                  </span>{' '}
                  vs. safe score{' '}
                  <span className="font-bold text-green-600">
                    {currentPrediction.hamScore}
                  </span>{' '}
                  → model says{' '}
                  <span
                    className={`font-bold ${
                      currentPrediction.predicted === 'spam'
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {currentPrediction.predicted === 'spam'
                      ? 'SPAM'
                      : 'NOT SPAM'}
                  </span>
                  {currentPrediction.spamScore === 0 &&
                    currentPrediction.hamScore === 0 &&
                    ' (no signal at all, so it played it safe)'}
                  .
                </p>
              </div>

              {/* Verdict */}
              {currentPrediction.predicted === currentTest.truth ? (
                <div className="p-3.5 rounded-xl bg-green-50 border border-green-200 flex gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">Correct!</span> This really
                    was{' '}
                    {currentTest.truth === 'spam' ? 'spam' : 'a normal email'}.
                    Words from your{' '}
                    {currentTest.truth === 'spam' ? 'spam' : 'inbox'} pile showed
                    up here again, and the model followed the pattern you taught
                    it.
                  </p>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="flex gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <p>
                        <span className="font-semibold">Wrong!</span> This was
                        actually{' '}
                        {currentTest.truth === 'spam'
                          ? 'spam'
                          : 'a perfectly normal email'}
                        , but your model called it{' '}
                        {currentPrediction.predicted === 'spam'
                          ? 'spam'
                          : 'safe'}
                        .
                      </p>
                      {culpritsFor(currentTest).length > 0 ? (
                        <p className="mt-1.5">
                          {'Trace it back: during training you labeled '}
                          <span className="font-semibold">
                            &ldquo;{culpritsFor(currentTest)[0].subject}&rdquo;
                          </span>{' '}
                          as{' '}
                          {labels[culpritsFor(currentTest)[0].id] === 'spam'
                            ? 'Spam'
                            : 'Not Spam'}
                          {', so words like '}
                          <span className="font-semibold">
                            {culpritsFor(currentTest)[0]
                              .keywords.filter((k) =>
                                currentTest.keywords.includes(k)
                              )
                              .join(', ')}
                          </span>
                          {
                            ' were counted in the wrong pile. Your model learned from YOUR labels — it repeats your mistakes.'
                          }
                        </p>
                      ) : (
                        <p className="mt-1.5">
                          {
                            'The model only counts words — and these words simply did not give it a strong enough signal to get this one right.'
                          }
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleNextTest}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 active:scale-[0.99] transition-all"
              >
                {testIndex + 1 < TEST_EMAILS.length
                  ? 'Next email'
                  : 'See final results'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* -------- Phase 4: DONE -------- */}
      {phase === 'done' && (
        <div>
          <div className="text-center mb-5">
            <div className="inline-flex p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-2">
              <PartyPopper className="w-8 h-8" />
            </div>
            <p className="font-bold text-gray-900 text-xl">
              Your model scored {correctCount}/{TEST_EMAILS.length}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              A model trained on perfect labels scores {PERFECT_CORRECT}/
              {TEST_EMAILS.length} on this same test.
              {correctCount < PERFECT_CORRECT &&
                ' The gap came from the training labels, not the algorithm.'}
              {correctCount >= PERFECT_CORRECT &&
                mislabels.length === 0 &&
                ' Flawless labeling — you gave your model the best data possible.'}
              {correctCount >= PERFECT_CORRECT &&
                mislabels.length > 0 &&
                ' Your label slips did not hurt this time — but with more data, they would.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Signal words your model learned
            </p>
            <div className="flex flex-wrap gap-1.5">
              {spamSignals.map(([w, s]) => (
                <span
                  key={w}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 border border-red-200 text-red-700"
                >
                  {w} → spam ({s.spam}×)
                </span>
              ))}
              {safeSignals.map(([w, s]) => (
                <span
                  key={w}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 border border-green-200 text-green-700"
                >
                  {w} → safe ({s.ham}×)
                </span>
              ))}
              {spamSignals.length === 0 && safeSignals.length === 0 && (
                <span className="text-xs text-gray-500">
                  No clear signals — try labeling the two kinds of email
                  differently next time!
                </span>
              )}
            </div>
          </div>

          {mislabels.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 mb-3">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1.5">
                Training labels that disagreed with the answer key (
                {mislabels.length})
              </p>
              <ul className="space-y-1">
                {mislabels.map((m) => (
                  <li key={m.id} className="text-sm text-amber-800">
                    &ldquo;{m.subject}&rdquo; — really{' '}
                    {m.truth === 'spam' ? 'spam' : 'not spam'}
                    {m.ambiguous &&
                      ' (genuinely tricky — even human labelers argue about this one!)'}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
            <p className="text-sm text-indigo-900">
              <span className="font-bold">What you just learned:</span>{' '}
              {
                'A supervised model never knows the "real" answers — it only knows YOUR labels. Great labels build a great model; noisy labels build a model that confidently repeats the same mistakes. Garbage in, garbage out.'
              }
            </p>
          </div>

          <button
            onClick={reset}
            className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 active:scale-[0.99] transition-all"
          >
            <Sparkles className="w-4 h-4" /> Play again — try labeling
            differently
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          {phase === 'train' &&
            `Labeled ${Object.keys(labels).length}/${TRAIN_EMAILS.length} training emails`}
          {phase === 'fitting' && 'Training on your labels…'}
          {phase === 'test' &&
            `Tested ${testResults.length}/${TEST_EMAILS.length} · ${correctCount} correct`}
          {phase === 'done' &&
            `Final: ${correctCount}/${TEST_EMAILS.length} correct · ${mislabels.length} label slip${mislabels.length === 1 ? '' : 's'}`}
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
