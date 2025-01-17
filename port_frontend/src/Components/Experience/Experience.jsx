import React from "react";
import { FaBootstrap, FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiNetlify, SiPostgresql, SiRender, SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 md:pb-0" >
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-3/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#8F00FF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#38B2AC" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGit color="#F1502F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="#fff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNetlify color="#00C7B7" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRender color="#fff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="#339933" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#777" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostgresql color="#336791" size={50} />
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64">
            {/* Pulsing Skeleton Circles with Different Colors */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gray-500 animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-blue-500 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-red-500 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-yellow-500 animate-pulse"></div>

            {/* Additional Circles for Complexity */}
            <div className="absolute top-1/4 left-1/2 w-8 h-8 rounded-full bg-teal-500 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-purple-500 animate-pulse"></div>
            <div className="absolute bottom-1/2 left-1/4 w-8 h-8 rounded-full bg-pink-500 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/2 w-8 h-8 rounded-full bg-green-500 animate-pulse"></div>

            {/* Additional Circles */}
            <div className="absolute top-1/8 left-1/8 w-10 h-10 rounded-full bg-orange-500 animate-pulse"></div>
            <div className="absolute top-1/8 right-1/8 w-10 h-10 rounded-full bg-indigo-500 animate-pulse"></div>
            <div className="absolute bottom-1/8 left-1/8 w-10 h-10 rounded-full bg-cyan-500 animate-pulse"></div>
            <div className="absolute bottom-1/8 right-1/8 w-10 h-10 rounded-full bg-lime-500 animate-pulse"></div>

            {/* Central Skeleton Circle with a Different Color and Text */}
            <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-gray-400 animate-pulse transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-black text-lg font-serif">
              Fresher
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
