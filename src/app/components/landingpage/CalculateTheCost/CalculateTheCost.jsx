import React from "react";
import Button from "../../common/Button";

const CalculateTheCost = () => {
  return (
    <div className="bg-[#283646] py-10 px-40 responsive-width">
      <div className="my-5 mx-auto w-6/12 text-center">
        <div>
          <h1 className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
            Calculate the cost of your project
          </h1>
        </div>
        <div className="mt-5">
          <div className="relative flex py-5 px-2 items-center">
            <div className="bg-[#DD4242] rounded-[50%] w-5 flex justify-center items-center text-xs h-5 text-white">
              <span>1</span>
            </div>
            <div className="flex-grow border-t-2 border-[#D9D9D9]"></div>
            <div className="bg-[#D9D9D9] flex justify-center items-center text-xs rounded-[50%] w-5 h-5 text-white">
              <span>2</span>
            </div>
            <div className="flex-grow border-t-2 border-[#D9D9D9]"></div>
            <div className="bg-[#D9D9D9] flex justify-center items-center text-xs rounded-[50%] w-5 h-5 text-white">
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="name"
            className="text-white block Montserrat text-md text-start"
          >
            Your Name
          </label>
          <input
            className="input-calculator p-3.5 bg-transparent rounded-[8px] mt-1 w-full placeholder:font-light"
            type="email"
            placeholder="Insert your first name here"
          />
        </div>
        <div className="mt-20">
          <Button
            fontFamily="Montserrat"
            fontWeight="500"
            padding="5px 12px"
            Color="#EAEAEA"
            fontSize="16px"
            name="Next"
            backgroundColor="#DD4242"
          />
        </div>
      </div>
    </div>
  );
};

export default CalculateTheCost;
