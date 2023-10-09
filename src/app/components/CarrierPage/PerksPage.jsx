import React from "react";

const PerksPage = () => {
  return (
    <>
      <div className="px-40  responsive-width mobile-width">
        <div
          style={{ fontFamily: "Montserrat" }}
          className="responsive-width pb-4"
        >
          <div className="mt-10   flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="creative-idea text-sm uppercase  font-normal leading-[150%] text-[#A9AFC3]"
            >
              a few words
            </div>
          </div>
        </div>

        <div className="">
          <span className="text-4xl hero-heading leading-[120%] font-bold text-white">
            Perks you get in{" "}
          </span>
        </div>
        <div className="">
          <span className="text-4xl hero-heading leading-[120%] font-bold text-white">
            Our Culture Company’s{" "}
          </span>
        </div>
        <div className="mt-5 w-[34%] pb-12">
          <p className="mt-4 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          We’ve got a lot of awards for our products and services that became popular in the world.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="">
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 pr-8 font-medium text-white">
              Health Insurance              </span>
            </div>
            <div className="flex pb-4 items-center ">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-medium text-white">
                Modern Technologies
              </span>
            </div>
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-medium text-white">
                Modern Technologies
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-medium text-white">
              Mobility              </span>
            </div>
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-medium text-white">
                Modern Technologies
              </span>
            </div>
            <div className="flex  pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-medium text-white">
                Modern Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerksPage;
