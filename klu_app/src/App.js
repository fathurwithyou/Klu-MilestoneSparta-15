import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Login from "./components/Login";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import NavbarLogin from "./components/NavbarLogin";
import HomeLogin from "./components/HomeLogin";
import Test from "./components/Test";
import Modules from "./components/Modules";
import Scan from "./components/Scan";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        {/* Rute dengan Navbar_login */}
        <Route
          path="/home"
          element={
            <div>
              <NavbarLogin />
              <HomeLogin />
            </div>
          }
          />
        <Route
          path="/loginpage"
          element={
            <div>
              <LoginPage />
            </div>
          }
        />
        <Route 
          path="/signuppage" 
            element={
              <div>
                <SignupPage />
              </div>
            } 
          />
        <Route
          path="/test"
          element={
            <div>
              <NavbarLogin />
              <Test />
            </div>
          }
        />
        <Route
          path="/modules"
          element={
            <div>
              <NavbarLogin />
              <Modules />
            </div>
          }
        />
        <Route
          path="/scan"
          element={
            <div>
              <NavbarLogin />
              <Scan />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div>
              <NavbarLogin />
              <Profile />
            </div>
          }
        />
        {/* Rute tanpa Navbar */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;