// import React from "react";
// // import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
// import logo from '../asset/logo_klu.png';
// // import { navLink } from "../data/dummy";
// // import { FiMenu } from "react-icons/fi";
// // import { AiOutlineMenu } from 'react-icons/ai';
// // import { AiOutlineClose } from "react-icons/ai";

// // Dengan responsive versi 1
// // const Navbar = () => {
// //     const [nav, setNav] = useState(false);
// //     const [isScroll, setIsScroll] = useState(false);
// //     useEffect(() => {
// //       const handlerScroll = () => {
// //         if (window.scrollY > 0) {
// //           setIsScroll(true);
// //         } else {
// //           setIsScroll(false);
// //         }
// //       };
// //       window.addEventListener("scroll", handlerScroll);
// //       return () => {
// //         window.removeEventListener("scroll", handlerScroll);
// //       };
// //     }, []);
// //     return (
// //       <div
// //         className={`${
// //           isScroll ? "bg-[#FFD2CC] h-[60px] lg:-top-[60px]" : " h-[80px]"
// //         } lg:px-[72px] px-5   w-full  z-[10] fixed  transition-all duration-300 ease-in-out  flex justify-between items-center`}
// //       >
// //         <div className="w-[103px] h-[25px]">
// //           <img src={logo} alt="" className="w-full h-full object-contain" />
// //         </div>
// //         <ul className="hidden md:block">
// //           <li className="flex gap-5">
// //             {navLink.map((item) => {
// //               return (
// //                 <Link
// //                   key={item.id}
// //                   to={item.id}
// //                   className={`${
// //                     isScroll ? "text-[14px]" : "text-[18px]"
// //                   }  hover:text-orange transition duration-300 ease-in-out hover:cursor-pointer`}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               );
// //             })}
// //           </li>
// //         </ul>
// //         <div className="flex items-center gap-x-3">
// //           <button className="bg-white py-2 px-8 rounded-full outline-none">
// //             Sign In
// //           </button>
// //           <FiMenu
// //             size={24}
// //             className="block md:hidden"
// //             onClick={() => setNav((prev) => !prev)}
// //           />
// //         </div>
// //         <div
// //           className={`${
// //             nav ? "right-0" : "-right-full"
// //           } w-full md:w-[50%]  bg-white h-screen absolute  top-0 p-10 block md:hidden`}
// //         >
// //           <AiOutlineClose
// //             className="text-2xl mb-3"
// //             onClick={() => setNav((prev) => !prev)}
// //           />
// //           <ul>
// //             <li className="flex flex-col  gap-5">
// //               {navLink.map((item) => {
// //                 return (
// //                   <Link
// //                     key={item.id}
// //                     to={item.id}
// //                     className="text-[18px] py-2 hover:text-orange transition duration-300 ease-in-out border-b-2 z-[20]"
// //                   >
// //                     {item.name}
// //                   </Link>
// //                 );
// //               })}
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   export default Navbar;

// // Dengan responsive versi 2
// // const Navbar = () => {
// //     const [navOpen, setNavOpen] = useState(false);
  
// //     const toggleNav = () => {
// //       setNavOpen(!navOpen);
// //     };
  
// //     return (
// //       <div className="relative flex items-center justify-between p-4">
// //         <div className="w-[103px] h-[25px]">
// //           <img src={logo} alt="klu" className="w-full h-full object-contain" />
// //         </div>
// //         <ul className={`md:flex gap-x-4 ${navOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex-col md:flex-row`}>
// //           {navLink.map((item) => (
// //             <li key={item.id} className="md:ml-4">
// //               <Link
// //                 to={item.id}
// //                 className="block px-6 lg:px-8 py-2 bg-navy outline-none text-white rounded-xl text-sm md:text-md"
// //               >
// //                 {item.name}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //         <div className="md:hidden">
// //           <button onClick={toggleNav} className="text-black">
// //             {navOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   export default Navbar;

// // Dengan Responsive versi 3
// // const Navbar = () => {
// //     const [navOpen, setNavOpen] = useState(false);
  
// //     const toggleNav = () => {
// //       setNavOpen(!navOpen);
// //     };
  
// //     return (
// //       <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0 bg-gray-800">
// //         <div className="flex items-center">
// //           <img src={logo} alt="klu" className="h-16 w-auto" />
// //         </div>
// //         <div className="flex items-center">
// //           <ul className={`md:flex gap-x-4 ${navOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex-col md:flex-row`}>
// //             {navLink.map((item) => (
// //               <li key={item.id} className="md:ml-4">
// //                 <Link
// //                   to={item.id}
// //                   className="block px-6 lg:px-8 py-2 bg-navy outline-none text-white rounded-xl text-sm md:text-md"
// //                 >
// //                   {item.name}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //           <button onClick={toggleNav} className="text-white md:hidden">
// //             {navOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };
  
// // export default Navbar;

// // Tanpa Responsive versi 1
// // const Navbar = () => {
// //   return (
// //     Untuk bagian Navbar
// //     <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
// //         <div className="flex items-center">
// //             <img src={logo} alt="klu" className="h-40 w-auto" />
// //         </div>
// //         <ul className="hidden sm:flex">
// //             {/* Kasi gap-x-4 biar ada jarak antar link */}
// //             <li className="flex gap-x-10"> 
// //                 {navLink.map((item)=>{
// //                     return (
// //                     <Link to={item.id} key={item.id} className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold">
// //                         {item.name}
// //                     </Link>
// //                     );
// //                 })}
// //             </li>
// //         </ul>
// //         {/* <div className="flex items-center">
// //             <button className="px-6 lg:px-8 py-2 text-sm bg-white outline-none hover:bg-navy hover:text-white rounded-full">
// //                 Sign in
// //             </button>
// //             <AiOutlineMenu className="text-2xl block md:hidden"/>
// //         </div> */}
// //     </div>
// //   );
// // };

// // export default Navbar;

// const navLink = [
//   { id: '/about', name: 'About' },
//   { id: '/services', name: 'Services' },
//   { id: '/signup', name: 'Sign Up/Log In' }
// ];

// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
//       <div className="flex items-center mt-16">
//         <img src={logo} alt="klu" className="h-52 w-auto" />
//       </div>
//       <ul className="flex items-center mt-16">
//         <li className="flex gap-x-10">
//           {navLink.map((item) => {
//             return (
//               <Link
//                 to={item.id}
//                 key={item.id}
//                 className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold"
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from '../asset/logo_klu.png';

const navLink = [
  { id: '/about', name: 'About' },
  { id: '/services', name: 'Services' },
  { id: '/login', name: 'Sign Up/Log In' }
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
      <div className="flex items-center mt-16">
        <img src={logo} alt="klu" className="h-52 w-auto" />
      </div>
      <ul className="flex items-center mt-16">
        <li className="flex gap-x-10">
          {navLink.map((item) => {
            return (
              <Link
                to={item.id}
                key={item.id}
                className="px-8 lg:px-12 py-2 bg-navy outline-none text-white rounded-xl text-lg lg:text-1/2xl w-full lg:w-auto font-semibold"
              >
                {item.name}
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;