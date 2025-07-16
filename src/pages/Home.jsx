import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Brain, Users, Rocket, Construction, ChevronLeft, ChevronRight, ArrowUp, BookOpen, Globe, Award, Building, MapPin } from 'lucide-react';
import '../styles/animations.css';
import ImageCarousel from '../components/ImageCarousel';

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    students: 0,
    raised: 0,
    modules: 0,
    countries: 0,
    chapters: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger number animation when stats section comes into view
            if (entry.target.classList.contains('stats-section') && !hasAnimated) {
              setHasAnimated(true);
              animateNumbers();
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.animate-on-scroll, .stats-section').forEach((element) => {
      observer.observe(element);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    const targets = {
      students: 5200,
      raised: 4000,
      modules: 20,
      countries: 6,
      chapters: 15
    };

    const duration = 2000; // 2 seconds for faster animation
    const steps = 80; // More steps for smoother animation
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Use easing function for more natural animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setAnimatedNumbers({
        students: Math.floor(targets.students * easeOutQuart),
        raised: Math.floor(targets.raised * easeOutQuart),
        modules: Math.floor(targets.modules * easeOutQuart),
        countries: Math.floor(targets.countries * easeOutQuart),
        chapters: Math.floor(targets.chapters * easeOutQuart)
      });
      
      if (currentStep >= steps) {
        clearInterval(interval);
        // Ensure final numbers are exact
        setAnimatedNumbers(targets);
      }
    }, stepDuration);
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Middle School Student",
      quote: "I never thought I could understand AI, but Lumin AI made it so fun and easy! I loved building my own chatbot and showing it to my friends."
    },
    {
      name: "David Park",
      role: "Parent",
      quote: "My son was always interested in technology, and this program gave him the perfect introduction to AI. The weekend sessions fit perfectly with his schedule."
    },
    {
      name: "Maya Patel",
      role: "Middle School Student",
      quote: "The hands-on projects were my favorite part! I learned how to make a simple AI that can recognize different types of flowers in my garden."
    }
  ];

  // Define gallery images - these will be loaded from the public folder
  const galleryImages = [
    { src: "/gallery/IMG_8314-2.jpg", alt: "Students learning AI concepts" },
    { src: "/gallery/IMG_8315.jpg", alt: "Interactive AI workshop" },
    { src: "/gallery/IMG_8316.jpg", alt: "Students collaborating on projects" },
    { src: "/gallery/IMG_8317.jpg", alt: "AI education in action" },
    { src: "/gallery/IMG_8319.jpg", alt: "Hands-on learning experience" },
    { src: "/gallery/IMG_8320-2.jpg", alt: "Students presenting their work" },
    { src: "/gallery/IMG_8321-2.jpg", alt: "AI workshop activities" },
    { src: "/gallery/IMG_8324-2.jpg", alt: "Learning AI fundamentals" },
    { src: "/gallery/IMG_8325-2.jpg", alt: "Student AI projects showcase" }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-on-scroll from-bottom">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
                AI Education
                <span className="block text-4xl lg:text-6xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Made Easy
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover a new way to learn AI - interactive, comprehensive, and designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  to="/summer-program" 
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium relative group overflow-visible shadow-lg"
                  style={{ boxShadow: '0 0 32px 8px rgba(168, 85, 247, 0.25), 0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Summer Program
                  </span>
                  <span className="ml-3 relative z-10 bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-full animate-pulse whitespace-nowrap">
                    Limited Time!
                  </span>
                </Link>
                <Link 
                  to="/join-us" 
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
                >
                  Start a Chapter
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-on-scroll from-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 blur-sm"></div>
                <img 
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="relative rounded-3xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.log('Image failed to load:', e.target.src);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 stagger-children stats-section">
            {[
              { key: 'students', label: 'Students', value: animatedNumbers.students, suffix: '+', icon: '👥', color: 'blue' },
              { key: 'raised', label: 'Raised', value: animatedNumbers.raised, prefix: '$', suffix: '+', icon: '💰', color: 'green' },
              { key: 'modules', label: 'Modules', value: animatedNumbers.modules, suffix: '+', icon: '📚', color: 'purple' },
              { key: 'countries', label: 'Countries', value: animatedNumbers.countries, suffix: '+', icon: '🌍', color: 'indigo' },
              { key: 'chapters', label: 'Chapters', value: animatedNumbers.chapters, suffix: '+', icon: '🏢', color: 'pink' },
            ].map((stat, index) => (
              <div 
                key={stat.key} 
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} text-center p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-gray-200/50 relative overflow-hidden`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  boxShadow: '0 8px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-50/30 to-${stat.color}-100/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-all duration-500 group-hover:scale-110">
                    {stat.prefix || ''}{stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-600 text-xs font-semibold group-hover:text-blue-500 transition-colors duration-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
                
                {/* Elegant shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                
                {/* Subtle border glow */}
                <div className={`absolute inset-0 rounded-xl border-2 border-${stat.color}-200/0 group-hover:border-${stat.color}-200/50 transition-all duration-500`}></div>
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
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Why Choose Lumin AI?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Comprehensive AI education designed for the next generation
            </p>
            <Link 
              to="/learn" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
            >
              Start Learning Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6 text-blue-600"/>,
                title: "Expert-Led Learning",
                description: "Learn from industry professionals and AI experts through carefully crafted curriculum"
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-600"/>,
                title: "Global Community",
                description: "Join our international network of 15+ chapters across 6 countries"
              },
              {
                icon: <Award className="w-6 h-6 text-blue-600"/>,
                title: "Scholarship Opportunities",
                description: "Compete for $1000 scholarships by starting and growing Lumin AI chapters"
              },
              {
                icon: <Rocket className="w-6 h-6 text-blue-600"/>,
                title: "Hands-on Projects",
                description: "Apply your knowledge with real-world AI projects and practical exercises"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                    <div className="transform transition-transform duration-300 group-hover:rotate-6">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-5xl font-bold mb-4">Global Impact</h2>
            <p className="text-xl text-gray-600">
              Expanding AI education worldwide through our international chapter network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Chapters Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Global Chapters</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our international network spans 6 countries with 15+ active chapters, bringing AI education to students worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">400+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <Link 
                to="/chapters" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore Our Chapters
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Educational Impact Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Educational Impact</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Making AI education accessible and engaging for students worldwide through innovative learning experiences.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Interactive AI curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Hands-on learning experiences</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Global student community</span>
                </div>
              </div>
              <Link 
                to="/learn" 
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                Start Learning Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Opportunity Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">$3000 Scholarship Opportunity</h2>
            <p className="text-xl text-gray-600 mb-6">
              High school students can compete for one of THREE $1000 scholarships by starting and growing Lumin AI chapters!
            </p>
          </div>
          <Link 
            to="/join-us" 
            className="inline-flex items-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-full hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
          >
            Apply for Chapter Lead
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-24 bg-gray-50">
        <ImageCarousel images={galleryImages.slice(1)} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Student Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our amazing community of learners
            </p>
          </div>

          <div className="relative">
            {/* Testimonial Cards Stack */}
            <div className="flex items-center justify-center">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-4 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="relative max-w-4xl mx-auto px-16">
                {/* Background cards for depth effect */}
                <div className="absolute inset-0 transform rotate-2 bg-gray-100 rounded-2xl opacity-30"></div>
                <div className="absolute inset-0 transform -rotate-1 bg-gray-200 rounded-2xl opacity-20"></div>
                
                {/* Main testimonial card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Avatar/Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonials[currentTestimonial].name}</h3>
                        <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</p>
                      </div>
                      <blockquote className="text-gray-700 text-lg leading-relaxed relative">
                        <span className="absolute -top-2 -left-2 text-4xl text-blue-200 font-serif">"</span>
                        {testimonials[currentTestimonial].quote}
                        <span className="absolute -bottom-2 -right-2 text-4xl text-purple-200 font-serif">"</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-4 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-transparent rounded-tr-full" />

              <div className="relative text-center">
                <h2 className="text-4xl font-bold mb-6">Start Your AI Journey Today</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Choose your path and begin your adventure into the world of artificial intelligence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    to="/learn"
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2"
                  >
                    <BookOpen className="w-8 h-8" />
                    <span className="font-semibold">Start Learning</span>
                    <span className="text-sm text-blue-100">Free online course</span>
                  </Link>
                  <Link
                    to="/summer-program"
                    className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2"
                  >
                    <Users className="w-8 h-8" />
                    <span className="font-semibold">Join Summer Program</span>
                    <span className="text-sm text-purple-100">Live online sessions</span>
                  </Link>
                  <Link
                    to="/join-us"
                    className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2"
                  >
                    <Globe className="w-8 h-8" />
                    <span className="font-semibold">Start a Chapter</span>
                    <span className="text-sm text-green-100">$1000 scholarship opportunity</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-on-scroll from-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl transform -rotate-3 blur-sm"></div>
                <img 
                  src={galleryImages[4].src} 
                  alt={galleryImages[4].alt}
                  className="relative rounded-3xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.log('Image failed to load:', e.target.src);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-4 transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <button
          onClick={scrollToTop}
          className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ArrowUp className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
        </button>
        <Link
          to="/learn"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
          Start Learning
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}