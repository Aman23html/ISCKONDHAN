import React, { useState, useEffect } from 'react';

const Poster = () => {
  const images = [
    { src: '/posterimg/poster1.png', alt: 'Deity Darshan 1' },
    { src: '/posterimg/poster2.png', alt: 'Deity Darshan 2' },
    { src: '/posterimg/poster3.png', alt: 'Festival Celebration' },
    { src: '/posterimg/poster4.png', alt: 'Temple Exterior' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div className="relative w-full bg-white pb-12 sm:pb-12 lg:pb-25 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#df7326] mb-6 text-center">
        Announcements
      </h2>

      {/* Slider (aspect ratio matches your banner ~1280x486) */}
      <div
        className="relative w-full max-w-[1680px] rounded-xl overflow-hidden shadow-xl bg-white"
        style={{ aspectRatio: '1280 / 486' }} // keeps full image visible
      >
        {/* Image fills the aspect box without cropping */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-contain bg-white transition-opacity duration-500"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 sm:p-2 rounded-full shadow-md transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-1.5 sm:p-2 rounded-full shadow-md transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${
                idx === currentIndex ? 'bg-[#df7326]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative border */}
      <img
        src="/border/border.png"
        alt="bottom-border"
        className="relative left-0 w-full mt-4"
      />
    </div>
  );
};

export default Poster;
