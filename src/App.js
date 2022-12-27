import React, { useEffect, useState } from "react";
import "./index.css";
import Chucky from "./assets/hero.png";

const API_URL = "https://api.chucknorris.io/jokes/random";

function App() {
  const [jokes, setJokes] = useState("");

  function generateJokeHandler() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.value);
      });
  }

  useEffect(() => {
    generateJokeHandler();
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>Chuck Norris joke generator</h1>
        <img src={Chucky} alt="One and only" />
        <section>
          <p>{jokes}</p>
          <button onClick={generateJokeHandler}>Generate joke</button>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
