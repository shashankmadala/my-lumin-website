# .claude/settings.local.json

```json
{
  "permissions": {
    "allow": [
      "Bash(ls:*)",
      "Bash(npx create-next-app:*)",
      "Bash(npm install:*)",
      "Bash(find:*)",
      "Bash(python3:*)",
      "Bash(source:*)",
      "Bash(pip install:*)",
      "Bash(mkdir:*)",
      "Bash(touch:*)",
      "WebFetch(domain:github.com)",
      "Bash(git clone:*)",
      "Bash(cp:*)",
      "Bash(python:*)",
      "Bash(PYTHONPATH=. python -c \"\nfrom app.services.english_to_asl import EnglishToASLTranslator\ntranslator = EnglishToASLTranslator(gifs_directory=''static/gifs'')\nprint(''Available words:'', len(translator.get_available_words()))\nprint(''First 10 words:'', translator.get_available_words()[:10])\nprint(''Test translation for \"\"hello good day\"\":'', translator.translate_text_to_asl(''hello good day''))\n\")",
      "Bash(PYTHONPATH=. python:*)",
      "Bash(npm run build:*)",
      "Bash(mv:*)",
      "Bash(rm:*)"
    ],
    "deny": []
  }
}
```

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
    <link rel="icon" type="image/png" href="/images/lumin.png" />
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
    "@vercel/analytics": "^1.5.0",
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

# public/_redirects

```
/*    /index.html   200 
```

# public/gallery/IMG_8314-2.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8315.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8316.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8317.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8319.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8320-2.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8321-2.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8324-2.jpg

This is a binary file of the type: Image

# public/gallery/IMG_8325-2.jpg

This is a binary file of the type: Image

# public/images/aayush.png

This is a binary file of the type: Image

# public/images/ayur.png

This is a binary file of the type: Image

