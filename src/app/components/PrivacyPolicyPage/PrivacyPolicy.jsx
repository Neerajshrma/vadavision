import React from "react";
import Header from "../common/Header/Header";
import HeroSection from "./HeroSectionPage/HeroSection";
import Footer from "../common/Footer/Footer";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import ConsultWithUs from "../Homepage/Consultwithus/ConsultWithUs";
import Breadcrums from "../common/Breadcrums";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-[#141619]">
        <div>
          <Header color="black" backgroundColor="#DD4242" svgcolor="#ffffff" navItemColor="white" downdownColor='white' />
        </div>
        <div className="float-left  px-40 pt-5  responsive-breadcrums  cursor-default">
          <Breadcrums curpage="Privacy & Policy" />
        </div>
        <div>
          <HeroSection />
        </div>
        <div>
        <ConsultWithUs />
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

export default PrivacyPolicy;
