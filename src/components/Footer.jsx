import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Learn: [
    { name: 'All courses', path: '/learn' },
    { name: 'AI Foundations', path: '/learn/ai-foundations' },
    { name: 'AI for Educators', path: '/learn/educators' },
    { name: 'Summer program', path: '/summer-program' },
  ],
  Community: [
    { name: 'Chapters', path: '/chapters' },
    { name: 'Join us', path: '/join-us' },
    { name: 'Hackathon', path: '/hackathon' },
  ],
  About: [
    { name: 'Leadership', path: '/founders' },
    { name: 'Social media team', path: '/social-media-team' },
    { name: 'Contact us', path: '/contact-us' },
  ],
};

const linkClass =
  'text-sm text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <img src="/images/lumin.png" alt="" className="w-7 h-7 object-contain" />
              <span className="text-lg font-bold tracking-tight">Lumin AI</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Free, interactive AI education for students and teachers — built by students.
            </p>
            <a
              href="mailto:luminai321@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              luminai321@gmail.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lumin AI. All rights reserved.
          </p>
          <Link
            to="/join-us"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
          >
            Start a chapter
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
