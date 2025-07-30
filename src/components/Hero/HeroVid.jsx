import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroVid = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-[700px] overflow-hidden flex flex-col items-center justify-center text-center px-4">
      
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-[600px] object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/video/bgvid.mp4" type="video/mp4" />
      </video>

      {/* 🔳 Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent -z-10" />

      {/* ✨ Welcome Content */}
      <div className="flex flex-col pb-70 gap-4 px-4 py-2 rounded-md mt-[-50px]">
        <h2 className="text-white text-2xl font-bold">{t('welcomeTo')}</h2>
        <h1 className="text-white font-secondary text-5xl sm:text-6xl md:text-7xl">
          {t('templeName')}
        </h1>
        <p className="text-white text-base sm:text-lg font-bold mt-2">
          {t('locationTag')}
        </p>
      </div>

      {/* 📍 Location Button */}
      <div className="md:mb-40 mb-50">
        <a
          href="https://www.google.com/maps/place/Iskcon+Dhanbad/@23.7957,86.4312,17z"
          className="flex items-center gap-2 bg-[#ff6d05] rounded-full px-4 py-2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:px-6 transition-all duration-300"
        >
          <img
            className="w-[11px] h-[17px]"
            alt="Vector"
            src="https://c.animaapp.com/md8w42lwOfBxGO/img/vector-7.svg"
          />
          <span className="text-white text-xl font-semibold">{t('location')}</span>
        </a>
      </div>

      {/* 📊 Stats Block Overlay at Bottom */}
      <div className="absolute bottom-[0px] w-full px-4 flex justify-center">
        <div className="bg-white/90 backdrop-blur border-[3px] border-[#ff9640c7] rounded-md px-4 py-4 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-10 max-w-5xl w-full shadow-md">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center sm:w-1/3">
            <div className="text-xl sm:text-[36px] font-semibold text-[#fea567ad]">73k+</div>
            <div className="text-[#545252] text-xs sm:text-lg leading-tight">
              {t('stat1')}
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center sm:w-1/3">
            <div className="text-xl sm:text-[36px] font-semibold text-[#fea567ad]">70</div>
            <div className="text-[#545252] text-xs sm:text-lg leading-tight">
              {t('stat2')}
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center sm:w-1/3">
            <div className="text-xl sm:text-[36px] font-semibold text-[#fea567ad]">6</div>
            <div className="text-[#545252] text-xs sm:text-lg leading-tight">
              {t('stat3')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVid;
