// Course catalog. Full course data is lazy-loaded per course so the main
// bundle stays small. `slug` is the URL segment under /learn/.

export const courseCatalog = [
  {
    id: 'ai-foundations',
    slug: 'ai-foundations',
    title: 'AI Foundations',
    audience: 'students',
    audienceLabel: 'For Students',
    tagline: 'Understand the technology shaping your future — from machine learning to ChatGPT.',
    description:
      'A free, interactive course for middle and high school students. Learn how AI actually works through hands-on simulations, games, real tools, and clear explanations — no coding required.',
    estimatedHours: 8,
    color: 'blue',
    icon: 'Brain',
    loader: () => import('./aiFoundations/index.js'),
  },
  {
    id: 'ai-for-educators',
    slug: 'educators',
    title: 'AI for Educators',
    audience: 'educators',
    audienceLabel: 'For Teachers & Educators',
    tagline: 'Save hours every week and teach confidently in the age of AI.',
    description:
      'A free professional development course for teachers. Master the AI tools transforming classrooms, learn prompting that actually works, navigate academic integrity and student privacy, and earn a certificate.',
    estimatedHours: 6,
    color: 'violet',
    icon: 'GraduationCap',
    loader: () => import('./aiForEducators/index.js'),
  },
];

export function findCourseMeta(slug) {
  return courseCatalog.find((c) => c.slug === slug) || null;
}
