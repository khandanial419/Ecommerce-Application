import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { 
         HiOutlineArrowNarrowLeft,
         HiOutlineArrowNarrowRight,
 } from "react-icons/hi";

import { CarisoulData } from "../../../utils/data";

import BuyCard from "../../Component/BuyCard";
import { Womenproducts, Menproducts } from "../../../utils/data";
import TabsComp from "../../Component/TabsComp";

const Women = () => {

  return (
    <div>
      <Swiper 
       className="relative group"
       spaceBetween={50}
       slidesPerView={1}
        navigation={{nextEl:".button-next-slide",
                     prevEl:".button-prev-slide"
        }}
         modules={[Navigation]}>
        {CarisoulData.map((item, index) => (
          <SwiperSlide key={index}>
          <div className="flex justify-center items-center h-full relative">
  <img
    className="w-[1100px] h-[700px]"
    src={item.img}
    alt="random"
  />
  <div className="space-y-5 title-content absolute top-[25%] left-[350px]">
    <h2 className="text-[16px]">{item.title}</h2>
    <h3 className="text-[50px] font-[700]">{item.name}</h3>
    <h3><p className="text-[14px] w-[40%]">
      {item.review}
    </p></h3>
    <button className="px-[2rem] bg-[#333] text-[13px] p-2 text-white">
      Shop Now
    </button>
  </div>
</div>

        </SwiperSlide>
        ))}
       

        <div className=" top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-white w-[40px] h-[40px] bg-[#000] grid place-items-center">
        
        <HiOutlineArrowNarrowLeft/>
        </div>

        <div className="top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[23rem] duration-500 text-white w-[40px] h-[40px] bg-[#000] grid place-items-center">
        <HiOutlineArrowNarrowRight />
        </div>
      </Swiper>

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

export default Women;
