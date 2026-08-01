import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, CircleDot, ChevronDown, Home } from 'lucide-react';
import { courseTheme, resolveIcon } from './courseTheme';

// Khan-style left navigation for lesson pages.
export default function CourseSidebar({ meta, course, currentLessonId, lessonStatus, onNavigate }) {
  const t = courseTheme(course.color);
  const currentUnit = course.units.find((u) => u.lessons.some((l) => l.id === currentLessonId));
  const [openUnits, setOpenUnits] = useState(() => new Set([currentUnit?.id]));

  const toggle = (unitId) => {
    setOpenUnits((prev) => {
      const next = new Set(prev);
      if (next.has(unitId)) next.delete(unitId);
      else next.add(unitId);
      return next;
    });
  };

  return (
    <nav className="h-full overflow-y-auto bg-white border-r border-gray-200">
      <Link
        to={`/learn/${meta.slug}`}
        onClick={onNavigate}
        className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
      >
        <Home className={`w-4 h-4 ${t.text}`} />
        <span className="font-bold text-gray-900 text-sm">{course.title}</span>
      </Link>

      <div className="py-2">
        {course.units.map((unit, ui) => {
          const Icon = resolveIcon(unit.icon);
          const open = openUnits.has(unit.id);
          const completed = unit.lessons.filter((l) => lessonStatus(l.id) === 'completed').length;
          return (
            <div key={unit.id}>
              <button
                onClick={() => toggle(unit.id)}
                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${t.text}`} />
                <span className="flex-1 text-sm font-semibold text-gray-800 leading-snug">
                  {ui + 1}. {unit.title}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">{completed}/{unit.lessons.length}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
              {open && (
                <div className="pb-2">
                  {unit.lessons.map((lesson) => {
                    const status = lessonStatus(lesson.id);
                    const active = lesson.id === currentLessonId;
                    return (
                      <Link
                        key={lesson.id}
                        to={`/learn/${meta.slug}/${lesson.id}`}
                        onClick={onNavigate}
                        className={`flex items-center gap-2.5 pl-12 pr-4 py-2 text-sm transition-colors ${
                          active
                            ? `${t.bgSoft} ${t.textDark} font-semibold border-r-2 ${t.border}`
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {status === 'completed' ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : status === 'in-progress' ? (
                          <CircleDot className={`w-4 h-4 ${t.text} flex-shrink-0`} />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        )}
                        <span className="leading-snug">{lesson.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
