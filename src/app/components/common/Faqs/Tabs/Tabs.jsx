"use client";
import React, { useState } from "react";
import GeneralTab from "./General";
import Payments from "./Payments";
import Refund from "./Refund";
import Contact from "./Contact";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("General");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab-container my-2">
        <div
          className={`tab ${activeTab === "General" ? "active" : ""}`}
          onClick={() => handleTabClick("General")}
        >
          General
        </div>
        <div
          className={`tab ${activeTab === "Payments" ? "active" : ""}`}
          onClick={() => handleTabClick("Payments")}
        >
          Payments
        </div>
        <div
          className={`tab ${activeTab === "Refund" ? "active" : ""}`}
          onClick={() => handleTabClick("Refund")}
        >
          Refund
        </div>
        {/* <div
          className={`tab ${activeTab === "Contact" ? "active" : ""}`}
          onClick={() => handleTabClick("Contact")}
        >
          Contact
        </div> */}
      </div>
      {activeTab === "General" && <GeneralTab />}
      {activeTab === "Payments" && <Payments />}
      {activeTab === "Refund" && <Refund />}
      {/* {activeTab === "Contact" && <Contact />} */}
    </div>
  );
};

export default Tabs;
