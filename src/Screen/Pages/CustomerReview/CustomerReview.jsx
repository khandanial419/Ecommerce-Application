import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { MdRateReview } from "react-icons/md";
import { format } from "date-fns";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/list-reviews")
      .then((response) => {
        setReviews(response.data.reviews.data);
        console.log(response.data.reviews.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-xl text-gray-700">
          <AiOutlineLoading3Quarters
            className="animate-spin h-10 ml-5"
            color="#5161ce"
            size={50}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-gray-700">
          Error loading reviews. Please try again later.
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-gray-700">
          No reviews added by customers yet.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center pt-10 sm:px-5 px-10 text-2xl sm:text-3xl text-[#0494b8] font-bold">
        <div className="flex items-center">
          <div>Customer Reviews</div>
          <MdRateReview className="ml-2 mt-2" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2  md:grid-col-4 lg:grid-cols-4 p-4 gap-4 justify-center">
        {reviews.map((review) => (
          <div key={review.id} className="flex-1 max-w-xs">
            <div className="border border-[#0494b8] rounded-lg overflow-hidden flex flex-col h-full p-4">
              <img
                src={review.image}
                alt={review.product_details}
                className="h-[400px] w-full object-cover"
              />
              <div className="flex flex-col justify-between flex-grow gap-1 mt-2">
                <div className=" text-lg">Buyer Name: {review.username}</div>
                <div className=" text-lg">
                  Product Details: {review.product_details}
                </div>
                <div className="text-sm mb-2">Feedback: {review.review}</div>
                <div className="text-lg">
                  {format(new Date(review.updated_at), "PPPp")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerReview;
