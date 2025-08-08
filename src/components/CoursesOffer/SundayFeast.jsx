import React from 'react';
import { CalendarHeart, Leaf, Sparkles, BookText, Music2 } from 'lucide-react';

const SundayFeast = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-100 to-orange-50 p-8 rounded-3xl max-w-5xl mx-auto my-12 border border-orange-300 shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-4">
        🍛 Sunday Feast at ISKCON – A Divine Experience for Everyone
      </h2>

      <p className="text-center text-lg text-gray-700 font-medium mb-2">
        <span className="font-semibold">Every Sunday | 11:00 AM onwards</span><br />
        Location: <span className="text-orange-700 font-semibold">ISKCON Dhanbad, Jagjivan Nagar</span>
      </p>

      <img
        src="/Courses/sunday-feast1.png"
        alt="Sunday Feast Celebration"
        className="w-full rounded-xl shadow-lg my-6"
      />
      <img
        src="/Courses/sunday-feast2.png"
        alt="Sunday Feast Devotees"
        className="w-full rounded-xl shadow-lg mb-6"
      />

      <p className="text-lg text-gray-800 leading-relaxed font-medium mb-8 text-center">
        You are warmly invited to the Sunday Feast at ISKCON – a weekly celebration of devotion, community,
        and spiritual nourishment.
        <br /><br />
        Join us for an inspiring weekly satsang that brings together people from all walks of life to connect through
        <strong> kirtan</strong> (devotional music), <strong>spiritual wisdom</strong>, and a sumptuous
        <strong> prasadam</strong> (sanctified vegetarian feast) – all offered as a service of love to Lord Krishna.
      </p>

      <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-inner mb-8">
        <h3 className="text-2xl font-bold text-orange-700 mb-4">🌼 What to Expect:</h3>
        <ul className="space-y-4 text-gray-800 font-medium text-base">
          <li className="flex items-center gap-3">
            <Music2 className="text-pink-600" size={22} />
            🕉 <span className="font-semibold">Soul-Stirring Kirtan</span> – joyful chanting and music that uplifts the heart
          </li>
          <li className="flex items-center gap-3">
            <BookText className="text-blue-600" size={22} />
            📖 <span className="font-semibold">Philosophical Discourse</span> – timeless wisdom from the Bhagavad-gita and Vedic texts
          </li>
          <li className="flex items-center gap-3">
            <Leaf className="text-green-600" size={22} />
            🍛 <span className="font-semibold">Free Vegetarian Feast (Prasadam)</span> – lovingly prepared, pure food for the soul
          </li>
          <li className="flex items-center gap-3">
            <CalendarHeart className="text-orange-600" size={22} />
            🙏 <span className="font-semibold">Warm Community Atmosphere</span> – open to all, whether you're new or a regular guest
          </li>
        </ul>
      </div>

      <img
        src="/images/sunday-feast2.jpg"
        alt="Devotees Honoring Feast"
        className="rounded-xl shadow-md mb-8"
      />

      <p className="text-lg text-gray-800 leading-relaxed font-medium text-center mb-8">
        Come experience the peace, joy, and spiritual nourishment that make ISKCON’s Sunday Feast a cherished
        tradition around the world.
      </p>

      <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-inner">
        <h4 className="text-xl font-semibold text-orange-700 mb-4">📜 Sloka Highlight</h4>
        <p className="text-lg font-semibold text-purple-700 italic mb-2 text-center">
          "prasādaṁ puruṣaṁ bhuktvā śāntaṁ śāntaṁ vidhūya doṣaṁ"
        </p>
        <p className="text-gray-800 text-center">
          “By honoring prasadam, one becomes purified and peaceful, releasing all sins.”
        </p>
      </div>

      <p className="mt-8 text-center text-lg text-gray-800 font-medium">
        🌟 No registration required – just walk in and feel at home. <br />
        <span className="text-orange-700 font-semibold">Everyone is welcome.</span>
      </p>
    </div>
  );
};

export default SundayFeast;
