'use client';

import React, { useState, useEffect } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import arrow from '../../../../public/assets/arrow.png';
import productImg1 from '../../../../public/assets/Group 94.png';
import productImg2 from '../../../../public/assets/Group 96.png';
import productImg3 from '../../../../public/assets/Group 97.png';
import productImg4 from '../../../../public/assets/Group 98.png';
import asgaardsofa from '../../../../public/assets/Asgaard sofa.png';
import stars from '../../../../public/assets/stars.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import TabsComponent from '@/components/producttabs';
import RelatedProducts from '@/components/relatedproduct';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product);

  // Initialize state for slug
  const [slug, setSlug] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState('');  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');
  
  useEffect(() => {
    // Ensure params is resolved before accessing slug
    const getProduct = async () => {
      const selectedProduct = products.find((product) => product.slug === params.slug);
      if (selectedProduct) {
        setSlug(selectedProduct);
        setSelectedImage(selectedProduct.image);  // Set default image
      }
    };

    if (params.slug) {
      getProduct();
    }
  }, [params.slug, products]);

  if (!slug) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!slug) return;

    dispatch(
      addToCart({
        id: slug.id,
        name: slug.name,
        price: slug.price,
        image: slug.image,
        quantity,
        size: selectedSize,
        color: selectedColor,
      })
    );
  };

  const thumbnails : any = [
    { id: 1, src: productImg1 },
    { id: 2, src: productImg2 },
    { id: 3, src: productImg3 },
    { id: 4, src: productImg4 },
  ];

  return (
    <div className="mt-20">
      {/* Breadcrumb */}
      <div className="w-full mt-10 ml-8 sm:ml-16 gap-3 flex items-center h-[100px] bg-[#F9F1E7]">
        <span className="text-gray-500">Home</span>
        <Image src={arrow} alt="arrow" width={17} height={22} />
        <span className="text-gray-500">Shop</span>
        <Image src={arrow} alt="arrow" width={17} height={22} />
        <span className="text-black font-semibold text-[16px]">{slug.name}</span>
      </div>

      {/* PRODUCT DIV */}
      <div className="w-full h-[820px] mt-5 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left image div */}
          <div className="flex">
            <div className="w-[100%] flex flex-col gap-4">
              <div className="flex gap-4 overflow-x-auto px-2">
                {thumbnails.map((thumbnail) => (
                  <div
                    key={thumbnail.id}
                    className={`bg-[#F9F1E7] mb-3 cursor-pointer ${selectedImage === thumbnail.src ? 'border-2 border-black' : ''}`}
                    onClick={() => setSelectedImage(thumbnail.src)}
                  >
                    <Image src={thumbnail.src} alt="thumbnail" width={100} height={100} />
                  </div>
                ))}
              </div>
              <div className="w-full h-[500px] bg-[#F9F1E7]">
                <Image src={selectedImage} alt="main image" width={500} height={500} className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right product details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[32px] sm:text-[42px] font-semibold">{slug.name}</h1>
              <p className="text-2xl text-[#9F9F9F] mb-4">Rs. {slug.price}</p>
              <div className="flex items-center">
                <Image src={stars} alt="stars" width={100} height={20} className="w-[124px] h-[20px]" />
                <div className="bg-[#9F9F9F] w-[5px] h-[30px] mx-4" />
                <p>5 Customer Review</p>
              </div>
              <div className="mt-4 text-[16px] sm:text-[20px] text-gray-700">
                {slug.description}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-7 mb-6">
              <p className="font-[18px] mb-2">Size</p>
              <div className="flex gap-4">
                {slug.size.map((size:any) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded ${selectedSize === size ? 'border-black bg-[#B88E2F] text-white' : 'border-gray-300 bg-[#F9F1E7] hover:border-black'}`}
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
                {slug.colour.map((color:any) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                    className={`w-10 h-10 rounded-full border ${selectedColor === color ? 'border-black scale-110' : 'border-gray-300 hover:scale-110'} transition-transform`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex text-[20px] justify-between text-center w-[130px] h-[64px] items-center border border-black rounded-[15px]">
                <button className="px-4 text-[20px] py-1" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <MinusIcon className="w-4 h-4" />
                </button>
                <span className="px-4 text-[20px] py-2">{quantity}</span>
                <button className="px-4 py-2" onClick={() => setQuantity(quantity + 1)}>
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
              <button onClick={handleAddToCart} className="w-[215px] h-[64px] text-black text-[24px] border border-black rounded-[15px] hover:bg-[#B88E2F]">
                Add To Cart
              </button>
              <Link href={'/comparison'} className="w-[215px] h-[64px] text-[24px] border border-black px-4 py-2 rounded-[15px] hover:bg-[#B88E2F]">
                Compare
              </Link>
            </div>

            <div className="w-full border-[1px] border-[#D9D9D9] mb-10" />

            <div className="mt-6 border-t border-gray-300 pt-4">
              {/* SKU */}
              <div className="flex items-center mb-2">
                <span className="w-[100px] text-gray-500">SKU</span>
                <span className="text-gray-900">: {slug.sku}</span>
              </div>

              {/* Category */}
              <div className="flex items-center mb-2">
                <span className="w-[100px] text-gray-500">Category</span>
                <span className="text-gray-900">: {slug.Category}</span>
              </div>

              {/* Tags */}
              <div className="flex items-center mb-2">
                <span className="w-[100px] text-gray-500">Tags</span>
                <span className="text-gray-900">: {slug.tags}</span>
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
      <br />
      <br />

      {/* Product Tabs */}
      <div className="w-full mt-8">
        <TabsComponent />
      </div>

      {/* Related Products */}
      <RelatedProducts currentProductSlug={slug?.slug} />
    </div>
  );
};

export default ProductPage;
