import React from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from '../asset/logo_klu.png';
import { CgProfile } from 'react-icons/cg'; // Import ikon CgProfile
// import { navLink } from "../data/dummy";
// import { FiMenu } from "react-icons/fi";
// import { AiOutlineMenu } from 'react-icons/ai';
// import { AiOutlineClose } from "react-icons/ai";

const navLink = [
    { id: '/modules', name: 'Modules' },
    { id: '/test', name: 'Test' },
    { id: '/scan', name: 'Scan' }
  ];
  
  const NavbarLogin = () => {
    return (
      <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
        <div className="flex items-center mt-16">
          <img src={logo} alt="klu" className="h-52 w-auto" />
        </div>
        <div className="flex items-center mt-16"> {/* Add margin-top to move the list and profile icon down */}
          <ul className="flex gap-x-10">
            {navLink.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="ml-12"> {/* Adjust the margin-left to control the gap */}
            <CgProfile className="text-7xl text-navy cursor-pointer" />
          </div>
        </div>
      </div>
    );
  };
  
  export default NavbarLogin;