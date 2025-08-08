import React from 'react';
import { GiMeditation, GiDiscussion, GiBookCover, GiPodium } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const YouthCourse = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 min-h-screen py-10 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-amber-300">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-amber-700 mb-6">
          ✨ ISKCON Youth Forum – Weekly Empowerment for Young Minds
        </h1>
        <p className="text-center text-lg text-gray-700 font-medium mb-6 leading-relaxed">
          Seeking connection, clarity, and character? Join our inspiring weekly sessions designed for youth and students eager to explore life through the wisdom of the Bhagavad Gita.
        </p>

        {/* Banner Image */}
        <img
          src="/Courses/youth-course.png"
          alt="Youth Forum at ISKCON"
          className="rounded-2xl shadow-xl w-full mb-10"
        />

        {/* Key Highlights */}
        <h2 className="text-2xl font-bold text-amber-700 mb-4">🌟 Why Join?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiMeditation size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Stress-free Living & Self-discovery</span>
          </li>
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiDiscussion size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Interactive Sessions & Open Q&A</span>
          </li>
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiBookCover size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Bhagavad Gita–Based Wisdom</span>
          </li>
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiPodium size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Leadership & Personality Growth</span>
          </li>
        </ul>

        {/* Shloka Wisdom */}
        <div className="bg-amber-100 rounded-xl p-6 shadow-inner mb-10 border border-amber-300">
          <h3 className="text-xl font-bold text-amber-800 mb-3">📜 Gita Insight</h3>
          <p className="italic text-lg text-gray-800 mb-2">
            “nāsty atra saṁśayaḥ” — There is no doubt about it.
          </p>
          <p className="text-gray-700 text-base font-medium">
            The Bhagavad Gita empowers youth to rise above confusion and distractions, leading a life full of purpose, integrity, and inner peace.
          </p>
        </div>

        {/* Event Info */}
        <div className="bg-white border border-amber-300 rounded-xl p-6 shadow-md mb-10">
          <h3 className="text-xl font-bold text-amber-700 mb-3">🗓️ Session Details</h3>
          <ul className="list-disc list-inside text-gray-800 font-medium space-y-2">
            <li>📍 Venue: <span className="text-amber-700 font-semibold">ISKCON Dhanbad</span></li>
            <li>📅 Every Sunday</li>
            <li>🕒 Time: 6:00 PM to 8:00 PM</li>
            <li>💬 Open to all college students & youth (ages 18–30)</li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <button
            className="bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md"
            onClick={() => navigate('/contact')}
          >
            Join the Youth Forum
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouthCourse;
