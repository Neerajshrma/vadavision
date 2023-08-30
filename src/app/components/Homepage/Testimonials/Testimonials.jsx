"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./Testimonials.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="w-9 h-9 items-center flex justify-center arrow-next">
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
            fill="#DD4242"
          />
        </svg>
        <div>
          <AiOutlineArrowUp />
        </div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="w-9 h-9 items-center flex justify-center arrow-prev">
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
            fill="#DD4242"
          />
        </svg>
      </div>
    </div>
  );
}

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#141619] pb-20">
      <div
        className="overflow-hidden mt-10 relative bg-center py-10 bg-contain bg-no-repeat py-20 min-w-[700px]"
        style={{ backgroundImage: "url(images/bg-1.png)" }}
      >
        <Slider {...settings}>
          <div className="min-h-[400px]">
            <div className="mt-20 w-[45%] mx-auto">
              <div>
                <p
                  style={{ fontFamily: "Montserrat" }}
                  className="text-center text-white font-semibold text-2xl leading-[56px]"
                >
                  I am very happy with the services provided, it is very
                  helpful, starting from the insight that the company gave from
                  the start that I did not understand what it was so I got
                  knowledge and made my website look better
                </p>
              </div>
              <div className="mt-10 flex justify-center gap-4 items-center">
                <div>
                  <img src="/images/client.png" alt="" />
                </div>
                <div>
                  <h6 className="text-xl font-bold leading-[32px] text-[#DD4242]">
                    Clay Johnson
                  </h6>
                  <p className="text-base font-normal text-[#959596] leading-[150%]">
                    Business Director at Wax Inc
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[400px]">
            <div className="mt-20 w-[45%] mx-auto">
              <div>
                <p
                  style={{ fontFamily: "Montserrat" }}
                  className="text-center text-white font-semibold text-2xl leading-[56px]"
                >
                  I am very happy with the services provided, it is very
                  helpful, starting from the insight that the company gave from
                  the start that I did not understand what it was so I got
                  knowledge and made my website look better
                </p>
              </div>
              <div className="mt-10 flex justify-center gap-4 items-center">
                <div>
                  <img src="/images/client.png" alt="" />
                </div>
                <div>
                  <h6 className="text-xl font-bold leading-[32px] text-[#DD4242]">
                    Clay Johnson
                  </h6>
                  <p className="text-base font-normal text-[#959596] leading-[150%]">
                    Business Director at Wax Inc
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[400px]">
            <div className="mt-20 w-[45%] mx-auto">
              <div>
                <p
                  style={{ fontFamily: "Montserrat" }}
                  className="text-center text-white font-semibold text-2xl leading-[56px]"
                >
                  I am very happy with the services provided, it is very
                  helpful, starting from the insight that the company gave from
                  the start that I did not understand what it was so I got
                  knowledge and made my website look better
                </p>
              </div>
              <div className="mt-10 flex justify-center gap-4 items-center">
                <div>
                  <img src="/images/client.png" alt="" />
                </div>
                <div>
                  <h6 className="text-xl font-bold leading-[32px] text-[#DD4242]">
                    Clay Johnson
                  </h6>
                  <p className="text-base font-normal text-[#959596] leading-[150%]">
                    Business Director at Wax Inc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
