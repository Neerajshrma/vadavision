import React from "react";
import Button from "../../common/Button";

const StandardInsights = () => {
  return (
    <div className="bg-[#14EFA5] py-20 px-10 px-5">
      <div
        className="flex flex-wrap items-center gap-14 justify-center w-full bg-no-repeat portfolio bg-contain bg-right"
        style={{ backgroundImage: "url(images/bg-object2.png)" }}
      >
        <div className="portfolio-img portfolio-standardinsights py-14 w-[45%]">
          <div className="">
            <img src="/images/standardinsight.png" alt="" />
          </div>
        </div>
        <div className="portfolio-content w-[45%] py-14">
          <div className="flex gap-3 items-center">
            <div className="bg-white w-[50px] h-[1px]"></div>
            <div className="uppercase text-sm font-normal leading-[150%] text-white">
              Fintech
            </div>
          </div>
          <div className="border-8 border-black p-2 inline-block mt-5 standardinsights">
            <h1
              className="font-black leading-[120%] text-4xl text-black leading-[40px] standardinsights-heading"
              style={{ fontFamily: "Inter" }}
            >
              STANDARD INSIGHTS
            </h1>
          </div>
          <div className="mt-10">
            <p className=" Montserrat font-normal text-black text-lg leading-[120%]">
              Our creative and professional agency has been developing products
              for 15 years. We are special.
            </p>
          </div>
          <div className="mt-8 pr-5">
            <p className="Montserrat font-normal text-black text-lg leading-[120%] ">
              We’ve got a lot of awards for our work and develop applications
              that became popular in the world. We try not to miss important
              details in each area.
            </p>
          </div>
          <div className="mt-10">
            <Button
              fontFamily="Montserrat"
              fontWeight="500"
              padding="12px 25px"
              Color="#ffffff"
              fontSize="20px"
              backgroundColor="#141619"
              name="Know More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardInsights;
