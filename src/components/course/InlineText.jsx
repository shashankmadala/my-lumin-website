import React from 'react';

// Minimal inline markdown: **bold**, *italic*, `code`, [label](url).
// Keeps course content as plain data — no markdown library needed.
const TOKEN_RE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

export default function InlineText({ text }) {
  if (!text) return null;
  const parts = String(text).split(TOKEN_RE);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="px-1.5 py-0.5 bg-gray-100 text-indigo-700 rounded text-[0.9em] font-mono">
              {part.slice(1, -1)}
            </code>
          );
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          const external = /^https?:\/\//.test(url);
          return (
            <a
              key={i}
              href={url}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-blue-600 font-medium underline decoration-blue-300 underline-offset-2 hover:text-blue-800 hover:decoration-blue-500 transition-colors"
            >
              {label}
            </a>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
