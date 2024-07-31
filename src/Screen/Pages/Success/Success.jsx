import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("session_id");

  useEffect(() => {
    if (sessionId) {
      saveOrderData(sessionId);
    }
  }, [sessionId]);

  const saveOrderData = async (sessionId) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Order saved:", data);
    } catch (error) {
      console.error("Error saving order data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
      <p className="mt-4 text-lg">
        Your payment has been processed successfully.
      </p>
      {/* Add order details, next steps, etc. */}
    </div>
  );
}

export default Success;
