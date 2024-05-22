import React from "react";
import Card from "@mui/joy/Card";
import JoYCard from "../../Component/JoYCard";
import { cardsData } from "../../../utils/data";
import HomeCards from "../../Component/HomeCards";
const Home = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col items-center justify-center h-full mb-5 ">
        <h3 className="text-6xl   text-[#0494b8] font-serif font-bold mb-2">
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
  );
};
export default Home;
