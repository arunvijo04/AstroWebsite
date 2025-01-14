import React from "react";

function Footer1() {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-[#9f86c0] to-[#d5c6e0] flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-2">
      {/* Left Section */}
      <div className="text-[#666666] text-sm md:text-base font-normal font-['Syne'] leading-[27px] text-center md:text-left">
        astroclub@rset
      </div>

      {/* Center Section */}
      <div className="hidden lg:flex items-center mt-2 md:mt-0">
        <div
          className="text-sm font-normal text-[#192a51] cursor-pointer hover:underline"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </div>
      </div>

      {/* Right Section */}
      <div className="text-[#666666] text-sm md:text-base font-normal font-['Syne'] leading-normal text-center md:text-right mt-2 md:mt-0">
        Copyright © 2024
      </div>
    </div>
  );
}

export default Footer1;
