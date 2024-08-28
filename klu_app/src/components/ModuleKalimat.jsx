import React from 'react';
import { Link } from 'react-router-dom';
import Assalamualaikum from '../asset/assalamualaikum.jpg'; 
import Selamat from '../asset/selamat.jpg'; 

const ModuleKalimat = () => {
  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[100px]">
      <h1 className="font-bold text-navy text-5xl mb-2 ml-8 lg:ml-5 mt-10">Modules - Kata/Frasa</h1>
      <div className="p-2 lg:pt-3 mt-2 w-full flex flex-col lg:flex-row">

        {/* Kolom Kiri */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
          <img
            src={Assalamualaikum}
            alt="Huruf A"
            className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
            style={{ width: '180px', height: '172px' }}
          />
          <h2 className="font-bold text-navy text-4xl mt-2">Assalamualaikum</h2> 
          <p className="text-lg text-navy mt-2">
          Kata "Assalamualaikum" membentuk huruf A dengana tangan dikepal dan digerakkan ke depan atas kepala. <br /><br /> 
          Mengapa terbentuk gerakan ini? "Assalamualaikum" dimulai dari huruf A, karena itu kepalan tangannya seperti huruf A. Namun, digerakkan di depan atas kepala untuk membentuk sebuah salam.
          </p>
        </div>

        {/* Garis pemisah */}
        <div className="hidden lg:block w-[2px] bg-blue-300 mx-4"></div>

        {/* Kolom Kanan */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
          <img
            src={Selamat}
            alt="Huruf B"
            className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
            style={{ width: '169px', height: '172px' }}
          />
          <h2 className="font-bold text-navy text-4xl mt-2">Selamat</h2> 
          <p className="text-lg text-navy mt-2">
          Kata "Selamat" digerakan dari kedua tangan memegang satu sama lain. Kemudian dibuka selebar badan. <br /><br /> 
          Mengapa terbentuk gerakan ini? Menyerupai ketika seseorang memberikan selamat kepada orang lain.
          </p>
        </div>
        </div>
      </div>
  );
};

export default ModuleKalimat;