# public/images/corweave-logo.png

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
import PolicyTeam from './pages/PolicyTeam.jsx';
import Chapters from './pages/Chapters.jsx';
import JoinUs from './pages/JoinUs.jsx';
import { Analytics } from "@vercel/analytics/react"

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
            <Route path='/policy-team' element={<PolicyTeam />} />
            <Route path='/chapters' element={<Chapters />} />
            <Route path='/join-us' element={<JoinUs />} />
            <Route path='/learn' element={<Learn />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
```

# src/assets/gallery/IMG_8314 2.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8315.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8316.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8317.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8319.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8320 2.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8321 2.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8322.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8324 2.jpg

This is a binary file of the type: Image

# src/assets/gallery/IMG_8325 2.jpg

This is a binary file of the type: Image

# src/assets/gallery/react.svg

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
  setActiveLesson,
  showTitle = true // Add default value for backward compatibility
}) => {
  return (
    <div className="space-y-8">
      {/* Course Overview - Only show if showTitle is true */}
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Fundamentals</h1>
          <p className="text-xl text-gray-600">
            Master the fundamentals of artificial intelligence and machine learning
          </p>
        </div>
      )}

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

# src/components/Footer.jsx

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Founders', path: '/founders' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact Us', path: '/contact-us' },
    ],
    programs: [
      { name: 'Summer Program', path: '/summer-program' },
      { name: 'Learn', path: '/learn' },
      { name: 'Resources', path: '/resources' },
      { name: 'Blog', path: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white">
              Lumin
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering the next generation through innovative education and technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Programs
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lumin. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
```

# src/components/ImageCarousel.jsx

```jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(images.length / 3) - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Group images into sets of 3
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3));
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Program in Action</h2>
        <p className="text-xl text-gray-600">
          See our students learning and growing in our AI education programs
        </p>
      </div>

      <div className="relative">
        {/* Main carousel container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                  {group.map((image, imageIndex) => (
                    <div 
                      key={imageIndex}
                      className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                        <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        {imageGroups.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {imageGroups.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {imageGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const links = [
  { to: '/', text: 'Home', id: 'home' },
  {
    text: 'About',
    id: 'about',
    dropdown: [
      { to: '/founders', text: 'Founders', id: 'founders' },
      { to: '/chapters', text: 'Chapters', id: 'chapters' },
    ]
  },
  { to: '/join-us', text: 'Join Us', id: 'join' },
  { to: '/summer-program', text: 'Summer Program', id: 'summer' },
  { to: '/learn', text: 'Learn', id: 'learn' },
  { to: '/contact-us', text: 'Contact', id: 'contact' }
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleMobileNavigation = (path) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    navigate(path);
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex ml-8 gap-6 flex-1">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 ml-auto"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="py-2">
              {links.map((link) => (
                <div key={link.id}>
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => handleDropdownClick(link.id)}
                        className="w-full flex items-center justify-between text-left px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-medium">{link.text}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.id ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {openDropdown === link.id && (
                        <div className="bg-gray-50">
                          {link.dropdown.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleMobileNavigation(item.to)}
                              className="w-full text-left px-8 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            >
                              {item.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleMobileNavigation(link.to)}
                      className="block px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {link.text}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
```

# src/components/projects/ImageClassifier.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, Check, X, Image, Brain, FileText, Award, ArrowRight } from 'lucide-react';

// Sample data - In a real implementation, you'd have actual images
const sampleImages = [
  { id: 1, src: '/api/placeholder/300/300', category: null },
  { id: 2, src: '/api/placeholder/300/300', category: null },
  { id: 3, src: '/api/placeholder/300/300', category: null },
  { id: 4, src: '/api/placeholder/300/300', category: null },
  { id: 5, src: '/api/placeholder/300/300', category: null },
  { id: 6, src: '/api/placeholder/300/300', category: null },
  { id: 7, src: '/api/placeholder/300/300', category: null },
  { id: 8, src: '/api/placeholder/300/300', category: null },
  { id: 9, src: '/api/placeholder/300/300', category: null },
  { id: 10, src: '/api/placeholder/300/300', category: null },
  { id: 11, src: '/api/placeholder/300/300', category: null },
  { id: 12, src: '/api/placeholder/300/300', category: null },
  { id: 13, src: '/api/placeholder/300/300', category: null },
  { id: 14, src: '/api/placeholder/300/300', category: null },
  { id: 15, src: '/api/placeholder/300/300', category: null }
];

// Test images for algorithm testing
const testImages = [
  { id: 101, src: '/api/placeholder/300/300', realCategory: 'food' },
  { id: 102, src: '/api/placeholder/300/300', realCategory: 'not-food' },
  { id: 103, src: '/api/placeholder/300/300', realCategory: 'food' },
  { id: 104, src: '/api/placeholder/300/300', realCategory: 'not-food' },
  { id: 105, src: '/api/placeholder/300/300', realCategory: 'food' }
];

const ImageClassifier = ({ onComplete, onBack }) => {
  const [phase, setPhase] = useState(1); // 1: Classification, 2: Pattern Analysis, 3: Algorithm Design
  const [images, setImages] = useState(sampleImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [patterns, setPatterns] = useState(['', '', '']);
  const [algorithm, setAlgorithm] = useState([
    { question: '', ifYes: 'food', ifNo: 'not-food' },
    { question: '', ifYes: 'food', ifNo: 'not-food' }
  ]);
  const [testResults, setTestResults] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleClassify = (category) => {
    const updatedImages = [...images];
    updatedImages[currentImageIndex].category = category;
    setImages(updatedImages);
    
    // Move to next image or next phase
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setPhase(2);
    }
  };

  const handlePatternChange = (index, value) => {
    const newPatterns = [...patterns];
    newPatterns[index] = value;
    setPatterns(newPatterns);
  };

  const handleAlgorithmChange = (index, field, value) => {
    const newAlgorithm = [...algorithm];
    newAlgorithm[index][field] = value;
    setAlgorithm(newAlgorithm);
  };

  const handleTestResult = (imageId, result) => {
    setTestResults({
      ...testResults,
      [imageId]: result
    });
  };

  const canAdvanceFromPhase2 = patterns.filter(p => p.trim() !== '').length >= 2;
  
  const canAdvanceFromPhase3 = () => {
    const algorithmsComplete = algorithm.every(a => a.question.trim() !== '');
    const allTested = Object.keys(testResults).length === testImages.length;
    return algorithmsComplete && allTested;
  };

  const getCompletionPercentage = () => {
    if (phase === 1) {
      return (images.filter(img => img.category !== null).length / images.length) * 100;
    }
    return 100;
  };

  const calculateAccuracy = () => {
    if (Object.keys(testResults).length === 0) return 0;
    
    const correct = Object.keys(testResults).filter(
      id => testResults[id] === testImages.find(img => img.id.toString() === id).realCategory
    ).length;
    
    return (correct / Object.keys(testResults).length) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to course
        </button>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            {phase === 1 ? `${Math.round(getCompletionPercentage())}% Complete` : 
             phase === 2 ? "Pattern Analysis" : 
             phase === 3 ? "Algorithm Design" : "Complete!"}
          </div>
          
          {/* Phase indicators */}
          <div className="flex gap-2">
            {[1, 2, 3].map((p) => (
              <div 
                key={p}
                className={`w-3 h-3 rounded-full ${
                  phase >= p ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Phase 1: Classification */}
        {phase === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Image Classification</h2>
            <p className="text-gray-600 mb-8">
              Classify each image as either "Food" or "Not Food". This will create your training dataset.
            </p>
            
            <div className="flex flex-col items-center mb-8">
              <div className="w-64 h-64 bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img 
                  src={images[currentImageIndex].src} 
                  alt={`Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => handleClassify('food')}
                  className="px-6 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Food
                </button>
                <button
                  onClick={() => handleClassify('not-food')}
                  className="px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Not Food
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="mb-2 text-sm text-gray-600">Progress</div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${getCompletionPercentage()}%` }}
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Image {currentImageIndex + 1} of {images.length}
              </div>
            </div>
          </div>
        )}

        {/* Phase 2: Pattern Analysis */}
        {phase === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Pattern Analysis</h2>
            <p className="text-gray-600 mb-8">
              Review your classifications and identify patterns that helped you determine if an image was food or not.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Your "Food" Images</h3>
                <div className="grid grid-cols-2 gap-2">
                  {images
                    .filter(img => img.category === 'food')
                    .slice(0, 6)
                    .map(img => (
                      <div key={img.id} className="w-full aspect-square bg-gray-100 rounded overflow-hidden">
                        <img src={img.src} alt="Food" className="w-full h-full object-cover" />
                      </div>
                    ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Your "Not Food" Images</h3>
                <div className="grid grid-cols-2 gap-2">
                  {images
                    .filter(img => img.category === 'not-food')
                    .slice(0, 6)
                    .map(img => (
                      <div key={img.id} className="w-full aspect-square bg-gray-100 rounded overflow-hidden">
                        <img src={img.src} alt="Not Food" className="w-full h-full object-cover" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium mb-4">Identify Patterns</h3>
              <p className="text-gray-600 mb-4">
                What visual patterns helped you determine if something was food or not? Identify at least 2 patterns.
              </p>
              
              {patterns.map((pattern, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700 mb-2">Pattern {index + 1}:</label>
                  <input
                    type="text"
                    value={pattern}
                    onChange={(e) => handlePatternChange(index, e.target.value)}
                    placeholder={`E.g., "Foods usually have rounded shapes"`}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setPhase(3)}
                disabled={!canAdvanceFromPhase2}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                  canAdvanceFromPhase2 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next: Create Algorithm
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Phase 3: Algorithm Design */}
        {phase === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Algorithm Design</h2>
            <p className="text-gray-600 mb-8">
              Create a simple decision tree algorithm for classifying images as "Food" or "Not Food".
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium mb-4">Create Decision Rules</h3>
              
              {algorithm.map((rule, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-none">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Question {index + 1}:</label>
                    <input
                      type="text"
                      value={rule.question}
                      onChange={(e) => handleAlgorithmChange(index, 'question', e.target.value)}
                      placeholder={`E.g., "Is the object rounded?"`}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">If YES:</label>
                      <select
                        value={rule.ifYes}
                        onChange={(e) => handleAlgorithmChange(index, 'ifYes', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="food">Classify as Food</option>
                        <option value="not-food">Classify as Not Food</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">If NO:</label>
                      <select
                        value={rule.ifNo}
                        onChange={(e) => handleAlgorithmChange(index, 'ifNo', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="food">Classify as Food</option>
                        <option value="not-food">Classify as Not Food</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Test Your Algorithm</h3>
              <p className="text-gray-600 mb-4">
                Apply your decision rules to these test images. Would your algorithm classify them as food or not food?
              </p>
              
              <div className="space-y-6">
                {testImages.map((img) => (
                  <div key={img.id} className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
                    <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                      <img src={img.src} alt="Test image" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium mb-2">Test Image {img.id - 100}</p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleTestResult(img.id, 'food')}
                          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                            testResults[img.id] === 'food'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          Food
                        </button>
                        <button
                          onClick={() => handleTestResult(img.id, 'not-food')}
                          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                            testResults[img.id] === 'not-food'
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          Not Food
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {Object.keys(testResults).length === testImages.length && (
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-medium mb-2">Algorithm Performance</h3>
                <p className="text-xl font-bold text-blue-700">
                  Accuracy: {calculateAccuracy().toFixed(0)}%
                </p>
                <p className="text-gray-600 mt-2">
                  Your algorithm correctly classified {Object.keys(testResults).filter(
                    id => testResults[id] === testImages.find(img => img.id.toString() === id).realCategory
                  ).length} out of {testImages.length} test images.
                </p>
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setCompleted(true);
                  if (onComplete) onComplete({
                    patterns,
                    algorithm,
                    accuracy: calculateAccuracy()
                  });
                }}
                disabled={!canAdvanceFromPhase3()}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                  canAdvanceFromPhase3()
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Complete Project
                <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Completion */}
        {completed && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Project Completed!</h2>
            <p className="text-gray-600 mb-8">
              Congratulations! You've successfully built a simple image classifier
              and designed your own algorithm.
            </p>
            
            <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Your Results</h3>
              <div className="text-left">
                <p className="mb-2"><span className="font-medium">Patterns Identified:</span> {patterns.filter(p => p.trim() !== '').length}</p>
                <p className="mb-2"><span className="font-medium">Algorithm Rules:</span> {algorithm.length}</p>
                <p><span className="font-medium">Algorithm Accuracy:</span> {calculateAccuracy().toFixed(0)}%</p>
              </div>
            </div>
            
            <button
              onClick={onBack}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Return to Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageClassifier;
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
      duration: "15 min",
      article: `Artificial Intelligence (AI) is the development of computer systems capable of performing tasks that typically require human intelligence. These tasks include reasoning, problem-solving, understanding natural language, recognizing patterns, and adapting to new situations. AI operates on algorithms—a set of instructions that tell machines how to perform tasks—and leverages vast amounts of data to improve its accuracy and efficiency over time.

Breaking Down AI
At its core, AI is built on a few key ideas:

Categories of AI
AI can be broadly categorized into three types based on its capabilities:

Narrow AI (Weak AI): Designed for specific tasks, narrow AI systems are highly proficient within their domain but cannot perform beyond it. Examples include voice assistants like Siri and Alexa, facial recognition software, and recommendation systems such as those used by Netflix and Spotify.

General AI (Strong AI): A theoretical concept, general AI refers to machines with the ability to understand, learn, and perform any intellectual task that a human can. Such systems would exhibit self-awareness and the ability to transfer knowledge across different domains. Achieving general AI remains a significant challenge for researchers.

Superintelligent AI: This theoretical stage of AI would surpass human intelligence in all respects, including creativity, problem-solving, and understanding emotions. While it could revolutionize fields like healthcare and space exploration, it also raises ethical concerns and potential risks.

Core Subfields of AI
AI encompasses several specialized subfields, including:

Machine Learning (ML): Focuses on enabling machines to learn from data and improve over time without explicit programming.
Natural Language Processing (NLP): Involves teaching machines to understand and generate human language, as seen in chatbots and translation software.
Computer Vision: Enables machines to interpret and analyze visual data from the world.
Robotics: Combines AI with engineering to create systems that can perform tasks in the physical world.

Why Learn About AI?
AI is everywhere in today's world. It powers your smartphone's predictive text, helps doctors diagnose diseases, and even enables self-driving cars. Learning about AI can help you understand the technology shaping the future and inspire you to create or work with AI systems yourself.

How AI Works: A Simple Example
Imagine you're teaching a computer to recognize whether a photo contains a dog or a cat. Here's how AI approaches the problem:
1. Input Data: You collect hundreds or thousands of labeled photos. Some are labeled "cat," and others are labeled "dog."
2. Training the Model: You feed these photos into an algorithm, which studies the differences in patterns (like fur texture, ear shape, etc.) between cats and dogs.
3. Testing: Once trained, the model is tested with new photos to see if it can correctly identify cats and dogs it hasn't seen before.
4. Improvement: If the model makes mistakes, you provide more data or adjust its algorithm to improve accuracy.`,
      quiz: {
        questions: [
          {
            question: "What are the three main categories of AI?",
            options: [
              "Narrow AI, General AI, and Superintelligent AI",
              "Basic AI, Advanced AI, and Expert AI",
              "Learning AI, Teaching AI, and Working AI",
              "Simple AI, Complex AI, and Super AI"
            ],
            correct: 0,
            explanation: "AI is categorized into Narrow AI (specific tasks), General AI (human-level intelligence), and Superintelligent AI (beyond human capabilities)."
          },
          {
            question: "Which of these is NOT a core subfield of AI?",
            options: [
              "Machine Learning",
              "Natural Language Processing",
              "Digital Marketing",
              "Computer Vision"
            ],
            correct: 2,
            explanation: "While AI can be applied to digital marketing, it is not a core subfield of AI. The main subfields include Machine Learning, NLP, Computer Vision, and Robotics."
          },
          {
            question: "In the cat-dog recognition example, what is the first step in teaching AI to recognize images?",
            options: [
              "Testing the model",
              "Collecting labeled photos",
              "Improving accuracy",
              "Adjusting algorithms"
            ],
            correct: 1,
            explanation: "The first step is collecting labeled data (Input Data) - in this case, photos labeled as either 'cat' or 'dog' to train the AI model."
          }
        ]
      }
    },
    {
      id: "1.2",
      title: "Finding AI in Everyday Life",
      duration: "15 min",
      article: `Artificial Intelligence (AI) is not just a futuristic concept; it's already a part of our daily lives, often in ways we don't even notice. From the apps on your phone to the way your favorite websites work, AI is everywhere. Understanding where and how AI is used can help you appreciate its importance and see its potential to shape the future.

Everyday Applications of AI

Smartphones:
- AI helps your phone predict the next word as you type, making texting faster.
- Virtual assistants like Siri and Google Assistant understand your voice commands, answering questions or setting reminders.
- Facial recognition uses AI to unlock your phone securely.

Streaming Services:
- Platforms like Netflix, Spotify, and YouTube use AI to recommend shows, movies, or songs based on your past preferences.
- AI analyzes your viewing or listening habits to suggest content you're likely to enjoy.

Online Shopping:
- When you shop online, AI recommends products you might like based on your browsing history.
- Chatbots on websites answer your questions, helping you find what you need quickly.

Social Media:
- Ever wondered why certain posts or ads show up in your feed? AI determines what content to show you by analyzing your likes, shares, and comments.
- Facial recognition tags your friends in photos automatically.

Transportation:
- Navigation apps like Google Maps use AI to find the fastest routes by analyzing real-time traffic data.
- Ride-sharing apps like Uber and Lyft use AI to match riders with drivers efficiently.
- Self-driving cars rely entirely on AI to make decisions on the road.

Healthcare:
- AI assists doctors by analyzing medical images to detect diseases like cancer.
- It powers fitness trackers that monitor your heart rate, sleep, and activity levels, offering personalized health advice.

Gaming:
- Video game opponents adapt to your playing style, providing a more challenging experience.
- AI creates realistic environments and characters in games.

How AI Works Behind the Scenes:
- Data Collection: AI systems gather data about your activities, like what shows you watch or the places you visit.
- Pattern Recognition: AI analyzes this data to find patterns. For example, if you often watch action movies, AI learns to recommend similar films.
- Decision Making: Based on these patterns, AI predicts what you might like or need next.
- Learning: The more you interact with AI systems, the better they get at understanding your preferences.

The Bigger Picture:
AI isn't just about convenience. It's solving big problems too:
- Predicting natural disasters by analyzing weather patterns.
- Helping farmers grow crops more efficiently by monitoring soil and weather conditions.
- Assisting in space exploration by analyzing data from distant planets.`,
      quiz: {
        questions: [
          {
            question: "Which of these is NOT a common use of AI in smartphones?",
            options: [
              "Predictive text while typing",
              "Voice assistant commands",
              "Battery manufacturing",
              "Facial recognition"
            ],
            correct: 2,
            explanation: "While AI is used in many smartphone features like predictive text, voice assistants, and facial recognition, battery manufacturing is primarily a physical manufacturing process, not an AI application."
          },
          {
            question: "How does AI improve streaming services like Netflix?",
            options: [
              "By creating the movies and shows",
              "By recommending content based on viewing habits",
              "By controlling the streaming speed",
              "By setting subscription prices"
            ],
            correct: 1,
            explanation: "AI in streaming services primarily analyzes viewing habits to recommend personalized content to users, enhancing their experience by suggesting shows and movies they might enjoy."
          },
          {
            question: "What is the primary way AI works behind the scenes?",
            options: [
              "By manually programming every decision",
              "By collecting and analyzing patterns in data",
              "By asking users what they want",
              "By copying other applications"
            ],
            correct: 1,
            explanation: "AI works by collecting data, recognizing patterns in that data, and using those patterns to make decisions and predictions, continuously learning from new interactions."
          }
        ]
      }
    },
    {
      id: "1.3",
      title: "Simple Pattern Recognition Activities",
      duration: "15 min",
      article: `Pattern recognition is one of the simplest and most important concepts in Artificial Intelligence (AI). It involves identifying trends, similarities, or structures in data—skills that humans and machines alike rely on to make sense of the world. In AI, this ability forms the foundation for more advanced systems, from identifying faces in photos to predicting stock market trends.

What Is Pattern Recognition?
Pattern recognition is about finding order in chaos. Imagine trying to guess the next number in this sequence: 2, 4, 6, 8. You quickly notice the numbers increase by 2 each time. This is a simple example of pattern recognition. AI systems do the same thing, but with much larger and more complex datasets, such as millions of images or lines of text.

Why Is It Important?
In AI, pattern recognition allows machines to:
- Classify Data: For example, sorting images into categories like "cat" or "dog."
- Detect Anomalies: Identifying unusual patterns, like a sudden spike in credit card activity that could indicate fraud.
- Make Predictions: Forecasting weather, sales trends, or the outcome of a game.

How AI Recognizes Patterns
AI systems use algorithms to find patterns in data. One common method is feature extraction:
- Identifying Features: For example, in handwriting analysis, features might include the slope of the letters or the spacing between words.
- Comparing Data: AI compares these features across many examples to determine similarities and differences.
- Making Decisions: Based on patterns, AI decides how to classify or respond to new data.

Real-World Examples of Pattern Recognition:
- Facial Recognition: Your smartphone's ability to unlock when it "sees" you.
- Spam Filters: Email systems recognizing patterns in spam messages, like repeated phrases or suspicious links.
- Search Engines: Google's algorithms identify patterns in your searches to show the most relevant results.

Challenges in Pattern Recognition:
While pattern recognition is powerful, it's not perfect. Machines can struggle with:
- Ambiguity: If patterns aren't clear, the AI might make mistakes.
- Bias in Data: If the training data has errors or is incomplete, the AI might learn incorrect patterns.
- Complexity: Real-world patterns are often more intricate than simple sequences, requiring advanced techniques to analyze.

The Future of Pattern Recognition in AI:
Pattern recognition continues to evolve, enabling breakthroughs in:
- Healthcare: AI systems identifying patterns in medical data to diagnose diseases earlier.
- Climate Science: Recognizing weather patterns to predict and mitigate natural disasters.
- Autonomous Vehicles: Detecting patterns in traffic to navigate safely.`,
      quiz: {
        questions: [
          {
            question: "What is the primary purpose of pattern recognition in AI?",
            options: [
              "To make computers faster",
              "To find order and structure in data",
              "To store more information",
              "To create new patterns"
            ],
            correct: 1,
            explanation: "Pattern recognition in AI is fundamentally about finding order and structure in data, allowing machines to identify trends, similarities, and relationships."
          },
          {
            question: "Which of these is a real-world application of pattern recognition?",
            options: [
              "Manufacturing computer chips",
              "Painting pictures",
              "Spam email filtering",
              "Installing software"
            ],
            correct: 2,
            explanation: "Spam filtering is a classic example of pattern recognition, where AI systems identify common patterns in spam emails to filter them out."
          },
          {
            question: "What is one of the main challenges in pattern recognition?",
            options: [
              "High cost of computers",
              "Lack of data storage",
              "Slow internet speeds",
              "Ambiguity in patterns"
            ],
            correct: 3,
            explanation: "Ambiguity in patterns is a significant challenge in pattern recognition, as unclear or complex patterns can lead to mistakes in AI interpretation."
          }
        ]
      }
    },
    {
      id: "1.4",
      title: "Basic Machine Learning Concepts Through Games",
      duration: "15 min",
      article: `Machine Learning (ML) is one of the most exciting areas of Artificial Intelligence (AI). It enables computers to learn from data and improve their performance without being explicitly programmed. Think of it as teaching a computer to make decisions based on experience, much like how humans learn new skills over time.

What Is Machine Learning?
At its core, machine learning involves three key steps:
1. Training: The computer is given data (called training data) and learns patterns or rules from it.
2. Testing: After learning, the computer is tested on new data to see how well it can apply what it has learned.
3. Improving: If the computer makes mistakes, it adjusts its approach to do better next time.

Types of Machine Learning:

Supervised Learning:
- The computer learns from labeled data
- Example: Teaching a system to identify animals by showing it images labeled "cat" or "dog"

Unsupervised Learning:
- The computer is given unlabeled data and asked to find patterns
- Example: Grouping customers based on their shopping habits

Reinforcement Learning:
- The computer learns through trial and error
- Example: A game-playing AI learning winning strategies

Real-World Applications of Machine Learning:
- Healthcare: Diagnosing diseases by analyzing medical images or patient data
- Finance: Detecting fraudulent transactions by spotting unusual spending patterns
- Entertainment: Creating personalized recommendations for movies, music, and games
- Transportation: Enabling self-driving cars to recognize traffic signs and pedestrians
- Retail: Predicting what products customers might want to buy

Challenges in Machine Learning:
While machine learning is powerful, it's not perfect. Here are some common challenges:
- Bias in Data: If training data is incomplete or biased, the AI may make unfair decisions
- Overfitting: Sometimes, models learn patterns that work for training data but don't apply well to new data
- Complexity: Real-world problems often require vast amounts of data and computational power

The Learning Process:
1. Data Collection: Gathering relevant information for the task
2. Data Preparation: Cleaning and organizing the data
3. Model Selection: Choosing the right type of algorithm
4. Training: Teaching the model using the prepared data
5. Evaluation: Testing how well the model performs
6. Deployment: Using the model in real-world applications
7. Monitoring: Watching for changes in performance and updating as needed`,
      quiz: {
        questions: [
          {
            question: "What are the three main steps in machine learning?",
            options: [
              "Training, Testing, Improving",
              "Coding, Running, Debugging",
              "Planning, Building, Deploying",
              "Writing, Reading, Executing"
            ],
            correct: 0,
            explanation: "The three main steps in machine learning are Training (learning from data), Testing (verifying performance), and Improving (refining based on results)."
          },
          {
            question: "Which type of machine learning uses labeled data for training?",
            options: [
              "Unsupervised Learning",
              "Reinforcement Learning",
              "Supervised Learning",
              "Automated Learning"
            ],
            correct: 2,
            explanation: "Supervised learning uses labeled data, where the correct outputs are known during training, allowing the system to learn from examples with known answers."
          },
          {
            question: "What is 'overfitting' in machine learning?",
            options: [
              "When the computer runs too slowly",
              "When the model learns patterns too specific to training data",
              "When there's too much data to process",
              "When the program uses too much memory"
            ],
            correct: 1,
            explanation: "Overfitting occurs when a model learns patterns that are too specific to the training data and doesn't generalize well to new, unseen data."
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
        duration: "15 min",
        article: `In the world of Artificial Intelligence (AI) and Machine Learning (ML), training data is like the teacher in a classroom. It provides the examples and information that AI systems need to learn and improve. Without good training data, even the most advanced AI algorithms can fail to perform well. Let's dive into what training data is, why it's so important, and how it's used in AI systems.

What Is Training Data?
Training data is the information that we give to an AI system so it can learn how to perform a specific task. Think of it as a collection of examples that teach the system what to do. For example:
If you're teaching an AI to recognize cats and dogs, the training data would include many images of cats and dogs, each labeled correctly.
If you're building a system to predict the weather, the training data might include past weather conditions like temperature, humidity, and rainfall.

Why Is Training Data Important?
AI systems learn by finding patterns in the training data. The quality and quantity of this data directly affect how well the AI performs. Here's why:
Accuracy: High-quality, accurate data helps the AI make better predictions or decisions.
Diversity: Diverse data ensures the AI can handle different situations. For example, a facial recognition system trained only on certain demographics might not work well for others.
Volume: Large datasets provide more examples for the AI to learn from, improving its performance. However, the data must be relevant to the task.

How Training Data Works
Training data is used in a process called model training. Here's how it works:
Collecting Data: Gather data that represents the problem you're trying to solve. For example, if you're building an AI to detect spam emails, collect examples of both spam and non-spam emails.
Labeling Data: For supervised learning, the data must be labeled. This means adding the correct answers, such as marking emails as "spam" or "not spam."
Feeding Data to the AI: The AI system analyzes the training data to learn patterns and relationships. For example, it might notice that spam emails often contain certain phrases or links.
Testing and Improving: After training, the AI is tested on new data. If it makes mistakes, adjustments are made to improve its accuracy.

Real-World Examples of Training Data
Training data is everywhere in AI applications:
Healthcare: Medical images labeled with diagnoses help AI detect diseases like cancer.
Transportation: Data from traffic cameras and sensors train AI to improve navigation systems and self-driving cars.
Retail: Purchase histories teach AI to recommend products you might like.

Challenges with Training Data
While training data is essential, it comes with challenges:
Bias: If the data is not representative, the AI may make unfair or incorrect decisions. For example, a hiring algorithm trained on biased data might favor certain candidates over others.
Noise: Errors or irrelevant information in the data can confuse the AI, reducing its accuracy.
Cost and Time: Collecting and labeling large datasets can be expensive and time-consuming.

The Future of Training Data
As AI systems become more advanced, the need for high-quality training data will continue to grow. Innovations like synthetic data—computer-generated examples—are helping to address some of the challenges. These methods can create large, diverse datasets without requiring manual collection and labeling.`,
        quiz: {
          questions: [
            {
              question: "Why is training data important for AI systems?",
              options: [
                "It helps AI systems learn patterns and make accurate decisions",
                "It makes computers run faster",
                "It reduces the cost of AI development",
                "It simplifies programming tasks"
              ],
              correct: 0,
              explanation: "Training data is crucial because it provides examples that help AI systems learn patterns and improve their accuracy in making predictions or decisions."
            },
            {
              question: "What are the three key factors that affect AI performance through training data?",
              options: [
                "Accuracy, Diversity, and Volume",
                "Speed, Size, and Cost",
                "Color, Shape, and Size",
                "Programming, Testing, and Deployment"
              ],
              correct: 0,
              explanation: "The three key factors are Accuracy (quality of data), Diversity (variety of examples), and Volume (amount of data), which together determine how well an AI system can learn and perform."
            },
            {
              question: "What is a major challenge with training data?",
              options: [
                "It's too easy to collect",
                "Bias in the data can lead to unfair decisions",
                "It makes AI systems too accurate",
                "It's always free to obtain"
              ],
              correct: 1,
              explanation: "Bias in training data is a major challenge as it can lead to AI systems making unfair or incorrect decisions, such as discriminating against certain groups in hiring processes."
            }
          ]
        }
      },
      {
        id: "2.2",
        title: "Pattern Matching Exercises",
        duration: "15 min",
        article: `Pattern matching is a foundational skill in Artificial Intelligence (AI). It involves identifying similarities or recurring structures in data, enabling systems to make sense of complex information. Whether it's recognizing handwriting, classifying emails as spam, or predicting customer behavior, pattern matching plays a key role in many AI applications.

What Is Pattern Matching?
Pattern matching is the process of finding similarities or consistent arrangements in data. For example:
Text Patterns: Recognizing that "Hi there!" and "Hello!" are both greetings.
Visual Patterns: Identifying common features in a set of animal images to classify them as cats or dogs.
Numerical Patterns: Detecting trends in stock prices or temperature changes over time.

Why Is Pattern Matching Important in AI?
Pattern matching helps AI systems:
Classify Data: For example, categorizing customer reviews as positive or negative.
Predict Outcomes: Anticipating future sales trends based on past data.
Detect Anomalies: Spotting unusual activity, such as potential fraud in banking transactions.
Enhance Decision-Making: Providing insights for tasks like recommending movies or diagnosing medical conditions.

How AI Matches Patterns
AI uses algorithms to match patterns in data. Some common techniques include:
Feature Extraction: Identifying key characteristics in data. For example, an AI might recognize that circles have no corners and are round.
Similarity Metrics: Measuring how closely two pieces of data match. For instance, comparing handwriting samples to identify a match.
Classification Models: Assigning new data to categories based on learned patterns, such as classifying emails as spam or not spam.

Real-World Applications of Pattern Matching
Pattern matching is used in countless applications:
Healthcare: Identifying patterns in medical images to diagnose diseases.
Retail: Analyzing purchase patterns to recommend products.
Finance: Detecting fraudulent transactions by spotting unusual spending behavior.
Entertainment: Recommending movies or songs based on viewing and listening history.

Challenges in Pattern Matching
While pattern matching is powerful, it's not without challenges:
Ambiguity: Some patterns can be unclear or overlap, leading to mistakes.
Bias: If the training data is incomplete or skewed, the AI might make unfair decisions.
Complexity: Real-world patterns, like those in human behavior or climate data, can be highly intricate and difficult to analyze.

The Future of Pattern Matching
Advances in AI are enabling more accurate and complex pattern matching. For example:
Personalized Medicine: Analyzing genetic patterns to create tailored treatments.
Smart Cities: Recognizing traffic and energy use patterns to optimize urban planning.
Natural Language Processing: Understanding context and nuance in human language.`,
        quiz: {
          questions: [
            {
              question: "What are the three main types of patterns mentioned in the article?",
              options: [
                "Text, Visual, and Numerical patterns",
                "Simple, Medium, and Complex patterns",
                "Small, Medium, and Large patterns",
                "Easy, Medium, and Hard patterns"
              ],
              correct: 0,
              explanation: "The article discusses three main types of patterns: Text patterns (like greetings), Visual patterns (like animal images), and Numerical patterns (like stock prices)."
            },
            {
              question: "Which of these is NOT mentioned as a challenge in pattern matching?",
              options: [
                "Ambiguity",
                "Bias",
                "Storage capacity",
                "Complexity"
              ],
              correct: 2,
              explanation: "While ambiguity, bias, and complexity are mentioned as challenges, storage capacity is not listed as one of the challenges in pattern matching."
            },
            {
              question: "What is feature extraction in pattern matching?",
              options: [
                "Identifying key characteristics in data",
                "Storing data in a database",
                "Creating new patterns",
                "Deleting unnecessary data"
              ],
              correct: 0,
              explanation: "Feature extraction is the process of identifying key characteristics in data, such as recognizing that circles have no corners and are round."
            }
          ]
        }
      },
      {
        id: "2.3",
        title: "Simple Decision Trees",
        duration: "15 min",
        article: `A decision tree is a type of algorithm used in Artificial Intelligence (AI) and Machine Learning (ML) to make decisions based on a series of questions. It's like a flowchart that guides you step-by-step to an answer. Decision trees are simple yet powerful tools for classification and prediction tasks, making them a fundamental concept in AI.

What Is a Decision Tree?
A decision tree is a branching structure where each node represents a question or decision, and each branch represents the possible outcomes of that decision. At the end of the branches (called leaves), you'll find the final decision or classification. For example:
Root Node: The starting point of the tree. For instance, "Is the weather sunny?"
Branches: The answers to the question, such as "Yes" or "No."
Leaves: The final outcomes, like "Go for a walk" or "Stay indoors."

Why Are Decision Trees Important?
Decision trees are widely used in AI because they:
Are Easy to Understand: Their flowchart-like structure makes them intuitive for humans.
Work with Many Types of Data: Decision trees can handle numerical, categorical, and textual data.
Are Flexible: They can be used for classification (e.g., categorizing emails as spam or not) and regression (e.g., predicting house prices).

How Do Decision Trees Work?
Let's break down how a decision tree operates:
Splitting: The tree starts by asking a question that divides the data into smaller groups. For example, "Is the pet furry?"
Branching: For each answer (e.g., "Yes" or "No"), the tree asks another question, further refining the groups.
Stopping: The tree continues splitting until it reaches a stopping point, such as when all data in a group belongs to the same category.
Decision: The tree makes a final classification or prediction based on the path followed.

Real-World Applications of Decision Trees
Decision trees are used in many real-world scenarios:
Healthcare: Diagnosing diseases by asking a series of medical questions.
Finance: Approving loans by evaluating criteria like income and credit history.
Retail: Recommending products based on customer preferences.
Gaming: Programming characters to make decisions based on game conditions.

Advanced Decision Tree Concepts
Decision trees are the basis for more complex AI techniques, such as:
Random Forests: Combining multiple decision trees to improve accuracy and reduce errors.
Boosting Algorithms: Enhancing weak decision trees to create stronger models.
These advanced methods build on the simplicity of decision trees to tackle complex problems.

Challenges with Decision Trees
While decision trees are powerful, they have limitations:
Overfitting: Trees can become too complex, capturing noise in the data rather than meaningful patterns.
Bias: Poorly chosen questions can lead to biased results.
Scalability: Very large datasets can make decision trees unwieldy and slow.`,
        quiz: {
          questions: [
            {
              question: "What are the main components of a decision tree?",
              options: [
                "Root node, branches, and leaves",
                "Start, middle, and end",
                "Questions, answers, and data",
                "Input, process, and output"
              ],
              correct: 0,
              explanation: "A decision tree consists of a root node (starting point), branches (possible answers), and leaves (final outcomes)."
            },
            {
              question: "What is overfitting in decision trees?",
              options: [
                "When trees become too complex and capture noise instead of patterns",
                "When trees are too simple",
                "When trees process data too quickly",
                "When trees have too few branches"
              ],
              correct: 0,
              explanation: "Overfitting occurs when decision trees become too complex and start capturing noise in the data rather than meaningful patterns."
            },
            {
              question: "Which of these is NOT mentioned as an advantage of decision trees?",
              options: [
                "Easy to understand",
                "Works with many types of data",
                "Processes data instantly",
                "Flexible for different tasks"
              ],
              correct: 2,
              explanation: "While ease of understanding, ability to work with various data types, and flexibility are mentioned as advantages, instant data processing is not listed as an advantage of decision trees."
            }
          ]
        }
      },
      {
        id: "2.4",
        title: "Supervised vs. Unsupervised Learning",
        duration: "15 min",
        article: `In Machine Learning (ML), the way a system learns from data can be broadly categorized into two types: supervised learning and unsupervised learning. Understanding the differences between these methods is essential to grasp how AI systems are trained to solve various problems.

What Is Supervised Learning?
Supervised learning is like learning with a teacher. The system is provided with labeled data, meaning each input comes with the correct output. The goal is to train the system to make accurate predictions or classifications when it encounters new data.
For example:
In an email spam filter, the training data might include emails labeled as "spam" or "not spam."
In image recognition, photos might be labeled "cat," "dog," or "bird."

The process involves:
Feeding the system a dataset with inputs and corresponding outputs.
Allowing the system to learn patterns in the data.
Testing the system on new, unlabeled data to see if it makes the right predictions.

What Is Unsupervised Learning?
Unsupervised learning is like learning without a teacher. The system is given data without any labels or predefined categories. The goal is to discover patterns, structures, or relationships within the data on its own.
For example:
In customer segmentation, an unsupervised system might group customers based on their purchasing habits.
In social networks, it might identify clusters of users with similar interests.

The process involves:
Feeding the system unlabeled data.
Allowing the system to analyze and group the data based on similarities or differences.

Key Differences Between Supervised and Unsupervised Learning:
Feature | Supervised Learning | Unsupervised Learning
Data | Labeled | Unlabeled 
Goal | Predict outcomes or classify data | Find hidden patterns or clusters 
Example | Spam detection, image classification | Customer Segmentation, anomaly detection

Real-World Applications:
Supervised Learning:
- Predicting house prices based on size, location, and other features.
- Diagnosing diseases from labeled medical data.
- Translating languages using labeled text pairs.

Unsupervised Learning:
- Detecting fraud by finding unusual patterns in transaction data.
- Grouping news articles by topic without prior labels.
- Recommending products by analyzing purchase history.

Challenges:
While both approaches are powerful, they have limitations:

Supervised Learning:
- Requires large amounts of labeled data, which can be time-consuming and expensive to collect.
- May struggle with new, unseen data if it doesn't fit the training patterns.

Unsupervised Learning:
- Can produce results that are hard to interpret.
- Might group data in ways that don't align with human understanding.`,
        quiz: {
          questions: [
            {
              question: "What is the main difference between supervised and unsupervised learning?",
              options: [
                "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data",
                "Supervised learning is faster than unsupervised learning",
                "Supervised learning is more expensive than unsupervised learning",
                "Supervised learning is newer than unsupervised learning"
              ],
              correct: 0,
              explanation: "The key difference is that supervised learning uses labeled data (with known correct answers), while unsupervised learning works with unlabeled data to discover patterns."
            },
            {
              question: "Which is an example of supervised learning?",
              options: [
                "Grouping customers by shopping habits",
                "Spam email detection",
                "Finding unusual patterns in data",
                "Clustering similar news articles"
              ],
              correct: 1,
              explanation: "Spam email detection is an example of supervised learning because it uses labeled data (emails marked as 'spam' or 'not spam') to train the system."
            },
            {
              question: "What is a major challenge of supervised learning?",
              options: [
                "It requires large amounts of labeled data",
                "It's too fast",
                "It's too simple",
                "It doesn't use patterns"
              ],
              correct: 0,
              explanation: "A major challenge of supervised learning is that it requires large amounts of labeled data, which can be time-consuming and expensive to collect."
            }
          ]
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
    description: "Explore advanced concepts in artificial intelligence and neural networks",
    prerequisites: [1, 2],
    icon: "Brain",
    themeColor: "blue",
  
    interactiveFeatures: {
      aiLab: {
        enabled: true,
        components: {
          systemVisualizer: {
            type: "interactive",
            features: ["system-comparison", "network-visualization", "algorithm-simulation"]
          },
          experimentStation: {
            type: "hands-on",
            tools: ["neural-network-playground", "algorithm-tester", "data-processor"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "3.1",
        title: "Types of AI Systems",
        duration: "20 min",
        article: `Artificial Intelligence (AI) is not just one system or technology; it encompasses a wide range of systems with varying capabilities and functionalities. Understanding the different types of AI systems can help us see how they are designed, what they can do, and how they are applied in the real world.

What Is a Reactive Machine?
Reactive machines are the simplest type of AI. They operate based solely on the current input and do not rely on memory or past experiences. They cannot learn from previous interactions and only perform specific tasks they are programmed for.

Examples:
- Chess-playing AI: IBM's Deep Blue, which defeated chess champion Garry Kasparov, is a reactive machine. It evaluates possible moves in the moment without learning from past games.
- Basic Recommendation Systems: Simple systems that suggest products based on your most recent clicks or searches.

Limited Memory AI
Limited memory AI systems can store and use past data for a short time. They analyze recent experiences or data points to make decisions, but they do not retain this information permanently.

Examples:
- Self-Driving Cars: These vehicles analyze recent sensor data to identify pedestrians, traffic lights, and other vehicles, using it to make real-time driving decisions.
- Virtual Assistants: Systems like Siri or Alexa can temporarily remember context, such as a follow-up question about a previous command.

Theory of Mind AI
Theory of mind AI is a concept that refers to systems capable of understanding emotions, intentions, and social interactions. While this type of AI is still theoretical, it represents a significant step toward creating machines that can interact with humans more naturally and empathetically.

Potential Applications:
- Social Robotics: Robots designed to assist in caregiving or education, capable of understanding and responding to human emotions.
- Advanced Virtual Assistants: Systems that adapt their tone and suggestions based on the user's mood or context.

Self-Aware AI
Self-aware AI represents the most advanced and hypothetical type of AI. These systems would possess self-awareness, consciousness, and the ability to understand their existence and goals.

Ethical Considerations:
- Developing self-aware AI raises ethical questions about its rights, responsibilities, and the impact on humanity.
- It also poses challenges for safety and control, as such systems might act independently in unpredictable ways.

Narrow AI vs. General AI vs. Superintelligent AI
AI systems can also be categorized based on their scope and capabilities:

Narrow AI (Weak AI):
- Designed for specific tasks, such as image recognition or voice assistants.
- Examples: Netflix recommendation system, Google Translate.

General AI (Strong AI):
- A theoretical concept of AI that can perform any intellectual task a human can.
- Capable of reasoning, problem-solving, and transferring knowledge across domains.

Superintelligent AI:
- A future concept where AI surpasses human intelligence in all respects.
- While this could revolutionize industries, it also raises significant safety and ethical concerns.

Real-World Applications
Different types of AI systems are used in various industries to solve real-world problems:
- Healthcare: Limited memory systems analyze patient data for diagnostics and treatment recommendations.
- Finance: Reactive systems detect and flag unusual transactions for fraud prevention.
- Education: Theory of mind AI (once developed) could personalize learning experiences by understanding students' emotions and learning styles.

Challenges and Future Directions
- Scalability: As AI systems become more advanced, they require greater computational resources and data.
- Ethics: Developing AI that understands emotions or becomes self-aware raises significant moral questions.
- Control: Ensuring AI systems act safely and align with human values remains a key challenge.`,
        quiz: {
          questions: [
            {
              question: "What is the main characteristic of reactive machines?",
              options: [
                "They operate solely on current input without using memory or past experiences",
                "They can learn from past experiences",
                "They have self-awareness",
                "They understand human emotions"
              ],
              correct: 0,
              explanation: "Reactive machines are the simplest type of AI that operate based only on current input, without using memory or learning from past experiences."
            },
            {
              question: "Which type of AI system is currently used in self-driving cars?",
              options: [
                "Limited Memory AI",
                "Theory of Mind AI",
                "Self-Aware AI",
                "Reactive Machine AI"
              ],
              correct: 0,
              explanation: "Self-driving cars use Limited Memory AI systems, which can analyze recent sensor data to make real-time driving decisions."
            },
            {
              question: "What is the key difference between Narrow AI and General AI?",
              options: [
                "Narrow AI is designed for specific tasks while General AI can perform any intellectual task",
                "Narrow AI is more advanced than General AI",
                "General AI exists today while Narrow AI is theoretical",
                "Narrow AI requires more computing power than General AI"
              ],
              correct: 0,
              explanation: "Narrow AI is designed for specific tasks (like image recognition), while General AI is a theoretical concept of AI that can perform any intellectual task a human can."
            }
          ]
        }
      },
      {
        id: "3.2",
        title: "Basic Algorithms in AI",
        duration: "20 min",
        article: `Algorithms are the foundation of Artificial Intelligence (AI) and Machine Learning (ML). They are sets of instructions that guide computers in solving problems and making decisions. Understanding basic algorithms helps us see how AI systems learn, adapt, and improve.

What Is an Algorithm?
An algorithm is a step-by-step procedure for performing a task or solving a problem. It's like a recipe: you follow specific steps to achieve a desired outcome. In AI, algorithms help machines process data and make sense of it.

For example:
- A sorting algorithm arranges numbers or words in order (e.g., smallest to largest).
- A search algorithm finds specific information, like a name in a list.

In AI, algorithms are used to:
- Classify data (e.g., recognizing whether an image contains a cat or a dog).
- Make predictions (e.g., forecasting weather or stock prices).
- Find patterns (e.g., detecting fraud in financial transactions).

Common Types of AI Algorithms

Linear Regression:
- Used for predicting a continuous value (e.g., house prices based on size).
- Works by finding the best-fit line that minimizes errors between predicted and actual values.

Logistic Regression:
- Used for classification tasks (e.g., determining whether an email is spam or not).
- Outputs probabilities to classify data into categories.

Decision Trees:
- Use a flowchart-like structure to make decisions based on a series of questions.
- Example: Deciding whether to play outside based on weather conditions (e.g., "Is it raining?").

K-Nearest Neighbors (KNN):
- A simple algorithm that classifies data points based on the closest examples in the training data.
- Example: Grouping similar fruits based on color and shape.

Clustering Algorithms:
- Group similar data points together without predefined labels.
- Example: Grouping customers based on purchasing behavior.

How Algorithms Process Data
Algorithms work by analyzing input data and following predefined steps to generate an output:
1. Input: Provide data for the algorithm to process (e.g., images, numbers, or text).
2. Processing: The algorithm performs calculations or applies rules to find patterns or make decisions.
3. Output: The result could be a prediction, classification, or decision (e.g., "This email is spam").

Real-World Applications
Algorithms are the driving force behind many AI applications:
- Healthcare: Predicting patient outcomes and diagnosing diseases using regression and classification.
- Retail: Recommending products based on customer preferences.
- Finance: Detecting fraudulent transactions with anomaly detection algorithms.
- Transportation: Optimizing routes and schedules with search and optimization algorithms.

Challenges with Algorithms
While algorithms are powerful, they come with challenges:
- Bias: If the input data is biased, the algorithm's decisions may also be biased.
- Complexity: Some problems require very complex algorithms that demand significant computational resources.
- Interpretability: Understanding why an algorithm made a specific decision can be difficult, especially with advanced techniques like neural networks.

The Future of Algorithms
As AI continues to evolve, algorithms are becoming more advanced and efficient. Innovations like quantum computing and neural architecture search are pushing the boundaries of what algorithms can achieve.`,
        quiz: {
          questions: [
            {
              question: "What is the primary purpose of a linear regression algorithm?",
              options: [
                "Predicting continuous values",
                "Classifying data into categories",
                "Grouping similar data points",
                "Finding specific information"
              ],
              correct: 0,
              explanation: "Linear regression is used for predicting continuous values, such as house prices based on features like size and location."
            },
            {
              question: "Which algorithm is best suited for grouping similar data points without predefined labels?",
              options: [
                "Clustering algorithms",
                "Linear regression",
                "Decision trees",
                "Logistic regression"
              ],
              correct: 0,
              explanation: "Clustering algorithms are designed to group similar data points together without predefined labels, making them ideal for discovering natural groupings in data."
            },
            {
              question: "What is a major challenge with AI algorithms?",
              options: [
                "Bias in decision-making if input data is biased",
                "They are too simple to solve complex problems",
                "They require no computational resources",
                "They are always easy to interpret"
              ],
              correct: 0,
              explanation: "A major challenge with AI algorithms is that they can produce biased decisions if the input data itself contains biases."
            }
          ]
        }
      },
      {
        id: "3.3",
        title: "Data Collection and Processing",
        duration: "20 min",
        article: `Data is the lifeblood of Artificial Intelligence (AI) systems. Before an AI can learn, predict, or make decisions, it needs data—lots of it. But raw data is rarely ready for immediate use. It must be collected, cleaned, and processed to ensure it's accurate and useful.

Why Is Data Collection Important?
Data collection is the first step in creating AI systems. The quality and quantity of data directly impact how well the AI performs. Here's why it's important:
- Accuracy: High-quality data ensures the AI makes reliable predictions.
- Relevance: The data must align with the problem the AI is solving.
- Diversity: Diverse datasets prevent bias and help AI systems generalize better.

How Is Data Collected?
Data can come from many sources, depending on the AI's purpose. Examples include:
- Sensors: Devices like cameras, microphones, and IoT sensors gather real-world information.
- Databases: Existing datasets, such as customer records or medical histories.
- Surveys and Forms: Direct input from users.
- Web Scraping: Extracting information from websites, such as product reviews or social media posts.

Ethical considerations are vital during data collection, including ensuring user privacy and obtaining consent.

Data Cleaning: Preparing for Use
Raw data often contains errors, duplicates, or irrelevant information. Data cleaning is the process of fixing these issues to make the data usable. Steps include:
- Removing Errors: Identifying and correcting mistakes, such as typos or out-of-range values.
- Eliminating Duplicates: Ensuring no data point is counted twice.
- Handling Missing Data: Filling in gaps or deciding how to work around them.
- Standardizing Formats: Making sure data is consistent, such as dates being in the same format.

Data Processing: Making Data Usable
Once cleaned, the data is processed to extract meaningful insights. Key steps include:

Feature Extraction:
- Identifying the most important characteristics of the data.
- Example: In image data, features might include shapes, colors, or edges.

Normalization:
- Scaling data to a consistent range to improve performance.
- Example: Ensuring all numerical data falls between 0 and 1.

Encoding:
- Converting non-numerical data (like text) into numerical formats AI can understand.
- Example: Turning "Yes" and "No" into 1 and 0.

Real-World Examples
- Healthcare: Collecting patient data from sensors and medical records, then processing it to predict health outcomes.
- Retail: Gathering customer purchase histories and cleaning the data to recommend products.
- Transportation: Using traffic sensors to optimize routes for delivery trucks or ride-sharing apps.

Challenges in Data Collection and Processing
While critical, this process comes with challenges:
- Volume: Managing large amounts of data requires significant storage and computational resources.
- Bias: Ensuring the data is representative of the problem to avoid skewed results.
- Privacy: Balancing the need for data with protecting user information.

The Future of Data Collection and Processing
As AI becomes more advanced, so do the methods for collecting and processing data. Innovations include:
- Synthetic Data: Generating realistic data artificially to supplement real-world datasets.
- Automated Cleaning Tools: Using AI to identify and fix errors in data.
- Edge Computing: Processing data closer to its source (like on a device) to reduce latency and improve efficiency.`,
        quiz: {
          questions: [
            {
              question: "Why is data cleaning important in AI systems?",
              options: [
                "To remove errors, duplicates, and irrelevant information that could affect AI performance",
                "To make the data smaller and easier to store",
                "To make the data more complex",
                "To slow down processing time"
              ],
              correct: 0,
              explanation: "Data cleaning is crucial because it removes errors, duplicates, and irrelevant information that could negatively impact the AI system's performance."
            },
            {
              question: "What is feature extraction in data processing?",
              options: [
                "Identifying the most important characteristics of the data",
                "Removing all features from the data",
                "Adding new features to the data",
                "Copying data features"
              ],
              correct: 0,
              explanation: "Feature extraction is the process of identifying and selecting the most important characteristics or patterns in the data that will be useful for the AI system."
            },
            {
              question: "What is a key challenge in data collection and processing?",
              options: [
                "Managing large volumes of data while ensuring privacy",
                "Making data more complex",
                "Reducing data accuracy",
                "Removing all personal information"
              ],
              correct: 0,
              explanation: "A key challenge is managing large volumes of data while ensuring privacy and security, as this requires significant resources and careful handling of sensitive information."
            }
          ]
        }
      },
      {
        id: "3.4",
        title: "Neural Network Fundamentals",
        duration: "20 min",
        article: `Neural networks are a cornerstone of modern Artificial Intelligence (AI). Inspired by the structure of the human brain, neural networks enable machines to recognize patterns, process data, and make decisions.

What Is a Neural Network?
A neural network is a series of algorithms designed to recognize relationships in data. It consists of layers of interconnected nodes (or neurons) that process information.

Key Components:
- Input Layer: The first layer that receives data, such as images, text, or numerical values.
- Hidden Layers: Layers between the input and output, where the network processes and transforms data.
- Output Layer: Produces the final result, such as a classification (e.g., "cat" or "dog") or prediction.

How Neural Networks Work
Neural networks learn by adjusting the connections (or weights) between neurons. Here's how they operate:
1. Data Input: The network receives data (e.g., an image of a cat).
2. Forward Propagation: Data flows through the network. Each neuron applies a mathematical function to transform the input.
3. Error Calculation: The network compares its output with the correct answer and calculates an error.
4. Backward Propagation: The network adjusts the weights to reduce the error. This process repeats until the network performs well.

Types of Neural Networks

Feedforward Neural Networks:
- Data flows in one direction, from input to output.
- Example: Predicting house prices based on features like size and location.

Convolutional Neural Networks (CNNs):
- Specialized for image processing and recognition.
- Example: Identifying objects in photos or videos.

Recurrent Neural Networks (RNNs):
- Designed for sequential data like time series or text.
- Example: Predicting the next word in a sentence.

Deep Neural Networks:
- Consist of many layers, allowing them to learn complex patterns.
- Example: Translating languages or generating realistic images.

Real-World Applications
Neural networks power many technologies we use today:
- Healthcare: Diagnosing diseases from medical images.
- Transportation: Enabling self-driving cars to recognize road signs and obstacles.
- Finance: Detecting fraud by analyzing transaction patterns.
- Entertainment: Recommending movies or generating realistic game graphics.

Challenges with Neural Networks
While powerful, neural networks face challenges:
- Data Requirements: They need large amounts of high-quality data to perform well.
- Computational Resources: Training deep networks requires significant processing power.
- Interpretability: Understanding why a neural network made a specific decision can be difficult.
- Overfitting: Networks can sometimes learn patterns too specific to the training data.

The Future of Neural Networks
Advances in neural network research are driving innovations in AI. Promising directions include:
- Neural Architecture Search: Automatically designing optimized network structures.
- Few-Shot Learning: Training networks to perform well with very limited data.
- Neuromorphic Computing: Building hardware that mimics the brain's structure for more efficient processing.`,
        quiz: {
          questions: [
            {
              question: "What are the three main components of a neural network?",
              options: [
                "Input layer, hidden layers, and output layer",
                "Start layer, middle layer, and end layer",
                "Data layer, processing layer, and result layer",
                "Beginning, middle, and end nodes"
              ],
              correct: 0,
              explanation: "A neural network consists of three main components: the input layer (receives data), hidden layers (processes data), and output layer (produces results)."
            },
            {
              question: "Which type of neural network is specifically designed for image processing?",
              options: [
                "Convolutional Neural Networks (CNNs)",
                "Recurrent Neural Networks (RNNs)",
                "Feedforward Neural Networks",
                "Deep Neural Networks"
              ],
              correct: 0,
              explanation: "Convolutional Neural Networks (CNNs) are specifically designed for image processing and recognition tasks."
            },
            {
              question: "What is overfitting in neural networks?",
              options: [
                "When networks learn patterns too specific to the training data",
                "When networks are too large",
                "When networks process data too quickly",
                "When networks use too much memory"
              ],
              correct: 0,
              explanation: "Overfitting occurs when neural networks learn patterns that are too specific to the training data, reducing their ability to generalize to new, unseen data."
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
    description: "Explore practical applications of AI in computer vision, natural language processing, robotics, and gaming",
    prerequisites: [1, 2, 3],
    icon: "Robot",
    themeColor: "green",
  
    interactiveFeatures: {
      techLab: {
        enabled: true,
        components: {
          applicationDemo: {
            type: "interactive",
            features: ["vision-demo", "nlp-playground", "robot-simulator", "game-ai-test"]
          },
          practiceStation: {
            type: "hands-on",
            tools: ["image-processor", "text-analyzer", "path-planner", "behavior-tree-builder"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "4.1",
        title: "Computer Vision Fundamentals",
        duration: "20 min",
        article: `Computer vision is a powerful AI field that allows machines to "see" and interpret the visual world. It's used in everything from medical diagnosis to facial recognition on your phone. This technology has become increasingly important as we rely more on automated systems to interpret and understand visual information from our environment.

What Is Computer Vision?
Computer vision uses AI and machine learning to analyze and extract information from images, videos, and real-world scenes. The goal is to enable computers to perform visual tasks just like humans—or sometimes even better. It involves recognizing patterns, detecting objects, and understanding spatial relationships in visual data.

How It Works
The process of computer vision involves several key steps:

Image Input:
- The system captures an image using a camera or sensor
- Raw visual data is converted into digital format
- Multiple frames may be captured for video processing

Preprocessing:
- Images are normalized for size and color consistency
- Noise reduction and image enhancement techniques are applied
- Conversion to different color spaces (RGB, grayscale, etc.)
- Contrast adjustment and edge enhancement

Feature Detection:
- Identification of key points, edges, and corners
- Pattern recognition in textures and shapes
- Segmentation of images into meaningful regions
- Detection of motion in video sequences

Classification & Interpretation:
- Deep learning models, especially CNNs, analyze the processed images
- Object recognition and classification
- Scene understanding and context analysis
- Action and behavior recognition in videos

Advanced Techniques:
- Instance segmentation for precise object boundaries
- Semantic segmentation for scene understanding
- 3D reconstruction from 2D images
- Real-time object tracking and motion analysis

Real-World Applications

Healthcare:
- Analysis of medical imaging (X-rays, MRIs, CT scans)
- Early disease detection and diagnosis
- Surgical assistance and planning
- Patient monitoring systems

Autonomous Vehicles:
- Real-time object detection and tracking
- Lane detection and navigation
- Traffic sign recognition
- Pedestrian and obstacle detection
- Parking assistance systems

Security and Surveillance:
- Facial recognition systems
- Anomaly detection in security footage
- Access control systems
- Crowd monitoring and analysis
- License plate recognition

Retail Analytics:
- Customer behavior analysis
- Inventory management
- Queue monitoring
- Heat mapping of store traffic
- Self-checkout systems

Manufacturing:
- Quality control and inspection
- Defect detection
- Assembly line monitoring
- Robot guidance systems

Challenges in Computer Vision

Technical Challenges:
- Varying lighting conditions affect accuracy
- Complex backgrounds can confuse systems
- Occlusions and partial views of objects
- Real-time processing requirements
- Scale and perspective variations

Data-Related Challenges:
- Need for large, diverse training datasets
- Bias in training data affecting results
- Annotation and labeling requirements
- Privacy concerns with image data

Performance Challenges:
- Computational resource requirements
- Power consumption for mobile devices
- Speed vs. accuracy trade-offs
- Integration with existing systems

Future Directions:
- Advanced 3D vision systems
- Improved low-light performance
- More efficient neural network architectures
- Better handling of edge cases
- Integration with other AI technologies

Practical Considerations:
When implementing computer vision systems, consider:
- Hardware requirements (cameras, processors)
- Software infrastructure needs
- Integration with existing systems
- Privacy and security implications
- Maintenance and updating procedures

Think About It:
Take a moment to analyze a complex scene, like a busy street. Notice how quickly you can identify objects, understand relationships, and predict movements. Now consider the challenges in teaching a computer to do the same. What aspects would be particularly difficult for an AI system to understand?`,
        quiz: {
          questions: [
            {
              question: "What is the primary purpose of preprocessing in computer vision?",
              options: [
                "To prepare images for analysis by normalizing and enhancing them",
                "To store images in a database",
                "To display images on a screen",
                "To compress image files"
              ],
              correct: 0,
              explanation: "Preprocessing is crucial in computer vision as it prepares images for analysis by normalizing size, reducing noise, enhancing contrast, and performing other adjustments to make the subsequent analysis more accurate."
            },
            {
              question: "Which application of computer vision is most commonly used in autonomous vehicles?",
              options: [
                "Real-time object detection and tracking",
                "Medical image analysis",
                "Facial recognition",
                "Quality control inspection"
              ],
              correct: 0,
              explanation: "Real-time object detection and tracking is essential for autonomous vehicles as they need to constantly monitor their environment for obstacles, other vehicles, pedestrians, and road signs."
            },
            {
              question: "What is one of the main challenges in computer vision systems?",
              options: [
                "Handling varying lighting conditions and complex backgrounds",
                "Storing large amounts of text data",
                "Processing audio signals",
                "Managing network connections"
              ],
              correct: 0,
              explanation: "Varying lighting conditions and complex backgrounds present significant challenges for computer vision systems as they can affect the accuracy of object detection and recognition."
            }
          ]
        }
      },
      {
        id: "4.2",
        title: "Natural Language Processing",
        duration: "20 min",
        article: `Natural Language Processing (NLP) allows computers to interact with human language—whether spoken or written. From virtual assistants to machine translation, NLP is transforming how we communicate with machines and how they understand us.

What Is Natural Language Processing?
NLP combines linguistics, computer science, and artificial intelligence to enable machines to read, understand, interpret, and generate human language. It's a complex field that deals with the ambiguity, context, and nuances of natural language.

Key NLP Components

Text Processing:
- Tokenization: Breaking text into words, phrases, or other meaningful elements
- Lemmatization: Reducing words to their base form
- Part-of-speech tagging: Identifying word types (nouns, verbs, etc.)
- Dependency parsing: Understanding relationships between words

Semantic Analysis:
- Named Entity Recognition (NER): Identifying names, locations, dates
- Word Sense Disambiguation: Understanding context-dependent meanings
- Sentiment Analysis: Determining emotional tone
- Topic Modeling: Identifying main themes in text

Language Generation:
- Text Summarization: Creating concise versions of longer texts
- Machine Translation: Converting between languages
- Dialogue Generation: Creating contextually appropriate responses
- Content Generation: Creating human-like text

Advanced NLP Technologies:
- Transformer Models: State-of-the-art architecture for language tasks
- BERT and GPT: Popular language models for various applications
- Transfer Learning: Adapting pre-trained models to specific tasks
- Attention Mechanisms: Focusing on relevant parts of input text

Real-World Applications

Business Applications:
- Customer service chatbots
- Email filtering and categorization
- Resume parsing and job matching
- Market sentiment analysis
- Document classification

Consumer Applications:
- Virtual assistants (Siri, Alexa)
- Language translation services
- Grammar and spelling checkers
- Voice-controlled devices
- Social media monitoring

Enterprise Solutions:
- Contract analysis
- Compliance monitoring
- Customer feedback analysis
- Automated reporting
- Knowledge management systems

Research and Development:
- Academic paper analysis
- Patent searching
- Research trend identification
- Literature review automation

Challenges in NLP

Language Complexity:
- Ambiguity in meaning
- Context dependency
- Idiomatic expressions
- Regional variations
- Multiple languages

Technical Challenges:
- Large computing requirements
- Need for extensive training data
- Model bias and fairness
- Real-time processing needs

Implementation Challenges:
- Integration with existing systems
- Privacy concerns
- Maintenance and updates
- Cost considerations

Future Directions:
- More efficient language models
- Better handling of context
- Improved multilingual capabilities
- Enhanced privacy protection
- More natural interactions

Best Practices:
- Regular model updates
- Careful data curation
- Bias monitoring
- User feedback integration
- Performance monitoring

Practical Exercise:
Consider how language can be ambiguous. Take a sentence like "The bank is by the river" versus "I need to go to the bank." How would an NLP system determine the correct meaning of "bank" in each case? What context clues would it need to consider?`,
        quiz: {
          questions: [
            {
              question: "What is tokenization in NLP?",
              options: [
                "Breaking text into words, phrases, or other meaningful elements",
                "Converting text to numbers",
                "Translating between languages",
                "Checking grammar"
              ],
              correct: 0,
              explanation: "Tokenization is the fundamental NLP process of breaking down text into smaller, meaningful units (tokens) such as words, phrases, or subwords for further processing."
            },
            {
              question: "Which is a key challenge in NLP?",
              options: [
                "Understanding context and ambiguity in language",
                "Storing large amounts of text",
                "Displaying text on screens",
                "Printing documents"
              ],
              correct: 0,
              explanation: "Understanding context and ambiguity is a major challenge in NLP because words can have different meanings depending on their context, and human language is inherently ambiguous."
            },
            {
              question: "What is sentiment analysis used for?",
              options: [
                "Determining the emotional tone of text",
                "Counting words in a document",
                "Translating languages",
                "Storing text data"
              ],
              correct: 0,
              explanation: "Sentiment analysis is used to determine the emotional tone or attitude expressed in text, which is valuable for understanding customer feedback, social media monitoring, and market research."
            }
          ]
        }
      },
      {
        id: "4.3",
        title: "Robotics Fundamentals",
        duration: "25 min",
        article: `Robotics represents the intersection of artificial intelligence and physical machines, creating systems that can sense, process, and interact with the real world. Modern robotics combines mechanical engineering, electronics, computer science, and AI to create increasingly sophisticated and capable machines.

What Are Robots?
Robots are programmable machines that can carry out complex actions automatically. They range from simple automated systems to highly sophisticated humanoid robots with advanced AI capabilities. Modern robots can learn from experience and adapt to new situations, making them valuable in various applications.

Core Components of Robotics

Physical Components:
- Sensors: Vision, touch, proximity, force
- Actuators: Motors, pneumatics, hydraulics
- End effectors: Grippers, tools, manipulators
- Power systems: Batteries, power management
- Structural elements: Frame, joints, links

Control Systems:
- Microcontrollers and processors
- Motion planning algorithms
- Feedback control systems
- Safety systems
- Communication interfaces

AI and Software:
- Computer vision systems
- Machine learning algorithms
- Path planning
- Object recognition
- Task scheduling
- Human-robot interaction

Types of Robots

Industrial Robots:
- Manufacturing assembly
- Welding and painting
- Material handling
- Quality control
- Packaging and palletizing

Service Robots:
- Cleaning robots
- Delivery robots
- Healthcare assistance
- Customer service
- Agricultural robots

Mobile Robots:
- Autonomous vehicles
- Warehouse robots
- Exploration robots
- Security patrols
- Delivery drones

Collaborative Robots (Cobots):
- Human-robot collaboration
- Flexible manufacturing
- Training and education
- Research applications
- Healthcare assistance

Applications and Use Cases

Manufacturing:
- Assembly line automation
- Quality inspection
- Material handling
- Process automation
- Workplace safety

Healthcare:
- Surgical assistance
- Patient care
- Laboratory automation
- Rehabilitation
- Medical training

Exploration:
- Space exploration
- Deep-sea research
- Hazardous environments
- Archaeological sites
- Mining operations

Service Industry:
- Hospitality
- Retail assistance
- Building maintenance
- Security patrols
- Food service

Challenges in Robotics

Technical Challenges:
- Complex environment navigation
- Human-robot interaction
- Power management
- Real-time processing
- System integration

Safety Considerations:
- Collision avoidance
- Emergency stops
- Risk assessment
- Safety protocols
- Regulatory compliance

Implementation Challenges:
- Cost considerations
- Training requirements
- Maintenance needs
- Integration with existing systems
- User acceptance

Future Directions:
- Advanced AI integration
- Improved human-robot collaboration
- Better energy efficiency
- Enhanced sensing capabilities
- More autonomous operation

Design Considerations:
When developing robotic systems, consider:
- Task requirements
- Environmental conditions
- Safety needs
- User interface design
- Maintenance accessibility

Practical Exercise:
Think about designing a robot for a specific task, like organizing a room. What sensors would it need? How would it navigate? What safety features would be essential? How would it handle unexpected situations?`,
        quiz: {
          questions: [
            {
              question: "What are the main components of a robotic system?",
              options: [
                "Sensors, actuators, control systems, and power systems",
                "Only motors and batteries",
                "Just computer programs",
                "Only mechanical parts"
              ],
              correct: 0,
              explanation: "A robotic system requires multiple integrated components: sensors to perceive the environment, actuators for movement, control systems for decision-making, and power systems for operation."
            },
            {
              question: "What is the primary purpose of sensors in robotics?",
              options: [
                "To gather information about the environment and robot's state",
                "To provide power to the robot",
                "To move the robot's parts",
                "To store data"
              ],
              correct: 0,
              explanation: "Sensors are crucial in robotics as they gather information about the environment and the robot's state, enabling the robot to make informed decisions and interact appropriately with its surroundings."
            },
            {
              question: "What is a collaborative robot (cobot)?",
              options: [
                "A robot designed to work safely alongside humans",
                "A robot that only works independently",
                "A robot used only in manufacturing",
                "A robot for entertainment"
              ],
              correct: 0,
              explanation: "Collaborative robots (cobots) are specifically designed to work safely alongside humans, sharing workspaces and tasks while maintaining safety standards and enhancing productivity."
            }
          ]
        }
      },
      {
        id: "4.4",
        title: "AI in Gaming",
        duration: "20 min",
        article: `Artificial Intelligence has revolutionized the gaming industry, creating more immersive, dynamic, and challenging experiences for players. From simple game AI to sophisticated learning systems, AI technologies are fundamental to modern game development and player engagement.

What Is Game AI?
Game AI refers to the techniques used to create intelligent behaviors in video games, particularly for non-player characters (NPCs), environmental responses, and adaptive gameplay. It encompasses everything from basic decision trees to complex machine learning systems.

Core AI Technologies in Games

Behavior Systems:
- Finite State Machines (FSM)
- Behavior Trees
- Goal-Oriented Action Planning
- Utility-based AI
- Neural Networks

Game World Systems:
- Procedural Content Generation
- Dynamic Difficulty Adjustment
- Environmental Response Systems
- Physics Simulation
- Pathfinding Algorithms

Player Interaction:
- Natural Language Processing
- Pattern Recognition
- Learning Systems
- Adaptive AI
- Emotion Recognition

Advanced Technologies:
- Machine Learning Integration
- Deep Learning Applications
- Reinforcement Learning
- Neural Evolution
- Genetic Algorithms

Applications in Different Game Types

Strategy Games:
- Resource management AI
- Combat tactics
- Diplomatic behavior
- City building
- Unit coordination

Action Games:
- Enemy behavior
- Combat systems
- Environmental interaction
- Stealth AI
- Squad coordination

RPGs and Adventure Games:
- NPC behavior and dialogue
- Quest generation
- World adaptation
- Character development
- Story progression

Sports and Racing Games:
- Player positioning
- Team coordination
- Race line optimization
- Strategy adaptation
- Realistic physics

Key Features and Implementations

NPC Intelligence:
- Pathfinding
- Decision making
- Learning from player actions
- Emotional responses
- Social interaction

World Generation:
- Terrain creation
- Building placement
- Quest generation
- Weather systems
- Population distribution

Game Balance:
- Difficulty scaling
- Resource distribution
- Challenge adaptation
- Reward systems
- Player progression

Player Experience:
- Personalized content
- Dynamic storytelling
- Adaptive challenges
- Social interaction
- Achievement systems

Challenges in Game AI

Technical Challenges:
- Performance optimization
- Resource management
- Real-time processing
- Scale and complexity
- Integration with game engines

Design Challenges:
- Balancing difficulty
- Creating believable behavior
- Avoiding predictability
- Managing computation costs
- Maintaining fun factor

Future Directions:
- More sophisticated learning systems
- Better character interaction
- Improved procedural generation
- Enhanced personalization
- More realistic behaviors

Best Practices:
- Performance optimization
- Scalable design
- Maintainable code
- Clear documentation
- Extensive testing

Practical Exercise:
Consider designing an AI opponent for a simple game like tic-tac-toe or chess. What different levels of difficulty would you implement? How would the AI decide its moves? How would it learn from the player's strategies?`,
        quiz: {
          questions: [
            {
              question: "What is the purpose of behavior trees in game AI?",
              options: [
                "To create complex, hierarchical decision-making systems for game characters",
                "To store game data",
                "To render graphics",
                "To process player input"
              ],
              correct: 0,
              explanation: "Behavior trees are used to create structured, hierarchical decision-making systems that allow game characters to execute complex behaviors and respond to various situations in a organized way."
            },
            {
              question: "What is procedural content generation in games?",
              options: [
                "Automatically creating game content like levels, items, or quests",
                "Loading pre-made content",
                "Downloading content from the internet",
                "Creating character models"
              ],
              correct: 0,
              explanation: "Procedural content generation is the automatic creation of game content using algorithms, allowing for unique and varied experiences without manually creating every piece of content."
            },
            {
              question: "How does dynamic difficulty adjustment work in games?",
              options: [
                "By automatically adjusting game challenges based on player performance",
                "By letting players choose difficulty levels",
                "By making games progressively harder",
                "By using cheat codes"
              ],
              correct: 0,
              explanation: "Dynamic difficulty adjustment automatically modifies game challenges based on player performance, ensuring an engaging experience for players of different skill levels."
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
    description: "Explore ethical considerations, societal impacts, and career opportunities in artificial intelligence",
    prerequisites: [1, 2, 3, 4],
    icon: "Shield",
    themeColor: "purple",
  
    interactiveFeatures: {
      ethicsLab: {
        enabled: true,
        components: {
          biasAnalyzer: {
            type: "interactive",
            features: ["dataset-analysis", "bias-detection", "fairness-metrics"]
          },
          ethicsWorkbench: {
            type: "hands-on",
            tools: ["case-studies", "policy-simulator", "impact-assessment"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "5.1",
        title: "Understanding Bias in AI",
        duration: "25 min",
        article: `Bias in Artificial Intelligence (AI) systems refers to instances where the decisions or predictions made by AI models are unfairly influenced by skewed or incomplete data. Understanding bias is critical for creating AI systems that are accurate, fair, and inclusive.
  
  What Causes Bias in AI?
  Bias in AI usually stems from problems in the data or the way the model is developed. Common causes include:
  
  1. Biased Training Data:
  • If the dataset used to train the AI reflects societal biases or lacks diversity, the AI will likely replicate those biases
  • Example: A hiring algorithm trained on data from a predominantly male workforce might favor male candidates
  
  2. Incomplete Data:
  • Missing or underrepresented groups in the dataset can lead to unfair outcomes
  • Example: Facial recognition systems that perform poorly on certain skin tones due to a lack of diverse training images
  
  3. Human Bias:
  • Developers' assumptions and decisions can inadvertently introduce bias
  • Example: Framing a problem in a way that prioritizes certain outcomes over others
  
  4. Algorithmic Bias:
  • The model itself may emphasize certain patterns in ways that amplify bias
  • Example: Recommender systems favoring popular products over niche options
  
  Types of Bias in AI
  
  1. Selection Bias:
  • When the data collected for training does not represent the target population accurately
  • Can lead to models that perform well only for certain groups
  
  2. Confirmation Bias:
  • When the AI prioritizes data that confirms preexisting assumptions
  • Can reinforce existing prejudices and stereotypes
  
  3. Implicit Bias:
  • When bias arises from subtle and unintended influences in the data or model
  • Often harder to detect and address than explicit bias
  
  Real-World Examples of Bias in AI
  
  • Healthcare:
  • AI systems underdiagnosing certain diseases in underrepresented groups
  • Biased treatment recommendations based on historical data
  
  • Hiring:
  • AI systems favoring certain demographics due to historical hiring patterns
  • Resume screening tools showing gender or racial bias
  
  • Financial Services:
  • Loan approval systems discriminating against certain neighborhoods
  • Credit scoring models reflecting historical economic inequalities
  
  • Law Enforcement:
  • Facial recognition systems with higher error rates for certain demographics
  • Predictive policing tools showing racial or socioeconomic bias
  
  How to Mitigate Bias in AI
  
  1. Data Collection and Preparation:
  • Ensure diverse and representative training data
  • Regularly audit datasets for potential biases
  • Include data from underrepresented groups
  
  2. Algorithm Design:
  • Implement fairness metrics in model evaluation
  • Use bias detection tools during development
  • Test models across different demographic groups
  
  3. Development Process:
  • Include diverse teams in AI development
  • Conduct regular bias audits
  • Implement feedback mechanisms for users
  
  4. Organizational Practices:
  • Establish clear ethical guidelines
  • Provide bias awareness training
  • Create accountability mechanisms
  
  Best Practices for Bias Prevention
  
  1. Data Collection:
  • Gather data from diverse sources
  • Ensure balanced representation
  • Document data collection methods
  
  2. Model Development:
  • Use fairness metrics during training
  • Implement bias detection tools
  • Regular testing across different groups
  
  3. Deployment:
  • Monitor system performance
  • Collect user feedback
  • Update models as needed
  
  4. Governance:
  • Establish clear policies
  • Regular audits
  • Transparent reporting
  
  Activity: Identifying and Addressing Bias
  
  Step 1: Dataset Analysis
  • Examine a sample dataset for potential biases
  • Identify underrepresented groups
  • Note any missing or skewed data
  
  Step 2: Impact Assessment
  • Evaluate how bias might affect different users
  • Consider both direct and indirect effects
  • Document potential risks
  
  Step 3: Mitigation Strategy
  • Develop plans to address identified biases
  • Propose data collection improvements
  • Suggest algorithm modifications
  
  Future Considerations
  
  Emerging Challenges:
  • New forms of bias as AI systems evolve
  • Increasing complexity of AI models
  • Global variations in fairness standards
  
  Opportunities:
  • Advanced bias detection tools
  • Improved fairness metrics
  • Greater awareness and regulation
  
  Reflect and Discuss:
  • How might bias in AI systems affect your daily life?
  • What role can individuals play in promoting AI fairness?
  • How can organizations better address bias in their AI systems?
  
  By understanding and actively addressing bias in AI, we can work toward creating more equitable and effective AI systems that benefit all members of society.`,
        quiz: {
          questions: [
            {
              question: "What is a common cause of bias in AI systems?",
              options: [
                "Training data that lacks diversity or reflects societal biases",
                "Using too much computing power",
                "Having too many developers",
                "Using the latest algorithms"
              ],
              correct: 0,
              explanation: "Bias often stems from training data that lacks diversity or reflects existing societal biases, leading to AI systems that perpetuate or amplify these biases."
            },
            {
              question: "Which is an example of selection bias in AI?",
              options: [
                "When training data doesn't accurately represent the target population",
                "When the AI system runs too slowly",
                "When the system uses too much memory",
                "When the code is too complex"
              ],
              correct: 0,
              explanation: "Selection bias occurs when the training data collected does not accurately represent the target population, leading to models that may perform poorly for underrepresented groups."
            },
            {
              question: "What is a recommended practice for mitigating bias in AI?",
              options: [
                "Regular audits of AI systems for fairness and bias",
                "Using only one type of data",
                "Avoiding user feedback",
                "Limiting system testing"
              ],
              correct: 0,
              explanation: "Regular audits of AI systems for fairness and bias are essential for identifying and addressing potential biases, ensuring the system remains fair and effective for all users."
            }
          ]
        }
      },
      {
        id: "5.2",
        title: "Privacy and Data Protection",
        duration: "25 min",
        article: `Privacy is a critical concern in the development and use of Artificial Intelligence (AI). As AI systems rely on large amounts of data to function effectively, protecting individuals' personal information and ensuring ethical data practices are essential for building trust and preventing harm.
  
  Why Is Privacy Important in AI?
  AI systems often process sensitive information such as:
  • Personal details (name, address, age)
  • Financial data (credit cards, transactions)
  • Health records (medical diagnoses, treatments)
  • Behavioral data (online activities, preferences)
  
  Privacy Risks:
  • Identity theft
  • Financial fraud
  • Discrimination
  • Surveillance concerns
  • Loss of personal autonomy
  
  Common Privacy Risks in AI
  
  1. Data Breaches:
  • Unauthorized access to sensitive information
  • Example: Healthcare AI systems exposing patient records
  • Impact on individual privacy and trust
  
  2. Data Misuse:
  • Using data beyond original consent
  • Example: Social media data used for unexpected purposes
  • Violation of user trust and rights
  
  3. Reidentification:
  • Connecting anonymized data to individuals
  • Example: Combining datasets to reveal identities
  • Compromising privacy protections
  
  Best Practices for Privacy in AI
  
  1. Data Collection:
  • Minimize data collection to essential information
  • Obtain clear consent from users
  • Implement strong data security measures
  
  2. Data Protection:
  • Use encryption for sensitive data
  • Implement access controls
  • Regular security audits
  
  3. Transparency:
  • Clear privacy policies
  • User control over data
  • Regular updates on data usage
  
  4. Compliance:
  • Follow privacy regulations (GDPR, CCPA)
  • Regular compliance audits
  • Documentation of practices
  
  Real-World Privacy Protection Examples
  
  • Healthcare:
  • Secure storage of patient records
  • Anonymization of research data
  • Controlled access to sensitive information
  
  • Finance:
  • Encrypted transaction data
  • Secure authentication systems
  • Privacy-preserving analytics
  
  • Social Media:
  • User privacy controls
  • Data access restrictions
  • Transparent data practices
  
  Activity: Privacy Impact Assessment
  
  Step 1: Data Inventory
  • List types of data collected
  • Identify sensitive information
  • Map data flows
  
  Step 2: Risk Analysis
  • Identify potential privacy risks
  • Assess impact severity
  • Evaluate likelihood
  
  Step 3: Protection Measures
  • Propose security controls
  • Define access policies
  • Plan incident response
  
  Challenges in Privacy Protection
  
  • Technical Challenges:
  • Balancing utility and privacy
  • Evolving security threats
  • Complex systems integration
  
  • Regulatory Challenges:
  • Different privacy laws globally
  • Rapid technological change
  • Enforcement difficulties
  
  Future of Privacy in AI
  
  • Emerging Technologies:
  • Privacy-preserving AI
  • Federated learning
  • Homomorphic encryption
  
  • Trends:
  • Stronger regulations
  • Privacy by design
  • User empowerment
  
  Reflect and Discuss:
  • How do you protect your privacy online?
  • What privacy risks concern you most?
  • How can organizations better protect user privacy?
  
  By prioritizing privacy in AI development and deployment, we can create systems that respect individual rights while delivering valuable services and innovations.`,
        quiz: {
          questions: [
            {
              question: "What is a key principle of privacy protection in AI systems?",
              options: [
                "Collecting only essential data and implementing strong security measures",
                "Collecting as much data as possible",
                "Sharing all data publicly",
                "Ignoring user consent"
              ],
              correct: 0,
              explanation: "Privacy protection in AI systems should follow the principle of data minimization, collecting only essential data and implementing strong security measures to protect it."
            },
            {
              question: "What is reidentification in the context of AI privacy?",
              options: [
                "Connecting anonymized data back to specific individuals",
                "Creating new user accounts",
                "Deleting user data",
                "Encrypting files"
              ],
              correct: 0,
              explanation: "Reidentification occurs when supposedly anonymized data can be connected back to specific individuals, often by combining multiple datasets or using advanced analysis techniques."
            },
            {
              question: "Which is an example of a privacy-preserving technology in AI?",
              options: [
                "Federated learning that keeps data on user devices",
                "Collecting all possible user data",
                "Sharing data without encryption",
                "Ignoring privacy regulations"
              ],
              correct: 0,
              explanation: "Federated learning is a privacy-preserving technology that allows AI models to learn from data while keeping it on users' devices, protecting privacy by not centralizing sensitive information."
            }
          ]
        }
      },
      {
        id: "5.3",
        title: "Responsible AI Development",
        duration: "25 min",
        article: `Responsible AI refers to the ethical development, deployment, and use of Artificial Intelligence (AI) systems. As AI becomes increasingly integrated into daily life, ensuring that it is used responsibly is essential for minimizing harm and maximizing benefits for society.
  
  Principles of Responsible AI
  
  1. Fairness:
  • Equal treatment across demographics
  • Avoiding discrimination
  • Regular fairness audits
  
  2. Transparency:
  • Explainable decisions
  • Clear documentation
  • Open communication
  
  3. Accountability:
  • Clear responsibility chains
  • Impact assessment
  • Regular auditing
  
  4. Safety:
  • Robust testing
  • Security measures
  • Risk management
  
  5. Privacy:
  • Data protection
  • User consent
  • Secure handling
  
  Why Responsible AI Matters
  
  • Critical Applications:
  • Healthcare decisions
  • Financial services
  • Law enforcement
  • Education
  
  • Potential Risks:
  • Discrimination
  • Privacy violations
  • Safety issues
  • Loss of trust
  
  Key Components of Responsible AI
  
  1. Development Process:
  • Ethical guidelines
  • Diverse teams
  • Regular testing
  • User feedback
  
  2. Deployment:
  • Impact assessment
  • Monitoring systems
  • Update protocols
  • Support systems
  
  3. Governance:
  • Clear policies
  • Oversight committees
  • Regular audits
  • Compliance checks
  
  Real-World Applications
  
  • Healthcare:
  • Patient privacy protection
  • Fair treatment recommendations
  • Transparent decision-making
  
  • Finance:
  • Unbiased lending
  • Secure transactions
  • Clear explanations
  
  • Education:
  • Personalized learning
  • Fair assessment
  • Privacy protection
  
  Activity: Responsible AI Assessment
  
  Step 1: System Analysis
  • Identify AI components
  • Map decision points
  • List stakeholders
  
  Step 2: Risk Assessment
  • Evaluate potential impacts
  • Identify vulnerabilities
  • Consider consequences
  
  Step 3: Mitigation Planning
  • Develop safeguards
  • Create monitoring plans
  • Define response procedures
  
  Challenges in Responsible AI
  
  • Technical Challenges:
  • Complex systems
  • Rapid evolution
  • Integration issues
  
  • Organizational Challenges:
  • Resource constraints
  • Competing priorities
  • Implementation difficulties
  
  Future of Responsible AI
  
  • Emerging Trends:
  • Automated ethics checking
  • Enhanced transparency tools
  • Improved accountability systems
  
  • Best Practices:
  • Regular training
  • Continuous monitoring
  • Stakeholder engagement
  
  Reflect and Discuss:
  • How can AI be made more responsible?
  • What role should regulation play?
  • How can users promote responsible AI?
  
  By implementing responsible AI practices, organizations can build trust, reduce risks, and create sustainable value for society.`,
        quiz: {
          questions: [
            {
              question: "What is a key principle of responsible AI development?",
              options: [
                "Ensuring fairness and transparency in AI systems",
                "Maximizing profit at any cost",
                "Collecting unlimited data",
                "Avoiding user feedback"
              ],
              correct: 0,
              explanation: "Responsible AI development prioritizes fairness and transparency to ensure AI systems are ethical and trustworthy, benefiting all users equally."
            },
            {
              question: "Why is accountability important in responsible AI?",
              options: [
                "To ensure clear responsibility for AI decisions and impacts",
                "To avoid user involvement",
                "To reduce system testing",
                "To minimize documentation"
              ],
              correct: 0,
              explanation: "Accountability in AI ensures there are clear lines of responsibility for AI decisions and impacts, helping to maintain trust and address issues when they arise."
            },
            {
              question: "What is a best practice for responsible AI deployment?",
              options: [
                "Regular monitoring and impact assessment",
                "Avoiding system updates",
                "Ignoring user feedback",
                "Minimizing documentation"
              ],
              correct: 0,
              explanation: "Regular monitoring and impact assessment are crucial best practices for responsible AI deployment, helping to identify and address potential issues early."
            }
          ]
        }
      },
      {
        id: "5.4",
        title: "AI Careers and Future Trends",
        duration: "25 min",
        article: `The field of Artificial Intelligence (AI) offers diverse career opportunities and continues to evolve rapidly. Understanding career paths and future trends is essential for anyone interested in working with AI technologies.
  
  Career Opportunities in AI
  
  • Technical Roles:
  • Machine Learning Engineer
  • Data Scientist
  • AI Research Scientist
  • Computer Vision Engineer
  • NLP Engineer
  
  • Non-Technical Roles:
  • AI Product Manager
  • AI Ethicist
  • AI Policy Analyst
  • AI Trainer
  • AI Project Manager
  
  Required Skills
  
  • Technical Skills:
  • Programming (Python, R)
  • Mathematics and Statistics
  • Machine Learning
  • Deep Learning
  • Data Analysis
  
  • Soft Skills:
  • Problem Solving
  • Communication
  • Teamwork
  • Ethical Judgment
  • Adaptability
  
  Industry Applications
  
  • Healthcare:
  • Disease Diagnosis
  • Treatment Planning
  • Drug Discovery
  • Patient Care
  
  • Finance:
  • Risk Assessment
  • Fraud Detection
  • Trading Systems
  • Personal Banking
  
  • Technology:
  • Product Development
  • Research
  • Infrastructure
  • Security
  
  Future Trends in AI
  
  • Emerging Technologies:
  • Quantum AI
  • Neuromorphic Computing
  • Edge AI
  • Explainable AI
  
  • Application Areas:
  • Sustainable Development
  • Space Exploration
  • Climate Change
  • Healthcare Innovation
  
  Preparing for an AI Career
  
  • Education:
  • Formal Degrees
  • Online Courses
  • Certifications
  • Workshops
  
  • Practical Experience:
  • Projects
  • Internships
  • Competitions
  • Open Source
  
  Professional Development:
  • Networking
  • Conferences
  • Publications
  • Mentorship
  
  Activity: Career Planning
  
  • Step 1: Skills Assessment
  • Evaluate current skills
  • Identify gaps
  • Plan learning path
  
  • Step 2: Industry Research
  • Explore job roles
  • Research companies
  • Understand requirements
  
  • Step 3: Development Plan
  • Set career goals
  • Choose learning resources
  • Create timeline
  
  Challenges and Opportunities
  
  • Challenges:
  • Rapid technology change
  • Competitive field
  • Complex problems
  • Ethical considerations
  
  • Opportunities:
  • High demand
  • Innovation potential
  • Global impact
  • Career growth
  
  Success Strategies
  
  • Continuous Learning:
  • Stay updated
  • Learn new tools
  • Follow trends
  • Practice regularly
  
  • Professional Growth:
  • Build portfolio
  • Network actively
  • Seek mentorship
  • Share knowledge
  
  Reflect and Discuss:
  • Which AI career interests you?
  • What skills do you need to develop?
  • How can you prepare for future trends?
  
  The field of AI offers exciting opportunities for those willing to learn and adapt to rapid technological change.`,
        quiz: {
          questions: [
            {
              question: "What is an important skill for an AI career?",
              options: [
                "Problem solving and adaptability",
                "Musical talent",
                "Athletic ability",
                "Artistic drawing"
              ],
              correct: 0,
              explanation: "Problem solving and adaptability are crucial skills for AI careers, as the field requires creative solutions to complex problems and constant adaptation to new technologies."
            },
            {
              question: "Which is an emerging trend in AI technology?",
              options: [
                "Quantum AI and neuromorphic computing",
                "Traditional computing only",
                "Avoiding automation",
                "Reducing technology use"
              ],
              correct: 0,
              explanation: "Quantum AI and neuromorphic computing are emerging trends that promise to revolutionize AI capabilities and applications."
            },
            {
              question: "What is a recommended strategy for AI career development?",
              options: [
                "Continuous learning and building a project portfolio",
                "Avoiding new technologies",
                "Working alone only",
                "Ignoring industry trends"
              ],
              correct: 0,
              explanation: "Continuous learning and building a project portfolio are essential strategies for developing a successful career in AI, as the field evolves rapidly."
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
            id: "ethics-master",
            title: "Ethics Master",
            condition: "Complete all lessons in module 5"
          },
          {
            id: "future-visionary",
            title: "Future Visionary",
            condition: "Score 90%+ on all module 5 quizzes"
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
    title: "Emerging Technologies and Future of AI",
    description: "Explore cutting-edge AI technologies, future applications, and transformative innovations shaping the future",
    prerequisites: [1, 2, 3, 4, 5],
    icon: "Sparkles",
    themeColor: "blue",
  
    interactiveFeatures: {
      techLab: {
        enabled: true,
        components: {
          futureTech: {
            type: "interactive",
            features: ["tech-demos", "innovation-explorer", "trend-analyzer"]
          },
          applicationHub: {
            type: "hands-on",
            tools: ["use-case-simulator", "impact-calculator", "future-scenarios"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "6.1",
        title: "Emerging AI Technologies",
        duration: "30 min",
        article: `The landscape of Artificial Intelligence is rapidly evolving with groundbreaking technologies that are pushing the boundaries of what's possible. Understanding these emerging technologies is crucial for anyone interested in the future of AI.

Quantum AI and Computing

What is Quantum AI?
• Integration of quantum computing principles with AI algorithms
• Leverages quantum mechanics for complex computations
• Enables processing of vast amounts of data simultaneously

Key Features:
• Quantum Bits (Qubits): Can exist in multiple states simultaneously
• Quantum Entanglement: Allows for instant correlation between qubits
• Quantum Superposition: Enables parallel processing capabilities

Applications:
• Optimization Problems
• Drug Discovery
• Climate Modeling
• Cryptography
• Financial Modeling

Neuromorphic Computing

Overview:
• Computing architecture inspired by the human brain
• Mimics neural structures and operations
• Enables more efficient AI processing

Key Components:
• Artificial Synapses
• Neural Networks
• Spike-Based Processing
• Adaptive Learning

Advantages:
• Lower power consumption
• Real-time processing
• Improved learning capabilities
• Better pattern recognition

Edge AI and Computing

Definition:
• AI processing at or near the data source
• Reduced dependency on cloud computing
• Real-time decision making

Benefits:
• Reduced latency
• Enhanced privacy
• Lower bandwidth usage
• Improved reliability

Applications:
• Smart devices
• Autonomous vehicles
• Industrial IoT
• Healthcare monitoring

Advanced Natural Language Processing

Latest Developments:
• Large Language Models (LLMs)
• Zero-shot learning
• Few-shot learning
• Multilingual processing

Capabilities:
• Context understanding
• Natural conversation
• Content generation
• Language translation

Artificial General Intelligence (AGI) Research

Current State:
• Progress towards human-like reasoning
• Multi-domain problem solving
• Adaptive learning systems
• Consciousness research

Challenges:
• Computational requirements
• Ethical considerations
• Safety protocols
• Development timeline

Extended Reality (XR) and AI

Components:
• Virtual Reality (VR)
• Augmented Reality (AR)
• Mixed Reality (MR)
• AI-powered environments

Applications:
• Immersive training
• Virtual collaboration
• Educational experiences
• Entertainment systems

Emerging Hardware Technologies

Neural Processing Units (NPUs):
• Specialized AI processors
• Optimized for neural networks
• Enhanced performance
• Energy efficiency

Photonic Computing:
• Light-based processing
• Ultra-fast calculations
• Lower power consumption
• Reduced heat generation

Future Implications

Technical Impact:
• Increased processing power
• Enhanced AI capabilities
• New application domains
• Improved efficiency

Societal Impact:
• Transformed industries
• New job opportunities
• Changed daily life
• Enhanced human capabilities

Activity: Technology Assessment

Step 1: Choose a Technology
• Select an emerging technology
• Research its current state
• Identify key features
• Understand limitations

Step 2: Impact Analysis
• Evaluate potential applications
• Consider technical requirements
• Assess market potential
• Identify challenges

Step 3: Future Projection
• Predict development timeline
• Anticipate breakthroughs
• Consider implications
• Plan adaptation strategies

Reflect and Discuss:
• Which emerging technology has the most potential?
• How might these technologies change society?
• What challenges need to be overcome?

The rapid advancement of these technologies is reshaping the AI landscape and opening new possibilities for innovation and development.`,
        quiz: {
          questions: [
            {
              question: "What is a key advantage of neuromorphic computing?",
              options: [
                "Lower power consumption and improved learning capabilities",
                "Higher cost of implementation",
                "Increased data center requirements",
                "Slower processing speed"
              ],
              correct: 0,
              explanation: "Neuromorphic computing, inspired by the human brain, offers lower power consumption and improved learning capabilities compared to traditional computing architectures."
            },
            {
              question: "What is a primary benefit of Edge AI?",
              options: [
                "Reduced latency and enhanced privacy",
                "Increased cloud dependency",
                "Higher bandwidth usage",
                "Slower processing speed"
              ],
              correct: 0,
              explanation: "Edge AI processes data at or near the source, resulting in reduced latency and enhanced privacy by minimizing data transmission to the cloud."
            },
            {
              question: "Which is a key feature of Quantum AI?",
              options: [
                "The ability to process multiple states simultaneously using qubits",
                "Slower processing speed",
                "Limited data handling",
                "Single-state processing"
              ],
              correct: 0,
              explanation: "Quantum AI uses qubits that can exist in multiple states simultaneously, enabling parallel processing of vast amounts of data."
            }
          ]
        }
      },
      {
        id: "6.2",
        title: "Future Applications of AI",
        duration: "30 min",
        article: `As Artificial Intelligence continues to advance, its applications are expanding into new and transformative areas. Understanding these future applications helps us prepare for and shape the upcoming technological revolution.

Healthcare and Medicine

Personalized Medicine:
• AI-driven treatment plans
• Genetic analysis and therapy
• Drug development optimization
• Patient outcome prediction

Medical Imaging:
• Advanced diagnostic tools
• Real-time analysis
• 3D visualization
• Preventive screening

Patient Care:
• Automated monitoring
• Virtual health assistants
• Remote diagnostics
• Treatment optimization

Environmental Protection

Climate Change:
• Weather prediction
• Carbon footprint tracking
• Environmental monitoring
• Resource optimization

Conservation:
• Wildlife protection
• Ecosystem management
• Species preservation
• Habitat monitoring

Sustainable Energy:
• Smart grid management
• Energy optimization
• Renewable integration
• Consumption prediction

Space Exploration

Mission Planning:
• Trajectory optimization
• Resource management
• Risk assessment
• Decision support

Planetary Exploration:
• Autonomous rovers
• Data analysis
• Surface mapping
• Sample collection

Space Research:
• Astronomical data analysis
• Signal processing
• Object detection
• Mission control support

Transportation and Mobility

Autonomous Vehicles:
• Self-driving cars
• Smart navigation
• Safety systems
• Traffic optimization

Urban Mobility:
• Public transport optimization
• Traffic management
• Infrastructure planning
• Emergency response

Aviation:
• Flight optimization
• Maintenance prediction
• Safety enhancement
• Air traffic control

Education and Learning

Personalized Learning:
• Adaptive curricula
• Progress tracking
• Learning style optimization
• Real-time feedback

Virtual Education:
• Immersive experiences
• Interactive simulations
• Global collaboration
• Remote learning

Assessment:
• Automated evaluation
• Skill tracking
• Performance prediction
• Learning analytics

Agriculture and Food Production

Smart Farming:
• Crop optimization
• Resource management
• Yield prediction
• Pest control

Precision Agriculture:
• Automated systems
• Soil analysis
• Weather adaptation
• Irrigation control

Food Security:
• Supply chain optimization
• Quality control
• Waste reduction
• Distribution planning

Entertainment and Media

Content Creation:
• Automated generation
• Personalized content
• Interactive experiences
• Virtual production

Gaming:
• Adaptive gameplay
• NPC intelligence
• Procedural generation
• Real-time adaptation

Media Distribution:
• Content recommendation
• Audience analysis
• Platform optimization
• Quality enhancement

Activity: Future Applications Workshop

Step 1: Application Identification
• Choose an industry
• Identify AI opportunities
• Analyze current limitations
• Project future needs

Step 2: Impact Assessment
• Evaluate benefits
• Consider challenges
• Assess feasibility
• Plan implementation

Step 3: Development Roadmap
• Define milestones
• Identify requirements
• Plan resources
• Set timelines

Reflect and Discuss:
• Which application area excites you most?
• What challenges need to be overcome?
• How might these applications change society?

The future applications of AI promise to transform every aspect of our lives, creating new opportunities and solutions to global challenges.`,
        quiz: {
          questions: [
            {
              question: "What is a key application of AI in healthcare?",
              options: [
                "Personalized medicine and treatment optimization",
                "Reduced medical research",
                "Limited patient care",
                "Manual diagnostics only"
              ],
              correct: 0,
              explanation: "AI in healthcare enables personalized medicine through treatment optimization and individualized care plans based on patient data and genetic analysis."
            },
            {
              question: "How is AI transforming space exploration?",
              options: [
                "Through autonomous rovers and mission optimization",
                "By reducing space research",
                "Limiting data analysis",
                "Avoiding planetary exploration"
              ],
              correct: 0,
              explanation: "AI is revolutionizing space exploration through autonomous rovers, mission optimization, and advanced data analysis capabilities."
            },
            {
              question: "What is a future application of AI in agriculture?",
              options: [
                "Precision farming and crop optimization",
                "Manual crop monitoring",
                "Reduced automation",
                "Limited resource management"
              ],
              correct: 0,
              explanation: "AI in agriculture enables precision farming through crop optimization, resource management, and automated systems for improved yields."
            }
          ]
        }
      },
      {
        id: "6.3",
        title: "AI Systems Architecture",
        duration: "30 min",
        article: `Understanding the architecture of modern AI systems is crucial for developing efficient and scalable solutions. This lesson explores the key components and design principles of AI system architecture.

Core Components

Processing Units:
• Central Processing Units (CPUs)
• Graphics Processing Units (GPUs)
• Tensor Processing Units (TPUs)
• Neural Processing Units (NPUs)

Memory Systems:
• RAM configurations
• Cache hierarchies
• Storage optimization
• Memory management

Network Infrastructure:
• Data transmission
• Load balancing
• Scalability
• Redundancy

Architectural Patterns

Distributed Systems:
• Parallel processing
• Resource sharing
• Fault tolerance
• Load distribution

Microservices:
• Modular design
• Service isolation
• Easy scaling
• Flexible deployment

Pipeline Architecture:
• Data flow management
• Process optimization
• Error handling
• Performance monitoring

System Integration

Data Integration:
• Source connectivity
• Format handling
• Quality assurance
• Real-time processing

API Management:
• Interface design
• Version control
• Security protocols
• Documentation

Service Orchestration:
• Workflow management
• Service coordination
• Resource allocation
• Performance optimization

Performance Optimization

Scaling Strategies:
• Horizontal scaling
• Vertical scaling
• Auto-scaling
• Load balancing

Resource Management:
• Allocation optimization
• Usage monitoring
• Cost optimization
• Efficiency metrics

Cache Optimization:
• Strategy design
• Hit rate improvement
• Memory utilization
• Access patterns

Security Architecture

Access Control:
• Authentication
• Authorization
• Role management
• Policy enforcement

Data Protection:
• Encryption
• Privacy measures
• Compliance
• Audit trails

Threat Prevention:
• Vulnerability scanning
• Attack detection
• Response protocols
• Recovery procedures

Monitoring and Maintenance

System Monitoring:
• Performance metrics
• Resource usage
• Error detection
• Health checks

Maintenance Procedures:
• Update management
• Backup procedures
• Recovery plans
• Documentation

Quality Assurance:
• Testing protocols
• Validation procedures
• Performance benchmarks
• Compliance checks

Activity: Architecture Design

Step 1: System Analysis
• Define requirements
• Identify components
• Map dependencies
• Plan integration

Step 2: Performance Planning
• Set metrics
• Design monitoring
• Plan scaling
• Optimize resources

Step 3: Implementation Strategy
• Create roadmap
• Define phases
• Allocate resources
• Set milestones

Reflect and Discuss:
• What are the critical components in AI system architecture?
• How can performance be optimized?
• What security measures are essential?

Understanding AI system architecture is fundamental for building robust and efficient AI solutions that can scale and adapt to changing needs.`,
        quiz: {
          questions: [
            {
              question: "What is a key component of AI system architecture?",
              options: [
                "Specialized processing units like GPUs and TPUs",
                "Basic calculators",
                "Single-thread processing",
                "Limited memory systems"
              ],
              correct: 0,
              explanation: "Specialized processing units like GPUs and TPUs are essential components of AI system architecture, enabling efficient processing of AI workloads."
            },
            {
              question: "Which architectural pattern is important for AI systems?",
              options: [
                "Distributed systems with parallel processing",
                "Single-server systems",
                "Manual processing",
                "Limited scaling"
              ],
              correct: 0,
              explanation: "Distributed systems with parallel processing capabilities are crucial for AI systems to handle large-scale computations and ensure fault tolerance."
            },
            {
              question: "What is a critical aspect of AI system security?",
              options: [
                "Comprehensive access control and data protection",
                "Open access to all",
                "No encryption",
                "Limited monitoring"
              ],
              correct: 0,
              explanation: "Comprehensive access control and data protection are critical for securing AI systems and protecting sensitive information."
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
            condition: "Complete all lessons in module 6"
          },
          {
            id: "innovation-master",
            title: "Innovation Master",
            condition: "Score 90%+ on all module 6 quizzes"
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

# src/pages/Chapters.jsx

```jsx
import React, { useState } from 'react';
import { 
  Globe, 
  Users, 
  MapPin, 
  Star, 
  ArrowRight,
  Building,
  Heart,
  Target,
  Award
} from 'lucide-react';

export default function Chapters() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const chapters = [
    {
      country: "United States",
      flag: "🇺🇸",
      chapters: [
        { name: "New Jersey Chapter", location: "Newark, NJ", status: "Active", members: "50+ students" },
        { name: "California Chapter", location: "San Francisco, CA", status: "Active", members: "75+ students" },
        { name: "Texas Chapter", location: "Austin, TX", status: "Coming Soon", members: "30+ students" }
      ],
      description: "Our largest chapter network with multiple active locations across the country."
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      chapters: [
        { name: "Toronto Chapter", location: "Toronto, ON", status: "Active", members: "40+ students" },
        { name: "Vancouver Chapter", location: "Vancouver, BC", status: "Active", members: "35+ students" }
      ],
      description: "Expanding AI education across Canadian provinces with growing student engagement."
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      chapters: [
        { name: "London Chapter", location: "London, UK", status: "Active", members: "45+ students" },
        { name: "Manchester Chapter", location: "Manchester, UK", status: "Coming Soon", members: "25+ students" }
      ],
      description: "Bringing AI literacy to British students through innovative educational programs."
    },
    {
      country: "India",
      flag: "🇮🇳",
      chapters: [
        { name: "Mumbai Chapter", location: "Mumbai, MH", status: "Active", members: "60+ students" },
        { name: "Bangalore Chapter", location: "Bangalore, KA", status: "Active", members: "55+ students" },
        { name: "Delhi Chapter", location: "New Delhi, DL", status: "Coming Soon", members: "40+ students" }
      ],
      description: "Rapidly growing presence in India's tech hubs with strong student communities."
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      chapters: [
        { name: "Sydney Chapter", location: "Sydney, NSW", status: "Active", members: "30+ students" },
        { name: "Melbourne Chapter", location: "Melbourne, VIC", status: "Coming Soon", members: "20+ students" }
      ],
      description: "Expanding AI education across Australian cities with local partnerships."
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      chapters: [
        { name: "Berlin Chapter", location: "Berlin, DE", status: "Active", members: "35+ students" },
        { name: "Munich Chapter", location: "Munich, DE", status: "Coming Soon", members: "25+ students" }
      ],
      description: "Building AI literacy in German schools through innovative programs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden text-white">
        {/* Animated background with floating elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-green-300 rounded-full animate-bounce delay-1200"></div>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full text-white mb-8 border border-white/20">
            <Globe className="w-5 h-5" />
            <span className="font-semibold">Global Network</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
            Lumin AI Chapters
            <span className="block text-4xl text-blue-200 mt-3 font-medium">
              Worldwide
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Our international chapter network brings AI education to students across the globe, 
            creating a community of <span className="font-semibold text-yellow-300">young innovators and learners</span>.
          </p>
          
          <div className="mt-10">
            <a 
              href="https://forms.gle/g5MLJphJCwd3otyN8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-bold shadow-lg"
            >
              Start a Chapter
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Global Chapters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our international network of Lumin AI chapters, each bringing AI education 
              to students in their local communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedCountry(selectedCountry === index ? null : index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{chapter.flag}</div>
                  <div>
                    <h3 className="text-xl font-bold">{chapter.country}</h3>
                    <p className="text-gray-600 text-sm">{chapter.chapters.length} chapters</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{chapter.description}</p>
                
                <div className="space-y-3">
                  {chapter.chapters.map((location, locIndex) => (
                    <div key={locIndex} className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm">{location.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          location.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {location.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{location.location}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {location.members}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Chapter Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each Lumin AI chapter operates as a local community, bringing our proven AI education 
              programs to students in their own cities and regions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Leadership</h3>
              <p className="text-gray-600">
                Each chapter is led by local students and educators who understand their community's needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adapted Programs</h3>
              <p className="text-gray-600">
                Our AI education programs are adapted to meet local educational standards and cultural contexts.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-600">
                Students connect with peers worldwide, sharing ideas and collaborating on AI projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Start a Chapter</h2>
          <p className="text-xl mb-8 opacity-90">
            Interested in bringing Lumin AI to your city? Learn how to start a chapter in your community.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/contact-us" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
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
      question: "How do I start a Lumin AI chapter?",
      answer: "Apply through our Google Form to become a Chapter Lead. We'll email you and schedule a call to discuss next steps and how to recruit members for your chapter."
    },
    {
      question: "What's the scholarship opportunity?",
      answer: "Three chapter leads will each win $1000 scholarships. The chapters with the most members will be eligible to apply in the middle of next year."
    },
    {
      question: "When is the Summer Program available?",
      answer: "Session 2 runs August 7 - September 5, 2025. Classes are 1 hour each on weekends (Saturday + Sunday)."
    },
    {
      question: "What age groups can join?",
      answer: "Our programs are designed for middle school students ages 11-14 (grades 6-8)."
    },
    {
      question: "How much does the Summer Program cost?",
      answer: "The full 5-week program costs $250, including 10 interactive sessions, hands-on projects, and a completion certificate."
    },
    {
      question: "What countries have Lumin AI chapters?",
      answer: "We have chapters in 6 countries: United States, Canada, United Kingdom, India, Australia, and Germany with 15+ active chapters worldwide."
    },
    {
      question: "What is Lumin AI's mission?",
      answer: "We're a nonprofit dedicated to making AI education accessible to all students, with a focus on equitable access and hands-on learning experiences."
    },
    {
      question: "Do I need coding experience?",
      answer: "No prior experience required! Our programs are designed for beginners and include all necessary training and support."
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
import { GithubIcon, LinkedinIcon, Mail, Sparkles, Award, Users, Globe } from 'lucide-react';

const founders = [
  {
    name: "Shashank Madala",
    role: "Founder & Co-CEO",
    bio: "Committed to revolutionizing STEM education through accessible AI learning. Leads Lumin AI's mission to empower the next generation of innovators.",
    vision: "Empowering every student to understand and shape the future of AI technology.",
    image: "/images/shashank1.png",
    links: {
      linkedin: "https://www.linkedin.com/in/shashank-madala-320989295/",
      github: "https://github.com/shashankmadala",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6">
              <Sparkles className="w-4 h-4" />
              Leadership Team
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Founders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate leaders dedicated to transforming AI education and empowering the next generation of innovators
            </p>
          </div>


        </div>
      </section>

      {/* Founders Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div 
                key={founder.name}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="relative mb-8">
                      <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full"></div>
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 relative z-10"
                        />
                      </div>
                      {/* Status indicator */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
                        {founder.name}
                      </h2>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold mb-6 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        {founder.role}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {founder.bio}
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
                        <p className="text-gray-800 italic text-lg font-medium">
                          "{founder.vision}"
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4">
                        <a 
                          href={founder.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <LinkedinIcon className="w-6 h-6 text-blue-600" />
                        </a>
                        <a 
                          href={founder.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <GithubIcon className="w-6 h-6 text-gray-600" />
                        </a>
                        <a 
                          href={founder.links.email}
                          className="p-3 rounded-full bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <Mail className="w-6 h-6 text-purple-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Elegant shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

# src/pages/Home.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Brain, Users, Rocket, Construction, ChevronLeft, ChevronRight, ArrowUp, BookOpen, Globe, Award, Building, MapPin } from 'lucide-react';
import '../styles/animations.css';
import ImageCarousel from '../components/ImageCarousel';

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    students: 0,
    raised: 0,
    modules: 0,
    countries: 0,
    chapters: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger number animation when stats section comes into view
            if (entry.target.classList.contains('stats-section') && !hasAnimated) {
              setHasAnimated(true);
              animateNumbers();
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.animate-on-scroll, .stats-section').forEach((element) => {
      observer.observe(element);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    const targets = {
      students: 5200,
      raised: 4000,
      modules: 20,
      countries: 6,
      chapters: 15
    };

    const duration = 2000; // 2 seconds for faster animation
    const steps = 80; // More steps for smoother animation
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Use easing function for more natural animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setAnimatedNumbers({
        students: Math.floor(targets.students * easeOutQuart),
        raised: Math.floor(targets.raised * easeOutQuart),
        modules: Math.floor(targets.modules * easeOutQuart),
        countries: Math.floor(targets.countries * easeOutQuart),
        chapters: Math.floor(targets.chapters * easeOutQuart)
      });
      
      if (currentStep >= steps) {
        clearInterval(interval);
        // Ensure final numbers are exact
        setAnimatedNumbers(targets);
      }
    }, stepDuration);
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Middle School Student",
      quote: "I never thought I could understand AI, but Lumin AI made it so fun and easy! I loved building my own chatbot and showing it to my friends."
    },
    {
      name: "David Park",
      role: "Parent",
      quote: "My son was always interested in technology, and this program gave him the perfect introduction to AI. The weekend sessions fit perfectly with his schedule."
    },
    {
      name: "Maya Patel",
      role: "Middle School Student",
      quote: "The hands-on projects were my favorite part! I learned how to make a simple AI that can recognize different types of flowers in my garden."
    }
  ];

  // Define gallery images - these will be loaded from the public folder
  const galleryImages = [
    { src: "/gallery/IMG_8314-2.jpg", alt: "Students learning AI concepts" },
    { src: "/gallery/IMG_8315.jpg", alt: "Interactive AI workshop" },
    { src: "/gallery/IMG_8316.jpg", alt: "Students collaborating on projects" },
    { src: "/gallery/IMG_8317.jpg", alt: "AI education in action" },
    { src: "/gallery/IMG_8319.jpg", alt: "Hands-on learning experience" },
    { src: "/gallery/IMG_8320-2.jpg", alt: "Students presenting their work" },
    { src: "/gallery/IMG_8321-2.jpg", alt: "AI workshop activities" },
    { src: "/gallery/IMG_8324-2.jpg", alt: "Learning AI fundamentals" },
    { src: "/gallery/IMG_8325-2.jpg", alt: "Student AI projects showcase" }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-on-scroll from-bottom">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
                AI Education
                <span className="block text-4xl lg:text-6xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Made Easy
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover a new way to learn AI - interactive, comprehensive, and designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  to="/summer-program" 
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium relative group overflow-visible shadow-lg"
                  style={{ boxShadow: '0 0 32px 8px rgba(168, 85, 247, 0.25), 0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Summer Program
                  </span>
                  <span className="ml-3 relative z-10 bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-full animate-pulse whitespace-nowrap">
                    Limited Time!
                  </span>
                </Link>
                <Link 
                  to="/join-us" 
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
                >
                  Start a Chapter
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-on-scroll from-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 blur-sm"></div>
                <img 
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="relative rounded-3xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.log('Image failed to load:', e.target.src);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 stagger-children stats-section">
            {[
              { key: 'students', label: 'Students', value: animatedNumbers.students, suffix: '+', icon: '👥', color: 'blue' },
              { key: 'raised', label: 'Raised', value: animatedNumbers.raised, prefix: '$', suffix: '+', icon: '💰', color: 'green' },
              { key: 'modules', label: 'Modules', value: animatedNumbers.modules, suffix: '+', icon: '📚', color: 'purple' },
              { key: 'countries', label: 'Countries', value: animatedNumbers.countries, suffix: '+', icon: '🌍', color: 'indigo' },
              { key: 'chapters', label: 'Chapters', value: animatedNumbers.chapters, suffix: '+', icon: '🏢', color: 'pink' },
            ].map((stat, index) => (
              <div 
                key={stat.key} 
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} text-center p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group border border-gray-200/50 relative overflow-hidden`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  boxShadow: '0 8px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-50/30 to-${stat.color}-100/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-all duration-500 group-hover:scale-110">
                    {stat.prefix || ''}{stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-600 text-xs font-semibold group-hover:text-blue-500 transition-colors duration-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
                
                {/* Elegant shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                
                {/* Subtle border glow */}
                <div className={`absolute inset-0 rounded-xl border-2 border-${stat.color}-200/0 group-hover:border-${stat.color}-200/50 transition-all duration-500`}></div>
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
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Why Choose Lumin AI?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Comprehensive AI education designed for the next generation
            </p>
            <Link 
              to="/learn" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
            >
              Start Learning Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6 text-blue-600"/>,
                title: "Expert-Led Learning",
                description: "Learn from industry professionals and AI experts through carefully crafted curriculum"
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-600"/>,
                title: "Global Community",
                description: "Join our international network of 15+ chapters across 6 countries"
              },
              {
                icon: <Award className="w-6 h-6 text-blue-600"/>,
                title: "Scholarship Opportunities",
                description: "Compete for $1000 scholarships by starting and growing Lumin AI chapters"
              },
              {
                icon: <Rocket className="w-6 h-6 text-blue-600"/>,
                title: "Hands-on Projects",
                description: "Apply your knowledge with real-world AI projects and practical exercises"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`animate-on-scroll ${index % 2 === 0 ? '' : 'from-right'} bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                    <div className="transform transition-transform duration-300 group-hover:rotate-6">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll from-bottom">
            <h2 className="text-5xl font-bold mb-4">Global Impact</h2>
            <p className="text-xl text-gray-600">
              Expanding AI education worldwide through our international chapter network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Chapters Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Global Chapters</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our international network spans 6 countries with 15+ active chapters, bringing AI education to students worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">400+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <Link 
                to="/chapters" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore Our Chapters
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Educational Impact Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Educational Impact</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Making AI education accessible and engaging for students worldwide through innovative learning experiences.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Interactive AI curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Hands-on learning experiences</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Global student community</span>
                </div>
              </div>
              <Link 
                to="/learn" 
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                Start Learning Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Opportunity Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">$3000 Scholarship Opportunity</h2>
            <p className="text-xl text-gray-600 mb-6">
              High school students can compete for one of THREE $1000 scholarships by starting and growing Lumin AI chapters!
            </p>
          </div>
          <Link 
            to="/join-us" 
            className="inline-flex items-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-full hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
          >
            Apply for Chapter Lead
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-24 bg-gray-50">
        <ImageCarousel images={galleryImages.slice(1)} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll from-bottom">
            <h2 className="text-4xl font-bold mb-4">Student Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our amazing community of learners
            </p>
          </div>

          <div className="relative">
            {/* Testimonial Cards Stack */}
            <div className="flex items-center justify-center">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-4 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="relative max-w-4xl mx-auto px-16">
                {/* Background cards for depth effect */}
                <div className="absolute inset-0 transform rotate-2 bg-gray-100 rounded-2xl opacity-30"></div>
                <div className="absolute inset-0 transform -rotate-1 bg-gray-200 rounded-2xl opacity-20"></div>
                
                {/* Main testimonial card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Avatar/Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonials[currentTestimonial].name}</h3>
                        <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</p>
                      </div>
                      <blockquote className="text-gray-700 text-lg leading-relaxed relative">
                        <span className="absolute -top-2 -left-2 text-4xl text-blue-200 font-serif">"</span>
                        {testimonials[currentTestimonial].quote}
                        <span className="absolute -bottom-2 -right-2 text-4xl text-purple-200 font-serif">"</span>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-4 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-transparent rounded-tr-full" />

              <div className="relative text-center">
                <h2 className="text-4xl font-bold mb-6">Start Your AI Journey Today</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Choose your path and begin your adventure into the world of artificial intelligence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    to="/learn"
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2"
                  >
                    <BookOpen className="w-8 h-8" />
                    <span className="font-semibold">Start Learning</span>
                    <span className="text-sm text-blue-100">Free online course</span>
                  </Link>
                  <Link
                    to="/summer-program"
                    className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2"
                  >
                    <Users className="w-8 h-8" />
                    <span className="font-semibold">Join Summer Program</span>
                    <span className="text-sm text-purple-100">Live online sessions</span>
                  </Link>
                  <Link
                    to="/join-us"
                    className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2"
                  >
                    <Globe className="w-8 h-8" />
                    <span className="font-semibold">Start a Chapter</span>
                    <span className="text-sm text-green-100">$1000 scholarship opportunity</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-on-scroll from-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl transform -rotate-3 blur-sm"></div>
                <img 
                  src={galleryImages[4].src} 
                  alt={galleryImages[4].alt}
                  className="relative rounded-3xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.log('Image failed to load:', e.target.src);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-4 transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <button
          onClick={scrollToTop}
          className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ArrowUp className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
        </button>
        <Link
          to="/learn"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
          Start Learning
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
```

# src/pages/JoinUs.jsx

```jsx
import React from 'react';
import { 
  Users, 
  Award, 
  Globe, 
  MapPin, 
  Star, 
  ArrowRight,
  Trophy,
  Target,
  Heart,
  Building
} from 'lucide-react';

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden text-white">
        {/* Animated background with floating elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
          {/* Floating geometric shapes */}
          <div className="absolute top-16 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-16 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-green-300 rounded-full animate-bounce delay-1200"></div>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full text-white mb-6 border border-white/20">
            <Award className="w-5 h-5" />
            <span className="font-semibold">$3000 Total Scholarship Opportunity</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Join Lumin AI
            <span className="block text-3xl text-blue-200 mt-2 font-medium">
              Become a Chapter Lead
            </span>
          </h1>
          
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            An amazing opportunity for <span className="font-semibold text-yellow-300">ALL HIGH SCHOOL STUDENTS</span> to be part of an incredible nonprofit organization 
            and compete for one of <span className="font-bold text-yellow-300">THREE $1000 INTERNATIONAL SCHOLARSHIPS</span>!
          </p>
          
          <div className="mt-8">
            <a 
              href="https://forms.gle/g5MLJphJCwd3otyN8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-bold shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Opportunity</h2>
            <p className="text-xl text-gray-600">
              We are expanding our organization and want to start chapters across the USA and internationally!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Chapter Lead Role</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Once you start a chapter, you will be given the title of <strong>Chapter Lead</strong> for your local city.
              </p>
              <p className="text-gray-700">
                Your job is to spread the mission of Lumin AI to students in your area by gathering the most amount of volunteers as part of your chapter.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">$3000 Total Scholarships</h3>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>THREE chapter leads will each win a $1000 INTERNATIONAL SCHOLARSHIP!</strong>
              </p>
              <p className="text-gray-700">
                The chapters with the most members will be eligible for the scholarship competition in the middle of next year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Chapter leads will form a state team and do stuff in the chapter. They will then start to encourage Lumin chapters in cities/towns in that state.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Start Your Chapter</h3>
              <p className="text-gray-600">
                Apply to become a Chapter Lead for your local city and get started with Lumin AI.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Build Your Team</h3>
              <p className="text-gray-600">
                Recruit volunteers and members for your chapter. The more members, the better your chances!
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Win the Scholarship</h3>
              <p className="text-gray-600">
                Apply for one of THREE $1000 scholarships in the middle of next year!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Why Join Lumin AI?
            </h2>
            <p className="text-gray-600">
              Be part of something bigger and make a real impact in your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Leadership Experience</h3>
                <p className="text-sm text-gray-600">Develop leadership skills by managing your own chapter and team.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Global Network</h3>
                <p className="text-sm text-gray-600">Connect with students worldwide and be part of an international community.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Make a Difference</h3>
                <p className="text-sm text-gray-600">Help bring AI education to students in your community.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Scholarship Opportunity</h3>
                <p className="text-sm text-gray-600">Compete for one of THREE $1000 scholarships!</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Nonprofit Experience</h3>
                <p className="text-sm text-gray-600">Gain valuable experience working with a nonprofit organization.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">Expand Your Network</h3>
                <p className="text-sm text-gray-600">Build connections with students, educators, and industry professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Lumin AI today and compete for one of THREE $1000 INTERNATIONAL SCHOLARSHIPS!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://forms.gle/g5MLJphJCwd3otyN8" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
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

# src/pages/Learn.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { Brain, Book, Trophy, ArrowLeft, Award, BookOpen, Code, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import ModuleList from '../components/course/ModuleList';
import LessonView from '../components/course/LessonView';
import FinalExam from '../components/course/FinalExam';
import Certificate from '../components/course/Certificate';
import ProgressTracker from '../components/course/ProgressTracker';
import PathView from '../components/course/PathView';
import ImageClassifier from '../components/projects/ImageClassifier';
import courseData from '../data/courseData';

export default function Learn() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('article');
  const [showFinalExam, setShowFinalExam] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showLearningPath, setShowLearningPath] = useState(false);
  const [showImageClassifier, setShowImageClassifier] = useState(false);

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
      examAttempts: 0,
      completedProjects: []
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

  const handleProjectCompletion = (projectData) => {
    setProgress(prev => ({
      ...prev,
      completedProjects: [...(prev.completedProjects || []), {
        id: 'image-classifier',
        completedDate: new Date().toISOString(),
        data: projectData
      }]
    }));
    setShowImageClassifier(false);
  };

  const isProjectCompleted = (projectId) => {
    if (!progress.completedProjects) return false;
    return progress.completedProjects.some(project => project.id === projectId);
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
          ) : showLearningPath ? (
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
          ) : showImageClassifier ? (
            <ImageClassifier 
              onComplete={handleProjectCompletion}
              onBack={() => setShowImageClassifier(false)}
            />
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
                        onClick={() => setShowLearningPath(true)}
                      >
                        <Brain className="w-5 h-5 text-blue-500" />
                        <span>Learning Path</span>
                      </button>
                    </div>

                    {/* Course Title - Only show once here */}
                    <div className="text-center mb-12">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Fundamentals</h1>
                      <p className="text-xl text-gray-600">Master the fundamentals of artificial intelligence and machine learning</p>
                    </div>

                    {/* Module List */}
                    <ModuleList 
                      modules={courseData.modules.slice(0, 2)}
                      progress={progress}
                      activeModule={activeModule}
                      setActiveModule={setActiveModule}
                      setActiveLesson={setActiveLesson}
                      showTitle={false}
                    />

                    {/* Remaining Modules */}
                    <ModuleList 
                      modules={courseData.modules.slice(2)}
                      progress={progress}
                      activeModule={activeModule}
                      setActiveModule={setActiveModule}
                      setActiveLesson={setActiveLesson}
                      showTitle={false}
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

# src/pages/PolicyTeam.jsx

```jsx
import React from 'react';
import { 
  Building, 
  FileText, 
  Users, 
  Target, 
  Award,
  MapPin,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function PolicyTeam() {

  const teamMembers = [
    {
      name: "Aayush Chebolu",
      role: "",
      image: "/images/aayush.png",
      description: "Legislative strategy and stakeholder engagement."
    },
    {
      name: "Ayur Munipalli", 
      role: "",
      image: "/images/ayur.png",
      description: "Policy coordination with legislators and schools."
    },
    {
      name: "Wilson Stavros",
      role: "",
      image: "/images/wilson-placeholder.png", 
      description: "AI literacy standards research."
    },
    {
      name: "Shashank Madala",
      role: "",
      image: "/images/shashank1.png",
      description: "Founder supporting statewide AI literacy."
    }
  ];

  const policyGoals = [
    "Make AI literacy part of K-12 curriculum",
    "Support teacher training on AI concepts",
    "Ensure equitable access to AI education",
    "Build partnerships with schools and industry"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Policy Team Page - Temporarily Commented Out */}
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Policy Team</h1>
          <p className="text-xl text-gray-600">
            This page is temporarily unavailable.
          </p>
        </div>
      </div>
      
      {/* 
      Original Policy Team Page Content - Commented Out
      
      <section className="pt-32 pb-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white mb-4">
            <Building className="w-4 h-4" />
            Policy & Advocacy
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Literacy for New Jersey</h1>
          <p className="text-lg text-blue-100 mb-2">
            Lumin AI's policy team is working to pass a bill for AI literacy in New Jersey schools.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Meet the Policy Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow p-5 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission & Goals</h2>
          <p className="text-gray-700 text-center mb-10">
            We are dedicated to making AI education accessible and equitable for all students in New Jersey by advocating for legislative change and building strong partnerships.
          </p>
          <div className="flex flex-col md:flex-row md:items-stretch md:gap-8 gap-6">
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Policy Goals</h3>
              <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
                {policyGoals.map((goal, i) => <li key={i}>{goal}</li>)}
              </ul>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-px h-40 bg-gray-200" />
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <Award className="w-12 h-12 text-yellow-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
                <li>Drafting and advocating for AI literacy legislation</li>
                <li>Engaging with educators, administrators, and policymakers</li>
                <li>Building a foundation for future-ready education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Support Our Mission</h2>
          <p className="mb-6 opacity-90">
            Join us in making AI literacy a reality for every student in New Jersey.
          </p>
          <a 
            href="/contact-us" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Involved
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      */}
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
  PlayCircle,
  CreditCard,
  Building,
  GraduationCap,
  Heart,
  Mic
} from 'lucide-react';

export default function SummerProgram() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeSession, setActiveSession] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [isTimelineAnimated, setIsTimelineAnimated] = useState(false);
  const [hoveredBadgeIndex, setHoveredBadgeIndex] = useState(null);
  const [currentImpactIndex, setCurrentImpactIndex] = useState(0);

  // Function to handle manual carousel navigation
  const handleImpactCardChange = (direction) => {
    if (direction === 'next') {
      setCurrentImpactIndex(prev => (prev + 1) % fundAllocation.length);
    } else {
      setCurrentImpactIndex(prev => (prev - 1 + fundAllocation.length) % fundAllocation.length);
    }
  };

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

    // Auto-rotate impact cards
    const impactInterval = setInterval(() => {
      setCurrentImpactIndex(prev => (prev + 1) % fundAllocation.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(impactInterval);
    };
  }, []);

  const weeks = {
    1: {
      title: "Introduction to AI & Machine Learning Basics",
      description: "Explore what AI is, real-world applications, and how machines learn from data.",
      sessions: [
        {
          title: "What is AI?",
          description: "Icebreakers, AI Scavenger Hunt, and Group Presentations",
          outcomes: [
            "Identify and categorize real-world AI applications",
            "Discuss benefits, risks, and ethical considerations",
            "Present findings and ask questions about AI's impact"
          ],
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: "How AI Learns",
          description: "Supervised vs. Unsupervised Learning Activities",
          outcomes: [
            "Recognize patterns in labeled and unlabeled data",
            "Understand supervised vs. unsupervised learning",
            "Explain how AI uses data to make predictions"
          ],
          icon: <Sparkles className="w-6 h-6" />
        }
      ]
    },
    2: {
      title: "Natural Language Processing (NLP) & AI Ethics",
      description: "Learn how AI understands language and discuss fairness and bias in AI systems.",
      sessions: [
        {
          title: "NLP & How AI Understands Language",
          description: "Chatbot Simulation, Sentence Dissection, and Code Demo",
          outcomes: [
            "Break down chatbot conversations into intent, keywords, and context",
            "Tokenize and analyze sentences (offline or with code)",
            "Compare rule-based vs. ML-based chatbots"
          ],
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Ethics & Bias in AI",
          description: "AI Fairness Debate & Bias Experiment",
          outcomes: [
            "Debate fairness in AI (roles: business, government, citizen)",
            "Identify and test bias in AI models using hands-on experiments",
            "Discuss real-world impact of AI bias"
          ],
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    3: {
      title: "Building Blocks of Chatbots",
      description: "Design chatbot flowcharts and code simple chatbots in Python.",
      sessions: [
        {
          title: "How Chatbots Work",
          description: "Flowchart Challenge and Roleplay",
          outcomes: [
            "Create a conversation flowchart for a chatbot topic",
            "Roleplay chatbot interactions and identify breakdowns",
            "Discuss differences between scripted and AI chatbots"
          ],
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: "Intro to Python for AI",
          description: "Hands-on Coding: Build a Simple Chatbot",
          outcomes: [
            "Modify a Python chatbot script with if-else logic",
            "Test and customize chatbot responses",
            "Explore advanced AI-powered chatbot models"
          ],
          icon: <Code className="w-6 h-6" />
        }
      ]
    },
    4: {
      title: "Project Phase – Building the Chatbot",
      description: "Plan, wireframe, and start building your own AI chatbot.",
      sessions: [
        {
          title: "Planning the Chatbot",
          description: "Mind Mapping, Wireframing, and Peer Feedback",
          outcomes: [
            "Map out chatbot goals, users, and key functions",
            "Create a wireframe for chatbot interactions",
            "Refine ideas through peer discussion and feedback"
          ],
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          title: "Developing the Chatbot",
          description: "Build with Pre-Trained AI Models & Peer Testing",
          outcomes: [
            "Integrate a pre-trained AI model into your chatbot",
            "Customize responses and test with peers",
            "Discuss how models improve with more data"
          ],
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    5: {
      title: "Testing, Improving, and Showcasing",
      description: "Debug, optimize, and present your chatbot project.",
      sessions: [
        {
          title: "Debugging & Improving Chatbots",
          description: "User Testing, Bug Fixing, and Optimization",
          outcomes: [
            "Test and debug chatbot projects with peers",
            "Fix errors and improve responses based on feedback",
            "Understand the importance of iterative testing"
          ],
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Final Showcase & Future of AI",
          description: "Chatbot Presentations, Peer Feedback, and Career Paths",
          outcomes: [
            "Present chatbot projects and receive peer feedback",
            "Vote on creative and best AI implementations",
            "Discuss real-world AI applications and career paths"
          ],
          icon: <Award className="w-6 h-6" />
        }
      ]
    }
  };

  const paymentMethods = [
    { name: "Venmo", icon: <CreditCard className="w-6 h-6" /> },
    { name: "Zelle", icon: <CreditCard className="w-6 h-6" /> },
    { name: "PayPal", icon: <CreditCard className="w-6 h-6" /> }
  ];

  const fundAllocation = [
    { 
      title: "Student Scholarships", 
      description: "Providing AI education opportunities to underserved students",
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      percentage: "40%"
    },
    { 
      title: "AI Education Advocacy", 
      description: "Lobbying for AI curriculum in K-12 education",
      icon: <Building className="w-6 h-6 text-blue-600" />,
      percentage: "30%"
    },
    { 
      title: "Hackathons & Events", 
      description: "Supporting youth AI innovation events",
      icon: <Code className="w-6 h-6 text-purple-600" />,
      percentage: "30%"
    }
  ];

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
                Summer Session Available:
              </div>
              <div className="flex gap-4 mb-6">
                <div className="px-4 py-2 bg-pink-100 rounded-full text-pink-700">
                  Session 2: August 7 - September 5
                </div>
              </div>
              <div className="mb-6">
                <div className="inline-flex flex-wrap items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-3 shadow-sm">
                  <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="font-semibold text-gray-800">Available Times (EST):</span>
                  <span className="bg-white rounded-full px-3 py-1 text-sm font-medium text-yellow-700 border border-yellow-200">10–11am</span>
                  <span className="bg-white rounded-full px-3 py-1 text-sm font-medium text-yellow-700 border border-yellow-200">11–12pm</span>
                  <span className="bg-white rounded-full px-3 py-1 text-sm font-medium text-yellow-700 border border-yellow-200">12–1pm</span>
                  <span className="text-gray-600 text-sm ml-2">(Pick your preferred time!)</span>
                </div>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Transform Your Summer with
                <span className="block text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mt-2">
                LuminAI Summer Seminar
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our 5-week AI program designed specifically for middle school students ages 11-14 (grades 6-8)
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
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">5-Week Program</h3>
                      
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Weekend Sessions</h3>
                      <p className="text-gray-600">1 hour Saturday + 1 hour Sunday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ages 11-14</h3>
                      <p className="text-gray-600">Perfect for grades 6-8</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Program Fee</h3>
                      <p className="text-gray-600">$250 for the full program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 5-week AI education program takes students from basic concepts to building their own AI chatbots
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">
                Students learn through interactive activities, challenges, and real-world applications, not just lectures.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Real AI Projects</h3>
              <p className="text-gray-600">
                Students will build their own AI chatbots from scratch and showcase them to peers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Special Keynote Speaker</h3>
              <p className="text-gray-600">
                Hear from an industry leader at the forefront of AI innovation in our final session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-24 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Timeline</h2>
            <p className="text-xl text-gray-600">Your 5-week journey to AI mastery</p>
          </div>

          <div className="flex justify-center mb-12 overflow-x-auto py-2">
            <div className="inline-flex rounded-full bg-white shadow-md p-1">
              {Object.keys(weeks).map((weekNum) => (
                <button
                  key={weekNum}
                  onClick={() => setActiveWeek(parseInt(weekNum))}
                  className={`px-4 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeWeek === parseInt(weekNum) 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Week {weekNum}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-2">Week {activeWeek}: {weeks[activeWeek].title}</h3>
            <p className="text-gray-600 mb-8">{weeks[activeWeek].description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {weeks[activeWeek].sessions.map((session, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      {session.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{session.title}</h4>
                      <p className="text-sm text-gray-600">{session.description}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Students will:</p>
                    <ul className="space-y-1">
                      {session.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Keynote Speaker Section */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-purple-900 text-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 mx-auto">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Special Keynote Speaker</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Wrap up your AI learning journey with inspiration from a leader at <span className="font-bold text-white">CoreWeave</span>, a pioneering company powering the next generation of AI innovation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Insights from a Leading AI Infrastructure Company</h3>
                  <p className="text-blue-100">Our guest speaker from <span className='font-bold text-white'>CoreWeave</span>—a company at the forefront of powering large-scale AI and machine learning—will share real-world applications, industry trends, and the future of AI technology.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Interactive Q&A Session</h3>
                  <p className="text-blue-100">Students will have the opportunity to ask questions and engage directly with our guest speaker from CoreWeave.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Career Pathways</h3>
                  <p className="text-blue-100">Learn about different career paths in AI and what skills students should develop for future opportunities, directly from a CoreWeave industry expert.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg italic text-white/80">
                "We're thrilled to feature a special guest speaker from <span className='font-bold text-white'>CoreWeave</span>, a leader in AI infrastructure, who will share their experience and inspire our young AI enthusiasts."
              </p>
              <p className="mt-2 text-blue-300">Speaker details will be announced closer to the program date</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Details & Enrollment</h2>
            <p className="text-xl text-gray-600">Invest in your child's AI education journey</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-lg mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-4">Summer AI Program</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">$250</span>
                  <span className="text-gray-600">/ full program</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">10 Interactive Sessions</p>
                      <p className="text-sm text-gray-600">Weekend classes for 5 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Hands-on Project</p>
                      <p className="text-sm text-gray-600">Build a functional AI chatbot</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Special Keynote Speaker</p>
                      <p className="text-sm text-gray-600">Industry leader presentation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Completion Certificate</p>
                      <p className="text-sm text-gray-600">Formal recognition of achievement</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://forms.gle/YzAwMRgzQq8saqrPA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Available Session:</p>
                      <p className="text-blue-100">Session 2: August 7 - September 5, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Weekend Sessions</p>
                      <p className="text-blue-100">1 hour Saturday + 1 hour Sunday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Small Class Size</p>
                      <p className="text-blue-100">Limited spots available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Brain className="w-6 h-6 text-blue-200 flex-shrink-0" />
                    <div>
                      <p className="font-medium">No Prior Experience Needed</p>
                      <p className="text-blue-100">Designed for beginners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Accepted Payment Methods</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {paymentMethods.map((method) => (
                <div key={method.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    {method.icon}
                  </div>
                  <span className="font-medium">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a nonprofit organization, 100% of program fees directly support our mission to make AI education accessible to all students
            </p>
          </div>

          {/* Interactive Impact Carousel */}
          <div className="relative mb-16">
            <div className="max-w-4xl mx-auto">
              {/* Navigation Arrows */}
              <button 
                onClick={() => handleImpactCardChange('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                aria-label="Previous impact"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => handleImpactCardChange('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                aria-label="Next impact"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Carousel Content */}
              <div className="relative h-[350px] overflow-hidden rounded-2xl">
                {fundAllocation.map((fund, index) => (
                  <div 
                    key={fund.title}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === currentImpactIndex 
                        ? 'translate-x-0 opacity-100 z-10' 
                        : index < currentImpactIndex 
                          ? '-translate-x-full opacity-0 z-0' 
                          : 'translate-x-full opacity-0 z-0'
                    }`}
                    aria-hidden={index !== currentImpactIndex}
                  >
                    <div className="bg-white h-full rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center mb-6 shadow-md">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center">
                          {fund.icon}
                        </div>
                      </div>
                      <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{fund.percentage}</div>
                      <h3 className="text-2xl font-semibold mb-3">{fund.title}</h3>
                      <p className="text-gray-600 max-w-lg">{fund.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {fundAllocation.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImpactIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImpactIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to impact slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-10 h-10 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Making AI Education Accessible</h3>
                <p className="text-gray-600">
                  We believe that every student should have access to quality AI education regardless of their background. Our nonprofit is committed to creating an inclusive environment where the innovators of tomorrow can thrive.
                </p>
              </div>
            </div>
            <div className="pl-0 md:pl-24">
              <p className="text-gray-600 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                By enrolling in our summer program, you're not only investing in your child's future but also supporting our mission to expand AI education opportunities for underserved communities.
              </p>
            </div>
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
              href="https://forms.gle/YzAwMRgzQq8saqrPA" 
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

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-slower {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-spin-slower {
  animation: spin-slower 12s linear infinite;
}
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

# vercel.json

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
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

