'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../type/product';
import { client } from '@/sanity/lib/client';
import { allproducts } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const ITEMS_PER_PAGE = 16;

const ProductGrid = () => {
  const [product, setproduct] = useState<Product[]>([]);
  const [selectedForComparison, setSelectedForComparison] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchdata() {
      const fetchproduct: Product[] = await client.fetch(allproducts);
      setproduct(fetchproduct);
    }
    fetchdata();
  }, []);

  const totalPages = Math.ceil(product.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const handleCompare = (product: Product) => {
    if (selectedForComparison.length < 2) {
      setSelectedForComparison([...selectedForComparison, product]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Comparison Section */}
      {selectedForComparison.length > 0 && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Compare Products ({selectedForComparison.length}/2)</h2>
          <div className="flex gap-4">
            {selectedForComparison.map(product => {
              const imageUrl = product.image?.asset?._ref
                ? urlFor(product.image.asset).url()
                : '/placeholder.jpg';

              return (
                <div key={product._id} className="flex items-center gap-2">
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover"
                  />
                  <span>{product.name}</span>
                  <button
                    onClick={() => setSelectedForComparison(selectedForComparison.filter(p => p._id !== product._id))}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          {selectedForComparison.length === 2 && (
            <Link href="/compare" className="inline-block">
              <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded">
                Compare Now
              </button>
            </Link>
          )}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {product.slice(startIndex, startIndex + ITEMS_PER_PAGE).map((product) => {
          const imageUrl = product.image && product.image.asset && product.image.asset._ref
            ? urlFor(product.image.asset._ref).url()
            : null;

          return (
            <div key={product._id} className="relative border rounded-lg shadow-md group">
              <div className="relative">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={product.name || 'Product'}
                    width={500}
                    height={300}
                    unoptimized
                  />
                )}
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-3 right-3 bg-teal-500 text-white text-sm font-bold px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="mt-2">
                  <span className="text-xl font-semibold text-black">Rs. {product.price}</span>
                  {product.discountPrice && (
                    <span className="text-gray-500 line-through text-sm ml-2">
                      {product.discountPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/${product.category}/${product.slug.current}`}>
                  <button className="bg-white w-[202px] h-[48px] text-[#B88E2F] px-4 py-2 text-[16px] font-semibold rounded">
                    Add to cart
                  </button>
                </Link>

                <div className="flex gap-6 w-auto text-white mt-4">
                  <button onClick={() => handleCompare(product)} className="flex items-center gap-2">
                    <Image src="/assets/Compare.png" width={14} height={14} alt="Compare" className="w-4 h-4" />
                    <span className="text-[16px] font-semibold">Compare</span>
                  </button>

                  <Link href="/share-link" className="flex items-center gap-2">
                    <Image src="/assets/Share.png" width={14} height={14} alt="Share" className="w-4 h-4" />
                    <span className="text-[16px] font-semibold">Share</span>
                  </Link>

                  <Link href="/like-link" className="flex items-center gap-2">
                    <Image src="/assets/heart.png" width={14} height={14} alt="Like" className="w-4 h-4" />
                    <span className="text-[16px] font-semibold">Like</span>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border rounded ${currentPage === index + 1 ? "bg-yellow-500 text-white" : "bg-white text-black"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
