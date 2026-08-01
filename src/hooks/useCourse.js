import { useEffect, useState } from 'react';
import { findCourseMeta } from '../data/courses/index.js';

// Loads full course data (lazy chunk) for a catalog slug.
export default function useCourse(slug) {
  const meta = findCourseMeta(slug);
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!meta) return undefined;
    let active = true;
    setCourse(null);
    meta
      .loader()
      .then((mod) => { if (active) setCourse(mod.default); })
      .catch((e) => { if (active) setError(e); });
    return () => { active = false; };
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  return { meta, course, error };
}
