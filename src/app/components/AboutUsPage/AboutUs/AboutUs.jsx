import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
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
    <div className="responsive-width px-40">
      <div
        className="bg-no-repeat bg-auto bg-right"
        style={{ backgroundImage: "url(images/bg-object7.png)" }}
      >
        <div className="responsive-width pb-4">
          <div className="mt-10 flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div
              data-aos="fade-up"
              style={{ fontFamily: "Montserrat" }}
              className="creative-idea text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]"
            >
              our services
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between responsive-row">
          <div className="mt-5 flex flex-wrap ">
            <h1
              data-aos="fade-up"
              className="text-5xl hero-heading Montserrat fontchange text-change leading-[120%] font-bold text-white heading-width"
            >
              We are creative & strong team
            </h1>
            <p
              data-aos="fade-up"
              className="text-[#A9AFC3] font-light Montserrat text-sm  mx-auto leading-[33px]"
            >
              Vadavision was born from a shared vision and unwavering passion.
              Over the past 1.5 years, we transformed challenges into
              opportunities, guided by our {"clients'"} support and our{" "}
              {"team's"}
              dedication. Today, Vadavision stands as a testament to our journey
              of creativity and growth. With each passing day, our commitment to
              excellence propels us forward, showcasing dedication, innovation,
              and unwavering commitment in every step.
            </p>
          </div>
          <div className="pt-20 flex flex-wrap ball bg-cover flex justify-end">
            <div
              data-aos="fade-up"
              className="flex justify-center  items-center w-[200px] h-[200px] border border-2 rounded-full border-[#DD4242] justify-items-center"
            >
              <div className="">
                {" "}
                <h1
                  className="font-bold text-center text-white text-5xl leading-[100%]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  15
                </h1>
                <p
                  data-aos="fade-up"
                  className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text"
                >
                  Awards Winning
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center Our-experience gap-4 justify-between">
          <div className="pt-20 ">
            <div
              data-aos="fade-up"
              className="w-[200px] h-[200px] ball2 border border-2 rounded-full border-[#DD4242] flex justify-center items-center"
            >
              <div>
                <h1
                  className="font-bold text-center text-white text-5xl leading-[100%]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  9
                </h1>
                <p
                  data-aos="fade-up"
                  className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text"
                >
                  Years experience
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-10 bg-cover">
            <h1
              data-aos="fade-up"
              className="hero-heading Montserrat fontchange text-base leading-[120%] font-medium text-white"
            >
              How the workday at Vadavision begins.{" "}
            </h1>
            <p
              data-aos="fade-up"
              className="mt-5 text-[#A9AFC3]  Montserrat font-light text-sm mx-auto leading-[33px]"
            >
              Every day at Vadavision, we begin with a cup of coffee. Gathered
              around, we engage in lively discussions, where creativity sparks
              and innovative ideas come to life. Energized and inspired, we dive
              into our work, embracing each task with enthusiasm. Working
              together in a remote setting, our dedicated team members bring
              their unique talents, making our journey both exciting and
              fruitful.
            </p>
          </div>
        </div>
        <div className="flex pb-10 justify-between our-approach">
          <div className="mt-5 pt-12">
            <h1
              data-aos="fade-up"
              className="text-base hero-heading Montserrat pt-10 leading-[120%] font-medium text-white"
            >
              Innovative Thinkers
            </h1>
            <p
              data-aos="fade-up"
              className="mt-8 text-[#A9AFC3] Montserrat font-light text-sm  mx-auto leading-[33px]"
            >
              Our team consists of innovative thinkers who bring fresh ideas to
              the table, ensuring unique solutions for every project.
            </p>
          </div>
          <div className="pt-20 bg-cover">
            <div
              data-aos="fade-up"
              className="w-[200px] h-[200px] ball2 border border-2 item-center justify-center rounded-full border-[#DD4242] justify-items-center"
            >
              <h1
                className="font-bold mt-3 text-center pt-8 text-white text-4xl leading-[100%] ml-3"
                style={{ fontFamily: "Montserrat" }}
              >
                354
              </h1>
              <p
                data-aos="fade-up"
                className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text"
              >
                Successful projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
