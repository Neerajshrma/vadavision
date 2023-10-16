"use client"
import Script from "next/script";
import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";

const Modals = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
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
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            
        
            <div>
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

          <button
            onClick={onClose}
            className="mt-6 float-direction bg-red-500 mr-10  text-white px-3 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modals;
