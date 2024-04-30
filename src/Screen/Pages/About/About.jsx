import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
const About = () => {
  return (
    <div className='mb-10'>
      <div className="bg-[#EAF1FC] h-auto w-full mb-10">
        <div className="px-3 sm:px-0">
          <h1 className="pt-[30px] text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
            About <span className="text-[#2871DE] ">Us</span>{" "}
          </h1>


          <div className="px-10 pt-0 pb-11   text-[14px] sm:text-[20px] font-normal text-[#5E5E5F]  font-poppins">
            Welcome to 911 Vault,<span className="text-blue-600 font-semibold"> a platform born from the shared experiences of small business owners</span> who have weathered the highs and lows of entrepreneurship. Our founders bring decades of firsthand experience in business management, finance, and operations, having navigated
            the complexities of running our own businesses through good times and bad.


          </div>
        </div>
      </div>





      <Grid container spacing={1} justifyContent="space-evenly" className="align-middle my-10 px-10 ">


        {/* Our Mission */}
        <Grid item xs={12} sm={12} md={12}>
          <div>
            <h2 className='text-3xl font-bold mb-5 text-[#2D3748] text-left text-[20px] sm:text-[28px]'>Our History</h2>
            <p className="small text-[14px] sm:text-[17px]">
              Our journey began with a pivotal moment in 2015 when one of our principal founders
              faced a major medical emergency during a family vacation. This event underscored the
              critical need for a solution to ensure the continuity of business operations in times of
              crisis; as well as support and guidance for their family’s personal affairs. Collaborating
              with cybersecurity experts, we developed 911 Vault—a platform designed to <span className='text-blue-600 font-semibold'>facilitate controlled
                information sharing during emergencies
                and unforeseen life events.</span>

            </p>
          </div>
        </Grid>

        {/* Our History */}
        <Grid item xs={12} sm={12} md={12}>
          <div>
            <h2 className='text-3xl font-bold mb-5 text-[#2D3748] text-left text-[20px] sm:text-[28px]'>Our Mission</h2>
            <p className="small text-[14px] sm:text-[17px]">
              Our journey began with a pivotal moment in 2015 when one of our principal founders
              faced a major medical emergency during a family vacation. This event underscored the critical need
              for a solution to ensure the continuity of business operations in times of crisis. Collaborating
              with cybersecurity experts, we developed 911Vault—a platform designed to facilitate controlled
              information sharing during emergencies

            </p>
          </div>
        </Grid>

        {/* Our Culture */}
        <Grid item xs={12} sm={12} md={12}>
          <div>
            <h2 className='text-3xl font-bold mb-5 text-[#2D3748] text-left text-[20px] sm:text-[28px]'>Our Culture</h2>
            <p className="small text-[14px] sm:text-[17px]">
              911Vault is more than just a software solution; it's a testament to the resilience and ingenuity of small business owners.<span className='text-blue-600 font-semibold'> We understand the dependence of our businesses on us as owners and as well as key personnel,
               and the vulnerability that comes with it.</span> That's why we've created a platform that empowers businesses 
               to proactively plan for unforeseen circumstances, safeguarding both their livelihoods and their
                families.

            </p>
          </div>
        </Grid>
      </Grid>


      <div class="text-center px-10  ">
        <p class="text-base text-[#2D3748] sm:text-[20px]">
          As a member of the 911Vault community, you're not just a user
          —you're an integral part of our mission. We value your feedback and insights,
          as they help us continually improve and refine our platform. Together, we can build a safer
          , more resilient future for small businesses everywhere. Please feel free to contact us at <a href="mailto:suggestionbox@911Vault.com" class="text-blue-500 underline">suggestionbox@911Vault.com</a>.
        </p>
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
          Join us on our journey as we continue to innovate and evolve, driven by our shared experiences and a commitment to empowering small business owners like you.
          </h1>
          
          <div className="mt-5 flex justify-center">
            <Link
              to={'/signup'}
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
