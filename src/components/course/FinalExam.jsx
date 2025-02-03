import React, { useState, useEffect } from 'react';
import { ChevronLeft, AlertCircle, Check, X, Trophy } from 'lucide-react';

const FinalExam = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds

  const questions = [
    {
      question: "What is the primary goal of artificial intelligence?",
      options: [
        "To create intelligent machines that can perform human-like tasks",
        "To replace human workers",
        "To store large amounts of data",
        "To make computers run faster"
      ],
      correct: 0
    },
    {
      question: "Which type of learning uses labeled data?",
      options: [
        "Unsupervised learning",
        "Supervised learning",
        "Reinforcement learning",
        "Transfer learning"
      ],
      correct: 1
    },
    {
      question: "What is a neural network?",
      options: [
        "A computer hardware component",
        "A type of database",
        "A mathematical model inspired by biological neural networks",
        "A programming language"
      ],
      correct: 2
    },
    {
      question: "What is deep learning?",
      options: [
        "Learning that occurs during sleep",
        "Learning from very large datasets",
        "A type of neural network with multiple layers",
        "A type of memory storage"
      ],
      correct: 2
    },
    {
      question: "What is machine learning?",
      options: [
        "Teaching computers to follow exact instructions",
        "Programming computers to learn from experience",
        "Making computers faster",
        "Installing software updates"
      ],
      correct: 1
    },
    {
      question: "What is natural language processing?",
      options: [
        "Speaking clearly",
        "Writing computer code",
        "Processing human language with computers",
        "Learning multiple languages"
      ],
      correct: 2
    },
    {
      question: "What is computer vision?",
      options: [
        "Wearing computer glasses",
        "Looking at computer screens",
        "Teaching computers to understand visual information",
        "Designing computer monitors"
      ],
      correct: 2
    },
    {
      question: "What is reinforcement learning?",
      options: [
        "Learning through trial and error with rewards",
        "Learning from textbooks",
        "Learning from teachers",
        "Learning through memorization"
      ],
      correct: 0
    },
    {
      question: "What is a dataset?",
      options: [
        "A type of computer",
        "A collection of related data",
        "A programming language",
        "A type of neural network"
      ],
      correct: 1
    },
    {
      question: "What is an algorithm?",
      options: [
        "A computer brand",
        "A type of computer virus",
        "A step-by-step procedure for solving a problem",
        "A programming language"
      ],
      correct: 2
    },
    {
      question: "What is bias in AI?",
      options: [
        "Personal opinions about AI",
        "Systematic errors in AI systems",
        "Computer preferences",
        "Programming errors"
      ],
      correct: 1
    },
    {
      question: "What is training data?",
      options: [
        "Exercise routines for computers",
        "Data used to teach AI systems",
        "Computer maintenance schedules",
        "Programming instructions"
      ],
      correct: 1
    },
    {
      question: "What is pattern recognition?",
      options: [
        "Identifying repeating designs",
        "Creating art patterns",
        "Writing code patterns",
        "Organizing files"
      ],
      correct: 0
    },
    {
      question: "What is data preprocessing?",
      options: [
        "Cooking data",
        "Deleting data",
        "Preparing data for analysis",
        "Storing data"
      ],
      correct: 2
    },
    {
      question: "What is feature extraction?",
      options: [
        "Taking parts from computers",
        "Identifying important characteristics in data",
        "Extracting files",
        "Removing software"
      ],
      correct: 1
    },
    {
      question: "What is classification in machine learning?",
      options: [
        "Organizing books",
        "Categorizing data into classes",
        "Creating class schedules",
        "Writing class notes"
      ],
      correct: 1
    },
    {
      question: "What is regression in machine learning?",
      options: [
        "Going backwards",
        "Predicting continuous values",
        "Fixing errors",
        "Removing data"
      ],
      correct: 1
    },
    {
      question: "What is clustering in machine learning?",
      options: [
        "Grouping similar data points",
        "Creating computer clusters",
        "Organizing files",
        "Making groups of computers"
      ],
      correct: 0
    },
    {
      question: "What is overfitting?",
      options: [
        "Wearing too many clothes",
        "A model learning noise in training data",
        "Filling too much data",
        "Using too many computers"
      ],
      correct: 1
    },
    {
      question: "What is underfitting?",
      options: [
        "Not enough exercise",
        "A model failing to capture patterns",
        "Not enough data",
        "Small computers"
      ],
      correct: 1
    },
    {
      question: "What is cross-validation?",
      options: [
        "Crossing a street safely",
        "Validating passwords",
        "Testing model performance on different data subsets",
        "Checking computer hardware"
      ],
      correct: 2
    },
    {
      question: "What is regularization?",
      options: [
        "Regular exercise",
        "Preventing overfitting",
        "Regular maintenance",
        "Following rules"
      ],
      correct: 1
    },
    {
      question: "What is a decision tree?",
      options: [
        "A tree in a garden",
        "A flowchart-like structure for decisions",
        "A computer part",
        "A type of graph"
      ],
      correct: 1
    },
    {
      question: "What is ensemble learning?",
      options: [
        "Group learning",
        "Combining multiple models",
        "Learning music",
        "Team building"
      ],
      correct: 1
    },
    {
      question: "What is gradient descent?",
      options: [
        "Walking downhill",
        "An optimization algorithm",
        "Descending order",
        "Reducing numbers"
      ],
      correct: 1
    },
    {
      question: "What is backpropagation?",
      options: [
        "Going backwards",
        "A method for training neural networks",
        "Backing up data",
        "Reverse engineering"
      ],
      correct: 1
    },
    {
      question: "What is transfer learning?",
      options: [
        "Moving data between computers",
        "Using knowledge from one task for another",
        "Transferring files",
        "Changing schools"
      ],
      correct: 1
    },
    {
      question: "What is data augmentation?",
      options: [
        "Making data bigger",
        "Creating variations of training data",
        "Adding numbers",
        "Increasing storage"
      ],
      correct: 1
    },
    {
      question: "What is hyperparameter tuning?",
      options: [
        "Tuning musical instruments",
        "Adjusting model parameters",
        "Fixing computers",
        "Setting up hardware"
      ],
      correct: 1
    },
    {
      question: "What is model validation?",
      options: [
        "Checking ID cards",
        "Testing model performance",
        "Validating passwords",
        "Verifying software"
      ],
      correct: 1
    },
    {
      question: "What is a confusion matrix?",
      options: [
        "A puzzling math problem",
        "A table showing classification results",
        "A confusing diagram",
        "A matrix in linear algebra"
      ],
      correct: 1
    },
    {
      question: "What is precision in machine learning?",
      options: [
        "Being exact",
        "Ratio of correct positive predictions",
        "Precise measurements",
        "Accurate timing"
      ],
      correct: 1
    },
    {
      question: "What is recall in machine learning?",
      options: [
        "Remembering things",
        "Ratio of actual positives identified",
        "Recalling memories",
        "Memory capacity"
      ],
      correct: 1
    },
    {
      question: "What is F1 score?",
      options: [
        "A racing category",
        "Harmonic mean of precision and recall",
        "A test score",
        "A computer model"
      ],
      correct: 1
    },
    {
      question: "What is ROC curve?",
      options: [
        "A type of graph",
        "Performance visualization of classification",
        "A curved road",
        "A rock formation"
      ],
      correct: 1
    },
    {
      question: "What is data normalization?",
      options: [
        "Making data normal",
        "Scaling features to a common range",
        "Organizing data",
        "Fixing data"
      ],
      correct: 1
    },
    {
      question: "What is dimensionality reduction?",
      options: [
        "Making things smaller",
        "Reducing number of features",
        "Reducing file size",
        "Making computers smaller"
      ],
      correct: 1
    },
    {
      question: "What is PCA?",
      options: [
        "Personal Computer Assistant",
        "Principal Component Analysis",
        "Program Control Access",
        "Primary Computer Algorithm"
      ],
      correct: 1
    },
    {
      question: "What is t-SNE?",
      options: [
        "A type of tea",
        "A dimensionality reduction technique",
        "A computer program",
        "A statistical test"
      ],
      correct: 1
    },
    {
      question: "What is LSTM?",
      options: [
        "Long Short-Term Memory",
        "Last System Time Module",
        "Linear System Transfer Method",
        "Logic System Test Module"
      ],
      correct: 0
    },
    {
      question: "What is RNN?",
      options: [
        "Regular Neural Network",
        "Recurrent Neural Network",
        "Rapid Neural Network",
        "Random Neural Network"
      ],
      correct: 1
    },
    {
      question: "What is CNN?",
      options: [
        "Computer Network News",
        "Convolutional Neural Network",
        "Control Network Node",
        "Central Neural Network"
      ],
      correct: 1
    },
    {
      question: "What is GAN?",
      options: [
        "General Access Network",
        "Generative Adversarial Network",
        "Global Area Network",
        "Graphics Animation Network"
      ],
      correct: 1
    },
    {
      question: "What is a tensor?",
      options: [
        "A muscle stretcher",
        "A multidimensional array",
        "A type of computer",
        "A programming language"
      ],
      correct: 1
    },
    {
      question: "What is batch processing?",
      options: [
        "Cooking in batches",
        "Processing data in groups",
        "Batch file creation",
        "Group work"
      ],
      correct: 1
    },
    {
      question: "What is epoch in machine learning?",
      options: [
        "A historical period",
        "One complete pass through the training data",
        "A type of algorithm",
        "A measurement unit"
      ],
      correct: 1
    },
    {
      question: "What is dropout in neural networks?",
      options: [
        "Leaving school",
        "A regularization technique",
        "Network failure",
        "Removing data"
      ],
      correct: 1
    },
    {
      question: "What is activation function?",
      options: [
        "Starting a computer",
        "A function that adds non-linearity",
        "Activating software",
        "Function keys"
      ],
      correct: 1
    },
    {
      question: "What is one-hot encoding?",
      options: [
        "Temperature coding",
        "Converting categorical variables to binary",
        "Hot key assignment",
        "Encoding heat data"
      ],
      correct: 1
    },
    {
      question: "What is sentiment analysis?",
      options: [
        "Analyzing feelings",
        "Determining opinion/emotion in text",
        "Market analysis",
        "User feedback"
      ],
      correct: 1
    },
    {
      question: "What is object detection?",
      options: [
        "Finding lost objects",
        "Identifying objects in images/video",
        "Metal detection",
        "Security scanning"
      ],
      correct: 1
    },
    {
      question: "What is speech recognition?",
      options: [
        "Hearing ability",
        "Converting spoken words to text",
        "Voice recording",
        "Sound detection"
      ],
      correct: 1
    },
    {
      question: "What is machine translation?",
      options: [
        "Moving machines",
        "Automated language translation",
        "Technical translation",
        "Manual translation"
      ],
      correct: 1
    }
  ];
  useEffect(() => {
    if (!showResults && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            calculateAndShowResults();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, showResults]);

  const calculateAndShowResults = () => {
    const totalQuestions = questions.length;
    const correctAnswers = Object.entries(answers).filter(
      ([qIndex, answer]) => questions[parseInt(qIndex)].correct === answer
    ).length;
    const score = (correctAnswers / totalQuestions) * 100;
    setFinalScore(score);
    setShowResults(true);
    onComplete(score);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const moveToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateAndShowResults();
    }
  };

  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Exam Complete!</h2>
          <p className="text-xl mb-4">Your Score: {finalScore.toFixed(1)}%</p>
          
          {finalScore >= 60 ? (
            <div>
              <p className="text-green-600 mb-6">Congratulations! You've passed the exam!</p>
              <button
                onClick={() => onComplete(finalScore)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                View Certificate
              </button>
            </div>
          ) : (
            <div>
              <p className="text-red-600 mb-6">Keep studying and try again when you're ready.</p>
              <button
                onClick={onBack}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Return to Course
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to course
        </button>
        <div className="text-right">
          <div className="text-xl font-bold mb-1">Final Exam</div>
          <div className="text-gray-600">Time Remaining: {formatTime(timeLeft)}</div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round((currentQuestion / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h3 className="text-xl font-medium mb-6">{questions[currentQuestion].question}</h3>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-300 ${
                answers[currentQuestion] === index
                  ? 'bg-blue-50 border-blue-300'
                  : 'hover:bg-gray-50 border-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={moveToNext}
            disabled={answers[currentQuestion] === undefined}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              answers[currentQuestion] === undefined
                ? 'bg-gray-100 text-gray-400'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Submit Exam' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalExam;