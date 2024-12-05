import React, { useEffect } from 'react';
import { Calendar, Clock, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function SummerProgram() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h1 className="text-7xl font-bold text-gray-900 tracking-tight mb-6">
              Summer AI Program
              <span className="block text-6xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                For Middle School Students
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A 2-week immersive journey into the world of Artificial Intelligence
            </p>
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

          {/* Program Stats */}
          <div className="grid grid-cols-4 gap-8 stagger-children">
            {[
              ['6th-8th', 'Grade Level'],
              ['$300', 'Program Fee'],
              ['2 Weeks', 'Duration'],
              ['4 Hours', 'Weekly Time']
            ].map(([number, label], index) => (
              <div 
                key={label} 
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {number}
                </div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Program Overview</h2>
            <p className="text-xl text-gray-600">
              Discover the exciting world of AI through hands-on projects and interactive learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: "Curriculum Highlights",
                points: [
                  "Introduction to AI concepts",
                  "Basic programming with Python",
                  "Machine learning fundamentals",
                  "Ethics in AI"
                ]
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Learning Experience",
                points: [
                  "Small group sessions",
                  "Interactive workshops",
                  "Hands-on projects",
                  "Expert mentorship"
                ]
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: "Program Benefits",
                points: [
                  "Project portfolio",
                  "Certificate of completion",
                  "Ongoing learning resources",
                  "Community access"
                ]
              }
            ].map((section, index) => (
              <div 
                key={section.title} 
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"/>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Program Schedule</h2>
            <p className="text-gray-600">Two weeks of engaging AI education</p>
          </div>

          <div className="grid gap-8">
            <div className="animate-on-scroll bg-white rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold">Weekly Sessions</h3>
                  <p className="text-gray-600">Tuesday & Thursday, 4:00 PM - 6:00 PM EST</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Week 1</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Session 1</p>
                        <p className="text-gray-600">Introduction to AI & Python Basics</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Session 2</p>
                        <p className="text-gray-600">Machine Learning Fundamentals</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Week 2</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Session 3</p>
                        <p className="text-gray-600">AI Applications & Projects</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Session 4</p>
                        <p className="text-gray-600">Project Presentations & Future in AI</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}