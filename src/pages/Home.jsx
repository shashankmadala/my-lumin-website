import React, { useState, useEffect } from 'react';
import {
  Mail,
  MessageCircle,
  Globe,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Clock,
  ChevronDown,
  MessagesSquare,
  ArrowRight,
  Plus
} from 'lucide-react';

export default function ContactUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll, .stagger-children > *').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: "Live Chat Support",
      description: "Get instant help with your questions about our programs",
      action: "Start Chat",
      link: "#chat",
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: "Email Support",
      description: "We'll respond to your inquiries within 24 hours",
      action: "support@luminai.edu",
      link: "mailto:support@luminai.edu",
    },
    {
      icon: <MessagesSquare className="w-6 h-6 text-pink-600" />,
      title: "Schedule a Call",
      description: "Book a consultation with our education team",
      action: "Book Now",
      link: "#schedule",
    }
  ];

  const faqItems = [
    {
      question: "What age groups are your AI programs designed for?",
      answer: "Our programs are specifically tailored for students aged 11-14 (middle school). We've carefully designed our curriculum to be engaging and age-appropriate while teaching real AI concepts."
    },
    {
      question: "Do students need prior coding experience?",
      answer: "No prior coding experience is required! Our program starts from the basics and gradually builds up to more complex concepts. It's designed to be accessible for beginners while still challenging those with some coding experience."
    },
    {
      question: "What technology requirements are needed?",
      answer: "Students need a computer (Windows, Mac, or Chromebook) with a stable internet connection. All necessary software and tools are provided through our online learning platform."
    },
    {
      question: "How long are the programs?",
      answer: "Our standard program runs for 8 weeks with two 90-minute sessions per week. We also offer intensive summer programs and shorter workshop series."
    },
    {
      question: "What makes Lumin AI's teaching approach unique?",
      answer: "We combine project-based learning with real-world applications. Our approach focuses on hands-on experience, creative problem-solving, and ethical AI development, making complex concepts accessible and engaging."
    }
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      handle: "@LuminAI",
      link: "https://twitter.com/LuminAI"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      handle: "Lumin AI",
      link: "https://linkedin.com/company/luminai"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      handle: "@lumin.ai",
      link: "https://instagram.com/lumin.ai"
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
      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center animate-on-scroll from-bottom">
            <h1 className="text-7xl font-bold text-gray-900 tracking-tight mb-6">
              Get in Touch
              <span className="block text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                We're Here to Help You Learn
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our AI education programs? Our team is ready to help you
              explore the exciting world of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {contactMethods.map((method, index) => (
              <a
                href={method.link}
                key={method.title}
                className="animate-on-scroll from-bottom bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-gray-50 transition-all duration-500 group-hover:scale-110">
                  <div className="transform transition-transform duration-500 group-hover:rotate-12">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  {method.action}
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our AI education programs</p>
          </div>
          
          <div className="space-y-4 stagger-children">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll from-right bg-gray-50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-md"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-all duration-300 group"
                >
                  <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-500 ${
                      activeFaq === index ? 'transform rotate-180' : ''
                    } group-hover:text-blue-600`}
                  />
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 text-gray-600">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours & Social */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Support Hours */}
            <div className="animate-on-scroll from-left bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Support Hours</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Online Support Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-600">Weekend: 10:00 AM - 4:00 PM EST</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Outside these hours? Check our FAQ section above or leave us a message,
                    and we'll get back to you on the next business day.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-on-scroll from-right bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Connect With Us</h2>
              </div>
              <div className="space-y-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50">
                      {social.icon}
                    </div>
                    <div className="transform transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="font-semibold">{social.name}</h3>
                      <p className="text-sm">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}