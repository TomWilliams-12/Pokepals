import React from "react";
import { render } from "react-dom";
import Form from "./Form";

const App = () => {
  return (
    <header>
      <h1>Welcome To Pokepals</h1>
      <h2>All the pokemon information you need!</h2>
      <Form />
    </header>
  );
};
render(<App />, document.getElementById("root"));
