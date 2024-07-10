import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../../Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispath = useDispatch();
  const handleRemove = (id) => {
    dispath(remove(id));
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center my-10">
      <h2 className="text-3xl font-bold  text-[#0494b8] mb-10">CART PAGE</h2>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={item.image_url}
                alt="Product Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                  <h4 className="text-gray-600 mb-2">${item.price}</h4>
                  <p className="text-gray-500">{item.description}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-[#0494b8] hover:bg-red-600 text-white px-4 py-2 rounded-2xl    mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600 mt-8">
          No products added to the cart.
        </p>
      )}
    </div>
  );
};

export default Cart;
