import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <NavLink
            className="text-gray-500 hover:text-[#0494b8] duration-300
          text-sm cursor-pointer leading-6"
            to={link.link}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Item;
