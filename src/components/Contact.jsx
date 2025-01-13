import React from "react";

const Contact = () => {
  return (
    <div className="w-screen h-[417px] relative mx-auto bg-gradient-to-b from-[#eae4e9] to-[#d5c6e0]">
      {/* Title */}
      <div className="absolute left-[150px] top-[10px]">
        <span className="text-[#2d2d2d] text-[52px] font-normal font-castoro leading-[42px]">
          Reach Out to the
        </span>
        <span className="text-[#192a51] text-[52px] font-normal font-castoro leading-[42px]">
          {" "}
          STARS!
        </span>
      </div>

      {/* Description */}
      <div className="absolute w-[626px] left-[150px] top-[80px] text-[#2d2d2d] text-[20px] font-normal font-epilogue leading-[27px]">
        Reach out to us across the galaxy! <br />
        <br />
        Share your thoughts, ask a question, or simply say hello. <br />
        Send us a message and let's explore the universe together!
      </div>

      {/* Input Fields */}
      <div className="absolute w-[364px] h-12 left-[786px] top-[28px]">
        <input
          type="text"
          placeholder="Name"
          className="w-full h-full bg-white border border-[#d9d9d9] rounded-lg px-4 text-[#5e548e] font-Syne text-base"
        />
      </div>
      <div className="absolute w-[364px] h-12 left-[786px] top-[110px]">
        <input
          type="email"
          placeholder="Email"
          className="w-full h-full bg-white border border-[#d9d9d9] rounded-lg px-4 text-[#5e548e] font-syne text-base"
        />
      </div>

      {/* Submit Button */}
      <div className="absolute w-[261px] h-11 left-[837px] top-[200px]">
        <button className="w-full h-full bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] text-white rounded-[20px] shadow-[0px_6px_8.7px_0px_rgba(159,134,192,0.45)] font-syne text-[22px] font-semibold leading-9">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
