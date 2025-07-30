import React from 'react';

const FootTop = () => {
  return (
    <div className="relative bg-[#ff6d05] text-white py-1 px-4 md:px-20 overflow-hidden">
      {/* 🔁 Mahamantra Marquee */}
      <div className="relative top-0 left-0 w-full animate-marquee whitespace-nowrap z-0  ">
        <div className='marquee'>
          <p className="relative text-2xl md:text-3xl font-bold  text-yellow-200 tracking-wider  [text-shadow:0_0_10px_#fef08a,0_0_30px_#fde047] ">
          HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE &nbsp; HARE RAMA HARE RAMA RAMA RAMA HARE HARE &nbsp; 
          HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE &nbsp; HARE RAMA HARE RAMA RAMA RAMA HARE HARE
        </p>
        </div>
    </div>

      {/* 🔶 Footer Top Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        
        {/* ISKCON Info */}
        <div className="max-w-xl space-y-2 text-[#fdbe51] flex flex-col items-center">
          <h3 className="text-2xl font-bold">ISKCON DHANBAD</h3>
          <h4 className="text-2xl font-bold">JAGJIVAN NAGAR, DHANBAD</h4>
          <span>
            <p className="text-sm text-white font-semibold">
            Bunglow no 23, Old Doctor’s colony, in front of BJP Office (Raj Sinha), 
            Near Central Hospital, Nutandih,
            Jagjivan Nagar, Dhanbad, Jharkhand - 826003
          </p>
          </span>
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#fdbe51]">FOLLOW US :</h3>
          <div className="space-y-1 text-white text-lg font-bold flex gap-5 flex-row md:flex-col justify-center items-center">
            <a href="https://instagram.com/iskcondhanbadofficial" target="_blank" rel="noopener noreferrer" className="hover:underline">
              INSTAGRAM
            </a>
            <a href="https://facebook.com/iskcondhanbadofficial" target="_blank" rel="noopener noreferrer" className="hover:underline">
              FACEBOOK
            </a>
            <a href="https://youtube.com/@iskcondhanbad" target="_blank" rel="noopener noreferrer" className="hover:underline">
              YOUTUBE
            </a>
          </div>
        </div>

        {/* Donate Button */}
        <div>
          <a
            href="/donate"
            className="inline-block px-6 py-2 text-sm font-semibold text-[#ff630f] bg-gradient-to-b from-white to-gray-400 rounded-full shadow-md hover:scale-105 transition"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default FootTop;
