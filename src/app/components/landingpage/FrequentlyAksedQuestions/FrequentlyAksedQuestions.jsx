import React, { useEffect } from "react";
import Accordion from "./Faq";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const FrequentlyAksedQuestions = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 0,
        duration: 500,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <div className="py-10 Montserrat px-40 responsive-width">
      <div className="text-center" data-aos='fade-up'>
        <h1 className="text-center  capitalize text-white text-4xl font-bold leading-[110%] heading">
          Frequently Asked Questions
        </h1>
        {/* <p className="text-center mt-4 text-sm font-normal text-[#CFD3D7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p> */}
      </div>
      <div className="accordion faq-accordian-width mx-auto" data-aos='fade-up' >
        <Accordion />
      </div>
    </div>
  );
};

export default FrequentlyAksedQuestions;
