import React from 'react';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">
              Our Founders
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate leaders dedicated to transforming AI education
            </p>
          </div>

          {/* Founders Cards */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {founders.map((founder) => (
              <div 
                key={founder.name}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {/* Profile Image */}
                  <div className="relative mb-8">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">{founder.name}</h2>
                    <div className="text-blue-600 font-medium mb-6 inline-block bg-blue-50 px-4 py-1 rounded-full">
                      {founder.role}
                    </div>
                    <p className="text-gray-600 mb-6">{founder.bio}</p>
                    <p className="text-gray-800 italic mb-8 text-sm">"{founder.vision}"</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                      <a 
                        href={founder.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <LinkedinIcon className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                      </a>
                      <a 
                        href={founder.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <GithubIcon className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                      </a>
                      <a 
                        href={founder.links.email}
                        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <Mail className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}