import React from 'react';
import foto from '../asset/landing_page.png';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div id="bg" className="w-full h-full flex flex-col items-center justify-center px-10 lg:px-[72px]">
      <Navbar />
      <div className="p-5 mt-[169px] max-w-[1200px] w-full flex  lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={foto}
            alt="Gambar Orang Berbicara"
            className="max-w-full h-auto transform transition-transform duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-bold text-black text-5xl">Belajar Bahasa Isyarat dengan <span className="text-navy">Klu</span>!</h1>
        </div>
      </div>
      <About />
      <Services />
    </div>
  );
};

export default Home;