import React from 'react';
import { BookOpen, Check, Lock, Flag, Star, Trophy } from 'lucide-react';

const PathView = ({ modules, progress, setActiveLesson }) => {
  const isModuleUnlocked = (moduleIndex) => {
    if (moduleIndex === 0) return true;
    const prevModule = modules[moduleIndex - 1];
    return prevModule.lessons.every(lesson => progress.completedLessons.includes(lesson.id));
  };

  const isLessonUnlocked = (moduleIndex, lessonIndex) => {
    if (lessonIndex === 0) return isModuleUnlocked(moduleIndex);
    const prevLesson = modules[moduleIndex].lessons[lessonIndex - 1];
    return progress.completedLessons.includes(prevLesson.id);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-16">Your AI Learning Adventure</h1>

      {/* Start Point */}
      <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 relative">
        <Flag className="w-8 h-8 mb-2" />
        <h2 className="text-xl font-bold">Begin Your Journey</h2>
        <p>Start your AI learning adventure!</p>
        {/* Connector Line */}
        <div className="absolute h-8 w-1 bg-blue-200 left-1/2 -bottom-8 transform -translate-x-1/2" />
      </div>

      {/* Modules */}
      <div className="relative">
        {/* Main Path Line */}
        <div className="absolute left-8 top-0 w-1 h-full bg-blue-100" />
        
        <div className="space-y-6">
          {modules.map((module, moduleIndex) => {
            const isUnlocked = isModuleUnlocked(moduleIndex);
            
            return (
              <div key={module.id} className="relative">
                {/* Module Node */}
                <div className="absolute left-8 top-8 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${
                    isUnlocked ? 'bg-blue-500' : 'bg-gray-300'
                  } ring-4 ring-white`} />
                </div>

                {/* Module Card */}
                <div className={`ml-16 bg-white rounded-xl shadow-sm border-2 ${
                  isUnlocked ? 'border-blue-200' : 'border-gray-200'
                }`}>
                  {/* Module Header */}
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg">Module {moduleIndex + 1}: {module.title}</h3>
                  </div>

                  {/* Lessons */}
                  <div className="p-4 space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isCompleted = progress.completedLessons.includes(lesson.id);
                      const isUnlocked = isLessonUnlocked(moduleIndex, lessonIndex);
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => isUnlocked ? setActiveLesson(lesson) : null}
                          disabled={!isUnlocked}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                            isUnlocked 
                              ? 'hover:bg-blue-50' 
                              : 'opacity-50 cursor-not-allowed'
                          } ${
                            isCompleted 
                              ? 'bg-green-50' 
                              : 'bg-gray-50'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isCompleted 
                              ? 'bg-green-100' 
                              : isUnlocked 
                                ? 'bg-blue-100' 
                                : 'bg-gray-200'
                          }`}>
                            {isCompleted ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : !isUnlocked ? (
                              <Lock className="w-4 h-4 text-gray-400" />
                            ) : (
                              <BookOpen className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm">{lesson.title}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-2">
                              <span>{lesson.duration}</span>
                              {isCompleted && progress.quizScores[lesson.id] && (
                                <div className="flex items-center gap-1 text-yellow-600">
                                  <Star className="w-3 h-3" />
                                  <span>{progress.quizScores[lesson.id]}%</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Achievement */}
        <div className="mt-8 ml-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white relative">
          <div className="absolute left-[-3.5rem] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white" />
          </div>
          <Trophy className="w-8 h-8 mb-2" />
          <h3 className="text-xl font-bold">Final Achievement</h3>
          <p>Complete all modules and pass the final exam to earn your certificate!</p>
        </div>
      </div>
    </div>
  );
};

export default PathView;