import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  ArrowRight,
  Brain,
  Star,
  ChevronDown,
  Code,
  Sparkles,
  Target,
  Check,
  PlayCircle
} from 'lucide-react';

export default function SummerProgram() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeSession, setActiveSession] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [isTimelineAnimated, setIsTimelineAnimated] = useState(false);
  const [hoveredBadgeIndex, setHoveredBadgeIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target.classList.contains('badge-trigger')) {
              setShowBadge(true);
            }
            if (entry.target.classList.contains('timeline-trigger')) {
              setIsTimelineAnimated(true);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('.animate-on-scroll, .badge-trigger, .timeline-trigger').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const sessions = {
    1: [
      {
        title: "Introduction to AI",
        description: "Basic concepts and Python setup",
        outcomes: ["Understanding AI fundamentals", "Python environment setup", "First program"],
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: "Machine Learning Basics",
        description: "Core ML concepts and applications",
        outcomes: ["Data analysis basics", "Simple ML models", "Practice exercises"],
        icon: <Code className="w-6 h-6" />
      }
    ],
    2: [
      {
        title: "Advanced Concepts",
        description: "Deep learning and neural networks",
        outcomes: ["Neural network basics", "Model training", "AI ethics"],
        icon: <Sparkles className="w-6 h-6" />
      },
      {
        title: "Project Work",
        description: "Build your own AI application",
        outcomes: ["Project planning", "Implementation", "Presentation"],
        icon: <Target className="w-6 h-6" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll from-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6">
                <Star className="w-4 h-4" />
                Applications Open for Summer 2024
              </div>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Transform Your Summer with
                <span className="block text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mt-2">
                  AI Learning
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our 2-week intensive program designed specifically for middle school students
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://forms.google.com/your-form-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative animate-on-scroll from-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Learn AI Fundamentals</h3>
                      <p className="text-gray-600">From basics to practical applications</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Build Projects</h3>
                      <p className="text-gray-600">Hands-on coding experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Earn Certificate</h3>
                      <p className="text-gray-600">Recognition of achievement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Timeline</h2>
            <p className="text-xl text-gray-600">Your journey to AI mastery</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              {[1, 2].map((week) => (
                <button
                  key={week}
                  onClick={() => setActiveWeek(week)}
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${
                    activeWeek === week 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Week {week}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 relative">
            <div className="absolute inset-y-0 left-[50%] w-0.5 bg-gray-200"/>
            {sessions[activeWeek].map((session, index) => (
              <div
                key={session.title}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:transform md:translate-x-1/2'
                }`}
              >
                <div 
                  className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 timeline-trigger ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  } ${isTimelineAnimated ? 'animate-in from-left' : ''}`}
                >
                  <div className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? 'justify-end' : ''
                  }`}>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      {session.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{session.title}</h3>
                      <p className="text-gray-600">{session.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {session.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0"/>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Badges Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Achievements</h2>
            <p className="text-xl text-gray-600">Earn badges as you progress</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: "AI Explorer",
                description: "Complete introduction to AI"
              },
              {
                icon: <Code className="w-8 h-8 text-purple-600" />,
                title: "Code Master",
                description: "Build your first AI model"
              },
              {
                icon: <Target className="w-8 h-8 text-pink-600" />,
                title: "Project Pro",
                description: "Complete project implementation"
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-600" />,
                title: "AI Graduate",
                description: "Program completion"
              }
            ].map((badge, index) => (
              <div 
                key={badge.title}
                className="relative bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredBadgeIndex(index)}
                onMouseLeave={() => setHoveredBadgeIndex(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center transition-transform duration-300 ${hoveredBadgeIndex === index ? 'scale-110' : ''}`}>
                  {badge.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Start Your AI Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our innovative summer program and discover the exciting world of artificial intelligence
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://forms.gle/PLSuUZvRf2tArXCM6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}