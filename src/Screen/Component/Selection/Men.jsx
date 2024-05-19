import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarisoulData } from "../../../utils/data";
import BuyCard from "../../Component/BuyCard";
import { Womenproducts, Menproducts } from "../../../utils/data";
import TabsComp from "../../Component/TabsComp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Men = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
    prevArrow: <IoIosArrowBack className="slick-arrow" />,
    nextArrow: <IoIosArrowForward className="slick-arrow" />,
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-[#0494b8] mb-8">
          This is Men Clothes
        </h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider {...settings} className="slick-slider">
              {CarisoulData.map((d) => (
                <div
                  key={d.name}
                  className="relative bg-white text-black rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl mx-2"
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    className="object-cover h-72 w-full"
                  />
                  <div className="absolute inset-0 bg-[#0494b8] bg-opacity-0 hover:bg-opacity-30 transition-opacity"></div>
                  <div className="flex flex-col items-center justify-center gap-4 p-4 z-10 relative">
                    <p className="text-xl font-semibold text-[#0494b8]">
                      {d.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* end of carousel */}
      <TabsComp
        tabLabel1={<span className="text-[#0494b8]">Stiched</span>}
        tabLabel2={<span className="text-[#0494b8]">Unstiched</span>}
        tabLabel3={<span className="text-[#0494b8]">T-shirt</span>}
        tabLabel4={<span className="text-[#0494b8]">Jeans</span>}
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
    </div>
  );
};

export default Men;
