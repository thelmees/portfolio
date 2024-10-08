import React from 'react';
import Css from '../assets/Css.png';
import Html from '../assets/Html.png';
import JavaScript from '../assets/JavaScript.png';
import ReactJs from '../assets/ReactJs.png';
import Node from '../assets/Node.png';
import MongoDB from '../assets/MongoDB.png';
import github from '../assets/github.png';
import MUI from '../assets/MUI.png';
import MyChart from './Chart';

const Skills = () => {
  return (
    <div id='Skills' className='w-full text-white sm:mb-0 sm:p-10'>
      <p className='text-[red] text-2xl m-9 sm:m-16 font-extrabold'>Skills.</p>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex-1 sm:mr-10 mb-10 sm:mb-0'>
          <MyChart />
        </div>
        <div className='flex-1'>
          <p className='text-white mx-5 sm:mx-0 mb-10 text-2xl font-extrabold'>Technical Skills.</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8'>
            <div className='hover:scale-110 duration-500'>
              <img src={Html} alt='Html' className='h-16 mx-auto' />
            </div>
            <div className='hover:scale-110 duration-500'>
              <img src={Css} alt='Css' className='h-16 mx-auto' />
            </div>
            <div className='hover:scale-110 duration-500'>
              <img src={JavaScript} alt='JavaScript' className='h-16 mx-auto' />
            </div>
            <div className='hover:scale-110 duration-500'>
              <img src={ReactJs} alt='React' className='h-16 mx-auto' />
            </div>
            <div className='hover:scale-110 duration-500'>
              <img src={Node} alt='Node' className='h-16 mx-auto' />
            </div>
            <div className='hover:scale-110 duration-500'>
              <img src={MongoDB} alt='MongoDB' className='h-16 mx-auto' />
            </div>
            <div className='hover:scale-110 duration-500'>
              <img src={github} alt='GitHub' className='h-16 mx-auto' />
            </div>
            <div className='hover:scale-110 duration-500'>
              <img src={MUI} alt='MUI' className='h-16 mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;