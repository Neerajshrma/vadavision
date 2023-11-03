import React, { useState } from "react";

const Menu = ({ color, menuname, selected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative text-base font-normal leading-[120%] ${
        selected ? "selected" : ""
      } ${isHovered ? "hovered" : ""}`}
      style={{
        fontFamily: "Poppins",
        color: color,
        cursor: "pointer",
      }}
    >
      {menuname}
      <div className="selected-border" />
      <style jsx>{`
        .selected-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${selected ? "#dd4242" : "transparent"};
          margin-bottom: -5px;
          transition: background-color 0.5s ease;
        }

        .selected:hover .selected-border,
        .hovered .selected-border {
          background-color: #dd4242;
        }

        .selected {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Menu;
