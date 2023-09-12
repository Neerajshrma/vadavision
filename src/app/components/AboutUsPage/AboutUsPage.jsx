import React from "react";
import Header from "../UIUXPage/Header/Header";
import Herosection from "./Herosection/Herosection";
import AboutUs from "./AboutUs/AboutUs";
import MissionVision from "./Missionvision/MissionVision";

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
        <MissionVision/>
      </div>
    </div>
  );
};

export default AboutUsPage;
