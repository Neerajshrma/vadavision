import React from "react";
import Header from "../common/Header/Header";
import HeroSection from "./HeroSectionPage/HeroSection";
import ConsultWithUs from "../Homepage/Consultwithus/ConsultWithUs";
import Footer from "../common/Footer/Footer";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";

const TermsAndConditionPage = () => {
  return (
    <>
      <div className="bg-[#141619]">
      <div>
          <Header color="black" backgroundColor="#DD4242" svgcolor="#ffffff" navItemColor="white" downdownColor='white'  />
        </div>
        <div>
            <HeroSection/>
        </div>
        <div>
            <ConsultWithUs/>
        </div>
        <div>
            <SubscribeUs/>
        </div>
        <div>
            <Footer/>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionPage;
