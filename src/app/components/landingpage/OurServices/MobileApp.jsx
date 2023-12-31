import React, { useEffect } from "react";
import Services from "./Services";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const MobileApp = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 0,
        duration: 500,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <div>
      <div  className="bg-[#141619] py-10 px-40 responsive-width">
        <div className="flex gap-3 items-center" >
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div data-aos='fade-up' className="uppercase Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3] ">
            Services
          </div>
        </div>
        <div className="mt-4">
          <h1 data-aos='fade-up' className="Montserrat capitalize text-white text-4xl font-semibold heading leading-[110%]">
            Mobile App Development Services
          </h1>
        </div>
        <div  className="w-10/12 mt-4 description para-responsive">
          <p data-aos='fade-up' className="Montserrat text-[#A9AFC3] text-lg leading-[140%] description">
            We consistently bring our creative ideas to life at the highest
            standards, evident in our portfolio.
          </p>
        </div>
        <div className="mt-10">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
