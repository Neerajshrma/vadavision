import React from "react";
import Button from "../../common/Button";
import Link from "next/link";
const ConsultWithUs = () => {
  return (
    <div className="bg-black px-40 responsive-width py-20">
      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="w-7/12 full-width-responsive">
          <h1 className="Montserrat font-bold leading-[130%] text-4xl text-white consult-us-heading">
            Consult with us for your business assistance.{" "}
          </h1>
        </div>
        <div className="w-4/12 full-width-responsive">
          <div className="flex border-l border-[#DD4242] consult-btn">
            <div className="border-l-2 border-[#DD4242] h-14 consult-btn"></div>
            <p className="Montserrat font-medium leading-[22px] pl-8 consult-btn text-basi text-white description">
              Looking for skilled and reliable professionals who understand your
              challenges? Reach out; we{"'"}d love to chat and assist you.
            </p>
          </div>
          <div className="pt-10 h-16 border-l border-[#DD4242] consult-btn">
            <div className="pl-8 consult-btn">
              <Link href="/contactus">
                <Button
                  fontFamily="Poppins"
                  fontWeight="500"
                  padding="10px 22px"
                  Color="#FFFFFF"
                  fontSize="16px"
                  backgroundColor="#DD4242"
                  name="Consult with us"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultWithUs;
