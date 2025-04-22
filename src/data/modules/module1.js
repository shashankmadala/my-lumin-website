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