// AI for Educators — free professional development course for teachers, with certificate.
import module1 from './module1.js';
import module2 from './module2.js';
import module3 from './module3.js';
import module4 from './module4.js';
import module5 from './module5.js';
import module6 from './module6.js';
import finalAssessment from './assessment.js';

const course = {
  id: 'ai-for-educators',
  title: 'AI for Educators',
  audience: 'educators',
  tagline: 'Save hours every week and teach confidently in the age of AI.',
  description:
    'A free, self-paced professional development course for teachers and school staff. Understand how AI really works, master prompting across ChatGPT, Gemini, and Claude, reclaim your planning time, handle academic integrity without unreliable detectors, protect student privacy, and leave with ready-to-use classroom artifacts — plus a certificate documenting approximately 6 hours of professional learning.',
  color: 'violet',
  estimatedHours: 6,
  units: [module1, module2, module3, module4, module5, module6],
  finalAssessment,
  certificate: {
    courseName: 'AI for Educators',
    subtitle:
      'has successfully completed the AI for Educators professional development course (approximately 6.0 clock hours) — covering AI fundamentals and limitations, prompting practice, classroom integration, differentiation, assessment and academic integrity in the AI era, and student safety and privacy — and passed the certification assessment.',
    requiresAllLessons: false,
    signers: [
      { name: 'Shashank Madala', role: 'Co-Founder & Co-CEO, Lumin AI' },
      { name: 'Ayur Munipalli', role: 'Co-Founder & Co-CEO, Lumin AI' },
    ],
  },
};

export default course;
