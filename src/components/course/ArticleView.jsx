import React from 'react';

const ArticleView = ({ article }) => {
  const processContent = (text) => {
    // Split content by bullet points while preserving structure
    const sections = text.split('\n').reduce((acc, line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return acc;
      
      if (trimmedLine.startsWith('•')) {
        const lastSection = acc[acc.length - 1];
        if (lastSection && Array.isArray(lastSection.items)) {
          lastSection.items.push(trimmedLine.substring(1).trim());
          return acc;
        }
        return [...acc, { type: 'list', items: [trimmedLine.substring(1).trim()] }];
      }
      
      if (trimmedLine.endsWith(':')) {
        return [...acc, { type: 'header', content: trimmedLine.slice(0, -1) }];
      }
      
      return [...acc, { type: 'paragraph', content: trimmedLine }];
    }, []);

    return sections;
  };

  const sections = processContent(article);

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
      <div className="absolute top-1/4 -left-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
      <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"/>

      <article className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-gray-100">
        {/* Subtle corner decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-50 to-transparent rounded-tr-2xl -z-10"/>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-50 to-transparent rounded-bl-2xl -z-10"/>

        {sections.map((section, index) => {
          switch (section.type) {
            case 'header':
              return (
                <div key={index} className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0 relative">
                    {section.content}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"/>
                  </h2>
                </div>
              );
              
            case 'list':
              return (
                <div key={index} className="mb-6 last:mb-0">
                  <ul className="space-y-3">
                    {section.items.map((item, i) => {
                      if (item.endsWith(':')) {
                        return (
                          <li key={i} className="mt-6 first:mt-0">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {item.slice(0, -1)}
                            </h3>
                          </li>
                        );
                      }
                      
                      return (
                        <li key={i} className="flex items-start gap-3 pl-4 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300"/>
                          <span className="text-gray-600 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
              
            case 'paragraph':
              return (
                <div key={index} className={`relative ${index === 0 ? 'mb-8' : 'mb-4 last:mb-0'}`}>
                  {index === 0 && (
                    <div className="absolute -left-2 -right-2 top-0 h-full bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 opacity-30 rounded-lg -z-10"/>
                  )}
                  <p className={`text-gray-600 leading-relaxed relative ${
                    index === 0 ? 'text-lg p-4' : ''
                  }`}>
                    {section.content}
                  </p>
                </div>
              );
              
            default:
              return null;
          }
        })}
      </article>
      
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          Continue to Quiz
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ArticleView;