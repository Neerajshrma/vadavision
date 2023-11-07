import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Idelogy = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 0,
        duration:1000,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="mt-10 px-40 responsive-width pt-10 responsive-mobile idealogy" 
      >
        <h1 data-aos='fade-up' className="text-4xl text-[#DD4242] font-semibold">
          Vadavision Ideology{" "}
        </h1>
        <p data-aos='fade-up'className="pt-4 pb-10 text-white text-sm leading-[28px]">
          At Vadavision, we work together as a close-knit team. We share ideas,
          trust each other, and help one another. {"Everyone's"} voice matters,
          and we celebrate our successes and face challenges as a united group.
          We believe in making work feel like home, where everyone is valued and
          supported. Join us in creating a happy and successful story together
        </p>
      </div>
      <div className="px-40 Montserrat responsive-width responsive-mobile idealogy">
        <h1 data-aos='fade-up'className="text-4xl text-[#DD4242] font-semibold">How we work</h1>
        <p data-aos='fade-up'className="pt-4 pb-10 text-white text-sm leading-[28px]">
          At Vadavision, we work together as a team, putting our hearts into
          what we do. We focus on getting things right, paying attention to the
          details. We communicate well, making sure everyone is on the same
          page. Our work is all about creativity, care, and making our projects
          the best they can be. We believe in doing our very best in everything
          we do!
        </p>
      </div>
    </>
  );
};

export default Idelogy;
