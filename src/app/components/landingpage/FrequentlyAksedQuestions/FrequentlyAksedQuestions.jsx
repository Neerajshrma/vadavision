import React from "react";
import Accordion from './Faq'

const FrequentlyAksedQuestions = () => {
  return (
    <div className="py-10 px-40 responsive-width">
      <div className="text-center">
        <h1 className="text-center Montserrat capitalize text-white text-4xl font-bold leading-[110%] heading">
          Frequently Asked Questions
        </h1>
        <p className="text-center mt-4 text-sm font-normal text-[#CFD3D7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="accordion faq-accordian-width mx-auto">
        <Accordion/>
      </div>
    </div>
  );
};

export default FrequentlyAksedQuestions;
