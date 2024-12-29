'use client'
import React, { useState } from 'react';
import ProductList from './productList';
import Image from 'next/image';
import Link from 'next/link';


type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  discountPrice: string | null;
  discount: string | null;
  isNew?: boolean;
};

const products: Product[] = ProductList;
const ITEMS_PER_PAGE = 16;

const ProductGrid = () => {
  const [selectedForComparison, setSelectedForComparison] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
            {selectedForComparison.map(product => (
              <div key={product.id} className="flex items-center gap-2">
                <Image src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                <span>{product.name}</span>
                <button 
                  onClick={() => setSelectedForComparison(selectedForComparison.filter(p => p.id !== product.id))}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
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
        {currentProducts.map((product) => (
          <div key={product.id} className="relative border rounded-lg shadow-md group">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="w-full h-56 object-cover rounded-t-lg"
              />
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
                <span className="text-xl font-semibold text-black">{product.price}</span>
                {product.discountPrice && (
                  <span className="text-gray-500 line-through text-sm ml-2">
                    {product.discountPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href="/shop/product">
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
                  <Image src="/assets/Share.png"  width={14} height={14}  alt="Share" className="w-4 h-4" />
                  <span className="text-[16px] font-semibold">Share</span>
                </Link>

                <Link href="/like-link" className="flex items-center gap-2">
                  <Image src="/assets/Heart.png"  width={14} height={14}  alt="Like" className="w-4 h-4" />
                  <span className="text-[16px] font-semibold">Like</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1 ? "bg-yellow-500 text-white" : "bg-white text-black"
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