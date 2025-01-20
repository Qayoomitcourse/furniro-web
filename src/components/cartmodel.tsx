import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import { removeFromCart } from '../app/store/features/cart';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const CartModel = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={`absolute p-4 w-[417px] shadow-md bg-white rounded-[15px]`}>
      <div className="p-4 border-b border-gray-500 flex justify-between items-center">
        <h2 className={`${poppins.className} text-[24px] font-bold`}>Shopping Cart</h2>
        <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800 focus:outline-none">
          <Image src={'/assets/Vector.png'} alt="" width={16} height={19} />
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className={`${poppins.className} text-[24px] mt-10 items-center font-bold`}>
          Cart is empty
        </div>
      ) : (
        <div className="flex-1 p-4 overflow-y-auto">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Image src={item.image} alt={item.name} width={108} height={105} className="w-[108px] h-[105px]" />
                <div>
                  <h3 className={`${poppins.className} text-[16px] font-bold`}>{item.name}</h3>
                  <p>
                    <span className={`${poppins.className} text-[16px] font-bold`}>
                      {item.quantity}{' '}
                      <span className={`${poppins.className} text-[16px] ml-4 mr-4 font-bold`}> X </span>{' '}
                    </span>
                    <span className={`${poppins.className} text-[16px] font-bold text-[#B88E2F]`}>
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-gray-500 hover:text-gray-800">
                <div className="w-6 h-6 bg-gray-300 text-center text-white">X</div>
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="p-4 mt-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className={`${poppins.className} text-[16px] font-bold`}>Subtotal</span>
          <span className={`${poppins.className} text-[16px] font-bold text-[#B88E2F]`}>
            Rs.{' '}
            {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
          </span>
        </div>
        <div className="flex space-x-4 text-[16px]">
          <Link href={'/cart'} className="flex-1 px-4 py-2 border rounded-full text-black hover:bg-[#B88E2F] hover:text-white">
            View Cart
          </Link>
          <Link href={'/checkout'} className="flex-1 px-4 py-2 border rounded-full text-black hover:bg-[#B88E2F] hover:text-white">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
