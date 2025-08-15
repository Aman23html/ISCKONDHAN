import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const FootTop = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToPoster = (e) => {
    e.preventDefault();
    const section = document.getElementById('poster');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate and scroll after render
      navigate('/', { state: { scrollTo: 'poster' } });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-[#ff6b00] via-[#ff8533] to-[#ff6b00] text-white overflow-hidden ">

      {/* 🔁 Mahamantra Marquee */}
      <div className="w-full py-2 overflow-hidden">
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <p className="text-lg md:text-xl font-bold text-yellow-200 tracking-wider drop-shadow-[0_0_3px_#fde047]">
            {t('footer.mahamantra')}
          </p>
        </div>
      </div>

      {/* 🔶 Footer Top Content */}
      <div className="px-4 md:px-20 py-8 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

        {/* ISKCON Info */}
        <div className="space-y-3 text-[#fdbe51]">
          <h3 className="text-2xl font-bold">{t('footer.iskconTitle')}</h3>
          <h4 className="text-lg font-semibold">{t('footer.location')}</h4>
          <p className="text-sm text-white leading-relaxed">
            {t('footer.address')}
          </p>
          <div className="space-y-1">
            <p className="flex items-center gap-2 text-white text-sm">
              <FaPhoneAlt className="text-yellow-300" /> {t('footer.phone')} 
            </p>
            <p className="flex items-center gap-2 text-white text-sm">
              <FaEnvelope className="text-yellow-300" /> {t('footer.email')} 
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#fdbe51]">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/" onClick={scrollToPoster} className="hover:underline">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Temple Timings */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#fdbe51] flex items-center gap-2">
            <FaClock /> TEMPLE TIMINGS
          </h3>
          <ul className="space-y-1 text-sm text-white">
            <li>🕗 Mangal Aarti: 4:30 AM</li>
            <li>🕘 Darshan Opens: 7:30 AM</li>
            <li>🕒 Sandhya Aarti: 7:00 PM</li>
            <li>🕘 Temple Closes: 8:30 PM</li>
          </ul>
        </div>

        {/* Social Links & Donate */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#fdbe51]">FOLLOW US :</h3>
          <div className="flex gap-5 text-lg">
            <a href="https://instagram.com/iskcondhanbadofficial" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/iskcondhanbadofficial" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@iskcondhanbad" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaYoutube />
            </a>
          </div>
          <Link
            to="/donate"
            className="inline-block px-6 py-3 text-sm font-semibold text-[#ff6b00] bg-white rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all"
          >
            Donate
          </Link>
        </div>
      </div>

      {/* Spiritual Quote */}
      <div className="bg-[#e65c00] text-center py-3 text-yellow-200 text-sm font-medium">
        "Chant Hare Krishna and be happy" — Srila Prabhupada
      </div>

      {/* Marquee Animation Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default FootTop;
