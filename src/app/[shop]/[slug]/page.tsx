'use client';

import React, { useState, useEffect } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { StaticImageData } from 'next/image';

// Local imports
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { allproducts } from '@/sanity/lib/queries';
import { Product } from '../../../../type/product';

// Static assets
import arrow from '../../../../public/assets/arrow.png';
import productImg1 from '../../../../public/assets/Group 94.png';
import productImg2 from '../../../../public/assets/Group 96.png';
import productImg3 from '../../../../public/assets/Group 97.png';
import productImg4 from '../../../../public/assets/Group 98.png';
import stars from '../../../../public/assets/stars.png';

// Component imports
import TabsComponent from '@/components/producttabs';
import RelatedProducts from '../relatedproduct';


const ProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const dispatch = useAppDispatch();
  const { slug } = React.use(params); // Unwrap params using React.use()

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allproducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((p) => p.slug.current === slug);
      if (product) {
        const imageUrl = urlFor(product.image.asset._ref).url() || '';
        setSelectedProduct(product);
        setSelectedImage(imageUrl);

        // Set default first size and color
        if (product.size && product.size.length > 0) {
          setSelectedSize(product.size[0]);
        }
        if (product.colour && product.colour.length > 0) {
          setSelectedColor(product.colour[0]);
        }


      }
    }
  }, [slug, products]);

  if (!selectedProduct) {
    return <div>Loading product...</div>;
  }
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: selectedProduct._id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedImage,
        quantity,
        size: [selectedSize],
        color: selectedColor,
      })
    );
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const thumbnails = [
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
        <span className="text-black font-semibold text-[16px]">{selectedProduct.name}</span>
      </div>

      {/* Product Content */}
      <div className="w-full mt-5 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Section - Images */}
          <div className="flex w-full">
            {/* Thumbnails */}
            <div className="w-[120px] flex flex-col gap-4 justify-start px-2">
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

            {/* Main Image */}
            <div className="w-full flex justify-center items-center bg-[#F9F1E7] h-[500px]">
              <Image
                src={selectedImage}
                alt="main image"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[32px] sm:text-[42px] font-semibold">{selectedProduct.name}</h1>
              <p className="text-2xl text-[#9F9F9F] mb-4">Rs. {selectedProduct.price}</p>

              <div className="flex items-center">
                <Image src={stars} alt="stars" width={100} height={20} className="w-[124px] h-[20px]" />
                <div className="bg-[#9F9F9F] w-[5px] h-[30px] mx-4" />
                <p>5 Customer Review</p>
              </div>

              <div className="mt-4 text-[16px] sm:text-[20px] text-gray-700">
                {selectedProduct.description}
              </div>

              {/* Size Selection */}
              <div className="mt-7 mb-6">
                <p className="font-[18px] mb-2 text-gray-500">Size</p>
                <div className="flex gap-3">
                  {selectedProduct.size.map(size => (
                    <button
                      key={size}
                      className={`w-10 h-10 border rounded-md ${selectedSize === size ? 'border-black bg-[#B88E2F] text-white' : 'border-gray-300 bg-[#F9F1E7] hover:border-black'}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mt-6">
                <h3 className="font-medium mb-2 text-gray-500">Color</h3>
                <div className="flex gap-3">
                  {selectedProduct.colour.map(color => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full ${selectedColor === color ? 'border-2 border-black' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 mt-8 mb-8">
                <div className="flex text-[20px] justify-between text-center w-[130px] h-[64px] items-center border border-black rounded-[15px]">
                  <button className="px-4 text-[20px] py-1" onClick={decreaseQuantity}>
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-[20px] py-2">{quantity}</span>
                  <button className="px-4 py-2" onClick={increaseQuantity}>
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
                  <span className="text-gray-900">: {selectedProduct.sku}</span>
                </div>

                {/* Category */}
                <div className="flex items-center mb-2">
                  <span className="w-[100px] text-gray-500">Category</span>
                  <span className="text-gray-900">: {selectedProduct.category}</span>
                </div>

                <div className="flex items-center mb-2">
                  <span className="w-[100px] text-gray-500">Tags</span>
                  <div className="flex gap-4">
                    {selectedProduct.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 text-gray-900 px-4 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
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
      </div>

      {/* Tabs and Related Products */}
      <TabsComponent />
      <RelatedProducts currentProductSlug={selectedProduct.slug.current} />
    </div>
  );
};

export default ProductPage;