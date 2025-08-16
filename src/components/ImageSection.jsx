import React from "react";
import { useTranslation } from "react-i18next";

const ImageContentSection = () => {
  const { t } = useTranslation();

  // Fetch leaders list from translation file
  const leaders = t("leaders.list", { returnObjects: true });

  // Add image paths corresponding to leaders
  const leaderImages = [
    "/Prabhuji/pr1.png",
    "/Prabhuji/pr2.png" // replace with correct image
  ];

  return (
    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-orange-50 to-yellow-100">
      {/* Background Mandala */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/border/dra2.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* Title */}
      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#d97706] drop-shadow-sm">
          ✨ {t("leaders.sectionTitle")} ✨
        </h2>
        
      </div>

      {/* Leaders Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-5 bg-white/70 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:shadow-2xl transition-transform hover:scale-105"
          >
            {/* Image with mandala */}
            <div className="relative w-64 h-72 flex items-center justify-center">
             
              <img
                src={leaderImages[index]}
                alt={leader.name}
                className="relative w-56 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Details */}
            <div>
              <h3 className="text-2xl font-bold text-[#b45309] tracking-wide">
                {leader.name}
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageContentSection;
