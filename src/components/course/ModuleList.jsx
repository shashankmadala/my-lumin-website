import React from 'react';
import { ChevronDown, CheckCircle, Brain } from 'lucide-react';

export function ModuleList({ 
  modules, 
  progress, 
  activeModule, 
  setActiveModule, 
  setActiveLesson 
}) {
  // Always allow access to modules
  const isModuleAvailable = () => true;

  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">AI 101: Foundations of AI</h1>
        <p className="text-xl text-gray-600">
          Master the fundamentals of artificial intelligence and machine learning
        </p>
      </div>

      {/* Module List */}
      <div className="space-y-4">
        {modules.map((module) => {
          const moduleLessons = module.lessons.map(l => l.id);
          const completedCount = moduleLessons.filter(id => 
            progress.completedLessons.includes(id)
          ).length;
          const percentComplete = (completedCount / moduleLessons.length) * 100;

          return (
            <div 
              key={module.id}
              className="bg-white rounded-xl shadow-sm"
            >
              <button
                onClick={() => setActiveModule(
                  activeModule === module.id ? null : module.id
                )}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">
                      Module {module.id}: {module.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-600">{module.description}</p>
                      <span className="text-sm text-gray-500">
                        {completedCount}/{moduleLessons.length} complete
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {percentComplete === 100 && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    activeModule === module.id ? 'rotate-180' : ''
                  }`} />
                </div>
              </button>

              {/* Lessons List */}
              <div className={`transition-all duration-300 ease-in-out ${
                activeModule === module.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-4 space-y-2">
                  {module.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 text-left"
                    >
                      <div className="w-5 h-5">
                        {progress.completedLessons.includes(lesson.id) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{lesson.title}</div>
                        <div className="text-sm text-gray-600">{lesson.duration}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModuleList;