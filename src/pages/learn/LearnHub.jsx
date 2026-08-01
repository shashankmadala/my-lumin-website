import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BadgeCheck, Sparkles, BookOpen, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import { courseCatalog } from '../../data/courses/index.js';
import { courseTheme, resolveIcon } from '../../components/course/courseTheme';

function CourseCard({ meta }) {
  const t = courseTheme(meta.color);
  const Icon = resolveIcon(meta.icon);

  return (
    <Link
      to={`/learn/${meta.slug}`}
      className="group relative bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
    >
      <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${t.gradient}`} />
      <div className="flex items-start justify-between mb-5">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-md`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${t.chip}`}>
          {meta.audienceLabel}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
        {meta.title}
      </h2>
      <p className={`font-medium mb-3 ${t.textDark}`}>{meta.tagline}</p>
      <p className="text-gray-600 leading-relaxed mb-6 flex-1">{meta.description}</p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~{meta.estimatedHours} hours</span>
        <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4" /> Free certificate</span>
        <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> Interactive</span>
      </div>

      <span className={`inline-flex items-center gap-2 font-semibold ${t.text} group-hover:gap-3 transition-all`}>
        Start learning <ArrowRight className="w-5 h-5" />
      </span>
    </Link>
  );
}

export default function LearnHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Learn AI — Free Interactive Courses"
        description="Free, interactive AI courses from Lumin AI: AI Foundations for students and AI for Educators professional development with certificate. No signup, no paywall."
        canonicalPath="/learn"
      />

      {/* Hero */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/80 via-white to-gray-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />
        <div className="absolute top-32 -left-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-700 mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            100% free · No signup · Learn at your own pace
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Learn AI the way it should be taught —
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> by doing</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Interactive lessons, hands-on simulations, real tools, and clear explanations.
            Pick the course built for you.
          </p>
        </div>
      </div>

      {/* Course cards */}
      <div className="max-w-5xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-8">
        {courseCatalog.map((meta) => (
          <CourseCard key={meta.id} meta={meta} />
        ))}
      </div>

      {/* Why it works */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How our courses work</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Read & watch</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clear, jargon-free articles and curated videos explain each concept from the ground up.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Try it yourself</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every lesson has interactive simulations, games, or real AI tools you use hands-on.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prove it & get certified</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Practice questions in every lesson, a final assessment, and a downloadable certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
