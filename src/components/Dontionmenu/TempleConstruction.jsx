import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandHeart } from 'lucide-react';

const donationOptions = [101, 551, 1100, 2500, 5000, 11000, 51000];
const sevaName = "Temple Construction";

const TempleConstruction = () => {
  const navigate = useNavigate();

  const handleDonationClick = (amount) => {
    const encodedSeva = encodeURIComponent(sevaName);
    navigate(`/donate/payment/${encodedSeva}/${amount}`);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 shadow-2xl rounded-3xl p-8 max-w-6xl mx-auto mt-12 mb-16 border border-amber-300">
      <h2 className="text-5xl font-extrabold text-center text-amber-700 mb-6">
        🛕 Temple Construction Seva
      </h2>

      {/* Image Gallery */}
      <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth">
        {['donation1.png', 'TCons.png', 'TCons1.png'].map((img, idx) => (
          <img
            key={idx}
            src={`/Donation/${img}`}
            alt={`Temple Construction ${idx + 1}`}
            className="rounded-2xl shadow-xl w-[350px] h-[240px] object-cover"
          />
        ))}
      </div>

      {/* Description */}
      <div className="text-lg text-gray-800 mt-10 leading-relaxed font-medium">
        <p className="mb-5 text-center">
          Participate in this divine mission by contributing to the construction of sacred spaces.
        </p>

        <p className="mb-4">
         To build a temple for Lord Krishna is not merely constructing walls—it is
          establishing a spiritual lighthouse for countless souls. Each brick becomes a blessing,
          each donation a step toward eternity.
        </p>

        <p className="mb-4 italic text-amber-800 font-semibold">
          Srila Prabhupada said, “A temple is a transcendental embassy of the spiritual world.”
        </p>

        <p className="mb-4">
          By contributing to temple construction, one helps manifest Lord Krishna’s divine abode on
          Earth. Temples become centers for kirtan, prasadam, deity worship, and spiritual education.
        </p>

        {/* Sloka Highlighted */}
        <div className="border-l-4 border-amber-600 bg-amber-100 px-6 py-4 my-6 text-xl font-semibold text-amber-900 rounded-lg shadow-inner">
          “yatrasthitā nāradītā devatāḥ”<br />
          <span className="text-base font-medium text-gray-700">“Where the Lord is worshipped, that place becomes a tirtha (holy place).”</span>
        </div>

        <p className="mb-4">
          Your donation isn’t just wealth—it’s bhakti in action. Your support helps build the altar,
          temple domes, and cultural hall for generations to come.
        </p>
      </div>

      {/* Donation Options */}
      <div className="bg-white rounded-xl border border-amber-300 p-6 shadow-inner mt-8">
        <div className="bg-amber-400 text-white text-center py-3 rounded-t-xl font-semibold text-lg tracking-wide">
          Choose Your Seva Amount
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5">
          {donationOptions.map((amount, index) => (
            <div
              key={index}
              onClick={() => handleDonationClick(amount)}
              className="group bg-gradient-to-b from-white to-amber-50 border border-amber-300 rounded-xl shadow-md px-4 py-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out hover:scale-105"
            >
              <HandHeart size={28} className="text-amber-700 group-hover:text-red-600 transition" />
              <span className="font-bold text-amber-800 text-lg">₹{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TempleConstruction;
