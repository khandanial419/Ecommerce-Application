import * as React from "react";
import CardOnText from "../../Component/CardOnText";
import BuyCard from "../../Component/BuyCard";
import { Womenproducts, Menproducts } from "../../../utils/data";
import TabsComp from "../../Component/TabsComp";
export default function Product() {
  return (
    <>
      <CardOnText
        imageUrl="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        txt1="DHT Products"
        txt2=" Discover trendy wholesale apparel for your retail needs. Elevate your inventory with our latest fashion finds."
      />
      <TabsComp
        tabLabel1="Women"
        tabLabe2="Men"
        tabLabel3="Baby Boy"
        tabLabel4="Baby Girl"
        contetn1={
          <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
            {Womenproducts.map((product, index) => (
              <BuyCard key={index} product={product} />
            ))}
          </div>
        }
        contetn2={
          <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
            {Menproducts.map((product, index) => (
              <BuyCard key={index} product={product} />
            ))}
          </div>
        }
        contetn3={
          <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
            {Womenproducts.map((product, index) => (
              <BuyCard key={index} product={product} />
            ))}
          </div>
        }
        contetn4={
          <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
            {Womenproducts.map((product, index) => (
              <BuyCard key={index} product={product} />
            ))}
          </div>
        }
      />
    </>
  );
}
