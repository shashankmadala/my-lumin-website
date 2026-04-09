/**
 * Chapters grouped by country. Fictional lead names for storytelling.
 * `status: 'upcoming'` = forming chapter (not counted in participant totals).
 * Totals drive IMPACT via aggregateChapterStats().
 */

/** @typedef {'active' | 'upcoming'} ChapterStatus */

/** UI: browse chapters by region (ids must match Chapters.jsx). */
export const CHAPTER_REGIONS = [
  { id: 'americas', label: 'Americas', countries: ['United States', 'Canada', 'Mexico', 'Brazil'] },
  { id: 'europe', label: 'Europe & UK', countries: ['United Kingdom', 'France', 'Germany', 'Netherlands'] },
  { id: 'asia', label: 'Asia-Pacific', countries: ['India', 'Australia', 'Singapore', 'South Korea', 'Japan'] },
  { id: 'africa', label: 'Africa', countries: ['Nigeria', 'Kenya'] },
];

export const CHAPTERS_BY_COUNTRY = [
  {
    country: 'United States',
    flag: '🇺🇸',
    chapters: [
      { location: 'Newark, NJ', chapterName: 'Greater Newark Chapter', leadName: 'Aditya Krishnan', membersMin: 142 },
      { location: 'San Francisco, CA', chapterName: 'Bay Area Hub', leadName: 'Jennifer Chen', membersMin: 168 },
      { location: 'Chicago, IL', chapterName: 'Lakeshore Chapter', leadName: 'Meera Patel', membersMin: 155 },
      { location: 'Houston, TX', chapterName: 'Gulf Coast AI', leadName: 'Priyanka Reddy', membersMin: 128 },
      { location: 'Atlanta, GA', chapterName: 'Peachtree Youth', leadName: 'Jordan Kim', membersMin: 119 },
      { location: 'Seattle, WA', chapterName: 'Puget Sound Chapter', leadName: 'Kavya Srinivasan', membersMin: 134 },
      { location: 'Miami, FL', chapterName: 'South Florida Chapter', leadName: 'Diego Fernández', membersMin: 121 },
      { location: 'Boston, MA', chapterName: 'Charles River Chapter', leadName: 'Ravi Malhotra', membersMin: 146 },
      { location: 'Denver, CO', chapterName: 'Front Range Chapter', leadName: 'Aryan Choudhury', membersMin: 0, status: 'upcoming' },
    ],
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    chapters: [
      { location: 'Toronto, ON', chapterName: 'Toronto Metro', leadName: 'Harpreet Singh', membersMin: 134 },
      { location: 'Vancouver, BC', chapterName: 'Pacific Northwest Hub', leadName: 'Rahul Khanna', membersMin: 112 },
      { location: 'Montreal, QC', chapterName: 'St-Laurent Chapter', leadName: 'Florence Ménard', membersMin: 98 },
    ],
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    chapters: [
      { location: 'London, UK', chapterName: 'Thames Valley Chapter', leadName: 'Arjun Malhotra', membersMin: 156 },
      { location: 'Manchester, UK', chapterName: 'Northwest England Hub', leadName: 'Zara Ahmed', membersMin: 118 },
      { location: 'Edinburgh, UK', chapterName: 'Scotland Central', leadName: 'Eilidh MacLeod', membersMin: 102 },
      { location: 'Birmingham, UK', chapterName: 'West Midlands Chapter', leadName: 'Priya Sharma', membersMin: 124 },
      { location: 'Cardiff, Wales', chapterName: 'Welsh Valleys Hub', leadName: 'Tom Ellis', membersMin: 0, status: 'upcoming' },
    ],
  },
  {
    country: 'India',
    flag: '🇮🇳',
    chapters: [
      { location: 'New Delhi, India', chapterName: 'NCR North Chapter', leadName: 'Vedant Mishra', membersMin: 198 },
      { location: 'Bengaluru, India', chapterName: 'Silicon Plateau Hub', leadName: 'Shreya Nambiar', membersMin: 176 },
      { location: 'Mumbai, India', chapterName: 'Western India Chapter', leadName: 'Aarav Shah', membersMin: 165 },
      { location: 'Hyderabad, India', chapterName: 'Deccan Tech Chapter', leadName: 'Kirthika Rao', membersMin: 142 },
      { location: 'Chennai, India', chapterName: 'Coromandel Youth', leadName: 'Tharun Iyer', membersMin: 131 },
      { location: 'Kolkata, India', chapterName: 'Hooghly Chapter', leadName: 'Debopriya Banerjee', membersMin: 0, status: 'upcoming' },
    ],
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    chapters: [
      { location: 'Sydney, NSW', chapterName: 'Harbour City Chapter', leadName: 'Nikhil Menon', membersMin: 128 },
      { location: 'Melbourne, VIC', chapterName: 'Yarra Hub', leadName: 'Sneha Reddy', membersMin: 115 },
      { location: 'Brisbane, QLD', chapterName: 'Queensland North', leadName: 'Min-ho Park', membersMin: 96 },
    ],
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    chapters: [
      { location: 'Munich, Germany', chapterName: 'Bavaria South Chapter', leadName: 'Priyanshu Agarwal', membersMin: 118 },
      { location: 'Berlin, Germany', chapterName: 'Capital Region Hub', leadName: 'Jonas Richter', membersMin: 132 },
      { location: 'Hamburg, Germany', chapterName: 'Northern Ports Chapter', leadName: 'Fatima Demir', membersMin: 105 },
    ],
  },
  {
    country: 'France',
    flag: '🇫🇷',
    chapters: [
      { location: 'Paris, France', chapterName: 'Île-de-France Chapter', leadName: 'Camille Rousseau', membersMin: 112 },
      { location: 'Lyon, France', chapterName: 'Auvergne-Rhône Hub', leadName: 'Raghav Mehta', membersMin: 94 },
    ],
  },
  {
    country: 'Singapore',
    flag: '🇸🇬',
    chapters: [
      { location: 'Singapore', chapterName: 'Island City Chapter', leadName: 'Kavitha Subramaniam', membersMin: 142 },
    ],
  },
  {
    country: 'South Korea',
    flag: '🇰🇷',
    chapters: [
      { location: 'Seoul, South Korea', chapterName: 'Seoul Capital Hub', leadName: 'Min-jun Park', membersMin: 156 },
      { location: 'Busan, South Korea', chapterName: 'Southeast Coast Chapter', leadName: 'Ji-yoo Kim', membersMin: 118 },
    ],
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    chapters: [
      { location: 'Amsterdam, Netherlands', chapterName: 'Randstad West Chapter', leadName: 'Sanjana Krishnamurthy', membersMin: 108 },
      { location: 'Rotterdam, Netherlands', chapterName: 'Maas Delta Hub', leadName: 'Yusuf El-Amin', membersMin: 95 },
    ],
  },
  {
    country: 'Mexico',
    flag: '🇲🇽',
    chapters: [
      { location: 'Mexico City, Mexico', chapterName: 'CDMX Central Chapter', leadName: 'Diego Morales', membersMin: 138 },
      { location: 'Guadalajara, Mexico', chapterName: 'Jalisco West Hub', leadName: 'Lucía Herrera', membersMin: 112 },
      { location: 'Monterrey, Mexico', chapterName: 'Northeast Industrial Chapter', leadName: 'Carlos Rivas', membersMin: 101 },
    ],
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    chapters: [
      { location: 'São Paulo, Brazil', chapterName: 'Southeast Metro Chapter', leadName: 'Beatriz Almeida', membersMin: 152 },
      { location: 'Rio de Janeiro, Brazil', chapterName: 'Guanabara Hub', leadName: 'Gabriel Costa', membersMin: 134 },
      { location: 'Brasília, Brazil', chapterName: 'Central Plateau Chapter', leadName: 'Marina Duarte', membersMin: 108 },
      { location: 'Salvador, Brazil', chapterName: 'Bahia Coast Chapter', leadName: 'Riya Iyer', membersMin: 0, status: 'upcoming' },
    ],
  },
  {
    country: 'Nigeria',
    flag: '🇳🇬',
    chapters: [
      { location: 'Lagos, Nigeria', chapterName: 'Lagos Metro Chapter', leadName: 'Chidi Okafor', membersMin: 156 },
      { location: 'Abuja, Nigeria', chapterName: 'Federal Capital Hub', leadName: 'Zainab Yusuf', membersMin: 118 },
    ],
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    chapters: [
      { location: 'Tokyo, Japan', chapterName: 'Kantō Central Chapter', leadName: 'Kenji Yamamoto', membersMin: 148 },
      { location: 'Osaka, Japan', chapterName: 'Kansai Hub', leadName: 'Yui Kobayashi', membersMin: 122 },
      { location: 'Kyoto, Japan', chapterName: 'Kansai Heritage Chapter', leadName: 'Ren Sato', membersMin: 106 },
      { location: 'Fukuoka, Japan', chapterName: 'Kyushu North Chapter', leadName: 'Hana Fujiwara', membersMin: 0, status: 'upcoming' },
    ],
  },
  {
    country: 'Kenya',
    flag: '🇰🇪',
    chapters: [
      { location: 'Nairobi, Kenya', chapterName: 'Central Highlands Chapter', leadName: 'Amina Hassan', membersMin: 134 },
      { location: 'Mombasa, Kenya', chapterName: 'Coastal Chapter', leadName: 'Kevin Otieno', membersMin: 102 },
      { location: 'Kisumu, Kenya', chapterName: 'Lake Victoria Chapter', leadName: 'Navin Shah', membersMin: 0, status: 'upcoming' },
    ],
  },
];

export function isChapterUpcoming(ch) {
  return ch.status === 'upcoming';
}

export function aggregateChapterStats() {
  let count = 0;
  let membersSum = 0;
  let activeCount = 0;
  let upcomingCount = 0;

  for (const region of CHAPTERS_BY_COUNTRY) {
    for (const ch of region.chapters) {
      count += 1;
      if (isChapterUpcoming(ch)) {
        upcomingCount += 1;
      } else {
        activeCount += 1;
        membersSum += ch.membersMin;
      }
    }
  }

  return {
    count,
    membersSum,
    activeCount,
    upcomingCount,
    countryCount: CHAPTERS_BY_COUNTRY.length,
  };
}
