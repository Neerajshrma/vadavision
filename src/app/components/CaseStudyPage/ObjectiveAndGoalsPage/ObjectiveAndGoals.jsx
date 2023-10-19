import React from "react";

const ObjectiveAndGoals = () => {
  return (
    <div className="px-4 pt-10 lg:px-40 content-responsive">
      <div style={{ fontFamily: "Montserrat" }}>
        <div className="text-3xl font-bold pb-6 px-4 lg:px-20">
          <span>Objectives & Goals</span>
        </div>
        <div className="flex flex-col lg:flex-row px-4 lg:px-20 pb-8">
          <div className="flex items-start lg:w-1/2 mb-4">
            <div className="w-2 h-2 mt-1 rounded-full bg-black"></div>
            <div className="pl-3">
              <p className="text-sm lg:text-base">
                The objective of a camera 360 rotation app is to create a
                user-friendly and efficient tool for capturing, creating, and
                sharing immersive 360-degree photos and videos.
              </p>
            </div>
          </div>
          <div className="flex items-start lg:w-1/2">
            <div className="w-2 h-2 mt-1 rounded-full bg-black"></div>
            <div className="pl-3">
              <p className="text-sm lg:text-base">
                The goals for a camera 360 rotation app should align with the
                overall objectives and be specific, measurable, achievable,
                relevant, and time-bound (SMART).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveAndGoals;
