import React from "react";

const SendMessage = () => {
  return (
    <>
      <div >
        <div className="responsive-width pb-4 mobile-width pt-14 ">
          <div className="mt-10 flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="creative-idea text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]"
            >
              Contact Us
            </div>
          </div>
        </div>
        <div className="responsive-width mobile-width">
          <h1 className="text-5xl hero-heading leading-[120%] font-bold text-white  inline whitespace-nowrap  flex items-start ">
            Send a Message
          </h1>
        </div>

        <div className="mt-5 pb-10  responsive-width mobile-width">
          <p className="mt-4 text-[#A9AFC3] font-light text-sm  leading-[33px]">
            We always try to implement our creative ideas at the highest level.
            Tell us about your project and we will make it work.
          </p>
        </div>

        <div className="flex flex-row gap-6">
          <div className=" ">
            <input
              style={{ backgroundColor: "#141619" }}
              type="text"
              className="border-none borderless-input text-white "
              placeholder="Name"
            />
          </div>
          <div className="   ">
            <input
              style={{ backgroundColor: "#141619" }}
              type="email"
              className="border-none borderless-input text-white "
              placeholder="Email"
            />
          </div>
        </div>
        <div className="pt-6  ">
          <textarea
            style={{ backgroundColor: "#141619" }}
            placeholder="Message"
            id=""
            className="border-none borderless-input text-white"
            cols="54"
            rows="4"
          ></textarea>
        </div>

        <div className=" w-[35%] pt-6 pb-4 ">
          <button className="text-white rounded-full border-rose-600 border px-4 py-3   ">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
