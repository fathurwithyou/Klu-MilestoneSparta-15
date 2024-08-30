import React from "react";
import { Link } from "react-router-dom";
import hurufI from "../../../../asset/huruf i.jpeg";
import hurufJ from "../../../../asset/huruf j.jpeg";
import HomeIcon from "../../HomeIcon";

const ModuleAlfabet5 = () => {
  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[100px]">
      <HomeIcon />
      <h1 className="font-bold text-navy text-5xl mb-2 ml-8 lg:ml-5 mt-10">Modules - Alfabet</h1>
      <div className="p-2 lg:pt-3 mt-2 w-full flex flex-col lg:flex-row">
        {/* Kolom Kiri */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
          <img
            src={hurufI}
            alt="Huruf I"
            className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
            style={{ width: "280px", height: "210px" }}
          />
          <h2 className="font-bold text-navy text-4xl mt-2">I</h2>
          <p className="text-lg text-navy mt-2">
            Huruf I dilakukan dengan mengepalkan tangan dan luruskan jari kelingking ke atas. <br />
            <br />
          </p>
        </div>

        {/* Garis pemisah */}
        <div className="hidden lg:block w-[2px] bg-blue-300 mx-4"></div>

        {/* Kolom Kanan */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
          <img
            src={hurufJ}
            alt="Huruf J"
            className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
            style={{ width: "280px", height: "210px" }}
          />
          <h2 className="font-bold text-navy text-4xl mt-2">J</h2>
          <p className="text-lg text-navy mt-2">
            Huruf J dilakukan dengan mengepalkan tangan, lalu luruskan kelingking dan gunakan untuk menulis huruf J di udara.
            <br />
            <br />
          </p>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between w-full mt-8 px-10 lg:px-[72px]">
        <Link to="/module-alfabet-4" className="bg-navy text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Previous
        </Link>
        <Link to="/module-alfabet-6" className="bg-navy text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Next
        </Link>
      </div>
    </div>
  );
};

export default ModuleAlfabet5;
