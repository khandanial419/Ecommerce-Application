import React from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "../../../utils/data";

const Blogbabydoll = () => {
  const { id } = useParams();
  const blog = BlogData[id];

  if (!blog) return <div>Blog not found</div>;

  const dateObject = new Date(blog.date);
  const date = dateObject.getDate();
  const month = dateObject.toLocaleString("en-US", { month: "short" });
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow p-4 md:p-10">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <section className="px-10 p-30 flex-flex">
            <div className="backgroundimg h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem] w-full relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-lg"
                style={{ width: "100%", maxHeight: "650px", display: "block" }}
              />
              <div className="absolute top-0 left-4 bg-[#0494b8] flex flex-col justify-center items-center h-20 w-20 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-20 xl:w-20 2xl:h-20 2xl:w-20 text-center">
                <span className="text-white font-bold text-2xl">{date}</span>
                <span className="text-white font-bold text-xl">{month}</span>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h1 className="my-5 text-[#313437] sm:text-3xl text-xl font-semibold text1 cursor-default">
                Sustainable Practices in Wholesale Shopping
              </h1>
              <h2 className="text-[#1B2024] text-xl sm:text-2xl font-semibold text1 cursor-default">
                Explore how wholesale shopping can contribute to a more
                sustainable future
              </h2>
              <p className="text-[#7A7A7A] text-base leading-6">
                Wholesale shopping can be a powerful tool in promoting
                sustainability. By adopting eco-friendly practices, wholesalers
                can significantly reduce their environmental footprint. Here are
                some ways wholesale shopping can contribute to a more
                sustainable future:
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Efficient Resource Use
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Buying in bulk can minimize packaging waste and reduce the
                overall use of resources. Wholesalers can adopt sustainable
                packaging solutions, such as recyclable or biodegradable
                materials, to further reduce their impact on the environment.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Reduced Carbon Footprint
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Wholesale purchases often involve fewer shipments compared to
                individual retail purchases. This consolidation of goods can
                lead to fewer transportation emissions and a lower carbon
                footprint. Opting for local suppliers can also cut down on
                transportation distances and emissions.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Support for Sustainable Products
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Wholesalers can prioritize sourcing products from manufacturers
                that follow sustainable practices. This includes using
                environmentally friendly materials, energy-efficient production
                methods, and fair labor practices. Supporting these
                manufacturers encourages the broader adoption of sustainable
                practices in the industry.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Waste Reduction
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Efficient inventory management helps minimize waste by ensuring
                that products are sold before they expire or become obsolete.
                Wholesalers can also donate unsold goods to charities or recycle
                materials to prevent them from ending up in landfills.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Energy Conservation
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Implementing energy-efficient practices in warehouses and
                distribution centers can significantly reduce energy
                consumption. This includes using LED lighting, optimizing
                heating and cooling systems, and incorporating renewable energy
                sources like solar or wind power.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Educating Consumers
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Wholesalers can play a crucial role in educating their customers
                about the benefits of sustainable products and practices.
                Providing information on the environmental impact of products
                and offering eco-friendly alternatives can help consumers make
                more informed, sustainable choices.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Collaboration and Innovation
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Collaborating with suppliers, manufacturers, and other
                stakeholders can lead to innovative solutions that enhance
                sustainability. This might include developing new, sustainable
                products or improving supply chain practices to reduce
                environmental impact.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Conclusion
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Sustainable wholesale shopping is not just a trend but a
                necessity for a healthier planet. By adopting these practices,
                wholesalers can significantly contribute to environmental
                conservation while also meeting the growing demand for
                sustainable products. Embracing sustainability in wholesale
                operations is a win-win for businesses, consumers, and the
                environment.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Blogbabydoll;
