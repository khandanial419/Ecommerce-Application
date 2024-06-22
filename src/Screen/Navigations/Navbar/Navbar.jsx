import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importing the new ShoppingCartIcon
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CancelIcon from "@mui/icons-material/Cancel";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import InfoIcon from "@mui/icons-material/Info";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="flex justify-end p-2">
        <button
          onClick={toggleDrawer(false)}
          className="text-[#0494b8] focus:outline-none"
        >
          <CancelIcon size={34} />
        </button>
      </div>

      <List>
        {["Home", "Products", "Blogs", "About Us", "Contact Us", "FAQ"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`/${text.replace(/\s+/g, "").toLowerCase()}`}
              >
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> : 
                   index === 1 ? <InventoryIcon /> : 
                   index === 2 ? <ImportContactsIcon /> : 
                   index === 3 ? <InfoIcon /> : 
                   index === 4 ? <ContactEmergencyIcon /> : 
                   <HelpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Login", "Signup"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={NavLink} to={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                {text === "Login" ? <LoginIcon /> : <PersonAddIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav
      className="sticky top-0 z-[100] bg-gradient-to-r border-b-4 border-[#0494b8] from-purple-900 via-blue-300 to-green-300 text-white"
      style={{
        background: "white",
        backgroundImage: "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white h-30 sm:h-30">
              <img
                src={logo}
                alt="Logo"
                width={150}
                className="h-full sm:w-40 rounded-lg logo-img"
              />
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <HomeIcon />
              <span className="ml-1">Home</span>
            </NavLink>

            <NavLink
              to="/product"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <InventoryIcon />
              Products
            </NavLink>
            <NavLink
              to="/blog"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <ImportContactsIcon />
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <InfoIcon />
              About Us
            </NavLink>
            <NavLink
              to="/contactus"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <ContactEmergencyIcon />
              Contact Us
            </NavLink>

            <NavLink
              to="faq"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <HelpIcon />
              <span className="ml-1">FAQ</span>
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/login"
              className="flex items-center hover:text-[#0494b8] hover:bg-white bg-[#0494b8] text-white px-3 py-2 rounded-lg text-lg font-bold"
            >
              <LoginIcon />
              <span className="ml-1">Login</span>
            </NavLink>
            <NavLink
              to="/signup"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <PersonAddIcon />
              <span className="ml-1">Register</span>
            </NavLink>
            <NavLink
              to="#"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <ShoppingCartIcon size={30} />
              {/* <span className="ml-1">Cart</span> */}
            </NavLink>
          </div>
          <button
            onClick={toggleDrawer(true)}
            className="md:hidden text-[#0494b8] inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            <FiMenu size={30} />
          </button>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
