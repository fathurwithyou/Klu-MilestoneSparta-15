import React, { useState } from 'react';
import Webcam from 'react-webcam';
import alfabet from '../asset/alfabet.jpg'; 
import katafrasa from '../asset/katafrasa.jpg'; 
import abjad_klu from '../asset/abjad_klu.png';

const HomeLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsScanning(false);
  };

  const handleScan = () => {
    setIsScanning(true);
  };

  const handleUpload = () => {
    document.getElementById('upload-media').click();
    closeModal();
  };

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[100px]">
      <h1 className="font-bold text-navy text-6xl mb-2 mt-10">Welcome, User!</h1>
      <div className="p-2 lg:pt-3 w-full flex flex-col lg:flex-row items-stretch">
        {/* Kolom Kiri */}
        <div className="w-full lg:w-2/5 p-5 flex flex-col">
          <h2 className="text-lg font-semibold mb-4"><span className='text-navy'>Modules</span></h2>
          <div className="flex flex-col lg:flex-row gap-10 flex-grow">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="custom-image-container">
                <img src={alfabet} alt="Alfabet" className="custom-image bordered-image" />
                <p className="custom-title font-bold">Alfabet</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="custom-image-container">
                <img src={katafrasa} alt="Kata/Frasa" className="custom-image bordered-image" />
                <p className="custom-title font-bold">Kata/Frasa</p>
              </div>
            </div>
          </div>
        </div>
        {/* Kolom Kanan */}
        <div className="w-full lg:w-3/5 p-5 flex flex-col">
          <h2 className="text-lg font-semibold mb-4"><span className='text-navy'>Scan</span></h2>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4 flex-grow">
            <input type="file" accept="image/*,video/*" className="hidden" id="upload-media" />
            <button onClick={openModal} className="cursor-pointer">Upload Photo or Video</button>
          </div>
        </div>
      </div>

      <hr className="w-full border-t-2 border-navy my-4" />

      <h2 className="text-lg font-semibold mb-4 text-navy pl-10">Test</h2>

      <div className="w-full flex flex-col lg:flex-row items-stretch">
        {/* Kolom Kiri */}
        <div className="w-full lg:w-1/6 p-5 flex items-center justify-center">
          <img src={abjad_klu} alt="Abjad KLU" className="w-full h-auto" />
        </div>
        {/* Kolom Tengah */}
        <div className="w-full lg:w-4/6 p-5 flex items-center justify-center">
          <p className="text-left text-navy">Tes bahasa isyarat ini adalah sarana bagi Anda untuk menguji kemampuan berbahasa isyarat. Tes ini terdiri dari 3 bagian, yaitu alfabet, kalimat, dan praktik. Pada bagian alfabet, Anda diminta untuk menjawab alfabat apakah yang ditunjukkan pada soal. Begitu juga untuk kalimat. Untuk praktik, Anda perlu mempraktikkan huruf/kata/frasa/kalimat yang ditulis pada soal.</p>
        </div>
        {/* Kolom Kanan */}
        <div className="w-full lg:w-1/6 p-5 flex items-center justify-center">
          <button onClick={() => window.location.href='/test'} className="bg-navy text-white px-4 py-2 rounded-xl font-semibold hover:bg-dark-navy">Take Your Test</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-semibold mb-4">Scan</h2>
            {!isScanning ? (
              <>
                <button onClick={handleScan} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 mb-2">Scan</button>
                <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded mb-2">Upload Photo or Video</button>
                <button onClick={closeModal} className="text-red-500">Cancel</button>
              </>
            ) : (
              <>
                <Webcam className="w-full h-40 mb-4" />
                <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLogin;