import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "./HomeIcon";

const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    dob: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:8000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data.user);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[50px]">
      <HomeIcon />
      <div className="w-full mt-16">
        <h1 className="mx-auto max-w-fit font-bold text-5xl text-navy mb-8 mt-12">Profile</h1>
      </div>
      <div className="w-full">
        <div className="max-w-fit  mx-auto flex flex-col  space-y-6">
          <div id='card' className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Name</h2>
            <p className="text-lg text-gray-700">{userInfo.name}</p>
          </div>

          <div id='card' className="bg-gray-200 p-4 rounded-lg ">
            <h2 className="text-xl font-semibold text-gray-800">Date of Birth</h2>
            <p className="text-lg text-gray-700">{userInfo.dob}</p>
          </div>

          <div id='card' className="bg-gray-200 p-4 rounded-lg ">
            <h2 className="text-xl font-semibold text-gray-800">Username</h2>
            <p className="text-lg text-gray-700">{userInfo.username}</p>
          </div>

          <div id='card' className="bg-gray-200 p-4 rounded-lg ">
            <h2 className="text-xl font-semibold text-gray-800">Email</h2>
            <p className="text-lg text-gray-700">{userInfo.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
