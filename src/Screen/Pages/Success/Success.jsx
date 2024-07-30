import React from "react";

function Success() {
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
