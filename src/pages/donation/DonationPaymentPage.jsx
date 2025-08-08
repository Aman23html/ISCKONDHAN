import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, ChevronLeft } from 'lucide-react';

const sevaImageMap = {
  'Temple Construction': '/Donation/donation1.png',
  'Anna Daan': '/Donation/donation2.png',
  'Gita Daan': '/Donation/donation3.png',
  'Tribal Care': '/Donation/donation4.png',
  'Vaishnava Seva': '/Donation/donation5.png',
  'Nitya Seva': '/Donation/donation6.png',
  'Janmashtami':'/gallery/janm1.png',
  'Rath Yatra': '/gallery/rath1.webp',
};

const DonationPaymentPage = () => {
  const { sevaName, amount } = useParams();
  const seva = decodeURIComponent(sevaName);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('donationCart')) || [];
    const existingIndex = storedCart.findIndex(
      (item) => item.seva === seva && item.amount === parseInt(amount)
    );

    if (existingIndex !== -1) {
      storedCart[existingIndex].quantity = 1;
    } else {
      storedCart.push({
        seva,
        amount: parseInt(amount),
        quantity: 1,
        image: sevaImageMap[seva] || '/Donation/default.png',
      });
    }

    setCart(storedCart);
    localStorage.setItem('donationCart', JSON.stringify(storedCart));
  }, [seva, amount]);

  const handleQuantityChange = (index, newQty) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = parseInt(newQty);
    setCart(updatedCart);
    localStorage.setItem('donationCart', JSON.stringify(updatedCart));
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('donationCart', JSON.stringify(updatedCart));
  };

  const getTotal = () =>
    cart.reduce((total, item) => total + item.amount * item.quantity, 0);

  const goToCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-50 py-6 px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-green-700 text-sm font-medium flex items-center gap-2">
            <ShoppingCart size={18} className="text-amber-600" />
            <span className="text-center sm:text-left">
              Donation for <strong>{seva}</strong> of ₹{amount} added to your cart.
            </span>
          </div>
          <button
            onClick={() => navigate('/donate')}
            className="flex items-center text-blue-600 hover:underline text-sm gap-1"
          >
            <ChevronLeft size={16} /> Continue Seva
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-5">
            {cart.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-xl p-4 gap-4">
                <img
                  src={item.image}
                  alt={item.seva}
                  className="w-20 h-20 object-cover rounded-xl shadow-sm"
                />
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-800 text-center sm:text-left">
                    {item.seva}
                  </h3>
                  <p className="text-sm text-gray-600 text-center sm:text-left mb-2">
                    ₹{item.amount.toLocaleString()} per unit
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      className="w-20 border border-amber-300 rounded-md text-center py-1 shadow-sm"
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                    <span className="text-amber-700 font-bold text-lg">
                      ₹{(item.amount * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-500 hover:text-red-700 mt-2 sm:mt-0"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-700 mb-5 text-center">
              🧾 Cart Summary
            </h2>
            <div className="space-y-3 text-gray-700 text-base">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold pt-3 border-t border-dashed">
                <span>Total</span>
                <span>₹{getTotal().toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={goToCheckout}
              className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full text-base font-semibold shadow-lg transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPaymentPage;