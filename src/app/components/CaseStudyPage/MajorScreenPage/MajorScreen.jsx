import React from "react";

const MajorScreen = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10"
      >
        <div className="text-3xl font-bold pt-14 pb-20">Major Screens </div>
        <div className="flex flex-col ">
          <h1 className="flex justify-center text-2xl font-bold pt-20">
            Home Screen
          </h1>

          <div class="flex justify-center items-center h-screen">
            <img
              src="images/homescreen.png"
              alt=""
              style={{ height: "550px" }}
            />
          </div>

          <h1 className="flex justify-center text-2xl font-bold pt-10">
            Profile
          </h1>

          <div class="flex justify-center items-center h-screen">
            <img src="images/profile.png" alt="" style={{ height: "550px" }} />
          </div>
               
          <h1 className="flex justify-center text-2xl font-bold pt-10">
          Gallery
          </h1>
          <div class="flex justify-center items-center h-screen">
            <img src="images/gallery.png" alt="" style={{ height: "550px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorScreen;
