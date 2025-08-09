import React from 'react';
import { useTranslation } from 'react-i18next';

const Broadcast = () => {
  const { t } = useTranslation();
  const schedule = [
    { title: t('MangalaAarti'), time: '04:30 am' },
    { title: t('TulsiAarti'), time: '05:00 am' },
    { title: t('DarshanAarti'), time: '07:30 am' },
    { title: t('GuruPuja'), time: '07:35 am' },
    { title: t('BhagwatamClass'), time: '08:00 am' },
    { title: t('TempleCloses'), time: '01:00 pm - 04:00 pm' },
    { title: t('Darshan'), time: '04:00 pm' },
    { title: t('TulsiAarti'), time: '06:30 pm' },
    { title: t('SandhyaAarti'), time: '07:00 pm' },
    { title: t('TempleClose'), time: '08:30 pm' }
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full mt-[50px]">
      
      {/* 🧡 Left - Temple Schedule */}
      <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center px-4 py-10 text-white overflow-hidden">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/video/templeschedule.mp4" type="video/mp4" />
        </video>

        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-[#d6593aa0] z-0" />

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold z-10 mb-6 font-inknut text-white">
          TEMPLE SCHEDULE
        </h2>

        {/* Schedule */}
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl px-6 py-6 z-10 shadow-lg">
          {schedule.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center py-2">
                <span className="text-white font-medium text-sm sm:text-base">{item.title}</span>
                <span className="text-yellow-200 font-bold text-sm sm:text-lg">{item.time}</span>
              </div>
              {index < schedule.length - 1 && (
                <hr className="border-t border-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 💠 Right - Deity Image */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[650px]">
        <img
          src="/GaurNitai/GN1.png"
          alt="Radha Krishna"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Broadcast;
