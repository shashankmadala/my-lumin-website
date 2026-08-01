import { useState, useEffect, useCallback } from 'react';

// Per-course progress persisted in localStorage under `lumin-course-<courseId>`.
// Nothing is ever locked; progress only records what the learner has done.

const LESSON_PASS = 70; // % quiz score that marks a lesson complete

const emptyProgress = () => ({
  lessons: {},          // lessonId -> { visited: true, quizBest: number|null }
  assessment: { best: null, attempts: 0, passed: false },
  certificateName: null,
  startedAt: null,
  lastVisit: null,
});

function load(courseId) {
  try {
    const raw = localStorage.getItem(`lumin-course-${courseId}`);
    if (raw) return { ...emptyProgress(), ...JSON.parse(raw) };
  } catch { /* corrupted storage — start fresh */ }
  return emptyProgress();
}

export default function useCourseProgress(course) {
  const courseId = course.id;
  const [progress, setProgress] = useState(() => load(courseId));

  useEffect(() => {
    setProgress(load(courseId));
  }, [courseId]);

  useEffect(() => {
    try {
      localStorage.setItem(`lumin-course-${courseId}`, JSON.stringify(progress));
    } catch { /* storage full/unavailable — progress just won't persist */ }
  }, [courseId, progress]);

  const markVisited = useCallback((lessonId) => {
    setProgress((prev) => ({
      ...prev,
      startedAt: prev.startedAt || new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      lessons: {
        ...prev.lessons,
        [lessonId]: { quizBest: null, ...prev.lessons[lessonId], visited: true },
      },
    }));
  }, []);

  const recordQuiz = useCallback((lessonId, score) => {
    setProgress((prev) => {
      const existing = prev.lessons[lessonId] || {};
      return {
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...existing,
            visited: true,
            quizBest: Math.max(existing.quizBest ?? 0, score),
          },
        },
      };
    });
  }, []);

  const recordAssessment = useCallback((score, passingScore) => {
    setProgress((prev) => ({
      ...prev,
      assessment: {
        best: Math.max(prev.assessment.best ?? 0, score),
        attempts: prev.assessment.attempts + 1,
        passed: prev.assessment.passed || score >= passingScore,
      },
    }));
  }, []);

  const setCertificateName = useCallback((name) => {
    setProgress((prev) => ({ ...prev, certificateName: name }));
  }, []);

  const resetCourse = useCallback(() => setProgress(emptyProgress()), []);

  // Derived helpers
  const lessonStatus = useCallback(
    (lessonId) => {
      const l = progress.lessons[lessonId];
      if (!l) return 'not-started';
      if ((l.quizBest ?? -1) >= LESSON_PASS) return 'completed';
      return 'in-progress';
    },
    [progress.lessons]
  );

  const allLessons = course.units.flatMap((u) => u.lessons);
  const completedCount = allLessons.filter((l) => lessonStatus(l.id) === 'completed').length;
  const stats = {
    totalLessons: allLessons.length,
    completedCount,
    percent: allLessons.length ? Math.round((completedCount / allLessons.length) * 100) : 0,
    allComplete: completedCount === allLessons.length && allLessons.length > 0,
  };

  return {
    progress,
    stats,
    lessonStatus,
    markVisited,
    recordQuiz,
    recordAssessment,
    setCertificateName,
    resetCourse,
    LESSON_PASS,
  };
}
