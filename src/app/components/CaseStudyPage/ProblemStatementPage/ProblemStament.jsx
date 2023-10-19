import React from "react";

const ProblemStatement = () => {
  return (
    <div className="px-4 pt-10 lg:px-40 content-responsive">
      <div style={{ fontFamily: "Montserrat" }}>
        <div className="text-center text-3xl font-bold">
          Problem Statement
        </div>
        <div className="font-semibold ">
          <p className="text-sm lg:text-base xl:text-lg">
            Users are increasingly looking for immersive and interactive ways to
            capture and share their experiences through photos and videos. While
            panoramic photos and videos offer a wider perspective, the ability
            to capture a full 360-degree view of their surroundings remains a
            challenge for many. Existing 360-degree camera apps often lack
            user-friendly interfaces, precise control, and efficient stitching
            algorithms, making the process cumbersome and time-consuming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
