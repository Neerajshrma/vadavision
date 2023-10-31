import Script from "next/script";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const PopUp = ({ minWidth }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? <SkeletonLoader /> : ""}
      <div
        style={{
          display: loading ? "none" : "block",
          minWidth: { minWidth },
          height: "100%",
        }}
        className="calendly-inline-widget"
        data-url="https://calendly.com/pankil_joshi/discovery?hide_event_type_details=1&hide_gdpr_banner=1"
      >
        <iframe
          src={`https://calendly.com/pankil_joshi/discovery?embed_domain=${process.env.NEXT_PUBLIC_HOST}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1`}
          width="100%"
          height="100%"
          frameborder="0"
          title="Select a Date &amp; Time - Calendly"
        ></iframe>
      </div>
    </>
  );
};

export default PopUp;
