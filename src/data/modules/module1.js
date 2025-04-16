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
      duration: "15 min",
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
      duration: "20 min",
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
      duration: "15 min",
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