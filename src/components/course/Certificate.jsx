import React from 'react';
import { Download, Share2, ChevronLeft } from 'lucide-react';

export function Certificate({ progress, onBack }) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const downloadCertificate = () => {
    // In a real implementation, this would generate and download a PDF
    alert('Certificate download functionality would be implemented here');
  };

  const shareCertificate = () => {
    // In a real implementation, this would open sharing options
    alert('Certificate sharing functionality would be implemented here');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to course
      </button>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="border-8 border-indigo-100 rounded-xl p-8">
          <div className="text-center">
            <div className="text-4xl font-serif text-gray-900 mb-2">Certificate of Completion</div>
            <div className="text-gray-600 mb-8">Lumin AI - AI 101 Course</div>

            <div className="text-xl mb-2">This certifies that</div>
            <div className="text-3xl font-bold text-indigo-600 mb-6">Student Name</div>

            <div className="text-lg mb-8">
              has successfully completed the AI 101 Course with a score of{' '}
              <span className="font-bold">{progress.finalAssessmentScore}%</span>
            </div>

            <div className="text-gray-600 mb-8">{currentDate}</div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={downloadCertificate}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Certificate
              </button>
              <button
                onClick={shareCertificate}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2">What's Next?</h3>
        <p className="text-blue-800 mb-4">
          Continue your AI learning journey with our advanced courses or join our community to connect with other learners.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Browse Advanced Courses
          </button>
          <button className="px-4 py-2 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
