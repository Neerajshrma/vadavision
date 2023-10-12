import React from "react";
import Button from "../../common/Button";
import Link from "next/link";

const ConsultUs = ({ backgroundColor, color }) => {
  return (
    <div>
      <div
        className="py-14 text-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <div>
          <h1
            className="text-5xl Montserrat font-bold leading-[130%] w-7/12 mx-auto consult-us-width"
            style={{ color: color }}
          >
            Consult with us for your business assistance.{" "}
          </h1>
        </div>
        <div className="mt-10">
          <Link href="/aboutus">
            <Button
              backgroundColor="#DD4242"
              fontFamily="Montserrat"
              fontWeight="500"
              padding="10px 20px"
              Color="#ffffff"
              fontSize="18px"
              name="Know More"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultUs;
