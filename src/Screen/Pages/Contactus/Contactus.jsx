import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callicon from "../../../assets/callicon.png";
import mailicon from "../../../assets/mailIcon.png";
import location from "../../../assets/locationIcon.png";
import clockIcon from "../../../assets/clockIcon.png";
import axios from "axios";
import { ToastContainer } from "react-toastify";
const Index = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [Name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSendMessage = async () => {
    console.log("This is name", Name);
    console.log("This is email", email);
    console.log("This is subject", subject);
    console.log("This is message", message);

    try {
      const response = await ApiSendMessage(Name, email, message, subject);
      console.log("Message sent successfully!", response.message);
      toast.success(response.message); // Show success toast
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again."); // Show error toast
    }
  };

  const ApiSendMessage = async (name, email, message, subject) => {
    const url = "http://127.0.0.1:8000/api/contact-us";

    try {
      const response = await axios.post(url, {
        name: name,
        email: email,
        message: message,
        subject: subject,
      });

      return response.data; // Return data or handle further
    } catch (error) {
      throw error; // Throw error to handle it further up the call stack
    }
  };

  return (
    <div className="p-4 sm:p-3">
      <div className="sm:p-10 p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border border-white shadow-lg p-0  sm:p-10">
          <div>
            <h1 className="uppercase text-[#0494b8] text-[24px] sm:text-[32px] font-[700] mb-10">
              Contact Us
            </h1>
            <div className="w-full">
              <div className="mb-10">
                <p className="mb-4">Your Name</p>
                <input
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 h-[52px] rounded-[8px] p-2 bg-[#F5F5F5]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="mb-10">
                  <p className="mb-4">Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 h-[52px] rounded-[8px] p-2 bg-[#F5F5F5]"
                  />
                </div>
                <div className="mb-10">
                  <p className="mb-4">Subject</p>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-gray-300 h-[52px] rounded-[8px] p-2 bg-[#F5F5F5]"
                  />
                </div>
              </div>
              <div className="mb-10">
                <p className="mb-4">Message</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 h-[160px] bg-[#F5F5F5] rounded-[8px] p-2"
                ></textarea>
              </div>
              <button
                onClick={handleSendMessage}
                className="bg-[#0494b8] py-[16px] px-[24px] w-full text-white text-lg rounded-lg"
              >
                Send message
              </button>
            </div>
          </div>
          <div className="m-auto w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211749.53155963024!2d71.40065488284468!3d33.977467928218694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1719416278847!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <img src={callicon} alt="Call Icon" className="w-12 mx-auto mb-2" />
            <p className="text-lg font-normal mb-2">Phone Number</p>
            <div className="text-[#383939]">
              <p className="text-sm">03205586733</p>
            </div>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg ">
            <img src={mailicon} alt="Mail Icon" className="w-12 mx-auto mb-2" />
            <p className="text-lg font-normal mb-2">Email Address</p>
            <div className="text-[#383939] overflow-wrap break-word">
              <p className="text-sm whitespace-normal ">
                <span className="break-all sm:break-keep">
                  DHT&WholsaleProducts@gmail.com
                </span>
              </p>
            </div>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <img
              src={clockIcon}
              alt="Clock Icon"
              className="w-12 mx-auto mb-2"
            />
            <p className="text-lg font-normal mb-2">Working Hours</p>
            <div className="text-[#383939]">
              <p className="text-sm">24 Hours--Available</p>
            </div>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <img
              src={location}
              alt="Location Icon"
              className="w-12 mx-auto mb-2"
            />
            <p className="text-lg font-normal mb-2">Our Address</p>
            <div className="text-[#383939] overflow-visible">
              <p className="text-sm">Peshawar Pakistan</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;
