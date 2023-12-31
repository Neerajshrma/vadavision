import React from "react";
import Herosection from "./Herosection/Herosection";
import RecognizedBy from "./Herosection/RecognizedBy";
import OurCustomers from "./OurSatisfyCustomers/OurCustomers";
import OurServiceses from "./OurServiceses/OurServiceses";
import ConsultUs from "../landingpage/Consultus/ConsultUs";
import Portfolio from "../landingpage/Portfolio/Portfolio";
import DesignProcess from "./OurDesignProcess/DesignProcess";
import DesigningTools from "./OurDesigningTools/DesigningTools";
import OurMilestones from "./OurMilestones/OurMilestones";
import Footer from "../common/Footer/Footer";
import SplideSlider from "../Splide/SplideSlider";
import Header from "../common/Header/Header";
import WhyChooseUs from "../common/WhyChooseUs";
import FrequentlyAksedQuestions from "./FrequentlyAksedQuestions/FrequentlyAksedQuestions";

const UIUXPage = () => {
  return (
    <div className="bg-[#141619] pb-10">
      <div className="ui-page-bg herosection-uiux">
        <div
          className="bg-cover h-[82vh] herosection-uiux"
          style={{ backgroundImage: "URL(images/ui-bg-img-2.webp)" }}
        >
          <div>
            <Header
              color="black"
              backgroundColor="#DD4242"
              svgcolor="#ffffff"
              navItemColor="white"
              downdownColor="white"
            />
          </div>
          <div>
            <Herosection />
          </div>
        </div>
      </div>
      <div>
        <RecognizedBy />
      </div>
      <div className="bg-[#141619]">
        <div className="">
          <OurCustomers />
        </div>
        <div>
          <SplideSlider />
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
        {/* <div className="bg-white">
        <DesigningTools />
        </div> */}
        <div>
          <OurMilestones />
        </div>
        <div className="mt-5">
          <ConsultUs backgroundColor="#0C4137" color="white" />
        </div>
        <div>
          <WhyChooseUs />
        </div>
        <div className="bg-[#141619] min-h-[600px]">
          <FrequentlyAksedQuestions />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UIUXPage;
