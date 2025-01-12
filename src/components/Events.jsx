import React from "react";

const Events = () => {
  return (
    <section className="bg-gradient-to-b from-[#eae4e9] to-[#d5c6e0] py-10">
      <h2 className="text-[#192a51] text-4xl md:text-5xl font-felix text-center">
        Explore Our Current and Future Events!
      </h2>
      <p className="mt-6 text-lg md:text-xl text-[#2d2d2d] font-garamond text-center px-4 md:px-20 lg:px-48">
        Join us for upcoming events, whether you're a seasoned astronomy enthusiast or just curious
        about the wonders of the universe. Stay tuned for updates, and let's explore the cosmos
        together!
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {["Stargazing Night", "Celestial Workshops", "Astronomy Competitions"].map((event, index) => (
          <div
            key={index}
            className="bg-[#a6a7ab]/40 p-6 rounded-2xl shadow-lg text-center flex flex-col justify-between"
          >
            <h3 className="text-[#192a51] text-2xl font-semibold">{event}</h3>
            <p className="mt-4 text-[#2d2d2d] text-lg">Details about {event} will be updated soon!</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
