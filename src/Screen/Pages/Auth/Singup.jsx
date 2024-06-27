import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { TextField, IconButton, InputAdornment } from "@mui/material";

const Signup = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
        },
        body: JSON.stringify({
          first_name: "John",
          last_name: "Doe",
          email: values.email,
          password: values.password,
        }),
      });

      // try {
      //   const response = await axios.post(
      //     "http://localhost:3001/auth/signup",
      //     values
      //   );
      //   if (response.data.success) {
      //     toast.success(response.data.msg);
      //     setIsLogin(true);
      //   } else {
      //     toast.error(response.data.msg);
      //   }
      // }
    } catch (error) {
      toast.error(error.response?.data?.msgErr || "An error occurred");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleTogglePage = () => {
    setIsLogin(!isLogin);
  };

  if (isLogin) {
    navigate("/login"); // Redirect to the login page
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-xl p-8 text-center mb-auto">
        <h2 className="sm:text-4xl text-2xl font-bold sm:mb-10 mb-5 text-[#0494b8]">
          Register Your Account
        </h2>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              name="first_name"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              name="last_name"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              type="email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleToggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              name="is_term_and_condition_accepted"
              id="terms"
              className="mr-2"
              required
            />
            <span className="text-gray-600">
              I agree to the&nbsp;
              <Link
                to="/termsofservices"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link
                to="/privacypolicy"
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
