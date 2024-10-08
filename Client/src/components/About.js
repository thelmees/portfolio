import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../Navbar"; // You may want to adjust this if you want to keep your sidebar.
import logo from "../assets/logo.png";

function About() {
    return (
        <section id='About' className="about mt-[-40px] sm:mt-0 h-auto w-screen py-10 sm:py-20 bg-gray-900">
            <div className="sm:flex items-center justify-between">
                {/* Left Side: Logo and Text Section */}
                <div className="sm:w-1/2 px-5 sm:px-20">
                    {/* Logo and Name */}
                    <div className="text-3xl sm:text-4xl font-bold mb-10 text-[#e4e4e4] flex items-center">
                        <div>Thel
                            <img className="inline w-8 sm:w-11 mx-2" src={logo} alt="logo" />
                            ees
                        </div>
                    </div>

                    {/* Title and Description */}
                    <div className="text-pretty w-full sm:w-[437px]">
                        <h1 className="text-[#e4e4e4] text-5xl sm:text-7xl font-bold">Frontend Developer.</h1>
                        <p className="text-[#e4e4e4] text-md sm:text-xl font-normal mt-6">
                            I like to craft solid and scalable frontend products with great user experiences.
                        </p>

                        {/* Description Section */}
                        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:justify-between text-[11px] sm:text-sm font-normal">
                            <p className="flex-1 sm:mr-4 text-[#e4e4e4] mb-4 sm:mb-0">
                                Skilled Frontend developer with a BCA degree and a proven record of creating engaging UIs with React tools like
                                React Hooks, Redux, and Axios.
                            </p>
                            <p className="flex-1 sm:ml-7 text-[#e4e4e4]">
                                Proficient in JavaScript, Node.js, Express.js, and MongoDB with experience in creating functional, visually appealing web interfaces
                                and focusing on user experience.
                            </p>
                        </div>

                        {/* Resume Link */}
                        <a href="/Thelmees_Nizar.pdf" className="block mt-10 p-2 text-lg text-center text-[#e4e4e4] border-2 border-white hover:bg-white hover:text-black transition duration-300 ease-in-out ">
                            Resume
                        </a>
                    </div>
                </div>

                {/* Right Side: Profile Image */}
                <div className="mt-14 sm:mt-0 flex justify-center sm:w-1/2 px-5 sm:px-20">
                    <img className="w-60 sm:w-96  transform transition duration-300 hover:scale-105" src="/profile.png" alt="profile" />
                </div>
            </div>
        </section>
    );
}

export default About;