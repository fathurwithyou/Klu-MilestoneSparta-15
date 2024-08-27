import React from 'react';
import foto from '../asset/landing_page.png';

const Home = () => {
  return (
    <div id="bg" className="w-full h-screen flex items-center justify-center px-10 lg:px-[72px]">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Kolom Kiri untuk Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={foto}
            alt="Gambar Orang Berbicara"
            className="max-w-full h-auto transform transition-transform duration-300"
          />
        </div>
        {/* Kolom Kanan untuk Teks */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-bold text-black text-5xl">Belajar Bahasa Isyarat dengan <span className="text-navy">Klu</span>!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;