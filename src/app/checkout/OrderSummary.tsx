"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CartItem } from "../store/features/cart";

const OrderSummary = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate the subtotal and total price
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal; // You can add taxes or discounts here if needed

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between text-[24px] font-medium">
        <h2>Product</h2>
        <h2>Subtotal</h2>
      </div>

      {/* Product and Subtotal */}
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex justify-between items-center">
              <span className="text-sm">
                <span className="text-[#9F9F9F]">{item.name}</span> x {item.quantity}
              </span>
              <span className="font-medium">Rs. {item.price * item.quantity}</span>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}

        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span className="text-sm">Subtotal</span>
          <span className="font-medium">Rs. {subtotal}</span>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-sm">Total</span>
          <span className="text-lg font-bold text-primary text-[#B88E2F]">Rs. {total}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div>
        <hr className="border-gray-300 mb-4" />
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="directBankTransfer"
              name="payment"
              value="Direct Bank Transfer"
              className="w-5 h-5 text-black focus:ring-0"
              defaultChecked
            />
            <label htmlFor="directBankTransfer" className="ml-3 text-sm font-medium">
              Direct Bank Transfer
            </label>
          </div>
          <p className="text-xs text-gray-600">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
          <div className="flex items-center">
            <input
              type="radio"
              id="cashOnDelivery"
              name="payment"
              value="Cash On Delivery"
              className="w-5 h-5 text-black focus:ring-0"
            />
            <label htmlFor="cashOnDelivery" className="ml-3 text-sm font-medium">
              Cash On Delivery
            </label>
          </div>
        </div>
      </div>

      {/* Privacy Policy */}
      <p className="text-xs text-gray-600">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
        <a href="#" className="text-blue-600 underline">
          privacy policy
        </a>.
      </p>

      {/* Place Order Button */}
      <button
        type="submit"
        className="w-[318px] ml-16 border-black border-2 py-3 px-6 text-black rounded-md hover:bg-primary hover:text-white transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
