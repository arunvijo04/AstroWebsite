import React, { useState } from "react";
import img1 from "../assets/img1.png";

function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-[#c9def4] via-[#f5ccd4] to-[#b8a4c9] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Navbar */}
      <div className="w-[90%] max-w-[1200px] h-16 absolute top-6 bg-[#5e548e] rounded-full border-2 border-white shadow-lg backdrop-blur-md flex justify-between items-center px-4 md:px-8">
        {/* Logo on Left for Mobile and Desktop */}
        <div className="flex gap-4 items-center">
          <img
            src={img1}
            alt="Logo"
            className="w-18 h-10 md:w-18 md:h-14 cursor-pointer"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          ☰
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex gap-4 md:gap-8">
          <a href="#home" className="text-white text-sm md:text-xl font-syne cursor-pointer hover:underline">
            Home
          </a>
          <a href="#about" className="text-white text-sm md:text-xl font-syne cursor-pointer hover:underline">
            About
          </a>
          <a href="#events" className="text-white text-sm md:text-xl font-syne cursor-pointer hover:underline">
            Events
          </a>
          <a href="#gallery" className="text-white text-sm md:text-xl font-syne cursor-pointer hover:underline">
            Gallery
          </a>
          <a
            href="https://nova-bigbaam.web.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm md:text-xl font-syne cursor-pointer hover:underline"
          >
            NOVA
          </a>
        </div>

        {/* Contact Button */}
        {/* Contact Button */}
<button
  onClick={() => window.location.href = "mailto:astronomy@rajagiritech.edu.in"}
  className="hidden md:block bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] px-6 py-2 rounded-full text-white text-sm font-semibold font-syne shadow-md hover:scale-105 transition-transform"
>
  Contact
</button>

      </div>

      {/* Dropdown Menu for Mobile */}
      {isDropdownOpen && (
        <div className="absolute top-24 w-[90%] max-w-[1200px] bg-[#5e548e] rounded-lg border-2 border-white shadow-lg flex flex-col items-start px-4 py-4 z-10">
          <a href="#home" className="text-white text-sm font-syne cursor-pointer hover:underline mb-2">
            Home
          </a>
          <a href="#about" className="text-white text-sm font-syne cursor-pointer hover:underline mb-2">
            About
          </a>
          <a href="#events" className="text-white text-sm font-syne cursor-pointer hover:underline mb-2">
            Events
          </a>
          <a href="#gallery" className="text-white text-sm font-syne cursor-pointer hover:underline mb-2">
            Gallery
          </a>
          <a
            href="https://nova-bigbaam.web.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-syne cursor-pointer hover:underline mb-2"
          >
            Nova
          </a>
          <button 
          onClick={() => window.location.href = "mailto:astronomy@rajagiritech.edu.in"}
          className="bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] px-4 py-2 rounded-full text-white text-sm font-semibold font-syne shadow-md hover:scale-105 transition-transform mt-2">
            Contact
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="w-[90%] max-w-[608px] h-auto p-6 md:p-10 md:h-[286px] rounded-[30px] md:rounded-[50px] shadow-xl border-2 border-[#192a51] bg-white flex flex-col justify-center items-center absolute top-1/2 transform -translate-y-1/2 md:top-[184px] md:transform-none">
        <h1 className="text-3xl md:text-[80px] font-felix text-[#192a51] text-center leading-tight">
          Astronomy<br />Club
        </h1> 
        <div className="w-full h-[1px] bg-[#b8a4c9] my-4" />
        <p className="text-sm md:text-2xl font-castoro text-[#192a51] text-center">
          Rajagiri School of <br /> Engineering and Technology
        </p>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 left-4 md:bottom-[40px] md:left-[40px] text-[#192a51] font-castoro text-sm md:text-base">
        RSET
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-[40px] md:right-[40px] text-[#192a51] font-castoro text-sm md:text-xl">
        2024
      </div>
    </div>
  );
}

export default Hero;
