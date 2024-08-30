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
  const [isEditing, setIsEditing] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState({ ...userInfo });

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
          setEditUserInfo(data.user); // Initialize editUserInfo with fetched data
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

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch("http://localhost:8000/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editUserInfo),
      });

      if (response.ok) {
        const data = await response.json();
        setUserInfo(data.user);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div id="bg" className="w-full h-screen flex flex-col items-start px-10 lg:px-[72px] pt-[50px]">
      <HomeIcon />
      <div className="w-full mt-16">
        <h1 className="mx-auto max-w-fit font-bold text-5xl text-navy mb-8 mt-12">Profile</h1>
      </div>
      <div className="w-full">
        <div className="max-w-fit mx-auto flex flex-col space-y-6">
          {["name", "dob", "username", "email"].map((field) => (
            <div key={field} id="card" className="bg-gray-200 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">{field.charAt(0).toUpperCase() + field.slice(1)}</h2>
              {isEditing ? (
                <input
                  type="text"
                  name={field}
                  value={editUserInfo[field]}
                  onChange={handleChange}
                  className="text-lg text-gray-700 w-full mt-2 p-2 rounded-md border border-gray-300"
                />
              ) : (
                <p className="text-lg text-gray-700">{userInfo[field]}</p>
              )}
            </div>
          ))}
          <div className="flex space-x-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                Change Profile
              </button>
            )}
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
