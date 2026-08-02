import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Landmark, X, ChevronDown, Sparkles } from 'lucide-react';

// Floating announcement for Lumin AI's current flagship initiative.
// Sits under the nav, pulses to draw the eye, and expands in place with details.
// Dismissal is remembered per announcement id so updating the id re-shows it.
const ANNOUNCEMENT_ID = 'youth-ai-council-2026';

export default function InitiativeBanner() {
  const [dismissed, setDismissed] = useState(true); // assume dismissed until storage is read
  const [expanded, setExpanded] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    let seen = null;
    try {
      seen = localStorage.getItem('lumin-announcement-dismissed');
    } catch { /* storage unavailable — just show it */ }
    if (seen !== ANNOUNCEMENT_ID) {
      setDismissed(false);
      const t = setTimeout(() => setEntered(true), 400);
      return () => clearTimeout(t);
    }
    return undefined;
  }, []);

  const dismiss = (e) => {
    e.stopPropagation();
    setEntered(false);
    setTimeout(() => setDismissed(true), 250);
    try {
      localStorage.setItem('lumin-announcement-dismissed', ANNOUNCEMENT_ID);
    } catch { /* ignore */ }
  };

  if (dismissed) return null;

  return (
    <div className="fixed top-16 inset-x-0 z-40 flex justify-center px-3 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-3xl transition-all duration-500 ease-out ${
          entered ? 'translate-y-3 opacity-100' : '-translate-y-4 opacity-0'
        }`}
      >
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/25 overflow-hidden">
          {/* Slow shimmer sweep */}
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.35)_50%,transparent_75%)] bg-[length:200%_100%] animate-shimmer pointer-events-none" />

          <button
            onClick={() => setExpanded((v) => !v)}
            className="relative w-full flex items-center gap-3 px-4 sm:px-5 py-3 text-left"
            aria-expanded={expanded}
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider flex-shrink-0">
              <Sparkles className="w-3 h-3" /> New Initiative
            </span>

            <span className="flex-1 min-w-0 text-white">
              <span className="font-semibold text-sm sm:text-base">Youth AI Council</span>
              <span className="hidden sm:inline text-blue-100 text-sm">
                {' '}— giving students a real voice in AI policy
              </span>
              <span className="block sm:hidden text-blue-100 text-xs">
                Students, meet AI policy
              </span>
            </span>

            <ChevronDown
              className={`w-4 h-4 text-white/90 flex-shrink-0 transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
            <span
              onClick={dismiss}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') dismiss(e); }}
              aria-label="Dismiss announcement"
              className="flex-shrink-0 p-1 rounded-md text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </span>
          </button>

          {/* Expanded details */}
          <div
            className={`relative grid transition-all duration-300 ease-out ${
              expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-4 sm:px-5 pb-4 pt-1 text-blue-50 text-sm leading-relaxed border-t border-white/15">
                <p className="mb-3">
                  Students are directly affected by AI in schools but are rarely represented when the
                  rules get written. We&apos;re building a <strong className="text-white">student advisory council
                  for New Jersey</strong> focused on AI education, safety, and equity — bringing youth
                  perspective straight to policymakers.
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/15 text-white text-xs font-medium">
                    <Landmark className="w-3.5 h-3.5" />
                    In partnership with NJ State Senator Linda Greenstein
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400/90 text-amber-950 text-xs font-bold">
                    Official bill going live September 2026
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-indigo-700 text-sm font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Get involved
                  </Link>
                  <Link
                    to="/join-us"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/15 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
                  >
                    Join Lumin AI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
