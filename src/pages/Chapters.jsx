import React, { useState } from 'react';
import { 
  Globe, 
  Users, 
  MapPin, 
  Star, 
  ArrowRight,
  Building,
  Heart,
  Target,
  Award
} from 'lucide-react';

export default function Chapters() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const chapters = [
    {
      country: "United States",
      flag: "🇺🇸",
      chapters: [
        { name: "New Jersey Chapter", location: "Newark, NJ", status: "Active", members: "50+ students" },
        { name: "California Chapter", location: "San Francisco, CA", status: "Active", members: "75+ students" },
        { name: "Texas Chapter", location: "Austin, TX", status: "Coming Soon", members: "30+ students" }
      ],
      description: "Our largest chapter network with multiple active locations across the country."
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      chapters: [
        { name: "Toronto Chapter", location: "Toronto, ON", status: "Active", members: "40+ students" },
        { name: "Vancouver Chapter", location: "Vancouver, BC", status: "Active", members: "35+ students" }
      ],
      description: "Expanding AI education across Canadian provinces with growing student engagement."
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      chapters: [
        { name: "London Chapter", location: "London, UK", status: "Active", members: "45+ students" },
        { name: "Manchester Chapter", location: "Manchester, UK", status: "Coming Soon", members: "25+ students" }
      ],
      description: "Bringing AI literacy to British students through innovative educational programs."
    },
    {
      country: "India",
      flag: "🇮🇳",
      chapters: [
        { name: "Mumbai Chapter", location: "Mumbai, MH", status: "Active", members: "60+ students" },
        { name: "Bangalore Chapter", location: "Bangalore, KA", status: "Active", members: "55+ students" },
        { name: "Delhi Chapter", location: "New Delhi, DL", status: "Coming Soon", members: "40+ students" }
      ],
      description: "Rapidly growing presence in India's tech hubs with strong student communities."
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      chapters: [
        { name: "Sydney Chapter", location: "Sydney, NSW", status: "Active", members: "30+ students" },
        { name: "Melbourne Chapter", location: "Melbourne, VIC", status: "Coming Soon", members: "20+ students" }
      ],
      description: "Expanding AI education across Australian cities with local partnerships."
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      chapters: [
        { name: "Berlin Chapter", location: "Berlin, DE", status: "Active", members: "35+ students" },
        { name: "Munich Chapter", location: "Munich, DE", status: "Coming Soon", members: "25+ students" }
      ],
      description: "Building AI literacy in German schools through innovative programs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white mb-6">
            <Globe className="w-4 h-4" />
            Global Network
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Lumin AI Chapters
            <span className="block text-3xl text-blue-200 mt-2">
              Worldwide
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our international chapter network brings AI education to students across the globe, 
            creating a community of young innovators and learners.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://forms.gle/g5MLJphJCwd3otyN8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start a Chapter
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Global Chapters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our international network of Lumin AI chapters, each bringing AI education 
              to students in their local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedCountry(selectedCountry === index ? null : index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{chapter.flag}</div>
                  <div>
                    <h3 className="text-xl font-bold">{chapter.country}</h3>
                    <p className="text-gray-600 text-sm">{chapter.chapters.length} chapters</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{chapter.description}</p>
                
                <div className="space-y-3">
                  {chapter.chapters.map((location, locIndex) => (
                    <div key={locIndex} className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm">{location.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          location.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {location.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{location.location}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {location.members}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Chapter Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each Lumin AI chapter operates as a local community, bringing our proven AI education 
              programs to students in their own cities and regions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Leadership</h3>
              <p className="text-gray-600">
                Each chapter is led by local students and educators who understand their community's needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adapted Programs</h3>
              <p className="text-gray-600">
                Our AI education programs are adapted to meet local educational standards and cultural contexts.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-600">
                Students connect with peers worldwide, sharing ideas and collaborating on AI projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Start a Chapter</h2>
          <p className="text-xl mb-8 opacity-90">
            Interested in bringing Lumin AI to your city? Learn how to start a chapter in your community.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact-us" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 