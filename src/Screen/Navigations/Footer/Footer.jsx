import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-[#0494b8]">Free</span> until you're ready to
            shine with DHT Clothing.
          </h1>
          <div></div>
        </div>
        <ItemsContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
          <span>© 2024 DHT. All rights reserved.</span>
          <span>
            <Link to={"/termsofservices"}> Terms of Services</Link> ·
            <Link to={"/privacypolicy"}> Privacy Policy</Link>
          </span>
          <SocialIcons Icons={Icons} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
