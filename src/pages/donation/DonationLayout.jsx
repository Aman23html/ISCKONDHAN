import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiLotus, GiReceiveMoney, GiTempleGate, GiMeal, GiTribalMask } from 'react-icons/gi';
import { FaHandsWash, FaBook } from 'react-icons/fa';

const DonationLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const showBackButton = location.pathname !== '/donate';

  const donationOptions = [
    {
      name: 'Temple Construction',
      description: 'Help us expand the temple and build a spiritual sanctuary.',
      icon: <GiTempleGate className="text-4xl text-amber-600" />,
      link: 'temple-construction'
    },
    {
      name: 'Anna Daan (Food for All)',
      description: 'Feed the needy and devotees with love and compassion.',
      icon: <GiMeal className="text-4xl text-amber-600" />,
      link: 'anna-daan'
    },
    {
      name: 'Nitya Seva (Daily Worship)',
      description: 'Support daily deity worship and temple operations.',
      icon: <GiLotus className="text-4xl text-amber-600" />,
      link: 'nitya-seva'
    },
    {
      name: 'Vaishnav Seva',
      description: 'Serve dedicated devotees who carry out daily temple services.',
      icon: <FaHandsWash className="text-4xl text-amber-600" />,
      link: 'vaishnava-seva'
    },
    {
      name: 'Gita Daan',
      description: 'Distribute Bhagavad Gita and Vedic wisdom across the world.',
      icon: <FaBook className="text-4xl text-amber-600" />,
      link: 'gita-daan'
    },
    {
      name: 'Tribal Care Seva',
      description: 'Uplift tribal communities through seva, education, and food.',
      icon: <GiTribalMask className="text-4xl text-amber-600" />,
      link: 'tribal-care-seva'
    },
    {
      name: 'Festival Support',
      description: 'Contribute towards grand spiritual festivals and yatras.',
      icon: <GiReceiveMoney className="text-4xl text-amber-600" />,
      link: 'festival-support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-amber-100 via-white to-yellow-50 px-4 py-10 sm:px-8 relative overflow-hidden">
      {/* Decorative Mandala BG */}
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
              Support a Spiritual Cause
            </h1>
            <GiLotus className="text-3xl" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from our various devotional services and extend your support to ISKCON Dhanbad’s divine mission.
          </p>
        </div>

        {/* Show Back Button if inside a donation sub-page */}
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
              ← Back to Donation Menu
            </button>
          </motion.div>
        )}

        {/* Show Cards only on main /donate route */}
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

        {/* Sub Page Content (Outlet) */}
        <div className="border-t border-amber-100 pt-6">
          <Outlet />
        </div>
      </motion.div>
    </div>
  );
};

export default DonationLayout;
