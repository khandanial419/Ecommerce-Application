import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Signup from "./Singup";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { setName } from "../../../Redux/UserSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e) => {
    dispatch(setName(values.email));
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/api/login", {
        ...values,
      });
      console.log(data);
      if (data) {
        Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
        navigate("/");
        window.location.reload();
        toast.success("Login successful");
      } else {
        toast.error(data.msgErr);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ backend: error.response.data.msgErr });
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePage = () => {
    setIsSignup(!isSignup);
  };

  if (isSignup) {
    return <Signup />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-xl p-8 text-center mb-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#0494b8]">Login</h2>
        <p className="text-lg text-gray-700 mb-10">Welcome back!</p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              required
              error={!!errors.email}
              helperText={errors.email}
            />
          </div>
          <div className="relative mb-6">
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
          {errors.backend && (
            <p className="text-red-500 mb-4">{errors.backend}</p>
          )}
          <a
            href="#"
            className="text-[#0494b8] mb-4 block"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </a>
          <button
            className="w-[200px] bg-[#0494b8] text-xl hover:border hover:border-spacing-0 border border-[#0494b8] hover:text-[#0494b8] hover:bg-white text-white rounded-full px-4 py-2 hover:border-opacity-90"
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

      <ToastContainer />
    </div>
  );
};

export default Login;
