import React from 'react';

const ArticleView = ({ article }) => {
  // Split article into sections based on line breaks
  const sections = article.split('\n\n').filter(Boolean);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose max-w-none">
        {sections.map((section, index) => {
          // Check if section is a heading (starts with word followed by :)
          const isHeading = /^[A-Za-z\s]+:/.test(section);
          
          if (isHeading) {
            const [heading, ...content] = section.split(':');
            return (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {heading.trim()}
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  {content.join(':').trim()}
                </div>
              </div>
            );
          }
          
          // Check if section contains bullet points
          if (section.includes('•')) {
            const [title, ...bullets] = section.split('\n');
            return (
              <div key={index} className="mb-8">
                {title && !title.includes('•') && (
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {title.trim()}
                  </h3>
                )}
                <ul className="space-y-2 text-gray-600">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span className="leading-relaxed">{bullet.replace('•', '').trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          
          // Regular paragraph
          return (
            <p key={index} className="text-gray-600 leading-relaxed mb-6">
              {section}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleView;