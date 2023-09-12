import { Poppins, Raleway } from "next/font/google";
import React from "react";

const OurMilestones = () => {
  return (
    <div className="bg-[#111319] py-10 px-40 responsive-width bg-contain">
      <div
        className="py-10 bg-contain bg-no-repeat"
        style={{ backgroundImage: "url(images/color-dots.png)" }}
      >
        <div
          style={{ fontFamily: "Poppins" }}
          className="mt-10 text-center creative-idea text-sm uppercase font-normal leading-[150%] text-white"
        >
          MILESTONE
        </div>
        <div className="my-5 mx-auto text-center">
          <div className="w-6/12 mx-auto">
            <h1
              style={{ fontFamily: "Poppins" }}
              className="Montserrat text-[#DD4242] text-4xl font-semibold heading leading-[63px]"
            >
              How About some Fact <br /> Number About us
            </h1>
            <p className="text-white mt-3 text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-8/12 mx-auto flex justify-between bg-white py-6 px-10 mt-10 rounded-lg">
            <div className="">
              <span
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                1000
              </span>
              <span className="block text-[#959596] Montserrat text-xs font-medium">
                Happy Client
              </span>
            </div>
            <div className="">
              <span
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                235
              </span>
              <span className="block text-[#959596] Montserrat text-xs font-medium">
                Our Team
              </span>
            </div>
            <div className="">
              <span
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                1100
              </span>
              <span className="block text-[#959596] Montserrat text-xs font-medium">
                Our Client
              </span>
            </div>
            <div className="">
              <span
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                1200
              </span>
              <span className="block text-[#959596] Montserrat text-xs font-medium">
                Awards
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMilestones;
