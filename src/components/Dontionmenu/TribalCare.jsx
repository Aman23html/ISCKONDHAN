import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandHeart, HeartHandshake } from 'lucide-react';

const donationOptions = [101, 551, 1100, 2500, 5000, 11000, 51000];
const sevaName = "Tribal Care Seva"; // This can be passed dynamically via props or URL if needed

const TribalCare = () => {
  const navigate = useNavigate();

  const handleDonationClick = (amount) => {
    const encodedSeva = encodeURIComponent(sevaName);
    navigate(`/donate/payment/${encodedSeva}/${amount}`);
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-amber-300 overflow-hidden">

        {/* Header */}
        <div className="bg-amber-50 px-8 py-10 text-center border-b border-amber-200">
          <h2 className="text-5xl font-extrabold text-amber-700 tracking-tight drop-shadow-sm mb-2 animate-pulse">
             {sevaName}
          </h2>
          <p className="text-gray-700 text-lg font-medium max-w-2xl mx-auto mt-3">
            Help support our beloved tribal communities with prasadam, spiritual care, and joyful seva.
          </p>
        </div>

        {/* Image */}
        <img
          src="/Donation/donation4.png"
          alt={sevaName}
          className="w-full h-[300px] sm:h-[400px] object-cover object-center shadow-inner"
        />

        {/* Content */}
        <div className="p-8 sm:p-10">
          <p className="text-gray-800 text-center text-lg font-medium mb-10 leading-relaxed">
            Your kind donations help nourish hearts and souls. Every rupee goes toward prasadam distribution,
            welfare services, and enhancing the lives of tribal devotees. Experience the joy of giving!
          </p>

          {/* Donation Grid */}
          <div className="bg-gradient-to-t from-amber-100 to-white p-6 rounded-xl border border-amber-300 shadow-inner">
            <div className="text-center text-xl font-semibold text-amber-700 mb-6 flex items-center justify-center gap-2">
              <HeartHandshake size={24} className="text-amber-600" />
              Choose Your Seva Amount
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {donationOptions.map((amount, index) => (
                <button
                  key={index}
                  onClick={() => handleDonationClick(amount)}
                  className="group bg-white border border-amber-300 rounded-xl shadow-md hover:shadow-xl px-5 py-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <HandHeart size={32} className="text-amber-700 group-hover:text-red-600 transition duration-200" />
                  <span className="font-bold text-lg text-amber-800 group-hover:text-red-700">
                    ₹{amount}
                  </span>
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              Every contribution is a step toward spiritual upliftment and social harmony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TribalCare;
