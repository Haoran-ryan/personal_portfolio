import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import Ryan from '../assets/Ryan.jpeg';
import { Link } from "react-scroll"; 


const Home = () => {
    return (
      <div
      name="home"
      className="h-screen w-full bg-[#0a192f]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          As a recent computer science graduate, I bring a unique perspective to my work as a junior developer. With a background in interpreting and teaching, I am adept at communicating technical concepts to diverse audiences. I am passionate about building user-friendly web applications that are accessible to all members of the community. I am eager to join a collaborative team where I can continue to develop my skills and contribute to meaningful projects.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Ryan}  
            alt="my profile"
            className="rounded-r-full mx-auto w-2/3 md:w-full px-10"
          />
        </div>
      </div>
    </div>
    );
  };

export default Home;