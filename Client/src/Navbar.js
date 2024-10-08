import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import './navbar.css';

function Navbar({ handleNavbar, activeComp, activeNav }) {
  return (
    <div className={`${activeComp ? 'fixed w-full backdrop-blur-md transition duration-300 shadow-lg' : 'fixed w-full'} bg-transparent pt-3 text-base sidebarScroll sidebar`}>
      <img
        onClick={() => handleNavbar('About')}
        className={`${activeComp ? "w-8 sm:w-10 m-3 sm:ml-12 float-left animate-pulse cursor-pointer" : "hidden"}`}
        src={logo}
        alt="logo"
      />

      <div className="flex justify-center sm:justify-start sm:ml-[450px] space-x-10 sm:space-x-16 mt-4 sm:mt-0 pt-3">
        <div className="flex space-x-10 sm:space-x-16">
          <button
            onClick={() => handleNavbar('About')}
            className={`${activeNav === 'About' ? 'text-gray-500' : 'text-white'} font-semibold transition duration-300`}
          >
            About
          </button>
          <button
            onClick={() => handleNavbar('Experience')}
            className={`${activeNav === 'Experience' ? 'text-gray-500' : 'text-white'} font-semibold transition duration-300`}
          >
            Experience
          </button>
        </div>

        <div className="flex space-x-10 sm:space-x-16">
          <button
            onClick={() => handleNavbar('Skills')}
            className={`${activeNav === 'Skills' ? 'text-gray-500' : 'text-white'} font-semibold transition duration-300`}
          >
            Skills
          </button>
          <button
            onClick={() => handleNavbar('Contact')}
            className={`${activeNav === 'Contact' ? 'text-gray-500' : 'text-white'} font-semibold transition duration-300`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;