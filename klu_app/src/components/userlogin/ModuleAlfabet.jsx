import React from 'react';
import { Link } from 'react-router-dom';
import hurufA from '../../asset/huruf A.jpeg'; 
import hurufB from '../../asset/huruf B.jpeg'; 
import HomeIcon from './HomeIcon'

const ModuleAlfabet = () => {
  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[100px]">
      <HomeIcon />
      <h1 className="font-bold text-navy text-5xl mb-2 ml-8 lg:ml-5 mt-10">Modules - Alfabet</h1>
      <div className="p-2 lg:pt-3 mt-2 w-full flex flex-col lg:flex-row">

        {/* Kolom Kiri */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
          <img
            src={hurufA}
            alt="Huruf A"
            className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
            style={{ width: '280px', height: '210px' }}
          />
          <h2 className="font-bold text-navy text-4xl mt-2">A</h2> 
          <p className="text-lg text-navy mt-2">
            Huruf A dilakukan dengan menggunakan satu tangan dikepal dengan ibu jari menghadap ke atas. <br /><br /> 
            Mengapa bentuknya seperti ini? Bentuknya mirip seperti huruf A kecil (a) di mana penulisan hurufnya berbentuk bulat. Jika tangan dikepal, bentuknya akan menyerupai bentuk bulat itu.
          </p>
        </div>

        {/* Garis pemisah */}
        <div className="hidden lg:block w-[2px] bg-blue-300 mx-4"></div>

        {/* Kolom Kanan */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
          <img
            src={hurufB}
            alt="Huruf B"
            className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
            style={{ width: '280px', height: '210px' }}
          />
          <h2 className="font-bold text-navy text-4xl mt-2">B</h2> 
          <p className="text-lg text-navy mt-2">
          Huruf B dilakukan dengan menggunakan satu tangan dikepal dengan 4 jari menghadap ke atas dan ibu jari ditekuk sebagian. <br /><br /> 
          Mengapa bentuknya seperti ini? Bentuk tangan ini menyerupai huruf B kecil (b), dengan keempat jari yang tegak mewakili garis vertikal dan ibu jari melambangkan bagian bulat huruf b.
          </p>
        </div>
        </div>
      </div>
  );
};

export default ModuleAlfabet;