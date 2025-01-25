import React from 'react';
import Image from 'next/image';
import arrow from '../../../public/assets/arrow.png';
import filter from '../../../public/assets/filter.png';
import gridround from '../../../public/assets/grid-round.png';
import viewlist from '../../../public/assets/view-list.png';
import Pagebotumsection from '@/components/pagebotumsection';
import ProductGrid from './productgrid';



const Shop = () => {
  return (
    <div className="flex-grow">
      <div>
        {/* top section */}
        <section
          className="w-full h-[316px] bg-top bg-no-repeat bg-cover flex items-center justify-center"
          style={{ backgroundImage: 'url("/assets/Rectangle 1.png")' }}
        >
          <div className="text-center font-medium capitalize py-20 px-4 sm:px-8">
            <h1 className="text-3xl sm:text-5xl mb-2">shop</h1>
            <p className="flex items-center justify-center gap-1 text-sm sm:text-base">
              <span>Home</span>
              <Image src={arrow} alt='arrow' width={20} height={20} />
              <span className="font-light">shop</span>
            </p>
          </div>
        </section>

        {/* filter section */}
        <section className="bg-[#F9F1E7] py-6">
          <div className="mx-auto max-w-screen-laptop px-6 sm:px-10 lg:px-20 xl:px-32">
            <div className="flex justify-center lg:justify-between flex-wrap gap-6 sm:gap-10">
              <div className="flex justify-center items-center flex-col sm:flex-row gap-5">
                <div className="flex items-center gap-5">
                  <button type="button">
                    <Image src={filter} alt='filter' width={25} height={25} />
                  </button>
                  <span className="text-[18px] sm:text-[20px]">Filter</span>
                  <button type="button">
                    <Image src={gridround} alt='grid' width={25} height={25} />
                  </button>
                  <button type="button">
                    <Image src={viewlist} alt='view list' width={25} height={25} />
                  </button>
                  <div className="h-10 w-0.5 hidden sm:block bg-text-s" />
                </div>
                <span className="text-sm sm:text-base">Showing 1-16 of 32 results</span>
              </div>

              <div className="flex justify-center flex-wrap gap-5">
                <div className="flex items-center gap-5">
                  <span className="text-sm sm:text-base">show</span>
                  <button
                    type="button"
                    id="radix-:r3:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    className="inline-flex items-center h-12 sm:h-14 px-5 text-text-s hover:text-white bg-white hover:bg-theme transition-colors text-sm sm:text-base"
                  >
                    16
                  </button>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-sm sm:text-base">sort by</span>
                  <button
                    type="button"
                    id="radix-:r5:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    className="inline-flex items-center h-12 sm:h-14 px-5 text-text-s hover:text-white bg-white hover:bg-theme transition-colors text-sm sm:text-base capitalize"
                  >
                    default
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* product list */}
        <div>
          <ProductGrid/>
        </div>

        {/* bottom section */}
        <Pagebotumsection />
      </div>
    </div>
  );
};

export default Shop;
