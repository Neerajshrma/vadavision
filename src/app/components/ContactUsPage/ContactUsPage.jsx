import React from "react";
import SendMessage from "./SendMessagePage/SendMessage";
import MessageInfo from "./MessageInfoPage/MessageInfo";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import Footer from "../common/Footer/Footer";
import Header from "../UIUXPage/Header/Header";
import Accordion from "../common/Faqs/Faqs";
import Tabs from "../common/Faqs/Tabs/Tabs";
import FrequentlyAksedQuestions from "../common/Faqs/FrequentlyAksedQuestions";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-[#141619] responsive-width  mobile-width">
        <div>
          <Header />
        </div>
        <div className="py-10 gap-10 flex justify-between responsive-width mobile-width px-40">
          <div className="w-1/2">
            <MessageInfo />
          </div>
          <div className="w-1/2">
            <SendMessage />
          </div>
        </div>
        <div className=" px-40">
          <div className="w-1/2">
            <h1 className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex gap-20">
            <div className="w-1/2">
              <Accordion />
            </div>
            <div className="w-1/2">
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
