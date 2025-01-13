import React, { useState } from 'react';
import { ChevronLeft, FileText, HelpCircle, CheckCircle, ArrowRight, Play, Pause } from 'lucide-react';
import { QuizSection } from './QuizSection';
import PatternGame from '../interactive/PatternGame';
import AISimulator from '../interactive/AISimulator';
import DecisionTreeBuilder from '../interactive/DecisionTreeBuilder';
import LearningComparison from '../interactive/LearningComparison';
import ArticleView from './ArticleView';

function LessonView({
  lesson,
  progress,
  setProgress,
  onBack,
  activeTab,
  setActiveTab
}) {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showInteractive, setShowInteractive] = useState(true);

  // Function to render the appropriate interactive component based on lesson ID
  const renderInteractiveComponent = () => {
    switch (lesson.id) {
      case "1.1":
        return (
          <AISimulator
            title="AI Decision Making Simulator"
            description="See how AI processes and makes decisions"
            mode="basic"
          />
        );
      case "1.2":
        return (
          <AISimulator
            title="AI in Daily Life"
            description="Explore AI applications in your daily routine"
            mode="everyday"
          />
        );
      case "1.3":
        return (
          <PatternGame
            difficulty="beginner"
            patterns={[
              { sequence: [2, 4, 6, 8], answer: 10, type: "numeric" },
              { sequence: ["🔴", "🔵", "🔴", "🔵"], answer: "🔴", type: "visual" }
            ]}
          />
        );
      case "1.4":
        return (
          <DecisionTreeBuilder
            scenario="weather-activity"
            difficulty="beginner"
          />
        );
      case "2.1":
        return (
          <AISimulator
            title="Training Data Lab"
            description="Build and test your own training dataset"
            mode="training"
          />
        );
      case "2.2":
        return (
          <PatternGame
            difficulty="intermediate"
            patterns={[
              { sequence: [1, 3, 6, 10], answer: 15, type: "numeric" },
              { sequence: ["🟦", "🟨", "🟦", "🟨"], answer: "🟦", type: "visual" }
            ]}
          />
        );
      case "2.3":
        return (
          <DecisionTreeBuilder
            scenario="pet-classifier"
            difficulty="intermediate"
          />
        );
      case "2.4":
        return (
          <LearningComparison
            scenarios={[
              { type: "supervised", task: "image-classification" },
              { type: "unsupervised", task: "customer-grouping" }
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to modules
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('article')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeTab === 'article' 
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            Article
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeTab === 'quiz'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            Quiz
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
            {renderInteractiveComponent() && (
              <button
                onClick={() => setShowInteractive(!showInteractive)}
                className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700"
              >
                {showInteractive ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Hide Interactive
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Show Interactive
                  </>
                )}
              </button>
            )}
          </div>
          
          {activeTab === 'article' ? (
            <>
              {showInteractive && renderInteractiveComponent() && (
                <div className="mb-8 border rounded-xl p-6 bg-gray-50">
                  {renderInteractiveComponent()}
                </div>
              )}

              <ArticleView article={lesson.article} />
              
              {!progress.completedLessons.includes(lesson.id) && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Take Quiz
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <QuizSection
              lesson={lesson}
              progress={progress}
              setProgress={setProgress}
              onComplete={() => {
                setQuizCompleted(true);
                setTimeout(() => onBack(), 2000);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonView;