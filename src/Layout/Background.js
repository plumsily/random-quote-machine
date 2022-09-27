import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./Background.css";

const Background = ({ color, isShowing }) => {
  function hexToRgb(hex) {
    hex = hex.replace(/[^0-9A-F]/gi, "");
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
  }

  const stars1 = [];
  const stars2 = [];

  for (let i = 0; i < 3; i++) {
    stars1.push(
      <div
        className={`stars1 absolute rounded-full`}
        style={{
          top: `${Math.floor(Math.random() * 1500)}px`,
          left: `${Math.floor(Math.random() * 2500)}px`,
          background: `rgba(${hexToRgb(color)},0.8)`,
          filter: "hue-rotate(90deg) blur(20px)",
        }}
      ></div>
    );
  }
  for (let i = 0; i < 3; i++) {
    stars2.push(
      <div
        className={`stars2 absolute rounded-full opacity-80`}
        style={{
          top: `${Math.floor(Math.random() * 1500)}px`,
          left: `${Math.floor(Math.random() * 2500)}px`,
          background: `rgba(${hexToRgb(color)},0.6)`,
          filter: "hue-rotate(60deg) blur(10px)",
        }}
      ></div>
    );
  }
  // const circleStyle = {
  //   background: `linear-gradient(to top,${color},transparent)`,
  //   filter: "hue-rotate(60deg)",
  // };
  return (
    <Transition
      appear={true}
      show={isShowing}
      enter="transition-opacity duration-700 ease-in"
      enterFrom="opacity-0"
      enterTo="opacity-50"
      leave="transition-opacity duration-500 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative top-0 left-0 h-screen w-screen">
        {stars1}
        {stars2}
      </div>
    </Transition>

    // <div key={color} className="background-container">
    //   <div className="circle-background">
    //     <div className="circle-box">
    //       <div className="circle-container circle1">
    //         <Transition
    //           appear={true}
    //           show={isShowing}
    //           enter="transition-opacity duration-700 ease-in"
    //           enterFrom="opacity-0"
    //           enterTo="opacity-50"
    //           leave="transition-opacity duration-500 ease-out"
    //           leaveFrom="opacity-100"
    //           leaveTo="opacity-0"
    //           className="circles"
    //           style={circleStyle}
    //         ></Transition>
    //       </div>
    //       <div className="circle-container circle2">
    //         <Transition
    //           appear={true}
    //           show={isShowing}
    //           enter="transition-opacity duration-700 ease-in"
    //           enterFrom="opacity-0"
    //           enterTo="opacity-50"
    //           leave="transition-opacity duration-500 ease-out"
    //           leaveFrom="opacity-100"
    //           leaveTo="opacity-0"
    //           className="circles"
    //           style={circleStyle}
    //         ></Transition>
    //       </div>
    //       <div className="circle-container circle3">
    //         <Transition
    //           appear={true}
    //           show={isShowing}
    //           enter="transition-opacity duration-700 ease-in"
    //           enterFrom="opacity-0"
    //           enterTo="opacity-50"
    //           leave="transition-opacity duration-500 ease-out"
    //           leaveFrom="opacity-100"
    //           leaveTo="opacity-0"
    //           className="circles"
    //           style={circleStyle}
    //         ></Transition>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Background;
