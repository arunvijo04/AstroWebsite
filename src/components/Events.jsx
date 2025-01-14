import React from "react";
import orion from "../assets/orion.jpg"; // Adjust the image path according to your folder structure
import astronomia from "../assets/astronomia.jpg";
import wesat from "../assets/wesat.jpg";

const Events = () => {
  return (
    <div id="events" className="w-full max-w-[1300px] h-auto relative mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center text-[#192a51] text-3xl md:text-[55px] font-normal font-felix mb-6">
        Events
      </div>

      {/* Subtitle */}
      <div className="text-center text-[#192a51] text-base md:text-2xl font-normal font-garamond leading-relaxed mb-10">
        Venture into a cosmic blend of knowledge and excitement at our Astronomy Club events. <br />
        From captivating stargazing nights to informative workshops and celestial competitions, <br />
        join us for stellar experiences.
      </div>

      {/* Event Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Event 1 */}
        <div className="w-full h-[250px] md:h-[371px] bg-[#a6a7ab]/40 rounded-[30px] overflow-hidden">
          <img
            src={orion}
            alt="Orion"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
        {/* Event 2 */}
        <div className="w-full h-[250px] md:h-[371px] bg-[#a6a7ab]/40 rounded-[30px] overflow-hidden">
          <img
            src={astronomia}
            alt="Astronomia"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
        {/* Event 3 */}
        <div className="w-full h-[250px] md:h-[371px] bg-[#a6a7ab]/40 rounded-[30px] overflow-hidden">
          <img
            src={wesat}
            alt="Wesat"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
