import React, { useState } from 'react';
import { Brain, Bot, ChevronRight, Lightbulb } from 'lucide-react';

const AiConceptExplorer = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [interactionCount, setInteractionCount] = useState(0);

  const concepts = [
    {
      id: 'reasoning',
      title: 'AI Reasoning',
      icon: <Brain className="w-6 h-6" />,
      examples: [
        { input: 'Should I bring an umbrella?', 
          thinking: ['Check weather data', 'Analyze precipitation probability', 'Consider time of day'],
          output: 'Yes, 80% chance of rain this afternoon' 
        },
        { input: 'Plan my study schedule', 
          thinking: ['Review available time slots', 'Consider subject priorities', 'Account for breaks'],
          output: 'Recommended 2-hour blocks with 15-minute breaks' 
        }
      ]
    },
    {
      id: 'learning',
      title: 'Machine Learning',
      icon: <Bot className="w-6 h-6" />,
      examples: [
        { input: 'Cat vs Dog Images', 
          thinking: ['Analyze shapes', 'Identify features', 'Compare patterns'],
          output: 'Image classified as "Cat" with 95% confidence' 
        },
        { input: 'Email Classification', 
          thinking: ['Scan content', 'Check sender history', 'Evaluate patterns'],
          output: 'Email categorized as "Important"' 
        }
      ]
    },
    {
      id: 'adaptation',
      title: 'AI Adaptation',
      icon: <Lightbulb className="w-6 h-6" />,
      examples: [
        { input: 'User prefers dark mode', 
          thinking: ['Record preference', 'Update UI settings', 'Apply to all screens'],
          output: 'Theme automatically switches to dark mode at sunset' 
        },
        { input: 'User often orders pizza on Fridays', 
          thinking: ['Analyze ordering patterns', 'Identify preferences', 'Note timing'],
          output: 'Suggestion: "Order your usual pizza for Friday night?"' 
        }
      ]
    }
  ];

  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
    setInteractionCount(prev => prev + 1);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Explore AI Concepts</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            onClick={() => handleConceptClick(concept)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              selectedConcept?.id === concept.id
                ? 'bg-blue-50 border-2 border-blue-200'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                {concept.icon}
              </div>
              <span className="font-medium">{concept.title}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedConcept && (
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h4 className="font-medium mb-4">Example Scenarios:</h4>
          {selectedConcept.examples.map((example, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Input:</span>
                <span className="text-gray-600">{example.input}</span>
              </div>
              
              <div className="ml-4 mb-2">
                <span className="text-sm text-gray-500">AI Thinking Process:</span>
                <div className="ml-2">
                  {example.thinking.map((thought, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4" />
                      {thought}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Output:</span>
                <span className="text-blue-600">{example.output}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {interactionCount >= 3 && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg text-green-700">
          <p className="font-medium">Great exploration! You've discovered how AI:</p>
          <ul className="ml-4 mt-2 list-disc">
            <li>Processes information systematically</li>
            <li>Uses data to make decisions</li>
            <li>Adapts to patterns and preferences</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AiConceptExplorer;