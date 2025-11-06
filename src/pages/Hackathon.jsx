import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Calendar, DollarSign, Award, Clock, Globe, Brain, Code, Zap, Target, Star, ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/animations.css';

export default function HackathonPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const prizes = [
    {
      place: "1st Place",
      amount: "$2,000",
      winners: "1 winner"
    },
    {
      place: "2nd Place", 
      amount: "$1,000",
      winners: "1 winner"
    },
    {
      place: "3rd Place",
      amount: "$500", 
      winners: "1 winner"
    }
  ];

  const judgingCriteria = [
    {
      title: "Functionality",
      description: "How well does the project perform its intended functions? Is the AI integration robust and reliable? Is the solution scalable to support a wider audience or additional use cases?"
    },
    {
      title: "Purpose", 
      description: "Does the project address a meaningful problem or enhance an everyday user journey? Does it enable new possibilities with AI that were previously difficult or inaccessible for most users?"
    },
    {
      title: "Innovation & Creativity",
      description: "How original is the idea? Does the project showcase unique uses of AI, creative designs, or new takes on familiar tools? Is there a clear \"wow\" factor?"
    },
    {
      title: "User Experience",
      description: "Is the application intuitive and easy to use? Is the information presented clearly? Does the solution prioritize accessibility and inclusivity across beginner, intermediate, and advanced users?"
    },
    {
      title: "Technical Execution", 
      description: "How effectively are AI models or APIs integrated? Is the technical approach well-documented and maintainable? Are performance, privacy, and reliability concerns addressed (e.g., client-side inference, offline support, etc.)?"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              LuminHacks 2025
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
              Empower Your Project
              <span className="block text-4xl lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Create the Next Big Thing with AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hackathon participants worldwide in building innovative AI-powered solutions. 
              No experience required - just bring your curiosity and creativity!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a 
                href="https://lumin-hacks.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
              >
                Join Hackathon
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => document.getElementById('requirements-section').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-lg font-medium"
              >
                View Full Rules
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Key Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">Deadline</span>
                </div>
                <p className="text-sm text-gray-600">Oct 29, 2025 @ 5:00pm EDT</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Location</span>
                </div>
                <p className="text-sm text-gray-600">Online • Public</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                  <span className="font-semibold text-gray-900">Prize Pool</span>
                </div>
                <p className="text-sm text-gray-600">$3,500 in cash</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-gray-900">Participants</span>
                </div>
                <p className="text-sm text-gray-600">450 Hackers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="w-full">
        <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            d="M0,40 C320,80 420,10 720,40 C1020,70 1380,20 1440,30 L1440,100 L0,100 Z" 
            fill="white" 
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Welcome to LuminHacks</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Where Anyone Can Build With AI! AI is changing the way we create, learn, and solve problems, 
              and now you can harness its power for your own projects, regardless of your experience level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">All Skill Levels Welcome</h3>
              <p className="text-gray-600">
                Whether you're just getting started or you've built with AI before, our hackathon is designed for inclusive learning and creativity. No prior experience required.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Supportive Community</h3>
              <p className="text-gray-600">
                Connect with mentors, collaborate in teams, and share your progress in a friendly, encouraging environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Privacy-First Approach</h3>
              <p className="text-gray-600">
                Many suggested APIs and tools run locally, so you can focus on building great projects without worrying about privacy or server management.
              </p>
            </div>
          </div>

          {/* Why Participate */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Participate?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Build Portfolio Projects</h4>
                  <p className="text-gray-600 text-sm">Demonstrate practical AI skills with real-world applications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Win Prizes & Recognition</h4>
                  <p className="text-gray-600 text-sm">Get feedback from experienced judges and peers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Network & Learn</h4>
                  <p className="text-gray-600 text-sm">Connect with innovators and join a learning community</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Unleash Creativity</h4>
                  <p className="text-gray-600 text-sm">Show how YOU would use AI to solve real-world problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements-section" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Requirements</h2>
            <p className="text-xl text-gray-600">
              Projects must be new and original for this event! No recycled code or reused project ideas from previous years.
            </p>
          </div>

          <div className="space-y-8">
            {/* What to Build */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">What to Build</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Entrants must create a new project that showcases the use of AI models. You can build anything from a web application, 
                mobile app, creative bot, educational tool, financial assistant, productivity enhancer, to even an art or music generator.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Project Requirements:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Must meaningfully use at least one AI model or API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Accessible to beginners, intermediate, and advanced participants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Can use any open-source or commercial AI tools/models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Projects can be solo or team-based</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Platform Options:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Web applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Desktop applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Mobile applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Focus on demonstrating AI integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What to Submit */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">What to Submit</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Required Submissions:</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mt-0.5">1</div>
                      <div>
                        <span className="font-medium">Working Application</span>
                        <p className="text-xs text-gray-500 mt-1">Demo link, published app, or public-facing website</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mt-0.5">2</div>
                      <div>
                        <span className="font-medium">Written Description</span>
                        <p className="text-xs text-gray-500 mt-1">Purpose, features, AI models used, problem solved</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mt-0.5">3</div>
                      <div>
                        <span className="font-medium">Demonstration Video</span>
                        <p className="text-xs text-gray-500 mt-1">Max 3 minutes, publicly accessible (YouTube/Vimeo)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mt-0.5">4</div>
                      <div>
                        <span className="font-medium">Public GitHub Repository</span>
                        <p className="text-xs text-gray-500 mt-1">Open source with instructions and documentation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mt-0.5">5</div>
                      <div>
                        <span className="font-medium">Testing Access</span>
                        <p className="text-xs text-gray-500 mt-1">Login credentials or special steps for judges</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Additional Requirements:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Written and video submissions must be in English</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Video must include footage of project in action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Materials must not infringe upon third party rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Optional: Share feedback on development experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Prizes</h2>
            <p className="text-xl text-gray-600">$3,500 in prizes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <div key={index} className={`bg-gradient-to-br rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                index === 0 ? 'from-yellow-50 to-yellow-100 border-2 border-yellow-200' :
                index === 1 ? 'from-gray-50 to-gray-100 border-2 border-gray-200' :
                'from-orange-50 to-orange-100 border-2 border-orange-200'
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  index === 0 ? 'bg-yellow-600' :
                  index === 1 ? 'bg-gray-600' :
                  'bg-orange-600'
                }`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{prize.place}</h3>
                <div className="text-3xl font-bold mb-2 text-gray-900">{prize.amount}</div>
                <div className="text-sm text-gray-600">{prize.winners}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Judging Criteria Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Judging Criteria</h2>
            <p className="text-xl text-gray-600">How your project will be evaluated</p>
          </div>

          <div className="space-y-4">
            {judgingCriteria.map((criterion, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{criterion.title}</h3>
                  </div>
                  {expandedSection === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>
                {expandedSection === index && (
                  <div className="mt-6 pl-14">
                    <p className="text-gray-600 leading-relaxed">{criterion.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Who Can Participate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Age Requirement</h3>
              <p className="text-gray-600 text-sm">Above legal age of majority in country of residence</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Student Status</h3>
              <p className="text-gray-600 text-sm">Students only</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-600 text-sm">All countries/territories, excluding standard exceptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join LuminHacks and create the next big thing with AI. No experience required - just bring your creativity!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://lumin-hacks.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
            >
              Join Hackathon Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 text-lg font-medium"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-4 transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <button
          onClick={scrollToTop}
          className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 rotate-[-90deg]" />
        </button>
        <a 
          href="https://lumin-hacks.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
          Join Now
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
