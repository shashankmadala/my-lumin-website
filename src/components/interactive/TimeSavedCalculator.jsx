/* eslint-disable react/prop-types */
import { useState, useMemo, useEffect, useRef } from 'react';
import {
  Timer,
  BookOpen,
  FileText,
  PenLine,
  Mail,
  Users,
  RotateCcw,
  Sparkles,
  PartyPopper,
  TrendingUp,
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'planning',
    icon: BookOpen,
    label: 'Lesson planning',
    max: 10,
    defaultHours: 3,
    conservative: 0.2,
    typical: 0.3,
    teach:
      'AI drafts lesson outlines, hooks, and activity ideas in minutes - you keep the pedagogy decisions and just edit instead of starting from a blank page.',
  },
  {
    id: 'materials',
    icon: FileText,
    label: 'Creating materials & worksheets',
    max: 10,
    defaultHours: 2,
    conservative: 0.25,
    typical: 0.4,
    teach:
      'Worksheets, slides, and practice sets are the most template-shaped work you do - exactly what AI drafts fastest. You review, tweak, and print.',
  },
  {
    id: 'grading',
    icon: PenLine,
    label: 'Grading & feedback',
    max: 15,
    defaultHours: 5,
    conservative: 0.15,
    typical: 0.25,
    teach:
      'AI drafts first-pass feedback comments you then personalize. The judgment about quality stays yours - the typing does not have to.',
  },
  {
    id: 'emails',
    icon: Mail,
    label: 'Parent & admin emails',
    max: 5,
    defaultHours: 2,
    conservative: 0.35,
    typical: 0.5,
    teach:
      'Routine emails are the biggest percentage win: AI turns three bullet points into a warm, professional message you approve in seconds.',
  },
  {
    id: 'differentiation',
    icon: Users,
    label: 'Differentiating for learners',
    max: 8,
    defaultHours: 2,
    conservative: 0.2,
    typical: 0.35,
    teach:
      'Rewriting one passage at three reading levels used to mean three rewrites. AI does the leveling in one pass - you check it matches your students.',
  },
];

const WEEKS_PER_YEAR = 36;
const PREP_PERIOD_HOURS = 0.75; // a 45-minute prep period
const SCHOOL_DAY_HOURS = 7;
const WEEKEND_WAKING_HOURS = 16;

function useAnimatedNumber(value, duration = 450) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return undefined;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      setDisplay(current);
      fromRef.current = current;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return display;
}

