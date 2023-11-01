import Button from "@/app/components/common/Button";
import React from "react";
import Image from "next/image";
import StandardInsight from "../../../../../../public/images/standardinsight.png";

const StandardInsights = () => {
  return (
    <div className="mt-10 bg-[#191C26] py-10 px-8 flex items-center gap-8 our-projects">
      <div className="">
        <div
          className="py-10 bg-no-repeat portfolio-img min-w-[400px] min-h-[330px] bg-cover"
          style={{ backgroundImage: "url(images/portfolio-bg.png)" }}
        >
          {/* <img
            className="mx-auto portfolio-img max-w-[370px]"
            src="/images/standardinsight.png"
            alt=""
          /> */}
                    <Image src={StandardInsight} alt="" />

        </div>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div className="uppercase Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3] ">
            Finance
          </div>
        </div>
        <div className="mt-3 inline-block border-[6px] border-white py-1 px-3">
          <h2
            className="text-white text-xl font-bold"
            style={{ fontFamily: "Inter", letterSpacing: "-0.24px" }}
          >
            STANDARD INSIGHTS
          </h2>
        </div>
        <div className="mt-3">
          <p className="Montserrat text-white text-sm leading-[140%] description">
            Our creative and professional agency has been developing products
            for 15 years. We are special.Our creative and professional agency
            has been
          </p>
        </div>
        <div className="mt-3">
          <span className="text-[#DD4242] Montserrat text-base font-semibold leading-[160%]">
            Platform
          </span>
          <span className="mt-1 block text-white Montserrat text-sm font-normal leading-[120%]">
            Andriod, Ios
          </span>
        </div>
        <div className="mt-3">
          <span className="text-[#DD4242] Montserrat text-base font-semibold leading-[160%]">
            Tech Used
          </span>
          <span className="mt-1 block text-white Montserrat text-sm font-normal leading-[120%]">
            Kotlin, Lavarel,Devops
          </span>
        </div>
        <div className="inline-block mt-3 border-[3px] border-[#14EFA5]">
          <Button
            fontFamily="Montserrat"
            fontWeight="400"
            padding="7px 14px"
            Color="#ffffff"
            fontSize="14px"
            name="View Case Study"
          />
        </div>
      </div>
    </div>
  );
};

export default StandardInsights;
