import React from "react";
import Button from "../../common/Button";
import RippleEffect from "../../common/RippleEffect";

const Tweekend = () => {
  return (
    <div className="min-h-[700px] max-h-[700px] bg-tweekend py-20 px-10 px-5">
      <div
        className="flex flex-wrap items-center gap-14 justify-center w-full bg-no-repeat portfolio bg-contain bg-right"
        style={{ backgroundImage: "url(images/bg-object.png)" }}
      >
        <div className="portfolio-img portfolio-tweekend w-[45%] py-14">
          <div className="">
            <img src="/images/tweekend.png" alt="" />
          </div>
        </div>
        <div className="portfolio-content w-[45%] py-14">
          <div className="flex gap-3 items-center">
            <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
            <div className="uppercase text-sm font-normal leading-[150%] text-[#A9AFC3]">
              Social Event App
            </div>
          </div>
          <div>
            <h1 className="Montserrat font-semibold leading-[120%] text-5xl text-white mt-2 heading">
              Tweekend
            </h1>
          </div>
          <div className="mt-10">
            <p className=" Montserrat font-light text-white text-lg leading-[120%] ">
              Our creative and professional agency has been developing products
              for 15 years. We are special.
            </p>
          </div>
          <div className="mt-8 pr-5">
            <p className="Montserrat font-light text-white text-lg leading-[120%] ">
              We’ve got a lot of awards for our work and develop applications
              that became popular in the world. We try not to miss important
              details in each area.
            </p>
          </div>
          <div className="mt-10 w-[166px]">
            <Button
              fontFamily="Montserrat"
              fontWeight="500"
              padding="12px 22px"
              Color="#300C44"
              fontSize="16px"
              backgroundColor="#ffffff"
              name="Know More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweekend;
