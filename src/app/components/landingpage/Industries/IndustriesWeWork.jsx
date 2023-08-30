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
          <h1 className="Montserrat capitalize text-white text-5xl font-bold heading leading-[110%]">
            Industries we work with
          </h1>
        </div>
        <div className="w-7/12 mt-4 description">
          <p className="Montserrat text-[#A9AFC3] text-xl leading-[140%] description">
            We always try to implement our creative ideas at the highest level.
            You can see it by looking at our portfolio.
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
