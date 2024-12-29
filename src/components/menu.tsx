'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'



const Menu = () => {
    const [open, setopen] = useState(false)

    return (
        <div className=''>
            <Image
                src={'/assets/menu.png'}
                alt='menu'
                width={28}
                height={28}
                className='cursor-pointer' onClick={() => setopen((prev) => !prev)}
            /> {
                open && (
                    <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-8 text-lg'>
                        <Link href={'/'}> Home</Link>
                        <Link href={'/shop'}> Shop</Link>
                        <Link href={'/blog'}> Blog</Link>
                        <Link href={'/contact'}> Contact</Link>
                        <Link href={'/profil'}> profile</Link>
                        <Link href={'/search'}> Search</Link>
                        <Link href={'/favorite'}> Favorite</Link>
                        <Link href={'/cartpage'}> Cart</Link>
                    </div>
                )
            }

        </div>
    )
}

export default Menu
