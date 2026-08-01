import { useState } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Award, CheckCircle2, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import useCourse from '../../hooks/useCourse';
import useCourseProgress from '../../hooks/useCourseProgress';
import LessonQuiz from '../../components/course/LessonQuiz';
import { courseTheme } from '../../components/course/courseTheme';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function AssessmentInner({ meta, course }) {
  const navigate = useNavigate();
  const { progress, stats, recordAssessment } = useCourseProgress(course);
  const [questions, setQuestions] = useState(null); // null = intro screen
  const [lastScore, setLastScore] = useState(null);
  const t = courseTheme(course.color);
  const fa = course.finalAssessment;

  const certEarned =
    progress.assessment.passed &&
    (!course.certificate.requiresAllLessons || stats.allComplete);

  const start = () => {
    setLastScore(null);
    setQuestions(shuffle(fa.questions));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24 px-4">
      <SEO
        title={`${fa.title} — ${course.title}`}
        description={`Final assessment for Lumin AI's free ${course.title} course.`}
        canonicalPath={`/learn/${meta.slug}/assessment`}
      />
      <div className="max-w-3xl mx-auto">
        <Link
          to={`/learn/${meta.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {course.title}
        </Link>

        {questions === null ? (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-10">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{fa.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-6">{fa.description}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">{fa.questions.length}</p>
                <p className="text-sm text-gray-500">questions</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">{fa.passingScore}%</p>
                <p className="text-sm text-gray-500">to pass</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-2xl font-bold text-gray-900">∞</p>
                <p className="text-sm text-gray-500">retakes allowed</p>
              </div>
            </div>

            {progress.assessment.attempts > 0 && (
              <div className={`mb-8 p-4 rounded-xl flex items-start gap-3 ${
                progress.assessment.passed ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'
              }`}>
                {progress.assessment.passed
                  ? <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  : <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />}
                <p className="text-sm text-gray-700">
                  Best score so far: <span className="font-semibold">{progress.assessment.best}%</span> across{' '}
                  {progress.assessment.attempts} attempt{progress.assessment.attempts === 1 ? '' : 's'}.
                  {progress.assessment.passed && ' You have passed!'}
                </p>
              </div>
            )}

            {course.certificate.requiresAllLessons && !stats.allComplete && (
              <div className="mb-8 p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  You can take the assessment anytime, but the certificate needs all lessons complete —
                  you&apos;ve finished {stats.completedCount} of {stats.totalLessons}.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={start}
                className={`inline-flex items-center gap-2 px-6 py-3 ${t.bg} ${t.bgHover} text-white font-semibold rounded-xl transition-colors shadow-sm`}
              >
                <Trophy className="w-5 h-5" />
                {progress.assessment.attempts > 0 ? 'Start a new attempt' : 'Start the assessment'}
              </button>
              {certEarned && (
                <Link
                  to={`/learn/${meta.slug}/certificate`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-amber-300 hover:text-amber-700 transition-colors"
                >
                  <Award className="w-5 h-5" /> View your certificate
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <LessonQuiz
              questions={questions}
              passScore={fa.passingScore}
              onFinished={(score) => {
                setLastScore(score);
                recordAssessment(score, fa.passingScore);
              }}
              nextLabel={
                lastScore !== null && lastScore >= fa.passingScore
                  ? (course.certificate.requiresAllLessons && !stats.allComplete
                      ? 'Back to course'
                      : 'Get your certificate')
                  : 'Back to course'
              }
              onNext={() => {
                if (
                  lastScore !== null &&
                  lastScore >= fa.passingScore &&
                  (!course.certificate.requiresAllLessons || stats.allComplete)
                ) {
                  navigate(`/learn/${meta.slug}/certificate`);
                } else {
                  navigate(`/learn/${meta.slug}`);
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function AssessmentPage() {
  const { courseSlug } = useParams();
  const { meta, course } = useCourse(courseSlug);

  if (!meta) return <Navigate to="/learn" replace />;
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading…</div>
      </div>
    );
  }
  return <AssessmentInner meta={meta} course={course} />;
}
