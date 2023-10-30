"use client";
import React, { useState } from "react";
import GeneralTab from "./General";
import PostService from "./PostService";
import Payment from "./Payment";

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
          className={`tab ${activeTab === "Payment" ? "active" : ""}`}
          onClick={() => handleTabClick("Payment")}
        >
          Payment
        </div>
        <div
          className={`tab ${activeTab === "PostService" ? "active" : ""}`}
          onClick={() => handleTabClick("PostService")}
        >
          Post Service Support
        </div>

        {/* <div
          className={`tab ${activeTab === "Contact" ? "active" : ""}`}
          onClick={() => handleTabClick("Contact")}
        >
          Contact
        </div> */}
      </div>
      {activeTab === "General" && <GeneralTab />}
      {activeTab === "Payment" && <Payment />}
      {activeTab === "PostService" && <PostService />}
      {/* {activeTab === "Contact" && <Contact />} */}
    </div>
  );
};

export default Tabs;
