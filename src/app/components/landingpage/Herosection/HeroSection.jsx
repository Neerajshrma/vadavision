import React, { useContext, useEffect, useState } from "react";
import Button from "../../common/Button";
import Features from "./Features";
import Script from "next/script";
import SkeletonLoader from "../../common/SkeletonLoader";
import PopUp from "../../common/Calender";
import Calender from "../../common/CalenderProfile";
import { ModalContext } from "../../hooks/modalContext";
import RippleEffect from "../../common/RippleEffect";

const HeroSection = () => {
  let { modalOpen } = useContext(ModalContext);

  return (
    <>
      <div className="flex flex-wrap px-40 responsive-width mobile-width mt-2">
        <div
          style={{ fontFamily: "Montserrat" }}
          className="mt-5 w-7/12 hero-section "
        >
          <div className="bg-hero">
            <div>
              <h1 className="text-[55px] hero-heading leading-[120%] font-bold">
                Your Hassle-Free Mobile App Journey Begins Here{" "}
                <span className="heading-dot inline-block w-5 h-5 ml-[-12px] bg-[#DD4242] rounded-full"></span>
              </h1>
            </div>
            <div>
              <h4 className="text-base hero-description font-medium leading-[120%] text-[#A9AFC3] w-10/12 mt-4">
                Boost your business using clever mobile solutions driven by AI
                technology.
              </h4>
            </div>
            <div className="flex gap-4 mt-8">
              <div
                onClick={modalOpen}
                className="flex gap-1 cursor-pointer bg-[#DD4242] primary-color text-white cost-Calculator items-center px-4 py-1.5 "
              >
                <span>
                  <svg
                    width="22"
                    height="22"
                    className=""
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7913 8.9375H9.20801C8.90467 8.9375 8.66634 8.69917 8.66634 8.39583V6.77083C8.66634 6.4675 8.90467 6.22917 9.20801 6.22917H16.7913C17.0947 6.22917 17.333 6.4675 17.333 6.77083V8.39583C17.333 8.69917 17.0947 8.9375 16.7913 8.9375ZM17.333 12.1875V11.1042C17.333 10.8008 17.0947 10.5625 16.7913 10.5625H15.708C15.4047 10.5625 15.1663 10.8008 15.1663 11.1042V12.1875C15.1663 12.4908 15.4047 12.7292 15.708 12.7292H16.7913C17.0947 12.7292 17.333 12.4908 17.333 12.1875ZM10.833 12.1875V11.1042C10.833 10.8008 10.5947 10.5625 10.2913 10.5625H9.20801C8.90467 10.5625 8.66634 10.8008 8.66634 11.1042V12.1875C8.66634 12.4908 8.90467 12.7292 9.20801 12.7292H10.2913C10.5947 12.7292 10.833 12.4908 10.833 12.1875ZM14.083 12.1875V11.1042C14.083 10.8008 13.8447 10.5625 13.5413 10.5625H12.458C12.1547 10.5625 11.9163 10.8008 11.9163 11.1042V12.1875C11.9163 12.4908 12.1547 12.7292 12.458 12.7292H13.5413C13.8447 12.7292 14.083 12.4908 14.083 12.1875ZM17.333 15.7083V14.625C17.333 14.3217 17.0947 14.0833 16.7913 14.0833H15.708C15.4047 14.0833 15.1663 14.3217 15.1663 14.625V15.7083C15.1663 16.0117 15.4047 16.25 15.708 16.25H16.7913C17.0947 16.25 17.333 16.0117 17.333 15.7083ZM10.833 15.7083V14.625C10.833 14.3217 10.5947 14.0833 10.2913 14.0833H9.20801C8.90467 14.0833 8.66634 14.3217 8.66634 14.625V15.7083C8.66634 16.0117 8.90467 16.25 9.20801 16.25H10.2913C10.5947 16.25 10.833 16.0117 10.833 15.7083ZM14.083 15.7083V14.625C14.083 14.3217 13.8447 14.0833 13.5413 14.0833H12.458C12.1547 14.0833 11.9163 14.3217 11.9163 14.625V15.7083C11.9163 16.0117 12.1547 16.25 12.458 16.25H13.5413C13.8447 16.25 14.083 16.0117 14.083 15.7083ZM17.333 19.2292V18.1458C17.333 17.8425 17.0947 17.6042 16.7913 17.6042H15.708C15.4047 17.6042 15.1663 17.8425 15.1663 18.1458V19.2292C15.1663 19.5325 15.4047 19.7708 15.708 19.7708H16.7913C17.0947 19.7708 17.333 19.5325 17.333 19.2292ZM14.083 19.2292V18.1458C14.083 17.8425 13.8447 17.6042 13.5413 17.6042H9.20801C8.90467 17.6042 8.66634 17.8425 8.66634 18.1458V19.2292C8.66634 19.5325 8.90467 19.7708 9.20801 19.7708H13.5413C13.8447 19.7708 14.083 19.5325 14.083 19.2292ZM20.8538 21.125V4.875C20.8538 3.53167 19.7597 2.4375 18.4163 2.4375H7.58301C6.23967 2.4375 5.14551 3.53167 5.14551 4.875V21.125C5.14551 22.4683 6.23967 23.5625 7.58301 23.5625H18.4163C19.7597 23.5625 20.8538 22.4683 20.8538 21.125ZM18.4163 4.0625C18.8605 4.0625 19.2288 4.43083 19.2288 4.875V21.125C19.2288 21.5692 18.8605 21.9375 18.4163 21.9375H7.58301C7.13884 21.9375 6.77051 21.5692 6.77051 21.125V4.875C6.77051 4.43083 7.13884 4.0625 7.58301 4.0625H18.4163Z"
                      fill="#EAEAEA"
                      className="color-change"
                    />
                  </svg>
                </span>
                <div>
                  <RippleEffect>
                    <Button
                      fontFamily="Montserrat"
                      fontWeight="500"
                      padding=""
                      fontSize="16px"
                      name="Cost Calculator"
                    />
                  </RippleEffect>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-5/12 hero-calender">
          <div className="flex justify-center">
            <Calender />
          </div>
          <div className="mt-2 h-[600px]">
            <PopUp minWidth="100%" />
          </div>
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <Features />
      </div>
    </>
  );
};

export default HeroSection;
