import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide, SplideArrow } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clientProfile from "../../../../public/images/client.png";

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
    <div data-aos="fade-up"
      className="bg-[#141619] bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: "url(images/bg-1.png)" }}
    >
      <div className="relative slider-mobile-app">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            direction: "ttb",
            heightRatio: 0.5, 
            isNavigation: true,
            speed: 900,
          }}
          ref={splideRef}
        >
          <SplideSlide >
            <div className="testimonial-container" data-carousel-item>
              <div className="testimonials mt-5 w-7/12 slider-responsive mx-auto">
                <div>
                  <p    
                          style={{ fontFamily: "Montserrat" }}
                    className="testimonial-content text-center text-white font-semibold text-2xl leading-[56px]"
                  >
                  "Superb work, always a pleasure working with Vadavision on complex tasks requiring a finesse touch."






                  </p>
                </div>
                <div
                  className="mt-10 flex justify-center gap-4 items-center testimonial-profile"
                >
                  <div  className="profile-img">
                  <Image src={clientProfile} alt="" />

                    {/* <img className="w-full" src="/images/client.png" alt="" /> */}
                  </div>
                  <div>
                    <h6
                      data-aos="fade-up"
                      className="text-xl testimonial-content font-bold leading-[32px] text-[#DD4242]"
                    >
                      Clay Johnson
                    </h6>
                    <p
                      data-aos="fade-up"
                      className="text-base testimonial-content font-normal text-[#959596] leading-[150%]"
                    >
                      Business Director at Wax Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide >
            <div className="testimonial-container" data-carousel-item>
              <div className="testimonials mt-5 w-7/12 slider-responsive mx-auto">
                <div>
                  <p    
                          style={{ fontFamily: "Montserrat" }}
                    className="testimonial-content text-center text-white font-semibold text-2xl leading-[56px]"
                  >
               "Vadavision's solution to our problem is clear and honest. They don't just run around trying to fill extended time and hours. They work with us around the clock, addressing our needs as soon as they arise."
                  </p>
                </div>
                <div
                  className="mt-10 flex justify-center gap-4 items-center testimonial-profile"
                >
                  <div  className="profile-img">
                  <Image src={clientProfile} alt="" />

                    {/* <img className="w-full" src="/images/client.png" alt="" /> */}
                  </div>
                  <div>
                    <h6
                      data-aos="fade-up"
                      className="text-xl testimonial-content font-bold leading-[32px] text-[#DD4242]"
                    >
                      Clay Johnson
                    </h6>
                    <p
                      data-aos="fade-up"
                      className="text-base testimonial-content font-normal text-[#959596] leading-[150%]"
                    >
                      Business Director at Wax Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide> 
          <SplideSlide >
            <div className="testimonial-container" data-carousel-item>
              <div className="testimonials mt-5 w-7/12 slider-responsive mx-auto">
                <div>
                  <p    
                          style={{ fontFamily: "Montserrat" }}
                    className="testimonial-content text-center text-white font-semibold text-2xl leading-[56px]"
                  >
                    "Vadavision stands out as a hub of exceptional talent. The team's expertise and smooth communication make every collaboration effortless. Excited for more future projects together."
                  </p>
                </div>
                <div
                  className="mt-10 flex justify-center gap-4 items-center testimonial-profile"
                >
                  <div  className="profile-img">
                  <Image src={clientProfile} alt="" />

                    {/* <img className="w-full" src="/images/client.png" alt="" /> */}
                  </div>
                  <div>
                    <h6
                      data-aos="fade-up"
                      className="text-xl testimonial-content font-bold leading-[32px] text-[#DD4242]"
                    >
                      Clay Johnson
                    </h6>
                    <p
                      data-aos="fade-up"
                      className="text-base testimonial-content font-normal text-[#959596] leading-[150%]"
                    >
                      Business Director at Wax Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide >
            <div className="testimonial-container" data-carousel-item>
              <div className="testimonials mt-5 w-7/12 slider-responsive mx-auto">
                <div>
                  <p    
                          style={{ fontFamily: "Montserrat" }}
                    className="testimonial-content text-center text-white font-semibold text-2xl leading-[56px]"
                  >
