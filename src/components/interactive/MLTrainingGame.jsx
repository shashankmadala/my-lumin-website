import React, { useState, useEffect } from 'react';
import { Brain, Target, RefreshCw, AlertCircle } from 'lucide-react';

const MLTrainingGame = () => {
  const [gameState, setGameState] = useState('training'); // training, testing, results
  const [trainingData, setTrainingData] = useState([]);
  const [modelAccuracy, setModelAccuracy] = useState(0);
  const [testResults, setTestResults] = useState([]);
  const [feedback, setFeedback] = useState('');

  const shapes = ['circle', 'square', 'triangle'];
  const colors = ['red', 'blue', 'green'];

  const generateShape = () => {
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return { shape, color };
  };

  const [currentShape, setCurrentShape] = useState(generateShape());

  const handleClassification = (classification) => {
    if (gameState === 'training') {
      setTrainingData(prev => [...prev, { ...currentShape, classification }]);
      if (trainingData.length >= 5) {
        setGameState('testing');
        setModelAccuracy(calculateAccuracy());
      } else {
        setCurrentShape(generateShape());
      }
    } else if (gameState === 'testing') {
      const isCorrect = evaluateClassification(currentShape, classification);
      setTestResults(prev => [...prev, isCorrect]);
      if (testResults.length >= 4) {
        setGameState('results');
      } else {
        setCurrentShape(generateShape());
      }
    }
  };

  const calculateAccuracy = () => {
    // Simulate model accuracy based on consistency of training data
    const consistencyScore = trainingData.reduce((score, item) => {
      const similarItems = trainingData.filter(
        other => other.shape === item.shape && 
                 other.color === item.color && 
                 other.classification === item.classification
      );
      return score + (similarItems.length / trainingData.length);
    }, 0);

    return Math.min(85 + (consistencyScore * 10), 95);
  };

  const evaluateClassification = (shape, classification) => {
    // Find similar shapes in training data
    const similarExamples = trainingData.filter(
      item => item.shape === shape.shape && item.color === shape.color
    );
    
    if (similarExamples.length === 0) return Math.random() > 0.5;
    
    // Return true if classification matches the most common classification for similar shapes
    const mostCommonClassification = similarExamples.reduce(
      (acc, curr) => {
        acc[curr.classification] = (acc[curr.classification] || 0) + 1;
        return acc;
      },
      {}
    );

    return classification === Object.entries(mostCommonClassification)
      .sort((a, b) => b[1] - a[1])[0][0];
  };

  const resetGame = () => {
    setGameState('training');
    setTrainingData([]);
    setTestResults([]);
    setModelAccuracy(0);
    setCurrentShape(generateShape());
  };

  const renderShape = () => {
    const shapeStyles = {
      circle: 'rounded-full',
      square: 'rounded-none',
      triangle: 'triangle'
    };

    const colorStyles = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500'
    };

    return (
      <div className={`w-24 h-24 ${colorStyles[currentShape.color]} ${shapeStyles[currentShape.shape]}`} />
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <Brain className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">ML Training Game</h3>
          <p className="text-gray-600">
            {gameState === 'training' ? 'Train the model' : 
             gameState === 'testing' ? 'Test the model' : 
             'See your results'}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Shape Display */}
        <div className="p-8 bg-gray-50 rounded-xl">
          {renderShape()}
        </div>

        {/* Controls */}
        {gameState !== 'results' && (
          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              onClick={() => handleClassification('safe')}
              className="px-6 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
            >
              Safe
            </button>
            <button
              onClick={() => handleClassification('unsafe')}
              className="px-6 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
            >
              Unsafe
            </button>
          </div>
        )}

        {/* Progress */}
        <div className="w-full">
          {gameState === 'training' && (
            <>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Training Progress</span>
                <span>{trainingData.length}/5 examples</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${(trainingData.length / 5) * 100}%` }}
                />
              </div>
            </>
          )}

          {gameState === 'testing' && (
            <div className="text-center">
              <div className="text-lg font-medium mb-2">
                Model Accuracy: {modelAccuracy.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">
                Test Case {testResults.length + 1}/5
              </div>
            </div>
          )}

          {gameState === 'results' && (
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">
                Final Score: {(testResults.filter(r => r).length / testResults.length * 100).toFixed(1)}%
              </div>
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MLTrainingGame;