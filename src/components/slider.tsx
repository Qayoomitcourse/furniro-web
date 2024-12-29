'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Slide {
  id: string
  name: string;
  image: string;
  title: string;
}

const data2: Slide[] = [
  { id: '1', title: 'Bedroom', name: 'Inner Peace', image: '/assets/Bedroom.png' },
  { id: '2', title: 'Syltherine', name: 'Stylish cafe chair', image: '/assets/slide1.png' },
  // { name: 'Syltherine', image: '/assets/image 1' },
  // { name: 'Leviosa', image: '/assets/slide2.png' },
  // { name: 'Bedroom', image: '/assets/Bedroom.png' },
  // { name: 'Respira', image: '/(2).png' },
  // { name: 'Grifo', image: '/(3).png' },
  // { name: 'Muggo', image: '/15.jpg' },
  // { name: 'Pingky', image: '/16.jpg' },
  // { name: 'Potty', image: '/2.jpg' },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data2.length);
    }, 3000); // Adjust slide duration as needed
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data2.length) % data2.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data2.length);
  };

  return (
    <div className="w-full h-[670px] py-16 bg-[#fcf8fc] flex flex-col lg:flex-row items-center justify-center gap-8">
      <div className="text-center lg:text-left">
        <h1 className="text-[40px] font-bold mb-6 leading-tight">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="text-[#616161] mb-8 text-[16px">
          Our designer already made a lot of beautiful <br /> prototypes of rooms to inspire you.
        </p>
        <button className="w-[176] h-[48] bg-[#B88E2F] text-white font-medium rounded-md">
          Explore More
        </button>
      </div>
      <div className="relative w-[90%] max-w-[404px] h-[582px]">
        {data2.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              className="h-full object-cover rounded-lg"
              width={381}
              height={480}
              priority={index === currentIndex}
              placeholder="blur"
              blurDataURL={slide.image} // Add placeholders for low-quality previews
            />
            <div className="absolute bottom-12 left-12 bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">0{index + 1}</p>
              <h2 className="text-2xl font-bold mt-2">{slide.name}</h2>
            </div>
          </div>
        ))}
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
