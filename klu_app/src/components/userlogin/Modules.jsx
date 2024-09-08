import React from 'react';
import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa'; 
import HomeIcon from './HomeIcon';

const Modules = () => {
  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start lg:px-[32px] pt-[100px]">
      <HomeIcon />
      <h1 className="font-bold text-navy text-5xl mb-2 pt-16">Modules</h1>
      
      {/* Bagian Alfabet */}
      <div className="w-full flex flex-col items-start mt-8">
        <div className="w-full flex flex-row items-start relative">
          <div className="w-1/5 flex justify-start mb-8 lg:mb-0 relative">
            <h2 className="font-bold text-navy text-3xl mb-2 mt-10">Alfabet</h2>
            {/* <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 text-blue-500">
              <FaArrowRight size={24} />
            </div> */}
          </div>
          <div className="w-4/5 flex flex-col lg:items-start text-center lg:text-left relative mb-20">
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
      </div>

      {/* Bagian Kalimat */}
      <div className="w-full flex flex-col items-start mt-8">
        <div className="w-full flex flex-row items-start relative">
          <div className="w-1/5 flex justify-start mb-8 lg:mb-0 relative">
            <h2 className="font-bold text-navy text-3xl mb-2 mt-10">Kalimat</h2>
            {/* <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 text-blue-500">
              <FaArrowRight size={24} />
            </div> */}
          </div>
          <div className="w-4/5 flex flex-col lg:items-start text-center lg:text-left relative mb-20">
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
    </div>
  );
};

export default Modules;