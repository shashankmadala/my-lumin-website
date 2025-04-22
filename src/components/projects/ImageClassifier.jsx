import React, { useState, useEffect } from 'react';
import { ChevronLeft, Check, X, Image, Brain, FileText, Award, ArrowRight } from 'lucide-react';

// Sample data - In a real implementation, you'd have actual images
const sampleImages = [
  { id: 1, src: '/api/placeholder/300/300', category: null },
  { id: 2, src: '/api/placeholder/300/300', category: null },
  { id: 3, src: '/api/placeholder/300/300', category: null },
  { id: 4, src: '/api/placeholder/300/300', category: null },
  { id: 5, src: '/api/placeholder/300/300', category: null },
  { id: 6, src: '/api/placeholder/300/300', category: null },
  { id: 7, src: '/api/placeholder/300/300', category: null },
  { id: 8, src: '/api/placeholder/300/300', category: null },
  { id: 9, src: '/api/placeholder/300/300', category: null },
  { id: 10, src: '/api/placeholder/300/300', category: null },
  { id: 11, src: '/api/placeholder/300/300', category: null },
  { id: 12, src: '/api/placeholder/300/300', category: null },
  { id: 13, src: '/api/placeholder/300/300', category: null },
  { id: 14, src: '/api/placeholder/300/300', category: null },
  { id: 15, src: '/api/placeholder/300/300', category: null }
];

// Test images for algorithm testing
const testImages = [
  { id: 101, src: '/api/placeholder/300/300', realCategory: 'food' },
  { id: 102, src: '/api/placeholder/300/300', realCategory: 'not-food' },
  { id: 103, src: '/api/placeholder/300/300', realCategory: 'food' },
  { id: 104, src: '/api/placeholder/300/300', realCategory: 'not-food' },
  { id: 105, src: '/api/placeholder/300/300', realCategory: 'food' }
];

