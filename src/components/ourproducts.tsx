import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

// Import the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const products = [
  {
    image: "/assets/image 1.png",
    name: "Sytherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    image: "/assets/image 2.png",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/assets/image 3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    discountPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    image: "/assets/image 4.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountPrice: null,
    discount: "New",
  },
  {
    image: "/assets/Image 5.png",
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    discountPrice: null,
    discount: null,
  },
  {
    image: "/assets/image 6.png",
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    discountPrice: null,
    discount: "New",
  },
  {
    image: "/assets/image 7.png",
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    discountPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    image: "/assets/image 8.png",
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    discountPrice: null,
    discount: "New",
  },
];

const OurProducts = () => {
  return (
    <section className="flex flex-col items-center py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className={`${poppins.className} text-[32px] font-bold mb-2`}>
          Our Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1183px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg hover:shadow-xl overflow-hidden group"
          >
            {/* Discount/Badge */}
            {product.discount && (
              <span className="absolute top-2 left-2 bg-[#F4F5F7] text-black text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </span>
            )}

            {/* Product Image */}
            <div className="relative w-full h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                objectFit="cover"
              />
            </div>

            {/* Product Details */}
            <div className="bg-[#F4F5F7] p-4">
              <h3 className={`${poppins.className} text-[24px] font-semibold mb-1`}>
                {product.name}
              </h3>
              <p className="text-[16px] text-[#898989]">{product.description}</p>

              {/* Pricing */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[20px] font-bold text-[#3A3A3A]">
                  {product.price}
                </span>
                {product.discountPrice && (
                  <span className="text-[16px] line-through text-[#B0B0B0]">
                    {product.discountPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Add to Cart Button */}
              <Link href="/shop/product">
                <button className="bg-white w-[202px] h-[48px] text-[#B88E2F] px-4 py-2 text-[16px] font-semibold rounded">
                  Add to cart
                </button>
              </Link>

              {/* Action Links (Share, Compare, Like) */}
              <div className="flex gap-6 text-white mt-4">
                {/* Share */}
                <Link href="/share-link" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/Share.png"
                      alt="Share"
                      width={13.1}
                      height={14}
                    />
                    <span className="text-[16px] font-semibold">Share</span>
                  </div>
                </Link>

                {/* Compare */}
                <Link href="/compare-link" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/assets/Compare.png"}
                      alt="Compare"
                      width={14}
                      height={14}
                    />
                    <span className="text-[16px] font-semibold">Compare</span>
                  </div>
                </Link>

                {/* Like */}
                <Link href="/like-link" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/Heart.png"
                      alt="Like"
                      width={13.1}
                      height={14}
                    />
                    <span className="text-[16px] font-semibold">Like</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-8">
        <Link
          href="/shop"
          className="px-6 py-2 w-[245px] h-[48px] border-[#B88E2F] text-[#B88E2F] text-[16px] font-bold rounded hover:bg-[#B88E2F] hover:text-white transition"
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;
