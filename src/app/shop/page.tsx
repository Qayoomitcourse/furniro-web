import React from 'react'
import Image from 'next/image'
import arrow from '../../../public/assets/arrow.png'
import filter from '../../../public/assets/filter.png'
import gridround from '../../../public/assets/grid-round.png'
import viewlist from '../../../public/assets/view-list.png'
import Pagebotumsection from '@/Components/pagebotumsection'
import ProductGrid from '@/Components/productGrid'



const Shop = () => {
  return (
    <div className="flex-grow">
      <div>
        {/* top section */}
        <section
          className="w- h-[316px] item-centre justify-between bg-top bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("/assets/Rectangle 1.png")', }}
        >
          <div className="w-auto h-[316] flex items-center mt-10 py-20 ">
            <div className="mx-auto w-fit fliex text-center item-center font-medium capitalize">
              <h1 className="text-5xl mb-2">shop</h1>
              <p className="flex items-center justify-center gap-1">
                <span>Home</span>
                <Image src={arrow} alt='arrow' width={20} height={20} />
                <span className="font-light">shop</span>
              </p>
            </div>
          </div>
        </section>
        {/* filter section */}
        <section className="text-nowrap bg-theme-light">
          <div className="mx-auto max-w-screen-laptop px-10 lg:px-20 xl:px-32 py-6">
            <div className="flex justify-center lg:justify-between flex-wrap gap-10">
              <div className="flex justify-center items-center flex-col sm:flex-row gap-5">
                <div className="flex items-center gap-5">
                  <button type="button">
                    <Image src={filter} alt='arrow' width={25} height={25} />

                  </button>
                  <span className='text-[20px]'>Filter</span>
                  <button type="button">
                    <Image src={gridround} alt='arrow' width={25} height={25} />

                  </button>
                  <button type="button">
                    <Image src={viewlist} alt='arrow' width={25} height={25} />

                  </button>
                  <div className="h-10 w-0.5 hidden sm:block bg-text-s" />
                </div>
                <span>Showing 1-16 of 32 results</span>
              </div>
              <div className="flex justify-center flex-wrap gap-5">
                <div className="flex items-center gap-5">
                  <span>show</span>
                  <button
                    type="button"
                    id="radix-:r3:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                    className="inline-flex items-center whitespace-nowrap h-14 px-5 text-text-s hover:text-white bg-white hover:bg-theme focus-visible:outline-none transition-colors"
                  >
                    16
                  </button>
                </div>
                <div className="flex items-center gap-5">
                  <span>sort by</span>
                  <button
                    type="button"
                    id="radix-:r5:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                    className="inline-flex items-center whitespace-nowrap h-14 px-5 text-text-s hover:text-white bg-white hover:bg-theme focus-visible:outline-none transition-colors capitalize"
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
          <ProductGrid />
        </div>
        {/* botum section */}
        <Pagebotumsection/>
      </div>
    </div>

  )
}

export default Shop
