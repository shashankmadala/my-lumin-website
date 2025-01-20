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
  MessagesSquare
} from 'lucide-react';

const ContactUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat Support",
      description: "Get instant help with your questions",
      action: "609-200-0017",
      color: "blue"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "We'll respond within 24 hours",
      action: "luminai321@gmail.com",
      link: "mailto:luminai321@gmail.com",
      color: "purple"
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Schedule a Call",
      description: "Book a quick call with our team",
      action: "Schedule Now",
      link: "#schedule",
      color: "pink"
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

  const faqItems = [
    {
      question: "What age groups are your AI programs designed for?",
      answer: "Our programs are specifically designed for middle school students (ages 11-14). We've carefully crafted our curriculum to be engaging and age-appropriate while teaching real AI concepts."
    },
    {
      question: "Do students need prior coding experience?",
      answer: "No prior coding experience is required! We start from the basics and gradually build up to more complex concepts. Our program is designed to be accessible to complete beginners while still being challenging for those with some coding experience."
    },
    {
      question: "What technology requirements are needed for the program?",
      answer: "Students need a computer (Windows, Mac, or Chromebook) with a stable internet connection. All other software and tools will be provided through our online learning platform."
    },
    {
      question: "How long are the summer programs?",
      answer: "Our standard program runs for 2 weeks with 4 sessions per week. Each session is 60-90 minutes long."
    },
    {
      question: "Is there any homework or outside practice required?",
      answer: "While we encourage practice between sessions, it's not mandatory. We provide optional exercises and projects for students who want to further develop their skills."
    },
    {
      question: "What makes Lumin AI's teaching approach unique?",
      answer: "We combine project-based learning with real-world applications, making AI concepts accessible and engaging. Our programs focus on hands-on experience, creative problem-solving, and ethical AI development."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center animate-on-scroll">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
              <span className="block text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                We're Here to Support Your AI Learning Journey
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
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                href={method.link}
                key={method.title}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-${method.color}-100`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-blue-600 font-medium flex items-center gap-2">
                  {method.action}
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our organization and what we offer!</p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    activeFaq === index ? 'max-h-48 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours & Social Links */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Support Hours */}
            <div className="bg-white rounded-xl p-8 animate-on-scroll shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Support Hours</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Live Chat & Email Support</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-600">Weekend: 10:00 AM - 4:00 PM EST</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    *Outside these hours? Don't worry! Check our FAQ section above or leave us a message,
                    and we'll get back to you on the next business day.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-8 animate-on-scroll shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Connect With Us</h2>
              </div>
              <div className="space-y-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shadow-sm">
                      {social.icon}
                    </div>
                    <div>
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
};

export default ContactUs;