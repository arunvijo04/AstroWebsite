import React from "react";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const About = () => {
  return (
    <div id="about" className="w-full max-w-[1500px] h-auto relative mx-auto px-4 py-8">
      {/* Left Image */}
      <img
        className="hidden md:block w-[172.69px] h-auto absolute left-0 top-0"
        src={img3}
        alt="Astronomy Club Event"
      />

      {/* Right Image */}
      <img
        className="hidden md:block w-[150.60px] h-auto absolute right-0 top-0"
        src={img4}
        alt="Stargazing Night"
      />

      {/* About Us Title */}
      <div className="text-center text-[#192a51] text-3xl md:text-[55px] font-normal font-felix mb-6">
        About Us
      </div>

      {/* Description Text */}
      <div className="text-center text-[#192a51] text-base md:text-2xl font-normal font-garamond leading-relaxed">
        Empowering curiosity and fostering a passion for the cosmos, our astronomy club<br />
        at Manipal strives to create an inclusive space for students to explore the wonders<br />
        of the universe. Through stargazing events, educational outreach, and collaborative<br />
        projects, we aim to inspire a deeper appreciation for astronomy and cultivate a<br />
        community that celebrates the beauty of the night sky. Join us on a journey of<br />
        discovery as we explore the mysteries of the cosmos together.
      </div>
    </div>
  );
};

export default About;
