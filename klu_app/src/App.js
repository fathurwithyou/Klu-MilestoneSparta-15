import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Login from "./components/Login";
import NavbarLogin from "./components/NavbarLogin";
import HomeLogin from "./components/HomeLogin";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute dengan Navbar */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/services"
          element={
            <div>
              <Navbar />
              <Services />
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
        {/* Rute tanpa Navbar */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;