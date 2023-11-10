import React, { useEffect } from "react";
import Button from "../../common/Button";
import RippleEffect from "../../common/RippleEffect";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import TweekendImage from "../../../../../public/images/tweekend.png";

const Tweekend = () => {
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
    <div className="min-h-[100vh] bg-tweekend flex items-center px-10 px-5">
      <div
        data-aos="fade-up"
        className="flex flex-wrap items-center gap-14 justify-center  w-full bg-no-repeat portfolio bg-contain bg-right"
        style={{ backgroundImage: "url(images/bg-object.png)" }}
      >
        <div className="portfolio-img portfolio-tweekend w-[45%] py-14">
          <div className="" data-aos="fade-up">
            <Image src={TweekendImage} alt="" />

            {/* <img src="/images/tweekend.png" alt="" /> */}
          </div>
        </div>
        <div className="portfolio-content w-[45%] py-14">
          <div className="flex gap-3 items-center">
            <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
            <div
              data-aos="fade-up"
              className="uppercase text-sm font-normal leading-[150%] text-[#A9AFC3]"
            >
              Social Event App
            </div>
          </div>
          <div>
            <h1
              data-aos="fade-up"
              className="Montserrat font-semibold leading-[120%] text-5xl text-white mt-2 heading"
            >
              Tweekend
            </h1>
          </div>
          <div className="mt-10">
            <p
              data-aos="fade-up"
              className=" Montserrat font-medium text-white text-md leading-[120%] "
            >
              Our skilled developers made an easy-to-use app for booking social
              events. It makes planning and attending events simple, helping
              users find and join social gatherings effortlessly.
            </p>
          </div>
          <div className="mt-8 pr-5">
            <p
              data-aos="fade-up"
              className="Montserrat font-medium text-white text-md leading-[120%] "
            >
              The app also lets users reserve tables at restaurants and venues,
              providing a comfortable space for events. This demonstrates our
              team{"'"} ability to create user-friendly apps and improve
              experiences using technology.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="mt-10 inline-block overflow-hidden"
          >
            <a href="https://tweekend.app/" target="_blank">
              <Button
                fontFamily="Montserrat"
                fontWeight="500"
                padding="12px 40px"
                Color="#300C44"
                fontSize="16px"
                backgroundColor="#ffffff"
                name="Visit"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweekend;
