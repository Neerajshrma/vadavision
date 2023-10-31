"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CurrentJob = () => {
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
    <>
      <div className="responsive-width mobile-width px-40"data-aos='fade-right'>
        <div
          style={{ fontFamily: "Montserrat" }}
          className="responsive-width pb-4"
        >
          <div className="mt-10   flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="creative-idea text-sm uppercase  font-normal leading-[150%] text-[#A9AFC3]"
            >
              Join our cool workplace
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between pb-10 ">
          <div className="flex text-4xl  hero-heading leading-[120%] font-bold text-white  ">
            <h1 className="currentJobResponsive">Current Job Openings</h1>
          </div>
        </div>
        <div className="space-y-4 pb-10 px-10">
          <div id="join-widget">
          <Script
            defer
            type="text/javascript"
            data-mount-in="#join-widget"
            src="https://join.com/api/widget/bundle/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXR0aW5ncyI6eyJzaG93Q2F0ZWdvcnlGaWx0ZXIiOnRydWUsInNob3dMb2NhdGlvbkZpbHRlciI6dHJ1ZSwic2hvd0VtcGxveW1lbnRUeXBlRmlsdGVyIjp0cnVlLCJsYW5ndWFnZSI6ImVuIiwiam9ic1BlclBhZ2UiOjI1fSwiam9icyI6e30sImRlc2lnbiI6eyJzaG93TG9nbyI6dHJ1ZSwic2hvd0xvY2F0aW9uIjp0cnVlLCJzaG93RW1wbG95bWVudFR5cGUiOnRydWUsInNob3dDYXRlZ29yeSI6dHJ1ZSwiY29sb3JzIjp7IndpZGdldCI6eyJiYWNrZ3JvdW5kIjoiIzAwMDAwMCIsImZpbHRlckJvcmRlciI6IiNmZmZmZmYiLCJwYWdpbmF0aW9uIjoiI2ZmZmZmZiJ9LCJqb2JDYXJkIjp7ImJvcmRlciI6IiNmZmZmZmYiLCJiYWNrZ3JvdW5kIjoiIzQxNDY0QiIsInByaW1hcnlUZXh0IjoiI2ZmZmZmZiIsInNlY29uZGFyeVRleHQiOiIjZmZmZmZmIn19fSwidmVyc2lvbiI6MiwiY29tcGFueVB1YmxpY0lkIjoiMjY5NTQzOWEwZDUxYzM5ZmY3NmFjODE1NWRlN2RjYWQiLCJpYXQiOjE2OTcxMTYyNTQsImp0aSI6IjM1ZDk1NDNiLTE1YmItNDkyYy1hMDIxLWU0ZTNiZDNmODJlMyJ9.S8GGuTsW6UOcg033Y_nU58L6XmpCRgN84oSJh9D4sWE"
          ></Script>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentJob;
