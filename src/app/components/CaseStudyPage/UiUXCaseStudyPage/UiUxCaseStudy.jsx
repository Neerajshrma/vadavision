import React from "react";
import Button from "../../common/Button";
import Image from "next/image";
import group from "../../../../../public/images/group_83.png";
const UiUxCaseStudy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center p-8 md:p-16">
        <div className="text-5xl font-bold">
          <span>Camera 360</span>
        </div>
        <div className="pt-4 md:pt-8">
          <Button
            color="#282D46"
            backgroundColor="#F6FAFE"
            name="UX Case Study"
          />
        </div>
        <div className="text-5xl font-bold pt-4 md:pt-8">
          <span className="space-y-6">UX Case Study<br />Camera 360</span>
        </div>
      </div>

      <div className="flex justify-center">
        {/* <img
          src="images/group_83.png"
          alt=""
          style={{ height: "auto", maxWidth: "100%" }}
        /> */}
                  <Image src={group} alt="" />

      </div>
    </div>
  );
};

export default UiUxCaseStudy;
