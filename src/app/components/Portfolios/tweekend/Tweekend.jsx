import React from "react";
import Button from "../../common/Button";
import RippleEffect from "../../common/RippleEffect";

const Tweekend = () => {
  return (
    <div className="min-h-[720px] bg-tweekend py-20 px-10 px-5">
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
              Our skilled developers made an easy-to-use app for booking social
              events. It makes planning and attending events simple, helping
              users find and join social gatherings effortlessly.
            </p>
          </div>
          <div className="mt-8 pr-5">
            <p className="Montserrat font-light text-white text-lg leading-[120%] ">
              The app also lets users reserve tables at restaurants and venues,
              providing a comfortable space for events. This demonstrates our
              team{"'"} ability to create user-friendly apps and improve
              experiences using technology.
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
