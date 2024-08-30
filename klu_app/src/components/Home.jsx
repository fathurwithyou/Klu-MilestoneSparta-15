import React from "react";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import Introduction from "./Introduction";
import Scroll from "./Scroll";
import Displayed from "./Displayed";

const Home = () => {
  return (
    <div id="bg" className="w-full h-full flex flex-col items-center justify-center md:px-10 lg:px-[72px]">
      <Navbar />
      <Displayed />
      <Scroll />
      <Introduction />
      <About />
      <Services />
      <Testimonial />
    </div>
  );
};

export default Home;
