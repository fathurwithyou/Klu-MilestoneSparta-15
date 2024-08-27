import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div id="bg" className="w-full h-screen flex flex-col justify-center items-center px-10 lg:px-[72px] pt-[100px]">
      <div className="header mb-8">
        <h1 className="font-bold text-5xl text-blue-500">Sign Up</h1>
      </div>

      <div className="flex flex-wrap justify-between w-80 lg:w-[600px]">
        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            type="text"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="dob" className="block mb-1">Date of Birth</label>
          <input
            id="dob"
            type="date"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            id="username"
            type="text"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="confirm-password" className="block mb-1">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="submit-container mb-6 w-full lg:w-[600px]">
        <button
          type="submit"
          className="w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </div>

      <p className="text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;