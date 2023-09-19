import React from "react";
import RecentPosts from "./RecentPosts";
import Sliders from "./Slider";

const TechStack = () => {
  return (
    <div
      className="bg-[#111319] py-10 px-40 responsive-width bg-contain bg-no-repeat bg-right"
      style={{ backgroundImage: "url(images/bg-object5.png)" }}
    >
      <div className="">
        <div className="flex gap-3 items-center">
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div className="uppercase Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3] ">
            recent posts
          </div>
        </div>
        <div className="mt-4">
          <h1 className="Montserrat capitalize text-white text-5xl font-bold heading leading-[110%]">
            Tech Stack
          </h1>
        </div>
        <div className="w-6/12 mt-4 description">
          <p className="Montserrat text-[#A9AFC3] text-lg leading-[140%] description">
            You may be interested in our technologies. We want to share more
            helpful infomation with you about our digital life and methods.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <RecentPosts />
      </div>
      <div>
        <Sliders />
      </div>
    </div>
  );
};

export default TechStack;