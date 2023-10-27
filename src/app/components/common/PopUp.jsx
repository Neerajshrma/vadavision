import Script from "next/script";
import React, { useState } from "react";

const PopUp = () => {
  return (
    <>
      <div>
        <iframe
          className="calendly-inline-widget no-scrollbar overflow"
          src="https://calendly.com/pankil_joshi/discovery?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "570px", height: "500px" }}
        >
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            async={true}
          ></Script>
        </iframe>
      </div>
    </>
  );
};

export default PopUp;
