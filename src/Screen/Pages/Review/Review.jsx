import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReviewPage = () => {
  const [username, setUsername] = useState("");
  const [productName, setProductName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!productName) newErrors.productName = "Product name is required";
    if (!feedback) newErrors.feedback = "Feedback is required";
    if (!image) newErrors.image = "Product image is required";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("product_details", productName);
    formData.append("review", feedback);
    formData.append("image", image);

    try {
      await axios.post("http://127.0.0.1:8000/api/post-review", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Successfully Submitted Review");

      // Clear form fields and fetch reviews again if needed
      setUsername("");
      setProductName("");
      setFeedback("");
      setImage(null);
      setErrors({});
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto p-4">
        {/* Form for submitting a review */}

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl text-[#0494b8] font-bold mb-4">
            Submit a Review
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium">Your Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:border-[#0494b8] focus:outline-[#0494b8]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>
            <div>
              <label className="block text-lg font-medium">
                Product Details
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:border-[#0494b8] focus:outline-[#0494b8]"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              {errors.productName && (
                <p className="text-red-500 text-sm">{errors.productName}</p>
              )}
            </div>
            <div>
              <label className="block text-lg font-medium">Feedback</label>
              <textarea
                className="w-full p-2 border rounded-md focus:border-[#0494b8] focus:outline-[#0494b8]"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              {errors.feedback && (
                <p className="text-red-500 text-sm">{errors.feedback}</p>
              )}
            </div>
            <div>
              <label className="block text-lg font-medium">Product Image</label>
              <input
                type="file"
                className="w-full p-2 border rounded-md focus:border-[#0494b8] focus:outline-[#0494b8]"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full p-2 bg-[#0494b8] text-white rounded-2xl"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
