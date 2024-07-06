import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import * as React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Carousel } from "react-carousel-minimal";
import { CarisoulData } from "../../../utils/data";

import BuyCard from "../../Component/BuyCard";
import { Womenproducts, Menproducts } from "../../../utils/data";
import TabsComp from "../../Component/TabsComp";
import { add } from "../../../Redux/CartSlice";
import { useDispatch } from "react-redux";

const BabyPrince = () => {
  const [BabyPrince, setBabyPrince] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const carouselContainerStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0 20px",
    height: "500px",
  };

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  React.useEffect(() => {
    const fetBabyBoyData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products-list?page_size=10&category_id=3`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBabyPrince(data.data); // Assuming data.data contains the array of products
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes
      }
    };

    fetBabyBoyData(); // Call the fetchDataMen function when the component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount
  const dispath = useDispatch();
  const hanldeAdd = (product) => {
    dispath(add(product));
  };
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow p-4 md:p-10">
        <center>
          {CarisoulData.length > 0 && (
            <div style={carouselContainerStyle}>
              <Carousel
                data={CarisoulData}
                time={2000}
                width="100%"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  marginTop: "20px",
                }}
              />
            </div>
          )}
        </center>
        <div className="mt-10">
          <TabsComp
            tabLabel1={
              <span className="text-[#0494b8]">Baby Price Products</span>
            }
            contetn1={
              loading ? ( // Render loader if loading is true
                <div className="flex justify-center items-center h-40">
                  <p>Loading...</p>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-10 my-10 px-10">
                  {BabyPrince.length > 0 ? (
                    BabyPrince.map((product, index) => (
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
      </main>
    </div>
  );
};

export default BabyPrince;
