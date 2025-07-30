// components/PaymentPortal.jsx
import React from 'react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const PaymentPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">🙏 Finalize Your Donation</h2>
      <p className="mb-6 text-gray-600">
        Thank you for choosing to support our Seva. Please select a payment method below:
      </p>

      <div className="space-y-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Pay with Razorpay
        </Button>
        <Button className="w-full border">Pay via UPI QR</Button>
        <Button className="w-full border">Pay using BHIM App</Button>
      </div>

      <Button
        onClick={() => navigate('/')}
        className="mt-6 text-sm text-gray-500 underline"
        variant="ghost"
      >
        ← Back to Home
      </Button>
    </div>
  );
};

export default PaymentPortal;
