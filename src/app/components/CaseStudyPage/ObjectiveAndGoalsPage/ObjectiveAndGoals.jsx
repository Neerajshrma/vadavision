import React from "react";

const ObjectiveAndGoals = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10"
      >
        <div className="text-3xl font-bold pb-10 px-20">
          <span>Objectives & Goals</span>
        </div>
        <div className="flex flex-row justify-between px-20 pb-16">
          <div className="flex flex-row">
            <div className="w-1 h-1 mt-2  rounded-full bg-black"></div>
            <div className="w-[50%] pl-3">
              <p>
                The objective of a camera 360 rotation app is to create a
                user-friendly and efficient tool for capturing, creating, and
                sharing immersive 360-degree photos and videos.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1 h-1 mt-2  rounded-full bg-black"></div>
            <div className="w-[60%] pl-3">
              <p>
                The goals for a camera 360 rotation app should align with the
                overall objectives and be specific, measurable, achievable,
                relevant, and time-bound (SMART).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ObjectiveAndGoals;
