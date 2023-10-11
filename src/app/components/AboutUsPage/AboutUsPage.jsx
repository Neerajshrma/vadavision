import React from "react";
import Herosection from "./Herosection/Herosection";
import AboutUs from "./AboutUs/AboutUs";
import MissionVision from "./Missionvision/MissionVision";
import OurCustomers from "../UIUXPage/OurSatisfyCustomers/OurCustomers";
import WhyChooseUs from "../Homepage/Whychooseus/WhyChooseUs";
import ConsultWithUs from "../Homepage/Consultwithus/ConsultWithUs";
import Footer from "../common/Footer/Footer";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import OurWorkCulture from "./OurWorkCulture/OurWorkCulture";
import Accordion from "../common/Faqs/Faqs";
import Tabs from "../common/Faqs/Tabs/Tabs";
import ServiseCards from "./ServiceCards/ServiseCards";
import Header from "../common/Header/Header";

const AboutUsPage = () => {
  return (
    <div className="bg-[#141619]">
      <div>
        <Header color="white" backgroundColor="#DD4242" />
      </div>
      <div>
        <Herosection />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <MissionVision />
      </div>
      <div>
        <ServiseCards />
      </div>
      <div>
        <OurWorkCulture />
      </div>
      {/* <div className="ml-40">
        <OurExperts />
      </div> */}
      <div>
        <OurCustomers />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      <div className="bg-[#141619] py-10 px-40">
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
  );
};

export default AboutUsPage;
