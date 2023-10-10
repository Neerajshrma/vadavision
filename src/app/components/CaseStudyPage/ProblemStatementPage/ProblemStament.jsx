import React from "react";

const ProblemStament = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10"
      >
        <div className="flex justify-center text-3xl font-bold	">
          Problem Statement
        </div>
        <div className="text-center flex justify-center  item-center font-semibold">
          <p className=" ">
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
    </>
  );
};

export default ProblemStament;
