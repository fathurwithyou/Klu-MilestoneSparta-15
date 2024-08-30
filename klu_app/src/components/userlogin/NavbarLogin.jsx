import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../../asset/logo_klu.png';
import { CgProfile } from 'react-icons/cg'; 

const navLink = [
  { id: '/modules', name: 'Modules' },
  { id: '/test', name: 'Test' },
  { id: '/scan', name: 'Scan' }
];

const NavbarLogin = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
      <div className="flex items-center mt-16">
        <Link to="/home">
         <img src={logo} alt="klu" className="h-52 w-auto" />
        </Link>
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
          <CgProfile className="text-7xl text-navy cursor-pointer" onClick={handleProfileClick} />
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;