const ImageClassifier = ({ onComplete, onBack }) => {
  const [phase, setPhase] = useState(1); // 1: Classification, 2: Pattern Analysis, 3: Algorithm Design
  const [images, setImages] = useState(sampleImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [patterns, setPatterns] = useState(['', '', '']);
  const [algorithm, setAlgorithm] = useState([
    { question: '', ifYes: 'food', ifNo: 'not-food' },
    { question: '', ifYes: 'food', ifNo: 'not-food' }
  ]);
  const [testResults, setTestResults] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleClassify = (category) => {
    const updatedImages = [...images];
    updatedImages[currentImageIndex].category = category;
    setImages(updatedImages);
    
    // Move to next image or next phase
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setPhase(2);
    }
  };

  const handlePatternChange = (index, value) => {
    const newPatterns = [...patterns];
    newPatterns[index] = value;
    setPatterns(newPatterns);
  };

  const handleAlgorithmChange = (index, field, value) => {
    const newAlgorithm = [...algorithm];
    newAlgorithm[index][field] = value;
    setAlgorithm(newAlgorithm);
  };

  const handleTestResult = (imageId, result) => {
    setTestResults({
      ...testResults,
      [imageId]: result
    });
  };

  const canAdvanceFromPhase2 = patterns.filter(p => p.trim() !== '').length >= 2;
  
  const canAdvanceFromPhase3 = () => {
    const algorithmsComplete = algorithm.every(a => a.question.trim() !== '');
    const allTested = Object.keys(testResults).length === testImages.length;
    return algorithmsComplete && allTested;
  };

  const getCompletionPercentage = () => {
    if (phase === 1) {
      return (images.filter(img => img.category !== null).length / images.length) * 100;
    }
    return 100;
  };

  const calculateAccuracy = () => {
    if (Object.keys(testResults).length === 0) return 0;
    
    const correct = Object.keys(testResults).filter(
      id => testResults[id] === testImages.find(img => img.id.toString() === id).realCategory
    ).length;
    
    return (correct / Object.keys(testResults).length) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to course
        </button>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            {phase === 1 ? `${Math.round(getCompletionPercentage())}% Complete` : 
             phase === 2 ? "Pattern Analysis" : 
             phase === 3 ? "Algorithm Design" : "Complete!"}
          </div>
          
          {/* Phase indicators */}
          <div className="flex gap-2">
            {[1, 2, 3].map((p) => (
              <div 
                key={p}
                className={`w-3 h-3 rounded-full ${
                  phase >= p ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Phase 1: Classification */}
        {phase === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Image Classification</h2>
            <p className="text-gray-600 mb-8">
              Classify each image as either "Food" or "Not Food". This will create your training dataset.
            </p>
            
            <div className="flex flex-col items-center mb-8">
              <div className="w-64 h-64 bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img 
                  src={images[currentImageIndex].src} 
                  alt={`Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => handleClassify('food')}
                  className="px-6 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Food
                </button>
                <button
                  onClick={() => handleClassify('not-food')}
                  className="px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Not Food
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="mb-2 text-sm text-gray-600">Progress</div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${getCompletionPercentage()}%` }}
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Image {currentImageIndex + 1} of {images.length}
              </div>
            </div>
          </div>
        )}

        {/* Phase 2: Pattern Analysis */}
        {phase === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Pattern Analysis</h2>
            <p className="text-gray-600 mb-8">
              Review your classifications and identify patterns that helped you determine if an image was food or not.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Your "Food" Images</h3>
                <div className="grid grid-cols-2 gap-2">
                  {images
                    .filter(img => img.category === 'food')
                    .slice(0, 6)
                    .map(img => (
                      <div key={img.id} className="w-full aspect-square bg-gray-100 rounded overflow-hidden">
                        <img src={img.src} alt="Food" className="w-full h-full object-cover" />
                      </div>
                    ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Your "Not Food" Images</h3>
                <div className="grid grid-cols-2 gap-2">
                  {images
                    .filter(img => img.category === 'not-food')
                    .slice(0, 6)
                    .map(img => (
                      <div key={img.id} className="w-full aspect-square bg-gray-100 rounded overflow-hidden">
                        <img src={img.src} alt="Not Food" className="w-full h-full object-cover" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium mb-4">Identify Patterns</h3>
              <p className="text-gray-600 mb-4">
                What visual patterns helped you determine if something was food or not? Identify at least 2 patterns.
              </p>
              
              {patterns.map((pattern, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700 mb-2">Pattern {index + 1}:</label>
                  <input
                    type="text"
                    value={pattern}
                    onChange={(e) => handlePatternChange(index, e.target.value)}
                    placeholder={`E.g., "Foods usually have rounded shapes"`}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setPhase(3)}
                disabled={!canAdvanceFromPhase2}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                  canAdvanceFromPhase2 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next: Create Algorithm
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Phase 3: Algorithm Design */}
        {phase === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Algorithm Design</h2>
            <p className="text-gray-600 mb-8">
              Create a simple decision tree algorithm for classifying images as "Food" or "Not Food".
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium mb-4">Create Decision Rules</h3>
              
              {algorithm.map((rule, index) => (
                <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-none">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Question {index + 1}:</label>
                    <input
                      type="text"
                      value={rule.question}
                      onChange={(e) => handleAlgorithmChange(index, 'question', e.target.value)}
                      placeholder={`E.g., "Is the object rounded?"`}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">If YES:</label>
                      <select
                        value={rule.ifYes}
                        onChange={(e) => handleAlgorithmChange(index, 'ifYes', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="food">Classify as Food</option>
                        <option value="not-food">Classify as Not Food</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">If NO:</label>
                      <select
                        value={rule.ifNo}
                        onChange={(e) => handleAlgorithmChange(index, 'ifNo', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="food">Classify as Food</option>
                        <option value="not-food">Classify as Not Food</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Test Your Algorithm</h3>
              <p className="text-gray-600 mb-4">
                Apply your decision rules to these test images. Would your algorithm classify them as food or not food?
              </p>
              
              <div className="space-y-6">
                {testImages.map((img) => (
                  <div key={img.id} className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
                    <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                      <img src={img.src} alt="Test image" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium mb-2">Test Image {img.id - 100}</p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleTestResult(img.id, 'food')}
                          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                            testResults[img.id] === 'food'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          Food
                        </button>
                        <button
                          onClick={() => handleTestResult(img.id, 'not-food')}
                          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                            testResults[img.id] === 'not-food'
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          Not Food
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {Object.keys(testResults).length === testImages.length && (
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-medium mb-2">Algorithm Performance</h3>
                <p className="text-xl font-bold text-blue-700">
                  Accuracy: {calculateAccuracy().toFixed(0)}%
                </p>
                <p className="text-gray-600 mt-2">
                  Your algorithm correctly classified {Object.keys(testResults).filter(
                    id => testResults[id] === testImages.find(img => img.id.toString() === id).realCategory
                  ).length} out of {testImages.length} test images.
                </p>
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setCompleted(true);
                  if (onComplete) onComplete({
                    patterns,
                    algorithm,
                    accuracy: calculateAccuracy()
                  });
                }}
                disabled={!canAdvanceFromPhase3()}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                  canAdvanceFromPhase3()
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Complete Project
                <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Completion */}
        {completed && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Project Completed!</h2>
            <p className="text-gray-600 mb-8">
              Congratulations! You've successfully built a simple image classifier
              and designed your own algorithm.
            </p>
            
            <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Your Results</h3>
              <div className="text-left">
                <p className="mb-2"><span className="font-medium">Patterns Identified:</span> {patterns.filter(p => p.trim() !== '').length}</p>
                <p className="mb-2"><span className="font-medium">Algorithm Rules:</span> {algorithm.length}</p>
                <p><span className="font-medium">Algorithm Accuracy:</span> {calculateAccuracy().toFixed(0)}%</p>
              </div>
            </div>
            
            <button
              onClick={onBack}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Return to Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageClassifier;