import React from 'react'
import Task from './Task';
import Task1 from '../assets/Task1.png'
import Task2 from '../assets/Task2.png'




const TaskData = () => {
  const images = [
      Task1,
      Task2,
  ];

  return (
      <div className="h-auto bg-gray-900 flex items-center justify-center p-4 md:p-8">
          <Task
              title="Organizo"
              images={images}
              description="Developed a sophisticated task management application integrating advanced features such as categories, 
              labels, and due dates. This app provides users with a comprehensive platform to organize tasks efficiently, allowing 
              them to categorize tasks based on projects, assign labels for better classification, and set due dates to prioritize 
              work. The app was designed with user experience in mind, ensuring that users can quickly navigate through tasks, 
              update their statuses, and view their progress effortlessly."
          />
      </div>
  );
};

export default TaskData;