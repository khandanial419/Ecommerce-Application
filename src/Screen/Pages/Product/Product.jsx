import * as React from "react";
import CardOnText from "../../Component/CardOnText";
import BuyCard from "../../Component/BuyCard";
import { Womenproducts, Menproducts } from "../../../utils/data";
import TabsComp from "../../Component/TabsComp";
import { add } from "../../../Redux/CartSlice";
import { useDispatch } from "react-redux";

export default function Product() {
  const [womenProduct, setWoemProducts] = React.useState("");
  const [menApiProducts, setMenProducts] = React.useState("");
  const [BabyBoyProducts, setBabyBoyProducts] = React.useState("");
  const [BabyGirlProducts, setBabyGirlProducts] = React.useState("");

  const [loading, setLoading] = React.useState(true);
  const dispath = useDispatch();
  const hanldeAdd = (product) => {
    dispath(add(product));
  };
  React.useEffect(() => {
    const fetchDataWomen = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products-list?page_size=10&category_id=1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWoemProducts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes
      }
    };
    const fetchDataMen = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products-list?page_size=10&category_id=2`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenProducts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes
      }
    };
    const fetchdataBabyBoy = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products-list?page_size=10&category_id=3`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("data of baby boy", data);
        setBabyBoyProducts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes
      }
    };
    const fetchdatBabyGirl = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products-list?page_size=10&category_id=4`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBabyGirlProducts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes
      }
    };
    fetchdataBabyBoy();
    fetchdatBabyGirl();
    fetchDataMen();
    fetchDataWomen();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-auto">
        <CardOnText
          imageUrl="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          txt1="DHT Products"
          txt2=" Discover trendy wholesale apparel for your retail needs. Elevate your inventory with our latest fashion finds."
        />
        <TabsComp
          tabLabel1="Women"
          tabLabel2="Men"
          tabLabel3="Baby Boy"
          tabLabel4="Baby Girl"
          contetn1={
            loading ? ( // Render loader if loading is true
              <div className="flex justify-center items-center h-40">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
                {womenProduct.length > 0 ? (
                  womenProduct.map((product, index) => (
                    <BuyCard
                      key={index}
                      product={product}
                      hanldeAdd={hanldeAdd}
                    />
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            )
          }
          contetn2={
            loading ? ( // Render loader if loading is true
              <div className="flex justify-center items-center h-40">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
                {menApiProducts.length > 0 ? (
                  menApiProducts.map((product, index) => (
                    <BuyCard
                      key={index}
                      product={product}
                      hanldeAdd={hanldeAdd}
                    />
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            )
          }
          contetn3={
            loading ? ( // Render loader if loading is true
              <div className="flex justify-center items-center h-40">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
                {BabyBoyProducts.length > 0 ? (
                  BabyBoyProducts.map((product, index) => (
                    <BuyCard
                      key={index}
                      product={product}
                      hanldeAdd={hanldeAdd}
                    />
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            )
          }
          contetn4={
            loading ? ( // Render loader if loading is true
              <div className="flex justify-center items-center h-40">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
                {BabyGirlProducts.length > 0 ? (
                  BabyGirlProducts.map((product, index) => (
                    <BuyCard
                      key={index}
                      product={product}
                      hanldeAdd={hanldeAdd}
                    />
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            )
          }
        />
      </div>
      {/* Footer Section */}
    </div>
  );
}
