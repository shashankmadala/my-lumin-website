import React from 'react';
import { 
  Users, 
  Award, 
  Globe, 
  MapPin, 
  Star, 
  ArrowRight,
  Trophy,
  Target,
  Heart,
  Building
} from 'lucide-react';

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white mb-6">
            <Award className="w-4 h-4" />
            $3000 Total Scholarship Opportunity
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Join Lumin AI
            <span className="block text-3xl text-blue-200 mt-2">
              Become a Chapter Lead
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            An amazing opportunity for ALL HIGH SCHOOL STUDENTS to be part of an incredible nonprofit organization 
            and compete for one of THREE $1000 INTERNATIONAL SCHOLARSHIPS!
          </p>
          
          <div className="mt-8">
            <a 
              href="https://forms.gle/g5MLJphJCwd3otyN8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Opportunity</h2>
            <p className="text-xl text-gray-600">
              We are expanding our organization and want to start chapters across the USA and internationally!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Chapter Lead Role</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Once you start a chapter, you will be given the title of <strong>Chapter Lead</strong> for your local city.
              </p>
              <p className="text-gray-700">
                Your job is to spread the mission of Lumin AI to students in your area by gathering the most amount of volunteers as part of your chapter.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">$3000 Total Scholarships</h3>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>THREE chapter leads will each win a $1000 INTERNATIONAL SCHOLARSHIP!</strong>
              </p>
              <p className="text-gray-700">
                The chapters with the most members will be eligible for the scholarship competition in the middle of next year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Chapter leads will form a state team and do stuff in the chapter. They will then start to encourage Lumin chapters in cities/towns in that state.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Start Your Chapter</h3>
              <p className="text-gray-600">
                Apply to become a Chapter Lead for your local city and get started with Lumin AI.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Build Your Team</h3>
              <p className="text-gray-600">
                Recruit volunteers and members for your chapter. The more members, the better your chances!
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Win the Scholarship</h3>
              <p className="text-gray-600">
                Apply for one of THREE $1000 scholarships in the middle of next year!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Why Join Lumin AI?
            </h2>
            <p className="text-gray-600">
              Be part of something bigger and make a real impact in your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Leadership Experience</h3>
                <p className="text-sm text-gray-600">Develop leadership skills by managing your own chapter and team.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Global Network</h3>
                <p className="text-sm text-gray-600">Connect with students worldwide and be part of an international community.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Make a Difference</h3>
                <p className="text-sm text-gray-600">Help bring AI education to students in your community.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Scholarship Opportunity</h3>
                <p className="text-sm text-gray-600">Compete for one of THREE $1000 scholarships!</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Nonprofit Experience</h3>
                <p className="text-sm text-gray-600">Gain valuable experience working with a nonprofit organization.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Expand Your Network</h3>
                <p className="text-sm text-gray-600">Build connections with students, educators, and industry professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Lumin AI today and compete for one of THREE $1000 INTERNATIONAL SCHOLARSHIPS!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://forms.gle/g5MLJphJCwd3otyN8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 