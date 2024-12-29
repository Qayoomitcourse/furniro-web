'use client'
import Image from 'next/image';
import React from 'react';

const CartPage = () => {
  return (
    <div className="flex justify-between px-10 py-8 bg-gray-50">
      {/* Cart Items */}
      <div className="w-2/3">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-beige-100">
            <tr>
              <th className="text-left px-4 py-2 border border-gray-200">Product</th>
              <th className="text-left px-4 py-2 border border-gray-200">Price</th>
              <th className="text-left px-4 py-2 border border-gray-200">Quantity</th>
              <th className="text-left px-4 py-2 border border-gray-200">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-4 flex items-center space-x-4 border border-gray-200">
                <Image
                  src="/assets/asgard sofa.png" 
                  alt="Asgaard sofa"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <span>Asgaard sofa</span>
              </td>
              <td className="px-4 py-2 border border-gray-200">Rs. 250,000.00</td>
              <td className="px-4 py-2 border border-gray-200">
                <input
                  type="number"
                  defaultValue="1"
                  className="w-12 text-center border border-gray-300 rounded"
                />
              </td>
              <td className="px-4 py-2 border border-gray-200">Rs. 250,000.00</td>
              <td className="px-4 py-2 text-center border border-gray-200">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="gold"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="w-1/3 p-6 bg-beige-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-500">Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total</span>
          <span className="text-gold-500">Rs. 250,000.00</span>
        </div>
        <button className="w-full px-6 py-2 text-center text-white bg-black rounded-lg">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartPage
