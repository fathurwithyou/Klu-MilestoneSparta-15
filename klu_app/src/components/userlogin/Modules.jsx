import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from './HomeIcon'

const Modules = () => {
  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start lg:px-[72px] pt-[100px]">
      <HomeIcon />
      <h1 className="font-bold text-navy text-5xl mb-2 pl-3 pt-20">Modules</h1>
      <div className="p- lg:pt-3 mt-2 w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <h2 className="font-bold text-navy text-3xl mb-2 lg:ml-5 mt-10 pl-20">Alfabet</h2>
        </div>
        <div className="hidden lg:block w-[2px] bg-blue-300 mx-4"></div>
        <div className="w-full lg:w-4/5 flex flex-col lg:items-start text-center lg:text-left relative mb-20">
          <div style={{ backgroundColor: 'rgb(230, 236, 255)', padding: '20px', borderRadius: '10px' }}>
            <p className="text-lg text-navy">
            Modul pembelajaran kalimat dalam bahasa isyarat ini dirancang untuk membantu pengguna memahami dan menguasai setiap alfabet menggunakan gerakan tangan. Dengan modul ini, pengguna diharapkan dapat menguasai setiap alfabet dalam bahasa isyarat
            </p>
          </div>

          {/* Button Link */}
          <div className="absolute bottom-[-50px] right-0">
            <Link to="/module-alfabet">
              <button className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold">
                View Module ➜
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bagian bawah */}
      <div className="p-2 lg:pt-3 mt-8 w-full flex flex-col lg:flex-row">
        {/* Kolom Kiri untuk Subjudul */}
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <h2 className="font-bold text-navy text-3xl mb-2 ml-8 lg:ml-5 mt-10 pl-20">Kalimat</h2>
        </div>

        {/* Garis pemisah */}
        <div className="hidden lg:block w-[2px] bg-blue-300 mx-4"></div>

        {/* Kolom Kanan untuk Teks */}
        <div className="w-full lg:w-4/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative mb-20">
          <div style={{ backgroundColor: 'rgb(230, 236, 255)', padding: '20px', borderRadius: '10px' }}>
            <p className="text-lg text-navy">
            Modul pembelajaran kalimat dalam bahasa isyarat ini dirancang untuk membantu pengguna memahami dan menguasai berbagai kata/frasa menggunakan gerakan tangan. Dengan modul ini, pengguna diharapkan dapat berkomunikasi dengan berbagai kata/frasa dalam bahasa isyarat.
            </p>
          </div>

          {/* Button Link */}
          <div className="absolute bottom-[-50px] right-0">
            <Link to="/module-kalimat">
              <button className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold">
                View Module ➜
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modules;