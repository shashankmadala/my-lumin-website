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
        duration: "15 min",
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
        duration: "15 min",
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
        duration: "15 min",
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