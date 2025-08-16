import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const sevaImageMap = {
  'Temple Construction': '/Donation/donation1.png',
  'temple-construction': '/Donation/donation1.png',

  'Anna Daan': '/Donation/donation2.png',
  'anna-daan': '/Donation/donation2.png',

  'Gita Daan': '/Donation/donation3.png',
  'gita-daan': '/Donation/donation3.png',

  'Tribal Care': '/Donation/donation4.png',
  'tribal-care-seva': '/Donation/donation4.png',

  'Vaishnava Seva': '/Donation/donation5.png',
  'vaishnava-seva': '/Donation/donation5.png',

  'Nitya Seva': '/Donation/donation6.png',
  'nitya-seva': '/Donation/donation6.png',

  // 🔥 FIXED KEYS
  'Janmashtami': '/gallery/janm1.png',
  'janmashtami': '/gallery/janm1.png',

  'Rath Yatra': '/gallery/rath1.webp',
  'rath-yatra': '/gallery/rath1.webp',

  'festival-support': '/Donation/donation7.png',
};


const DonationPaymentPage = () => {
  const { sevaName, amount } = useParams();
  const seva = decodeURIComponent(sevaName);
  const navigate = useNavigate();

  // Single donation state
  const [donation, setDonation] = useState({
    seva,
    amount: parseInt(amount) || 0,
    image: sevaImageMap[seva] || '/Donation/default.png',
  });

  // Save donation in localStorage as single object (not cart array)
  useEffect(() => {
    localStorage.setItem('donation', JSON.stringify(donation));
  }, [donation]);

  // Handle manual amount entry
  const handleAmountChange = (value) => {
    const amt = parseInt(value) || 0;
    setDonation((prev) => ({ ...prev, amount: amt }));
  };

  const goToCheckout = () => {
    if (!donation.amount || donation.amount <= 0) {
      alert("Please enter a valid donation amount 🙏");
      return;
    }
    navigate('/donate/form', { state: { amount: donation.amount } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-50 py-6 px-3 sm:px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-green-700 text-sm font-medium text-center sm:text-left">
            Donation for <strong>{donation.seva}</strong>
          </div>
          <button
            onClick={() => navigate('/donate')}
            className="flex items-center text-blue-600 hover:underline text-sm gap-1"
          >
            <ChevronLeft size={16} /> Back to Seva
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-xl p-6">
          {/* Image + Seva Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={donation.image}
              alt={donation.seva}
              className="w-28 h-28 object-cover rounded-xl shadow"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-amber-800">{donation.seva}</h2>
              <p className="text-sm text-gray-600 mt-1">
                Please enter your desired donation amount 🙏
              </p>
              <input
                type="number"
                min={1}
                value={donation.amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="mt-3 w-40 border border-amber-300 rounded-md text-center py-2 shadow-sm"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 border-t pt-4">
            <h3 className="text-lg font-semibold text-amber-700 mb-3">🧾 Summary</h3>
            <div className="flex justify-between text-gray-700 font-medium text-base">
              <span>Total Donation</span>
              <span>₹{donation.amount.toLocaleString()}</span>
            </div>
            <button
              onClick={goToCheckout}
              className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full text-base font-semibold shadow-lg transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPaymentPage;
