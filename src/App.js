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

  const updateQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const result = await response.json();
      setIsLoaded(true);
      setData(result);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
      console.error(error);
      setData({ content: "Something went wrong" });
    }
  };

  useEffect(() => {
    updateQuote();
  }, []);

  useEffect(() => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  }, [data]);

  const clickTransition = () => {
    setIsShowing(false);
    setTimeout(() => {
      updateQuote();
    }, 600);
    setTimeout(() => {
      setIsShowing(true);
    }, 700);
  };

  return (
    <div className="flex justify-center">
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
