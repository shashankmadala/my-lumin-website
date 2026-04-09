import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const aboutSubLinks = [
  { to: '/founders', text: 'Leadership', id: 'founders' },
  { to: '/chapters', text: 'Chapters', id: 'chapters' },
];

const mainLinks = [
  { to: '/', text: 'Home', id: 'home' },
  { to: '/join-us', text: 'Join Us', id: 'join' },
  { to: '/summer-program', text: 'Summer Program', id: 'summer' },
  { to: '/hackathon', text: 'Hackathon', id: 'hackathon' },
  { to: '/learn', text: 'Learn', id: 'learn' },
  { to: '/contact-us', text: 'Contact', id: 'contact' },
];

function isAboutPath(pathname) {
  return aboutSubLinks.some((l) => l.to === pathname);
}

const linkFocusClass =
  'rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2';

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const aboutActive = isAboutPath(location.pathname);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex items-center gap-2 group">
            <Link
              to="/"
              className={`flex items-center gap-2 rounded-md ${linkFocusClass}`}
            >
              <div className="w-8 h-8 relative overflow-hidden">
                <img
                  src="/images/lumin.png"
                  alt="Lumin AI Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Lumin AI
              </span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex ml-8 gap-6 flex-1 items-center">
            <Link
              to="/"
              className={`flex items-center h-full px-2 py-2 relative group/nav ${linkFocusClass} ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-300`}
            >
              Home
              <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-blue-600 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            {/* About dropdown */}
            <div className="relative group/about">
              <button
                type="button"
                className={`flex items-center gap-1 h-full px-2 py-2 text-sm font-medium transition-colors duration-300 ${linkFocusClass} ${
                  aboutActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
                aria-haspopup="menu"
                aria-label="About menu"
              >
                About
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/about:rotate-180" />
              </button>
              <div
                className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-1 pointer-events-none transition-all duration-150 group-hover/about:opacity-100 group-hover/about:visible group-hover/about:translate-y-0 group-hover/about:pointer-events-auto group-focus-within/about:opacity-100 group-focus-within/about:visible group-focus-within/about:translate-y-0 group-focus-within/about:pointer-events-auto"
                role="menu"
                aria-label="About"
              >
                <div className="rounded-xl border border-gray-100 bg-white py-1.5 shadow-lg min-w-[12rem]">
                  {aboutSubLinks.map((item) => (
                    <Link
                      key={item.id}
                      to={item.to}
                      role="menuitem"
                      className={`block px-4 py-2.5 text-sm transition-colors ${linkFocusClass} ${
                        location.pathname === item.to
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.id}
                to={link.to}
                className={`flex items-center h-full px-2 py-2 relative group/nav ${linkFocusClass} ${
                  location.pathname === link.to ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-300`}
              >
                {link.text}
                <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-blue-600 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 ml-auto rounded-md ${linkFocusClass}`}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="py-2">
              <Link
                to="/"
                onClick={closeMobile}
                className={`block w-full text-left px-6 py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 ${
                  location.pathname === '/' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>

              <div className="border-t border-gray-50">
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((o) => !o)}
                  className={`flex w-full items-center justify-between px-6 py-4 text-left text-gray-700 hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 ${
                    aboutActive ? 'bg-blue-50/80 text-blue-700' : ''
                  }`}
                  aria-expanded={mobileAboutOpen}
                >
                  <span className="font-medium">About</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      mobileAboutOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="bg-gray-50/80 pb-2">
                    {aboutSubLinks.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        onClick={closeMobile}
                        className={`block pl-10 pr-6 py-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 ${
                          location.pathname === item.to
                            ? 'text-blue-700 font-medium bg-white/80'
                            : 'text-gray-600 hover:bg-white/60 hover:text-blue-600'
                        }`}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainLinks.slice(1).map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  onClick={closeMobile}
                  className={`block w-full text-left px-6 py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 ${
                    location.pathname === link.to
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
