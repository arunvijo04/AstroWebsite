import React from "react";
import img1 from "../assets/img1.png";

function Hero() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#c9def4] via-[#f5ccd4] to-[#b8a4c9] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Navbar */}
      <div className="w-[1200px] h-[66.84px] absolute top-[27.71px] bg-[#5e548e] rounded-full border-2 border-white shadow-lg backdrop-blur-md flex justify-between items-center px-8">
        <div className="flex gap-8 items-center">
          <img
            src={img1}
            alt="Logo"
            className="w-14 h-14 cursor-pointer"
          />
          <div className="flex gap-8">
            <div className="text-white text-lg font-syne cursor-pointer hover:underline">
              Home
            </div>
            <div className="text-white text-lg font-syne cursor-pointer hover:underline">
              About
            </div>
            <div className="text-white text-lg font-syne cursor-pointer hover:underline">
              Events
            </div>
            <div className="text-white text-lg font-syne cursor-pointer hover:underline">
              Gallery
            </div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] px-6 py-2 rounded-full text-white text-sm font-semibold font-syne shadow-md hover:scale-105 transition-transform">
          Contact
        </button>
      </div>

      {/* Hero Section */}
      <div className="w-[608px] h-[286px] absolute top-[184px] rounded-[50px] shadow-xl border-2 border-[#192a51] bg-white flex flex-col justify-center items-center">
        <h1 className="text-[74px] font-felix text-[#192a51] text-center leading-tight">
          Astronomy<br />Club
        </h1>
        <div className="w-[563px] h-[1px] bg-[#b8a4c9] my-4" />
        <p className="text-lg font-castoro text-[#192a51] text-center">
          Rajagiri School of <br /> Engineering and Technology
        </p>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-[40px] left-[40px] text-[#192a51] font-castoro">
        RSET
      </div>
      <div className="absolute bottom-[40px] right-[40px] text-[#192a51] font-castoro text-xl">
        2024
      </div>
    </div>
  );
}

export default Hero;
