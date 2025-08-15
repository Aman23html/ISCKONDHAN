import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GiLotus,
  GiReceiveMoney,
  GiTempleGate,
  GiMeal,
  GiTribalMask
} from 'react-icons/gi';
import { FaHandsWash, FaBook } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const DonationLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const showBackButton = location.pathname !== '/donate';

  const donationOptions = [
    {
      name: t('donate.festivalSupport.title'),
      description: t('donate.festivalSupport.description'),
      icon: <GiReceiveMoney className="text-4xl text-amber-600" />,
      link: 'festival-support'
    },

    {
      name: t('donate.templeConstruction.title'),
      description: t('donate.templeConstruction.description'),
      icon: <GiTempleGate className="text-4xl text-amber-600" />,
      link: 'temple-construction'
    },
    {
      name: t('donate.annaDaan.title'),
      description: t('donate.annaDaan.description'),
      icon: <GiMeal className="text-4xl text-amber-600" />,
      link: 'anna-daan'
    },
    {
      name: t('donate.nityaSeva.title'),
      description: t('donate.nityaSeva.description'),
      icon: <GiLotus className="text-4xl text-amber-600" />,
      link: 'nitya-seva'
    },
    {
      name: t('donate.vaishnavaSeva.title'),
      description: t('donate.vaishnavaSeva.description'),
      icon: <FaHandsWash className="text-4xl text-amber-600" />,
      link: 'vaishnava-seva'
    },
    {
      name: t('donate.gitaDaan.title'),
      description: t('donate.gitaDaan.description'),
      icon: <FaBook className="text-4xl text-amber-600" />,
      link: 'gita-daan'
    },
    {
      name: t('donate.tribalCare.title'),
      description: t('donate.tribalCare.description'),
      icon: <GiTribalMask className="text-4xl text-amber-600" />,
      link: 'tribal-care-seva'
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-amber-100 via-white to-yellow-50 px-4 py-10 sm:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/mandala-bg.png')] bg-center bg-no-repeat bg-cover" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-6xl mx-auto backdrop-blur-sm bg-white/70 border border-amber-200 p-6 sm:p-10 rounded-3xl shadow-2xl"
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-3 text-amber-600 mb-2">
            <GiReceiveMoney className="text-4xl" />
            <h1 className="text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-sm">
              {t('donate.heading')}
            </h1>
            <GiLotus className="text-3xl" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('donate.subheading')}
          </p>
        </div>

        {/* Back Button */}
        {showBackButton && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <button
              onClick={() => navigate('/donate')}
              className="flex items-center text-sm bg-amber-200/70 text-amber-800 px-4 py-2 rounded-full hover:bg-amber-300 transition duration-200 shadow-sm"
            >
              ← {t('donate.backButton')}
            </button>
          </motion.div>
        )}

        {/* Main Donation Cards */}
        {location.pathname === '/donate' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {donationOptions.map((donation, index) => (
              <motion.div
                key={donation.name}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/donate/${donation.link}`)}
                className="cursor-pointer bg-white border border-amber-100 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  {donation.icon}
                  <h3 className="text-lg font-semibold text-amber-700">{donation.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{donation.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Outlet for nested donation routes */}
        <div className="border-t border-amber-100 pt-6">
          <Outlet />
        </div>
      </motion.div>
    </div>
  );
};

export default DonationLayout;
