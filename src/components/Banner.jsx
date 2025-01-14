import React from "react";

const Banner = () => {
  return (
    <div className="w-full max-w-[1300px] h-auto px-4 pt-12 pb-8 bg-[#eae4e9] flex flex-col justify-center items-center gap-6 md:h-[632px] md:px-[15px] md:pt-[100px] md:pb-[66px]">
      {/* Title */}
      <div className="text-center text-[#192a51] text-3xl font-normal font-castoro leading-[40px] md:text-5xl md:leading-[56px]">
        JOIN THE COSMIC JOURNEY!
      </div>

      {/* Subtitle */}
      <div className="text-center text-[#2d2d2d] text-base font-normal font-syne leading-[22px] md:text-lg md:leading-normal">
        Ready to explore the wonders of the universe? Become a part of our astronomy club today
        <br className="hidden md:block" />
        and discover a whole new world!
      </div>
    </div>
  );
};

export default Banner;
