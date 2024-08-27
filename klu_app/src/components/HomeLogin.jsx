import React from 'react';
import alfabet from '../asset/alfabet.jpg'; 
import katafrasa from '../asset/katafrasa.jpg'; 

const HomeLogin = () => {
  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[100px]">
      <h1 className="font-bold text-navy text-5xl mb-2 ml-8 lg:ml-5 mt-10">Welcome, User!</h1> {/* Tambahkan judul h1 di luar kontainer kolom kiri */}
      <div className="p-2 lg:pt-3 mt-2 w-full flex flex-col lg:flex-row">
        {/* Kolom Kiri */}
        <div className="w-full lg:w-2/5 p-5">
          <h2 className="text-sm font-semibold mb-4">Modules</h2>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="custom-image-container">
                {/* Tempat untuk menampilkan gambar */}
                <img src={alfabet} alt="Alfabet" className="custom-image bordered-image" /> {/* Tambahkan kelas bordered-image */}
                <p className="custom-title font-bold">Alfabet</p> {/* Tambahkan elemen teks di bawah gambar */}
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="custom-image-container">
                {/* Tempat untuk menampilkan gambar */}
                <img src={katafrasa} alt="Kata/Frasa" className="custom-image bordered-image" /> {/* Tambahkan kelas bordered-image */}
                <p className="custom-title font-bold">Kata/Frasa</p> {/* Tambahkan elemen teks di bawah gambar */}
              </div>
            </div>
          </div>
        </div>
        {/* Kolom Kanan */}
        <div className="w-full lg:w-3/5 p-5">
          <h2 className="text-sm font-semibold mb-4">Scan</h2>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
            {/* Tempat untuk upload foto */}
            <input type="file" accept="image/*" className="hidden" id="upload-photo" />
            <label htmlFor="upload-photo" className="cursor-pointer">Upload Photo</label>
          </div>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
            {/* Tempat untuk upload video */}
            <input type="file" accept="video/*" className="hidden" id="upload-video" />
            <label htmlFor="upload-video" className="cursor-pointer">Upload Video</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;