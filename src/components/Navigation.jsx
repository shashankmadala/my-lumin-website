import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { to: '/', text: 'Home', id: 'home' },
  {
    text: 'About',
    id: 'about',
    dropdown: [
      { to: '/founders', text: 'Founders', id: 'founders' },
      { to: '/chapters', text: 'Chapters', id: 'chapters' },
    ]
  },
  { to: '/join-us', text: 'Join Us', id: 'join' },
  { to: '/summer-program', text: 'Summer Program', id: 'summer' },
  { to: '/learn', text: 'Learn', id: 'learn' },
  { to: '/contact-us', text: 'Contact', id: 'contact' }
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (linkId) => {
    setOpenDropdown(openDropdown === linkId ? null : linkId);
  };

  const handleMobileNavigation = (path) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
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
              <div
                key={link.id}
                className="relative flex items-center h-16"
                ref={link.dropdown ? dropdownRef : null}
              >
                {link.dropdown ? (
                  <div className="h-full flex items-center">
                    <button 
                      onClick={() => handleDropdownClick(link.id)}
                      className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 px-2"
                    >
                      {link.text}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === link.id ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {openDropdown === link.id && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.id}
                            to={item.to}
                            className="flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 group"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span>{item.text}</span>
                            <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={link.to}
                    className="flex items-center h-full px-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    {link.text}
                    <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                  </Link>
                )}
              </div>
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
                <div key={link.id}>
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => handleDropdownClick(link.id)}
                        className="w-full flex items-center justify-between text-left px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-medium">{link.text}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.id ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {openDropdown === link.id && (
                        <div className="bg-gray-50">
                          {link.dropdown.map((item) => (
                            <div key={item.id} className="relative">
                              <Link
                                to={item.to}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                  // Use a small delay to ensure state updates, then navigate
                                  setTimeout(() => {
                                    window.location.href = item.to;
                                  }, 100);
                                }}
                                className="flex items-center justify-between w-full text-left px-8 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 group"
                              >
                                <span>{item.text}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={link.to}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                      className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}