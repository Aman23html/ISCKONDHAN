import React, { useState } from 'react';

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState('instagram');

  const socialLinks = {
    instagram: {
      img: '/SocialMedia/insta.png',
      link: 'https://instagram.com/iskcondhanbadofficial',
      label: 'Page',
    },
    facebook: {
      img: '/SocialMedia/face.png',
      link: 'https://www.facebook.com/iskcondhanbadofficial',
      label: 'Page',
    },
    youtube: {
      img: '/SocialMedia/yt.png',
      link: 'https://youtube.com/@iskcondhanbad',
      label: 'Channel',
    },
  };

  return (
    <div className="relative my-10 md:my-20 py-16 px-6 md:px-20 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('https://c.animaapp.com/md8w42lwOfBxGO/img/frame-180.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }}
      ></div>

      {/* Foreground */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff6d05] mb-12 text-center tracking-wide drop-shadow-sm">
          Follow Us on Social Media
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.keys(socialLinks).map((platform) => (
            <button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-md transition-all font-semibold text-lg border ${
                activeTab === platform
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white scale-105 border-transparent shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              <img
                src={
                  platform === 'instagram'
                    ? '/logo/instagram-logo.png'
                    : platform === 'facebook'
                    ? '/logo/facebook-logo.png'
                    : '/logo/youtube-logo.png'
                }
                alt={platform}
                className="w-6 h-6"
              />
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        {/* Preview Card */}
        <div className="flex justify-center">
          <a
            href={socialLinks[activeTab].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.03] hover:shadow-2xl transition duration-300 bg-white"
          >
            <img
              src={socialLinks[activeTab].img}
              alt={`${activeTab} preview`}
              className="w-full h-[400px] object-contain bg-white p-4 rounded-t-2xl"
            />
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-semibold py-4 text-center">
              Visit our{' '}
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{' '}
              {socialLinks[activeTab].label}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
