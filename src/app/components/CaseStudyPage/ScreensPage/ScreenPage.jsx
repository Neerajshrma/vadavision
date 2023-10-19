
import React from "react";

const ScreenPage = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-4 md:px-40 mobile-width pt-10"
      >
        <div className="text-3xl font-bold pb-16">Screens</div>
        <div className="flex flex-row flex justify-around flex-wrap">
          <div className="flex flex-col pt-6 responsive-screen">
            <img src="images/iphone1.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Onboarding</h1>
          </div>
          <div className="flex flex-col pt-6">
            <img src="images/iphone2.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Login</h1>
          </div>
          <div className="flex flex-col pt-6">
            <img src="images/iphone3.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Personal Details</h1>
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          {" "}
         
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone4.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Additional Details</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone5.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">OTP Verification</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone6.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Home </h1>
            {" "}
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          {" "}
         
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone7.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Events</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone8.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Scan QR</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone9.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Video Editor </h1>
            {" "}
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          {" "}
         
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone10.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"></h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone11.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"></h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"> </h1>
            {" "}
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone13.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"></h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iphone12.png" alt="" style={{ height: "450px" }} />{" "}
            <h1 className="flex justify-center pt-6">Driver Details</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenPage;
