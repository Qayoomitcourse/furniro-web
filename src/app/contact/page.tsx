/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Features from "../../components/Features";
import Tophead from "../../components/Tophead";
import ContactForm from "./ContactForm";

const page = () => {
  return (
    <div className="contact">
      <Tophead pageName="Contact" />
      <div className="contact-title max-w-full mt-20">
        <h1 className="text-center text-[36px] font-semibold ">
          Get in touch with us
        </h1>
        <p className="text-center text-[#9F9F9F] text-[16px] ">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email.
          <br /> Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="contact-form flex flex-col md:flex-row justify-evenly ">
          <div className="abt-info flex flex-col gap-6 w-[393px] p-6 mt-52">
            <div className="info-1 flex gap-4 ">
              <div>
                <Image src="/assets/location.png" width={100} height={100} alt="location" className="w-8" />
              </div>
              <div>
                <h1 className="text-[24px] text-black font-medium">Address</h1>
                <p className="font-normal text-[16px]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="info-2 flex  gap-4">
              <div>
                <Image src="/assets/phone.png" alt="phone" width={100} height={100} className="w-8"  />
              </div>
              <div>
                <h1 className="text-[24px] text-black font-medium">Phone</h1>
                <p className="font-normal text-[16px]">
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="info-3 flex  gap-4">
              <div>
                <Image src="/assets/worktime.png" alt="time" width={100} height={100} className="w-8" />
              </div>
              <div>
                <h1 className="text-[24px] text-black font-medium">
                  Working Time
                </h1>
                <p className="font-normal text-[16px]">
                  Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                  21:00
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default page;
