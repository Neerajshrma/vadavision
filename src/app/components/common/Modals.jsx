import Script from "next/script";
import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";
import Calender from "./Calender";

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
        <div className=" p-2 w-[80%] relative bg-[#faf7f0] shadow-lg">
          {loading ? (
            <SkeletonLoader size={24} />
          ) : (
            <div className="">
              <div
                className="flex justify-end p-2 absolute rounded-full z-50 bg-black  top-0 right-0 -mt-4 -mr-4 cursor-pointer text-3xl"
                onClick={onClose}
              >
                <RxCross2
                  size={20}
                  className=""
                  style={{ color: "#8c8f8d" }}
                />
              </div>
              <div className="flex flex-row">
                <div className="w-[50%] flex flex-col pl-6 ">
                  <h1 className="text-4xl text-center  font-bold pb-6">
                    Talk To Our EXPERTS!
                  </h1>

                  <Calender justifyContent="center" />
                </div>
                <div
                  className="calendly-inline-widget no-scrollbar overflow w-[50%]  "
                  data-url="https://calendly.com/pankil_joshi/discovery?hide_gdpr_banner=1"
                  style={{ minWidth: "450px", height: "520px" }}
                ></div>
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async={true}
                ></Script>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modals;
