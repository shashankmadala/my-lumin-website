import { useState } from 'react';
import { Check, X, Lightbulb, RefreshCcw } from 'lucide-react';
import InlineText from './InlineText';

// Inline "Check your understanding" question inside a lesson article.
export default function Checkpoint({ question, options, correct, explanation, onAnswered }) {
  const [selected, setSelected] = useState(null);
  const answered = selected !== null;
  const isCorrect = selected === correct;

  const choose = (i) => {
    if (answered) return;
    setSelected(i);
    if (onAnswered) onAnswered(i === correct);
  };

  return (
    <div className="my-8 rounded-2xl border-2 border-indigo-100 bg-indigo-50/50 overflow-hidden">
      <div className="px-5 py-3 bg-indigo-100/70 flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-indigo-600" />
        <span className="font-semibold text-indigo-900 text-sm uppercase tracking-wide">
          Check your understanding
        </span>
      </div>
      <div className="p-5">
        <p className="font-medium text-gray-900 mb-4"><InlineText text={question} /></p>
        <div className="space-y-2">
          {options.map((option, i) => {
            let cls = 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/60';
            if (answered) {
              if (i === correct) cls = 'border-green-400 bg-green-50';
              else if (i === selected) cls = 'border-red-300 bg-red-50';
              else cls = 'border-gray-200 bg-white opacity-60';
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={answered}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${cls}`}
              >
                <span className="text-gray-800">{option}</span>
                {answered && i === correct && <Check className="w-5 h-5 text-green-600 flex-shrink-0" />}
                {answered && i === selected && i !== correct && <X className="w-5 h-5 text-red-500 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={`mt-4 p-4 rounded-xl text-sm leading-relaxed ${
            isCorrect ? 'bg-green-100/70 text-green-900' : 'bg-amber-100/70 text-amber-900'
          }`}>
            <p className="font-semibold mb-1">{isCorrect ? 'Correct!' : 'Not quite.'}</p>
            <p><InlineText text={explanation} /></p>
            {!isCorrect && (
              <button
                onClick={() => setSelected(null)}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-amber-900 underline underline-offset-2 hover:text-amber-700"
              >
                <RefreshCcw className="w-3.5 h-3.5" /> Try again
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
