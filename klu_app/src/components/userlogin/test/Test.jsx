import React from 'react';
import alfabet from '../../../asset/alfabet.jpg'; 
import katafrasa from '../../../asset/katafrasa.jpg'; 
import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <div id = "bg" className="w-full h-screen flex flex-col items-center lg:px-[72px] pt-[100px]">
      <h1 className="font-bold text-navy text-5xl mb-8">Test</h1>
      
      <div className="w-full flex flex-row justify-center space-x-8">
        {/* Kolom Kiri */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
            <img src={alfabet} alt="Test Alfabet" className="w-64 h-64 object-cover" />
          </div>
          <Link to="/test-alfabet">
            <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
              Go to Test Alfabet ➜
            </button>
          </Link>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
            <img src={katafrasa} alt="Test Kalimat" className="w-64 h-64 object-cover" />
          </div>
          <Link to="/test-kalimat">
            <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
              Go to Test Kalimat ➜
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Test;