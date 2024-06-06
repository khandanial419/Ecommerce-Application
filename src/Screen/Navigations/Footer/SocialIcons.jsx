import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcons = ({ Icons }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'logo-facebook':
        return <FaFacebook />;
      case 'logo-twitter':
        return <FaTwitter />;
      case 'logo-github':
        return <FaGithub />;
      case 'logo-linkedin':
        return <FaLinkedin />;
      case 'logo-instagram':
        return <FaInstagram />;
      default:
        return null;
    }
  };

  return (
    <div className="text-[#0494b8]">
      {Icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#0494b8]
            duration-300 "
        >
          {getIcon(icon.name)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
