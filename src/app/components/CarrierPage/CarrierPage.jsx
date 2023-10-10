import React from "react";
import Header from "../UIUXPage/Header/Header";
import IdelogyPage from "./IdelogyPage";
import PerksPage from "./PerksPage";
import Accordion from "../common/Faqs/Faqs";
import Tabs from "../common/Faqs/Tabs/Tabs";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import Footer from "../common/Footer/Footer";
import WhyJoinUs from "./WhyJoinUs";
import CurrentJob from "./CurrentJobPage/CurrentJob";

const CarrierPage = () => {
  return (
    <>
      <div className="bg-[#141619]">
        <div>
          <Header />
        </div>
        <div>
            <WhyJoinUs/>
        </div>

        <div>
            <IdelogyPage/>
        </div>
        <div>
            <PerksPage/>
        </div>
        <div>
            <CurrentJob/>
        </div>
        <div className=" px-40">
          <div className="w-1/2">
            <h1 className="Montserrat text-white text-4xl font-bold heading FrequentlyQuestion leading-[130%]">
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

export default CarrierPage;
