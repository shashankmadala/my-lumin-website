import { useState } from 'react';
import { Check, X, Trophy, ArrowRight, RefreshCcw, Target, PartyPopper } from 'lucide-react';
import InlineText from './InlineText';

// End-of-lesson practice quiz. One question at a time, instant feedback,
// explanations that teach. >= passScore marks the lesson complete.
export default function LessonQuiz({ questions, passScore = 70, onFinished, nextLabel = 'Continue', onNext }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const answered = selected !== null;

  const choose = (i) => {
    if (answered) return;
    setSelected(i);
  };

  const advance = () => {
    const newAnswers = [...answers, selected === q.correct];
    setAnswers(newAnswers);
    setSelected(null);
    if (current === questions.length - 1) {
      const score = Math.round((newAnswers.filter(Boolean).length / questions.length) * 100);
      setDone(true);
      if (onFinished) onFinished(score);
    } else {
      setCurrent(current + 1);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
  };

  if (done) {
    const correctCount = answers.filter(Boolean).length;
    const score = Math.round((correctCount / questions.length) * 100);
    const passed = score >= passScore;
    return (
      <div className="text-center py-8">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ${
          passed ? 'bg-green-100' : 'bg-amber-100'
        }`}>
          {passed
            ? <PartyPopper className="w-10 h-10 text-green-600" />
            : <Target className="w-10 h-10 text-amber-600" />}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {passed ? 'Lesson complete!' : 'Almost there!'}
        </h3>
        <p className="text-gray-600 mb-1">
          You got <span className="font-semibold text-gray-900">{correctCount} of {questions.length}</span> correct ({score}%).
        </p>
        <p className="text-sm text-gray-500 mb-8">
          {passed
            ? 'Great work — this lesson is marked complete.'
            : `Score ${passScore}% or higher to mark this lesson complete. Review the tricky parts and try again — retakes are unlimited.`}
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors"
          >
            <RefreshCcw className="w-4 h-4" /> Retake quiz
          </button>
          {onNext && (
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              {nextLabel} <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress dots */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <span className="font-semibold text-gray-900">Practice</span>
        </div>
        <div className="flex items-center gap-1.5">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i < answers.length
                  ? answers[i] ? 'w-2 bg-green-500' : 'w-2 bg-red-400'
                  : i === current ? 'w-6 bg-blue-500' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{current + 1} / {questions.length}</span>
      </div>

      <p className="text-lg font-medium text-gray-900 mb-5"><InlineText text={q.question} /></p>

      <div className="space-y-2.5 mb-5">
        {q.options.map((option, i) => {
          let cls = 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50';
          if (answered) {
            if (i === q.correct) cls = 'border-green-400 bg-green-50';
            else if (i === selected) cls = 'border-red-300 bg-red-50';
            else cls = 'border-gray-200 bg-white opacity-60';
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={answered}
              className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${cls}`}
            >
              <span className="text-gray-800">{option}</span>
              {answered && i === q.correct && <Check className="w-5 h-5 text-green-600 flex-shrink-0" />}
              {answered && i === selected && i !== q.correct && <X className="w-5 h-5 text-red-500 flex-shrink-0" />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className={`p-4 rounded-xl mb-5 text-sm leading-relaxed ${
          selected === q.correct ? 'bg-green-100/70 text-green-900' : 'bg-amber-100/70 text-amber-900'
        }`}>
          <p className="font-semibold mb-1">{selected === q.correct ? 'Correct!' : 'Not quite.'}</p>
          <p><InlineText text={q.explanation} /></p>
        </div>
      )}

      {answered && (
        <button
          onClick={advance}
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
        >
          {current === questions.length - 1 ? 'See results' : 'Next question'}
        </button>
      )}
    </div>
  );
}
