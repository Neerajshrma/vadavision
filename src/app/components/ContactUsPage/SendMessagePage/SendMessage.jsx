import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const SendMessage = () => {
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
    <>
      <div className="Montserrat ">
        <div className="">
          <div className="mt-10  flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div data-aos='fade-up'
              style={{ fontFamily: "Montserrat" }}
              className="creative-idea  text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]"
            >
              Contact Us
            </div>
          </div>
        </div>
        <div
          className="mt-3    text-sm uppercase font-normal "
          style={{ fontFamily: "Montserrat" }}
        >
          <h1 data-aos='fade-up'
            style={{ fontFamily: "Montserrat" }}
            className="message-responsiness  leading-[120%] font-semibold text-white whitespace-nowrap"
          >
            Send a Message
          </h1>
          <div className="mt-5 pb-10 Montserrat ">
            <div className="mt-4 msg-info">
              <p data-aos='fade-up'className="Mulish text-[#A9AFC3] text-base leading-[140%] msg-info">
                We always try to implement our creative ideas at the highest
                level. Tell us about your project and we will make it work.
              </p>
            </div>
          </div>
        </div>
        <div className="send-message flex flex-row gap-6">
          <div className=" ">
            <input data-aos='fade-up'
              style={{ backgroundColor: "inherit" }}
              type="text"
              className="text-sm border-none borderless-input text-white px-0 responsive-input"
              placeholder="Name"
            />
          </div>
          <div data-aos='fade-up'className="   ">
            <input
              style={{ backgroundColor: "inherit" }}
              type="email"
              className="  text-sm border-none borderless-input responsive-input text-white px-0"
              placeholder="Email"
            />
          </div>
        </div>
        <div data-aos='fade-up'className="send-message pt-6">
          <textarea
            style={{ backgroundColor: "inherit" }}
            placeholder="Message"
            id=""
            className="text-sm border-none responsive-input borderless-input text-white px-0"
            cols="54"
            rows="4"
          ></textarea>
        </div>
        <div data-aos='fade-up' className="  pt-6 pb-4 ">
          <button className="text-sm center-button text-white rounded-full border border-[#DD4242] px-5 py-2.5">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
