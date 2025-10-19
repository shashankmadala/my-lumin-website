import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { to: '/', text: 'Home', id: 'home' },
  { to: '/founders', text: 'Leadership', id: 'founders' },
  { to: '/chapters', text: 'Chapters', id: 'chapters' },
  { to: '/join-us', text: 'Join Us', id: 'join' },
  { to: '/summer-program', text: 'Summer Program', id: 'summer' },
  { to: '/hackathon', text: 'Hackathon', id: 'hackathon' },
  { to: '/learn', text: 'Learn', id: 'learn' },
  { to: '/contact-us', text: 'Contact', id: 'contact' }
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavigation = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <Link to="/" className="flex items-center gap-2">
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex ml-8 gap-6 flex-1">
            {links.map((link) => (
              <Link 
                key={link.id}
                to={link.to}
                className="flex items-center h-full px-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {link.text}
                <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 ml-auto"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="py-2">
              {links.map((link) => (
                <Link 
                  key={link.id}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
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