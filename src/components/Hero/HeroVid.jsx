import React from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup'; 

const HeroVid = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full min-h-[700px] overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/video/bgvid.mp4" type="video/mp4" />
      </video>

      {/* 🔳 Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent -z-10" />

      {/* ✨ Welcome Content */}
      <div className="flex flex-col gap-2 sm:gap-4 px-2 pt-6 sm:pt-10 rounded-md max-w-[95%] w-full">
        <h2 className="text-white text-lg sm:text-2xl font-bold leading-tight">
          {t('welcomeTo')}
        </h2>
        <h1 className="text-white font-secondary text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          {t('templeName')}
        </h1>
        <p className="text-white text-sm sm:text-lg font-semibold mt-1">
          {t('locationTag')}
        </p>
      </div>

      {/* 📍 Location Button */}
      <div className="mb-20 sm:mb-40 mt-4">
        <a
          href="https://www.google.com/maps/place/Iskcon+Dhanbad/@23.7957,86.4312,17z"
          className="flex items-center gap-2 bg-[#ff6d05] rounded-full px-4 py-2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:px-6 transition-all duration-300"
        >
          <img
            className="w-[11px] h-[17px]"
            alt="Vector"
            src="https://c.animaapp.com/md8w42lwOfBxGO/img/vector-7.svg"
          />
          <span className="text-white text-sm sm:text-xl font-semibold">
            {t('location')}
          </span>
        </a>
      </div>

      {/* 📊 Stats Block Overlay at Bottom */}
      <div className="absolute bottom-2 w-full px-2 flex justify-center">
        <div className="bg-white/90 backdrop-blur border-[2px] border-[#ff9640c7] rounded-md px-4 py-3 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-8 max-w-5xl w-full shadow-md">

          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <div className="text-lg sm:text-[32px] font-semibold text-[#fea567ad]">
              <CountUp end={73} duration={2} separator="," suffix="k+" />
            </div>
            <div className="text-[#545252] text-xs sm:text-sm leading-tight">
              {t('stat1')}
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <div className="text-lg sm:text-[32px] font-semibold text-[#fea567ad]">
              <CountUp end={70} duration={2} suffix="k"/>
            </div>
            <div className="text-[#545252] text-xs sm:text-sm leading-tight">
              {t('stat2')}
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <div className="text-lg sm:text-[32px] font-semibold text-[#fea567ad]">
              <CountUp end={7} duration={2}  />
            </div>
            <div className="text-[#545252] text-xs sm:text-sm leading-tight">
              {t('stat3')}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroVid;
