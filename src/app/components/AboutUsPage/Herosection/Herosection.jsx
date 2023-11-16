import React, { useEffect } from "react";
import Image from "next/image";
import GatherImage from "../../../../../public/images/gather-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrums from "../../common/Breadcrums";

const Herosection = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 0,
        duration: 500,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <div className=" Montserrat responsive-width mobile-width px-40">

        
      <div className="mt-14 ">
        <h1
          data-aos="fade-up"
          className="text-4xl hero-heading heading-margin leading-[120%] font-bold text-white text-left"
        >
          About us
        </h1>

        <p
          data-aos="fade-up"
          className="mt-8 text-white heading-margin font-light text-sm leading-[40px]  mx-auto min-w-[280px] mobile-full-width w-full"
        >
          At Vadavision, we chose the word {"'Vada'"} to represent trust,
          reliability, and integrity in our services. It signifies the strong
          foundation of trust we build with our clients. {"'Vision'"} embodies
          innovation, creativity, and forward-thinking. Together, these words
          symbolize our commitment to delivering dependable, innovative
          solutions for our clients, ensuring both trustworthiness and
          creativity in our work.
        </p>
      </div>
      <div className="py-10" data-aos="fade-up">
        {/* <img src="images/gather-4.png" alt="" /> */}
        <Image src={GatherImage} alt="" />
      </div>
    </div>
  );
};

export default Herosection;
