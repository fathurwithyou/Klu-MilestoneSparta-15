import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        
        localStorage.setItem("authToken", token);
        
        navigate('/home'); 
      }
    } catch (error) {
      setError(error.response?.data.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="bg" className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="header mb-8">
        <h1 className="font-bold text-5xl text-blue-500">Log In</h1>
      </div>

      <form onSubmit={handleLogin} className="block text-sm font-medium leading-6 w-80">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username or Email</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="submit-container mb-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </div>
      </form>

      <p className="text-sm">
        Haven't registered?{" "}
        <Link
          to="/signuppage"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
