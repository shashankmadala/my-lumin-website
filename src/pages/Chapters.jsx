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
      states: [
        {
          state: "California",
          cities: [
            { name: "San Francisco Chapter", location: "San Francisco, CA", status: "Active", members: "75+ students" },
            { name: "Los Angeles Chapter", location: "Los Angeles, CA", status: "Active", members: "65+ students" },
            { name: "San Diego Chapter", location: "San Diego, CA", status: "Active", members: "45+ students" }
          ]
        },
        {
          state: "New York",
          cities: [
            { name: "New York City Chapter", location: "New York, NY", status: "Active", members: "80+ students" },
            { name: "Buffalo Chapter", location: "Buffalo, NY", status: "Active", members: "35+ students" }
          ]
        },
        {
          state: "Texas",
          cities: [
            { name: "Austin Chapter", location: "Austin, TX", status: "Active", members: "55+ students" },
            { name: "Houston Chapter", location: "Houston, TX", status: "Active", members: "50+ students" },
            { name: "Dallas Chapter", location: "Dallas, TX", status: "Active", members: "45+ students" }
          ]
        },
        {
          state: "New Jersey",
          cities: [
            { name: "Newark Chapter", location: "Newark, NJ", status: "Active", members: "40+ students" },
            { name: "Princeton Chapter", location: "Princeton, NJ", status: "Active", members: "30+ students" }
          ]
        }
      ],
      description: "Our largest chapter network with multiple active locations across the country."
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      states: [
        {
          state: "Ontario",
          cities: [
            { name: "Toronto Chapter", location: "Toronto, ON", status: "Active", members: "60+ students" },
            { name: "Ottawa Chapter", location: "Ottawa, ON", status: "Active", members: "35+ students" }
          ]
        },
        {
          state: "British Columbia",
          cities: [
            { name: "Vancouver Chapter", location: "Vancouver, BC", status: "Active", members: "50+ students" },
            { name: "Victoria Chapter", location: "Victoria, BC", status: "Active", members: "25+ students" }
          ]
        }
      ],
      description: "Expanding AI education across Canadian provinces with growing student engagement."
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      states: [
        {
          state: "England",
          cities: [
            { name: "London Chapter", location: "London, UK", status: "Active", members: "70+ students" },
            { name: "Manchester Chapter", location: "Manchester, UK", status: "Active", members: "40+ students" },
            { name: "Birmingham Chapter", location: "Birmingham, UK", status: "Active", members: "35+ students" }
          ]
        },
        {
          state: "Scotland",
          cities: [
            { name: "Edinburgh Chapter", location: "Edinburgh, UK", status: "Active", members: "30+ students" },
            { name: "Glasgow Chapter", location: "Glasgow, UK", status: "Active", members: "25+ students" }
          ]
        }
      ],
      description: "Bringing AI literacy to British students through innovative educational programs."
    },
    {
      country: "India",
      flag: "🇮🇳",
      states: [
        {
          state: "Maharashtra",
          cities: [
            { name: "Mumbai Chapter", location: "Mumbai, MH", status: "Active", members: "80+ students" },
            { name: "Pune Chapter", location: "Pune, MH", status: "Active", members: "45+ students" }
          ]
        },
        {
          state: "Karnataka",
          cities: [
            { name: "Bangalore Chapter", location: "Bangalore, KA", status: "Active", members: "75+ students" },
            { name: "Mysore Chapter", location: "Mysore, KA", status: "Active", members: "30+ students" }
          ]
        },
        {
          state: "Delhi",
          cities: [
            { name: "New Delhi Chapter", location: "New Delhi, DL", status: "Active", members: "60+ students" },
            { name: "Gurgaon Chapter", location: "Gurgaon, DL", status: "Active", members: "35+ students" }
          ]
        }
      ],
      description: "Rapidly growing presence in India's tech hubs with strong student communities."
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      states: [
        {
          state: "New South Wales",
          cities: [
            { name: "Sydney Chapter", location: "Sydney, NSW", status: "Active", members: "50+ students" },
            { name: "Newcastle Chapter", location: "Newcastle, NSW", status: "Active", members: "25+ students" }
          ]
        },
        {
          state: "Victoria",
          cities: [
            { name: "Melbourne Chapter", location: "Melbourne, VIC", status: "Active", members: "45+ students" },
            { name: "Geelong Chapter", location: "Geelong, VIC", status: "Active", members: "20+ students" }
          ]
        }
      ],
      description: "Expanding AI education across Australian cities with local partnerships."
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      states: [
        {
          state: "Berlin",
          cities: [
            { name: "Berlin Chapter", location: "Berlin, DE", status: "Active", members: "55+ students" },
            { name: "Potsdam Chapter", location: "Potsdam, DE", status: "Active", members: "25+ students" }
          ]
        },
        {
          state: "Bavaria",
          cities: [
            { name: "Munich Chapter", location: "Munich, DE", status: "Active", members: "45+ students" },
            { name: "Nuremberg Chapter", location: "Nuremberg, DE", status: "Active", members: "30+ students" }
          ]
        }
      ],
      description: "Building AI literacy in German schools through innovative programs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden text-white">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6 border border-white/20">
            <Globe className="w-4 h-4" />
            <span className="font-medium">Global Network</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Lumin AI Chapters
          </h1>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our international chapter network brings AI education to students across the globe.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://forms.gle/g5MLJphJCwd3otyN8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
            >
              Start a Chapter
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Global Chapters</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our international network of Lumin AI chapters, each bringing AI education 
              to students in their local communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {chapters.map((chapter, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Country Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl">{chapter.flag}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{chapter.country}</h3>
                    <p className="text-gray-600">
                      {chapter.states.reduce((total, state) => total + state.cities.length, 0)} active chapters
                    </p>
                  </div>
                </div>
                
                {/* States List */}
                <div className="space-y-6">
                  {chapter.states.map((state, stateIndex) => (
                    <div key={stateIndex} className="bg-white rounded-2xl p-6 border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {state.state}
                      </h4>
                      <div className="grid gap-3">
                        {state.cities.map((city, cityIndex) => (
                          <div key={cityIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="font-medium text-gray-900 text-sm">{city.name}</h5>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <MapPin className="w-3 h-3" />
                                <span>{city.location}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-700">{city.members}</div>
                            </div>
                          </div>
                        ))}
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Our Chapter Approach</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Each Lumin AI chapter operates as a local community, bringing our proven AI education 
              programs to students in their own cities and regions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Local Leadership</h3>
              <p className="text-sm text-gray-600">
                Each chapter is led by local students and educators who understand their community's needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Adapted Programs</h3>
              <p className="text-sm text-gray-600">
                Our AI education programs are adapted to meet local educational standards and cultural contexts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Global Network</h3>
              <p className="text-sm text-gray-600">
                Students connect with peers worldwide, sharing ideas and collaborating on AI projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Chapter Founders Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Chapter Founders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate leaders bringing AI education to their local communities around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Founder 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                <img 
                  src="/images/shashank1.png" 
                  alt="Shashank Madala"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Shashank Madala</h3>
              <p className="text-sm text-gray-600 mb-3">Co-Founder & Co-CEO</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Committed to revolutionizing STEM education through accessible AI learning. Leads Lumin AI's mission to empower the next generation of innovators.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                <img 
                  src="/images/ayur.png" 
                  alt="Ayur Munipalli"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Ayur Munipalli</h3>
              <p className="text-sm text-gray-600 mb-3">Co-Founder & Co-CEO</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Driven by the vision of making advanced technology education engaging and accessible. Shapes Lumin AI's innovative approach to teaching artificial intelligence.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                <img 
                  src="/images/aayush.png" 
                  alt="Aayush Chebolu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Aayush Chebolu</h3>
              <p className="text-sm text-gray-600 mb-3">Co-Founder & CTO</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Passionate about creating innovative solutions and driving technological advancement in education. Building the future of AI education through collaboration.
              </p>
            </div>

            {/* Founder 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                <img 
                  src="/images/wilson.png" 
                  alt="Wilson Stavros"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Wilson Stavros</h3>
              <p className="text-sm text-gray-600 mb-3">National Policy Lead</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leading policy initiatives and strategic partnerships to advance AI education across the nation. Creating inclusive policies that make AI education accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start a Chapter</h2>
          <p className="text-base mb-6 opacity-90">
            Interested in bringing Lumin AI to your city? Learn how to start a chapter in your community.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact-us" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 