import React, { useEffect } from "react";
import AOS from 'aos';
import Image from "next/image";
import circle from "../../../../../public/images/check-circle.svg";
import 'aos/dist/aos.css'; 
const OurWorkCulture = () => {
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
              className="creative-idea text-sm uppercase  font-normal leading-[150%] text-[#A9AFC3]"
            >
              a few words
            </div>
          </div>
        </div>

        <div className="">
          <span data-aos='fade-up'className="text-4xl hero-heading leading-[120%] font-bold text-white">
            Our Work
          </span>
        </div>
        <div className="">
          <span data-aos='fade-up' className="text-4xl responsive-heading hero-heading leading-[120%] font-bold text-white">
            Culture Company’s
          </span>
        </div>
        <div className="mt-5 w-6/12 pb-12 mobile-full-width">
          <p className="mt-4 text-[#A9AFC3] font-light text-sm mx-auto leading-[33px]">
            We always try to implement our creative ideas at the highest level.
            You can see it by looking at our portfolio.
          </p>
        </div>
        <div>
          <div className="flex flex-row flex-wrap w-1/2 responsivePerksList"data-aos='fade-right'>
            <div className="flex items-center py-2">
            <Image src={circle} alt="" />

              {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
              <div className="pl-2 pr-8 font-medium text-white">
                Team Spirit at Vadavision
              </div>
            </div>
            <div className="flex items-center py-2">
            <Image src={circle} alt="" />

              {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
              <span className="pl-2 pr-8 font-medium text-white">
                Creative Freedom
              </span>
            </div>
            <div className="flex items-center py-2">
            <Image src={circle} alt="" />

              {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
              <span className="pl-2 pr-8 font-medium text-white">
                Remote, Yet Connected
              </span>
            </div>
            <div className="flex items-center py-2">
                        <Image src={circle} alt="" />

              {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
              <span className="pl-2 pr-8 font-medium text-white">
                Flexible Vibes
              </span>
            </div>
            <div className="flex items-center py-2">
            <Image src={circle} alt="" />

              {/* <img className="h-5" src="images/check-circle.svg" alt="" /> */}
              <span className="pl-2 pr-8 font-medium text-white">
                Innovate Your Way
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorkCulture;
