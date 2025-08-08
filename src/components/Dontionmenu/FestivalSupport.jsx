import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandHeart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const festivals = [
  {
    nameKey: 'festivalSupport.rathYatra.title',
    image: '/gallery/rath1.webp',
    descriptionKey: 'festivalSupport.rathYatra.description',
    donationOptions: [101, 501, 1100, 2100, 5100],
  },
  {
    nameKey: 'festivalSupport.janmashtami.title',
    image: '/gallery/janm1.png',
    descriptionKey: 'festivalSupport.janmashtami.description',
    donationOptions: [101, 551, 1100, 2500, 5100],
  },
  {
    nameKey: 'festivalSupport.radhaAshtami.title',
    image: '/Festival/radha-ashtami.jpg',
    descriptionKey: 'festivalSupport.radhaAshtami.description',
    donationOptions: [101, 251, 551, 1100, 2100],
  },
];

const FestivalSupport = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDonateClick = (festivalName, amount) => {
    navigate(`/donate/payment/${encodeURIComponent(festivalName)}/${amount}`);
  };

  return (
    <div className="px-4 py-10 sm:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-amber-700">
        {t('festivalSupport.heading')}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {festivals.map((festival) => {
          const name = t(festival.nameKey);
          const description = t(festival.descriptionKey);

          return (
            <div
              key={name}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={festival.image}
                alt={name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-amber-800">
                  {name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {festival.donationOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleDonateClick(name, amount)}
                      className="bg-amber-100 border border-amber-300 hover:bg-amber-200 text-amber-700 font-semibold py-2 px-3 text-sm rounded-lg flex items-center justify-center gap-1 transition"
                    >
                      <HandHeart size={16} /> ₹{amount}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FestivalSupport;
