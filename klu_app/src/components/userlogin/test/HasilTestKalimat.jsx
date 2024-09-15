import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import HomeIcon from '../HomeIcon';

const HasilTestKalimat = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-center lg:px-[72px] pt-[100px]">
      <HomeIcon />
      <h1 className="font-bold text-navy text-5xl mb-8">Test Result</h1>
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Your Score: {score} / 2</h2>
        <Link to="/module-kalimat">
          <button className="px-8 py-2 bg-blue-500 text-white rounded-xl text-lg font-semibold">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HasilTestKalimat;