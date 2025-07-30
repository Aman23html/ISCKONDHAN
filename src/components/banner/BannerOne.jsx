import React from 'react'

const BannerOne = () => {
  return (
    <div>
      <div className="w-full  bg-[#ff6d05] border-y-[7px] border-[#febf51] py-0 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Left - Devotional Message */}
      <div className="text-center lg:text-left max-w-3xl">
        <p className="text-white text-lg sm:text-xl font-semibold leading-relaxed">
          Through selfless devotion to Lord Krishna, one finds fulfillment
          beyond fleeting material pleasures, fostering a connection with the
          divine that promises enduring joy and peace in this life and the
          hereafter.
        </p>
      </div>

      {/* Right - Title + Subtext */}
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
        <h2 className="text-[#fdbe51] text-3xl sm:text-4xl font-bold font-[Georgia] whitespace-nowrap">
          Krishna Consciousness
        </h2>
        <p className="text-white text-lg font-semibold font-inter mt-2">
          the art of spiritual living
        </p>
      </div>

    </div>
    </div>
  )
}

export default BannerOne
