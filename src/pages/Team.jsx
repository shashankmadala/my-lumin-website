import React, { useState } from 'react';
import { MapPin, Users, Building, Sparkles } from 'lucide-react';

const chapters = [
  {
    name: "Bay Area Chapter",
    location: "San Francisco, CA",
    description: "Leading innovation in AI education across Silicon Valley",
    members: [
      { name: "Alex Chen", role: "Chapter Lead", image: "/api/placeholder/64/64" },
      { name: "Sarah Johnson", role: "Education Director", image: "/api/placeholder/64/64" },
      { name: "James Wilson", role: "Technical Lead", image: "/api/placeholder/64/64" },
      { name: "Maya Patel", role: "Outreach Coordinator", image: "/api/placeholder/64/64" }
    ]
  },
  {
    name: "New York Chapter",
    location: "New York, NY",
    description: "Bringing AI education to the heart of the East Coast",
    members: [
      { name: "David Kim", role: "Chapter Lead", image: "/api/placeholder/64/64" },
      { name: "Emily Rodriguez", role: "Education Director", image: "/api/placeholder/64/64" },
      { name: "Michael Chang", role: "Technical Lead", image: "/api/placeholder/64/64" },
      { name: "Sofia Martinez", role: "Community Manager", image: "/api/placeholder/64/64" }
    ]
  },
  {
    name: "Texas Chapter",
    location: "Austin, TX",
    description: "Fostering AI innovation in the Lone Star State",
    members: [
      { name: "Robert Turner", role: "Chapter Lead", image: "/api/placeholder/64/64" },
      { name: "Lisa Wang", role: "Education Director", image: "/api/placeholder/64/64" },
      { name: "Chris Anderson", role: "Technical Lead", image: "/api/placeholder/64/64" },
      { name: "Emma Davis", role: "Events Coordinator", image: "/api/placeholder/64/64" }
    ]
  }
];

export default function Team() {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      <div className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-gray-600">
              Meet the dedicated individuals bringing AI education to your community
            </p>
          </div>

          {/* Chapter Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{chapters.length}</h3>
              <p className="text-gray-600">Active Chapters</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {chapters.reduce((acc, chapter) => acc + chapter.members.length, 0)}
              </h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Students Impacted</p>
            </div>
          </div>

          {/* Chapter Selection */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-lg bg-white shadow-sm p-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter.name}
                  onClick={() => setActiveChapter(chapter)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeChapter.name === chapter.name
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {chapter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Chapter Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Chapter Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>{activeChapter.location}</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">{activeChapter.name}</h2>
                <p className="text-blue-100">{activeChapter.description}</p>
              </div>

              {/* Team Members */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {activeChapter.members.map((member, index) => (
                    <div 
                      key={member.name}
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
                      onMouseEnter={() => setHoveredMember(member.name)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                        hoveredMember === member.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm text-gray-600">
                          Passionate about bringing AI education to students and building the next generation of innovators.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}