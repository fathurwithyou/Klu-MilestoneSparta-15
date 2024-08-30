import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('authToken');
    
    navigate('/login');
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-blue-500">Logging out...</h1>
    </div>
  );
};

export default Logout;
