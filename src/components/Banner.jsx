import React from "react";

const Banner = () => {
  return (
    <div  className="w-full max-w-[1500px] h-auto relative mx-auto px-4 py-8">

<div className="text-center text-[#192a51] text-3xl font-normal font-castoro leading-[40px] md:text-4xl md:leading-[50px]">
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
