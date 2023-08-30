import React from "react";
import FAQTabs from "../../Homepage/FAQs/FAQTabs";
import Accordion from "../../Homepage/FAQs/Accordion";

const FAQs = () => {
  return (
    <div className="bg-[#111319] py-10 px-40 responsive-width">
      <div className="my-5 mx-auto w-full text-center">
        <div>
          <h1 className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          <p className="text-[#CFD3D7] Montserrat text-md mt-3 font-normal leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="w-6/12 text-start mx-auto mt-14">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
