import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Added min-h-screen and flex flex-col */}
      <div className="mb-auto"> {/* Added mb-auto */}
        {/* Header Section */}
        <div className="bg-white h-auto w-full mb-10">
          <div className="px-3 sm:px-0">
            <h1 className="pt-[30px] text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
              About <span className="text-[#0494b8] ">Us</span>{" "}
            </h1>
            <div className="px-10 pt-0 pb-6   text-[14px] sm:text-[20px] font-normal text-[#5E5E5F]  font-poppins">
              Welcome to DHT Wholesale Market,
              <span className="text-[#0494b8] font-semibold">
                {" "}
                your premier destination for wholesale products catering to men,
                women, children, and seniors.
              </span>{" "}
              Rooted in a commitment to excellence, we provide unparalleled
              service and quality offerings to businesses worldwide.
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <Grid
          container
          spacing={1}
          justifyContent="space-evenly"
          className="align-middle my-10 px-10 "
        >
          {/* Our History */}
          <Grid item xs={12} sm={12} md={12}>
            <div>
              <h2 className="text-3xl font-bold mb-5 text-[#2D3748] text-left text-[20px] sm:text-[28px]">
                Our History
              </h2>
              <p className="small text-[14px] sm:text-[17px]">
                DHT Wholesale Market was founded on the principles of integrity
                and reliability. Drawing from decades of collective experience in
                wholesale distribution, our journey began with a vision to
                streamline the procurement process for businesses of all sizes.
                Since our inception, we have been dedicated to providing an
                extensive range of high-quality products at competitive prices.
                <span className="text-[#0494b8] font-semibold">
                  establishing ourselves as a trusted partner in the wholesale
                  industry.
                </span>
              </p>
            </div>
          </Grid>

          {/* Our Mission */}
          <Grid item xs={12} sm={12} md={12}>
            <div>
              <h2 className="text-3xl font-bold mb-5 text-[#2D3748] text-left text-[20px] sm:text-[28px]">
                Our Mission
              </h2>
              <p className="small text-[14px] sm:text-[17px]">
                At DHT Wholesale Market, our mission is to empower businesses to
                thrive by delivering exceptional wholesale solutions. We
                understand the importance of access to reliable products and
                strive to exceed our customers' expectations through unparalleled
                service, efficiency, and innovation. With a focus on customer
                satisfaction and long-term partnerships, we are committed to being
                the preferred choice for wholesale needs across diverse market
                segments
              </p>
            </div>
          </Grid>

          {/* Our Culture */}
          <Grid item xs={12} sm={12} md={12}>
            <div>
              <h2 className="text-3xl font-bold mb-5 text-[#2D3748] text-left text-[20px] sm:text-[28px]">
                Our Culture
              </h2>
              <p className="small text-[14px] sm:text-[17px]">
                Our culture at DHT Wholesale Market is built on a foundation of
                integrity, professionalism, and collaboration. We foster an
                environment where diversity is celebrated, ideas are valued, and
                teamwork is paramount.
                <span className="text-[#0494b8] font-semibold">
                  {" "}
                  We believe in transparency and open communication, ensuring that
                  every interaction with our team is characterized by respect and
                  trust.
                </span>{" "}
                By prioritizing the well-being of our employees, customers, and
                communities, we cultivate a culture of excellence that drives us
                forward.
              </p>
            </div>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <div class="text-center px-10">
          <h2 className="text-[15px] sm:text-[12px] lg:text-[25px] text-[#0494b8] font-Claris-sans font-bold mb-5">
            Join us at DHT Wholesale Market and experience the difference in wholesale excellence. Together, let's build a future of success and prosperity.
          </h2>
          <div className="mt-5 flex justify-center">
            <Link
              to={"/signup"}
              className="bg-[#0494b8] px-6 py-2 rounded-lg text-white text-xl inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-5 text-center bg-gradient-to-r from-[#9AE6E6] to-[#0494b8] py-16 ">
          <h2 className="text-[30px] font-bold text-white">
            Do you have any questions?
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              to={"/contact-us"}
              className="text-[#0494b8]  font-bold bg-white rounded-full px-7 py-2"
            >
              We are here to help you
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
