import React from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "../../../utils/data";

const Blogbabyprince = () => {
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
                The Future of Wholesale Shopping
              </h1>
              <h2 className="text-[#1B2024] text-xl sm:text-2xl font-semibold text1 cursor-default">
                Stay ahead of the trends shaping the future of wholesale
                shopping
              </h2>
              <p className="text-[#7A7A7A] text-base leading-6">
                As technology advances and consumer preferences evolve, the
                wholesale industry is undergoing significant changes. By staying
                informed and adapting to these trends, businesses can ensure
                their continued success and growth in the competitive market.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                E-commerce Platforms
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                The increased use of e-commerce platforms is revolutionizing the
                wholesale industry. Businesses are leveraging online
                marketplaces to reach a broader audience, streamline
                transactions, and offer a more seamless buying experience.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Sustainability
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Sustainability is becoming a crucial factor in wholesale
                shopping. Consumers are increasingly aware of the environmental
                impact of their purchases, and businesses that adopt sustainable
                practices are gaining a competitive edge. This includes using
                eco-friendly materials, reducing waste, and ensuring ethical
                sourcing.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Data-Driven Decision Making
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                The rise of data-driven decision-making is transforming the
                wholesale industry. Businesses are utilizing big data and
                analytics to understand market trends, optimize inventory, and
                personalize the shopping experience for their customers.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Technology Integration
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                Integration of advanced technologies such as AI, IoT, and
                blockchain is set to revolutionize wholesale operations. These
                technologies enhance supply chain transparency, improve
                inventory management, and enable more efficient operations.
              </p>
              <h1 className="text-xl font-semibold tracking-wide">
                Conclusion
              </h1>
              <p className="text-[#7A7A7A] text-base leading-6">
                By embracing these trends, businesses can stay competitive and
                meet the evolving demands of modern consumers. The future of
                wholesale shopping is bright, and those who adapt will thrive in
                this dynamic landscape.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Blogbabyprince;
