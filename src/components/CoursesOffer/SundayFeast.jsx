import React from 'react';
import { CalendarHeart, Leaf, Sparkles } from 'lucide-react';

const SundayFeast = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-100 to-orange-50 p-8 rounded-3xl max-w-5xl mx-auto my-12 border border-orange-300 shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-6">
        🍛 ISKCON Sunday Feast
      </h2>

      <img
        src="/Courses/sunday-feast1.png"
        alt="Sunday Feast Celebration"
        className="w-full rounded-xl shadow-lg mb-8"
      />
      <img
        src="/Courses/sunday-feast2.png"
        alt="Sunday Feast Celebration"
        className="w-full rounded-xl shadow-lg mb-8"
      />
      <img
        src="/Courses/sunday-feast1.png"
        alt="Sunday Feast Celebration"
        className="w-full rounded-xl shadow-lg mb-8"
      />

      <p className="text-lg text-gray-800 leading-relaxed mb-8 font-medium text-center">
        The Sunday Feast is a weekly celebration of devotion, culture, and community hosted by ISKCON temples across the globe. Initiated by **Srila Prabhupada**, the feast is a spiritual gathering where everyone is welcome to experience **bhakti-yoga**, hear soul-uplifting **kirtans**, listen to **philosophical discourses**, and relish sanctified vegetarian food (**prasadam**).
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <img
          src="/images/sunday-feast2.jpg"
          alt="Devotees Honoring Feast"
          className="rounded-xl shadow-md"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-orange-700 mb-3">Why Attend?</h3>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <CalendarHeart className="text-orange-600" size={20} /> Weekly dose of spiritual inspiration
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="text-yellow-500" size={20} /> Uplifting kirtans & enlightening discourses
            </li>
            <li className="flex items-center gap-2">
              <Leaf className="text-green-600" size={20} /> Delicious Krishna prasadam served to all
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-inner">
        <h4 className="text-xl font-semibold text-orange-700 mb-4">📜 Sloka Highlight</h4>
        <p className="text-lg font-semibold text-purple-700 italic mb-2">
          "prasādaṁ puruṣaṁ bhuktvā śāntaṁ śāntaṁ vidhūya doṣaṁ" <br />
        </p>
        <p className="text-gray-800">
          “By honoring prasadam, one becomes purified and peaceful, releasing all sins.”
        </p>
      </div>

      <p className="mt-8 text-center text-lg text-gray-800">
        🌟 Join us every Sunday from <span className="font-bold text-orange-700">4:00 PM to 7:00 PM</span> at ISKCON Dhanbad Temple for a spiritual experience that nourishes both heart and soul.
      </p>
    </div>
  );
};

export default SundayFeast;
