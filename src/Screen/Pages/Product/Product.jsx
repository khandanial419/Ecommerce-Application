import React from 'react';

const Product = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-md">
            <img
              className="w-full h-full rounded-lg"
              src="data:image/jpeg;base64,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"
              alt="Product"
            />
          </div>
        </div>
        <div className="max-w-md">
            <h2 className="text-3xl font-semibold mb-4">Product Name</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-700 mb-4">Price: $99.99</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>rfc
          
      </div>
    </div>
  )
}

export default Product;


