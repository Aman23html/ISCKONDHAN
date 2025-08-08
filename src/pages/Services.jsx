import React from "react";
import { GiOpenBook, GiMeditation } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const courses = [
    {
      title: t("services.youthCourse.title"),
      description: t("services.youthCourse.description"),
      icon: <PiStudent className="text-4xl text-blue-500" />,
      path: "/courses/youth",
    },
    {
      title: t("services.gitaClasses.title"),
      description: t("services.gitaClasses.description"),
      icon: <GiOpenBook className="text-4xl text-amber-600" />,
      path: "/courses/gita",
    },
    {
      title: t("services.sundayFest.title"),
      description: t("services.sundayFest.description"),
      icon: <GiMeditation className="text-4xl text-purple-500" />,
      path: "/courses/sunday-fest",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 py-16 px-5 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-700">
        {t("services.heading")}
      </h2>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => navigate(course.path)}
            className="cursor-pointer bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center hover:shadow-amber-400 transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="mb-4">{course.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
              {course.title}
            </h3>
            <p className="text-center text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button
          className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-amber-700 transition-all"
          onClick={() => navigate("/contact")}
        >
          {t("services.enrollButton")}
        </button>
      </div>
    </div>
  );
};

export default Services;
