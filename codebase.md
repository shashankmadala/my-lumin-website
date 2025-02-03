# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lumin AI</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

# package.json

```json
{
  "name": "my-lumin-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "html2canvas": "^1.4.1",
    "jspdf": "^2.5.2",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.53.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "vite": "^5.0.0"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

# public/images/ayur.png

This is a binary file of the type: Image

# public/images/lumin.png

This is a binary file of the type: Image

# public/images/shashank1.png

This is a binary file of the type: Image

# public/vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```

# src/App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src/App.jsx

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SummerProgram from './pages/SummerProgram.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Learn from './pages/Learn.jsx';
import Navigation from './components/Navigation.jsx';
import Founders from './pages/Founders.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/summer-program' element={<SummerProgram />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/founders' element={<Founders />} />
            <Route path='/learn' element={<Learn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
```

# src/assets/react.svg

This is a file of the type: SVG Image

# src/components/course/ArticleView.jsx

```jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ArticleView = ({ article, onContinueToQuiz }) => {
  const processContent = (text) => {
    // Split content by bullet points while preserving structure
    const sections = text.split('\n').reduce((acc, line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return acc;
      
      if (trimmedLine.startsWith('•')) {
        const lastSection = acc[acc.length - 1];
        if (lastSection && Array.isArray(lastSection.items)) {
          lastSection.items.push(trimmedLine.substring(1).trim());
          return acc;
        }
        return [...acc, { type: 'list', items: [trimmedLine.substring(1).trim()] }];
      }
      
      if (trimmedLine.endsWith(':')) {
        return [...acc, { type: 'header', content: trimmedLine.slice(0, -1) }];
      }
      
      return [...acc, { type: 'paragraph', content: trimmedLine }];
    }, []);

    return sections;
  };

  const sections = processContent(article);

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
      <div className="absolute top-1/4 -left-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
      <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"/>

      <article className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-gray-100">
        {/* Subtle corner decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-50 to-transparent rounded-tr-2xl -z-10"/>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-50 to-transparent rounded-bl-2xl -z-10"/>

        {sections.map((section, index) => {
          switch (section.type) {
            case 'header':
              return (
                <div key={index} className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0 relative">
                    {section.content}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"/>
                  </h2>
                </div>
              );
              
            case 'list':
              return (
                <div key={index} className="mb-6 last:mb-0">
                  <ul className="space-y-3">
                    {section.items.map((item, i) => {
                      if (item.endsWith(':')) {
                        return (
                          <li key={i} className="mt-6 first:mt-0">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {item.slice(0, -1)}
                            </h3>
                          </li>
                        );
                      }
                      
                      return (
                        <li key={i} className="flex items-start gap-3 pl-4 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300"/>
                          <span className="text-gray-600 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
              
            case 'paragraph':
              return (
                <div key={index} className={`relative ${index === 0 ? 'mb-8' : 'mb-4 last:mb-0'}`}>
                  {index === 0 && (
                    <div className="absolute -left-2 -right-2 top-0 h-full bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 opacity-30 rounded-lg -z-10"/>
                  )}
                  <p className={`text-gray-600 leading-relaxed relative ${
                    index === 0 ? 'text-lg p-4' : ''
                  }`}>
                    {section.content}
                  </p>
                </div>
              );
              
            default:
              return null;
          }
        })}
      </article>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={onContinueToQuiz}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Continue to Quiz
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ArticleView;
```

# src/components/course/Certificate.jsx

```jsx
import React, { useState, useRef } from 'react';
import { Download, ChevronLeft } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = ({ progress, onBack }) => {
  const [studentName, setStudentName] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const certificateRef = useRef(null);
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleSubmitName = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setIsEditing(false);
    }
  };

  const downloadCertificate = async () => {
    const certificate = certificateRef.current;
    const canvas = await html2canvas(certificate, {
      scale: 2,
      logging: false,
      useCORS: true
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`AI_Course_Certificate_${studentName.replace(/\s+/g, '_')}.pdf`);
  };

  if (isEditing) {
    return (
      <div className="max-w-md mx-auto mt-12">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Enter Your Name for the Certificate</h2>
          <form onSubmit={handleSubmitName}>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Generate Certificate
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to course
      </button>

      {/* Certificate */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div 
          ref={certificateRef}
          className="border-8 border-blue-100 rounded-xl p-12 relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-50 to-transparent rounded-full opacity-50" />
          
          <div className="text-center relative">
            <div className="text-4xl font-serif text-gray-900 mb-4">Certificate of Completion</div>
            <div className="text-xl text-gray-600 mb-8">AI Fundamentals</div>

            <div className="text-xl mb-2">This certifies that</div>
            <div className="text-3xl font-bold text-blue-600 mb-8">{studentName}</div>

            <div className="text-lg mb-8">
              has successfully completed the AI Fundamentals Course
            </div>

            <div className="text-gray-600 mb-12">{currentDate}</div>

            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="w-40 h-0.5 bg-gray-400 mb-2"></div>
                <div className="text-gray-600">Shashank Madala</div>
                <div className="text-sm text-gray-500">Co-Founder & Co-CEO</div>
              </div>
              <div className="text-center">
                <div className="w-40 h-0.5 bg-gray-400 mb-2"></div>
                <div className="text-gray-600">Ayur Munipalli</div>
                <div className="text-sm text-gray-500">Co-Founder & Co-CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button
          onClick={downloadCertificate}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Certificate
        </button>
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Edit Name
        </button>
      </div>
    </div>
  );
};

export default Certificate;
```

# src/components/course/FinalAssessment.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, AlertCircle, Check, X, Trophy } from 'lucide-react';

export function FinalAssessment({ onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const questions = [
    {
      question: "What is the primary goal of artificial intelligence?",
      options: [
        "To create intelligent machines that can perform human-like tasks",
        "To replace all human workers",
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
    // Add more questions here...
  ];

  const calculateScore = () => {
    const correctAnswers = Object.entries(answers).filter(
      ([qIndex, answer]) => questions[parseInt(qIndex)].correct === answer
    ).length;
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const handleAnswer = (answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 1000);
    } else {
      const score = calculateScore();
      setFinalScore(score);
      setShowResults(true);
      onComplete(score);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to course
        </button>
        <div className="text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      {!showResults ? (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Final Assessment</h2>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-medium">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => {
                const isAnswered = answers[currentQuestion] !== undefined;
                const isSelected = answers[currentQuestion] === index;
                const isCorrect = questions[currentQuestion].correct === index;

                return (
                  <button
                    key={index}
                    onClick={() => !isAnswered && handleAnswer(index)}
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
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Assessment Complete!</h2>
            <p className="text-gray-600">
              You scored {finalScore}% on the final assessment.
            </p>
          </div>

          {finalScore >= 50 ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800">
                Congratulations! You've qualified for the certificate.
              </p>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                Keep learning and try again to earn your certificate.
              </p>
            </div>
          )}

          <button
            onClick={onBack}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Return to Course
          </button>
        </div>
      )}
    </div>
  );


}
export default FinalAssessment;

```

# src/components/course/FinalExam.jsx

```jsx
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
```

# src/components/course/LessonView.jsx

```jsx
import React from 'react';
import { FileText, HelpCircle } from 'lucide-react';
import ArticleView from './ArticleView';
import QuizSection from './QuizSection';
import PatternGame from './PatternGame';

function LessonView({
  lesson,
  progress,
  setProgress,
  onBack,
  activeTab,
  setActiveTab
}) {
  const handleContinueToQuiz = () => {
    setActiveTab('quiz');
  };

  const handleGameComplete = (score) => {
    if (score > 0 && setProgress) {
      setProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lesson.id],
        quizScores: { ...prev.quizScores, [lesson.id]: Math.round(score) }
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="flex justify-between mb-8">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('article')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeTab === 'article' 
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            Article
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeTab === 'quiz'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            Quiz
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
          </div>
          
          {activeTab === 'article' ? (
            <div>
              {lesson.id === "1.3" ? (
                <>
                  {/* Introduction section of the article */}
                  <div className="mb-8">
                    <ArticleView 
                      article={lesson.article.split('Key Concepts')[0]} 
                      onContinueToQuiz={null}
                    />
                  </div>
                  
                  {/* Interactive Game Section */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">Practice Pattern Recognition</h2>
                    <div className="mb-6">
                      <p className="text-gray-600">Put your pattern recognition skills to the test with this interactive exercise. Try to identify the patterns and predict the next number in each sequence.</p>
                    </div>
                    <PatternGame onComplete={handleGameComplete} />
                  </div>

                  {/* Rest of the article content */}
                  <div className="mt-8">
                    <ArticleView 
                      article={"Key Concepts" + lesson.article.split('Key Concepts')[1]} 
                      onContinueToQuiz={handleContinueToQuiz}
                    />
                  </div>
                </>
              ) : (
                <ArticleView 
                  article={lesson.article} 
                  onContinueToQuiz={handleContinueToQuiz}
                />
              )}
            </div>
          ) : (
            <QuizSection
              lesson={lesson}
              progress={progress}
              setProgress={setProgress}
              onComplete={() => {
                setActiveTab('article');
                onBack();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonView;
```

# src/components/course/ModuleList.jsx

```jsx
import React from 'react';
import { ChevronDown, CheckCircle, Brain, PlayCircle } from 'lucide-react';

const ModuleList = ({ 
  modules, 
  progress, 
  activeModule, 
  setActiveModule, 
  setActiveLesson 
}) => {
  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Fundamentals</h1>
        <p className="text-xl text-gray-600">
          Master the fundamentals of artificial intelligence and machine learning
        </p>
      </div>

      {/* Module Grid */}
      <div className="grid gap-6">
        {modules.map((module) => {
          const moduleLessons = module.lessons.map(l => l.id);
          const completedCount = moduleLessons.filter(id => 
            progress.completedLessons.includes(id)
          ).length;
          const percentComplete = (completedCount / moduleLessons.length) * 100;

          return (
            <div 
              key={module.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    {percentComplete === 100 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">
                        Module {module.id}: {module.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-600">{module.description}</p>
                      <span className="text-sm text-gray-500">
                        {completedCount}/{moduleLessons.length} complete
                      </span>
                    </div>
                  </div>
                </div>

                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                  activeModule === module.id ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Lessons List */}
              <div className={`transition-all duration-300 ease-in-out ${
                activeModule === module.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-4 space-y-2">
                  {module.lessons.map((lesson) => {
                    const isCompleted = progress.completedLessons.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson)}
                        className="w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50"
                      >
                        <div className="w-5 h-5">
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <PlayCircle className="w-5 h-5 text-blue-500" />
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium">{lesson.title}</div>
                          <div className="text-sm text-gray-600">{lesson.duration}</div>
                        </div>
                        {progress.quizScores[lesson.id] && (
                          <div className="px-2 py-1 bg-green-100 rounded-md text-sm text-green-700">
                            {progress.quizScores[lesson.id]}%
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleList;
```

# src/components/course/PathView.jsx

```jsx
import React from 'react';
import { BookOpen, Check, Lock, Flag, Star, Trophy } from 'lucide-react';

const PathView = ({ modules, progress, setActiveLesson }) => {
  const isModuleUnlocked = (moduleIndex) => {
    if (moduleIndex === 0) return true;
    const prevModule = modules[moduleIndex - 1];
    return prevModule.lessons.every(lesson => progress.completedLessons.includes(lesson.id));
  };

  const isLessonUnlocked = (moduleIndex, lessonIndex) => {
    if (lessonIndex === 0) return isModuleUnlocked(moduleIndex);
    const prevLesson = modules[moduleIndex].lessons[lessonIndex - 1];
    return progress.completedLessons.includes(prevLesson.id);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-16">Your AI Learning Adventure</h1>

      {/* Start Point */}
      <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 relative">
        <Flag className="w-8 h-8 mb-2" />
        <h2 className="text-xl font-bold">Begin Your Journey</h2>
        <p>Start your AI learning adventure!</p>
        {/* Connector Line */}
        <div className="absolute h-8 w-1 bg-blue-200 left-1/2 -bottom-8 transform -translate-x-1/2" />
      </div>

      {/* Modules */}
      <div className="relative">
        {/* Main Path Line */}
        <div className="absolute left-8 top-0 w-1 h-full bg-blue-100" />
        
        <div className="space-y-6">
          {modules.map((module, moduleIndex) => {
            const isUnlocked = isModuleUnlocked(moduleIndex);
            
            return (
              <div key={module.id} className="relative">
                {/* Module Node */}
                <div className="absolute left-8 top-8 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${
                    isUnlocked ? 'bg-blue-500' : 'bg-gray-300'
                  } ring-4 ring-white`} />
                </div>

                {/* Module Card */}
                <div className={`ml-16 bg-white rounded-xl shadow-sm border-2 ${
                  isUnlocked ? 'border-blue-200' : 'border-gray-200'
                }`}>
                  {/* Module Header */}
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg">Module {moduleIndex + 1}: {module.title}</h3>
                  </div>

                  {/* Lessons */}
                  <div className="p-4 space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isCompleted = progress.completedLessons.includes(lesson.id);
                      const isUnlocked = isLessonUnlocked(moduleIndex, lessonIndex);
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => isUnlocked ? setActiveLesson(lesson) : null}
                          disabled={!isUnlocked}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                            isUnlocked 
                              ? 'hover:bg-blue-50' 
                              : 'opacity-50 cursor-not-allowed'
                          } ${
                            isCompleted 
                              ? 'bg-green-50' 
                              : 'bg-gray-50'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isCompleted 
                              ? 'bg-green-100' 
                              : isUnlocked 
                                ? 'bg-blue-100' 
                                : 'bg-gray-200'
                          }`}>
                            {isCompleted ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : !isUnlocked ? (
                              <Lock className="w-4 h-4 text-gray-400" />
                            ) : (
                              <BookOpen className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm">{lesson.title}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-2">
                              <span>{lesson.duration}</span>
                              {isCompleted && progress.quizScores[lesson.id] && (
                                <div className="flex items-center gap-1 text-yellow-600">
                                  <Star className="w-3 h-3" />
                                  <span>{progress.quizScores[lesson.id]}%</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Achievement */}
        <div className="mt-8 ml-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white relative">
          <div className="absolute left-[-3.5rem] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white" />
          </div>
          <Trophy className="w-8 h-8 mb-2" />
          <h3 className="text-xl font-bold">Final Achievement</h3>
          <p>Complete all modules and pass the final exam to earn your certificate!</p>
        </div>
      </div>
    </div>
  );
};

export default PathView;
```

# src/components/course/PatternGame.jsx

```jsx
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
```

# src/components/course/ProgressTracker.jsx

```jsx
import React from 'react';
import { Trophy, Flame, Target, Brain, BookOpen } from 'lucide-react';

const ProgressTracker = ({ progress, totalLessons }) => {
  if (!progress || !progress.completedLessons) {
    return null;
  }

  const percentComplete = totalLessons > 0 
    ? Math.round((progress.completedLessons.length / totalLessons) * 100)
    : 0;

  const stats = [
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      label: "Progress",
      value: `${percentComplete}%`,
      detail: `${progress.completedLessons.length}/${totalLessons} lessons`
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      label: "Streak",
      value: progress.streak || 0,
      detail: "days"
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      label: "Quiz Avg",
      value: progress.quizScores ? 
        Object.values(progress.quizScores).length > 0
          ? Math.round(
              Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / 
              Object.values(progress.quizScores).length
            )
          : 0
        : 0,
      detail: "score"
    },
    {
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
      label: "Badges",
      value: progress.badges ? progress.badges.length : 0,
      detail: "earned"
    }
  ];

  return (
    <div className="mb-12 relative">
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-4 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="bg-white rounded-2xl p-6 shadow-lg relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl" />
        
        <div className="relative">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Course Progress</h3>
              <span className="text-sm text-gray-500">{percentComplete}% Complete</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-in-out"
                style={{ width: `${percentComplete}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  {stat.icon}
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.detail}</div>
              </div>
            ))}
          </div>

          {progress.lastAccessed && (
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <BookOpen className="w-4 h-4" />
              Last activity: {new Date(progress.lastAccessed).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
```

# src/components/course/QuizSection.jsx

```jsx
import React, { useState } from 'react';
import { Check, X, AlertCircle, Trophy, ArrowRight, RefreshCcw } from 'lucide-react';

export function QuizSection({ lesson, progress, setProgress, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

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
      
      const score = Math.round((correctAnswers / lesson.quiz.questions.length) * 100);
      setQuizScore(score);
      
      setProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lesson.id],
        quizScores: { ...prev.quizScores, [lesson.id]: score }
      }));
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
          <Trophy className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold">Quiz Complete!</h2>
        <p className="text-xl">Your Score: {quizScore}%</p>
        
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => {
              setAnswers({});
              setCurrentQuestion(0);
              setShowResults(false);
              setShowExplanation(false);
            }}
            className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            <RefreshCcw className="w-5 h-5" />
            Retake Quiz
          </button>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Next Lesson
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

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
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default QuizSection;
```

# src/components/interactive/AiConceptExplorer.jsx

```jsx
import React, { useState } from 'react';
import { Brain, Bot, ChevronRight, Lightbulb } from 'lucide-react';

const AiConceptExplorer = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [interactionCount, setInteractionCount] = useState(0);

  const concepts = [
    {
      id: 'reasoning',
      title: 'AI Reasoning',
      icon: <Brain className="w-6 h-6" />,
      examples: [
        { input: 'Should I bring an umbrella?', 
          thinking: ['Check weather data', 'Analyze precipitation probability', 'Consider time of day'],
          output: 'Yes, 80% chance of rain this afternoon' 
        },
        { input: 'Plan my study schedule', 
          thinking: ['Review available time slots', 'Consider subject priorities', 'Account for breaks'],
          output: 'Recommended 2-hour blocks with 15-minute breaks' 
        }
      ]
    },
    {
      id: 'learning',
      title: 'Machine Learning',
      icon: <Bot className="w-6 h-6" />,
      examples: [
        { input: 'Cat vs Dog Images', 
          thinking: ['Analyze shapes', 'Identify features', 'Compare patterns'],
          output: 'Image classified as "Cat" with 95% confidence' 
        },
        { input: 'Email Classification', 
          thinking: ['Scan content', 'Check sender history', 'Evaluate patterns'],
          output: 'Email categorized as "Important"' 
        }
      ]
    },
    {
      id: 'adaptation',
      title: 'AI Adaptation',
      icon: <Lightbulb className="w-6 h-6" />,
      examples: [
        { input: 'User prefers dark mode', 
          thinking: ['Record preference', 'Update UI settings', 'Apply to all screens'],
          output: 'Theme automatically switches to dark mode at sunset' 
        },
        { input: 'User often orders pizza on Fridays', 
          thinking: ['Analyze ordering patterns', 'Identify preferences', 'Note timing'],
          output: 'Suggestion: "Order your usual pizza for Friday night?"' 
        }
      ]
    }
  ];

  const handleConceptClick = (concept) => {
    setSelectedConcept(concept);
    setInteractionCount(prev => prev + 1);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Explore AI Concepts</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            onClick={() => handleConceptClick(concept)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              selectedConcept?.id === concept.id
                ? 'bg-blue-50 border-2 border-blue-200'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                {concept.icon}
              </div>
              <span className="font-medium">{concept.title}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedConcept && (
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h4 className="font-medium mb-4">Example Scenarios:</h4>
          {selectedConcept.examples.map((example, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Input:</span>
                <span className="text-gray-600">{example.input}</span>
              </div>
              
              <div className="ml-4 mb-2">
                <span className="text-sm text-gray-500">AI Thinking Process:</span>
                <div className="ml-2">
                  {example.thinking.map((thought, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4" />
                      {thought}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Output:</span>
                <span className="text-blue-600">{example.output}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {interactionCount >= 3 && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg text-green-700">
          <p className="font-medium">Great exploration! You've discovered how AI:</p>
          <ul className="ml-4 mt-2 list-disc">
            <li>Processes information systematically</li>
            <li>Uses data to make decisions</li>
            <li>Adapts to patterns and preferences</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AiConceptExplorer;
```

# src/components/interactive/AiDailyExplorer.jsx

```jsx
import React, { useState } from 'react';
import { Home, Phone, ShoppingBag, Music, Camera, MessageCircle } from 'lucide-react';

const AiDailyExplorer = () => {
  const [selectedScene, setSelectedScene] = useState(null);
  const [discoveredAI, setDiscoveredAI] = useState([]);
  const [feedback, setFeedback] = useState('');

  const scenes = [
    {
      id: 'morning',
      title: 'Morning Routine',
      icon: <Home className="w-6 h-6" />,
      items: [
        {
          name: 'Smart Speaker',
          aiFeatures: ['Voice Recognition', 'Natural Language Processing', 'Personalized Recommendations'],
          location: { x: 30, y: 40 }
        },
        {
          name: 'Smart Thermostat',
          aiFeatures: ['Learning Patterns', 'Energy Optimization', 'Automated Adjustments'],
          location: { x: 70, y: 60 }
        },
        {
          name: 'Coffee Maker',
          aiFeatures: ['Schedule Learning', 'Usage Pattern Recognition'],
          location: { x: 50, y: 30 }
        }
      ]
    },
    {
      id: 'commute',
      title: 'Daily Commute',
      icon: <Phone className="w-6 h-6" />,
      items: [
        {
          name: 'Navigation App',
          aiFeatures: ['Route Optimization', 'Traffic Prediction', 'ETA Calculation'],
          location: { x: 40, y: 50 }
        },
        {
          name: 'Music App',
          aiFeatures: ['Song Recommendations', 'Playlist Generation', 'Mood Detection'],
          location: { x: 60, y: 30 }
        }
      ]
    },
    {
      id: 'shopping',
      title: 'Shopping',
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        {
          name: 'Online Store',
          aiFeatures: ['Product Recommendations', 'Search Optimization', 'Price Tracking'],
          location: { x: 45, y: 45 }
        },
        {
          name: 'Shopping Assistant',
          aiFeatures: ['Size Recommendations', 'Style Matching', 'Inventory Prediction'],
          location: { x: 55, y: 65 }
        }
      ]
    }
  ];

  const handleItemClick = (item) => {
    if (!discoveredAI.includes(item.name)) {
      setDiscoveredAI([...discoveredAI, item.name]);
      setFeedback(`Great find! ${item.name} uses AI for: ${item.aiFeatures.join(', ')}`);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Spot AI in Your Daily Life</h3>

      {/* Scene Selection */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              selectedScene?.id === scene.id
                ? 'bg-purple-50 border-2 border-purple-200'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                {scene.icon}
              </div>
              <span className="font-medium">{scene.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Interactive Scene */}
      {selectedScene && (
        <div className="relative h-96 bg-gray-50 rounded-xl overflow-hidden">
          {selectedScene.items.map((item) => (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              style={{
                position: 'absolute',
                left: `${item.location.x}%`,
                top: `${item.location.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                discoveredAI.includes(item.name)
                  ? 'bg-green-100 ring-4 ring-green-200'
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
            >
              {discoveredAI.includes(item.name) ? (
                <Check className="w-6 h-6 text-green-600" />
              ) : (
                <Search className="w-6 h-6 text-purple-600" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <p className="text-purple-700">{feedback}</p>
        </div>
      )}

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">AI Features Discovered</span>
          <span className="text-sm font-medium">{discoveredAI.length} / {
            selectedScene ? selectedScene.items.length : '0'
          }</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className="h-full bg-purple-600 rounded-full transition-all duration-300"
            style={{
              width: selectedScene
                ? `${(discoveredAI.length / selectedScene.items.length) * 100}%`
                : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AiDailyExplorer;
```

# src/components/interactive/AISimulator.jsx

```jsx
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
```

# src/components/interactive/DecisionTreeBuilder.jsx

```jsx
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
```

# src/components/interactive/LearningComparison.jsx

```jsx
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
```

# src/components/interactive/MLTrainingGame.jsx

```jsx
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
```

# src/components/Navigation.jsx

```jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const links = [
  { to: '/', text: 'Home', id: 'home' },
  {
    text: 'About',
    id: 'about',
    dropdown: [
      { to: '/founders', text: 'Founders', id: 'founders' },
    ]
  },
  { to: '/summer-program', text: 'Summer Program', id: 'summer' },
  { to: '/learn', text: 'Learn', id: 'learn' },
  { to: '/contact-us', text: 'Contact', id: 'contact' }
];

export default function Navigation() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (linkId) => {
    setOpenDropdown(openDropdown === linkId ? null : linkId);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 relative overflow-hidden">
                <img 
                  src="/images/lumin.png" 
                  alt="Lumin AI Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Lumin AI
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex ml-8 gap-6">
            {links.map((link) => (
              <div
                key={link.id}
                className="relative flex items-center h-16"
                ref={link.dropdown ? dropdownRef : null}
              >
                {link.dropdown ? (
                  <div className="h-full flex items-center">
                    <button 
                      onClick={() => handleDropdownClick(link.id)}
                      className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 px-2"
                    >
                      {link.text}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === link.id ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {openDropdown === link.id && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.id}
                            to={item.to}
                            className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={link.to}
                    className="flex items-center h-full px-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    {link.text}
                    <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

# src/data/courseData.js

```js
// src/data/courseData.js

import module1 from './modules/module1.js';
import module2 from './modules/module2.js';
import module3 from './modules/module3.js';
import module4 from './modules/module4.js';
import module5 from './modules/module5.js';
import module6 from './modules/module6.js';


const courseData = {
  title: "AI Fundamentals",
  description: "Master the fundamentals of artificial intelligence and machine learning",
  modules: [module1,module2,module3,module4,module5,module6]
};

export default courseData;
```

# src/data/modules/module1.js

```js
// src/data/modules/module1.js

const module1 = {
  id: 1,
  title: "Introduction to AI",
  description: "Understanding artificial intelligence fundamentals",
  prerequisites: [],
  icon: "Brain",
  themeColor: "blue",
  
  interactiveFeatures: {
    virtualLab: {
      enabled: true,
      components: {
        aiSimulator: {
          type: "interactive",
          features: ["decision-making", "pattern-recognition", "learning"]
        },
        conceptMap: {
          type: "dragAndDrop",
          elements: ["core-concepts", "applications", "future"]
        }
      }
    }
  },

  lessons: [
    {
      id: "1.1",
      title: "What is Artificial Intelligence?",
      duration: "30 min",
      interactive: {
        primaryDemo: {
          type: "aiSimulation",
          title: "AI Decision Making",
          interface: {
            input: {
              type: "imageUpload",
              accept: "image/*",
              placeholder: "Upload an image to see AI in action"
            },
            process: {
              visualizer: {
                type: "networkGraph",
                animate: true,
                showSteps: true
              }
            },
            output: {
              display: "results",
              showConfidence: true
            }
          }
        },
        conceptExplorer: {
          type: "interactiveMap",
          title: "AI Concepts Explorer",
          elements: [
            {
              id: "narrow-ai",
              title: "Narrow AI",
              examples: ["Siri", "Chess AI", "Image Recognition"],
              interactive: true
            },
            {
              id: "general-ai",
              title: "General AI",
              description: "Human-level intelligence",
              status: "theoretical"
            },
            {
              id: "super-ai",
              title: "Superintelligent AI",
              description: "Beyond human capabilities",
              status: "future"
            }
          ]
        }
      },
      article: `Artificial Intelligence (AI) is the development of computer systems capable of performing tasks that typically require human intelligence. These tasks include reasoning, problem-solving, understanding natural language, recognizing patterns, and adapting to new situations.

Breaking Down AI
At its core, AI is built on a few key ideas:

Algorithms: Step-by-step instructions that tell a computer how to solve a problem. In AI, these algorithms are designed to adapt and improve over time by learning from data.

Data: Data is the fuel for AI. Machines learn patterns and make predictions based on the data they are fed. The more data, the better AI systems can perform.

Learning: AI systems can "learn" from examples. For example, if you show an AI hundreds of pictures of cats and dogs, it can learn to tell the difference between them.

Types of AI:
1. Narrow AI (Weak AI): Designed for specific tasks
2. General AI (Strong AI): Theoretical human-level intelligence
3. Superintelligent AI: Beyond human capabilities

Core Subfields:
• Machine Learning (ML)
• Natural Language Processing (NLP)
• Computer Vision
• Robotics`,
      quiz: {
        questions: [
          {
            question: "What is the primary purpose of Artificial Intelligence?",
            options: [
              "To perform tasks that typically require human intelligence",
              "To replace all human jobs",
              "To store large amounts of data",
              "To make computers run faster"
            ],
            correct: 0,
            explanation: "AI's primary purpose is to develop systems capable of performing tasks that traditionally require human intelligence, such as problem-solving, pattern recognition, and language understanding."
          },
          {
            question: "Which of these is NOT one of the main types of AI discussed?",
            options: [
              "Narrow AI",
              "General AI",
              "Quantum AI",
              "Superintelligent AI"
            ],
            correct: 2,
            explanation: "The three main types of AI discussed are Narrow AI (Weak AI), General AI (Strong AI), and Superintelligent AI. Quantum AI was not mentioned as one of the main types."
          }
        ],
        interactiveQuiz: {
          enabled: true,
          features: {
            conceptMapping: true,
            instantFeedback: true,
            visualExplanations: true
          }
        }
      }
    },
    {
      id: "1.2",
      title: "Finding AI in Everyday Life",
      duration: "35 min",
      interactive: {
        virtualEnvironment: {
          type: "3dExploration",
          title: "AI in Your World",
          scenes: [
            {
              id: "smart-home",
              type: "interactive",
              devices: [
                {
                  id: "smart-speaker",
                  type: "voice-assistant",
                  interactions: ["command", "response"],
                  demo: true
                },
                {
                  id: "smart-thermostat",
                  type: "learning-system",
                  features: ["pattern-recognition", "automation"],
                  demo: true
                }
              ]
            },
            {
              id: "smartphone",
              type: "interactive",
              features: [
                {
                  id: "text-prediction",
                  type: "nlp",
                  demo: true
                },
                {
                  id: "face-recognition",
                  type: "computer-vision",
                  demo: true
                }
              ]
            }
          ]
        },
        aiSpotter: {
          type: "game",
          title: "Spot the AI",
          challenges: [
            {
              scene: "daily-life",
              objective: "Find 5 AI applications",
              hints: true
            },
            {
              scene: "technology",
              objective: "Identify AI features",
              hints: true
            }
          ]
        }
      },
      article: `Artificial Intelligence (AI) is not just a futuristic concept; it's already a part of our daily lives, often in ways we don't even notice. From the apps on your phone to the way your favorite websites work, AI is everywhere.

Everyday Applications of AI:

1. Smartphones:
• AI helps predict the next word as you type
• Virtual assistants understand voice commands
• Facial recognition uses AI to unlock your phone securely

2. Streaming Services:
• Netflix, Spotify, and YouTube use AI for recommendations
• AI analyzes viewing habits for content suggestions
• Personalized playlists based on your preferences

3. Online Shopping:
• Product recommendations based on browsing history
• Chatbots for customer service
• Price optimization and inventory management

4. Social Media:
• Personalized content feeds
• Automatic photo tagging
• Content moderation

5. Transportation:
• AI-powered navigation
• Ride-sharing optimization
• Self-driving vehicle systems

6. Healthcare:
• Medical image analysis
• Health monitoring
• Disease prediction

7. Gaming:
• Adaptive gameplay
• NPC behavior
• Procedural generation`,
      quiz: {
        questions: [
          {
            question: "Which of these is NOT a common application of AI in smartphones?",
            options: [
              "Predictive text",
              "Voice assistants",
              "Battery manufacturing",
              "Facial recognition"
            ],
            correct: 2,
            explanation: "While AI is used in many smartphone features like predictive text, voice assistants, and facial recognition, battery manufacturing is primarily a physical production process, not an AI application."
          },
          {
            question: "How does AI improve streaming services?",
            options: [
              "By creating new content",
              "By providing personalized recommendations",
              "By increasing internet speed",
              "By reducing subscription costs"
            ],
            correct: 1,
            explanation: "AI primarily improves streaming services by analyzing user behavior and providing personalized content recommendations, helping users discover content they might enjoy."
          }
        ],
        interactiveElements: {
          virtualAssistant: {
            enabled: true,
            features: ["voice-control", "real-time-response"]
          },
          aiExplorer: {
            type: "interactive-demo",
            scenarios: ["smart-home", "mobile", "online"]
          }
        }
      }
    },
    {
      id: "1.3",
      title: "Simple Pattern Recognition Activities",
      duration: "40 min",
      interactive: {
        patternGame: {
          type: "interactive",
          title: "Pattern Detective",
          description: "Test your pattern recognition skills",
          component: "PatternGame"
        },
        practicalExercises: {
          type: "hands-on",
          activities: [
            {
              id: "pattern-analysis",
              type: "exercise",
              title: "Pattern Analysis",
              task: "Identify and explain patterns"
            }
          ]
        }
      },
      article: `Pattern recognition is one of the simplest and most important concepts in Artificial Intelligence (AI). It involves identifying trends, similarities, or structures in data—skills that both humans and machines rely on to make sense of the world.
    
    What Is Pattern Recognition?
    Pattern recognition is about finding order in what appears to be random or chaotic. For example, when you look at these numbers: 2, 4, 6, 8, you quickly notice they increase by 2 each time. This is a simple pattern that both humans and AI can learn to identify.
    
    Key Concepts in Pattern Recognition:
    
    1. Sequential Patterns:
    • Number sequences
    • Time series data
    • Repeating elements
    • Progressive changes
    
    2. Visual Patterns:
    • Shapes and geometries
    • Color sequences
    • Spatial arrangements
    • Recurring motifs
    
    3. Logical Patterns:
    • Rule-based sequences
    • Cause and effect
    • If-then relationships
    • Decision trees
    
    Why Is Pattern Recognition Important in AI?
    Pattern recognition enables AI systems to:
    • Classify Data: Organizing information into categories
    • Make Predictions: Forecasting future values or events
    • Detect Anomalies: Identifying unusual patterns
    • Learn from Examples: Improving performance through experience
    
    Real-World Applications:
    1. Image Recognition
    • Face detection in photos
    • Object identification
    • Medical image analysis
    
    2. Speech Recognition
    • Voice commands
    • Language translation
    • Audio transcription
    
    3. Behavior Analysis
    • Customer purchasing patterns
    • Traffic flow prediction
    • Financial market trends`,
      quiz: {
        questions: [
          {
            question: "What is the main purpose of pattern recognition in AI?",
            options: [
              "To identify trends and structures in data",
              "To create new patterns",
              "To store information",
              "To process calculations"
            ],
            correct: 0,
            explanation: "Pattern recognition in AI is primarily used to identify and understand trends, similarities, and structures within data, enabling machines to learn from examples."
          },
          {
            question: "Which type of pattern involves progressive numerical changes?",
            options: [
              "Visual patterns",
              "Sequential patterns",
              "Random patterns",
              "Static patterns"
            ],
            correct: 1,
            explanation: "Sequential patterns involve progressive changes in a series, such as numerical sequences that follow a specific rule."
          },
          {
            question: "How does pattern recognition help in AI predictions?",
            options: [
              "By storing more data",
              "By running faster calculations",
              "By identifying trends to forecast future values",
              "By creating random patterns"
            ],
            correct: 2,
            explanation: "Pattern recognition helps AI make predictions by identifying trends in existing data, which can then be used to forecast future values or events."
          }
        ]
      }
    },
    {
      id: "1.4",
      title: "Basic Machine Learning Concepts Through Games",
      duration: "45 min",
      interactive: {
        mlPlayground: {
          type: "sandbox",
          title: "Machine Learning Lab",
          experiments: [
            {
              id: "virtual-pet",
              type: "reinforcement",
              title: "Train Your AI Pet",
              features: {
                commands: ["sit", "stay", "fetch"],
                feedback: true,
                learning: true
              }
            },
            {
              id: "image-classifier",
              type: "supervised",
              title: "Image Detective",
              features: {
                upload: true,
                train: true,
                test: true
              }
            }
          ]
        },
        teachableMachine: {
          type: "hands-on",
          features: [
            {
              id: "image-model",
              input: "camera",
              output: "classification"
            },
            {
              id: "sound-model",
              input: "microphone",
              output: "recognition"
            }
          ]
        }
      },
      article: `Machine Learning (ML) is one of the most exciting areas of Artificial Intelligence (AI). It enables computers to learn from data and improve their performance without being explicitly programmed.

What Is Machine Learning?
At its core, machine learning involves three key steps:
1. Training
2. Testing
3. Improving

Types of Machine Learning:
1. Supervised Learning:
   • Learning from labeled data
   • Classification tasks
   • Prediction tasks

2. Unsupervised Learning:
   • Finding patterns in unlabeled data
   • Grouping similar items
   • Discovering structures

3. Reinforcement Learning:
   • Learning through trial and error
   • Reward-based improvement
   • Strategy development`,
      quiz: {
        questions: [
          {
            question: "What are the three main steps in machine learning?",
            options: [
              "Training, Testing, Improving",
              "Writing, Reading, Running",
              "Coding, Testing, Deploying",
              "Planning, Building, Testing"
            ],
            correct: 0,
            explanation: "The three main steps in machine learning are Training (learning from data), Testing (verifying accuracy), and Improving (refining the model based on results)."
          },
          {
            question: "Which type of machine learning uses labeled data?",
            options: [
              "Unsupervised Learning",
              "Supervised Learning",
              "Reinforcement Learning",
              "Transfer Learning"
            ],
            correct: 1,
            explanation: "Supervised learning uses labeled data where the correct outputs are known during training, allowing the system to learn from examples with known answers."
          }
        ],
        practicalExercises: {
          virtualLab: {
            enabled: true,
            experiments: ["classification", "clustering", "reinforcement"],
            difficulty: "beginner"
          }
        }
      }
    }
  ],

  progressTracking: {
    enabled: true,
    features: {
      lessonProgress: true,
      quizScores: true,
      interactiveCompletion: true
    }
  },

  gamification: {
    enabled: true,
    elements: {
      badges: [
        {
          id: "ai-explorer",
          title: "AI Explorer",
          condition: "Complete first lesson"
        },
        {
          id: "pattern-master",
          title: "Pattern Master",
          condition: "Perfect score on pattern recognition"
        }
      ],
      achievements: true,
      leaderboard: false
    }
  }
};

export default module1;
```

# src/data/modules/module2.js

```js
// src/data/modules/module2.js

const module2 = {
    id: 2,
    title: "Machine Learning Fundamentals",
    description: "Explore core machine learning concepts and techniques",
    prerequisites: [1],
    icon: "Database",
    themeColor: "purple",
  
    interactiveFeatures: {
      dataLab: {
        enabled: true,
        components: {
          dataVisualizer: {
            type: "interactive",
            features: ["data-exploration", "pattern-analysis", "visualization"]
          },
          experimentStation: {
            type: "hands-on",
            tools: ["data-collection", "labeling", "testing"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "2.1",
        title: "Introduction to Training Data",
        duration: "35 min",
        interactive: {
          dataCollector: {
            type: "interactive",
            title: "Build Your Dataset",
            features: {
              collection: {
                tools: ["image-upload", "text-input", "sensor-data"],
                guidance: true
              },
              labeling: {
                interface: "drag-drop",
                categories: ["positive", "negative", "neutral"]
              },
              visualization: {
                charts: ["distribution", "correlation", "timeline"],
                realTime: true
              }
            }
          },
          dataQualityChecker: {
            type: "tool",
            features: [
              {
                id: "bias-detector",
                name: "Bias Checker",
                visualization: true
              },
              {
                id: "quality-metrics",
                name: "Data Quality Score",
                realTime: true
              }
            ]
          },
          practicalExercises: {
            type: "hands-on",
            activities: [
              {
                id: "fruit-classifier",
                title: "Fruit Classification Dataset",
                steps: [
                  "Collect fruit images",
                  "Label dataset",
                  "Test quality",
                  "Improve data"
                ]
              },
              {
                id: "weather-predictor",
                title: "Weather Prediction Data",
                dataTypes: ["temperature", "humidity", "pressure"]
              }
            ]
          }
        },
        article: `In the world of Artificial Intelligence (AI) and Machine Learning (ML), training data is like the teacher in a classroom. It provides the examples and information that AI systems need to learn and improve.
  
  What Is Training Data?
  Training data is the information that we give to an AI system so it can learn how to perform a specific task. Think of it as a collection of examples that teach the system what to do. For example:
  • If you're teaching an AI to recognize cats and dogs, the training data would include many images of cats and dogs, each labeled correctly.
  • If you're building a system to predict the weather, the training data might include past weather conditions like temperature, humidity, and rainfall.
  
  Why Is Training Data Important?
  AI systems learn by finding patterns in the training data. The quality and quantity of this data directly affect how well the AI performs. Here's why:
  • Accuracy: High-quality, accurate data helps the AI make better predictions or decisions.
  • Diversity: Diverse data ensures the AI can handle different situations.
  • Volume: Large datasets provide more examples for the AI to learn from.
  
  How Training Data Works:
  1. Collecting Data: Gather data that represents your problem
  2. Labeling Data: Add correct answers to your data
  3. Feeding Data: Let the AI analyze the patterns
  4. Testing & Improving: Verify and enhance accuracy`,
        quiz: {
          questions: [
            {
              question: "Why is training data important for AI systems?",
              options: [
                "To help AI systems learn patterns and improve accuracy",
                "To make computers run faster",
                "To store information permanently",
                "To replace human workers"
              ],
              correct: 0,
              explanation: "Training data is essential because it provides examples that help AI systems learn patterns and improve their accuracy in making predictions or decisions."
            },
            {
              question: "What is NOT a key aspect of training data quality?",
              options: [
                "Accuracy",
                "Diversity",
                "Speed of collection",
                "Volume"
              ],
              correct: 2,
              explanation: "While accuracy, diversity, and volume are crucial aspects of training data quality, the speed of collection is not a primary factor in determining data quality."
            }
          ],
          interactiveQuiz: {
            type: "data-quality-assessment",
            tasks: [
              {
                type: "evaluation",
                data: "sample-dataset",
                goal: "Identify quality issues"
              },
              {
                type: "improvement",
                task: "Suggest improvements",
                options: ["clean", "augment", "balance"]
              }
            ]
          }
        }
      },
      {
        id: "2.2",
        title: "Pattern Matching Exercises",
        duration: "40 min",
        interactive: {
          patternMatcher: {
            type: "game",
            title: "Pattern Detective",
            activities: [
              {
                id: "sequence-finder",
                type: "numeric",
                patterns: [
                  {
                    sequence: [2, 4, 6, 8],
                    difficulty: "easy",
                    hints: true
                  },
                  {
                    sequence: [1, 3, 6, 10, 15],
                    difficulty: "medium",
                    hints: true
                  }
                ]
              },
              {
                id: "visual-patterns",
                type: "image",
                sets: [
                  {
                    theme: "shapes",
                    elements: ["circle", "square", "triangle"],
                    rules: ["color", "size", "rotation"]
                  },
                  {
                    theme: "symbols",
                    elements: ["emoji", "icons", "characters"],
                    rules: ["sequence", "grouping"]
                  }
                ]
              }
            ]
          },
          visualizer: {
            type: "interactive",
            tools: [
              {
                id: "pattern-highlight",
                type: "overlay",
                features: ["highlight", "annotate", "explain"]
              },
              {
                id: "pattern-analyzer",
                type: "analysis",
                metrics: ["frequency", "correlation", "similarity"]
              }
            ]
          }
        },
        article: `Pattern matching is a foundational skill in Artificial Intelligence (AI). It involves identifying trends, similarities, or structures in data.
  
  What Is Pattern Matching?
  Pattern matching is the process of finding similarities or consistent arrangements in data. For example:
  • Text Patterns: Recognizing similar greetings or phrases
  • Visual Patterns: Identifying common features in images
  • Numerical Patterns: Detecting trends in data sequences
  
  Why Is Pattern Matching Important?
  Pattern matching helps AI systems:
  • Classify Data
  • Predict Outcomes
  • Detect Anomalies
  • Enhance Decision-Making
  
  How AI Matches Patterns:
  1. Feature Extraction
  2. Similarity Metrics
  3. Classification Models
  4. Pattern Recognition`,
        quiz: {
          questions: [
            {
              question: "What is the primary purpose of pattern matching in AI?",
              options: [
                "To find similarities and structures in data",
                "To create new patterns",
                "To store information",
                "To speed up computers"
              ],
              correct: 0,
              explanation: "Pattern matching in AI is primarily used to identify similarities and structures in data, enabling systems to recognize and learn from patterns."
            },
            {
              question: "Which is NOT a common application of pattern matching?",
              options: [
                "Image recognition",
                "Text analysis",
                "Data storage",
                "Fraud detection"
              ],
              correct: 2,
              explanation: "While pattern matching is used in image recognition, text analysis, and fraud detection, data storage is not a pattern matching application."
            }
          ],
          practicalExercise: {
            type: "interactive-patterns",
            tasks: [
              {
                type: "sequence",
                data: [1, 3, 5, "?"],
                goal: "Complete the sequence"
              },
              {
                type: "visual",
                patterns: ["🔵", "🔴", "🔵", "?"],
                goal: "Predict next symbol"
              }
            ]
          }
        }
      },
      {
        id: "2.3",
        title: "Simple Decision Trees",
        duration: "35 min",
        interactive: {
          treeBuilder: {
            type: "interactive",
            title: "Decision Tree Constructor",
            features: {
              builder: {
                type: "drag-drop",
                elements: ["nodes", "branches", "leaves"],
                validation: true
              },
              simulator: {
                type: "live",
                data: "sample-scenarios",
                visualization: true
              }
            },
            exercises: [
              {
                id: "weather-tree",
                scenario: "Weather Activity Planner",
                variables: ["temperature", "precipitation", "wind"],
                outcomes: ["indoor", "outdoor", "reschedule"]
              },
              {
                id: "pet-classifier",
                scenario: "Pet Species Identifier",
                features: ["size", "fur", "sound"],
                outcomes: ["dog", "cat", "bird"]
              }
            ]
          },
          treeVisualizer: {
            type: "animation",
            features: [
              "path-highlighting",
              "decision-explanation",
              "performance-metrics"
            ]
          }
        },
        article: `A decision tree is a type of algorithm used in AI and Machine Learning to make decisions based on a series of questions.
  
  What Is a Decision Tree?
  Components:
  • Root Node: Starting question
  • Branches: Possible answers
  • Leaves: Final decisions
  
  Why Are Decision Trees Important?
  • Easy to Understand
  • Work with Various Data Types
  • Flexible Applications
  
  How Decision Trees Work:
  1. Splitting Data
  2. Creating Branches
  3. Making Decisions
  4. Evaluating Results
  
  Applications:
  • Healthcare Diagnosis
  • Financial Decisions
  • Product Recommendations
  • Game AI Behavior`,
        quiz: {
          questions: [
            {
              question: "What is the main component at the top of a decision tree?",
              options: [
                "Root node",
                "Leaf",
                "Branch",
                "Decision"
              ],
              correct: 0,
              explanation: "The root node is the main component at the top of a decision tree, representing the first question or decision point."
            },
            {
              question: "Which is NOT a benefit of decision trees?",
              options: [
                "Easy to understand",
                "Works with various data types",
                "Always 100% accurate",
                "Flexible applications"
              ],
              correct: 2,
              explanation: "While decision trees have many benefits, being always 100% accurate is not one of them. They can make mistakes and may need refinement."
            }
          ],
          practicalExercise: {
            type: "tree-building",
            scenario: "Build a decision tree for choosing a mode of transportation",
            steps: ["Add root", "Create branches", "Define outcomes"],
            validation: true
          }
        }
      },
      {
        id: "2.4",
        title: "Supervised vs. Unsupervised Learning",
        duration: "40 min",
        interactive: {
          learningLab: {
            type: "comparative",
            title: "Learning Methods Explorer",
            experiments: [
              {
                id: "supervised-demo",
                type: "interactive",
                scenario: "Image Classification",
                steps: [
                  "Label training data",
                  "Train model",
                  "Test predictions"
                ]
              },
              {
                id: "unsupervised-demo",
                type: "interactive",
                scenario: "Customer Clustering",
                steps: [
                  "Input raw data",
                  "Discover patterns",
                  "Analyze groups"
                ]
              }
            ],
            comparison: {
              type: "side-by-side",
              features: [
                "data-requirements",
                "process-visualization",
                "outcome-analysis"
              ]
            }
          },
          experimentStation: {
            type: "hands-on",
            activities: [
              {
                id: "fruit-sorter",
                type: "supervised",
                task: "Classify fruits by features"
              },
              {
                id: "customer-groups",
                type: "unsupervised",
                task: "Discover customer segments"
              }
            ]
          }
        },
        article: `In Machine Learning, there are two main approaches to teaching AI systems: supervised and unsupervised learning.
  
  Supervised Learning:
  • Learning with labeled data
  • System knows correct answers
  • Examples: Spam detection, image classification
  
  Unsupervised Learning:
  • Learning without labels
  • Discovers patterns independently
  • Examples: Customer segmentation, anomaly detection
  
  Key Differences:
  1. Data Requirements:
     • Supervised: Labeled data
     • Unsupervised: Unlabeled data
  
  2. Applications:
     • Supervised: Classification, prediction
     • Unsupervised: Clustering, pattern discovery`,
        quiz: {
          questions: [
            {
              question: "What is the key difference between supervised and unsupervised learning?",
              options: [
                "Use of labeled vs. unlabeled data",
                "Processing speed",
                "Cost of implementation",
                "Number of algorithms"
              ],
              correct: 0,
              explanation: "The key difference is that supervised learning uses labeled data (with known correct answers), while unsupervised learning works with unlabeled data to discover patterns."
            },
            {
              question: "Which type of learning is best suited for customer segmentation?",
              options: [
                "Supervised learning",
                "Unsupervised learning",
                "Both types equally",
                "Neither type"
              ],
              correct: 1,
              explanation: "Unsupervised learning is best suited for customer segmentation as it can discover natural groupings in data without predefined labels."
            }
          ],
          practicalExercise: {
            type: "learning-comparison",
            scenarios: [
              {
                type: "supervised",
                task: "Email classification",
                data: "labeled-emails"
              },
              {
                type: "unsupervised",
                task: "Customer grouping",
                data: "customer-behaviors"
              }
            ]
          }
        }
      }
    ]
  };
  
  export default module2;
```

# src/data/modules/module3.js

```js
// src/data/modules/module3.js

const module3 = {
    id: 3,
    title: "Advanced AI Concepts",
    description: "Explore advanced concepts in AI systems, algorithms, and neural networks",
    prerequisites: [1, 2],
    icon: "Network",
    themeColor: "green",
  
    interactiveFeatures: {
      aiLab: {
        enabled: true,
        components: {
          systemVisualizer: {
            type: "interactive",
            features: ["system-comparison", "architecture-exploration", "network-visualization"]
          },
          conceptMap: {
            type: "dragAndDrop",
            elements: ["systems", "algorithms", "neural-networks"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "3.1",
        title: "Types of AI Systems",
        duration: "35 min",
        article: `Artificial Intelligence (AI) is not just one system or technology; it encompasses a wide range of systems with varying capabilities and functionalities. Understanding the different types of AI systems can help us see how they are designed, what they can do, and how they are applied in the real world.
  
  Reactive Machines
  Reactive machines are the simplest type of AI. They operate based solely on the current input and do not rely on memory or past experiences. They cannot learn from previous interactions and only perform specific tasks they are programmed for.
  
  Examples:
  • Chess-playing AI: IBM's Deep Blue, which defeated chess champion Garry Kasparov, is a reactive machine. It evaluates possible moves in the moment without learning from past games.
  • Basic Recommendation Systems: Simple systems that suggest products based on your most recent clicks or searches.
  
  Limited Memory
  Limited memory AI systems can store and use past data for a short time. They analyze recent experiences or data points to make decisions, but they do not retain this information permanently.
  
  Examples:
  • Self-Driving Cars: These vehicles analyze recent sensor data to identify pedestrians, traffic lights, and other vehicles, using it to make real-time driving decisions.
  • Virtual Assistants: Systems like Siri or Alexa can temporarily remember context, such as a follow-up question about a previous command.
  
  Theory of Mind
  Theory of mind AI is a concept that refers to systems capable of understanding emotions, intentions, and social interactions. While this type of AI is still theoretical, it represents a significant step toward creating machines that can interact with humans more naturally and empathetically.
  
  Potential Applications:
  • Social Robotics: Robots designed to assist in caregiving or education, capable of understanding and responding to human emotions.
  • Advanced Virtual Assistants: Systems that adapt their tone and suggestions based on the user's mood or context.
  
  Self-Aware AI
  Self-aware AI represents the most advanced and hypothetical type of AI. These systems would possess self-awareness, consciousness, and the ability to understand their existence and goals.`,
        quiz: {
          questions: [
            {
              question: "What is the main characteristic of reactive machines?",
              options: [
                "They operate based only on current input",
                "They learn from past experiences",
                "They can store memories",
                "They have self-awareness"
              ],
              correct: 0,
              explanation: "Reactive machines are the simplest type of AI that operate solely based on current input and cannot learn from past experiences."
            },
            {
              question: "Which type of AI system is used in self-driving cars?",
              options: [
                "Reactive Machines",
                "Limited Memory",
                "Theory of Mind",
                "Self-Aware AI"
              ],
              correct: 1,
              explanation: "Self-driving cars use Limited Memory AI systems to analyze recent sensor data and make real-time driving decisions."
            },
            {
              question: "What is the most advanced and hypothetical type of AI discussed?",
              options: [
                "Reactive Machines",
                "Limited Memory",
                "Theory of Mind",
                "Self-Aware AI"
              ],
              correct: 3,
              explanation: "Self-Aware AI represents the most advanced and hypothetical type of AI, capable of possessing consciousness and understanding its own existence."
            }
          ]
        }
      },
      {
        id: "3.2",
        title: "Basic Algorithms in AI",
        duration: "40 min",
        article: `Algorithms are the foundation of Artificial Intelligence (AI) and Machine Learning (ML). They are sets of instructions that guide computers in solving problems and making decisions. Understanding basic algorithms helps us see how AI systems learn, adapt, and improve.
  
  What Is an Algorithm?
  An algorithm is a step-by-step procedure for performing a task or solving a problem. It's like a recipe: you follow specific steps to achieve a desired outcome. In AI, algorithms help machines process data and make sense of it.
  
  For example:
  • A sorting algorithm arranges numbers or words in order (e.g., smallest to largest).
  • A search algorithm finds specific information, like a name in a list.
  
  Common Types of AI Algorithms
  
  1. Linear Regression:
  • Used for predicting a continuous value (e.g., house prices based on size).
  • Works by finding the best-fit line that minimizes errors between predicted and actual values.
  
  2. Logistic Regression:
  • Used for classification tasks (e.g., determining whether an email is spam or not).
  • Outputs probabilities to classify data into categories.
  
  3. Decision Trees:
  • Use a flowchart-like structure to make decisions based on a series of questions.
  • Example: Deciding whether to play outside based on weather conditions.
  
  4. K-Nearest Neighbors (KNN):
  • A simple algorithm that classifies data points based on the closest examples.
  • Example: Grouping similar fruits based on color and shape.
  
  5. Clustering Algorithms:
  • Group similar data points together without predefined labels.
  • Example: Grouping customers based on purchasing behavior.
  
  How Algorithms Process Data:
  1. Input: Provide data for the algorithm to process (e.g., images, numbers, or text).
  2. Processing: The algorithm performs calculations or applies rules to find patterns or make decisions.
  3. Output: The result could be a prediction, classification, or decision.`,
        quiz: {
          questions: [
            {
              question: "What is the primary purpose of an algorithm in AI?",
              options: [
                "To store data permanently",
                "To provide step-by-step instructions for solving problems",
                "To connect to the internet",
                "To create user interfaces"
              ],
              correct: 1,
              explanation: "An algorithm is a step-by-step procedure that guides computers in solving problems and making decisions."
            },
            {
              question: "Which algorithm type is best suited for predicting continuous values?",
              options: [
                "Linear Regression",
                "Logistic Regression",
                "Decision Trees",
                "Clustering Algorithms"
              ],
              correct: 0,
              explanation: "Linear Regression is specifically used for predicting continuous values, such as house prices based on size."
            },
            {
              question: "What is the main purpose of clustering algorithms?",
              options: [
                "To predict future values",
                "To classify emails as spam",
                "To group similar data points together",
                "To make sequential decisions"
              ],
              correct: 2,
              explanation: "Clustering algorithms are designed to group similar data points together without predefined labels."
            }
          ]
        }
      },
      {
        id: "3.3",
        title: "Data Collection and Processing",
        duration: "35 min",
        article: `Data is the lifeblood of Artificial Intelligence (AI) systems. Before an AI can learn, predict, or make decisions, it needs data—lots of it. But raw data is rarely ready for immediate use. It must be collected, cleaned, and processed to ensure it's accurate and useful.
  
  Why Is Data Collection Important?
  Data collection is the first step in creating AI systems. The quality and quantity of data directly impact how well the AI performs. Here's why it's important:
  
  1. Accuracy: High-quality data ensures the AI makes reliable predictions.
  2. Relevance: The data must align with the problem the AI is solving.
  3. Diversity: Diverse datasets prevent bias and help AI systems generalize better.
  
  How Is Data Collected?
  Data can come from many sources, depending on the AI's purpose:
  
  1. Sensors: Devices like cameras, microphones, and IoT sensors gather real-world information.
  2. Databases: Existing datasets, such as customer records or medical histories.
  3. Surveys and Forms: Direct input from users.
  4. Web Scraping: Extracting information from websites.
  
  Data Cleaning: Preparing for Use
  Raw data often contains errors, duplicates, or irrelevant information. Data cleaning steps include:
  
  1. Removing Errors: Identifying and correcting mistakes.
  2. Eliminating Duplicates: Ensuring no data point is counted twice.
  3. Handling Missing Data: Filling in gaps or deciding how to work around them.
  4. Standardizing Formats: Making sure data is consistent.
  
  Data Processing: Making Data Usable
  Once cleaned, the data is processed to extract meaningful insights:
  
  1. Feature Extraction: Identifying the most important characteristics.
  2. Normalization: Scaling data to a consistent range.
  3. Encoding: Converting non-numerical data into numerical formats.`,
        quiz: {
          questions: [
            {
              question: "Why is data collection important for AI systems?",
              options: [
                "To make the system run faster",
                "To reduce storage costs",
                "To ensure accurate and reliable predictions",
                "To simplify programming"
              ],
              correct: 2,
              explanation: "Data collection is crucial because the quality and quantity of data directly impact how well the AI performs and makes predictions."
            },
            {
              question: "What is the purpose of data cleaning?",
              options: [
                "To make data smaller",
                "To remove useful information",
                "To make data look prettier",
                "To fix errors and inconsistencies"
              ],
              correct: 3,
              explanation: "Data cleaning is the process of fixing errors, removing duplicates, and handling missing values to make the data usable."
            },
            {
              question: "Which of these is NOT a common source of data collection?",
              options: [
                "Sensors",
                "Databases",
                "Random generation",
                "Web scraping"
              ],
              correct: 2,
              explanation: "Random generation is not a common source of data collection. Data is typically collected from real sources like sensors, databases, surveys, and web scraping."
            }
          ]
        }
      },
      {
        id: "3.4",
        title: "Neural Networks Fundamentals",
        duration: "45 min",
        article: `Neural networks are a cornerstone of modern Artificial Intelligence (AI). Inspired by the structure of the human brain, neural networks enable machines to recognize patterns, process data, and make decisions.
  
  What Is a Neural Network?
  A neural network is a series of algorithms designed to recognize relationships in data. It consists of layers of interconnected nodes (or neurons) that process information.
  
  Key Components:
  1. Input Layer: The first layer that receives data, such as images, text, or numerical values.
  2. Hidden Layers: Layers between the input and output, where the network processes and transforms data.
  3. Output Layer: Produces the final result, such as a classification or prediction.
  
  How Neural Networks Work
  Neural networks learn by adjusting the connections (or weights) between neurons:
  
  1. Data Input: The network receives data (e.g., an image of a cat).
  2. Forward Propagation: Data flows through the network, with each neuron applying transformations.
  3. Error Calculation: The network compares its output with the correct answer.
  4. Backward Propagation: The network adjusts weights to reduce errors.
  
  Types of Neural Networks:
  
  1. Feedforward Neural Networks:
  • Data flows in one direction
  • Used for basic prediction tasks
  
  2. Convolutional Neural Networks (CNNs):
  • Specialized for image processing
  • Used in computer vision applications
  
  3. Recurrent Neural Networks (RNNs):
  • Designed for sequential data
  • Used in language processing
  
  4. Deep Neural Networks:
  • Multiple layers for complex patterns
  • Used in advanced AI applications`,
        quiz: {
          questions: [
            {
              question: "What inspired the design of neural networks?",
              options: [
                "Computer circuits",
                "The human brain",
                "Mathematical equations",
                "Social networks"
              ],
              correct: 1,
              explanation: "Neural networks were inspired by the structure of the human brain, with interconnected nodes similar to neurons."
            },
            {
              question: "Which type of neural network is best suited for image processing?",
              options: [
                "Feedforward Neural Networks",
                "Recurrent Neural Networks",
                "Convolutional Neural Networks",
                "Basic Neural Networks"
              ],
              correct: 2,
              explanation: "Convolutional Neural Networks (CNNs) are specifically designed for and excel at image processing tasks."
            },
            {
              question: "What is the purpose of backward propagation?",
              options: [
                "To input data into the network",
                "To generate random weights",
                "To adjust weights and reduce errors",
                "To delete unnecessary neurons"
              ],
              correct: 2,
              explanation: "Backward propagation is the process of adjusting the weights between neurons to reduce errors and improve the network's performance."
            }
          ]
        }
      }
    ],
  
    progressTracking: {
      enabled: true,
      features: {
        lessonProgress: true,
        quizScores: true,
        interactiveCompletion: true
      }
    },
  
    gamification: {
      enabled: true,
      elements: {
        badges: [
          {
            id: "system-master",
            title: "AI Systems Master",
            condition: "Complete all lessons in module 3"
          },
          {
            id: "neural-expert",
            title: "Neural Network Expert",
            condition: "Perfect score on neural networks quiz"
          }
        ],
        achievements: true,
        leaderboard: false
      }
    }
  };
  
  export default module3;
```

# src/data/modules/module4.js

```js
// src/data/modules/module4.js

const module4 = {
    id: 4,
    title: "AI Applications and Technologies",
    description: "Explore how AI is applied in computer vision, natural language processing, robotics, and gaming",
    prerequisites: [1, 2, 3],
    icon: "Robot",
    themeColor: "indigo",
  
    interactiveFeatures: {
      aiLab: {
        enabled: true,
        components: {
          visionDemo: {
            type: "interactive",
            features: ["image-recognition", "object-detection", "scene-analysis"]
          },
          nlpWorkbench: {
            type: "playground",
            tools: ["text-analysis", "sentiment-detection", "language-translation"]
          },
          robotSimulator: {
            type: "simulation",
            features: ["path-planning", "sensor-integration", "control-systems"]
          },
          gameAIStudio: {
            type: "development",
            tools: ["npc-behavior", "procedural-generation", "difficulty-scaling"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "4.1",
        title: "Computer Vision Fundamentals",
        duration: "40 min",
        article: `Computer vision is a field of Artificial Intelligence (AI) that enables machines to interpret and analyze visual information from the world, such as images or videos. This technology powers many applications, from facial recognition to self-driving cars. Understanding the basics of computer vision helps us see how machines can "see" and interact with their environments.
  
  Unlike humans, machines rely on algorithms and data to make sense of visual information. These algorithms process pixels in images to identify patterns and extract meaning.
  
  How Does Computer Vision Work?
  Computer vision systems follow these steps:
  
  1. Image Acquisition:
  • Capturing images or videos using cameras or sensors
  • Converting visual data into digital format
  
  2. Preprocessing:
  • Preparing the image by resizing, filtering, or enhancing it
  • Removing noise and standardizing formats
  
  3. Feature Extraction:
  • Identifying key characteristics like edges, shapes, or textures
  • Creating numerical representations of visual elements
  
  4. Analysis:
  • Applying algorithms to recognize objects, classify scenes, or detect movement
  • Using machine learning models to interpret visual data
  
  5. Decision Making:
  • Using extracted information to perform tasks
  • Generating appropriate responses or actions
  
  Key Techniques in Computer Vision:
  1. Object Detection:
  • Locating and identifying specific objects in images
  • Drawing bounding boxes around detected objects
  
  2. Image Segmentation:
  • Dividing images into meaningful segments
  • Analyzing different parts of an image separately
  
  3. Pattern Recognition:
  • Identifying recurring patterns and features
  • Classifying objects based on learned patterns
  
  Real-World Applications:
  • Healthcare: Analyzing medical images for diagnosis
  • Retail: Enabling automated checkout systems
  • Transportation: Assisting self-driving cars
  • Manufacturing: Inspecting products for defects
  • Security: Implementing surveillance and access control`,
        quiz: {
          questions: [
            {
              question: "What is the first step in computer vision processing?",
              options: [
                "Feature extraction",
                "Image acquisition",
                "Analysis",
                "Decision making"
              ],
              correct: 1,
              explanation: "Image acquisition is the first step where visual data is captured through cameras or sensors and converted into digital format."
            },
            {
              question: "Which technique involves dividing an image into meaningful segments?",
              options: [
                "Object detection",
                "Pattern recognition",
                "Image segmentation",
                "Feature extraction"
              ],
              correct: 2,
              explanation: "Image segmentation is the technique of dividing images into meaningful segments for separate analysis."
            },
            {
              question: "How do machines process visual information differently from humans?",
              options: [
                "They don't process visual information",
                "They use algorithms and data to analyze pixels",
                "They rely on intuition",
                "They only see in black and white"
              ],
              correct: 1,
              explanation: "Unlike humans who process visual information intuitively, machines rely on algorithms and data to analyze pixels and extract meaning from images."
            }
          ]
        }
      },
      {
        id: "4.2",
        title: "Natural Language Processing",
        duration: "35 min",
        article: `Natural Language Processing (NLP) is a branch of Artificial Intelligence (AI) that focuses on enabling machines to understand, interpret, and generate human language. From voice assistants to translation tools, NLP powers many of the technologies we use every day.
  
  What Is Natural Language Processing?
  NLP involves teaching computers to:
  • Recognize speech and text
  • Understand the meaning of words and sentences
  • Generate responses or translate text into different languages
  
  For example, when you ask Siri for the weather, NLP allows the system to understand your question and provide an accurate response.
  
  How Does NLP Work?
  NLP combines linguistics and computer science to process language. Here are the key steps:
  
  1. Text Preprocessing:
  • Preparing text by removing irrelevant details
  • Converting text into machine-readable format
  • Examples: Tokenization, removing punctuation, converting to lowercase
  
  2. Parsing and Analysis:
  • Understanding sentence structure using syntax and semantics
  • Identifying parts of speech and grammatical relationships
  • Example: Identifying subjects, verbs, and objects
  
  3. Feature Extraction:
  • Converting words into numerical representations
  • Using techniques like word embeddings (e.g., Word2Vec)
  
  4. Model Training:
  • Teaching machines to analyze and respond to language
  • Using machine learning algorithms to improve understanding
  
  Key Techniques in NLP:
  
  1. Sentiment Analysis:
  • Determining emotions or opinions in text
  • Example: Analyzing customer reviews
  
  2. Named Entity Recognition (NER):
  • Identifying names, dates, or locations
  • Example: Highlighting "New York" in text
  
  3. Language Translation:
  • Converting text between languages
  • Example: Google Translate
  
  4. Text Summarization:
  • Condensing large texts into summaries
  • Example: Creating news briefs
  
  Applications in Different Industries:
  • Healthcare: Extracting information from medical records
  • Education: Powering language learning applications
  • Finance: Analyzing market sentiment
  • Customer Service: Enabling chatbots and automated responses`,
        quiz: {
          questions: [
            {
              question: "What is the primary goal of Natural Language Processing?",
              options: [
                "To create visual content",
                "To enable machines to understand and process human language",
                "To store data efficiently",
                "To improve computer hardware"
              ],
              correct: 1,
              explanation: "NLP's primary goal is to enable machines to understand, interpret, and generate human language."
            },
            {
              question: "What is tokenization in NLP?",
              options: [
                "Creating security tokens",
                "Breaking text into individual words or units",
                "Encrypting data",
                "Converting text to images"
              ],
              correct: 1,
              explanation: "Tokenization is the process of breaking text into individual words or units during the preprocessing stage."
            },
            {
              question: "Which NLP technique analyzes emotions in text?",
              options: [
                "Named Entity Recognition",
                "Tokenization",
                "Sentiment Analysis",
                "Language Translation"
              ],
              correct: 2,
              explanation: "Sentiment Analysis is the NLP technique used to determine emotions or opinions expressed in text."
            }
          ]
        }
      },
      {
        id: "4.3",
        title: "Robotics Fundamentals",
        duration: "45 min",
        article: `Robotics is an interdisciplinary field combining mechanical engineering, electrical engineering, and computer science to create machines that can perform tasks autonomously or semi-autonomously. When integrated with Artificial Intelligence (AI), robotics becomes even more powerful, enabling robots to learn, adapt, and interact with their environments.
  
  What Are Robots?
  A robot is a programmable machine capable of carrying out a series of actions automatically. Robots come in various shapes and sizes, from robotic arms in factories to autonomous drones and humanoid robots.
  
  Core Components:
  1. Mechanical Structure:
  • Physical body (wheels, arms, legs)
  • Designed for specific purposes and tasks
  
  2. Sensors and Actuators:
  • Sensors gather environmental data
  • Actuators execute physical actions
  
  3. Control System:
  • Processes data and determines actions
  • Often powered by AI algorithms
  
  How Robots Work:
  Robots operate through a cycle of:
  
  1. Sensing:
  • Using cameras, microphones, proximity sensors
  • Gathering data about surroundings
  
  2. Processing:
  • Analyzing sensor input
  • Making decisions using AI or algorithms
  
  3. Acting:
  • Executing chosen actions
  • Moving, gripping, or communicating
  
  Types of Robots:
  
  1. Industrial Robots:
  • Used in manufacturing
  • Example: Assembly line robots
  
  2. Service Robots:
  • Assist in daily tasks
  • Example: Robot vacuums
  
  3. Humanoid Robots:
  • Resemble human form
  • Example: Social interaction robots
  
  4. Autonomous Vehicles:
  • Self-driving transportation
  • Example: Delivery drones
  
  Applications Across Industries:
  • Manufacturing: Assembly and quality control
  • Healthcare: Surgical assistance and patient care
  • Agriculture: Automated farming
  • Space Exploration: Planetary rovers
  • Education: Teaching tools and demonstrations`,
        quiz: {
          questions: [
            {
              question: "What are the three main components of a robot?",
              options: [
                "Software, Hardware, Network",
                "Mechanical Structure, Sensors/Actuators, Control System",
                "CPU, Memory, Storage",
                "Input, Output, Processing"
              ],
              correct: 1,
              explanation: "The three main components of a robot are its mechanical structure (physical body), sensors and actuators (for gathering data and executing actions), and control system (for processing and decision-making)."
            },
            {
              question: "Which type of robot is primarily used in manufacturing?",
              options: [
                "Service Robots",
                "Humanoid Robots",
                "Industrial Robots",
                "Autonomous Vehicles"
              ],
              correct: 2,
              explanation: "Industrial robots are primarily used in manufacturing for tasks like assembly, welding, and quality control."
            },
            {
              question: "What is the first step in a robot's operational cycle?",
              options: [
                "Acting",
                "Processing",
                "Sensing",
                "Decision making"
              ],
              correct: 2,
              explanation: "Sensing is the first step in a robot's operational cycle, where it gathers information about its environment through various sensors."
            }
          ]
        }
      },
      {
        id: "4.4",
        title: "AI in Gaming",
        duration: "40 min",
        article: `Artificial Intelligence (AI) is revolutionizing the gaming industry, creating more immersive and challenging experiences for players. From designing intelligent opponents to generating entire game worlds, AI enhances both the development process and gameplay itself.
  
  What Is AI in Gaming?
  AI in gaming involves using algorithms to simulate human-like behavior or automate processes within a game. These algorithms allow non-player characters (NPCs) to:
  • Make decisions and adapt to players' actions
  • React dynamically to different scenarios
  • Provide challenges that keep players engaged
  
  Key Roles of AI in Gaming:
  
  1. Game Design and Development:
  • Automating content creation
  • Generating terrain and environments
  • Example: Procedural generation in Minecraft
  
  2. NPC Behavior:
  • Creating intelligent characters
  • Adapting to player strategies
  • Example: Enemy AI in strategy games
  
  3. Difficulty Balancing:
  • Adjusting challenge levels
  • Maintaining player engagement
  • Example: Dynamic difficulty adjustment
  
  4. Procedural Content Generation:
  • Creating unique levels and maps
  • Ensuring replayability
  • Example: Randomly generated dungeons
  
  How AI Works in Gaming:
  
  1. Finite State Machines (FSM):
  • Basic AI decision-making
  • Switching between predefined states
  • Example: NPC behavior patterns
  
  2. Pathfinding Algorithms:
  • Navigation through game worlds
  • Obstacle avoidance
  • Example: A* algorithm for movement
  
  3. Machine Learning:
  • Adapting to player behavior
  • Improving AI strategies
  • Example: Learning from gameplay data
  
  Applications and Features:
  • Immersive Storytelling
  • Enhanced Realism
  • Multiplayer Matchmaking
  • Cheat Detection
  • Personalized Experiences
  
  Future Developments:
  • Dynamic Game Worlds
  • Hyper-Realistic NPCs
  • Advanced VR Integration
  • Player-Centric Experiences`,
        quiz: {
          questions: [
            {
              question: "What is procedural content generation in gaming?",
              options: [
                "Manual creation of game levels",
                "Automatic generation of game content",
                "Player-created content",
                "Downloadable content"
              ],
              correct: 1,
              explanation: "Procedural content generation is the automatic creation of game content like levels, maps, or terrain using algorithms."
            },
            {
              question: "Which AI technique is used for NPC navigation?",
              options: [
                "Pathfinding algorithms",
                "Content generation",
                "Difficulty balancing",
                "State machines"
              ],
              correct: 0,
              explanation: "Pathfinding algorithms, such as A*, are used to help NPCs navigate through game worlds and avoid obstacles."
            },
            {
              question: "What is the purpose of dynamic difficulty adjustment?",
              options: [
                "To make games harder",
                "To maintain player engagement by adjusting challenge levels",
                "To create new levels",
                "To improve graphics"
              ],
              correct: 1,
              explanation: "Dynamic difficulty adjustment helps maintain player engagement by automatically adjusting the game's challenge level based on player performance."
            }
          ]
        }
      }
    ],
  
    progressTracking: {
      enabled: true,
      features: {
        lessonProgress: true,
        quizScores: true,
        interactiveCompletion: true
      }
    },
  
    gamification: {
      enabled: true,
      elements: {
        badges: [
          {
            id: "tech-pioneer",
            title: "Technology Pioneer",
            condition: "Complete all lessons in module 4"
          },
          {
            id: "ai-innovator",
            title: "AI Innovator",
            condition: "Score 90%+ on all module 4 quizzes"
          }
        ],
        achievements: true,
        leaderboard: false
      }
    }
  };
  
  export default module4;
```

# src/data/modules/module5.js

```js
// src/data/modules/module5.js

const module5 = {
    id: 5,
    title: "Ethics and Society in AI",
    description: "Explore ethical considerations, responsible use, and societal impacts of artificial intelligence",
    prerequisites: [1, 2, 3, 4],
    icon: "Shield",
    themeColor: "orange",
  
    interactiveFeatures: {
      ethicsLab: {
        enabled: true,
        components: {
          biasDetector: {
            type: "interactive",
            features: ["data-analysis", "bias-identification", "mitigation-strategies"]
          },
          privacySimulator: {
            type: "simulation",
            features: ["data-protection", "privacy-risks", "safeguards"]
          },
          ethicsWorkshop: {
            type: "scenario-based",
            elements: ["case-studies", "decision-making", "impact-analysis"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "5.1",
        title: "Understanding Bias in AI",
        duration: "40 min",
        article: `Bias in Artificial Intelligence (AI) systems refers to instances where the decisions or predictions made by AI models are unfairly influenced by skewed or incomplete data. Understanding bias is critical for creating AI systems that are accurate, fair, and inclusive.
  
  What Causes Bias in AI?
  Bias in AI usually stems from problems in the data or the way the model is developed. Common causes include:
  
  1. Biased Training Data:
  • If the dataset reflects societal biases or lacks diversity, the AI will likely replicate those biases
  • Example: A hiring algorithm trained on data from a predominantly male workforce might favor male candidates
  
  2. Incomplete Data:
  • Missing or underrepresented groups in the dataset can lead to unfair outcomes
  • Example: Facial recognition systems performing poorly on certain skin tones due to lack of diverse training images
  
  3. Human Bias:
  • Developers' assumptions and decisions can inadvertently introduce bias
  • Example: Framing a problem in a way that prioritizes certain outcomes over others
  
  4. Algorithmic Bias:
  • The model itself may emphasize certain patterns in ways that amplify bias
  • Example: Recommender systems favoring popular products over niche options
  
  Types of Bias:
  1. Selection Bias: When data doesn't represent the target population accurately
  2. Confirmation Bias: When AI prioritizes data that confirms preexisting assumptions
  3. Implicit Bias: When bias arises from subtle and unintended influences
  
  Real-World Examples:
  • Hiring algorithms favoring certain demographics
  • Healthcare AI systems underdiagnosing specific groups
  • Facial recognition accuracy varying by ethnicity
  • Loan approval systems showing demographic disparities
  
  How to Mitigate Bias:
  1. Diversify Data: Ensure training datasets are representative
  2. Regular Auditing: Test systems for biased outcomes
  3. Diverse Teams: Include varied perspectives in development
  4. Ethical Guidelines: Establish clear standards for fairness`,
        quiz: {
          questions: [
            {
              question: "What is the main cause of bias in AI systems?",
              options: [
                "Hardware limitations",
                "Problems in training data and model development",
                "User errors",
                "Network connectivity"
              ],
              correct: 1,
              explanation: "Bias in AI primarily stems from problems in the training data and how models are developed, including biased or incomplete data and human assumptions in the development process."
            },
            {
              question: "Which is an example of selection bias in AI?",
              options: [
                "An AI system running slowly",
                "Data not representing all population groups equally",
                "Users misusing the system",
                "Software bugs"
              ],
              correct: 1,
              explanation: "Selection bias occurs when the data collected for training does not accurately represent all groups in the target population."
            },
            {
              question: "What is one effective way to mitigate bias in AI?",
              options: [
                "Using faster computers",
                "Ensuring diverse and representative training data",
                "Reducing system costs",
                "Simplifying the algorithms"
              ],
              correct: 1,
              explanation: "Using diverse and representative training data is one of the most effective ways to mitigate bias in AI systems."
            }
          ]
        }
      },
      {
        id: "5.2",
        title: "Privacy and Data Protection",
        duration: "35 min",
        article: `Privacy is a critical concern in the development and use of Artificial Intelligence (AI). As AI systems rely on large amounts of data to function effectively, protecting individuals' personal information and ensuring ethical data practices are essential for building trust and preventing harm.
  
  Why Is Privacy Important in AI?
  AI systems often process sensitive information such as:
  • Personal details (name, address, age)
  • Financial data (credit card transactions)
  • Health records (medical diagnoses)
  
  Without proper safeguards, this data could be misused, leading to:
  • Identity theft
  • Discrimination
  • Loss of trust
  • Privacy violations
  
  Common Privacy Risks in AI:
  
  1. Data Breaches:
  • Unauthorized access to sensitive information
  • Example: Healthcare AI systems exposing patient records
  
  2. Data Misuse:
  • Using data beyond original intent without consent
  • Example: Social media analyzing behavior for targeted ads
  
  3. Reidentification:
  • Identifying individuals from anonymized data
  • Example: Combining datasets to deduce someone's identity
  
  Best Practices for Privacy:
  
  1. Data Minimization:
  • Collect only necessary data
  • Example: Chatbots not storing personal information
  
  2. Anonymization:
  • Remove personally identifiable information
  • Example: Masking names in health records
  
  3. Secure Storage:
  • Use encryption and access controls
  • Example: Secure cloud storage with restricted access
  
  4. Transparency:
  • Inform users about data collection and use
  • Example: Clear privacy policies and consent forms`,
        quiz: {
          questions: [
            {
              question: "Why is privacy protection important in AI systems?",
              options: [
                "To make systems run faster",
                "To protect sensitive personal information",
                "To reduce costs",
                "To improve graphics"
              ],
              correct: 1,
              explanation: "Privacy protection is crucial in AI to prevent misuse of sensitive personal information and maintain user trust."
            },
            {
              question: "What is data minimization?",
              options: [
                "Making data smaller in size",
                "Collecting only necessary data",
                "Deleting all data",
                "Compressing data files"
              ],
              correct: 1,
              explanation: "Data minimization means collecting only the data that is necessary for the specific task or purpose."
            },
            {
              question: "Which is an example of good privacy practice in AI?",
              options: [
                "Collecting all available data",
                "Using encryption for sensitive data",
                "Sharing data freely",
                "Ignoring user consent"
              ],
              correct: 1,
              explanation: "Using encryption for sensitive data is a good privacy practice as it helps protect information from unauthorized access."
            }
          ]
        }
      },
      {
        id: "5.3",
        title: "Digital Citizenship and AI",
        duration: "35 min",
        article: `Digital citizenship refers to the responsible and ethical use of technology in online interactions and activities. As Artificial Intelligence (AI) increasingly shapes the digital world, understanding digital citizenship is essential for fostering safe, respectful, and productive online behaviors.
  
  What Is Digital Citizenship?
  Digital citizenship involves:
  • Protecting personal information
  • Communicating respectfully
  • Evaluating digital content
  • Promoting ethical practices
  
  Key Principles:
  
  1. Respect:
  • Treating others kindly in digital interactions
  • Example: Reporting rather than engaging in cyberbullying
  
  2. Responsibility:
  • Using technology ethically and productively
  • Example: Fact-checking before sharing information
  
  3. Safety:
  • Protecting digital identity and privacy
  • Example: Using strong passwords and privacy settings
  
  4. Critical Thinking:
  • Understanding how AI influences online content
  • Example: Recognizing AI-generated content
  
  Applications in AI Context:
  
  1. Social Media:
  • Understanding algorithm-driven content
  • Practicing responsible sharing
  • Identifying misinformation
  
  2. Online Learning:
  • Using AI tools responsibly
  • Citing sources appropriately
  • Maintaining academic integrity
  
  3. Digital Privacy:
  • Managing personal data
  • Understanding AI data collection
  • Protecting sensitive information`,
        quiz: {
          questions: [
            {
              question: "What is a key principle of digital citizenship?",
              options: [
                "Sharing all information freely",
                "Treating others with respect online",
                "Using as much technology as possible",
                "Ignoring privacy settings"
              ],
              correct: 1,
              explanation: "Treating others with respect in online interactions is a fundamental principle of digital citizenship."
            },
            {
              question: "How does AI influence digital citizenship?",
              options: [
                "It has no influence",
                "It shapes online content and interactions",
                "It only affects games",
                "It only impacts businesses"
              ],
              correct: 1,
              explanation: "AI significantly influences digital citizenship by shaping online content, recommendations, and interactions."
            },
            {
              question: "What is an important digital safety practice?",
              options: [
                "Sharing passwords",
                "Using strong passwords and privacy settings",
                "Ignoring security updates",
                "Posting personal information publicly"
              ],
              correct: 1,
              explanation: "Using strong passwords and privacy settings is crucial for maintaining digital safety."
            }
          ]
        }
      },
      {
        id: "5.4",
        title: "Career Opportunities in AI",
        duration: "45 min",
        article: `Artificial Intelligence (AI) is one of the most rapidly growing fields, offering diverse career opportunities across industries. From developing cutting-edge algorithms to applying AI in healthcare or entertainment, AI careers are dynamic, innovative, and impactful.
  
  Key Career Paths:
  
  1. Machine Learning Engineer:
  • Develop and optimize ML models
  • Skills: Python, TensorFlow, mathematics
  • Applications: Recommendation systems, fraud detection
  
  2. Data Scientist:
  • Analyze data and create predictive models
  • Skills: Statistics, programming, data visualization
  • Applications: Pattern recognition, decision support
  
  3. AI Research Scientist:
  • Advance AI technologies through research
  • Skills: Deep learning, academic research
  • Applications: New algorithms, theoretical advances
  
  4. Computer Vision Engineer:
  • Work on image recognition systems
  • Skills: CNN architectures, image processing
  • Applications: Medical imaging, autonomous vehicles
  
  Industries Using AI:
  
  1. Healthcare:
  • Disease diagnosis
  • Treatment planning
  • Drug discovery
  
  2. Finance:
  • Fraud detection
  • Risk assessment
  • Algorithmic trading
  
  3. Education:
  • Personalized learning
  • Assessment systems
  • Educational tools
  
  4. Entertainment:
  • Game AI
  • Content recommendation
  • Virtual reality
  
  Preparing for an AI Career:
  
  1. Education:
  • Degrees in computer science, mathematics
  • Specialized AI/ML certifications
  • Continuous learning
  
  2. Skills Development:
  • Programming languages
  • Machine learning frameworks
  • Problem-solving abilities
  
  3. Practical Experience:
  • Personal projects
  • Internships
  • Open source contributions`,
        quiz: {
          questions: [
            {
              question: "What skills are essential for a machine learning engineer?",
              options: [
                "Artistic ability",
                "Programming and mathematics",
                "Sales experience",
                "Physical fitness"
              ],
              correct: 1,
              explanation: "Machine learning engineers need strong programming skills and mathematical understanding to develop and optimize AI models."
            },
            {
              question: "Which industry is NOT a major employer of AI professionals?",
              options: [
                "Healthcare",
                "Finance",
                "Agriculture",
                "Professional sports"
              ],
              correct: 3,
              explanation: "While AI is used in many industries, professional sports is not currently a major employer of AI professionals compared to healthcare, finance, or technology sectors."
            },
            {
              question: "What is the best way to prepare for an AI career?",
              options: [
                "Wait for job opportunities",
                "Study and gain practical experience",
                "Focus only on theory",
                "Avoid technology"
              ],
              correct: 1,
              explanation: "The best preparation for an AI career involves both studying relevant subjects and gaining practical experience through projects and internships."
            }
          ]
        }
      }
    ],
  
    progressTracking: {
      enabled: true,
      features: {
        lessonProgress: true,
        quizScores: true,
        interactiveCompletion: true
      }
    },
  
    gamification: {
      enabled: true,
      elements: {
        badges: [
          {
            id: "ethics-champion",
            title: "Ethics Champion",
            condition: "Complete all lessons in module 5"
          },
          {
            id: "privacy-expert",
            title: "Privacy Expert",
            condition: "Score 90%+ on privacy quiz"
          }
        ],
        achievements: true,
        leaderboard: false
      }
    }
  };
  
  export default module5;
```

# src/data/modules/module6.js

```js
// src/data/modules/module6.js

const module6 = {
    id: 6,
    title: "Future of AI and Advanced Applications",
    description: "Discover cutting-edge AI developments and future possibilities",
    prerequisites: [1, 2, 3, 4, 5],
    icon: "Zap",
    themeColor: "purple",
  
    interactiveFeatures: {
      futureLab: {
        enabled: true,
        components: {
          quantumSimulator: {
            type: "interactive",
            features: ["quantum-basics", "algorithm-visualization", "performance-comparison"]
          },
          neuromorphicDemo: {
            type: "simulation",
            features: ["brain-inspired-computing", "spike-timing", "learning-mechanisms"]
          },
          edgeAIWorkbench: {
            type: "development",
            tools: ["device-optimization", "model-compression", "latency-testing"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "6.1",
        title: "Emerging AI Technologies",
        duration: "45 min",
        interactive: {
          quantumDemo: {
            type: "simulation",
            title: "Quantum Computing Basics",
            features: {
              visualization: {
                type: "interactive",
                elements: ["qubits", "quantum-gates", "superposition"]
              },
              comparison: {
                classical: ["bits", "logic-gates"],
                quantum: ["qubits", "quantum-operations"]
              }
            }
          },
          edgeComputing: {
            type: "device-simulation",
            scenarios: [
              {
                id: "smart-camera",
                type: "inference",
                metrics: ["latency", "power", "accuracy"]
              },
              {
                id: "sensor-network",
                type: "distributed",
                features: ["data-fusion", "local-processing"]
              }
            ]
          }
        },
        article: `The future of AI holds incredible potential for transforming various aspects of society. Understanding emerging technologies and trends is crucial for staying ahead in the field.
  
  Key Areas:
  • Quantum AI: Leveraging quantum computing for enhanced AI capabilities
  • Neuromorphic Computing: Brain-inspired computing architectures
  • Edge AI: Running AI models on local devices
  • Explainable AI: Making AI decisions more transparent and interpretable
  
  Emerging Applications:
  1. Environmental Protection
     • Climate modeling and prediction
     • Resource optimization
     • Wildlife conservation
  
  2. Space Exploration
     • Autonomous spacecraft navigation
     • Planetary data analysis
     • Mission planning optimization
  
  3. Personalized Medicine
     • Drug discovery
     • Treatment planning
     • Disease prediction
  
  4. Advanced Robotics
     • Human-robot collaboration
     • Adaptive learning systems
     • Social interaction
  
  Future Challenges:
  • Computational Limits
  • Energy Efficiency
  • Ethical Considerations
  • Human-AI Collaboration`,
        quiz: {
          questions: [
            {
              question: "What is Edge AI?",
              options: [
                "AI processing on local devices",
                "AI for graphics processing",
                "AI in cloud computing",
                "AI for social media"
              ],
              correct: 0,
              explanation: "Edge AI refers to AI processing that occurs on local devices (at the 'edge' of the network) rather than in the cloud, enabling faster responses and better privacy."
            },
            {
              question: "Which is NOT a key challenge in future AI development?",
              options: [
                "Computational limits",
                "Energy efficiency",
                "Storage capacity",
                "Ethical considerations"
              ],
              correct: 2,
              explanation: "While storage capacity is important, it is not one of the primary challenges highlighted for future AI development compared to computational limits, energy efficiency, and ethical considerations."
            },
            {
              question: "What is the main advantage of neuromorphic computing?",
              options: [
                "Lower cost",
                "Brain-inspired architecture",
                "Faster processing",
                "Larger storage"
              ],
              correct: 1,
              explanation: "Neuromorphic computing uses brain-inspired architectures to potentially achieve more efficient and adaptive computing systems."
            }
          ]
        }
      },
      {
        id: "6.2",
        title: "AI Ethics and Society",
        duration: "40 min",
        interactive: {
          ethicsSimulator: {
            type: "scenario-based",
            title: "AI Ethics Explorer",
            scenarios: [
              {
                id: "bias-detection",
                type: "interactive",
                focus: "identifying and mitigating bias"
              },
              {
                id: "privacy-protection",
                type: "simulation",
                features: ["data-anonymization", "security-measures"]
              }
            ]
          },
          impactAnalyzer: {
            type: "assessment",
            tools: [
              {
                id: "societal-impact",
                metrics: ["job-displacement", "skill-requirements", "economic-effects"]
              },
              {
                id: "environmental-impact",
                metrics: ["energy-consumption", "carbon-footprint", "resource-usage"]
              }
            ]
          }
        },
        article: `As AI becomes more integrated into society, understanding and addressing ethical considerations becomes increasingly important.
  
  Key Ethical Considerations:
  1. Bias and Fairness
     • Identifying sources of bias
     • Ensuring equitable outcomes
     • Promoting inclusive AI development
  
  2. Privacy and Security
     • Data protection
     • Consent management
     • Secure AI systems
  
  3. Transparency and Accountability
     • Explainable AI decisions
     • Clear responsibility frameworks
     • Audit mechanisms
  
  4. Societal Impact
     • Job market effects
     • Economic implications
     • Social interactions
  
  Future Guidelines:
  • Ethical AI development frameworks
  • Regulatory compliance
  • Stakeholder engagement
  • Regular impact assessments`,
        quiz: {
          questions: [
            {
              question: "What is a key aspect of AI ethics?",
              options: [
                "Maximizing profit",
                "Ensuring fairness and transparency",
                "Increasing processing speed",
                "Reducing development time"
              ],
              correct: 1,
              explanation: "Ensuring fairness and transparency is a fundamental aspect of AI ethics, focusing on equitable outcomes and clear decision-making processes."
            },
            {
              question: "Which is NOT a primary consideration in AI privacy?",
              options: [
                "Data protection",
                "User consent",
                "Processing speed",
                "Security measures"
              ],
              correct: 2,
              explanation: "While processing speed is important for AI systems, it is not a primary consideration in AI privacy compared to data protection, user consent, and security measures."
            }
          ]
        }
      },
      {
        id: "6.3",
        title: "Future Applications",
        duration: "35 min",
        interactive: {
          applicationExplorer: {
            type: "interactive",
            title: "Future AI Applications",
            domains: [
              {
                id: "healthcare",
                applications: ["personalized-medicine", "drug-discovery", "diagnostic-assistance"],
                demo: true
              },
              {
                id: "environment",
                applications: ["climate-modeling", "resource-optimization", "conservation"],
                demo: true
              }
            ]
          },
          impactSimulator: {
            type: "simulation",
            scenarios: [
              {
                domain: "transportation",
                features: ["autonomous-systems", "traffic-optimization", "safety-enhancement"]
              },
              {
                domain: "education",
                features: ["personalized-learning", "automated-assessment", "adaptive-content"]
              }
            ]
          }
        },
        article: `AI continues to expand into new domains, creating innovative solutions for complex challenges.
  
  Key Application Areas:
  1. Healthcare
     • Personalized treatment plans
     • Drug discovery acceleration
     • Preventive care optimization
  
  2. Environmental Protection
     • Climate change modeling
     • Resource management
     • Ecosystem monitoring
  
  3. Education
     • Adaptive learning systems
     • Automated assessment
     • Personalized curriculum
  
  4. Smart Cities
     • Traffic optimization
     • Energy management
     • Public safety enhancement
  
  Emerging Opportunities:
  • Cross-domain integration
  • Hybrid AI systems
  • Human-AI collaboration
  • Sustainable solutions`,
        quiz: {
          questions: [
            {
              question: "Which sector is expected to see significant AI impact?",
              options: [
                "Healthcare",
                "Manual labor",
                "Basic arithmetic",
                "Simple data entry"
              ],
              correct: 0,
              explanation: "Healthcare is expected to see significant AI impact through personalized medicine, drug discovery, and improved diagnostics."
            },
            {
              question: "What is a key feature of future AI in education?",
              options: [
                "Replacing teachers",
                "Standardized teaching",
                "Personalized learning",
                "Eliminating assessments"
              ],
              correct: 2,
              explanation: "Personalized learning is a key feature of future AI in education, allowing content and pace to be adapted to individual student needs."
            }
          ]
        }
      }
    ],
  
    progressTracking: {
      enabled: true,
      features: {
        lessonProgress: true,
        quizScores: true,
        interactiveCompletion: true
      }
    },
  
    gamification: {
      enabled: true,
      elements: {
        badges: [
          {
            id: "future-explorer",
            title: "Future Explorer",
            condition: "Complete emerging technologies lesson"
          },
          {
            id: "ethics-champion",
            title: "Ethics Champion",
            condition: "Perfect score on ethics quiz"
          }
        ],
        achievements: true,
        leaderboard: false
      }
    }
  };
  
  export default module6;
```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 1s ease-out;
}

.animate-on-scroll.from-right {
  transform: translateX(100px);
}

.animate-on-scroll.from-bottom {
  transform: translateY(100px);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
.stagger-children > *:nth-child(1) { transition-delay: 0.1s; }
.stagger-children > *:nth-child(2) { transition-delay: 0.2s; }
.stagger-children > *:nth-child(3) { transition-delay: 0.3s; }
.stagger-children > *:nth-child(4) { transition-delay: 0.4s; }


```

# src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

# src/pages/ContactUs.jsx

```jsx
import React, { useState, useEffect } from 'react';
import {
  Mail,
  MessageCircle,
  Globe,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Clock,
  ChevronDown,
  MessagesSquare
} from 'lucide-react';

const ContactUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat Support",
      description: "Get instant help with your questions",
      action: "609-200-0017",
      color: "blue"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "We'll respond within 24 hours",
      action: "luminai321@gmail.com",
      link: "mailto:luminai321@gmail.com",
      color: "purple"
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Schedule a Call",
      description: "Book a quick call with our team",
      action: "Schedule Now",
      link: "https://calendly.com/luminai321",
      color: "pink"
    }
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "X",
      handle: "@LuminLearningAI",
      link: "https://x.com/LuminLearningAI"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      handle: "Lumin AI",
      link: "https://linkedin.com/company/luminai"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      handle: "@lumin.ai",
      link: "https://instagram.com/lumin.ai"
    }
  ];

  const faqItems = [
    {
      question: "What age groups are your AI programs designed for?",
      answer: "Our programs are specifically designed for middle school students (ages 11-14). We've carefully crafted our curriculum to be engaging and age-appropriate while teaching real AI concepts."
    },
    {
      question: "Do students need prior coding experience?",
      answer: "No prior coding experience is required! We start from the basics and gradually build up to more complex concepts. Our program is designed to be accessible to complete beginners while still being challenging for those with some coding experience."
    },
    {
      question: "What technology requirements are needed for the program?",
      answer: "Students need a computer (Windows, Mac, or Chromebook) with a stable internet connection. All other software and tools will be provided through our online learning platform."
    },
    {
      question: "How long are the summer programs?",
      answer: "Our standard program runs for 2 weeks with 4 sessions per week. Each session is 60-90 minutes long."
    },
    {
      question: "Is there any homework or outside practice required?",
      answer: "While we encourage practice between sessions, it's not mandatory. We provide optional exercises and projects for students who want to further develop their skills."
    },
    {
      question: "What makes Lumin AI's teaching approach unique?",
      answer: "We combine project-based learning with real-world applications, making AI concepts accessible and engaging. Our programs focus on hands-on experience, creative problem-solving, and ethical AI development."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center animate-on-scroll">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
              <span className="block text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                We're Here to Support Your AI Learning Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our AI education programs? Our team is ready to help you
              explore the exciting world of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                href={method.link}
                key={method.title}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-${method.color}-100`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-blue-600 font-medium flex items-center gap-2">
                  {method.action}
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our organization and what we offer!</p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    activeFaq === index ? 'max-h-48 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours & Social Links */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Support Hours */}
            <div className="bg-white rounded-xl p-8 animate-on-scroll shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Support Hours</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Live Chat & Email Support</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-600">Weekend: 10:00 AM - 4:00 PM EST</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    *Outside these hours? Don't worry! Check our FAQ section above or leave us a message,
                    and we'll get back to you on the next business day.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-8 animate-on-scroll shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Connect With Us</h2>
              </div>
              <div className="space-y-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shadow-sm">
                      {social.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{social.name}</h3>
                      <p className="text-sm">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
```

# src/pages/Founders.jsx

```jsx
import React from 'react';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

const founders = [
  {
    name: "Shashank Madala",
    role: "Founder & Co-CEO",
    bio: "Committed to revolutionizing STEM education through accessible AI learning. Leads Lumin AI's mission to empower the next generation of innovators.",
    vision: "Empowering every student to understand and shape the future of AI technology.",
    image: "/images/shashank1.png",
    links: {
      linkedin: "https://www.linkedin.com/in/shashank-madala-320989295/",
      github: "https://github.com/your-profile",
      email: "mailto:madala.shashank@gmail.com"
    }
  },
  {
    name: "Ayur Munipalli",
    role: "Founder & Co-CEO",
    bio: "Driven by the vision of making advanced technology education engaging and accessible. Shapes Lumin AI's innovative approach to teaching artificial intelligence.",
    vision: "Making complex AI concepts approachable and exciting for every student.",
    image: "images/ayur.png",
    links: {
      linkedin: "https://www.linkedin.com/in/ayur-munipalli/",
      github: "https://github.com/ayurmunipalli",
      email: "mailto:26munipallia@gmail.com"
    }
  }
];

export default function Founders() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">
              Our Founders
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate leaders dedicated to transforming AI education
            </p>
          </div>

          {/* Founders Cards */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {founders.map((founder) => (
              <div 
                key={founder.name}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {/* Profile Image */}
                  <div className="relative mb-8">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">{founder.name}</h2>
                    <div className="text-blue-600 font-medium mb-6 inline-block bg-blue-50 px-4 py-1 rounded-full">
                      {founder.role}
                    </div>
                    <p className="text-gray-600 mb-6">{founder.bio}</p>
                    <p className="text-gray-800 italic mb-8 text-sm">"{founder.vision}"</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                      <a 
                        href={founder.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <LinkedinIcon className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                      </a>
                      <a 
                        href={founder.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <GithubIcon className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                      </a>
                      <a 
                        href={founder.links.email}
                        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <Mail className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

# src/pages/Home.jsx

```jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Brain, Users, Rocket, Construction } from 'lucide-react';
import '../styles/animations.css';

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h1 className="text-7xl font-bold text-gray-900 tracking-tight mb-6">
              AI Education
              <span className="block text-6xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Made Easy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover a new way to learn AI - interactive, comprehensive, and designed for the future.
            </p>
            <Link 
              to="/learn" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
            >
              Start Learning Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 stagger-children">
            {[
              ['5,000+', 'Students'],
              ['20+', 'Modules'],
              ['95%', 'Success Rate'],
              ['4.9/5', 'Rating']
            ].map(([number, label], index) => (
              <div 
                key={label} 
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {number}
                </div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="w-full">
        <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            d="M0,40 C320,80 420,10 720,40 C1020,70 1380,20 1440,30 L1440,100 L0,100 Z" 
            fill="white" 
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* Why Choose Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-5xl font-bold mb-4">Why Choose Lumin AI?</h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI education designed for the next generation
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-600"/>,
                title: "Expert-Led Learning",
                description: "Learn from industry professionals and AI experts through carefully crafted curriculum"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600"/>,
                title: "Community Driven",
                description: "Join a vibrant community of learners and get support when you need it"
              },
              {
                icon: <Rocket className="w-8 h-8 text-blue-600"/>,
                title: "Hands-on Practice",
                description: "Apply your knowledge with real-world projects and practical exercises"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} flex items-start gap-16 group hover:bg-gray-50 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg`}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100 group-hover:shadow-md">
                  <div className="transform transition-transform duration-500 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                </div>
                <div className="transform transition-all duration-500 group-hover:translate-x-2">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600">Start your AI journey today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              to="/learn"
              className="animate-on-scroll bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm text-gray-500">3 weeks</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                AI Fundamentals
              </h3>
              <ul className="space-y-2">
                {['Introduction to AI', 'Machine Learning Basics', 'Neural Networks', 'Practical Applications'].map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500"/>
                    {topic}
                  </li>
                ))}
              </ul>
            </Link>

            {[
              {
                duration: '3 weeks',
                title: 'Deep Learning',
                topics: ['Neural Architecture', 'Computer Vision', 'Natural Language Processing', 'Advanced Topics']
              },
              {
                duration: '4 weeks',
                title: 'AI Applications',
                topics: ['Real-world Projects', 'Model Deployment', 'Best Practices', 'Industry Standards']
              }
            ].map((course) => (
              <div 
                key={course.title} 
                className="relative bg-white rounded-xl p-6 opacity-75 group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-yellow-100 px-4 py-2 rounded-full flex items-center gap-2">
                    <Construction className="w-5 h-5 text-yellow-700" />
                    <span className="text-yellow-700 font-medium">Coming Soon</span>
                  </div>
                </div>
                <div className="filter blur-[2px]">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"/>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {course.title}
                  </h3>
                  <ul className="space-y-2">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-green-500"/>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">See how our students are changing the world</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Arjun" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">Arjun Patel</h3>
                  <p className="text-blue-600">AI Innovator, Age 14</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Through Lumin AI's program, I developed an AI model to predict water quality in local rivers. The project 
                won first place at my regional science fair and is now being considered for implementation by local 
                environmental agencies."
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Miguel" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">Miguel Santos</h3>
                  <p className="text-blue-600">Student Developer, Age 14</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Using Lumin AI's program, I built my first machine learning model to identify different types of 
                local plants in my community in Brazil. It started as a small project but now I'm working with my 
                science teacher to expand it into a learning tool for younger students."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

# src/pages/Learn.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { Brain, Book, Trophy, ArrowLeft, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import ModuleList from '../components/course/ModuleList';
import LessonView from '../components/course/LessonView';
import FinalExam from '../components/course/FinalExam';
import Certificate from '../components/course/Certificate';
import ProgressTracker from '../components/course/ProgressTracker';
import PathView from '../components/course/PathView';  // Add this import
import courseData from '../data/courseData';

export default function Learn() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('article');
  const [showFinalExam, setShowFinalExam] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showLearningPath, setShowLearningPath] = useState(false);  // Add this state

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      moduleProgress: {},
      quizScores: {},
      streak: 0,
      lastAccessed: null,
      badges: [],
      finalExamScore: null,
      certificateIssued: false,
      examAttempts: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastAccessed !== today) {
      setProgress(prev => ({
        ...prev,
        streak: prev.lastAccessed === new Date(Date.now() - 86400000).toDateString()
          ? prev.streak + 1
          : 1,
        lastAccessed: today
      }));
    }
  }, []);

  const calculateTotalLessons = () => {
    return courseData.modules.reduce(
      (acc, module) => acc + module.lessons.length,
      0
    );
  };

  const isAllLessonsCompleted = () => {
    return progress.completedLessons.length === calculateTotalLessons();
  };

  const calculateProgress = () => {
    const totalLessons = calculateTotalLessons();
    return totalLessons > 0 ? (progress.completedLessons.length / totalLessons) * 100 : 0;
  };

  const handleStartExam = () => {
    if (!isAllLessonsCompleted()) {
      alert('Please complete all lessons before taking the final exam.');
      return;
    }
    setShowFinalExam(true);
  };

  const handleExamCompletion = (score) => {
    setProgress(prev => ({
      ...prev,
      finalExamScore: score,
      examAttempts: prev.examAttempts + 1
    }));

    if (score >= 60) {
      setShowCertificate(true);
    }
    setShowFinalExam(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 progress-bar"
          style={{ width: `${calculateProgress()}%` }}
        />
      </div>

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {showFinalExam ? (
            <FinalExam 
              onComplete={handleExamCompletion}
              onBack={() => setShowFinalExam(false)}
            />
          ) : showCertificate ? (
            <Certificate 
              progress={progress}
              onBack={() => setShowCertificate(false)}
            />
          ) : showLearningPath ? (  // Add this condition
            <>
              <button
                onClick={() => setShowLearningPath(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Course
              </button>
              <PathView 
                modules={courseData.modules}
                progress={progress}
                setActiveLesson={(lesson) => {
                  setActiveLesson(lesson);
                  setShowLearningPath(false);
                }}
              />
            </>
          ) : (
            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar Toggle (Mobile) */}
              <button
                className="fixed bottom-4 right-4 lg:hidden z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <Brain className="w-6 h-6" />
              </button>

              {/* Main Content */}
              <div className={`${activeLesson ? 'col-span-12 lg:col-span-8' : 'col-span-12'}`}>
                {activeLesson ? (
                  <div>
                    <button
                      onClick={() => setActiveLesson(null)}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-300"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back to Modules
                    </button>
                    <LessonView 
                      lesson={activeLesson}
                      progress={progress}
                      setProgress={setProgress}
                      onBack={() => setActiveLesson(null)}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Progress Tracker */}
                    <ProgressTracker 
                      progress={progress}
                      totalLessons={calculateTotalLessons()}
                    />

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <button 
                        onClick={handleStartExam}
                        className={`p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between ${
                          !isAllLessonsCompleted() ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={!isAllLessonsCompleted()}
                      >
                        <div className="flex items-center gap-3">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <span>Final Exam</span>
                        </div>
                        {progress.examAttempts > 0 && (
                          <span className="text-sm text-gray-500">
                            Best: {progress.finalExamScore}%
                          </span>
                        )}
                      </button>
                      
                      <button 
                        onClick={() => progress.finalExamScore >= 60 ? setShowCertificate(true) : null}
                        disabled={!progress.finalExamScore || progress.finalExamScore < 60}
                        className={`p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 ${
                          (!progress.finalExamScore || progress.finalExamScore < 60) ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <Award className="w-5 h-5 text-green-500" />
                        <span>Certificate</span>
                        {(!progress.finalExamScore || progress.finalExamScore < 60) && (
                          <span className="text-sm text-red-500 ml-2">(Pass exam first)</span>
                        )}
                      </button>
                      
                      <button 
                        className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3"
                        onClick={() => setShowLearningPath(true)}  // Update this onClick
                      >
                        <Brain className="w-5 h-5 text-blue-500" />
                        <span>Learning Path</span>
                      </button>
                    </div>

                    {/* Module List */}
                    <ModuleList 
                      modules={courseData.modules}
                      progress={progress}
                      activeModule={activeModule}
                      setActiveModule={setActiveModule}
                      setActiveLesson={setActiveLesson}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar (visible in lesson view) */}
              {activeLesson && (
                <div className={`col-span-12 lg:col-span-4 ${
                  showSidebar ? 'fixed lg:relative inset-0 lg:inset-auto z-40' : 'hidden lg:block'
                }`}>
                  <div className="h-full bg-white p-6 rounded-xl shadow-lg overflow-y-auto">
                    <h3 className="text-xl font-semibold mb-4">Course Contents</h3>
                    <div className="space-y-4">
                      {courseData.modules.map(module => (
                        <div key={module.id} className="space-y-2">
                          <div className="font-medium text-gray-900">{module.title}</div>
                          <div className="pl-4 space-y-1">
                            {module.lessons.map(lesson => (
                              <button
                                key={lesson.id}
                                onClick={() => setActiveLesson(lesson)}
                                className={`w-full text-left px-2 py-1 rounded ${
                                  activeLesson.id === lesson.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {lesson.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
```

# src/pages/SummerProgram.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  ArrowRight,
  Brain,
  Star,
  ChevronDown,
  Code,
  Sparkles,
  Target,
  Check,
  PlayCircle
} from 'lucide-react';

export default function SummerProgram() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeSession, setActiveSession] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [isTimelineAnimated, setIsTimelineAnimated] = useState(false);
  const [hoveredBadgeIndex, setHoveredBadgeIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target.classList.contains('badge-trigger')) {
              setShowBadge(true);
            }
            if (entry.target.classList.contains('timeline-trigger')) {
              setIsTimelineAnimated(true);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('.animate-on-scroll, .badge-trigger, .timeline-trigger').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const sessions = {
    1: [
      {
        title: "Introduction to AI",
        description: "Basic concepts and Python setup",
        outcomes: ["Understanding AI fundamentals", "Python environment setup", "First program"],
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: "Machine Learning Basics",
        description: "Core ML concepts and applications",
        outcomes: ["Data analysis basics", "Simple ML models", "Practice exercises"],
        icon: <Code className="w-6 h-6" />
      }
    ],
    2: [
      {
        title: "Advanced Concepts",
        description: "Deep learning and neural networks",
        outcomes: ["Neural network basics", "Model training", "AI ethics"],
        icon: <Sparkles className="w-6 h-6" />
      },
      {
        title: "Project Work",
        description: "Build your own AI application",
        outcomes: ["Project planning", "Implementation", "Presentation"],
        icon: <Target className="w-6 h-6" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll from-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6">
                <Star className="w-4 h-4" />
                Applications Open for Summer 2025
              </div>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Transform Your Summer with
                <span className="block text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mt-2">
                  AI Learning
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our 2-week intensive program designed specifically for middle school students
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://forms.gle/YzAwMRgzQq8saqrPA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative animate-on-scroll from-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Learn AI Fundamentals</h3>
                      <p className="text-gray-600">From basics to practical applications</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Build Projects</h3>
                      <p className="text-gray-600">Hands-on coding experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Earn Certificate</h3>
                      <p className="text-gray-600">Recognition of achievement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Timeline</h2>
            <p className="text-xl text-gray-600">Your journey to AI mastery</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              {[1, 2].map((week) => (
                <button
                  key={week}
                  onClick={() => setActiveWeek(week)}
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${
                    activeWeek === week 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Week {week}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 relative">
            <div className="absolute inset-y-0 left-[50%] w-0.5 bg-gray-200"/>
            {sessions[activeWeek].map((session, index) => (
              <div
                key={session.title}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:transform md:translate-x-1/2'
                }`}
              >
                <div 
                  className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 timeline-trigger ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  } ${isTimelineAnimated ? 'animate-in from-left' : ''}`}
                >
                  <div className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? 'justify-end' : ''
                  }`}>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      {session.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{session.title}</h3>
                      <p className="text-gray-600">{session.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {session.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0"/>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Badges Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Achievements</h2>
            <p className="text-xl text-gray-600">Earn badges as you progress</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: "AI Explorer",
                description: "Complete introduction to AI"
              },
              {
                icon: <Code className="w-8 h-8 text-purple-600" />,
                title: "Code Master",
                description: "Build your first AI model"
              },
              {
                icon: <Target className="w-8 h-8 text-pink-600" />,
                title: "Project Pro",
                description: "Complete project implementation"
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-600" />,
                title: "AI Graduate",
                description: "Program completion"
              }
            ].map((badge, index) => (
              <div 
                key={badge.title}
                className="relative bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredBadgeIndex(index)}
                onMouseLeave={() => setHoveredBadgeIndex(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center transition-transform duration-300 ${hoveredBadgeIndex === index ? 'scale-110' : ''}`}>
                  {badge.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Start Your AI Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our innovative summer program and discover the exciting world of artificial intelligence
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://forms.gle/PLSuUZvRf2tArXCM6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
```

# src/pages/Team.jsx

```jsx
import React, { useState } from 'react';
import { MapPin, Users, Building, Sparkles } from 'lucide-react';

const chapters = [
  {
    name: "Bay Area Chapter",
    location: "San Francisco, CA",
    description: "Leading innovation in AI education across Silicon Valley",
    members: [
      { name: "Alex Chen", role: "Chapter Lead", image: "/api/placeholder/64/64" },
      { name: "Sarah Johnson", role: "Education Director", image: "/api/placeholder/64/64" },
      { name: "James Wilson", role: "Technical Lead", image: "/api/placeholder/64/64" },
      { name: "Maya Patel", role: "Outreach Coordinator", image: "/api/placeholder/64/64" }
    ]
  },
  {
    name: "New York Chapter",
    location: "New York, NY",
    description: "Bringing AI education to the heart of the East Coast",
    members: [
      { name: "David Kim", role: "Chapter Lead", image: "/api/placeholder/64/64" },
      { name: "Emily Rodriguez", role: "Education Director", image: "/api/placeholder/64/64" },
      { name: "Michael Chang", role: "Technical Lead", image: "/api/placeholder/64/64" },
      { name: "Sofia Martinez", role: "Community Manager", image: "/api/placeholder/64/64" }
    ]
  },
  {
    name: "Texas Chapter",
    location: "Austin, TX",
    description: "Fostering AI innovation in the Lone Star State",
    members: [
      { name: "Robert Turner", role: "Chapter Lead", image: "/api/placeholder/64/64" },
      { name: "Lisa Wang", role: "Education Director", image: "/api/placeholder/64/64" },
      { name: "Chris Anderson", role: "Technical Lead", image: "/api/placeholder/64/64" },
      { name: "Emma Davis", role: "Events Coordinator", image: "/api/placeholder/64/64" }
    ]
  }
];

export default function Team() {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      <div className="pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-gray-600">
              Meet the dedicated individuals bringing AI education to your community
            </p>
          </div>

          {/* Chapter Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{chapters.length}</h3>
              <p className="text-gray-600">Active Chapters</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {chapters.reduce((acc, chapter) => acc + chapter.members.length, 0)}
              </h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Students Impacted</p>
            </div>
          </div>

          {/* Chapter Selection */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-lg bg-white shadow-sm p-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter.name}
                  onClick={() => setActiveChapter(chapter)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeChapter.name === chapter.name
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {chapter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Chapter Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Chapter Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>{activeChapter.location}</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">{activeChapter.name}</h2>
                <p className="text-blue-100">{activeChapter.description}</p>
              </div>

              {/* Team Members */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {activeChapter.members.map((member, index) => (
                    <div 
                      key={member.name}
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
                      onMouseEnter={() => setHoveredMember(member.name)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                        hoveredMember === member.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm text-gray-600">
                          Passionate about bringing AI education to students and building the next generation of innovators.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

# src/styles/animations.css

```css
@keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease-out;
  }
  
  .animate-on-scroll.from-right {
    transform: translateX(100px);
  }
  
  .animate-on-scroll.from-bottom {
    transform: translateY(100px);
  }
  
  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .stagger-children > *:nth-child(1) { transition-delay: 0.1s; }
  .stagger-children > *:nth-child(2) { transition-delay: 0.2s; }
  .stagger-children > *:nth-child(3) { transition-delay: 0.3s; }
  .stagger-children > *:nth-child(4) { transition-delay: 0.4s; }
```

# src/styles/learn.css

```css
@keyframes gradient {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  
  .progress-bar {
    background-size: 200% 100%;
    animation: gradient 2s linear infinite;
  }
```

# tailwind.config.cjs

```cjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      },
      // Additional utilities needed for the learning platform
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
          },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this if you want to use prose classes
  ],
}
```

# vite.config.js

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  base: '/'
});
```

