import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const aboutImages = [
  "/about/temple1.png",
  "/about/temple2.png",
  "/about/temple3.png",
  "/about/temple4.png",
  "/about/temple5.png",
  "/about/temple6.png",
];

const About = () => {
  return (
    <div
      className="bg-yellow-50 text-gray-800 min-h-screen px-4 md:px-16 py-10 relative overflow-hidden"
      style={{
        backgroundImage: "url('/mandala.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "600px",
        backgroundPosition: "top right",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-amber-700 mb-4">
          About ISKCON Dhanbad
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          A spiritual sanctuary in the coal capital of India, ISKCON Dhanbad brings the essence of devotion through sacred teachings, prasadam, festivals, and loving service.
        </p>
      </div>

      {/* Top Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {aboutImages.slice(0, 3).map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Temple view ${index + 1}`}
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Our Mission */}
      <div className="bg-white border border-amber-300 p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-amber-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We are a branch of the International Society for Krishna Consciousness (ISKCON), founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. ISKCON Dhanbad strives to spread Krishna consciousness by nurturing spiritual values and providing devotional experiences.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Daily Bhagavad Gita classes & morning programs</li>
          <li>Krishna Prasadam for all visitors</li>
          <li>Festivals: Janmashtami, Rath Yatra, Gaura Purnima, etc.</li>
          <li>Spiritual outreach and book distribution</li>
          <li>Youth & Children’s spiritual engagement programs</li>
        </ul>
      </div>

      {/* Mid Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {aboutImages.slice(3, 6).map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Temple view ${index + 4}`}
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Founder Message */}
      <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl py-10 px-6 shadow-lg mb-12 text-center">
        <blockquote className="italic text-xl text-gray-800 font-medium max-w-2xl mx-auto">
          "Chant Hare Krishna and be happy. The goal of life is to return back to Godhead and serve Krishna eternally."
        </blockquote>
        <p className="mt-4 text-amber-600 font-semibold">– Srila Prabhupada</p>
      </div>

      {/* Contact & Socials */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 text-center mb-12">
        <h3 className="text-2xl font-bold text-amber-700 mb-4">Connect with Us</h3>
        <div className="flex justify-center gap-6 text-amber-700 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
