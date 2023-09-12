"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Questions = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="mt-5">
      <div className="bg-[#18191B] max-w-[500px] mt-5 px-5 py-3 rounded-lg">
        <div className="">
          <div className="cursor-pointer flex items-center justify-between">
            <h1 className="Montserrat text-[#CFD3D7] text-sm leading-[24px] font-normal">
              What services does Vadavision Offer?
            </h1>
            <button
              onClick={() => setshow(!show)}
              className="text-[#DD4242] text-2xl"
            >
              {" "}
              {show ? (
                <span>
                  {" "}
                  <RxCross2 size="18px" />{" "}
                </span>
              ) : (
                "+"
              )}
            </button>
          </div>
          {show && (
            <p className="mt-2 text-[#A2A9B0] Montserrat text-[#CFD3D7] text-sm leading-[24px] font-light">
              Vadavision offers a service for creating a website design,
              illustration, icon set, website development, animation and digital
              marketing.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
