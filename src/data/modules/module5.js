// src/data/modules/module5.js

const module5 = {
    id: 5,
    title: "Ethics and Society in AI",
    description: "Explore ethical considerations, responsible use, and societal impacts of artificial intelligence",
    prerequisites: [1, 2, 3, 4],
    icon: "Shield",
    themeColor: "orange",
  
    interactiveFeatures: {
      ethicsLab: {
        enabled: true,
        components: {
          biasDetector: {
            type: "interactive",
            features: ["data-analysis", "bias-identification", "mitigation-strategies"]
          },
          privacySimulator: {
            type: "simulation",
            features: ["data-protection", "privacy-risks", "safeguards"]
          },
          ethicsWorkshop: {
            type: "scenario-based",
            elements: ["case-studies", "decision-making", "impact-analysis"]
          }
        }
      }
    },
  
    lessons: [
      {
        id: "5.1",
        title: "Understanding Bias in AI",
        duration: "15 min",
        article: `Bias in Artificial Intelligence (AI) systems refers to instances where the decisions or predictions made by AI models are unfairly influenced by skewed or incomplete data. Understanding bias is critical for creating AI systems that are accurate, fair, and inclusive.
  
  What Causes Bias in AI?
  Bias in AI usually stems from problems in the data or the way the model is developed. Common causes include:
  
  1. Biased Training Data:
  • If the dataset reflects societal biases or lacks diversity, the AI will likely replicate those biases
  • Example: A hiring algorithm trained on data from a predominantly male workforce might favor male candidates
  
  2. Incomplete Data:
  • Missing or underrepresented groups in the dataset can lead to unfair outcomes
  • Example: Facial recognition systems performing poorly on certain skin tones due to lack of diverse training images
  
  3. Human Bias:
  • Developers' assumptions and decisions can inadvertently introduce bias
  • Example: Framing a problem in a way that prioritizes certain outcomes over others
  
  4. Algorithmic Bias:
  • The model itself may emphasize certain patterns in ways that amplify bias
  • Example: Recommender systems favoring popular products over niche options
  
  Types of Bias:
  1. Selection Bias: When data doesn't represent the target population accurately
  2. Confirmation Bias: When AI prioritizes data that confirms preexisting assumptions
  3. Implicit Bias: When bias arises from subtle and unintended influences
  
  Real-World Examples:
  • Hiring algorithms favoring certain demographics
  • Healthcare AI systems underdiagnosing specific groups
  • Facial recognition accuracy varying by ethnicity
  • Loan approval systems showing demographic disparities
  
  How to Mitigate Bias:
  1. Diversify Data: Ensure training datasets are representative
  2. Regular Auditing: Test systems for biased outcomes
  3. Diverse Teams: Include varied perspectives in development
  4. Ethical Guidelines: Establish clear standards for fairness`,
        quiz: {
          questions: [
            {
              question: "What is the main cause of bias in AI systems?",
              options: [
                "Hardware limitations",
                "Problems in training data and model development",
                "User errors",
                "Network connectivity"
              ],
              correct: 1,
              explanation: "Bias in AI primarily stems from problems in the training data and how models are developed, including biased or incomplete data and human assumptions in the development process."
            },
            {
              question: "Which is an example of selection bias in AI?",
              options: [
                "An AI system running slowly",
                "Data not representing all population groups equally",
                "Users misusing the system",
                "Software bugs"
              ],
              correct: 1,
              explanation: "Selection bias occurs when the data collected for training does not accurately represent all groups in the target population."
            },
            {
              question: "What is one effective way to mitigate bias in AI?",
              options: [
                "Using faster computers",
                "Ensuring diverse and representative training data",
                "Reducing system costs",
                "Simplifying the algorithms"
              ],
              correct: 1,
              explanation: "Using diverse and representative training data is one of the most effective ways to mitigate bias in AI systems."
            }
          ]
        }
      },
      {
        id: "5.2",
        title: "Privacy and Data Protection",
        duration: "15 min",
        article: `Privacy is a critical concern in the development and use of Artificial Intelligence (AI). As AI systems rely on large amounts of data to function effectively, protecting individuals' personal information and ensuring ethical data practices are essential for building trust and preventing harm.
  
  Why Is Privacy Important in AI?
  AI systems often process sensitive information such as:
  • Personal details (name, address, age)
  • Financial data (credit card transactions)
  • Health records (medical diagnoses)
  
  Without proper safeguards, this data could be misused, leading to:
  • Identity theft
  • Discrimination
  • Loss of trust
  • Privacy violations
  
  Common Privacy Risks in AI:
  
  1. Data Breaches:
  • Unauthorized access to sensitive information
  • Example: Healthcare AI systems exposing patient records
  
  2. Data Misuse:
  • Using data beyond original intent without consent
  • Example: Social media analyzing behavior for targeted ads
  
  3. Reidentification:
  • Identifying individuals from anonymized data
  • Example: Combining datasets to deduce someone's identity
  
  Best Practices for Privacy:
  
  1. Data Minimization:
  • Collect only necessary data
  • Example: Chatbots not storing personal information
  
  2. Anonymization:
  • Remove personally identifiable information
  • Example: Masking names in health records
  
  3. Secure Storage:
  • Use encryption and access controls
  • Example: Secure cloud storage with restricted access
  
  4. Transparency:
  • Inform users about data collection and use
  • Example: Clear privacy policies and consent forms`,
        quiz: {
          questions: [
            {
              question: "Why is privacy protection important in AI systems?",
              options: [
                "To make systems run faster",
                "To protect sensitive personal information",
                "To reduce costs",
                "To improve graphics"
              ],
              correct: 1,
              explanation: "Privacy protection is crucial in AI to prevent misuse of sensitive personal information and maintain user trust."
            },
            {
              question: "What is data minimization?",
              options: [
                "Making data smaller in size",
                "Collecting only necessary data",
                "Deleting all data",
                "Compressing data files"
              ],
              correct: 1,
              explanation: "Data minimization means collecting only the data that is necessary for the specific task or purpose."
            },
            {
              question: "Which is an example of good privacy practice in AI?",
              options: [
                "Collecting all available data",
                "Using encryption for sensitive data",
                "Sharing data freely",
                "Ignoring user consent"
              ],
              correct: 1,
              explanation: "Using encryption for sensitive data is a good privacy practice as it helps protect information from unauthorized access."
            }
          ]
        }
      },
      {
        id: "5.3",
        title: "Digital Citizenship and AI",
        duration: "15 min",
        article: `Digital citizenship refers to the responsible and ethical use of technology in online interactions and activities. As Artificial Intelligence (AI) increasingly shapes the digital world, understanding digital citizenship is essential for fostering safe, respectful, and productive online behaviors.
  
  What Is Digital Citizenship?
  Digital citizenship involves:
  • Protecting personal information
  • Communicating respectfully
  • Evaluating digital content
  • Promoting ethical practices
  
  Key Principles:
  
  1. Respect:
  • Treating others kindly in digital interactions
  • Example: Reporting rather than engaging in cyberbullying
  
  2. Responsibility:
  • Using technology ethically and productively
  • Example: Fact-checking before sharing information
  
  3. Safety:
  • Protecting digital identity and privacy
  • Example: Using strong passwords and privacy settings
  
  4. Critical Thinking:
  • Understanding how AI influences online content
  • Example: Recognizing AI-generated content
  
  Applications in AI Context:
  
  1. Social Media:
  • Understanding algorithm-driven content
  • Practicing responsible sharing
  • Identifying misinformation
  
  2. Online Learning:
  • Using AI tools responsibly
  • Citing sources appropriately
  • Maintaining academic integrity
  
  3. Digital Privacy:
  • Managing personal data
  • Understanding AI data collection
  • Protecting sensitive information`,
        quiz: {
          questions: [
            {
              question: "What is a key principle of digital citizenship?",
              options: [
                "Sharing all information freely",
                "Treating others with respect online",
                "Using as much technology as possible",
                "Ignoring privacy settings"
              ],
              correct: 1,
              explanation: "Treating others with respect in online interactions is a fundamental principle of digital citizenship."
            },
            {
              question: "How does AI influence digital citizenship?",
              options: [
                "It has no influence",
                "It shapes online content and interactions",
                "It only affects games",
                "It only impacts businesses"
              ],
              correct: 1,
              explanation: "AI significantly influences digital citizenship by shaping online content, recommendations, and interactions."
            },
            {
              question: "What is an important digital safety practice?",
              options: [
                "Sharing passwords",
                "Using strong passwords and privacy settings",
                "Ignoring security updates",
                "Posting personal information publicly"
              ],
              correct: 1,
              explanation: "Using strong passwords and privacy settings is crucial for maintaining digital safety."
            }
          ]
        }
      },
      {
        id: "5.4",
        title: "Career Opportunities in AI",
        duration: "20 min",
        article: `Artificial Intelligence (AI) is one of the most rapidly growing fields, offering diverse career opportunities across industries. From developing cutting-edge algorithms to applying AI in healthcare or entertainment, AI careers are dynamic, innovative, and impactful.
  
  Key Career Paths:
  
  1. Machine Learning Engineer:
  • Develop and optimize ML models
  • Skills: Python, TensorFlow, mathematics
  • Applications: Recommendation systems, fraud detection
  
  2. Data Scientist:
  • Analyze data and create predictive models
  • Skills: Statistics, programming, data visualization
  • Applications: Pattern recognition, decision support
  
  3. AI Research Scientist:
  • Advance AI technologies through research
  • Skills: Deep learning, academic research
  • Applications: New algorithms, theoretical advances
  
  4. Computer Vision Engineer:
  • Work on image recognition systems
  • Skills: CNN architectures, image processing
  • Applications: Medical imaging, autonomous vehicles
  
  Industries Using AI:
  
  1. Healthcare:
  • Disease diagnosis
  • Treatment planning
  • Drug discovery
  
  2. Finance:
  • Fraud detection
  • Risk assessment
  • Algorithmic trading
  
  3. Education:
  • Personalized learning
  • Assessment systems
  • Educational tools
  
  4. Entertainment:
  • Game AI
  • Content recommendation
  • Virtual reality
  
  Preparing for an AI Career:
  
  1. Education:
  • Degrees in computer science, mathematics
  • Specialized AI/ML certifications
  • Continuous learning
  
  2. Skills Development:
  • Programming languages
  • Machine learning frameworks
  • Problem-solving abilities
  
  3. Practical Experience:
  • Personal projects
  • Internships
  • Open source contributions`,
        quiz: {
          questions: [
            {
              question: "What skills are essential for a machine learning engineer?",
              options: [
                "Artistic ability",
                "Programming and mathematics",
                "Sales experience",
                "Physical fitness"
              ],
              correct: 1,
              explanation: "Machine learning engineers need strong programming skills and mathematical understanding to develop and optimize AI models."
            },
            {
              question: "Which industry is NOT a major employer of AI professionals?",
              options: [
                "Healthcare",
                "Finance",
                "Agriculture",
                "Professional sports"
              ],
              correct: 3,
              explanation: "While AI is used in many industries, professional sports is not currently a major employer of AI professionals compared to healthcare, finance, or technology sectors."
            },
            {
              question: "What is the best way to prepare for an AI career?",
              options: [
                "Wait for job opportunities",
                "Study and gain practical experience",
                "Focus only on theory",
                "Avoid technology"
              ],
              correct: 1,
              explanation: "The best preparation for an AI career involves both studying relevant subjects and gaining practical experience through projects and internships."
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
            id: "ethics-champion",
            title: "Ethics Champion",
            condition: "Complete all lessons in module 5"
          },
          {
            id: "privacy-expert",
            title: "Privacy Expert",
            condition: "Score 90%+ on privacy quiz"
          }
        ],
        achievements: true,
        leaderboard: false
      }
    }
  };
  
  export default module5;