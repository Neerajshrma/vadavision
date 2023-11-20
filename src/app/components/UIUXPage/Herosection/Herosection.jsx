import React from "react";
import Button from "../../common/Button";
import { HiArrowNarrowRight } from "react-icons/hi";
import RippleEffect from "../../common/RippleEffect";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="text-center responsive-width mobile-width px-40">
      <div className="mt-6 flex gap-3 justify-center items-center">
        <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="creative-idea text-base uppercase font-normal leading-[150%] text-[#A9AFC3]"
        >
          our services
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-[50px] hero-heading leading-[120%] font-bold text-white">
          UI/UX Design Services
        </h1>
        <p className="mt-6 text-white font-normal text-base leading-[40px]">
          We create user-friendly designs for websites and apps, making digital
          experiences seamless and enjoyable for everyone. Your go-to partner
          for enhancing online interactions
        </p>
      </div>
      <Link href="/top-ui-ux-design-agency">

      <div className="mt-8 bg-[#DD4242]  primary-color flex gap-2 items-center button-color-change justify-center w-60 mx-auto py-1.5 px-2">
        
        <RippleEffect>
            <div>
              <Button
                fontFamily="Poppins"
                fontWeight="400"
                Color="#FFFFFF"
                fontSize="12px"
                backgroundColor=""
                letterSpacing="0.06em"
                name="Request Quotation"
              />
            </div>
        </RippleEffect>

        <div className="text-white">
          <HiArrowNarrowRight size={18} />
        </div>
      </div>
      </Link>

    </div>
  );
};

export default Herosection;
