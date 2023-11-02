import React from "react";
import Image from "next/image";
import errorimage from "../../../../public/images/error.png";
const Error = () => {
  return (
    <>
      <div
        className="text-white bg-black px-20 bg-cover bg-center h-[100vh]"
        style={{ backgroundImage: "URL(images/error.png)" }}
      >
        <div className="text-right pt-10">+91 62 8000 7001</div>

        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <div className="text-white text-6xl hero-heading">OMG!</div>
            <div className="text-white text-5xl mt-10">You broke the site!</div>
            <div className="text-[#A9AFC3] mt-20 font-extralight text-xl">
              Don’t worry. It’s just 404 page not found.
            </div>
          </div>
          {/* <img className="max-h-full w-full" src="images/error.png" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Error;
