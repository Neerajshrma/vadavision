import React from "react";
import Header from "./Header/Header";
import Herosection from "./Herosection/Herosection";
import RecognizedBy from "./Herosection/RecognizedBy";
import OurCustomers from "./OurSatisfyCustomers/OurCustomers";
import OurServiceses from "./OurServiceses/OurServiceses";
import ConsultUs from "../landingpage/Consultus/ConsultUs";
import Portfolio from "../landingpage/Portfolio/Portfolio";

const UIUXPage = () => {
  return (
    <div className="bg-[#141619] pb-10">
      <div className="ui-page-bg">
        <div
          className="bg-cover h-screen"
          style={{ backgroundImage: "URL(images/ui-bg-img.png)" }}
        >
          {/* header start */}
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
        <Portfolio />
      </div>
      <div className="mt-5">
        <ConsultUs backgroundColor="#1E2533" color="white" />
      </div>
    </div>
  );
};

export default UIUXPage;
