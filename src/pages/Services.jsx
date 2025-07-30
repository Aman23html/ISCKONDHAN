import React from "react";
import { GiOpenBook, GiMeditation } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Youth Course",
    description: "Specially designed for students & youth to cultivate values, discipline, and devotion.",
    icon: <PiStudent className="text-4xl text-blue-500" />,
    path: "/courses/youth",
  },
  {
    title: "Gita Classes",
    description: "Systematic and simplified understanding of Bhagavad Gita with practical application.",
    icon: <GiOpenBook className="text-4xl text-amber-600" />,
    path: "/courses/gita",
  },
  {
    title: "Sunday Fest",
    description: "Weekly festival with spiritual discourse, kirtan, prasadam, and joyful association.",
    icon: <GiMeditation className="text-4xl text-purple-500" />,
    path: "/courses/sunday-fest",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 py-16 px-5 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-700">Courses We Offer</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => navigate(course.path)}
            className="cursor-pointer bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center hover:shadow-amber-400 transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="mb-4">{course.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">{course.title}</h3>
            <p className="text-center text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button
          className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-amber-700 transition-all"
          onClick={() => navigate("/contact")}
        >
          Enroll / Inquire Now
        </button>
      </div>
    </div>
  );
};

export default Services;
