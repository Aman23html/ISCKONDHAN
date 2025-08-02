import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sevaImageMap = {
  'Temple Construction': '/Donation/donation1.png',
  'Anna Daan': '/Donation/donation2.png',
  'Gita Daan': '/Donation/donation3.png',
  'Tribal Care': '/Donation/donation4.png',
  'Vaishnava Seva': '/Donation/donation5.png',
  'Nitya Seva': '/Donation/donation6.png',
};

const DonationPaymentPage = () => {
  const { sevaName, amount } = useParams();
  let seva=decodeURIComponent(sevaName);
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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <p className="text-green-700 text-sm font-medium">
            ✅ Donation for <strong>{seva}</strong> of ₹{amount} added to your cart.
            <button
              onClick={() => navigate('/donate')}
              className="ml-4 text-blue-600 underline"
            >
              Continue Seva
            </button>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center bg-white shadow-sm rounded-lg p-4">
                <img
                  src={item.image}
                  alt={item.seva}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.seva}</h3>
                  <p className="text-sm text-gray-600">₹{item.amount} per unit</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    className="w-16 border rounded-md text-center py-1"
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                  />
                  <div className="text-amber-700 font-semibold text-lg">
                    ₹{item.amount * item.quantity}
                  </div>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Total</span>
                <span>₹{getTotal().toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={goToCheckout}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
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
