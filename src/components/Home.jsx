
import HeroImage from "../assets/2.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  const handleButtonClick = () => {
    // Replace the link with your desired URL
    window.open('https://drive.google.com/file/d/1KR-DkU-SDa-UFHa8m821vTZuWk2IP7XA/view?usp=sharing', '_blank');
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-24">Hey 👋, I'm Sushant</h2>
          <p className="text-gray-500 py-4 max-w-md font-bold">
          As an aspiring web developer, I'm committed to a constant learning journey, staying aware of the latest trends to craft modern, user-friendly websites. Eager for opportunities to apply and expand my skills.
          </p>
          <button onClick={handleButtonClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-4 rounded inline-flex items-center w-40">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download CV</span>
          </button>
          <div className='text-4xl py-4 mt-2 flex justify-left gap-5 text-gray-600'>
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
        <motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}>
    <img
  src={HeroImage}
  alt="my profile"
  className="rounded-full w-80 h-80 ml-40 pl-5 flex sm:justify-self-start"
/>

</motion.button>
        

      </div>
    </div>
  )
}

export default Home;
















