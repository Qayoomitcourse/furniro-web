import Link from "next/link";
import React from "react";




const HomeHeroSection: React.FC = () => {
  return (
    <div
      id="HomeHeroSection"
      className=" relative w-full h-screen stickey bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/assets/benner.png')",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-end">
        <div className="bg-[#FFF3E3]  p-6 rounded-lg max-w-md text-center lg:text-left">
          <h6 className="text-sm font-medium text-black">New Arrival</h6>
          <h1 className="text-2xl lg:text-4xl font-bold leading-snug text-[#B88E2F] mt-2">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-6 px-6 py-3 text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg shadow-md transition duration-200"
          >
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
