import React, { useState } from "react";

import { faqs } from "../../../utils/data";

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow p-4 md:p-10">
        <div className="min-h-screen flex flex-col justify-center items-center bg-white-100 p-4">
          <div className="w-full max-w-6xl">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-20 text-[#E97B08]">
              Frequently Asked Questions
            </h1>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-gray-50 rounded-lg shadow-md">
                <div
                  className="flex items-center p-4 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <span className="mr-4">
                    {expanded === index ? (
                      <svg
                        className="w-6 h-6 text-[#E97B08]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-[#E97B08]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                    )}
                  </span>
                  <h2 className="text-xl md:text-2xl font-medium">
                    {expanded === index
                      ? faq.question
                      : `Q${index + 1}: ${faq.question}`}
                  </h2>
                </div>
                {expanded === index && (
                  <div className="p-4 border-t border-gray-200">
                    <p className="text-lg md:text-xl text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faq;
