import React from 'react';
import logo from "./assests/pic/GMC.png"


const Header = () => {
  return (
    <header className='flex justify-between px-[20px] py-[20px] bg-[#0101] '>
        <img src={logo} alt="gmc-pic" className=' h-[25px]' />

        <nav>
            <ul className='flex gap-[50px]'>
                <li className='hover:text-neutral-500'><a href="#home">Home</a></li>
                <li className='hover:text-neutral-500'><a href="#about">About</a></li>
                <li className='hover:text-neutral-500'><a href="#services">Services</a></li>
                <li className='hover:text-neutral-500'><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header