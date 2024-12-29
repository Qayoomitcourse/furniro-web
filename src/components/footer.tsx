import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
      <>
      <hr />
      <footer className=" py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Funiro.</h2>
          <p className="text-gray-600">400 University Drive Suite 200 Coral <br />Gables, <br /> FL 33134 USA</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 gap-10">
          <div>
            <h3 className="text-gray-700 font-medium mb-6">Links</h3>
            <ul className="text-gray-600 flex flex-col gap-6 ">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium mb-6">Help</h3>
            <ul className="text-gray-600 flex flex-col gap-6">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium mb-6">Newsletter</h3>
             <ul className="text-gray-600">
              <li>
                <input type="email" placeholder="Enter your email" className="border rounded p-2 bg-transparent border-none underline" />
                <button className=" text-gray-700 rounded underline px-4 py-2 font-black ">SUBSCRIBE</button>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <hr />
    <h3 className='pl-[6rem]'>2023 furino. All rights reverved</h3>
      </>
  );
};

export default Footer;