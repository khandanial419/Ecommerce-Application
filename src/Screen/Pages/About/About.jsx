
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
const About = () => {
  return (
    <div className="mb-10">
      <div className="bg-[#05c2f2] h-auto w-full mb-10">
        <div className="px-3 sm:px-0">
          <h1 className="pt-[30px] text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
            About <span className="text-[#2871DE] ">Us</span>{" "}
          </h1>

          <div className="px-10 pt-0 pb-11   text-[14px] sm:text-[20px] font-normal text-[#5E5E5F]  font-poppins">
            Welcome to DHT Wholesale Market,
            <span className="text-blue-600 font-semibold">
              {" "}
              your premier destination for wholesale products catering to men,
              women, children, and seniors.
            </span>{" "}
            Rooted in a commitment to excellence, we provide unparalleled
            service and quality offerings to businesses worldwide.
          </div>
        </div>
      </div>

      <Grid
        container
        spacing={1}
        justifyContent="space-evenly"
        className="align-middle my-10 px-10 "
      >
        {/* Our Mission */}
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
              <span className="text-blue-600 font-semibold">
                establishing ourselves as a trusted partner in the wholesale
                industry.
              </span>
            </p>
          </div>
        </Grid>

        {/* Our History */}
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
              <span className="text-blue-600 font-semibold">
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

      <div class="text-center px-10  ">
       
      </div>

      <div className="grid items-center justify-center mt-10 mb-20 text-center sm:text-left">
        <div className="relative flex items-center flex-col sm:flex-row">
          <div className="absolute z-10 flex flex-wrap gap-5">
            {/* <AvatarBlue className="vert-move"/>
      <AvatarPink className="vert-move"/>
      <AvatarPurple className="vert-move"/> */}
          </div>
          <div className="mb-4 sm:mb-0">
            {/* <img src="/assets/images/teamBisresume.svg" alt="Team Bisresume" /> */}
            {/* <TeamBisresume /> */}
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-[#2D3748] sm:text-[20px] text-[18px] leading-7 font-semibold px-10">
          Join us at DHT Wholesale Market and experience the difference in wholesale excellence. Together, let's build a future of success and prosperity.
          </h1>

          <div className="mt-5 flex justify-center">
            <Link
              to={"/signup"}
              className="bg-primary-blue px-6 py-2 rounded-lg text-white text-sm inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center bg-gradient-to-r from-sky-light to-primary-blue py-16 ">
        <h1 className="text-[30px] font-bold text-white">
          Do you have any questions?
        </h1>
        <div className="mt-8 flex justify-center">
          <Link
            href={"/contact-us"}
            className="text-primary-blue bg-white rounded-full px-7 py-2"
          >
            We are here to help you
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
