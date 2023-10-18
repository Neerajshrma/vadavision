import Script from "next/script";
import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import { ImCross } from 'react-icons/im';


const Modals = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center z-40 pt-10 justify-center bg-black bg-opacity-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white p-4 rounded-md shadow-lg">
          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="pb-4">
              <div className="flex flex-row-reverse pb-6  " onClick={onClose}>
              <ImCross style={{color:'#8c8f8d'}}/>
              </div>
              <div
                className="calendly-inline-widget no-scrollbar overflow"
                data-url="https://calendly.com/pankil_joshi/discovery?hide_gdpr_banner=1"
                style={{ minWidth: "450px", height: "450px" }}
              ></div>
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                async={true}
              ></Script>
            </div>
          )}

         
        </div>
      </div>
    </>
  );
};

export default Modals;
