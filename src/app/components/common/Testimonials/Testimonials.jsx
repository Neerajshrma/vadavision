"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Sliders = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      const totalSlides = sliderRef.current.props.children.length || 0;
      setTotalSlides(totalSlides);
      const middleSlide = Math.floor(totalSlides / 2);
      sliderRef.current.slickGoTo(middleSlide);
      setCurrentSlide(middleSlide);
    }
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const NextArrow = (props) => (
    <div
      className={`absolute top-1/2 right-[26%] custom-arrow 
       cursor-pointer`}
      onClick={props.onClick}
    >
      <button
        className={`text-[#DD4242] custom-next-button ${
          currentSlide === totalSlides - 1 ? "disabled" : ""
        }`}
      >
        <AiOutlineArrowDown size={20} />
      </button>
    </div>
  );
  const PrevArrow = (props) => (
    <div
      className={`absolute top-1/2 left-[26%] z-50 custom-arrow prev-arrow cursor-pointer`}
      onClick={props.onClick}
    >
      <button
        className={`text-[#DD4242] custom-prev-button ${
          currentSlide === 0 ? "disabled" : ""
        }`}
      >
        <AiOutlineArrowUp size={20} />
      </button>
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var settings1 = {
    // dots: true,
    // centerMode: true,
    // className: "center",
    // ots: false,
    // infinite: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // centerPadding: '60px',
    slidesToShow: 1,
    initialSlide: 0,
    // vertical: true,
    // verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0.7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
          className: "center",
          width: 300,
        },
      },
    ],
  };
  const goToPrevSlide = () => {
    if (sliderRef.current && totalSlides > 0) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current && totalSlides > 0) {
      sliderRef.current.slickNext();
    }
  };
  const CustomDots = (props) => {
    const { currentSlide, slideCount, onClick } = props;
    const dots = [];

    for (let i = 0; i < slideCount; i++) {
      const isActive = i === currentSlide;
      const opacity = isActive ? 1 : 0.2;
      const color = isActive ? "#DD4242" : "#DD4242"; // Set the color you want

      dots.push(
        <span
          key={i}
          onClick={() => onClick(i)}
          style={{
            opacity,
            backgroundColor: color,
          }}
          className={`custom-dot ${isActive ? "active" : ""}`}
        ></span>
      );
    }

    return <div className="custom-dots">{dots}</div>;
  };
  return (
    <div className="bg-[#141619] pb-20 w-[100%]">
      {/* <div
        className="overflow-hidden mt-10 relative bg-center py-10 bg-contain bg-no-repeat py-20 min-w-[700px]"
        style={{ backgroundImage: "url(images/bg-1.png)" }}
      > */}
      {isClient && (
        <Slider {...settings1}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className=" min-h-[400px]">
              <div className="mt-20 w-[45%] mx-auto">
                <div>
                  <p
                    style={{ fontFamily: "Montserrat" }}
                    className="text-center text-white font-semibold text-2xl leading-[56px]"
                  >
                    I am very happy with the services provided, it is very
                    helpful, starting from the insight that the company gave
                    from the start that I did not understand what it was so I
                    got knowledge and made my website look better
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
          ))}
        </Slider>
      )}
      {/* </div> */}
    </div>
  );
};

export default Sliders;
{
  /* <div className="custom-slider-controls">
        <button
          className={`text-[#DD4242] custom-prev-button ${
            currentSlide === 0 ? "disabled" : ""
          }`}
          onClick={goToPrevSlide}
        >
          <AiOutlineArrowUp size={20} />
        </button>
      </div> */
}
{
  /* <div>
        <button
          className={`text-[#DD4242] custom-next-button ${
            currentSlide === totalSlides - 1 ? "disabled" : ""
          }`}
          onClick={goToNextSlide}
        >
          <AiOutlineArrowDown size={20} />
        </button>
      </div> */
}
