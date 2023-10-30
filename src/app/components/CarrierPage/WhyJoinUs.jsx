import React from "react";

const WhyJoinUs = () => {
  return (
    <>
      <div className="mt-20 px-40 responsive-width">
        <div className="">
          <h1 className="Montserrat text-white text-4xl font-bold heading leading-[130%]">
            Why pick Vadavision for your professional journey?{" "}
          </h1>
          <p className="pt-4 w-[80%] pb-10 text-white text-sm leading-[28px] para-responsive">
            At Vadavision, we prioritize our employees voices, valuing their
            input before giving feedback. Our work setup is incredibly flexible,
            allowing our team to work remotely in diverse environments, from the
            tranquil mountains to the serene beaches, and even the comfort of
            their own homes. We understand the importance of work-life balance,
            offering flexible working hours that cater to individual preferences
            and lifestyles.We work together as a team and help each other grow.
            We believe in learning always, and we support your career
            development. We care about your well-being, not just at work, but in
            your personal life too. At Vadavision, you can have a satisfying job
            where you are valued, and your skills are nurtured. Come join us for
            a great career journey!
          </p>
        </div>
        <div className="space-y-4">
          <div className="">
            <img
              src="images/gather.png"
              alt=""
              style={{
                height: "350px",
                width: "500px",
              }}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            <div className="">
              <img
                src="images/gather.png"
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
