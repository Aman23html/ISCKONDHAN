import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandHeart } from 'lucide-react';

const donationOptions = [101, 551, 1100, 2500, 5000, 11000, 51000];
const sevaName = "Anna Daan";

const AnnaDaan = () => {
  const navigate = useNavigate();

  const handleDonationClick = (amount) => {
    const encodedSeva = encodeURIComponent(sevaName);
    navigate(`/donate/payment/${encodedSeva}/${amount}`);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 p-6 md:p-10 rounded-3xl shadow-2xl max-w-6xl mx-auto my-12 border border-amber-200">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-amber-700 drop-shadow-md">
          🍚 {sevaName} Seva
        </h1>
        <p className="text-lg text-gray-600 mt-4 font-medium max-w-3xl mx-auto">
          Offer sanctified prasadam and nourish both body and soul by supporting this divine service.
        </p>
      </div>

      {/* Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-xl mb-10">
        <img
          src="/Donation/donation2.png"
          alt={sevaName}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Description */}
      <div className="bg-white border border-amber-200 p-6 md:p-8 rounded-2xl shadow-inner mb-12">
        <h2 className="text-2xl font-bold text-amber-700 mb-4">Why Support Anna Daan?</h2>
        <p className="text-gray-800 text-[17px] leading-relaxed">
          Food distribution is one of the highest acts of compassion in Vedic culture.
          As said in scriptures, <span className="italic">“Annadānam Paramam Dānam”</span> – "Of all charities, giving food is the supreme."
          <br /><br />
          When we offer sanctified prasadam, it carries spiritual potency. Lord Krishna accepts such offerings with love, and when it is distributed, it becomes a medium of mercy.
          <br /><br />
          At ISKCON, through programs like Mid-Day Meals and Food for Life, thousands are fed every day. Your donation becomes an offering to Krishna and a blessing to many.
          <br /><br />
          <span className="font-semibold text-amber-800">
            “Annadānam paramam dānam, vidyādānam tataḥ param”
          </span><br />
          Food charity is supreme, yet knowledge-giving is greater still.
        </p>
      </div>

      {/* Donation Section */}
      <div className="bg-white border border-amber-300 rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-semibold text-center text-amber-800 mb-6">
          Choose Your Seva Amount
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {donationOptions.map((amount) => (
            <div
              key={amount}
              onClick={() => handleDonationClick(amount)}
              className="group bg-gradient-to-br from-white to-amber-50 border border-amber-300 rounded-xl shadow-sm px-5 py-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-lg transition-transform motion-safe:hover:scale-105"
            >
              <HandHeart size={30} className="text-amber-700 group-hover:text-red-500 transition" />
              <span className="font-bold text-lg text-amber-800">₹{amount}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnnaDaan;
