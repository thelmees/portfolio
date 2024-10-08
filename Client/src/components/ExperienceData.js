import React from 'react';

function ExperienceData({ title, subTitle, result, des }) {
  return (
    <div className="w-full h-full group flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
      {/* Timeline Indicator */}
      <div className="w-10 h-[6px] mt-10 sm:mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-60 shadow-lg">
          <span className="w-3 h-3 rounded-full bg-[#e4e4e4] group-hover:bg-red-500 duration-300"></span>
        </span>
      </div>

      {/* Experience Content */}
      <div className="w-full bg-gray-800 bg-opacity-60 hover:bg-opacity-80 duration-300 rounded-lg p-4 sm:p-6 flex flex-col justify-center gap-6 shadow-lg mr-5">
        {/* Title and Subtitle */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:items-center">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#e4e4e4] group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm sm:text-base mt-2 text-[#e4e4e4] group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>

          {/* Result Location */}
          <div>
            <p className="px-4 py-2 text-center text-red-500 bg-black bg-opacity-30 rounded-lg shadow-md text-xs sm:text-sm font-medium">
              {result}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base font-medium text-[#e4e4e4] group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ExperienceData;