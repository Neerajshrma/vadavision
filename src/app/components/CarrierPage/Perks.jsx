import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import circle from "../../../../public/images/check-circle.svg";
const Perks = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 0,
        duration: 1000,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <>
      <div className="px-40 responsive-width">
        <div
          style={{ fontFamily: "Montserrat" }}
          className="responsive-width pb-4"
        >
          <div className="mt-10 flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div data-aos='fade-up'
              style={{ fontFamily: "Poppins" }}
              className="creative-idea text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]"
            >
              a few words
            </div>
          </div>
        </div>
        <div className="perksResponsive pl-4">
          <span data-aos='fade-up' className="text-4xl hero-heading leading-[120%] font-bold text-white">
            Perks you enjoy in our {"company's"} distinctive culture.
          </span>
        </div>
        <div className="mt-2 w-[50%] Montserrat responsiveFullWidth pb-10 pl-4 flex flex-wrap">
          <p data-aos='fade-up' className="mt-2 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
            We’ve got a lot of awards for our products and services that became
            popular in the world.
          </p>
        </div>
        <div className="pl-4">
          <div>
            <div className="flex gap-4 flex-wrap">
              <div data-aos='fade-up' className="flex items-center pb-3p w-80">
              <Image src={circle} alt="" />

                {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
                <span data-aos='fade-up' className="pl-2 pr-8 font-medium text-white text-xl">
                  Flexible Work Hours
                </span>
              </div>
              <div data-aos='fade-up'className="flex items-center pb-3 w-80">
              <Image src={circle} alt="" />

                {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
                <span data-aos='fade-up'className="pl-2 font-medium text-white text-xl">
                  Health Insurance Benefits:
                </span>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div data-aos='fade-up'className="flex items-center pb-3 w-80">
              <Image src={circle} alt="" />

                {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
                <span  data-aos='fade-up' className="pl-2 pr-8 font-medium text-white text-xl">
                  Paid Time Off
                </span>
              </div>
              <div data-aos='fade-up'className="flex items-center pb-3 w-80">
              <Image src={circle} alt="" />

                {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
                <span data-aos='fade-up'className="pl-2 font-medium text-white text-xl">
                  Customizable Benefits
                </span>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div data-aos='fade-up'className="flex items-center pb-3 w-80">
              <Image src={circle} alt="" />

                {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
                <span data-aos='fade-up' className="pl-2 pr-8 font-medium text-white text-xl">
                  Incentives
                </span>
              </div>
              <div data-aos='fade-up'className="flex items-center pb-3 w-80">
              <Image src={circle} alt="" />

                {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
                <span data-aos='fade-up' className="pl-2 font-medium text-white text-xl">

                  Internet Reimbursement
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perks;
