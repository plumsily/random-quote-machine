import React from "react";
import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: "lightblue",
      error: null,
      isLoaded: false,
      items: [],
      numQuotes: 0,
      quote: "test",
      author: "test",
    };
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            numQuotes: result.length,
          });
          this.getQuotes(result, result.length);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  getQuotes = (quotes, number) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let newColor = "#" + randomColor;
    document.body.style.background = newColor;
    let randomQuote = Math.floor(Math.random() * number);

    this.setState({
      buttonColor: newColor,
      quote: quotes[randomQuote].text,
      author: quotes[randomQuote].author,
    });
  };

  render() {
    const items = this.state.items;
    const numQuotes = this.state.numQuotes;

    return (
      <Card
        style={{ width: "500px" }}
        id="quote-box"
        className="shadow  px-2 py-2"
      >
        {/* <Card.Header className="text-center">Quote of the day</Card.Header> */}
        <Card.Body>
          <figure>
            <blockquote className="blockquote mb-3">
              <p id="text">{this.state.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer text-end mb-5">
              by <cite id="author">{this.state.author}</cite>
            </figcaption>
          </figure>
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            className="btn btn-info"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <Button
            id="new-quote"
            className="float-end"
            onClick={() => this.getQuotes(items, numQuotes)}
            style={{ background: this.state.buttonColor }}
          >
            Next Quote
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
