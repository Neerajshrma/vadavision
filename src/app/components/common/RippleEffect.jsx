"use client";
import React, { useState } from "react";

const RippleEffect = ({ height, children, onClick }) => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget;
    const size = rippleContainer.offsetWidth;
    const rippleX =
      event.clientX - rippleContainer.getBoundingClientRect().left - size / 2;
    const rippleY =
      event.clientY - rippleContainer.getBoundingClientRect().top - size / 2;
    const newRipple = {
      key: Date.now(),
      style: {
        top: rippleY + "px",
        left: rippleX + "px",
        width: size + "px",
        height: size + "px",
      },
    };

    setRipples([...ripples, newRipple]);

    // Remove the ripple after a short delay (you can adjust the duration)
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 600);

    onClick && onClick(event);
  };

  return (
    <div
      style={{ height: height }}
      className="ripple-container"
      onClick={addRipple}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="ripple-effect"
          style={ripple.style}
        ></span>
      ))}
      {children}
    </div>
  );
};

export default RippleEffect;
