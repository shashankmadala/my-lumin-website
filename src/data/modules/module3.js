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
        duration: "20 min",
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
        duration: "20 min",
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
        duration: "15 min",
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
        duration: "20 min",
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