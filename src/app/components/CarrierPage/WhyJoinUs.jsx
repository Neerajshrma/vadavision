import React from "react";

const WhyJoinUs = () => {
  return (
    <>
      <div className="mt-20 px-40 responsive-width mobile-width">
        <div className="">
          <h1 className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
            Why Join Us
          </h1>
          <p className="pt-4 w-[80%] pb-10 text-white text-sm leading-[28px]">
            Space is the collaboration hub that brings the right people,
            information, and tools together to get work done. From Fortune 100
            companies to corner markets, millions of people around the world use
            Slack to connect their teams, unify their systems, and drive their
            business forward.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-row flex-wrap gap-4">
            <div className="">
              <img
                src="images/second.png"
                alt=""
                style={{
                  height: "350px",
                  width: "500px",
                }}
              />
            </div>
            <div className="">
              <img
                src="images/third.png"
                alt=""
                style={{
                  height: "350px",
                  width: "250px",
                }}
              />
            </div>
            <div className="">
              <img
                src="images/fourth.png"
                alt=""
                style={{
                  height: "350px",
                  width: "250px",
                }}
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            <div>
              <img
                src="images/fifth.png"
                alt=""
                style={{
                  height: "350px",
                  width: "250px",
                }}
              />
            </div>
            <div className="">
              <img
                src="images/first.png"
                alt=""
                style={{
                  height: "350px",
                  width: "250px",
                }}
              />
            </div>
            <div className="">
              <img
                src="images/fifth.png"
                alt=""
                style={{
                  height: "350px",
                  width: "500px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyJoinUs;
