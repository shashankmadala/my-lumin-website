import React from 'react';
import { GithubIcon, LinkedinIcon, Mail, Sparkles, Award, Users, Globe } from 'lucide-react';

const founders = [
  {
    name: "Shashank Madala",
    role: "Founder & Co-CEO",
    bio: "Committed to revolutionizing STEM education through accessible AI learning. Leads Lumin AI's mission to empower the next generation of innovators.",
    vision: "Empowering every student to understand and shape the future of AI technology.",
    image: "/images/shashank1.png",
    links: {
      linkedin: "https://www.linkedin.com/in/shashank-madala-320989295/",
      github: "https://github.com/shashankmadala",
      email: "mailto:madala.shashank@gmail.com"
    }
  },
  {
    name: "Ayur Munipalli",
    role: "Founder & Co-CEO",
    bio: "Driven by the vision of making advanced technology education engaging and accessible. Shapes Lumin AI's innovative approach to teaching artificial intelligence.",
    vision: "Making complex AI concepts approachable and exciting for every student.",
    image: "images/ayur.png",
    links: {
      linkedin: "https://www.linkedin.com/in/ayur-munipalli/",
      github: "https://github.com/ayurmunipalli",
      email: "mailto:26munipallia@gmail.com"
    }
  }
];

export default function Founders() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6">
              <Sparkles className="w-4 h-4" />
              Leadership Team
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Founders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate leaders dedicated to transforming AI education and empowering the next generation of innovators
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-gray-600 text-sm">Co-Founders</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600 text-sm">Chapters</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">5200+</div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div 
                key={founder.name}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="relative mb-8">
                      <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full"></div>
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 relative z-10"
                        />
                      </div>
                      {/* Status indicator */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
                        {founder.name}
                      </h2>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold mb-6 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        {founder.role}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {founder.bio}
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
                        <p className="text-gray-800 italic text-lg font-medium">
                          "{founder.vision}"
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4">
                        <a 
                          href={founder.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <LinkedinIcon className="w-6 h-6 text-blue-600" />
                        </a>
                        <a 
                          href={founder.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <GithubIcon className="w-6 h-6 text-gray-600" />
                        </a>
                        <a 
                          href={founder.links.email}
                          className="p-3 rounded-full bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <Mail className="w-6 h-6 text-purple-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Elegant shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}