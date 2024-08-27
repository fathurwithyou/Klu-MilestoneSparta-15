import React from 'react';
 
const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="header mb-8">
        <h1 className="font-bold text-5xl text-blue-500">Log In</h1>
      </div>
 
      <div className="block text-sm font-medium leading-6 w-80">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username or Email</label>
          <input
            id="username"
            type="text"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
 
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
 
      <div className="submit-container mb-6">
        <button
          type="submit"
          className="w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Log In
        </button>
      </div>
 
      <p className="text-sm">
        Haven't registered?{" "}
        <a
          href="/signup"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </a>
      </p>
    </div>
  );
};
 
export default LoginPage;