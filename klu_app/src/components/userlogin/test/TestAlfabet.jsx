import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../HomeIcon';
import PertanyaanAlfabet from './PertanyaanAlfabet';

const TestAlfabet = () => {
  const [remainingTime, setRemainingTime] = useState(600); // 10 menit dalam detik
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null));
  const navigate = useNavigate();

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
    if (currentQuestion < 5) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const questions = [
    {
      image: '/path/to/image1.jpg',
      answers: ['Huruf A', 'Huruf B', 'Huruf C', 'Huruf D', 'Huruf E']
    },
    {
      image: '/path/to/image2.jpg',
      answers: ['Huruf F', 'Huruf G', 'Huruf H', 'Huruf I', 'Huruf J']
    },
    {
      image: '/path/to/image3.jpg',
      answers: ['Huruf K', 'Huruf L', 'Huruf M', 'Huruf N', 'Huruf O']
    },
    {
      image: '/path/to/image4.jpg',
      answers: ['Huruf P', 'Huruf Q', 'Huruf R', 'Huruf S', 'Huruf T']
    },
    {
      image: '/path/to/image5.jpg',
      answers: ['Huruf U', 'Huruf V', 'Huruf W', 'Huruf X', 'Huruf Y']
    }
  ];

  const correctAnswers = [0, 1, 2, 3, 4]; // Jawaban benar untuk setiap pertanyaan

  const handleAnswerClick = (index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion - 1] = index;
    setSelectedAnswers(newSelectedAnswers);
  };

  const calculateScore = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === correctAnswers[index] ? 1 : 0);
    }, 0);
    navigate('/hasil-test-alfabet', { state: { score } });
  };

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-center lg:px-[72px] pt-[100px]">
      <HomeIcon />
      <div className="w-3/4 h-3/4 flex flex-col items-start p-10">
        <div className="w-full h-full flex">
          {/* Kolom Kiri */}
          <div className="w-1/4 flex flex-col">
            {/* Baris Pertama */}
            <div className="flex-1 border bg-white border-white shadow-lg p-4 mb-4 h-24">
              <h2 className="text-sm font-semibold mb-2">Question</h2>
              <ul className="flex flex-wrap gap-2 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i} className={`w-1/4 text-center ${currentQuestion === i + 1 ? 'font-bold' : ''}`}>
                    {i + 1}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <button onClick={handlePrevious} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
                <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">
                  {currentQuestion < 5 ? 'Next' : 'Finish'}
                </button>
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
            <PertanyaanAlfabet
              question={questions[currentQuestion - 1]}
              answers={questions[currentQuestion - 1].answers}
              selectedAnswer={selectedAnswers[currentQuestion - 1]}
              onAnswerClick={handleAnswerClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAlfabet;