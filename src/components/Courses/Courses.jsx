import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Courses = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const courseItems = [
    {
      title: t('courses.youthCourse.title'),
      desc: t('courses.youthCourse.desc'),
      img: '/Courses/youth-course.png',
      link: '/courses/youth',
    },
    {
      title: t('courses.gitaClasses.title'),
      desc: t('courses.gitaClasses.desc'),
      img: '/Courses/gita-classes.png',
      link: '/courses/gita',
    },
    {
      title: t('courses.sundayFeast.title'),
      desc: t('courses.sundayFeast.desc'),
      img: '/Courses/sunday-feast.png',
      link: '/courses/sunday-fest',
    },
  ];

  return (
    <div className="relative bg-white py-16 px-4 md:px-12 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold text-[#df7326] mb-12 font-serif drop-shadow-md"
      >
        Courses We Offer
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courseItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-amber-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                <h3 className="text-xl font-bold text-[#421c0f] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className='pt-1 flex gap-2'>
                <div className='line-through text-blue-300 text-sm mb-2'>
                  RS 500
                </div>
                <div className='text-[#df7326] text-sm ml-2'>
                  RS 0
                </div>
              </div>
              <button
                onClick={() => navigate(item.link)}
                className="mt-6 bg-[#df7326] text-white font-medium py-2 px-5 rounded-md hover:bg-[#c65a1f] transition duration-300"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <img
        src="/border/border.png"
        alt="bottom-border"
        className="absolute bottom-0 left-0 w-full rotate-180 pointer-events-none z-[-1]"
      />
    </div>
  );
};

export default Courses;
