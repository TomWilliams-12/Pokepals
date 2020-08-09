import React from "react";
import "regenerator-runtime/runtime";

var Pokedex = require("pokedex-promise-v2");
var MyPokedex = new Pokedex();

const Form = () => {
  let pokemon = {};

  function getPokemon(pokemonInput) {
    MyPokedex.getPokemonByName(pokemonInput) // with Promise
      .then(function (response) {
        pokemon = response;
        console.log(pokemon);
      })
      .catch(function (error) {
        console.log("There was an ERROR: ", error);
      });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let pokemon = document.getElementById("pokemonInput").value;
        getPokemon(pokemon);
      }}
    >
      <label htmlFor="pokemonInput">
        <input id="pokemonInput" placeholder="Type in your Pokemon" />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
