import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const About2 = () => { 
  return (
    <div
      name="about2"
      id="about2"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
        
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-2xl font-bold py-5">
              <p>
                I am ready to take challenges and explore possibilities.
              </p>
            </div>
            <div className="py-5">
              <p>
                {" "}
                As I continue to develop my skills and knowledge, I am seeking new opportunities to apply what I have learned and to grow as a software engineer. I am excited about the prospect of joining a team of like-minded professionals, and I look forward to the challenges and opportunities that lie ahead.
                </p>
            </div>
            
          </div>
        </div>
        <div>
            <Link
              to="skills"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Skills
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
      </div>
    </div>
  );
};
export default About2;