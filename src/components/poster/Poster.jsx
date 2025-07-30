import React, { useState, useEffect } from 'react';

const Poster = () => {
  const images = [
    { src: '/posterimg/poster1.png', alt: 'Deity Darshan 1' },
    { src: '/posterimg/poster2.png', alt: 'Deity Darshan 2' },
    { src: '/posterimg/poster3.png', alt: 'Festival Celebration' },
    { src: '/posterimg/poster4.png', alt: 'Temple Exterior' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className=" relative w-full bg-white pb-12 sm:pb-12 lg:pb-25 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#df7326] mb-6 text-center">
        Announcements
      </h2>

      {/* Slider Container */}
      <div className="relative w-full max-w-[1680px] h-auto  rounded-xl overflow-hidden shadow-xl">
        {/* Image */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-[250px] sm:h-[450px] md:h-[500px] object-cover transition-all duration-700 ease-in-out rounded-xl"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? 'bg-[#df7326]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>


      <img
        src="/border/border.png"
        alt="bottom-border"
        className="relative  left-0 w-full "
      />



    </div>
  );
};

export default Poster;
