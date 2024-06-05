import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Login from "./Login"; // Import the Login component
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://localhost:6000/register",
        values,
        { withCredentials: true }
      );
      console.log("this is data", data);
      if (data) {
        if (data.errors) {
        } else {
        }
      }
    } catch (error) {
      console.log(error);
    }
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
        <form onSubmit={(e) => handleSubmit(e)} className="w-full">
          <div className="mb-6">
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0494b8] "
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="relative mb-6">
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:border-[#0494b8] "
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
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
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#0494b8] "
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              name="is_term_and_condition_accepted"
              id="terms"
              className="mr-2"
            />

            <span className="text-gray-600">
              I agree to the&nbsp;
              <Link
                to={"/termsofservices"}
                className="text-blue-500 underline hover:text-blue-700"
              >
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link
                to={"/privacypolicy"}
                className="text-blue-500 underline hover:text-blue-700"
              >
                Privacy Policy
              </Link>
            </span>
          </div>

          <button
            className="w-[200px] bg-[#0494b8] text-xl hover:border hover:border-spacing-0 border border-[#0494b8] hover:text-[#0494b8] hover:bg-white text-white rounded-full px-4 py-2 hover:border-opacity-90"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <ToastContainer />
        <p className="text-gray-500 text-sm mt-4">
          Already a member?{" "}
          <button className="text-[#0494b8]" onClick={handleTogglePage}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
