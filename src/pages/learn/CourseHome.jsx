import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, Clock, BadgeCheck, CheckCircle2, Circle, CircleDot,
  Trophy, Award, PlayCircle, RotateCcw,
} from 'lucide-react';
import SEO from '../../components/SEO';
import useCourse from '../../hooks/useCourse';
import useCourseProgress from '../../hooks/useCourseProgress';
import { courseTheme, resolveIcon, flattenLessons } from '../../components/course/courseTheme';

function StatusIcon({ status, theme }) {
  if (status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />;
  if (status === 'in-progress') return <CircleDot className={`w-5 h-5 ${theme.text} flex-shrink-0`} />;
  return <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />;
}

function CourseHomeInner({ meta, course }) {
  const { progress, stats, lessonStatus } = useCourseProgress(course);
  const t = courseTheme(course.color);
  const ordered = flattenLessons(course);

  const nextUp =
    ordered.find(({ lesson }) => lessonStatus(lesson.id) === 'in-progress') ||
    ordered.find(({ lesson }) => lessonStatus(lesson.id) === 'not-started') ||
    null;

  const certEarned =
    progress.assessment.passed &&
    (!course.certificate.requiresAllLessons || stats.allComplete);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${course.title} — Free Interactive Course`}
        description={meta.description}
        canonicalPath={`/learn/${meta.slug}`}
      />

      {/* Hero */}
      <div className="relative pt-28 pb-10 px-4 overflow-hidden">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${t.gradientSoft} via-white to-gray-50 opacity-60`} />
        <div className="max-w-4xl mx-auto">
          <Link to="/learn" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All courses
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${t.chip}`}>{meta.audienceLabel}</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500"><Clock className="w-4 h-4" /> ~{course.estimatedHours} hours</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500"><BadgeCheck className="w-4 h-4" /> Certificate included</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mb-8">{course.description}</p>

          {/* Progress + continue */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">
                    {stats.completedCount} of {stats.totalLessons} lessons complete
                  </span>
                  <span className="font-semibold text-gray-900">{stats.percent}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${t.progress} rounded-full transition-all duration-700`}
                    style={{ width: `${Math.max(stats.percent, 2)}%` }}
                  />
                </div>
              </div>
              {nextUp ? (
                <Link
                  to={`/learn/${meta.slug}/${nextUp.lesson.id}`}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${t.bg} ${t.bgHover} text-white font-semibold rounded-xl transition-colors shadow-sm whitespace-nowrap`}
                >
                  <PlayCircle className="w-5 h-5" />
                  {stats.completedCount > 0 || progress.startedAt ? 'Continue learning' : 'Start the course'}
                </Link>
              ) : (
                <Link
                  to={`/learn/${meta.slug}/assessment`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors shadow-sm whitespace-nowrap"
                >
                  <Trophy className="w-5 h-5" /> Take the final assessment
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Units */}
      <div className="max-w-4xl mx-auto px-4 pb-10 space-y-6">
        {course.units.map((unit, ui) => {
          const Icon = resolveIcon(unit.icon);
          const unitCompleted = unit.lessons.filter((l) => lessonStatus(l.id) === 'completed').length;
          const unitPercent = Math.round((unitCompleted / unit.lessons.length) * 100);
          return (
            <div key={unit.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-semibold uppercase tracking-wider ${t.text} mb-0.5`}>
                      {course.audience === 'educators' ? 'Module' : 'Unit'} {ui + 1}
                    </p>
                    <h2 className="text-xl font-bold text-gray-900">{unit.title}</h2>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{unit.description}</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1">
                    <span className="text-sm font-semibold text-gray-700">{unitCompleted}/{unit.lessons.length}</span>
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${t.progress}`} style={{ width: `${unitPercent}%` }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                {unit.lessons.map((lesson) => {
                  const status = lessonStatus(lesson.id);
                  return (
                    <Link
                      key={lesson.id}
                      to={`/learn/${meta.slug}/${lesson.id}`}
                      className="flex items-center gap-4 px-5 sm:px-6 py-3.5 hover:bg-gray-50 transition-colors group"
                    >
                      <StatusIcon status={status} theme={t} />
                      <span className={`flex-1 ${status === 'completed' ? 'text-gray-500' : 'text-gray-800'} group-hover:text-gray-900 font-medium`}>
                        {lesson.title}
                      </span>
                      <span className="text-xs text-gray-400 whitespace-nowrap">{lesson.duration}</span>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Assessment + certificate */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-bold">Earn your certificate</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {course.certificate.requiresAllLessons
                  ? `Complete all ${stats.totalLessons} lessons, then pass the final assessment (${course.finalAssessment.passingScore}%+) to earn your official ${course.title} certificate.`
                  : `Pass the final assessment (${course.finalAssessment.passingScore}%+) to earn your official ${course.title} certificate. Unlimited retakes.`}
              </p>
              {progress.assessment.attempts > 0 && (
                <p className="text-sm text-gray-400">
                  Best score: <span className="font-semibold text-white">{progress.assessment.best}%</span>
                  {' · '}{progress.assessment.attempts} attempt{progress.assessment.attempts === 1 ? '' : 's'}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to={`/learn/${meta.slug}/assessment`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-xl transition-colors"
              >
                {progress.assessment.attempts > 0 ? <RotateCcw className="w-5 h-5" /> : <Trophy className="w-5 h-5" />}
                {progress.assessment.passed ? 'Retake assessment' : 'Start assessment'}
              </Link>
              {certEarned && (
                <Link
                  to={`/learn/${meta.slug}/certificate`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-colors"
                >
                  <Award className="w-5 h-5" /> View certificate
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseHome() {
  const { courseSlug } = useParams();
  const { meta, course } = useCourse(courseSlug);

  if (!meta) return <Navigate to="/learn" replace />;
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading course…</div>
      </div>
    );
  }
  return <CourseHomeInner meta={meta} course={course} />;
}
