import React from 'react';
import { Link } from 'react-router-dom';
import bacaan from "../../../../asset/modul_bacaan.jpg";
import video from "../../../../asset/modul_video.jpg";
import test from "../../../../asset/test.png";
import HomeIcon from '../../HomeIcon';

const ModuleAngka= () => {

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start lg:px-[32px] pt-[100px]">
      <HomeIcon />
      <h1 className="font-bold text-navy text-5xl mb-8 mt-12">Module Angka</h1>
      
      <div className="w-full flex justify-between px-10">
        {/* Modul Bacaan */}
        <div className="w-1/4 h-100 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <img src={bacaan} alt="Modul Bacaan" className="w-80 h-48 mb-4" />
          <h2 className="font-bold text-navy text-xl mb-2">Modul Bacaan</h2>
          <p className="text-lg text-black text-center mb-4 px-10">
            Berisikan modul bacaan angka dalam bahasa isyarat.
          </p>
          <Link to="/module-angka-1">
            <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
              Baca Modul ➜
            </button>
          </Link>
        </div>

        {/* Modul Video */}
        <div className="w-1/4 h-100 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <img src={video} alt="Modul Video" className="w-80 h-48 mb-4" />
          <h2 className="font-bold text-navy text-xl mb-2">Modul Video</h2>
          <p className="text-lg text-black text-center mb-4 px-10">
            Berisikan modul video angka dalam bahasa isyarat.
          </p>
          <Link to="/module-video-angka">
            <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
              Tonton Video ➜
            </button>
          </Link>
        </div>

        {/* Test Modul Kalimat */}
        <div className="w-1/4 h-100 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <img src={test} alt="Test Modul Alfabet" className="w-80 h-48 mb-4" />
          <h2 className="font-bold text-navy text-xl mb-2">Test Modul Angka</h2>
          <p className="text-lg text-black text-center mb-4 px-10">
            Berisikan test modul angka dalam bahasa isyarat.
          </p>
          <Link to="/test-angka">
            <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
              Test Modul ➜
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModuleAngka;