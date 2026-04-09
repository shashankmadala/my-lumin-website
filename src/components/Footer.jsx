import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'Leadership', path: '/founders' },
      { name: 'Policy team', path: '/policy-team' },
      { name: 'Contact us', path: '/contact-us' },
    ],
    programs: [
      { name: 'Learn', path: '/learn' },
      { name: 'Chapters', path: '/chapters' },
      { name: 'Join us', path: '/join-us' },
      { name: 'Hackathon', path: '/hackathon' },
      { name: 'Summer program', path: '/summer-program' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
            >
              Lumin
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering the next generation through innovative education and technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Programs
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lumin. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Privacy or legal questions?{' '}
            <Link
              to="/contact-us"
              className="text-gray-300 hover:text-white underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
            >
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
