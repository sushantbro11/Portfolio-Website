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
    <nav className={`flex justify-between p-5 items-center border-b w-full bg-[#e7e7e7d1] ${nav ? 'fixed top-0 w-full' : 'fixed'}`}>
      <h1 className='text-4xl'>Portfolio</h1>
      <ul className='hidden md:flex gap-6'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/skills'><li>Skills</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
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
        <Link to='/'><li className='hover:text-teal-700'>Home</li></Link>
        <Link to='/about'><li className='hover:text-teal-700'>About</li></Link>
        <Link to='/skills'><li className='hover:text-teal-700'>Skills</li></Link>
        <Link to='/projects'><li className='hover:text-teal-700'>Projects</li></Link>
        <Link to='/contact'><li className='hover:text-teal-700'>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar;
