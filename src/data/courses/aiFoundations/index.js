// AI Foundations — free interactive AI course for students (grades 7-12).
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import unit3 from './unit3.js';
import unit4 from './unit4.js';
import unit5 from './unit5.js';
import unit6 from './unit6.js';
import finalAssessment from './assessment.js';

const course = {
  id: 'ai-foundations',
  title: 'AI Foundations',
  audience: 'students',
  tagline: 'Understand the technology shaping your future — from machine learning to ChatGPT.',
  description:
    'A free, interactive course for middle and high school students. Learn how AI actually works — machine learning, neural networks, generative AI, and the big questions about ethics and your future — through hands-on simulations, games, and real AI tools. No coding required.',
  color: 'blue',
  estimatedHours: 9,
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  finalAssessment,
  certificate: {
    courseName: 'AI Foundations',
    subtitle:
      'has successfully completed all six units of the AI Foundations course — covering machine learning, neural networks, generative AI, and responsible AI — and passed the final assessment.',
    requiresAllLessons: true,
    signers: [
      { name: 'Shashank Madala', role: 'Co-Founder & Co-CEO, Lumin AI' },
      { name: 'Ayur Munipalli', role: 'Co-Founder & Co-CEO, Lumin AI' },
    ],
  },
};

export default course;
