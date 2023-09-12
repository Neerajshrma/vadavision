import React from "react";

const DesigningTools = () => {
  return (
    <div className="responsive-width mobile-width px-40 py-10">
      <div className="mt-10 flex gap-3 items-center">
        <div className="bg-[#141619] bg-responsive w-[50px] h-[1px]"></div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="creative-idea text-sm uppercase font-normal leading-[150%] text-[#141619]"
        >
          Tools
        </div>
      </div>
      <div className="mt-5 w-5/12">
        <h1 className="text-4xl hero-heading leading-[120%] font-bold text-[#DD4242]">
          Our Primary Designing Tools
        </h1>
        <p className="mt-8 text-[#141619] font-normal text-sm  mx-auto leading-[40px]">
          We always try to implement our creative ideas at the highest level.
          You can see it by looking at our portfolio.
        </p>
      </div>
    </div>
  );
};

export default DesigningTools;
