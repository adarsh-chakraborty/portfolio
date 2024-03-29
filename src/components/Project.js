import React from 'react';
import Framework from './Framework';

import './Project.css';

const Project = ({ img, title, description, tools, gitUrl, liveUrl }) => {
  return (
    <div className="md:w-9/12 max-w-lg md:max-w-4xl bg-gray-50  rounded-md shadow-lg p-8 flex flex-col md:flex-row">
      <div className="group overflow-hidden w-11/12 md:w-[61.5rem] md:h-[15rem] rounded-lg shadow-md cursor-pointer relative m-auto">
        <img
          src={img}
          alt={title}
          className="group-hover:scale-110 h-full max-w-full transform  w-full transition-all duration-300 block object-cover"
        ></img>
      </div>
      <div className="w-full flex flex-col gap-2 items-center mt-2">
        <h1 className="font-bold font-Poppins text-xl">{title}</h1>
        <p className="mt-2 mx-5 px-1 2xl:px-4 text-gray-700 font-Baloo">
          {description}
        </p>
        <ul className="mt-4 pl-2 flex flex-wrap items-center justify-center gap-2 max-w-md">
          {tools.map((item, i) => (
            <Framework framework={item} key={i} />
          ))}
        </ul>

        {/* //
        <div className="mt-4 flex gap-4">
          <a href={gitUrl} target="_blank">
            <BsCodeSlash className="w-11 h-11 text-emerald-800  border-2 border-emerald-500 rounded-full p-2" />
          </a>
          <a href={liveUrl} target="_blank">
            <FiExternalLink className="w-11 h-11 text-emerald-800 border-2 border-emerald-500 rounded-full p-2" />
          </a>
        </div>
      </div>
        // */}

        <div className="mt-4 flex gap-6">
          <a href={gitUrl} target="_blank" rel="noreferrer">
            <div className="group flex items-center justify-center gap-4 relative border-2 border-blue-900  rounded-full h-11 w-11 cursor-pointer group-hover:border-0">
              <div className="absolute h-11 w-11 bg-blue-800 border-2 border-blue-700 rounded-full z-0 hidden group-hover:block group-hover:animate-grow"></div>
              <div className="z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-900 group-hover:text-blue-100 transition-colors duration-200 ease-in"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </a>

          <a href={liveUrl} target="_blank" rel="noreferrer">
            <div className="group flex items-center justify-center gap-4 relative border-2 border-blue-900  rounded-full h-11 w-11 cursor-pointer group-hover:border-0">
              <div className="absolute h-11 w-11 bg-blue-800 border-2 border-blue-700 rounded-full z-0 hidden group-hover:block group-hover:animate-grow"></div>
              <div className="z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-900 group-hover:text-blue-100 transition-colors duration-200 ease-in"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
