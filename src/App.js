import React from "react";
import { render } from "react-dom";
import Form from "./Form";
import Pokemon from "./Pokemon";
import { Router, Link } from "@reach/router";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <h1>Welcome To Pokepals</h1>
      <h2>All the pokemon information you need!</h2>
      <Form />
    </div>
  );
};
render(<App />, document.getElementById("root"));
