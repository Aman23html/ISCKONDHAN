import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

const Courses = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const courseItems = [
    {
      title: t("courses.youthCourse.title"),
      desc: t("courses.youthCourse.desc"),
      img: "/Courses/youth-course.png",
      link: "/courses/youth",
    },
    {
      title: t("courses.gitaClasses.title"),
      desc: t("courses.gitaClasses.desc"),
      img: "/Courses/gita-classes.png",
      link: "/courses/gita",
    },
    {
      title: t("courses.sundayFeast.title"),
      desc: t("courses.sundayFeast.desc"),
      img: "/Courses/sunday-feast.png",
      link: "/courses/sunday-fest",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-amber-50 py-14 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#df7326] mb-12 font-serif drop-shadow-sm"
      >
        {t("courses.heading")}
      </motion.h2>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {courseItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold text-[#421c0f] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {item.desc}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                  4.9 <FaStar className="text-yellow-300 text-[10px] ml-1" />
                </div>
                <span className="text-gray-500 text-xs">(1,245 ratings)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-gray-400 text-sm line-through">₹500</span>
                <span className="text-orange-600 text-lg font-bold">₹0</span>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full border border-green-400">
                  100% OFF
                </span>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate(item.link)}
                className="mt-5 bg-[#df7326] text-white font-medium py-2 px-5 rounded-md hover:bg-[#c65a1f] transition duration-300 w-fit"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Border */}
      <img
        src="/border/border.png"
        alt="bottom-border"
        className="absolute bottom-0 left-0 w-full rotate-180 pointer-events-none z-[-1]"
      />
    </div>
  );
};

export default Courses;
