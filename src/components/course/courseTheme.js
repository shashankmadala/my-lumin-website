import {
  Brain, GraduationCap, Sparkles, Bot, Cpu, Database, MessageSquare, Shield,
  Scale, Rocket, Lightbulb, Wrench, BookOpen, Users, Compass, Target,
  PenTool, ClipboardList, Globe, Eye, Zap, Network, Layers, Award, School,
  HeartHandshake, Lock, FlaskConical, TrendingUp, Briefcase, Map,
} from 'lucide-react';

// Unit/course icons are referenced by name in data files; resolve them here.
const ICONS = {
  Brain, GraduationCap, Sparkles, Bot, Cpu, Database, MessageSquare, Shield,
  Scale, Rocket, Lightbulb, Wrench, BookOpen, Users, Compass, Target,
  PenTool, ClipboardList, Globe, Eye, Zap, Network, Layers, Award, School,
  HeartHandshake, Lock, FlaskConical, TrendingUp, Briefcase, Map,
};

export function resolveIcon(name) {
  return ICONS[name] || Sparkles;
}

// Tailwind needs literal class names, so themes are explicit maps.
export const themes = {
  blue: {
    gradient: 'from-blue-600 to-indigo-600',
    gradientSoft: 'from-blue-50 to-indigo-50',
    text: 'text-blue-600',
    textDark: 'text-blue-700',
    bg: 'bg-blue-600',
    bgHover: 'hover:bg-blue-700',
    bgSoft: 'bg-blue-50',
    border: 'border-blue-200',
    ring: 'ring-blue-500',
    chip: 'bg-blue-100 text-blue-700',
    progress: 'bg-gradient-to-r from-blue-500 to-indigo-500',
  },
  violet: {
    gradient: 'from-violet-600 to-purple-600',
    gradientSoft: 'from-violet-50 to-purple-50',
    text: 'text-violet-600',
    textDark: 'text-violet-700',
    bg: 'bg-violet-600',
    bgHover: 'hover:bg-violet-700',
    bgSoft: 'bg-violet-50',
    border: 'border-violet-200',
    ring: 'ring-violet-500',
    chip: 'bg-violet-100 text-violet-700',
    progress: 'bg-gradient-to-r from-violet-500 to-purple-500',
  },
};

export function courseTheme(color) {
  return themes[color] || themes.blue;
}

export function flattenLessons(course) {
  return course.units.flatMap((unit) => unit.lessons.map((lesson) => ({ unit, lesson })));
}
