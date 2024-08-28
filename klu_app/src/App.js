import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import NavbarLogin from "./components/userlogin/NavbarLogin";
import HomeLogin from "./components/userlogin/HomeLogin";
import Test from "./components/userlogin/Test";
import Modules from "./components/userlogin/Modules";
import Scan from "./components/userlogin/Scan";
import Profile from "./components/userlogin/Profile";
import ModuleAlfabet1 from "./components/userlogin/ModuleAlfabet1";
import ModuleAlfabet2 from "./components/userlogin/ModuleAlfabet2";
import ModuleAlfabet3 from './components/userlogin/ModuleAlfabet3';
import ModuleKalimat from "./components/userlogin/ModuleKalimat";

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
        <Route
          path="/module-alfabet-1"
          element={
            <div>
              <NavbarLogin />
              <ModuleAlfabet1 />
            </div>
          }
        />
        <Route
          path="/module-alfabet-2"
          element={
            <div>
              <NavbarLogin />
              <ModuleAlfabet2 />
            </div>
          }
        />
        <Route
          path="/module-alfabet-3"
          element={
            <div>
              <NavbarLogin />
              <ModuleAlfabet3 />
            </div>
          }
        />
        <Route
          path="/module-kalimat"
          element={
            <div>
              <NavbarLogin />
              <ModuleKalimat />
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
