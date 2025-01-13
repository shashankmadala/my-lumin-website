import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import {
  BookOpen, Brain, Code, ChevronRight, ChevronDown, CheckCircle,
  Clock, Star, ArrowRight, PlayCircle, FileText, Target, CircleDot,
  X, Check, Award, Trophy, Zap
} from 'lucide-react';
import { default as ModuleList } from '../components/course/ModuleList';
import { default as LessonView } from '../components/course/LessonView';
import { default as QuizSection } from '../components/course/QuizSection';
import { default as FinalAssessment } from '../components/course/FinalAssessment';
import { default as Certificate } from '../components/course/Certificate';
import courseData from '../data/courseData';

export default function Learn() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('article');
  const [showFinalAssessment, setShowFinalAssessment] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      moduleProgress: {},
      quizScores: {},
      streak: 0,
      lastAccessed: null,
      badges: [],
      finalAssessmentScore: null,
      certificateIssued: false
    };
  });

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  // Update streak
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

  const calculateProgress = () => {
    if (!courseData?.modules) return 0;

    const totalLessons = courseData.modules.reduce(
      (acc, module) => acc + module.lessons.length,
      0
    );
    return totalLessons > 0 ? (progress.completedLessons.length / totalLessons) * 100 : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${calculateProgress()}%` }}
        />
      </div>

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {showFinalAssessment ? (
            <FinalAssessment 
              onComplete={(score) => {
                setProgress(prev => ({
                  ...prev,
                  finalAssessmentScore: score
                }));
                if (score >= 50) {
                  setShowCertificate(true);
                }
                setShowFinalAssessment(false);
              }}
              onBack={() => setShowFinalAssessment(false)}
            />
          ) : showCertificate ? (
            <Certificate 
              progress={progress}
              onBack={() => setShowCertificate(false)}
            />
          ) : activeLesson ? (
            <LessonView 
              lesson={activeLesson}
              progress={progress}
              setProgress={setProgress}
              onBack={() => setActiveLesson(null)}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ) : (
            <ModuleList 
              modules={courseData.modules}
              progress={progress}
              activeModule={activeModule}
              setActiveModule={setActiveModule}
              setActiveLesson={setActiveLesson}
              onStartAssessment={() => setShowFinalAssessment(true)}
            />
          )}
        </div>
      </main>
    </div>
  );
}