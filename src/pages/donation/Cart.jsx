// components/Cart.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { useCart } from '../../components/context/CartContext'; // 🔁 Use context!

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (index, value) => {
    updateQuantity(index, Math.max(1, value));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">🛍️ Your Donation Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-gray-500 text-center mt-20">Your cart is empty.</div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white shadow rounded-md"
              >
                <div>
                  <h3 className="font-semibold text-lg">{item.sevaName}</h3>
                  <p className="text-sm text-gray-500">₹{item.amount} x {item.quantity}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    className="w-16 border rounded px-2 py-1"
                  />
                  <Trash2
                    className="text-red-500 cursor-pointer"
                    onClick={() => removeFromCart(index)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ₹{getTotal()}</p>
            <Button
              onClick={() => navigate('/payment')}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white"
            >
              Proceed to Payment
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
