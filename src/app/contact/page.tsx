'use client'
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Tophead from '@/components/Tophead';
import Features from '@/components/Features';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email:  '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <div>

      <Tophead pageName='Contact'/>
      <br />

      <div className="contact-container flex flex-col  items-center">
        <div className='w-[644] h-[150]'>
          <h2 className='text-[36px] font-bold text-center'>Get In Touch With Us</h2>
          <p className='text-[16px] text-center text-gray-400'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        {/* Contact info */}
        <div className='w-[1058] flex mt-9 h-[923]  gap-4 '>
          {/* left side contact info */}
          <div className="w-[393px] h-[537px]">
            <div className="flex flex-col gap-4 p-4">
              <div className="contact-item flex items-center gap-4">
                <FaMapMarkerAlt size={24} className='mb-6' />
                <div>
                  <h3 className="font-bold text-[24px]">Address</h3>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>

              <div className="contact-item flex items-center gap-2">
                <FaPhoneAlt size={24} className='mb-6' />
                <div>
                  <h3 className="font-bold text-[24px]">Phone</h3>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>

              <div className="contact-item flex items-center gap-2">
                <FaClock size={24} className='mb-6' />
                <div>
                  <h3 className="font-bold text-[24px]">Working Time</h3>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
          {/* right side contact */}
          <div className='w-[635] h-[923]'>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[16px] font-medium py-4 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Abc"
                  className="mt-1 block w-[528] h-[75] px-4 py-2 border border-gray-300 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[16px] p-4 font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Abc@def.com"
                  className="mt-1 block w-[528] h-[75] px-4 py-2 border border-gray-300 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[16px] p-4 font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="This is an optional"
                  className="mt-1 block w-[528] h-[75] px-4 py-2 border border-gray-300 rounded-[10px] focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[16px] p-4 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi! i’d like to ask about"

                  className="mt-1 block w-[528] h-[120] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[237] h-[55] px-4 py-2 text-white bg-[#B88E2F] hover:bg-[#B88E2F] rounded-[10px] focus:outline-none text-[16px] font-bold focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </form>


          </div>
        </div>



      </div>
      <Features/>
    </div>



  );
};

export default ContactForm;
