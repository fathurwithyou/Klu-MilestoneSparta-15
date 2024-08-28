import React from 'react';
import { Link } from 'react-router-dom';
import hurufG from '../../asset/huruf g.jpeg'; 
import hurufH from '../../asset/huruf h.jpeg'; 
import HomeIcon from './HomeIcon';

const ModuleAlfabet4 = () => {
    return (
        <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[100px]">
          <HomeIcon />
          <h1 className="font-bold text-navy text-5xl mb-2 ml-8 lg:ml-5 mt-10">Modules - Alfabet</h1>
          <div className="p-2 lg:pt-3 mt-2 w-full flex flex-col lg:flex-row">
    
            {/* Kolom Kiri */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
              <img
                src={hurufG}
                alt="Huruf G"
                className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
                style={{ width: '280px', height: '210px' }}
              />
              <h2 className="font-bold text-navy text-4xl mt-2">G</h2> 
              <p className="text-lg text-navy mt-2">
                Huruf G dilakukan dengan meluruskan jari jempol dan telunjuk serta beri jarak sekitar 1 cm, lalu tunjukkan secara menyamping selagi telapak tangan menghadap Anda. <br /><br /> 
              </p>
            </div>
    
            {/* Garis pemisah */}
            <div className="hidden lg:block w-[2px] bg-blue-300 mx-4"></div>
    
            {/* Kolom Kanan */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 text-center">
              <img
                src={hurufH}
                alt="Huruf H"
                className="max-w-full h-auto transform transition-transform duration-300 rounded-lg"
                style={{ width: '280px', height: '210px' }}
              />
              <h2 className="font-bold text-navy text-4xl mt-2">H</h2> 
              <p className="text-lg text-navy mt-2">
              Huruf H dilakukan dengan membuat isyarat abjad G dan luruskan jari tengah rapat dengan jari telunjuk, lalu telapak tangan menghadap ke arah Anda. <br /><br /> 
              </p>
            </div>
          </div>
    
          {/* Tombol Navigasi */}
          <div className="flex justify-between w-full mt-8 px-10 lg:px-[72px]">
            <Link to="/module-alfabet-3" className="bg-navy text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Previous
            </Link>
            <Link to="/module-alfabet-5" className="bg-navy text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Next
            </Link>
          </div>
        </div>
      );
};

export default ModuleAlfabet4;