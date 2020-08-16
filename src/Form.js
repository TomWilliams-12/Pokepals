import React, { setState, useState, Component } from "react";
import "regenerator-runtime/runtime";
import Results from "./Results";
import Pokemon from "./Pokemon";
import { render } from "react-dom";

var Pokedex = require("pokedex-promise-v2");
var MyPokedex = new Pokedex();

const Form = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPokemon = () => {
    if (search === "") {
      alert("you need to search for a pokemon");
    } else {
      MyPokedex.getPokemonByName(search) // with Promise
        .then((response) => {
          setPokemon(response);
          console.log(response);
        })
        .catch((error) => {
          console.log("There was an ERROR: ", error);
          alert("this pokemon doesnt exist");
        });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchPokemon();
      }}
    >
      <label htmlFor="pokemonInput">
        <input
          onChange={(e) => setSearch(e.target.value)}
          id="pokemonInput"
          placeholder="Type in your Pokemon"
        />
      </label>
      <input type="submit" value="Submit" />
      <Pokemon pokemon={pokemon} />
    </form>
  );
};

export default Form;
