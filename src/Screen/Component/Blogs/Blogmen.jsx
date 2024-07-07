import React from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "../../../utils/data";

const Blogmen = () => {
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
            <div className="flex flex-col justify-start gap-6 mt-20">
              <h1 className="my-5 text-[#313437] sm:text-3xl text-xl font-semibold text1 cursor-default">
                The Benefits of Wholesale Shopping
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Wholesale shopping offers numerous advantages that can
                significantly impact your budget and shopping experience.
                Firstly, buying in bulk usually comes with a lower price per
                unit, allowing you to save money compared to retail prices. This
                is particularly beneficial for businesses looking to reduce
                costs and increase profit margins. Additionally, wholesalers
                often provide a wide range of products, giving you more options
                to choose from and enabling you to stock up on everything you
                need from a single source.
              </p>
              <p className="text-[#7A7A7A] text-base leading-6">
                Moreover, wholesale shopping can lead to better business
                relationships. By regularly purchasing from a wholesaler, you
                may benefit from exclusive deals, discounts, and dedicated
                customer service. This relationship can result in a more
                streamlined and efficient procurement process, saving you time
                and effort. Furthermore, wholesale suppliers often stay
                up-to-date with market trends and product innovations, ensuring
                that you have access to the latest items and can keep your
                inventory current and competitive.
              </p>
              <p className="text-[#7A7A7A] text-base leading-6">
                Lastly, wholesale shopping promotes sustainability. Bulk
                purchases reduce packaging waste and the carbon footprint
                associated with multiple smaller deliveries. By choosing to buy
                in larger quantities, you contribute to a more eco-friendly
                supply chain. Overall, wholesale shopping is a smart choice for
                both businesses and individual consumers looking to save money,
                access a variety of products, and support sustainable practices.
              </p>
              <h2 className="text-[#1B2024] text-xl sm:text-2xl font-semibold text1 cursor-default">
                Maximizing Your Savings with Wholesale Shopping
              </h2>
              <p className="text-[#7A7A7A] text-base leading-6">
                Maximizing savings through wholesale shopping involves a
                strategic approach to purchasing. Here are some additional tips
                to ensure you get the best deals and make the most out of your
                wholesale shopping experience:
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Join Wholesale Clubs
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Membership-based wholesale clubs often provide exclusive
                discounts and deals to their members. These clubs can offer
                significant savings on bulk purchases and may include additional
                benefits such as cashback rewards, special promotions, and
                member-only events.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Plan Your Purchases
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Plan your purchases ahead of time to take advantage of sales and
                promotions. Keep an eye out for seasonal discounts and bulk
                purchase incentives that can help you save even more.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Buy Non-Perishable Items in Bulk
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Focus on buying non-perishable items in bulk, such as canned
                goods, cleaning supplies, and paper products. These items have a
                long shelf life and can be stored without the risk of spoiling,
                allowing you to take full advantage of bulk pricing.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Share Bulk Purchases
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Consider sharing bulk purchases with friends, family, or
                neighbors. This way, you can still benefit from lower prices
                without the need to store large quantities of items yourself.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Monitor Inventory Levels
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Keep track of your inventory levels to avoid overbuying or
                running out of essential items. This ensures that you always
                have what you need on hand and helps prevent unnecessary
                purchases.
              </p>
              <p className="text-[#7A7A7A] text-base leading-6">
                By following these tips, you can maximize your savings and make
                the most of the benefits that wholesale shopping offers.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Blogmen;
