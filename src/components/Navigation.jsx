import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {to: '/', text: 'Home'},
  {to: '/summer-program', text: 'Summer Program'},
  {to: '/learn', text: 'Learn'},
  {to: '/contact-us', text: 'Contact'}
]

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-bx border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
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
          <div className="flex ml-8 gap-6">
            {links.map(({ to, text }) =>  
            <Link 
              to={to}
              className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
            >
              {text}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
            </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}