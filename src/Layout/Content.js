import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./Content.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Content = ({ data, setData, color, isShowing, clickTransition }) => {
  return (
    <div className="flex h-screen justify-center items-center absolute top-0 left-0">
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
          className="text-6xl font-semibold mb-24 drop-shadow-md text-center leading-snug"
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
          className="text-3xl font-medium drop-shadow-md italic"
          style={{ color: color }}
        >
          - {data.author}
        </Transition>
      </div>
      <div className="absolute bottom-20">
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
            className="w-10 h-10 rounded-xl flex flex-row items-center justify-center"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <button
            onClick={() => {
              clickTransition();
            }}
            className="w-32 h-10 rounded-xl font-medium"
          >
            Next Quote
          </button>
        </Transition>
      </div>
    </div>
  );
};

export default Content;
