import React from "react";
import Header from "../UIUXPage/Header/Header";
import Herosection from "./Herosection/Herosection";
import AboutUs from "./AboutUs/AboutUs";
import MissionVision from "./Missionvision/MissionVision";
import OurCustomers from "../UIUXPage/OurSatisfyCustomers/OurCustomers";
import WhyChooseUs from "../Homepage/Whychooseus/WhyChooseUs";
import ConsultUs from "../landingpage/Consultus/ConsultUs";
import ConsultWithUs from "../Homepage/Consultwithus/ConsultWithUs";
import FAQs from "../landingpage/FAQs/FAQs";
import Footer from "../common/Footer/Footer";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import FAQTabs from "../Homepage/FAQs/FAQTabs";
import ServiseCards from "./ServiceCards/ServiseCards";
import OurWorkCulture from "./OurWorkCulture/OurWorkCulture";
import OurExperts from "./OurExperts/OurExperts";

const AboutUsPage = () => {
  return (
    <div className="bg-[#141619]">
      <div>
        <Header />
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
      <div className="ml-40">
        <OurExperts />
      </div>
      <div>
        <OurCustomers />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      <div className="flex flex-row">
        <FAQs />
        <FAQTabs />
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
