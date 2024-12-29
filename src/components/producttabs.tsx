import { useState } from "react";
import Image from "next/image";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs Section */}
      <div className="flex justify-center space-x-8 border-b-2 border-gray-200 pb-2">
        <button
          className={`text-lg font-medium ${
            activeTab === "description"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`text-lg font-medium ${
            activeTab === "additional"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("additional")}
        >
          Additional Information
        </button>
        <button
          className={`text-lg font-medium ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews [5]
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        {activeTab === "description" && (
          <div>
            <p className="text-gray-700">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="mt-4 text-gray-700">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        )}
        {activeTab === "additional" && (
          <div>
            <p className="text-gray-700">
              Additional Information content goes here...
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <p className="text-gray-700">Reviews content goes here...</p>
          </div>
        )}
      </div>

      {/* Images Section */}
      <div className="ml-4 grid grid-cols-2 w-[1239] h-[348] justify-center gap-4 mt-8">
        <div className="relative bg-blue-500 border">
          <Image
            src="/assets/group 106.png"
            alt="Group 106"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="relative bg-gray-200 border">
          <Image
            src="/assets/group 107.png"
            alt="Group 107"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
