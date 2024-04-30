import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from'../../../assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r  border-b-4 border-[#0494b8] from-purple-900 via-blue-300 to-green-300 text-white" style={{ background: 'white', backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)', backgroundBlendMode: 'lighten' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white h-40 ">
            <img src={logo} alt="Logo" width={200} className="h-full  sm:w-40 rounded-lg logo-img" />
            </div>
          </div>
          <div className="flex justify-center flex-grow md:flex-grow-0">
            <div className="hidden md:flex space-x-4">
             <NavLink to="/" className="text-[#0494b8] hover:bg-[#0494b8] hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-bold">Home</NavLink>
             <NavLink to="/about" className="text-[#0494b8] hover:bg-[#0494b8] hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-bold">About</NavLink>
             <NavLink to="/ContactUs" className="text-[#0494b8] hover:bg-[#0494b8] hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-bold">Contact Us</NavLink>
             {/* <NavLink to="/service" className="text-[#0494b8] hover:bg-[#0494b8]hover:text-white block px-3 py-2 rounded-md text-base font-bold">Services</NavLink> */}
             <NavLink to="/about" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-bold">About</NavLink>
             <NavLink to="/ContactUs" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-bold">Contact Us</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
            <NavLink to="/login" className="text-[#0494b8] hover:bg-[#0494b8] hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-bold">Login</NavLink>
             <NavLink to="/signup" className="text-[#0494b8] hover:bg-[#0494b8] hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-bold">Signup</NavLink>
             <NavLink to="#" className="text-[#0494b8] hover:bg-[#0494b8] hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-bold">Settings</NavLink>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-[#0494b8] inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         <NavLink to="/home" className="text-[#0494b8] hover:bg-[#0494b8]hover:text-white block px-3 py-2 rounded-md text-base font-bold">Home</NavLink>
         <NavLink to="/about" className="text-[#0494b8] hover:bg-[#0494b8]hover:text-white block px-3 py-2 rounded-md text-base font-bold">About</NavLink>
         {/* <NavLink to="/service" className="text-[#0494b8] hover:bg-[#0494b8]hover:text-white block px-3 py-2 rounded-md text-base font-bold">Services</NavLink> */}
         <NavLink to="/Contactus" className="text-[#0494b8] hover:bg-[#0494b8]hover:text-white block px-3 py-2 rounded-md text-base font-bold">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
