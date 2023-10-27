import Script from "next/script";
import React, { useState } from "react";

const PopUp = () => {
  return (
    <>
      <div>
        <div
          className="calendly-inline-widget no-scrollbar overflow"
          data-url="https://calendly.com/pankil_joshi/discovery?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "570px", height: "500px" }}
        ></div>
      </div>
    </>
  );
};

export default PopUp;
