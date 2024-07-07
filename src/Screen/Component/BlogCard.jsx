import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  title,
  content,
  moreContent,
  image,
  date,
  index,
  height,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef();

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "2-digit",
  });

  const handleReadMore = () => {
    switch (index) {
      case 0:
        navigate(`/blogmen/${index}`);
        break;
      case 1:
        navigate(`/blogwomen/${index}`);
        break;
      case 2:
        navigate(`/blogbabydoll/${index}`);
        break;
      case 3:
        navigate(`/blogbabyprince/${index}`);
        break;
      default:
        navigate("/blog");
    }
  };

  useEffect(() => {
    if (height) {
      cardRef.current.style.height = `${height}px`;
    }
  }, [height]);

  return (
    <div
      ref={cardRef}
      className="p-4 flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden w-full"
      style={{ minHeight: "500px" }}
    >
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
          style={{ minWidth: "300px", minHeight: "400px" }}
        />
      </div>
      <div className="flex items-center text-xl text-black-600 mt-2 p-4">
        <i className="fas fa-clock mr-2 text-[#0494b8]"></i>
        {formattedDate}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        {isExpanded && <p className="text-gray-600">{moreContent}</p>}
        <button
          className="bg-[#0494b8] text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleReadMore}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
