import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../HomeIcon';
import hurufC from "../../../asset/huruf c.jpeg";
import hurufF from "../../../asset/huruf f.jpeg";
import hurufJ from "../../../asset/huruf j.jpeg";
import hurufO from "../../../asset/huruf o.jpeg";
import hurufV from "../../../asset/huruf v.jpeg";
import PertanyaanAlfabet from './PertanyaanAlfabet';

const TestKalimat = () => {
  const [remainingTime, setRemainingTime] = useState(600); // 10 menit dalam detik
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null));
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          calculateScore();
          return 0;
        }
        return prevTime - 1;
      });
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

  const handleSubmit = () => {
    calculateScore();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const questions = [
    {
      image: hurufC,
      answers: ['Huruf A', 'Huruf B', 'Huruf C', 'Huruf D', 'Huruf E']
    },
    {
      image: hurufF,
      answers: ['Huruf F', 'Huruf G', 'Huruf H', 'Huruf I', 'Huruf J']
    },
    {
      image: hurufJ,
      answers: ['Huruf B', 'Huruf J', 'Huruf N', 'Huruf V', 'Huruf Z']
    },
    {
      image: hurufO,
      answers: ['Huruf G', 'Huruf A', 'Huruf R', 'Huruf O', 'Huruf Z']
    },
    {
      image: hurufV,
      answers: ['Huruf U', 'Huruf V', 'Huruf W', 'Huruf X', 'Huruf Y']
    }
  ];

  const correctAnswers = [2, 0, 1, 3, 1]; // Jawaban benar untuk setiap pertanyaan

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

  const answeredQuestionsCount = selectedAnswers.filter(answer => answer !== null).length;

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-center lg:px-[72px] pt-[100px]">
      <HomeIcon />
      <div className="w-3/4 h-3/4 flex flex-col items-start p-10">
        <div className="w-full h-full flex">
          {/* Kolom Kiri */}
          <div className="w-1/4 flex flex-col space-y-4">
            {/* Baris Pertama */}
            <div className="border bg-white border-white shadow-lg p-4 h-44 rounded-xl">
              <h2 className="text-sm font-bold text-navy mb-2">Questions</h2>
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
            <div className="border bg-white border-white shadow-lg p-4 h-24 rounded-xl">
              <h2 className="text-sm font-bold text-navy mb-2">Questions Answered</h2>
              <div className="text-2xl font-bold">{answeredQuestionsCount} / 5</div>
            </div>
            {/* Baris Ketiga */}
            <div className="border bg-white border-white shadow-lg p-4 h-24">
              <h2 className="text-sm font-bold text-navy mb-2">Remaining Time</h2>
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
      <button onClick={handleSubmit} className="px-4 py-2 font-semibold bg-navy text-white rounded self-end mt-4">
        <p className="px-8">Submit</p>
      </button>
    </div>
  );
};

export default TestKalimat;