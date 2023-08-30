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
            fill="#000000"
          />
        </svg>
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
            fill="#000000"
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
    <div className="py-10">
      <h1 className="text-black text-5xl text-center font-bold">
        What Client Say About Us
      </h1>
      <div className="overflow-hidden relative bg-center py-10 bg-contain bg-no-repeat py-20 min-w-[700px]">
        <Slider {...settings}>
          <div className="min-h-[480px]">
            <div className="flex jusify-between gap-8 mt-10 w-[55%] mx-auto">
              <div className="w-4/12">
                <img src="/images/client-img2.png" alt="" />
              </div>
              <div className="w-7/12 mt-2 mb-5">
                <div className="text-[#141414] text-2xl font-bold">
                  Very Excellent !!
                </div>
                <p
                  style={{ fontFamily: "Montserrat" }}
                  className="mt-5 text-black font-normal text-lg leading-[46px]"
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus vel lobortis tincidunt fames quisque mauris at diam.
                  Nullam uis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas
                </p>
                <div className="text-[#141414] mt-8 font-semibold text-sm">
                  Robertsen Andrew
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[480px]">
            <div className="flex jusify-between gap-8 mt-10 w-[55%] mx-auto">
              <div className="w-4/12">
                <img src="/images/client-img2.png" alt="" />
              </div>
              <div className="w-7/12 mt-2 mb-5">
                <div className="text-[#141414] text-2xl font-bold">
                  Very Excellent !!
                </div>
                <p
                  style={{ fontFamily: "Montserrat" }}
                  className="mt-5 text-black font-normal text-lg leading-[46px]"
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus vel lobortis tincidunt fames quisque mauris at diam.
                  Nullam uis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas
                </p>
                <div className="text-[#141414] mt-8 font-semibold text-sm">
                  Robertsen Andrew
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[480px]">
            <div className="flex jusify-between gap-8 mt-10 w-[55%] mx-auto">
              <div className="w-4/12">
                <img src="/images/client-img2.png" alt="" />
              </div>
              <div className="w-7/12 mt-2 mb-5">
                <div className="text-[#141414] text-2xl font-bold">
                  Very Excellent !!
                </div>
                <p
                  style={{ fontFamily: "Montserrat" }}
                  className="mt-5 text-black font-normal text-lg leading-[46px]"
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus vel lobortis tincidunt fames quisque mauris at diam.
                  Nullam uis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas
                </p>
                <div className="text-[#141414] mt-8 font-semibold text-sm">
                  Robertsen Andrew
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
