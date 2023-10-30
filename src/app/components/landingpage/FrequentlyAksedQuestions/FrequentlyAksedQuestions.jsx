import React, { useEffect } from "react";
import Accordion from "./Faq";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const FrequentlyAksedQuestions = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({

      });
    }
  }, []);
  return (
    <div className="py-10 px-40 responsive-width">
      <div className="text-center" data-aos='zoom-in'>
        <h1 className="text-center Montserrat capitalize text-white text-4xl font-bold leading-[110%] heading">
          Frequently Asked Questions
        </h1>
        {/* <p className="text-center mt-4 text-sm font-normal text-[#CFD3D7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p> */}
      </div>
      <div className="accordion faq-accordian-width mx-auto" data-aos='zoom-in'>
        <Accordion />
      </div>
    </div>
  );
};

export default FrequentlyAksedQuestions;
