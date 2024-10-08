import React from 'react';
import { motion } from 'framer-motion';
import Skills from './Skills';
import Project from './Project';
import ExperienceData from './ExperienceData';

function Experience({ scrollY, activeComp }) {
  return (
    <div id="Experience" className="bg-[#0F0F0F] min-h-screen w-full px-6 sm:px-10 py-10">
      {/* Title */}
      <p className="text-red-500 text-2xl sm:text-3xl font-extrabold pt-10 sm:ml-16 mb-6">
        Experience.
      </p>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-12 sm:flex flex-col sm:flex-row gap-20"
      >
        {/* Job Experience Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#e4e4e4] ml-0 sm:ml-16">
              Job Experience
            </h2>
          </div>
          <div className="mt-8 sm:mt-14 mx-0 sm:mx-10 sm:w-full border-l-[6px] border-opacity-30 border-l-black flex flex-col gap-10">
            <ExperienceData
              title="Front-end Developer"
              subTitle="LeMANGO Creatives - (Mar 2023 - Apr 2024)"
              result="India"
              des="At LeMANGO Creatives, I contributed as a full-stack developer, focusing on crafting engaging web applications 
              using the MERN stack. I collaborated closely with cross-functional teams to design and implement user-centric features, 
              ensuring optimal performance and responsiveness across devices. My role involved optimizing backend processes and 
              enhancing frontend experiences, which honed my skills in JavaScript, React, and MongoDB, while also fostering 
              effective communication and teamwork in a fast-paced environment."
            />
            {/* Add more ExperienceData components as needed */}
          </div>
        </div>

        {/* Internship Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#e4e4e4] ml-0 sm:ml-16">
              Internship
            </h2>
          </div>
          <div className="mt-8 sm:mt-14 mx-0 sm:mx-10 sm:w-full border-l-[6px] border-opacity-30 border-l-black flex flex-col gap-10">
            <ExperienceData
              title="MERN Intern"
              subTitle="Luminar Technilab (Sep 2022 - Feb 2023)"
              result="India"
              des="At Luminar Technolab, I worked as a full-stack developer, where I focused on developing and maintaining robust web 
              applications using the MERN stack. I collaborated with a dynamic team to implement innovative solutions, enhance 
              application performance, and ensure a seamless user experience. My responsibilities included writing efficient code, 
              optimizing database queries, and integrating APIs, which deepened my expertise in JavaScript, Node.js, and Express.js 
              while reinforcing my ability to work effectively in an agile environment."
            />
            {/* Add more ExperienceData components as needed */}
          </div>
        </div>
      </motion.div>

      {/* Project and Skills Components */}
      <Project />
      <Skills />
    </div>
  );
}

export default Experience;