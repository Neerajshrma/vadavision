import React from "react";
import { TbSend } from "react-icons/tb";
import RippleEffect from "../../common/RippleEffect";
import Button from "../../common/Button";

const SubscribeUs = () => {
  return (
    <div className="flex flex-wrap subscribe-us">
      <div className="w-6/12 bg-[#191C26] full-width-responsive px-40 responsive-width py-20">
        <div className="flex gap-3 items-center">
          <div className="bg-[#A9AFC3] w-[50px] h-[1px]"></div>
          <div className="Montserrat text-sm font-normal leading-[150%] text-[#A9AFC3]">
            newsletter
          </div>
        </div>
        <div className="mt-4">
          <h1 className="Montserrat capitallize text-white text-5xl font-bold leading-[110%] heading">
            be always in touch{" "}
            <span className="inline-block w-3 h-3 ml-[-12px] bg-[#DD4242] rounded-full"></span>
          </h1>
        </div>
        <div className="mt-5">
          <p className="Montserrat text-[#A9AFC3] text-base font-normal leading-[170%] description">
            We are grateful to know you are interested in our content and
            services. Subscribe
          </p>
        </div>
        <div className="flex items-center gap-8 mt-5">
          <input
            className="subs-input text-white border-b border-[#3A3F50] outline-none p-1"
            type="email"
            placeholder="Email"
          />
          <div className="overflow-hidden cursor-pointer rounded-full bg-[#DD4242]">
            <RippleEffect>
              <button className="p-3">
                <span className="text-white">
                  <TbSend size="20px" />
                </span>
              </button>
            </RippleEffect>
          </div>
        </div>
      </div>
      <div
        className="full-width-responsive w-6/12 bg-cover"
        style={{
          backgroundImage: "url(images/team.jpg)",
          fontFamily: "Montserrat",
        }}
      >
        <div className="bg-subscribe-us min-h-[450px]">
          <div className="py-14 px-12">
            <div className="flex gap-4 items-center">
              <img
                className="rounded-full h-12 w-12"
                src="images/img.jpg"
                alt=""
              />
              <div>
                <p className="text-white text-sm font-semibold">
                  Katerina Wilson
                </p>
                <p className="mt-1 text-xs font-normal text-[#A9AFC3]">
                  CEO at Vadavision
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url(images/icon-quote.png)",
                backgroundPosition: "right bottom",
              }}
              className="w-[300px] pt-10 pb-20 text-base text-white font-normal bg-no-repeat bg-auto"
            >
              We never give up. Сhallenges make us stronger and more
              professional. Keep in mind. Beware
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
