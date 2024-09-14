import React from "react";
import { Link } from "react-router-dom";

const Angka = () => {
  return (
    <div className="max-w-[420px] max-h-[350px]">
      <h2 className="font-bold text-navy text-3xl text-center md:text-left">Angka</h2>
      <div className="flex flex-col lg:items-start text-center lg:text-left relative mb-20">
        <div
          style={{
            backgroundColor: "rgb(230, 236, 255)",
            padding: "20px",
            borderRadius: "10px",
          }}>
          <p className="text-lg text-navy">
            Modul pembelajaran angka dalam bahasa isyarat ini dirancang untuk membantu pengguna memahami dan menguasai setiap
            angka menggunakan gerakan tangan. Dengan modul ini, pengguna diharapkan dapat menguasai setiap angka dalam bahasa
            isyarat.
          </p>
        </div>

        <div className="py-2 flex flex-row justify-center">
          <Link to="/module-angka">
            <button className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold">
              View Module ➜
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Angka;
