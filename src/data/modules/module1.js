const module1 = {
    id: 1,
    title: "Introduction to AI",
    description: "Understanding artificial intelligence fundamentals",
    prerequisites: [],
    icon: "Brain",
    
    virtualLab: {
      id: "ai-basics-lab",
      title: "AI Experimentation Lab",
      experiments: [
        {
          id: "image-classifier",
          title: "Image Classification",
          description: "Train a simple AI to recognize basic shapes",
          setup: {
            tools: ["canvas", "classifier", "dataset"],
            initialData: {
              shapes: ["circle", "square", "triangle"],
              samples: 10
            },
            interface: {
              drawingCanvas: true,
              predictionDisplay: true,
              confidenceMeters: true
            }
          },
          steps: [
            "Draw shapes to train the AI",
            "Watch it learn patterns",
            "Test with new drawings",
            "See confidence scores"
          ]
        },
        {
          id: "pattern-finder",
          title: "Pattern Recognition",
          description: "Discover how AI finds patterns in data",
          interactive: {
            dataPoints: [
              { x: "size", y: "speed", correlation: true },
              { x: "color", y: "category", correlation: false }
            ],
            userControls: ["add-point", "remove-point", "run-analysis"]
          }
        }
      ]
    },
  
    lessons: [
      {
        id: "1.1",
        title: "What is Artificial Intelligence?",
        duration: "25 min",
        interactive: {
          type: "conceptMap",
          title: "AI Concept Explorer",
          description: "Build and explore AI concepts interactively",
          features: {
            dragAndDrop: {
              elements: [
                { id: "ai", label: "AI Core", type: "main" },
                { id: "ml", label: "Machine Learning", type: "subfield" },
                { id: "nlp", label: "Natural Language", type: "subfield" },
                { id: "vision", label: "Computer Vision", type: "subfield" }
              ],
              dropZones: [
                { id: "core", label: "Core Concepts" },
                { id: "applications", label: "Applications" }
              ]
            },
            simulation: {
              title: "AI Decision Making",
              steps: [
                { id: "input", label: "Data Input", animation: "dataFlow" },
                { id: "process", label: "Processing", animation: "compute" },
                { id: "output", label: "Decision", animation: "result" }
              ]
            },
            liveDemo: {
              type: "imageClassifier",
              options: ["cat", "dog", "bird"],
              feedback: true
            }
          }
        },
        article: `Artificial Intelligence (AI) is the development of computer systems capable of performing tasks that typically require human intelligence. These tasks include reasoning, problem-solving, understanding natural language, recognizing patterns, and adapting to new situations.
  
  Breaking Down AI:
  At its core, AI is built on a few key ideas:
  
  Algorithms: Step-by-step instructions that tell a computer how to solve a problem. In AI, these algorithms are designed to adapt and improve over time by learning from data.
  
  Data: The fuel for AI. Machines learn patterns and make predictions based on the data they are fed. The more data, the better AI systems can perform.
  
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
            type: "buildSystem",
            title: "Build an AI System",
            description: "Arrange the components to create a working AI system",
            components: [
              { id: "data", label: "Data Collection", type: "input" },
              { id: "process", label: "Processing Unit", type: "process" },
              { id: "learn", label: "Learning Module", type: "process" },
              { id: "output", label: "Output System", type: "output" }
            ],
            feedback: {
              success: "Great job! Your AI system is working correctly.",
              hints: ["Start with data input", "Think about processing flow"]
            }
          }
        }
      },
      {
        id: "1.2",
        title: "Finding AI in Everyday Life",
        duration: "30 min",
        interactive: {
          type: "virtualEnvironment",
          title: "AI in Your Home",
          description: "Explore and interact with AI in a virtual home",
          features: {
            rooms: [
              {
                id: "living_room",
                aiDevices: [
                  {
                    id: "smart_tv",
                    type: "recommendation",
                    interactions: ["suggest", "learn", "adapt"]
                  },
                  {
                    id: "thermostat",
                    type: "learning",
                    interactions: ["adjust", "optimize", "predict"]
                  }
                ]
              },
              {
                id: "kitchen",
                aiDevices: [
                  {
                    id: "smart_assistant",
                    type: "voice",
                    interactions: ["command", "respond", "learn"]
                  },
                  {
                    id: "smart_fridge",
                    type: "inventory",
                    interactions: ["track", "order", "suggest"]
                  }
                ]
              }
            ],
            challenges: [
              {
                id: "find_ai",
                title: "AI Scavenger Hunt",
                tasks: ["Find 5 AI devices", "Test each feature", "Observe learning"]
              },
              {
                id: "optimize",
                title: "AI Optimization",
                tasks: ["Adjust settings", "Monitor learning", "Improve efficiency"]
              }
            ]
          }
        },
        article: `Artificial Intelligence (AI) is not just a futuristic concept; it's already a part of our daily lives, often in ways we don't even notice. From the apps on your phone to the way your favorite websites work, AI is everywhere.
  
  Everyday Applications of AI:
  
  1. Smartphones:
  • AI helps predict the next word as you type
  • Virtual assistants understand voice commands
  • Facial recognition for secure unlocking
  
  2. Streaming Services:
  • Netflix, Spotify, and YouTube recommendations
  • Content suggestions based on viewing habits
  • Personalized playlists and watchlists
  
  3. Online Shopping:
  • Product recommendations based on browsing
  • Chatbots for customer service
  • Price optimization and inventory management
  
  4. Social Media:
  • Personalized content feeds
  • Automatic photo tagging
  • Content moderation
  
  5. Transportation:
  • Navigation and traffic prediction
  • Ride-sharing optimization
  • Self-driving vehicle systems
  
  6. Healthcare:
  • Medical image analysis
  • Health monitoring through wearables
  • Disease prediction and diagnosis
  
  7. Gaming:
  • Adaptive gameplay difficulty
  • NPC behavior and responses
  • Procedural content generation`,
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
          interactiveQuiz: {
            type: "aiSpotting",
            title: "Spot the AI",
            description: "Identify AI applications in everyday scenarios",
            scenarios: [
              {
                id: "smartphone",
                scene: "phoneScreen",
                aiFeatures: ["predictive_text", "face_id", "voice_assistant"],
                userTask: "Identify AI features"
              },
              {
                id: "smart_home",
                scene: "homeInterface",
                aiFeatures: ["temperature_learning", "security_system", "lighting_optimization"],
                userTask: "Find AI-powered systems"
              }
            ],
            feedback: {
              success: "You've got a good eye for AI!",
              hint: "Look for systems that learn and adapt"
            }
          }
        }
      }
    ],
  
    handsonProjects: [
      {
        id: "ai-detector",
        title: "Build an AI Detection Tool",
        description: "Create a simple tool that identifies AI in everyday objects",
        difficulty: "beginner",
        duration: "45 min",
        tools: ["web-interface", "ai-api", "database"],
        steps: [
          {
            id: 1,
            title: "Setup Detection Parameters",
            interactive: true,
            completion: false
          },
          {
            id: 2,
            title: "Train Your Detector",
            interactive: true,
            completion: false
          },
          {
            id: 3,
            title: "Test and Improve",
            interactive: true,
            completion: false
          }
        ]
      }
    ]
  };
  
  export default module1;