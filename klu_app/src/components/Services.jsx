import React from 'react'

const Services = () => {
    return (
        <div id='services' className="p-5 lg:pt-3 mt-10">
            <h1 className="text-center font-bold text-navy text-5xl mb-8 ml-8 lg:ml-5">Services</h1>
            <div className="w-full flex flex-col space-y-8 ml-10 lg:ml-6">
                {/* Baris 1 */}
                <div className="w-full flex flex-col">
                    <h2 className="font-bold text-navy text-2xl mb-4">Modules</h2>
                    <p className="text-lg text-navy">
                    <span className="text-navy font-semibold">Modules</span> pada <span className="text-navy font-semibold">Klu</span> berisi materi pembelajaran bahasa isyarat mulai dari huruf, kata, frasa, hingga kalimat. Modul ini juga berisi visualisasi bagaimana cara memperagakan bahasa isyaratnya.
                    </p>
                </div>
                {/* Baris 2 */}
                <div className="w-full flex flex-col">
                    <h2 className="font-bold text-navy text-2xl mb-4">Test</h2>
                    <p className="text-lg text-navy">
                    <span className="text-navy font-semibold">Test</span> pada <span className="text-navy font-semibold">Klu</span> adalah fitur untuk pengguna Klu menguji kemampuan berbahasa isyaratnya berdasarkan beberapa soal yang ada.
                    </p>
                </div>
                {/* Baris 3 */}
                <div className="w-full flex flex-col">
                    <h2 className="font-bold text-navy text-2xl mb-4">Scan</h2>
                    <p className="text-lg text-navy">
                    <span className="text-navy font-semibold">Scan</span> pada <span className="text-navy font-semibold">Klu</span> adalah fitur untuk pengguna mengetahui bahasa isyarat apa yang sedang dipraktikkannya atau orang-orang di sekitarnya. Fitur ini dapat digunakan hanya dengan menyalakan kamera di web atau apllikasi Klu.
                    </p>
                </div>
            </div>
        </div>
    );
  };
  
  export default Services;