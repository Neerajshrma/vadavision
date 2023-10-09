import React from "react";

const OurProccessPage = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10"
      >
        <div className="flex justify-center text-3xl font-bold py-14	">
          Our Process
        </div>

        <div className="flex flex-row flex justify-around  space-x-20 pt-10 pb-16 ">
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-12">
              <img
                src="images/discovery.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 className="font-bold flex justify-center pt-16 ">Discover</h1>
          </div>
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-12">
              <img
                src="images/copywriting.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 className="font-bold flex justify-center pt-16 ">Define</h1>
          </div>
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-12">
              <img
                src="images/idea.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 className="font-bold flex justify-center pt-16 ">Ideate</h1>
          </div>
          <div className="flex flex-col w-36 h-36 bg-[#F6FAFE] rounded-full shadow-md">
            <div className="flex justify-center pt-12">
              <img
                src="images/design.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 className="font-bold flex justify-center pt-16 ">Design</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProccessPage;
