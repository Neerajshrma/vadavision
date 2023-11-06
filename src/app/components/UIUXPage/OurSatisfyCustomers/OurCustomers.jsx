import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import OTGCImage from "../../../../../public/images/otgc-logo.png";
import rotation360Image from "../../../../../public/images/360-logo.png";

const OurCustomers = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 0,
        duration: 500,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <div className="p-5 my-20" >
      <div className="text-center responsive-width mobile-width px-40">
        <h2 data-aos='fade-up' className="text-4xl text-[#DD4242] font-semibold leading-[63px]">
          Our Satisfied Clients
        </h2>
      </div>
      <div className="flex justify-center gap-14 items-center mt-5 flex-wrap">
        <div className="w-60 mt-10">
          <h1 data-aos='fade-up' className="p-[2px] px-1.5 border-[6px] text-lg borde-white text-white font-bold">
            STANDARD INSIGHTS
          </h1>
        </div>{" "}
        <div className="w-56 mt-10">
          <h1 data-aos='fade-up' className="text-2xl text-white font-bold">TWEEKEND</h1>
        </div>{" "}
      </div>
      <div className="flex justify-center gap-14 items-center mt-5 flex-wrap">
        <div data-aos='fade-up' className="w-28 mt-10">
          {/* <img src="images/otgc-logo.png" alt="" /> */}
          <Image src={OTGCImage} alt="" />

        </div>
        <div data-aos='fade-up' className="w-28 mt-10">
          {/* <img src="images/360-logo.png" alt="" /> */}
          <Image src={rotation360Image} alt="" />

        </div>
      </div>
      {/* <div className="mt-20 text-center w-8/12 mx-auto min-w-[400px] mobile-full-width">
        <p className="text-white text-sm">
          Mobile app development is the act or process by which a mobile app is
          developed for mobile devices, such as personal digital assistants,
          enterprise digital assistants or mobile phones. These applications can
          be pre-installed on phones during manufacturing platforms, or
          delivered
        </p>
        <p className="text-white mt-2 text-sm">
          as web applications using server-side or client-side processing (e.g.,
          JavaScript) to provide an {"application-like"} experience within a Web
          browser. Application software developers also must consider a long
          array of screen sizes, hardware specifications
        </p>
      </div> */}
    </div>
  );
};

export default OurCustomers;
