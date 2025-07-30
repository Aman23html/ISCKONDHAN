import React, { useState } from 'react';

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState('instagram');

  const content = {
    instagram: {
      img: '/SocialMedia/insta.png',
      link: 'https://instagram.com/iskcondhanbadofficial',
      embeds: Array(24).fill(
        `<iframe src="https://www.instagram.com/p/C8PSTF6RnF9/embed" width="100%" height="400" frameborder="0" allowfullscreen></iframe>`
      ),
    },
     facebook: {
    img: '/SocialMedia/face.png',
    link: 'https://www.facebook.com/iskcondhanbadofficial',
    embeds: [
      `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fiskcondhanbadofficial%2Fvideos%2F1750356969050616%2F&show_text=true&width=560&t=0" width="560" height="429" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
      `<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/iskcondhanbadofficial/posts/849196140200274&width=500" width="100%" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen></iframe>`,
    ],
  },
    youtube: {
      img: '/SocialMedia/yt.png',
      link: 'https://youtube.com/@iskcondhanbad',
      embeds: [
        // Replace these video IDs with actual recent ones
        "https://www.youtube.com/embed/z_KvKshWfbQ",
        "https://www.youtube.com/embed/TLwWnVEqcsc",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        "https://www.youtube.com/embed/EWEyVE21MTo",
        
      ],
    },
  };

  return (
    <div className="relative my-10 md:my-20 py-16 px-6 md:px-20 bg-orange-100 bg-cover bg-center text-center overflow-hidden">
      {/* Background Logo Tiling */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('https://c.animaapp.com/md8w42lwOfBxGO/img/frame-180.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ff6d05] drop-shadow-lg mb-10">
          SOCIAL MEDIA
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {['instagram', 'facebook', 'youtube'].map((platform) => (
            <button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`flex items-center gap-3 px-6 py-3 rounded-md shadow-md transition-transform font-bold text-lg ${
                activeTab === platform
                  ? 'scale-105 bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                  : 'bg-white text-black'
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
                className="w-5 h-5"
              />
              {platform.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Preview Image */}
        <div className="flex justify-center items-center mb-10">
          <a
            href={content[activeTab].link}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-full h-[450px] overflow-y-auto rounded-lg shadow-md"
          >
            <img
              src={content[activeTab].img}
              alt={`${activeTab} preview`}
              className="w-full object-cover rounded-md"
            />
          </a>
        </div>

        {/* Embed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[500px] overflow-y-scroll px-3 py-6 border-4 border-yellow-400 rounded-lg bg-white shadow-inner">
          {content[activeTab].embeds.map((embed, idx) =>
            activeTab === 'youtube' ? (
              <iframe
                key={idx}
                src={embed}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[250px] rounded-md shadow-md"
              ></iframe>
            ) : (
              <div
                key={idx}
                className="w-full h-[400px] rounded overflow-hidden shadow-md"
                dangerouslySetInnerHTML={{ __html: embed }}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
