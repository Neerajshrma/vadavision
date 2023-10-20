import React from "react";
import { SiGooglemeet } from "react-icons/si";

const Calender = () => {
  return (
    <div>
      <div className="flex justify-center mt-2">
        <div className="text-center calender">
          <div className="w-16 mx-auto rounded-full">
            <img
              className="max-w-[100%] rounded-full"
              src="images/calender-img.png"
              alt=""
            />
          </div>
          <div className="mt-2">
            <span className="block font-bold text-sm">Pankil Joshi (CTO)</span>
            <span className="block mt-2 text-2xl font-bold text-black">
              Discovery
            </span>
          </div>
          <div className="flex gap-2 items-center mt-3 ">
            <span>
              <SiGooglemeet size={19} />
            </span>
            <span className="text-sm font-bold calender">Google meet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
