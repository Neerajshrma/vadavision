import React from "react";
import Header from "./Header/Header";
import Herosection from "./Herosection/Herosection";
import RecognizedBy from "./Herosection/RecognizedBy";
import OurCustomers from "./OurSatisfyCustomers/OurCustomers";
import OurServiceses from "./OurServiceses/OurServiceses";
import ConsultUs from "../landingpage/Consultus/ConsultUs";
import Portfolio from "../landingpage/Portfolio/Portfolio";
import DesignProcess from "./OurDesignProcess/DesignProcess";
import DesigningTools from "./OurDesigningTools/DesigningTools";
import OurMilestones from "./OurMilestones/OurMilestones";
import WhyChooseUs from "../landingpage/WhyUs/WhyChooseUs";
import Footer from "../common/Footer/Footer";
import FrequentlyAksedQuestions from "../common/Faqs/FrequentlyAksedQuestions";

const UIUXPage = () => {
  return (
    <div className="bg-[#141619] pb-10">
      <div className="ui-page-bg">
        <div
          className="bg-cover h-screen"
          style={{ backgroundImage: "URL(images/ui-bg-img.png)" }}
        >
          <div>
            <Header />
          </div>
          <div>
            <Herosection />
          </div>
        </div>
      </div>
      <div>
        <RecognizedBy />
      </div>
      {/* <div>
        <Sliders />
      </div> */}
      <div className="">
        <OurCustomers />
      </div>
      <div>
        <OurServiceses />
      </div>
      <div className="mt-5">
        <ConsultUs backgroundColor="#1E2533" color="white" />
      </div>
      <div>
        <DesignProcess />
      </div>
      <div>
        <Portfolio />
      </div>
      <div className="mt-5">
        <ConsultUs backgroundColor="#1E2533" color="white" />
      </div>
      <div className="bg-white">
        <DesigningTools />
      </div>
      <div>
        <OurMilestones />
      </div>
      <div className="mt-5">
        <ConsultUs backgroundColor="#0C4137" color="white" />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div className="bg-[#141619]">
        <FrequentlyAksedQuestions />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UIUXPage;
