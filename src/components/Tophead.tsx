/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

interface TopheadProps {
  pageName: string;
}

const Tophead: React.FC<TopheadProps> = ({ pageName }) => {
  return (
    <div className="w-full h-[316px] relative flex justify-center items-center">
      <Image
        src="/assets/Rectangle 1.png"
        alt="Hero Image"
        width={500}
        height={500}
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="flex flex-col justify-center items-center z-40">
        <img src="/assets/logo.png" alt="logo" width={100} height={100} className="w-[77px] h-[77px]" />
        <div className="relative flex items-center justify-center">
          <h1 className="font-medium text-5xl font-poppins text-black text-center leading-snug">
            {pageName}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-2 mt-1">
          <span className="text-black font-medium text-[16px] ml-4">Home</span>
          <span className="text-black font-medium text-[16px] ">{">"}</span>
          <span className="text-black font-light text-[16px] mr-4">
            {pageName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tophead;
