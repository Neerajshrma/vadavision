import React from "react";
import HeroSection from "./Herosection/HeroSection";
import ConsultUs from "./Consultus/ConsultUs";
import MobileApp from "./OurServices/MobileApp";
import IndustriesWeWork from "./Industries/IndustriesWeWork";
import TechStack from "./TechStack/TechStack";
import Portfolio from "./Portfolio/Portfolio";
import SomeFacts from "./SomeFacts/SomeFacts";
import CalculateTheCost from "./CalculateTheCost/CalculateTheCost";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import SplideSlider from "./Testimonials/Testimonials";
import WhyChooseUs from "../common/WhyChooseUs";
import FrequentlyAksedQuestions from "./FrequentlyAksedQuestions/FrequentlyAksedQuestions";

const LandingPage = ({ minWidth }) => {
  return (
    <div>
      <div>
        {/* header start */}
        <Header color="black" backgroundColor="#141619" svgcolor="#333542" />
        {/* header end */}
      </div>
      <div>
        {/* herosection start */}
        <HeroSection minWidth={minWidth} />
      </div>
      <div>
        <SplideSlider />
      </div>
      <div className="">
        <ConsultUs backgroundColor="#14EFA5" />
      </div>
      <div className="">
        <MobileApp />
      </div>
      <div>
        <IndustriesWeWork />
      </div>
      <div>
        <TechStack />
      </div>
      <div className="">
        <ConsultUs color="#ffffff" backgroundColor="#1E2533" />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <SomeFacts />
      </div>
      <div className="">
        <ConsultUs color="#ffffff" backgroundColor="#0C4137" />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      {/* <div>
        <CalculateTheCost />
      </div> */}
      <div className="bg-[#141619] min-h-[600px]">
        <FrequentlyAksedQuestions />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
