import React from "react";
import JoYCard from "../../Component/JoYCard";
import { cardsData } from "../../../utils/data";
import HomeCards from "../../Component/HomeCards";
import { TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const userName = useSelector((state) => state.user.name);
  // React.useEffect(() => {
  //   if (userName) {
  //     toast.success(`Welcome to our website, ${userName}!`);
  //     window.location.reload();
  //   }
  // }, [userName]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-4 flex-grow">
        <div className="text-center mb-5">
          <h3 className="text-4xl md:text-6xl text-[#0494b8] font-serif font-bold mb-2">
            DHT
          </h3>
          <p className="text-lg text-black font-bold">Whole Sale Shopping</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cardsData.map((data, index) => (
            <JoYCard key={index} {...data} />
          ))}
        </div>

        <HomeCards />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
