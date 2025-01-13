import React from 'react';
import { Trophy, Flame, Target, Brain, BookOpen } from 'lucide-react';

const ProgressTracker = ({ progress, totalLessons }) => {
  if (!progress || !progress.completedLessons) {
    return null;
  }

  const percentComplete = totalLessons > 0 
    ? Math.round((progress.completedLessons.length / totalLessons) * 100)
    : 0;

  const stats = [
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      label: "Progress",
      value: `${percentComplete}%`,
      detail: `${progress.completedLessons.length}/${totalLessons} lessons`
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      label: "Streak",
      value: progress.streak || 0,
      detail: "days"
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      label: "Quiz Avg",
      value: progress.quizScores ? 
        Object.values(progress.quizScores).length > 0
          ? Math.round(
              Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / 
              Object.values(progress.quizScores).length
            )
          : 0
        : 0,
      detail: "score"
    },
    {
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
      label: "Badges",
      value: progress.badges ? progress.badges.length : 0,
      detail: "earned"
    }
  ];

  return (
    <div className="mb-12 relative">
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-4 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="bg-white rounded-2xl p-6 shadow-lg relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl" />
        
        <div className="relative">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Course Progress</h3>
              <span className="text-sm text-gray-500">{percentComplete}% Complete</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-in-out"
                style={{ width: `${percentComplete}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  {stat.icon}
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.detail}</div>
              </div>
            ))}
          </div>

          {progress.lastAccessed && (
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <BookOpen className="w-4 h-4" />
              Last activity: {new Date(progress.lastAccessed).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;