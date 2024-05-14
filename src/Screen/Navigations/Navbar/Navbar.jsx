import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from'../../../assets/logo.png'
import { FiMenu, FiX } from 'react-icons/fi';
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r border-b-4 border-[#0494b8] from-purple-900 via-blue-300 to-green-300 text-white" style={{ background: 'white', backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)', backgroundBlendMode: 'lighten' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white h-30 sm:h-30 ">
              <img src={logo} alt="Logo" width={150} className="h-full sm:w-40 rounded-lg logo-img" />
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">Home</NavLink>
            <NavLink to="/product" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">Products</NavLink>
          
            <NavLink to="/about" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">About Us</NavLink>
            <NavLink to="/contactus" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">Contact Us</NavLink>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <NavLink to="/login" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">Login</NavLink>
              <NavLink to="/signup" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">Signup</NavLink>
              <NavLink to="#" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">
                <GiShoppingCart  size={30} />
              </NavLink>
            </div>
            <button onClick={toggleMenu} className="md:hidden text-[#0494b8] inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 text-center pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white block px-3 py-2 rounded-md text-base font-bold">Home</NavLink>
          <NavLink to="/product" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white block px-3 py-2 rounded-md text-base font-bold">Products</NavLink>
          <NavLink to="/services" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white block px-3 py-2 rounded-md text-base font-bold">Services</NavLink>
          <NavLink to="/about" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white block px-3 py-2 rounded-md text-base font-bold">About Us</NavLink>
          <NavLink to="/contactus" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white block px-3 py-2 rounded-md text-base font-bold">Contact Us</NavLink>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/login" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">Login</NavLink>
          <NavLink to="/signup" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">Signup</NavLink>
          <NavLink to="#" className="text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold">
            <GiShoppingCart  size={30} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
