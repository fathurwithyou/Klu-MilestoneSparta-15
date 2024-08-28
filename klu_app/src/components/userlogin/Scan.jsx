import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Scan = () => {
  const [prediction, setPrediction] = useState('');
  const [testChar, setTestChar] = useState('');
  const [completedChars, setCompletedChars] = useState([]);
  const testCharRef = useRef('');

  const generateRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    setTestChar(randomChar);
    testCharRef.current = randomChar;
  };

  useEffect(() => {
    generateRandomChar();

    const video = document.createElement('video');
    video.width = 640;
    video.height = 480;
    document.getElementById('video-container').appendChild(video);

    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      video.play();

      const canvas = document.createElement('canvas');
      canvas.width = video.width;
      canvas.height = video.height;
      const ctx = canvas.getContext('2d');

      const sendFrame = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const image = canvas.toDataURL('image/jpeg').split(',')[1];
        axios
          .post('http://localhost:5000/predict', { image })
          .then(response => {
            const predictedChar = response.data.prediction;
            setPrediction(predictedChar);
            if (predictedChar === testCharRef.current) {
              const matchedChar = testCharRef.current;
              setCompletedChars(prevChars => [...prevChars, matchedChar]);
              generateRandomChar();
            }
          })
          .catch(error => console.error('Error:', error));
      };

      const intervalId = setInterval(sendFrame, 1000);

      return () => {
        clearInterval(intervalId);
        if (video.srcObject) {
          video.srcObject.getTracks().forEach(track => track.stop());
        }
      };
    };

    startVideo();
  }, []);

  return (
    <div
      id="bg"
      className="w-full h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div
        id="video-container"
        className="border-4 border-gray-400 rounded-md shadow-lg"
      ></div>
      <h1 className="text-2xl font-semibold text-gray-700 mt-6">
        Predicted Character: <span className="text-blue-600">{prediction}</span>
      </h1>
      <h2 className="text-xl font-medium text-gray-700 mt-4">
        Current Test Character: <span className="text-green-600">{testChar}</span>
      </h2>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-600">Completed Characters:</h3>
        <div className="text-xl font-bold text-purple-600">
          {completedChars.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default Scan;