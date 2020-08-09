import React from "react";
import { render } from "react-dom";
import Form from "./Form";
import Pokemon from "./Pokemon";
import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <header>
      <Link to="/">
        <h1>Welcome To Pokepals</h1>
      </Link>
      <h2>All the pokemon information you need!</h2>
      <Router>
        <Form path="/" />
      </Router>
    </header>
  );
};
render(<App />, document.getElementById("root"));
