import React, { useRef } from 'react';

const ModuleVideoKalimat = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };

  return (
    <div id = "bg" className="w-full h-screen flex flex-col items-center lg:px-[72px] pt-[100px]">
      <h1 className="font-bold text-navy text-5xl mb-8">Module Video Kalimat</h1>
      
      <div className="w-full max-w-2xl mb-8">
        <video ref={videoRef} className="w-full rounded-lg" controls>
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={handlePlay} className="px-4 py-2 bg-green-500 text-white rounded-lg">Play</button>
          <button onClick={handlePause} className="px-4 py-2 bg-red-500 text-white rounded-lg">Pause</button>
          <button onClick={handleForward} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Forward 5s</button>
        </div>
      </div>
    </div>
  );
};

export default ModuleVideoKalimat;