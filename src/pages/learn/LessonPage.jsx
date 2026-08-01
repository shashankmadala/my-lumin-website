import { useEffect, useState } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, ListChecks, Menu, ChevronRight } from 'lucide-react';
import SEO from '../../components/SEO';
import useCourse from '../../hooks/useCourse';
import useCourseProgress from '../../hooks/useCourseProgress';
import LessonRenderer from '../../components/course/LessonRenderer';
import LessonQuiz from '../../components/course/LessonQuiz';
import CourseSidebar from '../../components/course/CourseSidebar';
import { courseTheme, flattenLessons } from '../../components/course/courseTheme';

function LessonPageInner({ meta, course, lessonId }) {
  const navigate = useNavigate();
  const { stats, lessonStatus, markVisited, recordQuiz, LESSON_PASS } = useCourseProgress(course);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const t = courseTheme(course.color);

  const ordered = flattenLessons(course);
  const idx = ordered.findIndex(({ lesson }) => lesson.id === lessonId);
  const entry = idx >= 0 ? ordered[idx] : null;

  useEffect(() => {
    if (entry) markVisited(entry.lesson.id);
    window.scrollTo(0, 0);
  }, [lessonId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!entry) return <Navigate to={`/learn/${meta.slug}`} replace />;

  const { unit, lesson } = entry;
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx < ordered.length - 1 ? ordered[idx + 1] : null;

  const goNext = () => {
    if (next) navigate(`/learn/${meta.slug}/${next.lesson.id}`);
    else navigate(`/learn/${meta.slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${lesson.title} — ${course.title}`}
        description={`${lesson.title}: a free interactive lesson in Lumin AI's ${course.title} course.`}
        canonicalPath={`/learn/${meta.slug}/${lesson.id}`}
      />

      {/* Course progress bar under the site nav */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-40">
        <div
          className={`h-full ${t.progress} transition-all duration-700`}
          style={{ width: `${stats.percent}%` }}
        />
      </div>

      <div className="pt-[68px] flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-80 flex-shrink-0 fixed top-[68px] bottom-0 left-0">
          <CourseSidebar
            meta={meta}
            course={course}
            currentLessonId={lesson.id}
            lessonStatus={lessonStatus}
          />
        </aside>

        {/* Mobile sidebar drawer */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="w-80 max-w-[85vw] h-full shadow-2xl relative z-10">
              <CourseSidebar
                meta={meta}
                course={course}
                currentLessonId={lesson.id}
                lessonStatus={lessonStatus}
                onNavigate={() => setSidebarOpen(false)}
              />
            </div>
            <button
              className="absolute inset-0 bg-black/40"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close course menu"
            />
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-80 min-w-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 pb-24">
            {/* Breadcrumb + mobile menu */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1.5 text-sm text-gray-500 min-w-0">
                <Link to={`/learn/${meta.slug}`} className="hover:text-gray-800 transition-colors whitespace-nowrap">
                  {course.title}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{unit.title}</span>
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex-shrink-0"
              >
                <Menu className="w-4 h-4" /> Lessons
              </button>
            </div>

            {/* Lesson header */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{lesson.title}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Clock className="w-4 h-4" /> {lesson.duration}
            </div>

            {lesson.objectives && lesson.objectives.length > 0 && (
              <div className={`mb-8 p-5 rounded-2xl ${t.bgSoft} border ${t.border}`}>
                <div className="flex items-center gap-2 mb-2.5">
                  <ListChecks className={`w-5 h-5 ${t.text}`} />
                  <span className={`font-semibold ${t.textDark}`}>In this lesson</span>
                </div>
                <ul className="space-y-1.5">
                  {lesson.objectives.map((o, i) => (
                    <li key={i} className="text-gray-700 text-sm leading-relaxed flex gap-2">
                      <span className={`w-1 h-1 rounded-full ${t.bg} mt-2 flex-shrink-0`} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article */}
            <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
              <LessonRenderer blocks={lesson.blocks} />
            </article>

            {/* Practice quiz */}
            {lesson.quiz?.questions?.length > 0 && (
              <div id="practice" className="mt-8 bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
                <LessonQuiz
                  questions={lesson.quiz.questions}
                  passScore={LESSON_PASS}
                  onFinished={(score) => recordQuiz(lesson.id, score)}
                  nextLabel={next ? 'Next lesson' : 'Back to course'}
                  onNext={goNext}
                />
              </div>
            )}

            {/* Prev / next */}
            <div className="mt-8 flex items-stretch gap-4">
              {prev ? (
                <Link
                  to={`/learn/${meta.slug}/${prev.lesson.id}`}
                  className="flex-1 group p-4 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <span className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-gray-900 text-sm leading-snug">
                    {prev.lesson.title}
                  </span>
                </Link>
              ) : <div className="flex-1" />}
              {next ? (
                <Link
                  to={`/learn/${meta.slug}/${next.lesson.id}`}
                  className="flex-1 group p-4 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-right"
                >
                  <span className="flex items-center justify-end gap-1.5 text-xs text-gray-400 mb-1">
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-gray-900 text-sm leading-snug">
                    {next.lesson.title}
                  </span>
                </Link>
              ) : (
                <Link
                  to={`/learn/${meta.slug}/assessment`}
                  className="flex-1 group p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl hover:shadow-md transition-all text-right"
                >
                  <span className="flex items-center justify-end gap-1.5 text-xs text-amber-100 mb-1">
                    Up next <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-semibold text-white text-sm">Final assessment</span>
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function LessonPage() {
  const { courseSlug, lessonId } = useParams();
  const { meta, course } = useCourse(courseSlug);

  if (!meta) return <Navigate to="/learn" replace />;
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading lesson…</div>
      </div>
    );
  }
  return <LessonPageInner meta={meta} course={course} lessonId={lessonId} />;
}
