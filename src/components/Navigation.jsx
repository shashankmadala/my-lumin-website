import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

// Grouped navigation: fewer top-level items, related pages tucked into menus.
const NAV = [
  { type: 'link', to: '/', text: 'Home' },
  {
    type: 'menu',
    text: 'Learn',
    items: [
      { to: '/learn', text: 'All courses', desc: 'Browse everything we offer' },
      { to: '/learn/ai-foundations', text: 'AI Foundations', desc: 'For students, grades 7–12' },
      { to: '/learn/educators', text: 'AI for Educators', desc: 'Teacher PD with certificate' },
    ],
  },
  {
    type: 'menu',
    text: 'Programs',
    items: [
      { to: '/summer-program', text: 'Summer Program', desc: 'Five-week intensive' },
      { to: '/hackathon', text: 'Hackathon', desc: 'Build something real' },
      { to: '/chapters', text: 'Chapters', desc: 'Find or start one near you' },
    ],
  },
  {
    type: 'menu',
    text: 'About',
    items: [
      { to: '/founders', text: 'Leadership', desc: 'The people behind Lumin AI' },
      { to: '/social-media-team', text: 'Social Media Team', desc: 'Our content crew' },
      { to: '/contact-us', text: 'Contact', desc: 'Get in touch' },
    ],
  },
];

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg';

function DesktopMenu({ entry, pathname }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const active = entry.items.some((i) => pathname === i.to);

  const show = () => { clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${focusRing} ${
          active || open ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {entry.text}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        role="menu"
        className={`absolute left-0 top-full pt-2 transition-all duration-150 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="w-72 rounded-2xl border border-gray-200/80 bg-white p-2 shadow-lg shadow-gray-900/5">
          {entry.items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-xl transition-colors ${
                pathname === item.to ? 'bg-blue-50' : 'hover:bg-gray-50'
              }`}
            >
              <span className={`block text-sm font-medium ${pathname === item.to ? 'text-blue-700' : 'text-gray-900'}`}>
                {item.text}
              </span>
              <span className="block text-xs text-gray-500 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-gray-200/70 shadow-sm'
          : 'bg-white/60 backdrop-blur-xl border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-1">
          {/* Brand */}
          <Link to="/" className={`flex items-center gap-2 mr-4 group ${focusRing}`}>
            <img
              src="/images/lumin.png"
              alt="Lumin AI"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-lg font-bold tracking-tight text-gray-900">Lumin AI</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1">
            {NAV.map((entry) =>
              entry.type === 'link' ? (
                <Link
                  key={entry.to}
                  to={entry.to}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${focusRing} ${
                    location.pathname === entry.to ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {entry.text}
                </Link>
              ) : (
                <DesktopMenu key={entry.text} entry={entry} pathname={location.pathname} />
              )
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/join-us"
            className={`hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-colors ${focusRing}`}
          >
            Join us
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className={`md:hidden ml-auto p-2 text-gray-700 hover:text-blue-600 transition-colors ${focusRing}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-3 py-3 space-y-0.5">
            {NAV.map((entry) =>
              entry.type === 'link' ? (
                <Link
                  key={entry.to}
                  to={entry.to}
                  className={`block px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === entry.to
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {entry.text}
                </Link>
              ) : (
                <div key={entry.text}>
                  <button
                    type="button"
                    onClick={() => setOpenGroup((g) => (g === entry.text ? null : entry.text))}
                    aria-expanded={openGroup === entry.text}
                    className="flex w-full items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {entry.text}
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        openGroup === entry.text ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openGroup === entry.text && (
                    <div className="pl-3 pb-1 space-y-0.5">
                      {entry.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            location.pathname === item.to
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <Link
              to="/join-us"
              className="block mt-2 px-3 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold text-center hover:bg-gray-800 transition-colors"
            >
              Join us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
