import React from 'react';
import { LuHome } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const HomeIcon = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/home');
  };

  return (
    <div
      className="fixed bottom-5 right-5 cursor-pointer rounded-full p-2 shadow-lg"
      onClick={navigateHome}
    >
      <LuHome className="text-navy text-2xl" />
    </div>
  );
};

export default HomeIcon;