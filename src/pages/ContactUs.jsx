import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen bg-yellow-50 bg-[url('/mandala-bg.png')] bg-cover bg-center py-10 px-4 md:px-20 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-bold text-amber-700 mb-4">
          Contact ISKCON Dhanbad
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Whether it's a spiritual question, seva
          inquiry, or a request to visit—connect with us using the details
          below.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200 space-y-6"
        >
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-amber-600 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p>+91 12345 67890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-amber-600 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <p>iskcondhanbad@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-amber-600 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-bold">Address</h3>
              <p>
                ISKCON Dhanbad, Near XYZ Chowk,
                <br />
                Dhanbad, Jharkhand – 826001
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-red-600 p-3 rounded-full hover:bg-red-700 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200 space-y-6"
        >
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition shadow"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-16 rounded-xl overflow-hidden shadow-xl border border-amber-100"
      >
        <iframe
          title="ISKCON Dhanbad Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234567890123!2d86.430000!3d23.800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xabcdefabcdef!2sISKCON%20Dhanbad!5e0!3m2!1sen!2sin!4v1590000000000"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;
