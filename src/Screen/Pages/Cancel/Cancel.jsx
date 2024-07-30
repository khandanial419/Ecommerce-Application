import React from "react";

function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-700">Payment Cancelled</h1>
      <p className="mt-4 text-lg">Your payment has been cancelled.</p>
      {/* Add reason for cancellation, retry option, etc. */}
    </div>
  );
}

export default Cancel;
