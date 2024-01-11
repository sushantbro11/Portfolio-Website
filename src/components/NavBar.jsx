import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react';


function Navbar() {
  // nav is starting off false
  const [nav, setNav] = useState(false)
  // so when the user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav)

  return (
    <nav className="flex justify-between p-5 items-center w-full h-20 bg-[#000000d1] font-signature1 text-white fixed">
      <h1 className='text-5xl font-signature ml-2 '>Portfolio</h1>
      <ul className='hidden md:flex gap-6 font-medium'>
        <Link to='/'><li className='hover:scale-105 duration-200'>Home</li></Link>
        <Link to='/about'><li className='hover:scale-105 duration-200'>Education</li></Link>
        <Link to='/skills'><li className='hover:scale-105 duration-200'>Skills</li></Link>
        <Link to='/projects'><li className='hover:scale-105 duration-200'>Projects</li></Link>
        <Link to='/contact'><li className='hover:scale-105 duration-200'>Contact</li></Link>
      </ul>
      {/* Hamburger or Close Icon */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform-gpu'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform-gpu absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to='/'><li className='hover:scale-105 duration-200'>Home</li></Link>
        <Link to='/about'><li className='hover:scale-105 duration-200'>Education</li></Link>
        <Link to='/skills'><li className='hover:scale-105 duration-200'>Skills</li></Link>
        <Link to='/projects'><li className='hover:scale-105 duration-200'>Projects</li></Link>
        <Link to='/contact'><li className='hover:scale-105 duration-200'>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar;
