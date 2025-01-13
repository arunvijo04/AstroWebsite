import React from "react";

const Explore = () => {
  return (
    <div className="w-[1300px] h-[632px] relative mx-auto">
      {/* Left Decorative Box */}
      <div className="w-[329px] h-[450px] absolute left-0 top-24 bg-[#a6a7ab]/40 rounded-[30px]"></div>

      {/* Title */}
      <div className="w-[705px] h-[115px] absolute left-[373px] top-[120px] text-[#192a51] text-[42px] font-normal font-felix leading-tight">
        Explore Our Current and Future Events!
      </div>

      {/* Description */}
      <div className="w-[695px] h-[124px] absolute left-[373px] top-[280px] text-[#192a51] text-2xl font-normal font-garamond leading-relaxed">
        Join us for upcoming events whether you're a seasoned astronomy enthusiast or just curious
        about the wonders of the universe, we invite you to be a part of our celestial community.
        Stay tuned for updates, and let's explore the cosmos together!
      </div>

      {/* Explore Button */}
      <div className="w-[261px] h-11 absolute left-[368px] top-[454px] flex items-center justify-center bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] rounded-[20px] shadow-[0px_6px_8.7px_0px_rgba(159,134,192,0.45)]">
        <button className="text-white text-[22px] font-semibold font-syne leading-9">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Explore;
