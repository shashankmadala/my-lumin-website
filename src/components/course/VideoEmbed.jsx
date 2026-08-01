import { useState } from 'react';
import { Play, Youtube } from 'lucide-react';

// Click-to-play YouTube embed: shows the thumbnail (no third-party requests
// beyond the thumbnail image) until the learner presses play.
export default function VideoEmbed({ videoId, title, duration, note }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="my-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-900 shadow-sm">
        <div className="relative aspect-video">
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full group"
              aria-label={`Play video: ${title}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:scale-110 transition-all flex items-center justify-center shadow-xl">
                  <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                </span>
              </span>
            </button>
          )}
        </div>
        <div className="px-4 py-3 bg-white flex items-center gap-3">
          <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-medium text-gray-900 text-sm truncate">{title}</p>
            {duration && <p className="text-xs text-gray-500">{duration}</p>}
          </div>
        </div>
      </div>
      {note && <p className="mt-2 text-sm text-gray-500 italic">{note}</p>}
    </div>
  );
}
