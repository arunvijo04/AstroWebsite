import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-screen h-screen bg-gradient-to-b from-[#eae4e9] to-[#d5c6e0] flex flex-col md:flex-row justify-center items-center p-6 md:px-16 lg:px-24">
      {/* Left Section - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[#2d2d2d] text-[28px] md:text-[40px] lg:text-[52px] font-normal font-castoro">
          Reach Out to the{" "}
          <span className="text-[#192a51]">STARS!</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-[#2d2d2d] text-[16px] md:text-[20px] font-normal font-epilogue leading-6 md:leading-8">
          Reach out to us across the galaxy! <br />
          <br />
          Share your thoughts, ask a question, or simply say hello. <br />
          Send us a message and let's explore the universe together!
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-16">
        <input
          type="text"
          placeholder="Name"
          className="w-full max-w-[364px] h-12 bg-white border border-[#d9d9d9] rounded-lg px-4 text-[#5e548e] font-syne text-base mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full max-w-[364px] h-12 bg-white border border-[#d9d9d9] rounded-lg px-4 text-[#5e548e] font-syne text-base mb-4"
        />
        <button className="w-full max-w-[261px] h-11 bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] text-white rounded-[20px] shadow-md font-syne text-[18px] md:text-[22px] font-semibold mt-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
