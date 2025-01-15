import React from "react";
import eventsImage from "../assets/events.png"; // Import the image

const Explore = () => {
  return (
    <div className="px-4 py-8 max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-start">
      {/* Left Image */}
      <div className="w-full md:w-[800px] h-[300px] md:h-[450px] rounded-[30px] overflow-hidden md:mr-8">
        <img
          src={eventsImage}
          alt="Events"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section: Text and Button */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        {/* Title */}
        <div className="text-[#192a51] text-2xl md:text-[42px] font-normal font-felix leading-tight mb-6 md:mb-10">
          Explore Our Current and Future Events!
        </div>

        {/* Description */}
        <div className="text-[#192a51] text-base md:text-2xl font-normal font-garamond leading-relaxed mb-8 md:mb-12">
          Join us for upcoming events whether you're a seasoned astronomy enthusiast or just curious
          about the wonders of the universe, we invite you to be a part of our celestial community.
          Stay tuned for updates, and let's explore the cosmos together!
        </div>

        {/* Explore Button */}
        <div className="flex justify-center md:justify-start">
          <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] rounded-[20px] shadow-md text-white text-lg md:text-[22px] font-semibold font-syne">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
