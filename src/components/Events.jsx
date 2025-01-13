import React from "react";

const Events = () => {
  return (
    <div className="w-[1300px] h-[632px] relative mx-auto">
      {/* Title */}
      <div className="w-[565px] absolute left-[362px] top-0 text-center text-[#192a51] text-[55px] font-normal font-felix">
        Events
      </div>

      {/* Subtitle */}
      <div className="w-[1025px] h-[106px] absolute left-[158px] top-[118px] text-center text-[#192a51] text-2xl font-normal font-garamond leading-relaxed">
        Venture into a cosmic blend of knowledge and excitement at our Astronomy Club events. <br />
        From captivating stargazing nights to informative workshops and celestial competitions, <br />
        join us for stellar experiences.
      </div>

      {/* Event Boxes */}
      <div className="absolute w-[354px] h-[371px] left-0 top-[261px] bg-[#a6a7ab]/40 rounded-[30px]"></div>
      <div className="absolute w-[354px] h-[371px] left-[473px] top-[261px] bg-[#a6a7ab]/40 rounded-[30px]"></div>
      <div className="absolute w-[354px] h-[371px] left-[946px] top-[261px] bg-[#a6a7ab]/40 rounded-[30px]"></div>
    </div>
  );
};

export default Events;
