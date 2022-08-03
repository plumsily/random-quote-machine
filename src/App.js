import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [color, setColor] = useState("00FFFFFF");
  const [items, setItems] = useState([]);
  const [numQuotes, setNumQuotes] = useState(0);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuotes = (quotes, number) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let newColor = "#" + randomColor;
    let randomQuote = Math.floor(Math.random() * number);
    let newQuote = quotes[randomQuote].text;
    let newAuthor = quotes[randomQuote].author;

    document.body.style.background = newColor;
    setColor(newColor);
    setQuote(newQuote);
    setAuthor(newAuthor !== null ? newAuthor : "unknown");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://type.fit/api/quotes");
      const result = await res.json();
      setIsLoaded(true);
      setItems(result);
      setNumQuotes(result.length);
      getQuotes(result, result.length);
    };
    fetchData().catch((error) => {
      setIsLoaded(true);
      setError(error);
      console.log("fetch failed", error);
    });
  }, []);

  useEffect(() => {
    //timeout effect?
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-screen mx-auto flex flex-column items-center">
        <div className="text-7xl font-semibold text-white/60 mb-5">
          "Here is the quote!"
        </div>
        <div className="text-2xl font-medium text-white/60">by Justin Lee</div>
      </div>
    </div>
    // <Card
    //   style={{ width: "500px" }}
    //   id="quote-box"
    //   className="shadow-lg  px-2 py-2"
    // >
    //   <Card.Body>
    //     <figure>
    //       <blockquote className="blockquote mb-3">
    //         <p id="text">{quote}</p>
    //       </blockquote>
    //       <figcaption className="blockquote-footer text-end mb-5">
    //         by <cite id="author">{author}</cite>
    //       </figcaption>
    //     </figure>
    //     <a
    //       id="tweet-quote"
    //       href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}"%20by%20${author}`}
    //       className="btn btn-info"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       <FontAwesomeIcon icon={faTwitter} />
    //     </a>
    //     <Button
    //       id="new-quote"
    //       className="float-end"
    //       onClick={() => getQuotes(items, numQuotes)}
    //       style={{ background: color }}
    //     >
    //       Next Quote
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
};

export default App;
