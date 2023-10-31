import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const RecentPosts = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 300,
        duration: 500,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <div className="bg-[#1E2024] py-5 px-6 md:w-[33%] tech-stack"data-aos='fade-right'>
        <div>
          <div className="text-[#DD4242] text-2xl Montserrat font-semibold leading-[110%]">
            React Native
          </div>
          <div className="mt-2">
            <p className="text-lg font-normal Montserrat leading-[150%] text-white">
              Explore React {"Native's"} magic with Vadavision! We specialize in
              creating user-friendly mobile apps with creative ideas. Join us to
              improve your {"app's"} performance on different devices for a
              great user experience. {"Let's"} make your app stand out!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2024] py-5 px-6 md:w-[33%] tech-stack"data-aos='fade-right'>
        <div>
          <div className="text-[#DD4242] text-2xl Montserrat font-semibold leading-[110%]">
            Flutter
          </div>
          <div className="mt-2">
            <p className="text-lg font-normal Montserrat leading-[150%] text-white">
              Dive into Flutter with Vadavision! Our experts seamlessly blend
              creativity and functionality, crafting visually appealing,
              high-performance apps. Experience innovation and exceptional
              mobile journeys with us, setting new standards in app development.
              Explore the vibrant Flutter world and elevate your mobile
              experience!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2024] py-5 px-6 md:w-[33%] tech-stack"data-aos='fade-right'>
        <div>
          <div className="text-[#DD4242] text-2xl Montserrat font-semibold leading-[110%]">
            Hybrid Apps
          </div>
          <div className="mt-2">
            <p className="text-lg font-normal Montserrat leading-[150%] text-white">
              Explore {"Vadavision's"} Hybrid Development, where we mix
              different technologies to create apps. Our solutions are flexible,
              affordable, and work well on various devices. We make sure users
              get the same experience no matter what device they use. Try our
              versatile and user-friendly apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
