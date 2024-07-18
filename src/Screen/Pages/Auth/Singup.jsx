import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { TextField, IconButton, InputAdornment } from "@mui/material";

const Signup = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      });

      if (response.data && response.data.msg) {
        toast.success(response.data.msg);
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({
          backend:
            error.response.data.msg || error.response.data.errors.email[0],
        });
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  const validate = (values, confirmPassword) => {
    const errors = {};
    if (!values.first_name) errors.first_name = "First Name is required";
    if (!values.last_name) errors.last_name = "Last Name is required";
    if (!values.email) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(values.email))
      errors.email = "Email address is invalid";
    if (!values.password) errors.password = "Password is required";
    if (values.password.length < 8)
      errors.password = "Password must be at least 8 characters";
    if (values.password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    return errors;
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
    navigate("/login");
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
              error={!!errors.first_name}
              helperText={errors.first_name}
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
              error={!!errors.last_name}
              helperText={errors.last_name}
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
              error={!!errors.email}
              helperText={errors.email}
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
              error={!!errors.password}
              helperText={errors.password}
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
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
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
          {errors.backend && (
            <p className="text-red-500 mb-4">{errors.backend}</p>
          )}
          <div className="flex items-center mb-5 justify-center">
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

export default Signup
