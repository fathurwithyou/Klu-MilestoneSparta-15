import React from "react";
import logo from "../asset/logo_klu.png";

const About = () => {
  return (
    <div id='about' className="p-5 lg:pt-3 mt-10">
      <h1 className="text-center font-bold text-navy text-5xl mb-8">About</h1>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Kolom Kiri untuk Gambar */}
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={logo}
            alt="Gambar Deskripsi"
            className="max-w-full h-auto transform transition-transform duration-300 ml-10 lg:ml-8"
            width={200}
          />
        </div>
        {/* Kolom Kanan untuk Teks */}
        <div className="w-full lg:w-4/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <p className="text-lg text-navy">
            <span className="text-navy font-semibold">Klu</span> adalah aplikasi mobile yang dibuat untuk memudahkan komunikasi
            bagi tunawicara dan membantu pembelajaran bahasa isyarat bagi masyarakat yang lain. Aplikasi ini berisi fitur yang
            interaktif untuk mengenali, mempelajari, dan penggunaan bahasa isyarat dalam situasi tertentu dengan memanfaatkan
            computer vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
