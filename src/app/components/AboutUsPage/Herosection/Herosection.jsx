import React from "react";

const Herosection = () => {
  return (
    <div className="text-center responsive-width mobile-width px-40">
      <div className="mt-20">
        <h1 className="text-4xl hero-heading leading-[120%] font-bold text-white">
          About Vadavision
        </h1>
        <p className="mt-8 text-white font-light text-sm leading-[40px] mx-auto min-w-[280px] w-10/12">
          Space is the collaboration hub that brings the right people,
          information, and tools together to get work done. From Fortune 100
          companies to corner markets, millions of people around the world use
          Slack to connect their teams, unify their systems, and drive their
          business forward.
        </p>
      </div>
      <div className="py-10">
        <img src="images/about-us.jpg" alt="" />
      </div>
    </div>
  );
};

export default Herosection;
