import React from "react";
import Accordion from "./Faqs";

const FrequentlyAksedQuestions = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-center Montserrat capitalize text-white text-4xl font-bold leading-[110%] heading">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion />
    </div>
  );
};

export default FrequentlyAksedQuestions;
