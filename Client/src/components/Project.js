import React from 'react';
import ProjectsCard from './ProjectCards';
import Project3 from '../assets/Project3.png';
import ProjectOne from "../assets/ProjectOne.png";
import ProjectTwo from "../assets/Project Two.png";
import { useNavigate } from 'react-router-dom';

function Project() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/project');
  };

  return (
    <div className=" w-full h-auto py-20">
      <p className='text-[red] text-2xl sm:text-3xl ml-8 sm:ml-16 mb-8 font-extrabold'>Work.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 px-6 sm:px-12 xl:px-24">
        <ProjectsCard
          title='Travel App'
          des="This responsive travel app is designed to provide users with an intuitive and seamless experience for planning and exploring their travel destinations. Built using React.js and CSS, the app features a clean and modern interface, ensuring that users can easily navigate through different functionalities."
          src={ProjectOne}
          href='https://travel-644f1.web.app/'
          git="https://github.com/thelmees/Travel-App"
        />

        <ProjectsCard
          title='Task Management App'
          des="Developed a sophisticated task management application integrating advanced features such as categories, labels, and due dates. This app provides users with a comprehensive platform to organize tasks efficiently, allowing them to categorize tasks based on projects, assign labels for better classification, and set due dates to prioritize work."
          src={ProjectTwo}
          onClick={handleClick}
        />

        <ProjectsCard
          title='Restaurant App'
          des="This restaurant app was developed as a personal project to deepen my foundational skills in React.js and enhance my understanding of state management using Redux. The app offers users a streamlined experience for browsing menus, selecting items, and managing their orders, with real-time state updates ensuring a smooth and responsive user interface."
          src={Project3}
          href='https://restuarant-98a29.web.app/'
          git="https://github.com/thelmees/Restaurant"
        />
      </div>
    </div>
  );
}

export default Project;