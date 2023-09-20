import React from "react";
import Button from "../../common/Button";

const Legalhub = () => {
  return (
    <div className="bg-[#1E2533] py-20 px-10 px-5">
      <div
        className="flex flex-wrap items-center gap-14 justify-center w-full bg-no-repeat portfolio	bg-contain bg-right"
        style={{ backgroundImage: "url(images/bg-object3.png)" }}
      >
        <div className="portfolio-img portfolio-legalhub py-14 w-[45%]">
          <div className="">
            <img src="/images/legalhub.png" alt="" />
          </div>
        </div>
        <div className="portfolio-content w-[45%] py-14">
          <div className="flex gap-3 items-center">
            <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
            <div className="uppercase text-sm font-normal leading-[150%] text-white">
              Fintech
            </div>
          </div>
          <div className="mt-5">
            <img className="w-52" src="/images/legalhub-logo.png" alt="" />
          </div>
          <div className="mt-10">
            <p className=" Montserrat font-normal text-white text-lg leading-[120%]">
              Our creative and professional agency has been developing products
              for 15 years. We are special.
            </p>
          </div>
          <div className="mt-8 pr-5">
            <p className="Montserrat font-normal text-white text-lg leading-[120%] ">
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

export default Legalhub;
