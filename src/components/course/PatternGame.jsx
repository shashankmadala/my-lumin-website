import React, { useState, useEffect } from 'react';
import { Check, X, Brain, ArrowRight, AlertCircle } from 'lucide-react';

const PatternGame = ({ onComplete }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const patterns = [
    {
      sequence: [2, 4, 6, 8],
      next: 10,
      rule: "Add 2 to each number",
      type: "numeric",
      hint: "Look at how much each number increases by"
    },
    {
      sequence: [1, 2, 4, 8],
      next: 16,
      rule: "Multiply by 2",
      type: "numeric",
      hint: "Think about multiplication"
    },
    {
      sequence: [1, 3, 6, 10],
      next: 15,
      rule: "Add increasing numbers (+2, +3, +4...)",
      type: "numeric",
      hint: "The amount you add increases each time"
    }
  ];

  const checkAnswer = () => {
    const currentPattern = patterns[currentLevel];
    const isCorrect = parseInt(userAnswer) === currentPattern.next;
    setAttempts(prev => prev + 1);
    
    if (isCorrect) {
      setFeedback("Correct! The pattern was: " + currentPattern.rule);
      setScore(prev => prev + Math.max(10 - attempts, 1));
      
      // Delay before moving to next level
      setTimeout(() => {
        if (currentLevel < patterns.length - 1) {
          setCurrentLevel(prev => prev + 1);
          setUserAnswer('');
          setFeedback('');
          setAttempts(0);
          setShowHint(false);
        } else {
          setFeedback("Congratulations! You've completed all levels!");
          if (onComplete) {
            onComplete(score);
          }
        }
      }, 2000);
    } else {
      setFeedback("Not quite. Try again!");
    }
  };

  const resetGame = () => {
    setCurrentLevel(0);
    setUserAnswer('');
    setFeedback('');
    setScore(0);
    setAttempts(0);
    setShowHint(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Brain className="w-6 h-6" />
              <h2 className="text-xl font-bold">Pattern Recognition Challenge</h2>
            </div>
            <div className="text-sm">
              Score: {score}
            </div>
          </div>
          <div className="h-2 bg-white/20 rounded-full">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${((currentLevel + 1) / patterns.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Game Content */}
        <div className="p-6">
          <div className="mb-8">
            <div className="text-lg font-medium mb-4">Find the next number in the sequence:</div>
            <div className="flex gap-4 items-center mb-6">
              {patterns[currentLevel].sequence.map((num, index) => (
                <div 
                  key={index}
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-600"
                >
                  {num}
                </div>
              ))}
              <div className="w-12 h-12 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                ?
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your answer"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                onClick={checkAnswer}
                disabled={!userAnswer}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                Check
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setShowHint(true)}
              className="text-blue-600 text-sm hover:underline"
            >
              Need a hint?
            </button>
          </div>

          {/* Feedback */}
          {feedback && (
            <div className={`p-4 rounded-lg mb-4 ${
              feedback.includes('Correct') || feedback.includes('Congratulations')
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}>
              {feedback}
            </div>
          )}

          {/* Hint */}
          {showHint && (
            <div className="p-4 bg-yellow-50 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-yellow-800">Hint:</div>
                <div className="text-yellow-700">{patterns[currentLevel].hint}</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Level {currentLevel + 1} of {patterns.length}
          </div>
          <button
            onClick={resetGame}
            className="text-gray-600 hover:text-gray-900"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatternGame;