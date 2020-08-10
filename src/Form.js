import React, { setState, useState, Component } from "react";
import "regenerator-runtime/runtime";
import Results from "./Results";
import { render } from "react-dom";

var Pokedex = require("pokedex-promise-v2");
var MyPokedex = new Pokedex();
let pokemon = {};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    MyPokedex.getPokemonByName(this.state.value) // with Promise
      .then(function (response) {
        pokemon = response;
        console.log(state.value);
      })
      .catch(function (error) {
        console.log("There was an ERROR: ", error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="pokemonInput">
          <input
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleChange}
            id="pokemonInput"
            placeholder="Type in your Pokemon"
          />
        </label>
        <input type="submit" value="submit" />
        <Results pokemon={pokemon} />
      </form>
    );
  }
}

export default Form;
