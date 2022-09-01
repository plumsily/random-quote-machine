import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./Background.css";

const Background = ({ color, isShowing }) => {
  const circleStyle = {
    background: `linear-gradient(to top,${color},transparent)`,
    filter: "hue-rotate(60deg)",
  };
  return (
    <div key={color} className="background-container">
      <div className="circle-background">
        <div className="circle-box">
          <div className="circle-container circle1">
            <Transition
              appear={true}
              show={isShowing}
              enter="transition-opacity duration-700 ease-in"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition-opacity duration-500 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="circles"
              style={circleStyle}
            ></Transition>
          </div>
          <div className="circle-container circle2">
            <Transition
              appear={true}
              show={isShowing}
              enter="transition-opacity duration-700 ease-in"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition-opacity duration-500 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="circles"
              style={circleStyle}
            ></Transition>
          </div>
          <div className="circle-container circle3">
            <Transition
              appear={true}
              show={isShowing}
              enter="transition-opacity duration-700 ease-in"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition-opacity duration-500 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="circles"
              style={circleStyle}
            ></Transition>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Background;
