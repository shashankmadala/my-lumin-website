import React from 'react';
import { FileText, HelpCircle } from 'lucide-react';
import ArticleView from './ArticleView';
import QuizSection from './QuizSection';
import PatternGame from './PatternGame';

function LessonView({
  lesson,
  progress,
  setProgress,
  onBack,
  activeTab,
  setActiveTab
}) {
  const handleContinueToQuiz = () => {
    setActiveTab('quiz');
  };

  const handleGameComplete = (score) => {
    if (score > 0 && setProgress) {
      setProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lesson.id],
        quizScores: { ...prev.quizScores, [lesson.id]: Math.round(score) }
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="flex justify-between mb-8">
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
          </div>
          
          {activeTab === 'article' ? (
            <div>
              {lesson.id === "1.3" ? (
                <>
                  {/* Introduction section of the article */}
                  <div className="mb-8">
                    <ArticleView 
                      article={lesson.article.split('Key Concepts')[0]} 
                      onContinueToQuiz={null}
                    />
                  </div>
                  
                  {/* Interactive Game Section */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">Practice Pattern Recognition</h2>
                    <div className="mb-6">
                      <p className="text-gray-600">Put your pattern recognition skills to the test with this interactive exercise. Try to identify the patterns and predict the next number in each sequence.</p>
                    </div>
                    <PatternGame onComplete={handleGameComplete} />
                  </div>

                  {/* Rest of the article content */}
                  <div className="mt-8">
                    <ArticleView 
                      article={"Key Concepts" + lesson.article.split('Key Concepts')[1]} 
                      onContinueToQuiz={handleContinueToQuiz}
                    />
                  </div>
                </>
              ) : (
                <ArticleView 
                  article={lesson.article} 
                  onContinueToQuiz={handleContinueToQuiz}
                />
              )}
            </div>
          ) : (
            <QuizSection
              lesson={lesson}
              progress={progress}
              setProgress={setProgress}
              onComplete={() => {
                setActiveTab('article');
                onBack();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonView;