import React from 'react';
import { GiMeditation, GiLotus, GiBookshelf } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const YouthCourse = () => {
    const navigate = useNavigate();


  return (
    



    <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 min-h-screen py-10 px-5 sm:px-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-amber-300">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-amber-700 mb-6">
          🧘 Youth Empowerment Course
        </h1>
        <p className="text-center text-lg text-gray-700 font-medium mb-8 leading-relaxed">
          A dynamic journey into Bhagavad Gita wisdom, lifestyle refinement, and inner peace for youth aged 16–28.  
        </p>

        {/* Banner Image */}
        <img
          src="/Courses/youth-course.png"
          alt="Youth Spiritual Course"
          className="rounded-2xl shadow-xl w-full mb-10"
        />

        {/* Course Modules */}
        <h2 className="text-2xl font-bold text-amber-700 mb-4">📚 What You'll Learn</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiBookshelf size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Essence of the Bhagavad Gita</span>
          </li>
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiMeditation size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Mantra Meditation Techniques</span>
          </li>
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiLotus size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Character Building & Values</span>
          </li>
          <li className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl shadow-sm border border-amber-200">
            <GiBookshelf size={28} className="text-amber-700" />
            <span className="font-semibold text-gray-800">Time & Mind Management</span>
          </li>
        </ul>

        {/* Shloka Section */}
        <div className="bg-amber-100 rounded-xl p-6 shadow-inner mb-10 border border-amber-300">
          <h3 className="text-xl font-bold text-amber-800 mb-3">📜 Shloka Wisdom</h3>
          <p className="italic text-lg text-gray-800 mb-2">
            “nāsty atra saṁśayaḥ” — There is no doubt about it.
          </p>
          <p className="text-gray-700 text-base font-medium">
            Bhagavad Gita emphasizes the transformative power of spiritual education. This course is designed to instill strength, clarity, and purpose in youth, enabling them to rise above distractions and live meaningful lives.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md"
            onClick={() => navigate('/contact')}>
            Join the Course Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouthCourse;
