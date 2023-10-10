import React from "react";

const FeatureFuntionality = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10"
      >
        <div className="flex justify-center text-3xl font-bold">
          <h1>Features & Functionalities</h1>
        </div>
        <div className="flex justify-center text-xl font-bold">
          <span>To resolve user needs</span>
        </div>

        <div className="flex flex-row flex justify-around  space-x-20 pt-10 pb-16 ">
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE]  rounded-full shadow-md">
            <div className="flex justify-center pt-12 pb-4">
              <img
                src="images/user.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 className="font-bold flex justify-center pt-16 ">User Friendly </h1>
            <h1 className="font-bold flex justify-center  ">UX </h1>
            
          </div>
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-12 pb-4">
              <img
                src="images/car.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 className="font-bold flex justify-center pt-16 ">Easy to connect </h1>
            <h1 className="font-bold flex justify-center  "> Save</h1>

          </div>

          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-12 pb-4">
              <img
                src="images/wallet.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 className="font-bold flex justify-center pt-16 ">Easy to Pay</h1>

          </div>
        
        </div>
      </div>
    </>
  );
};

export default FeatureFuntionality;