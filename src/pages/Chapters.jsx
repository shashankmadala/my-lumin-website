import React, { useState, useCallback, useMemo } from 'react';
import { 
  Globe, 
  MapPin, 
  ArrowRight,
  Building,
  Target,
  Award,
  User,
  ChevronDown,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { IMPACT, formatChapterMembers } from '../data/impactStats';
import { CHAPTERS_BY_COUNTRY, CHAPTER_REGIONS, isChapterUpcoming } from '../data/chaptersByCountry';
import { CHAPTER_FOUNDER_SPOTLIGHT, chapterFounderImageSrc } from '../data/chapterFounderSpotlight';

function countrySlug(country) {
  return country.replace(/\s+/g, '-').toLowerCase();
}

function countryStats(region) {
  let activeMembers = 0;
  let active = 0;
  let upcoming = 0;
  for (const ch of region.chapters) {
    if (isChapterUpcoming(ch)) upcoming += 1;
    else {
      active += 1;
      activeMembers += ch.membersMin;
    }
  }
  return { activeMembers, active, upcoming };
}

export default function Chapters() {
  const [openCountries, setOpenCountries] = useState(() => ({}));
  const [activeRegion, setActiveRegion] = useState('americas');

  const countriesInActiveRegion = useMemo(() => {
    return (
      CHAPTER_REGIONS.find((r) => r.id === activeRegion)?.countries
        .map((name) => CHAPTERS_BY_COUNTRY.find((c) => c.country === name))
        .filter(Boolean) ?? []
    );
  }, [activeRegion]);

  const toggleCountry = useCallback((country) => {
    setOpenCountries((prev) => ({ ...prev, [country]: !prev[country] }));
  }, []);

  const selectRegion = useCallback((id) => {
    setActiveRegion(id);
    setOpenCountries({});
  }, []);

  const expandAllInRegion = useCallback(() => {
    const next = {};
    countriesInActiveRegion.forEach((r) => {
      next[r.country] = true;
    });
    setOpenCountries(next);
  }, [countriesInActiveRegion]);

  const collapseAll = useCallback(() => {
    setOpenCountries({});
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Global Chapters – Find a Lumin AI Chapter Near You"
        description={`Lumin AI lists ${IMPACT.chapterLocations} chapter locations (${IMPACT.chaptersActive} active, ${IMPACT.chaptersUpcoming} opening soon) across ${IMPACT.countriesWithChapter} countries. Browse by country for cities and student leads.`}
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
            {IMPACT.chapterLocations} chapter locations across {IMPACT.countriesWithChapter} countries —{' '}
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-4xl font-bold mb-4">Our Global Chapters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pick a region, then open a country to see cities and student leads. A few locations are{' '}
              <span className="font-semibold text-gray-800">opening soon</span>. Enrolled counts total{' '}
              <span className="font-semibold text-gray-800">{IMPACT.chapterParticipantsMinTotal.toLocaleString()}+</span> participants across active chapters.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {CHAPTER_REGIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => selectRegion(r.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeRegion === r.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              type="button"
              onClick={expandAllInRegion}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 hover:bg-blue-50 transition-colors"
            >
              Expand all in region
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50/80 hover:bg-gray-100 transition-colors"
            >
              Collapse all
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {countriesInActiveRegion.map((region) => {
              const isOpen = !!openCountries[region.country];
              const stats = countryStats(region);
              const panelId = `chapters-panel-${countrySlug(region.country)}`;
              const activeChapters = region.chapters.filter((ch) => !isChapterUpcoming(ch));
              const upcomingChapters = region.chapters.filter((ch) => isChapterUpcoming(ch));

              return (
                <div
                  key={region.country}
                  className={`rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-md ${
                    isOpen ? 'md:col-span-2 ring-2 ring-blue-500/20' : ''
                  }`}
                >
                  <button
                    type="button"
                    id={`chapters-trigger-${countrySlug(region.country)}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleCountry(region.country)}
                    className="w-full flex items-center gap-4 text-left px-4 sm:px-5 py-4 sm:py-5 bg-gradient-to-r from-gray-50/90 to-white hover:from-blue-50/40 hover:to-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <span className="text-3xl sm:text-4xl shrink-0" aria-hidden>{region.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{region.country}</h3>
                        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                          {region.chapters.length} locations
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="inline-flex items-center gap-1.5 flex-wrap">
                          <Users className="w-3.5 h-3.5 shrink-0" aria-hidden />
                          <span>
                            <span className="font-medium text-gray-700">{stats.active} active</span>
                            {stats.upcoming > 0 && (
                              <span className="text-amber-800 font-medium"> · {stats.upcoming} opening soon</span>
                            )}
                          </span>
                          {stats.activeMembers > 0 && (
                            <>
                              <span className="text-gray-400 hidden sm:inline">·</span>
                              <span className="text-gray-600">{formatChapterMembers(stats.activeMembers)} enrolled</span>
                            </>
                          )}
                        </span>
                        <span className="text-gray-400 hidden sm:inline">·</span>
                        <span className="hidden sm:inline">{isOpen ? 'Close' : 'Open'} for cities &amp; leads</span>
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                      aria-hidden
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`chapters-trigger-${countrySlug(region.country)}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-gray-100 bg-slate-50/80 px-3 sm:px-5 py-4 sm:py-5 space-y-6">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">Active chapters</p>
                          <ul className="grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
                            {activeChapters.map((ch) => (
                              <li key={`${region.country}-${ch.location}-${ch.chapterName}`}>
                                <div className="h-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:border-blue-200/60 hover:shadow transition-all">
                                  <div className="flex items-start gap-2 mb-2">
                                    <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden />
                                    <div className="min-w-0">
                                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</p>
                                      <p className="font-semibold text-gray-900 text-sm leading-snug">{ch.location}</p>
                                    </div>
                                  </div>
                                  <p className="text-sm font-medium text-gray-800 mb-3 leading-snug">{ch.chapterName}</p>
                                  <div className="flex items-start gap-2 rounded-lg bg-blue-50/90 border border-blue-100/80 px-3 py-2.5 mb-3">
                                    <User className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" aria-hidden />
                                    <div>
                                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700/90">Chapter lead</p>
                                      <p className="text-sm font-semibold text-gray-900">{ch.leadName}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100/80">
                                    <span className="text-gray-500">Participants</span>
                                    <span className="font-semibold text-gray-800">{formatChapterMembers(ch.membersMin)}</span>
                                  </div>
                                  <div className="mt-2 flex items-center gap-1.5 text-xs text-green-700 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" aria-hidden />
                                    Active
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {upcomingChapters.length > 0 && (
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" aria-hidden />
                              Opening soon
                            </p>
                            <ul className="grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
                              {upcomingChapters.map((ch) => (
                                <li key={`${region.country}-${ch.location}-${ch.chapterName}`}>
                                  <div className="h-full rounded-xl border border-amber-200/90 bg-amber-50/50 p-4 shadow-sm hover:border-amber-300 hover:shadow-md transition-all">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 border border-amber-200/60 px-2 py-1 rounded-lg inline-block mb-2">
                                      Upcoming chapter
                                    </p>
                                    <div className="flex items-start gap-2 mb-2">
                                      <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden />
                                      <div className="min-w-0">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</p>
                                        <p className="font-semibold text-gray-900 text-sm leading-snug">{ch.location}</p>
                                      </div>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800 mb-3 leading-snug">{ch.chapterName}</p>
                                    <div className="flex items-start gap-2 rounded-lg bg-amber-50/80 border border-amber-200/70 px-3 py-2.5 mb-3">
                                      <User className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden />
                                      <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-900/90">Lead (forming)</p>
                                        <p className="text-sm font-semibold text-gray-900">{ch.leadName}</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs pt-2 border-t border-amber-200/50">
                                      <span className="text-gray-500">Participants</span>
                                      <span className="font-semibold text-amber-900">Opening soon</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-800 font-medium">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden />
                                      Launching soon
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
