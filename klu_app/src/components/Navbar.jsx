import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../asset/logo_klu.png";

const navLink = [
  { id: "about", name: "About", type: "scroll" },
  { id: "services", name: "Services", type: "scroll" },
  { id: "testimonial", name: "Testimonial", type: "scroll" },
  { id: "/loginpage", name: "Sign Up/Log In", type: "router" },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0 transition-opacity duration-500 ${
        scrollPosition > 50 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="flex items-center mt-16">
        <RouterLink to="/">
          <img src={logo} alt="klu" className="h-48 w-auto cursor-pointer" />
        </RouterLink>
      </div>
      <ul className="flex items-center mt-16">
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
                className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ) : (
              <RouterLink
                to={item.id}
                key={item.id}
                className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold"
              >
                {item.name}
              </RouterLink>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
