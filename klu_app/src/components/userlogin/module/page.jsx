import React from "react";
import HomeIcon from "../HomeIcon";
import Alfabet from "./Alfabet";
import Kalimat from "./Kalimat";
import Angka from "./Angka";

const Modules = () => {
  return (
    <div id="bg" className="w-full h-full md:h-screen px-[32px] pt-[100px]">
      <HomeIcon />
      <h1 className="font-bold text-navy text-5xl mb-8 pt-16 text-center md:text-left">Modules</h1>
      <div className="flex flex-col md:flex-row items-start gap-[32px] mx-auto md:mx-0 max-w-fit">
        <Alfabet />
        <Angka />
        <Kalimat />
      </div>
    </div>
  );
};

export default Modules;
