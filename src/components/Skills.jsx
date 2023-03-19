import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=' w-full flex justify-center items-center flex-col mb-7'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                <p className='py-4 text-2xl'>I am a curious and adaptable learner who enjoys exploring new technologies. Below is a list of technologies that I have experience working with:</p>
            </div> 
            <div className='w-full py-8'>
                <h2 className='text-3xl font-bold mb-4'>Frontend</h2>
                <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 text-center'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>React JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Vue</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Sass</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Quasar Framework</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>
                <h2 className='text-3xl font-bold my-8'>Backend</h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Express</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Node JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Firestore</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Mongo DB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>SupaBase</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>GraphQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Ruby on Rails</p>
                    </div>
                </div>
                <h2 className='text-3xl font-bold my-8'>Programming Languages</h2>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Ruby</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>R</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>C</p>
                    </div>
                </div>
                <div>
            <Link
              to="work"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
    </div>
</div>
)};
  
export default Skills;