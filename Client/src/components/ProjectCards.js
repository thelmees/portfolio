import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, href, git, onClick }) => {
  return (
    <div className="w-full sm:w-[320px] lg:w-[360px] p-4 sm:p-5 bg-[#111213c2] m-2 rounded-lg shadow-shadowOne flex flex-col">
      <div className="w-full h-[200px] sm:h-[250px] lg:h-[280px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
          src={src}
          alt="project"
        />
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-red-500 uppercase text-sm sm:text-lg font-bold">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href={git}
              onClick={onClick}
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href={href}
              onClick={onClick}
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer"
            >
              <FaGlobe />
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#e4e4e4] tracking-wide mt-3 overflow-auto h-[150px] sm:h-[120px] scrollbar-hide">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;