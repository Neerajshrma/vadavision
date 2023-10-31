import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyJoinUs = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 0,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div className="mt-20 px-40 responsive-width">
        <div className="" >
          <h1 data-aos='fade-up' className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
            Why pick Vadavision for your professional journey?{" "}
          </h1>
          <p data-aos='fade-up' className="pt-4 w-[80%] pb-10 text-white text-sm leading-[28px] para-responsive">
            At Vadavision, we prioritize our employees voices, valuing their
            input before giving feedback. Our work setup is incredibly flexible,
            allowing our team to work remotely in diverse environments, from the
            tranquil mountains to the serene beaches, and even the comfort of
            their own homes. We understand the importance of work-life balance,
            offering flexible working hours that cater to individual preferences
            and lifestyles.We work together as a team and help each other grow.
            We believe in learning always, and we support your career
            development. We care about your well-being, not just at work, but in
            your personal life too. At Vadavision, you can have a satisfying job
            where you are valued, and your skills are nurtured. Come join us for
            a great career journey!
          </p>
        </div>
        <div className="space-y-4">
          <div className="" data-aos='fade-up'>
            <img src="images/team.jpg" alt="" />
          </div>
          <div className="flex h-[370px] gap-4">
            <div className="w-1/2 min-w-[300px] " data-aos='fade-up'>
              <img className="max-h-[100%]" src="images/gather.png" alt="" />
            </div>
            <div className="w-1/2 min-w-[300px]" data-aos='fade-up'>
              <img
                className="max-h-[100%]"
                src="images/team-party.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyJoinUs;
