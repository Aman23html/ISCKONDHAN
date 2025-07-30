import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandHeart } from 'lucide-react';

const donationOptions = [101, 551, 1100, 2500, 5000, 11000, 51000];
const sevaName = "Vaishnava Seva"; // This will be passed dynamically in the URL

const VaishnavaSeva = () => {
  const navigate = useNavigate();

  const handleDonationClick = (amount) => {
    const encodedSeva = encodeURIComponent(sevaName);
    navigate(`/donate/payment/${encodedSeva}/${amount}`);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 shadow-2xl rounded-3xl p-8 max-w-4xl mx-auto mt-12 mb-16 border border-amber-300">
      <h2 className="text-4xl font-extrabold text-center text-amber-700 mb-6">
        🍚 {sevaName} Seva
      </h2>

      <img
        src="/Donation/donation5.png"
        alt={sevaName}
        className="rounded-2xl shadow-xl w-full mb-8"
      />

      <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center font-medium">
        Contribute to feeding devotees, saints, and needy people through this auspicious service.
        <br />
        Each donation provides nourishing prasadam and blessings.
      </p>

      <div className="bg-white rounded-xl border border-amber-300 p-6 shadow-inner">
        <div className="bg-amber-400 text-white text-center py-3 rounded-t-xl font-semibold text-lg tracking-wide">
          Choose Your Seva Amount
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5">
          {donationOptions.map((amount) => (
            <div
              key={amount}
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

export default VaishnavaSeva;
