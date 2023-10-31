import React, { useEffect } from "react";
import Tabs from "../common/Faqs/Tabs/Tabs";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import Footer from "../common/Footer/Footer";
import WhyJoinUs from "./WhyJoinUs";
import CurrentJob from "./CurrentJobPage/CurrentJob";
import Header from "../common/Header/Header";
import Accordion from "./Faq";
import Idelogy from "./Idelogy";
import Perks from "./Perks";
import AOS from "aos";
import "aos/dist/aos.css";

const CarrierPage = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 300,
        duration: 500,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div className="bg-[#141619]">
        <div>
          <Header color="white" backgroundColor="#DD4242" svgcolor="#ffffff" />
        </div>
        <div>
          <WhyJoinUs />
        </div>
        <div>
          <Idelogy />
        </div>
        <div className="pb-10">
          <Perks />
        </div>
        <div className="bg-black py-10">
          <CurrentJob />
        </div>
        <div className="bg-[#141619] py-10 px-40 responsive-width min-h-[600px]">
          <div className="w-1/2">
            <h1 className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex gap-20 responsive-faqs">
            <div className="w-1/2 mt-8 faq-accordian">
              <Accordion />
            </div>
            <div className="w-1/2 faq-tabs">
              <Tabs />
            </div>
          </div>
        </div>
        <div>
          <SubscribeUs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CarrierPage;
