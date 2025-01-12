import React from "react";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const Gallery = () => {
  return (
    <section className="bg-gradient-to-r from-[#c9def4] via-[#f5ccd4] to-[#d5c6e0] py-10 rounded-2xl mx-4 md:mx-10 lg:mx-20">
      <h2 className="text-center text-[#192a51] text-4xl md:text-5xl font-felix mb-8">Club Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[
          { src: img5, label: "Chenda Melam" },
          { src: img6, label: "Pookalam" },
          { src: img7, label: "Kathakali" },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-4">
            <img src={item.src} alt={item.label} className="w-full h-52 object-cover rounded-lg" />
            <h3 className="mt-4 text-[#2d2d2d] text-xl font-semibold text-center">{item.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
