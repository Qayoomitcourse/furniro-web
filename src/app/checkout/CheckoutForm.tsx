"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CartItem } from "../../store/features/cart";
import Image from "next/image";
import Link from "next/link";

const CheckoutForm = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate the subtotal and total price
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal; // You can add taxes or discounts here if needed

  return (
    <form className="max-w-lg mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold">Billing Details</h2>

      {/* Cart Items Section */}
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <span>{item.name}</span>
              </div>
              <div>
                <span>Rs. {item.price * item.quantity}</span>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      {/* Subtotal and Total Section */}
      <div className="mt-6">
        <div className="flex justify-between text-lg font-bold">
          <span>Subtotal</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-2">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>
      </div>

      {/* Billing Details Form */}
      <div className="space-y-4 mt-6">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
        </div>

        {/* Additional billing fields */}
        <div className="space-y-4">
          {/* Add other fields like Company, Country, Address, etc., similar to the original form */}

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Link
          href="/order-confirmation"
          className="w-full text-center bg-primary text-white py-3 rounded-md"
        >
          Place Order
        </Link>
      </div>
    </form>
  );
};

export default CheckoutForm;
