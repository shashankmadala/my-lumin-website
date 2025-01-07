import React, { useState } from 'react';
import { BookOpen, ArrowRight, Check } from 'lucide-react';

const LearningComparison = ({ scenarios }) => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const scenarioData = {
    'supervised': {
      'image-classification': {
        title: 'Image Classification',
        description: 'Train AI to recognize different objects',
        steps: [
          'Collect labeled images',
          'Train the model',
          'Test with new images'
        ],
        key_features: [
          'Requires labeled data',
          'Clear right/wrong answers',
          'Good for classification tasks'
        ]
      }
    },
    'unsupervised': {
      'customer-grouping': {
        title: 'Customer Grouping',
        description: 'Group similar customers together',
        steps: [
          'Collect customer data',
          'Find patterns',
          'Create groups'
        ],
        key_features: [
          'No labels needed',
          'Discovers hidden patterns',
          'Good for clustering tasks'
        ]
      }
    }
  };

  const getCurrentScenario = () => {
    const { type, task } = scenarios[activeScenario];
    return scenarioData[type][task];
  };

  const handleAnswer = (questionId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Learning Types Comparison</h3>
          <p className="text-gray-600">Compare different learning approaches</p>
        </div>
      </div>

      {/* Scenario Navigation */}
      <div className="flex gap-4 mb-6">
        {scenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => setActiveScenario(index)}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeScenario === index
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {scenario.type.charAt(0).toUpperCase() + scenario.type.slice(1)}
          </button>
        ))}
      </div>

      {/* Current Scenario Content */}
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">{getCurrentScenario().title}</h4>
          <p className="text-gray-600">{getCurrentScenario().description}</p>
        </div>

        {/* Steps */}
        <div>
          <h4 className="font-medium mb-3">Process Steps:</h4>
          <div className="space-y-2">
            {getCurrentScenario().steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="font-medium mb-3">Key Features:</h4>
          <div className="space-y-2">
            {getCurrentScenario().key_features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2"
              >
                <Check className="w-4 h-4 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Quiz */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-3">Quick Check:</h4>
          <div className="space-y-4">
            <div>
              <p className="mb-2">Is this type of learning good for classification tasks?</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAnswer('classification', true)}
                  className={`px-4 py-2 rounded-lg ${
                    userAnswers.classification === true
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer('classification', false)}
                  className={`px-4 py-2 rounded-lg ${
                    userAnswers.classification === false
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningComparison;