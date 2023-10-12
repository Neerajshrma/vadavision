import React from "react";
import Button from "../../common/Button";
import { HiArrowNarrowRight } from "react-icons/hi";

const Herosection = () => {
  return (
    <div className="text-center responsive-width mobile-width px-40">
      <div className="mt-6 flex gap-3 justify-center items-center">
        <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="creative-idea text-base uppercase font-normal leading-[150%] text-[#A9AFC3]"
        >
          our services
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-[50px] hero-heading leading-[120%] font-bold text-white">
          UI/UX Design Services
        </h1>
        <p className="mt-6 text-white font-normal text-base leading-[40px]">
          Mobile app development is the act or process by which a mobile app is
          developed for mobile devices, such as personal digital assistants,
          enterprise digital assistants or mobile phones.{" "}
        </p>
      </div>
      <div className="mt-8 bg-[#DD4242] flex gap-2 items-center justify-center w-60 mx-auto py-1.5 px-2">
        <div>
          <Button
            fontFamily="Poppins"
            fontWeight="400"
            Color="#FFFFFF"
            fontSize="12px"
            backgroundColor=""
            letterSpacing="0.06em"
            name="Request Quotation"
          />
        </div>
        <div className="text-white">
          <HiArrowNarrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
