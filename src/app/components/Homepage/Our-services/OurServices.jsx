"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ServicesSlider from "./ServicesSlider";

const OurServices = () => {
  return (
    <div className="bg-[#141619] w-full py-10 px-40 responsive-width">
      <div className="mt-10 relative">
        <div className="flex gap-3 items-center">
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div className="Montserrat text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]">
            our services
          </div>
        </div>
        <div className="mt-4">
          <h1 className="Montserrat capitallize text-white text-4xl font-bold leading-[110%] heading">
            We Offer The Best Services
          </h1>
        </div>
        <div className="mt-4">
          <div className="w-7/12 description para-responsive mb-10">
            <p className="Montserrat text-[#A9AFC3] description text-base leading-[140%]">
              Experience top-notch services as we bring creative ideas to life
              through our exceptional portfolio.
            </p>
          </div>
        </div>
      </div>
      <ServicesSlider />
    </div>
  );
};

export default OurServices;
