import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import teamparty from "../../../../public/images/team-party.jpg";
import GatherImage from "../../../../public/images/gather-4.png";
import teamImage from "../../../../public/images/team.jpg";

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
        <div className="">
          <h1
            data-aos="fade-up"
            className="Montserrat text-white text-4xl font-bold heading leading-[130%]"
          >
            Why pick Vadavision for your professional journey?{" "}
          </h1>
          <p
            data-aos="fade-up"
            className="pt-4 w-[100%] pb-10 Montserrat text-white text-sm leading-[28px] para-responsive"
          >
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
          <div className="flex  h-[600px] image-responsive-height" data-aos="fade-up">
            <Image src={GatherImage} alt="" />

            {/* <img src="images/team.jpg" alt="" /> */}
          </div>
          <div className="flex career-images gap-2 ">
  <div className="w-1/2 career-images min-w-[full] flex " data-aos="fade-up">
    <Image src={teamImage} alt=""  />
  </div>
  <div className="w-1/2 career-images min-w-[full] flex" data-aos="fade-up">
    <Image src={teamparty} alt="" />
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default WhyJoinUs;
