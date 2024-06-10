import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Carousel } from "react-carousel-minimal";
import { CarisoulData } from "../../../utils/data";

import BuyCard from "../../Component/BuyCard";
import { Womenproducts, Menproducts } from "../../../utils/data";
import TabsComp from "../../Component/TabsComp";

const BabyPrince = () => {
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
            tabLabel1={<span className="text-[#0494b8]">Stiched</span>}
            tabLabel2={<span className="text-[#0494b8]">Unstiched</span>}
            tabLabel3={<span className="text-[#0494b8]">T-shirt</span>}
            tabLabel4={<span className="text-[#0494b8]">Jeans</span>}
            contetn1={
              <div className="flex flex-wrap justify-center gap-6 my-10">
                {Womenproducts.map((product, index) => (
                  <BuyCard key={index} product={product} />
                ))}
              </div>
            }
            contetn2={
              <div className="flex flex-wrap justify-center gap-6 my-10">
                {Menproducts.map((product, index) => (
                  <BuyCard key={index} product={product} />
                ))}
              </div>
            }
            contetn3={
              <div className="flex flex-wrap justify-center gap-6 my-10">
                {Womenproducts.map((product, index) => (
                  <BuyCard key={index} product={product} />
                ))}
              </div>
            }
            contetn4={
              <div className="flex flex-wrap justify-center gap-6 my-10">
                {Womenproducts.map((product, index) => (
                  <BuyCard key={index} product={product} />
                ))}
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
};

export default BabyPrince;
