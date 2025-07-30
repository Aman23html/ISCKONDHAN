// Gallery.jsx
import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Rath Yatra',
    images: ['/gallery/rath1.webp', '/gallery/rath2.png', '/gallery/rath3.png', '/gallery/rath4.png', '/gallery/rath5.png',  '/gallery/rath6.png', '/gallery/rath7.png', '/gallery/rath8.png'],
    desc: 'Our vibrant Temple of Chariots procession that fills the streets with devotion.',
  },
  {
    title: 'Janmashtami',
    images: ['/gallery/janm1.png', '/gallery/janm2.png', '/gallery/janm3.png'],
    desc: 'Celebration of Lord Krishna’s Divine Appearance with music, drama, and midnight kirtans.',
  },
  {
    title: 'Youth Fest',
    images: ['/gallery/youth1.jpg', '/gallery/youth2.jpg', '/gallery/youth3.jpg'],
    desc: 'Energetic cultural programs and workshops for youth and children.',
  },
  {
    title: 'Deep Daan',
    images: ['/gallery/deep1.jpg', '/gallery/deep2.jpg', '/gallery/deep3.jpg'],
    desc: 'Festival of lights in Kartika month—offering ghee lamps and serenity.',
  },
  {
    title: 'Gita Daan',
    images: ['/gallery/gita1.jpg', '/gallery/gita2.jpg'],
    desc: 'Distribution of Bhagavad-Gita to devotees and spiritual seekers.',
  },
];

const Gallery = () => {
  return (
    <div className="bg-yellow-50 min-h-screen py-12 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl text-amber-700 font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Event Gallery
      </motion.h2>

      <div className="space-y-16">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <h3 className="text-3xl font-bold text-amber-600 mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-4">{event.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.images.map((src, j) => (
                <motion.img
                  key={j}
                  src={src}
                  alt={`${event.title} ${j + 1}`}
                  className="rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
