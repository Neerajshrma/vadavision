import { Poppins, Raleway } from "next/font/google";
import React, { useEffect } from "react";
import number from "../../common/Constants";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const OurMilestones = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({offset: 0,
        duration: 500,
        once: true,
        easing: 'ease',

      });
    }
  }, []);
  return (
    <div className="bg-[#111319] py-10 px-40 responsive-width bg-contain">
      <div data-aos='fade-up'
        className="py-10 bg-contain bg-no-repeat some-facts"
        style={{ backgroundImage: "url(images/color-dots.png)" }}
      >
        <div
      data-aos='fade-up'
          style={{ fontFamily: "Poppins" }}
          className="mt-10 text-center creative-idea text-sm uppercase font-normal leading-[150%] text-white"
        >
          MILESTONE
        </div>
        <div className="my-5 mx-auto text-center">
          <div className="w-6/12 mx-auto some-facts"     >
            <h1 data-aos='fade-up'
              style={{ fontFamily: "Poppins" }}
              className="Montserrat text-[#DD4242] text-4xl font-semibold heading leading-[63px]"
            >
              How About some Fact <br /> Number About us
            </h1>
            {/* <p className="text-white mt-3 text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>
          <div className="w-8/12 mx-auto flex gap-2 flex-wrap justify-between bg-white py-6 px-10 mt-10 rounded-lg some-facts"data-aos='flip-up'>
            <div className="">
              <span data-aos='fade-up'
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                {number.SatisfiedClients}
                {"+"}
              </span>
              <span data-aos='fade-up' className="block text-[#959596] Montserrat text-xs font-medium">
                satisfied Client
              </span>
            </div>
            <div className="">
              <span data-aos='fade-up'
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                {number.OurTeam}
                {"+"}
              </span>
              <span data-aos='fade-up' className="block text-[#959596] Montserrat text-xs font-medium">
                Our Team
              </span>
            </div>
            <div className="">
              <span data-aos='fade-up'
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                {number.Ourclient}
                {"+"}
              </span>
              <span data-aos='fade-up' className="block text-[#959596] Montserrat text-xs font-medium">
                Our Client
              </span>
            </div>
            <div className="">
              <span data-aos='fade-up'
                style={{ fontFamily: "Raleway" }}
                className="block text-[#DD4242] Montserrat text-[45px] font-semibold"
              >
                {number.FiveStarReviews}
                {"+"}
              </span>
              <span data-aos='fade-up' className="block text-[#959596] Montserrat text-xs font-medium">
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
