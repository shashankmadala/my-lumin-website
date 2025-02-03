import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const links = [
  { to: '/', text: 'Home', id: 'home' },
  {
    text: 'About',
    id: 'about',
    dropdown: [
      { to: '/founders', text: 'Founders', id: 'founders' },
    ]
  },
  { to: '/summer-program', text: 'Summer Program', id: 'summer' },
  { to: '/learn', text: 'Learn', id: 'learn' },
  { to: '/contact-us', text: 'Contact', id: 'contact' }
];

export default function Navigation() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
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

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-blue-600 group-hover:scale-110 transition-transform duration-300"/>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Lumin AI
              </span>
            </Link>
          </div>
//test
          {/* Navigation Links */}
          <div className="flex ml-8 gap-6">
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
                            className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.text}
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
        </div>
      </div>
    </nav>
  );
}