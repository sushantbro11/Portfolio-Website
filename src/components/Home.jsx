import React from 'react';
import HeroImage from "../assets/2.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  const handleButtonClick = () => {
    // Replace the link with your desired URL
    window.open('https://drive.google.com/file/d/1KR-DkU-SDa-UFHa8m821vTZuWk2IP7XA/view?usp=sharing', '_blank');
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-20 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white pt-14">Hey, I'm Sushant</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next JS, and GraphQL.
          </p>
          <button onClick={handleButtonClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-40">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download CV</span>
          </button>
          <div className='text-4xl py-4 flex justify-left gap-5 text-gray-600'>
            <Link to="https://np.linkedin.com/in/sushant-tripathee-14b412209" className="hover:scale-150 transition-transform duration-300 ease-in-out">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/sushantbro11" className="hover:scale-150 transition-transform duration-300 ease-in-out">
              <FaGithub />
            </Link>
            <Link to="https://www.instagram.com/sushantbro/?hl=en" className="hover:scale-150 transition-transform duration-300 ease-in-out">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <img
          src={HeroImage}
          alt="my profile"
          className="rounded-3xl w-80 h-80 px-3 ml-8"
        />
      </div>
    </div>
  )
}

export default Home;
