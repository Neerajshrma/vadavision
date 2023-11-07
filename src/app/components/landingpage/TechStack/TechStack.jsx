import React, { useEffect } from "react";
import RecentPosts from "./RecentPosts";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const TechStack = () => {
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
  return (
    <div
      className="bg-[#111319] py-10 px-40 responsive-width bg-contain bg-no-repeat bg-right"
      style={{ backgroundImage: "url(images/bg-object5.png)" }}
    >
      <div className="">
        <div className="flex gap-3 items-center">
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div data-aos='fade-up' className="uppercase Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3] ">
            recent posts
          </div>
        </div>
        <div className="mt-4">
          <h1 data-aos='fade-up' className="Montserrat capitalize text-white text-4xl font-semibold heading leading-[110%]">
            Tech Stack
          </h1>
        </div>
        <div className="w-6/12 mt-4 description para-responsive">
          <p data-aos='fade-up' className="Montserrat text-[#A9AFC3] text-base leading-[140%] description">
            Are you curious about our technologies? {"We're"} eager to provide
            you with useful information about our digital tools and methods that
            align with our topic.
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <RecentPosts />
      </div>
    </div>
  );
};

export default TechStack;
