import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useLocation } from 'react-router-dom';
import config from "../config.json"; 
const DonationForm = () => {
  const { state } = useLocation();
  console.log(state.amount)
  const [formData, setFormData] = useState({
    name: "",
    pan: "",
    mobile: "",
    email: "",
    pincode: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDonate = async (e) => {
e.preventDefault()
    try {
        // Create order on backend
        const orderRes = await fetch("http://localhost:5000/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: state.amount })
        });

        const orderData = await orderRes.json();

        const options = {
          key: config.RAZORPAY_KEY_ID,
          amount: state.amount,
          currency: "INR",
          name: "ISKCON Dhanbad",
          description: "Donation ",
          order_id: orderData.id,
          handler: function (response) {
            fetch("/api/payment-verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response)
            });
          },
          prefill:formData,
          notes: formData,
          theme: {
            color: "#3399cc"
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    } catch (err) {
        console.error(err);
    }
};


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vf8sbnj",   // EmailJS Service ID
        "template_lh5vxer",  // EmailJS Template ID
        formData,
        "XJxHi708DnIrNQU8A"    // EmailJS Public Key
      )
      .then(
        () => {
          alert("🙏 धन्यवाद! Your details have been sent successfully.");
          setFormData({
            name: "",
            pan: "",
            mobile: "",
            email: "",
            pincode: "",
            address: "",
          });
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ff6b00] via-[#ff8533] to-[#ff6b00] px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ff6b00] mb-6">
          🙏 Donation 🙏
        </h2>

        {/* Spiritual Quote */}
        <p className="text-center text-yellow-700 text-sm italic mb-4">
          "Service to the Lord is the highest duty" — Srila Prabhupada
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              required
            />
          </div>

          {/* PAN */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              PAN Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="pan"
              placeholder="Enter your PAN number"
              value={formData.pan}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              required
            />
          </div>

          {/* PIN Code */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              PIN Code <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="pincode"
              placeholder="Enter your PIN code"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ff6b00] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#e65c00] hover:scale-105 transition-transform"
          onClick={handleDonate}
          >
            Donate 
          </button>
        </form>

        {/* Decorative Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-30"></div>
      </div>
    </div>
  );
};

export default DonationForm;
