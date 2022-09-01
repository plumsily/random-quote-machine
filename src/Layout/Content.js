import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./Content.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Content = ({ data, color, isShowing, clickTransition }) => {
  return (
    <div
      id="quote-box"
      className="flex h-screen w-11/12 absolute justify-center items-center"
    >
      <div className="w-screen px-40 mx-auto flex flex-column items-center">
        <Transition
          id="text"
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-700 ease-in"
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
          id="author"
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
      <div className="absolute bottom-24">
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
            id="new-quote"
            onClick={() => {
              clickTransition();
            }}
            className="relative w-32 h-10 rounded-xl font-medium"
          >
            <span className="button-text">Next Quote</span>
            <div className="loading-bar absolute top-0 h-full w-32 r-0 rounded-xl"></div>
          </button>
        </Transition>
      </div>
    </div>
  );
};

export default Content;
