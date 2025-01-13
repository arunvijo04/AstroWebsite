import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer1 from "./components/Footer1";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="bg-[#eae4e9]">
      <Hero />
      <div className="mt-10">
        <About />
      </div>
      <div className="mt-10">
        <Events />
      </div>
      <div className="mt-10">
        <Explore />
      </div>
      <div className="mt-10">
        <Gallery />
      </div>
      <Banner />
      <div className="mt-10">
        <Contact />
      </div>
      <Footer1 />
    </div>
  );
}

export default App;
