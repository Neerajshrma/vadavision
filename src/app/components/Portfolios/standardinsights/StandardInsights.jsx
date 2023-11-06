import React, { useEffect } from "react";
import Image from "next/image";
import StandardinsightImage from "../../../../../public/images/standardinsight.png";
import Button from "../../common/Button";
import AOS from "aos";
import "aos/dist/aos.css";
const StandardInsights = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <div className="min-h-[720px] bg-[#14EFA5] py-20 px-10 px-5">
      <div
        className="flex flex-wrap items-center gap-14 justify-center w-full bg-no-repeat portfolio bg-contain bg-right"
        style={{ backgroundImage: "url(images/bg-object2.png)" }}
      >
        <div className="portfolio-img portfolio-standardinsights py-14 w-[45%]">
          <div className="" data-aos="fade-up">
            <Image src={StandardinsightImage} alt="" />

            {/* <img src="/images/standardinsight.png" alt="" /> */}
          </div>
        </div>
        <div className="portfolio-content w-[45%] py-14">
          <div className="flex gap-3 items-center">
            <div className="bg-white w-[50px] h-[1px]"></div>
            <div
              data-aos="fade-up"
              className="uppercase text-sm font-normal leading-[150%] text-white"
            >
              Fintech
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="border-8 border-black p-2 inline-block mt-5 standardinsights"
          >
            <h1
              className="font-black leading-[120%] text-3xl text-black leading-[40px] standardinsights-heading"
              style={{ fontFamily: "Inter" }}
            >
              STANDARD INSIGHTS
            </h1>
          </div>
          <div className="mt-10">
            <p
              className=" Montserrat font-medium text-black text-md leading-[120%]"
              data-aos="fade-up"
            >
              Our experienced developers crafted a user-friendly online platform
              integrating advanced feedback tools like Node.js and Next.js.
            </p>
          </div>
          <div className="mt-8 pr-5">
            <p
              className="Montserrat font-medium text-black text- md leading-[120%]"
              data-aos="fade-up"
            >
              Personalized surveys gather instant user feedback, boosting
              customer and employee satisfaction for your {"business's"}{" "}
              success. This highlights our {"team's"} expertise in creating
              user-friendly apps and enhancing experiences through technology.
            </p>
          </div>
          <div
            className="mt-10 inline-block get-in-touch-btn"
            data-aos="fade-up"
          >
            <a href="https://standard-insights.com/" target="_blank">
              <Button
                fontFamily="Montserrat"
                fontWeight="500"
                padding="12px 22px"
                Color="#ffffff"
                fontSize="16px"
                name="Visit"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardInsights;
