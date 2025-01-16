import React from "react";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-[1500px] h-auto relative mx-auto px-4 py-8 flex flex-col items-center"
    >
      {/* Left Image */}
      <img
        className="hidden md:block w-[172.69px] h-auto absolute left-0 top-[50%] transform -translate-y-1/2"
        src={img3}
        alt="Astronomy Club Event"
      />

      {/* Right Image */}
      <img
        className="hidden md:block w-[150.60px] h-auto absolute right-0 top-[50%] transform -translate-y-1/2"
        src={img4}
        alt="Stargazing Night"
      />

      {/* About Us Title */}
      <div className="text-center text-[#192a51] text-3xl md:text-[55px] font-normal font-felix mb-6">
        About Us
      </div>

      {/* Description Text */}
      <div className="text-center text-[#192a51] text-base md:text-2xl font-normal font-garamond leading-relaxed max-w-[900px]">
        Welcome to the Astronomy Club of Rajagiri School of Engineering and Technology, where curiosity meets the cosmos! 🌌
        <br />
        Our club is a vibrant community of space enthusiasts, stargazers, and budding astronomers united by a shared passion for
        exploring the mysteries of the universe. From observing celestial wonders to decoding the science behind the stars, we
        aim to make astronomy accessible, exciting, and engaging for everyone.
        <br />
        <br />
        <strong>What We Do</strong>
        <br />
        <br />
        Stargazing Events: Organized under clear skies, these sessions bring us closer to the planets, stars, and deep-sky objects.
        <br />
        Workshops & Talks: We host experts and thought leaders in the field to share insights and spark curiosity.
        <br />
        Competitions & Quizzes: From astrophotography contests to intercollegiate quizzes, we inspire creativity and healthy
        competition.
        <br />
        Hands-On Projects: Our members collaborate on innovative projects like constellation mapping, telescope automation, and
        more.
        <br />
        <br />
        Whether you’re a seasoned astronomy enthusiast or just someone who marvels at the night sky, the Astronomy Club offers a
        place for you to belong. Together, let’s uncover the wonders of the cosmos and ignite the starry spark in every heart!
      </div>
    </div>
  );
};

export default About;
