import React from "react";
import Header from "../common/Header/Header";
import HeroSection from "./HeroSectionPage/HeroSection";
import Footer from "../common/Footer/Footer";
import SubscribeUs from "../Homepage/Subscribeus/SubscribeUs";
import ConsultWithUs from "../Homepage/Consultwithus/ConsultWithUs";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-[#141619]">
        <div>
          <Header color="white" backgroundColor="#DD4242" svgcolor="#ffffff" />
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
