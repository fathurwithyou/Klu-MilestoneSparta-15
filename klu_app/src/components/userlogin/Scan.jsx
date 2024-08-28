import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scan = () => {
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
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
            setPrediction(response.data.prediction);
          })
          .catch(error => console.error('Error:', error));
      };

      setInterval(sendFrame, 1000); // Send a frame every second
    };

    startVideo();

    return () => {
      video.pause();
      video.srcObject.getTracks().forEach(track => track.stop());
    };
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
    </div>
  );
};

export default Scan;
