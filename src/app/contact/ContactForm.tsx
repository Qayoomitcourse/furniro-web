const ContactForm = () => {
  return (
    <div className="form w-[400px] flex flex-col gap-6 md:w-[635px] h-[923px]  p-14 pt-40">
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        placeholder="Abc"
        className="w-full h-[75px] rounded-lg border-[#9F9F9F] p-5  border-2"
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        placeholder="Abc@def.com"
        className="w-full h-[75px] rounded-lg border-[#9F9F9F] p-5  border-2"
      />

      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        placeholder="This is optional"
        className="w-full h-[75px] rounded-lg border-[#9F9F9F] p-5  border-2"
      />

      <label htmlFor="message">Message </label>
      <textarea
        placeholder="Message"
        id="message"
        className="w-full h-[75px] rounded-lg border-[#9F9F9F] p-5  border-2"
      />
      <button
        type="submit"
        className="w-[237px] h-[65px] text-white bg-primary rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
