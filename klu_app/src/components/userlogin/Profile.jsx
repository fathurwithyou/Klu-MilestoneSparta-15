import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from './HomeIcon';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logika untuk logout (misalnya, menghapus token, dll.)
    navigate('/');
  };

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[50px]"> {/* Mengurangi padding atas */}
      <HomeIcon />
      <div className="w-full flex flex-col items-start mt-16"> {/* Menambahkan margin-top */}
        <h1 className="font-bold text-5xl text-navy mb-8 mt-10">Profile</h1> {/* Menambahkan margin-top */}
      </div>
      <div className="w-full flex justify-center">
        <div className="block text-sm font-medium leading-6 w-80">
          <div className="mb-2">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              id="name"
              type="text"
              required
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="dob" className="block mb-1">Date of Birth</label>
            <input
              id="dob"
              type="date"
              required
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="username" className="block mb-1">Username</label>
            <input
              id="username"
              type="text"
              required
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              type="email"
              required
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              id="password"
              type="password"
              required
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;