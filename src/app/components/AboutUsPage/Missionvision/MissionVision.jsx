import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 300,
        duration: 500,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10 "
      >
        <div className="margin-res" data-aos="fade-right">
          <h1 className="text-4xl text-[#DD4242] font-semibold">Mision</h1>
          <p className="pt-4 pb-10 text-white text-[14px] leading-[28px]">
            At Vadavision, making clients happy and helping our team grow are
            like pieces of a story. We focus on what our clients need and aim to
            exceed their expectations, building strong relationships along the
            way. Our team flourishes too, learning and growing in a supportive
            environment. As our clients succeed, our team members do too,
            creating a story of shared successes and happiness at Vadavision.
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10 "
      >
        <div className="margin-res" data-aos="fade-right">
          <h1 className="text-4xl text-[#DD4242] font-semibold">Vision</h1>
          <p className="pt-4 pb-10 text-white text-[14px] leading-[28px]">
            At Vadavision, dreams are our starting point. {"It's"} a place where
            creativity and technology come together, and ideas become reality.
            Our dedicated team explores new horizons, creating innovative
            solutions that the market loves. Challenges make us grow, and our
            achievements write our story. Vadavision dreams of a limitless
            creative world, where every innovation leaves a lasting impact on
            the industry.
          </p>
        </div>
      </div>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10 "
      >
        <div className="margin-res" data-aos="fade-right">
          <h1 className="text-4xl text-[#DD4242] font-semibold">
            Work Culture at Vadavision
          </h1>
          <p className="pt-4 pb-10 text-white text-[14px] leading-[28px]">
            At Vadavision, work feels like crafting a story. {"We're"}{" "}
            characters shaping creativity and teamwork from our spaces. Ideas
            flow freely in our virtual world, unrestricted by office boundaries.
            Together, we tackle challenges, crafting a tale of adaptability and
            excellence. In this imaginative setting, our work culture
            flourishes, and boundaries vanish.
          </p>
          <div
            className="flex flex-row flex-wrap gap-4 responsivePerksList"
            data-aos="fade-right"
          >
            <div className="flex items-center py-2 w-80">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <div className="pl-2 pr-8 font-medium text-white">
                Team Spirit at Vadavision
              </div>
            </div>
            <div className="flex items-center py-2 w-80">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 pr-8 font-medium text-white">
                Creative Freedom
              </span>
            </div>
            <div className="flex items-center py-2 w-80">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 pr-8 font-medium text-white">
                Remote, Yet Connected
              </span>
            </div>
            <div className="flex items-center py-2 w-80">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 pr-8 font-medium text-white">
                Flexible Vibes
              </span>
            </div>
            <div className="flex items-center py-2 w-80">
              <img className="h-5" src="images/check-circle.svg" alt="" />
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

export default MissionVision;
