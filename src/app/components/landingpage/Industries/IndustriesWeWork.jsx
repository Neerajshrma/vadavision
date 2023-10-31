import React, { useEffect } from "react";
import Industries from "./Industries";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const IndustriesWeWork = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 300,
        duration: 500,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <div className="bg-[#141619] py-10 px-40 responsive-width">
      <div className="">
        <div className="flex gap-3 items-center"data-aos='fade-right'>
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div className="uppercase Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3] ">
            Industires
          </div>
        </div>
        <div className="mt-4"data-aos='fade-right'>
          <h1 className="Montserrat capitalize text-white text-4xl font-semibold heading leading-[110%]">
            Types of Industries We Partner With{" "}
          </h1>
        </div>
        <div className="w-7/12 mt-4 description para-responsive"data-aos='fade-right'>
          <p className="Montserrat text-[#A9AFC3] text-base leading-[140%] description">
            Explore the Various Industries We Proudly Collaborate and Partner
            With!
          </p>
        </div>
      </div>
      <div>
        <Industries />
      </div>
    </div>
  );
};

export default IndustriesWeWork;
