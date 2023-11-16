import React, { useEffect } from "react";
import number from "../../common/Constants";
import AOS from "aos";
import "aos/dist/aos.css";

const SomeFacts = () => {
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
    <div
  className="bg-[#111319] py-10 px-4 sm:px-20 responsive-width bg-cover"
  style={{ backgroundImage: "url(images/bg-object6.png)" }}
>
  <div className="my-5 mx-auto w-full sm:w-7/12 min-w-[250px] text-center">
    <div data-aos="fade-up">
      <h1 className="Montserrat text-white text-4xl sm:text-5xl font-bold heading leading-[63px]">
        Learn interesting facts and numbers about us.
      </h1>
    </div>
    <div className="flex flex-col sm:flex-row justify-between" data-aos="fade-up">
      <div className="mt-10">
        <span className="block text-[#DD4242] Montserrat text-3xl sm:text-4xl font-bold">
          {number.ProjectComplete} {"+"}
        </span>
        <span className="block text-[#DD4242] Montserrat text-xl font-medium">
          Project Complete
        </span>
      </div>
      <div className="mt-10">
        <span className="block text-white Montserrat text-3xl sm:text-4xl font-bold">
          {number.OurTeam} {"+"}
        </span>
        <span className="block text-white Montserrat text-xl font-medium">
          Our Team
        </span>
      </div>
      <div className="mt-10">
        <span className="block text-white Montserrat text-3xl sm:text-4xl font-bold">
          {number.Ourclient} {"+"}
        </span>
        <span className="block text-white Montserrat text-xl font-medium">
          Our Client
        </span>
      </div>
    </div>
  </div>
</div>

  );
};

export default SomeFacts;
