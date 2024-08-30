import React from "react";

const Introduction = () => {
  return (
    <div id='intro' className="p-5 lg:pt-3 mt-10 flex justify-center items-center">
      <div className="w-full lg:w-3/5 flex flex-col items-center">
        <h1 className="text-center font-bold text-navy text-3xl md:text-5xl mb-8">Mengapa Belajar  Bahasa Isyarat</h1>
        <div className="w-full flex flex-col justify-center items-center text-center pt-10">
          <p className="text-xl text-navy">
            <span className="text-navy font-semibold">Bahasa Isyarat</span> merupakan bahasa visual yang digunakan oleh komunitas tunarungu untuk berkomunikasi. Belajar bahasa isyarat tidak hanya membuka akses untuk berkomunikasi dengan mereka yang memiliki keterbatasan pendengaran, tetapi juga membantu dalam memahami dan mengapresiasi keragaman budaya.
          </p>
          <p className="text-xl text-navy mt-4">
            Dengan menguasai bahasa isyarat, kita dapat menciptakan lingkungan yang lebih inklusif dan ramah bagi semua orang. Selain itu, mempelajari bahasa isyarat juga meningkatkan kemampuan komunikasi nonverbal, memperkaya keterampilan komunikasi kita secara keseluruhan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
