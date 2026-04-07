import React from 'react';
import { 
  Globe, 
  MapPin, 
  ArrowRight,
  Building,
  Target,
  Award,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { IMPACT, CHAPTER_NETWORK, formatChapterMembers } from '../data/impactStats';
import { CHAPTER_FOUNDER_SPOTLIGHT, chapterFounderImageSrc } from '../data/chapterFounderSpotlight';

export default function Chapters() {

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Global Chapters – Find a Lumin AI Chapter Near You"
        description={`Lumin AI has ${IMPACT.chapterLocations} flagship chapters across ${IMPACT.countriesWithChapter} countries and reaches students in ${IMPACT.countriesReachedTotal}+ countries through partners and online programs.`}
        canonicalPath="/chapters"
      />
      <section className="pt-20 pb-16 relative overflow-hidden text-white">
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6 border border-white/20">
            <Globe className="w-4 h-4" />
            <span className="font-medium">Global Network</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Lumin AI Chapters
          </h1>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            {IMPACT.chapterLocations} flagship chapter locations across {IMPACT.countriesWithChapter} countries —{' '}
            <span className="font-semibold text-white">{IMPACT.chapterParticipantsMinTotal.toLocaleString()}+</span> active chapter participants.
            Overall, we have reached <span className="font-semibold text-white">{IMPACT.studentsReachedTotal.toLocaleString()}+</span> students in{' '}
            {IMPACT.countriesReachedTotal}+ countries through chapters, our online course, partner schools, and events.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/15">
              <div className="text-2xl font-bold">{IMPACT.chapterLocations}</div>
              <div className="text-blue-100">Chapters listed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/15">
              <div className="text-2xl font-bold">{IMPACT.countriesWithChapter}</div>
              <div className="text-blue-100">Chapter countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/15">
              <div className="text-2xl font-bold">{IMPACT.chapterParticipantsMinTotal.toLocaleString()}+</div>
              <div className="text-blue-100">Chapter participants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/15">
              <div className="text-2xl font-bold">{IMPACT.countriesReachedTotal}+</div>
              <div className="text-blue-100">Countries reached</div>
            </div>
          </div>
          
          <div className="mt-4">
            <a 
              href="/join-us"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
            >
              Start a Chapter
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Chapter founders — floating card + overlapping avatars (reads as one team, not a loose grid) */}
      <div className="relative z-20 px-4 -mt-10 sm:-mt-14 pb-4 sm:pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(30,58,138,0.18)] ring-1 ring-gray-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Chapter founders
              </h2>
              <div className="flex flex-col gap-2 shrink-0 sm:text-right">
                <Link
                  to="/join-us"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Start a chapter
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/founders" className="text-xs text-gray-500 hover:text-gray-800">
                  Core nonprofit team →
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl bg-gradient-to-br from-slate-100/90 via-blue-50/50 to-violet-100/60 px-4 py-8 sm:py-10 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" aria-hidden />
              <div className="relative flex justify-center">
                <ul
                  className="flex flex-row items-center justify-center list-none p-0 m-0 pl-3 sm:pl-4"
                  aria-label="Chapter founder portraits"
                >
                  {CHAPTER_FOUNDER_SPOTLIGHT.map(({ file }, index) => (
                    <li
                      key={file}
                      className="relative -ml-3 sm:-ml-4 first:ml-0 transition-transform duration-300 ease-out hover:scale-110 hover:z-30 focus-within:z-30"
                      style={{ zIndex: index + 1 }}
                    >
                      <div className="rounded-full p-[3px] bg-gradient-to-br from-white via-white to-blue-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="rounded-full overflow-hidden w-[4.25rem] h-[4.25rem] sm:w-[5.25rem] sm:h-[5.25rem] ring-2 ring-white/90 bg-gray-200">
                          <img
                            src={chapterFounderImageSrc(file)}
                            alt=""
                            width={84}
                            height={84}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white pt-10 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Global Chapters</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each location below is an active chapter. Participant counts are minimums and sum to{' '}
              <span className="font-semibold text-gray-800">{IMPACT.chapterParticipantsMinTotal.toLocaleString()}+</span> students in the chapter network.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPTER_NETWORK.map((ch) => (
              <div
                key={`${ch.country}-${ch.chapterName}`}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl leading-none" aria-hidden>{ch.flag}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{ch.country}</p>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{ch.chapterName}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{ch.location}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-700 mb-3 p-3 rounded-xl bg-blue-50/80 border border-blue-100/80">
                  <User className="w-4 h-4 shrink-0 text-blue-600 mt-0.5" aria-hidden />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-700/90">Chapter lead</span>
                    <p className="font-medium text-gray-900 leading-snug">{ch.leadName}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden />
                    Active
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Participants</span>
                  <span className="text-sm font-semibold text-gray-800">{formatChapterMembers(ch.membersMin)}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mt-10">
            The <strong>{IMPACT.studentsReachedTotal.toLocaleString()}+ students</strong> figure reflects cumulative reach across our{' '}
            {IMPACT.courseModules}+ module online curriculum ({IMPACT.certificatesIssued.toLocaleString()}+ certificates issued), chapter programs, partner schools, summer offerings, and events such as our{' '}
            {IMPACT.hackathonParticipants}+ participant hackathon—not a sum of the rows above.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Our Chapter Approach</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Each Lumin AI chapter operates as a local community, bringing our proven AI education 
              programs to students in their own cities and regions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Local Leadership</h3>
              <p className="text-sm text-gray-600">
                Each chapter is led by local students and educators who understand their community's needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Adapted Programs</h3>
              <p className="text-sm text-gray-600">
                Our AI education programs are adapted to meet local educational standards and cultural contexts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Global Network</h3>
              <p className="text-sm text-gray-600">
                Students connect with peers worldwide, sharing ideas and collaborating on AI projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start a Chapter</h2>
          <p className="text-base mb-6 opacity-90">
            Interested in bringing Lumin AI to your city? Learn how to start a chapter in your community.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact-us" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
