import React from "react";
import RippleEffect from "./RippleEffect";

const Button = ({
  backgroundColor,
  name,
  fontFamily,
  Color,
  fontSize,
  padding,
  fontWeight,
  letterSpacing,
}) => {
  return (
    <div>
      <RippleEffect>
        <button
          className="inline-block btn text-xl leading-[20px]"
          style={{
            backgroundColor: backgroundColor,
            color: Color,
            fontSize: fontSize,
            padding: padding,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            letterSpacing: letterSpacing,
          }}
        >
          {name}
        </button>
      </RippleEffect>
    </div>
  );
};

export default Button;
