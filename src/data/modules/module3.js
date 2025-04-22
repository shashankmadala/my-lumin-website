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