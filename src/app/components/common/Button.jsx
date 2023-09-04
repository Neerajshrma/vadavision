import React from "react";

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
      <button
        className="btn text-xl leading-[20px]"
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
    </div>
  );
};

export default Button;
