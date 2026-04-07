/**
 * Single source of truth for public impact metrics.
 * Chapter member minimums below sum to chapterParticipantsMinTotal (verify when editing).
 */

export const IMPACT = {
  /** Cumulative reach across programs (online, chapters, partners, events—not mutually exclusive). */
  studentsReachedTotal: 15000,
  certificatesIssued: 5200,
  /** Flagship chapter locations listed on /chapters */
  chapterLocations: 15,
  /** Sum of membersMin across CHAPTER_NETWORK — must match sum below. */
  chapterParticipantsMinTotal: 2850,
  /** Countries with a listed chapter */
  countriesWithChapter: 15,
  /** Geographic reach including online cohorts and partners beyond chapter cities */
  countriesReachedTotal: 16,
  raisedUsd: 19800,
  courseModules: 20,
  internsLed: 125,
  hackathonParticipants: 500,
};

/**
 * One row per flagship chapter. membersMin are floor counts; shown as "NNN+ students".
 * Sum of membersMin must equal IMPACT.chapterParticipantsMinTotal.
 */
/** Fictional representative names for storytelling; not tied to real individuals. */
export const CHAPTER_NETWORK = [
  { country: 'United States', flag: '🇺🇸', chapterName: 'Greater Newark Chapter', location: 'Newark, NJ', membersMin: 295, leadName: 'Jordan Mbeki' },
  { country: 'Canada', flag: '🇨🇦', chapterName: 'Toronto Chapter', location: 'Toronto, ON', membersMin: 195, leadName: 'Priya Kaur' },
  { country: 'United Kingdom', flag: '🇬🇧', chapterName: 'London Chapter', location: 'London, UK', membersMin: 205, leadName: 'Oliver Hayes' },
  { country: 'India', flag: '🇮🇳', chapterName: 'National Capital Region Chapter', location: 'New Delhi, India', membersMin: 215, leadName: 'Ananya Sharma' },
  { country: 'Australia', flag: '🇦🇺', chapterName: 'Sydney Chapter', location: 'Sydney, NSW', membersMin: 185, leadName: 'Ethan Walsh' },
  { country: 'Germany', flag: '🇩🇪', chapterName: 'Munich Chapter', location: 'Munich, Germany', membersMin: 175, leadName: 'Nina Hoffmann' },
  { country: 'France', flag: '🇫🇷', chapterName: 'Paris Chapter', location: 'Paris, France', membersMin: 170, leadName: 'Camille Rousseau' },
  { country: 'Singapore', flag: '🇸🇬', chapterName: 'Singapore Chapter', location: 'Singapore', membersMin: 165, leadName: 'Wei Lin Tan' },
  { country: 'South Korea', flag: '🇰🇷', chapterName: 'Seoul Chapter', location: 'Seoul, South Korea', membersMin: 180, leadName: 'Min-jun Park' },
  { country: 'Netherlands', flag: '🇳🇱', chapterName: 'Amsterdam Chapter', location: 'Amsterdam, Netherlands', membersMin: 160, leadName: 'Sanne de Vries' },
  { country: 'Mexico', flag: '🇲🇽', chapterName: 'Mexico City Chapter', location: 'Mexico City, Mexico', membersMin: 190, leadName: 'Diego Morales' },
  { country: 'Brazil', flag: '🇧🇷', chapterName: 'São Paulo Chapter', location: 'São Paulo, Brazil', membersMin: 185, leadName: 'Beatriz Almeida' },
  { country: 'Nigeria', flag: '🇳🇬', chapterName: 'Lagos Chapter', location: 'Lagos, Nigeria', membersMin: 175, leadName: 'Chidi Okafor' },
  { country: 'Japan', flag: '🇯🇵', chapterName: 'Tokyo Chapter', location: 'Tokyo, Japan', membersMin: 185, leadName: 'Kenji Yamamoto' },
  { country: 'Kenya', flag: '🇰🇪', chapterName: 'Nairobi Chapter', location: 'Nairobi, Kenya', membersMin: 170, leadName: 'Amina Hassan' },
];

export function sumChapterMembersMin() {
  return CHAPTER_NETWORK.reduce((s, c) => s + c.membersMin, 0);
}

// Dev-only guard (tree-shaken in production if unused — keep simple check in comment)
if (import.meta.env?.DEV && sumChapterMembersMin() !== IMPACT.chapterParticipantsMinTotal) {
  console.warn(
    '[impactStats] chapter membersMin sum',
    sumChapterMembersMin(),
    '!== chapterParticipantsMinTotal',
    IMPACT.chapterParticipantsMinTotal
  );
}

export function formatChapterMembers(membersMin) {
  return `${membersMin.toLocaleString()}+ students`;
}
