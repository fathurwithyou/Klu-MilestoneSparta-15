import React from "react";
import logo from "../../asset/logo_klu.png";

const About = () => {
  return (
    <div id='about' className="p-5 lg:pt-3 mt-10 flex justify-center items-center">
      <div className="w-full lg:w-3/5 flex flex-col items-center">
        <h1 className="text-center font-bold text-navy text-3xl md:text-5xl mb-8">About</h1>
        <div className="w-full flex justify-center mb-8 -mt-12">
          <img
            src={logo}
            alt="Gambar Deskripsi"
            className="max-w-full h-auto transform transition-transform duration-300 ml-3"
            width={300}
          />
        </div>
        {/* Baris Kedua untuk teks */}
        <div className="w-full flex flex-col justify-center items-center text-center -mt-10">
          <p className="text-xl text-navy">
            <span className="text-navy font-semibold">Klu</span> adalah aplikasi mobile yang dibuat untuk memudahkan komunikasi bagi tunawicara dan membantu pembelajaran bahasa isyarat bagi masyarakat yang lain. Aplikasi ini berisi fitur yang interaktif untuk mengenali, mempelajari, dan penggunaan bahasa isyarat dalam situasi tertentu dengan memanfaatkan computer vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;