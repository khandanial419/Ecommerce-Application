import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importing the new ShoppingCartIcon
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { MdExpandMore } from "react-icons/md";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CancelIcon from "@mui/icons-material/Cancel";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { MdRateReview } from "react-icons/md";
import InfoIcon from "@mui/icons-material/Info";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import HelpIcon from "@mui/icons-material/Help";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const userData = Cookies.get("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  const arrayOfLinks = [
    "",
    "product",
    "blog",
    "about",
    "contactus",
    "faq",
    "reviews",
    "review-customer",
  ];

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
        {[
          "Home",
          "Products",
          "Blogs",
          "About Us",
          "Contact Us",
          "FAQ",
          "Reviews",
          "Customer Reviews",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={`/${arrayOfLinks[index].replace(/\s+/g, "").toLowerCase()}`}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <InventoryIcon />
                ) : index === 2 ? (
                  <ImportContactsIcon />
                ) : index === 3 ? (
                  <InfoIcon />
                ) : index === 4 ? (
                  <ContactEmergencyIcon />
                ) : index === 5 ? (
                  <HelpIcon />
                ) : index === 6 ? (
                  <MdRateReview size={30} />
                ) : index === 7 ? (
                  <MdRateReview size={30} />
                ) : (
                  <HelpIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <NavLink
          to="/cart-item"
          className="flex items-center  px-5 text-gray-500    py-2 rounded-md text-lg font-bold"
        >
          <ShoppingCartIcon />
          <div className="ml-2 ">:{items.length}</div>
          {/* <span className="ml-1">Cart</span> */}
        </NavLink>
      </List>
      <List>
        {["Login", "Signup"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={NavLink} to={`/${text.toLowerCase()}`}>
              <ListItemText
                primary={text}
                sx={{
                  background: "#0494b8",
                  color: "white",
                  fontSize: "20px",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav
      className="bg-gradient-to-r border-b-4 border-[#0494b8] from-purple-900 via-blue-300 to-green-300 text-white"
      style={{
        background: "white",
        backgroundImage:
          "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-start">
            <div
              className="flex-shrink-0 text-white h-30 sm:h-30 hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
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
              className="flex gap-1 items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <ContactEmergencyIcon />
              Contact Us
            </NavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
              >
                <div className="flex item-center justify-center">
                  {" "}
                  <spann> More</spann>
                  <span className="mt-[-5]">
                    <MdExpandMore fontSize={25} />
                  </span>
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-1 w-[200px] z-[100]">
                  <NavLink
                    to="/faq"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block py-2 text-[#0494b8] hover:bg-[#0494b8] hover:text-white text-lg font-bold"
                  >
                    <div className="flex items-center px-2 ">
                      <HelpIcon fontSize="20" />
                      <span className="ml-1">FAQ</span>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/reviews"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-0 py-2 text-[#0494b8] hover:bg-[#0494b8] hover:text-white text-lg font-bold"
                  >
                    <div className="flex items-center px-2 ">
                      <MdRateReview fontSize="20" />
                      <span className="ml-1">Reviews</span>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/review-customer"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-0 py-2 text-[#0494b8] hover:bg-[#0494b8] hover:text-white text-lg font-bold"
                  >
                    <div className="flex items-center  px-2 ">
                      <MdRateReview fontSize="20" />
                      <span className="ml-1 ">Customer Reviews</span>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            {user ? (
              <NavLink
                onClick={handleLogout}
                to="/login"
                className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
              >
                Logout
              </NavLink>
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
              to="/cart-item"
              className="flex items-center text-[#0494b8] hover:bg-[#0494b8] hover:text-white px-3 py-2 rounded-md text-lg font-bold"
            >
              <ShoppingCartIcon size={20} />
              <div className="mr-1">:{items.length}</div>
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
