import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavIcons from './navicons'
import Menu from './menu'
import { Montserrat, Poppins } from 'next/font/google';


const montserrat = Montserrat({
    subsets: ['latin'], // Optional subsets
    weight: ['400', '700'], // Optional weights
    style: ['normal', 'italic'], // Optional styles
});

const poppins = Poppins({
    subsets: ['latin'], // Specify the subset (optional)
    weight: ['400', '600', '700'], // Choose specific font weights (optional)
    style: ['normal', 'italic'], // Add styles if needed
});


const NaveBar = () => {
    return (
        <div className='relative top-0 z-50 sticky shadow-sm bg-yellow-50  justify-between  h-[100px] px-4 md:px-8 lg:px:16 xl-32 2xl:px-64 '>
            {/* MOBILE SCREEN */}
            <div className=' h-full flex items-center justify-between md:hidden'>
                <Link href={'/'} > <div className={`${montserrat.className} text-black text-[25px] font-bold tracking-wide`}>
                    FURNIRO </div></Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className='hidden md:flex items-center flex-cols justify-between h-full '>
                {/* left */}
                <div className="w-2/3 flex flex-row items-center border-none">
                    <Link href={'/'}>
                        <div className="flex flex-row items-center">
                            {/* Logo */}
                            <Image src={'/assets/logo.png'} alt="logo" width={40} height={32} />

                            {/* Text */}
                            <span
                                className={`${montserrat.className} text-black text-[34px] font-bold tracking-wide ml-2`}
                            >
                                FURNIRO
                            </span>
                        </div>
                    </Link>
                </div>
                {/* ceter links*/}
                <div className='w-2/3'>
                    {/* Navigation Links */}
                    <div className={`${poppins.className} text-[16px]  flex flex-wrap md:flex space-x-8 text-lg`}>
                        <Link href="/" className="hover:text-gray-600 transition">
                            Home
                        </Link>
                        <Link href="/shop" className="hover:text-gray-600 transition">
                            Shop
                        </Link>
                        <Link href="/blog" className="hover:text-gray-600 transition">
                            Blog
                        </Link>
                        <Link href="/contact" className="hover:text-gray-600 transition">
                            Contact
                        </Link>
                    </div>
                    
                </div>
                <div className='w-2/3 flex flex-row items-center'>
                        <NavIcons/>
                    </div>
            </div>


        </div>
    )
}

export default NaveBar
