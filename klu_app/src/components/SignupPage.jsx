import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateAndSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
      const availabilityResponse = await axios.post("http://localhost:8000/check-availability", {
        username: formData.username,
        email: formData.email,
      });

      if (availabilityResponse.status === 200) {
        const submitResponse = await axios.post("http://localhost:8000/submit-form", formData);
        if (submitResponse.status === 200) {
          alert("Form submitted successfully");
          setFormData({
            name: "",
            dob: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      }
    } catch (error) {
      setError(error.response?.data.message || "Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="bg" className="w-full h-screen flex flex-col justify-center items-center px-10 lg:px-[72px] pt-[100px]">
      <div className="header mb-8">
        <h1 className="font-bold text-5xl text-blue-500">Sign Up</h1>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={validateAndSubmit} className="flex flex-wrap justify-between w-80 lg:w-[600px]">
        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="dob" className="block mb-1">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="username" className="block mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="block text-sm font-medium leading-6 w-full lg:w-[48%] mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="submit-container mb-6 w-full lg:w-[600px]">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
