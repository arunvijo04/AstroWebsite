import React from "react";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const Gallery = () => {
  return (
    <div className="w-[1300px] h-[632px] relative mx-auto px-6 pt-[42px] pb-[71px] bg-gradient-to-r from-[#c9def4] via-[#f5ccd4] to-[#d5c6e0] rounded-[25px] flex flex-col items-center gap-[54px] overflow-hidden">
      {/* Title */}
      <div className="text-center text-[#192a51] text-[55px] font-normal font-['Felix Titling'] leading-[42px]">
        Club Gallery
      </div>

      {/* Gallery */}
      <div className="w-[1117px] h-[403px] bg-white flex justify-start items-start gap-6">
        {/* Images with captions */}
        {[img5, img6, img7].map((img, index) => (
          <div key={index} className="grow shrink basis-0 flex flex-col gap-6">
            <img className="self-stretch h-[330px] object-cover" src={img} alt={`Gallery ${index + 1}`} />
            <div className="flex flex-col gap-2">
              <div className="text-[#2d2d2d] text-xl font-semibold font-['Epilogue'] leading-[30px]">
                {index === 0 ? "Chenda Melam" : index === 1 ? "Pookalam" : "Kathakali"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
