// src/components/SearchModal.js
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BuyCard from "../BuyCard";
import { add } from "../../../Redux/CartSlice"; // Adjust this import according to your project structure

const SearchModal = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/products-list?page_size=10" // Adjust the API URL if needed
        );
        console.log("Fetched products:", response.data.data);
        setProducts(response.data.data);
        setFilteredProducts(response.data.data); // Initially, show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (isOpen) {
      fetchProducts(); // Fetch products when the modal opens
    }
  }, [isOpen]);

  useEffect(() => {
    if (inputValue) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products if input is empty
    }
  }, [inputValue, products]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-2xl mx-4 sm:mx-0">
            <div className="relative p-4">
              <button
                className="absolute text-3xl text-[#0494b8] top-0 right-2"
                onClick={onClose}
              >
                &times;
              </button>
              <div className="my-4 flex flex-col justify-center items-center text-center">
                <label
                  htmlFor="search"
                  className="block text-[#0494b8] text-2xl font-bold mb-2"
                >
                  Search Products:
                </label>
                <input
                  id="search"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="block w-full max-w-xl px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0494b8] focus:border-[#0494b8] sm:text-sm"
                />
              </div>

              <div className="overflow-y-auto h-96 hide-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-10">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <BuyCard
                        key={index}
                        product={product}
                        hanldeAdd={handleAdd}
                      />
                    ))
                  ) : (
                    <p>No products found.</p>
                  )}
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
