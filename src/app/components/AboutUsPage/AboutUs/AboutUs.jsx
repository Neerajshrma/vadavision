import React from "react";

const AboutUs = () => {
  return (
    <div className="responsive-width mobile-width px-40">
      <div className="mt-10 flex gap-3 items-center">
        <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="creative-idea text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]"
        >
          About us
        </div>
      </div>
      <div className="mt-5 w-5/12">
        <h1 className="text-5xl hero-heading leading-[120%] font-bold text-white">
          We are creative & strong team
        </h1>
        <p className="mt-8 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          Our creative and professional agency has been developing products for
          15 years. We are special.
        </p>
        <p className="mt-5 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          We’ve got a lot of awards for our work and develop applications that
          became popular in the world. We try not to miss important details in
          each area.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
