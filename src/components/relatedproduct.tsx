import React from "react";
import Image from "next/image";
import Link from "next/link";
import productList from "./productList"; 

const RelatedProducts = () => {
  // Fetch the first 4 products dynamically
  const relatedProducts = productList.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Heading */}
      <h2 className="text-center text-2xl font-bold mb-6">Related Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg shadow-md group overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              {/* Discount or New Label */}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  New
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-black font-bold">{product.price}</span>
                {product.discountPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {product.discountPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Add to Cart Button */}
              <Link href={`/shop/product`}>
                <button className="bg-[#FFFFFF] w-[202px] h-[48px] text-[#B88E2F] px-4 py-2 text-[16px] font-semibold rounded">
                  Add to cart
                </button>
              </Link>

              {/* Action Links (Share, Compare, Like) */}
              <div className="flex gap-6 w-auto text-white mt-4">
                {/* Share */}
                <Link href="/share-link">
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
                <Link href="/compare-link">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/Compare.png"
                      alt="Compare"
                      width={13.1}
                      height={14}
                    />
                    <span className="text-[16px] font-semibold">Compare</span>
                  </div>
                </Link>

                {/* Like */}
                <Link href="/like-link">
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
       <div className="mt-8 flex  justify-center">
        <div className="px-6 py-2 w-[245px] h-[48px] border text-center justify-center border-[#B88E2F] text-[#B88E2F] text-[16px] font-bold rounded hover:bg-[#B88E2F] hover:text-white transition" >
        <Link href="/shop" className="px-6 py-2 w-[245px] h-[48px] border-[#B88E2F] text-[#B88E2F] text-[16px] font-bold rounded hover:bg-[#B88E2F] hover:text-white transition">
            Show More
        </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
