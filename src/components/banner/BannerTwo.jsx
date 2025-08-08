import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerTwo = () => {
  const { t } = useTranslation();
  return (
    <div>
    <div className="relative bg-[#ff6d05] border-y-[7px] border-[#febf51] overflow-hidden">
      {/* Background Scrolling Mahamantra */}
      <div className="absolute top-1/2 left-0 w-full animate-marquee whitespace-nowrap z-0 ">
        <div className='marquee'>
          <p className="relative text-2xl md:text-3xl font-bold  text-yellow-200 tracking-wider top-37  md:top-30 lg:top-25 [text-shadow:0_0_2px_#fef08a,0_0_30px_#fde047] ">
          {t('bannerTwo.mahamantra')}
        </p>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-14 md:px-20 md:py-10 text-center ">
        {/* Left Side */}
        <div className="max-w-xl space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-[#fdbe51] font-[Georgia]">
            {t('bannerTwo.title')}
          </h1>
          <p className="text-white text-lg md:text-2xl font-semibold font-[Inter]">
            {t('bannerTwo.subtitle')}
          </p>
        </div>

        {/* Right Side */}
        <div className="text-white text-2xl md:text-4xl font-bold font-[Georgia] leading-snug drop-shadow-sm">
          {t('bannerTwo.rightBlockLine1')} <br />
          <span className=" drop-shadow-md">{t('bannerTwo.rightBlockLine2')}</span> <br />
          &amp; <br />
          {t('bannerTwo.rightBlockLine4')}
        </div>
      </div>
      {/* Bottom Border Image */}
      
    </div>

    <img
        src="/border/border.png"
        alt="bottom-border"
        className=" left-0 w-full "
      />
    </div>
  );
};

export default BannerTwo;
