import React from "react";
import foto from "../../asset/landing_page.png";
import { Link as ScrollLink } from "react-scroll";

const Displayed = () => {
  return (
    <div id="displayed" className="p-5 mt-[250px] max-w-[1300px] w-full lg:flex lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 hidden md:flex justify-center">
        <img src={foto} alt="Gambar Orang Berbicara" className="max-w-full h-auto transform transition-transform duration-300" />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-10">
        <h1 className="font-bold text-black text-5xl md:text-[56px] leading-[1] mx-auto">
          Belajar Bahasa Isyarat dengan <span className="text-navy">Klu</span>!
        </h1>
        <ScrollLink to="intro" smooth={true} offset={-70} duration={500}>
          <button className="bg-navy text-white font-semibold text-xl py-2 px-4 rounded-lg mt-8 hover:bg-blue-900 mx-auto lg:mx-0">
            Getting Started ➜
          </button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Displayed;
