'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import signin from '../../public/assets/sign-in.png';
import search from '../../public/assets/search.png';
import hearticon from '../../public/assets/heart.png';
import cart from '../../public/assets/cart.png';
import CartModel from './cartmodel';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store/store';

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = true;

  // Reference for the cart container
  const cartRef = useRef<HTMLDivElement>(null);

  // Select cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setProfileOpen((prev) => !prev);
    }
  };

  // Close the cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex space-x-6 text-lg text-black">
      <div className="flex items-center relative space-x-4 justify-between w-full sm:w-auto sm:justify-end">
        {/* Profile Icon */}
        <div className="relative">
          <Image
            src={signin}
            alt="signin"
            width={30}
            height={30}
            onClick={handleProfile}
            className="cursor-pointer"
          />
          {isLoggedIn && isProfileOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-md p-4 rounded-md text-sm z-10">
              <Link href="/profile" className="block mb-2 hover:underline">
                Profile
              </Link>
              <span
                onClick={() => setProfileOpen(false)}
                className="cursor-pointer hover:underline"
              >
                Logout
              </span>
            </div>
          )}
        </div>

        {/* Search Icon */}
        <Link href="/search">
          <Image src={search} alt="search" width={30} height={30} />
        </Link>

        {/* Wishlist Icon */}
        <Link href="/wishlist">
          <Image src={hearticon} alt="wishlist" width={23.33} height={18.67} />
        </Link>

        {/* Cart Icon */}
        <div className="relative" ref={cartRef}>
          <Image
            src={cart}
            alt="cart"
            width={30}
            height={30}
            className="cursor-pointer z-[9999]"
            onClick={() => setCartOpen((prev) => !prev)}
          />
          {/* Display the number of cart items */}
          <span className="absolute -top-4 -right-4 z-20 bg-[#D4AF37] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length} {/* Dynamically display the cart count */}
          </span>
          {isCartOpen && <CartModel />}
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
