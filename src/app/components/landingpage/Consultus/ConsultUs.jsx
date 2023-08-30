import React from "react";
import Button from "../../common/Button";

const ConsultUs = ({ backgroundColor, color }) => {
  return (
    <div>
      <div
        className="py-14 text-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <div>
          <h1
            className="text-5xl Montserrat font-bold leading-[130%] w-7/12 mx-auto"
            style={{ color: color }}
          >
            Consult with us for any help in your business
          </h1>
        </div>
        <div className="mt-10">
          <Button
            backgroundColor="#DD4242"
            fontFamily="Montserrat"
            fontWeight="500"
            padding="10px 20px"
            Color="#ffffff"
            fontSize="18px"
            name="Know More"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultUs;
