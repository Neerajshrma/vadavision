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
<<<<<<< HEAD
        ></div>
=======
        >
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            async={true}
          ></Script>
        </iframe>
>>>>>>> 466a5b5e95bee9d59cf23d3389dbf30be3fcc26b
      </div>
    </>
  );
};

export default PopUp;
