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
      className="bg-[#141619] pt-36 px-40 bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: "url(images/bg-1.png)" }}
    >
      <div className="relative">
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
              <div className="mt-5 w-7/12 mx-auto">
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
          </SplideSlide>
          <SplideSlide>
            <div className="" data-carousel-item>
              <div className="mt-5 w-7/12 mx-auto">
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
          </SplideSlide>
          <SplideSlide>
            <div className="" data-carousel-item>
              <div className="mt-5 w-7/12 mx-auto">
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
          </SplideSlide>
        </Splide>
        <div className="splide__arrows">
          <button
            className="absolute custom-arrow-prev"
            onClick={handlePrevClick}
          >
            <BsArrowUp size={18} color="#DD4242" />
          </button>
          <button
            className="absolute custom-arrow-next"
            onClick={handleNextClick}
          >
            <BsArrowDown size={18} color="#DD4242" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplideSlider;