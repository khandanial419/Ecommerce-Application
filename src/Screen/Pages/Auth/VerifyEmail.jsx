// VerifyEmail.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = ({ location }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const query = new URLSearchParams(location.search);
      const token = query.get("token");

      if (token) {
        try {
          const response = await axios.get(
            `http://localhost:3001/auth/verify-email?token=${token}`
          );
          if (response.data.msg) {
            navigate("/login"); // Redirect to login page
          }
        } catch (error) {
          console.error("Error verifying email:", error);
        }
      }
    };

    verifyEmail();
  }, [location, navigate]);

  return (
    <div>
      <h1>Verifying Email...</h1>
    </div>
  );
};

export default VerifyEmail;
