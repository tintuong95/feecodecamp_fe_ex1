import logo from "./logo.svg";
import "./App.css";
import Jquery from "jquery";
import { useEffect, useState } from "react";
import listColor from "./list-color";
import quote from "./quote";

function App() {
  const [numOne, setNumOne] = useState();
  const [numTwo, setNumTwo] = useState();
  const changeColor = (condition = false) => {
    const num = randomNumber(1, 15);
    const numTwo = randomNumber(1, 5);
    Jquery("body,#new-quote,#social a").css({
      background: listColor[num],
      transition: "all 3s",
    });
    Jquery("#text,#author").css({
      color: listColor[num],
      transition: "all 3s",
    });
    if (!condition) {
      Jquery("#text,#author").css({
        opacity: 0,
        transition: "all 3s",
      });
    }

    setTimeout(function () {
      if (!condition) {
        Jquery("#text").text(quote[numTwo].text);
        Jquery("#author").text(quote[numTwo].author);
      }
      Jquery("#text,#author").css({
        opacity: 100,
        transition: "all 3s",
      });
    }, 3000);
  };

  const randomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start) + start);
  };

  useEffect(() => {
    changeColor(true);
  }, []);

  useEffect(() => {
    setNumOne(randomNumber(1, 15));
    setNumTwo(randomNumber(1, 5));
  }, []);
  return (
    <div className="App">
      <div id="quote-box">
        <div id="quote-box-child">
          <div id="text">{quote[numTwo]?.text}</div>
          <div id="author" className="my-5">
            {quote[numTwo]?.author}
          </div>

          <div id="social">
            <div>
              <a href="twitter.com/intent/tweet" id="tweet-quote">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#1">
                <i className="fa fa-tumblr"></i>
              </a>
            </div>
            <button
              id="new-quote"
              onClick={() => {
                changeColor(false);
              }}
            >
              New quote
            </button>
          </div>
        </div>
        <p id="creator">by hezag </p>
      </div>
    </div>
  );
}

export default App;
