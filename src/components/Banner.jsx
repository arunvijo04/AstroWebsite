import React from "react";

const Banner = () => {
  return (
    <div className="w-[1300px] h-[632px] px-[15px] pt-[100px] pb-[66px] bg-[#eae4e9] flex flex-col justify-center items-center gap-8">
      {/* Title */}
      <div className="text-center text-[#192a51] text-5xl font-normal font-castoro leading-[56px]">
        JOIN THE COSMIC JOURNEY!
      </div>
      
      {/* Subtitle */}
      <div className="text-center text-[#2d2d2d] text-lg font-normal font-syne leading-normal">
        Ready to explore the wonders of the universe? Become a part of our astronomy club today
        <br />
        and discover a whole new world!
      </div>
    </div>
  );
};

export default Banner;
