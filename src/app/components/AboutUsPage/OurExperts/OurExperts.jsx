import React from "react";

const OurExperts = () => {
  return (
    <>
      <div className="responsive-width pb-4 mobile-width py-20 px-5 bg-[#191C26]">
        <div>
          <div className="mt-10 flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="creative-idea text-sm uppercase  font-normal leading-[150%] text-[#A9AFC3]"
            >
              Our experts
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <span className="text-4xl hero-heading leading-[120%] font-bold text-white">
              Friendly team{" "}
            </span>
          </div>
          <div className="flex flex-row">
            <div className="mt-5 w-6/12 pb-12">
              <p className="mt-4 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
                Every day we communicate with each other, solve our clients’
                problems and work hard to succeed their business.
              </p>
            </div>
            <div className="flex flex-row-reverse pb-8 pl-40 text-white">
              <div className="pl-6 text-[#DD4242] border-b border-red-500 m-4">
                Next
              </div>
              <div className="border-b border-white-500 pr-6 m-4">Prev</div>
            </div>
          </div>
          <div className="flex px-40 responsive-width mobile-width">
            <div className="flex flex-row">
              <div>
                <img src="images/one.png" alt="" />
              </div>
              <div>
                <img src="images/two.png" alt="" />
              </div>
              <div>
                <img src="images/three.png" alt="" />
              </div>
              <div>
                <img src="images/four.jpg   " alt="" />
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExperts;
