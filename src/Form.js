import React from "react";
import "regenerator-runtime/runtime";

var Pokedex = require("pokedex-promise-v2");
var MyPokedex = new Pokedex();

const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let pokemon = document.getElementById("pokemonInput").value;
        MyPokedex.getPokemonByName(pokemon) // with Promise
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log("There was an ERROR: ", error);
          });
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
