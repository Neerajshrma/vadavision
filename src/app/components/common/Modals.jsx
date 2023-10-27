import Script from "next/script";
import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";
import Calender from "./Calender";
import PopUp from "./PopUp";

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
        <div className="  w-[80%] relative bg-[#faf7f0] shadow-lg">
          <div
            className="flex justify-end p-2 absolute rounded-full z-50 bg-black  top-0 right-0 -mt-4 -mr-4 cursor-pointer text-3xl"
            onClick={onClose}
          >
            <RxCross2 size={20} style={{ color: "white" }} />
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] flex flex-col pt-6 pl-6 ">
              <h1 className="text-4xl text-center  font-bold pb-6">
                Talk To Our EXPERTS!
              </h1>
              <p className="px-2 pb-4 font-medium calender">
                Unlock the power of personalised solutions! Schedule a call with
                our Discovery Agent now and embark on a journey to fulfil your
                unique needs. Your success story begins here.
              </p>

              <Calender justifyContent="center" />
            </div>
            <div className="pb-4">
              <PopUp minWidth={"550px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
