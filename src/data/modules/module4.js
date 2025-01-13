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