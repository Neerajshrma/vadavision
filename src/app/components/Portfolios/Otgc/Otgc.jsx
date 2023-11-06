import React, { useEffect } from "react";
import Button from "../../common/Button";
import AOS from "aos";
import Image from "next/image";
import otgc from "../../../../../public/images/otgc.png";
import "aos/dist/aos.css";
import logo from "../../../../../public/images/otgc-logo.png";

const Otgc = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 300,
        duration: 500,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <div className="min-h-[720px] bg-[#1E2533] py-20 px-10 px-5">
      <div
        className="flex flex-wrap items-center gap-14 justify-center w-full bg-no-repeat portfolio	bg-contain bg-right"
        style={{ backgroundImage: "url(images/bg-object3.png)" }}
        data-aos="fade-up"
      >
        <div
          className="portfolio-img portfolio-legalhub py-14 w-[45%]"
          data-aos="fade-up"
        >
          <div className="">
            <Image src={otgc} alt="" />

            {/* <img src="/images/otgc.png" alt="" /> */}
          </div>
        </div>
        <div className="portfolio-content w-[45%] py-14">
          <div className="flex gap-3 items-center" data-aos="fade-up">
            <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
            <div className="uppercase text-sm font-normal leading-[150%] text-white">
              Fintech
            </div>
          </div>
          <div className="mt-5" data-aos="fade-up">
            <Image src={logo} alt="" />

            {/* <img className="w-28" src="/images/otgc-logo.png" alt="" /> */}
          </div>
          <div className="mt-10" data-aos="fade-up">
            <p className=" Montserrat font-normal text-white text-sm leading-[120%]">
              Experience our expertise through projects like{" "}
              {"'On The Go Cleaners.'"} Seamlessly integrating user-friendly
              features, secure payment gateways, and real-time order tracking.
            </p>
          </div>
          <div className="mt-8 pr-5" data-aos="fade-up">
            <p className="Montserrat font-normal text-white text-sm leading-[120%] ">
              we significantly boosted customer engagement and orders. Let us
              transform your ideas into success stories too.
            </p>
          </div>
          <div className="mt-10 inline-block otgc-visit-btn" data-aos="fade-up">
            <Button
              fontFamily="Montserrat"
              fontWeight="500"
              padding="12px 40px"
              Color="#ffffff"
              fontSize="16px"
              name="Visit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otgc;
