import React from 'react'

const FestivalSupport = () => {
  return (
    <div className='text-center py-12'>
      <h2 className='text-4xl font-extrabold text-orange-700 mb-6'>🎉 Festival Support</h2>
      <p className='text-lg text-gray-800 mb-4'>
        Support our festivals and help us spread joy and spirituality!
      </p>
      <p className='text-gray-600 mb-8'>
        Your contributions will go towards organizing vibrant celebrations, cultural programs, and community outreach initiatives.
      </p>

      <p className='text-gray-500 mb-4'>
        Your support can make a real difference in the lives of many. Thank you for your generosity!
      </p>



      <div>
        Support in Festival like:
        <ul className='list-disc list-inside text-left text-gray-700'>
          <li>Rath Yatra</li>
          <li>Janmashtami Festival</li>
          <li>Radha Ashtami</li>
        </ul>
      </div>

        <button className='bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-200'>
          Donate Now
        </button>
    </div>
  )
}

export default FestivalSupport