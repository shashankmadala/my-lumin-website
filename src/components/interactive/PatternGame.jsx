
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PatternGame = () => {
  const [sequence, setSequence] = useState([2, 4, 6, 8]);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    if (parseInt(userAnswer) === 10) { // Next number in sequence
      setFeedback('Correct! The pattern adds 2 each time.');
    } else {
      setFeedback('Try again! Look at how the numbers change.');
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Pattern Recognition Game</h3>
      
      <div className="flex gap-4 items-center mb-6">
        {sequence.map((num, index) => (
          <div key={index} className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center font-bold">
            {num}
          </div>
        ))}
        <div className="w-12 h-12 bg-blue-50 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
          ?
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-24 px-3 py-2 border rounded-lg"
          placeholder="Next?"
        />
        <button
          onClick={checkAnswer}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Check
        </button>
      </div>

      {feedback && (
        <div className={`p-4 rounded-lg ${feedback.includes('Correct') ? 'bg-green-50' : 'bg-yellow-50'}`}>
          {feedback}
        </div>
      )}
    </div>
  );
};

export default PatternGame;