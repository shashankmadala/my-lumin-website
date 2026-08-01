import { lazy } from 'react';

// Registry of interactive widgets embeddable in lessons via
// { type: 'interactive', component: '<Name>', props: {...} }.
// Each component is lazy-loaded so course pages stay fast.
//
// Props contract (all components):
//   - self-contained: no network calls, all state internal
//   - optional `onComplete()` callback fired when the learner finishes meaningfully
//   - configurable via `props` from the lesson block where noted
//
// Component guide (for content authors):
//   TrainingSimulator  — label training examples, watch a classifier learn (supervised learning)
//   NeuronPlayground   — sliders for weights/bias on a simple neuron, live output
//   TokenPredictor     — next-word prediction game (how LLMs work)
//   PromptLab          — assemble a prompt from parts, compare weak vs strong outputs
//   BiasSimulator      — pick training data mix, see predictions skew (data bias)
//   AIOrNot            — guess whether text is AI- or human-written
//   PatternGame        — spot the pattern, predict the next item
//   DecisionTreeGame   — build a decision tree by choosing feature splits
//   SortingGame        — drag/tap items into category buckets. props: { title, categories: [{id,label}], items: [{text, category, explanation?}] }
//   ScenarioSim        — branching scenario cards with feedback. props: { title, scenarios: [{situation, options: [{text, quality: 'best'|'ok'|'poor', feedback}]}] }
//   SequenceBuilder    — put steps in the right order. props: { title, intro?, steps: ['first', 'second', ...] } (given in correct order; shuffled for play)
//   FlashcardDeck      — flip-card review. props: { title?, cards: [{front, back}] }
//   EducatorPromptLab  — teacher prompt studio: pick grade/subject/task, build a prompt, see quality feedback
//   LessonPlanBuilder  — guided AI-integrated lesson plan builder with copyable output
//   TimeSavedCalculator— estimate weekly hours AI could save on teacher tasks

export const interactiveComponents = {
  TrainingSimulator: lazy(() => import('../interactive/TrainingSimulator.jsx')),
  NeuronPlayground: lazy(() => import('../interactive/NeuronPlayground.jsx')),
  TokenPredictor: lazy(() => import('../interactive/TokenPredictor.jsx')),
  PromptLab: lazy(() => import('../interactive/PromptLab.jsx')),
  BiasSimulator: lazy(() => import('../interactive/BiasSimulator.jsx')),
  AIOrNot: lazy(() => import('../interactive/AIOrNot.jsx')),
  PatternGame: lazy(() => import('../interactive/PatternGame.jsx')),
  DecisionTreeGame: lazy(() => import('../interactive/DecisionTreeGame.jsx')),
  SortingGame: lazy(() => import('../interactive/SortingGame.jsx')),
  ScenarioSim: lazy(() => import('../interactive/ScenarioSim.jsx')),
  SequenceBuilder: lazy(() => import('../interactive/SequenceBuilder.jsx')),
  FlashcardDeck: lazy(() => import('../interactive/FlashcardDeck.jsx')),
  EducatorPromptLab: lazy(() => import('../interactive/EducatorPromptLab.jsx')),
  LessonPlanBuilder: lazy(() => import('../interactive/LessonPlanBuilder.jsx')),
  TimeSavedCalculator: lazy(() => import('../interactive/TimeSavedCalculator.jsx')),
};

export const interactiveNames = Object.keys(interactiveComponents);
