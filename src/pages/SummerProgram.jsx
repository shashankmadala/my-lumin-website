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
  PlayCircle,
  CreditCard,
  Building,
  GraduationCap,
  Heart,
  Mic
} from 'lucide-react';

export default function SummerProgram() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeSession, setActiveSession] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [isTimelineAnimated, setIsTimelineAnimated] = useState(false);
  const [hoveredBadgeIndex, setHoveredBadgeIndex] = useState(null);
  const [currentImpactIndex, setCurrentImpactIndex] = useState(0);

  // Function to handle manual carousel navigation
  const handleImpactCardChange = (direction) => {
    if (direction === 'next') {
      setCurrentImpactIndex(prev => (prev + 1) % fundAllocation.length);
    } else {
      setCurrentImpactIndex(prev => (prev - 1 + fundAllocation.length) % fundAllocation.length);
    }
  };

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

    // Auto-rotate impact cards
    const impactInterval = setInterval(() => {
      setCurrentImpactIndex(prev => (prev + 1) % fundAllocation.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(impactInterval);
    };
  }, []);

  const weeks = {
    1: {
      title: "Introduction to AI & Machine Learning",
      description: "Understanding AI fundamentals and how machines learn",
      sessions: [
        {
          title: "What is AI?",
          description: "AI Scavenger Hunt & Real-World Applications",
          outcomes: ["Identify real-world AI applications", "Categorize AI types", "Discuss AI impacts"],
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: "How AI Learns",
          description: "AI Detective: Spot the Pattern",
          outcomes: ["Recognize patterns in data", "Understand supervised vs. unsupervised learning", "Make AI predictions"],
          icon: <Sparkles className="w-6 h-6" />
        }
      ]
    },
    2: {
      title: "Natural Language Processing & Ethics",
      description: "Exploring how AI understands language and ethical considerations",
      sessions: [
        {
          title: "NLP & Language Understanding",
          description: "AI Chatbot Simulation",
          outcomes: ["Simulate chatbot conversations", "Understand intent and context", "Compare with real AI systems"],
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Ethics & Bias in AI",
          description: "AI Fairness Debate & Experiment",
          outcomes: ["Debate AI fairness issues", "Identify bias in datasets", "Create strategies for fair AI"],
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    3: {
      title: "Building Blocks of Chatbots",
      description: "Learning the fundamentals of chatbot development",
      sessions: [
        {
          title: "How Chatbots Work",
          description: "Chatbot Script & Flowchart Challenge",
          outcomes: ["Design conversation flowcharts", "Create chatbot interactions", "Identify limitations"],
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: "Intro to Python for AI",
          description: "Coding a Simple Chatbot",
          outcomes: ["Write basic Python code", "Create if-else responses", "Test chatbot functionality"],
          icon: <Code className="w-6 h-6" />
        }
      ]
    },
    4: {
      title: "Project Phase – Building the Chatbot",
      description: "Designing and implementing personal AI chatbots",
      sessions: [
        {
          title: "Planning the Chatbot",
          description: "AI Mind Mapping & Wireframing",
          outcomes: ["Define chatbot purpose", "Create user experience design", "Plan chatbot responses"],
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          title: "Developing the Chatbot",
          description: "AI Model & Implementation",
          outcomes: ["Implement pre-trained models", "Customize responses", "Test functionality"],
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    5: {
      title: "Testing, Improving, and Showcasing",
      description: "Finalizing and presenting AI chatbot projects",
      sessions: [
        {
          title: "Debugging & Improving Chatbots",
          description: "AI User Testing & Optimization",
          outcomes: ["Conduct peer testing", "Debug and fix issues", "Optimize responses"],
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Final Showcase & Keynote Speaker",
          description: "Chatbot Presentations & Industry Insights",
          outcomes: ["Present finished projects", "Receive peer feedback", "Learn from AI industry leader"],
          icon: <Award className="w-6 h-6" />
        }
      ]
    }
  };

  const paymentMethods = [
    { name: "Venmo", icon: <CreditCard className="w-6 h-6" /> },
    { name: "Zelle", icon: <CreditCard className="w-6 h-6" /> },
    { name: "PayPal", icon: <CreditCard className="w-6 h-6" /> }
  ];

  const fundAllocation = [
    { 
      title: "Student Scholarships", 
      description: "Providing AI education opportunities to underserved students",
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      percentage: "40%"
    },
    { 
      title: "AI Education Advocacy", 
      description: "Lobbying for AI curriculum in K-12 education",
      icon: <Building className="w-6 h-6 text-blue-600" />,
      percentage: "30%"
    },
    { 
      title: "Hackathons & Events", 
      description: "Supporting youth AI innovation events",
      icon: <Code className="w-6 h-6 text-purple-600" />,
      percentage: "30%"
    }
  ];

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
                Starting June 28th, 2025
              </div>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Transform Your Summer with
                <span className="block text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mt-2">
                LuminAI Summer Seminar
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our 5-week AI program designed specifically for middle school students ages 11-14 (grades 6-8)
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://forms.gle/YzAwMRgzQq8saqrPA" 
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
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">5-Week Program</h3>
                      <p className="text-gray-600">June 28th - July 28th, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Weekend Sessions</h3>
                      <p className="text-gray-600">1 hour Saturday + 1 hour Sunday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ages 11-14</h3>
                      <p className="text-gray-600">Perfect for grades 6-8</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Program Fee</h3>
                      <p className="text-gray-600">$300 for the full program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 5-week AI education program takes students from basic concepts to building their own AI chatbots
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">
                Students learn through interactive activities, challenges, and real-world applications, not just lectures.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Real AI Projects</h3>
              <p className="text-gray-600">
                Students will build their own AI chatbots from scratch and showcase them to peers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Special Keynote Speaker</h3>
              <p className="text-gray-600">
                Hear from an industry leader at the forefront of AI innovation in our final session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-24 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Timeline</h2>
            <p className="text-xl text-gray-600">Your 5-week journey to AI mastery</p>
          </div>

          <div className="flex justify-center mb-12 overflow-x-auto py-2">
            <div className="inline-flex rounded-full bg-white shadow-md p-1">
              {Object.keys(weeks).map((weekNum) => (
                <button
                  key={weekNum}
                  onClick={() => setActiveWeek(parseInt(weekNum))}
                  className={`px-4 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeWeek === parseInt(weekNum) 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Week {weekNum}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-2">Week {activeWeek}: {weeks[activeWeek].title}</h3>
            <p className="text-gray-600 mb-8">{weeks[activeWeek].description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {weeks[activeWeek].sessions.map((session, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      {session.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{session.title}</h4>
                      <p className="text-sm text-gray-600">{session.description}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Students will:</p>
                    <ul className="space-y-1">
                      {session.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Keynote Speaker Section */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-purple-900 text-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Special Keynote Speaker</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Wrap up your AI learning journey with inspiration from a leader in the AI industry
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Industry Expert Insights</h3>
                  <p className="text-blue-100">Hear from someone working at the cutting edge of AI technology about real-world applications and future developments.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Interactive Q&A Session</h3>
                  <p className="text-blue-100">Students will have the opportunity to ask questions and engage directly with our guest speaker.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Career Pathways</h3>
                  <p className="text-blue-100">Learn about different career paths in AI and what skills students should develop for future opportunities.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg italic text-white/80">
                "We're excited to feature a special guest speaker from the AI industry who will share their experience and inspire our young AI enthusiasts."
              </p>
              <p className="mt-2 text-blue-300">Speaker details will be announced closer to the program date</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Details & Enrollment</h2>
            <p className="text-xl text-gray-600">Invest in your child's AI education journey</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-lg mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-4">Summer AI Program</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">$300</span>
                  <span className="text-gray-600">/ full program</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">10 Interactive Sessions</p>
                      <p className="text-sm text-gray-600">Weekend classes for 5 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Hands-on Project</p>
                      <p className="text-sm text-gray-600">Build a functional AI chatbot</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Special Keynote Speaker</p>
                      <p className="text-sm text-gray-600">Industry leader presentation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Completion Certificate</p>
                      <p className="text-sm text-gray-600">Formal recognition of achievement</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://forms.gle/YzAwMRgzQq8saqrPA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">June 28 - July 28, 2025</p>
                      <p className="text-blue-100">5 consecutive weekends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Weekend Sessions</p>
                      <p className="text-blue-100">1 hour Saturday + 1 hour Sunday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Small Class Size</p>
                      <p className="text-blue-100">Limited spots available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Brain className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">No Prior Experience Needed</p>
                      <p className="text-blue-100">Designed for beginners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Accepted Payment Methods</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {paymentMethods.map((method) => (
                <div key={method.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    {method.icon}
                  </div>
                  <span className="font-medium">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a nonprofit organization, 100% of program fees directly support our mission to make AI education accessible to all students
            </p>
          </div>

          {/* Interactive Impact Carousel */}
          <div className="relative mb-16">
            <div className="max-w-4xl mx-auto">
              {/* Navigation Arrows */}
              <button 
                onClick={() => handleImpactCardChange('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                aria-label="Previous impact"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => handleImpactCardChange('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                aria-label="Next impact"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Carousel Content */}
              <div className="relative h-[350px] overflow-hidden rounded-2xl">
                {fundAllocation.map((fund, index) => (
                  <div 
                    key={fund.title}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === currentImpactIndex 
                        ? 'translate-x-0 opacity-100 z-10' 
                        : index < currentImpactIndex 
                          ? '-translate-x-full opacity-0 z-0' 
                          : 'translate-x-full opacity-0 z-0'
                    }`}
                    aria-hidden={index !== currentImpactIndex}
                  >
                    <div className="bg-white h-full rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center mb-6 shadow-md">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center">
                          {fund.icon}
                        </div>
                      </div>
                      <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{fund.percentage}</div>
                      <h3 className="text-2xl font-semibold mb-3">{fund.title}</h3>
                      <p className="text-gray-600 max-w-lg">{fund.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {fundAllocation.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImpactIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImpactIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to impact slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-10 h-10 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Making AI Education Accessible</h3>
                <p className="text-gray-600">
                  We believe that every student should have access to quality AI education regardless of their background. Our nonprofit is committed to creating an inclusive environment where the innovators of tomorrow can thrive.
                </p>
              </div>
            </div>
            <div className="pl-0 md:pl-24">
              <p className="text-gray-600 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                By enrolling in our summer program, you're not only investing in your child's future but also supporting our mission to expand AI education opportunities for underserved communities.
              </p>
            </div>
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
              href="https://forms.gle/YzAwMRgzQq8saqrPA" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}