import React, { useState } from "react";
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
  // ✅ Google Form submission endpoint
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSdUnMhXotqS0LII6IdRTFabRleaGcEnpWRVq3bR5K4RLqwXhA/formResponse";

  // ✅ Replace with actual entry IDs from your Google Form
  const ENTRY_NAME = "entry.448070324"; // Name field
  const ENTRY_EMAIL = "entry.989235959"; // Email field
  const ENTRY_PHONE = "entry.118288142"; // Phone field
  const ENTRY_MESSAGE = "entry.1773728075"; // Message field

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append(ENTRY_NAME, formData.name);
    data.append(ENTRY_EMAIL, formData.email);
    data.append(ENTRY_PHONE, formData.phone);
    data.append(ENTRY_MESSAGE, formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: data,
        mode: "no-cors", // Required for Google Form
      });

      alert("✅ Successfully submitted! Thank you for contacting ISKCON Dhanbad.");
      setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
    } catch (error) {
      alert("❌ There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 bg-[url('/mandala-bg.png')] bg-cover bg-center py-10 px-4 md:px-20 text-gray-800">
      {/* Header */}
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

      {/* Contact Section - Centered */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl w-full">
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
                <p>+91 95702 76337</p>
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
                  ISKCON Dhanbad, Jagjivan Nagar,
                  <br />
                  Dhanbad, Jharkhand – 826003
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/iskcondhanbadofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/ISKCONDhanbadOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/ISKCONDhanbadOfficial"
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
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200 space-y-6"
          >
            <div>
              <label className="block font-semibold mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
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
