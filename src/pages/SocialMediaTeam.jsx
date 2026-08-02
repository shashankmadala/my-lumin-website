import { Instagram, Sparkles, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const team = [
  { name: 'Aarush Sinha', grade: '11th Grade', image: '/images/social-media/aarush-sinha.jpg' },
  { name: 'Praj Amin', grade: '11th Grade', image: '/images/social-media/praj-amin.jpg' },
  { name: 'Durgaganesh Yallabandi', grade: '11th Grade', image: '/images/social-media/durgaganesh-yallabandi.jpg' },
  { name: 'Arnav Hedge', grade: '10th Grade', image: '/images/social-media/arnav-hedge.jpg' },
];

export default function SocialMediaTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SEO
        title="Social Media Team"
        description="Meet Lumin AI's social media team — the students behind our content, campaigns, and community across platforms."
        canonicalPath="/social-media-team"
      />

      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Ambient background, matching the Leadership page */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/20 rounded-full blur-xl animate-pulse delay-2000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 mb-4">
              <Megaphone className="w-4 h-4" />
              <span className="text-sm font-semibold">Social Media Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The students behind the{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                stories we tell
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              They turn what happens across our chapters, programs, and classrooms into content that
              reaches students everywhere.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-white font-semibold leading-tight drop-shadow-sm">
                      {member.name}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3.5 flex items-center justify-between gap-2">
                  <span className="text-sm text-gray-600">{member.grade}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 text-[11px] font-semibold">
                    <Sparkles className="w-3 h-3" /> Social Media
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="mt-16 relative rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-8 sm:p-10 text-center overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <Instagram className="w-8 h-8 text-white/90 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Want to join the team?</h2>
              <p className="text-pink-100 mb-6 max-w-xl mx-auto">
                We&apos;re always looking for students who can design, film, write, or edit — no
                experience required, just initiative.
              </p>
              <Link
                to="/join-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-pink-50 transition-colors"
              >
                Apply to Lumin AI <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
