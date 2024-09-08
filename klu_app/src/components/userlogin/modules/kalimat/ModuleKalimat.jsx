import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ModuleKalimat = () => {
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);

  return (
    <div id = "bg" className="w-full h-screen flex flex-col items-center lg:px-[72px] pt-[100px]">
      <h1 className="font-bold text-navy text-5xl mb-8">Module Kalimat</h1>
      
      {/* Modul Bacaan */}
      <div className="w-full max-w-2xl mb-4">
        <button 
          className="w-full text-left font-bold text-xl bg-gray-200 p-4 rounded-lg"
          onClick={() => setIsReadingOpen(!isReadingOpen)}
        >
          Modul Bacaan
        </button>
        {isReadingOpen && (
          <div className="bg-gray-100 p-4 mt-2 rounded-lg">
            <p className="text-lg text-navy mb-4">
              Penjelasan tentang modul bacaan kalimat dalam bahasa isyarat.
            </p>
            <Link to="/module-kalimat-1">
              <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
                Go to Modul Bacaan ➜
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Modul Video */}
      <div className="w-full max-w-2xl mb-4">
        <button 
          className="w-full text-left font-bold text-xl bg-gray-200 p-4 rounded-lg"
          onClick={() => setIsVideoOpen(!isVideoOpen)}
        >
          Modul Video
        </button>
        {isVideoOpen && (
          <div className="bg-gray-100 p-4 mt-2 rounded-lg">
            <p className="text-lg text-navy mb-4">
              Penjelasan tentang modul video kalimat dalam bahasa isyarat.
            </p>
            <Link to="/module-video-kalimat">
              <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
                Go to Modul Video ➜
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Test Modul Alfabet */}
      <div className="w-full max-w-2xl mb-4">
        <button 
          className="w-full text-left font-bold text-xl bg-gray-200 p-4 rounded-lg"
          onClick={() => setIsTestOpen(!isTestOpen)}
        >
          Test Modul Kalimat
        </button>
        {isTestOpen && (
          <div className="bg-gray-100 p-4 mt-2 rounded-lg">
            <p className="text-lg text-navy mb-4">
              Penjelasan tentang test modul kalimat dalam bahasa isyarat.
            </p>
            <Link to="/test-kalimat">
              <button className="px-8 py-2 bg-navy text-white rounded-xl text-lg font-semibold">
                Go to Test Modul Kalimat ➜
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleKalimat;