import React, { useState } from 'react';
import { Home, Phone, ShoppingBag, Music, Camera, MessageCircle } from 'lucide-react';

const AiDailyExplorer = () => {
  const [selectedScene, setSelectedScene] = useState(null);
  const [discoveredAI, setDiscoveredAI] = useState([]);
  const [feedback, setFeedback] = useState('');

  const scenes = [
    {
      id: 'morning',
      title: 'Morning Routine',
      icon: <Home className="w-6 h-6" />,
      items: [
        {
          name: 'Smart Speaker',
          aiFeatures: ['Voice Recognition', 'Natural Language Processing', 'Personalized Recommendations'],
          location: { x: 30, y: 40 }
        },
        {
          name: 'Smart Thermostat',
          aiFeatures: ['Learning Patterns', 'Energy Optimization', 'Automated Adjustments'],
          location: { x: 70, y: 60 }
        },
        {
          name: 'Coffee Maker',
          aiFeatures: ['Schedule Learning', 'Usage Pattern Recognition'],
          location: { x: 50, y: 30 }
        }
      ]
    },
    {
      id: 'commute',
      title: 'Daily Commute',
      icon: <Phone className="w-6 h-6" />,
      items: [
        {
          name: 'Navigation App',
          aiFeatures: ['Route Optimization', 'Traffic Prediction', 'ETA Calculation'],
          location: { x: 40, y: 50 }
        },
        {
          name: 'Music App',
          aiFeatures: ['Song Recommendations', 'Playlist Generation', 'Mood Detection'],
          location: { x: 60, y: 30 }
        }
      ]
    },
    {
      id: 'shopping',
      title: 'Shopping',
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        {
          name: 'Online Store',
          aiFeatures: ['Product Recommendations', 'Search Optimization', 'Price Tracking'],
          location: { x: 45, y: 45 }
        },
        {
          name: 'Shopping Assistant',
          aiFeatures: ['Size Recommendations', 'Style Matching', 'Inventory Prediction'],
          location: { x: 55, y: 65 }
        }
      ]
    }
  ];

  const handleItemClick = (item) => {
    if (!discoveredAI.includes(item.name)) {
      setDiscoveredAI([...discoveredAI, item.name]);
      setFeedback(`Great find! ${item.name} uses AI for: ${item.aiFeatures.join(', ')}`);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Spot AI in Your Daily Life</h3>

      {/* Scene Selection */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              selectedScene?.id === scene.id
                ? 'bg-purple-50 border-2 border-purple-200'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                {scene.icon}
              </div>
              <span className="font-medium">{scene.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Interactive Scene */}
      {selectedScene && (
        <div className="relative h-96 bg-gray-50 rounded-xl overflow-hidden">
          {selectedScene.items.map((item) => (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              style={{
                position: 'absolute',
                left: `${item.location.x}%`,
                top: `${item.location.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                discoveredAI.includes(item.name)
                  ? 'bg-green-100 ring-4 ring-green-200'
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
            >
              {discoveredAI.includes(item.name) ? (
                <Check className="w-6 h-6 text-green-600" />
              ) : (
                <Search className="w-6 h-6 text-purple-600" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <p className="text-purple-700">{feedback}</p>
        </div>
      )}

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">AI Features Discovered</span>
          <span className="text-sm font-medium">{discoveredAI.length} / {
            selectedScene ? selectedScene.items.length : '0'
          }</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className="h-full bg-purple-600 rounded-full transition-all duration-300"
            style={{
              width: selectedScene
                ? `${(discoveredAI.length / selectedScene.items.length) * 100}%`
                : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AiDailyExplorer;