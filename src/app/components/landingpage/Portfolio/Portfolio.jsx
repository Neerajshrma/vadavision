import React, { useEffect } from "react";
import StandardInsights from "./OurProjects/StandardInsights";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Portfolio = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <div className="bg-[#111319] py-10 px-40 responsive-width bg-contain">
      <div className="">
        <div className="flex gap-3 items-center">
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div data-aos='fade-up' className="uppercase Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3] ">
            recent posts
          </div>
        </div>
        <div className="mt-4">
          <h1 data-aos='fade-up' className="Montserrat capitalize text-white text-4xl font-semibold heading leading-[110%]">
            Our Projects
          </h1>
        </div>
        <div className="w-6/12 mt-4 description para-responsive">
          <p data-aos='fade-up'className="Montserrat text-[#A9AFC3] text-base leading-[140%] description">
            Get personalized solutions for your business challenges from
            Vadavision. We{"'"}re here to guide and assist you.
          </p>
        </div>
      </div>
      <div data-aos='fade-up'>
        <StandardInsights  />
      </div>
      <div data-aos='fade-up'>
        <StandardInsights />
      </div>
    </div>
  );
};

export default Portfolio;
