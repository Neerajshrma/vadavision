import React from "react";
import Image from "next/image";
import discovery from "../../../../../public/images/discovery.png";
import copywriting from "../../../../../public/images/copywriting.png";
import idea from "../../../../../public/images/idea.png";
import design from "../../../../../public/images/design.png";

const OurProccessPage = () => {
  return (
    <div className="px-4 pt-10 md:px-20 content-responsive">
      <div style={{ fontFamily: "Montserrat" }}>
        <div className="text-3xl font-bold py-8 text-center">Our Process</div>

        <div className="flex flex-col space-y-8 md:space-x-8 md:space-y-0 md:flex-row justify-center md:justify-between pt-4 pb-8">
          <div className="flex w-40 h-40 flex-col bg-[#F6FAFE] rounded-full shadow-md mx-auto md:w-1/2 lg:w-1/4">
            <div className="flex justify-center pt-6">
            <Image src={discovery} alt="" />

              {/* <img
                src="images/discovery.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              /> */}
            </div>
            <h1 className="font-bold text-center pt-6">Discover</h1>
          </div>
          <div className="flex   w-40 h-40 flex-col bg-[#F6FAFE] rounded-full shadow-md mx-auto md:w-1/2 lg:w-1/4">
            <div className="flex justify-center pt-6">
            <Image src={copywriting} alt="" />

              {/* <img
                src="images/copywriting.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              /> */}
            </div>
            <h1 className="font-bold text-center pt-6">Define</h1>
          </div>
          <div className="flex  w-40 h-40 flex-col bg-[#F6FAFE] rounded-full shadow-md mx-auto md:w-1/2 lg:w-1/4">
            <div className="flex justify-center pt-6">
            <Image src={idea} alt="" />

              {/* <img
                src="images/idea.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              /> */}
            </div>
            <h1 className="font-bold text-center pt-6">Ideate</h1>
          </div>
          <div className="flex  w-40 h-40 flex-col bg-[#F6FAFE] rounded-full shadow-md mx-auto md:w-1/2 lg:w-1/4">
            <div className="flex justify-center pt-6">
              {/* <img
                src="images/design.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              /> */}
                        <Image src={design} alt="" />

            </div>
            <h1 className="font-bold text-center pt-6">Design</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProccessPage;
