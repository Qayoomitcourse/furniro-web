'use client';

import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import arrow from '../../../../public/assets/arrow.png'
import productImg1 from '../../../../public/assets/Group 94.png'
import productImg2 from '../../../../public/assets/Group 96.png'
import productImg3 from '../../../../public/assets/Group 97.png'
import productImg4 from '../../../../public/assets/Group 98.png'
import asgaardsofa from '../../../../public/assets/Asgaard sofa.png'
import stars from '../../../../public/assets/stars.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import TabsComponent from '@/components/producttabs';
import RelatedProducts from '@/components/relatedproduct';




const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(asgaardsofa)
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple'); // Default color

  const thumbnails = [
    { id: 1, src: productImg1 },
    { id: 2, src: productImg2 },
    { id: 3, src: productImg3 },
    { id: 4, src: productImg4 }
  ];

  return (
    <div className=" mt-20">
      {/* Breadcrumb */}
      <div className="w-full mt-10 ml-[50px] gap-3 flex items-center  h-[100px] bg-[#F9F1E7]">
        <span className="text-gray-500 ml-20 ">Home </span>
        <Image src={arrow} alt='arrow' width={17} height={22} />
        <span className="text-gray-500">Shop </span>
        <Image src={arrow} alt='arrow' width={17} height={22} />
        <span className="text-black font-semibold text-[16px]">Asgaard sofa</span>
      </div>

      {/* PRODUCT DIV */}
      <div className="w-full h-[820] flex items-center justify-center">
        <div className=" h-[730] w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* left image div */}
          <div className='flex '>
            <div className='w-[553] flex flex-col-2 gap- h-[500]'>
              <div className='w-[76] h-auto gap-4 flex-wrap justify-between m-3 '>
                {thumbnails.map((thumbnail) => (
                  <div key={thumbnail.id} className={`bg-[#F9F1E7] mb-3 cursor-pointer ${selectedImage === thumbnail.src ? 'border-2 border-black' : ''
                    }`} onClick={() => setSelectedImage(thumbnail.src)}>
                    <Image src={thumbnail.src} alt='thumbnail' width={100} height={100} />

                  </div>
                ))}
              </div>
              <div className='w-[481] h-500]'>
                <div className='w-[423] h-[500] bg-[#F9F1E7]'>
                  <Image src={asgaardsofa} alt='img' width={500} height={100} className='w-[481] h-[391]' />
                </div>

              </div>

            </div>
          </div >
          {/* right product details */}
          <div className=''>
            <div>
              <h1 className="text-[42px] font-semibold">Asgaard sofa</h1>
              <p className="text-2xl text-[#9F9F9F] mb-4">Rs. 250,000.00</p>
              <div className='flex items-center'>
                <Image src={stars} alt='img' width={100} height={100} className='w-[124] h-[20]' />
                <div className='bg-[#9F9F9F] w-[5] h-[30]'></div> <p className='ml-4 '>5 Customer Review</p>
              </div>
              <div className='mt-4 text-[20px]'>
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-7 mb-6">
              <p className="font-[18px] mb-2">Size</p>
              <div className="flex gap-4">
                {['L', 'XL', 'XS'].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded ${selectedSize === size
                      ? 'border-black bg-[#B88E2F] text-white'
                      : 'border-gray-300 bg-[#F9F1E7] hover:border-black'
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <p className="font-medium mb-2">Color</p>
              <div className="flex gap-4">
                {['#816DFA', '#000000', '#B88E2F'].map((color) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                    className={`w-10 h-10 rounded-full border ${selectedColor === color
                      ? 'border-black scale-110'
                      : 'border-gray-300 hover:scale-110'
                      } transition-transform`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>


            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex text-[20px] justify-between text-center w-[130] h-[64px] items-center border border-black rounded-[15px]">
                <button
                  className="px-4 text-[20px] py-1"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <MinusIcon className="w-4 h-4" />
                </button>
                <span className="px-4 text-[20px] py-2">{quantity}</span>
                <button
                  className="px-4 py-2"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
              <button className="w-[215] h-[64] text-black  text-[24px] border border-black rounded-[15px] hover:bg-[#B88E2F]">
                Add To Cart
              </button>
              <button className=" w-[215] h-[64]  text-[24px] border border-black px-4 py-2 rounded-[15px] hover:bg-[#B88E2F]">
                Compare
              </button>
            </div>

            <div className='w-[605px] border-[1px] border-[#D9D9D9] mb-10' />

            <div className="mt-6 border-t border-gray-300 pt-4">
              {/* SKU */}
              <div className="flex items-center mb-2">
                <span className="w-[100px] text-gray-500">SKU</span>
                <span className="text-gray-900">: SS001</span>
              </div>

              {/* Category */}
              <div className="flex items-center mb-2">
                <span className="w-[100px] text-gray-500">Category</span>
                <span className="text-gray-900">: Sofas</span>
              </div>

              {/* Tags */}
              <div className="flex items-center mb-2">
                <span className="w-[100px] text-gray-500">Tags</span>
                <span className="text-gray-900">: Sofa, Chair, Home, Shop</span>
              </div>

              {/* Share */}
              <div className="flex items-center mb-2">
                <span className="w-[100px] text-gray-500">Share</span>
                <div className="flex gap-4">
                  <FaFacebookF className="text-gray-900 cursor-pointer hover:text-blue-600" />
                  <FaLinkedinIn className="text-gray-900 cursor-pointer hover:text-blue-500" />
                  <FaTwitter className="text-gray-900 cursor-pointer hover:text-blue-400" />
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
{/* product tabs */}

<div className='w-full h-[744] mt-8'>
  
  <TabsComponent/>
</div>

{/* Related product */}

<RelatedProducts/>

    </div>
  );
};

export default ProductPage;
