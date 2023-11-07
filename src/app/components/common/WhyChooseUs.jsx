import React, { useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import number from "./Constants";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyChooseUs = () => {
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
    <>
      <div className="bg-[#111319] w-full py-10 pl-40 pr-36 responsive-width">
        <div className="flex items-center why-us gap-14 pr-16">
          <div
            data-aos="fade-up"
            className="bg-cover"
            style={{ backgroundImage: "url(images/bg-object4.png)" }}
          >
            <div className="flex justify-between gap-6 features items-center pl-20">
              <div className="">
                <div
                  data-aos="fade-up"
                  className="flex justify-center items-center features-bg features-width w-[170px] h-[170px]"
                >
                  <div className="">
                    <div className="flex justify-center">
                      <h1
                        data-aos="fade-up"
                        className="font-bold mt-3 text-white text-4xl leading-[100%] ml-3"
                        style={{ fontFamily: "Mulish" }}
                      >
                        {number.SatisfiedClients}
                      </h1>
                      <div data-aos="fade-up" className="mt-2 text-[#DD4242]">
                        <BsPlus />
                      </div>
                    </div>
                    <p
                      data-aos="fade-up"
                      className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text"
                    >
                      Satisfied Clients
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="mt-7 flex justify-center items-center features-bg-2 features-width w-[170px] h-[170px]"
                >
                  <div className="">
                    <div className="flex justify-center">
                      <h1
                        data-aos="fade-up"
                        className="font-bold mt-3 text-white text-4xl leading-[100%] ml-3"
                        style={{ fontFamily: "Mulish" }}
                      >
                        {number.TeamMembers}
                      </h1>
                      <div data-aos="fade-up" className="mt-2 text-[#DD4242]">
                        <BsPlus />
                      </div>
                    </div>
                    <p
                      data-aos="fade-up"
                      className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text"
                    >
                      Team Members
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20 ml-2">
                <div
                  data-aos="fade-up"
                  className="flex justify-center items-center features-bg features-width w-[170px] h-[170px]"
                >
                  <div className="">
                    <div className="flex justify-center">
                      <h1
                        data-aos="fade-up"
                        className="font-bold mt-3 text-white text-4xl leading-[100%] ml-3"
                        style={{ fontFamily: "Mulish" }}
                      >
                        {number.FiveStarReviews}
                      </h1>
                      <div data-aos="fade-up" className="mt-2 text-[#DD4242]">
                        <BsPlus />
                      </div>
                    </div>
                    <p
                      data-aos="fade-up"
                      className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text"
                    >
                      5-Star Reviews
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="mt-7 flex justify-center items-center features-bg-2 features-width w-[170px] h-[170px]"
                >
                  <div className="">
                    <div className="flex justify-center">
                      <h1
                        data-aos="fade-up"
                        className="font-bold text-white text-4xl leading-[100%] ml-3"
                        style={{ fontFamily: "Mulish" }}
                      >
                        {number.successfulProjects}
                      </h1>
                      <div data-aos="fade-up" className="text-[#DD4242]">
                        <BsPlus />
                      </div>
                    </div>
                    <p className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text">
                      Successful Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
              <div
                data-aos="fade-up"
                className="uppercase text-sm font-normal leading-[150%] text-[#A9AFC3]"
              >
                a few words
              </div>
            </div>
            <div data-aos="fade-up" className="mt-4">
              <h1 className="Montserrat capitallize text-white text-5xl font-bold leading-[110%] heading">
                What Sets Vadavision Apart?
              </h1>
            </div>
            <div className="mt-5 para-responsive">
              <p
                data-aos="fade-up"
                className="Montserrat font-normal text-[#A9AFC3] text-lg leading-[150%] description "
              >
                From raw ideas to polished masterpieces, we sculpt your visions
                into digital marvels.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex gap-4">
                <div data-aos="fade-up">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69278 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                      stroke="#DD4242"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="#DD4242"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    data-aos="fade-up"
                    className="Montserrat font-semibold font-lg leading-[130%] text-white"
                  >
                    Quality
                  </h4>
                  <p
                    data-aos="fade-up"
                    className="mt-2 Montserrat font-medium font-base leading-[170%] text-[#A9AFC3] description"
                  >
                    What makes us different is our strong commitment to quality.
                    We use our expertise and innovative solutions to enhance
                    your business uniquely.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-4">
                <div data-aos="fade-up">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69278 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                      stroke="#DD4242"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="#DD4242"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    data-aos="fade-up"
                    className="Montserrat font-semibold font-lg leading-[130%] text-white"
                  >
                    R&D (Research and Development)
                  </h4>
                  <p
                    data-aos="fade-up"
                    className="mt-2 Montserrat font-medium font-base leading-[170%] text-[#A9AFC3] description"
                  >
                    Our proficiency in research and development drives inventive
                    business solutions, making us unique with unmatched service
                    excellence and strategic capabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-4">
                <div data-aos="fade-up">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69278 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
                      stroke="#DD4242"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="#DD4242"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    data-aos="fade-up"
                    className="Montserrat font-semibold font-lg leading-[130%] text-white"
                  >
                    Accountability
                  </h4>
                  <p
                    data-aos="fade-up"
                    className="mt-2 Montserrat font-medium font-base leading-[170%] text-[#A9AFC3] description"
                  >
                    We stand out for our accountability, emphasizing trust and
                    reliability in each service. We aim to enhance your business
                    experience, making it exceptional and unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
