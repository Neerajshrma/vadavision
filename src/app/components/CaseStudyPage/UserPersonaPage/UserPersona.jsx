import React from "react";
import Image from "next/image";
import dp from "../../../../../public/images/display_pic.png";
import age from "../../../../../public/images/age.png";
import location from "../../../../../public/images/location.png";

import columm from "../../../../../public/images/columm.png";
import line7 from "../../../../../public/images/line7.png";
import triangle from "../../../../../public/images/triangle.png";
import bag from "../../../../../public/images/bag.png";
import hat from "../../../../../public/images/hat.png";

const UserPersona = () => {
  return (
    <>
      <div className="px-40 pb-20">
        <span className="text-4xl font-bold">User Persona</span>
      </div>

      <div className="flex flex-row px-40">
        <div className="w-[40%]">
          <div className="flex flex-col pl-10 pb-6 ">
            <div className="pl-6">
            <Image src={dp} alt="" />

            {/* <img
              src="images/display_pic.png"
              alt=""
              style={{ width: "100px", height: "100px",  }}
              className="rounded-full "
            /> */}
            </div>
            <span className="font-bold pt-6 pl-7">Ajay Kumar</span>
            <h3 className="text-[#188AEC] ">Community Manager</h3>
          </div>
          <span className="pt-6 font-bold">About</span>
          <div className="flex flex-row gap-6 pt-6  ">
            <div className="flex flex-row pr-10 gap-2 pt-2 ">
            <Image src={age} alt="" />

              {/* <img
                src="images/age.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              /> */}
              <span className="">35</span>
            </div>
            <div className="flex flex-row pr-10 gap-2">
            <Image src={location} alt="" />

              {/* <img
                src="images/location.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              /> */}
              New York
            </div>
          </div>
          <div className="flex flex-row   ">
            <div className="flex flex-row pr-10 gap-2 ">
            <Image src={hat} alt="" />

              {/* <img
                src="images/hat.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              /> */}
              <span className="">MBA</span>
            </div>
            <div className="flex flex-row  gap-2">
            <Image src={bag} alt="" />

              {/* <img
                src="images/bag.png"
                alt=""
                style={{ width: "20px", height: "20px", marginLeft: "8px" }}
              /> */}
              Employee
            </div>
          </div>
          <div className="pt-6 font-bold">
            <span className="text-xl">Maslow Pyramid</span>
            <div className="flex flex-row pt-6">
            <Image src={triangle} alt="" />

              {/* <img
                src="images/triangle.png"
                alt=""
                style={{ width: "120px", height: "250px", marginLeft: "8px" }}
              /> */}

              <div className="flex flex-col">
              <Image src={line7} alt="" />

                {/* <img
                  src="images/line7.png"
                  alt=""
                  style={{ width: "220px", height: "2px", marginLeft: "8px" }}
                /> */}
                <span className="font-normal py-3 pl-6">
                  Self Actualisation
                </span>
                <Image src={line7} alt="" />

                {/* <img
                  src="images/line7.png"
                  alt=""
                  style={{ width: "220px", height: "2px", marginLeft: "8px" }}
                /> */}
                <span className="font-normal bg-[#188AEC] text-white text-xl py-4 pl-6">
                  Esteem
                </span>{" "}
                <Image src={line7} alt="" />

                {/* <img
                  src="images/line7.png"
                  alt=""
                  style={{ width: "220px", height: "2px", marginLeft: "8px" }}
                /> */}
                <span className="font-normal py-3 pl-6">Love Belonging</span>{" "}
                <Image src={line7} alt="" />

                {/* <img
                  src="images/line7.png"
                  alt=""
                  style={{ width: "220px", height: "2px", marginLeft: "8px" }}
                /> */}
                <span className="font-normal py-3 pl-6">Safety</span>
                <Image src={line7} alt="" />

                {/* <img
                  src="images/line7.png"
                  alt=""
                  style={{ width: "220px", height: "2px", marginLeft: "8px" }}
                /> */}
                <span className="font-normal py-3 pl-6">Physiological</span>
                <Image src={line7} alt="" />

                {/* <img
                  src="images/line7.png"
                  alt=""
                  style={{ width: "220px", height: "2px", marginLeft: "8px" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <span className="font-bold text-xl">Description</span>
          <p>
            Ajay kumar is working in MNC. He have experience camera 360 app for
            the users . He had well experience using mobile application.{" "}
          </p>
          <h2 className="font-bold pt-6">A day in their life</h2>
          <div className="flex flex-row">
            <h3 className="bg-[#282D46] w-1 h-1 mt-2 "></h3>
            <span className="pl-2">Travel to office</span>
          </div>
          <div className="flex flex-row">
            <h3 className="bg-[#282D46] w-2 h-1 mt-2 "></h3>
            <span className="pl-2">
              Reach the office working on different platofrms and read the books
              for the business
            </span>
          </div>{" "}
          <div className="flex flex-row">
            <h3 className="bg-[#282D46] w-1 h-1 mt-2 "></h3>
            <span className="pl-2">
              Fimiliar with apps and use the daily internet{" "}
            </span>
          </div>
          <h2 className="font-bold pt-6">Pain points</h2>
          <div className="flex flex-row">
            <h3 className="bg-[#282D46] w-1 h-1 mt-2 "></h3>
            <span className="pl-2">Need to know the where the events</span>
          </div>
          <div className="flex flex-row pb-10">
            <h3 className="bg-[#282D46] w-2 h-1 mt-2 "></h3>
            <span className="pl-2">
              no more Quee for the camera 360 videos scan the QR code and get
              ready for 360
            </span>
          </div>{" "}
          <Image src={columm} alt="" />

          {/* <img
            src="images/columm.png"
            alt=""
            style={{ width: "40px", height: "42px", marginLeft: "8px" }}
          /> */}
          <p>
          It is very important for me to have Fast and easy connect with device and get the location.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserPersona;
