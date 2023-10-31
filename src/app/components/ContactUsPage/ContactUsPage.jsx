import React, { useEffect } from "react";
import SendMessage from "./SendMessagePage/SendMessage";
import MessageInfo from "./MessageInfoPage/MessageInfo";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import Footer from "../common/Footer/Footer";
import Accordion from "../common/Faqs/Faqs";
import Tabs from "../common/Faqs/Tabs/Tabs";
import Header from "../common/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsPage = () => {
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
        <div className="py-10 gap-10 flex justify-between responsive-width px-40">
          <div className="w-1/2 hide-cards">
            <MessageInfo />
          </div>
          <div className="w-1/2  responsiveFullWidth">
            <SendMessage />
          </div>
        </div>
        <div className="bg-[#141619] py-10 px-40 responsive-width min-h-[600px]">
          <div className="w-1/2" data-aos="fade-right">
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

export default ContactUsPage;
