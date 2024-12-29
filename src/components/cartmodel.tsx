import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {  Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'], // Specify the subset (optional)
    weight: ['400', '600', '700'], // Choose specific font weights (optional)
    style: ['normal', 'italic'], // Add styles if needed
});



const CartModel = () => {
    const cartItems = true

    const [isOpen, setIsOpen] = useState(false);
      const router = useRouter();
    
      const toggleCart = () => {
        setIsOpen(!isOpen);
      };
    
      const openCartPage = () => {
        router.push('/cart');
      };
    

  return (
    <div className='absolute p-4 w-[417px] h-[600] shadow-md bg-white rounded-[15px] shadow-black transition-transform -z-50'>
        <div className="p-4 border-b border-spacing-8 border-gray-500 flex justify-between items-center">
          <h2 className={`${poppins.className} text-[24px] font-bold`}>Shopping Cart</h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <Image src={'/assets/Vector.png'} alt='' width={16} height={19}/>
          </button>
        </div>
      {!cartItems ? (
        <div className={`${poppins.className} text-[24px] mt-10 items-center font-bold`}>
            Cart is empty
        </div>
      ) : (
        <div>
            <div className="flex-1 p-4 overflow-y-auto">
          {/* Example Item */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
            <Image src={'/assets/Asgaard sofa.png'} alt='img' width={108} height={105} className='w-[108px] h-[105px]'/>
    
              <div className=' gap-4'>
                
                <h3 className={`${poppins.className} text-[16px] font-bold`}>Asgaard Sofa</h3>
                <p ><span className={`${poppins.className} text-[16px] font-bold`}>1 <span className={`${poppins.className} text-[16px] ml-4 mr-4 font-bold`}>   X </span> </span>  <span className={`${poppins.className} text-[16px] font-bold text-[#B88E2F]`}>Rs. 250,000.00 </span></p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
              <div className=' w-6 h-6 bg-gray-300 text-center text-white'>X</div>
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
            <Image src={'/assets/sofa2.png'} alt='img' width={108} height={105} className='w-[108px] h-[105px]'/>
    
              <div className=' gap-4'>
                
                <h3 className={`${poppins.className} text-[16px] font-bold`}>Casaliving Wood</h3>
                <p ><span className={`${poppins.className} text-[16px] font-bold`}>1 <span className={`${poppins.className} text-[16px] ml-4 mr-4 font-bold`}>   X </span> </span>  <span className={`${poppins.className} text-[16px] font-bold text-[#B88E2F]`}>Rs. 270,000.00 </span></p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
              <div className=' w-6 h-6 bg-gray-300 text-center text-white'>X</div>
            </button>
          </div>
        </div>

        </div>
      )}
{/* Cart Footer */}
<div className="p-4 mt-20 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className={`${poppins.className} text-[16px] font-bold`}>Subtotal</span>
            <span className={`${poppins.className} text-[16px] font-bold text-[#B88E2F]`}>Rs. 520,000.00</span>
          </div>
          <div className={`${poppins.className} flex space-x-4 text-[16px]`}>
            <button
              onClick={openCartPage}
              className="flex-1 px-4 py-2  text-black  border border-gray-500 rounded-full text-sm hover:bg-[#B88E2F] focus:outline-non hover:text-white"
            >
               Cart
            </button>
            <button className="flex-1 px-4 py-2 border text-black border-gray-500 rounded-[40px] text-sm hover:bg-[#B88E2F] hover:text-white">
              Checkout
            </button>
            <button className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-full text-sm hover:bg-[#B88E2F] hover:text-white">
              Comparasion
            </button>
          </div>
        </div>

    </div>
  )
}

export default CartModel
