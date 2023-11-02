import React, { useState } from "react";

const Menu = ({ color, menuname, onClick }) => {
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
      className="relative text-base font-normal leading-[120%]"
      style={{
        fontFamily: "Poppins",
        color: color,
        cursor: "pointer",
      }}
    >
      {menuname}
      <div className={`hover-border ${isHovered ? "hovered" : ""}`} />
      <style jsx>{`
        .hover-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: transparent;
          margin-bottom: -5px;
          transition: background-color 0.5s ease;
        }

        .hover-border.hovered {
          background-color: #dd4242;
        }
      `}</style>
    </div>
  );
};

export default Menu;
