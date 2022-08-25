import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [color, setColor] = useState("00FFFFFF");
  const [data, setData] = useState([]);
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

  useEffect(() => {
    //timeout effect?
  });

  const clickTransition = () => {
    setIsShowing(false);
    setTimeout(() => {
      updateQuote();
    }, 550);
    setTimeout(() => {
      setIsShowing(true);
    }, 650);
  };

  return (
    <div className="flex h-screen justify-center items-center relative">
      <div className="w-screen px-40 mx-auto flex flex-column items-center">
        <Transition
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-500 ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="text-6xl font-semibold mb-5 drop-shadow-md text-center leading-snug"
          style={{ color: color }}
        >
          "{data.content}"
        </Transition>
        <Transition
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-700 ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="text-3xl font-medium mb-5 drop-shadow-md italic"
          style={{ color: color }}
        >
          - {data.author}
        </Transition>
      </div>
      <div className="absolute bottom-16">
        <Transition
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-1000 ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="flex flex-row items-center justify-items-center gap-x-3"
          style={{ color: color }}
        >
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${data.content}"%20by%20${data.author}`}
            className="w-10 h-10 rounded-xl opacity-80 backdrop-blur flex flex-row items-center justify-center"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <button
            onClick={() => {
              clickTransition();
            }}
            className="w-32 h-10 rounded-xl opacity-80 backdrop-blur font-medium"
          >
            Next Quote
          </button>
        </Transition>
      </div>
    </div>
  );
};

export default App;
