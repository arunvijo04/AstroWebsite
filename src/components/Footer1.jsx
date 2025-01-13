import React from "react";

function Footer1() {
  return (
    <div className="w-full h-[60px] bg-gradient-to-b from-[#9f86c0] to-[#d5c6e0] overflow-hidden flex justify-between items-center px-4 md:px-8 lg:px-16">
      {/* Left Section */}
      <div className="text-[#666666] text-sm md:text-base font-normal font-['Syne'] leading-[27px]">
        astroclub@rset
      </div>

      {/* Center Section */}
      <div className="hidden lg:flex items-center">
        <div className="text-sm font-normal text-[#192a51] cursor-pointer">
          Back to top
        </div>
      </div>

      {/* Right Section */}
      <div className="text-[#666666] text-sm md:text-base font-normal font-['Syne'] leading-normal text-right">
        Copyright © 2024
      </div>
    </div>
  );
}

export default Footer1;
