import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CancelIcon from "@mui/icons-material/Cancel";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import InfoIcon from "@mui/icons-material/Info";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = Cookies.get("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("user");
    setUser(null);
    navigate(0); // Reload the page
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
        {["Home", "Products", "Blogs", "About Us", "Contact Us"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`/${text.replace(/\s+/g, "").toLowerCase()}`}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {user ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        ) : (
          ["Login", "Signup"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={NavLink} to={`/${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );

  return (
    <nav
      className="bg-gradient-to-r border-b-4 border-[#0494b8] from-purple-900 via-blue-300 to-green-300 text-white sticky top-0 z-[100]"
      style={{
        background: "white",
        backgroundImage:
          "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
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
              to="/product"
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
          </div>
          <div className="hidden md:flex space-x-4">
            {user ? (
              <>
                <span className="flex items-center text-[#0494b8] px-3 py-2 rounded-md text-lg font-bold">
                  {user.name}
                </span>
                <NavLink
                  to="#"
                  onClick={handleLogout}
                  className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="flex items-center  hover:text-[#0494b8] hover:bg-white bg-[#0494b8] text-white px-3 py-2 rounded-lg text-lg font-bold"
                >
                  Signup
                </NavLink>
              </>
            )}
            <NavLink
              to="#"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <GiShoppingCart size={30} />
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
