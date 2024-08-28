import React, { useState, useEffect } from 'react';
import abjad_klu from '../../asset/abjad_klu.png'; // Ganti dengan path yang benar ke gambar Anda

const Test = () => {
  const [remainingTime, setRemainingTime] = useState(600); // 10 menit dalam detik
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => (prevQuestion > 1 ? prevQuestion - 1 : 1));
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => (prevQuestion < 12 ? prevQuestion + 1 : 12));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const answerDescriptions = [
    'Huruf A',
    'Huruf B',
    'Huruf C',
    'Huruf D',
    'Huruf E'
  ];

  return (
    <div id="bg" className="w-full h-screen flex justify-center items-center px-10 lg:px-[72px] pt-[100px]">
      <div className="w-3/4 h-3/4 flex flex-col items-start p-10">
        <div className="w-full h-full flex">
          {/* Kolom Kiri */}
          <div className="w-1/4 flex flex-col">
            {/* Baris Pertama */}
            <div className="flex-1 border bg-white border-white shadow-lg p-4 mb-4 h-24">
              <h2 className="text-sm font-semibold mb-2">Question</h2>
              <ul className="flex flex-wrap gap-2 mb-4">
                {Array.from({ length: 12 }, (_, i) => (
                  <li key={i} className={`w-1/4 text-center ${currentQuestion === i + 1 ? 'font-bold' : ''}`}>
                    {i + 1}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <button onClick={handlePrevious} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
                <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
              </div>
            </div>
            {/* Baris Kedua */}
            <div className="flex-2 border bg-white border-white shadow-lg p-4 h-24">
              <h2 className="text-sm font-semibold mb-2">Remaining Time</h2>
              <div className="text-2xl font-bold">{formatTime(remainingTime)}</div>
            </div>
          </div>
          {/* Kolom Kanan */}
          <div className="w-3/4 flex flex-col justify-between border bg-white border-white shadow-lg p-4 ml-4">
            <div className="flex flex-col items-start">
              <img src={abjad_klu} alt="Question" className="w-1/2 h-auto mb-4" />
              <div className="flex flex-col gap-2 w-full">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                      {String.fromCharCode(65 + i)}
                    </button>
                    <span>{answerDescriptions[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;