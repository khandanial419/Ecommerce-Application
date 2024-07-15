import React, { useState, useEffect } from "react";
import axios from "axios";

const ReviewPage = () => {
  const [username, setUsername] = useState("");
  const [productName, setProductName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [image, setImage] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [errors, setErrors] = useState({});
  const reviewData = [
    {
      username: "Dani",
      productName: "T-Shirt cotton",
      feedback: "this products is so good and comfortable etc...",
      imageUrl: "/Boy's Red Shirt - EBTS24-27536 2099.webp",
    },
    {
      username: "Dani",
      productName: "T-Shirt cotton",
      feedback: "this products is so good and comfortable etc...",
      imageUrl: "/Step Out Dusky Purple Graphic T-Shirt - S22 - 2000.jpg",
    },
    {
      username: "Dani",
      productName: "T-Shirt cotton",
      feedback: "this products is so good and comfortable etc...",
      imageUrl: "/Step Out Dusky Purple Graphic T-Shirt - S22 - 2000.jpg",
    },
  ];
  const fetchReviews = async () => {
    try {
      const response = await axios.get("YOUR_API_ENDPOINT/reviews");
      setReviews(response.data || reviewData);
    } catch (error) {
      console.error("Error fetching reviews", error);
      setReviews([]); // Ensure reviews is an array even if there's an error
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

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
    formData.append("productName", productName);
    formData.append("feedback", feedback);
    formData.append("image", image);

    try {
      await axios.post("YOUR_API_ENDPOINT/reviews", formData);
      fetchReviews();
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
            <label className="block text-lg font-medium">Product Details</label>
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
      </div>{" "}
      {reviewData ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviewData.length > 0 ? (
              reviewData.map((review) => (
                <div key={review.id} className="mb-4 p-4  rounded-md">
                  {review.imageUrl && (
                    <img
                      src={review.imageUrl}
                      alt={review.productName}
                      className="rounded-2xl h-30"
                    />
                  )}
                  <h3 className="text-lg ">
                    <span className="mr-2 font-bold">Buyer Name:</span>
                    {review.username}
                  </h3>
                  <p className="text-md">
                    <span className="mr-2 font-bold ">Product Details:</span>
                    {review.productName}
                  </p>
                  <p className="text-md">
                    <span className="mr-2 font-bold">Feedback:</span>
                    {review.feedback}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewPage;
