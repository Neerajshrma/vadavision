import React from "react";
import Image from "next/image";
import user from "../../../../../public/images/user.png";
import car from "../../../../../public/images/car.png";
const FeatureFuntionality = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-4 md:px-40 mobile-width pt-10"
      >
        <div className="flex justify-center text-center text-3xl font-bold">
          <h1>Features & Functionalities</h1>
        </div>
        <div className="flex justify-center text-xl font-bold">
          <span>To resolve user needs</span>
        </div>

        <div className="flex flex-col md:flex-row justify-around  space-y-10  px-36 md:space-x-20 pt-10 pb-16">
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-4 md:pt-12 pb-2 md:pb-4">
            <Image src={user} alt="" />

              {/* <img
                src="images/user.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              /> */}
            </div>
            <h1 className="font-bold flex justify-center pt-4 md:pt-16">
              User Friendly
            </h1>
            <h1 className="font-bold flex justify-center">UX</h1>
          </div>
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-4 md:pt-12 pb-2 md:pb-4">
            <Image src={car} alt="" />

              {/* <img
                src="images/car.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              /> */}
            </div>
            <h1 className="font-bold flex justify-center pt-4 md:pt-16">
              Easy to connect
            </h1>
            <h1 className="font-bold flex justify-center">Save</h1>
          </div>
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-4 md:pt-12 pb-2 md:pb-4">
            {/* <Image src={wallet} alt="" /> */}

              {/* <img
                src="images/wallet.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              /> */}
            </div>
            <h1 className="font-bold flex justify-center pt-4 md:pt-16">
              Easy to Pay
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureFuntionality;
