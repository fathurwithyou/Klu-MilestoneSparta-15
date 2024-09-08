import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaForward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ModuleVideoAlfabet = () => {
  const playerRef = useRef(null);

  const handlePlay = () => {
    playerRef.current.getInternalPlayer().playVideo();
  };

  const handlePause = () => {
    playerRef.current.getInternalPlayer().pauseVideo();
  };

  const handleForward = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + 5, 'seconds');
  };

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start lg:px-[32px] pt-[100px]">
      <div className="w-full flex justify-start items-start mb-8">
        <h1 className="font-bold text-navy text-5xl mt-12 ml-0">Module Video Kalimat</h1>
      </div>
      
      <div className="w-full max-w-2xl mb-8 mx-auto">
        <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/watch?v=v1desDduz5M"
          className="w-full rounded-lg"
          controls
        />
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={handlePause} className="px-4 py-2 bg-navy text-white rounded-lg flex items-center">
            <FaPause /> 
          </button>
          <button onClick={handlePlay} className="px-4 py-2 bg-indigo-300 text-white rounded-lg flex items-center">
            <FaPlay />
          </button>
          <button onClick={handleForward} className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center">
            <FaForward />
          </button>
        </div>
      </div>

      {/* Button Back */}
      <div className="w-full flex justify-end pr-8 pb-4">
        <Link to="/module-kalimat">
          <button className="px-8 py-2 bg-navy text-white rounded-lg">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleVideoAlfabet;