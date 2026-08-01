import { useRef, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Award, Download, Lock, Pencil } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import SEO from '../../components/SEO';
import useCourse from '../../hooks/useCourse';
import useCourseProgress from '../../hooks/useCourseProgress';
import { courseTheme } from '../../components/course/courseTheme';

function CertificateInner({ meta, course }) {
  const { progress, stats, setCertificateName } = useCourseProgress(course);
  const [nameInput, setNameInput] = useState(progress.certificateName || '');
  const [editing, setEditing] = useState(!progress.certificateName);
  const certificateRef = useRef(null);
  const t = courseTheme(course.color);

  const earned =
    progress.assessment.passed &&
    (!course.certificate.requiresAllLessons || stats.allComplete);

  const issueDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const download = async () => {
    const el = certificateRef.current;
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 3, logging: false, useCORS: true });
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [canvas.width, canvas.height] });
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`LuminAI_${course.title.replace(/\s+/g, '_')}_Certificate_${(progress.certificateName || 'certificate').replace(/\s+/g, '_')}.pdf`);
  };

  if (!earned) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Your certificate is waiting</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          {course.certificate.requiresAllLessons && !stats.allComplete
            ? `Complete all ${stats.totalLessons} lessons (${stats.completedCount} done) and pass the final assessment (${course.finalAssessment.passingScore}%+) to earn it.`
            : `Pass the final assessment with ${course.finalAssessment.passingScore}% or higher to earn it. Unlimited retakes.`}
        </p>
        <Link
          to={`/learn/${meta.slug}/assessment`}
          className={`inline-flex items-center gap-2 px-6 py-3 ${t.bg} ${t.bgHover} text-white font-semibold rounded-xl transition-colors`}
        >
          <Award className="w-5 h-5" /> Go to the assessment
        </Link>
      </div>
    );
  }

  if (editing) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-10">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <Award className="w-8 h-8 text-amber-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Congratulations!</h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your name exactly as you want it on the certificate.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (nameInput.trim()) {
              setCertificateName(nameInput.trim());
              setEditing(false);
            }
          }}
        >
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className={`w-full py-3 ${t.bg} ${t.bgHover} text-white font-semibold rounded-xl transition-colors`}
          >
            Generate my certificate
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Certificate */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-4 sm:p-8 mb-6 overflow-x-auto">
        <div ref={certificateRef} className="min-w-[720px] bg-white">
          <div className="border-[10px] border-double border-gray-800 m-1">
            <div className="border border-amber-500/60 m-2 px-14 py-12 relative bg-gradient-to-br from-white via-amber-50/20 to-white">
              {/* Corner flourishes */}
              <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-amber-500/70" />
              <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-amber-500/70" />
              <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-amber-500/70" />
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-amber-500/70" />

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <img src="/images/lumin.png" alt="Lumin AI" className="w-12 h-12 object-contain" />
                  <span className="text-2xl font-bold tracking-wide text-gray-900">LUMIN AI</span>
                </div>

                <p className="text-sm tracking-[0.35em] text-amber-700 font-semibold uppercase mb-3">
                  Certificate of Completion
                </p>
                <div className="w-24 h-px bg-amber-500 mx-auto mb-6" />

                <p className="text-gray-500 mb-2">This certifies that</p>
                <p className="text-4xl font-serif font-bold text-gray-900 mb-4">
                  {progress.certificateName}
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
                  {course.certificate.subtitle}
                </p>
                <p className="text-2xl font-semibold text-gray-900 mt-4 mb-8">
                  {course.certificate.courseName}
                </p>

                <div className="flex items-end justify-between max-w-2xl mx-auto">
                  <div className="text-center flex-1">
                    <p className="font-serif italic text-lg text-gray-800 mb-1">
                      {course.certificate.signers[0]?.name}
                    </p>
                    <div className="w-44 h-px bg-gray-400 mx-auto mb-1.5" />
                    <p className="text-xs text-gray-500">{course.certificate.signers[0]?.role}</p>
                  </div>
                  <div className="flex-shrink-0 mx-6 mb-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <p className="font-serif italic text-lg text-gray-800 mb-1">
                      {course.certificate.signers[1]?.name}
                    </p>
                    <div className="w-44 h-px bg-gray-400 mx-auto mb-1.5" />
                    <p className="text-xs text-gray-500">{course.certificate.signers[1]?.role}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-8">
                  Issued {issueDate} · Final assessment score: {progress.assessment.best}% · luminai.org/learn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-3 pb-4">
        <button
          onClick={download}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          <Download className="w-5 h-5" /> Download PDF
        </button>
        <button
          onClick={() => setEditing(true)}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 transition-colors"
        >
          <Pencil className="w-4 h-4" /> Edit name
        </button>
      </div>
    </div>
  );
}

export default function CertificatePage() {
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
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24 px-4">
      <SEO
        title={`Certificate — ${course.title}`}
        description={`Certificate of completion for Lumin AI's free ${course.title} course.`}
        canonicalPath={`/learn/${meta.slug}/certificate`}
      />
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          to={`/learn/${meta.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {course.title}
        </Link>
      </div>
      <CertificateInner meta={meta} course={course} />
    </div>
  );
}
