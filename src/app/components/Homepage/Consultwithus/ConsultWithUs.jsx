import React from "react";
import Button from "../../common/Button";

const ConsultWithUs = () => {
  return (
    <div className="bg-black px-40 responsive-width py-20">
      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="w-7/12 full-width-responsive">
          <h1 className="Montserrat font-bold leading-[130%] text-4xl text-white consult-us-heading">
            Consult with us for any help in your business
          </h1>
        </div>
        <div className="w-4/12 full-width-responsive">
          <div className="flex border-l border-[#DD4242] consult-btn">
            <div className="border-l-2 border-[#DD4242] h-14 consult-btn"></div>
            <p className="Montserrat font-medium leading-[29px] pl-8 consult-btn text-lg text-white description">
              Bearable only through love of hydrogen atoms bits of moving fluff
              culture shores of the on cosmic ocean blue sky.
            </p>
          </div>
          <div className="pt-10 h-16 border-l border-[#DD4242] consult-btn">
            <div className="pl-8 consult-btn">
              <Button
                fontFamily="Poppins"
                fontWeight="500"
                padding="14px 28px"
                Color="#FFFFFF"
                fontSize="20px"
                backgroundColor="#DD4242"
                name="Consult with us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultWithUs;
