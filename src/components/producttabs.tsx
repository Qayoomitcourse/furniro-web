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
            <p className="text-gray-700 text-base md:text-lg">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        )}
        {activeTab === "additional" && (
          <div>
            <p className="text-gray-700 text-base md:text-lg">
              Additional Information content goes here...
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <p className="text-gray-700 text-base md:text-lg">
              Reviews content goes here...
            </p>
          </div>
        )}
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 justify-between sm:grid-cols-2 gap-4 mt-8">
        <div className="relative  border rounded-lg overflow-hidden">
          <Image
            src="/assets/group 106.png"
            alt="Group 106"
            width={730}
            height={500}
            className="rounded"
          />
        </div>
        <div className="relative border justify-center rounded-lg overflow-hidden">
          <Image
            src="/assets/group 107.png"
            alt="Group 107"
            width={730}
            height={500}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
