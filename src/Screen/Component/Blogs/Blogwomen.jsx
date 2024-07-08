import React from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "../../../utils/data";

const Blogwomen = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <h1 className="my-10 text-[#313437] sm:text-3xl text-xl font-semibold text1 cursor-default">
                Tips for Successful Wholesale Buying
              </h1>
              <h2 className="text-[#1B2024] text-xl sm:text-2xl font-semibold text1 cursor-default">
                Learn the best strategies to make the most out of your wholesale
                purchases
              </h2>
              <p className="text-[#7A7A7A] text-base leading-6">
                Buying wholesale can be a cost-effective way to stock up on
                products, but it's essential to approach it with a clear
                strategy. Here are some tips to help you succeed in wholesale
                purchasing:
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Research Suppliers
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Start by researching reputable suppliers. Look for those with
                positive reviews, fair pricing, and quality products. Building a
                good relationship with a reliable supplier can make a big
                difference in your purchasing experience.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Understand Your Market
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Before making a purchase, ensure you understand your target
                market's needs and preferences. This will help you choose the
                right products and quantities, minimizing the risk of
                overstocking or understocking.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Negotiate Prices
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Don't hesitate to negotiate with suppliers for better prices,
                especially if you're placing large orders. Many suppliers are
                willing to offer discounts for bulk purchases or long-term
                business relationships.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Check Quality
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Always request samples before committing to a large order. This
                ensures that the products meet your quality standards and
                reduces the risk of receiving unsatisfactory goods.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Plan Your Purchases
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Plan your purchases carefully to align with demand cycles and
                peak seasons. This helps in managing inventory efficiently and
                ensuring that you have enough stock when it's needed the most.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Manage Inventory
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Keep track of your inventory levels to avoid overstocking or
                stockouts. Implement an inventory management system to monitor
                stock levels, sales trends, and reorder points.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Build Relationships
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Building strong relationships with your suppliers can lead to
                better deals, priority service, and valuable industry insights.
                Regular communication and timely payments can help in fostering
                these relationships.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Stay Updated
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                The wholesale market is dynamic, with prices and trends
                constantly changing. Stay updated on market trends, new product
                launches, and industry news to make informed purchasing
                decisions.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Conclusion
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Successful wholesale buying requires careful planning, market
                understanding, and strong supplier relationships. By following
                these tips, you can maximize the benefits of your wholesale
                purchases and ensure a smooth, profitable buying experience.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Blogwomen;
