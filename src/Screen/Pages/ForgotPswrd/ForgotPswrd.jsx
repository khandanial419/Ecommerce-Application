import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPswrd = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const forgotPasswordApi = async (email) => {
    const url = "http://127.0.0.1:8000/api/forgot-password";

    try {
      const response = await axios.post(
        url,
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(response.data.msg);
      return response.data.msg;
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.msgErr);
        throw new Error(error.response.data.msgErr);
      } else {
        toast.error(error.message);
        throw new Error(error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPasswordApi(email);
      navigate("/verify-otp");
    } catch (error) {
      console.error("Submission error:", error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center justify-center flex-grow">
            <img
              src={logo}
              alt="Villemara Logo"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center h-full w-full p-5">
          <div className="border border-[#0494b8] p-5 text-center rounded-3xl w-full max-w-lg flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-2xl mb-4 w-[80%]">Forgot Password</div>
              <p className="text-sm w-[80%] mb-8 text-[#444444]">
                Please enter your registered email address
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex items-center px-4 space-x-2 mb-10 w-full">
                  <MdEmail className="text-[#0494b8]" size={30} />
                  <input
                    className="border border-gray-300 rounded-3xl w-full px-4 py-2 outline-none placeholder-gray-500 focus:outline-none focus:border-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#0494b8] hover:bg-white border hover:border-[#0494b8] hover:text-[#0494b8] rounded-3xl text-white py-2 px-4 w-full sm:w-3/4 lg:w-2/4"
                >
                  Done
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPswrd;
