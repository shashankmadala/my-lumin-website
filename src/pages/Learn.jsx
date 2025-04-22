import React, { useState, useEffect } from 'react';
import { Brain, Book, Trophy, ArrowLeft, Award, BookOpen, Code, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import ModuleList from '../components/course/ModuleList';
import LessonView from '../components/course/LessonView';
import FinalExam from '../components/course/FinalExam';
import Certificate from '../components/course/Certificate';
import ProgressTracker from '../components/course/ProgressTracker';
import PathView from '../components/course/PathView';
import ImageClassifier from '../components/projects/ImageClassifier';
import courseData from '../data/courseData';

export default function Learn() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('article');
  const [showFinalExam, setShowFinalExam] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showLearningPath, setShowLearningPath] = useState(false);
  const [showImageClassifier, setShowImageClassifier] = useState(false);

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      moduleProgress: {},
      quizScores: {},
      streak: 0,
      lastAccessed: null,
      badges: [],
      finalExamScore: null,
      certificateIssued: false,
      examAttempts: 0,
      completedProjects: []
    };
  });

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastAccessed !== today) {
      setProgress(prev => ({
        ...prev,
        streak: prev.lastAccessed === new Date(Date.now() - 86400000).toDateString()
          ? prev.streak + 1
          : 1,
        lastAccessed: today
      }));
    }
  }, []);

  const calculateTotalLessons = () => {
    return courseData.modules.reduce(
      (acc, module) => acc + module.lessons.length,
      0
    );
  };

  const isAllLessonsCompleted = () => {
    return progress.completedLessons.length === calculateTotalLessons();
  };

  const calculateProgress = () => {
    const totalLessons = calculateTotalLessons();
    return totalLessons > 0 ? (progress.completedLessons.length / totalLessons) * 100 : 0;
  };

  const handleStartExam = () => {
    if (!isAllLessonsCompleted()) {
      alert('Please complete all lessons before taking the final exam.');
      return;
    }
    setShowFinalExam(true);
  };

  const handleExamCompletion = (score) => {
    setProgress(prev => ({
      ...prev,
      finalExamScore: score,
      examAttempts: prev.examAttempts + 1
    }));

    if (score >= 60) {
      setShowCertificate(true);
    }
    setShowFinalExam(false);
  };

  const handleProjectCompletion = (projectData) => {
    setProgress(prev => ({
      ...prev,
      completedProjects: [...(prev.completedProjects || []), {
        id: 'image-classifier',
        completedDate: new Date().toISOString(),
        data: projectData
      }]
    }));
    setShowImageClassifier(false);
  };

  const isProjectCompleted = (projectId) => {
    if (!progress.completedProjects) return false;
    return progress.completedProjects.some(project => project.id === projectId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 progress-bar"
          style={{ width: `${calculateProgress()}%` }}
        />
      </div>

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {showFinalExam ? (
            <FinalExam 
              onComplete={handleExamCompletion}
              onBack={() => setShowFinalExam(false)}
            />
          ) : showCertificate ? (
            <Certificate 
              progress={progress}
              onBack={() => setShowCertificate(false)}
            />
          ) : showLearningPath ? (
            <>
              <button
                onClick={() => setShowLearningPath(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Course
              </button>
              <PathView 
                modules={courseData.modules}
                progress={progress}
                setActiveLesson={(lesson) => {
                  setActiveLesson(lesson);
                  setShowLearningPath(false);
                }}
              />
            </>
          ) : showImageClassifier ? (
            <ImageClassifier 
              onComplete={handleProjectCompletion}
              onBack={() => setShowImageClassifier(false)}
            />
          ) : (
            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar Toggle (Mobile) */}
              <button
                className="fixed bottom-4 right-4 lg:hidden z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <Brain className="w-6 h-6" />
              </button>

              {/* Main Content */}
              <div className={`${activeLesson ? 'col-span-12 lg:col-span-8' : 'col-span-12'}`}>
                {activeLesson ? (
                  <div>
                    <button
                      onClick={() => setActiveLesson(null)}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-300"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back to Modules
                    </button>
                    <LessonView 
                      lesson={activeLesson}
                      progress={progress}
                      setProgress={setProgress}
                      onBack={() => setActiveLesson(null)}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Progress Tracker */}
                    <ProgressTracker 
                      progress={progress}
                      totalLessons={calculateTotalLessons()}
                    />

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <button 
                        onClick={handleStartExam}
                        className={`p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between ${
                          !isAllLessonsCompleted() ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={!isAllLessonsCompleted()}
                      >
                        <div className="flex items-center gap-3">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <span>Final Exam</span>
                        </div>
                        {progress.examAttempts > 0 && (
                          <span className="text-sm text-gray-500">
                            Best: {progress.finalExamScore}%
                          </span>
                        )}
                      </button>
                      
                      <button 
                        onClick={() => progress.finalExamScore >= 60 ? setShowCertificate(true) : null}
                        disabled={!progress.finalExamScore || progress.finalExamScore < 60}
                        className={`p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 ${
                          (!progress.finalExamScore || progress.finalExamScore < 60) ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <Award className="w-5 h-5 text-green-500" />
                        <span>Certificate</span>
                        {(!progress.finalExamScore || progress.finalExamScore < 60) && (
                          <span className="text-sm text-red-500 ml-2">(Pass exam first)</span>
                        )}
                      </button>
                      
                      <button 
                        className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3"
                        onClick={() => setShowLearningPath(true)}
                      >
                        <Brain className="w-5 h-5 text-blue-500" />
                        <span>Learning Path</span>
                      </button>
                    </div>

                    {/* Course Title - Only show once here */}
                    <div className="text-center mb-12">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Fundamentals</h1>
                      <p className="text-xl text-gray-600">Master the fundamentals of artificial intelligence and machine learning</p>
                    </div>

                    {/* Module List */}
                    <ModuleList 
                      modules={courseData.modules.slice(0, 2)}
                      progress={progress}
                      activeModule={activeModule}
                      setActiveModule={setActiveModule}
                      setActiveLesson={setActiveLesson}
                      showTitle={false}
                    />

                    {/* Image Classification Project */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                      <button
                        onClick={() => setShowImageClassifier(true)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                              <Code className="w-6 h-6 text-blue-600" />
                            </div>
                            {isProjectCompleted('image-classifier') && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-500" />
                              </div>
                            )}
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold">
                                Project: Image Classification
                              </h3>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="text-gray-600">Apply your knowledge with a hands-on project</p>
                              <span className="text-sm text-gray-500">
                                {isProjectCompleted('image-classifier') ? 'Completed' : 'Not started'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Remaining Modules */}
                    <ModuleList 
                      modules={courseData.modules.slice(2)}
                      progress={progress}
                      activeModule={activeModule}
                      setActiveModule={setActiveModule}
                      setActiveLesson={setActiveLesson}
                      showTitle={false}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar (visible in lesson view) */}
              {activeLesson && (
                <div className={`col-span-12 lg:col-span-4 ${
                  showSidebar ? 'fixed lg:relative inset-0 lg:inset-auto z-40' : 'hidden lg:block'
                }`}>
                  <div className="h-full bg-white p-6 rounded-xl shadow-lg overflow-y-auto">
                    <h3 className="text-xl font-semibold mb-4">Course Contents</h3>
                    <div className="space-y-4">
                      {courseData.modules.map(module => (
                        <div key={module.id} className="space-y-2">
                          <div className="font-medium text-gray-900">{module.title}</div>
                          <div className="pl-4 space-y-1">
                            {module.lessons.map(lesson => (
                              <button
                                key={lesson.id}
                                onClick={() => setActiveLesson(lesson)}
                                className={`w-full text-left px-2 py-1 rounded ${
                                  activeLesson.id === lesson.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {lesson.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}