import React from 'react';

const BannerTwo = () => {
  return (
    <div>
    <div className="relative bg-[#ff6d05] border-y-[7px] border-[#febf51] overflow-hidden">
      {/* Background Scrolling Mahamantra */}
      <div className="absolute top-1/2 left-0 w-full animate-marquee whitespace-nowrap z-0 ">
        <div className='marquee'>
          <p className="relative text-2xl md:text-3xl font-bold  text-yellow-200 tracking-wider top-37  md:top-30 lg:top-25 [text-shadow:0_0_10px_#fef08a,0_0_30px_#fde047] ">
          HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE &nbsp; HARE RAMA HARE RAMA RAMA RAMA HARE HARE &nbsp; 
          HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE &nbsp; HARE RAMA HARE RAMA RAMA RAMA HARE HARE
        </p>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-14 md:px-20 md:py-10 text-center ">
        {/* Left Side */}
        <div className="max-w-xl space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-[#fdbe51] font-[Georgia]">
            Krishna Consciousness
          </h1>
          <p className="text-white text-lg md:text-2xl font-semibold font-[Inter]">
            The art of mindful devotion
          </p>
        </div>

        {/* Right Side */}
        <div className="text-white text-2xl md:text-4xl font-bold font-[Georgia] leading-snug drop-shadow-sm">
          CHANT <br />
          <span className=" drop-shadow-md">HARE KRISHNA</span> <br />
          &amp; <br />
          BE HAPPY
        </div>
      </div>
      {/* Bottom Border Image */}
      
    </div>

    <img
        src="/border/border.png"
        alt="bottom-border"
        className=" left-0 w-full "
      />
    </div>
  );
};

export default BannerTwo;
