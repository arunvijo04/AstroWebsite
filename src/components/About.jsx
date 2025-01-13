import React from "react";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const About = () => {
  return (
    <div className="w-[1500px] h-[632px] relative mx-auto">
      {/* Left Image */}
      <img
        className="w-[172.69px] h-[643px] absolute left-0 top-0"
        src={img3}
        alt="Astronomy Club Event"
      />
      
      {/* Right Image */}
      <img
        className="w-[150.60px] h-[643px] absolute right-0 top-0"
        src={img4}
        alt="Stargazing Night"
      />
      
      {/* About Us Title */}
      <div className="w-[565px] absolute left-[462px] top-20 text-center text-[#192a51] text-[55px] font-normal font-felix">
        About Us
      </div>
      
      {/* Description Text */}
      <div className="w-[787.12px] h-[184.28px] absolute left-[333.93px] top-60 text-center text-[#192a51] text-2xl font-normal font-garamond leading-relaxed">
        Empowering curiosity and fostering a passion for the cosmos, our astronomy club<br />
        at Manipal strives to create an inclusive space for students to explore the wonders<br />
        the universe. Through stargazing events, educational outreach, and collaborative<br />
        projects, we aim to inspire a deeper appreciation for astronomy and cultivate a<br />
        community that celebrates the beauty of the night sky. Join us on a journey of<br />
        discovery as we explore the mysteries of the cosmos together.
      </div>
    </div>
  );
};

export default About;
