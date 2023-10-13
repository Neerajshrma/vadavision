import React, { useRef } from "react";
import { Splide, SplideSlide, SplideArrow } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const SplideSlider = () => {
  const splideRef = useRef();
  const handlePrevClick = () => {
    if (splideRef.current) {
      splideRef.current.go("-1");
    }
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };
  return (
    <div
      className="bg-white bg-center bg-contain bg-no-repeat"
      //   style={{ backgroundImage: "url(images/bg-1.png)" }}
    >
      <div className="relative testimonails-mobile-app">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            direction: "ttb",
            heightRatio: 0.5, // Adjust the value as needed
            isNavigation: true,
            speed: 900,
          }}
          ref={splideRef}
        >
          <SplideSlide>
            <div className="" data-carousel-item>
              <div className="flex gap-10 testimonials mt-5 w-7/12 mx-auto">
                <div className="w-1/3">
                  <img className="w-full" src="images/client-img.png" alt="" />
                </div>
                <div className="w-2/3">
                  <div
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[#141414] text-2xl font-bold"
                  >
                    Very Excellent !!
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "Montserrat" }}
                      className="testimonial-content text-black font-normal text-lg leading-[56px]"
                    >
                      I am very happy with the services provided, it is very
                      helpful, starting from the insight that the company gave
                      from the start that I did not understand what it was so I
                      got knowledge and made my website look better
                    </p>
                  </div>
                  <div className="text-black font-semibold mt-5 text-base">
                    Robertsen Andrew
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="" data-carousel-item>
              <div className="flex gap-10 testimonials mt-5 w-7/12 mx-auto">
                <div className="w-1/3">
                  <img className="w-full" src="images/client-img.png" alt="" />
                </div>
                <div className="w-2/3">
                  <div
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[#141414] text-2xl font-bold"
                  >
                    Very Excellent !!
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "Montserrat" }}
                      className="testimonial-content text-black font-normal text-lg leading-[56px]"
                    >
                      I am very happy with the services provided, it is very
                      helpful, starting from the insight that the company gave
                      from the start that I did not understand what it was so I
                      got knowledge and made my website look better
                    </p>
                  </div>
                  <div className="text-black font-semibold mt-5 text-base">
                    Robertsen Andrew
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="" data-carousel-item>
              <div className="flex gap-10 testimonials mt-5 w-7/12 mx-auto">
                <div className="w-1/3">
                  <img className="w-full" src="images/client-img.png" alt="" />
                </div>
                <div className="w-2/3">
                  <div
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[#141414] text-2xl font-bold"
                  >
                    Very Excellent !!
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "Montserrat" }}
                      className="testimonial-content text-black font-normal text-lg leading-[56px]"
                    >
                      I am very happy with the services provided, it is very
                      helpful, starting from the insight that the company gave
                      from the start that I did not understand what it was so I
                      got knowledge and made my website look better
                    </p>
                  </div>
                  <div className="text-black font-semibold mt-5 text-base">
                    Robertsen Andrew
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <div className="h-[150px] absolute custom-arrows">
          <div className="h-full relative w-[18px]">
            <div className="absolute acustom-arrow-prev">
              <button className="" onClick={handlePrevClick}>
                <BsArrowUp size={18} color="#000000" />
              </button>
            </div>
            <div className="absolute custom-arrow-next">
              <button className="" onClick={handleNextClick}>
                <BsArrowDown size={18} color="#000000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplideSlider;
