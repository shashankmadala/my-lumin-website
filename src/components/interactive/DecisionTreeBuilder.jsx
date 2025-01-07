import React, { useState } from 'react';
import { GitBranch, Check, X } from 'lucide-react';

const DecisionTreeBuilder = ({ scenario, difficulty }) => {
  const [nodes, setNodes] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const scenarios = {
    'weather-activity': {
      question: 'Is it raining?',
      options: [
        { text: 'Yes', leads_to: 'Indoor activities' },
        { text: 'No', leads_to: 'Check temperature' }
      ]
    },
    'pet-classifier': {
      question: 'Does it bark?',
      options: [
        { text: 'Yes', leads_to: 'Likely a dog' },
        { text: 'No', leads_to: 'Check if it meows' }
      ]
    }
  };

  const currentScenario = scenarios[scenario] || scenarios['weather-activity'];

  const addNode = (option) => {
    setNodes([...nodes, option]);
    setCurrentStep(prev => prev + 1);
  };

  const resetTree = () => {
    setNodes([]);
    setCurrentStep(0);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <GitBranch className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Decision Tree Builder</h3>
          <p className="text-gray-600">{`Build a ${difficulty} decision tree for ${scenario}`}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Current Question */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Current Question:</h4>
          <p>{currentScenario.question}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
          {currentScenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => addNode(option)}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-300 text-left"
            >
              <div className="font-medium mb-1">{option.text}</div>
              <div className="text-sm text-gray-600">Leads to: {option.leads_to}</div>
            </button>
          ))}
        </div>

        {/* Tree Visualization */}
        {nodes.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">Your Decision Tree</h4>
              <button
                onClick={resetTree}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Reset Tree
              </button>
            </div>
            <div className="space-y-2">
              {nodes.map((node, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                >
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <span className="font-medium">{node.text}</span>
                    <span className="text-gray-600 ml-2">→ {node.leads_to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionTreeBuilder;