import React from 'react';

const HeroTop = () => {
  return (
    <div
      className="w-full h-auto py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center
                 px-4 sm:px-8 md:px-12 lg:px-[150px]
                 bg-no-repeat bg-cover bg-center 
                top-0 left-0 z-50"
      style={{
        backgroundImage: "url('/border/border.png')",
      }}
    >
      {/* Social Icons Section */}
      <div className="flex justify-center sm:justify-start gap-4 mb-2 sm:mb-0">
        <a href="https://wa.me/919570276337" target="_blank" rel="noopener noreferrer">
          <img
            src="/logo/whatsapp-logo.png"
            alt="WhatsApp"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://www.youtube.com/ISKCONDhanbadOfficial" target="_blank" rel="noopener noreferrer">
          <img
            src="/logo/youtube-logo.png"
            alt="YouTube"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://www.instagram.com/ISKCONDhanbadOfficial" target="_blank" rel="noopener noreferrer">
          <img
            src="/logo/instagram-logo.png"
            alt="Instagram"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://www.facebook.com/ISKCONDhanbadOfficial" target="_blank" rel="noopener noreferrer">
          <img
            src="/logo/facebook-logo.png"
            alt="Facebook"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      {/* Phone Section */}
      <div className="flex justify-center sm:justify-end items-center gap-2 ">
        <img
          src="/logo/call-logo.png"
          alt="Phone"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-2xl text-[#ff6d05]">
          +91 95702 76337
        </span>
      </div>
    </div>
  );
};

export default HeroTop;
