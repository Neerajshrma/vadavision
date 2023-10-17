import React from "react";

const Herosection = () => {
  return (
    <div className="text-center responsive-width mobile-width px-40">
      <div className="mt-20">
        <h1 className="text-4xl hero-heading leading-[120%] font-bold text-white">
          About us
        </h1>
        <p className="mt-8 text-white font-light text-sm leading-[40px] mx-auto min-w-[280px] mobile-full-width w-10/12">
          At Vadavision, we chose the word 'Vada' to represent trust,
          reliability, and integrity in our services. It signifies the strong
          foundation of trust we build with our clients. 'Vision' embodies
          innovation, creativity, and forward-thinking. Together, these words
          symbolize our commitment to delivering dependable, innovative
          solutions for our clients, ensuring both trustworthiness and
          creativity in our work.
        </p>
      </div>
      <div className="py-10">
        <img src="images/about-us.jpg" alt="" />
      </div>
    </div>
  );
};

export default Herosection;
