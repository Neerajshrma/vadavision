import React from "react";
import SendMessage from "./SendMessagePage/SendMessage";
import MessageInfo from "./MessageInfoPage/MessageInfo";
import FAQs from "../landingpage/FAQs/FAQs";
import FAQTabs from "../Homepage/FAQs/FAQTabs";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import Footer from "../common/Footer/Footer";
import Header from "../UIUXPage/Header/Header";

const ContactUsPage = () => {
  return (
    <>
    <div className="bg-[#141619] responsive-width  mobile-width">
     <div>
      <Header/>
     </div>
    <div className="w-[50%] flex ">
       <MessageInfo/>
       <SendMessage/>
      </div>
      <div className="flex flex-row">
        <FAQs />
        <FAQTabs />
      </div>
      <div>
        <SubscribeUs />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
     
    </>
  );
};

export default ContactUsPage;
