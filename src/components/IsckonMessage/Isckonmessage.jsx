import React from 'react';
import { useTranslation } from 'react-i18next';

const Isckonmessage = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-25 lg:gap-40 py-12 px-4 w-full lg:min-h-[600px] min-h-[900px] bg-white overflow-hidden">
      {/* 🌸 Top Border */}
      <img src="/border/border.png" alt="top-border" className="absolute top-0 left-0 w-full" />

      {/* 🧡 Message */}
      <div className="max-w-xl flex flex-col items-center text-center gap-7 z-10">
        <h1 className="text-4xl font-extrabold text-[#df7326]">{t('title')}</h1>
        <h2 className="text-2xl font-semibold text-black">{t('subtitle')}</h2>
        <p className="text-base text-black leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
          {t('paragraph')}
        </p>
        <button className="bg-[#df7326] text-white text-lg font-medium px-5 py-2.5 rounded hover:bg-[#c75b18] transition-all">
          {t('readMore')}
        </button>
        <button
          onClick={toggleLanguage}
          className="mt-3 text-sm text-blue-600 underline hover:text-blue-800"
        >
          {i18n.language === 'en' ? 'हिंदी में पढ़ें' : 'Read in English'}
        </button>
      </div>

      {/* 💠 Mandala + Image */}
      <div className="w-full max-w-[250px] relative flex justify-center items-center aspect-square">
        <img src="/border/dra.svg" alt="mandala" className="absolute w-[100%] max-w-none spin-slow" />
        <img
          src="/Prabhupada/prabhupada.png"
          alt="Srila Prabhupada"
          className="relative z-10 w-[90%] mt-4 object-contain drop-shadow-xl rounded-b-4xl"
        />
      </div>

      {/* 🌸 Bottom Border */}
      <img src="/border/border.png" alt="bottom-border" className="absolute bottom-0 left-0 w-full rotate-180" />
    </div>
  );
};

export default Isckonmessage;
