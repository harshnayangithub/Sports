import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef(null);





  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    
  return (
    <div className='bg-[#181716f3] shadow-lg z-50 w-full text-center relative'>
      <div className='max-w-[1240px] py-3 px-6 flex justify-between text-center items-center mx-auto'>
        <Link to="/" className='text-white text-3xl font-bold flex flex-col text-center items-center'>
          <div className='bg-white text-[#1d1c1af3] text-center rounded px-2'>Sports Day</div>
          
        </Link>
        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white  cursor-pointer text-2xl md:hidden block ml-8' />
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white cursor-pointer text-2xl md:hidden block ml-4' />
        }
        <ul className='hidden md:flex text-white gap-10 font-semibold'>
         
          
        
          
        </ul>

        <ul className={`fixed top-0 left-0 w-full h-full bg-black text-white mt-[80px] z-40 transform ${toggle ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/" onClick={() => setToggle(false)}>Home</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/donate" onClick={() => setToggle(false)}>Donate</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/volunteer" onClick={() => setToggle(false)}>Volunteer</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/ourinitiatives" onClick={() => setToggle(false)}>Our Initiatives</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/about" onClick={() => setToggle(false)}>About us</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C] hover:underline'><Link to="/contact" onClick={() => setToggle(false)}>Contact</Link></li>
          <li className='p-5 text-center hover:text-[#DD761C]' onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
            <span className='cursor-pointer'>Choose Language</span>
          </li>
         
        </ul>
      </div>
    </div>
  );
}