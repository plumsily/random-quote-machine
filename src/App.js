import React, { useState, useEffect } from "react";
import "./App.css";
import Background from "./Layout/Background";
import Content from "./Layout/Content";

const App = () => {
  const [color, setColor] = useState("00FFFFFF");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShowing, setIsShowing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isSwitch, setIsSwitch] = useState(false);

  const updateQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const result = await response.json();
      setIsLoaded(true);
      setIsVisible(true);
      setData(result);
    } catch (error) {
      setIsLoaded(true);
      setIsVisible(true);
      setError(error);
      console.error(error);
      setData({ content: "Something went wrong" });
    }
  };

  useEffect(() => {
    updateQuote();
    const handleBlur = () => {
      setIsVisible(false);
      setIsSwitch(true);
    };
    const handleFocus = () => {
      setIsVisible(true);
    };
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  useEffect(() => {
    if (isVisible === true && isSwitch === true) {
      clickTransition();
      setIsSwitch(false);
    }
  }, [isVisible]);

  useEffect(() => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    const timer = setTimeout(() => {
      clickTransition();
    }, 29400);
    return () => clearTimeout(timer);
  }, [data]);

  const clickTransition = () => {
    setIsShowing(false);
    const updateTimer = setTimeout(() => {
      updateQuote();
    }, 600);
    const appearTimer = setTimeout(() => {
      setIsShowing(true);
    }, 700);
    return () => {
      clearTimeout(updateTimer);
      clearTimeout(appearTimer);
    };
  };

  return (
    <div className="flex justify-center relative overflow-hidden">
      <Background color={color} isShowing={isShowing} />
      <Content
        data={data}
        color={color}
        isShowing={isShowing}
        clickTransition={clickTransition}
      />
      <div className="footer absolute bottom-12 text-xs text-gray-500">
        by{" "}
        <a className="link" href="https://github.com/plumsily">
          plumsily
        </a>
      </div>
    </div>
  );
};

export default App;
