import React from "react";
import { BiChevronRight } from "react-icons/bi";

const CurrentJob = () => {
  return (
    <>
      <div className="responsive-width mobile-width px-40">
        <div
          style={{ fontFamily: "Montserrat" }}
          className="responsive-width pb-4"
        >
          <div className="mt-10   flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="creative-idea text-sm uppercase  font-normal leading-[150%] text-[#A9AFC3]"
            >
              a few words
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between pb-10">
          <div className="text-4xl hero-heading leading-[120%] font-bold text-white">
            <h1>Current Job Openings</h1>
          </div>

          <div className="flex flex-row w-[40%] bg-red-500">

            <div className="w-[80%] flex flex-row py-2 pl-4 bg-[#fff]">
            <img src="images/search.png" alt=""  style={{height:'15px', marginTop:'2px'}}/>
            <input type="Search job Title"placeholder="Search job Title" className="pl-4 border-none borderless" />
            </div>
            <div className="px-4 py-2 text-white">
            Search
            </div>
            


          </div>
        </div>
        <div className="space-y-4 pb-10">
          <div className="flex flex-row justify-between bg-[#41464B]  border border-white-500	rounded-md	">
            <div className="flex flex-col space-y-2 py-2 pl-6 text-white	">
              <h1 className="text-xl">UX Designer</h1>
              <h5 style={{ fontSize: "10px" }}>New York, USA</h5>
            </div>
            <div className="pr-6 py-5">
              <h1 className="text-white">
                <BiChevronRight style={{ fontSize: "25px" }} />
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between bg-[#41464B]  border border-white-500	rounded-md	">
            <div className="flex flex-col space-y-2 py-2 pl-6 text-white	">
              <h1 className="text-xl">UX Designer</h1>
              <h5 style={{ fontSize: "10px" }}>Los Angeles, USA</h5>
            </div>
            <div className="pr-6 py-5">
              <h1 className="text-white">
                <BiChevronRight style={{ fontSize: "25px" }} />
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between bg-[#41464B]  border border-white-500	rounded-md	">
            <div className="flex flex-col space-y-2 py-2 pl-6 text-white	">
              <h1 className="text-xl">Copy Writer</h1>
              <h5 style={{ fontSize: "10px" }}>New York, USA</h5>
            </div>
            <div className="pr-6 py-5">
              <h1 className="text-white">
                <BiChevronRight style={{ fontSize: "25px" }} />
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between bg-[#41464B]  border border-white-500	rounded-md	">
            <div className="flex flex-col space-y-2 py-2 pl-6 text-white	">
              <h1 className="text-xl">Front-End Designer</h1>
              <h5 style={{ fontSize: "10px" }}>San Fransisco, CA, USA</h5>
            </div>
            <div className="pr-6 py-5">
              <h1 className="text-white">
                <BiChevronRight style={{ fontSize: "25px" }} />
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between bg-[#41464B]  border border-white-500	rounded-md	">
            <div className="flex flex-col space-y-2 py-2 pl-6 text-white	">
              <h1 className="text-xl">Front-End Engineer</h1>
              <h5 style={{ fontSize: "10px" }}>New York, USA</h5>
            </div>
            <div className="pr-6 py-5">
              <h1 className="text-white">
                <BiChevronRight style={{ fontSize: "25px" }} />
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between bg-[#41464B]  border border-white-500	rounded-md	">
            <div className="flex flex-col space-y-2 py-2 pl-6 text-white	">
              <h1 className="text-xl">Senior Back-end Developer</h1>
              <h5 style={{ fontSize: "10px" }}>New York, USA</h5>
            </div>
            <div className="pr-6 py-5">
              <h1 className="text-white">
                <BiChevronRight style={{ fontSize: "25px" }} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentJob;