export default function TimeSavedCalculator({ onComplete }) {
  const defaults = useMemo(() => {
    const obj = {};
    CATEGORIES.forEach((c) => {
      obj[c.id] = c.defaultHours;
    });
    return obj;
  }, []);

  const [hours, setHours] = useState(defaults);
  const [mode, setMode] = useState('conservative');
  const [touched, setTouched] = useState([]);
  const [lastTouched, setLastTouched] = useState(null);
  const completedRef = useRef(false);
  const celebrated = touched.length >= 3;

  const handleSlider = (id, value) => {
    setHours((prev) => ({ ...prev, [id]: value }));
    setLastTouched(id);
    setTouched((prev) => {
      const next = prev.includes(id) ? prev : [...prev, id];
      if (next.length >= 3 && !completedRef.current) {
        completedRef.current = true;
        if (typeof onComplete === 'function') onComplete();
      }
      return next;
    });
  };

  const savedPerCategory = useMemo(() => {
    const out = {};
    CATEGORIES.forEach((c) => {
      out[c.id] = hours[c.id] * c[mode];
    });
    return out;
  }, [hours, mode]);

  const weeklySaved = useMemo(
    () => CATEGORIES.reduce((sum, c) => sum + savedPerCategory[c.id], 0),
    [savedPerCategory]
  );

  const yearlySaved = weeklySaved * WEEKS_PER_YEAR;
  const animatedWeekly = useAnimatedNumber(weeklySaved);
  const animatedYearly = useAnimatedNumber(yearlySaved);

  const biggest = useMemo(() => {
    let best = null;
    CATEGORIES.forEach((c) => {
      if (
        savedPerCategory[c.id] > 0 &&
        (best === null || savedPerCategory[c.id] > savedPerCategory[best.id])
      ) {
        best = c;
      }
    });
    return best;
  }, [savedPerCategory]);

  const focusCategory =
    CATEGORIES.find((c) => c.id === lastTouched) || biggest;

  const equivalents = useMemo(() => {
    const list = [];
    if (weeklySaved <= 0) return list;
    const prepPerMonth = (weeklySaved * 4) / PREP_PERIOD_HOURS;
    if (prepPerMonth >= 1) {
      list.push(
        `≈ ${Math.round(prepPerMonth)} extra prep period${
          Math.round(prepPerMonth) === 1 ? '' : 's'
        } a month`
      );
    }
    if (weeklySaved * 4 >= WEEKEND_WAKING_HOURS) {
      list.push('≈ a full weekend every month back');
    } else {
      const weekendsPerYear = yearlySaved / WEEKEND_WAKING_HOURS;
      if (weekendsPerYear >= 1) {
        list.push(
          `≈ ${Math.round(weekendsPerYear)} full weekend${
            Math.round(weekendsPerYear) === 1 ? '' : 's'
          } back per school year`
        );
      }
    }
    const schoolDays = yearlySaved / SCHOOL_DAY_HOURS;
    if (schoolDays >= 1) {
      list.push(
        `≈ ${Math.round(schoolDays)} full school day${
          Math.round(schoolDays) === 1 ? '' : 's'
        } of time per year`
      );
    }
    return list;
  }, [weeklySaved, yearlySaved]);

  const reset = () => {
    setHours(defaults);
    setMode('conservative');
    setTouched([]);
    setLastTouched(null);
  };

  const pctLabel = (c) =>
    `${Math.round(c[mode] * 100)}% ${
      mode === 'conservative' ? 'conservative' : 'typical reported'
    }`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="bg-violet-100 rounded-xl p-2.5 shrink-0">
          <Timer className="w-6 h-6 text-violet-600" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            What&apos;s your AI time dividend?
          </h2>
          <p className="text-sm text-gray-500">
            Slide your real weekly hours and watch the time you could reclaim
            add up.
          </p>
        </div>
      </div>

      {/* Mode toggle */}
      <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
        <span className="text-xs font-medium text-gray-500">
          Savings assumptions
        </span>
        <div className="inline-flex rounded-xl bg-gray-100 p-1">
          {['conservative', 'typical'].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200 ${
                mode === m
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders */}
      <div className="space-y-4 mb-6">
        {CATEGORIES.map((c) => {
          const Icon = c.icon;
          const saved = savedPerCategory[c.id];
          const isTouched = touched.includes(c.id);
          return (
            <div
              key={c.id}
              className={`rounded-xl border p-4 transition-colors duration-300 ${
                isTouched
                  ? 'border-violet-200 bg-violet-50/50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-violet-600 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">
                    {c.label}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-bold text-gray-800">
                    {hours[c.id]}h
                  </span>
                  /wk
                  {saved > 0 && (
                    <span className="ml-2 font-semibold text-violet-600 transition-all">
                      saves ~{saved.toFixed(1)}h
                    </span>
                  )}
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={c.max}
                step={0.5}
                value={hours[c.id]}
                onChange={(e) => handleSlider(c.id, Number(e.target.value))}
                aria-label={`${c.label}: hours per week`}
                className="w-full h-2 accent-violet-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>0h</span>
                <span>{pctLabel(c)} savings</span>
                <span>{c.max}h</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Results panel */}
      <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-5 sm:p-6 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-violet-200" />
          <span className="text-xs font-semibold uppercase tracking-wide text-violet-200">
            Your time dividend ({mode} mode)
          </span>
        </div>
        <div className="flex items-end gap-6 flex-wrap">
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold tabular-nums transition-all">
              {animatedWeekly.toFixed(1)}
              <span className="text-xl font-bold text-violet-200 ml-1">
                hrs/week
              </span>
            </div>
            <div className="text-sm text-violet-200 mt-1 tabular-nums">
              ≈ {Math.round(animatedYearly)} hours per school year (
              {WEEKS_PER_YEAR} weeks)
            </div>
          </div>
        </div>
        {equivalents.length > 0 ? (
          <ul className="mt-4 space-y-1.5">
            {equivalents.map((eq) => (
              <li
                key={eq}
                className="flex items-center gap-2 text-sm text-violet-50"
              >
                <Sparkles className="w-3.5 h-3.5 text-violet-200 shrink-0" />
                {eq}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-violet-100">
            Slide any category above zero to see what that time becomes.
          </p>
        )}
      </div>

      {/* Teaching feedback */}
      {focusCategory && savedPerCategory[focusCategory.id] > 0 && (
        <div className="rounded-xl bg-violet-50 border border-violet-100 px-4 py-3 mb-4 transition-all duration-300">
          <p className="text-xs text-violet-900">
            <span className="font-bold">
              {lastTouched === focusCategory.id
                ? `About ${focusCategory.label.toLowerCase()}: `
                : `Your biggest win is ${focusCategory.label.toLowerCase()}: `}
            </span>
            {focusCategory.teach}
          </p>
        </div>
      )}

      {/* Celebration */}
      {celebrated && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 mb-4 flex items-start gap-3 transition-all duration-300">
          <PartyPopper className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-emerald-800">
              You just ran your own time audit.
            </p>
            <p className="text-xs text-emerald-700 mt-1">
              What you just learned: the goal isn&apos;t replacing your judgment
              - it&apos;s buying back time for the human parts of teaching:
              relationships, feedback conversations, and rest.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-2 text-xs font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
            >
              Play again - try different hours
            </button>
          </div>
        </div>
      )}

      {/* Footnote */}
      <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
        Percentages are based on teacher-reported time savings in recent
        surveys - for example, the Gallup / Walton Family Foundation (2025)
        study found teachers who use AI weekly report reclaiming about 6 hours
        per week. These are reported averages, not promises - your mileage will
        vary.
      </p>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
        <span className="text-xs font-medium text-gray-500">
          {touched.length < 3
            ? `Adjust ${3 - touched.length} more slider${
                3 - touched.length === 1 ? '' : 's'
              } to finish your audit`
            : 'Audit complete'}
        </span>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-violet-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
    </div>
  );
}
