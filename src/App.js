import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
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
    setAuthor(newAuthor);
  };

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setNumQuotes(result.length);
          getQuotes(result, result.length);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <Card
      style={{ width: "500px" }}
      id="quote-box"
      className="shadow-lg  px-2 py-2"
    >
      <Card.Body>
        <figure>
          <blockquote className="blockquote mb-3">
            <p id="text">{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer text-end mb-5">
            by <cite id="author">{author}</cite>
          </figcaption>
        </figure>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}"%20by%20${author}`}
          className="btn btn-info"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <Button
          id="new-quote"
          className="float-end"
          onClick={() => getQuotes(items, numQuotes)}
          style={{ background: color }}
        >
          Next Quote
        </Button>
      </Card.Body>
    </Card>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "00FFFFFF",
//       error: null,
//       isLoaded: false,
//       items: [],
//       numQuotes: 0,
//       quote: "test",
//       author: "test",
//     };
//   }

//   componentDidMount() {
//     fetch("https://type.fit/api/quotes")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result,
//             numQuotes: result.length,
//           });
//           this.getQuotes(result, result.length);
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }

//   getQuotes = (quotes, number) => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     const newColor = "#" + randomColor;

//     document.body.style.background = newColor;

//     const randomQuote = Math.floor(Math.random() * number);
//     const newQuote = quotes[randomQuote].text;
//     const newAuthor = quotes[randomQuote].author;

//     this.setState({
//       color: newColor,
//       quote: newQuote,
//       author: newAuthor !== null ? newAuthor : "unknown",
//     });
//   };

//   render() {
//     const items = this.state.items;
//     const numQuotes = this.state.numQuotes;

//     return (
//       <Card
//         style={{ width: "500px" }}
//         id="quote-box"
//         className="shadow-lg  px-2 py-2"
//       >
//         <Card.Body>
//           <figure>
//             <blockquote className="blockquote mb-3">
//               <p id="text">{this.state.quote}</p>
//             </blockquote>
//             <figcaption className="blockquote-footer text-end mb-5">
//               by <cite id="author">{this.state.author}</cite>
//             </figcaption>
//           </figure>
//           <a
//             id="tweet-quote"
//             href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${this.state.quote}"%20by%20${this.state.author}`}
//             className="btn btn-info"
//             rel="noreferrer"
//             target="_blank"
//           >
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <Button
//             id="new-quote"
//             className="float-end"
//             onClick={() => this.getQuotes(items, numQuotes)}
//             style={{ background: this.state.color }}
//           >
//             Next Quote
//           </Button>
//         </Card.Body>
//       </Card>
//     );
//   }
// }

export default App;
