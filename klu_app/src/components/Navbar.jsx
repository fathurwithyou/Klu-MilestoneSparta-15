import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../asset/logo_klu.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const navLink = [
  { id: "about", name: "About", type: "scroll" },
  { id: "services", name: "Services", type: "scroll" },
  { id: "testimonial", name: "Testimonial", type: "scroll" },
  { id: "/loginpage", name: "Sign Up/Log In", type: "router" },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className={`fixed top-0 w-full h-[100px] z-50 ${
        scrollPosition > 50 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}>
      <div className="flex justify-between items-center px-5 lg:p-[30px] h-full">
        <div className="flex items-center mt-4 lg:mt-0">
          <RouterLink to="/">
            <img src={logo} alt="klu" className="w-[100px] sm:w-[192px]cursor-pointer" />
          </RouterLink>
        </div>

        <ul className="hidden lg:flex items-center mt-4 lg:mt-0" class="nav-links">
          <li className="flex gap-x-10">
            {navLink.map((item) => {
              return item.type === "scroll" ? (
                <ScrollLink
                  to={item.id}
                  key={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold cursor-pointer">
                  {item.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={item.id}
                  key={item.id}
                  className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold">
                  {item.name}
                </RouterLink>
              );
            })}
          </li>
        </ul>

        <div class='mobile-menu' className="flex items-center mt-4 lg:mt-0">
          <button onClick={handleMenuToggle} className="text-navy">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      <div
        class = "mobile-menu"
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-navy text-white flex flex-col items-center justify-center transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}>
        <ul className="flex flex-col gap-y-4">
          {navLink.map((item) => {
            return item.type === "scroll" ? (
              <ScrollLink
                to={item.id}
                key={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg lg:text-2xl font-semibold cursor-pointer"
                onClick={handleMenuToggle}>
                {item.name}
              </ScrollLink>
            ) : (
              <RouterLink to={item.id} key={item.id} className="text-lg lg:text-2xl font-semibold" onClick={handleMenuToggle}>
                {item.name}
              </RouterLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
