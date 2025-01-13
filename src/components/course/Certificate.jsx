import React, { useState, useRef } from 'react';
import { Download, Share2, ChevronLeft } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = ({ progress, onBack }) => {
  const [studentName, setStudentName] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const certificateRef = useRef(null);
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleSubmitName = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setIsEditing(false);
    }
  };

  const downloadCertificate = async () => {
    const certificate = certificateRef.current;
    const canvas = await html2canvas(certificate, {
      scale: 2,
      logging: false,
      useCORS: true
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`AI_Course_Certificate_${studentName.replace(/\s+/g, '_')}.pdf`);
  };

  if (isEditing) {
    return (
      <div className="max-w-md mx-auto mt-12">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Enter Your Name for the Certificate</h2>
          <form onSubmit={handleSubmitName}>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Generate Certificate
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to course
      </button>

      {/* Certificate */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div 
          ref={certificateRef}
          className="border-8 border-blue-100 rounded-xl p-12 relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-50 to-transparent rounded-full opacity-50" />
          
          <div className="text-center relative">
            <div className="text-4xl font-serif text-gray-900 mb-4">Certificate of Completion</div>
            <div className="text-xl text-gray-600 mb-8">AI 101: Foundations of Artificial Intelligence</div>

            <div className="text-xl mb-2">This certifies that</div>
            <div className="text-3xl font-bold text-blue-600 mb-8">{studentName}</div>

            <div className="text-lg mb-8">
              has successfully completed the AI 101 Course with a score of{' '}
              <span className="font-bold">{Math.round(progress.finalAssessmentScore)}%</span>
            </div>

            <div className="text-gray-600 mb-12">{currentDate}</div>

            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="w-40 h-0.5 bg-gray-400 mb-2"></div>
                <div className="text-gray-600">Course Instructor</div>
              </div>
              <div className="text-center">
                <div className="w-40 h-0.5 bg-gray-400 mb-2"></div>
                <div className="text-gray-600">Program Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button
          onClick={downloadCertificate}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Certificate
        </button>
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Edit Name
        </button>
      </div>
    </div>
  );
};

export default Certificate;