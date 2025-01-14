import React from "react";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1300px] mx-auto px-4 py-8 bg-gradient-to-r from-[#c9def4] via-[#f5ccd4] to-[#d5c6e0] rounded-[25px] flex flex-col items-center gap-8 overflow-hidden">
      {/* Title */}
      <div className="text-center text-[#192a51] text-2xl md:text-[55px] font-normal font-felix leading-tight">
        Club Gallery
      </div>

      {/* Gallery */}
      <div className="w-full bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg shadow-md">
        {/* Images with captions */}
        {[img5, img6, img7].map((img, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img
              className="w-full h-[200px] sm:h-[250px] md:h-[330px] object-cover rounded-lg"
              src={img}
              alt={`Gallery ${index + 1}`}
            />
            <div className="text-center">
              <div className="text-[#2d2d2d] text-lg md:text-xl font-semibold font-epilogue leading-tight">
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
