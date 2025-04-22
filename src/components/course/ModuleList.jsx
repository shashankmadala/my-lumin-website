import React from 'react';
import { ChevronDown, CheckCircle, Brain, PlayCircle } from 'lucide-react';

const ModuleList = ({ 
  modules, 
  progress, 
  activeModule, 
  setActiveModule, 
  setActiveLesson,
  showTitle = true // Add default value for backward compatibility
}) => {
  return (
    <div className="space-y-8">
      {/* Course Overview - Only show if showTitle is true */}
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Fundamentals</h1>
          <p className="text-xl text-gray-600">
            Master the fundamentals of artificial intelligence and machine learning
          </p>
        </div>
      )}

      {/* Module Grid */}
      <div className="grid gap-6">
        {modules.map((module) => {
          const moduleLessons = module.lessons.map(l => l.id);
          const completedCount = moduleLessons.filter(id => 
            progress.completedLessons.includes(id)
          ).length;
          const percentComplete = (completedCount / moduleLessons.length) * 100;

          return (
            <div 
              key={module.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    {percentComplete === 100 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">
                        Module {module.id}: {module.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-600">{module.description}</p>
                      <span className="text-sm text-gray-500">
                        {completedCount}/{moduleLessons.length} complete
                      </span>
                    </div>
                  </div>
                </div>

                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                  activeModule === module.id ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Lessons List */}
              <div className={`transition-all duration-300 ease-in-out ${
                activeModule === module.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-4 space-y-2">
                  {module.lessons.map((lesson) => {
                    const isCompleted = progress.completedLessons.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson)}
                        className="w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50"
                      >
                        <div className="w-5 h-5">
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <PlayCircle className="w-5 h-5 text-blue-500" />
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium">{lesson.title}</div>
                          <div className="text-sm text-gray-600">{lesson.duration}</div>
                        </div>
                        {progress.quizScores[lesson.id] && (
                          <div className="px-2 py-1 bg-green-100 rounded-md text-sm text-green-700">
                            {progress.quizScores[lesson.id]}%
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleList;