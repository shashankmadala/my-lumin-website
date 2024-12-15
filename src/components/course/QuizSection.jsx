import React, { useState } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

export function QuizSection({ lesson, progress, setProgress, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (questionIndex, answerIndex) => {
    if (answers[questionIndex] !== undefined) return;

    const newAnswers = {
      ...answers,
      [questionIndex]: answerIndex
    };
    setAnswers(newAnswers);
    setShowExplanation(true);

    if (questionIndex === lesson.quiz.questions.length - 1) {
      const correctAnswers = Object.entries(newAnswers).filter(
        ([qIndex, answer]) => lesson.quiz.questions[qIndex].correct === answer
      ).length;
      
      const score = (correctAnswers / lesson.quiz.questions.length) * 100;
      
      if (score >= 70) {
        setProgress(prev => ({
          ...prev,
          completedLessons: [...prev.completedLessons, lesson.id],
          quizScores: { ...prev.quizScores, [lesson.id]: score }
        }));
        setTimeout(onComplete, 2000);
      }
    }
  };

  const currentQ = lesson.quiz.questions[currentQuestion];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          Question {currentQuestion + 1} of {lesson.quiz.questions.length}
        </h3>
        <div className="text-sm text-gray-600">
          {Math.round((currentQuestion / lesson.quiz.questions.length) * 100)}% Complete
        </div>
      </div>

      <div className="p-6 bg-gray-50 rounded-xl">
        <h4 className="text-lg font-medium mb-4">{currentQ.question}</h4>
        <div className="space-y-3">
          {currentQ.options.map((option, index) => {
            const isAnswered = answers[currentQuestion] !== undefined;
            const isSelected = answers[currentQuestion] === index;
            const isCorrect = currentQ.correct === index;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion, index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  isAnswered
                    ? isSelected
                      ? isCorrect
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                      : isCorrect
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200'
                    : 'hover:bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isAnswered && (
                    isSelected ? (
                      isCorrect ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )
                    ) : isCorrect ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : null
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showExplanation && (
        <div className="p-4 bg-blue-50 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-blue-900">Explanation</p>
            <p className="text-blue-800">{currentQ.explanation}</p>
          </div>
        </div>
      )}

      {answers[currentQuestion] !== undefined && currentQuestion < lesson.quiz.questions.length - 1 && (
        <button
          onClick={() => {
            setCurrentQuestion(prev => prev + 1);
            setShowExplanation(false);
          }}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default QuizSection;