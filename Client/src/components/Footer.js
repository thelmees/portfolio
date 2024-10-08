import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="w-full h-auto border-b-[1px] border-b-black flex-row sm:flex  bg-[#1a1a1a] text-[#e4e4e4] pt-5">
      <div className="w-full h-full flex sm:flex-col sm:gap-8 ">
      <img className="w-16 sm:w-32 sm:ml-24 ml-10 mb-5 sm:mb-0" src={logo} alt="logo" />
        <div className="flex gap-4 ml-10 sm:ml-28 mt-4 sm:mb-10">
          <a href='https://www.linkedin.com/in/thelmees/' className="text-2xl hover:text-[red]">
            <FaLinkedinIn />
          </a >
          <a href='https://github.com/thelmees' className="text-2xl text-2xl hover:text-[red]">
            <FaGithub />
          </a >
          <a href='https://www.instagram.com/thelmeees/?next=%2F' className="text-2xl text-2xl hover:text-[red]">
            <FaInstagram />
          </a >
        </div>
      </div>
      <div className="w-full h-full flex sm:justify-end mr-20 sm:ml-0 ml-10 p-5">
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
        <p className='text-xl hover:text-white'>let’s build something impactful.</p>
        <span className="w-full h-[1px] bg-[#e4e4e4] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          <li>
            <span className=" w-full text-md relative hover:text-[red] duration-300 group cursor-pointer">
              thelmees.nizar@gmail.com
              <span className="w-full h-[1px] bg-[#e4e4e4] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-md relative hover:text-[red] duration-300 group cursor-pointer">
              +971 505172838
              <span className="w-full h-[1px] bg-[#e4e4e4] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-md relative hover:text-[red] duration-300 group cursor-pointer">
              Hor Al Anz, Dubai
              <span className="w-full h-[1px] bg-[#e4e4e4] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer