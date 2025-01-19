import React, { useEffect } from 'react';
import { ArrowRight, Check, Brain, Users, Rocket } from 'lucide-react';
import '../styles/animations.css'; // Import the animations

export default function HomePage() {
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
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center p-2 mb-8 transition-all duration-300 hover:shadow-xl">
              <input 
                type="text" 
                placeholder="Find AI Learning Resources..." 
                className="flex-1 px-4 py-2 text-gray-500 outline-none text-lg bg-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-md">
                Explore →
              </button>
            </div>
          </div>

          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h1 className="text-7xl font-bold text-gray-900 tracking-tight mb-6">
              AI Education
              <span className="block text-6xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Made Easy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover a new way to learn AI - interactive, comprehensive, and designed for the future.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 stagger-children">
            {[
              ['5,000+', 'Students'],
              ['20+', 'Modules'],
              ['95%', 'Success Rate'],
              ['4.9/5', 'Rating']
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

      {/* Why Choose Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-5xl font-bold mb-4">Why Choose Lumin AI?</h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI education designed for the next generation
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-600"/>,
                title: "Expert-Led Learning",
                description: "Learn from industry professionals and AI experts through carefully crafted curriculum"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600"/>,
                title: "Community Driven",
                description: "Join a vibrant community of learners and get support when you need it"
              },
              {
                icon: <Rocket className="w-8 h-8 text-blue-600"/>,
                title: "Hands-on Practice",
                description: "Apply your knowledge with real-world projects and practical exercises"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} flex items-start gap-16 group hover:bg-gray-50 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg`}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100 group-hover:shadow-md">
                  <div className="transform transition-transform duration-500 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                </div>
                <div className="transform transition-all duration-500 group-hover:translate-x-2">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600">Start your AI journey today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                duration: '8 weeks',
                title: 'AI Fundamentals',
                topics: ['Introduction to AI', 'Machine Learning Basics', 'Neural Networks', 'Practical Applications']
              },
              {
                duration: '10 weeks',
                title: 'Deep Learning',
                topics: ['Neural Architecture', 'Computer Vision', 'Natural Language Processing', 'Advanced Topics']
              },
              {
                duration: '12 weeks',
                title: 'AI Applications',
                topics: ['Real-world Projects', 'Model Deployment', 'Best Practices', 'Industry Standards']
              }
            ].map((course, index) => (
              <div 
                key={course.title} 
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"/>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <ul className="space-y-2">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500"/>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Hear from our successful students</p>
          </div>

          <div className="flex gap-8">
            {[
              {
                name: 'Jane Doe',
                role: 'AI Engineer',
                quote: 'Lumin AI has transformed my career. The hands-on projects and expert guidance were invaluable.'
              },
              {
                name: 'John Smith',
                role: 'Data Scientist',
                quote: 'The community support and real-world applications made learning AI enjoyable and effective.'
              },
              {
                name: 'Emily Johnson',
                role: 'Machine Learning Specialist',
                quote: 'The curriculum is well-structured and the instructors are top-notch. Highly recommend Lumin AI!'
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} flex-1 flex items-start gap-6 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <img 
                  src="/api/placeholder/48/48" 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 text-sm mb-3">{testimonial.role}</p>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}