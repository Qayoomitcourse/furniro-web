'use client'
import React from "react";
import Image from "next/image";
import Features from "../../components/Features";
import Tophead from "../../components/Tophead";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { removeFromCart, updateQuantity } from "@/app/store/features/cart";
import Link from "next/link";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <>
      <Tophead pageName="Cart" />
      <div className="flex flex-col lg:flex-row items-start justify-center gap-6 p-6 mt-12 mb-12">
        {/* Table Section */}
        <div className="w-full lg:w-[817px] overflow-x-auto">
          <table className="w-full border-collapse text-left min-w-[600px]">
            <thead className="bg-[#F9F1E7]">
              <tr>
                <th className="p-4 border-b">Product</th>
                <th className="p-4 border-b">Price</th>
                <th className="p-4 border-b">Quantity</th>
                <th className="p-4 border-b">Subtotal</th>
                <th className="p-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="p-4">Rs. {item.price}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-16 p-2 border rounded text-center"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td className="p-4">Rs. {item.price * item.quantity}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Total Section */}
        <div className="w-full lg:w-[393px] h-auto lg:h-[390px] bg-[#F9F1E7] p-6 rounded-md shadow-md flex flex-col justify-center">
          <h3 className="font-semibold mb-6 w-full text-center text-[24px] sm:text-[32px]">
            Cart Totals
          </h3>
          <div className="space-y-4 px-6 mt-6">
            {/* Subtotal */}
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-[#9F9F9F]">
                Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
              </span>
            </div>
            {/* Total */}
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">
                Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
              </span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="w-[222px] m-auto mt-8 text-black border-2 text-center border-black py-2 px-4 rounded-md hover:bg-primary hover:text-white transition"
          >
            Check Out
          </Link>
        </div>
      </div>
      <Features />
    </>
  );
};

export default CartPage;
