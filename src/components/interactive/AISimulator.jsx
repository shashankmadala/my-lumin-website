import React, { useState, useEffect } from 'react';
import { Brain, AlertCircle, Check } from 'lucide-react';

const AISimulator = ({ title, description, mode }) => {
  const [input, setInput] = useState('');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(0);

  const processInput = () => {
    setProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      let simulatedResult;
      switch (mode) {
        case 'basic':
          simulatedResult = {
            decision: input.length > 5 ? 'Complex Input' : 'Simple Input',
            confidence: Math.random() * 40 + 60
          };
          break;
        case 'everyday':
          simulatedResult = {
            decision: input.includes('weather') ? 'Weather Query' : 'General Query',
            confidence: Math.random() * 30 + 70
          };
          break;
        case 'training':
          simulatedResult = {
            decision: input.split(' ').length > 3 ? 'Good Training Data' : 'Insufficient Data',
            confidence: Math.random() * 50 + 50
          };
          break;
        default:
          simulatedResult = {
            decision: 'Unknown Query Type',
            confidence: Math.random() * 100
          };
      }
      setResult(simulatedResult.decision);
      setConfidence(simulatedResult.confidence);
      setProcessing(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <Brain className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your query..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={processInput}
          disabled={processing || !input}
          className={`w-full py-2 rounded-lg transition-colors duration-300 ${
            processing || !input
              ? 'bg-gray-100 text-gray-400'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {processing ? 'Processing...' : 'Analyze'}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Result:</span>
              <span className="text-blue-600">{Math.round(confidence)}% confident</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>{result}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISimulator;