/**
 * Chapter founder photos in public/images/chapter_founders/
 * Display is anonymous (role only); chapter cards use fictional leadName in impactStats.js.
 */
export const CHAPTER_FOUNDER_SPOTLIGHT = [
  { file: 'Screenshot 2025-11-28 at 2.56.50\u202fPM - Aarnav Garg.png' },
  { file: 'IMG_0748 - Amari A..jpeg' },
  { file: 'IMG_1912 - andria adeishvili.jpeg' },
  { file: 'IMG_5053 - Nicholas M.png' },
  { file: 'IMG_9371 - Praneel Pothula.jpeg' },
  { file: 'Screen Shot 2025-07-29 at 07.01.22 - Zun Shin Thant Lin.png' },
];

export function chapterFounderImageSrc(file) {
  return `/images/chapter_founders/${encodeURIComponent(file)}`;
}
