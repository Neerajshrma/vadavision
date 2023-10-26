import Script from "next/script";
import React, { useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const PopUp = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div>
        <div
          className="calendly-inline-widget no-scrollbar overflow"
          data-url="https://calendly.com/pankil_joshi/discovery?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "570px", height: "500px" }}
        ></div>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          async={true}
        ></Script>
      </div>
    </>
  );
};

export default PopUp;
