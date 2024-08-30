import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import logo from '../../asset/logo_klu.png';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const navLink = [
  { id: '/modules', name: 'Modules', type: 'router' },
  { id: '/test', name: 'Test', type: 'router' },
  { id: '/scan', name: 'Scan', type: 'router' },
  { id: '/profile', name: 'Profile', type: 'router' },
];

const NavbarLogin = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-[80px] z-50 ${
        scrollPosition > 50 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="flex justify-between items-center px-5 lg:px-[72px] h-full">
        <div className="flex items-center mt-4">
          <RouterLink to="/home">
            <img src={logo} alt="klu" className="w-[100px] md:w-[192px] cursor-pointer" />
          </RouterLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center mt-4">
          <li className="flex gap-x-10">
            {navLink.map((item) => (
              <li key={item.id}>
                <RouterLink
                  to={item.id}
                  className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold"
                >
                  {item.name}
                </RouterLink>
              </li>
            ))}
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden flex items-center mt-4">
          <button onClick={handleMenuToggle} className="text-navy">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        <div className="ml-12 hidden lg:flex items-center mt-4">
          <CgProfile className="text-5xl text-navy cursor-pointer" onClick={() => navigate('/profile')} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        class = 'mobile-menu'
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-navy text-white flex flex-col items-center justify-center transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col gap-y-4">
          {navLink.map((item) => (
            <li key={item.id}>
              <RouterLink
                to={item.id}
                className="text-lg lg:text-2xl font-semibold"
                onClick={handleMenuToggle}
              >
                {item.name}
              </RouterLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarLogin;
