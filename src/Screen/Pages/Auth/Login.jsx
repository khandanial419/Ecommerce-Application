import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Signup from "./Singup"; // Import the Signup component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false); // State to track whether the user is on the signup page

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePage = () => {
    setIsSignup(!isSignup); // Toggle between login and signup pages
  };

  // Render the appropriate component based on the state
  if (isSignup) {
    return <Signup />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#0494b8]">Login</h2>
        <p className="text-lg text-gray-700 mb-10 text-gray-500">
          Welcome back!
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0494b8] bg-gray-200"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:border-[#0494b8] bg-gray-200"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          <a href="#" className="text-[#0494b8] mb-4 block">
            Forgot Password?
          </a>
          <button
            className="w-[500] bg-[#0494b8] text-white rounded-full px-4 py-2 hover:bg-[#0494b8]"
            type="submit"
          >
            Login
          </button>
          <p className="mt-4 text-gray-500">
            Not a member?{" "}
            <button onClick={handleTogglePage} className="text-[#0494b8]">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
