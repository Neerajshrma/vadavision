import React from "react";
import Industries from "./Industries";

const IndustriesWeWork = () => {
  return (
    <div className="bg-[#141619] py-10 px-40 responsive-width">
      <div className="">
        <div className="flex gap-3 items-center">
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div className="uppercase Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3] ">
            Industires
          </div>
        </div>
        <div className="mt-4">
          <h1 className="Montserrat capitalize text-white text-4xl font-bold heading leading-[110%]">
            Industries we work with
          </h1>
        </div>
        <div className="w-7/12 mt-4 description">
          <p className="Montserrat text-[#A9AFC3] text-base leading-[140%] description">
            Experience our top-notch creativity firsthand! Explore our portfolio
            and witness our innovative ideas come to life.
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
