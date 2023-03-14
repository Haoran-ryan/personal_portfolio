import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Haoran Ryan Guo, nice to meet you. 
              </p>
            </div>
            <div>
              <p>
                {" "}
                With a background in conference interpreting, I have developed a keen ability to quickly learn and adapt to new situations, which has been an asset in my journey to become a software engineer. I have acquired knowledge and experience in various fields such as AI, mechanical engineering, pharmaceuticals, banking, and more, and have completed UGC in Data Engineering at TAFE and GC in IT at UNSW.</p>
                
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold py-5">
              <p>
                I am an enthusiastic and dedicated professional.
              </p>
            </div>
            <div className="py-5">
              <p>
                {" "}
                Through these programs, I have mastered programming languages such as Python, SQL, R, and C, and have become proficient in using algorithms for data analytics. I have recently completed General Assembly's Software Engineering Immersive program, where I am confidently learning to do full-stack work with HTML, JavaScript, React, Ruby and so on.</p>
                
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold py-5">
              <p>
                I am passionate about software engineering.
              </p>
            </div>
            <div className="py-5">
              <p>
                {" "}
                As I continue to develop my skills and knowledge, I am seeking new opportunities to apply what I have learned and to grow as a software engineer. I am excited about the prospect of joining a team of like-minded professionals, and I look forward to the challenges and opportunities that lie ahead.</p>
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
       
      </div>
    
    </div>
  );
};
export default About;