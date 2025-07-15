import React from 'react';
import { 
  Building, 
  FileText, 
  Users, 
  Target, 
  Award,
  MapPin,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function PolicyTeam() {

  const teamMembers = [
    {
      name: "Aayush Chebolu",
      role: "",
      image: "/images/aayush.png",
      description: "Legislative strategy and stakeholder engagement."
    },
    {
      name: "Ayur Munipalli", 
      role: "",
      image: "/images/ayur.png",
      description: "Policy coordination with legislators and schools."
    },
    {
      name: "Wilson Stavros",
      role: "",
      image: "/images/wilson-placeholder.png", 
      description: "AI literacy standards research."
    },
    {
      name: "Shashank Madala",
      role: "",
      image: "/images/shashank1.png",
      description: "Founder supporting statewide AI literacy."
    }
  ];

  const policyGoals = [
    "Make AI literacy part of K-12 curriculum",
    "Support teacher training on AI concepts",
    "Ensure equitable access to AI education",
    "Build partnerships with schools and industry"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Policy Team Page - Temporarily Commented Out */}
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Policy Team</h1>
          <p className="text-xl text-gray-600">
            This page is temporarily unavailable.
          </p>
        </div>
      </div>
      
      {/* 
      Original Policy Team Page Content - Commented Out
      
      <section className="pt-32 pb-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white mb-4">
            <Building className="w-4 h-4" />
            Policy & Advocacy
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Literacy for New Jersey</h1>
          <p className="text-lg text-blue-100 mb-2">
            Lumin AI's policy team is working to pass a bill for AI literacy in New Jersey schools.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Meet the Policy Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow p-5 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission & Goals</h2>
          <p className="text-gray-700 text-center mb-10">
            We are dedicated to making AI education accessible and equitable for all students in New Jersey by advocating for legislative change and building strong partnerships.
          </p>
          <div className="flex flex-col md:flex-row md:items-stretch md:gap-8 gap-6">
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Policy Goals</h3>
              <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
                {policyGoals.map((goal, i) => <li key={i}>{goal}</li>)}
              </ul>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-40 bg-gray-200" />
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <Award className="w-12 h-12 text-yellow-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
                <li>Drafting and advocating for AI literacy legislation</li>
                <li>Engaging with educators, administrators, and policymakers</li>
                <li>Building a foundation for future-ready education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Support Our Mission</h2>
          <p className="mb-6 opacity-90">
            Join us in making AI literacy a reality for every student in New Jersey.
          </p>
          <a 
            href="/contact-us" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Involved
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      */}
    </div>
  );
} 