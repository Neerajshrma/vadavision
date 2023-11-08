import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide, SplideArrow } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clientProfile from "../../../../../public/images/client-img.png";


const SplideSlider = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 0,
        duration: 500,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
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
    <div  data-aos='fade-up'
      className="bg-white bg-center bg-cover-change bg-contain  bg-no-repeat  px-30 pb-4 responsive-width"
      style={{ backgroundImage: "url(images/slider.png)" }}
    >
      <div className="text-center text-5xl">
        <p className="text-center testimonials-heading pt-20" data-aos='fade-up'>
          What Clients Say About Us
        </p>
      </div>{" "}
      <div data-aos='fade-up'className="relative testimonails-mobile-app" >
        <Splide 
          options={{
            rewind: true,
            gap: "1rem",
            direction: "ttb",
            heightRatio: 0.6, // Adjust the value as needed
            isNavigation: true,
            speed: 900,
          }}
          ref={splideRef}
        >
          <SplideSlide>
            <div className="" data-carousel-item  >
              <div className="flex gap-10 testimonials  mt-5 w-7/12 mx-auto">
                <div className="w-1/3 mob-testimonials-img">
                <Image src={clientProfile} alt="" />

                  {/* <img className="w-full" src="images/client-img.png" alt="" /> */}
                </div>
                <div className="w-2/3 mob-testimonials-content" >
                  <div  
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[#141414] text-2xl font-bold testimonials-heading"
                  >
                    Very Excellent !!
                  </div>
                  <div >
                    <p 
                      style={{ fontFamily: "Montserrat" }}
                      className="mob-testimonial-content bg-responsive text-black font-normal text-lg leading-[45px]"
                    >
                      I am very happy with the services provided, it is very
                      helpful, starting from the insight that the company gave
                      from the start that I did not understand what it was so I
                      got knowledge and made my website look better
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mob-testimonials-profile">
                    <div  className="w-10 mt-3 mob-testimonials-img2 hidden">
                      {/* <img
                        className="w-full"
                        src="images/client-img.png"
                        alt=""
                      /> */}
                                <Image src={clientProfile} alt="" />

                    </div>
                    <div  className="text-black font-semibold mt-5 text-base testimonial-content">
                      Robertsen Andrew
                      <div   className="text-black font-semibold text-base testimonial-content mob-testimonials-img2 hidden">
                        Business Director at Wax Inc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="" data-carousel-item>
              <div className="flex gap-10 testimonials mt-5 w-7/12 mx-auto">
                <div className="w-1/3 mob-testimonials-img" >
                <Image src={clientProfile} alt="" />

                  {/* <img className="w-full" src="images/client-img.png" alt="" /> */}
                </div>
                <div className="w-2/3 mob-testimonials-content">
                  <div
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[#141414] text-2xl font-bold testimonials-heading"
                  >
                    Very Excellent !!
                  </div>
                  <div >
                    <p
                      style={{ fontFamily: "Montserrat" }}
                      className="mob-testimonial-content text-black font-normal text-lg leading-[56px]"
                    >
                      I am very happy with the services provided, it is very
                      helpful, starting from the insight that the company gave
                      from the start that I did not understand what it was so I
                      got knowledge and made my website look better
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mob-testimonials-profile">
                    <div
                      className="w-10 mt-3 mob-testimonials-img2 hidden"
                    >
                                <Image src={clientProfile} alt="" />

                      {/* <img
                        className="w-full"
                        src="images/client-img.png"
                        alt=""
                      /> */}
                    </div>
                    <div
                      className="text-black font-semibold mt-5 text-base testimonial-content"
                    >
                      Robertsen Andrew
                      <div
                        className="text-black font-semibold text-base testimonial-content mob-testimonials-img2 hidden"
                      >
                        Business Director at Wax Inc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="" data-carousel-item>
              <div className="flex gap-10 testimonials mt-5 w-7/12 mx-auto">
                <div className="w-1/3 mob-testimonials-img">
                <Image src={clientProfile} alt="" />

                  {/* <img className="w-full" src="images/client-img.png" alt="" /> */}
                </div>
                <div className="w-2/3 mob-testimonials-content">
                  <div
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[#141414] text-2xl font-bold testimonials-heading"
                  >
                    Very Excellent !!
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "Montserrat" }}
                      className="mob-testimonial-content text-black font-normal text-lg leading-[56px]"
                    >
                      I am very happy with the services provided, it is very
                      helpful, starting from the insight that the company gave
                      from the start that I did not understand what it was so I
                      got knowledge and made my website look better
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mob-testimonials-profile">
                    <div className="w-10 mt-3 mob-testimonials-img2 hidden">
                      {/* <img
                        className="w-full"
                        src="images/client-img.png"
                        alt=""
                      /> */}
                                <Image src={clientProfile} alt="" />

                    </div>
                    <div className="text-black font-semibold mt-5 text-base testimonial-content">
                      Robertsen Andrew
                      <div className="text-black font-semibold text-base testimonial-content mob-testimonials-img2 hidden">
                        Business Director at Wax Inc
                      </div>
                    </div>
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