"Vadavision turned our app dreams into a stunning reality! Their expertise, creativity, and commitment to excellence exceeded our expectations. Highly recommend!"





</p>
                </div>
                <div
                  className="mt-10 flex justify-center gap-4 items-center testimonial-profile"
                >
                  <div  className="profile-img">
                  <Image src={clientProfile} alt="" />

                    {/* <img className="w-full" src="/images/client.png" alt="" /> */}
                  </div>
                  <div>
                    <h6
                      data-aos="fade-up"
                      className="text-xl testimonial-content font-bold leading-[32px] text-[#DD4242]"
                    >
                      Clay Johnson
                    </h6>
                    <p
                      data-aos="fade-up"
                      className="text-base testimonial-content font-normal text-[#959596] leading-[150%]"
                    >
                      Business Director at Wax Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide> <SplideSlide >
            <div className="testimonial-container" data-carousel-item>
              <div className="testimonials mt-5 w-7/12 slider-responsive mx-auto">
                <div>
                  <p    
                          style={{ fontFamily: "Montserrat" }}
                    className="testimonial-content text-center text-white font-semibold text-2xl leading-[56px]"
                  >
"𝘼𝙢𝙖𝙯𝙞𝙣𝙜, They are 𝙙𝙚𝙛𝙞𝙣𝙞𝙩𝙚𝙡𝙮 𝙤𝙣𝙚 𝙞𝙣 𝙖 𝙢𝙞𝙡𝙡𝙞𝙤𝙣. 𝙒𝙚 𝙘𝙚𝙧𝙩𝙖𝙞𝙣𝙡𝙮 𝙬𝙤𝙧𝙠 𝙬𝙞𝙩𝙝 them 𝙖𝙜𝙖𝙞𝙣 𝙞𝙣 𝙩𝙝𝙚 𝙣𝙚𝙖𝙧 𝙛𝙪𝙩𝙪𝙧𝙚."






</p>
                </div>
                <div
                  className="mt-10 flex justify-center gap-4 items-center testimonial-profile"
                >
                  <div  className="profile-img">
                  <Image src={clientProfile} alt="" />

                    {/* <img className="w-full" src="/images/client.png" alt="" /> */}
                  </div>
                  <div>
                    <h6
                      data-aos="fade-up"
                      className="text-xl testimonial-content font-bold leading-[32px] text-[#DD4242]"
                    >
                      Clay Johnson
                    </h6>
                    <p
                      data-aos="fade-up"
                      className="text-base testimonial-content font-normal text-[#959596] leading-[150%]"
                    >
                      Business Director at Wax Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide> <SplideSlide >
            <div className="testimonial-container" data-carousel-item>
              <div className="testimonials mt-5 w-7/12 slider-responsive mx-auto">
                <div>
                  <p    
                          style={{ fontFamily: "Montserrat" }}
                    className="testimonial-content text-center text-white font-semibold text-2xl leading-[56px]"
                  >
"Vadavision completes my task in a timely manner, excels in communication skills, and is well-versed in NodeJS/JavaScript. Thanks."






</p>
                </div>
                <div
                  className="mt-10 flex justify-center gap-4 items-center testimonial-profile"
                >
                  <div  className="profile-img">
                  <Image src={clientProfile} alt="" />

                    {/* <img className="w-full" src="/images/client.png" alt="" /> */}
                  </div>
                  <div>
                    <h6
                      data-aos="fade-up"
                      className="text-xl testimonial-content font-bold leading-[32px] text-[#DD4242]"
                    >
                      Clay Johnson
                    </h6>
                    <p
                      data-aos="fade-up"
                      className="text-base testimonial-content font-normal text-[#959596] leading-[150%]"
                    >
                      Business Director at Wax Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
         
        </Splide>
        <div className="flexiable-arrow">
        <div className="h-[150px] absolute custom-arrows">
          <div className="h-full relative w-[18px] ">
            <div className="absolute acustom-arrow-prev">
              <button className="" onClick={handlePrevClick}>
                <BsArrowUp size={18} color="#DD4242" />
              </button>
            </div>
            <div className="absolute custom-arrow-next">
              <button className="" onClick={handleNextClick}>
                <BsArrowDown size={18} color="#DD4242" />
              </button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SplideSlider;
