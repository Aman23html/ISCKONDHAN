import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandHeart } from 'lucide-react';

const donationOptions = [
  { amount: 280, description: "1 Bhagavad Gita" },
  { amount: 840, description: "3 Bhagavad Gitas" },
  { amount: 1400, description: "5 Bhagavad Gitas" },
  { amount: 2700, description: "10 Bhagavad Gitas" },
  { amount: 5400, description: "20 Bhagavad Gitas" },
  { amount: 13500, description: "50 Bhagavad Gitas" },
  { amount: 27000, description: "100 Bhagavad Gitas" }
];

const sevaName = "Gita Daan";

const GitaDaan = () => {
  const navigate = useNavigate();

  const handleDonationClick = (amount) => {
    const encodedSeva = encodeURIComponent(sevaName);
    navigate(`/donate/payment/${encodedSeva}/${amount}`);
  };

  const images = [
    "/Donation/donation3.png",
    "/Donation/Gdaan1.png",
    "/Donation/Gdaan2.png",
    "/Donation/Gdaan3.png",
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 shadow-2xl rounded-3xl p-8 max-w-6xl mx-auto mt-12 mb-16 border border-amber-300">
      <h2 className="text-5xl font-extrabold text-center text-amber-700 mb-6">
        📘 {sevaName} Seva
      </h2>

      {/* Image Gallery */}
      <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth mb-8">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gita Daan ${index + 1}`}
            className="rounded-2xl shadow-xl w-[350px] h-[240px] object-cover flex-shrink-0 hover:scale-105 transition duration-300"
          />
        ))}
      </div>

      {/* Description */}
      <div className="text-lg text-gray-800 leading-relaxed font-medium space-y-6 text-center">
        <p>
          Contribute to spiritual upliftment by sponsoring the distribution of Bhagavad Gita to homes, prisons, hospitals, and schools.
        </p>

        <p>
          <b>Gītā Dān – Bhagavad-gītā Donation</b><br />
          Distributing the <i>Bhagavad-gītā As It Is</i> is the highest welfare work. Srila Prabhupada emphasized that gifting a Gita is planting a spiritual seed that blossoms over lifetimes.
        </p>

        <p>
          In the <b>Padma Purāṇa</b>:<br />
          <span className="italic text-amber-800 font-semibold">
            “yaḥ śataṁ gītā-granthān dadyāt”
          </span><br />
          <span className="text-gray-700">"One who donates a hundred Gītās attains Vaikuṇṭha."</span>
        </p>

        <div className="border-l-4 border-amber-600 bg-amber-100 px-6 py-4 rounded-lg shadow-inner max-w-2xl mx-auto">
          <span className="text-xl text-amber-900 font-semibold italic">
            “sarva-dharmān parityajya māṁ ekaṁ śaraṇaṁ vraja”
          </span><br />
          <span className="text-gray-700 text-base">
            “Surrender unto Me alone, and I will deliver you from all sins.” (Gītā 18.66)
          </span>
        </div>

        <p>
          Every donation delivers not only knowledge but also prasadam, mercy, and spiritual transformation.
        </p>
      </div>

      {/* Donation Options */}
      <div className="bg-white rounded-xl border border-amber-300 p-6 shadow-inner mt-12">
        <div className="bg-amber-400 text-white text-center py-3 rounded-t-xl font-semibold text-lg tracking-wide">
          Choose Your Gita Sponsorship
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5">
          {donationOptions.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleDonationClick(option.amount)}
              className="group bg-gradient-to-b from-white to-amber-50 border border-amber-300 rounded-xl shadow-md px-4 py-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 text-center"
            >
              <span className="text-sm text-gray-700 font-medium">{option.description}</span>
              <HandHeart size={28} className="text-amber-700 group-hover:text-red-600 transition" />
              <span className="font-bold text-amber-800 text-lg">₹{option.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitaDaan;
