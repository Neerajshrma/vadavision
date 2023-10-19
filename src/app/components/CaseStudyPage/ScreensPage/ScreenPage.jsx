
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
            <img src="images/iPhone1.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Onboarding</h1>
          </div>
          <div className="flex flex-col pt-6">
            <img src="images/iPhone2.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Login</h1>
          </div>
          <div className="flex flex-col pt-6">
            <img src="images/iPhone3.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Personal Details</h1>
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          {" "}
         
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone4.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Additional Details</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone5.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">OTP Verification</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone6.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Home </h1>
            {" "}
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          {" "}
         
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone7.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Events</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone8.png" alt="" style={{ height: "450px" }} />
            <h1 className="flex justify-center pt-6">Scan QR</h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone9.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6">Video Editor </h1>
            {" "}
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          {" "}
         
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone10.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"></h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone11.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"></h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"> </h1>
            {" "}
          </div>
        </div>

        <div className="flex flex-row flex justify-around flex-wrap">
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone13.png" alt="" style={{ height: "450px" }} />
             <h1 className="flex justify-center pt-6"></h1>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col pt-6">
            {" "}
            <img src="images/iPhone12.png" alt="" style={{ height: "450px" }} />{" "}
            <h1 className="flex justify-center pt-6">Driver Details</h1>
          </div>
        </div>
      </div>
    </>
  );

};

export default ScreenPage;
