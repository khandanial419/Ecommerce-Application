// src/components/SearchModal.js
import React, { useState } from "react";

const SearchModal = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate fetching products based on input value
    setProducts([
      // Simulate more products
      {
        id: 1,
        name: "Product 1",
        details: "Details of Product 1",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Product 2",
        details: "Details of Product 2",
        image: "https://via.placeholder.com/150",
      },
      // Add more products here if needed
    ]);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-lg mx-4 sm:mx-0">
            <div className="relative p-4">
              <button
                className="absolute text-3xl text-[#0494b8] top-0 right-2"
                onClick={onClose}
              >
                &times;
              </button>
              <form onSubmit={handleFormSubmit} className="mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="search"
                    className="block text-[#0494b8] text-2xl font-bold"
                  >
                    Search Products:
                  </label>
                  <input
                    id="search"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0494b8] focus:border-[#0494b8] sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2  text-white rounded-md bg-[#0494b8]"
                >
                  Search
                </button>
              </form>
              <div className="overflow-y-auto h-96 hide-scrollbar">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-700">{product.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
