import React from "react";

const Menu = ({ color, menuname }) => {
  return (
    <div>
      <div
        style={{ fontFamily: "Poppins", color: color }}
        className="text-base font-normal leading-[120%]"
      >
        {menuname}
      </div>
    </div>
  );
};

export default Menu;
