"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070',
    title: 'Empowering Communities Through Leadership',
    description: 'GILF is dedicated to fostering leadership, education, and sustainable community development.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
    title: 'Educational Initiatives',
    description: 'Empowering through education and knowledge sharing for a brighter future'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049',
    title: 'Leadership Development',
    description: 'Building tomorrow\'s leaders today through innovative programs and mentorship'
  }
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFadeIn(true);
      }, 200); // Wait for fade out before changing slide
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <div className={`transition-opacity duration-200 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={slides[currentSlideIndex].imageUrl}
            alt={slides[currentSlideIndex].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 
            className={`mb-6 text-4xl font-bold text-white transition-all duration-500 sm:text-5xl lg:text-6xl ${
              fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {slides[currentSlideIndex].title}
          </h1>
          <p 
            className={`mb-8 text-lg text-white/90 sm:text-xl transition-all duration-500 delay-100 ${
              fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {slides[currentSlideIndex].description}
          </p>
          <div 
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-500 delay-200 ${
              fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <Link 
              href="/about"
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-white/90"
            >
              Learn More
            </Link>
            <Link 
              href="/support"
              className="rounded-full bg-transparent border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFadeIn(false);
              setTimeout(() => {
                setCurrentSlideIndex(index);
                setFadeIn(true);
              }, 200);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlideIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 