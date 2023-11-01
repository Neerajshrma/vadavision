import React from "react";
import Image from "next/image";
import errorimage from "../../../../public/images/error.png";
const Error = () => {
  return (
    <>
      <div className="text-white bg-black pt-20 flex flex-row-reverse px-40  ">
        <span className="w-[40%]">+91 62 8000 7001</span>

        <div className="h-screen flex items-center justify-center  ">
          <div
            className="text-white absolute text-6xl inset-0 pb-44 flex items-center justify-center"
            style={{ top: "-60px" }}
          >
            OMG!
          </div>
          <div
            className="text-white absolute pb-20 text-5xl  pt-10  inset-0 flex items-center justify-center"
            style={{ top: "-60px" }}
          >
            You broke the site!
          </div>
          <div
            className="text-[#A9AFC3] absolute font-extralight pt-10 text-xl inset-0 flex items-center justify-center"
            style={{ top: "-20px" }}
          >
            Don’t worry. It’s just 404 page not found.
          </div>
          <Image src={errorimage} alt="" />

          {/* <img className="max-h-full w-full" src="images/error.png" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Error;
