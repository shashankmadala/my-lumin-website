# Lumin AI Course Content Schema

Courses are plain JS data files rendered by `src/components/course/LessonRenderer.jsx`.
Two courses live here:

- `aiFoundations/` — student course ("AI Foundations"), 6 units, slug `/learn/ai-foundations`
- `aiForEducators/` — teacher course ("AI for Educators"), 6 modules + capstone, slug `/learn/educators`

## Course object

```js
{
  id: 'ai-foundations',            // used in URLs and localStorage keys — never change
  title: 'AI Foundations',
  audience: 'students',            // 'students' | 'educators'
  tagline: 'One sentence hook',
  description: '2-3 sentence overview',
  color: 'blue',                   // tailwind accent family used by the shell
  estimatedHours: 8,
  units: [unit, ...],
  finalAssessment: {
    title, description,
    passingScore: 75,              // percent
    questions: [question, ...]     // 15-20, drawn from across all units
  },
  certificate: {
    courseName: 'AI Foundations',
    subtitle: 'shown under the course name on the PDF',
    signers: [{ name, role }, { name, role }]
  }
}
```

## Unit object

```js
{
  id: 'unit-1',                    // stable id
  title: 'How Machines Learn',
  description: '1-2 sentences',
  icon: 'Brain',                   // lucide-react icon name (must exist in lucide-react)
  lessons: [lesson, ...]           // 3-5 lessons
}
```

## Lesson object

```js
{
  id: 'what-is-ai',                // URL slug, kebab-case, unique across the whole course
  title: 'What is Artificial Intelligence?',
  duration: '15 min',
  objectives: ['You will be able to ...', ...],   // 2-4, shown in "In this lesson" box
  blocks: [block, ...],
  quiz: { questions: [question, ...] }            // 4-6 questions, end-of-lesson practice
}
```

A lesson is COMPLETED when the learner scores >= 70% on its quiz. Nothing is locked —
any lesson can be opened at any time.

## Question object (used by checkpoints, quizzes, final assessments)

```js
{
  question: 'Plain text question?',
  options: ['A', 'B', 'C', 'D'],   // exactly 4, plausible distractors
  correct: 2,                       // index into options
  explanation: 'Why the answer is right AND why the tempting wrong one is wrong.'
}
```

## Blocks

Text fields marked (md) support minimal inline markdown: `**bold**`, `*italic*`,
`` `code` ``, and `[label](https://url)` links (external links open in a new tab).

| type | fields | purpose |
|------|--------|---------|
| `intro` | `text` (md) | Lede paragraph. First block of every lesson. Hook + why it matters. |
| `heading` | `text` | Section heading (h2). |
| `subheading` | `text` | Sub-section heading (h3). |
| `text` | `text` (md) | Body paragraph. Keep to 2-4 sentences each. |
| `list` | `ordered?`, `items[]` (md) | Bullet or numbered list. |
| `callout` | `variant`, `title?`, `text` (md) | Highlight box. variants: `info`, `tip`, `warning`, `example`, `realworld`, `teacher` |
| `keyTerms` | `title?`, `terms[{term, definition}]` | Vocabulary card grid. |
| `video` | `videoId`, `title`, `duration?`, `note?` | YouTube embed (click-to-play). videoId is the 11-char YouTube id. |
| `links` | `title?`, `items[{label, url, description?}]` | Curated external resource cards. Real URLs only. |
| `tryIt` | `title`, `intro?`, `steps[]` (md), `url?`, `urlLabel?` | Guided hands-on activity, usually pointing at a real external tool. |
| `checkpoint` | question fields | Single inline "Check your understanding" question mid-lesson. |
| `interactive` | `component`, `caption?`, `props?` | Embedded interactive widget — see registry below. |
| `table` | `headers[]`, `rows[][]` (md) | Comparison table. |
| `quote` | `text`, `attribution?` | Pull quote. |

## Interactive component registry

`component` must be one of the names registered in
`src/components/course/interactiveRegistry.js`. Each takes an optional `props`
object from the block. See that file for the per-component props contract.

## Authoring rules

1. Khan Academy tone: second person, conversational but rigorous, no fluff.
2. 800-1400 words of instruction per lesson, broken into short blocks.
3. Every lesson: >= 1 checkpoint, >= 1 interactive OR tryIt OR video, and a quiz.
4. Real, working URLs only. No placeholder links, no invented tools.
5. Explanations in quizzes must teach, not just confirm.
6. Vary the rhythm: never more than 3 consecutive `text` blocks.
