import React, { useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Login from './Login'; // Import the Login component

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // State to track whether the user is on the login page

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePage = () => {
    setIsLogin(!isLogin); // Toggle between login and signup pages
  };

  // Render the appropriate component based on the state
  if (isLogin) {
    return <Login />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#0494b8]">Sign Up</h2>
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
              type={showPassword ? 'text' : 'password'}
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
          <div className="mb-6">
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0494b8] bg-gray-200"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-[500] bg-[#0494b8] text-white rounded-full px-4 py-2 hover:bg-[#0494b8]"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">Already a member? <button className="text-[#0494b8]" onClick={handleTogglePage}>Log In</button></p>
      </div>
    </div>
  );
};

export default Signup;
