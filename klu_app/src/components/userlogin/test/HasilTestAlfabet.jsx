import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const HasilTestAlfabet = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-navy text-5xl mb-8">Test Result</h1>
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Your Score: {score} / 5</h2>
        <Link to="/">
          <button className="px-8 py-2 bg-blue-500 text-white rounded-xl text-lg font-semibold">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HasilTestAlfabet;