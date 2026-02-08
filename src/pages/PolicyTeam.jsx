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
import SEO from '../components/SEO';

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
      <SEO
        title="Policy Team – AI Literacy & K-12 Education"
        description="Lumin AI Policy Team: advancing AI literacy in K-12 curriculum, teacher training, and equitable access to AI education. Meet our policy leads."
        canonicalPath="/policy-team"
      />
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Policy Team</h1>
          <p className="text-xl text-gray-600">
            This page is temporarily unavailable.
          </p>
        </div>
      </div>

    </div>
  );
} 