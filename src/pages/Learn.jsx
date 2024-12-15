import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  GraduationCap,
  Brain,
  Code,
  Target,
  ChevronDown,
  CheckCircle,
  Clock,
  Award,
  BarChart,
  Lock,
  Sparkles,
  ArrowRight,
  PlayCircle,
  FileText,
  HelpCircle,
  Star,
  Trophy,
  Menu,
  X
} from 'lucide-react';

export default function Learn() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeLessonContent, setActiveLessonContent] = useState(null);
  const [contentType, setContentType] = useState('video'); // video, article, quiz
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('content'); // content, notes, discussion
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      lastVisited: null,
      moduleProgress: {},
      points: 0,
      badges: [],
      quizScores: {},
      notes: {}
    };
  });

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  const courseContent = {
    overview: {
      title: "AI 101: Foundations of Artificial Intelligence",
      subtitle: "Master the basics of AI and machine learning",
      duration: "8 weeks",
      lessons: 24,
      level: "Beginner",
      points: 1000,
      badges: 8,
      requirements: [
        "Basic computer skills",
        "Curiosity about AI",
        "No prior coding experience needed"
      ],
      objectives: [
        "Understand AI fundamentals and key concepts",
        "Build and train simple machine learning models",
        "Apply AI ethics principles in real-world scenarios",
        "Create practical AI projects using Python",
        "Develop problem-solving skills in AI contexts",
        "Understand the future of AI and its implications"
      ]
    },
    modules: [
      {
        id: 1,
        title: "Introduction to Artificial Intelligence",
        description: "Fundamental concepts and history of AI",
        icon: <Brain className="w-6 h-6" />,
        duration: "2 weeks",
        points: 200,
        badge: {
          name: "AI Explorer",
          icon: <Award className="w-6 h-6" />
        },
        lessons: [
          {
            id: "1.1",
            title: "What is Artificial Intelligence?",
            duration: "45 min",
            points: 50,
            hasQuiz: true,
            content: {
              video: {
                url: "#",
                duration: "15:30"
              },
              article: {
                title: "Understanding AI Fundamentals",
                content: "Article content here..."
              },
              quiz: {
                questions: [
                  {
                    question: "What is AI?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correct: 0
                  }
                  // More questions...
                ]
              },
              resources: [
                {
                  title: "Additional Reading",
                  type: "pdf",
                  url: "#"
                }
              ]
            }
          },
          // More lessons...
        ]
      },
      // More modules...
    ]
  };

  const awardPoints = (points) => {
    setProgress(prev => ({
      ...prev,
      points: prev.points + points
    }));
  };

  const saveNote = (lessonId, note) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [lessonId]: note
      }
    }));
  };

  const submitQuiz = (lessonId, score) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [lessonId]: score
      },
      points: prev.points + (score >= 80 ? 50 : 20)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h1 className="text-xl font-bold">AI 101</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">{progress.points} Points</span>
              </div>
              <div className="h-8 w-8 bg-indigo-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 bottom-0 w-80 bg-white border-r transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold">Your Progress</h2>
                <span className="text-sm text-indigo-600">
                  {calculateTotalProgress()}%
                </span>
              </div>
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${calculateTotalProgress()}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              {courseContent.modules.map((module) => (
                <div key={module.id}>
                  <button
                    onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                        {module.icon}
                      </div>
                      <span className="font-medium">{module.title}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 transform transition-transform duration-200 ${
                      activeModule === module.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`pl-11 space-y-1 transition-all duration-200 ${
                    activeModule === module.id ? 'max-h-96' : 'max-h-0 overflow-hidden'
                  }`}>
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setActiveLesson(lesson);
                          setActiveLessonContent(lesson.content);
                        }}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg text-sm ${
                          activeLesson?.id === lesson.id 
                            ? 'bg-indigo-50 text-indigo-600' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        {progress.completedLessons.includes(lesson.id) ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                        )}
                        {lesson.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-80' : 'ml-0'
        }`}>
          {activeLesson ? (
            <div className="p-8">
              <div className="max-w-4xl mx-auto">
                {/* Lesson Header */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2">{activeLesson.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {activeLesson.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {activeLesson.points} points
                    </div>
                  </div>
                </div>

                {/* Content Tabs */}
                <div className="border-b mb-6">
                  <div className="flex gap-6">
                    {['content', 'notes', 'discussion'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 px-2 font-medium capitalize transition-colors duration-200 ${
                          activeTab === tab 
                            ? 'border-b-2 border-indigo-600 text-indigo-600' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                {activeTab === 'content' && (
                  <div className="space-y-8">
                    {/* Content Type Selector */}
                    <div className="flex gap-4 p-2 bg-gray-50 rounded-lg">
                      {['video', 'article', 'quiz'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setContentType(type)}
                          className={`px-4 py-2 rounded-lg font-medium capitalize ${
                            contentType === type
                              ? 'bg-white shadow text-indigo-600'
                              : 'text-gray-600 hover:bg-white/50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    {/* Video Content */}
                    {contentType === 'video' && (
                      <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white opacity-80" />
                      </div>
                    )}

                    {/* Article Content */}
                    {contentType === 'article' && (
                      <div className="prose max-w-none">
                        <h2>{activeLessonContent?.article.title}</h2>
                        <p>{activeLessonContent?.article.content}</p>
                      </div>
                    )}

                    {/* Quiz Content */}
                    {contentType === 'quiz' && (
                      <div className="space-y-6">
                        {activeLessonContent?.quiz.questions.map((q, i) => (
                          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-medium mb-4">{q.question}</h3>
                            <div className="space-y-2">
                              {q.options.map((option, j) => (
                                <button
                                  key={j}
                                  className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors duration-200"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Notes Tab */}
                {activeTab === 'notes' && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <textarea
                      className="w-full min-h-[200px] p-4 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Take notes for this lesson..."
                      value={progress.notes[activeLesson.id] || ''}
                      onChange={(e) => saveNote(activeLesson.id, e.target.value)}
                    />
                  </div>
                )}

                {/* Discussion Tab */}
                {activeTab === 'discussion' && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600">Discussion feature coming soon!</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Course Overview when no lesson is selected
            <div className="p-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{courseContent.overview.title}</h1>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-indigo-600" />
                        <span>{courseContent.overview.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-indigo-600" />
                        <span>{courseContent.overview.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-indigo-600" />
                        <span>{courseContent.overview.points} points available</span>
                        </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-indigo-600" />
                        <span>{courseContent.overview.badges} badges to earn</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-indigo-600" />
                        <span>{courseContent.overview.level}</span>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-semibold mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {courseContent.overview.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <ul className="space-y-4">
                        {courseContent.overview.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Target className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Start Guide */}
                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold mb-4">Quick Start Guide</h2>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                        <ol className="space-y-4">
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                              1
                            </div>
                            <span>Select a module from the sidebar</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                              2
                            </div>
                            <span>Complete lessons in order</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                              3
                            </div>
                            <span>Take quizzes to earn points</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                              4
                            </div>
                            <span>Earn badges for module completion</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module Preview Cards */}
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Course Modules</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {courseContent.modules.map((module) => (
                      <div 
                        key={module.id}
                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            {module.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {module.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Target className="w-4 h-4" />
                                {module.points} points
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {module.badge && (
                          <div className="mt-4 pt-4 border-t">
                            <div className="flex items-center gap-2 text-sm">
                              <Award className="w-4 h-4 text-yellow-500" />
                              <span>Earn the {module.badge.name} badge</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Helper functions
const calculateTotalProgress = () => {
  // Implementation of progress calculation
  return 0;
};