import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(images.length / 3) - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Group images into sets of 3
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3));
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Program in Action</h2>
        <p className="text-xl text-gray-600">
          See our students learning and growing in our AI education programs
        </p>
      </div>

      <div className="relative">
        {/* Main carousel container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                  {group.map((image, imageIndex) => (
                    <div 
                      key={imageIndex}
                      className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                        <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        {imageGroups.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {imageGroups.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {imageGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;