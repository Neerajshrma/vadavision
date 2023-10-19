import React from "react";

const MajorScreen = () => {
  return (
    <div className="px-4 pt-10 md:px-20">
      <div style={{ fontFamily: "Montserrat" }}>
        <div className="text-3xl font-bold pt-8 text-center">
          Major Screens
        </div>
        <div className="space-y-6">
          <div className="text-2xl font-bold pt-10 text-center">Home Screen</div>
          <div className="flex justify-center items-center">
            <img
              src="images/homescreen.png"
              alt=""
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </div>

          <div className="text-2xl font-bold pt-6 text-center">Profile</div>
          <div className="flex justify-center items-center">
            <img
              src="images/profile.png"
              alt=""
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </div>

          <div className="text-2xl font-bold pt-6 text-center">Gallery</div>
          <div className="flex justify-center items-center">
            <img
              src="images/gallery.png"
              alt=""
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorScreen;
