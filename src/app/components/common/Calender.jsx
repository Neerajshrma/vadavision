import React from "react";
import { SiGooglemeet } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";

const Calender = ({ justifyContent, height }) => {
  return (
    <div>
      <div
        className="flex  mt-2"
        style={{ justifyContent: justifyContent, height: { height } }}
      >
        <div className="text-center calender">
          <div className="w-16 mx-auto rounded-full">
            <img
              className="max-w-[100%] rounded-full"
              src="images/calender-img.png"
              alt=""
            />
          </div>
          <div className="mt-2">
            <span className="block font-semibold 		text-sm">
              Pankil Joshi (CTO)
            </span>
            <span className="block mt-2 text-2xl font-semibold text-black	 ">
              Discovery
            </span>
          </div>
          <div className="flex gap-2 items-center mt-3 ">
            <span>
              <MdOutlineWatchLater size={25} />
            </span>
            <span className="text-sm font-medium calender">30 mins</span>

            <span>
              <SiGooglemeet size={19} />
            </span>
            <span className="text-sm font-medium calender">Google meet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
