/**
 * Single source of truth for public impact metrics.
 * Chapter counts & member floors come from chaptersByCountry.js.
 */

import { aggregateChapterStats } from './chaptersByCountry.js';

const chapterAgg = aggregateChapterStats();

export const IMPACT = {
  /** Cumulative reach across programs (online, chapters, partners, events—not mutually exclusive). */
  studentsReachedTotal: 15000,
  certificatesIssued: 5200,
  /** All chapter rows on /chapters (active + upcoming). */
  chapterLocations: chapterAgg.count,
  /** Chapters currently running with enrolled participants. */
  chaptersActive: chapterAgg.activeCount,
  /** Chapters marked as forming / opening soon (excluded from participant sum). */
  chaptersUpcoming: chapterAgg.upcomingCount,
  /** Sum of membersMin across active chapters only. */
  chapterParticipantsMinTotal: chapterAgg.membersSum,
  /** Countries with at least one listed chapter */
  countriesWithChapter: chapterAgg.countryCount,
  /** Geographic reach including online cohorts and partners beyond chapter cities */
  countriesReachedTotal: 16,
  raisedUsd: 19800,
  courseModules: 20,
  internsLed: 125,
  hackathonParticipants: 500,
};

export function sumChapterMembersMin() {
  return chapterAgg.membersSum;
}

// Dev-only guard
if (import.meta.env?.DEV && sumChapterMembersMin() !== IMPACT.chapterParticipantsMinTotal) {
  console.warn('[impactStats] chapter members sum mismatch');
}

export function formatChapterMembers(membersMin) {
  return `${membersMin.toLocaleString()}+ students`;
}
