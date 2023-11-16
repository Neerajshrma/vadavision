import React from "react";
import Herosection from "./Herosection/Herosection";
import AboutUs from "./AboutUs/AboutUs";
import MissionVision from "./Missionvision/MissionVision";
import OurCustomers from "../UIUXPage/OurSatisfyCustomers/OurCustomers";
import ConsultWithUs from "../Homepage/Consultwithus/ConsultWithUs";
import Footer from "../common/Footer/Footer";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import OurWorkCulture from "./OurWorkCulture/OurWorkCulture";
import Tabs from "../common/Faqs/Tabs/Tabs";
import Header from "../common/Header/Header";
import OurServices from "../Homepage/Our-services/OurServices";
import WhyChooseUs from "../common/WhyChooseUs";
import Accordion from "./Faq";
import Breadcrums from "../common/Breadcrums";
const AboutUsPage = () => {
  return (
    <div className="bg-[#141619]">
      <div>
        <Header color="black" backgroundColor="#DD4242" svgcolor="#ffffff" navItemColor="white" downdownColor='white' />
      </div>
      <div className=" text-start pt-5 cursor-default px-40	">
          <Breadcrums curpage="About Us" />
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
        <OurServices />
      </div>
      {/* <div>
        <OurWorkCulture />
      </div> */}
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
      <div className="bg-[#141619] Montserrat py-10 px-40 responsive-width min-h-[600px]">
        <div className="w-1/2">
          <h1 className=" text-white text-4xl font-bold hero-heading leading-[130%]">
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
  );
};

export default AboutUsPage;
