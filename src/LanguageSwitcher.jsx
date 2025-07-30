// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center text-sm font-medium">
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 border rounded">English</button>
      <button onClick={() => changeLanguage('hi')} className="px-2 py-1 border rounded">हिंदी</button>
    </div>
  );
};

export default LanguageSwitcher;
