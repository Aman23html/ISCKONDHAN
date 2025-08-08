import React from 'react';
import { Book, Heart, Globe, Sparkles } from 'lucide-react';

const GitaClasses = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 p-8 rounded-3xl max-w-5xl mx-auto my-12 border border-amber-300 shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center text-amber-700 mb-4">
        📚 Gita Daan – Share the Gift of Wisdom
      </h2>

      <p className="text-center text-lg text-gray-700 font-medium mb-4">
        Become part of a sacred mission to distribute the Bhagavad Gita "As It Is" — Srila Prabhupada’s timeless gift to humanity.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img
          src="/courses/gita-daan.jpg"
          alt="Distributing Bhagavad Gita"
          className="rounded-xl shadow-lg"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-amber-700 mb-3">Why Gita Daan?</h3>
          <ul className="space-y-4 text-gray-800 font-medium">
            <li className="flex items-center gap-3">
              <Book className="text-blue-600" size={20} />
              Donate sacred scripture to uplift hearts
            </li>
            <li className="flex items-center gap-3">
              <Heart className="text-red-600" size={20} />
              Generate positive karma through selfless giving
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-green-600" size={20} />
              Support seekers in schools, hospitals, jails & villages
            </li>
            <li className="flex items-center gap-3">
              <Sparkles className="text-yellow-500" size={20} />
              Join a global tradition of spiritual service
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-inner mb-8">
        <h4 className="text-xl font-semibold text-amber-700 mb-4">🌟 ISKCON on Gita Daan:</h4>
        <p className="text-gray-800 font-medium mb-2">
          “Gita Daan is Maha Daan — the greatest donation. By distributing the Bhagavad Gita, you share the eternal teachings of Lord Krishna and help guide lost souls back to the spiritual path.”
        </p>
        <p className="text-gray-800 font-medium">
          Donating even a single Gita creates lasting spiritual impact — it is considered equal to donating wisdom itself.
        </p>
      </div>

      <p className="text-lg text-gray-800 leading-relaxed font-medium text-center mb-8">
        Support the expansion of spiritual awareness. Your contribution helps distribute Gitas across India —
        to students, villages, hospitals, jails, and more.
      </p>

      <img
        src="/images/gita-daan-distribution.jpg"
        alt="Gita distribution in a school or village"
        className="rounded-xl shadow-md mb-10 w-full"
      />

      <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-inner">
        <h4 className="text-xl font-semibold text-amber-700 mb-4">🕉️ Spiritual Benefits</h4>
        <ul className="list-disc list-inside text-gray-800 font-medium space-y-2">
          <li>Spread timeless wisdom and guide others toward dharma</li>
          <li>Bring peace and light to underserved communities</li>
          <li>Earn divine blessings for you and your family</li>
          <li>Leave a lasting spiritual legacy through service (seva)</li>
        </ul>
      </div>

      <p className="mt-8 text-center text-lg text-gray-800 font-medium">
        🎁 Donate Gita copies in any quantity. Enjoy <span className="font-semibold text-amber-700">80G tax benefits</span> on donations within India. <br />
        <span className="text-amber-700 font-semibold">Everyone is welcome to participate in this sacred cause.</span>
      </p>
    </div>
  );
};

export default GitaClasses;
