const courseData = {
  title: "AI 101: Foundations of Artificial Intelligence",
  description: "Master the fundamentals of artificial intelligence and machine learning",
  modules: [
    {
      id: 1,
      title: "Introduction to AI",
      description: "Understanding artificial intelligence fundamentals",
      prerequisites: [],
      lessons: [
        {
          id: "1.1",
          title: "What is Artificial Intelligence?",
          duration: "20 min",
          article: `Artificial Intelligence (AI) is the field of computer science focused on creating intelligent machines 
            that can perform tasks typically requiring human intelligence.

            Key Concepts:
            • Machine Learning: AI's ability to learn from experience
            • Neural Networks: Systems modeled after human brains
            • Deep Learning: Advanced neural networks with multiple layers
            • Natural Language Processing: Understanding human language
            • Computer Vision: Processing and understanding visual information`,
          quiz: {
            questions: [
              {
                id: "1.1.1",
                question: "What is the primary goal of artificial intelligence?",
                options: [
                  "To create machines that can think and learn",
                  "To replace human workers entirely",
                  "To make computers run faster",
                  "To store more data"
                ],
                correct: 0,
                explanation: "AI aims to create machines that can simulate human intelligence through learning and problem-solving capabilities."
              },
              {
                id: "1.1.2",
                question: "Which of these is NOT a main branch of AI?",
                options: [
                  "Machine Learning",
                  "Natural Language Processing",
                  "Website Development",
                  "Computer Vision"
                ],
                correct: 2,
                explanation: "Website Development is not a branch of AI. While AI can be used in web development, it's a separate field of computer science."
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      description: "Core concepts and applications of machine learning",
      prerequisites: [1],
      lessons: [
        {
          id: "2.1",
          title: "Types of Machine Learning",
          duration: "25 min",
          article: `Machine Learning can be categorized into three main types:

            1. Supervised Learning:
            • Algorithm learns from labeled data
            • Examples: Classification, Regression
            • Applications: Spam detection, Price prediction

            2. Unsupervised Learning:
            • Finds patterns in unlabeled data
            • Examples: Clustering, Dimensionality Reduction
            • Applications: Customer segmentation

            3. Reinforcement Learning:
            • Learns through trial and error
            • Uses rewards and punishments
            • Applications: Game AI, Robot navigation`,
          quiz: {
            questions: [
              {
                id: "2.1.1",
                question: "What type of machine learning uses labeled data?",
                options: [
                  "Supervised Learning",
                  "Unsupervised Learning",
                  "Reinforcement Learning",
                  "Deep Learning"
                ],
                correct: 0,
                explanation: "Supervised learning uses labeled data where the correct outputs are known during training."
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Neural Networks",
      description: "Understanding neural networks and deep learning",
      prerequisites: [1, 2],
      lessons: [
        {
          id: "3.1",
          title: "Neural Network Basics",
          duration: "30 min",
          article: `Neural networks are computing systems inspired by biological neural networks.
            
            Key Components:
            • Neurons (nodes)
            • Connections (weights)
            • Layers (input, hidden, output)
            
            Applications:
            • Image recognition
            • Speech processing
            • Natural language understanding`,
          quiz: {
            questions: [
              {
                id: "3.1.1",
                question: "What are neural networks inspired by?",
                options: [
                  "Computer circuits",
                  "Human brain structure",
                  "Mathematical equations",
                  "Programming languages"
                ],
                correct: 1,
                explanation: "Neural networks are inspired by the structure and function of biological neural networks in the human brain."
              }
            ]
          }
        }
      ]
    }
  ]
};

export default courseData;