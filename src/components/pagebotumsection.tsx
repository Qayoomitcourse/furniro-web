import React from 'react'
import trophy from '../../public/assets/trophy.png'
import guarantee from '../../public/assets/guarantee.png'
import shipping from '../../public/assets/shipping.png'
import customersupport from '../../public/assets//customersupport.png'
import Image from 'next/image'


const Pagebotumsection = () => {
  return (
    <div>
      <section className="bg-theme-light flex items-center justify-center  bg-[#FAF3EA] h-[270px] ">
          <div className='w-fit mx-auto grid grid-cols-1 lg:flex laptop:flex gap-14'>
            {/* quality */}
            <div className='flex gap- [10px]'>
              <div>

                <Image src={trophy} alt='arrow' width={60} height={60} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-text-p">
                  High Quality
                </h2>
                <p className="font-medium text-xl text-text-s">
                  crafted from top materials
                </p>
              </div>
            </div>
            {/* warranty */}
            <div className='flex gap-[10px]'>
              <div>

                <Image src={guarantee} alt='arrow' width={60} height={60} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-text-p">
                  Warranty Protection
                </h2>
                <p className="font-medium text-xl text-text-s">
                  Over 2 years
                </p>
              </div>
            </div>
            {/* free shipping */}
            <div className='flex gap-[10px]'>
              <div>

                <Image src={shipping} alt='arrow' width={60} height={60} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-text-p">
                  Free Shipping
                </h2>
                <p className="font-medium text-xl text-text-s">
                  Order over 150 $
                </p>
              </div>
            </div>
            {/*  Customer support */}
            <div className='flex gap-[10px]'>
              <div>

                <Image src={customersupport} alt='arrow' width={60} height={60} />
              </div>
              <div>
                <h2 className="font-semibold text-2xl text-text-p">
                  24 / 7 Support
                </h2>
                <p className="font-medium text-xl text-text-s">
                  Dedicated support
                </p>
              </div>
            </div>


          </div>

        </section>
    </div>
  )
}

export default Pagebotumsection
