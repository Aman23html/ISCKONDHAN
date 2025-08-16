import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50 items-end">
      

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919876543210" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>

      {/* Message/Email Icon */}
      
    </div>
  );
};

export default FloatingIcons;
