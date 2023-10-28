import Script from "next/script";
import React, { useEffect, useState } from "react";

const PopUp = ({ minWidth }) => {
  return (
    <>
    <div style={{minWidth:'100%', height:'700px'}} className="calendly-inline-widget" data-url="https://calendly.com/pankil_joshi/discovery?hide_event_type_details=1&hide_gdpr_banner=1">
      <iframe src={`https://calendly.com/pankil_joshi/discovery?embed_domain=${process.env.NEXT_PUBLIC_HOST}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1`} width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly"></iframe>
    </div>
    </>
  );
};

export default PopUp;
